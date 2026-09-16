/**
 * OOP_FAQ_DATA: 219 Frequently Asked Interview Questions with In-Depth Technical Answers & Real-World Examples
 * Source: Chapter 4 Object-Oriented Programming (OOP) Concepts & Placement Preparation Booklet
 * Covers: Core OOP Pillars, Classes & Objects, Inheritance, Polymorphism, Encapsulation, Abstraction,
 * Interfaces, Abstract Classes, Exception Handling, Design Patterns, OOAD, SOLID Principles & Engineering Best Practices.
 */

const OOP_FAQ_DATA = [
  // =========================================================================
  // SECTION 1: CORE OOP CONCEPTS & FOUNDATIONS (Q1 - Q55)
  // =========================================================================
  {
    id: 1,
    q: "1. What is Object-Oriented Programming (OOP) and why is it important?",
    category: "OOP Fundamentals",
    ans: "• <strong>Definition:</strong> Object-Oriented Programming (OOP) is a programming paradigm organized around real-world entities called <em>objects</em> (which encapsulate state/data in fields and behavior/operations in methods), rather than actions and pure logic.<br>" +
         "• <strong>Why It Is Important:</strong><br>" +
         "  - <em>Modularity:</em> Distinct objects allow isolated debugging and clear component boundaries.<br>" +
         "  - <em>Reusability:</em> Classes can be reused across applications through inheritance and composition, eliminating code duplication.<br>" +
         "  - <em>Extensibility:</em> New functionality can be added with minimal changes to existing stable code (Open/Closed Principle).<br>" +
         "  - <em>Security:</em> Encapsulation and access modifiers prevent unauthorized direct tampering with internal object state.<br>" +
         "• <em>Real-World Analogy:</em> A modern banking application models accounts (`SavingsAccount`, `CheckingAccount`) as objects with private balances and public methods (`deposit()`, `withdraw()`), preventing arbitrary modifications."
  },
  {
    id: 2,
    q: "2. Explain the four pillars of Object-Oriented Programming.",
    category: "OOP Fundamentals",
    ans: "• <strong>1. Encapsulation:</strong> Bundles data attributes and methods into a single unit (class) while restricting direct outside access via private/protected modifiers and validating access through getters and setters.<br>" +
         "• <strong>2. Abstraction:</strong> Hides complex internal execution details and displays only essential functional interfaces to users (e.g., using abstract classes and interfaces).<br>" +
         "• <strong>3. Inheritance:</strong> Mechanism where a derived class (subclass) inherits attributes and methods from an existing base class (superclass), creating an 'IS-A' hierarchy and promoting code reuse.<br>" +
         "• <strong>4. Polymorphism:</strong> Enables a single interface or method call to behave differently based on the actual runtime object (achieved via method overloading and overriding).<br>" +
         "• <em>Summary:</em> Encapsulation protects data; Abstraction manages complexity; Inheritance establishes hierarchical reuse; Polymorphism provides runtime flexibility."
  },
  {
    id: 3,
    q: "3. What is encapsulation? How does it help in OOP?",
    category: "Encapsulation",
    ans: "• <strong>Definition:</strong> Encapsulation is the wrapping of data (variables) and code (methods) into a cohesive single unit (class), hiding internal object representations from the outside world.<br>" +
         "• <strong>How It Helps:</strong><br>" +
         "  - <em>Data Hiding & Security:</em> Prevents external code from corrupting internal state (e.g., setting a negative bank balance).<br>" +
         "  - <em>Validation & Control:</em> Setter methods enforce business invariants before mutating state.<br>" +
         "  - <em>Maintainability:</em> Internal class implementation details can change without breaking client code interacting with public methods.<br>" +
         "• <em>Code Example:</em><br>" +
         "  <code>public class BankAccount { private double balance; public void deposit(double amt) { if(amt > 0) balance += amt; } public double getBalance() { return balance; } }</code>"
  },
  {
    id: 4,
    q: "4. Describe inheritance and its significance in OOP.",
    category: "Inheritance",
    ans: "• <strong>Definition:</strong> Inheritance is the mechanism allowing a new class (subclass) to acquire properties and behaviors from an existing class (superclass), establishing an 'IS-A' relationship.<br>" +
         "• <strong>Significance:</strong><br>" +
         "  - <em>Code Reusability:</em> Common logic (e.g., employee name, ID, authentication) is written once in base class `Employee` and shared by `Manager`, `Developer`, and `Intern`.<br>" +
         "  - <em>Method Overriding:</em> Subclasses can customize specific inherited behaviors while retaining a polymorphic identity.<br>" +
         "  - <em>Class Hierarchies:</em> Reflects real-world taxological classifications and models domain semantics cleanly.<br>" +
         "• <em>Caveat:</em> Overuse can lead to tight coupling ('fragile base class problem'); favor composition when relationship is 'HAS-A'."
  },
  {
    id: 5,
    q: "5. What is polymorphism? Provide examples to illustrate its usage.",
    category: "Polymorphism",
    ans: "• <strong>Definition:</strong> Polymorphism ('many forms') allows entities such as methods, operators, or objects to behave differently depending on the execution context.<br>" +
         "• <strong>Types:</strong><br>" +
         "  1. <em>Compile-Time (Static):</em> Method overloading and operator overloading (resolved at compile-time).<br>" +
         "  2. <em>Runtime (Dynamic):</em> Method overriding resolved at runtime via dynamic method dispatch (vtable).<br>" +
         "• <em>Example:</em><br>" +
         "  <code>Shape s = new Circle(); s.draw(); // Calls Circle's draw() at runtime via late binding</code><br>" +
         "• <em>Benefit:</em> Enables extensible code; adding a new `Triangle` shape requires zero changes to consumer functions iterating over `List<Shape>`."
  },
  {
    id: 6,
    q: "6. Differentiate between abstraction and encapsulation.",
    category: "Core Differences",
    ans: "• <strong>Encapsulation (Information Hiding):</strong><br>" +
         "  - Focuses on <em>how</em> data is packaged and hidden.<br>" +
         "  - Bundles state and methods together; restricts access using <code>private</code>, <code>protected</code>, and <code>public</code> modifiers.<br>" +
         "  - Solves the problem of data integrity and unwanted external modifications.<br>" +
         "• <strong>Abstraction (Complexity Hiding):</strong><br>" +
         "  - Focuses on <em>what</em> an entity does rather than how it operates internally.<br>" +
         "  - Exposes clean interfaces and abstracts implementation details using abstract classes and interfaces.<br>" +
         "  - Solves the problem of high cognitive load and system design complexity.<br>" +
         "• <em>Analogy:</em> A car's gas pedal is an <em>abstraction</em> (press to accelerate); the engine's fuel injectors and cylinders are <em>encapsulated</em> under the hood."
  },
  {
    id: 7,
    q: "7. Explain the concept of a class and an object in OOP.",
    category: "Classes & Objects",
    ans: "• <strong>Class:</strong> A logical blueprint or template defining the structure (fields/attributes) and behavior (methods/functions) common to all objects of that type. It does not allocate physical memory for instance data.<br>" +
         "• <strong>Object:</strong> A physical runtime instance of a class created in heap memory via a constructor. It possesses its own unique state (identity and field values) and shares behavior defined by its class.<br>" +
         "• <em>Analogy:</em> The blueprint of a house is the <strong>Class</strong>; the physical house built from bricks and mortar in which someone lives is the <strong>Object</strong>."
  },
  {
    id: 8,
    q: "8. What is a constructor? How is it different from a method?",
    category: "Classes & Objects",
    ans: "• <strong>Constructor:</strong> A special member subroutine invoked automatically during object instantiation to initialize state and allocate necessary resources.<br>" +
         "• <strong>Key Differences:</strong><br>" +
         "  - <em>Name:</em> Constructor must share the exact name of the enclosing class; methods have custom descriptive names.<br>" +
         "  - <em>Return Type:</em> Constructors have no return type (not even <code>void</code>); methods must declare a return type.<br>" +
         "  - <em>Invocation:</em> Constructors are invoked implicitly via <code>new</code>; methods are called explicitly on object references.<br>" +
         "  - <em>Inheritance:</em> Constructors are not inherited by subclasses (they are invoked via <code>super()</code>); methods can be inherited and overridden."
  },
  {
    id: 9,
    q: "9. What is method overloading and method overriding? Provide examples.",
    category: "Polymorphism",
    ans: "• <strong>Method Overloading (Compile-Time):</strong> Multiple methods in the same class share the same name but have distinct parameter signatures (different parameter counts, data types, or orders).<br>" +
         "  - <em>Example:</em> <code>int add(int a, int b)</code> vs <code>double add(double a, double b)</code>.<br>" +
         "• <strong>Method Overriding (Runtime):</strong> A subclass provides a specific implementation of a method declared in its superclass with the exact same signature and return type.<br>" +
         "  - <em>Example:</em> <code>class Animal { void sound() { print('noise'); } }</code> &rarr; <code>class Dog extends Animal { void sound() { print('bark'); } }</code>."
  },
  {
    id: 10,
    q: "10. Discuss the importance of access modifiers in OOP.",
    category: "Encapsulation",
    ans: "• <strong>Definition:</strong> Access modifiers are keywords that specify the visibility and scope of classes, variables, constructors, and methods.<br>" +
         "• <strong>The Standard Visibility Levels:</strong><br>" +
         "  - <code>private:</code> Accessible only within the declaring class (strict encapsulation).<br>" +
         "  - <code>default (package-private):</code> Accessible within the declaring package.<br>" +
         "  - <code>protected:</code> Accessible within the package and by subclasses through inheritance.<br>" +
         "  - <code>public:</code> Unrestricted access across any package and class.<br>" +
         "• <strong>Importance:</strong> Enforces the principle of least privilege, protects sensitive variables from race conditions and illegal mutations, and creates clean public API boundaries."
  },
  {
    id: 11,
    q: "11. Explain the difference between composition and inheritance.",
    category: "Design Principles",
    ans: "• <strong>Inheritance ('IS-A'):</strong> White-box reuse where a subclass extends a superclass. Tightly couples parent and child, exposes superclass internals, and suffers from the fragile base class problem.<br>" +
         "• <strong>Composition ('HAS-A'):</strong> Black-box reuse where a class contains references to other objects and delegates tasks to them.<br>" +
         "• <strong>Key Comparison:</strong><br>" +
         "  - Composition can change behavior dynamically at runtime by swapping internal component references; inheritance binds behavior statically at compile-time.<br>" +
         "  - <em>Rule of Thumb:</em> 'Favor composition over inheritance' to maintain loose coupling, easier unit testing, and higher maintainability."
  },
  {
    id: 12,
    q: "12. What is a static method and a static variable? How are they different from instance methods and variables?",
    category: "Classes & Objects",
    ans: "• <strong>Static Variable:</strong> A variable associated with the class itself rather than any object instance. Exactly one copy exists in memory (in Method Area/Metaspace) shared across all instances.<br>" +
         "• <strong>Static Method:</strong> A method that can be invoked directly on the class name without instantiating an object (e.g., <code>Math.sqrt()</code>). It cannot access instance variables or call instance methods directly because it lacks a <code>this</code> pointer.<br>" +
         "• <strong>Instance Members:</strong> Belong to individual objects, initialized on the heap each time <code>new</code> is called, and maintain separate states for each instance."
  },
  {
    id: 13,
    q: "13. What are abstract classes and interfaces? How are they similar and different?",
    category: "Abstract Classes & Interfaces",
    ans: "• <strong>Similarities:</strong> Both cannot be instantiated directly, both provide abstractions, and both require implementing subclasses to provide concrete bodies for abstract methods.<br>" +
         "• <strong>Differences:</strong><br>" +
         "  - <em>Multiple Inheritance:</em> A class can implement multiple interfaces, but can extend only one abstract class.<br>" +
         "  - <em>State & Fields:</em> Abstract classes can have instance variables and non-static fields; interfaces only have <code>public static final</code> constants (in Java).<br>" +
         "  - <em>Constructors:</em> Abstract classes have constructors (called via <code>super()</code>); interfaces have no constructors.<br>" +
         "  - <em>Use Case:</em> Use abstract classes for closely related classes sharing core code ('is-a'); use interfaces for peripheral capabilities across unrelated classes ('can-do', e.g., `Comparable`, `Serializable`)."
  },
  {
    id: 14,
    q: "14. Discuss the advantages of using interfaces in OOP.",
    category: "Abstract Classes & Interfaces",
    ans: "• <strong>1. Loose Coupling:</strong> Consumers depend on abstract contracts rather than concrete implementations (Dependency Inversion Principle).<br>" +
         "• <strong>2. Multiple Inheritance:</strong> Overcomes single-class inheritance limitations by allowing a class to implement multiple interfaces simultaneously.<br>" +
         "• <strong>3. Testability & Mocking:</strong> Enables unit testing frameworks to inject mock or stub implementations easily.<br>" +
         "• <strong>4. Standardization & Polymorphism:</strong> Enforces consistent method contracts across distinct, unrelated system modules (e.g., `PaymentProcessor` implemented by `StripeGateway`, `PayPalGateway`)."
  },
  {
    id: 15,
    q: "15. What is the purpose of the 'super' keyword in Java and how is it used?",
    category: "Inheritance",
    ans: "• <strong>Definition:</strong> In Java, <code>super</code> is a reference variable used to refer directly to the immediate parent (superclass) object.<br>" +
         "• <strong>Three Core Uses:</strong><br>" +
         "  1. <em>Invoke Parent Constructor:</em> <code>super(args);</code> must be the first statement in the child constructor to initialize parent fields.<br>" +
         "  2. <em>Access Overridden Methods:</em> <code>super.methodName();</code> invokes the superclass version of a method that has been overridden in the child.<br>" +
         "  3. <em>Access Hidden Parent Fields:</em> <code>super.fieldName;</code> resolves ambiguity when a child class declares a variable with the same name as the parent."
  },
  {
    id: 16,
    q: "16. Explain the concept of a 'final' class, method, and variable in Java.",
    category: "Java OOP",
    ans: "• <strong>Final Variable:</strong> Creates a constant whose value cannot be reassigned once initialized (e.g., <code>final double PI = 3.14159;</code>).<br>" +
         "• <strong>Final Method:</strong> Prevents method overriding in subclasses, ensuring that critical security or core business algorithms cannot be altered.<br>" +
         "• <strong>Final Class:</strong> Prevents class inheritance (cannot be extended). Used for immutable classes like <code>String</code>, <code>Integer</code>, and utility classes to preserve security and thread-safety."
  },
  {
    id: 17,
    q: "17. Discuss the concept of 'serialization' in Java and its significance in OOP.",
    category: "Java OOP",
    ans: "• <strong>Definition:</strong> Serialization is the process of converting an object's state into a byte stream, allowing it to be saved to disk, stored in a database, or transmitted across a network.<br>" +
         "• <strong>Deserialization:</strong> The reverse process of reconstructing the live Java object in memory from the byte stream.<br>" +
         "• <strong>Significance:</strong> Marked by the <code>java.io.Serializable</code> marker interface; essential for distributed caching (Redis), remote procedure calls (RMI), session persistence in web servers, and inter-process message passing.<br>" +
         "• <em>Keyword:</em> Fields marked with <code>transient</code> are ignored during serialization."
  },
  {
    id: 18,
    q: "18. What is the 'this' keyword used for in Java?",
    category: "Classes & Objects",
    ans: "• <strong>Definition:</strong> <code>this</code> is a reference variable pointing to the current object instance whose method or constructor is currently executing.<br>" +
         "• <strong>Key Uses:</strong><br>" +
         "  1. Resolves shadowing between instance variables and parameters (e.g., <code>this.name = name;</code>).<br>" +
         "  2. Invokes overloaded constructors in the same class (Constructor Chaining via <code>this(args);</code>).<br>" +
         "  3. Passes the current object as an argument to other methods or event listeners.<br>" +
         "  4. Returns the current object from methods to support method chaining (Builder pattern)."
  },
  {
    id: 19,
    q: "19. Explain the concept of method chaining in OOP.",
    category: "Design Principles",
    ans: "• <strong>Definition:</strong> Method chaining is a syntax idiom where multiple methods are called sequentially in a single expression on the same object (e.g., <code>obj.step1().step2().step3();</code>).<br>" +
         "• <strong>Implementation Mechanism:</strong> Each method in the chain performs its operation and returns <code>this</code> (the reference to the current object instance).<br>" +
         "• <strong>Benefits:</strong> Cleaner, more readable code, fluent APIs, and elimination of repetitive temporary local variables (widely used in StringBuilder, Streams API, and the Builder Pattern)."
  },
  {
    id: 20,
    q: "20. What are design patterns, and can you discuss some commonly used design patterns in OOP?",
    category: "Design Patterns",
    ans: "• <strong>Definition:</strong> Design patterns are formalized, reusable software architecture solutions to recurring design problems within a given context in software design.<br>" +
         "• <strong>The Three Gang of Four (GoF) Categories:</strong><br>" +
         "  1. <em>Creational:</em> Singleton (single global instance), Factory Method (instantiates subclasses without exposing creation logic), Builder (constructs complex objects step-by-step).<br>" +
         "  2. <em>Structural:</em> Adapter (bridges incompatible interfaces), Decorator (dynamically adds responsibilities), Facade (simplified interface to a complex subsystem).<br>" +
         "  3. <em>Behavioral:</em> Observer (pub/sub state notification), Strategy (encapsulates interchangeable algorithms), Command (encapsulates a request as an object)."
  },
  {
    id: 21,
    q: "21. What is the difference between a class and an object?",
    category: "Classes & Objects",
    ans: "• <strong>Class:</strong> An abstract template, declared using the <code>class</code> keyword, containing logic and definitions. No memory is allocated on the heap for data until instantiation.<br>" +
         "• <strong>Object:</strong> A concrete entity created via <code>new</code>, having physical space allocated in heap memory, holding specific values for its attributes.<br>" +
         "• <em>Summary Table:</em> Class = Concept / Type / Factory; Object = Instance / Physical Realization."
  },
  {
    id: 22,
    q: "22. Explain the concept of constructor chaining.",
    category: "Classes & Objects",
    ans: "• <strong>Definition:</strong> Constructor chaining is the technique of calling one constructor from another constructor within the same class or from a parent class during object creation.<br>" +
         "• <strong>Within Same Class:</strong> Achieved using <code>this()</code> with different parameters.<br>" +
         "• <strong>Across Class Hierarchy:</strong> Achieved using <code>super()</code> to invoke the base class constructor.<br>" +
         "• <strong>Purpose:</strong> Avoids duplicating initialization code across overloaded constructors and ensures orderly hierarchical setup from top of tree to bottom."
  },
  {
    id: 23,
    q: "23. Discuss the role of the 'this' keyword in constructors.",
    category: "Classes & Objects",
    ans: "• <strong>Role 1 (Disambiguation):</strong> Clarifies assignment between constructor parameters and instance fields having identical names: <code>this.age = age;</code>.<br>" +
         "• <strong>Role 2 (Constructor Delegation):</strong> Allows an overloaded constructor with few parameters to call a comprehensive constructor with default values: <code>public User(String name) { this(name, 'default@mail.com'); }</code>.<br>" +
         "• <strong>Rule:</strong> <code>this()</code> must be the absolute first statement inside the constructor body."
  },
  {
    id: 24,
    q: "24. What is the significance of the 'toString()' method in Java?",
    category: "Java OOP",
    ans: "• <strong>Origin:</strong> Declared in <code>java.lang.Object</code>, the universal superclass of all Java classes.<br>" +
         "• <strong>Default Implementation:</strong> Returns <code>getClass().getName() + '@' + Integer.toHexString(hashCode())</code>.<br>" +
         "• <strong>Significance & Overriding:</strong> Overriding <code>toString()</code> provides a meaningful, human-readable textual representation of object state, which is invaluable for logging, debugging, and printing to standard output."
  },
  {
    id: 25,
    q: "25. How does method overriding differ from method overloading?",
    category: "Polymorphism",
    ans: "• <strong>Overloading:</strong> Occurs within the same class; method signatures differ (parameter types/counts); resolved at compile time; return type alone cannot differentiate methods.<br>" +
         "• <strong>Overriding:</strong> Occurs across inherited classes (Subclass & Superclass); method signature must match exactly; resolved at runtime based on object type (dynamic dispatch); requires inheritance."
  },
  {
    id: 26,
    q: "26. Describe the concept of a 'static' class in Java.",
    category: "Java OOP",
    ans: "• <strong>Top-Level Classes:</strong> Cannot be declared <code>static</code> in Java.<br>" +
         "• <strong>Static Nested Class:</strong> A class defined inside another class marked with the <code>static</code> keyword.<br>" +
         "• <strong>Behavior:</strong> Unlike non-static inner classes, a static nested class does not hold an implicit reference to an outer class instance, saving memory and avoiding memory leaks. It can be instantiated directly via <code>Outer.StaticNested nested = new Outer.StaticNested();</code>."
  },
  {
    id: 27,
    q: "27. What is the purpose of the 'instanceof' operator in Java?",
    category: "Java OOP",
    ans: "• <strong>Purpose:</strong> A binary comparison operator that tests whether an object reference is an instance of a specific class, subclass, or interface at runtime.<br>" +
         "• <strong>Syntax:</strong> <code>if (obj instanceof String) { ... }</code>.<br>" +
         "• <strong>Safety:</strong> Prevents <code>ClassCastException</code> before performing downcasting. Evaluates to <code>false</code> if the reference is <code>null</code>.<br>" +
         "• <em>Java 16+ Pattern Matching:</em> <code>if (obj instanceof String s) { print(s.toUpperCase()); }</code>."
  },
  {
    id: 28,
    q: "28. Explain the concept of a 'package' in Java and its relevance to OOP.",
    category: "Encapsulation",
    ans: "• <strong>Definition:</strong> A namespace that organizes related classes and interfaces into a directory hierarchy (e.g., <code>com.company.service</code>).<br>" +
         "• <strong>Relevance to OOP:</strong><br>" +
         "  - Prevents naming collisions between classes sharing identical names.<br>" +
         "  - Provides package-private access level (default visibility), enabling modular encapsulation where utility classes stay hidden inside the package.<br>" +
         "  - Enhances code maintainability and modular deployment."
  },
  {
    id: 29,
    q: "29. Discuss the importance of the 'equals()' and 'hashCode()' methods in Java.",
    category: "Java OOP",
    ans: "• <strong>The Contract:</strong> If two objects are equal according to <code>equals()</code>, they <em>must</em> return the exact same integer from <code>hashCode()</code>.<br>" +
         "• <strong>Default Object Behavior:</strong> <code>equals()</code> compares reference equality (identity), and <code>hashCode()</code> returns the memory address hash.<br>" +
         "• <strong>Importance in Collections:</strong> Hash-based collections (<code>HashMap</code>, <code>HashSet</code>) compute hash code to determine bucket location, then invoke <code>equals()</code> to resolve collisions. Breaking this contract results in lost keys, duplicate elements in sets, and severe data bugs."
  },
  {
    id: 30,
    q: "30. What is the difference between shallow copy and deep copy in Java?",
    category: "Classes & Objects",
    ans: "• <strong>Shallow Copy:</strong> Creates a new object, but copies references to nested objects. Both original and clone point to the same child objects in memory. Modifying a nested child object via the clone alters the original object.<br>" +
         "• <strong>Deep Copy:</strong> Creates a new object and recursively duplicates all nested objects, producing an entirely independent copy. Modifying the clone has zero effect on the original.<br>" +
         "• <em>Implementation:</em> Shallow copies use <code>Object.clone()</code>; deep copies use copy constructors, serialization, or dedicated deep clone libraries."
  },
  {
    id: 31,
    q: "31. Explain the principles of cohesion and coupling in OOP.",
    category: "Design Principles",
    ans: "• <strong>Cohesion:</strong> The degree to which elements within a class or module belong together functionally. <em>High Cohesion</em> is desirable: a class focuses exclusively on a single well-defined task (Single Responsibility).<br>" +
         "• <strong>Coupling:</strong> The degree of interdependence between separate software modules. <em>Low (Loose) Coupling</em> is desirable: classes interact through interfaces rather than concrete bindings.<br>" +
         "• <strong>Golden Rule of Software Architecture:</strong> 'Aim for High Cohesion and Low Coupling'."
  },
  {
    id: 32,
    q: "32. Discuss the concept of a 'singleton' class in Java and its implementation.",
    category: "Design Patterns",
    ans: "• <strong>Definition:</strong> A creational design pattern that restricts class instantiation to a single unique instance throughout the application lifecycle, providing a global access point.<br>" +
         "• <strong>Key Ingredients:</strong><br>" +
         "  1. <code>private</code> constructor (prevents instantiation via <code>new</code>).<br>" +
         "  2. <code>private static volatile</code> instance variable.<br>" +
         "  3. <code>public static</code> accessor method (e.g., <code>getInstance()</code>) implementing Double-Checked Locking or Bill Pugh Singleton Holder.<br>" +
         "• <em>Enum Singleton:</em> In Java, declaring an <code>enum</code> is the simplest, thread-safe, and serialization-proof way to implement a singleton."
  },
  {
    id: 33,
    q: "33. What is the 'final' keyword used for in Java? Provide examples.",
    category: "Java OOP",
    ans: "• <strong>Final Variable:</strong> Immutable value. <code>final int MAX_USERS = 100;</code>.<br>" +
         "• <strong>Final Method:</strong> Cannot be overridden by subclasses. <code>public final void authenticate() { ... }</code>.<br>" +
         "• <strong>Final Class:</strong> Cannot be inherited/extended. <code>public final class SystemSecurity { ... }</code>.<br>" +
         "• <strong>Final Parameter:</strong> Prevents altering argument values inside a method body."
  },
  {
    id: 34,
    q: "34. How does exception handling relate to Object-Oriented Programming?",
    category: "Exception Handling",
    ans: "• <strong>Object-Oriented Architecture:</strong> In OOP, exceptions are not primitive error codes; they are full-fledged objects inheriting from a class hierarchy (<code>Throwable</code> &rarr; <code>Exception</code> & <code>Error</code>).<br>" +
         "• <strong>Polymorphic Handling:</strong> Catch blocks leverage polymorphism to handle specific exceptions first, followed by generalized superclass catch blocks: <code>catch (FileNotFoundException e) ... catch (IOException e)</code>.<br>" +
         "• <strong>Clean Separation:</strong> Decouples core business logic from error recovery logic, propagating exceptional states cleanly up the call stack."
  },
  {
    id: 35,
    q: "35. Describe the concept of composition over inheritance.",
    category: "Design Principles",
    ans: "• <strong>Principle:</strong> Achieving polymorphism and code reuse by composing objects containing other objects rather than extending classes.<br>" +
         "• <strong>Why:</strong><br>" +
         "  - Inheritance violates encapsulation by exposing parent internals to children.<br>" +
         "  - Subclass behavior cannot be swapped at runtime.<br>" +
         "  - Deep inheritance hierarchies become brittle and unmaintainable.<br>" +
         "• <em>Example:</em> A `Car` should <em>have an</em> `Engine` (composition), rather than `Car` <em>inheriting from</em> `Engine`."
  },
  {
    id: 36,
    q: "36. What are abstract data types, and how do they relate to OOP?",
    category: "Core Concepts",
    ans: "• <strong>Definition:</strong> An Abstract Data Type (ADT) is a mathematical specification of a data structure defining its values and operations from a user's perspective, completely independent of implementation.<br>" +
         "• <strong>Relationship to OOP:</strong> In OOP, an interface or abstract class represents the ADT specification (e.g., `List`, `Queue`, `Map`), while concrete classes provide specific data structures (e.g., `ArrayList`, `LinkedList`, `HashMap`)."
  },
  {
    id: 37,
    q: "37. Explain the concept of method visibility in Java (public, private, protected, default).",
    category: "Encapsulation",
    ans: "• <code>private:</code> Accessible solely within the declaring class body.<br>" +
         "• <code>default (no modifier):</code> Accessible by any class within the same package.<br>" +
         "• <code>protected:</code> Accessible within the same package, and by subclasses located in any package.<br>" +
         "• <code>public:</code> Accessible everywhere across the JVM classpath."
  },
  {
    id: 38,
    q: "38. Discuss the role of interfaces in achieving multiple inheritance in Java.",
    category: "Abstract Classes & Interfaces",
    ans: "• <strong>The Problem:</strong> Java forbids multiple class inheritance to avoid the Diamond Problem (ambiguity when two parents define conflicting method implementations).<br>" +
         "• <strong>Interface Solution:</strong> A class can implement multiple interfaces (e.g., <code>class Robot implements Walkable, Speakable, Rechargeable</code>). Historically, interfaces only held method signatures, leaving no room for implementation conflicts.<br>" +
         "• <strong>Java 8+ Default Methods:</strong> If two interfaces declare identical default methods, the implementing class is forced by the compiler to explicitly override and disambiguate."
  },
  {
    id: 39,
    q: "39. What is the purpose of the 'super' keyword in Java constructors?",
    category: "Inheritance",
    ans: "• <strong>Purpose:</strong> Invokes the constructor of the direct superclass to initialize inherited fields before child-specific logic executes.<br>" +
         "• <strong>Rules:</strong><br>" +
         "  - Must be the first statement in the child constructor.<br>" +
         "  - If omitted, the Java compiler automatically inserts a parameterless <code>super();</code> call. If the parent lacks a no-arg constructor, a compile-time error occurs."
  },
  {
    id: 40,
    q: "40. Describe the principles of SOLID design and how they apply to OOP.",
    category: "SOLID Principles",
    ans: "• <strong>S (Single Responsibility):</strong> A class should have one, and only one, reason to change.<br>" +
         "• <strong>O (Open/Closed):</strong> Classes should be open for extension, but closed for modification.<br>" +
         "• <strong>L (Liskov Substitution):</strong> Subtypes must be substitutable for their base types without altering correctness.<br>" +
         "• <strong>I (Interface Segregation):</strong> Clients should not be forced to depend on methods they do not use.<br>" +
         "• <strong>D (Dependency Inversion):</strong> Depend on abstractions, not concrete implementations."
  },
  {
    id: 41,
    q: "41. What is the difference between method overloading and method overriding in OOP?",
    category: "Polymorphism",
    ans: "• <strong>Overloading:</strong> Same class, same name, different parameters, compile-time resolution, static polymorphism, return type can differ but cannot be sole discriminator.<br>" +
         "• <strong>Overriding:</strong> Subclass redefines superclass method with exact same signature and return type, runtime resolution, dynamic polymorphism, requires inheritance."
  },
  {
    id: 42,
    q: "42. Explain the concept of a virtual method in the context of OOP languages.",
    category: "Polymorphism",
    ans: "• <strong>Definition:</strong> A virtual method is a function whose execution is determined dynamically at runtime based on the actual object type rather than the reference type (late binding).<br>" +
         "• <strong>Implementation:</strong> Supported via a Virtual Method Table (vtable) and vptr pointers.<br>" +
         "• <strong>Language Differences:</strong> In C++, methods are non-virtual by default and require the <code>virtual</code> keyword. In Java, all non-static, non-final, non-private methods are virtual by default."
  },
  {
    id: 43,
    q: "43. How does OOP support the concept of code reusability?",
    category: "OOP Fundamentals",
    ans: "• <strong>1. Inheritance:</strong> Derived classes automatically inherit battle-tested properties and methods from parent classes.<br>" +
         "• <strong>2. Composition:</strong> Classes embed reusable helper objects (e.g., logging, validation) without altering hierarchies.<br>" +
         "• <strong>3. Generics & Templates:</strong> Classes and algorithms can operate over arbitrary types (e.g., `ArrayList<T>`).<br>" +
         "• <strong>4. Frameworks & Libraries:</strong> Pre-built class hierarchies provide standard patterns and domain logic."
  },
  {
    id: 44,
    q: "44. Discuss the role of constructors in OOP. Can a class have multiple constructors?",
    category: "Classes & Objects",
    ans: "• <strong>Role:</strong> Initializes an object's memory state, sets default attributes, establishes invariants, and acquires system resources (e.g., file handles, socket connections).<br>" +
         "• <strong>Multiple Constructors:</strong> Yes, a class can have multiple constructors via <strong>Constructor Overloading</strong>, allowing clients to instantiate objects using different combinations of initial data."
  },
  {
    id: 45,
    q: "45. What is the purpose of the 'this' pointer in C++?",
    category: "Classes & Objects",
    ans: "• <strong>Definition:</strong> In C++, <code>this</code> is an implicit constant pointer passed automatically to every non-static member function, pointing directly to the object that invoked the function.<br>" +
         "• <strong>Uses:</strong> Accessing members when parameter names shadow member variables (<code>this->x = x;</code>), returning reference for method chaining (<code>return *this;</code>), and preventing self-assignment in copy assignment operators (<code>if (this == &rhs) return *this;</code>)."
  },
  {
    id: 46,
    q: "46. Explain the concept of multiple inheritance and its challenges. How does it differ from single inheritance?",
    category: "Inheritance",
    ans: "• <strong>Single vs Multiple:</strong> In single inheritance, a class extends exactly one base class. In multiple inheritance (supported in C++, Python), a class extends two or more base classes simultaneously.<br>" +
         "• <strong>Challenges (The Diamond Problem):</strong> If Class A has a method `foo()`, and both Class B and C inherit from A and override `foo()`, when Class D inherits from both B and C, calling `d.foo()` creates ambiguity.<br>" +
         "• <em>Resolution:</em> C++ uses virtual inheritance; Python uses C3 Linearization (MRO); Java avoids multiple class inheritance entirely."
  },
  {
    id: 47,
    q: "47. What is the significance of the 'final' keyword in Java? How is it used in classes and methods?",
    category: "Java OOP",
    ans: "• <strong>Final Classes:</strong> Guarantees immutability and prevents malicious tampering (e.g., <code>final class SecurityManager</code> cannot be subclassed to bypass security checks).<br>" +
         "• <strong>Final Methods:</strong> Locks implementation so derived classes cannot change core behavior, while allowing the JVM compiler to perform method inlining for performance optimization."
  },
  {
    id: 48,
    q: "48. Can you elaborate on the principles of SOLID in object-oriented design?",
    category: "SOLID Principles",
    ans: "• <strong>SRP:</strong> Reduces blast radius of code changes by keeping classes focused on one actor.<br>" +
         "• <strong>OCP:</strong> Promotes writing code that accepts new features through inheritance/composition without touching audited existing code.<br>" +
         "• <strong>LSP:</strong> Ensures child classes do not violate parent contracts (e.g., a `Square` subclass should not break `Rectangle`'s width/height contract).<br>" +
         "• <strong>ISP:</strong> Prevents 'fat' interfaces; splits broad contracts into fine-grained interfaces.<br>" +
         "• <strong>DIP:</strong> Inverts architectural dependencies so high-level business policies remain unaffected by low-level database or network changes."
  },
  {
    id: 49,
    q: "49. Describe the difference between shallow copy and deep copy in the context of object cloning.",
    category: "Classes & Objects",
    ans: "• <strong>Shallow Copy:</strong> Bitwise copy of primitive attributes; object references are copied as references. Modifying internal objects in the clone modifies the original.<br>" +
         "• <strong>Deep Copy:</strong> Recursively duplicates all referenced child and grandchild objects. Creates a completely isolated, standalone memory graph."
  },
  {
    id: 50,
    q: "50. What is the role of an interface in Java, and how does it differ from an abstract class?",
    category: "Abstract Classes & Interfaces",
    ans: "• <strong>Role:</strong> Defines a strict contract of behavior that any implementing class must satisfy, facilitating complete decoupling and polymorphism.<br>" +
         "• <strong>Core Distinction:</strong> Interfaces represent capabilities ('can-do'), cannot have state, and support multiple implementation; abstract classes represent core identity ('is-a'), maintain state, and adhere to single inheritance."
  },
  {
    id: 51,
    q: "51. Discuss the importance of the 'equals' and 'hashCode' methods in Java.",
    category: "Java OOP",
    ans: "• <strong>equals():</strong> Defines logical equality based on state values instead of identity comparison (==).<br>" +
         "• <strong>hashCode():</strong> Computes an integer hash value utilized by hash tables to assign storage buckets.<br>" +
         "• <strong>Mandatory Rule:</strong> If <code>a.equals(b) == true</code>, then <code>a.hashCode() == b.hashCode()</code> must strictly be true."
  },
  {
    id: 52,
    q: "52. Explain the concept of a destructor in C++. How is it different from a constructor?",
    category: "Classes & Objects",
    ans: "• <strong>Destructor:</strong> A special member function (prefixed with `~`, e.g., <code>~Car()</code>) invoked automatically when an object goes out of scope or is deleted via <code>delete</code>.<br>" +
         "• <strong>Differences:</strong> Constructors allocate memory and initialize state; destructors release dynamically allocated heap memory, close file streams, and release mutex locks (RAII paradigm). Unlike constructors, destructors take no parameters and cannot be overloaded."
  },
  {
    id: 53,
    q: "53. How does OOP promote the concept of data hiding, and why is it important?",
    category: "Encapsulation",
    ans: "• <strong>Mechanism:</strong> Data hiding is achieved by making class fields <code>private</code> and providing controlled read/write access via public accessor methods (getters/setters).<br>" +
         "• <strong>Importance:</strong> Protects object state from unintended corruptions, enforces internal business rules, isolates ripple effects of internal refactoring, and promotes clean modular design."
  },
  {
    id: 54,
    q: "54. Discuss the concept of method visibility in OOP languages. What are public, private, and protected access modifiers used for?",
    category: "Encapsulation",
    ans: "• <strong>public:</strong> Creates the visible public API contract intended for consumption by outside clients.<br>" +
         "• <strong>private:</strong> Enforces internal implementation details, preventing external tampering.<br>" +
         "• <strong>protected:</strong> Allows derived classes to extend or override internal mechanics while still shielding members from general public access."
  },
  {
    id: 55,
    q: "55. Explain the difference between aggregation and composition in OOP.",
    category: "Design Principles",
    ans: "• <strong>Aggregation (Weak HAS-A):</strong> The child object can exist independently of the parent. Lifetime of part is independent of the whole (e.g., a `Department` has `Professors`; if the department closes, professors still exist).<br>" +
         "• <strong>Composition (Strong HAS-A):</strong> The child object cannot exist without the parent. Lifetime of part is bound to the whole (e.g., a `House` has `Rooms`; if the house is destroyed, the rooms cease to exist)."
  },
  // =========================================================================
  // SECTION 2: CLASSES, INHERITANCE, POLYMORPHISM & ENCAPSULATION (Q56 - Q110)
  // =========================================================================
  {
    id: 56,
    q: "56. How does the concept of encapsulation enhance security and maintainability in software development?",
    category: "Encapsulation",
    ans: "• <strong>Security:</strong> By making fields <code>private</code>, encapsulation establishes a protective barrier preventing malicious or accidental mutation of critical data (e.g., preventing unauthorized alterations to user credentials or transaction amounts).<br>" +
         "• <strong>Maintainability:</strong> It enforces strict boundary separation. Internal algorithms, data structures, or caching strategies can be refactored freely without altering the public API contract or breaking calling client modules.<br>" +
         "• <em>Example:</em> Changing an internal <code>ArrayList</code> to a <code>HashSet</code> inside a class does not affect callers as long as the public <code>getUsers()</code> signature remains stable."
  },
  {
    id: 57,
    q: "57. What is the significance of the 'abstract' keyword in OOP languages?",
    category: "Abstract Classes & Interfaces",
    ans: "• <strong>Abstract Classes:</strong> Prevents direct instantiation (<code>new Animal()</code> is illegal); signals that the class is an incomplete conceptual foundation meant exclusively to be extended.<br>" +
         "• <strong>Abstract Methods:</strong> Declares a method signature without a body (<code>public abstract void render();</code>), forcing all non-abstract subclasses to implement the behavior.<br>" +
         "• <strong>Significance:</strong> Enforces architectural standardization, guarantees polymorphic contracts, and facilitates partial implementation sharing."
  },
  {
    id: 58,
    q: "58. Discuss the role of the 'super' keyword in the context of method calls and constructor calls.",
    category: "Inheritance",
    ans: "• <strong>Constructor Calls:</strong> <code>super(...)</code> delegates base state initialization to the parent constructor and must execute first in the subclass constructor.<br>" +
         "• <strong>Method Calls:</strong> <code>super.method(...)</code> explicitly invokes the superclass implementation, allowing subclasses to augment (wrap) parent behavior rather than completely discarding it.<br>" +
         "• <em>Pattern:</em> Subclass overriding <code>paintComponent(g)</code> calls <code>super.paintComponent(g)</code> to preserve base background rendering."
  },
  {
    id: 59,
    q: "59. Can you explain the concept of a design pattern? Provide an example of a creational design pattern.",
    category: "Design Patterns",
    ans: "• <strong>Definition:</strong> A battle-tested, standardized architectural template that provides proven solutions to common object-oriented design problems.<br>" +
         "• <strong>Creational Example (Factory Method Pattern):</strong> Defines an interface for creating objects, but lets subclasses decide which concrete class to instantiate.<br>" +
         "• <em>Code Structure:</em><br>" +
         "  <code>public abstract class Dialog { public void render() { Button ok = createButton(); ok.render(); } protected abstract Button createButton(); }</code><br>" +
         "  <code>WindowsDialog</code> produces <code>WindowsButton</code>, while <code>HtmlDialog</code> produces <code>HtmlButton</code> without modifying <code>Dialog</code>."
  },
  {
    id: 60,
    q: "60. What is a class in object-oriented programming (OOP), and how does it relate to objects?",
    category: "Classes & Objects",
    ans: "• <strong>Class:</strong> An abstract blueprint or user-defined data type encapsulating properties (state) and methods (behavior).<br>" +
         "• <strong>Relationship to Objects:</strong> An object is an instantiated, live runtime manifestation of a class. The class defines the structure and types, while each object holds its own distinct data values.<br>" +
         "• <em>Analogy:</em> A cookie cutter is the <strong>Class</strong>; each cookie stamped out from dough is an <strong>Object</strong>."
  },
  {
    id: 61,
    q: "61. Explain the difference between a class and an object, providing examples to illustrate your explanation.",
    category: "Classes & Objects",
    ans: "• <strong>Class (Compile-Time Blueprint):</strong> Defines schemas without taking memory space for instance data.<br>" +
         "  - <em>Example:</em> <code>class Laptop { String brand; int ramGB; }</code><br>" +
         "• <strong>Object (Runtime Instance):</strong> Exists in physical memory with concrete state.<br>" +
         "  - <em>Example:</em> <code>Laptop myLaptop = new Laptop(); myLaptop.brand = 'Dell'; myLaptop.ramGB = 32;</code><br>" +
         "• <strong>Memory:</strong> Classes reside in the Metaspace/PermGen; objects live in the dynamic Heap."
  },
  {
    id: 62,
    q: "62. How do you define attributes and methods within a class? Provide examples of each.",
    category: "Classes & Objects",
    ans: "• <strong>Attributes (Fields):</strong> Member variables representing the state of an object.<br>" +
         "  - <em>Example:</em> <code>private String accountNumber; private double balance;</code><br>" +
         "• <strong>Methods (Functions):</strong> Member routines defining actions and operations that manipulate state.<br>" +
         "  - <em>Example:</em> <code>public void transfer(BankAccount target, double amount) { this.withdraw(amount); target.deposit(amount); }</code>"
  },
  {
    id: 63,
    q: "63. Discuss the concept of encapsulation and how it is implemented in classes.",
    category: "Encapsulation",
    ans: "• <strong>Concept:</strong> Bundling data and corresponding logic into a protective enclosure and limiting uncontrolled access from external code.<br>" +
         "• <strong>Implementation Steps:</strong><br>" +
         "  1. Declare all instance variables as <code>private</code>.<br>" +
         "  2. Expose public getter methods for controlled read access.<br>" +
         "  3. Expose public setter methods that validate input before modifying private variables."
  },
  {
    id: 64,
    q: "64. What is the constructor of a class, and what is its purpose? Can a class have multiple constructors?",
    category: "Classes & Objects",
    ans: "• <strong>Constructor & Purpose:</strong> A special lifecycle initialization method called when memory is allocated for an object using <code>new</code>. Its purpose is to initialize fields and guarantee that objects start in a valid, consistent state.<br>" +
         "• <strong>Multiple Constructors:</strong> Yes, a class can have multiple constructors via <strong>Constructor Overloading</strong>, allowing clients to pass varying arguments (e.g., default no-arg constructor vs. fully parameterized constructor)."
  },
  {
    id: 65,
    q: "65. Explain the significance of access modifiers in classes and how they control access to class members.",
    category: "Encapsulation",
    ans: "• <strong>Significance:</strong> They define the encapsulation perimeter and boundary visibility of software components.<br>" +
         "• <strong>Access Levels:</strong><br>" +
         "  - <code>private:</code> Hidden inside the class (internal state).<br>" +
         "  - <code>default:</code> Accessible to friendly package collaborators.<br>" +
         "  - <code>protected:</code> Accessible to child classes in the inheritance tree.<br>" +
         "  - <code>public:</code> The official public API surface consumed by external callers."
  },
  {
    id: 66,
    q: "66. What is the difference between an instance variable and a static variable in a class?",
    category: "Classes & Objects",
    ans: "• <strong>Instance Variable:</strong> Belongs to an individual object instance. Every object has its own separate memory copy on the heap. Created when an object is instantiated and destroyed when garbage collected.<br>" +
         "• <strong>Static Variable:</strong> Belongs to the class itself. Only one single copy exists in Metaspace memory, shared by all instances. Initialized when the class is loaded by the ClassLoader."
  },
  {
    id: 67,
    q: "67. How do you create an object of a class in various programming languages (e.g., Java, Python, C++)?",
    category: "Classes & Objects",
    ans: "• <strong>Java:</strong> <code>Car c = new Car('Tesla', 'Model 3');</code> (Heap-allocated with automatic garbage collection).<br>" +
         "• <strong>Python:</strong> <code>c = Car('Tesla', 'Model 3')</code> (No `new` keyword; invokes `__new__` and `__init__`).<br>" +
         "• <strong>C++:</strong><br>" +
         "  - Stack: <code>Car c('Tesla', 'Model 3');</code> (automatically destructed when leaving scope).<br>" +
         "  - Heap: <code>Car* c = new Car('Tesla', 'Model 3');</code> (requires manual <code>delete c;</code> or smart pointers)."
  },
  {
    id: 68,
    q: "68. Discuss the concept of inheritance and how it allows classes to share attributes and methods.",
    category: "Inheritance",
    ans: "• <strong>Mechanism:</strong> A subclass extends a superclass, automatically gaining access to all non-private fields and methods of the superclass.<br>" +
         "• <strong>Sharing:</strong> Common domain logic (e.g., `id`, `createdAt`, `validate()`) is placed in an abstract base class `BaseEntity`, allowing dozens of specialized subclasses to inherit and share that behavior without duplicate code."
  },
  {
    id: 69,
    q: "69. Can you explain the difference between composition and inheritance, and when you might use one over the other?",
    category: "Design Principles",
    ans: "• <strong>Difference:</strong> Inheritance represents an 'IS-A' relationship (e.g., `Sparrow` is a `Bird`); Composition represents a 'HAS-A' relationship (e.g., `Car` has an `Engine`).<br>" +
         "• <strong>When to Use Inheritance:</strong> When true subtyping exists, where LSP holds completely, and child objects can universally replace parent objects.<br>" +
         "• <strong>When to Use Composition:</strong> When you need flexible behavior swapping at runtime, multiple component reuse, or to prevent deep, brittle inheritance trees."
  },
  {
    id: 70,
    q: "70. Explain the concept of method overloading in classes, providing an example.",
    category: "Polymorphism",
    ans: "• <strong>Concept:</strong> Defining multiple methods with the exact same name within a single class, differentiated strictly by their parameter lists (types, count, or order).<br>" +
         "• <strong>Example:</strong><br>" +
         "  <code>public int multiply(int a, int b) { return a * b; }</code><br>" +
         "  <code>public double multiply(double a, double b) { return a * b; }</code><br>" +
         "  <code>public int multiply(int a, int b, int c) { return a * b * c; }</code><br>" +
         "• <strong>Resolution:</strong> The compiler selects the exact signature at compile time based on invocation argument types."
  },
  {
    id: 71,
    q: "71. Discuss the importance of method overriding in object-oriented programming.",
    category: "Polymorphism",
    ans: "• <strong>Importance:</strong><br>" +
         "  1. <em>Specialized Behavior:</em> Lets child classes provide tailor-made implementations of generic parent routines.<br>" +
         "  2. <em>Runtime Polymorphism:</em> Client code treats objects uniformly via base references while dynamic dispatch routes calls to specialized subclass overrides.<br>" +
         "  3. <em>Open/Closed Principle:</em> Enables expanding software capabilities with new subclasses without rewriting consumers."
  },
  {
    id: 72,
    q: "72. How do you implement and use getter and setter methods in a class?",
    category: "Encapsulation",
    ans: "• <strong>Implementation:</strong><br>" +
         "  <code>private int age;</code><br>" +
         "  <code>public int getAge() { return this.age; }</code><br>" +
         "  <code>public void setAge(int age) { if (age >= 0 && age <= 120) this.age = age; else throw new IllegalArgumentException('Invalid age'); }</code><br>" +
         "• <strong>Usage:</strong> External code accesses <code>obj.getAge()</code> and <code>obj.setAge(25)</code>, guaranteeing validation invariants."
  },
  {
    id: 73,
    q: "73. What is a static method in a class, and how does it differ from an instance method?",
    category: "Classes & Objects",
    ans: "• <strong>Static Method:</strong> Declared with <code>static</code>; attached to class namespace; called via <code>ClassName.method()</code>; cannot access instance state or <code>this</code>.<br>" +
         "• <strong>Instance Method:</strong> Requires a living object instance; called via <code>objectRef.method()</code>; implicitly passes <code>this</code> pointer; can read/modify both instance and static fields."
  },
  {
    id: 74,
    q: "74. Explain the purpose of the 'this' keyword in classes and how it is used.",
    category: "Classes & Objects",
    ans: "• <strong>Purpose:</strong> Represents a direct reference to the current executing object instance.<br>" +
         "• <strong>Uses:</strong> Disambiguates field shadowing (<code>this.x = x</code>), delegates constructor calls (<code>this(x, 0)</code>), passes current instance to event listeners (<code>button.addActionListener(this)</code>), and returns current instance for method chaining."
  },
  {
    id: 75,
    q: "75. What are constructor chaining and method chaining in classes? Provide examples of each.",
    category: "Classes & Objects",
    ans: "• <strong>Constructor Chaining:</strong> One constructor calling another constructor within the same class or superclass using <code>this()</code> or <code>super()</code>.<br>" +
         "  - <em>Example:</em> <code>public Rect() { this(1, 1); } public Rect(int w, int h) { this.w = w; this.h = h; }</code><br>" +
         "• <strong>Method Chaining:</strong> Methods returning the current instance (<code>return this;</code>) to allow continuous dot-notation invocations.<br>" +
         "  - <em>Example:</em> <code>new StringBuilder().append('A').append('B').toString();</code>"
  },
  {
    id: 76,
    q: "76. How do you prevent a class from being instantiated in OOP languages?",
    category: "Classes & Objects",
    ans: "• <strong>Approach 1 (Private Constructor):</strong> Declare a <code>private</code> constructor (standard for utility classes like <code>java.lang.Math</code>).<br>" +
         "• <strong>Approach 2 (Abstract Class):</strong> Declare the class as <code>abstract</code>.<br>" +
         "• <strong>Approach 3 (Static Utility / Enum):</strong> In Java, an <code>enum</code> with no elements, or throwing an <code>AssertionError</code> inside a private constructor."
  },
  {
    id: 77,
    q: "77. Discuss the concept of a singleton class and its use cases.",
    category: "Design Patterns",
    ans: "• <strong>Concept:</strong> A design pattern ensuring that only one instance of a class exists across the application with a single global access point.<br>" +
         "• <strong>Use Cases:</strong> Database connection pools, thread pools, logging services (`Logger`), configuration managers, and hardware driver interfaces."
  },
  {
    id: 78,
    q: "78. Explain the concept of a nested class and its advantages.",
    category: "Java OOP",
    ans: "• <strong>Definition:</strong> A class defined within the body of another enclosing class (can be static nested classes or non-static inner classes).<br>" +
         "• <strong>Advantages:</strong><br>" +
         "  - <em>Logical Grouping:</em> Groups helper classes used exclusively in one place.<br>" +
         "  - <em>Enhanced Encapsulation:</em> Inner classes can access private members of the outer class while remaining invisible to the outside world.<br>" +
         "  - <em>Readable Code:</em> Keeps code closer to where it is consumed."
  },
  {
    id: 79,
    q: "79. Can you describe the difference between shallow copy and deep copy in the context of classes and objects?",
    category: "Classes & Objects",
    ans: "• <strong>Shallow Copy:</strong> Duplicates top-level object fields; inner references still point to the original shared memory addresses.<br>" +
         "• <strong>Deep Copy:</strong> Duplicates top-level object fields AND recursively instantiates new copies of all nested objects in memory graph.<br>" +
         "• <em>Impact:</em> Modifying a nested list in a shallow copy alters both objects; in a deep copy, both objects are completely independent."
  },
  {
    id: 80,
    q: "80. What is inheritance in object-oriented programming, and why is it important?",
    category: "Inheritance",
    ans: "• <strong>Definition:</strong> The mechanism by which a child class inherits properties and behaviors from a parent class.<br>" +
         "• <strong>Importance:</strong> Eliminates redundancy by sharing foundational code across related classes, structures domain models into clean hierarchical classifications, and enables runtime polymorphism via subtyping."
  },
  {
    id: 81,
    q: "81. Explain the difference between single inheritance and multiple inheritance.",
    category: "Inheritance",
    ans: "• <strong>Single Inheritance:</strong> A subclass extends exactly one superclass (supported by Java, C#, Python, C++). Simple, predictable, free of inheritance conflicts.<br>" +
         "• <strong>Multiple Inheritance:</strong> A subclass extends two or more superclasses simultaneously (supported by C++, Python). Powerful, but introduces diamond problem ambiguities and complex method resolution orders."
  },
  {
    id: 82,
    q: "82. How does inheritance promote code reuse and maintainability in software development?",
    category: "Inheritance",
    ans: "• <strong>Code Reuse:</strong> Bug fixes or enhancements made to common base methods (e.g., logging or database connectivity in `BaseRepository`) automatically propagate to all child repositories.<br>" +
         "• <strong>Maintainability:</strong> Reduces the overall lines of code in a codebase and creates a single source of truth for shared domain logic."
  },
  {
    id: 83,
    q: "83. Discuss the concepts of superclass and subclass in the context of inheritance.",
    category: "Inheritance",
    ans: "• <strong>Superclass (Base / Parent Class):</strong> The generalized entity containing common fields and core methods.<br>" +
         "• <strong>Subclass (Derived / Child Class):</strong> The specialized entity that extends the superclass, inheriting its members and optionally overriding methods or introducing brand new specialized fields and methods."
  },
  {
    id: 84,
    q: "84. Explain the meaning of 'IS-A' relationship and how it relates to inheritance.",
    category: "Inheritance",
    ans: "• <strong>Meaning:</strong> 'IS-A' denotes a categorical subtyping relationship where the child entity is genuinely a specialized version of the parent entity (e.g., a `Sedan` <em>is a</em> `Car`, a `Developer` <em>is an</em> `Employee`).<br>" +
         "• <strong>Relation to Inheritance:</strong> Inheritance should only be implemented if the 'IS-A' test holds completely true under all circumstances (adhering to the Liskov Substitution Principle)."
  },
  {
    id: 85,
    q: "85. What is method overriding, and how does it allow subclasses to provide specific implementations of methods inherited from a superclass?",
    category: "Polymorphism",
    ans: "• <strong>Definition:</strong> When a child class provides its own tailored version of a method that is already declared in its parent class with the exact same name, return type, and parameters.<br>" +
         "• <strong>How It Works:</strong> At runtime, the JVM uses dynamic method dispatch to look up the actual object's vtable. If the subclass has overridden the method, the subclass version executes rather than the superclass version."
  },
  {
    id: 86,
    q: "86. Can you describe the difference between method overloading and method overriding in inheritance?",
    category: "Polymorphism",
    ans: "• <strong>Overloading in Inheritance:</strong> Subclass introduces a method with the same name as a parent method but with <em>different parameter types</em>. Both methods exist side by side; resolved statically at compile time.<br>" +
         "• <strong>Overriding in Inheritance:</strong> Subclass provides an exact signature match to replace parent behavior at runtime."
  },
  {
    id: 87,
    q: "87. Discuss the concept of superclasses, subclasses, and their relationships with constructors.",
    category: "Inheritance",
    ans: "• <strong>Constructors Are Not Inherited:</strong> A subclass does not inherit constructors from its superclass.<br>" +
         "• <strong>Execution Order:</strong> When a subclass object is created, the superclass constructor executes <em>before</em> the subclass constructor body runs, ensuring the parent foundation is completely initialized before child state is configured."
  },
  {
    id: 88,
    q: "88. How does access control (public, private, protected) apply to inherited members in subclasses?",
    category: "Inheritance",
    ans: "• <code>private</code> members are inherited in concept but are inaccessible directly by the subclass code.<br>" +
         "• <code>protected</code> members are directly accessible to subclasses (even across different packages).<br>" +
         "• <code>public</code> members are directly accessible everywhere.<br>" +
         "• <em>Overriding Rule:</em> An overriding method in a subclass cannot reduce the visibility of an inherited method (e.g., overriding a <code>public</code> method as <code>protected</code> is a compiler error)."
  },
  {
    id: 89,
    q: "89. Explain the purpose of the 'final' keyword in the context of inheritance and how it can affect subclasses.",
    category: "Inheritance",
    ans: "• <strong>Final Class:</strong> Explicitly forbids inheritance. No subclass can extend a final class (e.g., <code>public final class String</code>).<br>" +
         "• <strong>Final Method:</strong> Allows the class to be extended, but prevents subclasses from overriding that specific method, protecting critical business workflows or security checks."
  },
  {
    id: 90,
    q: "90. What is polymorphism in object-oriented programming, and why is it important?",
    category: "Polymorphism",
    ans: "• <strong>Definition:</strong> The ability of a message, function call, or object reference to process data in multiple forms.<br>" +
         "• <strong>Importance:</strong> Enables building decoupled systems where client modules depend on broad abstractions, allowing new concrete classes to be added at any time without touching existing client code."
  },
  {
    id: 91,
    q: "91. Explain the difference between compile-time polymorphism and runtime polymorphism.",
    category: "Polymorphism",
    ans: "• <strong>Compile-Time Polymorphism (Static Binding):</strong> Method call is bound to implementation code at compile time. Fast performance; achieved via method overloading and operator overloading.<br>" +
         "• <strong>Runtime Polymorphism (Dynamic Binding):</strong> Method call is resolved at runtime based on the actual object instance on the heap. Flexible and extensible; achieved via method overriding."
  },
  {
    id: 92,
    q: "92. How does polymorphism relate to inheritance and method overriding?",
    category: "Polymorphism",
    ans: "• <strong>The Connection:</strong> Runtime polymorphism strictly requires inheritance (to establish an 'is-a' reference type) and method overriding (to provide distinct child behaviors). Without inheritance and overriding, dynamic method dispatch cannot occur."
  },
  {
    id: 93,
    q: "93. Discuss the concept of method signature and how it influences polymorphic behavior.",
    category: "Polymorphism",
    ans: "• <strong>Method Signature:</strong> Consists of the method name and its parameter list (order, count, and types of parameters).<br>" +
         "• <strong>Influence:</strong><br>" +
         "  - In <em>overloading</em>, signatures must differ.<br>" +
         "  - In <em>overriding</em>, signatures must match exactly. If the signature differs, it is considered overloading, and dynamic polymorphism will not be triggered."
  },
  {
    id: 94,
    q: "94. Can you provide an example of polymorphism using method overriding?",
    category: "Polymorphism",
    ans: "• <strong>Code Example:</strong><br>" +
         "  <code>class Payment { void pay(double amt) { print('Generic payment'); } }</code><br>" +
         "  <code>class CardPayment extends Payment { void pay(double amt) { print('Card: ' + amt); } }</code><br>" +
         "  <code>class UpiPayment extends Payment { void pay(double amt) { print('UPI: ' + amt); } }</code><br>" +
         "  <code>Payment p = new UpiPayment(); p.pay(500); // Outputs: UPI: 500</code>"
  },
  {
    id: 95,
    q: "95. Explain the concept of dynamic binding and how it facilitates polymorphism.",
    category: "Polymorphism",
    ans: "• <strong>Dynamic Binding (Late Binding):</strong> The compiler defers the binding between a method call and its executable machine code until runtime.<br>" +
         "• <strong>Facilitation:</strong> The JVM inspects the runtime object header, reads its virtual method table (vtable), and invokes the address of the child's overridden method."
  },
  {
    id: 96,
    q: "96. What is the significance of the 'instanceof' operator in determining object types during runtime polymorphism?",
    category: "Polymorphism",
    ans: "• <strong>Significance:</strong> Safely queries the runtime type of an object before performing explicit downcasting.<br>" +
         "• <em>Example:</em> <code>if (payment instanceof CardPayment) { ((CardPayment)payment).refundCard(); }</code> prevents <code>ClassCastException</code>."
  },
  {
    id: 97,
    q: "97. Discuss the use of interfaces to achieve polymorphism in object-oriented programming languages.",
    category: "Abstract Classes & Interfaces",
    ans: "• <strong>Interface Polymorphism:</strong> Completely decouples polymorphic behavior from class inheritance hierarchies.<br>" +
         "• <em>Benefit:</em> Unrelated classes like <code>Airplane</code>, <code>Duck</code>, and <code>Kite</code> can all implement a common <code>Flyable</code> interface and be handled polymorphically in a single collection: <code>List<Flyable></code>."
  },
  {
    id: 98,
    q: "98. How does polymorphism contribute to code flexibility and extensibility?",
    category: "Polymorphism",
    ans: "• <strong>Flexibility:</strong> Code is written against generalized base interfaces rather than concrete types.<br>" +
         "• <strong>Extensibility:</strong> New plugins, drivers, or modules can be integrated seamlessly without re-compiling or modifying existing application core components."
  },
  {
    id: 99,
    q: "99. Can you describe a real-world scenario where polymorphism would be beneficial in software design?",
    category: "Polymorphism",
    ans: "• <strong>E-Commerce Notification System:</strong> A notification dispatcher calls <code>notificationService.sendNotification(user, msg)</code>.<br>" +
         "• <strong>Polymorphic Implementation:</strong> Depending on user preferences, the runtime injects an <code>EmailNotificationService</code>, <code>SmsNotificationService</code>, or <code>PushNotificationService</code> without modifying the checkout service."
  },
  {
    id: 100,
    q: "100. What is encapsulation in object-oriented programming, and why is it important?",
    category: "Encapsulation",
    ans: "• <strong>Definition:</strong> The practice of enclosing state and behavior together while restricting direct access to an object's internal components.<br>" +
         "• <strong>Importance:</strong> Enforces data integrity, prevents illegal states, facilitates easier refactoring, and ensures loose coupling."
  },
  {
    id: 101,
    q: "101. Explain how encapsulation helps in achieving data hiding and access control.",
    category: "Encapsulation",
    ans: "• <strong>Data Hiding:</strong> Setting fields to <code>private</code> ensures that internal data structures (e.g., passwords, memory pointers) cannot be seen or altered from outside the class.<br>" +
         "• <strong>Access Control:</strong> Getters and setters act as guarded gateways that validate permissions and values before allowing reading or writing."
  },
  {
    id: 102,
    q: "102. How do access modifiers (public, private, protected) facilitate encapsulation in classes?",
    category: "Encapsulation",
    ans: "• Access modifiers define explicit authorization barriers. They designate which elements form the exposed public contract and which elements remain confidential internal mechanisms."
  },
  {
    id: 103,
    q: "103. Discuss the benefits of encapsulating data within classes and providing controlled access through methods.",
    category: "Encapsulation",
    ans: "• <strong>1. Validation:</strong> Setters reject corrupt data.<br>" +
         "• <strong>2. Read-Only / Write-Only:</strong> Exposing only a getter creates an immutable read-only view; exposing only a setter creates write-only access.<br>" +
         "• <strong>3. Side Effects & Auditing:</strong> Getters/setters can trigger logging, event notifications, or lazy initialization behind the scenes."
  },
  {
    id: 104,
    q: "104. Can you provide an example of encapsulation in a real-world scenario?",
    category: "Encapsulation",
    ans: "• <strong>ATM Cash Dispenser:</strong> A customer interacts with an ATM through a touch screen (public methods: <code>withdraw()</code>, <code>checkBalance()</code>). The cash vault, counting sensors, and mechanical gears (private state) are locked inside the steel safe (encapsulated)."
  },
  {
    id: 105,
    q: "105. Explain the concept of information hiding and its relationship with encapsulation.",
    category: "Encapsulation",
    ans: "• <strong>Information Hiding:</strong> The architectural principle of hiding design and implementation decisions that are most likely to change.<br>" +
         "• <strong>Relationship:</strong> Encapsulation is the primary programming language mechanism used to enforce information hiding in practice."
  },
  {
    id: 106,
    q: "106. How does encapsulation promote modularity and maintainability in software development?",
    category: "Encapsulation",
    ans: "• <strong>Modularity:</strong> Each class acts as a self-contained, independent black box with a defined API.<br>" +
         "• <strong>Maintainability:</strong> Changes to a class's internal algorithms or data structures do not propagate breaking changes to dependent modules."
  },
  {
    id: 107,
    q: "107. Discuss the challenges or drawbacks associated with excessive or inadequate encapsulation.",
    category: "Encapsulation",
    ans: "• <strong>Inadequate Encapsulation:</strong> Exposes internal state, creating tight coupling, uncontrolled bugs, and vulnerability to security exploits.<br>" +
         "• <strong>Excessive Encapsulation:</strong> Introducing boilerplate getters and setters for every field without real validation, or over-complicating designs with excessive layers of indirection."
  },
  {
    id: 108,
    q: "108. Explain the concept of immutable objects and how they relate to encapsulation.",
    category: "Encapsulation",
    ans: "• <strong>Immutable Object:</strong> An object whose internal state cannot be modified after construction (e.g., Java's <code>String</code>, <code>Integer</code>).<br>" +
         "• <strong>Relation:</strong> Achieved through strict encapsulation: all fields are <code>private final</code>, no setters are provided, and defensive copies are returned from getters."
  },
  {
    id: 109,
    q: "109. How does encapsulation contribute to code security and robustness?",
    category: "Encapsulation",
    ans: "• <strong>Security:</strong> Shields sensitive attributes (encryption keys, authentication tokens) from unauthorized memory access or external overrides.<br>" +
         "• <strong>Robustness:</strong> Preserves state consistency by ensuring invariant business constraints are maintained across concurrent executions."
  },
  {
    id: 110,
    q: "110. What is abstraction in object-oriented programming, and why is it important?",
    category: "Abstraction",
    ans: "• <strong>Definition:</strong> The technique of filtering out background details and showing only essential features to the user.<br>" +
         "• <strong>Importance:</strong> Reduces cognitive overhead, enables modular division of labor, simplifies interface design, and isolates callers from complex underlying systems."
  },
  // =========================================================================
  // SECTION 3: ABSTRACTION, INTERFACES, EXCEPTIONS & PATTERNS (Q111 - Q165)
  // =========================================================================
  {
    id: 111,
    q: "111. Discuss the difference between abstraction and encapsulation.",
    category: "Core Differences",
    ans: "• <strong>Abstraction (Complexity Hiding):</strong> Focuses on external behavior ('What does this object do?'). Implemented using interfaces and abstract classes.<br>" +
         "• <strong>Encapsulation (Information Hiding):</strong> Focuses on internal implementation ('How does this object protect its data?'). Implemented using private fields and public getter/setter methods."
  },
  {
    id: 112,
    q: "112. How does abstraction help in managing complexity and hiding implementation details?",
    category: "Abstraction",
    ans: "• <strong>Managing Complexity:</strong> Decomposes complex monolithic logic into layered architectural tiers (e.g., UI &rarr; Controller &rarr; Service Interface &rarr; Repository Interface &rarr; Database).<br>" +
         "• <strong>Hiding Details:</strong> Clients interact with high-level declarative method signatures without needing to understand network socket handling or database dialect peculiarities."
  },
  {
    id: 113,
    q: "113. Can you provide examples of abstraction mechanisms in programming languages (e.g., abstract classes, interfaces)?",
    category: "Abstraction",
    ans: "• <strong>1. Interfaces:</strong> <code>java.sql.Connection</code> defines standard JDBC database methods (<code>createStatement()</code>, <code>commit()</code>) implemented by vendor drivers (MySQL, PostgreSQL, Oracle).<br>" +
         "• <strong>2. Abstract Classes:</strong> <code>java.io.InputStream</code> provides an abstraction for byte stream consumption with abstract <code>read()</code> and concrete <code>read(byte[] b)</code>."
  },
  {
    id: 114,
    q: "114. Explain the concept of abstract classes and their role in abstraction.",
    category: "Abstract Classes & Interfaces",
    ans: "• <strong>Concept:</strong> A class marked with <code>abstract</code> that cannot be instantiated directly, intended to serve as a common superclass.<br>" +
         "• <strong>Role:</strong> Provides a partial implementation template, encapsulating shared state and common logic while enforcing abstract method contracts for variable behaviors across subclasses."
  },
  {
    id: 115,
    q: "115. What are interfaces, and how do they facilitate abstraction in object-oriented programming?",
    category: "Abstract Classes & Interfaces",
    ans: "• <strong>Definition:</strong> A pure abstract contract declaring a set of method signatures that implementing classes must satisfy.<br>" +
         "• <strong>Facilitation:</strong> Separates API definition from API implementation completely, allowing consumers to write code independent of concrete runtime types."
  },
  {
    id: 116,
    q: "116. Discuss the benefits of using interfaces over abstract classes for abstraction.",
    category: "Abstract Classes & Interfaces",
    ans: "• <strong>1. Multiple Inheritance:</strong> A class can implement multiple interfaces but extend only one class.<br>" +
         "• <strong>2. Zero Fragile Base Coupling:</strong> Interfaces do not force hierarchical state dependencies or constructor execution.<br>" +
         "• <strong>3. Non-Hierarchical Capabilities:</strong> Can decorate unrelated classes with orthogonal capabilities (e.g., `Serializable`, `Comparable`, `AutoCloseable`)."
  },
  {
    id: 117,
    q: "117. How does abstraction support code reusability and flexibility in software design?",
    category: "Abstraction",
    ans: "• <strong>Reusability:</strong> Generic algorithms can be written against abstract interfaces (e.g., <code>Collections.sort(List<T>)</code> works on any list implementation).<br>" +
         "• <strong>Flexibility:</strong> The underlying data store, network protocol, or UI framework can be swapped out with zero modifications to core business services."
  },
  {
    id: 118,
    q: "118. Can you describe a real-world scenario where abstraction would be beneficial in software development?",
    category: "Abstraction",
    ans: "• <strong>Cloud File Storage System:</strong> Defining a <code>CloudStorageService</code> interface with <code>upload(File f)</code> and <code>download(String id)</code>.<br>" +
         "• <strong>Benefit:</strong> The application can switch from Amazon S3 (<code>S3StorageService</code>) to Google Cloud Storage (<code>GcpStorageService</code>) via simple dependency injection config without altering client code."
  },
  {
    id: 119,
    q: "119. How do frameworks and libraries leverage abstraction to provide reusable solutions?",
    category: "Abstraction",
    ans: "• Frameworks provide abstract skeletons, lifecycle hooks, and interfaces (e.g., Spring's <code>CrudRepository</code>, React's component lifecycle). Developers provide application-specific logic, and the framework orchestrates execution via the Hollywood Principle ('Don't call us, we'll call you')."
  },
  {
    id: 120,
    q: "120. What is an interface in object-oriented programming, and how does it differ from a class?",
    category: "Abstract Classes & Interfaces",
    ans: "• <strong>Interface:</strong> A pure specification of behavior without state; contains abstract method signatures, default methods (Java 8+), and static constants.<br>" +
         "• <strong>Class:</strong> A concrete blueprint that defines both state (fields) and behavior (method bodies) and can be instantiated to create objects."
  },
  {
    id: 121,
    q: "121. Explain the purpose of interfaces and their significance in achieving abstraction and polymorphism.",
    category: "Abstract Classes & Interfaces",
    ans: "• <strong>Purpose & Significance:</strong> Establishes formal contracts between independent software components.<br>" +
         "• <strong>Polymorphism:</strong> Allows disparate classes to be treated identically through the interface reference, driving dependency inversion and plugin architectures."
  },
  {
    id: 122,
    q: "122. Discuss the difference between an interface and an abstract class.",
    category: "Abstract Classes & Interfaces",
    ans: "• <strong>State:</strong> Abstract classes have instance fields; interfaces cannot maintain instance state.<br>" +
         "• <strong>Inheritance:</strong> Single inheritance for abstract classes (<code>extends</code>); multiple inheritance for interfaces (<code>implements</code>).<br>" +
         "• <strong>Constructors:</strong> Abstract classes have constructors; interfaces do not.<br>" +
         "• <strong>Intent:</strong> Abstract class defines identity ('IS-A'); interface defines contract or capability ('CAN-DO')."
  },
  {
    id: 123,
    q: "123. How are interfaces implemented in programming languages like Java and C#?",
    category: "Abstract Classes & Interfaces",
    ans: "• <strong>Java:</strong> Uses the <code>implements</code> keyword (e.g., <code>class Circle implements Shape, Drawable</code>). Must implement all declared abstract methods as <code>public</code>.<br>" +
         "• <strong>C#:</strong> Uses colon notation (<code>class Circle : IShape, IDrawable</code>). Supports explicit interface implementation to resolve name collisions across interfaces."
  },
  {
    id: 124,
    q: "124. Can a class implement multiple interfaces? If so, how does this impact the class?",
    category: "Abstract Classes & Interfaces",
    ans: "• <strong>Yes:</strong> A class can implement multiple interfaces (e.g., <code>class UserSession implements Serializable, Cloneable, Comparable<UserSession></code>).<br>" +
         "• <strong>Impact:</strong> The class acquires multiple polymorphic type identities and must provide concrete implementations for all non-default methods declared across all implemented interfaces."
  },
  {
    id: 125,
    q: "125. Explain the importance of the 'implements' keyword when working with interfaces.",
    category: "Abstract Classes & Interfaces",
    ans: "• <strong>Importance:</strong> Tells the compiler that the class formally signs the contract of the interface. The compiler enforces that every abstract method signature declared in the interface is implemented with compatible visibility and return types."
  },
  {
    id: 126,
    q: "126. Can you provide an example of a scenario where interfaces would be preferred over abstract classes?",
    category: "Abstract Classes & Interfaces",
    ans: "• <strong>Cross-Cutting Capabilities:</strong> Defining an interface <code>Loggable</code> or <code>ExportableAsPdf</code>.<br>" +
         "• <strong>Why:</strong> Unrelated classes (e.g., `Invoice`, `EmployeeTimesheet`, `AuditReport`) cannot share a common base class due to single-inheritance restrictions, but all can implement <code>ExportableAsPdf</code>."
  },
  {
    id: 127,
    q: "127. What is the significance of default methods in interfaces, and when would you use them?",
    category: "Abstract Classes & Interfaces",
    ans: "• <strong>Introduced in Java 8:</strong> Methods with bodies declared using the <code>default</code> keyword.<br>" +
         "• <strong>Significance:</strong> Allows adding new methods to existing public interfaces without breaking backward compatibility for thousands of existing third-party classes implementing that interface (e.g., adding <code>forEach()</code> to <code>java.lang.Iterable</code>)."
  },
  {
    id: 128,
    q: "128. Discuss the role of interfaces in achieving loose coupling and code extensibility.",
    category: "Design Principles",
    ans: "• <strong>Loose Coupling:</strong> Callers bind to interfaces rather than concrete classes. A service depends on <code>OrderRepository</code>, not <code>PostgresOrderRepository</code>.<br>" +
         "• <strong>Extensibility:</strong> New implementations can be added at runtime via configuration or dependency injection containers without re-compiling consumer modules."
  },
  {
    id: 129,
    q: "129. How do interfaces promote code reusability and maintainability in software development?",
    category: "Abstract Classes & Interfaces",
    ans: "• <strong>Reusability:</strong> Generic utility methods (e.g., searching, filtering, mapping) operate seamlessly over any collection or object implementing the interface.<br>" +
         "• <strong>Maintainability:</strong> Defines clear API boundaries, allowing independent teams to develop against agreed-upon interface mocks in parallel."
  },
  {
    id: 130,
    q: "130. What is an abstract class, and how does it differ from a concrete class?",
    category: "Abstract Classes & Interfaces",
    ans: "• <strong>Abstract Class:</strong> Declared with <code>abstract</code>; cannot be instantiated directly; may have one or more abstract methods without bodies; serves as a parent template.<br>" +
         "• <strong>Concrete Class:</strong> Fully implemented class; all methods have concrete bodies; can be instantiated directly using <code>new</code>."
  },
  {
    id: 131,
    q: "131. Explain the purpose of abstract classes and their significance in achieving abstraction and code organization.",
    category: "Abstract Classes & Interfaces",
    ans: "• <strong>Purpose:</strong> Captures common attributes, invariants, and algorithms shared by a group of closely related classes.<br>" +
         "• <strong>Organization:</strong> Consolidates boilerplate code in the superclass while delegating custom steps to subclasses (Template Method pattern)."
  },
  {
    id: 132,
    q: "132. Can abstract classes have constructors? If so, under what circumstances?",
    category: "Abstract Classes & Interfaces",
    ans: "• <strong>Yes:</strong> Abstract classes can (and often do) have constructors.<br>" +
         "• <strong>Circumstances:</strong> Invoked when a concrete subclass constructor calls <code>super(...)</code> to properly initialize inherited fields and establish base class state before child initialization."
  },
  {
    id: 133,
    q: "133. Discuss the use of abstract methods within abstract classes and how they contribute to abstraction.",
    category: "Abstract Classes & Interfaces",
    ans: "• <strong>Abstract Methods:</strong> Act as behavioral placeholders defining the signature without implementation.<br>" +
         "• <strong>Contribution:</strong> Forces child classes to supply their own concrete logic, guaranteeing polymorphic behavior across all subclasses."
  },
  {
    id: 134,
    q: "134. Can you provide an example of a scenario where an abstract class would be preferred over an interface?",
    category: "Abstract Classes & Interfaces",
    ans: "• <strong>Game Character Hierarchy:</strong> A base class <code>GameCharacter</code> with private fields (<code>health</code>, <code>stamina</code>), a concrete constructor, and concrete methods (<code>takeDamage()</code>, <code>heal()</code>), plus an abstract method <code>attack()</code>.<br>" +
         "• <strong>Why:</strong> All characters share complex state and identical damage math, which interfaces cannot maintain."
  },
  {
    id: 135,
    q: "135. How does inheritance work with abstract classes, and how can subclasses provide concrete implementations?",
    category: "Abstract Classes & Interfaces",
    ans: "• Subclasses use the <code>extends</code> keyword. If the subclass implements all inherited abstract methods, it becomes a concrete class and can be instantiated. If it does not implement all abstract methods, it must also be declared <code>abstract</code>."
  },
  {
    id: 136,
    q: "136. Explain the concept of method overriding in abstract classes and its importance.",
    category: "Abstract Classes & Interfaces",
    ans: "• <strong>Concept:</strong> Concrete subclasses override abstract methods to convert incomplete signatures into executable algorithms.<br>" +
         "• <strong>Importance:</strong> Ensures that polymorphic calls dispatch to the correct specialized logic at runtime."
  },
  {
    id: 137,
    q: "137. Discuss the role of abstract classes in providing a template for subclasses to follow.",
    category: "Abstract Classes & Interfaces",
    ans: "• <strong>Template Method Pattern:</strong> An abstract superclass defines the invariant skeleton of an algorithm in a <code>final</code> method, calling abstract hook methods (e.g., <code>validateData()</code>, <code>processData()</code>) that subclasses must supply."
  },
  {
    id: 138,
    q: "138. What are the advantages and disadvantages of using abstract classes compared to interfaces?",
    category: "Abstract Classes & Interfaces",
    ans: "• <strong>Advantages:</strong> Can maintain mutable state, private fields, and shared constructors; simplifies code reuse for closely related classes.<br>" +
         "• <strong>Disadvantages:</strong> Restricted by single inheritance; creates tighter coupling than interfaces."
  },
  {
    id: 139,
    q: "139. How do abstract classes contribute to achieving both code reuse and code structure in software development?",
    category: "Abstract Classes & Interfaces",
    ans: "• <strong>Code Reuse:</strong> Concrete methods in the abstract class share common algorithms without code duplication.<br>" +
         "• <strong>Code Structure:</strong> Abstract method declarations enforce uniform structure and architecture across all derivative classes."
  },
  {
    id: 140,
    q: "140. What is an exception in programming, and why is exception handling important?",
    category: "Exception Handling",
    ans: "• <strong>Definition:</strong> An abnormal event or error condition occurring during execution that disrupts the normal flow of instructions.<br>" +
         "• <strong>Importance:</strong> Prevents sudden application crashes, separates error handling code from normal business logic, and enables graceful error recovery."
  },
  {
    id: 141,
    q: "141. Explain the difference between checked and unchecked exceptions.",
    category: "Exception Handling",
    ans: "• <strong>Checked Exceptions:</strong> Subclasses of <code>Exception</code> (excluding <code>RuntimeException</code>). Checked at compile time. Methods must either catch them or declare them via <code>throws</code> (e.g., <code>IOException</code>, <code>SQLException</code>).<br>" +
         "• <strong>Unchecked Exceptions:</strong> Subclasses of <code>RuntimeException</code>. Not enforced by the compiler; usually indicate programming logic defects (e.g., <code>NullPointerException</code>, <code>ArrayIndexOutOfBoundsException</code>)."
  },
  {
    id: 142,
    q: "142. How do try, catch, and finally blocks work together in handling exceptions?",
    category: "Exception Handling",
    ans: "• <strong>try:</strong> Encloses risky code that might throw an exception.<br>" +
         "• <strong>catch:</strong> Catches and handles specific exception types that occur inside the try block.<br>" +
         "• <strong>finally:</strong> Guaranteed cleanup block that executes unconditionally, regardless of whether an exception occurred or was handled."
  },
  {
    id: 143,
    q: "143. Can you provide an example of a scenario where exception handling would be necessary?",
    category: "Exception Handling",
    ans: "• <strong>Database Transaction Processing:</strong> Reading customer payments from a remote banking API. If network timeout or SQL connection drops occur, the exception handler catches the error, rolls back the transaction, logs the incident, and alerts the user."
  },
  {
    id: 144,
    q: "144. Discuss the role of the try block in exception handling and how it differs from catch and finally blocks.",
    category: "Exception Handling",
    ans: "• <strong>try Block:</strong> Defines the scope of monitored execution. When an exception occurs, execution immediately halts in the try block and transfers control to matching catch blocks.<br>" +
         "• <strong>Difference:</strong> Catch handles the error; finally performs guaranteed cleanup."
  },
  {
    id: 145,
    q: "145. What is the purpose of the catch block, and how does it handle exceptions?",
    category: "Exception Handling",
    ans: "• <strong>Purpose:</strong> Acts as an exception handler. Receives the thrown exception object, inspects error messages, logs stack traces, and initiates recovery routines or graceful degradation."
  },
  {
    id: 146,
    q: "146. Explain the significance of the finally block in exception handling and when it is executed.",
    category: "Exception Handling",
    ans: "• <strong>Significance:</strong> Prevents resource leaks by closing open file handles, database connections, and network sockets.<br>" +
         "• <strong>Execution:</strong> Always executes—even if the try or catch block executes a <code>return</code> statement (only bypassable if <code>System.exit(0)</code> is called)."
  },
  {
    id: 147,
    q: "147. Can you describe the difference between throwing and catching exceptions?",
    category: "Exception Handling",
    ans: "• <strong>Throwing (<code>throw</code>):</strong> Actively creates and raises an exception object when an anomalous condition is detected: <code>throw new IllegalArgumentException('Negative balance');</code>.<br>" +
         "• <strong>Catching (<code>catch</code>):</strong> Captures an in-flight exception to process, log, or recover from it."
  },
  {
    id: 148,
    q: "148. How do you create custom exceptions in programming languages like Java and C#?",
    category: "Exception Handling",
    ans: "• <strong>Java:</strong> Extend <code>Exception</code> (for checked) or <code>RuntimeException</code> (for unchecked):<br>" +
         "  <code>public class InsufficientFundsException extends Exception { public InsufficientFundsException(String msg) { super(msg); } }</code><br>" +
         "• <strong>C#:</strong> Extend <code>System.Exception</code>."
  },
  {
    id: 149,
    q: "149. Discuss the importance of logging in exception handling and how it helps in debugging and maintaining code.",
    category: "Exception Handling",
    ans: "• <strong>Importance:</strong> Captures the exact timestamp, user context, parameter values, and full stack trace without exposing raw technical errors to end users. Crucial for root-cause analysis in distributed production environments."
  },
  {
    id: 150,
    q: "150. What are the best practices for handling exceptions in software development?",
    category: "Exception Handling",
    ans: "• 1. Catch specific exceptions, never generic <code>Exception</code> or <code>Throwable</code>.<br>" +
         "• 2. Never swallow exceptions with empty catch blocks.<br>" +
         "• 3. Use Try-With-Resources for automatic resource closure.<br>" +
         "• 4. Preserve root cause when wrapping exceptions (exception chaining).<br>" +
         "• 5. Fail early and fail clean."
  },
  {
    id: 151,
    q: "151. Can you explain the concept of exception propagation and how it affects program flow?",
    category: "Exception Handling",
    ans: "• <strong>Propagation:</strong> When an exception is thrown and not caught locally, it is pushed up the method call stack. If method C throws an uncaught exception, control unwinds to calling method B, then method A. If uncaught by `main()`, the thread terminates."
  },
  {
    id: 152,
    q: "152. How do you handle multiple exceptions in a single try-catch block?",
    category: "Exception Handling",
    ans: "• <strong>Multiple Catch Blocks:</strong> Catch specific child exceptions before parent exceptions.<br>" +
         "• <strong>Multi-Catch Block (Java 7+):</strong> Use pipe notation: <code>catch (IOException | SQLException e) { log.error(e); }</code>."
  },
  {
    id: 153,
    q: "153. Explain the difference between exception handling in synchronous and asynchronous code.",
    category: "Exception Handling",
    ans: "• <strong>Synchronous:</strong> Call stack unwinds directly to surrounding try-catch blocks.<br>" +
         "• <strong>Asynchronous:</strong> Errors occur on worker threads, decoupling them from the calling stack. Handled via <code>CompletableFuture.exceptionally()</code>, Promise <code>.catch()</code>, or async/await try-catch wrappers."
  },
  {
    id: 154,
    q: "154. Discuss the role of exception handling in maintaining the stability and reliability of software systems.",
    category: "Exception Handling",
    ans: "• Prevents single component errors from crashing the entire application server. Isolates transient failures, triggers automated retry policies, and returns informative fallback responses."
  },
  {
    id: 155,
    q: "155. How does exception handling contribute to error recovery and graceful degradation in software applications?",
    category: "Exception Handling",
    ans: "• <strong>Graceful Degradation:</strong> If a recommendation engine service fails, the exception handler falls back to returning top-trending items rather than rendering an empty or crashed shopping cart page."
  },
  {
    id: 156,
    q: "156. Can you provide examples of common exception handling anti-patterns and how to avoid them?",
    category: "Exception Handling",
    ans: "• <strong>1. Swallowing Exceptions:</strong> <code>catch (Exception e) {}</code> &rarr; Fix: Log or rethrow.<br>" +
         "• <strong>2. Catching Generic Throwable:</strong> Catches fatal JVM errors like <code>OutOfMemoryError</code> &rarr; Fix: Catch specific exceptions.<br>" +
         "• <strong>3. Throwing from finally:</strong> Masks the original exception in the try block &rarr; Fix: Clean up safely."
  },
  {
    id: 157,
    q: "157. What is the purpose of the throws keyword in exception handling, and how is it used?",
    category: "Exception Handling",
    ans: "• <strong>Purpose:</strong> Declares in a method signature that the method may raise specific checked exceptions that callers are responsible for handling: <code>public void readFile() throws IOException</code>."
  },
  {
    id: 158,
    q: "158. Explain the concept of exception chaining and its significance in debugging complex systems.",
    category: "Exception Handling",
    ans: "• <strong>Exception Chaining:</strong> Wrapping a lower-level exception inside a high-level application exception while preserving the original cause: <code>throw new OrderProcessingException('Payment failed', sqlEx);</code>.<br>" +
         "• <strong>Significance:</strong> Retains complete causal stack trace history for forensic debugging."
  },
  {
    id: 159,
    q: "159. How do modern programming languages support exception handling, and what improvements have been made over time?",
    category: "Exception Handling",
    ans: "• <strong>Improvements:</strong> Try-with-resources (automatic resource management via <code>AutoCloseable</code>), multi-catch syntax, monadic error handling (Rust/Swift <code>Result<T, E></code>, Java <code>Optional</code>), and async/await syntax."
  },
  {
    id: 160,
    q: "160. What are design patterns, and why are they important in software development?",
    category: "Design Patterns",
    ans: "• <strong>Definition:</strong> Formalized best practices and reusable architectural templates for solving common software engineering design problems.<br>" +
         "• <strong>Importance:</strong> Accelerates development, prevents architectural anti-patterns, and establishes a shared professional vocabulary among engineers."
  },
  {
    id: 161,
    q: "161. Can you explain the difference between creational, structural, and behavioral design patterns?",
    category: "Design Patterns",
    ans: "• <strong>Creational:</strong> Deal with object creation mechanics (Singleton, Factory, Builder, Prototype).<br>" +
         "• <strong>Structural:</strong> Deal with object composition and class structure (Adapter, Decorator, Facade, Composite, Proxy).<br>" +
         "• <strong>Behavioral:</strong> Deal with communication and responsibility assignment among objects (Observer, Strategy, Command, State, Template Method)."
  },
  {
    id: 162,
    q: "162. Discuss the Singleton design pattern. When is it used, and what problem does it solve?",
    category: "Design Patterns",
    ans: "• <strong>Problem Solved:</strong> Guarantees that a class has exactly one instance and provides a single global access point to it.<br>" +
         "• <strong>When Used:</strong> Thread pools, logging systems, database connection managers, and device driver interfaces."
  },
  {
    id: 163,
    q: "163. What is the Factory Method pattern, and how does it differ from the Abstract Factory pattern?",
    category: "Design Patterns",
    ans: "• <strong>Factory Method:</strong> Uses a single method in an inheritance hierarchy to create one product type.<br>" +
         "• <strong>Abstract Factory:</strong> Provides an interface for creating entire families of related or dependent objects (e.g., Windows UI family vs. Mac UI family) without specifying concrete classes."
  },
  {
    id: 164,
    q: "164. Explain the Builder pattern and its advantages in object creation.",
    category: "Design Patterns",
    ans: "• <strong>Concept:</strong> Separates the step-by-step construction of a complex object from its final representation.<br>" +
         "• <strong>Advantages:</strong> Eliminates telescoping constructors with dozens of parameters, supports method chaining, and produces immutable objects safely."
  },
  {
    id: 165,
    q: "165. Discuss the Prototype pattern and provide examples of when it might be useful.",
    category: "Design Patterns",
    ans: "• <strong>Concept:</strong> Creates new objects by cloning an existing prototype object rather than instantiating from scratch via <code>new</code>.<br>" +
         "• <strong>When Useful:</strong> When object creation is computationally expensive (e.g., querying complex database hierarchies or compiling 3D graphical meshes)."
  },
  // =========================================================================
  // SECTION 4: STRUCTURAL/BEHAVIORAL PATTERNS, OOAD & SOLID (Q166 - Q219)
  // =========================================================================
  {
    id: 166,
    q: "166. What is the Adapter pattern, and how does it facilitate interoperability between incompatible interfaces?",
    category: "Design Patterns",
    ans: "• <strong>Concept:</strong> Acts as a wrapper (converter) between two incompatible interfaces, translating client requests into calls that a legacy or third-party service understands.<br>" +
         "• <strong>Interoperability:</strong> A modern app expecting a <code>JsonPaymentGateway</code> can wrap a legacy <code>XmlPaymentGateway</code> inside a <code>PaymentAdapter</code> without touching either original class."
  },
  {
    id: 167,
    q: "167. Explain the difference between the Bridge and the Adapter patterns.",
    category: "Design Patterns",
    ans: "• <strong>Adapter:</strong> Designed <em>after</em> systems are built to make unrelated, existing incompatible interfaces work together.<br>" +
         "• <strong>Bridge:</strong> Designed <em>upfront</em> to decouple an abstraction from its implementation so both can vary independently (e.g., <code>RemoteControl</code> abstraction bridged to <code>Device</code> implementation)."
  },
  {
    id: 168,
    q: "168. Discuss the Composite pattern and how it represents hierarchical structures of objects.",
    category: "Design Patterns",
    ans: "• <strong>Concept:</strong> Composes objects into tree structures to represent part-whole hierarchies.<br>" +
         "• <strong>Uniformity:</strong> Clients treat individual leaf objects (e.g., `File`) and composite collections (e.g., `Directory` containing files and sub-directories) uniformly through a shared component interface."
  },
  {
    id: 169,
    q: "169. What is the Decorator pattern, and how does it differ from inheritance?",
    category: "Design Patterns",
    ans: "• <strong>Decorator:</strong> Dynamically attaches additional responsibilities and behavior to an object at runtime by wrapping it.<br>" +
         "• <strong>Difference from Inheritance:</strong> Inheritance is static (compile-time) and applies to the entire class; Decorator is dynamic (runtime) and applies to individual object instances without subclass explosion (e.g., `new GzipOutputStream(new BufferedOutputStream(new FileOutputStream(file)))`)."
  },
  {
    id: 170,
    q: "170. Can you describe the Proxy pattern and its various implementations?",
    category: "Design Patterns",
    ans: "• <strong>Proxy Pattern:</strong> Provides a surrogate or placeholder object that controls access to the original underlying object.<br>" +
         "• <strong>Implementations:</strong><br>" +
         "  - <em>Virtual Proxy:</em> Lazy-loads heavy objects on demand (e.g., high-res image loading).<br>" +
         "  - <em>Protection Proxy:</em> Enforces role-based authentication before dispatching.<br>" +
         "  - <em>Remote Proxy:</em> Represents an object in a different address space (RMI / RPC).<br>" +
         "  - <em>Caching Proxy:</em> Caches expensive computation results."
  },
  {
    id: 171,
    q: "171. Explain the Observer pattern and its application in event-driven systems.",
    category: "Design Patterns",
    ans: "• <strong>Concept:</strong> Defines a one-to-many dependency where when a subject alters state, all registered observers are notified and updated automatically.<br>" +
         "• <strong>Application:</strong> GUI event listeners (clicks, keypresses), message brokers (Kafka/RabbitMQ consumer subscriptions), and reactive UI state stores (RxJS, Redux, Vue reactivity)."
  },
  {
    id: 172,
    q: "172. Discuss the Strategy pattern and its role in defining interchangeable algorithms.",
    category: "Design Patterns",
    ans: "• <strong>Concept:</strong> Encapsulates a family of algorithms into separate classes implementing a common interface, making them interchangeable at runtime.<br>" +
         "• <strong>Role:</strong> Eliminates huge switch/if-else blocks. A shopping cart can switch from <code>CreditCardStrategy</code> to <code>PayPalStrategy</code> or <code>CryptoStrategy</code> seamlessly."
  },
  {
    id: 173,
    q: "173. What is the Template Method pattern, and how does it facilitate code reuse?",
    category: "Design Patterns",
    ans: "• <strong>Concept:</strong> Defines the invariant skeleton of an algorithm in an abstract superclass method, letting subclasses override specific primitive steps without changing algorithm structure.<br>" +
         "• <strong>Code Reuse:</strong> The core sequence (e.g., parse &rarr; validate &rarr; save) is coded once; subclasses provide specific data formats (CSV, XML, JSON)."
  },
  {
    id: 174,
    q: "174. Explain the Chain of Responsibility pattern and its use in handling requests through a chain of processing objects.",
    category: "Design Patterns",
    ans: "• <strong>Concept:</strong> Passes an incoming request along a chain of potential handlers. Each handler either processes the request or passes it to the next handler in line.<br>" +
         "• <strong>Use Cases:</strong> HTTP servlet filters, authentication/authorization pipelines, and UI event bubbling."
  },
  {
    id: 175,
    q: "175. Discuss the Command pattern and its application in decoupling invokers from commands.",
    category: "Design Patterns",
    ans: "• <strong>Concept:</strong> Encapsulates a request as a standalone object containing all information needed to execute the action (receiver, method, arguments).<br>" +
         "• <strong>Decoupling:</strong> The invoker (e.g., a GUI `Button`) knows nothing about business operations; enables queueing requests, undo/redo operations, and transactional rollbacks."
  },
  {
    id: 176,
    q: "176. What is the State pattern, and how does it help in managing object behavior based on state changes?",
    category: "Design Patterns",
    ans: "• <strong>Concept:</strong> Allows an object to alter its behavior when its internal state changes, appearing as if the object changed its class.<br>" +
         "• <strong>Management:</strong> Replaces massive conditional state machines with discrete state classes (e.g., `DraftState`, `ModerationState`, `PublishedState` in a document management system)."
  },
  {
    id: 177,
    q: "177. Explain the Flyweight pattern and its role in optimizing memory usage by sharing common state.",
    category: "Design Patterns",
    ans: "• <strong>Concept:</strong> Minimizes RAM usage by sharing common, immutable state (intrinsic state) across thousands of fine-grained objects while keeping unique mutable data (extrinsic state) external.<br>" +
         "• <strong>Role:</strong> Text editors rendering 100,000 glyphs share font family and styling instances; game particle engines render millions of trees using shared 3D meshes."
  },
  {
    id: 178,
    q: "178. Discuss the Interpreter pattern and its use in interpreting and executing domain-specific languages.",
    category: "Design Patterns",
    ans: "• <strong>Concept:</strong> Defines a grammatical representation for a language along with an interpreter that uses the grammar to evaluate sentences.<br>" +
         "• <strong>Use Cases:</strong> SQL query parsing, regex engines, arithmetic expression evaluators, and configuration rule engines."
  },
  {
    id: 179,
    q: "179. Can you provide examples of when and how design patterns have been applied in your previous projects or experiences?",
    category: "Design Patterns",
    ans: "• <strong>Factory & Strategy:</strong> Used in a payment service to instantiate and execute dynamic payment strategies (Stripe, Razorpay) based on user geography.<br>" +
         "• <strong>Observer:</strong> Implemented real-time order status updates to notify customer dashboards and warehouse dispatchers concurrently.<br>" +
         "• <strong>Builder:</strong> Structured complex HTTP request construction with optional headers, timeouts, and auth tokens."
  },
  {
    id: 180,
    q: "180. What is Object-Oriented Analysis and Design (OOAD), and why is it important in software engineering?",
    category: "OOAD",
    ans: "• <strong>Definition:</strong> A systematic software engineering methodology that models a system as a group of interacting objects based on real-world business requirements.<br>" +
         "• <strong>Importance:</strong> Bridges the gap between informal customer requirements and robust, maintainable code architectures, ensuring modularity, scalability, and predictable project delivery."
  },
  {
    id: 181,
    q: "181. Discuss the difference between object-oriented analysis and object-oriented design.",
    category: "OOAD",
    ans: "• <strong>OOA (Analysis - 'What'):</strong> Focuses on understanding the problem domain, identifying business requirements, domain entities, and use cases without regard for programming language or technology stack.<br>" +
         "• <strong>OOD (Design - 'How'):</strong> Focuses on conceptualizing the technical solution, defining software classes, interfaces, data structures, algorithms, persistence models, and design pattern mappings."
  },
  {
    id: 182,
    q: "182. Can you explain the basic principles of OOAD, such as encapsulation, inheritance, and polymorphism?",
    category: "OOAD",
    ans: "• In OOAD, <strong>Encapsulation</strong> ensures domain boundaries and invariants are preserved; <strong>Inheritance</strong> organizes domain concepts into taxonomies; <strong>Polymorphism</strong> allows systems to support multiple execution strategies through common interfaces."
  },
  {
    id: 183,
    q: "183. What is the Unified Modeling Language (UML), and how is it used in OOAD?",
    category: "OOAD",
    ans: "• <strong>Definition:</strong> An industry-standard visual modeling notation (ISO/IEC 19501) for specifying, visualizing, constructing, and documenting the artifacts of a software system.<br>" +
         "• <strong>Usage in OOAD:</strong> Employs structural diagrams (Class, Component, Deployment) and behavioral diagrams (Use Case, Sequence, State Machine) to communicate architectural intent across teams."
  },
  {
    id: 184,
    q: "184. Explain the concept of a use case and its importance in OOAD.",
    category: "OOAD",
    ans: "• <strong>Use Case:</strong> A narrative describing a sequence of interactions between an external actor (user, system) and the software system to achieve a specific business goal.<br>" +
         "• <strong>Importance:</strong> Captures functional requirements from the end-user perspective, serving as the basis for object identification, testing scenarios, and sprint estimation."
  },
  {
    id: 185,
    q: "185. Discuss the role of domain modeling in object-oriented analysis.",
    category: "OOAD",
    ans: "• <strong>Role:</strong> Discovers and documents real-world conceptual classes, their attributes, and their relationships within the problem domain.<br>" +
         "• <strong>Benefit:</strong> Creates a shared ubiquitous language between non-technical domain experts and software engineers."
  },
  {
    id: 186,
    q: "186. Can you describe the process of identifying classes and objects in OOAD?",
    category: "OOAD",
    ans: "• <strong>Noun-Verb Analysis:</strong> Underline nouns in use cases as candidate classes/attributes (e.g., `Customer`, `Order`, `Invoice`); verbs represent candidate methods (e.g., `placeOrder()`, `generateInvoice()`).<br>" +
         "• <strong>Refinement:</strong> Filter out redundant, vague, or transient concepts; apply CRC cards (Class, Responsibility, Collaborator) to validate roles."
  },
  {
    id: 187,
    q: "187. What are the various relationships between classes in OOAD, such as association, aggregation, and composition?",
    category: "OOAD",
    ans: "• <strong>Association:</strong> A generic bidirectional or unidirectional relationship ('uses a').<br>" +
         "• <strong>Aggregation:</strong> Whole-part relationship where parts can exist independently (weak 'has-a').<br>" +
         "• <strong>Composition:</strong> Whole-part relationship where parts cannot exist without the whole (strong 'has-a').<br>" +
         "• <strong>Generalization:</strong> Inheritance relationship ('is-a').<br>" +
         "• <strong>Dependency:</strong> A temporary usage where class A depends on class B parameters."
  },
  {
    id: 188,
    q: "188. How do you model inheritance and polymorphism in OOAD?",
    category: "OOAD",
    ans: "• <strong>Inheritance:</strong> Drawn in UML class diagrams using a solid line with a closed hollow triangle arrow pointing from subclass to superclass.<br>" +
         "• <strong>Polymorphism:</strong> Modeled by showing abstract classes (italicized names) or interfaces (`<<interface>>`) realized by multiple concrete subclasses using dashed realization arrows."
  },
  {
    id: 189,
    q: "189. Explain the concept of behavior modeling in OOAD, including use of sequence diagrams and state diagrams.",
    category: "OOAD",
    ans: "• <strong>Sequence Diagrams:</strong> Model object interactions chronologically along vertical lifelines, depicting method calls, parameter returns, and asynchronous messages.<br>" +
         "• <strong>State Diagrams:</strong> Model the lifecycle transitions and states of an individual object (e.g., `OrderPlaced` &rarr; `Processing` &rarr; `Shipped` &rarr; `Delivered`)."
  },
  {
    id: 190,
    q: "190. Discuss the importance of object-oriented design patterns in OOAD and provide examples.",
    category: "OOAD",
    ans: "• In OOAD, design patterns provide proven architectural templates that prevent re-inventing solutions. For example, using the <em>Repository pattern</em> decouples data access logic from domain models during detailed design."
  },
  {
    id: 191,
    q: "191. What is the difference between architectural design and detailed design in OOAD?",
    category: "OOAD",
    ans: "• <strong>Architectural Design:</strong> Macro-level structure; defines subsystems, client-server topology, database technologies, and module interfaces.<br>" +
         "• <strong>Detailed Design:</strong> Micro-level structure; defines individual class attributes, method signatures, algorithms, and design pattern implementations."
  },
  {
    id: 192,
    q: "192. How do you ensure the scalability and maintainability of a software system through OOAD?",
    category: "OOAD",
    ans: "• Adhere to SOLID principles, maintain loose coupling and high cohesion, separate concerns across architectural boundaries, design around interfaces, and minimize shared mutable state."
  },
  {
    id: 193,
    q: "193. Explain the concept of coupling and cohesion in object-oriented design.",
    category: "Design Principles",
    ans: "• <strong>Cohesion:</strong> Internal focus of a single class. High cohesion means a class does one job comprehensively.<br>" +
         "• <strong>Coupling:</strong> Inter-class dependencies. Low coupling means changes in one class do not force cascading alterations across other classes."
  },
  {
    id: 194,
    q: "194. Discuss the role of abstraction and encapsulation in OOAD and how they promote modularity and flexibility.",
    category: "OOAD",
    ans: "• Abstraction establishes stable interface contracts across subsystems; encapsulation shields internal data models from external tampering, enabling independent team development and continuous refactoring."
  },
  {
    id: 195,
    q: "195. Can you describe the process of iterative development in OOAD, such as the Unified Process or Agile methodologies?",
    category: "OOAD",
    ans: "• Software is developed in short, repetitive cycles (sprints). Each iteration conducts analysis, design, implementation, and testing on a small slice of features, continuously delivering working increments and adapting to customer feedback."
  },
  {
    id: 196,
    q: "196. How do you handle changes and updates to the software requirements during the OOAD process?",
    category: "OOAD",
    ans: "• Design around abstractions and extension points (Open/Closed Principle); encapsulate varying business rules using Strategy or State patterns; maintain automated test suites to catch regression defects."
  },
  {
    id: 197,
    q: "197. Discuss the importance of testing and validation in OOAD, including techniques such as unit testing and integration testing.",
    category: "OOAD",
    ans: "• Ensures that technical designs fulfill original business requirements and prevents regression. Unit tests validate class-level logic in isolation; integration tests verify collaboration across subsystem boundaries."
  },
  {
    id: 198,
    q: "198. Can you provide examples of tools and software used for OOAD, such as UML modeling tools and version control systems?",
    category: "OOAD",
    ans: "• <strong>UML Tools:</strong> PlantUML, Enterprise Architect, Lucidchart, Visual Paradigm.<br>" +
         "• <strong>Version Control:</strong> Git, GitHub, GitLab.<br>" +
         "• <strong>Static Analysis:</strong> SonarQube, ArchUnit."
  },
  {
    id: 199,
    q: "199. How do you ensure that the designed software system meets the desired quality attributes, such as performance, reliability, and security?",
    category: "OOAD",
    ans: "• Conduct architectural reviews against non-functional requirements, enforce threat modeling and data validation at API perimeters, optimize algorithms and queries, and conduct automated load testing."
  },
  {
    id: 200,
    q: "200. What are the SOLID principles in OOP, and why are they important?",
    category: "SOLID Principles",
    ans: "• <strong>SOLID:</strong> Five design principles formalized by Robert C. Martin (Uncle Bob): Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion.<br>" +
         "• <strong>Importance:</strong> Eliminates code smells, prevents fragile architectures, and produces codebases that are resilient to ongoing requirement changes."
  },
  {
    id: 201,
    q: "201. Can you explain each of the SOLID principles and provide examples of how to apply them?",
    category: "SOLID Principles",
    ans: "• <strong>SRP:</strong> Separate user data persistence (`UserRepository`) from email dispatching (`EmailService`).<br>" +
         "• <strong>OCP:</strong> Extend tax calculation by adding a `EuropeTaxCalculator` class implementing `TaxCalculator` interface without editing US tax code.<br>" +
         "• <strong>LSP:</strong> Avoid making `Square` extend `Rectangle` if altering width mutates height unexpectedly.<br>" +
         "• <strong>ISP:</strong> Split `MultiFunctionPrinter` into `Printer`, `Scanner`, and `Fax` interfaces.<br>" +
         "• <strong>DIP:</strong> High-level `OrderService` depends on `PaymentGateway` interface, injected via constructor."
  },
  {
    id: 202,
    q: "202. Discuss the importance of code readability and maintainability in OOP. What are some practices to achieve these goals?",
    category: "Best Practices",
    ans: "• Code is read significantly more often than it is written. Practices include writing small focused methods (<20 lines), using intention-revealing names, avoiding deep nesting, and adhering to consistent formatting standards."
  },
  {
    id: 203,
    q: "203. How do you ensure proper naming conventions for classes, methods, and variables in OOP?",
    category: "Best Practices",
    ans: "• <strong>Classes:</strong> Nouns in PascalCase (e.g., `OrderProcessor`).<br>" +
         "• <strong>Methods:</strong> Verbs or verb phrases in camelCase (e.g., `calculateTotalPrice()`).<br>" +
         "• <strong>Variables:</strong> Descriptive nouns in camelCase (e.g., `userAccountBalance`).<br>" +
         "• <strong>Constants:</strong> UPPER_SNAKE_CASE (e.g., `MAX_RETRY_ATTEMPTS`)."
  },
  {
    id: 204,
    q: "204. Explain the concept of Don’t Repeat Yourself (DRY) principle in OOP, and how do you avoid code duplication?",
    category: "Best Practices",
    ans: "• <strong>DRY:</strong> 'Every piece of knowledge must have a single, unambiguous, authoritative representation within a system.'<br>" +
         "• <strong>Avoid Duplication:</strong> Extract common logic into helper methods, parent classes, composition delegates, or utility functions."
  },
  {
    id: 205,
    q: "205. Discuss the benefits of writing modular and reusable code in OOP.",
    category: "Best Practices",
    ans: "• Drastically reduces development time, enables isolated unit testing, simplifies debugging, allows parallel team development, and speeds up time-to-market for new features."
  },
  {
    id: 206,
    q: "206. Can you describe the importance of documentation in OOP, and how do you ensure effective documentation for your code?",
    category: "Best Practices",
    ans: "• <strong>Importance:</strong> Ensures long-term maintainability and rapid onboarding for new engineers.<br>" +
         "• <strong>Effective Documentation:</strong> Use Javadoc/docstrings for public API contracts, keep architectural decision records (ADRs), and write self-documenting code with clear variable and method names."
  },
  {
    id: 207,
    q: "207. What is defensive programming, and why is it important in OOP?",
    category: "Best Practices",
    ans: "• <strong>Defensive Programming:</strong> Anticipating and guarding against unexpected usage and invalid data.<br>" +
         "• <strong>Techniques:</strong> Validating constructor/method arguments eagerly (fail-fast), returning immutable collections, and creating defensive copies of mutable input parameters."
  },
  {
    id: 208,
    q: "208. Discuss the role of version control systems in OOP development, and how do you utilize them effectively?",
    category: "Best Practices",
    ans: "• <strong>Role:</strong> Tracks code history, supports atomic commits, and facilitates collaborative branching.<br>" +
         "• <strong>Effective Use:</strong> Feature branching (GitFlow), descriptive commit messages, atomic commits, pull requests with mandatory code reviews, and CI checks."
  },
  {
    id: 209,
    q: "209. Explain the importance of testing in OOP, including unit testing, integration testing, and other testing methodologies.",
    category: "Best Practices",
    ans: "• Serves as an automated safety net for refactoring. Ensures code correctness, catches regression defects early in the pipeline, and documents intended behavior through executable test specifications."
  },
  {
    id: 210,
    q: "210. Can you describe the difference between integration testing and unit testing in OOP, and when do you use each?",
    category: "Best Practices",
    ans: "• <strong>Unit Testing:</strong> Tests an individual class or method in complete isolation, mocking all dependencies. Fast and focused.<br>" +
         "• <strong>Integration Testing:</strong> Tests interactions between integrated components (e.g., Service talking to live Database or external API). Slower but verifies system-wide collaboration."
  },
  {
    id: 211,
    q: "211. Discuss the concept of code reviews and pair programming in OOP, and how do they contribute to code quality?",
    category: "Best Practices",
    ans: "• <strong>Code Reviews:</strong> Peer inspection of pull requests to catch design flaws, security bugs, and maintainability issues before merging.<br>" +
         "• <strong>Pair Programming:</strong> Two engineers collaborating at one workstation (Driver and Navigator), facilitating immediate continuous review and rapid knowledge sharing."
  },
  {
    id: 212,
    q: "212. What are design patterns, and why are they important in OOP development?",
    category: "Design Patterns",
    ans: "• Reusable solutions that encode collective architectural wisdom. They prevent architectural rot, ensure systems adhere to SOLID guidelines, and speed up cross-team code comprehension."
  },
  {
    id: 213,
    q: "213. How do you handle exceptions and errors gracefully in OOP?",
    category: "Exception Handling",
    ans: "• Trap errors at appropriate architectural boundaries, log actionable context, release allocated resources in finally blocks or try-with-resources, and present user-friendly error notifications instead of raw stack traces."
  },
  {
    id: 214,
    q: "214. Explain the concept of continuous integration and continuous deployment (CI/CD) in OOP development.",
    category: "Best Practices",
    ans: "• <strong>CI:</strong> Developers merge code frequently into the main branch; automated builds and unit tests execute on every push.<br>" +
         "• <strong>CD:</strong> Automatically validates, stages, and deploys verified builds to production servers, shortening release cycles and reducing deployment risk."
  },
  {
    id: 215,
    q: "215. Can you discuss the importance of coding standards and conventions in OOP development, and how do you adhere to them?",
    category: "Best Practices",
    ans: "• Ensures that a large codebase appears as if written by a single cohesive developer. Adherence is enforced automatically using linters, formatters (Prettier, Spotless), and static analysis tools in CI pipelines."
  },
  {
    id: 216,
    q: "216. What are code smells, and how do you identify and refactor them in OOP?",
    category: "Best Practices",
    ans: "• <strong>Code Smells:</strong> Surface symptoms in code indicating deeper design defects (e.g., God Class, Long Method, Feature Envy, Primitive Obsession).<br>" +
         "• <strong>Refactoring:</strong> Extract Method, Extract Class, Replace Conditional with Polymorphism, and Introduce Parameter Object."
  },
  {
    id: 217,
    q: "217. Discuss the importance of performance optimization in OOP, and how do you optimize code for better performance?",
    category: "Best Practices",
    ans: "• <strong>Optimization Rule:</strong> 'Premature optimization is the root of all evil' (Donald Knuth). Profile first using tools (JProfiler, VisualVM).<br>" +
         "• <strong>Techniques:</strong> Use optimal data structures, avoid creating unnecessary temporary objects in tight loops, utilize object pooling (Flyweight), and minimize synchronization overhead."
  },
  {
    id: 218,
    q: "218. Explain the concept of separation of concerns in OOP, and how do you ensure it in your code?",
    category: "Design Principles",
    ans: "• <strong>Concept:</strong> Software is divided into distinct sections, each addressing a separate operational concern (presentation, business logic, data persistence).<br>" +
         "• <strong>Ensuring SoC:</strong> Layered architecture (MVC, Clean Architecture), dependency injection, and strict adherence to the Single Responsibility Principle."
  },
  {
    id: 219,
    q: "219. Can you provide examples of anti-patterns in OOP, and how do you avoid them in your development practices?",
    category: "Best Practices",
    ans: "• <strong>1. God Object (Blob):</strong> A monolithic class holding all system logic &rarr; Fix: Decompose into focused single-responsibility classes.<br>" +
         "• <strong>2. Spaghetti Code:</strong> Tangled control flow without structured modularity &rarr; Fix: Modularize into decoupled components.<br>" +
         "• <strong>3. Golden Hammer:</strong> Forcing a favorite pattern (e.g., Singleton everywhere) &rarr; Fix: Select patterns strictly based on concrete requirements.<br>" +
         "• <strong>4. Anemic Domain Model:</strong> Domain objects with only getters/setters and zero business behavior &rarr; Fix: Co-locate domain logic with data inside entities."
  }
];
