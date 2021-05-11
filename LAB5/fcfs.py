import random

tracks_size=200
# head = random.randint(0,tracks_size)
head = 55
travel=0
path=[93,176,42,148,27,14,180]
print()
print("head start at", head)
for i in path:
    print("from head", head, "to track", i)
    print("head traveled",abs(i-head), "tracks")
    travel+= abs(i-head)
    head=i
    print()

print()
print("total seek time :",travel,"ms")
print("average seek time:",round(travel/len(path),4),"ms")
