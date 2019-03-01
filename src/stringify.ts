// 将函数转换成字符串
export const stringify = (fn: Function): string =>
`self.onmessage = function (event) {
  var args = event.data || []
  self.postMessage((${fn}).apply(null, args))
}`
