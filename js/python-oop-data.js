/**
 * Python OOP & Top 30 Interview Questions Data
 * Source: KN Academy - ALL MNC & Python OOP Collection
 */
const PYTHON_OOP_DATA = {
  concepts: [
    {
      id: 'class-and-object',
      title: 'Class and Object in Python',
      icon: 'ri-shapes-line',
      color: '#3b82f6',
      summary: 'Classes act as blueprints while objects are instances containing real values and behaviors.',
      sections: [
        {
          heading: 'In Object-Oriented Programming (OOP)',
          content: 'A class is a blueprint for creating objects, while an object is an instance of a class. Python uses classes to encapsulate data and methods that operate on the data.'
        },
        {
          heading: '1. Definition of Class and Object',
          bullets: [
            '<strong>Class:</strong> A template or blueprint that defines attributes (variables) and behaviors (methods) of objects.',
            '<strong>Object:</strong> An instance of a class that has real values assigned to the attributes.'
          ]
        },
        {
          heading: '2. Syntax of a Class in Python',
          code: `class ClassName:
    # Constructor method to initialize attributes
    def __init__(self, parameter1, parameter2):
        self.attribute1 = parameter1
        self.attribute2 = parameter2

    # Method (Function) inside class
    def display(self):
        print("Attribute 1:", self.attribute1)
        print("Attribute 2:", self.attribute2)

# Creating an Object
object_name = ClassName(value1, value2)

# Calling a Method
object_name.display()`
        },
        {
          heading: '3. Example of Class and Object Implementation',
          code: `class Car:
    # Constructor method to initialize object properties
    def __init__(self, brand, model, year):
        self.brand = brand  # Attribute 1
        self.model = model  # Attribute 2
        self.year = year    # Attribute 3

    # Method to display car details
    def show_details(self):
        print(f"Car Brand: {self.brand}")
        print(f"Car Model: {self.model}")
        print(f"Manufacturing Year: {self.year}")

# Creating objects of class Car
car1 = Car("Toyota", "Camry", 2022)
car2 = Car("Honda", "Civic", 2021)

# Calling methods using objects
car1.show_details()
print()  # Blank line for better readability
car2.show_details()`,
          output: `Car Brand: Toyota
Car Model: Camry
Manufacturing Year: 2022

Car Brand: Honda
Car Model: Civic
Manufacturing Year: 2021`
        },
        {
          heading: '4. Explanation of the Example',
          bullets: [
            '<code>class Car:</code> &rarr; Defines a class named Car.',
            '<code>def __init__(self, brand, model, year):</code> &rarr; Constructor method that initializes object attributes.',
            '<code>self.brand = brand</code> &rarr; Assigns values to the object.',
            '<code>def show_details(self):</code> &rarr; Method to display object details.',
            '<code>car1 = Car("Toyota", "Camry", 2022)</code> &rarr; Creating an object car1.',
            '<code>car1.show_details()</code> &rarr; Calls the method to print car details.'
          ]
        }
      ]
    },
    {
      id: 'encapsulation',
      title: 'Encapsulation and Access Modifiers',
      icon: 'ri-shield-keyhole-line',
      color: '#10b981',
      summary: 'Restricting direct access to data components using Public, Protected, and Private access modifiers.',
      sections: [
        {
          heading: '1. Encapsulation in Python',
          content: 'Encapsulation is one of the fundamental principles of Object-Oriented Programming (OOP). It refers to bundling the data (variables) and methods (functions) into a single unit (class) while restricting direct access to some details.',
          bullets: [
            '<strong>Data Hiding:</strong> Protects data from unintended modification.',
            '<strong>Improves Security:</strong> Restricts access to specific data.',
            '<strong>Code Flexibility & Maintainability:</strong> Methods control how data is modified.'
          ]
        },
        {
          heading: '2. Access Modifiers in Python',
          content: 'Python has three types of access modifiers:',
          bullets: [
            '<strong>Public (public):</strong> Accessible anywhere (e.g. <code>self.variable</code>).',
            '<strong>Protected (_protected):</strong> Accessible within the class and subclasses (e.g. <code>self._variable</code>).',
            '<strong>Private (__private):</strong> Accessible only within the class using name mangling (e.g. <code>self.__variable</code>).'
          ]
        },
        {
          heading: '3. Example of Encapsulation with Access Modifiers',
          code: `class BankAccount:
    def __init__(self, account_number, balance):
        self.account_number = account_number  # Public attribute
        self._account_type = "Savings"        # Protected attribute
        self.__balance = balance              # Private attribute

    # Public method to display account details
    def display_info(self):
        print(f"Account Number: {self.account_number}")
        print(f"Account Type: {self._account_type}")
        print(f"Balance: $" + str(self.__balance))

    # Private method (Accessible only inside the class)
    def __update_balance(self, amount):
        self.__balance += amount

    # Public method to deposit money (Uses private method)
    def deposit(self, amount):
        if amount > 0:
            self.__update_balance(amount)
            print(f"Deposited: $" + str(amount))
        else:
            print("Invalid deposit amount!")

# Creating an object of BankAccount
account = BankAccount("12345678", 1000)

# Accessing Public Attribute
print("Public Attribute:", account.account_number)  # Works

# Accessing Protected Attribute (Not recommended but possible)
print("Protected Attribute:", account._account_type)  # Works but should be accessed carefully

# Accessing Private Attribute (Will cause an error)
# print("Private Attribute:", account.__balance) # AttributeError

# Accessing Private Attribute using name mangling
print("Private Attribute (Using Name Mangling):", account._BankAccount__balance)  # Works

# Calling Public Method
account.display_info()

# Calling Public Method that uses Private Method
account.deposit(500)`,
          output: `Public Attribute: 12345678
Protected Attribute: Savings
Private Attribute (Using Name Mangling): 1000
Account Number: 12345678
Account Type: Savings
Balance: $1000
Deposited: $500`
        },
        {
          heading: '4. Explanation of Access Modifiers',
          table: {
            headers: ['Modifier', 'Syntax', 'Accessibility'],
            rows: [
              ['Public', 'self.variable', 'Accessible from anywhere'],
              ['Protected', 'self._variable', 'Should be accessed only within the class and subclasses'],
              ['Private', 'self.__variable', 'Cannot be accessed directly outside the class (Uses name mangling: _ClassName__variable)']
            ]
          }
        }
      ]
    },
    {
      id: 'inheritance',
      title: 'Inheritance in Python (5 Types)',
      icon: 'ri-git-merge-line',
      color: '#8b5cf6',
      summary: 'Code reusability through Single, Multiple, Multilevel, Hierarchical, and Hybrid inheritance.',
      sections: [
        {
          heading: '1. What is Inheritance?',
          content: 'Inheritance is one of the fundamental concepts of Object-Oriented Programming (OOP). It allows a class (child class) to inherit attributes and methods from another class (parent class). This helps in code reusability and reducing redundancy.'
        },
        {
          heading: '2. 5 Types of Inheritance in Python',
          bullets: [
            '<strong>1. Single Inheritance:</strong> One child class inherits from one parent class.',
            '<strong>2. Multiple Inheritance:</strong> A child class inherits from multiple parent classes.',
            '<strong>3. Multilevel Inheritance:</strong> A class inherits from another class, which in turn inherits from another class.',
            '<strong>4. Hierarchical Inheritance:</strong> Multiple child classes inherit from a single parent class.',
            '<strong>5. Hybrid Inheritance:</strong> A combination of multiple types of inheritance.'
          ]
        },
        {
          heading: '(A) Single Inheritance',
          code: `# Parent Class
class Animal:
    def make_sound(self):
        print("Animal makes a sound")

# Child Class (Inheriting from Animal)
class Dog(Animal):
    def bark(self):
        print("Dog barks!")

# Creating an object of Dog
dog = Dog()
dog.make_sound()  # Inherited method from Animal class
dog.bark()        # Method of Dog class`,
          output: `Animal makes a sound
Dog barks!`
        },
        {
          heading: '(B) Multiple Inheritance',
          code: `# Parent Class 1
class Engine:
    def start(self):
        print("Engine started")

# Parent Class 2
class Wheels:
    def rotate(self):
        print("Wheels are rotating")

# Child Class (Inheriting from both Engine and Wheels)
class Car(Engine, Wheels):
    def drive(self):
        print("Car is moving")

# Creating an object of Car
car = Car()
car.start()   # From Engine class
car.rotate()  # From Wheels class
car.drive()   # From Car class`,
          output: `Engine started
Wheels are rotating
Car is moving`
        },
        {
          heading: '(C) Multilevel Inheritance',
          code: `# Grandparent Class
class LivingBeing:
    def breathe(self):
        print("Breathing...")

# Parent Class (Inheriting from LivingBeing)
class Animal(LivingBeing):
    def eat(self):
        print("Eating...")

# Child Class (Inheriting from Animal)
class Dog(Animal):
    def bark(self):
        print("Barking...")

# Creating an object of Dog
dog = Dog()
dog.breathe()  # From LivingBeing
dog.eat()      # From Animal
dog.bark()     # From Dog`,
          output: `Breathing...
Eating...
Barking...`
        },
        {
          heading: '(D) Hierarchical Inheritance',
          code: `# Parent Class
class Vehicle:
    def move(self):
        print("Vehicle is moving")

# Child Class 1
class Car(Vehicle):
    def drive(self):
        print("Car is driving")

# Child Class 2
class Bike(Vehicle):
    def ride(self):
        print("Bike is riding")

# Creating objects of Car and Bike
car = Car()
bike = Bike()

car.move()   # Inherited from Vehicle
car.drive()  # From Car

bike.move()  # Inherited from Vehicle
bike.ride()  # From Bike`,
          output: `Vehicle is moving
Car is driving
Vehicle is moving
Bike is riding`
        },
        {
          heading: '(E) Hybrid Inheritance',
          content: 'Hybrid inheritance is a mix of multiple types of inheritance.',
          code: `# Parent Class
class A:
    def method_A(self):
        print("Method from class A")

# Child Class 1 (Single Inheritance)
class B(A):
    def method_B(self):
        print("Method from class B")

# Child Class 2 (Hierarchical Inheritance)
class C(A):
    def method_C(self):
        print("Method from class C")

# Child Class 3 (Multiple Inheritance)
class D(B, C):
    def method_D(self):
        print("Method from class D")

# Creating an object of D
obj = D()
obj.method_A()  # Inherited from A
obj.method_B()  # Inherited from B
obj.method_C()  # Inherited from C
obj.method_D()  # From D`,
          output: `Method from class A
Method from class B
Method from class C
Method from class D`
        },
        {
          heading: '5. Method Overriding in Inheritance',
          content: 'If a child class has the same method as the parent class, the child class method overrides the parent\'s method.',
          code: `class Animal:
    def sound(self):
        print("Animals make sound")

class Dog(Animal):
    def sound(self):  # Overriding the parent class method
        print("Dog barks!")

dog = Dog()
dog.sound()  # Calls the overridden method in the child class`,
          output: `Dog barks!`
        },
        {
          heading: '6. super() Function in Inheritance',
          content: 'The super() function allows a child class to access methods of its parent class.',
          code: `class Parent:
    def show(self):
        print("This is the Parent class")

class Child(Parent):
    def show(self):
        super().show()  # Calls the parent class method
        print("This is the Child class")

obj = Child()
obj.show()`,
          output: `This is the Parent class
This is the Child class`
        }
      ]
    },
    {
      id: 'abstraction',
      title: 'Data Abstraction & ABC Module',
      icon: 'ri-eye-off-line',
      color: '#f59e0b',
      summary: 'Hiding internal implementation details using Abstract Base Classes (ABC) and @abstractmethod.',
      sections: [
        {
          heading: 'What is Data Abstraction?',
          content: 'Data Abstraction is an Object-Oriented Programming (OOP) concept that hides the internal implementation of a class and only exposes essential features to the user. It helps in simplifying complex systems by breaking them into smaller, more manageable parts.',
          bullets: [
            '✔ Hides unnecessary details from the user.',
            '✔ Improves code modularity and maintainability.',
            '✔ Protects data from direct modification.',
            '✔ Enhances security and usability.'
          ]
        },
        {
          heading: '2. How is Abstraction Achieved in Python?',
          bullets: [
            '1. <strong>Abstract Classes</strong>: Cannot be instantiated.',
            '2. <strong>Abstract Methods</strong>: Declared without implementation; must be implemented by child classes.',
            '3. <strong>The abc module</strong>: Uses <code>ABC</code> class and <code>@abstractmethod</code> decorator.'
          ]
        },
        {
          heading: '3. Syntax for Abstraction (Vehicle Example)',
          code: `from abc import ABC, abstractmethod  # Importing ABC module

# Abstract Class
class Vehicle(ABC):
    @abstractmethod
    def start(self):
        pass  # Abstract method (must be implemented in child class)

    @abstractmethod
    def stop(self):
        pass  # Abstract method (must be implemented in child class)

# Concrete Class (Inheriting from Vehicle)
class Car(Vehicle):
    def start(self):
        print("Car starts with a key")

    def stop(self):
        print("Car stops when brakes are applied")

# Creating an object of Car
car = Car()
car.start()
car.stop()`,
          output: `Car starts with a key
Car stops when brakes are applied`
        },
        {
          heading: '4. Abstraction Concept Breakdown',
          table: {
            headers: ['Concept', 'Description'],
            rows: [
              ['ABC class', 'Used to define an abstract class.'],
              ['@abstractmethod', 'Used to declare a method as abstract (must be implemented in the child class).'],
              ['Abstract Class (Vehicle)', 'Defines abstract methods start() and stop() but does not implement them.'],
              ['Concrete Class (Car)', 'Inherits Vehicle and provides implementations for start() and stop().'],
              ['Object Creation', 'We create an object of Car, not Vehicle (because Vehicle is abstract).']
            ]
          }
        },
        {
          heading: '5. Real-Life Abstraction Example: ATM Machine',
          code: `from abc import ABC, abstractmethod

# Abstract Class
class ATM(ABC):
    @abstractmethod
    def withdraw(self, amount):
        pass

    @abstractmethod
    def deposit(self, amount):
        pass

# Concrete Class
class BankATM(ATM):
    def withdraw(self, amount):
        print(f"Withdrew $" + str(amount) + " from the ATM")

    def deposit(self, amount):
        print(f"Deposited $" + str(amount) + " into the ATM")

# Creating an object of BankATM
atm = BankATM()
atm.deposit(500)
atm.withdraw(200)`,
          output: `Deposited $500 into the ATM
Withdrew $200 from the ATM`
        }
      ]
    }
  ],

  top30Questions: [
    {
      id: 1,
      category: 'Classes & Objects',
      question: 'What is a class in Python?',
      answer: 'A class is a blueprint for creating objects. It defines attributes and methods.',
      code: `class Car:
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model

    def display(self):
        print(f"{self.brand} {self.model}")

c = Car("Tesla", "Model 3")
c.display()`,
      output: `Tesla Model 3`
    },
    {
      id: 2,
      category: 'Classes & Objects',
      question: 'What is an object in Python?',
      answer: 'An object is an instance of a class.',
      code: `class Car:
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model

    def display(self):
        print(f"{self.brand} {self.model}")

my_car = Car("Tesla", "Model S")
my_car.display()`,
      output: `Tesla Model S`
    },
    {
      id: 3,
      category: 'Constructors',
      question: 'What is the __init__ method?',
      answer: 'The __init__ method is a constructor used to initialize object attributes.',
      code: `class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

p = Person("John", 25)
print(p.name, p.age)`,
      output: `John 25`
    },
    {
      id: 4,
      category: 'Inheritance',
      question: 'What is inheritance in Python?',
      answer: 'Inheritance allows a class to inherit attributes and methods from another class.',
      code: `class Animal:
    def speak(self):
        print("Animal speaks")

class Dog(Animal):
    def bark(self):
        print("Dog barks")

dog = Dog()
dog.speak()  # Output: Animal speaks
dog.bark()   # Output: Dog barks`,
      output: `Animal speaks
Dog barks`
    },
    {
      id: 5,
      category: 'Inheritance',
      question: 'What is method overriding?',
      answer: 'Method overriding allows a subclass to provide a specific implementation of a method already defined in its superclass.',
      code: `class Animal:
    def speak(self):
        print("Animal speaks")

class Dog(Animal):
    def speak(self):
        print("Dog barks")

dog = Dog()
dog.speak()`,
      output: `Dog barks`
    },
    {
      id: 6,
      category: 'Polymorphism',
      question: 'What is polymorphism in Python?',
      answer: 'Polymorphism allows objects of different classes to be treated as objects of a common superclass.',
      code: `class Cat:
    def speak(self):
        print("Meow")

class Dog:
    def speak(self):
        print("Bark")

def animal_sound(animal):
    animal.speak()

animal_sound(Cat())  # Output: Meow
animal_sound(Dog())  # Output: Bark`,
      output: `Meow
Bark`
    },
    {
      id: 7,
      category: 'Encapsulation',
      question: 'What is encapsulation in Python?',
      answer: 'Encapsulation is the bundling of data and methods that operate on the data into a single unit (class). It restricts direct access to some of the object\'s components.',
      code: `class BankAccount:
    def __init__(self, balance):
        self.__balance = balance  # Private attribute

    def deposit(self, amount):
        self.__balance += amount

    def get_balance(self):
        return self.__balance

acc = BankAccount(1000)
acc.deposit(500)
print(acc.get_balance())`,
      output: `1500`
    },
    {
      id: 8,
      category: 'Encapsulation',
      question: 'What are private members in Python?',
      answer: 'Private members are attributes or methods prefixed with __ (double underscore). They cannot be accessed directly outside the class without name mangling.',
      code: `class Person:
    def __init__(self, name):
        self.__name = name

    def get_name(self):
        return self.__name

p = Person("Alice")
print(p.get_name())  # Output: Alice
# print(p.__name)    # Error: AttributeError`,
      output: `Alice`
    },
    {
      id: 9,
      category: 'Constructors',
      question: 'What is the difference between __init__ and __new__?',
      answer: '__new__ creates a new instance of the class (allocates memory), while __init__ initializes the instance after it is created.',
      code: `class MyClass:
    def __new__(cls):
        print("Creating instance")
        return super().__new__(cls)

    def __init__(self):
        print("Initializing instance")

obj = MyClass()`,
      output: `Creating instance
Initializing instance`
    },
    {
      id: 10,
      category: 'Methods & Decorators',
      question: 'What is a static method?',
      answer: 'A static method belongs to the class rather than an instance. It does not require a self or cls parameter.',
      code: `class Math:
    @staticmethod
    def add(a, b):
        return a + b

print(Math.add(2, 3))`,
      output: `5`
    },
    {
      id: 11,
      category: 'Methods & Decorators',
      question: 'What is a class method?',
      answer: 'A class method belongs to the class and takes cls as the first parameter. It can access and modify class state.',
      code: `class MyClass:
    count = 0

    @classmethod
    def increment_count(cls):
        cls.count += 1

MyClass.increment_count()
print(MyClass.count)`,
      output: `1`
    },
    {
      id: 12,
      category: 'Methods & Decorators',
      question: 'What is the difference between @staticmethod and @classmethod?',
      answer: '@staticmethod does not take self or cls as a parameter. @classmethod takes cls as a parameter and can modify class-level state.',
      code: `class Demo:
    rate = 1.5

    @staticmethod
    def calc_simple(x):
        return x * 2

    @classmethod
    def calc_rate(cls, x):
        return x * cls.rate

print(Demo.calc_simple(10))
print(Demo.calc_rate(10))`,
      output: `20
15.0`
    },
    {
      id: 13,
      category: 'Design Patterns',
      question: 'What is method chaining in Python?',
      answer: 'Method chaining allows calling multiple methods in a single statement by having each method return self.',
      code: `class Calculator:
    def __init__(self, value=0):
        self.value = value

    def add(self, num):
        self.value += num
        return self

    def multiply(self, num):
        self.value *= num
        return self

calc = Calculator()
calc.add(5).multiply(2)
print(calc.value)`,
      output: `10`
    },
    {
      id: 14,
      category: 'Inheritance',
      question: 'What is the super() function?',
      answer: 'The super() function is used to call a method from the parent class, enabling cooperative multiple inheritance.',
      code: `class Parent:
    def greet(self):
        print("Hello from Parent")

class Child(Parent):
    def greet(self):
        super().greet()
        print("Hello from Child")

c = Child()
c.greet()`,
      output: `Hello from Parent
Hello from Child`
    },
    {
      id: 15,
      category: 'Inheritance',
      question: 'What is multiple inheritance?',
      answer: 'Multiple inheritance allows a class to inherit attributes and methods from more than one parent class.',
      code: `class A:
    def greet(self):
        print("Hello from A")

class B:
    def greet(self):
        print("Hello from B")

class C(A, B):
    pass

c = C()
c.greet()  # Output: Hello from A (due to method resolution order)`,
      output: `Hello from A`
    },
    {
      id: 16,
      category: 'Inheritance',
      question: 'What is the method resolution order (MRO)?',
      answer: 'MRO defines the order in which base classes are searched when looking up a method or attribute. Viewable using Class.mro().',
      code: `class A: pass
class B(A): pass
class C(A): pass
class D(B, C): pass

print(D.mro())`,
      output: `[<class '__main__.D'>, <class '__main__.B'>, <class '__main__.C'>, <class '__main__.A'>, <class 'object'>]`
    },
    {
      id: 17,
      category: 'Magic / Dunder Methods',
      question: 'What is the __str__ method?',
      answer: 'The __str__ method returns a user-friendly string representation of an object when converted using str() or print().',
      code: `class Person:
    def __init__(self, name):
        self.name = name

    def __str__(self):
        return f"Person: {self.name}"

p = Person("Alice")
print(p)`,
      output: `Person: Alice`
    },
    {
      id: 18,
      category: 'Magic / Dunder Methods',
      question: 'What is the __repr__ method?',
      answer: 'The __repr__ method returns an unambiguous, machine-readable string representation of an object, often used for debugging.',
      code: `class Person:
    def __init__(self, name):
        self.name = name

    def __repr__(self):
        return f"Person(name='{self.name}')"

p = Person("Alice")
print(repr(p))`,
      output: `Person(name='Alice')`
    },
    {
      id: 19,
      category: 'Magic / Dunder Methods',
      question: 'What is the difference between __str__ and __repr__?',
      answer: '__str__ is aimed at being informal and readable for end-users, while __repr__ is aimed at being unambiguous and developer-focused for debugging.',
      code: `import datetime
today = datetime.date.today()

print("str(): ", str(today))
print("repr():", repr(today))`,
      output: `str():  2026-09-11
repr(): datetime.date(2026, 9, 11)`
    },
    {
      id: 20,
      category: 'Magic / Dunder Methods',
      question: 'What is the __del__ method?',
      answer: 'The __del__ method is a destructor called when an object\'s reference count drops to zero and it is about to be garbage collected.',
      code: `class MyClass:
    def __del__(self):
        print("Object destroyed")

obj = MyClass()
del obj`,
      output: `Object destroyed`
    },
    {
      id: 21,
      category: 'Magic / Dunder Methods',
      question: 'What is the __call__ method?',
      answer: 'The __call__ method allows an instance of a class to be called like a regular function.',
      code: `class Adder:
    def __call__(self, a, b):
        return a + b

add = Adder()
print(add(2, 3))`,
      output: `5`
    },
    {
      id: 22,
      category: 'Magic / Dunder Methods',
      question: 'What is the __getitem__ method?',
      answer: 'The __getitem__ method allows an object to support square bracket indexing: obj[key].',
      code: `class MyList:
    def __init__(self, items):
        self.items = items

    def __getitem__(self, index):
        return self.items[index]

my_list = MyList([1, 2, 3])
print(my_list[1])`,
      output: `2`
    },
    {
      id: 23,
      category: 'Magic / Dunder Methods',
      question: 'What is the __setitem__ method?',
      answer: 'The __setitem__ method allows an object to support item assignment: obj[key] = value.',
      code: `class MyList:
    def __init__(self, items):
        self.items = items

    def __setitem__(self, index, value):
        self.items[index] = value

my_list = MyList([1, 2, 3])
my_list[1] = 5
print(my_list.items)`,
      output: `[1, 5, 3]`
    },
    {
      id: 24,
      category: 'Magic / Dunder Methods',
      question: 'What is the __len__ method?',
      answer: 'The __len__ method allows an object to define its length, invoked via len(obj).',
      code: `class MyList:
    def __init__(self, items):
        self.items = items

    def __len__(self):
        return len(self.items)

my_list = MyList([1, 2, 3])
print(len(my_list))`,
      output: `3`
    },
    {
      id: 25,
      category: 'Magic / Dunder Methods',
      question: 'What is the __iter__ method?',
      answer: 'The __iter__ method allows an object to be iterable, enabling use in for loops and comprehensions.',
      code: `class MyRange:
    def __init__(self, start, end):
        self.start = start
        self.end = end

    def __iter__(self):
        return iter(range(self.start, self.end))

for i in MyRange(1, 4):
    print(i, end=' ')
print()`,
      output: `1 2 3`
    },
    {
      id: 26,
      category: 'Magic / Dunder Methods',
      question: 'What is the __contains__ method?',
      answer: 'The __contains__ method allows an object to support membership testing with the "in" operator.',
      code: `class MyList:
    def __init__(self, items):
        self.items = items

    def __contains__(self, item):
        return item in self.items

my_list = MyList([1, 2, 3])
print(2 in my_list)`,
      output: `True`
    },
    {
      id: 27,
      category: 'Magic / Dunder Methods',
      question: 'What is the __add__ method?',
      answer: 'The __add__ method allows an object to overload the + binary addition operator.',
      code: `class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __add__(self, other):
        return Point(self.x + other.x, self.y + other.y)

p1 = Point(1, 2)
p2 = Point(3, 4)
p3 = p1 + p2
print(p3.x, p3.y)`,
      output: `4 6`
    },
    {
      id: 28,
      category: 'Magic / Dunder Methods',
      question: 'What is the __eq__ method?',
      answer: 'The __eq__ method allows an object to define equality comparison using the == operator.',
      code: `class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __eq__(self, other):
        return self.x == other.x and self.y == other.y

p1 = Point(1, 2)
p2 = Point(1, 2)
print(p1 == p2)`,
      output: `True`
    },
    {
      id: 29,
      category: 'Magic / Dunder Methods',
      question: 'What is the __hash__ method?',
      answer: 'The __hash__ method allows an object to be hashable, enabling it to be used as a dictionary key or in a set.',
      code: `class Person:
    def __init__(self, name):
        self.name = name

    def __hash__(self):
        return hash(self.name)

    def __eq__(self, other):
        return self.name == other.name

p = Person("Alice")
print(type(hash(p)) is int)
s = {p}
print(len(s))`,
      output: `True
1`
    },
    {
      id: 30,
      category: 'Advanced Features',
      question: 'What is the __slots__ attribute?',
      answer: 'The __slots__ attribute restricts the creation of arbitrary new attributes on an object, optimizing memory footprint and speeding up attribute access.',
      code: `class Person:
    __slots__ = ['name', 'age']

    def __init__(self, name, age):
        self.name = name
        self.age = age

p = Person("Alice", 25)
print(p.name, p.age)
# p.address = "123 Street"  # Raises AttributeError!`,
      output: `Alice 25`
    }
  ]
};
