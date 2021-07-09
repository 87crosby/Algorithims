# [1,3,4,5,6,10,11]
# ["1","3-6","10-11"]
# "1, 3-6, 10-11"


lst = [1,3,4,5,6,10,11]
new_lst=[]
lst.append(12312)
for i in range(0,len(lst)):
    try:
        if lst[i] + 1 != lst[i + 1]:
            new_lst.append(lst[i])
    except:pass
lst.pop()
lst.insert(0,-123)
for i in range(len(lst),0,-1):
    try:
        if lst[i] - 1 != lst[i-1]:
            new_lst.append(lst[i])
    except: pass

print(sorted(new_lst))

def chunks(lst, n):
    """Yield successive n-sized chunks from lst."""
    for i in range(0, len(lst), n):
        yield lst[i:i + n]

lst1 = [i for i in chunks(sorted(new_lst),2)]
print(lst1)

set_lst = [{j for j in i} for i in lst1]
print(set_lst)
unset_lst= [[j for j in i] for i in set_lst]
print(unset_lst)
str_lst = []
for i in unset_lst:
    if len(i) == 1:
        str_lst.append(str(i[0]))
    else:
        str_lst.append(f"{i[0]} - {i[1]}")
print(str_lst)

final = ", ".join(str_lst)
print(final)


