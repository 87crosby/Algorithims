arr = [1,87,5,9,2,6,3,14,12,47,53,22]

def bubble_sort(lst):
    while lst != sorted(lst):
        for i in range(len(lst)-1):
            if lst[i] > lst[i+1]:
                lst[i],lst[i+1] = lst[i+1],lst[i]
    return(lst)

print(bubble_sort(arr))