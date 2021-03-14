let page = [1, 3, 0, 3, 5, 6, 3]
let fifo = []
max_length = 3
    // fifo.length = max_length
misscount = 0

for (let i = 0; i < page.length; i++) {
    if (fifo.includes(page[i])) {
        console.log(page[i] + " hit")
    } else {
        misscount++;
        console.log(page[i] + " miss")
        if (fifo.length >= max_length) {
            // console.log(fifo.shift() + " was removed")
            fifo.shift()
            fifo.push(page[i])
        } else {
            fifo.push(page[i])
        }
        // console.log(fifo.length + " fifo length")
    }
    console.log(fifo)
}
console.log("page fault= " + misscount)