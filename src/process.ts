export function process (worker: Worker, subs: Object) {
  worker.onmessage = event => {
    const data = event.data
    const id = data && data.id
    if (id && subs[id]) {
      subs[id][0](data.result)
      delete subs[id]
    }
  }
  worker.onerror = event => {
    Object.keys(subs).forEach(key => {
      subs[key][1](event)
      delete subs[key]
    })
  }
}