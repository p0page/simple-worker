import * as _ from './utils'
import { stringify } from './stringify'
import { createWorker } from './createWorker'

class SimpleWorker {

  worker: Worker

  private objURL: string

  constructor (fn: Function) {
    if (!('Worker' in window))  {
      console.error('This browser does not support Worker.')
      return
    }
    if (!(URL && URL.createObjectURL)) {
      console.error('This browser does not have createObjectURL method.')
      return
    }
    if (!_.isFunction(fn)) {
      return
    }

    const fnString = stringify(fn)
    const { worker, objURL } = createWorker(fnString)
    this.worker = worker
    this.objURL = objURL
  }

  run (...args: Array<any>): Promise<any> {
    const worker = this.worker
    return new Promise((resolve, reject) => {
      worker.onmessage = event => {
        resolve(event.data)
      }
      worker.onerror = event => {
        reject(event.error)
      }

      worker.postMessage(args)
    })
  }

  distory () {
    this.worker.terminate()
    URL.revokeObjectURL(this.objURL)
    this.objURL = null
    this.worker = null
  }

}

export default SimpleWorker