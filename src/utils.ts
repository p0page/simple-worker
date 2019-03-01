const isType = (type: string): Function => {
  return (val: any): Boolean => {
    const tag = Object.prototype.toString.call(val)
    return tag === `[object ${type}]`
  }
}

export const isObject = (val: any): Boolean => {
  const type = typeof val
  return val !== null && (type === 'object' || type === 'function')
}

export const isArray = (val: any): Boolean => {
  const type = typeof val
  return (Array.isArray && Array.isArray(val)) || (isType('Array'))(val)
}

//创建一个worker
export function createWorker (content: string): { worker: Worker, objURL: string } {
  const blob = new Blob([ content ], { type: 'application/javascript' })
  const objURL: string = URL.createObjectURL(blob)
  const worker = new Worker(objURL)
  return { worker, objURL}
}

//生成worker中的内容
export const makeContent = (work: Function) =>
`self.onmessage = function (event) {
  var args = event.data.args || []
  self.postMessage((${work}).apply(null, args))
}`
