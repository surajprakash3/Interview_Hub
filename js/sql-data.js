/**
 * SQL Tutorials & Top 50 Interview Queries Data
 * Source: KN Academy - Top 50 SQL Queries for Interview
 */
const SQL_DATA = {
  title: 'SQL Tutorials — Top 50 Queries for Interview',
  description: 'Practice real-world SQL interview queries based on EmployeeDetails and EmployeeSalary schemas.',
  tables: [
    {
      name: 'EmployeeDetails',
      description: 'Stores personal and managerial info of employees.',
      columns: [
        { name: 'EmpId', type: 'INT', isKey: true },
        { name: 'FullName', type: 'VARCHAR(50)' },
        { name: 'ManagerId', type: 'INT' },
        { name: 'DateOfJoining', type: 'DATE' },
        { name: 'City', type: 'VARCHAR(50)' }
      ],
      sampleRows: [
        { EmpId: 1, FullName: 'Praful Sharma', ManagerId: 100, DateOfJoining: '01/31/2019', City: 'Jhansi' },
        { EmpId: 2, FullName: 'Manglam Sen', ManagerId: 105, DateOfJoining: '01/30/2023', City: 'Kolkata' },
        { EmpId: 3, FullName: 'Mohit Agarwal', ManagerId: 107, DateOfJoining: '27/11/2022', City: 'New Delhi' }
      ]
    },
    {
      name: 'EmployeeSalary',
      description: 'Stores project allocation, base compensation, and variable pay.',
      columns: [
        { name: 'EmpId', type: 'INT', isKey: true },
        { name: 'Project', type: 'VARCHAR(20)' },
        { name: 'Salary', type: 'DECIMAL(10,2)' },
        { name: 'Variable', type: 'DECIMAL(10,2)' }
      ],
      sampleRows: [
        { EmpId: 1, Project: 'P1', Salary: 8000, Variable: 400 },
        { EmpId: 3, Project: 'P2', Salary: 7000, Variable: 1000 },
        { EmpId: 4, Project: 'P1', Salary: 12000, Variable: 0 }
      ]
    }
  ],

  queries: [
    {
      id: 1,
      category: 'Basic Queries',
      question: 'Print all Records from EmployeeDetails Table?',
      sql: `SELECT * FROM EmployeeDetails;`,
      explanation: 'Fetches all rows and columns from the EmployeeDetails table.'
    },
    {
      id: 2,
      category: 'Basic Queries',
      question: 'Print details of the Employee whose Employee Id is 1.',
      sql: `SELECT * FROM EmployeeDetails WHERE EmpId = 1;`,
      explanation: 'Uses the WHERE clause to filter rows matching EmpId = 1.'
    },
    {
      id: 3,
      category: 'Basic Queries',
      question: 'Print details of all Employees Whose Manager ID is 100 And Their City is Jhansi.',
      sql: `SELECT * FROM EmployeeDetails 
WHERE ManagerId = 100 AND City = 'Jhansi';`,
      explanation: 'Combines multiple filtering conditions using the AND logical operator.'
    },
    {
      id: 4,
      category: 'Basic Queries',
      question: 'Print All Unique Projects Available in EmployeeSalary Table.',
      sql: `SELECT DISTINCT(Project) FROM EmployeeSalary;`,
      explanation: 'The DISTINCT keyword eliminates duplicate project names from the output.'
    },
    {
      id: 5,
      category: 'Aggregations',
      question: 'Fetch Count of Employees Working in P1 Project?',
      sql: `SELECT COUNT(*) FROM EmployeeSalary WHERE Project = 'P1';`,
      explanation: 'Counts total number of rows where Project equals P1.'
    },
    {
      id: 6,
      category: 'Aggregations',
      question: 'Write an SQL query to find the maximum, minimum, and average salary of the employees.',
      sql: `SELECT 
    MAX(Salary) AS MaxSalary, 
    MIN(Salary) AS MinSalary, 
    AVG(Salary) AS AvgSalary 
FROM EmployeeSalary;`,
      explanation: 'Uses aggregate functions MAX, MIN, and AVG over the Salary column.'
    },
    {
      id: 7,
      category: 'Basic Queries',
      question: 'Write an SQL query to find the employee id whose salary lies in the range of 9000 and 15000.',
      sql: `SELECT EmpId, Salary
FROM EmployeeSalary
WHERE Salary BETWEEN 9000 AND 15000;`,
      explanation: 'The BETWEEN operator is inclusive of both the lower (9000) and upper (15000) boundaries.'
    },
    {
      id: 8,
      category: 'Basic Queries',
      question: 'Print All Employees Id Who live in Jhansi City or Their Manager Id is 100.',
      sql: `SELECT EmpId
FROM EmployeeDetails
WHERE City = 'Jhansi' OR ManagerId = 100;`,
      explanation: 'Uses the OR logical operator to return records satisfying either condition.'
    },
    {
      id: 9,
      category: 'Basic Queries',
      question: 'Write an SQL query to fetch all those employees who work on Projects other than P2.',
      sql: `SELECT EmpId
FROM EmployeeSalary
WHERE NOT Project = 'P2';

-- Alternative:
SELECT EmpId
FROM EmployeeSalary
WHERE Project <> 'P2';`,
      explanation: 'Excludes records matching P2 using NOT or the inequality operator <>.'
    },
    {
      id: 10,
      category: 'Basic Queries',
      question: 'Write an SQL query to display the total salary of each employee adding the Salary with Variable value.',
      sql: `SELECT EmpId,
       (Salary + Variable) AS TotalSalary
FROM EmployeeSalary;`,
      explanation: 'Performs arithmetic addition between Salary and Variable columns and aliases it as TotalSalary.'
    },
    {
      id: 11,
      category: 'Pattern Matching',
      question: 'Write an SQL query to display the Names of the Employee Where Second Letter of the Name is a.',
      sql: `SELECT FullName
FROM EmployeeDetails
WHERE FullName LIKE '_a%';`,
      explanation: 'The underscore (_) wildcard matches exactly one character, followed by "a" and any trailing string (%-wildcard).'
    },
    {
      id: 12,
      category: 'Set Operations',
      question: 'Write an SQL query to fetch all the EmpIds which are present in either of the tables – ‘EmployeeDetails’ and ‘EmployeeSalary’.',
      sql: `SELECT EmpId FROM EmployeeDetails
UNION 
SELECT EmpId FROM EmployeeSalary;`,
      explanation: 'UNION combines results from both queries and removes duplicate EmpIds.'
    },
    {
      id: 13,
      category: 'Set Operations',
      question: 'Write an SQL query to fetch all EmpIds (including duplicates) present in either table.',
      sql: `SELECT EmpId FROM EmployeeDetails
UNION ALL
SELECT EmpId FROM EmployeeSalary;`,
      explanation: 'UNION ALL retains all rows from both tables including duplicate EmpIds.'
    },
    {
      id: 14,
      category: 'Subqueries',
      question: 'Write an SQL query to fetch the EmpIds that are present in both the tables – ‘EmployeeDetails’ and ‘EmployeeSalary’.',
      sql: `SELECT EmpId FROM EmployeeDetails
WHERE EmpId IN (SELECT EmpId FROM EmployeeSalary);`,
      explanation: 'Uses a subquery with the IN clause to find the intersection of EmpIds present in both tables.'
    },
    {
      id: 15,
      category: 'Subqueries',
      question: 'Write an SQL query to fetch the EmpIds that are present in EmployeeDetails but not in EmployeeSalary.',
      sql: `SELECT EmpId FROM EmployeeDetails
WHERE EmpId NOT IN (SELECT EmpId FROM EmployeeSalary);`,
      explanation: 'NOT IN excludes any employee ID that has an entry in the EmployeeSalary table.'
    },
    {
      id: 16,
      category: 'String Functions',
      question: 'Write an SQL query to fetch the employee’s full names and replace the space with ‘-’.',
      sql: `SELECT REPLACE(FullName, ' ', '-') AS HyphenatedName
FROM EmployeeDetails;`,
      explanation: 'The REPLACE(str, from_str, to_str) function substitutes every whitespace character with a hyphen.'
    },
    {
      id: 17,
      category: 'String Functions',
      question: 'Write an SQL query to display both the EmpId and ManagerId together as NewId.',
      sql: `SELECT CONCAT(EmpId, ManagerId) AS NewId
FROM EmployeeDetails;`,
      explanation: 'The CONCAT function joins the string representations of EmpId and ManagerId together.'
    },
    {
      id: 18,
      category: 'String Functions',
      question: 'Write a query to fetch only the first name (string before space) from the FullName column of the EmployeeDetails table.',
      sql: `SELECT MID(FullName, 1, LOCATE(' ', FullName) - 1) AS FirstName
FROM EmployeeDetails;

-- Alternative in PostgreSQL / SQL Server:
-- SELECT SUBSTRING(FullName, 1, CHARINDEX(' ', FullName) - 1) FROM EmployeeDetails;`,
      explanation: 'Uses LOCATE to find the position of the first whitespace and MID/SUBSTRING to extract from index 1.'
    },
    {
      id: 19,
      category: 'String Functions',
      question: 'Write an SQL query to uppercase the name of the employee and lowercase the city values.',
      sql: `SELECT UPPER(FullName) AS UpperName, 
       LOWER(City) AS LowerCity 
FROM EmployeeDetails;`,
      explanation: 'UPPER() transforms characters to capital case; LOWER() converts characters to small case.'
    },
    {
      id: 20,
      category: 'DML & Updates',
      question: 'Write an SQL query to update the employee names by removing leading and trailing spaces.',
      sql: `UPDATE EmployeeDetails
SET FullName = LTRIM(RTRIM(FullName));`,
      explanation: 'RTRIM removes trailing spaces and LTRIM strips leading whitespaces.'
    },
    {
      id: 21,
      category: 'Subqueries',
      question: 'Write an SQL query to fetch employee names having a salary greater than or equal to 5000 and less than or equal to 10000.',
      sql: `SELECT FullName
FROM EmployeeDetails
WHERE EmpId IN (
    SELECT EmpId 
    FROM EmployeeSalary
    WHERE Salary BETWEEN 5000 AND 10000
);`,
      explanation: 'Subquery filters EmpIds from EmployeeSalary within the salary range, and outer query retrieves their names.'
    },
    {
      id: 22,
      category: 'Date Functions',
      question: 'Write an SQL query to fetch all the Employee details from the EmployeeDetails table who joined in the Year 2022.',
      sql: `SELECT * FROM EmployeeDetails
WHERE YEAR(DateOfJoining) = 2022;`,
      explanation: 'Extracts the year integer component from the DateOfJoining column using the YEAR() function.'
    },
    {
      id: 23,
      category: 'Subqueries',
      question: 'Write an SQL query to fetch all employee records from EmployeeDetails who have a salary record in EmployeeSalary table.',
      sql: `SELECT * FROM EmployeeDetails E
WHERE EXISTS (
    SELECT 1 FROM EmployeeSalary S 
    WHERE E.EmpId = S.EmpId
);`,
      explanation: 'The EXISTS operator tests for the existence of rows returned by the correlated subquery.'
    },
    {
      id: 24,
      category: 'Aggregations',
      question: 'Write an SQL query to fetch the project-wise count of employees sorted by project count in descending order.',
      sql: `SELECT Project, COUNT(EmpId) AS ProjectCount
FROM EmployeeSalary
GROUP BY Project
ORDER BY ProjectCount DESC;`,
      explanation: 'GROUP BY aggregates rows by project, and ORDER BY ... DESC sorts from highest count to lowest.'
    },
    {
      id: 25,
      category: 'Joins',
      question: 'Write an SQL query to fetch all the Employees who are also managers from the EmployeeDetails table.',
      sql: `SELECT DISTINCT E.FullName
FROM EmployeeDetails E
INNER JOIN EmployeeDetails M
    ON E.EmpId = M.ManagerId;`,
      explanation: 'Self-join matching employee IDs to manager IDs across the same table.'
    },
    {
      id: 26,
      category: 'Aggregations',
      question: 'Write an SQL query to fetch records from EmployeeDetails Where Manager Id is Coming More than Once.',
      sql: `SELECT * FROM EmployeeDetails
WHERE ManagerId IN (
    SELECT ManagerId
    FROM EmployeeDetails
    GROUP BY ManagerId
    HAVING COUNT(ManagerId) > 1
);`,
      explanation: 'HAVING filters aggregated groups where the count of manager occurrences exceeds 1.'
    },
    {
      id: 27,
      category: 'Window Functions',
      question: 'Write an SQL query to fetch only odd rows from the table.',
      sql: `SELECT E.EmpId, E.Project, E.Salary
FROM (
    SELECT *, ROW_NUMBER() OVER(ORDER BY EmpId) AS RowNumber
    FROM EmployeeSalary
) E
WHERE E.RowNumber % 2 = 1;`,
      explanation: 'ROW_NUMBER() assigns sequential integers to each row, and modulo (% 2 = 1) picks odd rows.'
    },
    {
      id: 28,
      category: 'Basic Queries',
      question: 'Write an SQL query to fetch only even rows from the table.',
      sql: `SELECT * FROM EmployeeDetails
WHERE MOD(EmpId, 2) = 0;`,
      explanation: 'MOD(EmpId, 2) = 0 checks for even numbered primary keys.'
    },
    {
      id: 29,
      category: 'DDL & Structure',
      question: 'Write an SQL query to create a new table with data and structure copied from another table.',
      sql: `CREATE TABLE NewTable AS
SELECT * FROM EmployeeSalary;`,
      explanation: 'Creates a duplicate table structure and populates it with all rows from EmployeeSalary.'
    },
    {
      id: 30,
      category: 'Window Functions',
      question: 'Write an SQL query to fetch top n records (e.g. top 3 highest earning employees).',
      sql: `SELECT *
FROM EmployeeSalary
ORDER BY Salary DESC 
LIMIT 3;`,
      explanation: 'ORDER BY Salary DESC sorts from highest to lowest, and LIMIT 3 constrains the output to 3 rows.'
    },
    {
      id: 31,
      category: 'Subqueries',
      question: 'Write SQL query to find the N-th (e.g. 3rd) highest salary from a table without using TOP or LIMIT.',
      sql: `SELECT Salary
FROM EmployeeSalary Emp1
WHERE (3 - 1) = (
    SELECT COUNT(DISTINCT Emp2.Salary)
    FROM EmployeeSalary Emp2
    WHERE Emp2.Salary > Emp1.Salary
);`,
      explanation: 'Correlated subquery counts how many distinct salaries are strictly greater than Emp1.Salary.'
    },
    {
      id: 32,
      category: 'Sorting & Ordering',
      question: 'Order Employee names based on alphabetical order.',
      sql: `SELECT FullName 
FROM EmployeeDetails 
ORDER BY FullName ASC;`,
      explanation: 'Sorts full names in ascending alphabetical (A-Z) order.'
    },
    {
      id: 33,
      category: 'Joins',
      question: 'Order Employee Names and Salary based on Salary.',
      sql: `SELECT E.FullName, ES.Salary 
FROM EmployeeDetails E
INNER JOIN EmployeeSalary ES 
    ON E.EmpId = ES.EmpId 
ORDER BY ES.Salary ASC;`,
      explanation: 'Joins both tables on EmpId and orders the combined records by salary.'
    },
    {
      id: 34,
      category: 'Aggregations',
      question: 'Print Total Salary Going out from Each Project.',
      sql: `SELECT Project, SUM(Salary) AS TotalProjectSalary 
FROM EmployeeSalary 
GROUP BY Project;`,
      explanation: 'Sums salaries allocated per project group.'
    },
    {
      id: 35,
      category: 'Date Functions',
      question: 'Print All Employee Details Whose Joining Date is Not in Last Year.',
      sql: `SELECT * FROM EmployeeDetails
WHERE DateOfJoining < CURRENT_DATE - INTERVAL 1 YEAR;`,
      explanation: 'Checks if joining date is older than 1 year prior to the current system date.'
    },
    {
      id: 36,
      category: 'Subqueries',
      question: 'Print All Employees Who Get Paid Above the Average Salary.',
      sql: `SELECT E.*, ES.Salary 
FROM EmployeeDetails E
INNER JOIN EmployeeSalary ES 
    ON E.EmpId = ES.EmpId
WHERE ES.Salary > (SELECT AVG(Salary) FROM EmployeeSalary);`,
      explanation: 'Subquery calculates overall average salary, and outer query filters employees earning more.'
    },
    {
      id: 37,
      category: 'Date Functions',
      question: 'Print All Employees who have been with the company for more than 4 years.',
      sql: `SELECT * FROM EmployeeDetails 
WHERE YEAR(CURRENT_DATE) - YEAR(DateOfJoining) > 4;`,
      explanation: 'Calculates the year difference between the current date and DateOfJoining.'
    },
    {
      id: 38,
      category: 'Date Functions',
      question: 'Print All Employees with their total number of years of service.',
      sql: `SELECT *, 
       (YEAR(CURRENT_DATE) - YEAR(DateOfJoining)) AS ServiceYears 
FROM EmployeeDetails;`,
      explanation: 'Calculates and displays tenure in completed years.'
    },
    {
      id: 39,
      category: 'Aggregations',
      question: 'Print Total Employees in Each Project.',
      sql: `SELECT Project, COUNT(*) AS TotalEmployees 
FROM EmployeeSalary 
GROUP BY Project;`,
      explanation: 'Counts total headcount per project.'
    },
    {
      id: 40,
      category: 'Aggregations',
      question: 'Return list of all Manager IDs ordered by total number of employees managed by them.',
      sql: `SELECT ManagerId, COUNT(*) AS NumEmployees 
FROM EmployeeDetails
GROUP BY ManagerId
ORDER BY NumEmployees DESC;`,
      explanation: 'Groups records by ManagerId and counts supervised employees.'
    },
    {
      id: 41,
      category: 'Subqueries',
      question: 'Return list of all employees serving for more than 2 years and not in Project P2 and P3.',
      sql: `SELECT * FROM EmployeeSalary
WHERE Project NOT IN ('P2', 'P3') 
  AND EmpId IN (
      SELECT EmpId FROM EmployeeDetails
      WHERE YEAR(CURRENT_DATE) - YEAR(DateOfJoining) > 2
  );`,
      explanation: 'Combines project exclusion with a date-difference subquery filter.'
    },
    {
      id: 42,
      category: 'Aggregations',
      question: 'Select Average Salary from Each Project.',
      sql: `SELECT Project, AVG(Salary) AS AvgSalary 
FROM EmployeeSalary
GROUP BY Project;`,
      explanation: 'Calculates mean salary across each distinct project.'
    },
    {
      id: 43,
      category: 'Aggregations',
      question: 'Select Project with total Salary whose sum is greater than the maximum average salary project-wise.',
      sql: `SELECT Project, SUM(Salary) AS TotalSalary
FROM EmployeeSalary
GROUP BY Project 
HAVING SUM(Salary) > (
    SELECT MAX(AvgSalary) 
    FROM (
        SELECT AVG(Salary) AS AvgSalary 
        FROM EmployeeSalary 
        GROUP BY Project
    ) AS ProjectAverages
);`,
      explanation: 'Nested subquery finds highest average project salary, compared in the HAVING clause.'
    },
    {
      id: 44,
      category: 'DDL & Structure',
      question: 'Add new column "Role" in EmployeeDetails table.',
      sql: `ALTER TABLE EmployeeDetails
ADD Role VARCHAR(255);`,
      explanation: 'Uses ALTER TABLE statement to add a new column schema definition.'
    },
    {
      id: 45,
      category: 'DML & Updates',
      question: 'Update the value of Role: if Salary + Variable < 20000 then "Analyst", otherwise "Sr Analyst".',
      sql: `UPDATE EmployeeDetails ed 
INNER JOIN EmployeeSalary es 
    ON ed.EmpId = es.EmpId
SET ed.Role = (
    CASE 
        WHEN (es.Salary + es.Variable) < 20000 THEN 'Analyst'
        ELSE 'Sr Analyst'
    END
);`,
      explanation: 'CASE WHEN conditional logic applied inside an UPDATE statement with an INNER JOIN.'
    },
    {
      id: 46,
      category: 'String Functions',
      question: 'Produce the output in the formatted syntax: Name(Role).',
      sql: `SELECT CONCAT(FullName, '(', Role, ')') AS EmployeeWithRole
FROM EmployeeDetails;`,
      explanation: 'Concatenates the employee name with opening and closing parentheses enclosing their role.'
    },
    {
      id: 47,
      category: 'String Functions',
      question: 'Display total number of characters in Employee Name (excluding spaces).',
      sql: `SELECT FullName, 
       LENGTH(REPLACE(FullName, ' ', '')) AS NameLength
FROM EmployeeDetails;`,
      explanation: 'Removes whitespace before computing character length.'
    },
    {
      id: 48,
      category: 'Joins',
      question: 'Display all details of employees whose Total salary will be > 20000 after a 20% salary hike.',
      sql: `SELECT ed.*, es.Salary, es.Variable,
       (es.Salary * 1.20 + es.Variable) AS ProjectedTotalSalary
FROM EmployeeDetails ed
INNER JOIN EmployeeSalary es 
    ON ed.EmpId = es.EmpId 
WHERE (es.Salary * 1.20 + es.Variable) > 20000;`,
      explanation: 'Applies a 20% multiplier (1.20) to base salary and adds variable compensation in filter.'
    },
    {
      id: 49,
      category: 'Date Functions',
      question: 'Display all Employees who joined in the month of January.',
      sql: `SELECT * FROM EmployeeDetails
WHERE MONTHNAME(DateOfJoining) = 'January';`,
      explanation: 'The MONTHNAME() function returns the full English name of the month.'
    },
    {
      id: 50,
      category: 'Subqueries',
      question: 'Return all Manager IDs which are not present in EmployeeDetails table as EmpId.',
      sql: `SELECT DISTINCT ManagerId 
FROM EmployeeDetails
WHERE ManagerId NOT IN (
    SELECT EmpId FROM EmployeeDetails
);`,
      explanation: 'Finds external or non-employee manager identifiers using NOT IN.'
    },
    {
      id: 51,
      category: 'Date Functions',
      question: 'Print total experience in "Years Months Days" format.',
      sql: `SELECT FullName,
    CONCAT(
        TIMESTAMPDIFF(YEAR, DateOfJoining, CURDATE()), ' Years ',
        TIMESTAMPDIFF(MONTH, DateOfJoining, CURDATE()) % 12, ' Months ',
        FLOOR(TIMESTAMPDIFF(DAY, DateOfJoining, CURDATE()) % 30), ' Days '
    ) AS TotalExperience
FROM EmployeeDetails;`,
      explanation: 'Uses TIMESTAMPDIFF across YEAR, MONTH, and DAY units with modulo arithmetic.'
    },
    {
      id: 52,
      category: 'Basic Queries',
      question: 'Return employees with an even salary.',
      sql: `SELECT * FROM EmployeeSalary 
WHERE MOD(Salary, 2) = 0;`,
      explanation: 'MOD(Salary, 2) = 0 filters salaries that are even numbers.'
    },
    {
      id: 53,
      category: 'Basic Queries',
      question: 'Return employees with a 4-digit salary.',
      sql: `SELECT * FROM EmployeeSalary 
WHERE LENGTH(FLOOR(Salary)) = 4;`,
      explanation: 'Converts salary number to integer and inspects string character length.'
    },
    {
      id: 54,
      category: 'Date Functions',
      question: 'Return employees who joined in the last 11 months.',
      sql: `SELECT * FROM EmployeeDetails
WHERE DateOfJoining >= CURDATE() - INTERVAL 11 MONTH;`,
      explanation: 'Filters records where DateOfJoining is within the rolling 11-month window.'
    },
    {
      id: 55,
      category: 'Date Functions',
      question: 'Return employees who did not join in January.',
      sql: `SELECT * FROM EmployeeDetails
WHERE MONTHNAME(DateOfJoining) <> 'January';`,
      explanation: 'Excludes any employee whose joining month is January.'
    },
    {
      id: 56,
      category: 'Date Functions',
      question: 'Return employees who joined either on 12th December or 1st January.',
      sql: `SELECT * FROM EmployeeDetails
WHERE (MONTH(DateOfJoining) = 12 AND DAY(DateOfJoining) = 12)
   OR (MONTH(DateOfJoining) = 1 AND DAY(DateOfJoining) = 1);`,
      explanation: 'Evaluates month and day matching either specific calendar date.'
    },
    {
      id: 57,
      category: 'Joins',
      question: 'Return employees who work in P1 project and order them by salary in ascending order.',
      sql: `SELECT ed.*, es.Project, es.Salary 
FROM EmployeeDetails ed
INNER JOIN EmployeeSalary es 
    ON ed.EmpId = es.EmpId 
WHERE es.Project = 'P1'
ORDER BY es.Salary ASC;`,
      explanation: 'Joins tables, filters project = P1, and sorts from lowest to highest salary.'
    },
    {
      id: 58,
      category: 'Aggregations',
      question: 'Print average salary from each role.',
      sql: `SELECT ed.Role, AVG(es.Salary) AS AvgSalary 
FROM EmployeeDetails ed
INNER JOIN EmployeeSalary es 
    ON ed.EmpId = es.EmpId
GROUP BY ed.Role;`,
      explanation: 'Groups joined records by Role and computes average salary per designation.'
    },
    {
      id: 59,
      category: 'Aggregations',
      question: 'Print count of employees, minimum salary, and maximum salary from each role.',
      sql: `SELECT ed.Role, 
       COUNT(ed.EmpId) AS EmpCount,
       MIN(es.Salary) AS MinSalary, 
       MAX(es.Salary) AS MaxSalary
FROM EmployeeDetails ed
INNER JOIN EmployeeSalary es 
    ON ed.EmpId = es.EmpId
GROUP BY ed.Role;`,
      explanation: 'Computes role-wise headcount, minimum compensation, and maximum compensation.'
    }
  ]
};
