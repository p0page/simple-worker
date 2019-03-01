import run from './run'

const createWrapper = (): Object => {
  if (! ('Worker' in window))  {
    console.error('This browser does not support Worker.')
    return null
  }
  if (! (URL && URL.createObjectURL)) {
    console.error('This browser does not have createObjectURL method.')
    return null
  }
  return { run }
}

const workerWrapper = createWrapper()

export default workerWrapper