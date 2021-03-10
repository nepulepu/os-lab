let memblock = [100, 500, 200, 300, 600];
let proccessize = [212, 417, 112, 426];

console.log("Process No. \tProcess Size \tBlock no.");
let placement = firstfit(proccessize, memblock);

for (i = 0; i < proccessize.length; i++) {
    console.log(i + " \t\t" + proccessize[i] + " \t\t" + placement[i])
}


function firstfit(process, block) {
    let allocate = []
    for (i = 0; i < process.length; i++) {
        let checker = 0
        for (j = 0; j < block.length; j++) {
            // console.log(block[j])
            if (process[i] < block[j]) {
                allocate.push(j + 1)
                block[j] -= process[i];
                checker = 1
                break
            }
        }
        if (checker == 0) {
            allocate.push("not allocated")
        }

    }

    return allocate
}