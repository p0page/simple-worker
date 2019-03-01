export function createWorker (fnString: string): { worker: Worker, objURL: string } {
  const blob = new Blob([ fnString ], { type: 'application/javascript' })
  const objURL: string = URL.createObjectURL(blob)
  const worker = new Worker(objURL)
  return { worker, objURL }
}
