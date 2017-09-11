const book = [
    "aaa",
    "bbb",
    "ccc",
    "ddd"
]

for (let aPage of book){
    console.log(aPage)
}

console.log('iterator no baai')

// const it = book.values()
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())

const it = book[Symbol.iterator]()
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
