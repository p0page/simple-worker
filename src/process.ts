export function process (worker: Worker, subs: Object) {
  worker.onmessage = event => {
    const data = event.data
    const id = data && data.id
    if (id && subs[id]) {
      subs[id]['resolve'](data.result)
      delete subs[id]
    }
  }
  worker.onerror = event => {
    Object.keys(subs).forEach(key => {
      subs[key]['reject'](event)
      delete subs[key]
    })
  }
}