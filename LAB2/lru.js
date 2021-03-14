let page = [1, 3, 0, 3, 5, 6, 3]
let lru = []
max_length = 3
misscount = 0

for (let i = 0; i < page.length; i++) {
    if (lru.includes(page[i])) {
        lru.splice(lru.indexOf(page[i]), 1)
        lru.push(page[i]);
        console.log(page[i] + " hit")
    } else {
        misscount++;
        console.log(page[i] + " miss")
        if (lru.length >= max_length) {
            // console.log(fifo.shift() + " was removed")
            lru.shift()
            lru.push(page[i])
        } else {
            lru.push(page[i])
        }
        // console.log(fifo.length + " fifo length")
    }
    console.log(lru)
}