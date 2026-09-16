/**
 * OOP_WORKSHEETS_DATA: Chapter 4.12 Practice Worksheets with Interactive MCQs & Comprehensive Subjective Analyses
 * Source: Chapter 4 Object-Oriented Programming (OOP) Concepts & Placement Preparation Booklet
 * 
 * Contains 4 Complete Interactive Worksheets:
 * - Worksheet 1: 4 Pillars of OOP, Inheritance, Polymorphism, Overloading, Constructors & Access Modifiers (10 MCQs + 5 Subjective Questions)
 * - Worksheet 2: Encapsulation, Abstract Classes vs. Interfaces, Null References, Overriding & Composition (10 MCQs + 5 Subjective Questions)
 * - Worksheet 3: Dynamic Polymorphism, Interfaces, this() vs. super(), Composition & Abstract Rules (10 MCQs + 5 Subjective Questions)
 * - Worksheet 4: Copy Constructors, Exception Blocks, Virtual Functions, C++ Streams, String & Diamond Problem (10 MCQs + 6 Subjective Questions)
 */

const OOP_WORKSHEETS_DATA = [
  // =========================================================================
  // WORKSHEET 1: OOP FUNDAMENTALS, 4 PILLARS, INHERITANCE & METHOD OVERLOADING
  // =========================================================================
  {
    id: 'ws-oop-1',
    title: 'Worksheet 1: OOP Fundamentals, 4 Pillars, Inheritance & Method Overloading',
    badge: 'Worksheet 1 • Core OOP Fundamentals',
    summary: '10 Interactive MCQs & 5 Comprehensive Subjective Analyses covering the 4 Pillars of OOP, Inheritance, Method Overloading, Polymorphism, Constructors, and Access Modifiers.',
    mcqs: [
      {
        id: 1,
        question: 'Which concept in OOP is used to hide the internal workings of an object and only expose necessary functionality?',
        options: [
          'A. Abstraction',
          'B. Encapsulation',
          'C. Polymorphism',
          'D. Inheritance'
        ],
        answer: 'A. Abstraction',
        explanation: 'Abstraction is the process of hiding internal implementation complexity while exposing only essential features to the outside world. Encapsulation refers specifically to bundling data and methods into a single unit.'
      },
      {
        id: 2,
        question: 'What is the key feature of inheritance in OOP?',
        options: [
          'A. A subclass can inherit properties and methods from a superclass',
          'B. Objects cannot inherit from other objects',
          'C. Inheritance is not supported in OOP',
          'D. Objects are created by constructors'
        ],
        answer: 'A. A subclass can inherit properties and methods from a superclass',
        explanation: 'Inheritance allows a derived subclass to acquire fields and methods from an existing base superclass, fostering code reuse and hierarchical domain modeling.'
      },
      {
        id: 3,
        question: 'Which of the following is a correct example of method overloading in OOP?',
        options: [
          'A. Two methods having the same name but different return types',
          'B. Two methods having the same name but different number of arguments',
          'C. A method with no arguments',
          'D. None of the above'
        ],
        answer: 'B. Two methods having the same name but different number of arguments',
        explanation: 'Method overloading requires methods in the same class to share the same name while having distinct parameter signatures (different parameter counts, data types, or sequence). Return type alone is insufficient.'
      },
      {
        id: 4,
        question: 'What is polymorphism in OOP?',
        options: [
          'A. The ability to create multiple classes from a single parent class',
          'B. The ability of different objects to respond to the same message in different ways',
          'C. The use of the same method name in multiple classes',
          'D. None of the above'
        ],
        answer: 'B. The ability of different objects to respond to the same message in different ways',
        explanation: 'Polymorphism ("many forms") allows a single unified method call (e.g. shape.draw()) to execute specialized behaviors depending on the actual concrete runtime object type.'
      },
      {
        id: 5,
        question: 'What is the purpose of a constructor in OOP?',
        options: [
          'A. To create objects',
          'B. To initialize objects',
          'C. To destroy objects',
          'D. To return values'
        ],
        answer: 'B. To initialize objects',
        explanation: 'The primary purpose of a constructor is to initialize the state (instance attributes) of a newly allocated object and establish class invariants.'
      },
      {
        id: 6,
        question: 'Which access modifier restricts the use of members of a class only to within the same class?',
        options: [
          'A. public',
          'B. private',
          'C. protected',
          'D. default'
        ],
        answer: 'B. private',
        explanation: 'The private modifier enforces strict data hiding; members marked private can only be accessed directly from within the body of the declaring class.'
      },
      {
        id: 7,
        question: 'What is the significance of the ‘super‘ keyword in inheritance?',
        options: [
          'A. It refers to the superclass',
          'B. It is used to overload methods',
          'C. It prevents inheritance',
          'D. It initializes objects'
        ],
        answer: 'A. It refers to the superclass',
        explanation: 'In Java, the super keyword directly references the immediate superclass, allowing subclasses to call parent constructors (super()) and access overridden parent methods (super.method()).'
      },
      {
        id: 8,
        question: 'What is encapsulation in OOP?',
        options: [
          'A. The concept of wrapping data and methods into a single unit',
          'B. The process of hiding information',
          'C. The ability of objects to respond differently to the same message',
          'D. The ability to create multiple classes'
        ],
        answer: 'A. The concept of wrapping data and methods into a single unit',
        explanation: 'Encapsulation is the fundamental bundling of data (attributes) and procedures (methods) that operate on that data into a cohesive single unit known as an object.'
      },
      {
        id: 9,
        question: 'Which of the following is an example of multiple inheritance?',
        options: [
          'A. A class inheriting from two or more classes',
          'B. A class inheriting from a single class',
          'C. A class that implements multiple interfaces',
          'D. None of the above'
        ],
        answer: 'A. A class inheriting from two or more classes',
        explanation: 'Multiple inheritance occurs when a single derived class inherits directly from two or more base classes simultaneously (supported in C++ and Python, but prohibited for classes in Java to prevent ambiguity).'
      },
      {
        id: 10,
        question: 'Which keyword is used to inherit from a class in Java?',
        options: [
          'A. extends',
          'B. inherit',
          'C. super',
          'D. implements'
        ],
        answer: 'A. extends',
        explanation: 'Java uses the "extends" keyword for class inheritance (e.g., class Dog extends Animal) and "implements" for interface realization.'
      }
    ],
    subjective: [
      {
        id: 1,
        q: '1. Explain the four pillars of OOP and their importance.',
        category: 'OOP Foundations',
        ans: '• <strong>1. Encapsulation:</strong> Bundles attributes and methods into an object while restricting direct access via private/protected modifiers. <em>Importance:</em> Preserves data integrity, isolates mutable state, and prevents unauthorized tampering.<br>' +
             '• <strong>2. Abstraction:</strong> Hides complex internal execution details and displays only essential functional interfaces (via abstract classes/interfaces). <em>Importance:</em> Reduces cognitive complexity and decouples consumer code from internal implementation.<br>' +
             '• <strong>3. Inheritance:</strong> Mechanism allowing subclasses to inherit attributes and methods from superclasses (IS-A relationship). <em>Importance:</em> Maximizes code reusability, minimizes duplication, and mirrors natural taxonomies.<br>' +
             '• <strong>4. Polymorphism:</strong> Enables a single interface or method call to behave differently based on the underlying runtime object. <em>Importance:</em> Delivers dynamic flexibility and extensibility without modifying existing client code.'
      },
      {
        id: 2,
        q: '2. Differentiate between method overloading and method overriding with examples.',
        category: 'Polymorphism',
        ans: '• <strong>Method Overloading (Static / Compile-Time Polymorphism):</strong><br>' +
             '  – Occurs within the <em>same class</em>.<br>' +
             '  – Methods share the same name but have <em>different parameter lists</em> (count, types, or order).<br>' +
             '  – Resolved at compile time based on invocation argument signatures.<br>' +
             '  – <em>Example:</em> <code>int add(int a, int b)</code> and <code>double add(double a, double b)</code>.<br>' +
             '• <strong>Method Overriding (Dynamic / Runtime Polymorphism):</strong><br>' +
             '  – Occurs between a <em>superclass and a subclass</em>.<br>' +
             '  – Methods have the <em>exact same name, parameters, and return type</em>.<br>' +
             '  – Resolved dynamically at runtime using virtual method tables (vtables).<br>' +
             '  – <em>Example:</em> <code>Animal { void sound() { print("Generic"); } }</code> overridden by <code>Dog { void sound() { print("Bark"); } }</code>.'
      },
      {
        id: 3,
        q: '3. Describe the concept of polymorphism with a real-world example.',
        category: 'Polymorphism',
        ans: '• <strong>Concept:</strong> Polymorphism ("many forms") is the ability of an object reference or interface to trigger different underlying behaviors at execution time.<br>' +
             '• <strong>Real-World Scenario (Payment Processing):</strong><br>' +
             '  – An e-commerce checkout service declares a general method: <code>processPayment(PaymentMethod method, double amount)</code>.<br>' +
             '  – At runtime, <code>PaymentMethod</code> can be instantiated as <code>CreditCardPayment</code>, <code>UpiPayment</code>, or <code>PayPalPayment</code>.<br>' +
             '  – Calling <code>method.pay(amount)</code> routes to the correct banking gateway without the checkout system needing messy if-else chains.'
      },
      {
        id: 4,
        q: '4. What are the advantages of using constructors in OOP?',
        category: 'Classes & Objects',
        ans: '• <strong>Guaranteed Initialization:</strong> Ensures that fields are never left in uninitialized, illegal, or undefined memory states upon instantiation.<br>' +
             '• <strong>Enforcing Class Invariants:</strong> Validates essential input parameters at creation time, throwing exceptions immediately if invalid arguments are passed.<br>' +
             '• <strong>Resource Allocation:</strong> Automatically allocates memory buffers, opens database connections, or acquires locks upon object birth.<br>' +
             '• <strong>Constructor Overloading:</strong> Offers multiple convenient entry points for clients to instantiate objects with full or default settings.'
      },
      {
        id: 5,
        q: '5. How does inheritance enhance code reusability? Provide an example.',
        category: 'Inheritance',
        ans: '• <strong>Mechanism:</strong> By capturing common fields and logic in a base class, all derived subclasses automatically inherit that functionality without rewriting a single line of code.<br>' +
             '• <strong>Example:</strong><br>' +
             '  – Base class <code>Employee</code> defines <code>id</code>, <code>name</code>, <code>department</code>, and a shared method <code>generatePaySlip()</code>.<br>' +
             '  – Subclasses <code>SoftwareEngineer</code>, <code>SalesManager</code>, and <code>HRSpecialist</code> extend <code>Employee</code> and immediately reuse <code>generatePaySlip()</code> while only writing their unique role-specific compensation formulas.'
      }
    ]
  },

  // =========================================================================
  // WORKSHEET 2: ENCAPSULATION, ABSTRACT CLASSES, INTERFACES & COMPARISONS
  // =========================================================================
  {
    id: 'ws-oop-2',
    title: 'Worksheet 2: Encapsulation, Abstract Classes, Interfaces & Comparisons',
    badge: 'Worksheet 2 • Core Abstractions & Rules',
    summary: '10 Interactive MCQs & 5 Comprehensive Subjective Analyses covering Encapsulation, Abstract Classes vs. Interfaces, NullPointerExceptions, final Keyword, and Composition.',
    mcqs: [
      {
        id: 1,
        question: 'Which of the following is true about encapsulation?',
        options: [
          'A. It is the process of hiding the internal state of an object and requiring all interaction to be performed through methods',
          'B. It allows access to the object’s state from anywhere in the program',
          'C. It refers to creating objects',
          'D. It is used to share data between objects'
        ],
        answer: 'A. It is the process of hiding the internal state of an object and requiring all interaction to be performed through methods',
        explanation: 'Encapsulation safeguards internal variables by declaring them private and forcing all external interactions to pass through controlled public accessor and mutator methods.'
      },
      {
        id: 2,
        question: 'In OOP, which of the following is used to define a new class based on an existing class?',
        options: [
          'A. Overloading',
          'B. Inheritance',
          'C. Encapsulation',
          'D. Abstraction'
        ],
        answer: 'B. Inheritance',
        explanation: 'Inheritance allows a new class to derive state and behavior from an existing class, establishing an "IS-A" hierarchical relationship.'
      },
      {
        id: 3,
        question: 'What is the main difference between an abstract class and an interface?',
        options: [
          'A. An abstract class can have both abstract and non-abstract methods, while an interface can only have abstract methods',
          'B. An abstract class cannot have constructors, while an interface can',
          'C. An abstract class cannot be inherited, while an interface can',
          'D. There is no difference'
        ],
        answer: 'A. An abstract class can have both abstract and non-abstract methods, while an interface can only have abstract methods',
        explanation: 'An abstract class can maintain state, instance variables, constructors, and concrete method implementations; pure interfaces historically only declare abstract method contracts (prior to Java 8 default methods).'
      },
      {
        id: 4,
        question: 'What happens if a method is called on a null object reference in Java?',
        options: [
          'A. The method call will execute normally',
          'B. A NullPointerException is thrown',
          'C. The method will return a default value',
          'D. The program will terminate unexpectedly'
        ],
        answer: 'B. A NullPointerException is thrown',
        explanation: 'In Java, attempting to dereference or call any instance method on a variable pointing to null immediately throws a runtime NullPointerException.'
      },
      {
        id: 5,
        question: 'Which of the following is an example of constructor overloading in OOP?',
        options: [
          'A. Defining multiple constructors with different numbers of parameters',
          'B. Defining methods with the same name but different parameters',
          'C. Overriding the constructor',
          'D. Defining methods with the same return type'
        ],
        answer: 'A. Defining multiple constructors with different numbers of parameters',
        explanation: 'Constructor overloading involves declaring multiple constructors in the same class with differing parameter lists to support varied initialization patterns.'
      },
      {
        id: 6,
        question: 'What is the result of using the ‘final‘ keyword with a class in Java?',
        options: [
          'A. The class cannot be instantiated',
          'B. The class cannot be subclassed',
          'C. The class can have private methods',
          'D. The class cannot be used for method overloading'
        ],
        answer: 'B. The class cannot be subclassed',
        explanation: 'Applying the final keyword to a class declaration forbids inheritance, preventing any other class from extending it (e.g., java.lang.String).'
      },
      {
        id: 7,
        question: 'Which of the following is NOT a feature of Object-Oriented Programming?',
        options: [
          'A. Inheritance',
          'B. Polymorphism',
          'C. Modularity',
          'D. Structured Programming'
        ],
        answer: 'D. Structured Programming',
        explanation: 'Structured programming is an imperative, procedural programming paradigm based on sequential flow, loops, and subroutines rather than objects, classes, and message passing.'
      },
      {
        id: 8,
        question: 'In which case would you use an abstract class instead of an interface in OOP?',
        options: [
          'A. When the class needs to provide a default implementation for some methods',
          'B. When the class only needs to define methods without any implementation',
          'C. When the class should be used to represent multiple behaviors',
          'D. None of the above'
        ],
        answer: 'A. When the class needs to provide a default implementation for some methods',
        explanation: 'Abstract classes are ideal when closely related classes share common state (instance variables) and concrete base implementations alongside abstract methods.'
      },
      {
        id: 9,
        question: 'What is method overriding in OOP?',
        options: [
          'A. Defining a method in the child class that has the same name, return type, and parameters as a method in the parent class',
          'B. Defining a method with a different signature in the child class',
          'C. Changing the access modifier of a method in the child class',
          'D. None of the above'
        ],
        answer: 'A. Defining a method in the child class that has the same name, return type, and parameters as a method in the parent class',
        explanation: 'Method overriding occurs when a subclass redefines a superclass method with the exact same name, return type, and parameter list to provide specialized behavior.'
      },
      {
        id: 10,
        question: 'Which of the following is true about a class constructor in Java?',
        options: [
          'A. A constructor must always return a value',
          'B. A constructor is called automatically when an object is created',
          'C. A constructor can only take one argument',
          'D. A constructor can have the same name as the class but must have a return type'
        ],
        answer: 'B. A constructor is called automatically when an object is created',
        explanation: 'A constructor is automatically invoked by the runtime during object instantiation via "new" and never declares a return type.'
      }
    ],
    subjective: [
      {
        id: 1,
        q: '1. Explain the concept of abstraction in OOP and provide an example of its usage in a real-world system.',
        category: 'Abstraction',
        ans: '• <strong>Concept:</strong> Abstraction separates the essential qualities and behaviors of an entity from its complex physical implementation.<br>' +
             '• <strong>Real-World Example (Smart Thermostat System):</strong><br>' +
             '  – The user interface exposes simple methods: <code>setTemperature(22)</code> and <code>getCurrentTemperature()</code>.<br>' +
             '  – Underneath, the thermostat manages complex PID algorithms, relay switches, Wi-Fi telemetry, and microcontroller analog-to-digital converters.<br>' +
             '  – The user operates the thermostat smoothly without needing to understand the electrical schematics.'
      },
      {
        id: 2,
        q: '2. Define and explain method overloading with an example.',
        category: 'Polymorphism',
        ans: '• <strong>Definition:</strong> Method overloading allows a class to define multiple methods bearing the identical name but differing in parameter types, parameter counts, or argument sequence.<br>' +
             '• <strong>Java Example:</strong><br>' +
             '  <code>public class Printer {</code><br>' +
             '  <code>  public void print(String text) { System.out.println("Text: " + text); }</code><br>' +
             '  <code>  public void print(int num) { System.out.println("Number: " + num); }</code><br>' +
             '  <code>  public void print(String text, int copies) { for(int i=0; i<copies; i++) print(text); }</code><br>' +
             '  <code>}</code><br>' +
             '• <strong>Resolution:</strong> The compiler resolves which method to invoke at compile time based on parameter types.'
      },
      {
        id: 3,
        q: '3. What is the significance of the ‘super()‘ keyword in OOP? How is it used in Java?',
        category: 'Inheritance',
        ans: '• <strong>Significance:</strong> <code>super()</code> invokes the constructor of the direct parent class, ensuring that inherited base class attributes and invariants are fully initialized before subclass constructor logic runs.<br>' +
             '• <strong>Java Rules:</strong><br>' +
             '  – Must be the very first line of code inside the subclass constructor.<br>' +
             '  – If omitted, the Java compiler automatically inserts an implicit parameterless <code>super();</code> call.<br>' +
             '  – Can pass arguments (e.g., <code>super(name, id);</code>) to invoke overloaded superclass constructors.'
      },
      {
        id: 4,
        q: '4. Describe the differences between ‘==‘ and ‘equals()‘ in Java when comparing objects.',
        category: 'Java OOP',
        ans: '• <strong>== (Reference Comparison):</strong> Compares whether two reference variables point to the exact same physical memory address on the JVM heap. For primitives, it compares raw values.<br>' +
             '• <strong>equals() (Content Comparison):</strong> Evaluates whether the internal state values of two objects are logically equivalent when overridden (e.g. in <code>String</code>, <code>Integer</code>).<br>' +
             '• <em>Example:</em> <code>String s1 = new String("test"); String s2 = new String("test");</code> &rarr; <code>s1 == s2</code> is <code>false</code>, but <code>s1.equals(s2)</code> is <code>true</code>.'
      },
      {
        id: 5,
        q: '5. Explain the concept of ”composition” in OOP and how it is different from ”inheritance”. Provide an example.',
        category: 'Design Principles',
        ans: '• <strong>Composition (HAS-A):</strong> A design approach where a complex class achieves functionality by holding references to other helper classes and delegating tasks to them.<br>' +
             '• <strong>Inheritance (IS-A):</strong> Subclass extends a superclass, creating tight compile-time coupling and exposing internal superclass state.<br>' +
             '• <strong>Comparison:</strong> Composition provides runtime flexibility (components can be swapped dynamically) and prevents fragile base class defects.<br>' +
             '• <strong>Example:</strong> A <code>Car</code> has an <code>Engine</code> and <code>Wheels</code> (Composition). A <code>Car</code> should not inherit from <code>Engine</code>.'
      }
    ]
  },

  // =========================================================================
  // WORKSHEET 3: INTERFACES, THIS VS SUPER, POLYMORPHISM & ACCESS CONTROLS
  // =========================================================================
  {
    id: 'ws-oop-3',
    title: 'Worksheet 3: Interfaces, this vs. super, Polymorphism & Access Controls',
    badge: 'Worksheet 3 • Architecture & Design Contracts',
    summary: '10 Interactive MCQs & 5 Comprehensive Subjective Analyses covering Polymorphic Benefits, Overloading Scenarios, this() vs super(), Java Interfaces, and Abstract Rules.',
    mcqs: [
      {
        id: 1,
        question: 'Which of the following is a benefit of polymorphism in OOP?',
        options: [
          'A. It allows objects of different classes to be treated as objects of a common superclass.',
          'B. It makes method overloading possible.',
          'C. It is used to implement abstraction.',
          'D. It enforces class inheritance.'
        ],
        answer: 'A. It allows objects of different classes to be treated as objects of a common superclass.',
        explanation: 'Polymorphism allows collections of diverse subclass instances to be managed uniformly via a common superclass or interface reference.'
      },
      {
        id: 2,
        question: 'In which scenario would you use method overloading?',
        options: [
          'A. When you need to change the method signature but keep the same functionality.',
          'B. When you need to implement multiple methods with the same name but different return types.',
          'C. When you need to implement multiple methods with the same name but different parameter types.',
          'D. When you want to override a superclass method.'
        ],
        answer: 'C. When you need to implement multiple methods with the same name but different parameter types.',
        explanation: 'Method overloading is selected when you want to perform conceptually identical operations across different data types or parameter configurations.'
      },
      {
        id: 3,
        question: 'What is the purpose of the ‘this‘ keyword in Java?',
        options: [
          'A. It is used to refer to the current object within an instance method or constructor.',
          'B. It is used to create an instance of the class.',
          'C. It is used to reference a static method.',
          'D. It is used to reference class variables only.'
        ],
        answer: 'A. It is used to refer to the current object within an instance method or constructor.',
        explanation: 'In Java, "this" is an implicit reference variable pointing directly to the current executing object instance.'
      },
      {
        id: 4,
        question: 'Which of the following is true about interfaces in Java?',
        options: [
          'A. An interface can provide method implementations.',
          'B. A class can implement multiple interfaces.',
          'C. Interfaces cannot extend other interfaces.',
          'D. An interface can have instance variables.'
        ],
        answer: 'B. A class can implement multiple interfaces.',
        explanation: 'Java allows a class to implement any number of interfaces simultaneously (e.g. class Task implements Runnable, Serializable).'
      },
      {
        id: 5,
        question: 'Which of the following best describes ”inheritance” in OOP?',
        options: [
          'A. A way to create a new class from an existing class by inheriting its properties and behaviors.',
          'B. A mechanism to hide the implementation details of a class.',
          'C. A way to allow a class to be subclassed.',
          'D. A process of creating methods with the same signature in different classes.'
        ],
        answer: 'A. A way to create a new class from an existing class by inheriting its properties and behaviors.',
        explanation: 'Inheritance enables a derived class to automatically acquire fields and methods from an existing base class to promote reuse and hierarchy.'
      },
      {
        id: 6,
        question: 'What happens when a subclass calls a method that is overridden in its superclass?',
        options: [
          'A. The subclass’s version of the method is executed.',
          'B. The superclass’s version of the method is executed.',
          'C. A compilation error occurs.',
          'D. Both versions of the method are executed.'
        ],
        answer: 'A. The subclass’s version of the method is executed.',
        explanation: 'Due to runtime dynamic method dispatch, calling an overridden method on an instance executes the subclass specialized implementation.'
      },
      {
        id: 7,
        question: 'What is the key difference between ‘super()‘ and ‘this()‘ in Java constructors?',
        options: [
          'A. ‘super()‘ is used to call a parent class constructor, while ‘this()‘ is used to call another constructor of the same class.',
          'B. ‘super()‘ is used to call a constructor from a sibling class, while ‘this()‘ calls the current class’s constructor.',
          'C. ‘super()‘ initializes instance variables, while ‘this()‘ calls methods in the class.',
          'D. There is no difference between ‘super()‘ and ‘this()‘.'
        ],
        answer: 'A. ‘super()‘ is used to call a parent class constructor, while ‘this()‘ is used to call another constructor of the same class.',
        explanation: 'super() delegates to the direct parent class constructor, whereas this() delegates to an overloaded constructor within the same class (constructor chaining).'
      },
      {
        id: 8,
        question: 'Which of the following is an example of ”composition” in OOP?',
        options: [
          'A. A class inheriting from another class.',
          'B. A class containing objects of other classes as instance variables.',
          'C. A class implementing an interface.',
          'D. A class defining static methods.'
        ],
        answer: 'B. A class containing objects of other classes as instance variables.',
        explanation: 'Composition models a "HAS-A" relationship by including instances of other classes as private member fields within a container class.'
      },
      {
        id: 9,
        question: 'Which of the following is NOT a valid access modifier in Java?',
        options: [
          'A. ‘public‘',
          'B. ‘private‘',
          'C. ‘protected‘',
          'D. ‘global‘'
        ],
        answer: 'D. ‘global‘',
        explanation: 'Java supports public, private, protected, and default (package-private). There is no "global" access modifier keyword in Java.'
      },
      {
        id: 10,
        question: 'What is the result of attempting to instantiate an abstract class in Java?',
        options: [
          'A. The abstract class can be instantiated if it has a concrete method.',
          'B. The program compiles but throws an exception at runtime.',
          'C. A compilation error occurs.',
          'D. The class can be instantiated through reflection.'
        ],
        answer: 'C. A compilation error occurs.',
        explanation: 'Abstract classes cannot be directly instantiated via "new" under any circumstances; attempting to do so triggers a compile-time error.'
      }
    ],
    subjective: [
      {
        id: 1,
        q: '1. Define the concept of ”polymorphism” in OOP. Explain how method overriding and method overloading contribute to polymorphism, with examples.',
        category: 'Polymorphism',
        ans: '• <strong>Polymorphism Definition:</strong> The capability of operations or references to exhibit distinct behaviors according to context or object type.<br>' +
             '• <strong>Method Overloading (Compile-Time):</strong> Provides multiple methods with identical names but differing argument lists in the same class (e.g., <code>AreaCalculator.area(radius)</code> vs <code>AreaCalculator.area(length, width)</code>). Evaluated at compile time.<br>' +
             '• <strong>Method Overriding (Runtime):</strong> Subclasses supply custom implementations for inherited superclass methods (e.g., <code>Shape.draw()</code> overridden by <code>Circle.draw()</code>). Evaluated dynamically at runtime via vtable lookup.'
      },
      {
        id: 2,
        q: '2. Explain the differences between ”abstract class” and ”interface” in Java. Discuss when to use each in the context of OOP design.',
        category: 'Abstract Classes & Interfaces',
        ans: '• <strong>Differences:</strong><br>' +
             '  – <em>State:</em> Abstract classes can declare instance variables with various access modifiers; interfaces only support <code>public static final</code> constants.<br>' +
             '  – <em>Multiple Inheritance:</em> A class can implement multiple interfaces, but extend only one abstract class.<br>' +
             '  – <em>Constructors:</em> Abstract classes have constructors called via <code>super()</code>; interfaces have no constructors.<br>' +
             '• <strong>When to Use:</strong> Use an <em>abstract class</em> when closely related classes share state and core functionality (IS-A relationship); use an <em>interface</em> when defining a behavioral contract across unrelated classes (CAN-DO relationship, like <code>Comparable</code>).'
      },
      {
        id: 3,
        q: '3. Describe the concept of method overriding in Java. What are the advantages of overriding a method in a subclass? Provide an example.',
        category: 'Polymorphism',
        ans: '• <strong>Concept:</strong> A subclass provides a specialized implementation of a method declared in its superclass using the exact same signature and return type.<br>' +
             '• <strong>Advantages:</strong> Enables runtime polymorphism, fulfills the Open/Closed Principle, and allows client code to invoke methods polymorphically without knowing the concrete subclass type.<br>' +
             '• <strong>Example:</strong> <code>class Bank { double getRate() { return 2.0; } }</code> overridden by <code>class SbiBank extends Bank { @Override double getRate() { return 6.5; } }</code>.'
      },
      {
        id: 4,
        q: '4. Explain the concept of ”encapsulation” in OOP. How does encapsulation contribute to data security and program maintainability? Provide examples using Java.',
        category: 'Encapsulation',
        ans: '• <strong>Concept:</strong> Encapsulation bundles data variables and the methods operating on them into a single class while restricting direct external access.<br>' +
             '• <strong>Data Security:</strong> Prevents unauthorized direct mutation by declaring variables <code>private</code> and validating modifications in public setters (e.g., rejecting negative salary values).<br>' +
             '• <strong>Maintainability:</strong> Internal representations (e.g., replacing an array with a HashMap) can be refactored freely without altering the public API consumed by callers.<br>' +
             '• <strong>Java Example:</strong> <code>class Account { private double bal; public void withdraw(double a) { if(a <= bal) bal -= a; } }</code>.'
      },
      {
        id: 5,
        q: '5. Discuss the importance of the ”this” keyword in object-oriented programming. What are some use cases for it in Java? Provide examples to support your answer.',
        category: 'Classes & Objects',
        ans: '• <strong>Importance:</strong> Represents an explicit reference to the current object instance within methods and constructors.<br>' +
             '• <strong>Key Use Cases:</strong><br>' +
             '  1. <em>Field Disambiguation:</em> Resolves variable shadowing: <code>this.name = name;</code>.<br>' +
             '  2. <em>Constructor Chaining:</em> Invokes overloaded constructors: <code>this(name, 0.0);</code>.<br>' +
             '  3. <em>Method Chaining:</em> Returns the current instance: <code>return this;</code>.<br>' +
             '  4. <em>Passing as Parameter:</em> Passes current object to helper methods or event listeners: <code>dispatcher.register(this);</code>.'
      }
    ]
  },

  // =========================================================================
  // WORKSHEET 4: COPY CONSTRUCTORS, EXCEPTIONS, C++ VIRTUALS & STREAMS
  // =========================================================================
  {
    id: 'ws-oop-4',
    title: 'Worksheet 4: Copy Constructors, Exceptions, C++ Virtuals & Streams',
    badge: 'Worksheet 4 • Advanced OOP, C++ & Exceptions',
    summary: '10 Interactive MCQs & 6 Comprehensive Subjective Analyses covering Copy Constructors, Exception Blocks, Pass-by-Reference, Virtual Functions, C++ Streams, and String Manipulations.',
    mcqs: [
      {
        id: 1,
        question: 'The copy constructors can be used to .......',
        options: [
          'A. Copy an object so that it can be passed to another primitive type variable',
          'B. Copy an object for type casting',
          'C. Copy an object so that it can be passed to a function',
          'D. Copy an object so that it can be passed to a class'
        ],
        answer: 'C. Copy an object so that it can be passed to a function',
        explanation: 'In C++, copy constructors are automatically invoked when an object is passed by value to a function or returned by value from a function to construct a fresh duplicate instance.'
      },
      {
        id: 2,
        question: 'What is the purpose of the ”this” keyword in Java?',
        options: [
          'A. To create an object',
          'B. To refer to the current object',
          'C. To call the superclass constructor',
          'D. To access static members of a class'
        ],
        answer: 'B. To refer to the current object',
        explanation: '"this" refers directly to the current executing object instance inside instance methods and constructors.'
      },
      {
        id: 3,
        question: 'Which among the following represents correct constructor?',
        options: [
          'A. –classname()',
          'B. classname()',
          'C. ()classname',
          'D. ~classname()'
        ],
        answer: 'B. classname()',
        explanation: 'A constructor shares the exact name of the class followed by parentheses with no return type. ~classname() represents a destructor.'
      },
      {
        id: 4,
        question: 'What is the purpose of the ”try”, ”catch”, and ”finally” blocks in exception handling?',
        options: [
          'A. To handle errors and exceptions',
          'B. To create objects',
          'C. To define a class',
          'D. To implement polymorphism'
        ],
        answer: 'A. To handle errors and exceptions',
        explanation: 'Try-catch-finally blocks form the core exception handling construct: try monitors risky code, catch handles specific error conditions, and finally guarantees resource cleanup.'
      },
      {
        id: 5,
        question: 'Which of the following is NOT a valid modifier for a class in Java?',
        options: [
          'A. public',
          'B. private',
          'C. protected',
          'D. static'
        ],
        answer: 'C. protected',
        explanation: 'Top-level classes in Java can only be declared as "public" or default (package-private). The "protected" access modifier is not permitted for outer classes.'
      },
      {
        id: 6,
        question: 'What is the purpose of the ”instanceof” operator in Java?',
        options: [
          'A. To check if an object is an instance of a particular class',
          'B. To create an instance of a class',
          'C. To check if a class is abstract',
          'D. To check if a class is final'
        ],
        answer: 'A. To check if an object is an instance of a particular class',
        explanation: 'The instanceof operator tests at runtime whether an object reference is an instance of a specific class, subclass, or interface.'
      },
      {
        id: 7,
        question: 'What is the difference between method overloading and method overriding?',
        options: [
          'A. Overloading is static binding, and overriding is dynamic binding',
          'B. Overloading is dynamic binding, and overriding is static binding',
          'C. Overloading has the same method name with different parameters, while overriding has the same method signature',
          'D. Overloading has the same method signature, while overriding has a different method signature'
        ],
        answer: 'A. Overloading is static binding, and overriding is dynamic binding',
        explanation: 'Overloading is resolved at compile time (early/static binding); overriding is resolved at runtime based on the actual object type (late/dynamic binding).'
      },
      {
        id: 8,
        question: 'Which keyword is used to prevent a method from being overridden in Java?',
        options: [
          'A. static',
          'B. final',
          'C. abstract',
          'D. private'
        ],
        answer: 'B. final',
        explanation: 'Declaring a method as "final" locks its implementation, preventing any subclass from overriding it.'
      },
      {
        id: 9,
        question: 'What happens when an object is passed by reference?',
        options: [
          'A. Destructor is called at end of function',
          'B. Destructor is called when called explicitly',
          'C. Destructor is not called',
          'D. Destructor is called when function is out of scope'
        ],
        answer: 'C. Destructor is not called',
        explanation: 'When an object is passed by reference in C++, no temporary copy of the object is created, so no destructor is called when the function completes.'
      },
      {
        id: 10,
        question: 'How to overcome diamond problem?',
        options: [
          'A. Using seperate derived class',
          'B. Using virtual keyword with same name function',
          'C. Can’t be done',
          'D. Using alias name'
        ],
        answer: 'B. Using virtual keyword with same name function',
        explanation: 'In C++, virtual inheritance (using the "virtual" keyword when inheriting from a base class, e.g. class B : virtual public A) ensures that only a single instance of the base class is shared, resolving the diamond problem.'
      }
    ],
    subjective: [
      {
        id: 1,
        q: '1. How string is used in C++? How can we create string object?',
        category: 'C++ OOP',
        ans: '• <strong>Usage:</strong> In C++, the <code>std::string</code> class (from <code>&lt;string&gt;</code>) manages dynamic character arrays automatically, eliminating manual memory allocation and null-termination bugs common in C-style <code>char[]</code> strings.<br>' +
             '• <strong>Creating String Objects:</strong><br>' +
             '  – <em>Default constructor:</em> <code>std::string s1;</code> (empty string)<br>' +
             '  – <em>From C-string literal:</em> <code>std::string s2 = "Hello World";</code><br>' +
             '  – <em>Copy constructor:</em> <code>std::string s3(s2);</code><br>' +
             '  – <em>Fill constructor:</em> <code>std::string s4(5, \'A\');</code> (creates "AAAAA")'
      },
      {
        id: 2,
        q: '2. Write a C++ program involving a virtual function.',
        category: 'C++ OOP & Polymorphism',
        ans: '• <strong>Virtual Function Demonstration in C++:</strong><br>' +
             '<pre style="background: rgba(0,0,0,0.3); padding: 0.85rem; border-radius: 6px; color: #a5b4fc; font-family: monospace;">' +
             '#include &lt;iostream&gt;\n' +
             'using namespace std;\n\n' +
             'class Base {\n' +
             'public:\n' +
             '    virtual void display() {\n' +
             '        cout &lt;&lt; "Base Display" &lt;&lt; endl;\n' +
             '    }\n' +
             '    virtual ~Base() {} // Virtual destructor\n' +
             '};\n\n' +
             'class Derived : public Base {\n' +
             'public:\n' +
             '    void display() override {\n' +
             '        cout &lt;&lt; "Derived Display" &lt;&lt; endl;\n' +
             '    }\n' +
             '};\n\n' +
             'int main() {\n' +
             '    Base* ptr = new Derived();\n' +
             '    ptr-&gt;display(); // Output: Derived Display (Late binding via vtable)\n' +
             '    delete ptr;\n' +
             '    return 0;\n' +
             '}' +
             '</pre>'
      },
      {
        id: 3,
        q: '3. Draw a neat and clean sketch to show the different streams available in C++.',
        category: 'C++ I/O Stream Hierarchy',
        ans: '• <strong>C++ Stream Hierarchy Diagram:</strong><br>' +
             '<pre style="background: rgba(0,0,0,0.3); padding: 0.85rem; border-radius: 6px; color: #a5b4fc; font-family: monospace;">' +
             '                        ios_base (Base class)\n' +
             '                            |\n' +
             '                           ios\n' +
             '                         /     \\\n' +
             '                   istream     ostream\n' +
             '                 /    |   \\   /   |   \\\n' +
             '            ifstream  |   iostream|  ofstream\n' +
             '                      |      |    |\n' +
             '                   (cin)   fstream (cout, cerr, clog)\n' +
             '</pre>' +
             '• <strong>Key Stream Types:</strong><br>' +
             '  – <code>istream:</code> Handles input operations (e.g., <code>cin</code>).<br>' +
             '  – <code>ostream:</code> Handles output operations (e.g., <code>cout</code>, <code>cerr</code>).<br>' +
             '  – <code>iostream:</code> Handles both input and output simultaneously.<br>' +
             '  – <code>ifstream / ofstream / fstream:</code> Dedicated file-stream handlers.'
      },
      {
        id: 4,
        q: '4. Differentiate between formatted and unformatted I/O. Discuss its different functions.',
        category: 'C++ I/O Operations',
        ans: '• <strong>Formatted I/O:</strong> Reads and writes data while converting internal binary data into formatted ASCII characters according to specified data types.<br>' +
             '  – <em>Functions:</em> Stream extraction (<code>cin &gt;&gt; var</code>), stream insertion (<code>cout &lt;&lt; var</code>), and manipulators (<code>setw()</code>, <code>setprecision()</code>, <code>hex</code>, <code>endl</code>).<br>' +
             '• <strong>Unformatted I/O:</strong> Reads and writes raw bytes directly without any internal formatting, interpretation, or delimiter checking.<br>' +
             '  – <em>Functions:</em> <code>get()</code>, <code>put()</code>, <code>getline()</code>, <code>read()</code>, <code>write()</code>, <code>gcount()</code>.'
      },
      {
        id: 5,
        q: '5. Write a program in C++ to extract character from a string.',
        category: 'C++ String Programming',
        ans: '• <strong>C++ Character Extraction Program:</strong><br>' +
             '<pre style="background: rgba(0,0,0,0.3); padding: 0.85rem; border-radius: 6px; color: #a5b4fc; font-family: monospace;">' +
             '#include &lt;iostream&gt;\n' +
             '#include &lt;string&gt;\n' +
             'using namespace std;\n\n' +
             'int main() {\n' +
             '    string str = "ObjectOriented";\n' +
             '    int index = 6;\n\n' +
             '    // Method 1: Array subscript operator []\n' +
             '    char ch1 = str[index];\n\n' +
             '    // Method 2: at() member function (with bounds-checking)\n' +
             '    char ch2 = str.at(index);\n\n' +
             '    cout &lt;&lt; "Character at index " &lt;&lt; index &lt;&lt; " using []: " &lt;&lt; ch1 &lt;&lt; endl;\n' +
             '    cout &lt;&lt; "Character at index " &lt;&lt; index &lt;&lt; " using at(): " &lt;&lt; ch2 &lt;&lt; endl;\n' +
             '    return 0;\n' +
             '}' +
             '</pre>'
      },
      {
        id: 6,
        q: '6. When do we need multiple catch blocks for a single try block? Give an example.',
        category: 'Exception Handling',
        ans: '• <strong>When Needed:</strong> When code inside a try block can throw multiple, distinct types of exceptions that require specialized handling, logging, or recovery actions (e.g., separating division errors from array bounds violations).<br>' +
             '• <strong>Order Rule:</strong> Catch blocks must be ordered from most specific subclass to most general superclass.<br>' +
             '• <strong>Code Example:</strong><br>' +
             '<pre style="background: rgba(0,0,0,0.3); padding: 0.85rem; border-radius: 6px; color: #a5b4fc; font-family: monospace;">' +
             'try {\n' +
             '    int[] arr = new int[5];\n' +
             '    arr[10] = 50 / 0;\n' +
             '} catch (ArithmeticException e) {\n' +
             '    System.err.println("Arithmetic error: Division by zero!");\n' +
             '} catch (ArrayIndexOutOfBoundsException e) {\n' +
             '    System.err.println("Array bounds exceeded: " + e.getMessage());\n' +
             '} catch (Exception e) {\n' +
             '    System.err.println("General exception caught: " + e.getMessage());\n' +
             '}' +
             '</pre>'
      }
    ]
  }
];
