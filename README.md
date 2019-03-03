# Simple Worker

本项目提供了一种更加简洁的使用 `Web Worker` 的方式，在不需要额外文件的前提下，创建一个 `worker` ，并通过 `Promise` 的方式获取计算的结果。

## 使用

```
const worker = new SimpleWorker((a, b) => a + b)

worker.run(1, 2).then(res => {
    console.log(res) // 3
})
```