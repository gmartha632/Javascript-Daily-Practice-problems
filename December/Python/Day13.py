def add(a, b):
    return a + b

result = eval('add(5, 7)')
print(result)  # Output: 12



x = 10
result = eval('x * 2')
print(result)  # Output: 20






globals_dict = {'x': 10}
locals_dict = {'y': 5}

result = eval('x + y', globals_dict, locals_dict)
print(result)  # Output: 15


#program to count word freuency in a sentence

def printWordCount (sentence, wordInput):
    words = sentence.split()
    word_count = {}
    
    for word in words :
        if word in word_count:
            word_count[word] += 1
        else:
            word_count[word] += 1
    

sentence = 'python is fun and python is easy'
wordInput = 'python'

printWordCount(sentence, wordInput)

#write code here to print the freqeuncy of the wordInput which is passed to the function   

#program to check if an element exists in a tuple

def checkFruitAvailability(fruits , search_fruit):
    fruits = friuts.split()
    
        for x in fruits:
            if(fruits == search_fruit)
                print(f"{search_fruit} is available")
                
            
        
            else:
                print(f"{search_fruit} is not available")

fruit = ("apple" , "banana" , "cherry" , "date")
search_fruit = 'banana'
checkFruitAvailability() 


# students = ["Alice","Bob" , "Charlie"]
# grades = {"Alice":85  ,"Bob" :90 , "Charlie" : 78}
