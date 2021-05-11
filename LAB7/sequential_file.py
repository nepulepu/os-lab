def insert(file,files):
    if (file[2]<0 or file[1]<0):
        print()
        print(file[0]+" size cannot be negative")
        print()

    check=files[file[1]:file[1]+file[2]]
    check2=[None for i in range(len(check))]
    if file[1]>len(files) or (file[1]+file[2]>len(files)):
        print()
        print("file \""+ file[0]+"\" will not be allocated")
        print()
        return
    for i in range(file[1],file[1]+file[2]):
        if check!=check2:
            print()
            print("file \""+ file[0]+"\" will not be allocated")
            print()
            break
        else:
            files[i]=file[0]

files=[None for i in range(50)]

print()
print("before:")
print(files)
print()
file1 = ["cat",0,2]
file2 = ["book",45,5]
file3 = ["car", 5,15]

insert(file1,files)
insert(file2,files)
insert(file3,files)

print("after:")
print(files)
print()