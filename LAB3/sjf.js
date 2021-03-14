// class job{

//     constructor(burst,arrival){
//     var burst,arrival
//     this.burst=burst
//     this.arrival=arrival
//     }
//     method_getburst(){
//         return this.burst
//     }
//     method_getarrival(){
//         return this.arrival
//     }
// }

// let job_list=[new job(6,2),new job(2,5),new job(8,1),new job(3,0),new job(4,4)]

let job_list = [
        [1, 3, 2],
        [2, 4, 0],
        [3, 2, 4],
        [4, 4, 5],
    ] //id,burst time,arrival time
    // function swap(a,b){
    //     let temp=a
    //     a=b
    //     b=temp
    // }
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

function complete_time(number, list) {
    var temp, value
    list[0].push(list[0][2] + list[0][1])
    list[0].push(list[0][3] - list[0][2])
    list[0].push(list[0][4] - list[0][1])
    console.log(list[0])
    for (let i = 1; i < number; i++) {
        temp = list[i - 1][3]
        let low = list[i][1]
        for (let j = i; j < number; j++) {
            if (temp >= list[j][2] && low >= list[j][1]) {
                low = list[j][1]
                value = j
            }
        }
        list[value].push(temp + list[value][1])
        list[value].push(list[value][3] - list[value][2])
        list[value].push(list[value][4] - list[value][1])

        temp = list[value]
        list[value] = list[i]
        list[i] = temp
    }
    return list
}
job_list = arrange_arrival(job_list.length, job_list)
console.log(job_list)
let sjf = complete_time(job_list.length, job_list)

console.log("ID\t Burst time\t Arrival time\t waiting time\t turnaround time")
for (let i = 0; i < sjf.length; i++) {
    console.log(sjf[i][0] + "\t " + sjf[i][1] + "\t\t " + sjf[i][2] + "\t\t " + sjf[i][5] + "\t\t " + sjf[i][4])
}