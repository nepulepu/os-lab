def insert(file,files):
    for i in range(file[1],file[1]+file[2]):
        files[i]=file[0]

files=[0 for i in range(50)]
print(files)

file1 = ["cat",5,2]
file2 = ["book",10,5]
file3 = ["panzer iv H", 25,15]

insert(file1,files)
insert(file2,files)
insert(file3,files)

print(files)