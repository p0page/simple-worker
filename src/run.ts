import { createWorker, makeContent } from './utils'

const run = (fn: Function, args: Array<any>): Promise<any> => {
  return new Promise((resolve, reject) => {
    const WorkerContent: string = makeContent(fn)
    const { worker, objURL } = createWorker(WorkerContent)
    worker.onmessage = (event) => {
      resolve(event.data)
      worker.terminate()
      URL.revokeObjectURL(objURL)
    }
    worker.onerror = (event) => {
      reject(event.error)
      worker.terminate()
      URL.revokeObjectURL(objURL)
    }
    worker.postMessage({
      args: args
    })
  })
}

export default run