#Leap Year
 
def Leapyear(input):
    if (input % 400 == 0):
        print("It is a Leap Year")
    elif (input % 4 == 0 and input % 100 != 0):
        print("It is a Leap Year")
    else :
        print("It is not a Leap Year")        

"""input = int(input("Enter year : ")) """
Leapyear(2025)  


# Maximum Between 3 numbers

def MaxOfThreeNumers(a,b,c):
    if(a > b and a > c):
        print("A is Greatest")
    elif( b > a and b > c):
        print("b is Greatest") 
    elif(c > a and c > b):
        print("C is Greatest")  
MaxOfThreeNumers(3,5,7)  

#  SumNumbers
def SumNumbers(num):
    i = 1
    sum = 0
    while i <= num:
        sum += i
        i += 1
    print(sum) 
SumNumbers(5)        
    
# Grade calculator
def gradeCalculator(mark):
    # 90 and above grade A
    if mark >= 90:
        print("A")
    elif mark >= 80 and mark < 90:
        print("B")
    elif mark >= 70 and mark < 80:
        print ("C")
    elif mark >=50 and mark < 70:
        print ("D")
    else:
        print("E")

# mark = int(input("Enter your marks:"))
gradeCalculator(75)  


x = 5.9
print(type(x))

num = "6.0"
print(type(float(num)))

#Operators
a = 10
b = 5
#addition
result = a + b
#subraction
result = a - b
#division 
result = a /  b
#multiplication
result = a * b
# Modulo reminder operator
result = a % b

#Age for voting

age = 16

if age < 18:
    print("Not eligible to vote")
else:  
    print("Eligible to vote")  

    