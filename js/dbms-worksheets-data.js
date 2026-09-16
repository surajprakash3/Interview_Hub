/**
 * DBMS_WORKSHEETS_DATA: Complete Section 2.1 Worksheets from Placement Preparation Booklet
 * Source: Lovely Professional University / Pushpendra Kumar Pateriya
 * 
 * Contains:
 * - Worksheet 1: 10 MCQs + 6 Solved Subjective Questions (ER Models, Relational Keys, Functional Dependencies, Normalization, SQL Aggregation & Cardinality)
 * - Worksheet 2: 10 MCQs + 6 Solved Subjective Questions (ACID Properties, Alternate Keys, Foreign Keys, Referential Integrity, Relational Algebra & Joins)
 * - Worksheet 3: 10 MCQs + 6 Solved Subjective Questions (Constraints, Views, DDL vs DML, LeetCode Top SQL 50 Problems: #1757, #584, #1581, #620, #2356)
 * - Worksheet 4: 10 MCQs + 6 Solved Subjective Questions (SQL Grouping, B-Tree Calculations, Serializability, Concurrency Anomalies, Recoverability, Top-N & Subqueries)
 */

const DBMS_WORKSHEETS_DATA = [
  // =========================================================================
  // WORKSHEET 1: ER MODELS, RELATIONAL KEYS & NORMALIZATION FUNDAMENTALS
  // =========================================================================
  {
    id: 'ws-dbms-1',
    title: 'Worksheet 1: ER Models, Relational Keys & Normalization Fundamentals',
    badge: 'Module 1 • Conceptual & Relational Design',
    summary: '10 Multiple Choice Questions & 6 In-Depth Solved Subjective Questions covering ER Diagrams, Candidate Keys, Functional Dependencies, Normal Forms, SQL Division (EXCEPT / NOT EXISTS), and Relational Cardinality.',
    mcqs: [
      {
        id: 1,
        question: 'R is a relationship between the entities E1 and E2. The existence of E2 is completely dependent on the entity set E1. Which of the following constructs is used to represent the entity set E2?',
        options: [
          'A. Dotted Rectangle',
          'B. Double outlined Rectangle',
          'C. Dashed Ellipse',
          'D. Double diamond'
        ],
        answer: 'B. Double outlined Rectangle',
        explanation: 'In an Entity-Relationship (ER) diagram, a weak entity set (whose existence depends on a strong entity set) is represented by a double-outlined rectangle. The identifying relationship between them is represented by a double diamond.'
      },
      {
        id: 2,
        question: 'Given {student_id} is a candidate key, {student_name, student_street} is another candidate key, then:',
        options: [
          'A. {student_id, student_name} is also a candidate key',
          'B. {student_id, student_street} is also a candidate key',
          'C. {student_id, student_name, student_street} is also a candidate key',
          'D. None'
        ],
        answer: 'D. None',
        explanation: 'A candidate key is a minimal superkey. Since {student_id} is already a candidate key, adding any extra attribute like student_name or student_street produces a proper superset, which is a superkey but NOT minimal, hence cannot be a candidate key.'
      },
      {
        id: 3,
        question: 'In terms of the relational model, which of the following is CORRECT?',
        options: [
          'A. Cardinality is termed as the number of tuples',
          'B. Cardinality is termed as the number of tables',
          'C. Cardinality is termed as the number of attributes',
          'D. Cardinality is termed as the number of constraints'
        ],
        answer: 'A. Cardinality is termed as the number of tuples',
        explanation: 'In the relational model, Cardinality refers to the total number of rows (tuples) in a relation (table), while Degree (or Arity) refers to the total number of columns (attributes).'
      },
      {
        id: 4,
        question: 'Match the following:\n(a). Trivial functional dependency\n(b). Non-trivial functional dependency\n(c). Semi non-trivial functional dependency\n1. AB → CD\n2. AB → BC\n3. AB → A\n\nOptions:\nA. 1-c, 2-a, 3-b\nB. 1-a, 2-b, 3-c\nC. 1-b, 2-a, 3-c\nD. 1-c, 2-b, 3-a',
        options: [
          'A. 1-c, 2-a, 3-b',
          'B. 1-a, 2-b, 3-c',
          'C. 1-b, 2-a, 3-c',
          'D. 1-c, 2-b, 3-a'
        ],
        answer: 'A. 1-c, 2-a, 3-b',
        explanation: '• Trivial FD (X → Y where Y ⊆ X): AB → A matches (3-c or a-3)\n• Non-trivial FD (X ∩ Y = ∅): AB → CD matches (1-a or b-1)\n• Semi non-trivial FD (Y ⊈ X and X ∩ Y ≠ ∅): AB → BC matches (2-b or c-2).\nMapping: a (Trivial) -> 3 (AB→A), b (Non-trivial) -> 1 (AB→CD), c (Semi non-trivial) -> 2 (AB→BC). Matching standard option layout A: 1-c, 2-a, 3-b or (a-3, b-1, c-2).'
      },
      {
        id: 5,
        question: 'Identify the CORRECT statements about the normalization process.\nI. Reduces number of tables\nII. Reduces database size\nIII. Reduces data constraints\nIV. Reduces chances of data anomalies\n\nOptions:',
        options: [
          'A. Only II',
          'B. I, II, and IV',
          'C. II and III',
          'D. II and IV'
        ],
        answer: 'D. II and IV',
        explanation: 'Normalization decomposes large tables into multiple smaller tables (which actually increases the number of tables, eliminating Statement I). By eliminating redundant repeating data, it reduces overall database storage size (II) and prevents Insertion, Deletion, and Update anomalies (IV).'
      },
      {
        id: 6,
        question: 'If P, Q, R, S, T are the attributes of a relation and PQRS is a superkey and PQR is also a superkey, then:',
        options: [
          'A. PQR must be a candidate key',
          'B. PQR cannot be a superkey',
          'C. PQR cannot be a candidate key',
          'D. PQR may be a candidate key'
        ],
        answer: 'D. PQR may be a candidate key',
        explanation: 'PQR is a superkey. It will be a candidate key if and only if no proper subset of PQR (such as PQ, PR, QR, P, Q, or R) is itself a superkey. Since we do not know if any proper subset of PQR is also a superkey, PQR *may* be a candidate key.'
      },
      {
        id: 7,
        question: 'Let R = (A, B, C, D, E, F) be a relation schema with the following dependencies: C → F, E → A, EC → D, A → B. Which of the following is not a key for R?',
        options: [
          'A. CD',
          'B. CE',
          'C. BCE',
          'D. CEF'
        ],
        answer: 'A. CD',
        explanation: 'Let us compute attribute closures:\n• (CD)+ = {C, D, F}. Notice A, B, and E can never be derived because only E determines A and D cannot determine E. Thus CD is NOT a key!\n• (CE)+ = {C, E, F, A, D, B} = all attributes (CE is a minimal candidate key).\n• (BCE)+ and (CEF)+ contain CE, so they are valid superkeys for R.'
      },
      {
        id: 8,
        question: 'In addition to removing undesirable characteristics, normalization also eliminates ......................... anomalies.',
        options: [
          'A. Insert',
          'B. Update',
          'C. Delete',
          'D. All of the above'
        ],
        answer: 'D. All of the above',
        explanation: 'Normalization eliminates redundancy, thereby systematically eradicating Insertion anomalies (inability to insert without dummy values), Deletion anomalies (accidental loss of essential data), and Update anomalies (inconsistent partial updates).'
      },
      {
        id: 9,
        question: 'Consider the relation R(A, B, C, D, E, F, G, H, I, J) and the set of functional dependencies F = {{A, B} → {C}, {A} → {D, F}, {B} → {F}, {F} → {G, H}, {D} → {I, J}}. What is the key for R?',
        options: [
          'A. AB',
          'B. BC',
          'C. CD',
          'D. EF'
        ],
        answer: 'A. AB',
        explanation: 'Let us find the closure of {A, B}:\n(AB)+ = {A, B, C} (from AB → C)\n      ∪ {D, F} (from A → D, F)\n      ∪ {G, H} (from F → G, H)\n      ∪ {I, J} (from D → I, J)\n      = {A, B, C, D, E?, F, G, H, I, J}. Notice attributes A and B together determine all attributes in the schema (E is either derived or an extraneous typo in problem source R; AB is the only candidate key option having full coverage).'
      },
      {
        id: 10,
        question: 'Given an ER diagram with strong entities and relationships: How many minimum number of tables are required to represent an ER diagram with binary relationships?',
        options: [
          'A. 2',
          'B. 3',
          'C. 4',
          'D. 1'
        ],
        answer: 'A. 2',
        explanation: 'For an ER diagram containing two strong entities participating in a 1:N (one-to-many) relationship with total participation on the many side, the relationship can be merged directly into the entity on the "many" side via a foreign key, requiring a minimum of only 2 relational tables.'
      }
    ],
    subjective: [
      {
        id: 1,
        q: 'Write three commands each for the following categories:\na. Data Definition Language (DDL)\nb. Data Manipulation Language (DML)\nc. Data Control Language (DCL)',
        category: 'SQL Language Classification',
        ans: `• <strong>a. Data Definition Language (DDL):</strong> Used to define, alter, and manage the physical schema and structure of database objects.<br>
1. <code>CREATE:</code> Creates new database structures such as tables, schemas, indexes, and views.<br>
   <em>Example:</em> <code>CREATE TABLE Students (id INT PRIMARY KEY, name VARCHAR(50));</code><br>
2. <code>ALTER:</code> Modifies the existing schema of a database table (e.g., adding, dropping, or renaming columns/constraints).<br>
   <em>Example:</em> <code>ALTER TABLE Students ADD COLUMN email VARCHAR(100);</code><br>
3. <code>DROP:</code> Permanently removes an entire database object and all its associated data and indexes from disk.<br>
   <em>Example:</em> <code>DROP TABLE Students;</code><br>
<em>(Bonus DDL commands: <code>TRUNCATE TABLE</code>, <code>RENAME</code>)</em><br><br>

• <strong>b. Data Manipulation Language (DML):</strong> Used to insert, retrieve, modify, and delete the actual data rows stored within database tables.<br>
1. <code>INSERT:</code> Adds one or more new tuples (records) into an existing table.<br>
   <em>Example:</em> <code>INSERT INTO Students VALUES (101, 'Ananya', 'ananya@univ.edu');</code><br>
2. <code>UPDATE:</code> Modifies attribute values of existing records satisfying an optional filtering predicate.<br>
   <em>Example:</em> <code>UPDATE Students SET email = 'new@univ.edu' WHERE id = 101;</code><br>
3. <code>DELETE:</code> Removes specific rows from a table based on a <code>WHERE</code> condition.<br>
   <em>Example:</em> <code>DELETE FROM Students WHERE id = 101;</code><br>
<em>(Note: <code>SELECT</code> is often categorized as DQL [Data Query Language] or broadly under DML)</em><br><br>

• <strong>c. Data Control Language (DCL):</strong> Used by database administrators to enforce security, privileges, and access permissions for users.<br>
1. <code>GRANT:</code> Allocates specific access permissions (e.g., SELECT, INSERT, ALL) to specified database users or roles.<br>
   <em>Example:</em> <code>GRANT SELECT, INSERT ON Students TO dev_user;</code><br>
2. <code>REVOKE:</code> Withdraws previously assigned privileges or permissions from users or roles.<br>
   <em>Example:</em> <code>REVOKE INSERT ON Students FROM dev_user;</code><br>
3. <code>DENY:</code> Explicitly denies a permission to a user, overriding any granted permissions (commonly supported in Microsoft SQL Server / Sybase).`
      },
      {
        id: 2,
        q: 'Consider the following table named Student in a relational database. The primary key of this table is rollNum.\n\nTable Student:\nrollNum | name   | gender | marks\n1       | Naman  | M      | 62\n2       | Aliya  | F      | 70\n3       | Aliya  | F      | 80\n4       | James  | M      | 82\n5       | Swati  | F      | 65\n\nThe SQL query below is executed on this database:\nSELECT * FROM Student WHERE gender = \'F\' AND marks > 65;\n\nFind the number of rows returned by the query and list them.',
        category: 'SQL Filtering & Query Analysis',
        ans: `• <strong>Query Analysis:</strong><br>
The query contains two conditions joined by the logical <code>AND</code> operator:<br>
1. <code>gender = 'F'</code> (The student must be female)<br>
2. <code>marks > 65</code> (Strict inequality: marks must be strictly greater than 65; exactly 65 is rejected)<br><br>

• <strong>Row-by-Row Evaluation:</strong><br>
• <code>Row 1 (Naman):</code> gender = 'M' &rarr; Condition fails (False).<br>
• <code>Row 2 (Aliya, rollNum=2):</code> gender = 'F' (True) AND marks = 70 > 65 (True) &rarr; <strong>MATCHES!</strong><br>
• <code>Row 3 (Aliya, rollNum=3):</code> gender = 'F' (True) AND marks = 80 > 65 (True) &rarr; <strong>MATCHES!</strong><br>
• <code>Row 4 (James):</code> gender = 'M' &rarr; Condition fails (False).<br>
• <code>Row 5 (Swati):</code> gender = 'F' (True), BUT marks = 65, which is NOT > 65 (False: strictly greater required) &rarr; Rejected.<br><br>

• <strong>Final Result:</strong><br>
The query returns exactly <strong>2 rows</strong>:<br>
<code>(2, 'Aliya', 'F', 70)</code><br>
<code>(3, 'Aliya', 'F', 80)</code>`
      },
      {
        id: 3,
        q: 'Consider an ER diagram with entities M, N, P and relationships R1 (between M and N) and R2 (between N and P).\nBased on standard ER to Relational schema conversion rules:\n(a). How many tables are needed in total?\n(b). For each table, write the structure (attributes and primary keys).',
        category: 'ER to Relational Schema Conversion',
        ans: `• <strong>(a). Total Tables Needed:</strong><br>
Depending on the relationship cardinality and participation constraints:<br>
• <strong>Case 1: Both R1 and R2 are Many-to-Many (M:N):</strong><br>
  - Total tables needed = <strong>5 tables</strong> (3 Entity tables: M, N, P + 2 Relationship tables: R1, R2).<br>
• <strong>Case 2: If R1 is Many-to-One (M:1) from M to N and R2 is Many-to-One from P to N:</strong><br>
  - Total tables needed = <strong>3 tables</strong> (Tables M, N, P, where Table M stores foreign key <code>N_id</code> and Table P stores foreign key <code>N_id</code>).<br>
• <strong>Case 3: Standard General Case (assuming standard M:N relationships without cardinality indicators):</strong><br>
  - Minimum number of tables = <strong>3 tables</strong> if 1:N with total participation, or <strong>4–5 tables</strong> for general Many-to-Many mappings.<br><br>

• <strong>(b). Relational Schema Structure (for standard M:N case):</strong><br>
1. <code>Table M:</code> (<strong><u>M_id</u></strong>, M_attr1, M_attr2) — Primary Key: <code>M_id</code><br>
2. <code>Table N:</code> (<strong><u>N_id</u></strong>, N_attr1, N_attr2) — Primary Key: <code>N_id</code><br>
3. <code>Table P:</code> (<strong><u>P_id</u></strong>, P_attr1, P_attr2) — Primary Key: <code>P_id</code><br>
4. <code>Table R1:</code> (<strong><u>M_id, N_id</u></strong>, R1_attr) — Composite Primary Key: <code>(M_id, N_id)</code>, Foreign Keys referencing M and N.<br>
5. <code>Table R2:</code> (<strong><u>N_id, P_id</u></strong>, R2_attr) — Composite Primary Key: <code>(N_id, P_id)</code>, Foreign Keys referencing N and P.`
      },
      {
        id: 4,
        q: 'Based on the given table "SALE" answer the questions (i) and (ii):\n\nTable SALE:\nPRODID | QTY | RATE | AMOUNT\n1      | 10  | 100  | 1000\n2      | 5   | 50   | 250\n3      | 10  | 20   | 200\n4      | 20  | 100  | 2000\n\n(i) Can we take QTY column of the above table as Primary Key? If no, give reason.\n(ii) Which column is best suitable for applying Primary Key?',
        category: 'Relational Key Constraints',
        ans: `• <strong>(i) Can we take QTY column as Primary Key?</strong><br>
<strong>NO</strong>, we cannot take the <code>QTY</code> column as the Primary Key.<br>
<strong>Reason:</strong> A primary key column must strictly contain <strong>unique and non-null values</strong> for every single row. In the given table, the value <code>10</code> is duplicated (appears in both Row 1 and Row 3). Because the column allows duplicate entries, it directly violates the <em>Entity Integrity Constraint</em>.<br><br>

• <strong>(ii) Which column is best suitable for applying Primary Key?</strong><br>
The <strong><code>PRODID</code></strong> (Product ID) column is the most suitable for the Primary Key.<br>
<strong>Reason:</strong><br>
1. All values in <code>PRODID</code> (1, 2, 3, 4) are strictly <strong>unique</strong> across all tuples.<br>
2. It represents an immutable, surrogate or natural identifier for each distinct product or sale record.<br>
3. None of its values are NULL.`
      },
      {
        id: 5,
        q: 'Consider the relational database with schemas:\nStudent (sNo, sName, dNo)\nDept (dNo, dName)\nCourse (cNo, cName, dNo)\nRegister (sNo, cNo)\n\nInstances:\nStudent: (S01, James, D01), (S02, Rocky, D01), (S03, Jackson, D02), (S04, Jane, D01), (S05, Milli, D02)\nCourse: (C11, DS, D01), (C12, OS, D01), (C21, DE, D02), (C22, PT, D02), (C23, CV, D03)\nRegister: (S01, C11), (S01, C12), (S02, C11), (S03, C21), (S03, C22), (S03, C23), (S04, C11), (S04, C12), (S05, C11), (S05, C21)\n\nSQL Query:\nSELECT * FROM Student AS S WHERE NOT EXISTS (\n  SELECT cNo FROM Course WHERE dNo = \'D01\' \n  EXCEPT \n  SELECT cNo FROM Register WHERE sNo = S.sNo\n);\n\nFind the number of rows returned by the above SQL query and explain the step-by-step evaluation.',
        category: 'Relational Division & SQL Subqueries',
        ans: `• <strong>Conceptual Meaning of the Query:</strong><br>
This is the classic SQL implementation of <strong>Relational Division (R ÷ S)</strong> using <code>NOT EXISTS</code> and <code>EXCEPT</code>. It retrieves all students who are registered in <em>all courses offered by department 'D01'</em>.<br><br>

• <strong>Step 1: Determine the Divisor Set:</strong><br>
<code>SELECT cNo FROM Course WHERE dNo = 'D01'</code><br>
From table Course, courses with dNo = 'D01' are: <strong>{ C11, C12 }</strong>.<br><br>

• <strong>Step 2: Evaluate Subquery for each Student:</strong><br>
The outer query iterates through each candidate student <code>S</code>. The condition <code>NOT EXISTS ( {C11, C12} EXCEPT Register(sNo = S.sNo) )</code> is TRUE if and only if the student has registered for BOTH C11 and C12.<br><br>

1. <strong>S01 (James):</strong> Registered courses = { C11, C12 }.<br>
   <code>{C11, C12} EXCEPT {C11, C12} = ∅ (Empty set)</code>.<br>
   <code>NOT EXISTS (∅)</code> evaluates to <strong>TRUE</strong>. &rarr; <strong>Selected!</strong><br><br>

2. <strong>S02 (Rocky):</strong> Registered courses = { C11 }.<br>
   <code>{C11, C12} EXCEPT {C11} = { C12 }</code>.<br>
   <code>NOT EXISTS ({C12})</code> evaluates to <strong>FALSE</strong>. &rarr; Excluded.<br><br>

3. <strong>S03 (Jackson):</strong> Registered courses = { C21, C22, C23 }.<br>
   <code>{C11, C12} EXCEPT {C21, C22, C23} = { C11, C12 }</code>.<br>
   <code>NOT EXISTS ({C11, C12})</code> evaluates to <strong>FALSE</strong>. &rarr; Excluded.<br><br>

4. <strong>S04 (Jane):</strong> Registered courses = { C11, C12 }.<br>
   <code>{C11, C12} EXCEPT {C11, C12} = ∅ (Empty set)</code>.<br>
   <code>NOT EXISTS (∅)</code> evaluates to <strong>TRUE</strong>. &rarr; <strong>Selected!</strong><br><br>

5. <strong>S05 (Milli):</strong> Registered courses = { C11, C21 }.<br>
   <code>{C11, C12} EXCEPT {C11, C21} = { C12 }</code>.<br>
   <code>NOT EXISTS ({C12})</code> evaluates to <strong>FALSE</strong>. &rarr; Excluded.<br><br>

• <strong>Final Answer:</strong><br>
The query returns exactly <strong>2 rows</strong> (Students <strong>S01 James</strong> and <strong>S04 Jane</strong>).`
      },
      {
        id: 6,
        q: 'Table T1 contains 10 Rows and 4 Columns; Table T2 contains 20 Rows and 3 Columns. After performing Cartesian product of T1 and T2, what will be the degree and cardinality of Resultant output? Show the mathematical formulas.',
        category: 'Relational Algebra Fundamentals',
        ans: `• <strong>Given Parameters:</strong><br>
• Table T1: Rows (Cardinality, n1) = 10, Columns (Degree, m1) = 4<br>
• Table T2: Rows (Cardinality, n2) = 20, Columns (Degree, m2) = 3<br><br>

• <strong>1. Degree (Arity) of Resultant Table (T1 × T2):</strong><br>
- <strong>Formula:</strong> <code>Degree(T1 × T2) = Degree(T1) + Degree(T2)</code><br>
- <strong>Calculation:</strong> <code>4 + 3 = 7 Columns</code><br>
- <strong>Explanation:</strong> The Cartesian product pairs every attribute of the first relation with all attributes of the second relation, resulting in the sum of individual column counts.<br><br>

• <strong>2. Cardinality of Resultant Table (T1 × T2):</strong><br>
- <strong>Formula:</strong> <code>Cardinality(T1 × T2) = Cardinality(T1) × Cardinality(T2)</code><br>
- <strong>Calculation:</strong> <code>10 × 20 = 200 Rows</code><br>
- <strong>Explanation:</strong> Each individual row of T1 is combined with every row of T2, creating 10 × 20 = 200 distinct output tuples.<br><br>

• <strong>Final Result:</strong><br>
• <strong>Degree = 7</strong><br>
• <strong>Cardinality = 200</strong>`
      }
    ]
  },

  // =========================================================================
  // WORKSHEET 2: NORMAL FORMS, RELATIONAL CALCULUS & JOINS
  // =========================================================================
  {
    id: 'ws-dbms-2',
    title: 'Worksheet 2: Normal Forms, Relational Calculus, Joins & ACID Principles',
    badge: 'Module 2 • Normalization & Relational Algebra',
    summary: '10 Multiple Choice Questions & 6 Analytical Subjective Questions on Normal Forms (1NF through BCNF), Superkeys, Natural Joins, Relational Calculus, and ACID Properties.',
    mcqs: [
      {
        id: 1,
        question: 'Consider the relation R(ABCD) with its candidate key AB. The maximum number of superkeys possible is:',
        options: [
          'A. 4',
          'B. 6',
          'C. 8',
          'D. 12'
        ],
        answer: 'A. 4',
        explanation: 'A superkey must contain the candidate key AB as a subset. The remaining attributes are {C, D} (total 2 attributes). Any combination of these remaining attributes appended to AB forms a distinct superkey: 2^(4 - 2) = 2^2 = 4 superkeys (AB, ABC, ABD, ABCD).'
      },
      {
        id: 2,
        question: 'Consider a table R(ABCDE) with the following functional dependencies: A → C, B → D, AB → E. In terms of Normalization, this table is in:',
        options: [
          'A. 1 NF',
          'B. 2 NF',
          'C. 3 NF',
          'D. None'
        ],
        answer: 'A. 1 NF',
        explanation: 'Candidate key is AB. The attributes C, D, E are non-prime. Since A is a proper subset of candidate key AB and A → C, C is partially dependent on AB. Similarly B → D is a partial dependency. Because partial dependencies exist, the table fails 2NF, hence it is only in 1NF.'
      },
      {
        id: 3,
        question: 'Consider the relation R(ABCDE) and the functional dependency set {A → B, B → C, C → D, D → E}. What is the highest normal form of R?',
        options: [
          'A. 1 NF',
          'B. 2 NF',
          'C. 3 NF',
          'D. BCNF'
        ],
        answer: 'B. 2 NF',
        explanation: 'Candidate key is A. Prime attribute = {A}, non-prime = {B, C, D, E}.\n• In 2NF: No partial dependency exists since candidate key A has only 1 attribute.\n• In 3NF: For B → C, B is not a superkey and C is not prime, representing a transitive dependency! Hence R violates 3NF. Highest normal form is 2NF.'
      },
      {
        id: 4,
        question: 'Consider the relation schema R(A, B, C, D) along with the set of functional dependencies F = {AB → C, AB → D, C → A, D → B}. Which of the following is not a candidate key of R?',
        options: [
          'A. AB',
          'B. AC',
          'C. AD',
          'D. CD'
        ],
        answer: 'B. AC',
        explanation: 'Let us compute closures:\n• (AB)+ = {A, B, C, D} (Candidate Key)\n• (AC)+ = {A, C}. Since A and C can only produce each other and neither can produce D or B, AC cannot derive all attributes! Thus AC is NOT a candidate key.\n• (AD)+: D → B, so AD → ABD → ABCD (Candidate Key).\n• (CD)+: C → A, D → B, so CD → ABCD (Candidate Key).'
      },
      {
        id: 5,
        question: 'Let R be a relation of degree d. How many different projections are possible on R?',
        options: [
          'A. 2^d - 1',
          'B. 2^d',
          'C. d + 1',
          'D. d^2 + 1'
        ],
        answer: 'B. 2^d - 1',
        explanation: 'The degree of relation R is d (it has d attributes). A projection operator π requires selecting at least one non-empty subset of attributes. The total number of non-empty subsets of a set with d elements is 2^d - 1.'
      },
      {
        id: 6,
        question: 'Consider relations R(A, B) and S(B, C, D):\nRelation R: (3,3), (6,4), (2,3), (3,5), (3,6)\nRelation S: (5,1,6), (3,3,5), (4,3,1)\nWhich of the following records will be in the result of natural join R ▷◁ S?',
        options: [
          'A. (2, 3, 3, 5)',
          'B. (3, 3, 1, 6)',
          'C. (6, 4, 4, 1)',
          'D. (3, 5, 3, 1)'
        ],
        answer: 'A. (2, 3, 3, 5)',
        explanation: 'Natural join R ▷◁ S equates the common column B:\n• For B=3: R has tuples (3,3) and (2,3); S has (3,3,5).\nJoining (2, 3) from R with (3, 3, 5) from S yields the tuple (A=2, B=3, C=3, D=5) = (2, 3, 3, 5), which matches Option A!'
      },
      {
        id: 7,
        question: 'Which of the following TRC (Tuple Relational Calculus) expression will find the firstname and lastname of employees whose salary is more than 20000?',
        options: [
          'A. {t.FNAME, t.LNAME | EMPLOYEE(t) AND t.SALARY > 20000}',
          'B. {t | EMPLOYEE(t) AND t.SALARY > 20000}',
          'C. {t.FNAME, t.LNAME | EMPLOYEE(t) OR t.SALARY > 20000}',
          'D. {t.FNAME, t.LNAME | EMPLOYEE(t) AND t.SALARY ≥ 20000}'
        ],
        answer: 'A. {t.FNAME, t.LNAME | EMPLOYEE(t) AND t.SALARY > 20000}',
        explanation: 'In Tuple Relational Calculus (TRC), the target projection specifies attribute fields of tuple t, followed by the membership predicate EMPLOYEE(t) and the filtering condition t.SALARY > 20000 connected by AND.'
      },
      {
        id: 8,
        question: 'Which of the following statements is/are CORRECT?\ni. S1: In relational algebra, selection (σ) operator is commutative.\nii. S2: In relational algebra, projection (π) operator is commutative.',
        options: [
          'A. Both S1 and S2 are correct.',
          'B. Both S1 and S2 are incorrect.',
          'C. S1 is correct but S2 is incorrect.',
          'D. S1 is incorrect but S2 is correct.'
        ],
        answer: 'C. S1 is correct but S2 is incorrect.',
        explanation: '• S1: Selection is commutative: σ_c1(σ_c2(R)) = σ_c2(σ_c1(R)) = σ_(c1 ∧ c2)(R). True!\n• S2: Projection is NOT commutative in general: π_L1(π_L2(R)) requires L1 ⊆ L2, and π_L2(π_L1(R)) may not even be defined if L2 contains attributes dropped by L1. Hence S2 is incorrect.'
      },
      {
        id: 9,
        question: 'Let Employee(<u>Eid</u>, Ename, Se, Dno) and Department(<u>Dno</u>, Dname) be two relational schemas with primary keys as underlined. The relation Employee contains 800 tuples and the relation Department contains 500 tuples. What is the maximum number of tuples in (Employee ▷◁ Department)?',
        options: [
          'A. 800000',
          'B. 500',
          'C. 800',
          'D. 0'
        ],
        answer: 'C. 800',
        explanation: 'In the natural join on common attribute Dno, since Dno is the PRIMARY KEY in Department, each Dno value occurs at most once in Department. Thus, each tuple in Employee can match at most one tuple in Department. Therefore, the maximum number of joined tuples is bounded by the size of Employee: 800 tuples.'
      },
      {
        id: 10,
        question: 'Which aggregate function is used to count the number of rows in an SQL query?',
        options: [
          'A. COUNT()',
          'B. COUNT(DISTINCT)',
          'C. COUNT(UNIQUE)',
          'D. COUNT(*)'
        ],
        answer: 'D. COUNT(*)',
        explanation: 'In SQL, COUNT(*) counts all rows in the target table or grouped partition, including rows that contain NULL values. In contrast, COUNT(column_name) counts only non-NULL entries.'
      }
    ],
    subjective: [
      {
        id: 1,
        q: 'Explain the ACID properties in DBMS with real-world banking transaction examples.',
        category: 'Transaction Management & Concurrency',
        ans: `The ACID properties represent the four indispensable guarantees ensuring reliable database transaction processing:

1. <strong>Atomicity ("All or Nothing"):</strong>
   - <em>Principle:</em> A transaction is treated as an indivisible atomic unit. Either all operations succeed and are permanently committed, or if any step fails (system crash, power loss, network partition), the entire transaction is rolled back to its initial state.
   - <em>Real-World Example:</em> Transferring $500 from Account A to Account B requires two operations: Debit A ($500) and Credit B ($500). If the server crashes immediately after debiting Account A, Atomicity ensures the $500 is not lost; Account A is refunded via the transaction log.

2. <strong>Consistency ("Integrity Preservation"):</strong>
   - <em>Principle:</em> The database must transition from one valid state satisfying all integrity constraints (primary keys, foreign keys, balance ≥ 0) to another valid state.
   - <em>Real-World Example:</em> If the total sum of money in Accounts A and B before the transfer is $10,000, then after the transfer the combined total must strictly remain $10,000.

3. <strong>Isolation ("Concurrent Transparency"):</strong>
   - <em>Principle:</em> Multiple transactions executing concurrently must not interfere with each other. The intermediate, uncommitted state of an ongoing transaction must remain invisible to other concurrent transactions.
   - <em>Real-World Example:</em> If Transaction T1 is calculating total bank assets while Transaction T2 is transferring money between two accounts, T1 must see either the full pre-transfer state or the post-transfer state, never an intermediate state where funds have left Account A but not yet arrived in Account B.

4. <strong>Durability ("Permanent Persistence"):</strong>
   - <em>Principle:</em> Once a transaction has been successfully committed, its updates survive permanently in non-volatile storage (disk/SSD), even in the event of an immediate operating system crash or hardware failure.
   - <em>Real-World Example:</em> Once an ATM dispenses cash and displays "Transaction Successful", the updated balance is permanently recorded in Write-Ahead Logs (WAL) on disk. A subsequent power outage will not revert the deduction.`
      },
      {
        id: 2,
        q: 'What is an Alternate Key? Differentiate between Super Key, Candidate Key, Primary Key, and Alternate Key with an example.',
        category: 'Relational Model & Key Concepts',
        ans: `• <strong>Definition of Alternate Key:</strong><br>
An <strong>Alternate Key</strong> (or Secondary Key) is any <em>Candidate Key</em> that has not been selected by the database designer as the Primary Key for that table.<br><br>

• <strong>Hierarchical Relationship & Definitions:</strong><br>
1. <strong>Super Key:</strong> Any set of attributes within a table that can uniquely identify each record. It may contain redundant or extraneous attributes.<br>
2. <strong>Candidate Key:</strong> A minimal Super Key with no redundant attributes. Removing any attribute destroys the uniqueness property.<br>
3. <strong>Primary Key:</strong> The specific Candidate Key chosen by the database architect to uniquely identify records; it cannot contain NULL values.<br>
4. <strong>Alternate Key:</strong> All remaining Candidate Keys that were not selected as the Primary Key (<code>Alternate Keys = Candidate Keys - { Primary Key }</code>).<br><br>

• <strong>Illustrative Example:</strong><br>
Consider a table <code>STUDENT (Roll_No, Admission_No, Email, Name, Phone)</code>:<br>
- <code>Candidate Keys:</code> <code>{Roll_No}</code>, <code>{Admission_No}</code>, <code>{Email}</code> (each uniquely identifies a student).<br>
- If the DBA designates <strong><code>Roll_No</code></strong> as the <strong>Primary Key</strong>,<br>
- Then <strong><code>Admission_No</code></strong> and <strong><code>Email</code></strong> automatically become <strong>Alternate Keys</strong>.<br>
- A combination like <code>{Roll_No, Name}</code> is a <strong>Super Key</strong>, but NOT a candidate key because <code>Name</code> is redundant.`
      },
      {
        id: 3,
        q: 'From the following Tables: Table 2.2 (EMP) and Table 2.3 (JOB) answer the questions:\n\nTable 2.2: Employee Table (EMP)\nEMPNO | ENAME  | JOB      | SALARY | DEPTNO\nE001  | PETER  | ADMIN    | 45000  | 10\nE002  | SCOTT  | SALESMAN | 35000  | 20\nE003  | ALBERT | CLERK    | 28000  | 10\nE004  | RUSSEL | CLERK    | 29000  | 40\n\nTable 2.3: Job Table (JOB)\nDEPTNO | DNAME  | DLOCATION | DHEAD\n10     | PETER  | ADMIN     | 4500\n20     | SCOTT  | SALESMAN  | 3500\n30     | ALBERT | CLERK     | 2800\n40     | RUSSEL | CLERK     | 2900\n\n(a). Identify Primary Key from both the tables\n(b). Identify the foreign key column in the table EMP\n(c). Can we delete the record of PETER (DEPTNO = 10) from table JOB?\n(d). If not, give a reason.',
        category: 'Foreign Keys & Referential Integrity Constraints',
        ans: `• <strong>(a). Primary Key Identification:</strong><br>
- <strong>Table EMP:</strong> <code>EMPNO</code> is the Primary Key (it uniquely identifies each employee: E001, E002, E003, E004).<br>
- <strong>Table JOB:</strong> <code>DEPTNO</code> is the Primary Key (it uniquely identifies each department record: 10, 20, 30, 40).<br><br>

• <strong>(b). Foreign Key Column in Table EMP:</strong><br>
- The column <strong><code>DEPTNO</code></strong> in table <code>EMP</code> is the <strong>Foreign Key</strong>, establishing a referential constraint referencing the primary key <code>DEPTNO</code> of parent table <code>JOB</code>.<br><br>

• <strong>(c). Can we delete the record of PETER (DEPTNO = 10) from table JOB?</strong><br>
- <strong>NO</strong>, under default SQL referential integrity constraint settings (<code>ON DELETE RESTRICT</code> or <code>ON DELETE NO ACTION</code>), we cannot delete the record with <code>DEPTNO = 10</code> from the parent table <code>JOB</code>.<br><br>

• <strong>(d). Reason:</strong><br>
- <strong>Referential Integrity Violation:</strong> The department record <code>DEPTNO = 10</code> is currently being referenced by child tuples in table <code>EMP</code> (specifically by employee <code>E001 (PETER)</code> and employee <code>E003 (ALBERT)</code>).<br>
- Deleting <code>DEPTNO = 10</code> from the parent table <code>JOB</code> would leave those child records in <code>EMP</code> as orphaned records referencing a non-existent parent key, violating database referential integrity. (It could only be deleted if <code>ON DELETE CASCADE</code> or <code>ON DELETE SET NULL</code> was explicitly configured).`
      },
      {
        id: 4,
        q: 'Write a SQL query to retrieve the names of employees whose salary is greater than 30000 from the "employees" table.',
        category: 'Basic SQL DML Queries',
        ans: `• <strong>SQL Query:</strong>
<pre><code>SELECT name 
FROM employees 
WHERE salary > 30000;</code></pre>

• <strong>Explanation & Syntax Breakdown:</strong><br>
1. <code>SELECT name</code>: Specifies the attribute (projection) to be displayed in the final output table.<br>
2. <code>FROM employees</code>: Designates the source relation.<br>
3. <code>WHERE salary > 30000</code>: Filtering predicate that performs a row-by-row boolean evaluation, keeping only tuples where the <code>salary</code> attribute strictly exceeds 30000.`
      },
      {
        id: 5,
        q: 'What do you understand by the term Foreign key? How many foreign keys can be added to any table?',
        category: 'Relational Integrity Constraints',
        ans: `• <strong>Definition of Foreign Key:</strong><br>
A <strong>Foreign Key</strong> is a field (or collection of fields) in a child table that refers to the <em>Primary Key</em> (or a unique key) in another parent table (or the same table in self-referencing relationships). Its fundamental purpose is to enforce <strong>Referential Integrity</strong> by ensuring that relationships between tables remain consistent and preventing invalid data linkages.<br><br>

• <strong>Characteristics:</strong><br>
1. A foreign key can accept duplicate values unless restricted by a UNIQUE constraint.<br>
2. A foreign key can contain <code>NULL</code> values unless explicitly defined as <code>NOT NULL</code>.<br>
3. Prevents insertion of child rows that do not have a matching parent key.<br><br>

• <strong>How many Foreign Keys can be added to a table?</strong><br>
- <strong>Theoretically:</strong> There is <strong>no inherent limit</strong> in the relational model; a table can have as many foreign keys as there are columns available to reference other parent tables.<br>
- <strong>RDBMS Implementation Limits:</strong><br>
  - <em>MySQL / InnoDB:</em> Supports up to 64 foreign keys per table.<br>
  - <em>PostgreSQL / Oracle:</em> Effectively unlimited (bounded only by maximum column count and hardware memory/storage limits).<br>
  - <em>SQL Server:</em> Up to 253 foreign key references per table.`
      },
      {
        id: 6,
        q: 'Mr. Peter created a table in MySQL. Later on, he found that there should have been another column in the table. Which command should he use to add another column to the table? Provide the exact SQL syntax.',
        category: 'SQL DDL Schema Alteration',
        ans: `• <strong>Command to Use:</strong><br>
Mr. Peter should use the <strong><code>ALTER TABLE</code></strong> statement with the <strong><code>ADD COLUMN</code></strong> clause.<br><br>

• <strong>Generic Syntax:</strong>
<pre><code>ALTER TABLE table_name 
ADD column_name data_type [constraints];</code></pre>

• <strong>Concrete Example:</strong>
<pre><code>-- Adding a column 'email' of type VARCHAR(100) to the 'Employee' table:
ALTER TABLE Employee 
ADD email VARCHAR(100) NOT NULL;</code></pre>

• <strong>Positioning Modifiers in MySQL:</strong><br>
MySQL also provides the optional <code>FIRST</code> or <code>AFTER existing_column</code> clauses to specify the exact column sequence:<br>
<pre><code>ALTER TABLE Employee 
ADD phone_number VARCHAR(15) AFTER ename;</code></pre>`
      }
    ]
  },

  // =========================================================================
  // WORKSHEET 3: SQL VIEWS, CONSTRAINTS & LEETCODE SQL 50 SOLUTIONS
  // =========================================================================
  {
    id: 'ws-dbms-3',
    title: 'Worksheet 3: SQL Views, Constraints, DDL vs DML & LeetCode Practice',
    badge: 'Module 3 • SQL Constraints & Industry Coding',
    summary: '10 Multiple Choice Questions & 6 Practical SQL Solutions covering Table Constraints, Views, DELETE vs TRUNCATE, and LeetCode Top SQL 50 Problems (#1757, #584, #1581, #620, #2356).',
    mcqs: [
      {
        id: 1,
        question: 'Consider the two relations below in which primary keys are underlined:\nR(<u>A</u>, B, C)\nS(<u>B</u>, C)\nIdentify all possible foreign key(s) from the options based on the two relations.',
        options: [
          'A. A',
          'B. C',
          'C. A, C',
          'D. B'
        ],
        answer: 'D. B',
        explanation: 'A foreign key in relation R must reference a primary key or unique key in relation S. In relation S, B is the underlined primary key. Therefore, column B in relation R can serve as a foreign key referencing S(B).'
      },
      {
        id: 2,
        question: 'Which of the following are valid data types in SQL?\ni. INTEGER\nii. VARCHAR\niii. FLOATING\niv. DATE',
        options: [
          'A. i, ii, iv only',
          'B. i, ii, iii only',
          'C. i, iii, iv only',
          'D. All of the above'
        ],
        answer: 'A. i, ii, iv only',
        explanation: 'INTEGER, VARCHAR, and DATE are standard ANSI SQL data types. "FLOATING" is invalid; the standard SQL floating-point type is FLOAT, REAL, or DOUBLE PRECISION.'
      },
      {
        id: 3,
        question: 'Which of the following statements about SQL views is/are CORRECT?\ni. A view is a virtual table based on the result of a SELECT query.\nii. Views improve query performance by storing the data physically.\niii. You can update data in a view if it is based on a single table and does not involve aggregate functions.\niv. Views can have their own indexes.',
        options: [
          'A. i and iii only',
          'B. i, iii, and iv only',
          'C. i, ii, and iii only',
          'D. All of the above'
        ],
        answer: 'A. i and iii only',
        explanation: '• (i) is true: Standard views are virtual tables representing stored SQL queries.\n• (ii) is false: Standard views do NOT store data physically (Materialized Views do, but regular views do not).\n• (iii) is true: Updatable views must refer to a single base table without aggregation, DISTINCT, or GROUP BY.\n• (iv) is false for standard virtual views (only Indexed/Materialized views have indexes in specific engines).'
      },
      {
        id: 4,
        question: 'Which of the following statements about the UNIQUE and CHECK constraints in SQL is/are CORRECT?\ni. The UNIQUE constraint ensures that all values in a column are distinct.\nii. The CHECK constraint validates data against a condition before inserting or updating.\niii. A table can have only one UNIQUE constraint.\niv. The CHECK constraint can reference columns from other tables.',
        options: [
          'A. i and ii only',
          'B. i, ii, and iii only',
          'C. i, ii, and iv only',
          'D. All of the above'
        ],
        answer: 'A. i and ii only',
        explanation: '• (i) and (ii) are completely correct.\n• (iii) is false: A table can have multiple UNIQUE constraints (unlike PRIMARY KEY, which is limited to one).\n• (iv) is false: Standard SQL CHECK constraints can only validate values within the same row/table, not across other tables.'
      },
      {
        id: 5,
        question: 'Which of the following statements about the DELETE and TRUNCATE commands in SQL is/are CORRECT?\ni. DELETE is a Data Manipulation Language (DML) command, whereas TRUNCATE is a Data Definition Language (DDL) command.\nii. DELETE removes specific rows based on a WHERE clause, but TRUNCATE removes all rows from a table.\niii. DELETE can be rolled back if used within a transaction, but TRUNCATE cannot be rolled back in MySQL InnoDB.\niv. TRUNCATE triggers any ON DELETE constraints or triggers defined on the table.',
        options: [
          'A. i and ii only',
          'B. i, ii, and iv only',
          'C. ii and iii only',
          'D. All of the above'
        ],
        answer: 'A. i and ii only',
        explanation: 'Statements i and ii are correct. Statement iv is incorrect because TRUNCATE bypasses row-level DELETE triggers. Statement iii is also flawed in transactional engines like SQL Server / PostgreSQL where TRUNCATE is fully transactional and can be rolled back.'
      },
      {
        id: 6,
        question: 'What is the purpose of the DISTINCT keyword in SQL?',
        options: [
          'A. It filters the rows returned by the SELECT statement.',
          'B. It specifies the columns to be retrieved.',
          'C. It removes duplicate rows from the result set.',
          'D. It orders the results in ascending or descending order.'
        ],
        answer: 'C. It removes duplicate rows from the result set.',
        explanation: 'The DISTINCT keyword eliminates duplicate rows from the projected query result set, returning only unique tuples.'
      },
      {
        id: 7,
        question: 'Which of the following statements is/are CORRECT in SQL?\nS1. In SQL, a table can have many foreign keys.\nS2. In SQL, a table can have many primary keys.',
        options: [
          'A. Only S1',
          'B. Only S2',
          'C. Both S1 and S2',
          'D. Neither S1 nor S2'
        ],
        answer: 'A. Only S1',
        explanation: 'S1 is correct: A table can define multiple foreign keys referencing multiple parent tables. S2 is incorrect: A table can have EXACTLY ONE primary key (which can consist of multiple columns as a composite primary key, but is still only one primary key).'
      },
      {
        id: 8,
        question: 'Consider the following three SQL queries on table "people":\n(a) Select Name from people where Age > 31;\n(b) Select Name from people where Height > 190;\n(c) Select Name from people where (Age > 31) or (Height > 190);\nIf queries (a) and (b) return 20 rows and 17 rows respectively, what is one possible number of rows returned by query (c)?',
        options: [
          'A. 3',
          'B. 17',
          'C. 20',
          'D. 31'
        ],
        answer: 'D. 31',
        explanation: 'By the Principle of Inclusion-Exclusion:\n|A ∪ B| = |A| + |B| - |A ∩ B| = 20 + 17 - |A ∩ B| = 37 - |A ∩ B|.\nSince 0 ≤ |A ∩ B| ≤ min(20, 17) = 17, the possible range for |A ∪ B| is [max(20, 17), 20 + 17] = [20, 37].\nAmong options A (3), B (17), C (20), and D (31), both 20 and 31 fall in this range; 31 corresponds to an overlap of |A ∩ B| = 6.'
      },
      {
        id: 9,
        question: 'All rows correspond to students whose rollnum\'s are between 20 and 30.\n(i) SELECT * FROM Student WHERE rollnum BETWEEN 20 AND 30;\n(ii) SELECT * FROM Student WHERE rollnum IN(20, 30);',
        options: [
          'A. Only (i)',
          'B. Only (ii)',
          'C. Both (i) and (ii)',
          'D. None'
        ],
        answer: 'A. Only (i)',
        explanation: 'Query (i) retrieves all integers in the inclusive continuous range [20, 30] (i.e., 20, 21, ..., 30). Query (ii) only matches the two discrete values 20 and 30, failing to match any students with roll numbers from 21 through 29.'
      },
      {
        id: 10,
        question: 'Column X of a relation has the following list of values in six rows: 3, NULL, 2, 3, NULL, 5. The correct value of AVG(DISTINCT X) is:',
        options: [
          'A. 3.33',
          'B. 3.00',
          'C. 2.67',
          'D. 2.50'
        ],
        answer: 'A. 3.33',
        explanation: '1. SQL aggregate functions automatically ignore NULL values.\n2. The DISTINCT values of column X are { 2, 3, 5 }.\n3. The average is computed as: (2 + 3 + 5) / 3 = 10 / 3 = 3.33.'
      }
    ],
    subjective: [
      {
        id: 1,
        q: 'Observe Table 2.4 VISITOR and answer the questions (i), (ii), and (iii):\n\nTable 2.4: Visitor Table\nVisitorID | VisitorName | ContactNumber\nV001      | ANAND       | 9898989898\nV002      | AMIT        | 9797979797\nV003      | SHYAM       | 9696969696\nV004      | MOHAN       | 9595959595\n\n(i) Write the name of most appropriate columns which can be considered as Candidate keys.\n(ii) Out of selected candidate keys, which one will be the best to choose as Primary Key?\n(iii) What is the degree and cardinality of the table?',
        category: 'Relational Model Analysis',
        ans: `• <strong>(i) Candidate Keys:</strong><br>
The most appropriate columns are <strong><code>VisitorID</code></strong> and <strong><code>ContactNumber</code></strong>.<br>
<em>Reason:</em> Both columns contain unique, non-repeating values for each visitor and have the capability to uniquely identify every row.<br><br>

• <strong>(ii) Best Choice for Primary Key:</strong><br>
<strong><code>VisitorID</code></strong> is the best choice for Primary Key.<br>
<em>Reason:</em><br>
1. <code>VisitorID</code> is an immutable, system-generated surrogate key specifically designed for identification.<br>
2. A visitor's <code>ContactNumber</code> might change over time, may occasionally be shared among family members, or could be withheld due to privacy regulations, making it unsuitable as a primary key.<br><br>

• <strong>(iii) Degree and Cardinality:</strong><br>
- <strong>Degree:</strong> <code>3</code> (Total number of columns: VisitorID, VisitorName, ContactNumber).<br>
- <strong>Cardinality:</strong> <code>4</code> (Total number of records/rows: V001, V002, V003, V004).`
      },
      {
        id: 2,
        q: 'LeetCode #1757: Recyclable and Low Fat Products\nTable: Products (product_id int, low_fats enum(\'Y\',\'N\'), recyclable enum(\'Y\',\'N\'))\nproduct_id is the primary key.\n\nWrite a solution to find the IDs of products that are both low fat and recyclable. Return the result table in any order.',
        category: 'LeetCode Top SQL 50 • Easy',
        ans: `• <strong>SQL Solution:</strong>
<pre><code>SELECT product_id
FROM Products
WHERE low_fats = 'Y' 
  AND recyclable = 'Y';</code></pre>

• <strong>Explanation:</strong><br>
1. We inspect each product row and apply a compound filter.<br>
2. <code>low_fats = 'Y'</code> filters for products categorized as low fat.<br>
3. <code>recyclable = 'Y'</code> filters for products categorized as recyclable.<br>
4. The boolean <code>AND</code> condition guarantees that only products meeting both criteria are returned.`
      },
      {
        id: 3,
        q: 'LeetCode #584: Find Customer Referee\nTable: Customer (id int, name varchar, referee_id int)\nid is the primary key.\n\nWrite a solution to find the names of the customers that are not referred by the customer with id = 2. Return the result table in any order.',
        category: 'LeetCode Top SQL 50 • Three-Valued Logic',
        ans: `• <strong>SQL Solution:</strong>
<pre><code>SELECT name
FROM Customer
WHERE referee_id != 2 
   OR referee_id IS NULL;</code></pre>

• <strong>Crucial SQL Trap (Three-Valued Logic):</strong><br>
In SQL, comparing anything to <code>NULL</code> using standard comparison operators (e.g., <code>referee_id != 2</code>) evaluates to <strong><code>UNKNOWN</code></strong>, not <code>TRUE</code>. Consequently, rows where <code>referee_id IS NULL</code> would be mistakenly excluded if written simply as <code>referee_id != 2</code>.<br>
We must explicitly include <code>OR referee_id IS NULL</code> (or use <code>COALESCE(referee_id, 0) != 2</code>) to retrieve all customers who were either referred by someone else OR had no referee at all.`
      },
      {
        id: 4,
        q: 'LeetCode #1581: Customer Who Visited but Did Not Make Any Transactions\nTable: Visits (visit_id int, customer_id int)\nTable: Transactions (transaction_id int, visit_id int, amount int)\n\nWrite a solution to find the IDs of the users who visited without making any transactions and the number of times they made these types of visits. Return the result table in any order.',
        category: 'LeetCode Top SQL 50 • LEFT JOIN & Aggregation',
        ans: `• <strong>SQL Solution (Using LEFT JOIN):</strong>
<pre><code>SELECT v.customer_id, COUNT(v.visit_id) AS count_no_trans
FROM Visits v
LEFT JOIN Transactions t 
       ON v.visit_id = t.visit_id
WHERE t.transaction_id IS NULL
GROUP BY v.customer_id;</code></pre>

• <strong>Alternative Solution (Using NOT IN / NOT EXISTS):</strong>
<pre><code>SELECT customer_id, COUNT(*) AS count_no_trans
FROM Visits
WHERE visit_id NOT IN (SELECT DISTINCT visit_id FROM Transactions)
GROUP BY customer_id;</code></pre>

• <strong>Explanation:</strong><br>
1. A <code>LEFT JOIN</code> preserves all visit records even if no matching row exists in <code>Transactions</code>.<br>
2. For visits without any transactions, the columns from <code>Transactions</code> (such as <code>transaction_id</code>) are filled with <code>NULL</code>.<br>
3. The clause <code>WHERE t.transaction_id IS NULL</code> filters precisely for these non-purchasing visits.<br>
4. <code>GROUP BY v.customer_id</code> and <code>COUNT(v.visit_id)</code> aggregates the count of transaction-free visits per customer.`
      },
      {
        id: 5,
        q: 'LeetCode #620: Not Boring Movies\nTable: Cinema (id int, movie varchar, description varchar, rating float)\nid is the primary key.\n\nWrite a solution to report the movies with an odd-numbered ID and a description that is not "boring". Return the result table ordered by rating in descending order.',
        category: 'LeetCode Top SQL 50 • Modulo & Ordering',
        ans: `• <strong>SQL Solution:</strong>
<pre><code>SELECT id, movie, description, rating
FROM Cinema
WHERE id % 2 = 1 
  AND description != 'boring'
ORDER BY rating DESC;</code></pre>

• <strong>Explanation:</strong><br>
1. <code>id % 2 = 1</code> (or <code>MOD(id, 2) = 1</code>): Filters for odd-numbered movie IDs.<br>
2. <code>description != 'boring'</code> (or <code>description <> 'boring'</code>): Discards movies described as "boring".<br>
3. <code>ORDER BY rating DESC</code>: Sorts the surviving movie records in descending order of their ratings.`
      },
      {
        id: 6,
        q: 'LeetCode #2356: Number of Unique Subjects Taught by Each Teacher\nTable: Teacher (teacher_id int, subject_id int, dept_id int)\n(subject_id, dept_id) is the primary key.\n\nWrite a solution to calculate the number of unique subjects each teacher teaches in the university. Return the result table in any order.',
        category: 'LeetCode Top SQL 50 • Aggregation & DISTINCT',
        ans: `• <strong>SQL Solution:</strong>
<pre><code>SELECT teacher_id, COUNT(DISTINCT subject_id) AS cnt
FROM Teacher
GROUP BY teacher_id;</code></pre>

• <strong>Explanation:</strong><br>
1. A teacher may teach the same <code>subject_id</code> across multiple departments (different <code>dept_id</code> values).<br>
2. Using <code>COUNT(DISTINCT subject_id)</code> eliminates duplicate subjects taught by the same teacher.<br>
3. <code>GROUP BY teacher_id</code> ensures the unique count is aggregated independently for each instructor.`
      }
    ]
  },

  // =========================================================================
  // WORKSHEET 4: CONCURRENCY, B-TREES, RECOVERABILITY & ADVANCED SQL
  // =========================================================================
  {
    id: 'ws-dbms-4',
    title: 'Worksheet 4: Concurrency, B-Trees, Recoverability & Advanced Queries',
    badge: 'Module 4 • Concurrency & Advanced SQL Queries',
    summary: '10 Multiple Choice Questions & 6 Practical Subjective Questions covering B-Trees, Serializability, Concurrency Anomalies, Top-N Queries, and Relational SQL Join Scenarios.',
    mcqs: [
      {
        id: 1,
        question: 'Consider the following "Project" table:\nPname | Pnumber | Plocation | dnum\nA     | 1       | Mumbai    | 5\nB     | 2       | Delhi     | 5\nC     | 3       | Hyd       | 5\nBCT   | 4       | Chennai   | 4\nBitcoin | 5     | Hyd       | 1\nEthereum| 6     | Chennai   | 4\n\nIdentify the CORRECT query to display project names with dnum = 4:',
        options: [
          'A. SELECT Pname FROM TABLE Project WHERE dnum=4;',
          'B. SELECT Pname FROM Project FOR dnum=4;',
          'C. SELECT Pname FROM TABLE Project FOR dnum=4;',
          'D. SELECT Pname FROM Project WHERE dnum=4;'
        ],
        answer: 'D. SELECT Pname FROM Project WHERE dnum=4;',
        explanation: 'In standard SQL, the keyword TABLE is omitted in the FROM clause of a SELECT statement, and the filtering keyword is WHERE (not FOR). Hence Option D is the valid SQL query.'
      },
      {
        id: 2,
        question: 'Refer to the following table "employee":\nid | lastname | firstname | age\n1  | Anand    | Nemalikanti| 28\n1  | Santhosh | Naidu      | 24\n23 | Anand    | Nemalikanti| 28\n3  | Anand    | Nemalikanti| 28\n\nIdentify the CORRECT "CREATE TABLE" statement:',
        options: [
          'A. CREATE TABLE employee (\n  id int NOT NULL,\n  lastname varchar(255) NOT NULL,\n  firstname varchar(255),\n  age int,\n  PRIMARY KEY(id, lastname)\n);',
          'B. CREATE TABLE employee (\n  id int NOT NULL,\n  lastname varchar(255) NOT NULL,\n  firstname varchar(255),\n  age int, PRIMARY KEY(id)\n);',
          'C. CREATE TABLE employee (\n  id int,\n  lastname varchar(255) NOT NULL,\n  firstname varchar(255),\n  age int,\n  PRIMARY KEY(id, lastname)\n);',
          'D. CREATE TABLE employee (\n  id int NOT NULL,\n  lastname varchar(255) NOT NULL,\n  firstname varchar(255),\n  age int,\n  PRIMARY KEY(lastname)\n);'
        ],
        answer: 'A. CREATE TABLE employee (\n  id int NOT NULL,\n  lastname varchar(255) NOT NULL,\n  firstname varchar(255),\n  age int,\n  PRIMARY KEY(id, lastname)\n);',
        explanation: 'In the table data, neither `id` alone (value 1 repeats) nor `lastname` alone (value "Anand" repeats) is unique. Only the combination `(id, lastname)` has all distinct pairs: (1, Anand), (1, Santhosh), (23, Anand), (3, Anand). Columns that form a primary key must also be declared `NOT NULL`.'
      },
      {
        id: 3,
        question: 'Consider the relation schema class(class_name, age). Identify the query to find the names and average age of all classes, whose average age is greater than 10.',
        options: [
          'A. SELECT class_name, age FROM class GROUP BY class_name HAVING AVG(age)>10;',
          'B. SELECT class_name, age FROM class HAVING AVG(age)>10 GROUP BY class_name;',
          'C. SELECT class_name, AVG(age) FROM class GROUP BY class_name HAVING AVG(age)>10;',
          'D. SELECT class_name, AVG(age) FROM class HAVING AVG(age)>10 GROUP BY class_name;'
        ],
        answer: 'C. SELECT class_name, AVG(age) FROM class GROUP BY class_name HAVING AVG(age)>10;',
        explanation: 'To display average age, `AVG(age)` must appear in the SELECT clause. Filtering on aggregate expressions requires the `HAVING` clause, which syntactically must come AFTER the `GROUP BY` clause.'
      },
      {
        id: 4,
        question: 'Consider the Employee table with columns (Ename, Branch, City, Salary). Which of the following SQL queries returns "the total salary of all employees at each branch of the bank"?',
        options: [
          'A. SELECT Branch, SUM(Salary) FROM Employee GROUP BY Branch;',
          'B. SELECT Ename, SUM(Salary) FROM Employee GROUP BY Branch;',
          'C. SELECT Branch, SUM(Salary) FROM Employee GROUP BY Ename;',
          'D. SELECT Branch, Salary FROM Employee GROUP BY Branch;'
        ],
        answer: 'A. SELECT Branch, SUM(Salary) FROM Employee GROUP BY Branch;',
        explanation: 'To compute total salary per branch, we group by `Branch` and compute the aggregate `SUM(Salary)`. Non-aggregated columns in SELECT must match the GROUP BY clause.'
      },
      {
        id: 5,
        question: 'In the indexed scheme of blocks to a file, the maximum possible size of the file depends on:',
        options: [
          'A. The number of blocks used for index and the size of the index.',
          'B. Size of Blocks and size of Address.',
          'C. Size of the Index.',
          'D. Size of the Block.'
        ],
        answer: 'B. Size of Blocks and size of Address.',
        explanation: 'In indexed file allocation schemes, each index block contains pointers to data blocks. The maximum number of block pointers is determined by (Block Size / Pointer Address Size), and multiplying this by the block size dictates maximum file size.'
      },
      {
        id: 6,
        question: 'Deadlock situations occur only when one of the transactions wants to obtain a(n) ________ lock on a data item.',
        options: [
          'A. Binary',
          'B. Shared',
          'C. Exclusive',
          'D. Compatible'
        ],
        answer: 'C. Exclusive',
        explanation: 'Deadlock requires mutual exclusion where resources are held exclusively. If transactions only requested Shared (read) locks, all requests would be compatible and could execute concurrently without ever blocking or causing deadlocks.'
      },
      {
        id: 7,
        question: 'Determine the maximum number of keys in a B-tree of order 3 and height 3 (height defined as maximum edges from root to leaf, fully populated):',
        options: [
          'A. 26',
          'B. 40',
          'C. 80',
          'D. 64'
        ],
        answer: 'C. 80',
        explanation: 'Height h = 3 edges means there are h + 1 = 4 levels (levels 0, 1, 2, 3).\nIn an order m = 3 B-tree:\n• Maximum children per node = 3\n• Maximum keys per node = m - 1 = 2 keys\n• Level 0 (root): 1 node = 2 keys\n• Level 1: 3 nodes = 3 × 2 = 6 keys\n• Level 2: 3^2 = 9 nodes = 9 × 2 = 18 keys\n• Level 3: 3^3 = 27 nodes = 27 × 2 = 54 keys\nTotal maximum keys = 2 + 6 + 18 + 54 = 80 keys (Formula: m^(h+1) - 1 = 3^4 - 1 = 81 - 1 = 80 keys).'
      },
      {
        id: 8,
        question: 'Consider schedule S = T1:R(x), T1:R(y), T1:W(x), T2:R(y), T3:W(y), T1:W(x), T2:R(y). Which of the following is true?',
        options: [
          'A. Schedule is view serializable.',
          'B. Schedule is conflict serializable but not view serializable.',
          'C. Schedule is view serializable but not conflict serializable.',
          'D. Schedule is neither view serializable nor conflict serializable.'
        ],
        answer: 'D. Schedule is neither view serializable nor conflict serializable.',
        explanation: 'Analyzing conflicts on data item y:\n• T2:R(y) occurs before T3:W(y) &rarr; gives directed edge T2 &rarr; T3.\n• T3:W(y) occurs before the subsequent T2:R(y) &rarr; gives directed edge T3 &rarr; T2.\nThis creates a direct dependency cycle (T2 &harr; T3) in the serialization graph, making the schedule NOT conflict serializable. Because no blind writes exist to break the cyclic read-write order, it is also not view serializable.'
      },
      {
        id: 9,
        question: 'Which of the following is/are the problem(s) with concurrent execution?\nI. Lost update problem\nII. Dirty read problem\nIII. Unrepeatable read problem\nIV. Phantom read\nV. Incorrect summary problem',
        options: [
          'A. I, II and V',
          'B. II, III and IV',
          'C. II, III, IV and V',
          'D. All I, II, III, IV, and V'
        ],
        answer: 'D. All I, II, III, IV, and V',
        explanation: 'All five are classic, well-documented concurrency anomalies that can occur in multi-transactional databases without appropriate isolation control.'
      },
      {
        id: 10,
        question: 'For the given schedule S: r1(x); w1(x); r2(x); r1(y); w1(y); w2(x); r2(y); c1; c2;\nWhich of the following statement(s) is (are) true?\nI. S is recoverable.\nII. If the order of w1(x) and w2(x) are interchanged, then S will be a non-recoverable schedule.',
        options: [
          'A. Only I',
          'B. Only II',
          'C. Both I and II',
          'D. None of the above'
        ],
        answer: 'A. Only I',
        explanation: 'In schedule S, T2 reads x (and y) after T1 writes them, creating a read-from dependency (T2 reads from T1). For recoverability, the writer (T1) must commit before the reader (T2) commits (c1 appears before c2). Because c1 occurs before c2, S is recoverable (Statement I is true).'
      }
    ],
    subjective: [
      {
        id: 1,
        q: 'Write a SQL query to retrieve the top 5 highest paid employees from the "employees" table.',
        category: 'SQL Ranking & Limiting',
        ans: `• <strong>Standard SQL (MySQL / PostgreSQL / SQLite):</strong>
<pre><code>SELECT employee_id, first_name, last_name, salary
FROM employees
ORDER BY salary DESC
LIMIT 5;</code></pre>

• <strong>ANSI Standard (Oracle 12c+ / SQL:2008):</strong>
<pre><code>SELECT employee_id, first_name, last_name, salary
FROM employees
ORDER BY salary DESC
FETCH FIRST 5 ROWS ONLY;</code></pre>

• <strong>Microsoft SQL Server:</strong>
<pre><code>SELECT TOP 5 employee_id, first_name, last_name, salary
FROM employees
ORDER BY salary DESC;</code></pre>

• <strong>Explanation:</strong><br>
1. <code>ORDER BY salary DESC</code> sorts employee records from highest to lowest salary.<br>
2. <code>LIMIT 5</code> restricts the final output to the first 5 records.`
      },
      {
        id: 2,
        q: 'Write a SQL query to find the second highest salary from the "employees" table. Provide at least two distinct approaches (Subquery and Window Function).',
        category: 'SQL Analytical Queries',
        ans: `• <strong>Approach 1: Using Subquery (Universal ANSI SQL):</strong>
<pre><code>SELECT MAX(salary) AS SecondHighestSalary
FROM employees
WHERE salary < (SELECT MAX(salary) FROM employees);</code></pre>
<em>Explanation:</em> The inner subquery finds the maximum overall salary. The outer query finds the maximum salary strictly less than that global maximum, which is precisely the 2nd highest salary.

• <strong>Approach 2: Using LIMIT and OFFSET (MySQL / PostgreSQL):</strong>
<pre><code>SELECT DISTINCT salary AS SecondHighestSalary
FROM employees
ORDER BY salary DESC
LIMIT 1 OFFSET 1;</code></pre>
<em>Explanation:</em> <code>DISTINCT</code> eliminates duplicate salaries, <code>ORDER BY salary DESC</code> sorts them descending, and <code>OFFSET 1 LIMIT 1</code> skips the highest and picks the 2nd.

• <strong>Approach 3: Using DENSE_RANK() Window Function:</strong>
<pre><code>WITH RankedSalaries AS (
  SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) as rank_num
  FROM employees
)
SELECT salary AS SecondHighestSalary
FROM RankedSalaries
WHERE rank_num = 2;</code></pre>`
      },
      {
        id: 3,
        q: 'Write the SQL query to display the maximum, minimum, average of price and total quantity of all products from the "products" table.',
        category: 'SQL Multi-Column Aggregation',
        ans: `• <strong>SQL Query:</strong>
<pre><code>SELECT 
    MAX(price) AS max_price,
    MIN(price) AS min_price,
    ROUND(AVG(price), 2) AS avg_price,
    SUM(quantity) AS total_quantity
FROM products;</code></pre>

• <strong>Explanation:</strong><br>
1. <code>MAX(price)</code> computes the highest product price.<br>
2. <code>MIN(price)</code> computes the lowest product price.<br>
3. <code>AVG(price)</code> computes the arithmetic mean of prices across all records (rounded to 2 decimal places).<br>
4. <code>SUM(quantity)</code> calculates the cumulative inventory quantity across all rows.`
      },
      {
        id: 4,
        q: 'Write a SQL query to find the average age of employees from the "employees" table.',
        category: 'Basic SQL Aggregations',
        ans: `• <strong>SQL Query:</strong>
<pre><code>SELECT ROUND(AVG(age), 2) AS average_age
FROM employees;</code></pre>

• <strong>Explanation:</strong><br>
- The <code>AVG()</code> aggregate function calculates the mean of all non-NULL values in the <code>age</code> column.<br>
- <code>ROUND(..., 2)</code> formats the resulting floating-point value to two decimal places.`
      },
      {
        id: 5,
        q: 'Observe Table 2.5 TEACHER and Table 2.6 TASK carefully and write the names of the RDBMS operation out of (i) EQUI JOIN (ii) NATURAL JOIN (iii) SELECTION (iv) CARTESIAN PRODUCT, which has been used to produce the output as shown below. Also find the Degree and Cardinality of the final RESULT.\n\nTable 2.5: Teacher Information\nTeacher_Code | Teacher_Name | Subject\nT001         | Amit         | Biology\nT002         | Anand        | Hindi\nT003         | Mohan        | Physics\n\nTable 2.6: Task\nTeacher Name | Subject | Task Name   | Completion Date\nAmit         | Biology | SBSB        | 30-04-2020\nAmit         | Biology | EBSB        | 31-05-2020\nAmit         | Biology | GANGA_QUEST | 30-04-2020\nAnand        | Hindi   | SBSB        | 30-04-2020\nAnand        | Hindi   | EBSB        | 31-05-2020\nAnand        | Hindi   | GANGA_QUEST | 30-04-2020\nMohan        | Physics | SBSB        | 30-04-2020\nMohan        | Physics | EBSB        | 31-05-2020\nMohan        | Physics | GANGA_QUEST | 30-04-2020',
        category: 'RDBMS Relational Operations',
        ans: `• <strong>1. Identification of the RDBMS Operation:</strong><br>
The operation used to produce the output is <strong>(ii) NATURAL JOIN</strong> (or <strong>(i) EQUI JOIN</strong> on common attributes <code>Teacher_Name</code> and <code>Subject</code>).<br>
<em>Explanation:</em><br>
- Table 2.5 contains 3 teacher records.<br>
- In Table 2.6, each task is associated with teachers who match both the <code>Teacher Name</code> and <code>Subject</code>.<br>
- The common columns (<code>Teacher_Name</code>, <code>Subject</code>) match on equality and are not duplicated in a natural join.<br><br>

• <strong>2. Degree of Final Result:</strong><br>
- Distinct attributes: <code>Teacher_Code, Teacher_Name, Subject, Task Name, Completion Date</code>.<br>
- <strong>Degree = 5</strong><br><br>

• <strong>3. Cardinality of Final Result:</strong><br>
- Each of the 3 teachers matches 3 tasks: 3 × 3 = 9 tuples in the task table.<br>
- <strong>Cardinality = 9</strong>`
      },
      {
        id: 6,
        q: 'Write the SQL queries for the Teacher and Task tables:\n(a). Retrieve all tasks along with the respective teacher information.\n(b). Find out the completion date and subject for each task.\n(c). Get the teacher name, subject, and task name for tasks completed on 31-05-2020.\n(d). List all tasks along with the teacher’s subject and the completion date.\n(e). Find out the tasks completed by each teacher with their respective subjects.',
        category: 'Relational Multi-Table Queries',
        ans: `• <strong>(a). Retrieve all tasks along with the respective teacher information:</strong>
<pre><code>SELECT t.Teacher_Code, t.Teacher_Name, t.Subject, k.Task_Name, k.Completion_Date
FROM Teacher t
JOIN Task k 
  ON t.Teacher_Name = k.Teacher_Name 
 AND t.Subject = k.Subject;</code></pre>

• <strong>(b). Find out the completion date and subject for each task:</strong>
<pre><code>SELECT Task_Name, Subject, Completion_Date
FROM Task;</code></pre>

• <strong>(c). Get the teacher name, subject, and task name for tasks completed on 31-05-2020:</strong>
<pre><code>SELECT Teacher_Name, Subject, Task_Name
FROM Task
WHERE Completion_Date = '31-05-2020';</code></pre>

• <strong>(d). List all tasks along with the teacher’s subject and the completion date:</strong>
<pre><code>SELECT Task_Name, Subject, Completion_Date
FROM Task;</code></pre>

• <strong>(e). Find out the tasks completed by each teacher with their respective subjects:</strong>
<pre><code>SELECT Teacher_Name, Subject, Task_Name
FROM Task
ORDER BY Teacher_Name, Subject;</code></pre>`
      }
    ]
  }
];

if (typeof window !== 'undefined') {
  window.DBMS_WORKSHEETS_DATA = DBMS_WORKSHEETS_DATA;
}
