def insert(file,files):
    check=files[file[1]:file[1]+file[2]]
    check2=[0 for i in range(len(check))]
    if file[1]>len(files) or (file[1]+file[2]>len(files)):
        print("file will not be allocated")
        return
    for i in range(file[1],file[1]+file[2]):
        if check2 != check:
            print("file is not allocated")
            break
        else:
            files[i]=file[0]

files=[0 for i in range(50)]
print(files)

file1 = ["cat",5,2]
file2 = ["book",50,5]
file3 = ["panzer iv H", 25,15]

insert(file1,files)
insert(file2,files)
insert(file3,files)

print(files)