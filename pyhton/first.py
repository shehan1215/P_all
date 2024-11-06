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

# def findGrade(marks, subjects = "unknown"):
#     if marks < 35:
#         print("You are fail for",": ",subjects)
#     elif marks >= 35 and marks < 54:
#         print("Your grade is S for ", ": ", subjects)
#     elif marks >=55 and marks < 64:
#         print("Your Grade is C for ", ": ", subjects)
#     elif marks >=65 and marks < 74:
#         print("Your Grade is B for ",subjects)
#     else:
#         print("Your Grade is A for", subjects)
        
# marksList = {
#     65:"Science",
#     56:"Maths",
#     78:"English",
#     12:"History",
#     36:"Art" 
# } 
  
# for i,x in marksList.items():
#     print("=============================")
#     print(findGrade(i,x))


# ====================================================================
# packed args and keyword arguments

# def formDetails(**params):
# ### def formDetails(*values,**params):
# ###     print(values)
#     if "country" not in params:
#         print("Error")
#     else:
#         print("hello ",params["name"])
        
# formDetails(name="shehan", age=24, city="gampaha") 
# formDetails(name="shan", age=44, city="gampaha", country="Sri lanka")

# def getTheTotal(*marks):
#     print(type(marks))
#     total = 0
#     for i in marks:
#         total += i
#     print(total)
# getTheTotal(23, 45, 54)

# ========================= Comprehension ===========================

# def odd_numbers(number):
#     return "odd" if number % 2 == 1 else "even"

# a = [12, 23, 21, 34, 33, 11]
# b = []
# b = [odd_numbers(i) for i in a]

# print(a)
# print(b)


# Generators =====================

# def get_odd_numbers(limit):
#     for i in range(0,limit):
#         if i % 2 == 1:
#             print("odd", i)
#             yield i

# print("Starting point")
# x = get_odd_numbers(8)
# print("end point")
# for i in x:
#     print("loop",i)
# print("*" * 20)
 
# x = get_odd_numbers(5)
# for i in x:
#     print("loop", i)
# print(x)


# file i/o ==================================

# file = open("data.txt")

# while True:
#     contents = file.read()
#     if not contents:
#         break   
#     print(contents)



# for i,line in enumerate(file):
#     print(i,line)

# file.close()



# file = open("data.txt", "w")

# x = [str(i) for i in range(0,20)]
# msg = ','.join(x)
# file.write(msg)
# file.close()

# file = open("data.txt", "a")

# x = [str(i) for i in range(20,25)]
# msg = '\n'.join(x)
# file.write("\n")
# file.write(msg)
# file.close()

"""
so we can use with keyword then we dont use the close() method after file open. therefore,

with open("data.txt", "a") as file:
x = [str(i) for i in range(20,25)]
msg = '\n'.join(x)
file.write("\n")
file.write(msg)

"""


# userInput = input("Enter the number \n")
# convrt = int(userInput)
# print(convrt)

# if convrt % 2 == 1:
#     print("Weird")
# else:
#     print("you are correct")
    
# OOP ============================
class myCar:
    x = 34
    
obj1 = myCar()
print(obj1.x)