const worker = new Worker(new URL('./work.js', import.meta.url))

worker.postMessage({
    question: "hi, how many the luck num today?"
})

worker.onmessage = message => console.log(message.data.answer)