// 将函数转换成字符串
export const stringify = (fn: Function): string =>
`self.onmessage = function (event) {
  var args = event.data.args || []
  var id = event.data.id
  var result = (${fn}).apply(null, args)
  self.postMessage({id: id, result: result})
}`
