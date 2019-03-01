const isType = (type: string, val: any): Boolean => {
  return Object.prototype.toString.call(val) === `[object ${type}]`
}

export const isObject = (val: any): Boolean => {
  const type = typeof val
  return val !== null && (type === 'object' || type === 'function')
}

export const isArray = (val: any): Boolean => {
  return (Array.isArray && Array.isArray(val)) || isType('Array', val)
}

export const isFunction = (val: any): Boolean => {
  const type = typeof val
  return type === 'function'
}

export const isString = (val: any): Boolean => {
  const type = typeof val
  return type === 'string' || isType('String', val)
}
