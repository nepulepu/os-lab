let memblock = [100, 500, 200, 300, 600];
let proccessize = [212, 417, 112, 426];

console.log("Process No. \tProcess Size \tBlock no.");
let placement = besfit(proccessize, memblock);

for (i = 0; i < proccessize.length; i++) {
    console.log(i + " \t\t" + proccessize[i] + " \t\t" + placement[i])
}


function besfit(process, block) {
    let allocate = []
    for (i = 0; i < process.length; i++) {
        mark = -1
        for (j = 0; j < block.length; j++) {
            // console.log(j);
            // console.log(process[i])
            // console.log(block[j])
            if (process[i] < block[j]) {
                if (mark == -1) {
                    mark = j;
                } else if (block[j] < block[mark]) {
                    mark = j
                }
            }
        }
        if (mark != -1) {
            allocate.push(mark + 1)
            block[mark] -= process[i];
        } else {
            allocate.push("not allocated")
        }
    }
    return allocate
}