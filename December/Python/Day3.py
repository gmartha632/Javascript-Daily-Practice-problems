#Difference between product and sum of digits

def diffProductSumOfDigits(n):
    prod = 1
    sum = 0
    num = n
    while num > 0:
        digit = num % 10
        num = int(num / 10)
        prod = prod * digit
        sum = sum + digit

    print((prod - sum))


diffProductSumOfDigits(145)
diffProductSumOfDigits(1738)


# Simple intrest


def calculate_simple_interest(principal, rate, time):
    interest = (principal * rate * time) / 100
    print(interest)


# Factorial
def factorial(n):
    fact = 1
    for i in range(1, n + 1):
        fact = fact * i

    print(fact)
factorial(5)

# Maximum in an array
def maxInArray(arr):
    if arr is None:
        print("")
        return
    if len(arr) == 0:
        print("")
        return
    
    max = arr[0]
    for i in range(1, len(arr)):
        if(max < arr[i]):
            max = arr[i]
    
    print(max)
    
maxInArray([1,2,3,7,5])    
