# x = [12,23,43,12]
# x.append(100)
# print(x)
# x.insert(3,500)
# print(x)
# y = [21,0,90,45]
# z = x + y
# x.pop(2)
# print(z)
# z.remove(23)
# print("### After Remove the 23: ", z)
# print(z)
# # is_in_the_list = 90 in z

# if(120 in z):
#     print("this value is in the list")
# else:
#     print("this value is not included")


# Use the dictionaries. Therefore, we can iniate by using the { }

# x = {
#     'a':["hello","good morning"],
#     'b':["bye","good night"],
#     'c':29,
# }
# y = x['b']
# y.append("have a nice day")
# print(x)

# z = x['c']
# z = 21
# print(z)
# _get = x.get("a")
# print(_get)
# del x['c']
# print(x)

# ========================================

# x = [12,21,567,123,88]

# max = x[0]
# for i in x:
#     if max < i:
#         max = i

# print('max is: ', max)  

# items = [23,32,34,12,56,25]      

# max1 = items[0]

# for i in items:
#     if i > max1:
#         max1 = i

# print("second max is: ", max1)

# =====================================================
# functions and arguments



def findGrade(marks, subjects = "unknown"):
    if marks < 35:
        print("You are fail",": ",subjects)
    elif marks >= 35 and marks < 54:
        print("Your grade is: S", ": ", subjects)
    elif marks >=55 and marks < 64:
        print("Your Grade is: C", ": ", subjects)
    elif marks >=65 and marks < 74:
        print("Your Grade is: B",subjects)
    else:
        print("Your Grade is: A", subjects)
        
        

findGrade(75,"English")