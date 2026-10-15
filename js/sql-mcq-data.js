/**
 * ADVANCED SQL CURRICULUM • 50 EXPERT SCENARIOS
 * Enterprise SQL Aggregations & Join Mechanics
 * 
 * A scenario-driven pedagogical series by Database Administrators covering
 * GROUP BY, HAVING, and complex JOIN operations.
 * 
 * Standard Scenario Benchmark Schema:
 * • Departments(dept_id PK, dept_name, region)
 * • Employees(emp_id PK, emp_name, dept_id FK NULL, salary NULL, manager_id NULL)
 * • Projects(project_id PK, project_name, budget)
 * • Emp_projects(emp_id, project_id, hours_billed NULL, PK(emp_id, project_id))
 */

const SQL_MCQ_DATA = {
  title: "Advanced SQL Curriculum • 50 Expert Scenarios",
  subtitle: "Enterprise SQL Aggregations & Join Mechanics",
  description: "A scenario-driven pedagogical series by Database Administrators covering GROUP BY, HAVING, and complex JOIN operations with interactive instant answer feedback and in-depth DBA relational engine concepts.",
  
  benchmarkSchema: [
    {
      table: "Departments",
      description: "Enterprise organizational divisions and geographical locations",
      columns: [
        { name: "dept_id", type: "INT", isKey: true, isFK: false, desc: "Primary Key" },
        { name: "dept_name", type: "VARCHAR(50)", isKey: false, isFK: false, desc: "Department Title" },
        { name: "region", type: "VARCHAR(30)", isKey: false, isFK: false, desc: "Geographic Region (EMEA, APAC, NA)" }
      ]
    },
    {
      table: "Employees",
      description: "Workforce staff with departmental bindings, compensation, and hierarchical management",
      columns: [
        { name: "emp_id", type: "INT", isKey: true, isFK: false, desc: "Primary Key" },
        { name: "emp_name", type: "VARCHAR(50)", isKey: false, isFK: false, desc: "Employee Full Name" },
        { name: "dept_id", type: "INT", isKey: false, isFK: true, desc: "Foreign Key -> Departments (Nullable)" },
        { name: "salary", type: "DECIMAL(12,2)", isKey: false, isFK: false, desc: "Base Salary (Nullable)" },
        { name: "manager_id", type: "INT", isKey: false, isFK: true, desc: "Self-referential Manager FK (Nullable)" }
      ]
    },
    {
      table: "Projects",
      description: "Enterprise initiatives, capital allocations, and program budgets",
      columns: [
        { name: "project_id", type: "INT", isKey: true, isFK: false, desc: "Primary Key" },
        { name: "project_name", type: "VARCHAR(50)", isKey: false, isFK: false, desc: "Project Title" },
        { name: "budget", type: "DECIMAL(14,2)", isKey: false, isFK: false, desc: "Approved Budget" }
      ]
    },
    {
      table: "Emp_projects",
      description: "Many-to-Many bridge table allocating employee hours to enterprise projects",
      columns: [
        { name: "emp_id", type: "INT", isKey: true, isFK: true, desc: "Composite PK, FK -> Employees" },
        { name: "project_id", type: "INT", isKey: true, isFK: true, desc: "Composite PK, FK -> Projects" },
        { name: "hours_billed", type: "DECIMAL(8,2)", isKey: false, isFK: false, desc: "Time tracking hours (Nullable)" }
      ]
    }
  ],

  modules: [
    {
      id: "mod-1",
      number: 1,
      title: "Module 1: GROUP BY Foundations & Group Formation Mechanics",
      range: "Q1 - Q15",
      count: 15,
      description: "Non-aggregated projection traps, aggregate NULL arithmetic, grouping identity of NULLs, logical processing order, pivot aggregations, ROLLUP, CUBE, and functional dependencies."
    },
    {
      id: "mod-2",
      number: 2,
      title: "Module 2: GROUP BY with HAVING • Post-Aggregation Group Filtration",
      range: "Q16 - Q30",
      count: 15,
      description: "Separation of row vs. group filtration, three-valued SQL logic in HAVING, composite duplicates, scalar/correlated subqueries in HAVING, relational division, and variance spread."
    },
    {
      id: "mod-3",
      number: 3,
      title: "Module 3: JOIN Mechanics & Join-Aggregation Interactions",
      range: "Q31 - Q50",
      count: 20,
      description: "1-to-Many fan-out multiplication, Cartesian products, outer joins vs. zero counts, predicate placement in ON vs. WHERE, pre-aggregation CTE patterns, non-equi joins, LATERAL joins, and the complete 6-stage logical query pipeline."
    }
  ],

  questions: [
    // ════════════════════════════════════════════════════════════════
    // MODULE 1: GROUP BY Foundations & Group Formation Mechanics
    // ════════════════════════════════════════════════════════════════
    {
      id: 1,
      moduleId: 1,
      moduleTitle: "GROUP BY Foundations",
      title: "The Non-Aggregated Column Projection Trap",
      prompt: "What happens when executing the following query in standard ANSI SQL?",
      code: "SELECT dept_id, emp_name, AVG(salary) \nFROM Employees \nGROUP BY dept_id;",
      options: [
        "A) Returns first arbitrary emp_name per group",
        "B) Fails standard SQL compilation (non-grouped column)",
        "C) Automatically adds emp_name to grouping list",
        "D) Projects NULL for unaggregated attributes"
      ],
      correctAnswer: "B) Fails standard SQL compilation (non-grouped column)",
      answerLetter: "B",
      concept: "In standard SQL, every column present in the SELECT list must either appear explicitly in the GROUP BY clause or be enclosed inside an aggregate function (such as AVG, SUM, COUNT, MIN, MAX). Because emp_name is neither grouped nor aggregated, the relational engine cannot determine which employee row's name to project for each department group."
    },
    {
      id: 2,
      moduleId: 1,
      moduleTitle: "GROUP BY Foundations",
      title: "Aggregate Math Over NULL Values",
      prompt: "A department has 4 employees with salaries: 1000, 2000, NULL, and 3000. What is the output of this query?",
      code: "SELECT dept_id, AVG(salary) AS a_sal, COUNT(*), COUNT(salary) \nFROM Employees \nWHERE dept_id = 10 \nGROUP BY dept_id;",
      options: [
        "A) a_sal = 1500, COUNT(*) = 4, COUNT(salary) = 4",
        "B) a_sal = 2000, COUNT(*) = 4, COUNT(salary) = 3",
        "C) a_sal = 1500, COUNT(*) = 3, COUNT(salary) = 3",
        "D) a_sal = 2000, COUNT(*) = 3, COUNT(salary) = 3"
      ],
      correctAnswer: "B) a_sal = 2000, COUNT(*) = 4, COUNT(salary) = 3",
      answerLetter: "B",
      concept: "Aggregate functions handle NULLs differently:\n• AVG(salary) ignores NULLs completely: (1000 + 2000 + 3000) / 3 = 6000 / 3 = 2000.\n• COUNT(*) counts all rows regardless of NULL values, returning 4.\n• COUNT(salary) counts only non-NULL entries in that column, returning 3."
    },
    {
      id: 3,
      moduleId: 1,
      moduleTitle: "GROUP BY Foundations",
      title: "Grouping Identity of NULL Values",
      prompt: "Five rows exist in Employees: three rows contain dept_id = NULL and two have dept_id = 1. What is the result?",
      code: "SELECT dept_id, COUNT(*) \nFROM Employees \nGROUP BY dept_id;",
      options: [
        "A) Error; equality cannot compare NULLs",
        "B) 1 row returned (NULL rows discarded)",
        "C) 2 rows returned (NULL collapses to one group)",
        "D) 4 rows returned (each NULL forms its own group)"
      ],
      correctAnswer: "C) 2 rows returned (NULL collapses to one group)",
      answerLetter: "C",
      concept: "Even though NULL = NULL evaluates to UNKNOWN under three-valued logic for equality comparisons, ANSI SQL defines that for partitioning, DISTINCT, and GROUP BY purposes, all NULL values are considered not distinct from one another and collapse into a single unified group bucket."
    },
    {
      id: 4,
      moduleId: 1,
      moduleTitle: "GROUP BY Foundations",
      title: "Column Aliases in the GROUP BY Clause",
      prompt: "What is the ANSI SQL behavior of referencing a projection alias in GROUP BY?",
      code: "SELECT CASE WHEN salary > 5000 THEN 'High' ELSE 'Low' END AS tier, COUNT(*) \nFROM Employees \nGROUP BY tier;",
      options: [
        "A) Universally allowed across all ANSI SQL engines",
        "B) Fails standard ANSI SQL (GROUP BY evaluates prior to SELECT)",
        "C) Permitted only if an explicit ORDER BY tier is declared",
        "D) Fails because conditional CASE expressions cannot be grouped"
      ],
      correctAnswer: "B) Fails standard ANSI SQL (GROUP BY evaluates prior to SELECT)",
      answerLetter: "B",
      concept: "Logical query processing pipeline order is: FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY. Because GROUP BY is executed before SELECT, the column alias 'tier' has not yet been bound into the execution namespace. In standard ANSI SQL, the full CASE expression must be repeated inside the GROUP BY clause."
    },
    {
      id: 5,
      moduleId: 1,
      moduleTitle: "GROUP BY Foundations",
      title: "Pivot Aggregations (Conditional Aggregation)",
      prompt: "Which pattern properly sums full-time (ft = 1) vs part-time (ft = 0) payroll side-by-side per department?",
      code: "Pattern A: \nSELECT dept_id, SUM(salary WHERE ft = 1), SUM(salary WHERE ft = 0) \nFROM Employees GROUP BY dept_id;\n\nPattern B: \nSELECT dept_id, \n       SUM(CASE WHEN ft = 1 THEN salary ELSE 0 END), \n       SUM(CASE WHEN ft = 0 THEN salary ELSE 0 END) \nFROM Employees GROUP BY dept_id;",
      options: [
        "A) Pattern A is ANSI compliant",
        "B) Pattern B is standard conditional aggregation",
        "C) Both queries fail syntax validation",
        "D) Requires independent queries joined via UNION"
      ],
      correctAnswer: "B) Pattern B is standard conditional aggregation",
      answerLetter: "B",
      concept: "Embedding CASE expressions directly inside aggregate functions (e.g. SUM(CASE WHEN ...)) is the universal ANSI SQL pattern for pivoting rows into columnar metrics. Pattern A is invalid syntax because standard SQL aggregates do not accept embedded WHERE filters (except FILTER clause in PostgreSQL/SQLite)."
    },
    {
      id: 6,
      moduleId: 1,
      moduleTitle: "GROUP BY Foundations",
      title: "Counter Cardinality Groups",
      prompt: "A department group contains salaries: 5000, 5000, NULL, 6000. What does this query return?",
      code: "SELECT dept_id, COUNT(salary), COUNT(DISTINCT salary) \nFROM Employees \nGROUP BY dept_id;",
      options: [
        "A) COUNT = 4, COUNT(DISTINCT) = 3",
        "B) COUNT = 3, COUNT(DISTINCT) = 2",
        "C) COUNT = 3, COUNT(DISTINCT) = 3",
        "D) Fails: DISTINCT cannot reside in grouped count"
      ],
      correctAnswer: "B) COUNT = 3, COUNT(DISTINCT) = 2",
      answerLetter: "B",
      concept: "• COUNT(salary) skips the NULL value and counts {5000, 5000, 6000} -> returns 3.\n• COUNT(DISTINCT salary) skips NULL and de-duplicates identical values, leaving unique set {5000, 6000} -> returns 2."
    },
    {
      id: 7,
      moduleId: 1,
      moduleTitle: "GROUP BY Foundations",
      title: "Positional Ordinal Grouping References",
      prompt: "How does the database interpret ordinal integers in the GROUP BY clause?",
      code: "SELECT region, dept_name, SUM(budget) \nFROM Departments D JOIN Projects P ON 1=1 \nGROUP BY 1, 2;",
      options: [
        "A) Groups by the literal numeric integers 1 and 2",
        "B) Groups by the first 2 physical columns declared in schema",
        "C) Groups by the 1st and 2nd expressions in SELECT projection",
        "D) Syntax error in all commercial relational engines"
      ],
      correctAnswer: "C) Groups by the 1st and 2nd expressions in SELECT projection",
      answerLetter: "C",
      concept: "Positional ordinals (1, 2) map directly to the 1st and 2nd expressions projected in the SELECT clause (1 = region, 2 = dept_name). While supported in engines like PostgreSQL, MySQL, and Snowflake, this practice is strongly discouraged in production code because altering column projection order silently breaks the grouping logic."
    },
    {
      id: 8,
      moduleId: 1,
      moduleTitle: "GROUP BY Foundations",
      title: "Table Aggregation Without GROUP BY on Empty Sets",
      prompt: "When querying aggregates over an empty filtered set without a GROUP BY clause, what is returned?",
      code: "SELECT COUNT(*), SUM(salary) \nFROM Employees \nWHERE dept_id = 999; -- 0 rows match filter",
      options: [
        "A) Returns an empty result set (0 rows)",
        "B) Returns 1 row: COUNT = 0, SUM = NULL",
        "C) Returns 1 row: COUNT = 0, SUM = 0",
        "D) Throws an uncaught execution runtime error"
      ],
      correctAnswer: "B) Returns 1 row: COUNT = 0, SUM = NULL",
      answerLetter: "B",
      concept: "Executing aggregate functions without an explicit GROUP BY clause defines the entire table as an implicit single-row group. When 0 rows match the filter, the engine still outputs exactly 1 summary row where COUNT(*) evaluates to 0, and value-based aggregates (SUM, AVG, MIN, MAX) evaluate to NULL."
    },
    {
      id: 9,
      moduleId: 1,
      moduleTitle: "GROUP BY Foundations",
      title: "Explicit GROUP BY Output on Empty Input Sets",
      prompt: "In contrast to Q8, what happens when an explicit GROUP BY is executed over an empty filtered set?",
      code: "SELECT dept_id, COUNT(*), SUM(salary) \nFROM Employees \nWHERE dept_id = 999 \nGROUP BY dept_id;",
      options: [
        "A) Returns 1 row: dept_id = 999, COUNT = 0, SUM = NULL",
        "B) Returns 0 rows (empty result set)",
        "C) Returns 1 row: dept_id = NULL, COUNT = 0, SUM = 0",
        "D) Returns an execution warning with single NULL record"
      ],
      correctAnswer: "B) Returns 0 rows (empty result set)",
      answerLetter: "B",
      concept: "With an explicit GROUP BY, groups are dynamically formed strictly from rows that pass the WHERE clause. If 0 candidate rows survive WHERE, 0 groups are constructed, so the query outputs an empty result set (0 rows)."
    },
    {
      id: 10,
      moduleId: 1,
      moduleTitle: "GROUP BY Foundations",
      title: "Dimensional Subtotal With ROLLUP",
      prompt: "What aggregation levels are generated by ROLLUP(region, dept_id)?",
      code: "SELECT region, dept_id, SUM(budget) \nFROM Departments \nGROUP BY ROLLUP(region, dept_id);",
      options: [
        "A) Permutations: (region, dept_id) and grand total ()",
        "B) Hierarchical: (region, dept_id), (region), and ()",
        "C) Permutations: (region, dept_id), (dept_id), and ()",
        "D) Full power set: (region, dept_id), (region), (dept_id), ()"
      ],
      correctAnswer: "B) Hierarchical: (region, dept_id), (region), and ()",
      answerLetter: "B",
      concept: "ROLLUP(A, B) computes N+1 hierarchical aggregation levels based on prefix order:\n1. Detailed composite: (region, dept_id)\n2. Subtotal roll-up: (region)\n3. Grand total: () [empty grouping set with both dimensions set to NULL]."
    },
    {
      id: 11,
      moduleId: 1,
      moduleTitle: "GROUP BY Foundations",
      title: "Multi-Dimensional Permutations: CUBE vs. ROLLUP",
      prompt: "How does GROUP BY CUBE(region, dept_id) differ in output from ROLLUP(region, dept_id)?",
      code: "-- CUBE vs ROLLUP\nGROUP BY CUBE(region, dept_id);",
      options: [
        "A) CUBE generates all 2^N subtotal permutations, including independent (dept_id) subtotals",
        "B) CUBE sorts output by primary key index order",
        "C) CUBE automatically converts database NULLs into zero values",
        "D) Both operators generate identical rows; CUBE is merely a legacy synonym"
      ],
      correctAnswer: "A) CUBE generates all 2^N subtotal permutations, including independent (dept_id) subtotals",
      answerLetter: "A",
      concept: "While ROLLUP produces hierarchical prefix subtotals (N+1 sets), CUBE computes the full power set (2^N combinations). For 2 columns, CUBE generates 2^2 = 4 grouping sets:\n1. (region, dept_id)\n2. (region)\n3. (dept_id) [independent cross-dimensional subtotal]\n4. () [grand total]."
    },
    {
      id: 12,
      moduleId: 1,
      moduleTitle: "GROUP BY Foundations",
      title: "Disambiguating Subtotal Rows With GROUPING()",
      prompt: "What is the exact purpose of GROUPING(region) when evaluating ROLLUP / CUBE output?",
      code: "SELECT region, GROUPING(region) AS is_subtotal, SUM(budget)\nFROM Departments\nGROUP BY ROLLUP(region);",
      options: [
        "A) Returns number of distinct records collapsed inside each subtotal group",
        "B) Returns 1 if NULL represents an aggregation subtotal, and 0 if from raw stored row data",
        "C) Forces database to group by non-deterministic hashing buckets",
        "D) Replaces COALESCE to format string labels on report footers"
      ],
      correctAnswer: "B) Returns 1 if NULL represents an aggregation subtotal, and 0 if from raw stored row data",
      answerLetter: "B",
      concept: "When a table contains natural NULL values, ROLLUP/CUBE subtotal rows also use NULL as markers. GROUPING(col) returns 1 if the NULL is a synthetic indicator created by the aggregation subtotal, and 0 if the NULL originated from natural underlying row data."
    },
    {
      id: 13,
      moduleId: 1,
      moduleTitle: "GROUP BY Foundations",
      title: "Primary Key Functional Dependency in GROUP BY",
      prompt: "Why is this query valid in SQL:1999+ compliant engines even though dept_name is not in GROUP BY?",
      code: "SELECT dept_id, dept_name \nFROM Departments \nGROUP BY dept_id;",
      options: [
        "A) Fails in all SQL engines because dept_name is absent from GROUP BY",
        "B) Valid in SQL:1999+ because primary key uniqueness functionally determines dept_name",
        "C) Allowed only if dept_name contains a clustered database index",
        "D) Permitted only when table has fewer than 10,000 physical rows"
      ],
      correctAnswer: "B) Valid in SQL:1999+ because primary key uniqueness functionally determines dept_name",
      answerLetter: "B",
      concept: "Under SQL:1999+ Functional Dependency rules (implemented in Postgres, MySQL 5.7+, SQLite), grouping by a table's Primary Key (dept_id) guarantees that every attribute of that table (such as dept_name) is functionally determined by the key and has exactly one unique value per group."
    },
    {
      id: 14,
      moduleId: 1,
      moduleTitle: "GROUP BY Foundations",
      title: "Aggregation in the WHERE Clause",
      prompt: "What is the result of attempting to filter an aggregate function in the WHERE clause?",
      code: "SELECT dept_id, COUNT(*) \nFROM Employees \nWHERE COUNT(*) > 2 \nGROUP BY dept_id;",
      options: [
        "A) Correctly isolates departments having > 2 members",
        "B) Compilation error: aggregates cannot appear in WHERE",
        "C) Runs by converting WHERE into an implicit HAVING",
        "D) Evaluates against pre-existing database statistic metadata"
      ],
      correctAnswer: "B) Compilation error: aggregates cannot appear in WHERE",
      answerLetter: "B",
      concept: "The WHERE clause filters individual rows before groups are formed and before aggregation can take place. Because aggregate functions compute over formed groups, they cannot be evaluated during the WHERE phase. Group-level filtering must be specified in the HAVING clause."
    },
    {
      id: 15,
      moduleId: 1,
      moduleTitle: "GROUP BY Foundations",
      title: "Direct Nesting of Standard Aggregates",
      prompt: "What happens when an aggregate function directly wraps another aggregate in ANSI SQL?",
      code: "SELECT AVG(SUM(salary)) \nFROM Employees \nGROUP BY dept_id;",
      options: [
        "A) Computes the mathematical mean across all department totals",
        "B) Valid syntax only if combined with an OVER() clause",
        "C) Fails in standard ANSI SQL: direct nesting of aggregates is illegal",
        "D) Automatically translates to AVG(salary)"
      ],
      correctAnswer: "C) Fails in standard ANSI SQL: direct nesting of aggregates is illegal",
      answerLetter: "C",
      concept: "ANSI SQL strictly forbids direct nesting of aggregate functions (e.g., AVG(SUM(...))). Aggregates must operate on sets of scalars. Multi-level aggregation must be performed in two stages using a Common Table Expression (CTE) or a derived subquery."
    },

    // ════════════════════════════════════════════════════════════════
    // MODULE 2: GROUP BY with HAVING • Post-Aggregation Group Filtration
    // ════════════════════════════════════════════════════════════════
    {
      id: 16,
      moduleId: 2,
      moduleTitle: "GROUP BY with HAVING",
      title: "Separation: ROW Filtering vs. Group Filtering",
      prompt: "Which principle accurately defines the architectural boundary between WHERE and HAVING?",
      code: "-- WHERE vs HAVING boundary",
      options: [
        "A) WHERE filters groups post-aggregation; HAVING prefilters base rows prior to grouping",
        "B) WHERE filters candidate rows before grouping; HAVING filters aggregated groups post-calculation",
        "C) HAVING is an alias for WHERE that provides query optimizer performance hints",
        "D) HAVING executes before the query's FROM table bindings"
      ],
      correctAnswer: "B) WHERE filters candidate rows before grouping; HAVING filters aggregated groups post-calculation",
      answerLetter: "B",
      concept: "• WHERE executes first: it inspects candidate rows from FROM/JOIN and discards unneeded rows prior to any grouping.\n• HAVING executes after GROUP BY: it inspects the aggregated summary rows and filters out groups based on post-aggregation group metrics."
    },
    {
      id: 17,
      moduleId: 2,
      moduleTitle: "GROUP BY with HAVING",
      title: "Unaggregated Attribute Filtering in HAVING",
      prompt: "What occurs when filtering an unaggregated column in HAVING that is not listed in GROUP BY?",
      code: "SELECT dept_id, AVG(salary) \nFROM Employees \nGROUP BY dept_id \nHAVING region = 'North';",
      options: [
        "A) Filters North region rows prior to average math",
        "B) Fails: region is neither aggregated nor in GROUP BY",
        "C) Valid: engine implicitly adds region into GROUP BY",
        "D) Permitted only if an index exists on the region column"
      ],
      correctAnswer: "B) Fails: region is neither aggregated nor in GROUP BY",
      answerLetter: "B",
      concept: "The HAVING clause operates exclusively at the group level. Any column referenced in HAVING must either be enclosed in an aggregate function (e.g. MAX(region)) or be part of the GROUP BY clause. An unaggregated column outside GROUP BY cannot be resolved because a group may contain multiple differing values."
    },
    {
      id: 18,
      moduleId: 2,
      moduleTitle: "GROUP BY with HAVING",
      title: "Pre-Aggregate Row Filter vs. Group Boundary Filter",
      prompt: "Contrast the functional behavior of these two queries:",
      code: "Q1: SELECT dept_id, COUNT(*) \n    FROM Employees \n    WHERE salary > 50000 \n    GROUP BY dept_id;\n\nQ2: SELECT dept_id, COUNT(*) \n    FROM Employees \n    GROUP BY dept_id \n    HAVING MIN(salary) > 50000;",
      options: [
        "A) Both queries return identical results under all data sets",
        "B) Q1 counts high earners in mixed departments; Q2 returns headcounts of departments where every employee earns > 50k",
        "C) Q2 is syntactically invalid because MIN cannot evaluate in HAVING",
        "D) Q1 runs slower because WHERE cannot utilize indexes with GROUP BY"
      ],
      correctAnswer: "B) Q1 counts high earners in mixed departments; Q2 returns headcounts of departments where every employee earns > 50k",
      answerLetter: "B",
      concept: "• Q1 filters out workers earning <= 50k first, then counts the remaining high-earners per department (departments can have lower-paid workers ignored).\n• Q2 tests the department's wage floor: MIN(salary) > 50k guarantees that every single employee in that department earns over 50k."
    },
    {
      id: 19,
      moduleId: 2,
      moduleTitle: "GROUP BY with HAVING",
      title: "HAVING Without an Explicit GROUP BY Clause",
      prompt: "What is the behavior of using a HAVING clause without declaring a GROUP BY clause?",
      code: "SELECT COUNT(*) \nFROM Employees \nHAVING AVG(salary) > 50000;",
      options: [
        "A) Fails: HAVING strictly requires explicit GROUP BY",
        "B) Valid: Evaluates table as 1 group; returns 1 row or 0 rows",
        "C) Returns NULL if tablewide average is <= 50,000",
        "D) Reverts to row-by-row scanning identical to WHERE"
      ],
      correctAnswer: "B) Valid: Evaluates table as 1 group; returns 1 row or 0 rows",
      answerLetter: "B",
      concept: "In standard SQL, HAVING without GROUP BY treats the entire table as a single aggregate group. If the condition AVG(salary) > 50000 evaluates to TRUE, exactly 1 row with COUNT(*) is returned; if FALSE, an empty result set (0 rows) is returned."
    },
    {
      id: 20,
      moduleId: 2,
      moduleTitle: "GROUP BY with HAVING",
      title: "HAVING Predicates Unprojected in SELECT",
      prompt: "Must an aggregate expression used in HAVING also be projected in the SELECT clause?",
      code: "SELECT dept_id \nFROM Employees \nGROUP BY dept_id \nHAVING SUM(salary) > 100000;",
      options: [
        "A) Fails: aggregates in HAVING must be projected in SELECT",
        "B) Valid: groups filter on aggregates without displaying them",
        "C) Allowed only if SUM(salary) has an alias",
        "D) Requires writing a nested join"
      ],
      correctAnswer: "B) Valid: groups filter on aggregates without displaying them",
      answerLetter: "B",
      concept: "Aggregates inside HAVING are evaluated in intermediate calculation buffers during group reduction. The SQL standard does not require these metrics to be projected in the final SELECT list."
    },
    {
      id: 21,
      moduleId: 2,
      moduleTitle: "GROUP BY with HAVING",
      title: "Projection Column Aliases Inside HAVING",
      prompt: "Can a column alias created in SELECT be referenced directly within HAVING in ANSI SQL?",
      code: "SELECT dept_id, COUNT(*) AS emp_cnt \nFROM Employees \nGROUP BY dept_id \nHAVING emp_cnt > 5;",
      options: [
        "A) Universally allowed across all SQL standards",
        "B) Fails in standard ANSI SQL (HAVING evaluated before SELECT)",
        "C) Valid only if the alias is quoted in double quotes",
        "D) Casts alias to string for comparison"
      ],
      correctAnswer: "B) Fails in standard ANSI SQL (HAVING evaluated before SELECT)",
      answerLetter: "B",
      concept: "Because HAVING is evaluated before SELECT in ANSI SQL's logical execution model, column aliases created in SELECT (such as 'emp_cnt') are not yet bound. Standard SQL requires rewriting the condition as HAVING COUNT(*) > 5 (though engines like MySQL and Snowflake allow aliases as non-standard extensions)."
    },
    {
      id: 22,
      moduleId: 2,
      moduleTitle: "GROUP BY with HAVING",
      title: "Query Optimization: WHERE vs. HAVING Efficiency",
      prompt: "Which query pattern is preferred by database query optimizers and why?",
      code: "Pattern A: \nSELECT dept_id, AVG(salary) FROM Employees \nWHERE dept_id IN (1, 2) GROUP BY dept_id;\n\nPattern B: \nSELECT dept_id, AVG(salary) FROM Employees \nGROUP BY dept_id HAVING dept_id IN (1, 2);",
      options: [
        "A) Pattern B is preferred because group hashing isolates values faster",
        "B) Pattern A is preferred: WHERE drops unneeded rows before group aggregation occurs",
        "C) Pattern B bypasses the scan using index lookups",
        "D) Modern databases reject Pattern B with a compile error"
      ],
      correctAnswer: "B) Pattern A is preferred: WHERE drops unneeded rows before group aggregation occurs",
      answerLetter: "B",
      concept: "Filtering non-aggregate row predicates early in WHERE drastically reduces the volume of rows that must be loaded into memory, hashed, and sorted for GROUP BY aggregation. While clever query optimizers may push HAVING predicates down, writing it in WHERE guarantees early index filtering."
    },
    {
      id: 23,
      moduleId: 2,
      moduleTitle: "GROUP BY with HAVING",
      title: "Boolean OR Disjunction Across Multiple Aggregates",
      prompt: "How does the database evaluate multiple aggregate conditions joined by OR in HAVING?",
      code: "SELECT dept_id, AVG(salary) \nFROM Employees \nGROUP BY dept_id \nHAVING COUNT(*) > 10 OR AVG(salary) > 80000;",
      options: [
        "A) Requires both conditions to match for inclusion",
        "B) Retains groups meeting either condition",
        "C) Syntax error: multiple aggregates cannot use OR",
        "D) Evaluates individual employee rows for 80k"
      ],
      correctAnswer: "B) Retains groups meeting either condition",
      answerLetter: "B",
      concept: "HAVING fully supports standard boolean logic (AND, OR, NOT, parentheses). If a department group has more than 10 members OR an average salary exceeding 80,000, that department group survives the filter."
    },
    {
      id: 24,
      moduleId: 2,
      moduleTitle: "GROUP BY with HAVING",
      title: "Three-Valued Logic in HAVING",
      prompt: "A department group contains only employees with salary = NULL. What is the outcome?",
      code: "SELECT dept_id, AVG(salary) \nFROM Employees \nGROUP BY dept_id \nHAVING AVG(salary) > 50000;",
      options: [
        "A) Average becomes 0, so the group is eliminated",
        "B) Average is NULL; comparison yields UNKNOWN, group is eliminated",
        "C) Raises an unexpected zero-division runtime error",
        "D) Retains group with a NULL average salary"
      ],
      correctAnswer: "B) Average is NULL; comparison yields UNKNOWN, group is eliminated",
      answerLetter: "B",
      concept: "When all values aggregated by AVG() are NULL, the function evaluates to NULL. In SQL's three-valued logic (3VL), comparing NULL > 50000 produces UNKNOWN. Because HAVING filters require a strict TRUE predicate to retain rows, the group is eliminated."
    },
    {
      id: 25,
      moduleId: 2,
      moduleTitle: "GROUP BY with HAVING",
      title: "Duplicate Detection via Composite HAVING Counts",
      prompt: "What is the purpose of grouping by multiple columns with HAVING COUNT(*) > 1?",
      code: "SELECT emp_name, dept_id, COUNT(*) \nFROM Employees \nGROUP BY emp_name, dept_id \nHAVING COUNT(*) > 1;",
      options: [
        "A) Correctly identifies duplicate composite pairs",
        "B) Fails: HAVING requires single-column keys",
        "C) Only checks rows where dept_id is NOT NULL",
        "D) Requires COUNT(DISTINCT emp_id)"
      ],
      correctAnswer: "A) Correctly identifies duplicate composite pairs",
      answerLetter: "A",
      concept: "Grouping by composite attributes (emp_name, dept_id) and filtering with HAVING COUNT(*) > 1 is the canonical relational SQL idiom for identifying duplicate records in tables lacking strict composite unique constraints."
    },
    {
      id: 26,
      moduleId: 2,
      moduleTitle: "GROUP BY with HAVING",
      title: "Global Benchmark Filtering With Scalar Subquery",
      prompt: "Is a scalar subquery allowed inside HAVING to compare group metrics against company-wide averages?",
      code: "SELECT dept_id, AVG(salary) \nFROM Employees \nGROUP BY dept_id \nHAVING AVG(salary) > (SELECT AVG(salary) FROM Employees);",
      options: [
        "A) Invalid: Subqueries are forbidden within the HAVING clause",
        "B) Valid: Filters for departments whose average salary exceeds the overall company average",
        "C) Valid only if rewritten as an INNER JOIN against the aggregate",
        "D) Re-executes the subquery for individual rows prior to grouping"
      ],
      correctAnswer: "B) Valid: Filters for departments whose average salary exceeds the overall company average",
      answerLetter: "B",
      concept: "Scalar subqueries returning a single value are fully valid inside HAVING. This allows direct comparison between group-level aggregated properties and global company-wide benchmarks."
    },
    {
      id: 27,
      moduleId: 2,
      moduleTitle: "GROUP BY with HAVING",
      title: "Correlated Outer References in HAVING",
      prompt: "Can a subquery inside HAVING reference an outer grouped column?",
      code: "SELECT E.dept_id, AVG(E.salary) \nFROM Employees E \nGROUP BY E.dept_id \nHAVING AVG(E.salary) > (SELECT AVG(salary) FROM Employees WHERE dept_id != E.dept_id);",
      options: [
        "A) Fails: subquery cannot reference outer grouped column",
        "B) Valid: compares group average vs. remaining company average",
        "C) Causes an infinite execution loop",
        "D) Automatically unwinds into an outer join"
      ],
      correctAnswer: "B) Valid: compares group average vs. remaining company average",
      answerLetter: "B",
      concept: "Correlated subqueries in HAVING can bind to outer grouped attributes (E.dept_id). In this scenario, it dynamically calculates the average salary of all employees outside the current group and filters for departments that outperform the rest of the company."
    },
    {
      id: 28,
      moduleId: 2,
      moduleTitle: "GROUP BY with HAVING",
      title: "Relational Division: Complete Universal Coverage",
      prompt: "The Projects table contains 3 distinct projects: {P_1, P_2, P_3}. What does this query find?",
      code: "SELECT emp_id \nFROM Emp_projects \nGROUP BY emp_id \nHAVING COUNT(DISTINCT project_id) = (SELECT COUNT(*) FROM Projects);",
      options: [
        "A) Employees working on at least one project",
        "B) Employees working on exactly half of projects",
        "C) Employees assigned to all projects in the company",
        "D) Projects assigned to every employee"
      ],
      correctAnswer: "C) Employees assigned to all projects in the company",
      answerLetter: "C",
      concept: "This query implements relational division (FORALL / universal quantification). By counting an employee's distinct project assignments and comparing it to the total count of projects in the catalog, it isolates employees assigned to every single project."
    },
    {
      id: 29,
      moduleId: 2,
      moduleTitle: "GROUP BY with HAVING",
      title: "Negation Traps: COUNT(col) vs. Zero",
      prompt: "A department has 3 employees. All 3 have salary = NULL. What happens with HAVING COUNT(salary) = 0?",
      code: "SELECT dept_id \nFROM Employees \nGROUP BY dept_id \nHAVING COUNT(salary) = 0;",
      options: [
        "A) Group is eliminated; count cannot equal 0",
        "B) Returns the department: COUNT(salary) evaluates to 0",
        "C) Throws a runtime error evaluating null values",
        "D) Evaluates to NULL = 0 (Unknown) and is discarded"
      ],
      correctAnswer: "B) Returns the department: COUNT(salary) evaluates to 0",
      answerLetter: "B",
      concept: "Unlike SUM() or AVG() which evaluate to NULL when all items are NULL, COUNT(column) evaluates to the integer 0. Consequently, the comparison 0 = 0 evaluates to TRUE, and the department is successfully returned."
    },
    {
      id: 30,
      moduleId: 2,
      moduleTitle: "GROUP BY with HAVING",
      title: "Multi-Metric Spread Analysis",
      prompt: "What business condition does this HAVING filter identify?",
      code: "SELECT dept_id \nFROM Employees \nGROUP BY dept_id \nHAVING MAX(salary) >= 100000 AND MIN(salary) <= 30000;",
      options: [
        "A) Finds departments where the average salary falls between 30k and 100k",
        "B) Finds high-disparity departments with at least one earner >= 100k and at least one earner <= 30k",
        "C) Finds departments where every employee earns between 30k and 100k",
        "D) Restricts results to departments containing exactly two employees"
      ],
      correctAnswer: "B) Finds high-disparity departments with at least one earner >= 100k and at least one earner <= 30k",
      answerLetter: "B",
      concept: "Combining MAX and MIN boundary checks in a single HAVING clause identifies internal wage inequality and spread: at least one employee in the department earns >= 100,000, and at least one employee earns <= 30,000."
    },

    // ════════════════════════════════════════════════════════════════
    // MODULE 3: JOIN Mechanics & Join-Aggregation Interactions
    // ════════════════════════════════════════════════════════════════
    {
      id: 31,
      moduleId: 3,
      moduleTitle: "JOIN Mechanics & Fan-Out",
      title: "The 1-to-Many Fan-Out Multiplication",
      prompt: "Department 10 has 1 manager and 3 employees. What does SUM(D.dept_id) return?",
      code: "SELECT D.dept_id, SUM(D.dept_id) \nFROM Departments D \nJOIN Employees E ON D.dept_id = E.dept_id \nWHERE D.dept_id = 10 \nGROUP BY D.dept_id;",
      options: [
        "A) SUM returns 10",
        "B) SUM returns 30 (duplicated by 3 joined child rows)",
        "C) SUM returns 40",
        "D) SUM returns NULL"
      ],
      correctAnswer: "B) SUM returns 30 (duplicated by 3 joined child rows)",
      answerLetter: "B",
      concept: "Joining a parent table (1) to a child table (Many) replicates the parent row for every matching child record before aggregation occurs. Since Department 10 matches 3 employee rows, the value 10 is summed 3 times (10 + 10 + 10 = 30)."
    },
    {
      id: 32,
      moduleId: 3,
      moduleTitle: "JOIN Mechanics & Fan-Out",
      title: "Cartesian Products With Group Aggregates",
      prompt: "Table A contains 4 rows and Table B contains 5 rows. What is the value of COUNT(*) over their CROSS JOIN?",
      code: "SELECT COUNT(*) \nFROM TableA CROSS JOIN TableB;",
      options: [
        "A) 9 rows",
        "B) 20 rows",
        "C) 4 rows",
        "D) 0 rows"
      ],
      correctAnswer: "B) 20 rows",
      answerLetter: "B",
      concept: "A CROSS JOIN produces a Cartesian product matching every row in Table A with every row in Table B. Total row cardinality = 4 * 5 = 20 rows."
    },
    {
      id: 33,
      moduleId: 3,
      moduleTitle: "JOIN Mechanics & Fan-Out",
      title: "Premature Elimination via INNER JOIN",
      prompt: "Departments has 5 rows. Only 3 departments have assigned employees. What does this query output?",
      code: "SELECT D.dept_id, COUNT(E.emp_id) \nFROM Departments D \nINNER JOIN Employees E ON D.dept_id = E.dept_id \nGROUP BY D.dept_id;",
      options: [
        "A) 5 rows (departments with no employees return 0)",
        "B) 3 rows (unmatched departments dropped by INNER JOIN)",
        "C) 1 row",
        "D) 0 rows"
      ],
      correctAnswer: "B) 3 rows (unmatched departments dropped by INNER JOIN)",
      answerLetter: "B",
      concept: "An INNER JOIN requires matching join keys on both sides and immediately drops departments with 0 employees before the GROUP BY stage. To retain empty departments with count 0, a LEFT OUTER JOIN must be used."
    },
    {
      id: 34,
      moduleId: 3,
      moduleTitle: "JOIN Mechanics & Fan-Out",
      title: "The LEFT JOIN COUNT(*) Flaw",
      prompt: "Department 40 has zero assigned employees. What does COUNT(*) return under LEFT JOIN?",
      code: "SELECT D.dept_id, COUNT(*) \nFROM Departments D \nLEFT JOIN Employees E ON D.dept_id = E.dept_id \nWHERE D.dept_id = 40 \nGROUP BY D.dept_id;",
      options: [
        "A) Returns 0",
        "B) Returns 1 (counts the NULL-padded row)",
        "C) Returns NULL",
        "D) Runtime error"
      ],
      correctAnswer: "B) Returns 1 (counts the NULL-padded row)",
      answerLetter: "B",
      concept: "A LEFT JOIN preserves Department 40 by generating 1 row with NULL-padded values for all columns of Employees. Because COUNT(*) counts total rows irrespective of column NULLs, it returns 1 instead of 0. To count actual child records, use COUNT(E.emp_id)."
    },
    {
      id: 35,
      moduleId: 3,
      moduleTitle: "JOIN Mechanics & Fan-Out",
      title: "Accurate Zero Counts Using COUNT(Column)",
      prompt: "Department 40 has zero assigned employees. What does COUNT(E.emp_id) return?",
      code: "SELECT D.dept_id, COUNT(E.emp_id) AS active_emps \nFROM Departments D \nLEFT JOIN Employees E ON D.dept_id = E.dept_id \nWHERE D.dept_id = 40 \nGROUP BY D.dept_id;",
      options: [
        "A) active_emps = 0",
        "B) active_emps = 1",
        "C) active_emps = NULL",
        "D) 0 rows returned"
      ],
      correctAnswer: "A) active_emps = 0",
      answerLetter: "A",
      concept: "COUNT(column) ignores NULL values. For Department 40, the joined employee fields are NULL-padded (E.emp_id is NULL). Therefore, COUNT(E.emp_id) correctly evaluates to 0."
    },
    {
      id: 36,
      moduleId: 3,
      moduleTitle: "JOIN Mechanics & Fan-Out",
      title: "Predicate Placement: ON vs. WHERE in LEFT JOIN",
      prompt: "Contrast these two queries filtering employees earning > 50k:",
      code: "Q1: SELECT D.dept_id, COUNT(E.emp_id) \n    FROM Departments D \n    LEFT JOIN Employees E ON D.dept_id = E.dept_id AND E.salary > 50000 \n    GROUP BY D.dept_id;\n\nQ2: SELECT D.dept_id, COUNT(E.emp_id) \n    FROM Departments D \n    LEFT JOIN Employees E ON D.dept_id = E.dept_id \n    WHERE E.salary > 50000 \n    GROUP BY D.dept_id;",
      options: [
        "A) Both queries return identical results",
        "B) Q1 keeps all departments (count = 0); Q2 turns into an INNER JOIN, dropping departments without 50k earners",
        "C) Q1 fails: filter criteria cannot reside in ON",
        "D) Q2 preserves departments with count 0"
      ],
      correctAnswer: "B) Q1 keeps all departments (count = 0); Q2 turns into an INNER JOIN, dropping departments without 50k earners",
      answerLetter: "B",
      concept: "• In Q1, the predicate in the ON clause filters matching employee candidates before the outer join, preserving all departments (unmatched departments receive count 0).\n• In Q2, the WHERE clause evaluates after the outer join. For departments with no 50k earners, E.salary is NULL. The condition NULL > 50000 evaluates to UNKNOWN, discarding those department rows and silently converting the LEFT JOIN into an INNER JOIN."
    },
    {
      id: 37,
      moduleId: 3,
      moduleTitle: "JOIN Mechanics & Fan-Out",
      title: "Cross-Product Fan-Out Across Multiple 1-to-Many Joins",
      prompt: "An employee has 2 phone numbers and 3 certifications. What counts are produced by joining both tables?",
      code: "SELECT E.emp_id, COUNT(P.phone_id), COUNT(C.cert_id) \nFROM Employees E \nLEFT JOIN PhoneNumbers P ON E.emp_id = P.emp_id \nLEFT JOIN Certifications C ON E.emp_id = C.emp_id \nWHERE E.emp_id = 101 \nGROUP BY E.emp_id;",
      options: [
        "A) Phones = 2, Certs = 3",
        "B) Phones = 6, Certs = 6 (2 * 3 Cartesian product)",
        "C) Phones = 5, Certs = 5",
        "D) Phones = 2, Certs = 6"
      ],
      correctAnswer: "B) Phones = 6, Certs = 6 (2 * 3 Cartesian product)",
      answerLetter: "B",
      concept: "Joining multiple 1-to-many child tables to the same parent creates a Cartesian product among the children. 2 phones and 3 certifications generate 2 * 3 = 6 intermediate joined rows, causing both counts to erroneously report 6."
    },
    {
      id: 38,
      moduleId: 3,
      moduleTitle: "JOIN Mechanics & Fan-Out",
      title: "Resolving Multi-Join Fan-Out via Pre-Aggregation",
      prompt: "What is the standard production design pattern to prevent the fan-out issue seen in Q37?",
      code: "-- Solution pattern for multi-child joins",
      options: [
        "A) Add DISTINCT inside the SELECT list projection",
        "B) Pre-aggregate child tables independently in CTEs/subqueries before joining to parent",
        "C) Replace LEFT JOINs with RIGHT JOINs",
        "D) Group by all phone and certification IDs simultaneously"
      ],
      correctAnswer: "B) Pre-aggregate child tables independently in CTEs/subqueries before joining to parent",
      answerLetter: "B",
      concept: "Pre-aggregating each child table independently inside Common Table Expressions (CTEs) or derived tables collapses each 1:Many relationship into a 1:1 summary prior to the main join. This completely prevents Cartesian row explosion."
    },
    {
      id: 39,
      moduleId: 3,
      moduleTitle: "JOIN Mechanics & Fan-Out",
      title: "Hierarchical Self-Join Aggregation",
      prompt: "What does this query calculate?",
      code: "SELECT M.emp_id, COUNT(E.emp_id) \nFROM Employees M \nJOIN Employees E ON M.emp_id = E.manager_id \nGROUP BY M.emp_id \nHAVING COUNT(E.emp_id) >= 5;",
      options: [
        "A) Finds workers with 5 managers",
        "B) Finds managers supervising >= 5 direct reports",
        "C) Identifies top 5 highest paid managers",
        "D) Finds departments with 5 employees"
      ],
      correctAnswer: "B) Finds managers supervising >= 5 direct reports",
      answerLetter: "B",
      concept: "A self-join joining Employees M (as manager) to Employees E (as employee) on M.emp_id = E.manager_id models organizational parent-child hierarchies. Aggregating by M.emp_id counts the number of direct subordinates per manager."
    },
    {
      id: 40,
      moduleId: 3,
      moduleTitle: "JOIN Mechanics & Fan-Out",
      title: "FULL OUTER JOIN with COALESCE Grouping Keys",
      prompt: "Why is COALESCE used in the GROUP BY clause of a FULL OUTER JOIN?",
      code: "SELECT COALESCE(D.dept_id, E.dept_id), COUNT(E.emp_id) \nFROM Departments D \nFULL OUTER JOIN Employees E ON D.dept_id = E.dept_id \nGROUP BY COALESCE(D.dept_id, E.dept_id);",
      options: [
        "A) Returns only departments with active employees",
        "B) Includes all departments (count=0 if empty) and unassigned employees under their own ID",
        "C) Automatically drops records with NULLs on either side",
        "D) Syntax error: COALESCE is illegal inside GROUP BY"
      ],
      correctAnswer: "B) Includes all departments (count=0 if empty) and unassigned employees under their own ID",
      answerLetter: "B",
      concept: "A FULL OUTER JOIN retains unmatched rows from both sides. Unassigned employees have D.dept_id = NULL, and empty departments have E.dept_id = NULL. COALESCE(D.dept_id, E.dept_id) picks whichever ID is present, creating a unified non-null grouping key."
    },
    {
      id: 41,
      moduleId: 3,
      moduleTitle: "JOIN Mechanics & Fan-Out",
      title: "Relational Anti-Join via Aggregate HAVING Filters",
      prompt: "What relational set operation does this query execute?",
      code: "SELECT D.dept_id \nFROM Departments D \nLEFT JOIN Employees E ON D.dept_id = E.dept_id \nGROUP BY D.dept_id \nHAVING COUNT(E.emp_id) = 0;",
      options: [
        "A) Relational Intersection (D ∩ E)",
        "B) Relational Difference (D - E): departments with no staff",
        "C) Full union of departments and staff",
        "D) Symmetric Difference"
      ],
      correctAnswer: "B) Relational Difference (D - E): departments with no staff",
      answerLetter: "B",
      concept: "This query performs an Anti-Join, which computes the relational difference (Departments - Employees). It returns only those departments that have no corresponding employee rows."
    },
    {
      id: 42,
      moduleId: 3,
      moduleTitle: "JOIN Mechanics & Fan-Out",
      title: "Non-Equi Band Joins and Grouping",
      prompt: "Is joining on a non-equality range expression (BETWEEN) valid prior to grouping?",
      code: "SELECT S.grade, COUNT(*) \nFROM SalaryGrades S \nJOIN Employees E ON E.salary BETWEEN S.min_salary AND S.max_salary \nGROUP BY S.grade;",
      options: [
        "A) Fails: joins must use the equality operator",
        "B) Groups employees into salary bands and counts each",
        "C) Always produces a Cartesian product",
        "D) Fails if any employee salary is NULL"
      ],
      correctAnswer: "B) Groups employees into salary bands and counts each",
      answerLetter: "B",
      concept: "Non-equi joins using comparison operators (BETWEEN, >=, <=) allow continuous numerical values to be mapped into discrete dimension bands (e.g. Salary Grades) before grouping and aggregation."
    },
    {
      id: 43,
      moduleId: 3,
      moduleTitle: "JOIN Mechanics & Fan-Out",
      title: "Pushing Aggregations Down (Derived Tables)",
      prompt: "What is the primary performance benefit of pre-aggregating in a derived table before joining?",
      code: "SELECT D.dept_name, Agg.avg_sal \nFROM Departments D \nJOIN (SELECT dept_id, AVG(salary) AS avg_sal FROM Employees GROUP BY dept_id) Agg \n  ON D.dept_id = Agg.dept_id;",
      options: [
        "A) Engine bypasses evaluating join ON criteria",
        "B) Reduces intermediate join volume by summarizing employees to 1 row per department before the join",
        "C) Eliminates all underlying table index requirements",
        "D) Prevents table lock escalations"
      ],
      correctAnswer: "B) Reduces intermediate join volume by summarizing employees to 1 row per department before the join",
      answerLetter: "B",
      concept: "Pushing aggregation down condenses thousands of employee rows into 1 summary row per department before performing the join. This dramatically slashes intermediate row volume and join memory consumption."
    },
    {
      id: 44,
      moduleId: 3,
      moduleTitle: "JOIN Mechanics & Fan-Out",
      title: "Join Behavior on NULL Keys",
      prompt: "Row 1 in Table A has key = NULL; Row 1 in Table B has key = NULL. What is COUNT(*) of their INNER JOIN?",
      code: "SELECT COUNT(*) \nFROM TableA A JOIN TableB B ON A.key = B.key;",
      options: [
        "A) Matches, producing 1 row",
        "B) Does not match (NULL = NULL is UNKNOWN)",
        "C) Matches only if ANSI_NULLS is OFF",
        "D) Ambiguous join error"
      ],
      correctAnswer: "B) Does not match (NULL = NULL is UNKNOWN)",
      answerLetter: "B",
      concept: "In standard SQL join predicates, the equality comparison NULL = NULL evaluates to UNKNOWN. Since join conditions require a TRUE evaluation, NULL keys never match. To join on nullable keys matching NULLs, use IS NOT DISTINCT FROM (or COALESCE)."
    },
    {
      id: 45,
      moduleId: 3,
      moduleTitle: "JOIN Mechanics & Fan-Out",
      title: "Arithmetic Aggregate Comparisons Across Joins",
      prompt: "What does this HAVING condition identify?",
      code: "SELECT D.dept_name \nFROM Departments D \nJOIN Employees E ON D.dept_id = E.dept_id \nGROUP BY D.dept_id, D.dept_name \nHAVING MAX(E.salary) > 2 * MIN(E.salary);",
      options: [
        "A) Identifies departments where top earner makes over double the lowest earner",
        "B) Identifies departments where all staff make double the minimum",
        "C) Syntax error: multiple aggregates cannot be multiplied",
        "D) Filters departments with at least two employees"
      ],
      correctAnswer: "A) Identifies departments where top earner makes over double the lowest earner",
      answerLetter: "A",
      concept: "Expressions in HAVING can perform cross-aggregate arithmetic (MAX > 2 * MIN) on joined tables to isolate internal department salary disparity ratios."
    },
    {
      id: 46,
      moduleId: 3,
      moduleTitle: "JOIN Mechanics & Fan-Out",
      title: "Lateral Joins (CROSS APPLY) vs. GROUP BY MAX()",
      prompt: "What key advantage does CROSS JOIN LATERAL offer over a standard GROUP BY MAX() query?",
      code: "SELECT D.dept_name, TopEmp.salary \nFROM Departments D \nCROSS JOIN LATERAL (\n  SELECT salary FROM Employees E \n  WHERE E.dept_id = D.dept_id \n  ORDER BY salary DESC LIMIT 1\n) TopEmp;",
      options: [
        "A) Behaves identically to standard GROUP BY with MAX(), but runs slower",
        "B) Can return non-aggregated attributes (e.g., emp_name, hire_date) of the top earner without extra self-joins",
        "C) Cannot return any results if dept_name contains duplicates",
        "D) Converts the query into a recursive loop"
      ],
      correctAnswer: "B) Can return non-aggregated attributes (e.g., emp_name, hire_date) of the top earner without extra self-joins",
      answerLetter: "B",
      concept: "A standard GROUP BY MAX() can only return the grouped key and the maximum numerical value; retrieving the top earner's name or hire date requires an expensive secondary self-join. Lateral joins (CROSS APPLY in SQL Server) compute top-N records per group and project full row attributes directly."
    },
    {
      id: 47,
      moduleId: 3,
      moduleTitle: "JOIN Mechanics & Fan-Out",
      title: "Mixed Granularity: Detail Rows with Group Average",
      prompt: "A query must return each employee's name, their department ID, and their department's average salary. Can this be done with standard GROUP BY alone?",
      code: "-- Mixed granularity requirement",
      options: [
        "A) Can be written with a standard GROUP BY by adding emp_name to the grouping list",
        "B) Cannot be done with standard GROUP BY alone; grouping by emp_name collapses rows to employee level, breaking the department average",
        "C) Requires using GROUP BY E.dept_id while keeping emp_name in SELECT",
        "D) Can be achieved by adding HAVING emp_name IS NOT NULL"
      ],
      correctAnswer: "B) Cannot be done with standard GROUP BY alone; grouping by emp_name collapses rows to employee level, breaking the department average",
      answerLetter: "B",
      concept: "A single standard GROUP BY cannot mix row-level detail with group-level aggregations because adding emp_name to GROUP BY collapses the grouping to the employee level. This requirement must be solved using SQL Window Functions (AVG(salary) OVER(PARTITION BY dept_id)) or a join against a pre-aggregated subquery."
    },
    {
      id: 48,
      moduleId: 3,
      moduleTitle: "JOIN Mechanics & Fan-Out",
      title: "RIGHT JOIN with HAVING COUNT Filter",
      prompt: "What does filtering a RIGHT JOIN with HAVING COUNT(E.emp_id) > 0 produce?",
      code: "SELECT D.dept_name, COUNT(E.emp_id) \nFROM Employees E \nRIGHT JOIN Departments D ON E.dept_id = D.dept_id \nGROUP BY D.dept_name \nHAVING COUNT(E.emp_id) > 0;",
      options: [
        "A) Produces the exact same result as an INNER JOIN between Departments and Employees grouped by dept_name",
        "B) Produces the same result as a FULL OUTER JOIN with no HAVING clause",
        "C) Produces the same result as a LEFT JOIN with HAVING COUNT(E.emp_id) = 0",
        "D) Produces the same result as a CROSS JOIN"
      ],
      correctAnswer: "A) Produces the exact same result as an INNER JOIN between Departments and Employees grouped by dept_name",
      answerLetter: "A",
      concept: "A RIGHT JOIN preserves all departments (even those with no employees). However, filtering by HAVING COUNT(E.emp_id) > 0 eliminates all departments that have zero employees, producing the exact same result set as an INNER JOIN."
    },
    {
      id: 49,
      moduleId: 3,
      moduleTitle: "JOIN Mechanics & Fan-Out",
      title: "Aggregating Many-to-Many Bridge Tables",
      prompt: "An employee has 3 bridge rows in Emp_projects and all three have hours_billed = NULL. What happens with HAVING SUM(hours_billed) > 100?",
      code: "SELECT E.emp_name, SUM(EP.hours_billed) AS total_hours \nFROM Employees E \nJOIN Emp_projects EP ON E.emp_id = EP.emp_id \nGROUP BY E.emp_id, E.emp_name \nHAVING SUM(EP.hours_billed) > 100;",
      options: [
        "A) The employee is returned with total_hours = 0",
        "B) The employee is returned with total_hours = NULL",
        "C) The employee is excluded because SUM(NULL) > 100 evaluates to Unknown",
        "D) An aggregate execution error is raised"
      ],
      correctAnswer: "C) The employee is excluded because SUM(NULL) > 100 evaluates to Unknown",
      answerLetter: "C",
      concept: "When all aggregated rows for an employee contain NULL in hours_billed, SUM() returns NULL. In SQL's three-valued logic, comparing NULL > 100 yields UNKNOWN, so the employee group is filtered out by the HAVING clause."
    },
    {
      id: 50,
      moduleId: 3,
      moduleTitle: "JOIN Mechanics & Join-Aggregation Interactions",
      title: "The Complete Logical Query Processing Pipeline",
      prompt: "What is the correct logical execution sequence for this complex SQL statement?",
      code: "SELECT D.dept_name, P.project_name, SUM(EP.hours_billed) AS billable_hrs\nFROM Departments D \nJOIN Employees E ON D.dept_id = E.dept_id\nJOIN Emp_projects EP ON E.emp_id = EP.emp_id \nJOIN Projects P ON EP.project_id = P.project_id\nWHERE D.region = 'EMEA' \nGROUP BY D.dept_name, P.project_name\nHAVING SUM(EP.hours_billed) > 500 \nORDER BY billable_hrs DESC;",
      options: [
        "A) FROM & JOINs -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY",
        "B) SELECT -> FROM & JOINs -> GROUP BY -> HAVING -> ORDER BY",
        "C) FROM & JOINs -> GROUP BY -> WHERE -> HAVING -> SELECT -> ORDER BY",
        "D) WHERE -> FROM & JOINs -> GROUP BY -> HAVING -> SELECT -> ORDER BY"
      ],
      correctAnswer: "A) FROM & JOINs -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY",
      answerLetter: "A",
      concept: "The standard ANSI SQL logical query execution order is:\n1. FROM & JOINs: Source Cartesian table bindings and join combinations\n2. WHERE: Early row-level filtering to reduce working dataset\n3. GROUP BY: Bucketing rows into distinct aggregate groups\n4. HAVING: Group-level metric filtering\n5. SELECT: Column expressions evaluation and alias projections\n6. ORDER BY: Sorting the resulting presentation dataset."
    }
  ]
};

// Export to window
if (typeof window !== 'undefined') {
  window.SQL_MCQ_DATA = SQL_MCQ_DATA;
}
