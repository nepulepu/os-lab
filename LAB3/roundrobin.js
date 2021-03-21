let job_list = [
    [1, 3, 2],
    [2, 4, 0],
    [3, 2, 4],
    [4, 4, 5],
]

function arrange_arrival(number, list) {
    for (let i = 0; i < number; i++) {
        for (let j = 0; j < number - i - 1; j++) {
            if (list[j][2] > list[j + 1][2]) {
                let temp = list[j]
                list[j] = list[j + 1]
                list[j + 1] = temp
            }
        }
    }
    return list
}