from queue import Queue


def swap(job_list, i, j):
    for idx in range(0, 6):
        job_list[idx][i], job_list[idx][j] = job_list[idx][j], job_list[idx][i]


def sort_arrival_times(job_list):
    for i in range(len(job_list[0])):
        for j in range(len(job_list[0])):
            if i == j:
                continue
            elif job_list[2][i] < job_list[2][j]:
                swap(job_list, i, j)

def print_time():
    print("Job Number      Burst Time      Arrival Time    Waiting Time    Turaround Time  ")
    for a in range(job_number):
        for b in range(0, 6):
            if (b == 3):
                continue
            print(array[b][a], end="\t\t")
        print()


def round_robin():
    burst_time = array[1].copy()
    not_yet_queue = array[0].copy()
    time_quantum = 3  # Suppose its 3 unit
    t = 0
    q = Queue()

    while burst_time != [0]*job_number:
        for i in range(job_number):
            # Check arrival time
            if (t+time_quantum >= array[2][i] and i+1 in not_yet_queue):
                q.put(i)
                not_yet_queue.remove(i+1)
        index = q.get()
        check=True
        while check==True:
            if burst_time[index] > time_quantum:
                t += time_quantum
                burst_time[index] -= time_quantum
                q.put(index)
                check=False
            elif t>=array[2][index]:
                t += burst_time[index]
                burst_time[index] = 0
                array[3][index] = t  # Completion time
                array[5][index] = t - array[2][index]  # Turnaround time
                array[4][index] = array[5][index] - array[1][index]  # Waiting time
                check=False
            else:
                t+=1


# job_number = int(input("Enter number of jobs: "))
job_number=5
array = [[0 for j in range(job_number)]
         for i in range(6)]  # Initialize 2D Array
array[0] = [number for number in range(1, job_number+1)]
array[1] = [6, 2, 8, 3, 4]
array[2] = [2, 5, 1, 0, 4]

# array[1] = [int(time) for time in input("Enter burst time: ").split()]
# array[2] = [int(time) for time in input("Enter arrival time: ").split()]
print(array)
print_time()
sort_arrival_times(array)
round_robin()
print("Final Result: ")
print_time()
print("Average waiting time = ", (sum(array[4])/job_number), end="s\n")
print("Average turnaround time = ", (sum(array[5])/job_number), end="s\n")