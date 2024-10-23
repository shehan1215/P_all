x = [12,23,43,12]
x.append(100)
print(x)
x.insert(3,500)
print(x)
y = [21,0,90,45]
z = x + y
x.pop(2)
print(z)
z.remove(23)
print("### After Remove the 23: ", z)
print(z)
# is_in_the_list = 90 in z

if(120 in z):
    print("this value is in the list")
else:
    print("this value is not included")



