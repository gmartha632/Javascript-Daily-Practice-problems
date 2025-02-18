#In the print() function, you output multiple variables, separated by a comma:
x = "Python"
y = "is"
z = "awesome"
print(x, y, z)


x = "Python "
y = "is "
z = "Good"
print(x + y + z)


x = "intresting"

def myfunc():
  print("Python is " + x)

myfunc()


#strip method
a = " Hello, World! "
print(a.strip()) # returns "Hello, World!"


#split method
a = "Hello, World!"
print(a.split(",")) # returns ['Hello', ' World!']

num=145
num = int(num / 10)
print(num)


#Fahrenheit
a= int(input())
Celsius = float(a)
Fahrenheit = (9/5)*Celsius + 32
print(Fahrenheit)

#Leap Year
def leapYear(year):
    #Enter your code here
    if(year % 400 == 0):
        print("Leap Year")
    elif(year % 4 == 0 and year % 100 != 0):
        print("Leap Year")
    else:
        print("Not a Leap Year")
leapYear(1504)   



# FizzBuzz 
def fizzBuzz(num):
    if(num % 3 == 0 and num % 5 == 0):
        print("FizzBuzz")
    elif(num % 3 == 0):
        print("Fizz")
    elif(num % 5 ==0):
        print("Buzz")
    else:
        print(num)    
        
#Maximum of three numbers
def maxInThree(a,b,c):
    
    if(a > b and a > c):
        print(a)
    elif(b > a and b > c):
        print(b)
    else:
        print(c) 
maxInThree(3,5,7)                


f = open('day9.py','r') 