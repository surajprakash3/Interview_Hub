/**
 * DBMS_FAQ_DATA: Complete 270 Frequently Asked Interview Questions with In-Depth Answers
 * Source: Section 2.11 of Placement Preparation Booklet (Pushpendra Kumar Pateriya / LPU)
 * Covers: ER Modeling, DBMS Architectures, Keys, Normalization, SQL, Relational Algebra,
 * Functional Dependencies, Transaction Management & ACID, and Unstructured/NoSQL Databases.
 */
const DBMS_FAQ_DATA = [
  // =========================================================================
  // 1. ER MODELING & DATABASE DESIGN (Q1 - Q20)
  // =========================================================================
  {
    id: 1,
    q: "1. What is an Entity-Relationship (ER) diagram, and what is its purpose?",
    category: "ER Modeling",
    ans: "• <strong>Definition:</strong> An Entity-Relationship (ER) Diagram is a high-level conceptual data model that visually represents the logical structure of a database, originally proposed by Peter Chen in 1976.<br>• <strong>Components:</strong> It depicts real-world objects as <em>Entities</em>, their characteristics as <em>Attributes</em>, and associations between entities as <em>Relationships</em>.<br>• <strong>Primary Purpose:</strong> Acts as a visual blueprint facilitating clear communication between system architects, business analysts, and database developers during the requirements analysis and conceptual design phase before physical database schema implementation."
  },
  {
    id: 2,
    q: "2. Describe the main components of an ER diagram.",
    category: "ER Modeling",
    ans: "• <strong>1. Entity:</strong> A distinguishable real-world object or concept (represented by a <em>Rectangle</em>).<br>• <strong>2. Weak Entity:</strong> An entity whose existence depends on an identifying owner entity (represented by a <em>Double Rectangle</em>).<br>• <strong>3. Attribute:</strong> A property or characteristic describing an entity (represented by an <em>Ellipse/Oval</em>).<br>• <strong>4. Key Attribute:</strong> An attribute that uniquely identifies an entity instance, drawn with an <em>Underlined label inside an Ellipse</em>.<br>• <strong>5. Relationship:</strong> An association among two or more entities (represented by a <em>Diamond</em>).<br>• <strong>6. Connecting Lines:</strong> Solid lines linking attributes to entities and entities to relationship diamonds, annotated with cardinality ratios (1:1, 1:N, M:N)."
  },
  {
    id: 3,
    q: "3. What is an entity, and how is it represented in an ER diagram?",
    category: "ER Modeling",
    ans: "• <strong>Entity Definition:</strong> An entity is an object, person, place, event, or concept in the real world that is distinguishable from other objects and about which the organization stores data (e.g. <code>Student</code>, <code>Employee</code>, <code>Course</code>, <code>Order</code>).<br>• <strong>Entity Set:</strong> A collection of similar entities sharing the same properties (e.g., all active students in a university).<br>• <strong>ER Representation:</strong> Drawn as a solid <strong>Rectangle</strong> labeled with a singular noun in uppercase or title case."
  },
  {
    id: 4,
    q: "4. Explain the different types of entities commonly used in ER diagrams.",
    category: "ER Modeling",
    ans: "• <strong>1. Strong Entity (Regular Entity):</strong> Has a primary key that can uniquely identify its instances independently without relying on other entities (e.g., <code>Employee(Emp_ID)</code>). Drawn as a single rectangle.<br>• <strong>2. Weak Entity:</strong> Lacks sufficient attributes to form a primary key on its own; existence depends on a strong identifying owner entity (e.g., <code>Dependent</code> relying on <code>Employee</code>). Drawn as a double rectangle.<br>• <strong>3. Associative Entity:</strong> An entity used in place of a many-to-many relationship that contains attributes of its own (e.g., <code>Enrollment</code> linking <code>Student</code> and <code>Course</code> with <code>Grade</code>). Drawn as a diamond inside a rectangle."
  },
  {
    id: 5,
    q: "5. What is an attribute, and how is it represented in an ER diagram?",
    category: "ER Modeling",
    ans: "• <strong>Definition:</strong> An attribute is a descriptive property or characteristic that describes an entity instance (e.g., an <code>Employee</code> entity possesses attributes <code>Emp_ID</code>, <code>Name</code>, <code>Salary</code>, <code>Date_Of_Birth</code>).<br>• <strong>Domain:</strong> The set of permissible values an attribute can assume.<br>• <strong>ER Representation:</strong> Drawn as an <strong>Ellipse (Oval)</strong> connected to its parent entity rectangle via a straight solid line."
  },
  {
    id: 6,
    q: "6. Describe the different types of attributes, including simple, composite, and derived attributes.",
    category: "ER Modeling",
    ans: "• <strong>Simple (Atomic) Attribute:</strong> Cannot be divided into smaller sub-components (e.g., <code>Salary</code>, <code>Roll_No</code>).<br>• <strong>Composite Attribute:</strong> Can be divided into smaller sub-parts that represent more basic attributes with independent meanings (e.g., <code>Address</code> subdivided into <code>Street</code>, <code>City</code>, <code>ZipCode</code>; <code>Name</code> into <code>First_Name</code>, <code>Last_Name</code>). Drawn as ellipses branching off an ellipse.<br>• <strong>Single-Valued Attribute:</strong> Holds a single value for an entity instance (e.g., <code>Aadhaar_Number</code>, <code>Age</code>).<br>• <strong>Multi-Valued Attribute:</strong> Can hold multiple values for a single entity instance (e.g., <code>Phone_Numbers</code>, <code>Degrees</code>). Drawn as a <em>Double Ellipse</em>.<br>• <strong>Derived Attribute:</strong> Value is computed from other attributes rather than physically stored (e.g., <code>Age</code> derived from <code>Current_Date - DOB</code>). Drawn as a <em>Dashed Ellipse</em>."
  },
  {
    id: 7,
    q: "7. What is a relationship, and how is it represented in an ER diagram?",
    category: "ER Modeling",
    ans: "• <strong>Definition:</strong> A relationship represents an association or meaningful link between two or more entity instances (e.g., <code>Employee WORKS_IN Department</code>).<br>• <strong>Relationship Set:</strong> A mathematical relation on $n \\ge 2$ entity sets $E_1, E_2, \\dots, E_n$.<br>• <strong>Degree of Relationship:</strong> Number of participating entity sets: <em>Unary (Recursive)</em> = 1 entity, <em>Binary</em> = 2 entities, <em>Ternary</em> = 3 entities.<br>• <strong>ER Representation:</strong> Represented by a <strong>Diamond</strong> labeled with a descriptive active verb, connected to participating entities via straight lines."
  },
  {
    id: 8,
    q: "8. Explain the cardinality and participation constraints in relationships.",
    category: "ER Modeling",
    ans: "• <strong>Cardinality Ratio:</strong> Specifies the maximum number of relationship instances in which an entity can participate (1:1, 1:N, M:N).<br>• <strong>Participation Constraint:</strong> Specifies whether the existence of an entity depends on its being related to another entity via the relationship type:<br>&nbsp;&nbsp;1. <em>Total Participation (Existence Dependency):</em> Every entity in the entity set MUST participate in at least one relationship instance. Represented by a <strong>Double Line</strong> connecting entity to diamond.<br>&nbsp;&nbsp;2. <em>Partial Participation:</em> Only some entities participate in the relationship instances (e.g. not every employee manages a department). Represented by a <strong>Single Line</strong>."
  },
  {
    id: 9,
    q: "9. Describe the different types of relationships, including one-to-one, one-to-many, and many-to-many relationships.",
    category: "ER Modeling",
    ans: "• <strong>1. One-to-One (1:1):</strong> An entity in A is associated with at most one entity in B, and vice versa (e.g., <code>Person HAS_PASSPORT Passport</code>).<br>• <strong>2. One-to-Many (1:N):</strong> An entity in A is associated with any number ($0 \\dots N$) of entities in B, but an entity in B can be associated with at most one entity in A (e.g., <code>Department EMPLOYS Employee</code>).<br>• <strong>3. Many-to-Many (M:N):</strong> An entity in A can be associated with multiple entities in B, and an entity in B can be associated with multiple entities in A (e.g., <code>Student ENROLLS_IN Course</code>). Converted into a bridge/junction table in relational schemas."
  },
  {
    id: 10,
    q: "10. What are weak entities, and how are they represented in an ER diagram?",
    category: "ER Modeling",
    ans: "• <strong>Weak Entity:</strong> An entity that does not possess a primary key of its own and whose existence is dependent on an identifying strong entity (e.g., <code>Dependent</code> of an <code>Employee</code>; <code>Room</code> inside a <code>Building</code>).<br>• <strong>Discriminator (Partial Key):</strong> A set of attributes that uniquely identifies a weak entity instance among all instances dependent on the same strong entity. Denoted by a <strong>Dashed Underline</strong> inside an ellipse.<br>• <strong>ER Representation:</strong> Drawn as a <strong>Double Rectangle</strong>, linked to the owner entity through an <strong>Identifying Relationship</strong> drawn as a <strong>Double Diamond</strong> with a <strong>Double Line</strong> indicating total participation."
  },
  {
    id: 11,
    q: "11. Explain the concept of identifying and non-identifying relationships.",
    category: "ER Modeling",
    ans: "• <strong>Identifying Relationship:</strong> A relationship where the weak child entity cannot be uniquely identified without the primary key of the parent strong entity. The parent's PK becomes part of the child's composite primary key (e.g., <code>Employee (PK: Emp_Id) -> Dependent (PK: Emp_Id + Dep_Name)</code>). Drawn as a double diamond.<br>• <strong>Non-Identifying Relationship:</strong> A standard relationship between two independent, strong entities where the child entity has its own independent primary key, and the parent's PK is referenced merely as a foreign key attribute (e.g., <code>Department (Dept_Id) -> Employee (Emp_Id, Dept_Id as FK)</code>)."
  },
  {
    id: 12,
    q: "12. What is an associative entity, and when is it used in an ER diagram?",
    category: "ER Modeling",
    ans: "• <strong>Associative Entity (Bridge / Junction Entity):</strong> An entity type that associates the instances of one or more entity types and contains attributes that are peculiar to the relationship itself.<br>• <strong>When Used:</strong> Deployed to resolve Many-to-Many (M:N) relationships into two One-to-Many (1:N) relationships when the relationship itself possesses descriptive attributes, participates in other relationships, or requires ternary associations (e.g., <code>Enrollment(Student_ID, Course_ID, Grade, Semester)</code> linking <code>Student</code> and <code>Course</code>).<br>• <strong>Representation:</strong> A diamond enclosed inside a rectangle."
  },
  {
    id: 13,
    q: "13. How do you denote specialization and generalization in an ER diagram?",
    category: "ER Modeling",
    ans: "• <strong>Generalization:</strong> Bottom-up process of synthesizing multiple lower-level entity sets with common features into a single higher-level superclass entity (e.g., <code>Car</code> and <code>Truck</code> generalized into <code>Vehicle</code>).<br>• <strong>Specialization:</strong> Top-down process of subdividing a higher-level entity set into distinctive lower-level subclass entities based on distinguishing attributes or relationships (e.g., <code>Employee</code> specialized into <code>Manager</code>, <code>Developer</code>, <code>Clerk</code>).<br>• <strong>Notation:</strong> Represented using an inverted triangle labeled <strong>'IS-A'</strong> or a circle with disjoint/overlap indicators (<code>d</code> for disjoint, <code>o</code> for overlapping) with single/double lines indicating partial or total completeness."
  },
  {
    id: 14,
    q: "14. What are the key differences between an ER diagram and a relational schema?",
    category: "ER Modeling",
    ans: "• <strong>Conceptual vs. Logical:</strong> ER diagrams provide an abstract, hardware-independent conceptual view of business entities and real-world relationships; a Relational Schema defines the logical structure of tables, columns, primary keys, and foreign keys tailored for an RDBMS engine.<br>• <strong>Representation:</strong> ER uses geometric shapes (rectangles, ellipses, diamonds); Relational Schema uses tabular definitions: <code>Table_Name(Column1 [PK], Column2, Column3 [FK])</code>.<br>• <strong>M:N Handling:</strong> ER diagrams natively represent Many-to-Many relationships via a single diamond; relational schemas require creating a third junction/bridge table."
  },
  {
    id: 15,
    q: "15. Describe the process of converting an ER diagram into a relational schema.",
    category: "ER Modeling",
    ans: "• <strong>Step 1: Strong Entities:</strong> Map each strong entity to an independent relation; simple attributes become columns, primary key becomes relation PK.<br>• <strong>Step 2: Weak Entities:</strong> Create a table containing weak entity attributes + foreign key referencing the owner's primary key; composite PK = (Owner_PK + Discriminator).<br>• <strong>Step 3: 1:1 Relationships:</strong> Place the primary key of one table as a foreign key (with UNIQUE constraint) in the other table, preferably on the side with total participation.<br>• <strong>Step 4: 1:N Relationships:</strong> Place the primary key of the '1' side table as a foreign key in the 'N' side table.<br>• <strong>Step 5: M:N Relationships:</strong> Create a new cross-reference table whose primary key is the composite of the primary keys of both participating entity sets + any relationship attributes.<br>• <strong>Step 6: Multivalued Attributes:</strong> Create a separate table with the multivalued attribute and the entity's primary key."
  },
  {
    id: 16,
    q: "16. How do you validate the correctness of an ER diagram?",
    category: "ER Modeling",
    ans: "• <strong>1. Requirement Completeness:</strong> Verify that every entity, attribute, relationship, and constraint stated in the business requirements document is accurately captured.<br>• <strong>2. Structural Integrity:</strong> Ensure every entity set has a distinct identifier (candidate key), no dangling relationships exist, and multi-valued attributes are properly designated.<br>• <strong>3. Redundancy Elimination:</strong> Remove redundant cyclical relationships that convey duplicate semantic associations.<br>• <strong>4. Normalization Verification:</strong> Perform normalization checks on synthesized schemas to confirm the model avoids update, insertion, and deletion anomalies.<br>• <strong>5. Stakeholder Walkthrough:</strong> Conduct functional reviews with domain experts using scenario-based test cases."
  },
  {
    id: 17,
    q: "17. What are some best practices for designing effective ER diagrams?",
    category: "ER Modeling",
    ans: "• <strong>Consistent Naming Conventions:</strong> Use singular nouns in uppercase or PascalCase for entities (<code>Student</code>, <code>Invoice</code>) and active verbs for relationships (<code>MANAGES</code>, <code>PURCHASES</code>).<br>• <strong>Avoid Overcrowding:</strong> Split complex enterprise domains into modular sub-schemas (subject areas) rather than placing 100+ entities on a single diagram.<br>• <strong>Resolve M:N Early:</strong> Identify whether M:N relationships require descriptive attributes and promote them to associative entities.<br>• <strong>Precise Cardinalities:</strong> Explicitly declare both minimum (participation) and maximum cardinality bounds for every relationship edge.<br>• <strong>Minimize Redundancy:</strong> Never create an attribute in one entity to store the key of another; let the relationship diamond model the association."
  },
  {
    id: 18,
    q: "18. Explain the concept of aggregation in ER diagrams.",
    category: "ER Modeling",
    ans: "• <strong>Concept:</strong> Aggregation is an abstraction through which relationships are treated as higher-level entities.<br>• <strong>Problem Addressed:</strong> Standard ER diagrams do not permit relationships between relationships. If a binary relationship $R$ between entities $A$ and $B$ must participate in a relationship with a third entity $C$, aggregation encapsulates $A$, $B$, and $R$ into an aggregated entity box.<br>• <strong>Example:</strong> An <code>Employee WORKS_ON Project</code> relationship needs to be associated with <code>Machinery (USES)</code>. We aggregate <code>[Employee - WORKS_ON - Project]</code> into a single conceptual unit that connects to <code>Machinery</code> via a <code>USES</code> diamond.<br>• <strong>Representation:</strong> Drawn as a solid rectangular boundary enclosing the entity sets and their linking relationship diamond."
  },
  {
    id: 19,
    q: "19. How can you represent constraints and business rules in an ER diagram?",
    category: "ER Modeling",
    ans: "• <strong>1. Cardinality & Participation Constraints:</strong> Notated using (min, max) notation, crow's foot notations, or double lines for total participation.<br>• <strong>2. Primary Key Uniqueness:</strong> Solid underlines under key attribute names.<br>• <strong>3. Partial Key Constraint:</strong> Dashed underline for weak entity discriminators.<br>• <strong>4. Specialization Constraints:</strong> Disjointness (Disjoint <code>'d'</code> vs. Overlapping <code>'o'</code>) and Completeness (Total specialization with double line vs. Partial with single line).<br>• <strong>5. Custom Business Constraints:</strong> Documented as textual annotations, assertion notes, or UML OCL (Object Constraint Language) callout boxes."
  },
  {
    id: 20,
    q: "20. What are some common tools used for creating and manipulating ER diagrams?",
    category: "ER Modeling",
    ans: "• <strong>1. MySQL Workbench:</strong> Comprehensive visual database design tool with forward/reverse engineering capabilities from live MySQL databases.<br>• <strong>2. Oracle SQL Developer Data Modeler:</strong> Enterprise-grade modeling tool supporting logical, relational, and physical multi-dimensional models.<br>• <strong>3. Microsoft Visio:</strong> Widely used diagramming tool with built-in Crow's Foot and Chen notation stencils.<br>• <strong>4. Lucidchart / Draw.io:</strong> Cloud-native collaborative diagramming platforms with automated SQL schema import/export.<br>• <strong>5. ERwin Data Modeler:</strong> Industry standard enterprise tool supporting complex database architectures, metadata governance, and data lineage."
  },

  // =========================================================================
  // 2. DBMS ARCHITECTURES, TYPES & MODERN PARADIGMS (Q21 - Q40)
  // =========================================================================
  {
    id: 21,
    q: "21. What is a Database Management System (DBMS), and what are its main functions?",
    category: "DBMS Architecture",
    ans: "• <strong>Definition:</strong> A DBMS is a complex software system that enables users to define, create, maintain, and control access to structured computer databases.<br>• <strong>Main Functions:</strong><br>&nbsp;&nbsp;1. <em>Data Storage, Retrieval & Update:</em> Efficient execution of storage allocations and DML operations.<br>&nbsp;&nbsp;2. <em>Data Dictionary Management:</em> Maintains catalog/system metadata describing schemas, tables, and constraints.<br>&nbsp;&nbsp;3. <em>Transaction Management & ACID Guarantees:</em> Ensures reliable unit-of-work execution.<br>&nbsp;&nbsp;4. <em>Concurrency Control:</em> Manages simultaneous multi-user database access without lock conflicts.<br>&nbsp;&nbsp;5. <em>Data Security & Integrity:</em> Enforces role-based permissions and relational domain constraints.<br>&nbsp;&nbsp;6. <em>Backup & Recovery:</em> Automates recovery procedures to restore consistent states after hardware/software crashes."
  },
  {
    id: 22,
    q: "22. Describe the key components of a DBMS architecture.",
    category: "DBMS Architecture",
    ans: "• <strong>ANSI-SPARC Three-Schema Architecture:</strong><br>&nbsp;&nbsp;1. <em>External Level (View Schema):</em> Individual user/application tailored views.<br>&nbsp;&nbsp;2. <em>Conceptual Level (Logical Schema):</em> Community logical view of all entities, relationships, constraints, and security rules.<br>&nbsp;&nbsp;3. <em>Internal Level (Physical Schema):</em> Physical data storage layout, file allocations, indexing, and compression structures on disk.<br>• <strong>DBMS Engine Modules:</strong> Storage Manager (Buffer Manager, File Manager, Transaction Manager, Lock Manager) and Query Processor (DDL Interpreter, DML Compiler, Query Optimizer, Execution Engine)."
  },
  {
    id: 23,
    q: "23. What are the advantages of using a DBMS over traditional file-based systems?",
    category: "DBMS Architecture",
    ans: "• <strong>1. Data Redundancy & Inconsistency:</strong> File systems store redundant duplicate data across departments; DBMS centralizes data with single-point updates.<br>• <strong>2. Data Sharing:</strong> DBMS supports simultaneous multi-user concurrent access; file systems lock entire files.<br>• <strong>3. Data Integrity:</strong> DBMS natively enforces integrity constraints (PK, FK, CHECK); file systems require manual validation inside application code.<br>• <strong>4. Security Restrictions:</strong> DBMS provides granular row/column level authorization; file systems offer coarse read/write file access.<br>• <strong>5. Crash Recovery:</strong> DBMS guarantees ACID durability via write-ahead logging (WAL); file systems risk corruption on unexpected power failure.<br>• <strong>6. Program-Data Independence:</strong> Changes in physical storage layout do not break DBMS application programs."
  },
  {
    id: 24,
    q: "24. Explain the concept of data independence in the context of DBMS.",
    category: "DBMS Architecture",
    ans: "• <strong>Data Independence:</strong> The capacity to change schema at one level of a database system without having to alter the schema at the next higher level.<br>• <strong>1. Logical Data Independence:</strong> The capacity to modify the conceptual schema (e.g. adding new tables, columns, or relationships) without having to rewrite external views or existing application programs.<br>• <strong>2. Physical Data Independence:</strong> The capacity to modify the internal/physical schema (e.g. switching disk storage, changing file organizations, building B+ tree indexes, enabling compression) without having to alter the conceptual or external schemas."
  },
  {
    id: 25,
    q: "25. Describe the role of the Data Definition Language (DDL) in a DBMS.",
    category: "DBMS Architecture",
    ans: "• <strong>Role:</strong> DDL provides the syntax and declarative instructions used to define, modify, and drop database schemas, tables, indexes, views, and integrity constraints.<br>• <strong>System Catalog Impact:</strong> DDL statements (<code>CREATE</code>, <code>ALTER</code>, <code>DROP</code>, <code>TRUNCATE</code>) do not manipulate raw table rows; instead, they generate entries stored inside the <em>System Catalog (Data Dictionary)</em>.<br>• <strong>Auto-Commit Behavior:</strong> In most enterprise DBMSs (Oracle, MySQL, SQL Server), DDL statements implicitly execute an auto-commit, permanently finalizing transaction state and cannot be rolled back."
  },
  {
    id: 26,
    q: "26. What is a data model, and how does it relate to a DBMS?",
    category: "DBMS Architecture",
    ans: "• <strong>Definition:</strong> A data model is an integrated collection of concepts for describing data, data relationships, data semantics, and data constraints.<br>• <strong>Relationship to DBMS:</strong> The underlying data model dictates the fundamental architecture, query interface, and storage engine of the DBMS.<br>• <strong>Major Categories:</strong><br>&nbsp;&nbsp;1. <em>Conceptual Models:</em> High-level ER and Semantic models.<br>&nbsp;&nbsp;2. <em>Record-Based Logical Models:</em> Relational Model (Tables/SQL), Hierarchical Model (Tree structures), Network Model (Graphs/Pointers).<br>&nbsp;&nbsp;3. <em>Modern Distributed Models:</em> Key-Value, Document, Wide-Column, and Graph NoSQL models."
  },
  {
    id: 27,
    q: "27. Discuss the difference between a relational database and a NoSQL database.",
    category: "DBMS Architecture",
    ans: "• <strong>Data Model:</strong> Relational uses rigid two-dimensional tables with fixed schemas; NoSQL uses flexible dynamic schemas (JSON documents, key-value pairs, wide columns, graphs).<br>• <strong>Transaction Guarantees:</strong> RDBMS strictly follows <strong>ACID</strong>; NoSQL typically adheres to <strong>BASE</strong> (Basically Available, Soft-state, Eventual consistency).<br>• <strong>Scalability:</strong> RDBMS scales <em>Vertically</em> (Scale-Up by adding CPU/RAM to a single server); NoSQL scales <em>Horizontally</em> (Scale-Out by sharding across commodity clusters).<br>• <strong>Complex Joins:</strong> RDBMS excels at complex multi-table SQL JOIN queries; NoSQL denormalizes data to optimize single-query read/write latency without joins."
  },
  {
    id: 28,
    q: "28. How does a DBMS ensure data integrity and security?",
    category: "DBMS Architecture",
    ans: "• <strong>Data Integrity:</strong><br>&nbsp;&nbsp;• <em>Entity Integrity:</em> Primary keys must be unique and strictly NOT NULL.<br>&nbsp;&nbsp;• <em>Referential Integrity:</em> Foreign keys must match existing parent primary keys or be NULL (enforced via <code>CASCADE</code>, <code>RESTRICT</code>, <code>SET NULL</code>).<br>&nbsp;&nbsp;• <em>Domain Integrity:</em> Columns enforce strict data types, lengths, and <code>CHECK</code> conditions.<br>• <strong>Data Security:</strong><br>&nbsp;&nbsp;• <em>Authentication & Authorization:</em> User logins paired with Role-Based Access Control (RBAC) via <code>GRANT</code> / <code>REVOKE</code>.<br>&nbsp;&nbsp;• <em>Encryption:</em> Transparent Data Encryption (TDE) for data at rest and TLS/SSL for data in transit.<br>&nbsp;&nbsp;• <em>Audit Trails:</em> Logging all schema modifications and sensitive table accesses."
  },
  {
    id: 29,
    q: "29. Explain the concept of transaction management in a DBMS.",
    category: "DBMS Architecture",
    ans: "• <strong>Concept:</strong> Transaction management guarantees that concurrent database executions and system crashes leave the database in a consistent, error-free state.<br>• <strong>Core Mechanisms:</strong><br>&nbsp;&nbsp;1. <em>Concurrency Control:</em> Governed by Lock Managers, Two-Phase Locking (2PL), and Multiversion Concurrency Control (MVCC) to ensure serializability.<br>&nbsp;&nbsp;2. <em>Crash Recovery:</em> Governed by Write-Ahead Logging (WAL) and checkpoints (e.g. ARIES algorithm) allowing Redo (forward roll) and Undo (backward rollback) operations upon restart."
  },
  {
    id: 30,
    q: "30. What are the common types of users in a DBMS environment?",
    category: "DBMS Architecture",
    ans: "• <strong>1. Database Administrator (DBA):</strong> Manages database schema, physical storage, user permissions, backups, performance tuning, and disaster recovery.<br>• <strong>2. Database Designers:</strong> Identify data requirements, construct conceptual ER diagrams, and design normalized relational schemas.<br>• <strong>3. Application Programmers:</strong> Write software applications (Java, Python, C#) that interact with the DBMS using embedded SQL, JDBC, or ORM frameworks.<br>• <strong>4. Sophisticated / Analyst Users:</strong> Write ad-hoc complex SQL queries and OLAP analytical scripts to extract business intelligence.<br>• <strong>5. End Users (Naive Users):</strong> Interact with the database indirectly through front-end web or mobile interfaces without knowing database internals."
  },
  {
    id: 31,
    q: "31. What is a relational database management system (RDBMS), and how does it differ from other types of DBMS?",
    category: "DBMS Architecture",
    ans: "• <strong>Definition:</strong> An RDBMS is a DBMS based on the relational model introduced by E.F. Codd (1970), where data is organized into tables (relations) of rows and columns.<br>• <strong>Differences from other DBMS:</strong><br>&nbsp;&nbsp;• Unlike Hierarchical and Network DBMS, which link records via physical memory pointers, RDBMS establishes relationships logically through shared column values (Foreign Keys).<br>&nbsp;&nbsp;• Provides mathematical foundation based on First-Order Predicate Logic and Relational Algebra.<br>&nbsp;&nbsp;• Uses standardized SQL for all declarative query processing.<br>&nbsp;&nbsp;• Prominent examples: PostgreSQL, MySQL, Oracle, Microsoft SQL Server."
  },
  {
    id: 32,
    q: "32. Describe the characteristics and advantages of a hierarchical database management system.",
    category: "DBMS Architecture",
    ans: "• <strong>Characteristics:</strong> Organizes data in an inverted tree structure with a single root node. Records are connected through parent-child relationships where each parent can have multiple children, but each child can have only <em>one</em> parent (strictly 1:N).<br>• <strong>Advantages:</strong> High performance and rapid traversal for strictly hierarchical 1:N data (e.g. file system directories, organizational charts) using direct physical disk pointers.<br>• <strong>Limitations:</strong> Inability to naturally model M:N relationships, high data redundancy, and rigid navigational queries (e.g., IBM IMS)."
  },
  {
    id: 33,
    q: "33. Explain the concept of network database management systems (NDBMS).",
    category: "DBMS Architecture",
    ans: "• <strong>Concept:</strong> Standardized by the CODASYL DBTG committee (1969), the network model represents data as record types linked in an arbitrary graph structure.<br>• <strong>Owner-Member Sets:</strong> Unlike the hierarchical model, a child (member) can have <em>multiple</em> parent (owner) records, naturally modeling Many-to-Many (M:N) relationships.<br>• <strong>Navigation:</strong> Traversal relies on complex physical pointer chains (linked lists). While fast for predictable lookups, schema changes require complex pointer recalculations and low-level procedural navigation."
  },
  {
    id: 34,
    q: "34. What is an object-oriented database management system (OODBMS), and when is it used?",
    category: "DBMS Architecture",
    ans: "• <strong>Definition:</strong> An OODBMS integrates database capabilities with Object-Oriented Programming Language (OOPL) concepts (C++, Java, Smalltalk), storing data directly as objects with state and methods.<br>• <strong>Core Features:</strong> Preserves encapsulation, complex inheritance hierarchies, object identity (OID), and polymorphism without requiring Object-Relational Mapping (ORM) translation.<br>• <strong>When Used:</strong> Ideal for domains with intricate, deeply nested data models such as Computer-Aided Design (CAD/CAM), Geographic Information Systems (GIS), and real-time multimedia simulation systems."
  },
  {
    id: 35,
    q: "35. Discuss the characteristics and use cases of a document-oriented database management system.",
    category: "DBMS Architecture",
    ans: "• <strong>Characteristics:</strong> Stores semi-structured data as self-describing, schema-less documents encoded in JSON, BSON, or XML. Documents contain key-value pairs, nested arrays, and sub-documents.<br>• <strong>Key Advantages:</strong> High developer velocity (object-document impedance match), horizontal sharding, dynamic schema evolution.<br>• <strong>Use Cases:</strong> Content management systems, e-commerce product catalogs with varying product attributes, blogging platforms, and user profile management (e.g. MongoDB, Couchbase)."
  },
  {
    id: 36,
    q: "36. Explain the concept of a columnar database management system (CDBMS).",
    category: "DBMS Architecture",
    ans: "• <strong>Concept:</strong> Instead of storing contiguous row blocks on disk (Row-Oriented / OLTP), a Columnar DBMS stores all values belonging to the same column contiguously in memory and storage.<br>• <strong>Advantages:</strong><br>&nbsp;&nbsp;1. <em>Extreme Compression:</em> Identical data types stored together achieve 5x–10x compression using run-length and dictionary encoding.<br>&nbsp;&nbsp;2. <em>Blazing Aggregations:</em> Analytical queries (<code>SUM</code>, <code>AVG</code>, <code>COUNT</code>) read only relevant columns from disk, ignoring non-queried columns.<br>• <strong>Use Cases:</strong> Big Data OLAP Data Warehousing and business intelligence (e.g. ClickHouse, Amazon Redshift, Google BigQuery, Snowflake)."
  },
  {
    id: 37,
    q: "37. What is a graph database management system (GDBMS), and how does it represent data?",
    category: "DBMS Architecture",
    ans: "• <strong>Definition:</strong> A GDBMS uses graph theory structures featuring <strong>Nodes</strong> (entities), <strong>Edges</strong> (directed relationships), and <strong>Properties</strong> (key-value attributes on nodes and edges).<br>• <strong>Index-Free Adjacency:</strong> Each node directly stores memory pointers to its adjacent connected nodes, enabling $O(1)$ relationship traversals regardless of total database size.<br>• <strong>Use Cases:</strong> Social networking graphs (friend-of-a-friend), fraud detection, recommendation engines, logistics routing, and cybersecurity threat graphs (e.g. Neo4j, Amazon Neptune)."
  },
  {
    id: 38,
    q: "38. Describe the characteristics and advantages of an in-memory database management system.",
    category: "DBMS Architecture",
    ans: "• <strong>Characteristics:</strong> Stores the entire active data set primarily in physical main memory (RAM), eliminating disk I/O bottlenecks during read and write execution.<br>• <strong>Durability:</strong> Ensures durability via non-volatile logging (WAL), periodic snapshotting to SSDs, or battery-backed RAM.<br>• <strong>Advantages:</strong> Sub-millisecond (microsecond) latency, predictable response times, and massive transaction throughput.<br>• <strong>Use Cases:</strong> Real-time financial trading, gaming leaderboards, distributed session caching, and telecommunications routing (e.g. Redis, SAP HANA, Memcached)."
  },
  {
    id: 39,
    q: "39. What is a time-series database management system, and what types of data does it handle?",
    category: "DBMS Architecture",
    ans: "• <strong>Definition:</strong> A specialized database optimized for storing, indexing, and querying sequences of data points paired with precise timestamps.<br>• <strong>Types of Data Handled:</strong> High-frequency continuous metrics, server performance telemetry (CPU, memory, disk utilization), financial market ticks, and IoT industrial sensor readings.<br>• <strong>Key Features:</strong> Append-only fast ingestion, automated data retention policies (downsampling / rolling windows), and time-bucket aggregations (e.g. InfluxDB, TimescaleDB, Prometheus)."
  },
  {
    id: 40,
    q: "40. Discuss the role of distributed database management systems (DDBMS) in modern computing environments.",
    category: "DBMS Architecture",
    ans: "• <strong>Role:</strong> Manages a collection of logically interrelated databases distributed across multiple physical nodes connected via computer networks, presenting them as a single unified database to users.<br>• <strong>Key Capabilities:</strong><br>&nbsp;&nbsp;1. <em>Horizontal Scalability:</em> Partitioning data across nodes (Sharding) to manage petabyte-scale workloads.<br>&nbsp;&nbsp;2. <em>High Availability & Fault Tolerance:</em> Continuous operation despite node or datacenter failures using replication and consensus algorithms (Raft, Paxos).<br>&nbsp;&nbsp;3. <em>Low Latency:</em> Geo-distributed replicas place data physically close to global users (e.g. Google Spanner, CockroachDB, Apache Cassandra)."
  },

  // =========================================================================
  // 3. PRIMARY & FOREIGN KEYS, INTEGRITY CONSTRAINTS (Q41 - Q60)
  // =========================================================================
  {
    id: 41,
    q: "41. What is a primary key, and why is it important in a relational database?",
    category: "Keys & Constraints",
    ans: "• <strong>Definition:</strong> A Primary Key is a minimal column (or set of columns) chosen by the database designer that uniquely identifies each individual record (tuple) in a relational table.<br>• <strong>Importance:</strong><br>&nbsp;&nbsp;1. Guarantees <em>Entity Integrity</em>: prevents duplicate rows from being inserted.<br>&nbsp;&nbsp;2. Establishes the target endpoint for <em>Foreign Keys</em> to build relationships across tables.<br>&nbsp;&nbsp;3. Automatically creates the table's default <em>Clustered B+ Tree Index</em> for ultra-fast $O(\\log n)$ lookups."
  },
  {
    id: 42,
    q: "42. Describe the characteristics of a primary key.",
    category: "Keys & Constraints",
    ans: "• <strong>1. Uniqueness:</strong> Every value in the primary key column must be strictly unique across all rows.<br>• <strong>2. Non-Nullability:</strong> A primary key cannot contain <code>NULL</code> values under any circumstance.<br>• <strong>3. Immutability:</strong> Its value should rarely, if ever, change throughout the lifecycle of the record.<br>• <strong>4. Minimality:</strong> If composite, no sub-attribute can be removed without destroying the uniqueness property.<br>• <strong>5. Singularity:</strong> A relational table can have exactly <strong>ONE</strong> primary key."
  },
  {
    id: 43,
    q: "43. How is a primary key different from other types of keys in a database?",
    category: "Keys & Constraints",
    ans: "• <strong>Candidate Key:</strong> Any minimal superkey capable of identifying records; the chosen candidate key becomes the Primary Key, while remaining ones become Alternate Keys.<br>• <strong>Unique Key:</strong> Enforces uniqueness across rows, but unlike Primary Keys, allows one (or multiple depending on SQL dialect) <code>NULL</code> value. Tables can have multiple Unique constraints.<br>• <strong>Foreign Key:</strong> References a Primary Key in another table to maintain referential integrity; can contain duplicate and NULL values.<br>• <strong>Superkey:</strong> Any superset of attributes containing a candidate key plus extraneous columns."
  },
  {
    id: 44,
    q: "44. Can a primary key contain null values? Why or why not?",
    category: "Keys & Constraints",
    ans: "• <strong>Answer:</strong> <strong>NO</strong>, a primary key can NEVER contain a <code>NULL</code> value.<br>• <strong>Reasoning:</strong> By Codd's <em>Entity Integrity Rule</em>, each row in a relation represents a distinct real-world entity. In SQL semantics, <code>NULL</code> represents 'unknown' or 'missing' information. If a primary key contained <code>NULL</code>, the DBMS could not determine the true identity of the record or distinguish it from another row with <code>NULL</code>, breaking referential links."
  },
  {
    id: 45,
    q: "45. Explain the concept of surrogate keys and their role in primary key design.",
    category: "Keys & Constraints",
    ans: "• <strong>Surrogate Key:</strong> An artificial, system-generated unique identifier with no intrinsic business meaning (e.g. an auto-incrementing integer <code>id INT AUTO_INCREMENT</code> or <code>UUID / GUID</code>).<br>• <strong>Role in Design:</strong> Shields database relationships from volatile business requirements (e.g., employee changing their email or passport number). It provides compact integer foreign keys that accelerate indexing and JOIN query performance."
  },
  {
    id: 46,
    q: "46. What are the advantages of using a natural key as opposed to a surrogate key?",
    category: "Keys & Constraints",
    ans: "• <strong>Natural Key:</strong> An existing real-world attribute that is inherently unique (e.g. <code>SSN</code>, <code>ISBN</code>, <code>PAN Number</code>, <code>VIN</code>).<br>• <strong>Advantages:</strong><br>&nbsp;&nbsp;1. <em>Avoids Joins:</em> Lookups can be executed directly using the business value without joining the parent table to resolve an artificial ID.<br>&nbsp;&nbsp;2. <em>Eliminates Redundant Columns:</em> Saves disk space by not creating an additional surrogate ID column.<br>&nbsp;&nbsp;3. <em>Human Readability:</em> Direct inspection of foreign key columns in child tables reveals meaningful context."
  },
  {
    id: 47,
    q: "47. Discuss the process of selecting a suitable primary key for a table.",
    category: "Keys & Constraints",
    ans: "• <strong>Step 1: Identify Candidate Keys:</strong> Find all attribute sets that uniquely identify rows.<br>• <strong>Step 2: Evaluate Stability:</strong> Discard keys whose values are subject to change or updates.<br>• <strong>Step 3: Check Nullability:</strong> Eliminate attributes that could ever be optional or null.<br>• <strong>Step 4: Assess Compactness:</strong> Prefer simple single-column numeric data types (<code>INT</code>, <code>BIGINT</code>) over wide, composite string columns.<br>• <strong>Step 5: Adopt Surrogate Key if Needed:</strong> If candidate keys are wide, volatile, or composite, introduce a surrogate numeric key."
  },
  {
    id: 48,
    q: "48. How does a primary key enforce entity integrity in a relational database?",
    category: "Keys & Constraints",
    ans: "• <strong>Entity Integrity Rule:</strong> States that no primary key value can be null, and all primary key values must be unique.<br>• <strong>DBMS Enforcement:</strong> Whenever an <code>INSERT</code> or <code>UPDATE</code> statement is issued, the DBMS engine traverses the table's underlying unique B+ tree index. If the incoming value already exists or is <code>NULL</code>, the engine aborts the transaction immediately, throwing a Primary Key violation error."
  },
  {
    id: 49,
    q: "49. What happens if you try to insert a duplicate value into a primary key column?",
    category: "Keys & Constraints",
    ans: "• <strong>Outcome:</strong> The DBMS rejects the operation and throws a runtime constraint violation error (e.g. MySQL: <code>ERROR 1062 (23000): Duplicate entry '101' for key 'PRIMARY'</code>).<br>• <strong>Transaction Impact:</strong> The current SQL statement fails. In an explicit transaction block, the transaction will be rolled back unless the application specifically handles the error or utilizes upsert semantics like <code>ON DUPLICATE KEY UPDATE</code> or <code>ON CONFLICT DO NOTHING</code>."
  },
  {
    id: 50,
    q: "50. Can a table have multiple primary keys? Explain.",
    category: "Keys & Constraints",
    ans: "• <strong>Answer:</strong> <strong>NO</strong>, a relational table can have only <strong>ONE</strong> primary key.<br>• <strong>Clarification on Composite Keys:</strong> A single primary key can consist of <em>multiple columns</em>, which is termed a <strong>Composite Primary Key</strong> (e.g., <code>PRIMARY KEY (Order_ID, Product_ID)</code>). However, this remains a single primary key constraint defined across a combination of attributes."
  },
  {
    id: 51,
    q: "51. What is a foreign key, and how is it used in a relational database?",
    category: "Keys & Constraints",
    ans: "• <strong>Definition:</strong> A Foreign Key is a column (or set of columns) in a referencing (child) table that points to the Primary Key (or Unique Key) of a referenced (parent) table.<br>• <strong>Usage:</strong><br>&nbsp;&nbsp;1. Establishes and enforces logical relationships between separate relational tables.<br>&nbsp;&nbsp;2. Guarantees <em>Referential Integrity</em> by ensuring records cannot reference non-existent parent records.<br>&nbsp;&nbsp;3. Enables multi-table SQL <code>JOIN</code> operations."
  },
  {
    id: 52,
    q: "52. Describe the relationship between a foreign key and a primary key in a database.",
    category: "Keys & Constraints",
    ans: "• <strong>Parent-Child Association:</strong> The table containing the Primary Key is the <em>Parent (Referenced) Table</em>; the table containing the Foreign Key is the <em>Child (Referencing) Table</em>.<br>• <strong>Domain Compatibility:</strong> The data type, length, and collation of the foreign key column must strictly match the referenced primary key column.<br>• <strong>Dependency:</strong> Child records depend on the existence of their parent record."
  },
  {
    id: 53,
    q: "53. How does a foreign key enforce referential integrity between related tables?",
    category: "Keys & Constraints",
    ans: "• <strong>Referential Integrity Rule:</strong> States that any foreign key value in a child table must match an existing primary key value in the parent table or be <code>NULL</code>.<br>• <strong>Enforcement Mechanism:</strong><br>&nbsp;&nbsp;• <em>On Insert/Update in Child:</em> Rejects foreign key values that do not exist in the parent table.<br>&nbsp;&nbsp;• <em>On Delete/Update in Parent:</em> Prevents parent rows from being deleted or modified if child rows still point to them (or applies cascading actions)."
  },
  {
    id: 54,
    q: "54. Can a foreign key contain null values? When is this allowed?",
    category: "Keys & Constraints",
    ans: "• <strong>Answer:</strong> <strong>YES</strong>, a foreign key can contain <code>NULL</code> values unless explicitly defined with a <code>NOT NULL</code> constraint.<br>• <strong>When Allowed:</strong> When the relationship is optional (Partial Participation). For example, an <code>Employee</code> table with <code>Manager_ID</code> as a foreign key referencing <code>Employee.Emp_ID</code>; the CEO has no manager, so their <code>Manager_ID</code> is validly <code>NULL</code>."
  },
  {
    id: 55,
    q: "55. Explain the difference between a foreign key constraint and a foreign key index.",
    category: "Keys & Constraints",
    ans: "• <strong>Foreign Key Constraint:</strong> A logical integrity rule enforced by the DBMS engine that validates whether child values exist in the parent table.<br>• <strong>Foreign Key Index:</strong> A physical data structure (B+ tree) created on the foreign key column.<br>• <strong>Difference:</strong> In many databases (e.g. PostgreSQL, Oracle), declaring a foreign key constraint does <em>not</em> automatically build an index on that column. Creating an index manually is vital to prevent full-table locks on child tables during parent deletes and to speed up JOIN operations."
  },
  {
    id: 56,
    q: "56. Discuss the process of creating a foreign key constraint in a table.",
    category: "Keys & Constraints",
    ans: "• <strong>During Table Creation:</strong><br><code>CREATE TABLE Orders (<br>&nbsp;&nbsp;Order_ID INT PRIMARY KEY,<br>&nbsp;&nbsp;Customer_ID INT,<br>&nbsp;&nbsp;CONSTRAINT fk_customer FOREIGN KEY (Customer_ID) REFERENCES Customers(Customer_ID) ON DELETE CASCADE<br>);</code><br>• <strong>Altering Existing Table:</strong><br><code>ALTER TABLE Orders ADD CONSTRAINT fk_customer FOREIGN KEY (Customer_ID) REFERENCES Customers(Customer_ID);</code>"
  },
  {
    id: 57,
    q: "57. What happens if you try to insert a value into a foreign key column that does not exist in the referenced table?",
    category: "Keys & Constraints",
    ans: "• <strong>Outcome:</strong> The DBMS rejects the insert statement and raises a referential integrity violation error (e.g. <code>ERROR 1452 (23000): Cannot add or update a child row: a foreign key constraint fails</code>).<br>• <strong>Safety:</strong> This prevents the creation of <em>Orphan Records</em> in child tables that would otherwise point to non-existent parent data."
  },
  {
    id: 58,
    q: "58. Can a table have multiple foreign keys? Are there any limitations to this?",
    category: "Keys & Constraints",
    ans: "• <strong>Answer:</strong> <strong>YES</strong>, a single table can contain multiple foreign keys referencing different parent tables (or even self-referencing the same table).<br>• <strong>Example:</strong> An <code>Order_Items</code> table may feature foreign keys pointing to <code>Orders(Order_ID)</code>, <code>Products(Product_ID)</code>, and <code>Warehouses(Warehouse_ID)</code>.<br>• <strong>Limitations:</strong> Multiple foreign keys increase overhead during DML operations (inserts/updates/deletes must validate lookups across multiple parent tables)."
  },
  {
    id: 59,
    q: "59. How do you handle cascading updates and deletes with foreign key constraints?",
    category: "Keys & Constraints",
    ans: "• <strong>Referential Actions:</strong><br>&nbsp;&nbsp;1. <code>ON DELETE / UPDATE CASCADE:</code> Automatically updates or deletes all matching rows in the child table when the parent row is modified or removed.<br>&nbsp;&nbsp;2. <code>ON DELETE / UPDATE RESTRICT (NO ACTION):</code> Rejects the parent deletion/update if related child records exist (default behavior).<br>&nbsp;&nbsp;3. <code>ON DELETE / UPDATE SET NULL:</code> Sets the child table foreign key values to <code>NULL</code> when the parent record is deleted.<br>&nbsp;&nbsp;4. <code>ON DELETE / UPDATE SET DEFAULT:</code> Sets child foreign key columns to their specified default value."
  },
  {
    id: 60,
    q: "60. What are the benefits of using foreign keys in database design?",
    category: "Keys & Constraints",
    ans: "• <strong>1. Referential Integrity:</strong> Eliminates orphan records and guarantees relational consistency at the database engine level.<br>• <strong>2. Automated Cascade Logic:</strong> Simplifies application code by handling cascading updates and cleanups automatically.<br>• <strong>3. Query Optimizer Guidance:</strong> Provides query execution engines with schema metadata regarding join cardinality, helping select optimal join algorithms.<br>• <strong>4. Clear Documentation:</strong> Explicitly reveals domain relationships to developers reading the schema."
  },

  // =========================================================================
  // 4. DATABASE NORMALIZATION (1NF - 5NF, BCNF) (Q61 - Q75)
  // =========================================================================
  {
    id: 61,
    q: "61. What is normalization and why is it important in database design?",
    category: "Database Normalization",
    ans: "• <strong>Definition:</strong> Normalization is the systematic process of organizing the columns and tables of a relational database to minimize data redundancy and dependency.<br>• <strong>Why Important:</strong> Unnormalized tables suffer from <em>Anomalies</em>:<br>&nbsp;&nbsp;1. <em>Insertion Anomaly:</em> Inability to record certain facts without adding unrelated attributes.<br>&nbsp;&nbsp;2. <em>Deletion Anomaly:</em> Unintended loss of crucial information when deleting unrelated records.<br>&nbsp;&nbsp;3. <em>Update Anomaly:</em> Modifying a duplicate attribute in one row creates inconsistent, contradictory values across other rows."
  },
  {
    id: 62,
    q: "62. Explain the purpose of normal forms in the context of database normalization.",
    category: "Database Normalization",
    ans: "• <strong>Purpose:</strong> Normal forms (1NF, 2NF, 3NF, BCNF, 4NF, 5NF) provide a progressive series of formal criteria and mathematical benchmarks.<br>• <strong>Goal:</strong> Each subsequent normal form targets and eliminates a specific category of undesirable functional dependency or data redundancy, ensuring relations maintain lossless-join and dependency-preserving properties."
  },
  {
    id: 63,
    q: "63. Can you describe the process of normalization and its stages?",
    category: "Database Normalization",
    ans: "• <strong>Unnormalized Form (UNF):</strong> Raw data containing repeating groups and multi-valued fields.<br>• <strong>Stage 1 (UNF &rarr; 1NF):</strong> Flatten repeating groups; ensure all column values are atomic.<br>• <strong>Stage 2 (1NF &rarr; 2NF):</strong> Identify candidate keys; eliminate partial dependencies by decomposing tables so non-prime attributes depend on the whole key.<br>• <strong>Stage 3 (2NF &rarr; 3NF):</strong> Eliminate transitive dependencies (non-prime attributes determining other non-prime attributes).<br>• <strong>Stage 4 (3NF &rarr; BCNF):</strong> Ensure every determinant in every functional dependency is a superkey.<br>• <strong>Stage 5 (BCNF &rarr; 4NF & 5NF):</strong> Eliminate multi-valued dependencies (4NF) and join dependencies (5NF)."
  },
  {
    id: 64,
    q: "64. What are the different normal forms, and what are their characteristics?",
    category: "Database Normalization",
    ans: "• <strong>1NF:</strong> Atomic column values; no arrays, lists, or repeating groups.<br>• <strong>2NF:</strong> 1NF + Zero Partial Functional Dependencies on any composite candidate key.<br>• <strong>3NF:</strong> 2NF + Zero Transitive Dependencies (For $X \\to Y$, $X$ is Super Key or $Y$ is prime).<br>• <strong>BCNF:</strong> Stricter 3NF. For EVERY non-trivial FD $X \\to Y$, $X$ MUST be a Super Key.<br>• <strong>4NF:</strong> BCNF + Zero non-trivial Multi-Valued Dependencies ($X \\twoheadrightarrow Y$).<br>• <strong>5NF (PJNF):</strong> 4NF + Zero non-trivial Join Dependencies (cannot be decomposed without information loss)."
  },
  {
    id: 65,
    q: "65. How does normalization help in reducing redundancy and improving data integrity?",
    category: "Database Normalization",
    ans: "• <strong>Elimination of Duplication:</strong> By decomposing one wide table into focused, related tables, shared data (e.g. <code>Department_Name</code>) is stored in exactly <em>one</em> place.<br>• <strong>Consistency Enforcement:</strong> Modifying a department name requires updating exactly one row in the parent table rather than updating 10,000 employee records, completely preventing update anomalies.<br>• <strong>Disk & Memory Efficiency:</strong> Less disk space consumed and higher database buffer pool cache hit ratios."
  },
  {
    id: 66,
    q: "66. Discuss the advantages and disadvantages of normalization.",
    category: "Database Normalization",
    ans: "• <strong>Advantages:</strong> Minimizes data redundancy, guarantees data integrity, prevents update/insert/delete anomalies, reduces storage overhead, and yields a clean, maintainable schema.<br>• <strong>Disadvantages:</strong> Highly normalized schemas decompose data across many tables, requiring multi-table SQL <code>JOIN</code> operations for reads, which increases CPU utilization and query execution times for analytical (OLAP) workloads."
  },
  {
    id: 67,
    q: "67. Explain the concept of functional dependencies and how they relate to normalization.",
    category: "Database Normalization",
    ans: "• <strong>Definition:</strong> A Functional Dependency $X \\to Y$ between attribute sets $X$ and $Y$ in relation $R$ states that if two tuples agree on values for $X$, they must agree on values for $Y$. $X$ is the <em>Determinant</em>; $Y$ is the <em>Dependent</em>.<br>• <strong>Relation to Normalization:</strong> Functional dependencies form the mathematical bedrock of normalization. The presence of partial or transitive FDs dictates when and how a relation must be decomposed to reach 2NF, 3NF, or BCNF."
  },
  {
    id: 68,
    q: "68. What is the difference between partial dependency and transitive dependency? How do they impact normalization?",
    category: "Database Normalization",
    ans: "• <strong>Partial Dependency:</strong> Occurs when a non-prime attribute depends on only a <em>subset/part</em> of a composite candidate key rather than the entire key ($X \\to Y$ where $X \\subset PK$). Violates <strong>2NF</strong>.<br>• <strong>Transitive Dependency:</strong> Occurs when a non-prime attribute depends on another non-prime attribute rather than directly on the primary key ($PK \\to X$ and $X \\to Y$ where $X, Y$ are non-prime). Violates <strong>3NF</strong>."
  },
  {
    id: 69,
    q: "69. Can you provide examples of violations of different normal forms and how they can be resolved through normalization?",
    category: "Database Normalization",
    ans: "• <strong>1NF Violation:</strong> <code>Student(ID, Name, Courses: 'Math, Physics')</code>.<br>&nbsp;&nbsp;<em>Fix:</em> Split into atomic rows: <code>(101, 'Alice', 'Math')</code> and <code>(101, 'Alice', 'Physics')</code>.<br>• <strong>2NF Violation:</strong> <code>OrderItems(OrderID, ProductID, OrderDate, Price)</code> where PK is <code>(OrderID, ProductID)</code>, but <code>OrderID &rarr; OrderDate</code> is a partial dependency.<br>&nbsp;&nbsp;<em>Fix:</em> Decompose into <code>Orders(OrderID, OrderDate)</code> and <code>OrderItems(OrderID, ProductID, Price)</code>.<br>• <strong>3NF Violation:</strong> <code>Employee(EmpID, DeptID, DeptName)</code> where <code>DeptID &rarr; DeptName</code> is transitive.<br>&nbsp;&nbsp;<em>Fix:</em> Decompose into <code>Employee(EmpID, DeptID)</code> and <code>Department(DeptID, DeptName)</code>."
  },
  {
    id: 70,
    q: "70. How do you determine which normal form a database table is currently in?",
    category: "Database Normalization",
    ans: "• <strong>Step 1:</strong> Confirm all attributes are atomic &rarr; table is in <strong>1NF</strong>.<br>• <strong>Step 2:</strong> Compute all Candidate Keys. Check if any non-prime attribute depends on a proper subset of any candidate key. If NO &rarr; table is in <strong>2NF</strong>.<br>• <strong>Step 3:</strong> Check if for all non-trivial FDs $X \\to Y$, $X$ is a superkey OR $Y$ is a prime attribute. If YES &rarr; table is in <strong>3NF</strong>.<br>• <strong>Step 4:</strong> Check if for EVERY non-trivial FD $X \\to Y$, $X$ is strictly a superkey. If YES &rarr; table is in <strong>BCNF</strong>."
  },
  {
    id: 71,
    q: "71. In what scenarios would denormalization be appropriate, and what are the trade-offs compared to normalization?",
    category: "Database Normalization",
    ans: "• <strong>Appropriate Scenarios:</strong> Read-heavy analytical workloads (Data Warehouses, OLAP, Reporting), high-traffic public APIs, and caching layers where executing 5-table joins causes unacceptable read latency.<br>• <strong>Trade-offs:</strong><br>&nbsp;&nbsp;• <em>Pros:</em> Eliminates expensive JOINs, speeds up complex SELECT queries.<br>&nbsp;&nbsp;• <em>Cons:</em> Reintroduces data redundancy, increases storage consumption, and shifts burden to application code to prevent update anomalies."
  },
  {
    id: 72,
    q: "72. Discuss the role of candidate keys and primary keys in normalization.",
    category: "Database Normalization",
    ans: "• <strong>Identification of Prime Attributes:</strong> An attribute that is a member of any candidate key is termed a <em>Prime Attribute</em>; all others are <em>Non-Prime Attributes</em>.<br>• <strong>Evaluation Benchmark:</strong> 2NF and 3NF definitions rely on distinguishing prime vs non-prime attributes. In BCNF, the primary key role is formalized to require that every functional determinant must be a Super Key."
  },
  {
    id: 73,
    q: "73. How does normalization affect query performance and database maintenance?",
    category: "Database Normalization",
    ans: "• <strong>Write Performance & Maintenance (Improved):</strong> <code>INSERT</code>, <code>UPDATE</code>, and <code>DELETE</code> statements execute rapidly because tables are compact and data is recorded in exactly one place.<br>• <strong>Read Performance (Trade-off):</strong> Simple point queries remain fast, but queries requiring joined data from 4+ normalized tables consume additional CPU and memory. Proper indexing mitigates join overhead."
  },
  {
    id: 74,
    q: "74. Explain the process of database normalization in the context of a real-world example or case study.",
    category: "Database Normalization",
    ans: "• <strong>Case Study: University Enrollment</strong><br>&nbsp;&nbsp;• <em>Initial Table:</em> <code>Registration(StudentID, StudentName, CourseID, CourseName, Instructor, Room)</code> with PK <code>(StudentID, CourseID)</code>.<br>&nbsp;&nbsp;• <em>2NF Step:</em> <code>StudentID &rarr; StudentName</code> and <code>CourseID &rarr; CourseName</code> are partial dependencies. Decompose into: <code>Student(StudentID, StudentName)</code>, <code>Course(CourseID, CourseName, Instructor, Room)</code>, and <code>Enrollment(StudentID, CourseID)</code>.<br>&nbsp;&nbsp;• <em>3NF Step:</em> In Course, <code>Instructor &rarr; Room</code> is transitive. Decompose into: <code>Course(CourseID, CourseName, Instructor)</code> and <code>InstructorAllocation(Instructor, Room)</code>."
  },
  {
    id: 75,
    q: "75. How does normalization contribute to better scalability and flexibility in database systems?",
    category: "Database Normalization",
    ans: "• <strong>Modularity:</strong> Normalized tables represent distinct domain entities. New attributes or relationships can be added without altering existing table schemas or breaking client queries.<br>• <strong>Storage Optimization:</strong> Smaller table footprints mean more index and data pages fit inside memory buffer pools.<br>• <strong>Concurrency:</strong> Fine-grained table locking reduces contention compared to monolithic unnormalized tables."
  },

  // =========================================================================
  // 5. SQL COMMANDS, SYNTAX, JOINS & AGGREGATIONS (Q76 - Q90)
  // =========================================================================
  {
    id: 76,
    q: "76. What is SQL and what does it stand for?",
    category: "SQL Queries",
    ans: "• <strong>Full Form:</strong> SQL stands for <strong>Structured Query Language</strong>.<br>• <strong>Definition:</strong> SQL is the ANSI/ISO standardized declarative domain-specific language used for managing, querying, defining, and controlling relational database management systems (RDBMS).<br>• <strong>Declarative Nature:</strong> Users specify <em>what</em> data they wish to retrieve or manipulate, leaving the DBMS query optimizer to determine <em>how</em> to execute it."
  },
  {
    id: 77,
    q: "77. Name different categories of SQL commands.",
    category: "SQL Queries",
    ans: "• <strong>1. DDL (Data Definition Language):</strong> <code>CREATE</code>, <code>ALTER</code>, <code>DROP</code>, <code>TRUNCATE</code>, <code>RENAME</code>.<br>• <strong>2. DML (Data Manipulation Language):</strong> <code>INSERT</code>, <code>UPDATE</code>, <code>DELETE</code>, <code>MERGE</code>, <code>UPSERT</code>.<br>• <strong>3. DQL (Data Query Language):</strong> <code>SELECT</code>.<br>• <strong>4. DCL (Data Control Language):</strong> <code>GRANT</code>, <code>REVOKE</code>.<br>• <strong>5. TCL (Transaction Control Language):</strong> <code>COMMIT</code>, <code>ROLLBACK</code>, <code>SAVEPOINT</code>."
  },
  {
    id: 78,
    q: "78. What is a database table?",
    category: "SQL Queries",
    ans: "• <strong>Definition:</strong> A database table (relation) is a structured collection of related data stored in a grid of horizontal <strong>Rows (Records / Tuples)</strong> and vertical <strong>Columns (Fields / Attributes)</strong>.<br>• <strong>Schema:</strong> The column definitions and data types establish the table schema; the data populated across rows constitutes the table state or instance."
  },
  {
    id: 79,
    q: "79. What is a DBMS and how does it differ from an RDBMS?",
    category: "SQL Queries",
    ans: "• <strong>DBMS:</strong> Stores data as flat files or hierarchical trees. Does not enforce relational keys or referential integrity, supports single users or limited concurrency, and handles simple data relationships (e.g. MS Access, XML files).<br>• <strong>RDBMS:</strong> Stores data strictly in structured relational tables with primary and foreign keys. Strictly enforces referential integrity, ACID compliance, and concurrent multi-user access via SQL (e.g. Oracle, PostgreSQL, MySQL)."
  },
  {
    id: 80,
    q: "80. What are the different types of keys in SQL?",
    category: "SQL Queries",
    ans: "• <strong>1. Primary Key:</strong> Unique, strictly NOT NULL minimal identifier for rows.<br>• <strong>2. Candidate Key:</strong> Any attribute set capable of uniquely identifying rows.<br>• <strong>3. Super Key:</strong> Any set of attributes containing a candidate key.<br>• <strong>4. Alternate Key:</strong> Candidate keys not chosen as the primary key.<br>• <strong>5. Foreign Key:</strong> Attribute referencing a primary key in another table.<br>• <strong>6. Composite Key:</strong> A primary/candidate key composed of two or more columns.<br>• <strong>7. Unique Key:</strong> Enforces unique values while permitting one NULL value."
  },
  {
    id: 81,
    q: "81. Explain the difference between DELETE and TRUNCATE commands.",
    category: "SQL Queries",
    ans: "• <strong>DELETE (DML):</strong> Deletes specific rows matching a <code>WHERE</code> clause. Logs each row deletion individually in the transaction log; can be rolled back; triggers fire; slower for large tables.<br>• <strong>TRUNCATE (DDL):</strong> Instantly removes all rows by deallocating storage pages. Cannot have a WHERE clause; minimal transaction logging; cannot be rolled back in some DBMSs; resets auto-increment counters; triggers do not fire; significantly faster."
  },
  {
    id: 82,
    q: "82. What is a NULL value in SQL?",
    category: "SQL Queries",
    ans: "• <strong>Concept:</strong> A <code>NULL</code> value in SQL represents missing, unknown, unassigned, or inapplicable data. It is NOT equivalent to zero (<code>0</code>) or an empty string (<code>''</code>).<br>• <strong>Three-Valued Logic:</strong> In SQL, comparisons involving NULL evaluate to <code>UNKNOWN</code> rather than TRUE or FALSE. To test for nulls, use <code>IS NULL</code> or <code>IS NOT NULL</code> instead of <code>= NULL</code>."
  },
  {
    id: 83,
    q: "83. How do you comment in SQL?",
    category: "SQL Queries",
    ans: "• <strong>Single-Line Comment:</strong> Prefix with two consecutive hyphens: <code>-- This is a single line comment</code>.<br>• <strong>Multi-Line Comment:</strong> Enclose text between <code>/*</code> and <code>*/</code>: <code>/* This is a multi-line comment block */</code>."
  },
  {
    id: 84,
    q: "84. What is a subquery and how is it different from a regular query?",
    category: "SQL Queries",
    ans: "• <strong>Subquery (Nested / Inner Query):</strong> A SQL query nested inside another outer SQL statement (<code>SELECT</code>, <code>INSERT</code>, <code>UPDATE</code>, <code>DELETE</code>), enclosed in parentheses.<br>• <strong>Types:</strong><br>&nbsp;&nbsp;1. <em>Non-Correlated Subquery:</em> Executes independently of the outer query, returning data used by the outer query.<br>&nbsp;&nbsp;2. <em>Correlated Subquery:</em> References columns from the outer query, executing repeatedly once for every row processed by the outer query."
  },
  {
    id: 85,
    q: "85. Explain the difference between UNION and UNION ALL.",
    category: "SQL Queries",
    ans: "• <strong>UNION:</strong> Combines the result sets of two or more <code>SELECT</code> queries and executes an internal sort/hash operation to eliminate duplicate rows.<br>• <strong>UNION ALL:</strong> Combines result sets preserving <em>all</em> duplicate rows without sorting, making it significantly faster than UNION.<br>• <strong>Requirement:</strong> Both queries must have the same number of columns with compatible data types in corresponding order."
  },
  {
    id: 86,
    q: "86. How do you use the DISTINCT keyword in SQL?",
    category: "SQL Queries",
    ans: "• <strong>Usage:</strong> Placed immediately after <code>SELECT</code> to remove duplicate rows from the query output: <code>SELECT DISTINCT City, State FROM Customers;</code>.<br>• <strong>Scope:</strong> Operates across the combination of all selected columns in the projection list."
  },
  {
    id: 87,
    q: "87. What are the basic DML commands in SQL?",
    category: "SQL Queries",
    ans: "• <strong>1. INSERT:</strong> Adds new rows into a table.<br>• <strong>2. UPDATE:</strong> Modifies values of existing rows.<br>• <strong>3. DELETE:</strong> Removes rows based on conditions.<br>• <strong>4. MERGE:</strong> Performs conditional insert, update, or delete operations (Upsert)."
  },
  {
    id: 88,
    q: "88. How do you insert data into a table in SQL?",
    category: "SQL Queries",
    ans: "• <strong>Syntax with Specific Columns:</strong><br><code>INSERT INTO Employees (Emp_ID, Name, Salary)<br>VALUES (101, 'Alice Smith', 75000);</code><br>• <strong>Inserting Multiple Rows:</strong><br><code>INSERT INTO Employees (Emp_ID, Name, Salary)<br>VALUES (102, 'Bob', 68000), (103, 'Charlie', 82000);</code>"
  },
  {
    id: 89,
    q: "89. Explain the difference between the WHERE and HAVING clauses.",
    category: "SQL Queries",
    ans: "• <strong>WHERE Clause:</strong> Filters individual rows <em>before</em> any grouping or aggregation occurs. Cannot be used with aggregate functions (e.g. <code>WHERE Salary > 50000</code>).<br>• <strong>HAVING Clause:</strong> Filters summary groups <em>after</em> the <code>GROUP BY</code> operation is executed. Operates on aggregate functions (e.g. <code>HAVING AVG(Salary) > 75000</code>)."
  },
  {
    id: 90,
    q: "90. How do you update existing data in a table in SQL?",
    category: "SQL Queries",
    ans: "• <strong>Syntax:</strong><br><code>UPDATE Employees<br>SET Salary = Salary * 1.10, Dept_ID = 5<br>WHERE Performance_Rating = 'A';</code><br>• <strong>Warning:</strong> Omitting the <code>WHERE</code> clause updates every single record across the entire table."
  },

  // =========================================================================
  // 5. SQL COMMANDS, SYNTAX, JOINS & AGGREGATIONS (Cont. Q91 - Q125)
  // =========================================================================
  {
    id: 91,
    q: "91. What is the difference between the INSERT and INSERT INTO commands?",
    category: "SQL Queries",
    ans: "• <strong>Standard SQL:</strong> In standard ANSI SQL, both phrases achieve the identical purpose. <code>INSERT INTO</code> is the formal ANSI standard keyword syntax.<br>• <strong>Dialect Variations:</strong> Certain database engines (like MySQL and Oracle) accept <code>INSERT</code> with or without the optional keyword <code>INTO</code> interchangeably (e.g., <code>INSERT tablename ...</code> vs <code>INSERT INTO tablename ...</code>)."
  },
  {
    id: 92,
    q: "92. How do you delete records from a table in SQL?",
    category: "SQL Queries",
    ans: "• <strong>Syntax:</strong><br><code>DELETE FROM Employees<br>WHERE Status = 'Terminated' AND Termination_Date < '2022-01-01';</code><br>• <strong>Caution:</strong> Without a <code>WHERE</code> clause, <code>DELETE FROM Employees;</code> removes all rows from the table while retaining the table schema and column structures."
  },
  {
    id: 93,
    q: "93. Explain the difference between TRUNCATE and DELETE commands.",
    category: "SQL Queries",
    ans: "• <strong>DELETE:</strong> DML statement; deletes rows individually; logs each deleted row in transaction log; slower; allows fine-grained filtering via <code>WHERE</code>; triggers fire; can be rolled back.<br>• <strong>TRUNCATE:</strong> DDL statement; removes all rows by deallocating complete data pages; minimal logging; much faster; cannot use <code>WHERE</code>; triggers do not fire; resets identity/auto-increment sequence."
  },
  {
    id: 94,
    q: "94. What are the basic DDL commands in SQL?",
    category: "SQL Queries",
    ans: "• <strong>1. CREATE:</strong> Creates database objects (tables, views, indexes, schemas, procedures).<br>• <strong>2. ALTER:</strong> Modifies database object definitions (adds/modifies/drops columns and constraints).<br>• <strong>3. DROP:</strong> Permanently deletes database objects and their data.<br>• <strong>4. TRUNCATE:</strong> Empties all records from a table while preserving schema structure.<br>• <strong>5. RENAME:</strong> Renames existing database objects."
  },
  {
    id: 95,
    q: "95. How do you create a table in SQL?",
    category: "SQL Queries",
    ans: "• <strong>Standard DDL Syntax:</strong><br><code>CREATE TABLE Students (<br>&nbsp;&nbsp;StudentID INT PRIMARY KEY,<br>&nbsp;&nbsp;FirstName VARCHAR(50) NOT NULL,<br>&nbsp;&nbsp;LastName VARCHAR(50) NOT NULL,<br>&nbsp;&nbsp;Email VARCHAR(100) UNIQUE,<br>&nbsp;&nbsp;GPA DECIMAL(3,2) CHECK (GPA >= 0.0 AND GPA <= 4.0),<br>&nbsp;&nbsp;EnrollmentDate DATE DEFAULT CURRENT_DATE<br>);</code>"
  },
  {
    id: 96,
    q: "96. Explain the difference between CHAR and VARCHAR data types.",
    category: "SQL Queries",
    ans: "• <strong>CHAR(n):</strong> Fixed-length character string. If the stored string is shorter than $n$, the DBMS right-pads it with spaces up to $n$ characters. Consumes static disk space; faster processing for fixed lengths (e.g. State Codes, ISO Currency Codes).<br>• <strong>VARCHAR(n):</strong> Variable-length character string. Stores only the actual characters entered plus a 1- or 2-byte prefix recording the length. Consumes variable disk space, avoiding wasted padding for names and descriptions."
  },
  {
    id: 97,
    q: "97. How do you add a new column to an existing table in SQL?",
    category: "SQL Queries",
    ans: "• <strong>Syntax using ALTER TABLE:</strong><br><code>ALTER TABLE Employees<br>ADD DateOfBirth DATE NULL;</code><br>• <strong>Adding with Constraints:</strong><br><code>ALTER TABLE Employees<br>ADD DepartmentCode VARCHAR(10) DEFAULT 'GEN' NOT NULL;</code>"
  },
  {
    id: 98,
    q: "98. What is a constraint in SQL and why is it used?",
    category: "SQL Queries",
    ans: "• <strong>Definition:</strong> A rule or restriction enforced on table columns to restrict the types of data that can be inserted, updated, or deleted.<br>• <strong>Why Used:</strong> Guarantees data accuracy, consistency, and reliability (Data Integrity).<br>• <strong>Core Constraints:</strong> <code>NOT NULL</code>, <code>UNIQUE</code>, <code>PRIMARY KEY</code>, <code>FOREIGN KEY</code>, <code>CHECK</code>, and <code>DEFAULT</code>."
  },
  {
    id: 99,
    q: "99. How do you drop a table in SQL?",
    category: "SQL Queries",
    ans: "• <strong>Syntax:</strong><br><code>DROP TABLE Students;</code><br>• <strong>Conditional Drop:</strong><br><code>DROP TABLE IF EXISTS Students;</code><br>• <strong>Impact:</strong> Permanently deletes the table schema, columns, constraints, indexes, triggers, and all stored data rows from the database catalog."
  },
  {
    id: 100,
    q: "100. Explain the difference between the DROP and TRUNCATE commands.",
    category: "SQL Queries",
    ans: "• <strong>TRUNCATE:</strong> Deletes all data <em>rows</em> from the table, but leaves the empty table schema, column definitions, and constraints intact for future insertions.<br>• <strong>DROP:</strong> Deletes the data <em>and</em> completely obliterates the entire table schema and catalog entry. A dropped table ceases to exist in the database."
  },
  {
    id: 101,
    q: "101. How do you define primary and foreign keys in SQL?",
    category: "SQL Queries",
    ans: "• <strong>Inline Definition:</strong><br><code>CREATE TABLE Orders (<br>&nbsp;&nbsp;OrderID INT PRIMARY KEY,<br>&nbsp;&nbsp;CustomerID INT REFERENCES Customers(CustomerID)<br>);</code><br>• <strong>Table-Level Named Constraints:</strong><br><code>CREATE TABLE Orders (<br>&nbsp;&nbsp;OrderID INT,<br>&nbsp;&nbsp;CustomerID INT,<br>&nbsp;&nbsp;CONSTRAINT pk_orders PRIMARY KEY (OrderID),<br>&nbsp;&nbsp;CONSTRAINT fk_cust FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID) ON DELETE CASCADE<br>);</code>"
  },
  {
    id: 102,
    q: "102. What is a SQL query?",
    category: "SQL Queries",
    ans: "• <strong>Definition:</strong> A declarative command or inquiry statement issued to a database system to request, filter, aggregate, or manipulate data.<br>• <strong>Execution Flow:</strong> SQL query &rarr; Parser & Syntax Validator &rarr; Query Optimizer & Execution Plan Generator &rarr; Storage Engine Access &rarr; Result Set returned to client."
  },
  {
    id: 103,
    q: "103. How do you write a SELECT statement in SQL?",
    category: "SQL Queries",
    ans: "• <strong>Complete Six-Clause Syntax:</strong><br><code>SELECT DeptID, AVG(Salary) AS AvgSalary<br>FROM Employees<br>WHERE Status = 'Active'<br>GROUP BY DeptID<br>HAVING COUNT(*) > 5<br>ORDER BY AvgSalary DESC<br>LIMIT 10;</code>"
  },
  {
    id: 104,
    q: "104. Explain the difference between the WHERE and HAVING clauses in SQL.",
    category: "SQL Queries",
    ans: "• <strong>WHERE:</strong> Filters individual candidate rows <em>before</em> grouping. Operates on individual row column values; cannot contain aggregate functions.<br>• <strong>HAVING:</strong> Filters aggregated summary groups <em>after</em> the <code>GROUP BY</code> clause is applied. Operates on aggregate expressions (<code>COUNT</code>, <code>AVG</code>, <code>SUM</code>, <code>MAX</code>, <code>MIN</code>)."
  },
  {
    id: 105,
    q: "105. What is the ORDER BY clause used for in SQL?",
    category: "SQL Queries",
    ans: "• <strong>Purpose:</strong> Sorts the result set returned by a query in ascending (<code>ASC</code>, default) or descending (<code>DESC</code>) order based on one or more columns.<br>• <strong>Multi-Column Sorting:</strong> <code>SELECT * FROM Employees ORDER BY DeptID ASC, Salary DESC;</code> sorts primarily by department, and secondarily by salary in descending order within each department."
  },
  {
    id: 106,
    q: "106. How do you limit the number of records returned in a SQL query?",
    category: "SQL Queries",
    ans: "• <strong>MySQL / PostgreSQL / SQLite:</strong> <code>LIMIT n OFFSET m;</code> (e.g. <code>LIMIT 10 OFFSET 20</code> retrieves rows 21 to 30).<br>• <strong>SQL Server:</strong> <code>SELECT TOP n ...</code> or <code>OFFSET m ROWS FETCH NEXT n ROWS ONLY;</code>.<br>• <strong>Oracle:</strong> <code>FETCH FIRST n ROWS ONLY;</code> or <code>WHERE ROWNUM <= n;</code>."
  },
  {
    id: 107,
    q: "107. Explain the LIKE operator in SQL.",
    category: "SQL Queries",
    ans: "• <strong>Purpose:</strong> Performs pattern matching in a <code>WHERE</code> clause using wildcard characters.<br>• <strong>Wildcards:</strong><br>&nbsp;&nbsp;• <code>%</code> (Percent): Represents zero, one, or multiple characters (e.g., <code>WHERE Name LIKE 'A%'</code> matches 'Alice', 'Anand').<br>&nbsp;&nbsp;• <code>_</code> (Underscore): Represents exactly one single character (e.g., <code>WHERE Code LIKE 'C__'</code> matches 'C01', 'C02')."
  },
  {
    id: 108,
    q: "108. How do you perform a join operation in SQL?",
    category: "SQL Queries",
    ans: "• <strong>Syntax:</strong><br><code>SELECT e.Name, d.DeptName<br>FROM Employees e<br>JOIN Departments d ON e.DeptID = d.DeptID;</code><br>• <strong>Mechanism:</strong> Matches rows from table $A$ and table $B$ based on the join predicate specified in the <code>ON</code> clause."
  },
  {
    id: 109,
    q: "109. What are the different types of joins in SQL?",
    category: "SQL Queries",
    ans: "• <strong>1. INNER JOIN:</strong> Returns records that have matching values in both tables.<br>• <strong>2. LEFT (OUTER) JOIN:</strong> Returns all records from the left table and matched records from the right table (NULL if no match).<br>• <strong>3. RIGHT (OUTER) JOIN:</strong> Returns all records from the right table and matched records from the left table.<br>• <strong>4. FULL (OUTER) JOIN:</strong> Returns all records when there is a match in either left or right table.<br>• <strong>5. CROSS JOIN:</strong> Returns the Cartesian product ($M \\times N$ rows) of both tables.<br>• <strong>6. SELF JOIN:</strong> Joins a table to itself (e.g. Employee and Manager)."
  },
  {
    id: 110,
    q: "110. Explain the difference between INNER JOIN and OUTER JOIN.",
    category: "SQL Queries",
    ans: "• <strong>INNER JOIN:</strong> Strictly returns rows where there is a matching intersection between both tables based on the join condition. Unmatched rows from both tables are discarded.<br>• <strong>OUTER JOIN (LEFT, RIGHT, FULL):</strong> Preserves unmatched rows from one or both tables, filling the non-matching columns with <code>NULL</code> values in the output."
  },
  {
    id: 111,
    q: "111. How do you use the GROUP BY clause in SQL?",
    category: "SQL Queries",
    ans: "• <strong>Purpose:</strong> Collapses rows sharing identical values in specified columns into summary rows.<br>• <strong>Example:</strong><br><code>SELECT Department, COUNT(*) AS TotalEmp, AVG(Salary) AS AvgSal<br>FROM Employees<br>GROUP BY Department;</code><br>• <strong>Rule:</strong> Any column in the <code>SELECT</code> list that is not an aggregate function must appear in the <code>GROUP BY</code> clause."
  },
  {
    id: 112,
    q: "112. What is the purpose of the DISTINCT keyword in SQL?",
    category: "SQL Queries",
    ans: "• <strong>Purpose:</strong> Eliminates duplicate rows from the query output.<br>• <strong>Mechanism:</strong> The DBMS sorts or builds a hash table of the output projection tuples, outputting only the unique permutations of values across the selected attributes."
  },
  {
    id: 113,
    q: "113. What are SQL functions and why are they used?",
    category: "SQL Queries",
    ans: "• <strong>Definition:</strong> Built-in or user-defined subroutines that accept input parameters, perform calculations or string/date transformations, and return a result.<br>• <strong>Why Used:</strong> Promotes code reuse, encapsulates business logic inside the database engine, and formats data directly within SQL queries."
  },
  {
    id: 114,
    q: "114. Explain the difference between aggregate functions and scalar functions.",
    category: "SQL Queries",
    ans: "• <strong>Aggregate Functions:</strong> Operate across multiple rows in a column and produce a single summarized scalar output (e.g. <code>SUM()</code>, <code>AVG()</code>, <code>COUNT()</code>, <code>MAX()</code>, <code>MIN()</code>).<br>• <strong>Scalar Functions:</strong> Operate on a single input value per row and return a single transformed value for each row (e.g. <code>UPPER()</code>, <code>LOWER()</code>, <code>ROUND()</code>, <code>LENGTH()</code>, <code>SUBSTRING()</code>, <code>NOW()</code>)."
  },
  {
    id: 115,
    q: "115. What is the purpose of the COUNT() function in SQL?",
    category: "SQL Queries",
    ans: "• <strong><code>COUNT(*)</code>:</strong> Counts the total number of rows in the table/group, including rows containing <code>NULL</code> values.<br>• <strong><code>COUNT(column_name)</code>:</strong> Counts the number of non-NULL values present in the specified column.<br>• <strong><code>COUNT(DISTINCT column_name)</code>:</strong> Counts the number of unique, non-NULL values in the column."
  },
  {
    id: 116,
    q: "116. How do you use the MAX() and MIN() functions in SQL?",
    category: "SQL Queries",
    ans: "• <strong><code>MAX(column)</code>:</strong> Returns the highest value in a column (numeric, alphabetic, or latest date).<br>• <strong><code>MIN(column)</code>:</strong> Returns the lowest value in a column (numeric, alphabetic, or earliest date).<br>• <strong>Example:</strong> <code>SELECT MIN(Salary) AS MinSal, MAX(Salary) AS MaxSal FROM Employees;</code> ignores NULL values during calculation."
  },
  {
    id: 117,
    q: "117. What is the purpose of the SUM() and AVG() functions in SQL?",
    category: "SQL Queries",
    ans: "• <strong><code>SUM(numeric_column)</code>:</strong> Calculates the mathematical total of all values in a numeric column, ignoring NULLs.<br>• <strong><code>AVG(numeric_column)</code>:</strong> Calculates the arithmetic mean by dividing the sum of non-null values by the count of non-null values. NULL entries are completely excluded from the denominator."
  },
  {
    id: 118,
    q: "118. Explain the difference between the DISTINCT and ALL keywords in SQL?",
    category: "SQL Queries",
    ans: "• <strong>DISTINCT:</strong> Forces the query to filter out duplicate rows, returning only unique values.<br>• <strong>ALL:</strong> Retains all rows, including duplicates (this is the default behavior if neither keyword is specified: <code>SELECT ALL column ...</code> is equivalent to <code>SELECT column ...</code>)."
  },
  {
    id: 119,
    q: "119. What is normalization and why is it important in SQL?",
    category: "SQL Queries",
    ans: "• <strong>Importance in SQL:</strong> Organizes tables so each table represents one distinct entity, minimizing redundant data storage and preventing update anomalies when running SQL <code>UPDATE</code>, <code>INSERT</code>, and <code>DELETE</code> statements.<br>• <strong>Performance Impact:</strong> Keeps individual table rows narrow, improving disk I/O and cache page density."
  },
  {
    id: 120,
    q: "120. Explain the different normal forms in SQL.",
    category: "SQL Queries",
    ans: "• <strong>1NF:</strong> Atomic columns, no multi-valued lists.<br>• <strong>2NF:</strong> 1NF + no non-key column partially depends on a composite PK.<br>• <strong>3NF:</strong> 2NF + no non-key column depends on another non-key column.<br>• <strong>BCNF:</strong> For every $X \\to Y$, $X$ must be a superkey.<br>• <strong>4NF:</strong> Eliminates independent multi-valued dependencies.<br>• <strong>5NF:</strong> Eliminates join dependencies."
  },
  {
    id: 121,
    q: "121. What is denormalization and when would you use it?",
    category: "SQL Queries",
    ans: "• <strong>Definition:</strong> Intentionally introducing controlled redundancy into a normalized schema by merging tables or storing pre-aggregated summary fields.<br>• <strong>When Used:</strong> In high-throughput read-heavy applications, data warehouses, and reporting databases to avoid expensive multi-table SQL <code>JOIN</code> operations."
  },
  {
    id: 122,
    q: "122. How do you create views in SQL?",
    category: "SQL Queries",
    ans: "• <strong>Definition:</strong> A View is a virtual table defined by an underlying stored SQL <code>SELECT</code> query.<br>• <strong>Syntax:</strong><br><code>CREATE VIEW ActiveEmployeeSummary AS<br>SELECT e.Emp_ID, e.Name, d.DeptName, e.Salary<br>FROM Employees e<br>JOIN Departments d ON e.Dept_ID = d.Dept_ID<br>WHERE e.Status = 'Active';</code><br>• <strong>Benefits:</strong> Simplifies complex queries, hides sensitive columns, and provides logical data independence."
  },
  {
    id: 123,
    q: "123. What are stored procedures and how do you create them in SQL?",
    category: "SQL Queries",
    ans: "• <strong>Definition:</strong> A prepared, compiled collection of SQL statements and procedural control logic (IF/ELSE, loops) stored inside the database catalog.<br>• <strong>Syntax:</strong><br><code>CREATE PROCEDURE UpdateEmployeeSalary(IN p_EmpID INT, IN p_Percent DECIMAL)<br>BEGIN<br>&nbsp;&nbsp;UPDATE Employees SET Salary = Salary * (1 + p_Percent/100) WHERE Emp_ID = p_EmpID;<br>END;</code><br>• <strong>Benefits:</strong> Reduces network round-trips, pre-compiled query plan, enhances security (users execute procedure without table permissions)."
  },
  {
    id: 124,
    q: "124. What is indexing in SQL and why is it important?",
    category: "SQL Queries",
    ans: "• <strong>Definition:</strong> A physical data structure (typically a B+ Tree or Hash table) maintained by the database engine to locate table records rapidly without scanning every row.<br>• <strong>Importance:</strong> Transforms sequential full-table scans of $O(N)$ complexity into logarithmic $O(\\log N)$ point and range lookups, drastically reducing query execution latency."
  },
  {
    id: 125,
    q: "125. How do you optimize SQL queries for performance?",
    category: "SQL Queries",
    ans: "• <strong>1. Index Optimization:</strong> Index columns frequently used in <code>WHERE</code>, <code>JOIN</code>, and <code>ORDER BY</code> clauses.<br>• <strong>2. Avoid SELECT *:</strong> Fetch only required columns to reduce memory and network transfer overhead.<br>• <strong>3. Utilize EXPLAIN:</strong> Analyze the query execution plan to identify sequential scans and costly nested loop joins.<br>• <strong>4. Avoid Leading Wildcards:</strong> Expressions like <code>LIKE '%abc'</code> bypass indexes.<br>• <strong>5. Use EXISTS over IN:</strong> <code>EXISTS</code> stops scanning upon first match in subqueries.<br>• <strong>6. Batch Operations:</strong> Use bulk inserts/updates instead of single-row loops inside transactions."
  },

  // =========================================================================
  // 6. RELATIONAL ALGEBRA & OPERATORS (Q126 - Q164)
  // =========================================================================
  {
    id: 126,
    q: "126. Explain the difference between relational algebra and SQL.",
    category: "Relational Algebra",
    ans: "• <strong>Relational Algebra:</strong> A <em>procedural</em> theoretical query language where the user prescribes the precise sequence of algebraic operations (selection, projection, joins) to compute a result.<br>• <strong>SQL:</strong> A <em>declarative</em> practical query language where the user specifies <em>what</em> data is desired, and the DBMS query optimizer translates the SQL into an optimized relational algebra expression tree for physical execution."
  },
  {
    id: 127,
    q: "127. What are the fundamental operations in relational algebra?",
    category: "Relational Algebra",
    ans: "• <strong>1. Selection ($\\sigma$):</strong> Selects tuples satisfying a given predicate.<br>• <strong>2. Projection ($\\pi$):</strong> Selects specified attributes, discarding others and removing duplicate tuples.<br>• <strong>3. Union ($\\cup$):</strong> Combines tuples from two union-compatible relations.<br>• <strong>4. Set Difference ($- $):</strong> Finds tuples in relation $R$ that are not in relation $S$.<br>• <strong>5. Cartesian Product ($\\times$):</strong> Combines every tuple of $R$ with every tuple of $S$.<br>• <strong>6. Rename ($\\rho$):</strong> Renames relations and attribute names."
  },
  {
    id: 128,
    q: "128. How do you represent relations in relational algebra?",
    category: "Relational Algebra",
    ans: "• <strong>Mathematical Set:</strong> A relation $R$ is represented as a mathematical subset of the Cartesian product of attribute domains: $R \\subseteq D_1 \\times D_2 \\times \\dots \\times D_n$.<br>• <strong>Tabular Schema:</strong> Expressed as $R(A_1, A_2, \\dots, A_n)$ where each tuple $t \\in R$ is an ordered list of atomic values."
  },
  {
    id: 129,
    q: "129. Describe the basic syntax of relational algebra expressions.",
    category: "Relational Algebra",
    ans: "• <strong>Unary Syntax:</strong> $\\text{Operator}_{\\text{condition}}(\\text{Relation})$ (e.g. $\\sigma_{\\text{Salary} > 50000}(\\text{Employee})$ or $\\pi_{\\text{Name, Dept}}(\\text{Employee})$).<br>• <strong>Binary Syntax:</strong> $\\text{Relation}_1 \\text{ Operator} \\text{ Relation}_2$ (e.g. $R \\cup S$, $R - S$, $R \\bowtie_{R.A = S.A} S$).<br>• <strong>Nested Expressions:</strong> $\\pi_{\\text{Name}}(\\sigma_{\\text{Dept} = 'IT'}(\\text{Employee}))$, evaluated from inside parentheses outward."
  },
  {
    id: 130,
    q: "130. What is a relational schema, and how is it used in relational algebra?",
    category: "Relational Algebra",
    ans: "• <strong>Definition:</strong> The formal blueprint specifying the relation name, its attribute set, and domain constraints: $R(A_1: D_1, A_2: D_2, \\dots, A_n: D_n)$.<br>• <strong>Role in Relational Algebra:</strong> Defines the arity (degree) and attribute names available for projection, selection predicates, and compatibility tests for union, intersection, and set difference."
  },
  {
    id: 131,
    q: "131. Explain the SELECT operation in relational algebra.",
    category: "Relational Algebra",
    ans: "• <strong>Symbol:</strong> $\\sigma$ (Greek letter sigma).<br>• <strong>Definition:</strong> Unary operator that filters horizontal rows (tuples) satisfying a propositional condition: $\\sigma_{p}(R) = \\{ t \\mid t \\in R \\text{ and } p(t) = \\text{true} \\}$.<br>• <strong>Example:</strong> $\\sigma_{\\text{Age} \\ge 21 \\land \\text{City} = 'Mumbai'}(\\text{Students})$ is equivalent to SQL <code>WHERE Age >= 21 AND City = 'Mumbai'</code>."
  },
  {
    id: 132,
    q: "132. How does the PROJECT operation work in relational algebra?",
    category: "Relational Algebra",
    ans: "• <strong>Symbol:</strong> $\\pi$ (Greek letter pi).<br>• <strong>Definition:</strong> Unary operator that vertical-slices a relation, outputting only the specified attributes while eliminating all other columns: $\\pi_{A_1, A_2, \\dots, A_k}(R)$.<br>• <strong>Duplicate Elimination:</strong> In pure relational algebra, relations are mathematical sets, so $\\pi$ automatically strips duplicate tuples from the result."
  },
  {
    id: 133,
    q: "133. Describe the difference between the JOIN and CROSS JOIN operations.",
    category: "Relational Algebra",
    ans: "• <strong>CROSS JOIN (Cartesian Product $\\times$):</strong> Unconditionally pairs every row in $R$ with every row in $S$, yielding $|R| \\times |S|$ rows.<br>• <strong>JOIN (Theta Join $\\bowtie_\\theta$):</strong> Combines Cartesian product with a selection condition: $R \\bowtie_\\theta S = \\sigma_\\theta(R \\times S)$. Only pairs satisfying predicate $\\theta$ are retained."
  },
  {
    id: 134,
    q: "134. What is the difference between UNION and INTERSECTION in relational algebra?",
    category: "Relational Algebra",
    ans: "• <strong>Union ($R \\cup S$):</strong> Returns all tuples belonging to $R$, to $S$, or to both (eliminates duplicate instances).<br>• <strong>Intersection ($R \\cap S$):</strong> Returns only tuples that appear simultaneously in both $R$ and $S$. Can be expressed using set difference: $R \\cap S = R - (R - S)$.<br>• <strong>Requirement:</strong> Both relations must be <em>Union-Compatible</em> (identical degree and compatible attribute domains)."
  },
  {
    id: 135,
    q: "135. Explain the purpose of the RENAME operation in relational algebra.",
    category: "Relational Algebra",
    ans: "• <strong>Symbol:</strong> $\\rho$ (Greek letter rho).<br>• <strong>Purpose:</strong> Renames the relation or attribute names of an expression result: $\\rho_{S(B_1, B_2, \\dots, B_n)}(R)$.<br>• <strong>Why Essential:</strong> Required when joining a relation with itself (Self-Join) to disambiguate identical column names, or to make schemas union-compatible."
  },
  {
    id: 136,
    q: "136. How do you perform set difference in relational algebra?",
    category: "Relational Algebra",
    ans: "• <strong>Symbol:</strong> $-$ (Minus).<br>• <strong>Definition:</strong> $R - S$ returns all tuples that exist in relation $R$ but do <em>not</em> exist in relation $S$.<br>• <strong>Condition:</strong> $R$ and $S$ must be union-compatible.<br>• <strong>SQL Equivalent:</strong> Corresponds to SQL <code>EXCEPT</code> (PostgreSQL/SQL Server) or <code>MINUS</code> (Oracle)."
  },
  {
    id: 137,
    q: "137. What is the DIVISION operation in relational algebra, and when is it used?",
    category: "Relational Algebra",
    ans: "• <strong>Symbol:</strong> $\\div$ (Divide).<br>• <strong>Definition:</strong> For relations $R(A, B)$ and $S(B)$, $R \\div S$ returns tuples $t[A]$ such that for every tuple $s \\in S$, the tuple $\\langle t[A], s[B] \\rangle$ exists in $R$.<br>• <strong>When Used:</strong> Answers universal queries containing the phrase <strong>'FOR ALL'</strong> (e.g., 'Find students who enrolled in <em>all</em> courses offered in the CS department')."
  },
  {
    id: 138,
    q: "138. Describe the SEMIJOIN operation and its significance in relational algebra.",
    category: "Relational Algebra",
    ans: "• <strong>Symbol:</strong> $\\ltimes$ (Left Semijoin).<br>• <strong>Definition:</strong> $R \\ltimes_\\theta S = \\pi_{\\text{attrs}(R)}(R \\bowtie_\\theta S)$. Returns only tuples from $R$ that participate in at least one matching join with $S$.<br>• <strong>Significance in Distributed DBs:</strong> Dramatically minimizes network transmission by shipping only the join key column of $S$ across the network to filter $R$ at the remote site."
  },
  {
    id: 139,
    q: "139. What is the NATURAL JOIN operation, and how does it differ from other types of joins?",
    category: "Relational Algebra",
    ans: "• <strong>Symbol:</strong> $\\bowtie$ (Natural Join).<br>• <strong>Definition:</strong> Equi-joins two relations on all attributes having identical names in both relations, projecting out the duplicate join attribute so it appears only once in the final schema.<br>• <strong>Difference:</strong> Unlike Theta Join (which retains both columns unless explicitly projected), Natural Join implicitly enforces equality on all common attributes and automatically removes redundancy."
  },
  {
    id: 140,
    q: "140. Explain the purpose of the OUTER JOIN operation in relational algebra.",
    category: "Relational Algebra",
    ans: "• <strong>Symbols:</strong> Left Outer Join ($\\rtimes$), Right Outer Join ($\\ltimes$), Full Outer Join ($\\fullouterjoin$).<br>• <strong>Purpose:</strong> Avoids loss of information during joins by preserving dangling (unmatched) tuples from one or both relations, padding non-matching attributes with null ($\\text{null}$) values in the result."
  },
  {
    id: 141,
    q: "141. How do you perform aggregation operations in relational algebra?",
    category: "Relational Algebra",
    ans: "• <strong>Generalized Projection Operator:</strong> $\\mathcal{G}$ (Calligraphic G).<br>• <strong>Syntax:</strong> $_{G_1, G_2, \\dots, G_k}\\mathcal{G}_{F_1(A_1), F_2(A_2)}(R)$ where $G_i$ are grouping attributes and $F_i$ are aggregate functions (<code>SUM</code>, <code>AVG</code>, <code>COUNT</code>).<br>• <strong>Example:</strong> $_{\\text{DeptID}}\\mathcal{G}_{\\text{AVG}(\\text{Salary})}(\\text{Employee})$ groups employees by department and computes average salary."
  },
  {
    id: 142,
    q: "142. Describe how recursive queries can be represented in relational algebra.",
    category: "Relational Algebra",
    ans: "• <strong>Limitation:</strong> Standard classical relational algebra cannot compute the <em>Transitive Closure</em> of a relation (e.g. organizational hierarchy: finding all indirect reports of a manager).<br>• <strong>Extension:</strong> Extended relational algebra introduces the <strong>Least Fixed-Point Operator</strong> ($\\mu$), iteratively evaluating a relational expression until no new tuples are added (implemented in SQL via <code>WITH RECURSIVE</code> CTEs)."
  },
  {
    id: 143,
    q: "143. How can you optimize relational algebra expressions for better performance?",
    category: "Relational Algebra",
    ans: "• <strong>Heuristic Algebraic Rules:</strong><br>&nbsp;&nbsp;1. <em>Push Selections Down:</em> Evaluate $\\sigma$ as early as possible before joins to minimize intermediate table sizes.<br>&nbsp;&nbsp;2. <em>Push Projections Down:</em> Discard unused columns early with $\\pi$ to minimize memory buffer footprints.<br>&nbsp;&nbsp;3. <em>Combine Cascades:</em> Merge sequences of selections $\\sigma_{c1}(\\sigma_{c2}(R))$ into $\\sigma_{c1 \\land c2}(R)$."
  },
  {
    id: 144,
    q: "144. Explain the concept of query optimization in relational algebra.",
    category: "Relational Algebra",
    ans: "• <strong>Concept:</strong> Converting a parsed relational algebra expression into a semantically equivalent alternative tree that minimizes estimated execution cost (I/O, CPU, memory).<br>• <strong>Equivalence Rules:</strong> Mathematical transformations (commutativity and associativity of joins, distributive laws of selection over joins) allow exploration of alternative execution spaces."
  },
  {
    id: 145,
    q: "145. What are some common optimization techniques used in relational algebra?",
    category: "Relational Algebra",
    ans: "• <strong>1. Heuristic Optimization:</strong> Re-ordering operators using transformation rules (predicate pushdown).<br>• <strong>2. Cost-Based Optimization (CBO):</strong> Using catalog statistics (histograms, table sizes, cardinality) to estimate I/O costs of different join algorithms.<br>• <strong>3. Join Order Selection:</strong> Evaluating left-deep vs bushy join trees via dynamic programming to pick optimal join sequences."
  },
  {
    id: 146,
    q: "146. How does indexing impact query performance in relational algebra?",
    category: "Relational Algebra",
    ans: "• <strong>Selection Acceleration:</strong> Converts $\\sigma_{A=c}(R)$ from a full table scan of $N$ disk blocks to an index tree traversal of height $h \\approx 3-4$ I/Os.<br>• <strong>Join Optimization:</strong> Enables the Query Optimizer to choose <em>Index Nested Loop Joins</em> ($O(M \\log N)$) rather than full nested scans ($O(M \\times N)$)."
  },
  {
    id: 147,
    q: "147. Describe the concept of query execution plans in relational algebra.",
    category: "Relational Algebra",
    ans: "• <strong>Definition:</strong> An annotated relational algebra tree specifying not only algebraic operations, but also the physical algorithms (Hash Join, Merge Join, Index Scan, Sequential Scan) and pipelining methods used to execute the query.<br>• <strong>Inspection:</strong> Examined in SQL via <code>EXPLAIN</code> or <code>EXPLAIN ANALYZE</code>."
  },
  {
    id: 148,
    q: "148. Discuss the role of relational algebra in relational database theory.",
    category: "Relational Algebra",
    ans: "• <strong>Theoretical Foundation:</strong> Provides the formal mathematical bedrock proving the expressive power of relational languages.<br>• <strong>Codd's Theorem:</strong> Proves that Relational Algebra and Relational Calculus (Tuple and Domain) are mathematically equivalent in expressive power; any query expressible in calculus is expressible in algebra (Relational Completeness)."
  },
  {
    id: 149,
    q: "149. How does relational algebra facilitate database query processing?",
    category: "Relational Algebra",
    ans: "• <strong>Internal Intermediate Representation:</strong> Acts as the universal intermediate language inside database engines. SQL queries are parsed into relational algebra parse trees, allowing clean optimization, rule rewriting, cost estimation, and code generation before execution."
  },
  {
    id: 150,
    q: "150. Explain how relational algebra operations are used in practice for database manipulation.",
    category: "Relational Algebra",
    ans: "• <strong>Practical Mapping:</strong><br>&nbsp;&nbsp;• SQL <code>WHERE</code> &rarr; $\\sigma$ (Selection)<br>&nbsp;&nbsp;• SQL <code>SELECT col1, col2</code> &rarr; $\\pi$ (Projection)<br>&nbsp;&nbsp;• SQL <code>FROM T1, T2</code> &rarr; $\\times$ (Cartesian Product)<br>&nbsp;&nbsp;• SQL <code>JOIN ... ON</code> &rarr; $\\bowtie$ (Join)<br>&nbsp;&nbsp;• SQL <code>UNION</code> &rarr; $\\cup$ (Union)<br>&nbsp;&nbsp;• SQL <code>EXCEPT</code> &rarr; $-$ (Set Difference)"
  },
  {
    id: 151,
    q: "151. Describe the relationship between relational algebra and database normalization.",
    category: "Relational Algebra",
    ans: "• <strong>Decomposition & Synthesis:</strong> Normalization decomposes relation $R$ into smaller relations $R_1, R_2$ using Projection ($\\pi$).<br>• <strong>Lossless-Join Guarantee:</strong> Normalization guarantees that the original relation can be perfectly reconstructed without spurious tuples using Natural Join: $R = R_1 \\bowtie R_2$."
  },
  {
    id: 152,
    q: "152. How does relational algebra relate to the relational model of data?",
    category: "Relational Algebra",
    ans: "• <strong>Model Component:</strong> The Relational Model consists of three parts: Structure (Tables/Tuples), Integrity (Keys/Constraints), and Manipulation.<br>• <strong>Manipulation Engine:</strong> Relational algebra provides the formal manipulation component, proving closure: every algebraic operation on relations produces a new relation as output."
  },
  {
    id: 153,
    q: "153. How do you write a relational algebra expression to find the Cartesian product of two relations?",
    category: "Relational Algebra",
    ans: "• <strong>Expression:</strong> $R \\times S$.<br>• <strong>Properties:</strong> If relation $R$ has degree $k_1$ and cardinality $n_1$, and relation $S$ has degree $k_2$ and cardinality $n_2$, then $R \\times S$ has degree $k_1 + k_2$ and cardinality $n_1 \\times n_2$."
  },
  {
    id: 154,
    q: "154. Explain how you would retrieve data from multiple tables using relational algebra.",
    category: "Relational Algebra",
    ans: "• <strong>Workflow:</strong> Combine relations via Cartesian product or Join, apply selection predicates, and project desired columns.<br>• <strong>Example:</strong> Retrieve names of students enrolled in 'CS101':<br>$\\pi_{\\text{Name}}(\\sigma_{\\text{CourseID} = 'CS101'}(\\text{Student} \\bowtie \\text{Enrollment}))$. "
  },
  {
    id: 155,
    q: "155. How do you perform nested queries in relational algebra?",
    category: "Relational Algebra",
    ans: "• <strong>Compositional Nature:</strong> Because relational algebra exhibits the <em>Closure Property</em> (output of an operator is a relation), outputs can be nested directly into input slots of other operators without requiring special subquery syntax."
  },
  {
    id: 156,
    q: "156. Describe the process of composing complex relational algebra expressions.",
    category: "Relational Algebra",
    ans: "• <strong>Step 1:</strong> Identify target output attributes &rarr; outer $\\pi$.<br>• <strong>Step 2:</strong> Identify participating relations &rarr; joins $\\bowtie$.<br>• <strong>Step 3:</strong> Identify filtering criteria &rarr; selections $\\sigma$.<br>• <strong>Step 4:</strong> Introduce temporary intermediate assignments ($\\leftarrow$) or nested compositions."
  },
  {
    id: 157,
    q: "157. Provide an example of a complex query expressed in relational algebra.",
    category: "Relational Algebra",
    ans: "• <strong>Scenario:</strong> 'Find names of customers who have an account at all branches located in Brooklyn':<br>$\\pi_{\\text{CustomerName, BranchName}}(\\text{Depositor} \\bowtie \\text{Account}) \\div \\pi_{\\text{BranchName}}(\\sigma_{\\text{City} = 'Brooklyn'}(\\text{Branch}))$. Uses the Division ($\\div$) operator to model universal quantification."
  },
  {
    id: 158,
    q: "158. Can you provide examples of real-world scenarios where relational algebra is used?",
    category: "Relational Algebra",
    ans: "• <strong>1. Database Engine Query Optimizers:</strong> PostgreSQL, MySQL, and Oracle translate incoming SQL into relational algebra operator trees during parse-and-rewrite phases.<br>• <strong>2. Distributed Query Planning:</strong> Used in Apache Spark SQL Catalyst optimizer to construct optimized execution DAGs."
  },
  {
    id: 159,
    q: "159. How does relational algebra support data manipulation in database management systems?",
    category: "Relational Algebra",
    ans: "• <strong>Declarative DML Mapping:</strong> Enables relational engines to verify functional dependencies, enforce integrity constraints during updates, and compute minimum sets of rows impacted by cascades."
  },
  {
    id: 160,
    q: "160. Describe how relational algebra expressions are translated into SQL queries in practice.",
    category: "Relational Algebra",
    ans: "• <strong>Direct Translation:</strong><br>&nbsp;&nbsp;• Projected attributes map to the <code>SELECT</code> clause.<br>&nbsp;&nbsp;• Base relations map to the <code>FROM</code> and <code>JOIN</code> clauses.<br>&nbsp;&nbsp;• Selection conditions map to the <code>WHERE</code> clause.<br>&nbsp;&nbsp;• Division operations translate to correlated subqueries with <code>NOT EXISTS</code>."
  },
  {
    id: 161,
    q: "161. What are some challenges associated with using relational algebra in database systems?",
    category: "Relational Algebra",
    ans: "• <strong>1. Procedural Complexity:</strong> Writing procedural algebraic expressions is unintuitive for business end-users compared to declarative SQL.<br>• <strong>2. Duplicate Handling:</strong> Pure relational algebra operates on mathematical sets (no duplicates), whereas real-world SQL operates on multi-sets (bags) for performance."
  },
  {
    id: 162,
    q: "162. Discuss the limitations of relational algebra in representing complex queries.",
    category: "Relational Algebra",
    ans: "• <strong>Expressive Limitations:</strong> Classical relational algebra cannot compute transitive closures (recursive traversals), window functions, text similarity searches, or handle graph connectivity without non-relational procedural loops."
  },
  {
    id: 163,
    q: "163. How do you address scalability issues when working with relational algebra expressions?",
    category: "Relational Algebra",
    ans: "• <strong>Scalability Solutions:</strong> Use parallel query execution, push filter operators down to partitioned storage shards, and leverage semijoins to minimize inter-node network data shipping."
  },
  {
    id: 164,
    q: "164. Explain the trade-offs involved in using relational algebra for database query processing.",
    category: "Relational Algebra",
    ans: "• <strong>Trade-offs:</strong> Provides formal provable mathematical soundness and modular optimization vs computational overhead of generating and searching large spaces of equivalent algebraic trees."
  },

  // =========================================================================
  // 7. FUNCTIONAL DEPENDENCIES & CLOSURES (Q165 - Q180)
  // =========================================================================
  {
    id: 165,
    q: "165. What is a functional dependency (FD) in the context of relational databases?",
    category: "Functional Dependencies",
    ans: "• <strong>Definition:</strong> A formal constraint between two sets of attributes in a relation. If $X$ and $Y$ are subsets of attributes in relation $R$, the functional dependency $X \\to Y$ asserts that each $X$-value is uniquely associated with precisely one $Y$-value.<br>• <strong>Formal Rule:</strong> $\\forall t_1, t_2 \\in R$, if $t_1[X] = t_2[X]$ then $t_1[Y] = t_2[Y]$."
  },
  {
    id: 166,
    q: "166. How do you define a functional dependency between attributes in a relation?",
    category: "Functional Dependencies",
    ans: "• <strong>Notation:</strong> $X \\to Y$ where $X$ is the <strong>Determinant</strong> and $Y$ is the <strong>Dependent</strong>.<br>• <strong>Trivial vs. Non-Trivial:</strong><br>&nbsp;&nbsp;• <em>Trivial FD:</em> $Y \\subseteq X$ (e.g. $AB \\to A$). Always holds automatically.<br>&nbsp;&nbsp;• <em>Non-Trivial FD:</em> $Y \\not\\subseteq X$ (e.g. $\\text{EmpID} \\to \\text{Salary}$). Represents real-world integrity rules."
  },
  {
    id: 167,
    q: "167. Explain the difference between a candidate key and a superkey in terms of functional dependencies.",
    category: "Functional Dependencies",
    ans: "• <strong>Superkey:</strong> An attribute set $K$ such that $K^+ = R$ (its attribute closure contains all attributes of relation $R$). Functional dependency: $K \\to R$.<br>• <strong>Candidate Key:</strong> A <em>minimal</em> superkey. That is, $K \\to R$ holds, but for any proper subset $K' \\subset K$, $K' \\to R$ does NOT hold."
  },
  {
    id: 168,
    q: "168. What is closure of attributes in functional dependencies, and why is it important?",
    category: "Functional Dependencies",
    ans: "• <strong>Definition:</strong> The attribute closure of a set of attributes $X$ under a set of FDs $F$, denoted $X^+$, is the set of all attributes functionally determined by $X$ under $F$.<br>• <strong>Importance:</strong> Enables determining candidate keys, testing whether an FD holds, and testing relation equivalence."
  },
  {
    id: 169,
    q: "169. How do you represent functional dependencies using notation?",
    category: "Functional Dependencies",
    ans: "• <strong>Standard Notation:</strong> $X \\to Y$ where $X$ and $Y$ are attribute lists.<br>• <strong>Arrow Meanings:</strong> Single arrow ($\to$) denotes functional dependency; Double arrow ($\twoheadrightarrow$) denotes multi-valued dependency (MVD)."
  },
  {
    id: 170,
    q: "170. What are the steps involved in determining functional dependencies in a relation?",
    category: "Functional Dependencies",
    ans: "• <strong>Step 1:</strong> Examine domain specifications and business rules (e.g. 'each employee works in one department').<br>• <strong>Step 2:</strong> Map entities and attributes to candidate determinants.<br>• <strong>Step 3:</strong> Formulate candidate FDs and verify they hold for all valid instances."
  },
  {
    id: 171,
    q: "171. Explain Armstrong’s Axioms and how they are used to derive functional dependencies.",
    category: "Functional Dependencies",
    ans: "• <strong>The Three Primary Axioms:</strong><br>&nbsp;&nbsp;1. <em>Reflexivity:</em> If $Y \\subseteq X$, then $X \\to Y$.<br>&nbsp;&nbsp;2. <em>Augmentation:</em> If $X \\to Y$, then $XZ \\to YZ$.<br>&nbsp;&nbsp;3. <em>Transitivity:</em> If $X \\to Y$ and $Y \\to Z$, then $X \\to Z$.<br>• <strong>Secondary Derived Rules:</strong> Union ($X \\to Y, X \\to Z \\implies X \\to YZ$), Decomposition ($X \\to YZ \\implies X \\to Y, X \\to Z$), and Pseudo-transitivity ($X \\to Y, WY \\to Z \\implies WX \\to Z$).<br>• <strong>Soundness & Completeness:</strong> Armstrong's Axioms generate all logically implied dependencies without generating false ones."
  },
  {
    id: 172,
    q: "172. Describe how you can use attribute closure to determine functional dependencies.",
    category: "Functional Dependencies",
    ans: "• <strong>Procedure:</strong> To test if an FD $X \\to Y$ is valid under FD set $F$:<br>&nbsp;&nbsp;1. Initialize $\\text{Closure} = X$.<br>&nbsp;&nbsp;2. Repeatedly inspect all $A \\to B \\in F$; if $A \\subseteq \\text{Closure}$, then $\\text{Closure} = \\text{Closure} \\cup B$.<br>&nbsp;&nbsp;3. Repeat until Closure does not change.<br>&nbsp;&nbsp;4. If $Y \\subseteq \\text{Closure}$, then $X \\to Y$ holds; otherwise it fails."
  },
  {
    id: 173,
    q: "173. Can you provide an example of identifying functional dependencies in a given relation?",
    category: "Functional Dependencies",
    ans: "• <strong>Example Relation:</strong> $R(A, B, C, D)$ with FDs $F = \\{ A \\to B, B \\to C, C \\to D \\}$.<br>• <strong>Compute $A^+$:</strong> Start with $\\{A\\}$. $A \\to B \\implies \\{A, B\\}$. $B \\to C \\implies \\{A, B, C\\}$. $C \\to D \\implies \\{A, B, C, D\\}$.<br>• <strong>Conclusion:</strong> Since $A^+ = \\{A, B, C, D\\}$, $A$ is a candidate key, and by transitivity $A \\to D$ holds."
  },
  {
    id: 174,
    q: "174. How are functional dependencies related to the normalization process in database design?",
    category: "Functional Dependencies",
    ans: "• <strong>Decisive Driver:</strong> Normal forms are formally defined via functional dependencies. Partial dependencies violate 2NF, transitive dependencies violate 3NF, and non-superkey determinants violate BCNF. Normalization decomposes relations based on these violations."
  },
  {
    id: 175,
    q: "175. Explain the concept of partial dependency and how it relates to functional dependencies.",
    category: "Functional Dependencies",
    ans: "• <strong>Concept:</strong> Given relation $R$ with composite candidate key $K$, a partial dependency exists if there is an attribute $A \\subset K$ and a non-prime attribute $B$ such that $A \\to B$. Non-prime attribute $B$ depends on a part of the key rather than the whole key."
  },
  {
    id: 176,
    q: "176. What is transitive dependency, and why is it important in normalization?",
    category: "Functional Dependencies",
    ans: "• <strong>Concept:</strong> Occurs when $X \\to Y$ and $Y \\to Z$ hold where $X$ is candidate key, and $Y, Z$ are non-prime attributes ($X$ determines $Z$ via $Y$).<br>• <strong>Importance:</strong> Transitive dependencies cause update anomalies; 3NF specifically mandates their complete elimination."
  },
  {
    id: 177,
    q: "177. How do you use functional dependencies to decompose relations into higher normal forms?",
    category: "Functional Dependencies",
    ans: "• <strong>Decomposition Algorithm:</strong> If FD $X \\to Y$ violates a normal form in $R$, decompose $R$ into two relations: $R_1(X \\cup Y)$ and $R_2(R - Y)$. This preserves $X$ as a foreign key linking $R_1$ and $R_2$ while eliminating redundancy."
  },
  {
    id: 178,
    q: "178. Provide an example of how normalization based on functional dependencies can eliminate redundancy.",
    category: "Functional Dependencies",
    ans: "• <strong>Relation:</strong> <code>Emp_Dept(EmpID, Name, DeptID, DeptName)</code>.<br>• <strong>Violation:</strong> <code>DeptID &rarr; DeptName</code> causes department names to repeat for all employees in that department.<br>• <strong>Resolution:</strong> Decompose into <code>Employee(EmpID, Name, DeptID)</code> and <code>Department(DeptID, DeptName)</code>. Department names are stored exactly once."
  },
  {
    id: 179,
    q: "179. What is the role of keys in determining functional dependencies?",
    category: "Functional Dependencies",
    ans: "• <strong>Core Anchor:</strong> By definition, a candidate key functionally determines all other attributes in the relation. All valid FDs must be consistent with the candidate keys."
  },
  {
    id: 180,
    q: "180. How do you identify candidate keys using functional dependencies?",
    category: "Functional Dependencies",
    ans: "• <strong>Algorithm:</strong><br>&nbsp;&nbsp;1. Identify attributes that never appear on the right-hand side (RHS) of any FD; these MUST be part of every candidate key.<br>&nbsp;&nbsp;2. Compute the closure of these essential attributes.<br>&nbsp;&nbsp;3. If the closure equals all attributes in $R$, that set is the unique candidate key.<br>&nbsp;&nbsp;4. If not, systematically combine with other attributes until a minimal set with full closure is found."
  },

  // =========================================================================
  // 7. FUNCTIONAL DEPENDENCIES (Cont. Q181 - Q196)
  // =========================================================================
  {
    id: 181,
    q: "181. Can a relation have multiple candidate keys, and if so, how are they related to functional dependencies?",
    category: "Functional Dependencies",
    ans: "• <strong>Multiple Candidate Keys:</strong> Yes, a relation can possess multiple distinct candidate keys (e.g. <code>EmpID</code>, <code>SocialSecurityNum</code>, <code>Email</code>).<br>• <strong>FD Relationship:</strong> Each candidate key $K_i$ independently satisfies $K_i^+ = R$. Any attribute belonging to at least one candidate key is designated as a <em>Prime Attribute</em>."
  },
  {
    id: 182,
    q: "182. Explain how primary keys and foreign keys are determined based on functional dependencies.",
    category: "Functional Dependencies",
    ans: "• <strong>Primary Key Selection:</strong> The DBA selects the most stable, compact candidate key identified through attribute closures.<br>• <strong>Foreign Key Derivation:</strong> When decomposing relation $R$ into $R_1$ and $R_2$ via FD $X \\to Y$, attribute set $X$ acts as the Primary Key in $R_1$ and serves as the Foreign Key in $R_2$ referencing $R_1$."
  },
  {
    id: 183,
    q: "183. What is the closure of a set of attributes in functional dependencies?",
    category: "Functional Dependencies",
    ans: "• <strong>Definition:</strong> The closure of an attribute set $X$ with respect to a set of functional dependencies $F$, written $X^+$, is the maximal set of attributes that are functionally determined by $X$ under $F$.<br>• <strong>Computation:</strong> Computed in polynomial time $O(|F| \\times |R|)$ using Armstrong's axioms."
  },
  {
    id: 184,
    q: "184. How do you calculate the closure of attributes using Armstrong’s axioms?",
    category: "Functional Dependencies",
    ans: "• <strong>Algorithm:</strong><br>&nbsp;&nbsp;1. Initialize $\\text{Closure} = X$.<br>&nbsp;&nbsp;2. While there exists an unused FD $A \\to B \\in F$ such that $A \\subseteq \\text{Closure}$:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\\text{Closure} = \\text{Closure} \\cup B$.<br>&nbsp;&nbsp;3. Terminate when a complete pass produces no new attributes.<br>&nbsp;&nbsp;4. Output $X^+ = \\text{Closure}$."
  },
  {
    id: 185,
    q: "185. Explain the concept of a canonical cover and its significance in functional dependency analysis.",
    category: "Functional Dependencies",
    ans: "• <strong>Definition:</strong> A Minimal (Canonical) Cover $F_c$ is an equivalent, irreducible set of functional dependencies that has the same closure as $F$ ($F_c^+ = F^+$) but contains zero redundant dependencies and zero extraneous attributes.<br>• <strong>Significance:</strong> Minimizes the runtime validation overhead required by database engines to enforce integrity constraints."
  },
  {
    id: 186,
    q: "186. How do you find the canonical cover of a set of functional dependencies?",
    category: "Functional Dependencies",
    ans: "• <strong>Step 1 (Decomposition):</strong> Transform all FDs so that the RHS has only a single attribute (e.g., $X \\to YZ$ becomes $X \\to Y$ and $X \\to Z$).<br>• <strong>Step 2 (Eliminate Extraneous Attributes):</strong> For each FD $XY \\to Z$, check if $X \\to Z$ is logically implied by $F$. If so, delete $Y$.<br>• <strong>Step 3 (Eliminate Redundant FDs):</strong> For each FD $X \\to Y$, check if $Y \\subseteq X^+$ under $F - \\{X \\to Y\\}$. If yes, delete $X \\to Y$."
  },
  {
    id: 187,
    q: "187. What are multivalued dependencies, and how do they differ from functional dependencies?",
    category: "Functional Dependencies",
    ans: "• <strong>Multivalued Dependency (MVD):</strong> Denoted $X \\twoheadrightarrow Y$. Occurs when the presence of a pair of attribute values for $X$ determines a <em>set</em> of values for $Y$ independently of all other attributes in the relation.<br>• <strong>Difference:</strong> An FD $X \\to Y$ restricts $Y$ to a single unique atomic value for each $X$; an MVD $X \\twoheadrightarrow Y$ permits multiple independent $Y$ values for the same $X$. Addressed in <strong>4NF</strong>."
  },
  {
    id: 188,
    q: "188. Can you provide an example of a relation that exhibits multivalued dependencies?",
    category: "Functional Dependencies",
    ans: "• <strong>Scenario:</strong> <code>Course(CourseID, Instructor, Textbook)</code> where an instructor and a textbook are independent choices for a course.<br>• <strong>MVDs:</strong> <code>CourseID &twoheadrightarrow; Instructor</code> and <code>CourseID &twoheadrightarrow; Textbook</code>.<br>• <strong>Anomaly:</strong> If Course CS101 has 2 instructors and 3 textbooks, the table requires $2 \\times 3 = 6$ rows. 4NF resolves this by decomposing into <code>Course_Instructor(CourseID, Instructor)</code> and <code>Course_Textbook(CourseID, Textbook)</code>."
  },
  {
    id: 189,
    q: "189. Describe the concept of join dependencies and their relationship to functional dependencies.",
    category: "Functional Dependencies",
    ans: "• <strong>Join Dependency (JD):</strong> A generalization of MVD denoted $\\bowtie(R_1, R_2, \\dots, R_n)$ stating that relation $R$ can be losslessly reconstructed by joining $n \\ge 2$ decomposed projections.<br>• <strong>Relationship:</strong> Every FD is an MVD, and every MVD is a 2-way Join Dependency. A relation in 4NF is in <strong>5NF (Project-Join Normal Form)</strong> if every join dependency is implied by candidate keys."
  },
  {
    id: 190,
    q: "190. How do you ensure data integrity when dealing with complex dependencies in a database?",
    category: "Functional Dependencies",
    ans: "• <strong>1. Schema Normalization:</strong> Decompose tables to BCNF/3NF to eliminate anomalies structurally.<br>• <strong>2. Declarative SQL Constraints:</strong> Define <code>CHECK</code>, <code>UNIQUE</code>, and <code>FOREIGN KEY</code> constraints.<br>• <strong>3. Database Triggers & Stored Procedures:</strong> Enforce cross-table multi-row business constraints programmatically.<br>• <strong>4. Transaction Isolation:</strong> Run critical interdependent updates inside <code>SERIALIZABLE</code> transactions."
  },
  {
    id: 191,
    q: "191. Can you provide examples of real-world scenarios where understanding functional dependencies is important?",
    category: "Functional Dependencies",
    ans: "• <strong>1. Healthcare EHR Systems:</strong> <code>PatientID &rarr; (BloodGroup, DOB)</code>, <code>DoctorID &rarr; Specialty</code>, <code>(PatientID, DoctorID, Date) &rarr; Diagnosis</code>. Accurate FDs prevent prescribing errors.<br>• <strong>2. E-Commerce Billing:</strong> <code>(ZipCode) &rarr; (State, City, TaxRate)</code>. Prevents fraudulent invoice tax computations."
  },
  {
    id: 192,
    q: "192. How do functional dependencies impact database design and query optimization?",
    category: "Functional Dependencies",
    ans: "• <strong>Database Design:</strong> Guides lossless-join, dependency-preserving table decomposition.<br>• <strong>Query Optimization:</strong> FDs inform query optimizers that certain joins are guaranteed to return unique rows ($1:1$ or $1:N$), enabling join elimination and predicate simplification."
  },
  {
    id: 193,
    q: "193. Describe how database systems utilize functional dependencies for data manipulation and storage.",
    category: "Functional Dependencies",
    ans: "• <strong>Storage Compaction:</strong> Normalized schemas derived from FDs avoid duplicating wide string attributes.<br>• <strong>Fast Unique Indexing:</strong> Candidate keys discovered through FD analysis are automatically backed by unique B+ trees, speeding up point lookups."
  },
  {
    id: 194,
    q: "194. What are some challenges associated with determining functional dependencies in large, complex databases?",
    category: "Functional Dependencies",
    ans: "• <strong>1. Combinatorial Explosion:</strong> Exponential search space ($2^N$ attribute subsets) when analyzing relations with 50+ columns.<br>• <strong>2. Incomplete Data:</strong> A sample table instance may accidentally satisfy an FD that does not hold universally in the business domain.<br>• <strong>3. Evolving Business Rules:</strong> Business policy updates invalidate previously static FDs."
  },
  {
    id: 195,
    q: "195. Discuss the limitations of using functional dependencies as the sole basis for database normalization.",
    category: "Functional Dependencies",
    ans: "• <strong>Limitations:</strong> FDs only capture relationships between single values. They cannot express independent multi-valued facts (which require MVDs / 4NF), cyclic multi-table join dependencies (5NF), or real-world temporal and statistical constraints."
  },
  {
    id: 196,
    q: "196. How do you handle anomalies that may arise due to incorrect or incomplete functional dependency analysis?",
    category: "Functional Dependencies",
    ans: "• <strong>Remediation Steps:</strong><br>&nbsp;&nbsp;1. Conduct dependency re-discovery using data profiling tools.<br>&nbsp;&nbsp;2. Execute corrective schema migrations (decomposing or re-merging tables).<br>&nbsp;&nbsp;3. Deploy transactional migration scripts to clean contradictory duplicate rows before applying unique constraints."
  },

  // =========================================================================
  // 8. TRANSACTION MANAGEMENT, ACID & CONCURRENCY (Q197 - Q236)
  // =========================================================================
  {
    id: 197,
    q: "197. What is a transaction in the context of a database management system (DBMS)?",
    category: "Transactions & Concurrency",
    ans: "• <strong>Definition:</strong> A transaction is a sequence of one or more database operations (reads, writes, updates, deletes) treated as a single indivisible logical unit of work.<br>• <strong>Boundary Markers:</strong> Begins with <code>BEGIN TRANSACTION</code> and terminates explicitly with either <code>COMMIT</code> (permanent persistence) or <code>ROLLBACK</code> (complete reversion)."
  },
  {
    id: 198,
    q: "198. Explain the ACID properties of transactions and their significance.",
    category: "Transactions & Concurrency",
    ans: "• <strong>Atomicity:</strong> 'All or Nothing' — either all transaction operations are successfully executed and committed, or all modifications are undone on failure.<br>• <strong>Consistency:</strong> The database transitions from one valid state to another, strictly satisfying all schema constraints and business rules.<br>• <strong>Isolation:</strong> Concurrent transactions execute without mutual interference; uncommitted changes are hidden from other transactions.<br>• <strong>Durability:</strong> Once committed, updates persist permanently in non-volatile storage and survive power outages or system crashes."
  },
  {
    id: 199,
    q: "199. How does a DBMS ensure atomicity, consistency, isolation, and durability in transactions?",
    category: "Transactions & Concurrency",
    ans: "• <strong>Atomicity:</strong> Enforced via the <em>Undo Log / Write-Ahead Logging (WAL)</em> rollback mechanism.<br>• <strong>Consistency:</strong> Enforced by the DBMS compiler and constraint validation subsystem.<br>• <strong>Isolation:</strong> Enforced by the <em>Concurrency Control Manager</em> using Two-Phase Locking (2PL) or Multiversion Concurrency Control (MVCC).<br>• <strong>Durability:</strong> Enforced via the <em>Redo Log / WAL buffer flush</em> to non-volatile disk before commit confirmation."
  },
  {
    id: 200,
    q: "200. Describe the difference between a serial and concurrent transaction execution.",
    category: "Transactions & Concurrency",
    ans: "• <strong>Serial Execution:</strong> Transactions execute strictly one after another; transaction $T_2$ does not start until $T_1$ completely commits. Zero concurrency conflicts, but causes CPU under-utilization and poor throughput.<br>• <strong>Concurrent Execution:</strong> Operations from multiple transactions are interleaved across time. Maximizes CPU/disk utilization, but requires concurrency control to ensure serializability."
  },
  {
    id: 201,
    q: "201. What is a transaction log, and how is it used in DBMS?",
    category: "Transactions & Concurrency",
    ans: "• <strong>Definition:</strong> An append-only non-volatile sequential log file recording every state change (old before-image, new after-image) performed by transactions.<br>• <strong>Usage:</strong><br>&nbsp;&nbsp;1. <em>Undo Operations:</em> Rolls back uncommitted or aborted transactions.<br>&nbsp;&nbsp;2. <em>Redo Operations:</em> Re-applies committed changes that were still in volatile memory buffer pools when a crash occurred."
  },
  {
    id: 202,
    q: "202. Explain the purpose of transaction management in a DBMS.",
    category: "Transactions & Concurrency",
    ans: "• <strong>Core Purpose:</strong> To provide an abstraction of reliability and isolation to application programs. It guarantees that multi-user database access produces mathematically consistent outcomes while protecting against data corruption during unexpected hardware or software failures."
  },
  {
    id: 203,
    q: "203. What are the different states that a transaction can be in during its execution?",
    category: "Transactions & Concurrency",
    ans: "• <strong>1. Active:</strong> The initial execution state where read and write operations are being processed.<br>• <strong>2. Partially Committed:</strong> The state after the final operation has executed, but before changes are flushed to disk.<br>• <strong>3. Committed:</strong> Successfully completed; updates are written to WAL and made durable.<br>• <strong>4. Failed:</strong> Normal execution is halted due to hardware faults, constraint violations, or deadlocks.<br>• <strong>5. Aborted:</strong> The transaction has been rolled back and the database restored to its pre-transaction state.<br>• <strong>6. Terminated:</strong> The transaction has left the system completely."
  },
  {
    id: 204,
    q: "204. How does a DBMS ensure that transactions are executed reliably and efficiently?",
    category: "Transactions & Concurrency",
    ans: "• <strong>Reliability:</strong> Guaranteed through ACID compliance, Write-Ahead Logging (WAL), and periodic fuzzy checkpoints.<br>• <strong>Efficiency:</strong> Maintained using in-memory buffer pools, multiversion concurrency control (MVCC) allowing non-blocking reads, lock escalation, and group committing."
  },
  {
    id: 205,
    q: "205. Describe the role of locks and latches in transaction management.",
    category: "Transactions & Concurrency",
    ans: "• <strong>Locks:</strong> Logical synchronization mechanisms held for the duration of a transaction (managed by Lock Manager) to protect database logical objects (rows, tables, pages).<br>• <strong>Latches:</strong> Short-term low-level physical synchronization primitives (mutexes/spinlocks) held for microseconds to protect in-memory data structures (buffer pool page headers, hash index buckets)."
  },
  {
    id: 206,
    q: "206. What is a deadlock, and how does a DBMS handle deadlock situations?",
    category: "Transactions & Concurrency",
    ans: "• <strong>Deadlock:</strong> A cyclical state where transaction $T_1$ waits for a lock held by $T_2$, while $T_2$ waits for a lock held by $T_1$, resulting in permanent standstill.<br>• <strong>Handling Techniques:</strong><br>&nbsp;&nbsp;1. <em>Detection:</em> Background thread periodically builds a directed <strong>Wait-For Graph (WFG)</strong>; a cycle indicates deadlock. The DBMS aborts a 'victim' transaction.<br>&nbsp;&nbsp;2. <em>Prevention:</em> Timestamp schemes (<em>Wait-Die</em> and <em>Wound-Wait</em>) prevent cycles from ever forming.<br>&nbsp;&nbsp;3. <em>Timeout:</em> Aborts transactions waiting longer than a configured threshold (<code>lock_wait_timeout</code>)."
  },
  {
    id: 207,
    q: "207. How do you handle transaction rollback and commit operations?",
    category: "Transactions & Concurrency",
    ans: "• <strong>Commit:</strong> Writes commit record to log, flushes log buffer to non-volatile disk, releases all acquired locks, and notifies client of success.<br>• <strong>Rollback:</strong> Reads transaction log backward, reverses every modified data item using logged before-images, releases locks, and marks transaction as aborted."
  },
  {
    id: 208,
    q: "208. What is concurrency control, and why is it important in transaction management?",
    category: "Transactions & Concurrency",
    ans: "• <strong>Definition:</strong> The management of simultaneous operations on a database by multiple concurrent transactions without conflict.<br>• <strong>Importance:</strong> Prevents concurrency anomalies: Lost Updates, Dirty Reads (Uncommitted Dependency), Inconsistent Analysis (Non-Repeatable Reads), and Phantom Reads."
  },
  {
    id: 209,
    q: "209. Explain the difference between pessimistic and optimistic concurrency control.",
    category: "Transactions & Concurrency",
    ans: "• <strong>Pessimistic Concurrency Control:</strong> Assumes conflicts will occur frequently. Acquires exclusive/shared locks <em>before</em> accessing data, blocking competitors until completion (e.g. 2PL). Ideal for write-heavy, high-contention environments.<br>• <strong>Optimistic Concurrency Control (OCC):</strong> Assumes conflicts are rare. Allows reads and writes without locking in private workspaces; validates for conflicts at commit time. If conflicted, rolls back and restarts. Ideal for read-heavy workloads."
  },
  {
    id: 210,
    q: "210. How do you implement locking mechanisms for concurrency control in a DBMS?",
    category: "Transactions & Concurrency",
    ans: "• <strong>Lock Types:</strong> Shared Lock (<code>S-Lock</code>, Read) allows multiple concurrent readers; Exclusive Lock (<code>X-Lock</code>, Write) grants sole access to one writer.<br>• <strong>Lock Table:</strong> In-memory hash table tracking lock requests and granted queues.<br>• <strong>Multiple Granularity Locking:</strong> Intention locks (<code>IS</code>, <code>IX</code>, <code>SIX</code>) set at database, table, and page levels before locking individual rows."
  },
  {
    id: 211,
    q: "211. Describe the concept of two-phase locking (2PL) and its role in concurrency control.",
    category: "Transactions & Concurrency",
    ans: "• <strong>Two Phases:</strong><br>&nbsp;&nbsp;1. <em>Growing Phase:</em> Transaction may acquire locks, but cannot release any lock.<br>&nbsp;&nbsp;2. <em>Shrinking Phase:</em> Releasing the first lock signals the start of shrinking; transaction can only release locks, never acquire new ones.<br>• <strong>Guaranteed Property:</strong> 2PL mathematically guarantees <strong>Conflict Serializability</strong>.<br>• <strong>Strict 2PL:</strong> Holds all exclusive locks until commit/rollback to prevent cascading aborts."
  },
  {
    id: 212,
    q: "212. What is a transaction isolation level, and how does it affect concurrency?",
    category: "Transactions & Concurrency",
    ans: "• <strong>Definition:</strong> An ANSI SQL standard setting that defines the degree to which one transaction must be isolated from modifications made by other concurrent transactions.<br>• <strong>Impact:</strong> Lower isolation increases concurrent throughput and decreases lock contention, but exposes transactions to read anomalies."
  },
  {
    id: 213,
    q: "213. Explain the different isolation levels supported by most DBMSs.",
    category: "Transactions & Concurrency",
    ans: "• <strong>1. Read Uncommitted:</strong> Lowest level. Allows dirty reads, non-repeatable reads, and phantoms.<br>• <strong>2. Read Committed:</strong> Prevents dirty reads. Reads see only committed data (uses snapshot per statement).<br>• <strong>3. Repeatable Read:</strong> Prevents dirty and non-repeatable reads. Repeated queries within transaction return identical values.<br>• <strong>4. Serializable:</strong> Highest level. Prevents all anomalies (dirty read, non-repeatable read, phantom read), simulating serial execution."
  },
  {
    id: 214,
    q: "214. What are the trade-offs between different isolation levels in terms of consistency and concurrency?",
    category: "Transactions & Concurrency",
    ans: "• <strong>Trade-off Matrix:</strong><br>&nbsp;&nbsp;• <em>Read Committed:</em> High concurrency, fast throughput, but queries reading the same row twice may see altered data.<br>&nbsp;&nbsp;• <em>Serializable:</em> Total consistency and safety, but incurs significant locking overhead, aborts, and lower transactions per second (TPS)."
  },
  {
    id: 215,
    q: "215. How does a DBMS ensure the isolation property for each isolation level?",
    category: "Transactions & Concurrency",
    ans: "• <strong>Lock-Based Engines:</strong> Vary lock retention times (short-term read locks released immediately vs long-term read locks held until commit).<br>• <strong>MVCC Engines (PostgreSQL/MySQL InnoDB):</strong> Maintains undo log record versions. Assigns transaction read views: statement-level read view for <em>Read Committed</em>; transaction-start read view for <em>Repeatable Read</em>."
  },
  {
    id: 216,
    q: "216. Can you provide examples of scenarios where different isolation levels would be appropriate?",
    category: "Transactions & Concurrency",
    ans: "• <strong>Read Uncommitted:</strong> Fast approximate counts, logging dashboards, telemetry analytics.<br>• <strong>Read Committed:</strong> General CRUD web apps, e-commerce product browsing.<br>• <strong>Repeatable Read:</strong> Generating multi-table end-of-day financial reconciliation reports.<br>• <strong>Serializable:</strong> Core banking transfers, flight seat reservation, and inventory allocation."
  },
  {
    id: 217,
    q: "217. Describe the process of transaction recovery in a DBMS.",
    category: "Transactions & Concurrency",
    ans: "• <strong>Standard Algorithm (ARIES):</strong><br>&nbsp;&nbsp;1. <em>Analysis Phase:</em> Scans log forward from last checkpoint to determine active transactions and dirty pages at crash time.<br>&nbsp;&nbsp;2. <em>Redo Phase:</em> Replays all logged changes forward from the oldest unwritten page to restore the database to the exact state at failure.<br>&nbsp;&nbsp;3. <em>Undo Phase:</em> Scans log backward, rolling back all active (uncommitted) transactions."
  },
  {
    id: 218,
    q: "218. What is a checkpoint, and how does it help in transaction recovery?",
    category: "Transactions & Concurrency",
    ans: "• <strong>Definition:</strong> A snapshot record written into the log when the DBMS flushes all modified in-memory dirty buffer pages to persistent disk.<br>• <strong>Recovery Benefit:</strong> Limits recovery log scanning time. The recovery manager does not need to process log records prior to the checkpoint, dramatically speeding up system restart."
  },
  {
    id: 219,
    q: "219. Explain the role of the transaction log in recovery operations.",
    category: "Transactions & Concurrency",
    ans: "• <strong>Sole Source of Truth:</strong> When RAM contents are wiped during a crash, the log provides before-images (to undo uncommitted partial transactions) and after-images (to redo committed transactions whose memory pages were not yet written to disk)."
  },
  {
    id: 220,
    q: "220. How does a DBMS handle system crashes during transaction execution?",
    category: "Transactions & Concurrency",
    ans: "• <strong>On Restart:</strong> DBMS initiates crash recovery automatically before accepting new connections.<br>• <strong>Execution:</strong> Redoes all committed work that had not yet reached disk; undoes all uncommitted work, releasing lingering locks and restoring consistent database state."
  },
  {
    id: 221,
    q: "221. Can you explain the difference between forward and backward recovery techniques?",
    category: "Transactions & Concurrency",
    ans: "• <strong>Forward Recovery (Redo):</strong> Uses the log after-images to re-apply committed modifications that were lost from volatile memory during a failure.<br>• <strong>Backward Recovery (Undo):</strong> Uses log before-images to reverse uncommitted modifications made by aborted or interrupted transactions."
  },
  {
    id: 222,
    q: "222. What are distributed transactions, and how do they differ from local transactions?",
    category: "Transactions & Concurrency",
    ans: "• <strong>Local Transaction:</strong> Operates entirely on a single database server managed by a single transaction coordinator.<br>• <strong>Distributed Transaction:</strong> Executes across two or more independent database instances or servers over a network. Requires coordination protocols (2PC) to ensure atomicity across all nodes."
  },
  {
    id: 223,
    q: "223. Describe the challenges associated with managing distributed transactions.",
    category: "Transactions & Concurrency",
    ans: "• <strong>Challenges:</strong> Network partitioning (split-brain), independent node crashes, latency amplification, clock drift across distributed nodes, and blocking coordinator failures."
  },
  {
    id: 224,
    q: "224. How do you ensure atomicity and consistency in distributed transactions?",
    category: "Transactions & Concurrency",
    ans: "• <strong>Atomic Commitment Protocols:</strong> Standardized on the <strong>Two-Phase Commit (2PC)</strong> or <strong>Three-Phase Commit (3PC)</strong> protocols paired with distributed consensus engines (Raft, Paxos)."
  },
  {
    id: 225,
    q: "225. Explain the role of distributed locks in ensuring data integrity across multiple sites.",
    category: "Transactions & Concurrency",
    ans: "• <strong>Role:</strong> Prevents competing microservices or database shards from modifying the same business entity simultaneously.<br>• <strong>Implementation:</strong> Managed by distributed lock services (Chubby, ZooKeeper, etcd, Redis Redlock) using leases and monotonic fencing tokens."
  },
  {
    id: 226,
    q: "226. What is a two-phase commit protocol, and how does it work in distributed transactions?",
    category: "Transactions & Concurrency",
    ans: "• <strong>Coordinator & Cohorts:</strong><br>&nbsp;&nbsp;1. <em>Phase 1 (Prepare):</em> Coordinator sends <code>PREPARE</code> to all cohorts. Cohorts execute operations, flush WAL, and vote <code>VOTE_COMMIT</code> or <code>VOTE_ABORT</code>.<br>&nbsp;&nbsp;2. <em>Phase 2 (Commit/Rollback):</em> If ALL cohorts voted commit, Coordinator writes commit record and sends <code>GLOBAL_COMMIT</code>; if any cohort voted abort, Coordinator sends <code>GLOBAL_ABORT</code>."
  },
  {
    id: 227,
    q: "227. How can you optimize transaction processing for better performance?",
    category: "Transactions & Concurrency",
    ans: "• <strong>1. Keep Transactions Short:</strong> Minimize operations held inside transaction blocks to release locks immediately.<br>• <strong>2. Use Lower Isolation:</strong> Use Read Committed where appropriate.<br>• <strong>3. Lock Ordering:</strong> Access tables in consistent order across all transactions to eliminate deadlocks.<br>• <strong>4. Group Commit:</strong> Batch log flushes to disk across concurrent transactions."
  },
  {
    id: 228,
    q: "228. Describe the concept of transaction batching and its impact on performance.",
    category: "Transactions & Concurrency",
    ans: "• <strong>Concept:</strong> Combining multiple individual DML statements into a single transactional request.<br>• <strong>Impact:</strong> Reduces client-server network round-trips and replaces multiple sequential disk fsync calls with a single batch commit."
  },
  {
    id: 229,
    q: "229. What are the factors that affect transaction throughput and response time?",
    category: "Transactions & Concurrency",
    ans: "• <strong>Key Factors:</strong> Disk I/O latency (HDD vs NVMe SSD), buffer pool hit ratio, lock contention on hot rows, network round-trip times, and index maintenance overhead."
  },
  {
    id: 230,
    q: "230. Explain the role of indexing and caching in improving transaction performance.",
    category: "Transactions & Concurrency",
    ans: "• <strong>Indexing:</strong> Reduces row lock durations by finding target tuples in $O(\\log N)$ time, avoiding table-level locks.<br>• <strong>Caching (Buffer Pool):</strong> Serves read queries directly from RAM without disk I/O, allowing CPU cores to process transactions faster."
  },
  {
    id: 231,
    q: "231. How do you measure and monitor transaction performance in a DBMS?",
    category: "Transactions & Concurrency",
    ans: "• <strong>Metrics:</strong> Transactions Per Second (TPS), average query latency (p95, p99), lock wait duration, deadlock rate, and cache hit ratios (monitored via APM tools, Prometheus, and DBMS catalog views like <code>pg_stat_statements</code>)."
  },
  {
    id: 232,
    q: "232. Can you provide examples of real-world scenarios where transaction management is crucial?",
    category: "Transactions & Concurrency",
    ans: "• <strong>1. Banking:</strong> Account fund transfers (debit account A and credit account B atomically).<br>• <strong>2. Airline Booking:</strong> Reserving the last seat on a flight.<br>• <strong>3. E-Commerce Inventory:</strong> Deducting inventory only when credit card charge succeeds."
  },
  {
    id: 233,
    q: "233. How do e-commerce platforms utilize transactions to ensure data consistency and integrity?",
    category: "Transactions & Concurrency",
    ans: "• <strong>Checkout Workflow:</strong> Executes inside a transaction: checks product inventory &rarr; creates order record &rarr; charges customer payment gateway &rarr; decrements stock. If payment fails, the transaction rolls back the order and restores inventory."
  },
  {
    id: 234,
    q: "234. Describe how banking systems handle transactions to maintain accurate account balances.",
    category: "Transactions & Concurrency",
    ans: "• <strong>Double-Entry Bookkeeping:</strong> Enforces that every debit has an equal matching credit.<br>• <strong>Strict Serializable Isolation:</strong> Prevents race conditions (overdrafts) where two concurrent ATM withdrawals attempt to spend the same account balance simultaneously."
  },
  {
    id: 235,
    q: "235. What are some challenges unique to handling transactions in large-scale distributed systems?",
    category: "Transactions & Concurrency",
    ans: "• <strong>CAP Theorem Constraints:</strong> Inability to maintain strict Consistency and Availability during network partitions. Organizations often migrate to the <strong>Saga Pattern</strong> (compensating transactions) instead of distributed 2PC."
  },
  {
    id: 236,
    q: "236. How do social media platforms ensure data consistency and isolation in transactional operations?",
    category: "Transactions & Concurrency",
    ans: "• <strong>Hybrid Approach:</strong> Strict ACID transactions for critical user account credentials and billing; <strong>Eventual Consistency (BASE)</strong> for likes, feed posts, follower counts, and comment counters to prioritize ultra-high write availability."
  },

  // =========================================================================
  // 9. UNSTRUCTURED DATABASES, NOSQL & MODERN TRENDS (Q237 - Q270)
  // =========================================================================
  {
    id: 237,
    q: "237. What is an unstructured database, and how does it differ from structured databases?",
    category: "NoSQL & Modern Trends",
    ans: "• <strong>Unstructured Database:</strong> A non-relational database engineered to store, index, and query data that does not fit neatly into rigid tabular schemas (e.g. text documents, media files, log streams, sensor data).<br>• <strong>Difference:</strong> Structured databases enforce rigid schemas upfront (Schema-on-Write); unstructured databases store raw or self-describing formats (Schema-on-Read)."
  },
  {
    id: 238,
    q: "238. Can you provide examples of unstructured data formats commonly stored in unstructured databases?",
    category: "NoSQL & Modern Trends",
    ans: "• <strong>Formats:</strong> JSON/BSON documents, XML/YAML files, PDF documents, raw text files, audio/video media files, social media posts, email bodies, server system log dumps."
  },
  {
    id: 239,
    q: "239. Explain the challenges associated with managing and querying unstructured data compared to structured data.",
    category: "NoSQL & Modern Trends",
    ans: "• <strong>Challenges:</strong> Lack of uniform schema prevents standard SQL operations; searching requires compute-heavy inverted indexing and full-text search; high storage overhead; difficulty defining referential integrity."
  },
  {
    id: 240,
    q: "240. How do unstructured databases handle schema flexibility and schema evolution?",
    category: "NoSQL & Modern Trends",
    ans: "• <strong>Schema-less Design:</strong> Each document or record is self-describing and can introduce new attributes independently without executing table-blocking <code>ALTER TABLE</code> migration statements."
  },
  {
    id: 241,
    q: "241. Describe the storage mechanism used in unstructured databases.",
    category: "NoSQL & Modern Trends",
    ans: "• <strong>Storage Engines:</strong> Utilize <strong>LSM-Trees (Log-Structured Merge-Trees)</strong> for sequential append-only writes (Cassandra, RocksDB), document storage engines (WiredTiger in MongoDB), and object storage blobs (Amazon S3)."
  },
  {
    id: 242,
    q: "242. How do you efficiently retrieve and query unstructured data from an unstructured database?",
    category: "NoSQL & Modern Trends",
    ans: "• <strong>Retrieval Methods:</strong> Key-based direct lookups, document property path filtering, full-text inverted indexes, vector embedding similarity searches (Cosine, k-NN), and distributed MapReduce/aggregation pipelines."
  },
  {
    id: 243,
    q: "243. Explain the role of indexing in unstructured databases and its impact on retrieval performance.",
    category: "NoSQL & Modern Trends",
    ans: "• <strong>Inverted Indexes:</strong> Maps every distinct word/token to the list of documents containing it.<br>• <strong>Impact:</strong> Enables sub-second full-text searching across millions of documents without scanning raw content (e.g. Elasticsearch, Apache Lucene)."
  },
  {
    id: 244,
    q: "244. Can you discuss the trade-offs between different storage and retrieval techniques for unstructured data?",
    category: "NoSQL & Modern Trends",
    ans: "• <strong>Trade-offs:</strong><br>&nbsp;&nbsp;• <em>Full Inverted Indexing:</em> Rapid search vs massive memory and storage index size.<br>&nbsp;&nbsp;• <em>LSM-Trees:</em> Blazing write throughput vs background compaction overhead and slower point reads."
  },
  {
    id: 245,
    q: "245. What are some common methods for querying unstructured databases?",
    category: "NoSQL & Modern Trends",
    ans: "• <strong>Query Methods:</strong> RESTful HTTP APIs, JSON query operators (MongoDB Query Language - MQL), GraphQL, text query DSLs (Lucene syntax), and vector similarity search queries."
  },
  {
    id: 246,
    q: "246. Explain the concept of full-text search and how it is implemented in unstructured databases.",
    category: "NoSQL & Modern Trends",
    ans: "• <strong>Concept:</strong> Searching free-form text documents based on keywords, fuzzy matching, and relevance ranking.<br>• <strong>Implementation:</strong> Tokenization &rarr; Stop-word removal &rarr; Stemming/Lemmatization &rarr; Inverted Index construction &rarr; BM25 scoring algorithm."
  },
  {
    id: 247,
    q: "247. How do you perform advanced analytics and data mining on unstructured data?",
    category: "NoSQL & Modern Trends",
    ans: "• <strong>Techniques:</strong> Natural Language Processing (NLP), Named Entity Recognition (NER), Topic Modeling (LDA), sentiment analysis, and embedding vectors into high-dimensional vector spaces for clustering."
  },
  {
    id: 248,
    q: "248. Describe the challenges associated with performing complex queries on unstructured data compared to structured data.",
    category: "NoSQL & Modern Trends",
    ans: "• <strong>Challenges:</strong> Inability to perform efficient mathematical joins across documents; ambiguous semantics in natural language text; unpredictable query response times."
  },
  {
    id: 249,
    q: "249. How do unstructured databases scale horizontally to handle large volumes of data?",
    category: "NoSQL & Modern Trends",
    ans: "• <strong>Sharding:</strong> Partitioning data across multiple server nodes using a Shard Key (Hash-based or Range-based). Queries are routed only to the nodes holding target partitions."
  },
  {
    id: 250,
    q: "250. What are some strategies for optimizing performance in unstructured databases?",
    category: "NoSQL & Modern Trends",
    ans: "• <strong>Strategies:</strong> Denormalize nested child data inside parent documents to avoid multi-document lookups; create compound indexes on frequently filtered fields; use read replicas."
  },
  {
    id: 251,
    q: "251. Explain how distributed computing techniques are used to improve scalability and performance in unstructured databases.",
    category: "NoSQL & Modern Trends",
    ans: "• <strong>Techniques:</strong> MapReduce distributed processing, masterless replication with quorum consensus (Dynamo style), and distributed query routers that aggregate partial results."
  },
  {
    id: 252,
    q: "252. Can you discuss the role of caching and replication in enhancing performance in unstructured databases?",
    category: "NoSQL & Modern Trends",
    ans: "• <strong>Caching:</strong> In-memory caches (Redis) serve hot documents directly.<br>• <strong>Replication:</strong> Spreading read requests across secondary replicas offloads the primary write node, boosting read throughput."
  },
  {
    id: 253,
    q: "253. How do you integrate unstructured data from different sources into an unstructured database?",
    category: "NoSQL & Modern Trends",
    ans: "• <strong>ETL / ELT Pipelines:</strong> Ingestion via message brokers (Apache Kafka, AWS Kinesis), log collectors (Logstash, Fluentd), and serverless webhook ingestors."
  },
  {
    id: 254,
    q: "254. Describe the process of transforming unstructured data into a structured format for analysis.",
    category: "NoSQL & Modern Trends",
    ans: "• <strong>Transformation Process:</strong> Parsing raw text/logs using regex or NLP &rarr; extracting key-value attributes &rarr; schema validation &rarr; loading into columnar formats (Parquet) in Data Lakes/Warehouses."
  },
  {
    id: 255,
    q: "255. What are some challenges associated with integrating and transforming unstructured data?",
    category: "NoSQL & Modern Trends",
    ans: "• <strong>Challenges:</strong> Handling corrupt or malformed inputs, drift in incoming data formats, character encoding mismatches, and massive compute costs of processing media."
  },
  {
    id: 256,
    q: "256. How do you ensure data security and privacy in unstructured databases?",
    category: "NoSQL & Modern Trends",
    ans: "• <strong>Security Controls:</strong> Field-Level Encryption (FLE), masking sensitive PII fields, Role-Based Access Control (RBAC), and automated auditing for compliance (GDPR, HIPAA)."
  },
  {
    id: 257,
    q: "257. What are some common security vulnerabilities associated with unstructured databases?",
    category: "NoSQL & Modern Trends",
    ans: "• <strong>Vulnerabilities:</strong> NoSQL Injection (manipulating JSON query filters), unauthenticated default database ports exposed to the public internet, and unencrypted backup snapshots."
  },
  {
    id: 258,
    q: "258. Explain the role of access control mechanisms in protecting unstructured data.",
    category: "NoSQL & Modern Trends",
    ans: "• <strong>Granular Permissions:</strong> Enforces collection-level and document-level authorization rules, ensuring authenticated users access only their own tenant partitions."
  },
  {
    id: 259,
    q: "259. How do unstructured databases handle schema evolution and versioning?",
    category: "NoSQL & Modern Trends",
    ans: "• <strong>Schema Versioning Pattern:</strong> Storing a <code>schema_version: 2</code> field inside documents. Application code contains backward-compatible adapter logic to parse older and newer document formats simultaneously."
  },
  {
    id: 260,
    q: "260. Can you discuss the challenges of maintaining backward compatibility when evolving the schema of unstructured data?",
    category: "NoSQL & Modern Trends",
    ans: "• <strong>Challenges:</strong> Legacy documents lacking newly required fields; complex application code branches; difficulty validating analytical queries across mixed-version datasets."
  },
  {
    id: 261,
    q: "261. What strategies can be used to manage schema changes in unstructured databases while minimizing disruption?",
    category: "NoSQL & Modern Trends",
    ans: "• <strong>Strategies:</strong> Dual-writing during migrations, background lazy document migration on read/update, providing default values for missing attributes in application domain entities."
  },
  {
    id: 262,
    q: "262. Can you provide examples of industries or use cases where unstructured databases are commonly used?",
    category: "NoSQL & Modern Trends",
    ans: "• <strong>Use Cases:</strong> E-Commerce (product catalogs), Media & Publishing (news articles, video metadata), Healthcare (clinical notes, radiology reports), Cyber Security (threat intelligence logs)."
  },
  {
    id: 263,
    q: "263. How do content management systems leverage unstructured databases to store and manage documents, images, and multimedia content?",
    category: "NoSQL & Modern Trends",
    ans: "• <strong>Architecture:</strong> Stores multimedia binaries in Object Storage (S3/GCS) while storing rich document JSON metadata, tags, and version history inside document stores (MongoDB/Firestore)."
  },
  {
    id: 264,
    q: "264. Explain how social media platforms utilize unstructured databases to store and analyze user-generated content.",
    category: "NoSQL & Modern Trends",
    ans: "• <strong>Storage:</strong> Posts, reactions, and media links are stored as schema-less documents in distributed wide-column stores (Cassandra) to support millions of concurrent writes with low latency."
  },
  {
    id: 265,
    q: "265. What are some challenges specific to healthcare or scientific research that can be addressed using unstructured databases?",
    category: "NoSQL & Modern Trends",
    ans: "• <strong>Addressed Challenges:</strong> Seamlessly ingests variable doctor clinical notes, genomic sequencing data, and DICOM imaging metadata without forcing them into rigid tabular relations."
  },
  {
    id: 266,
    q: "266. Can you discuss the role of unstructured databases in supporting natural language processing and sentiment analysis applications?",
    category: "NoSQL & Modern Trends",
    ans: "• <strong>Role:</strong> Stores raw text corpora alongside computed NLP vector embeddings, sentiment scores, and extracted entity tags for rapid analytical querying."
  },
  {
    id: 267,
    q: "267. What are some emerging technologies or trends that are shaping the future of unstructured databases?",
    category: "NoSQL & Modern Trends",
    ans: "• <strong>Emerging Trends:</strong> Vector Databases (Pinecone, Milvus, Qdrant) for Generative AI and RAG architectures, multi-model hybrid databases, and serverless auto-scaling document engines."
  },
  {
    id: 268,
    q: "268. How do advancements in machine learning and artificial intelligence impact the capabilities of unstructured databases?",
    category: "NoSQL & Modern Trends",
    ans: "• <strong>Impact:</strong> Native integration of vector indexing algorithms (HNSW, IVF) inside databases enables semantic similarity searching (finding documents with matching meaning rather than exact words)."
  },
  {
    id: 269,
    q: "269. Can you discuss the potential impact of blockchain technology on the evolution of unstructured databases?",
    category: "NoSQL & Modern Trends",
    ans: "• <strong>Impact:</strong> Verifiable, tamper-evident audit trails for document stores using cryptographic hashing (e.g. Amazon QLDB) for document provenance in legal and supply chain domains."
  },
  {
    id: 270,
    q: "270. What are some key areas of research or development in unstructured databases that you find promising?",
    category: "NoSQL & Modern Trends",
    ans: "• <strong>Promising Areas:</strong> Vector-native database engines powering Retrieval-Augmented Generation (RAG) for Large Language Models, unified multi-model DBMS (handling tables, documents, and graphs in a single engine), and automated AI-driven query tuning."
  }
];

if (typeof window !== 'undefined') {
  window.DBMS_FAQ_DATA = DBMS_FAQ_DATA;
}


