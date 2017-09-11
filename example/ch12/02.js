class Log {
    constructor(){
        this.messages = []
    }
    add(message){
        const now = Date.now()
        console.log(`ログ追加： ${message} (${now})`)
        this.messages.push({message, timestamp: now})
    }

    [Symbol.iterator]() {
        return this.messages[Symbol.iterator]()
    }}

const log = new Log()
log.add("aaaaaaaaa")

setTimeout(() => {log.add("bbbbbb")}, 3*1000)
setTimeout(() => {log.add("cccccc")}, 4*1000)

setTimeout(() => {
    console.log(`-- ${new Date()}`)
    for(let entry of log){
        const date = new Date(entry.timestamp)
        console.log(`${entry.message} (${date})`)
    }
}, 5*1000)

