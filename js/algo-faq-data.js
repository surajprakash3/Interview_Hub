/**
 * Chapter 6: Algorithms (DAA) — Section 6.12 Frequently Asked Interview Questions (All 239 Questions)
 * Placement Preparation Booklet & Core Technical Interviews
 * Complete, in-depth answers across all 14 algorithmic domains.
 */
const ALGO_FAQ_DATA = [
  // =========================================================================
  // DOMAIN 1: ALGORITHM FOUNDATIONS, DESIGN & PARADIGMS (Q1 - Q20)
  // =========================================================================
  {
    q: "1. What is an algorithm, and why is its design and analysis important in computer science?",
    category: "Algorithm Foundations",
    ans: `An <strong>algorithm</strong> is a finite sequence of well-defined, unambiguous, computer-implementable instructions designed to solve a specific class of problems or execute a computation.<br><br>
• <strong>Significance of Design:</strong> Proper algorithm design allows systems to scale efficiently. A poor design leads to exponential runtime <code>O(2ⁿ)</code>, rendering software unusable even on modest inputs, whereas a well-designed algorithm runs in polynomial <code>O(n^k)</code> or logarithmic <code>O(log n)</code> time.<br>
• <strong>Significance of Analysis:</strong> Analysis predicts resource consumption (CPU cycles, memory footprint, disk I/O, network bandwidth) before implementation, enabling objective comparison of competing solutions independently of programming language or hardware architecture.`
  },
  {
    q: "2. Explain the difference between time complexity and space complexity of an algorithm.",
    category: "Complexity Analysis",
    ans: `• <strong>Time Complexity:</strong> Quantifies the total execution time or number of elementary CPU operations executed by an algorithm as a mathematical function of the input size <code>n</code>.<br>
• <strong>Space Complexity:</strong> Quantifies the maximum memory space required by an algorithm during execution as a function of <code>n</code>. This includes <em>fixed program space</em> (code, constants), <em>data space</em> (input data structures), and <em>auxiliary working space</em> (temporary buffers, variables, and recursion call stack frames).<br>
• <strong>Trade-off:</strong> Engineering decisions frequently balance time and space (e.g. Memoization trades extra RAM table storage to achieve dramatic CPU time reductions).`
  },
  {
    q: "3. Discuss the importance of asymptotic analysis in determining the efficiency of algorithms.",
    category: "Asymptotic Analysis",
    ans: `<strong>Asymptotic analysis</strong> evaluates how an algorithm performs as the input size <code>n</code> grows arbitrarily large (approaching infinity, <code>n → ∞</code>):<br><br>
1. <strong>Hardware Neutrality:</strong> It abstracts away CPU clock speeds, operating system schedulers, and compiler optimization flags, focusing purely on growth rate.<br>
2. <strong>Dominant Term Isolation:</strong> It ignores lower-order terms and constant coefficients (e.g., <code>5n² + 100n + 500</code> is governed strictly by <code>Θ(n²)</code>).<br>
3. <strong>Scalability Prediction:</strong> It reveals whether an application will collapse when user loads grow from 1,000 to 1,000,000 requests.`
  },
  {
    q: "4. Can you describe different approaches to analyzing the time complexity of algorithms, such as worst-case, average-case, and best-case analysis?",
    category: "Complexity Analysis",
    ans: `• <strong>Worst-Case Analysis:</strong> Calculates the maximum running time over all possible inputs of size <code>n</code>. Provides an absolute upper bound guarantee, ensuring the system never performs worse than this threshold.<br>
• <strong>Best-Case Analysis:</strong> Calculates the minimum running time over all inputs of size <code>n</code> (e.g. Linear Search finding the target at index 0 in <code>O(1)</code>). Useful as a sanity baseline but rarely reflects real workloads.<br>
• <strong>Average-Case Analysis:</strong> Calculates expected runtime assuming a probabilistic distribution over inputs. Crucial when worst-case is overly pessimistic (e.g., QuickSort has worst-case <code>O(n²)</code>, but expected average <code>O(n log n)</code>).<br>
• <strong>Amortized Analysis:</strong> Evaluates average cost per operation over a sequence of operations (e.g. Dynamic Array resizing).`
  },
  {
    q: "5. Explain the concept of Big O notation and its significance in algorithm analysis.",
    category: "Asymptotic Analysis",
    ans: `<strong>Big O notation (O):</strong> A mathematical notation describing the <em>asymptotic upper bound</em> of an algorithm\'s runtime. Formally, <code>f(n) = O(g(n))</code> if there exist positive constants <code>c > 0</code> and <code>n₀ ≥ 0</code> such that <code>0 ≤ f(n) ≤ c · g(n)</code> for all <code>n ≥ n₀</code>.<br><br>
• <strong>Significance:</strong> It establishes a worst-case performance guarantee for engineering specifications and SLA (Service Level Agreement) compliance.`
  },
  {
    q: "6. How do you determine the time complexity of iterative and recursive algorithms?",
    category: "Complexity Analysis",
    ans: `• <strong>Iterative Algorithms:</strong> Analyzed by summing loop iterations:<br>
  – Single loop <code>0 to n</code>: <code>O(n)</code>.<br>
  – Nested independent loops <code>n × n</code>: <code>O(n²)</code>.<br>
  – Loop variable multiplying/dividing by factor <code>k</code> (e.g. <code>i *= 2</code>): <code>O(log n)</code>.<br>
• <strong>Recursive Algorithms:</strong> Expressed as mathematical <em>recurrence relations</em> (e.g. <code>T(n) = 2T(n/2) + O(n)</code>) and solved using the <strong>Master Theorem</strong>, <strong>Recursion Tree Method</strong>, or <strong>Substitution / Inductive Method</strong>.`
  },
  {
    q: "7. Discuss the trade-offs between different algorithm design techniques, such as divide and conquer, dynamic programming, and greedy algorithms.",
    category: "Algorithm Paradigms",
    ans: `• <strong>Divide & Conquer:</strong> Best for disjoint, independent subproblems (e.g. Merge Sort). Recursion incurs stack overhead, but parallelizes naturally across CPU cores.<br>
• <strong>Dynamic Programming:</strong> Solves overlapping subproblems by caching states. Guarantees global optimality for optimization problems with optimal substructure, but consumes substantial memory tables (<code>O(n²)</code> or <code>O(n · W)</code>).<br>
• <strong>Greedy:</strong> Extremely fast (<code>O(n log n)</code> or <code>O(n)</code>) by making locally optimal decisions without backtracking. However, it fails if the problem lacks the strict <em>greedy-choice property</em> (e.g. 0/1 Knapsack).`
  },
  {
    q: "8. Can you describe the process of designing efficient algorithms for solving specific problems?",
    category: "Algorithm Foundations",
    ans: `1. <strong>Problem Formulation:</strong> Formulate clear inputs, outputs, and boundary constraints.<br>
2. <strong>Baseline / Brute Force:</strong> Establish a naive working solution to verify feasibility.<br>
3. <strong>Structural Analysis:</strong> Check for symmetry, sorting properties, monotonicity, or overlapping subproblems.<br>
4. <strong>Paradigm Selection:</strong> Choose between Two-Pointers, Sliding Window, D&C, Greedy, DP, or Graph Modeling.<br>
5. <strong>Data Structure Choice:</strong> Select structures (Heap, Hash Table, Trie, BST, DSU) that optimize critical inner operations.<br>
6. <strong>Complexity Proof & Edge Cases:</strong> Prove asymptotic upper bounds and test edge cases (empty input, duplicates, negative numbers, overflow).`
  },
  {
    q: "9. Explain the concept of problem reduction and how it is used to solve complex problems by transforming them into simpler ones.",
    category: "Algorithm Foundations",
    ans: `<strong>Problem Reduction:</strong> Transforming problem <code>A</code> into problem <code>B</code> (written <code>A ≤ B</code>) so that any algorithm that solves <code>B</code> can be used to solve <code>A</code>:<br><br>
• <strong>Algorithm Design:</strong> Bipartite Matching reduces to Max Flow (Ford-Fulkerson); Convex Hull reduces to Sorting.<br>
• <strong>Complexity Theory:</strong> Polynomial-time reduction (<code>A ≤_p B</code>) is the core mechanism to prove NP-Completeness. If SAT reduces to 3-SAT in polynomial time, 3-SAT is at least as hard as SAT.`
  },
  {
    q: "10. Discuss the importance of algorithmic paradigms such as brute force, backtracking, and branch and bound in problem-solving.",
    category: "Algorithm Paradigms",
    ans: `• <strong>Brute Force:</strong> Systematically enumerates every candidate in the solution space. Guarantees correctness and serves as a testing benchmark.<br>
• <strong>Backtracking:</strong> Explores state-space trees depth-first, pruning paths as soon as they violate constraints (e.g. N-Queens, Sudoku), avoiding unnecessary exploration.<br>
• <strong>Branch and Bound:</strong> Solves combinatorial optimization problems (e.g. TSP, 0/1 Knapsack) by breadth-first/best-first search, using mathematical bounding functions to prune entire subtrees that cannot beat the current best solution.`
  },
  {
    q: "11. Can you provide examples of problems where dynamic programming is used to optimize solutions?",
    category: "Dynamic Programming",
    ans: `• <strong>0/1 Knapsack Problem:</strong> Optimizes payload value under weight limit from <code>O(2ⁿ)</code> to <code>O(n · W)</code>.<br>
• <strong>Longest Common Subsequence (LCS):</strong> DNA sequence alignment and git diff tools in <code>O(m · n)</code>.<br>
• <strong>Matrix Chain Multiplication:</strong> Computes optimal parentheses grouping in <code>O(n³)</code>, saving millions of scalar multiplications.<br>
• <strong>Shortest Paths (Floyd-Warshall):</strong> All-pairs shortest path in dense graphs in <code>O(V³)</code>.<br>
• <strong>Edit Distance (Levenshtein):</strong> Spell-checkers and NLP token comparison in <code>O(m · n)</code>.`
  },
  {
    q: "12. Explain the concept of memoization in dynamic programming and its role in improving efficiency.",
    category: "Dynamic Programming",
    ans: `<strong>Memoization</strong> is a top-down optimization technique where recursive function results are cached in a data structure (hash table or array) keyed by function parameters.<br><br>
• <strong>Mechanism:</strong> Before performing computation, check if the key exists in cache. If so, return the cached answer in <code>O(1)</code>; otherwise compute recursively and store.<br>
• <strong>Impact:</strong> Converts exponential recursion trees (e.g. naive Fibonacci <code>O(2ⁿ)</code>) into linear Directed Acyclic Graphs (DAGs) running in <code>O(n)</code>.`
  },
  {
    q: "13. Discuss the principles of greedy algorithms and their applications in solving optimization problems.",
    category: "Greedy Algorithms",
    ans: `Greedy algorithms build solutions incrementally by selecting the locally optimal candidate at each step without backtracking.<br><br>
• <strong>Two Golden Principles:</strong><br>
  1. <em>Greedy-Choice Property:</em> A global optimum can be reached by choosing local optimums.<br>
  2. <em>Optimal Substructure:</em> Optimal solution to the problem contains optimal solutions to subproblems.<br>
• <strong>Applications:</strong> Minimum Spanning Trees (Prim\'s/Kruskal\'s), Shortest Paths (Dijkstra\'s), Lossless Compression (Huffman Coding), Fractional Knapsack, Activity Selection.`
  },
  {
    q: "14. Can you describe real-world scenarios where graph algorithms are used to solve complex problems?",
    category: "Graph Algorithms",
    ans: `• <strong>GPS & Route Navigation:</strong> Dijkstra and A* compute fastest driving routes on road networks.<br>
• <strong>Social Networks:</strong> BFS calculates degrees of separation; PageRank ranks relevance; Tarjan finds tightly knit communities.<br>
• <strong>Package Dependency Management:</strong> Topological Sorting determines build order in Maven, npm, and compiler makefiles.<br>
• <strong>Telecommunications & Circuit Routing:</strong> MST (Prim/Kruskal) minimizes fiber-optic cabling and PCB traces.<br>
• <strong>Logistics & Airline Scheduling:</strong> Max Flow (Edmonds-Karp) maximizes freight movement across flight corridors.`
  },
  {
    q: "15. Explain the process of analyzing the correctness and efficiency of an algorithm using formal proofs and experimental evaluation.",
    category: "Algorithm Foundations",
    ans: `• <strong>Correctness Analysis:</strong><br>
  – <em>Loop Invariants:</em> Proven via Initialization, Maintenance, and Termination (mathematical induction).<br>
  – <em>Structural Induction:</em> Proves recursive base cases and recursive steps.<br>
• <strong>Efficiency Analysis:</strong><br>
  – <em>Theoretical:</em> Deriving asymptotic Big-O, Omega, and Theta bounds.<br>
  – <em>Experimental:</em> Benchmarking wall-clock runtime, memory heap dumps, CPU profilers, and cache hit/miss rates across varied input distributions (random, sorted, reverse, skewed).`
  },
  {
    q: "16. Discuss the significance of algorithmic complexity classes such as P, NP, and NP-hard in theoretical computer science.",
    category: "NP-Completeness",
    ans: `These classes formalize the boundary between <em>computationally tractable</em> and <em>intractable</em> problems:<br><br>
• <strong>P:</strong> Solvable in polynomial time <code>O(n^k)</code> by a deterministic machine.<br>
• <strong>NP:</strong> Verifiable in polynomial time; solutions can be checked efficiently.<br>
• <strong>NP-Hard:</strong> At least as hard as any problem in NP (contains problems like TSP, Halting Problem).<br>
• <strong>Significance:</strong> Directs software architects away from searching for non-existent exact polynomial algorithms, steering them toward heuristics and approximation algorithms.`
  },
  {
    q: "17. Can you explain the concept of approximation algorithms and their role in solving NP-hard optimization problems?",
    category: "Approximation Algorithms",
    ans: `For NP-Hard optimization problems, finding exact answers requires exponential time (unless P = NP). <strong>Approximation algorithms</strong> compute near-optimal solutions in guaranteed polynomial time with a proven mathematical bound on error:<br><br>
• <strong>Approximation Ratio (ρ):</strong> Guaranteed that cost <code>C ≤ ρ · C*</code> (minimization) or <code>C ≥ C* / ρ</code> (maximization).<br>
• <strong>Examples:</strong> 2-approximation for Vertex Cover; Christofides 1.5-approximation for Metric TSP.`
  },
  {
    q: "18. Discuss the importance of algorithm optimization techniques such as pruning, caching, and parallelization in improving efficiency.",
    category: "Algorithm Optimization",
    ans: `• <strong>Pruning:</strong> Cuts off search branches in backtracking/branch-and-bound (e.g. Alpha-Beta pruning in chess engines) to eliminate combinatorial explosions.<br>
• <strong>Caching:</strong> Reuses precomputed results (in-memory tables, memoization, Redis caches) to convert <code>O(n)</code> computations into <code>O(1)</code> reads.<br>
• <strong>Parallelization:</strong> Decomposes independent workloads across multi-core CPUs and GPUs (e.g. MapReduce, parallel merge sort, matrix tiling) to scale throughput linearly.`
  },
  {
    q: "19. How do you handle algorithmic challenges such as dealing with large datasets, distributed computing, and parallel processing?",
    category: "Advanced Algorithms",
    ans: `• <strong>External Memory Algorithms:</strong> Design I/O-efficient algorithms (B-Trees, External Merge Sort) minimizing slow disk block reads.<br>
• <strong>Streaming & Probabilistic Structures:</strong> Use Bloom Filters, HyperLogLog, and Count-Min Sketch to analyze terabytes of live streams in <code>O(1)</code> space with minimal error margins.<br>
• <strong>Distributed Frameworks:</strong> Utilize MapReduce, Spark, and consistent hashing to distribute partitions across clusters while tolerating node failures.`
  },
  {
    q: "20. Can you provide examples of algorithm design patterns and their applications in solving recurring problems?",
    category: "Algorithm Paradigms",
    ans: `• <strong>Two Pointers:</strong> Palindrome validation, finding pair sums in sorted arrays (<code>O(n)</code> instead of <code>O(n²)</code>).<br>
• <strong>Sliding Window:</strong> Subarray sum/longest substring problems (converts <code>O(n²)</code> to <code>O(n)</code>).<br>
• <strong>Fast & Slow Pointers (Floyd\'s Cycle Detection):</strong> Detects linked list cycles in <code>O(n)</code> time and <code>O(1)</code> space.<br>
• <strong>Monotonic Stack:</strong> Next Greater Element, Daily Temperatures, Stock Span in <code>O(n)</code>.<br>
• <strong>Union-Find (Disjoint Set Union):</strong> Dynamic connectivity, Kruskal\'s MST, percolation models in near <code>O(1)</code> amortized time.`
  },

  // =========================================================================
  // DOMAIN 2: ASYMPTOTIC NOTATIONS DEEP DIVE (Q21 - Q40)
  // =========================================================================
  {
    q: "21. What are asymptotic notations, and why are they important in algorithm analysis?",
    category: "Asymptotic Analysis",
    ans: `Asymptotic notations (Big O, Big Omega, Big Theta, Little o, Little omega) are mathematical conventions representing limiting behaviors of functions as input approaches infinity. They are critical because they enable machine-independent comparisons of algorithms, eliminating hardware and language discrepancies.`
  },
  {
    q: "22. Explain the concept of Big O notation and its significance in representing the upper bound of an algorithm’s time complexity.",
    category: "Asymptotic Analysis",
    ans: `Big O provides an <strong>asymptotic upper bound</strong>: <code>f(n) ≤ c · g(n)</code> for <code>n ≥ n₀</code>. It guarantees that performance will not degrade past this mathematical envelope in the worst-case scenario, forming the foundation for engineering contracts and mission-critical SLAs.`
  },
  {
    q: "23. Can you describe the difference between the worst-case, best-case, and average-case time complexities of an algorithm?",
    category: "Complexity Analysis",
    ans: `• <strong>Worst-case:</strong> Maximum operations executed across any valid input of size <code>n</code> (guaranteed ceiling).<br>
• <strong>Best-case:</strong> Minimum operations executed across the most favorable input of size <code>n</code>.<br>
• <strong>Average-case:</strong> Expected number of operations over a uniform or weighted probability distribution of all possible inputs.`
  },
  {
    q: "24. Discuss the properties of Big O notation and how it is used to analyze the efficiency of algorithms.",
    category: "Asymptotic Analysis",
    ans: `• <strong>Transitivity:</strong> If <code>f(n) = O(g(n))</code> and <code>g(n) = O(h(n))</code>, then <code>f(n) = O(h(n))</code>.<br>
• <strong>Scaling:</strong> If <code>f(n) = O(g(n))</code>, then <code>c · f(n) = O(g(n))</code> for any constant <code>c > 0</code>.<br>
• <strong>Sum Rule:</strong> <code>O(f(n)) + O(g(n)) = O(max(f(n), g(n)))</code>.<br>
• <strong>Product Rule:</strong> <code>O(f(n)) · O(g(n)) = O(f(n) · g(n))</code>.`
  },
  {
    q: "25. How do you determine the Big O notation for iterative and recursive algorithms?",
    category: "Complexity Analysis",
    ans: `• <strong>Iterative:</strong> Sum up loop step counts; identify maximum nestings; apply the sum and product rules to isolate dominant polynomial/logarithmic factors.<br>
• <strong>Recursive:</strong> Set up recurrence <code>T(n) = aT(n/b) + f(n)</code> and solve using Master Theorem, recursion tree branch multiplication, or mathematical induction.`
  },
  {
    q: "26. Explain the concept of tight and loose bounds in asymptotic analysis.",
    category: "Asymptotic Analysis",
    ans: `• <strong>Tight Bound (Θ):</strong> Accurately characterizes growth rate from both above and below (e.g. Merge Sort is <code>Θ(n log n)</code>).<br>
• <strong>Loose Bound (O / o):</strong> An upper bound that may overestimate true growth (e.g. <code>2n = O(n²)</code> is mathematically valid, but loose; <code>2n = o(n²)</code> is strictly loose).`
  },
  {
    q: "27. What is the significance of Big Omega notation in representing the lower bound of an algorithm’s time complexity?",
    category: "Asymptotic Analysis",
    ans: `<strong>Big Omega (Ω):</strong> Defines the asymptotic lower bound (<code>f(n) ≥ c · g(n)</code> for <code>n ≥ n₀</code>). It establishes the fundamental theoretical limit: no algorithm can solve the problem faster than this bound (e.g. Comparison sorting has a proven lower bound of <code>Ω(n log n)</code>).`
  },
  {
    q: "28. Can you describe the meaning and usage of Big Theta notation in representing both the upper and lower bounds of an algorithm’s time complexity?",
    category: "Asymptotic Analysis",
    ans: `<strong>Big Theta (Θ):</strong> Represents an exact asymptotic order of growth: <code>c₁ · g(n) ≤ f(n) ≤ c₂ · g(n)</code>. It means the algorithm\'s rate of growth is precisely proportional to <code>g(n)</code> within constant factors.`
  },
  {
    q: "29. Discuss the relationship between Big O, Big Omega, and Big Theta notations.",
    category: "Asymptotic Analysis",
    ans: `<strong>Fundamental Theorem of Asymptotics:</strong><br>
<code>f(n) = Θ(g(n))  ⟺  f(n) = O(g(n))  AND  f(n) = Ω(g(n))</code>.<br>
Theta is the strict intersection of Big O (upper bound) and Big Omega (lower bound).`
  },
  {
    q: "30. Explain the concept of worst-case analysis and why it is often used in algorithm analysis.",
    category: "Complexity Analysis",
    ans: `Worst-case analysis guarantees that an algorithm will never exceed the specified running time. It is universally preferred in safety-critical systems, distributed networks, and real-time computing because it prevents catastrophic system freezes under adverse input attacks (e.g. algorithmic complexity attacks on hash tables).`
  },
  {
    q: "31. Can you provide examples of algorithms and their corresponding time complexity represented using Big O notation?",
    category: "Complexity Analysis",
    ans: `• <code>O(1)</code>: Hash Table lookup, Array indexing, Stack push/pop.<br>
• <code>O(log n)</code>: Binary Search, Balanced BST lookup.<br>
• <code>O(n)</code>: Linear Search, Kadane\'s algorithm, Counting Sort.<br>
• <code>O(n log n)</code>: Merge Sort, Heap Sort, QuickSort (average).<br>
• <code>O(n²)</code>: Bubble Sort, Selection Sort, Insertion Sort (worst).<br>
• <code>O(2ⁿ)</code>: Recursive Fibonacci, Tower of Hanoi.<br>
• <code>O(n!)</code>: Traveling Salesman via Brute Force Permutations.`
  },
  {
    q: "32. Discuss the limitations and assumptions of asymptotic notations in analyzing algorithm efficiency.",
    category: "Asymptotic Analysis",
    ans: `1. <strong>Ignores Constant Factors:</strong> An <code>O(n)</code> algorithm with <code>c = 10⁶</code> runs much slower in practice on realistic datasets than an <code>O(n²)</code> algorithm with <code>c = 1</code>.<br>
2. <strong>Assumes n → ∞:</strong> For small <code>n</code> (e.g. <code>n < 50</code>), Insertion Sort beats QuickSort.<br>
3. <strong>Hardware Blind:</strong> Ignores CPU cache hierarchies, SIMD pipelining, and memory latency.`
  },
  {
    q: "33. How do you handle multiple terms and constants in asymptotic analysis?",
    category: "Asymptotic Analysis",
    ans: `1. Drop all additive lower-order terms: <code>n³ + 20n² + 500n → n³</code>.<br>
2. Drop all multiplicative constant coefficients: <code>45n³ → n³</code>.<br>
3. If variables represent distinct inputs, retain both: <code>O(V + E)</code> or <code>O(m · n)</code>.`
  },
  {
    q: "34. Explain the concept of space complexity and how asymptotic notations can be used to analyze it.",
    category: "Complexity Analysis",
    ans: `Space complexity measures total peak memory consumed by an algorithm as a function of <code>n</code>. Asymptotic notations (e.g. <code>O(1)</code> in-place, <code>O(n)</code> buffer, <code>O(log n)</code> call stack) describe whether memory consumption scales sub-linearly, linearly, or quadratically with input size.`
  },
  {
    q: "35. Can you describe the time complexity of common algorithms such as sorting algorithms, searching algorithms, and recursive algorithms using asymptotic notations?",
    category: "Complexity Analysis",
    ans: `• <strong>Searching:</strong> Linear Search = <code>O(n)</code>; Binary Search = <code>O(log n)</code>.<br>
• <strong>Sorting:</strong> QuickSort = <code>O(n log n)</code> avg, <code>O(n²)</code> worst; Merge Sort = <code>Θ(n log n)</code>; Radix Sort = <code>O(nk)</code>.<br>
• <strong>Graph:</strong> BFS/DFS = <code>O(V + E)</code>; Dijkstra = <code>O((V + E) log V)</code>.<br>
• <strong>Trees:</strong> Binary Tree Inorder = <code>O(n)</code>; AVL Search = <code>O(log n)</code>.`
  },
  {
    q: "36. Discuss the significance of asymptotic notations in comparing the efficiency of algorithms and making informed algorithm design decisions.",
    category: "Asymptotic Analysis",
    ans: `Asymptotic notations provide a mathematical framework to eliminate inefficient architectures early. When processing 10 million records, switching from an <code>O(n²)</code> algorithm (10¹⁴ operations ≈ days) to an <code>O(n log n)</code> algorithm (~2.3 × 10⁸ operations ≈ seconds) determines whether a commercial system is functional or dead.`
  },
  {
    q: "37. What are the common mistakes to avoid when using asymptotic notations in algorithm analysis?",
    category: "Asymptotic Analysis",
    ans: `1. Confusing Big O (upper bound) with worst-case (an input scenario).<br>
2. Writing <code>O(2n)</code> or <code>O(n² + n)</code> instead of reduced simplified terms <code>O(n)</code> or <code>O(n²)</code>.<br>
3. Dropping independent variables when two inputs exist (e.g. writing <code>O(n)</code> instead of <code>O(n + m)</code>).<br>
4. Assuming best-case is always Big-Omega and worst-case is always Big-O.`
  },
  {
    q: "38. How do you handle algorithmic challenges such as dealing with large datasets and distributed computing using asymptotic analysis?",
    category: "Advanced Algorithms",
    ans: `In distributed architectures, communication latency dominates CPU cycles. Asymptotic analysis expands to model <strong>I/O Complexity</strong> (disk transfers in blocks of size <code>B</code>) and <strong>Network Communication Rounds</strong> (e.g. BSP model or MapReduce shuffle steps in terms of cluster nodes <code>P</code>).`
  },
  {
    q: "39. Can you provide examples of real-world scenarios where asymptotic notations are used to analyze and optimize algorithms?",
    category: "Asymptotic Analysis",
    ans: `• <strong>Relational Database Engines:</strong> Query planners compare <code>O(n log n)</code> index-scans vs <code>O(n²)</code> nested-loop joins to select optimal execution plans.<br>
• <strong>Search Engines:</strong> Inverted index lookups in <code>O(k)</code> vs scanning billions of web pages in <code>O(N)</code>.<br>
• <strong>Computer Graphics:</strong> Octree and BVH spatial partitioning reduce collision checks from <code>O(n²)</code> to <code>O(n log n)</code>.`
  },
  {
    q: "40. Can you explain any recent developments or research trends in asymptotic analysis and algorithm complexity?",
    category: "Advanced Algorithms",
    ans: `• <strong>Fine-Grained Complexity:</strong> Proving conditional lower bounds based on the Strong Exponential Time Hypothesis (SETH).<br>
• <strong>Sublinear-Time Algorithms:</strong> Property testing and sublinear approximations that sample inputs without reading all <code>n</code> elements.<br>
• <strong>Quantum Complexity:</strong> Analyzing speedups in BQP (e.g. Grover\'s <code>O(√n)</code> search and Shor\'s polynomial factoring).`
  },

  // =========================================================================
  // DOMAIN 3: RECURRENCE RELATIONS & RECURSION ANALYSIS (Q41 - Q60)
  // =========================================================================
  {
    q: "41. What is a recurrence relation, and why is it important in algorithm analysis?",
    category: "Recurrence Relations",
    ans: `A <strong>recurrence relation</strong> is an equation or inequality that expresses the value of a function <code>T(n)</code> in terms of its value on smaller inputs (e.g. <code>T(n) = 2T(n/2) + O(n)</code>). It is the mathematical backbone for analyzing the time and space complexity of recursive and divide-and-conquer algorithms.`
  },
  {
    q: "42. Can you define the terms ”recurrence relation,” ”base case,” and ”recursive case” in the context of algorithm analysis?",
    category: "Recurrence Relations",
    ans: `• <strong>Recurrence Relation:</strong> The overarching mathematical equation defining execution cost in terms of smaller subproblems.<br>
• <strong>Base Case:</strong> The termination condition where the problem is small enough to be solved directly without further recursion (e.g. <code>T(1) = O(1)</code>).<br>
• <strong>Recursive Case:</strong> The step where the problem is decomposed into subproblems, calling itself and adding divide/combine overhead.`
  },
  {
    q: "43. Explain the process of solving recurrence relations using iteration and substitution methods.",
    category: "Recurrence Relations",
    ans: `• <strong>Iteration Method (Back-Substitution):</strong> Repeatedly expand <code>T(n)</code> by substituting the recurrence into itself until a pattern emerges; express the <code>k</code>-th iteration as a summation; solve for the base case value of <code>k</code>.<br>
• <strong>Substitution Method:</strong> Guess the form of the mathematical bound (e.g. <code>T(n) ≤ c · n log n</code>); use mathematical induction to prove the inductive step and solve for constants <code>c</code> and <code>n₀</code>.`
  },
  {
    q: "44. Discuss the difference between linear recurrence relations, homogeneous recurrence relations, and non-homogeneous recurrence relations.",
    category: "Recurrence Relations",
    ans: `• <strong>Linear Recurrence:</strong> Terms appear to the first power: <code>a₀T(n) + a₁T(n-1) + ... + a_k T(n-k) = f(n)</code>.<br>
• <strong>Homogeneous:</strong> When <code>f(n) = 0</code> (no independent driving term; solved via characteristic roots).<br>
• <strong>Non-Homogeneous:</strong> When <code>f(n) ≠ 0</code> (e.g. <code>T(n) = 2T(n-1) + n</code>; solved by finding homogeneous general solution + particular solution).`
  },
  {
    q: "45. Can you provide examples of algorithms and their corresponding recurrence relations?",
    category: "Recurrence Relations",
    ans: `• <strong>Binary Search:</strong> <code>T(n) = T(n/2) + O(1) ⇒ Θ(log n)</code>.<br>
• <strong>Merge Sort:</strong> <code>T(n) = 2T(n/2) + Θ(n) ⇒ Θ(n log n)</code>.<br>
• <strong>Karatsuba Multiplication:</strong> <code>T(n) = 3T(n/2) + O(n) ⇒ Θ(n^1.585)</code>.<br>
• <strong>Strassen\'s Matrix Multiplication:</strong> <code>T(n) = 7T(n/2) + Θ(n²) ⇒ Θ(n^2.807)</code>.<br>
• <strong>Tower of Hanoi:</strong> <code>T(n) = 2T(n-1) + 1 ⇒ Θ(2ⁿ)</code>.`
  },
  {
    q: "46. Explain the concept of the ”order of a recurrence relation” and its significance in analyzing algorithm efficiency.",
    category: "Recurrence Relations",
    ans: `The <strong>order</strong> of a recurrence relation is the difference between the highest and lowest index appearing in the equation. For <code>T(n) = a₁T(n-1) + a₂T(n-2)</code>, the order is <code>2</code>. It dictates the number of initial boundary/base conditions required to solve the recurrence uniquely.`
  },
  {
    q: "47. How do you classify recurrence relations based on their order and coefficients?",
    category: "Recurrence Relations",
    ans: `• <strong>Constant Coefficients:</strong> <code>T(n) = 3T(n-1) + 2T(n-2)</code> (solved via characteristic polynomial).<br>
• <strong>Variable Coefficients:</strong> <code>T(n) = n · T(n-1)</code> (solved via generating functions or factorial expansion).<br>
• <strong>Divide-and-Conquer Recurrences:</strong> <code>T(n) = aT(n/b) + f(n)</code> (solved via Master Theorem).`
  },
  {
    q: "48. Discuss the importance of solving recurrence relations for determining the time complexity of recursive algorithms.",
    category: "Recurrence Relations",
    ans: `Solving recurrence relations converts abstract recursive call descriptions into closed-form algebraic functions of <code>n</code>, revealing whether an algorithm will run in practical polynomial time or catastrophic exponential time.`
  },
  {
    q: "49. Can you describe common techniques for solving specific types of recurrence relations, such as divide and conquer, dynamic programming, and recursive backtracking?",
    category: "Recurrence Relations",
    ans: `• <strong>Divide & Conquer:</strong> Master Theorem and Recursion Trees.<br>
• <strong>Dynamic Programming:</strong> State-transition equations solved via DAG topological ordering and summation over states.<br>
• <strong>Recursive Backtracking:</strong> Combinatorial recurrence trees where branching factor <code>b</code> yields <code>O(b^d)</code> depth complexity.`
  },
  {
    q: "50. Explain the concept of iteration trees and how they are used to visualize and analyze the time complexity of recursive algorithms.",
    category: "Recurrence Relations",
    ans: `A <strong>recursion tree</strong> represents recursive calls as nodes in a tree where each node displays local work performed at that call. By summing the cost across each horizontal level and then summing across all levels (tree depth), total runtime is calculated intuitively.`
  },
  {
    q: "51. What are the limitations of solving recurrence relations using traditional methods, and how do you address them?",
    category: "Recurrence Relations",
    ans: `Traditional methods struggle with non-constant branching, non-polynomial differences, and floors/ceilings. These are addressed using the <strong>Akra-Bazzi Theorem</strong> (which handles arbitrary non-uniform subproblems <code>∑ aᵢ T(bᵢ n + hᵢ(n))</code>) or change of variables.`
  },
  {
    q: "52. How do you handle non-linear recurrence relations and higher-order recurrence relations in algorithm analysis?",
    category: "Recurrence Relations",
    ans: `• <strong>Substitution / Variable Transformation:</strong> E.g., for <code>T(n) = 2T(√n) + log n</code>, let <code>m = log n</code> and <code>S(m) = T(2^m)</code>, transforming it into a linear divide-and-conquer recurrence.<br>
• <strong>Generating Functions:</strong> Used for higher-order relations like Catalan numbers.`
  },
  {
    q: "53. Can you describe real-world scenarios where recurrence relations are used to analyze and optimize algorithms?",
    category: "Recurrence Relations",
    ans: `Used in financial pricing models, recursive parsing in compilers (AST traversal), graphic rendering engines (ray tracing BVH hierarchies), and distributed divide-and-conquer data processing pipelines (Hadoop partition merges).`
  },
  {
    q: "54. Discuss the relationship between recurrence relations and asymptotic notations such as Big O notation.",
    category: "Recurrence Relations",
    ans: `A recurrence relation represents the exact discrete cost equation; solving it and applying asymptotic limits yields the final Big-O / Big-Theta complexity classification.`
  },
  {
    q: "55. How do you apply recurrence relations in designing and analyzing algorithms for specific problem domains?",
    category: "Recurrence Relations",
    ans: `Engineers formulate recurrence relations during algorithmic prototyping to evaluate whether dividing into <code>a</code> parts or reducing by <code>k</code> steps hits target performance envelopes before committing to writing production code.`
  },
  {
    q: "56. Can you provide examples of algorithmic challenges where recurrence relations play a crucial role in finding efficient solutions?",
    category: "Recurrence Relations",
    ans: `Matrix chain multiplications, computing polygon triangulations, finding optimal binary search trees, and calculating discrete convolution via Fast Fourier Transform (FFT).`
  },
  {
    q: "57. What are some resources or references for learning more about solving recurrence relations and their applications in algorithm analysis?",
    category: "Recurrence Relations",
    ans: `Thomas H. Cormen et al. (<em>Introduction to Algorithms - CLRS</em>, Chapter 4), Donald Knuth (<em>The Art of Computer Programming</em>), and Sedgewick & Flajolet (<em>An Introduction to the Analysis of Algorithms</em>).`
  },
  {
    q: "58. How do you handle edge cases and boundary conditions when working with recurrence relations?",
    category: "Recurrence Relations",
    ans: `Define explicit non-zero base cases (e.g. <code>T(0) = c, T(1) = c</code>) and verify that floor/ceiling divisions (e.g. <code>⌊n/2⌋</code> and <code>⌈n/2⌉</code>) do not violate asymptotic bounds.`
  },
  {
    q: "59. Can you explain any recent developments or research trends in the analysis of recurrence relations and algorithm complexity?",
    category: "Recurrence Relations",
    ans: `Automated algebraic solver engines (CAS) that compute exact asymptotic expansions and smoothed analysis of recursive algorithms under random Gaussian perturbations.`
  },
  {
    q: "60. Can you provide examples of recurrence relation-related coding challenges or problems commonly encountered in technical interviews?",
    category: "Recurrence Relations",
    ans: `Climbing Stairs (Fibonacci), Coin Change (unbounded knapsack), Decode Ways, House Robber, Unique Binary Search Trees (Catalan numbers), and Merge k Sorted Lists.`
  },

  // =========================================================================
  // DOMAIN 4: MASTER THEOREM & DIVIDE-AND-CONQUER RECURRENCES (Q61 - Q80)
  // =========================================================================
  {
    q: "61. What is the Master theorem, and how is it used to analyze the time complexity of divide and conquer algorithms?",
    category: "Master Theorem",
    ans: `The <strong>Master Theorem</strong> is an algorithmic cookbook method providing closed-form asymptotic bounds for recurrences of the form <code>T(n) = aT(n/b) + f(n)</code>, eliminating the need to expand manual tree summations.`
  },
  {
    q: "62. Can you state the Master theorem and explain its components (e.g., a, b, f(n))?",
    category: "Master Theorem",
    ans: `For <code>T(n) = a · T(n/b) + Θ(nᵏ · logᵖ n)</code>:<br>
• <code>a ≥ 1</code>: Number of recursive subproblems generated at each step.<br>
• <code>b > 1</code>: Factor by which the input size is divided.<br>
• <code>f(n) = Θ(nᵏ logᵖ n)</code>: Cost of dividing the problem and combining the subproblem solutions at the current level.`
  },
  {
    q: "63. Discuss the three cases of the Master theorem and their significance in determining the time complexity of algorithms.",
    category: "Master Theorem",
    ans: `1. <strong>Case 1 (Leaf Heavy):</strong> <code>a > bᵏ</code> ⇒ <code>T(n) = Θ(n^(log_b a))</code>.<br>
2. <strong>Case 2 (Evenly Balanced):</strong> <code>a = bᵏ</code>:<br>
   – <code>p > -1</code> ⇒ <code>T(n) = Θ(n^(log_b a) · log^(p+1) n)</code>.<br>
   – <code>p = -1</code> ⇒ <code>T(n) = Θ(n^(log_b a) · log log n)</code>.<br>
   – <code>p < -1</code> ⇒ <code>T(n) = Θ(n^(log_b a))</code>.<br>
3. <strong>Case 3 (Root Heavy):</strong> <code>a < bᵏ</code>:<br>
   – <code>p ≥ 0</code> ⇒ <code>T(n) = Θ(nᵏ logᵖ n)</code>.<br>
   – <code>p < 0</code> ⇒ <code>T(n) = O(nᵏ)</code>.`
  },
  {
    q: "64. How do you determine which case of the Master theorem applies to a given recurrence relation?",
    category: "Master Theorem",
    ans: `Calculate the critical exponent <code>log_b a</code> and compare <code>a</code> against <code>bᵏ</code>. If <code>a > bᵏ</code> (Case 1); if <code>a = bᵏ</code> (Case 2); if <code>a < bᵏ</code> (Case 3).`
  },
  {
    q: "65. Can you provide examples of algorithms and their corresponding recurrence relations that can be solved using the Master theorem?",
    category: "Master Theorem",
    ans: `• <strong>Binary Search:</strong> <code>T(n) = T(n/2) + 1</code> (Case 2, a=1, b=2, k=0, p=0) ⇒ <code>Θ(log n)</code>.<br>
• <strong>Merge Sort:</strong> <code>T(n) = 2T(n/2) + n</code> (Case 2, a=2, b=2, k=1, p=0) ⇒ <code>Θ(n log n)</code>.<br>
• <strong>Strassen:</strong> <code>T(n) = 7T(n/2) + n²</code> (Case 1, a=7, b=2, k=2, b^k=4 < 7) ⇒ <code>Θ(n^2.807)</code>.`
  },
  {
    q: "66. Explain the concept of the ”work done” in the Master theorem and its relationship to the time complexity of algorithms.",
    category: "Master Theorem",
    ans: `The Master Theorem compares work done at the <strong>leaves</strong> of the recursion tree (<code>n^(log_b a)</code>) against work done at the <strong>root</strong> to divide and combine (<code>f(n) = nᵏ</code>). The asymptotically dominant term dictates the overall complexity.`
  },
  {
    q: "67. Discuss the limitations and assumptions of the Master theorem in analyzing algorithm efficiency.",
    category: "Master Theorem",
    ans: `1. <code>a</code> must be constant (fails on <code>T(n) = 2ⁿ T(n/2) + n</code>).<br>
2. Subproblem shrinkage must be polynomial division (fails on <code>T(n) = T(n-1) + 1</code>).<br>
3. Fails when gap between <code>f(n)</code> and <code>n^(log_b a)</code> is not polynomial (e.g. <code>T(n) = 2T(n/2) + n/log n</code>).`
  },
  {
    q: "68. Can you describe real-world scenarios where the Master theorem is used to analyze and optimize algorithms?",
    category: "Master Theorem",
    ans: `Benchmarking image downsampling, multi-threaded divide-and-conquer rendering, database parallel external sorts, and high-precision cryptographic multiplication libraries.`
  },
  {
    q: "69. How do you handle situations where the conditions of the Master theorem are not met?",
    category: "Master Theorem",
    ans: `Use the <strong>Akra-Bazzi method</strong>, <strong>Recursion Tree summation</strong>, or the <strong>Substitution method</strong> with mathematical induction.`
  },
  {
    q: "70. Explain any extensions or variants of the Master theorem for analyzing more complex recurrence relations.",
    category: "Master Theorem",
    ans: `The <strong>Extended Master Theorem</strong> handles logarithmic factors <code>logᵖ n</code> for all <code>p ∈ ℝ</code>, and the <strong>Akra-Bazzi Theorem</strong> generalizes to unequal subproblems: <code>T(n) = ∑ aᵢ T(bᵢ n) + g(n)</code>.`
  },
  {
    q: "71. Discuss the relationship between the Master theorem and other methods for solving recurrence relations, such as iteration and substitution.",
    category: "Master Theorem",
    ans: `The Master Theorem is simply the formalized, pre-calculated general solution of the recursion tree summation method for standard divide-and-conquer parameters.`
  },
  {
    q: "72. Can you provide examples of algorithmic challenges where the Master theorem is used to find efficient solutions?",
    category: "Master Theorem",
    ans: `Optimizing fast Fourier transforms (Cooley-Tukey FFT), parallel prefix sums, and integer multiplication algorithms.`
  },
  {
    q: "73. How do you apply the Master theorem in designing and analyzing divide and conquer algorithms for specific problem domains?",
    category: "Master Theorem",
    ans: `Engineers use it to decide whether reducing the number of subproblems <code>a</code> (even at the cost of slightly higher combine work <code>f(n)</code>) will yield a faster asymptotic running time.`
  },
  {
    q: "74. Can you explain any recent developments or research trends related to the Master theorem and its applications in algorithm analysis?",
    category: "Master Theorem",
    ans: `Extensions of Master theorems to probabilistic recurrences in randomized algorithms and cache-oblivious memory models.`
  },
  {
    q: "75. What are some resources or references for learning more about the Master theorem and its use in algorithm analysis?",
    category: "Master Theorem",
    ans: `CLRS Chapter 4.5; MIT OpenCourseWare 6.006 / 6.046J Lecture Notes on Divide & Conquer.`
  },
  {
    q: "76. How do you handle edge cases and boundary conditions when applying the Master theorem?",
    category: "Master Theorem",
    ans: `Ensure <code>b > 1</code>, check the regularity condition in Case 3 (<code>a · f(n/b) ≤ c · f(n)</code> for <code>c < 1</code>), and ignore floor/ceiling roundings because they don\'t affect asymptotic bounds.`
  },
  {
    q: "77. Can you provide examples of Master theorem-related coding challenges or problems commonly encountered in technical interviews?",
    category: "Master Theorem",
    ans: `1. <code>T(n) = 4T(n/2) + n² ⇒ Θ(n² log n)</code>.<br>
2. <code>T(n) = 3T(n/2) + n² ⇒ Θ(n²)</code>.<br>
3. <code>T(n) = 16T(n/4) + n ⇒ Θ(n²)</code>.<br>
4. <code>T(n) = 2T(n/2) + n log n ⇒ Θ(n log² n)</code>.`
  },
  {
    q: "78. Discuss the importance of understanding the Master theorem in algorithm analysis and problem-solving.",
    category: "Master Theorem",
    ans: `It provides instantaneous, error-free complexity determination during whiteboard coding interviews and real-world system architecture design.`
  },
  {
    q: "79. Can you explain the significance of the Master theorem in analyzing the efficiency of recursive algorithms?",
    category: "Master Theorem",
    ans: `It demystifies recursive complexity by encapsulating deep geometric series summations into a straightforward algebraic comparison between <code>a</code> and <code>bᵏ</code>.`
  },
  {
    q: "80. How do you verify the correctness of solutions obtained using the Master theorem in algorithm analysis?",
    category: "Master Theorem",
    ans: `Use mathematical induction (the Substitution Method) on the conjectured asymptotic bound to rigorously prove that base cases and recursive steps hold for chosen constants.`
  },

  // =========================================================================
  // DOMAIN 5: SEARCHING ALGORITHMS (BASIC & UNBOUNDED) (Q81 - Q100)
  // =========================================================================
  {
    q: "81. What is a searching algorithm, and why is it important in computer science?",
    category: "Searching Algorithms",
    ans: `A <strong>searching algorithm</strong> locates the position of a target key within a data collection or confirms its absence. Efficient search is fundamental because data retrieval operations occur billions of times per second across databases, operating systems, and web engines.`
  },
  {
    q: "82. Explain the difference between linear search and binary search algorithms.",
    category: "Searching Algorithms",
    ans: `• <strong>Linear Search:</strong> Scans elements sequentially; works on <em>unsorted</em> collections in <code>O(n)</code> time and <code>O(1)</code> space.<br>
• <strong>Binary Search:</strong> Requires a <em>sorted</em> array; repeatedly halves the search space in <code>O(log n)</code> time and <code>O(1)</code> space.`
  },
  {
    q: "83. Can you describe how linear search works, and what is its time complexity?",
    category: "Searching Algorithms",
    ans: `Linear search traverses from index 0 to <code>n-1</code>, comparing each element with the target. Best case: <code>O(1)</code> (found at index 0); Worst & Average case: <code>O(n)</code>.`
  },
  {
    q: "84. Discuss the concept of sequential and parallel search algorithms.",
    category: "Searching Algorithms",
    ans: `• <strong>Sequential Search:</strong> A single thread checks elements one after another.<br>
• <strong>Parallel Search:</strong> Divides the array across <code>p</code> processor cores, where each thread scans a slice of size <code>n/p</code> concurrently in <code>O(n/p)</code> time.`
  },
  {
    q: "85. Explain how binary search works and its time complexity in the best, average, and worst cases.",
    category: "Searching Algorithms",
    ans: `Computes midpoint <code>mid = low + (high - low)/2</code>. If <code>arr[mid] == target</code>, returns index; if target is smaller, updates <code>high = mid - 1</code>; otherwise <code>low = mid + 1</code>.<br>
• Best: <code>O(1)</code>.<br>
• Average: <code>O(log n)</code>.<br>
• Worst: <code>O(log n)</code>.`
  },
  {
    q: "86. Discuss the conditions under which binary search can be applied to a dataset.",
    category: "Searching Algorithms",
    ans: `1. The dataset must be <strong>sorted</strong> according to a monotonic comparison operator.<br>
2. The data structure must support <strong>constant-time O(1) random access</strong> via index (e.g. Arrays, vectors; not standard Linked Lists).`
  },
  {
    q: "87. How do you handle searching in sorted and unsorted datasets?",
    category: "Searching Algorithms",
    ans: `• <strong>Unsorted Datasets:</strong> If one-off query, use Linear Search <code>O(n)</code>; if repeated queries, build a Hash Table <code>O(1)</code> or sort once in <code>O(n log n)</code> and binary search.<br>
• <strong>Sorted Datasets:</strong> Directly use Binary Search <code>O(log n)</code> or Interpolation Search.`
  },
  {
    q: "88. Can you describe any variations of binary search, such as ternary search or interpolation search?",
    category: "Searching Algorithms",
    ans: `• <strong>Ternary Search:</strong> Divides range into 3 parts using two midpoints; used for finding extrema in unimodal functions in <code>O(log₃ n)</code>.<br>
• <strong>Interpolation Search:</strong> Estimates target position based on key values: <code>pos = low + [(target - arr[low]) / (arr[high] - arr[low])] · (high - low)</code>. Runs in <code>O(log log n)</code> on uniformly distributed sorted data.`
  },
  {
    q: "89. Discuss the limitations and advantages of linear search and binary search algorithms.",
    category: "Searching Algorithms",
    ans: `• <strong>Linear Search:</strong> Advantage: No sorting overhead, works on streams and linked lists. Limitation: Too slow for large datasets (<code>O(n)</code>).<br>
• <strong>Binary Search:</strong> Advantage: Extremely fast (only ~30 comparisons for 1 billion items). Limitation: Requires sorted array; high insertion/deletion maintenance costs.`
  },
  {
    q: "90. Can you provide examples of real-world scenarios where linear search and binary search are used?",
    category: "Searching Algorithms",
    ans: `• <strong>Linear Search:</strong> Searching unsorted logs, short command-line arguments, small linked lists.<br>
• <strong>Binary Search:</strong> Database B-Tree page lookups, Git bisect (finding bug-introducing commits), memory address page mapping.`
  },
  {
    q: "91. Explain the concept of exponential search and its applications in searching unbounded datasets.",
    category: "Searching Algorithms",
    ans: `<strong>Exponential Search:</strong> Used when the array size is infinite or unbounded. Finds a bounding range where target lies by checking indices <code>1, 2, 4, 8, 16, 2^k</code> exponentially until <code>arr[2^k] ≥ target</code>, then executes binary search within <code>[2^(k-1), 2^k]</code> in <code>O(log i)</code> time (where <code>i</code> is target position).`
  },
  {
    q: "92. Discuss the trade-offs between different searching algorithms in terms of time complexity and space complexity.",
    category: "Searching Algorithms",
    ans: `• <strong>Binary Search:</strong> <code>O(log n)</code> time, <code>O(1)</code> space.<br>
• <strong>Hash Table:</strong> <code>O(1)</code> time, <code>O(n)</code> extra space.<br>
• <strong>Trie:</strong> <code>O(L)</code> time (string length), <code>O(Σ · L)</code> space.<br>
• <strong>Linear Search:</strong> <code>O(n)</code> time, <code>O(1)</code> space.`
  },
  {
    q: "93. Can you describe any challenges or limitations associated with basic searching algorithms, and how do you address them?",
    category: "Searching Algorithms",
    ans: `Integer overflow during midpoint calculation: <code>(low + high) / 2</code> can exceed 32-bit integer limits. Addressed using <code>low + (high - low) / 2</code>.`
  },
  {
    q: "94. Discuss the significance of choosing an appropriate searching algorithm based on the characteristics of the dataset.",
    category: "Searching Algorithms",
    ans: `Dataset distribution dictates algorithmic choice: uniform numerical datasets benefit from Interpolation Search; streaming/dynamic data requires Binary Search Trees or Skip Lists; fixed sorted data uses Binary Search.`
  },
  {
    q: "95. How do you handle edge cases and boundary conditions when working with searching algorithms?",
    category: "Searching Algorithms",
    ans: `Handle empty arrays (<code>n = 0</code>), single-element arrays, target smaller than <code>arr[0]</code>, target larger than <code>arr[n-1]</code>, and duplicate keys (using <em>lower_bound</em> / <em>upper_bound</em>).`
  },
  {
    q: "96. Can you provide examples of searching algorithm-related coding challenges or problems commonly encountered in technical interviews?",
    category: "Searching Algorithms",
    ans: `Search in Rotated Sorted Array, Find Peak Element, First and Last Position of Element in Sorted Array, Median of Two Sorted Arrays, Capacity to Ship Packages within D Days (Binary Search on Answer).`
  },
  {
    q: "97. Explain the concept of search efficiency and how it is measured in searching algorithms.",
    category: "Searching Algorithms",
    ans: `Search efficiency is measured by the number of key comparisons required to return a result or declare a key absent, expressed as worst-case and average-case comparisons.`
  },
  {
    q: "98. Discuss the importance of pre-processing and indexing techniques in optimizing search performance.",
    category: "Searching Algorithms",
    ans: `Sorting once (<code>O(n log n)</code>) or building an index (B+ Tree, Inverted Index, Hash Index) amortizes query costs, converting repeated linear scans into instantaneous lookups.`
  },
  {
    q: "99. Can you explain any recent developments or research trends in searching algorithms and their applications?",
    category: "Searching Algorithms",
    ans: `<strong>Learned Index Structures (Kraska et al.):</strong> Using neural networks and CDF models to predict key addresses faster than traditional B-Trees in memory-heavy databases.`
  },
  {
    q: "100. How do you handle searching in multidimensional datasets or structured data?",
    category: "Searching Algorithms",
    ans: `Use spatial indexing structures such as <strong>k-d Trees</strong>, <strong>R-Trees</strong>, and <strong>Quadtrees</strong> to support range queries and nearest-neighbor searches in <code>O(log n)</code>.`
  },

  // =========================================================================
  // DOMAIN 6: ADVANCED SEARCHING, GRAPH SEARCH & HEURISTICS (Q101 - Q120)
  // =========================================================================
  {
    q: "101. What are advanced searching algorithms, and how do they differ from basic searching algorithms?",
    category: "Advanced Searching",
    ans: `Advanced search algorithms navigate non-linear, multi-dimensional, or continuous state spaces using graph traversals, heuristics, or probabilistic pruning rather than simple linear arrays.`
  },
  {
    q: "102. Explain the concept of graph traversal algorithms and their applications in searching graphs and trees.",
    category: "Graph Search",
    ans: `Graph traversals systematically visit every vertex and edge in a graph without getting trapped in cycles by maintaining a <em>visited</em> set. Used for reachability, connected components, and cycle detection.`
  },
  {
    q: "103. Can you describe depth-first search (DFS) and breadth-first search (BFS) algorithms and their time complexity?",
    category: "Graph Search",
    ans: `• <strong>BFS:</strong> Explores level-by-level using a FIFO Queue. Time: <code>O(V + E)</code>; Space: <code>O(V)</code>.<br>
• <strong>DFS:</strong> Explores branch-by-branch deeply using a LIFO Stack or recursion. Time: <code>O(V + E)</code>; Space: <code>O(V)</code>.`
  },
  {
    q: "104. Discuss the use of DFS and BFS algorithms in solving problems such as maze solving and shortest path finding.",
    category: "Graph Search",
    ans: `• <strong>BFS:</strong> Guarantees finding the <em>shortest path</em> (minimum number of edge hops) in unweighted mazes or graphs.<br>
• <strong>DFS:</strong> Ideal for maze path generation, topological sorting, finding connected components, and exhaustive puzzle solution verification.`
  },
  {
    q: "105. Explain the concept of heuristic search algorithms and their applications in solving optimization problems.",
    category: "Heuristic Search",
    ans: `Heuristic searches use problem-specific domain knowledge (a heuristic function <code>h(n)</code>) to guide search toward the most promising paths, drastically reducing explored states in games, planning, and AI.`
  },
  {
    q: "106. Can you describe popular heuristic search algorithms such as A* search and its variants?",
    category: "Heuristic Search",
    ans: `<strong>A* Search:</strong> Evaluates nodes using <code>f(n) = g(n) + h(n)</code>:<br>
• <code>g(n)</code>: Exact cost from start to node <code>n</code>.<br>
• <code>h(n)</code>: Estimated heuristic cost from <code>n</code> to goal.<br>
• <em>Admissibility:</em> If <code>h(n)</code> never overestimates true cost (is admissible), A* guarantees the mathematically optimal shortest path.`
  },
  {
    q: "107. Discuss the importance of informed search strategies in heuristic search algorithms.",
    category: "Heuristic Search",
    ans: `Informed strategies prevent exponential state-space explosion by focusing computation only in the direction of the goal, outperforming uninformed blind searches like BFS.`
  },
  {
    q: "108. How do you handle searching in dynamic or changing datasets using incremental search algorithms?",
    category: "Advanced Searching",
    ans: `Algorithms like <strong>D* Lite</strong> and <strong>LPA*</strong> update previously computed shortest paths incrementally without recalculating entire graph maps when edge weights change.`
  },
  {
    q: "109. Explain the concept of parallel searching algorithms and their applications in distributed computing and parallel processing.",
    category: "Advanced Searching",
    ans: `Parallel search distributes graph nodes or search ranges across threads using lock-free priority queues or work-stealing dequeues, accelerating tree searches in game engines and SAT solvers.`
  },
  {
    q: "110. Discuss the trade-offs between different advanced searching algorithms in terms of time complexity, space complexity, and scalability.",
    category: "Advanced Searching",
    ans: `• <strong>BFS:</strong> Optimal in unweighted graphs, but consumes massive memory (<code>O(b^d)</code>).<br>
• <strong>DFS:</strong> Minimal memory (<code>O(d)</code>), but may get trapped in infinite paths.<br>
• <strong>IDDFS (Iterative Deepening DFS):</strong> Combines BFS optimality with DFS minimal memory overhead.<br>
• <strong>A*:</strong> Fast and optimal, but memory-intensive unless using IDA* (Iterative Deepening A*).`
  },
  {
    q: "111. Can you provide examples of real-world scenarios where advanced searching algorithms are used, such as in artificial intelligence and robotics?",
    category: "Heuristic Search",
    ans: `Autonomous driving path planning (Hybrid A*), robotic manipulator trajectory kinematics, video game NPC movement (NavMesh A*), and protein structure folding.`
  },
  {
    q: "112. Explain any extensions or variants of basic searching algorithms for specialized problem domains.",
    category: "Advanced Searching",
    ans: `<strong>Bidirectional Search:</strong> Runs two simultaneous BFS/A* searches from start and goal nodes, meeting in the middle to reduce complexity from <code>O(b^d)</code> to <code>O(b^(d/2))</code>.`
  },
  {
    q: "113. Discuss the significance of search pruning techniques such as alpha-beta pruning in improving search efficiency.",
    category: "Heuristic Search",
    ans: `<strong>Alpha-Beta Pruning:</strong> Prunes branches in Minimax game trees that are mathematically proven to be worse than previously evaluated options, effectively doubling the search depth achievable in chess and checkers engines.`
  },
  {
    q: "114. Can you describe any challenges or limitations associated with advanced searching algorithms, and how do you address them?",
    category: "Advanced Searching",
    ans: `Designing an admissible and consistent heuristic is difficult. If <code>h(n)</code> overestimates, optimality is lost; if too weak, search degenerates into Dijkstra.`
  },
  {
    q: "115. Discuss the importance of understanding problem-specific constraints and characteristics in selecting and designing searching algorithms.",
    category: "Advanced Searching",
    ans: `Understanding edge costs (uniform vs non-uniform vs negative), state-space branching factors, and memory limits determines whether BFS, Dijkstra, Bellman-Ford, or A* is suitable.`
  },
  {
    q: "116. How do you handle searching in uncertain or noisy environments using probabilistic search algorithms?",
    category: "Advanced Searching",
    ans: `Use <strong>Markov Decision Processes (MDPs)</strong>, <strong>Partially Observable MDPs (POMDPs)</strong>, and <strong>Monte Carlo Tree Search (MCTS)</strong>, which simulate random rollouts to build statistical confidence (used in AlphaGo).`
  },
  {
    q: "117. Can you provide examples of advanced searching algorithm-related coding challenges or problems commonly encountered in technical interviews?",
    category: "Advanced Searching",
    ans: `Word Ladder (Bidirectional BFS), Sliding Puzzle (8-puzzle A* / BFS), Open the Lock, Shortest Path in a Grid with Obstacles Elimination, Alien Dictionary (Topological Sort).`
  },
  {
    q: "118. Explain the concept of local search algorithms and their applications in optimization problems with large solution spaces.",
    category: "Heuristic Search",
    ans: `<strong>Local Search:</strong> Operates using a single current state, moving to neighboring states without maintaining search paths (e.g. Hill Climbing, Simulated Annealing, Genetic Algorithms) to optimize large NP-hard spaces.`
  },
  {
    q: "119. Discuss the importance of domain-specific knowledge in designing and optimizing advanced searching algorithms.",
    category: "Heuristic Search",
    ans: `Domain knowledge enables tight heuristic formulation (e.g. Manhattan distance for grid grids, Euclidean for 2D maps), converting intractable exponential searches into near-linear traversals.`
  },
  {
    q: "120. How do you measure and evaluate the performance of advanced searching algorithms in practice, especially in complex problem domains?",
    category: "Advanced Searching",
    ans: `Evaluated by <em>completeness</em> (always finds a solution if one exists), <em>optimality</em> (finds the minimum cost path), <em>effective branching factor</em>, and node expansion counts.`
  },

  // =========================================================================
  // DOMAIN 7: BASIC & COMPARISON-BASED SORTING ALGORITHMS (Q121 - Q140)
  // =========================================================================
  {
    q: "121. What is a sorting algorithm, and why is it important in computer science?",
    category: "Sorting Algorithms",
    ans: `A <strong>sorting algorithm</strong> rearranges elements of a collection into a specific monotonic order (ascending or descending). It is essential because sorting optimizes downstream search, data deduplication, database indexing, and graphical rendering.`
  },
  {
    q: "122. Explain the difference between comparison-based sorting algorithms and non-comparison-based sorting algorithms.",
    category: "Sorting Algorithms",
    ans: `• <strong>Comparison-based:</strong> Determines order strictly by comparing pairs of elements (<code><, ≤, ></code>). Proven lower bound of <code>Ω(n log n)</code> in worst case (Merge, Quick, Heap).<br>
• <strong>Non-comparison-based:</strong> Exploits specific mathematical representations (digits, bits, integer ranges) to achieve linear time <code>O(n)</code> (Counting, Radix, Bucket).`
  },
  {
    q: "123. Can you describe how bubble sort works, and what is its time complexity?",
    category: "Sorting Algorithms",
    ans: `Bubble Sort repeatedly compares adjacent elements and swaps them if in wrong order, bubbling the maximum element to the end in each pass. Time: Best <code>O(n)</code> (with swapped flag), Avg/Worst <code>O(n²)</code>; Space: <code>O(1)</code>.`
  },
  {
    q: "124. Discuss the concept of stable and unstable sorting algorithms, providing examples.",
    category: "Sorting Algorithms",
    ans: `• <strong>Stable Sort:</strong> Preserves original relative order of elements with equal keys. Examples: Merge Sort, Insertion Sort, Bubble Sort, Counting Sort.<br>
• <strong>Unstable Sort:</strong> May alter relative order of duplicate keys. Examples: QuickSort, HeapSort, Selection Sort.`
  },
  {
    q: "125. Explain how insertion sort works and its time complexity in the best, average, and worst cases.",
    category: "Sorting Algorithms",
    ans: `Builds sorted array one element at a time by inserting each new element into its correct relative position among previously sorted items.<br>
• Best: <code>O(n)</code> (nearly sorted).<br>
• Avg / Worst: <code>O(n²)</code>.<br>
• Space: <code>O(1)</code> in-place.`
  },
  {
    q: "126. Discuss the concept of selection sort and its time complexity in the best, average, and worst cases.",
    category: "Sorting Algorithms",
    ans: `Repeatedly finds the minimum element from the unsorted region and swaps it with the first unsorted element. Best, Average, and Worst time: <code>Θ(n²)</code> because it always scans the entire remaining unsorted list; Space: <code>O(1)</code>.`
  },
  {
    q: "127. How do you handle sorting in ascending and descending order using basic sorting algorithms?",
    category: "Sorting Algorithms",
    ans: `Invert the comparison predicate (e.g. change <code>arr[j] > arr[j+1]</code> to <code>arr[j] < arr[j+1]</code>) or pass a custom comparator function/lambda.`
  },
  {
    q: "128. Can you provide examples of real-world scenarios where bubble sort, insertion sort, and selection sort are used?",
    category: "Sorting Algorithms",
    ans: `• <strong>Insertion Sort:</strong> Small subarrays (n ≤ 32) inside TimSort (Python/Java standard sort) and online streaming data where elements arrive continuously.<br>
• <strong>Selection Sort:</strong> Memory-constrained embedded hardware where write operations to flash memory are expensive (Selection Sort executes at most <code>n</code> writes).`
  },
  {
    q: "129. Discuss the limitations and advantages of bubble sort, insertion sort, and selection sort algorithms.",
    category: "Sorting Algorithms",
    ans: `• <strong>Advantages:</strong> Extremely simple to code, in-place (<code>O(1)</code> auxiliary space), minimal overhead.<br>
• <strong>Limitations:</strong> Unusable for large datasets due to quadratic <code>O(n²)</code> runtime.`
  },
  {
    q: "130. Can you describe any variations or optimizations of basic sorting algorithms, such as cocktail shaker sort or shell sort?",
    category: "Sorting Algorithms",
    ans: `• <strong>Cocktail Shaker Sort:</strong> Bidirectional bubble sort passing alternately left-to-right and right-to-left, mitigating turtle elements.<br>
• <strong>Shell Sort:</strong> Generalization of insertion sort comparing elements separated by decreasing gap sequences, achieving <code>O(n^(3/2))</code> or <code>O(n log² n)</code>.`
  },
  {
    q: "131. Explain the concept of merge sort and its time complexity in the best, average, and worst cases.",
    category: "Sorting Algorithms",
    ans: `Divide and conquer algorithm that splits array into two halves, recursively sorts them, and merges the sorted halves using a buffer. Best, Average, and Worst: <code>Θ(n log n)</code>; Space: <code>O(n)</code>.`
  },
  {
    q: "132. Discuss the advantages of merge sort over bubble sort, insertion sort, and selection sort.",
    category: "Sorting Algorithms",
    ans: `Guarantees consistent <code>O(n log n)</code> time regardless of input ordering, scales efficiently to millions of items, and is completely stable.`
  },
  {
    q: "133. Can you describe how merge sort handles sorting large datasets and its space complexity?",
    category: "Sorting Algorithms",
    ans: `Requires <code>O(n)</code> auxiliary array memory to execute merge operations. For datasets exceeding RAM, <strong>External Merge Sort</strong> breaks data into chunks, sorts each in memory, and merges them using multi-way disk streams.`
  },
  {
    q: "134. Explain the concept of quicksort and its time complexity in the best, average, and worst cases.",
    category: "Sorting Algorithms",
    ans: `Selects a pivot, partitions elements into smaller and larger subsets, and recursively sorts subsets in place.<br>
• Best / Average: <code>O(n log n)</code>.<br>
• Worst: <code>O(n²)</code> (when pivot consistently isolates empty subproblem).<br>
• Space: <code>O(log n)</code> stack.`
  },
  {
    q: "135. Discuss the trade-offs between merge sort and quicksort algorithms in terms of time complexity and space complexity.",
    category: "Sorting Algorithms",
    ans: `• <strong>QuickSort:</strong> In-place (<code>O(log n)</code> space), excellent CPU cache locality, faster constant factors; but worst-case <code>O(n²)</code> and unstable.<br>
• <strong>Merge Sort:</strong> Guaranteed <code>O(n log n)</code>, stable, ideal for linked lists; but requires <code>O(n)</code> extra RAM buffer.`
  },
  {
    q: "136. Can you provide examples of sorting algorithm-related coding challenges or problems commonly encountered in technical interviews?",
    category: "Sorting Algorithms",
    ans: `Merge Intervals, Kth Largest Element in an Array (QuickSelect), Sort Colors (Dutch National Flag), Meeting Rooms II, Sort List (Merge Sort on Linked List).`
  },
  {
    q: "137. Explain the concept of heap sort and its time complexity in the best, average, and worst cases.",
    category: "Sorting Algorithms",
    ans: `Builds a Max-Heap in <code>O(n)</code> time, then repeatedly extracts the root maximum element, placing it at the end of the array and heapifying the remainder in <code>O(log n)</code>. Best, Average, Worst: <code>Θ(n log n)</code>; Space: <code>O(1)</code> in-place (unstable).`
  },
  {
    q: "138. Discuss the importance of stable sorting algorithms in preserving the order of equal elements.",
    category: "Sorting Algorithms",
    ans: `Crucial in multi-level database queries (e.g. sorting by \'City\', then re-sorting by \'Zip Code\'). Unstable sort scrambles the prior ordering of matching keys.`
  },
  {
    q: "139. Can you describe any challenges or limitations associated with basic sorting algorithms, and how do you address them?",
    category: "Sorting Algorithms",
    ans: `Quadratic sorting algorithms lock CPU threads on large arrays. Addressed by hybrid algorithms (e.g. <strong>IntroSort</strong>: starts with QuickSort, switches to HeapSort if recursion depth exceeds <code>2 log n</code>, and uses Insertion Sort on small chunks).`
  },
  {
    q: "140. How do you handle edge cases and boundary conditions when working with basic sorting algorithms?",
    category: "Sorting Algorithms",
    ans: `Check empty array, single element, already sorted arrays, reverse sorted arrays, arrays with all identical duplicate elements, and integer overflow in pivot calculations.`
  },

  // =========================================================================
  // DOMAIN 8: ADVANCED & NON-COMPARISON SORTING ALGORITHMS (Q141 - Q160)
  // =========================================================================
  {
    q: "141. What are advanced sorting algorithms, and how do they differ from basic sorting algorithms?",
    category: "Advanced Sorting",
    ans: `Advanced sorting algorithms bypass the theoretical <code>Ω(n log n)</code> comparison lower bound by exploiting numerical representations (integers, strings) to sort in linear time <code>O(n)</code> or handle datasets exceeding RAM.`
  },
  {
    q: "142. Explain the concept of counting sort and its time complexity in sorting integer elements.",
    category: "Non-Comparison Sorting",
    ans: `<strong>Counting Sort:</strong> Counts frequency of each distinct key in range <code>[0..k]</code> into an array, computes prefix sums to determine exact output positions, and places elements in reverse order for stability. Time: <code>O(n + k)</code>; Space: <code>O(n + k)</code>.`
  },
  {
    q: "143. Discuss the limitations of counting sort and its applicability to sorting non-integer elements.",
    category: "Non-Comparison Sorting",
    ans: `Cannot be applied if key range <code>k</code> is large (e.g. <code>k ≈ n²</code> implies <code>O(n²)</code> space/time) or if keys are arbitrary floating-point numbers or complex strings.`
  },
  {
    q: "144. Can you describe radix sort and its time complexity in sorting integer elements?",
    category: "Non-Comparison Sorting",
    ans: `<strong>Radix Sort:</strong> Sorts numbers digit by digit from least significant digit (LSD) to most significant digit (MSD) using a stable subroutine like Counting Sort. Time: <code>O(d · (n + b))</code> where <code>d</code> is number of digits and <code>b</code> is base; Space: <code>O(n + b)</code>.`
  },
  {
    q: "145. Explain the concept of bucket sort and its time complexity in sorting elements with a uniform distribution.",
    category: "Non-Comparison Sorting",
    ans: `<strong>Bucket Sort:</strong> Divides interval <code>[0, 1)</code> into <code>k</code> equal buckets, distributes elements into buckets, sorts each bucket using Insertion Sort, and concatenates. Time: Average <code>O(n + k)</code>; Worst <code>O(n²)</code> (when all elements cluster into a single bucket).`
  },
  {
    q: "146. Discuss the advantages and disadvantages of counting sort, radix sort, and bucket sort over comparison-based sorting algorithms.",
    category: "Non-Comparison Sorting",
    ans: `• <strong>Advantages:</strong> Strictly linear <code>O(n)</code> runtime for specific inputs, outperforming Merge/Quick sort.<br>
• <strong>Disadvantages:</strong> High auxiliary memory requirements; strictly limited to discrete integers or uniform floats; cannot sort arbitrary object keys.`
  },
  {
    q: "147. Can you provide examples of real-world scenarios where counting sort, radix sort, and bucket sort are used?",
    category: "Non-Comparison Sorting",
    ans: `• <strong>Counting Sort:</strong> Sorting exam scores (0 to 100), voting tally counting.<br>
• <strong>Radix Sort:</strong> Sorting 32-bit/64-bit integer keys in high-frequency trading pipelines.<br>
• <strong>Bucket Sort:</strong> Sorting uniformly distributed GPS coordinates or floating-point probabilities.`
  },
  {
    q: "148. Explain the concept of external sorting algorithms and their applications in sorting large datasets that do not fit into main memory.",
    category: "External Sorting",
    ans: `<strong>External Sorting:</strong> Handles multi-gigabyte datasets stored on secondary disk drives. It loads memory-sized chunks, sorts them internally, saves sorted runs to disk, and merges runs using a <em>k-way merge</em> with a Min-Heap.`
  },
  {
    q: "149. Discuss the significance of I/O efficiency and disk access patterns in external sorting algorithms.",
    category: "External Sorting",
    ans: `Disk block reads/writes are 100,000× slower than RAM. External algorithms maximize sequential block reading and use double-buffering to hide disk I/O latency behind CPU execution.`
  },
  {
    q: "150. Can you describe any challenges or limitations associated with advanced sorting algorithms, and how do you address them?",
    category: "Advanced Sorting",
    ans: `Skewed distributions degrade Bucket Sort to <code>O(n²)</code>. Addressed by dynamic bucket boundaries or fallback to QuickSort inside overloaded buckets.`
  },
  {
    q: "151. Explain the concept of parallel sorting algorithms and their applications in distributed computing and parallel processing.",
    category: "Advanced Sorting",
    ans: `Algorithms like <strong>Sample Sort</strong> and <strong>Bitonic Sort</strong> partition data across distributed nodes, sort partitions locally, and exchange boundary keys over network switches in parallel clusters.`
  },
  {
    q: "152. Discuss the importance of understanding problem-specific constraints and characteristics in selecting and designing advanced sorting algorithms.",
    category: "Advanced Sorting",
    ans: `Knowing that input keys are integers bounded within <code>[0, 1000]</code> immediately signals using Counting Sort <code>O(n)</code> instead of generic QuickSort <code>O(n log n)</code>.`
  },
  {
    q: "153. Can you provide examples of advanced sorting algorithm-related coding challenges or problems commonly encountered in technical interviews?",
    category: "Advanced Sorting",
    ans: `Maximum Gap (Bucket Sort in <code>O(n)</code>), Sort Characters By Frequency, Top K Frequent Elements, Wiggle Sort, H-Index.`
  },
  {
    q: "154. Explain the concept of stability in sorting algorithms and how it is achieved in advanced sorting algorithms.",
    category: "Advanced Sorting",
    ans: `In Counting/Radix Sort, stability is achieved by iterating through the input array in <strong>reverse (from n-1 down to 0)</strong> when writing into the output array using prefix indices.`
  },
  {
    q: "155. Discuss the importance of domain-specific knowledge in designing and optimizing advanced sorting algorithms.",
    category: "Advanced Sorting",
    ans: `In genomics, DNA sequences contain only 4 bases (A, C, G, T); mapping them to 2 bits allows Radix Sort to process billions of base pairs in cache-line registers.`
  },
  {
    q: "156. How do you measure and evaluate the performance of advanced sorting algorithms in practice, especially in complex problem domains?",
    category: "Advanced Sorting",
    ans: `Evaluated by total throughput (records/sec), cache misses per instruction, memory overhead ratio, and scalability under skewed data distributions.`
  },
  {
    q: "157. Can you explain any recent developments or research trends related to sorting algorithms and their applications?",
    category: "Advanced Sorting",
    ans: `<strong>SIMD-accelerated sorting:</strong> AVX-512 vector register sorting networks capable of sorting short arrays in tens of CPU clock cycles without branching.`
  },
  {
    q: "158. Discuss the role of sorting algorithms in data preprocessing and data cleaning tasks in machine learning and data analytics.",
    category: "Advanced Sorting",
    ans: `Sorting enables <code>O(n)</code> deduplication, outlier percentile extraction, quantile normalization, and missing-value imputation via nearest neighbor interpolation.`
  },
  {
    q: "159. Can you describe any extensions or variants of advanced sorting algorithms for specialized problem domains?",
    category: "Advanced Sorting",
    ans: `<strong>Burstsort:</strong> A cache-efficient string sorting algorithm combining tries with bucket containers to sort large text corpora faster than Radix Sort.`
  },
  {
    q: "160. How do you handle sorting in uncertain or noisy environments using probabilistic sorting algorithms?",
    category: "Advanced Sorting",
    ans: `Use noisy comparison models where pairwise comparisons have an error probability <code>p</code>, employing repeated sampling and Braverman-Mossel probabilistic reconstruction.`
  },

  // =========================================================================
  // DOMAIN 9: DIVIDE AND CONQUER PARADIGM (Q161 - Q180)
  // =========================================================================
  {
    q: "161. What is the divide and conquer method, and why is it important in algorithm design?",
    category: "Divide and Conquer",
    ans: `Divide and Conquer breaks down a complex problem into smaller, independent subproblems of the same type, solves them recursively, and combines their solutions. It is important because it transforms intractable polynomial algorithms into logarithmic or <code>O(n log n)</code> runtimes and naturally parallelizes.`
  },
  {
    q: "162. Can you explain the three key steps involved in the divide and conquer approach?",
    category: "Divide and Conquer",
    ans: `1. <strong>Divide:</strong> Partition the original problem into smaller subproblems.<br>
2. <strong>Conquer:</strong> Recursively solve subproblems (solve directly if at base case).<br>
3. <strong>Combine:</strong> Merge subproblem solutions into the comprehensive solution for the original problem.`
  },
  {
    q: "163. Discuss the advantages of using the divide and conquer method over other algorithmic paradigms.",
    category: "Divide and Conquer",
    ans: `• Solves structurally difficult problems (e.g. Tower of Hanoi, Strassen).<br>
• High CPU cache locality (fits subproblems into L1/L2 caches).<br>
• Disjoint subproblems run on independent parallel threads without mutex synchronization.`
  },
  {
    q: "164. Can you provide examples of problems that can be solved efficiently using the divide and conquer approach?",
    category: "Divide and Conquer",
    ans: `Merge Sort, QuickSort, Binary Search, Closest Pair of Points, Strassen\'s Matrix Multiplication, Fast Fourier Transform (FFT), Karatsuba Integer Multiplication, Convex Hull.`
  },
  {
    q: "165. How do you determine the base case(s) for a problem when applying the divide and conquer method?",
    category: "Divide and Conquer",
    ans: `Identify the smallest input size where the problem can be solved in <code>O(1)</code> without further recursion (e.g. array of size 0 or 1 is already sorted in Merge Sort).`
  },
  {
    q: "166. Explain the concept of recursion in the divide and conquer approach and how it helps in solving problems.",
    category: "Divide and Conquer",
    ans: `Recursion provides self-referential mathematical elegance: identical logic applies at every scale from 1 million elements down to 2 elements, simplifying code structure.`
  },
  {
    q: "167. Discuss the significance of dividing the problem into smaller subproblems and how it leads to efficient solutions.",
    category: "Divide and Conquer",
    ans: `Subdivision changes the asymptotic growth rate: performing work on two halves (<code>2 × (n/2)² = n²/2</code>) halves computational effort compared to operating on the whole <code>n²</code>.`
  },
  {
    q: "168. Can you describe any limitations or challenges associated with the divide and conquer method, and how do you address them?",
    category: "Divide and Conquer",
    ans: `• <strong>Stack Overflow:</strong> Mitigate by setting base cases for small <code>n</code> and using tail recursion.<br>
• <strong>Slow Combine Step:</strong> If combining takes <code>O(n²)</code>, overall complexity worsens.`
  },
  {
    q: "169. Explain the process of solving a problem using the divide and conquer method, starting from problem decomposition to solution combination.",
    category: "Divide and Conquer",
    ans: `Decompose input at midpoints; recurse on left and right partitions until base cases return; merge sorted/calculated outputs upwards through the call tree.`
  },
  {
    q: "170. Discuss the importance of analyzing the time complexity of divide and conquer algorithms in evaluating their efficiency.",
    category: "Divide and Conquer",
    ans: `Ensures that the recursion branching factor <code>a</code> and combine cost <code>f(n)</code> beat naive iterative benchmarks (e.g. Strassen\'s 7 multiplications beat standard 8).`
  },
  {
    q: "171. Can you provide examples of classic divide and conquer algorithms, such as merge sort, quicksort, and binary search?",
    category: "Divide and Conquer",
    ans: `• <strong>Merge Sort:</strong> Divide: find middle; Conquer: sort halves; Combine: merge 2 sorted arrays in <code>O(n)</code>.<br>
• <strong>QuickSort:</strong> Divide: partition around pivot; Conquer: sort partitions; Combine: trivial (in-place).<br>
• <strong>Binary Search:</strong> Divide: test midpoint; Conquer: search active half; Combine: return index.`
  },
  {
    q: "172. Explain how merge sort uses the divide and conquer method to efficiently sort a list of elements.",
    category: "Divide and Conquer",
    ans: `Recursively splits list in half until single-element lists remain. It then merges adjacent sorted lists using two pointers, taking <code>O(n)</code> time per level across <code>log₂ n</code> levels.`
  },
  {
    q: "173. Discuss the time complexity of merge sort and how it compares to other sorting algorithms.",
    category: "Divide and Conquer",
    ans: `Merge sort is guaranteed <code>Θ(n log n)</code> in best, average, and worst cases, unlike QuickSort which can degrade to <code>O(n²)</code>.`
  },
  {
    q: "174. Can you describe how quicksort applies the divide and conquer method to efficiently sort elements in an array?",
    category: "Divide and Conquer",
    ans: `Selects a pivot, partitions array such that all elements <code>< pivot</code> precede it and all <code>> pivot</code> follow it, and recursively sorts left and right subarrays in-place.`
  },
  {
    q: "175. Discuss the advantages of quicksort over other sorting algorithms and any limitations it may have.",
    category: "Divide and Conquer",
    ans: `• <strong>Advantages:</strong> In-place sorting with <code>O(log n)</code> stack; 2-3× faster in practice than Merge Sort due to cache locality.<br>
• <strong>Limitations:</strong> Unstable, and worst-case <code>O(n²)</code> on sorted arrays unless randomized pivots are used.`
  },
  {
    q: "176. Explain how binary search applies the divide and conquer method to efficiently search for a target element in a sorted array.",
    category: "Divide and Conquer",
    ans: `Evaluates midpoint. If not matched, eliminates half the dataset and recurses on the remaining half. Recurrence: <code>T(n) = T(n/2) + O(1) ⇒ O(log n)</code>.`
  },
  {
    q: "177. Can you provide examples of problem-solving techniques that combine the divide and conquer method with other algorithmic paradigms?",
    category: "Divide and Conquer",
    ans: `• <strong>Divide & Conquer + DP:</strong> Divide and Conquer Optimization (Knuth\'s optimization) in DP state transitions.<br>
• <strong>Divide & Conquer + Greedy:</strong> Huffman tree construction recursively merging lowest frequency forest trees.`
  },
  {
    q: "178. Discuss the role of problem decomposition and solution combination in designing efficient divide and conquer algorithms.",
    category: "Divide and Conquer",
    ans: `The combine phase is the critical determinant of efficiency. If combine is <code>O(n)</code>, total time is <code>O(n log n)</code>; if combine takes <code>O(n²)</code>, the algorithm loses its advantage.`
  },
  {
    q: "179. Can you explain any extensions or variants of the divide and conquer method for solving specific types of problems?",
    category: "Divide and Conquer",
    ans: `<strong>Meet-in-the-Middle:</strong> Splits search set of size <code>n</code> into two sets of <code>n/2</code>, computes subsets in <code>O(2^(n/2))</code>, and joins them using binary search (e.g. 4-Sum, Subset Sum).`
  },
  {
    q: "180. How do you handle edge cases and boundary conditions when applying the divide and conquer method?",
    category: "Divide and Conquer",
    ans: `Ensure odd-length divisions (<code>n/2</code>) don\'t miss elements, avoid infinite recursion when subproblem size fails to shrink, and verify integer overflow on midpoint calculation.`
  },

  // =========================================================================
  // DOMAIN 10: DYNAMIC PROGRAMMING PRINCIPLES & OPTIMIZATION (Q181 - Q190)
  // =========================================================================
  {
    q: "181. What is dynamic programming, and how does it differ from other problem-solving techniques like divide and conquer or greedy algorithms?",
    category: "Dynamic Programming",
    ans: `<strong>Dynamic Programming (DP)</strong> solves complex optimization problems by breaking them down into <em>overlapping subproblems</em> and storing subproblem results in a lookup table.<br><br>
• <strong>vs Divide & Conquer:</strong> D&C solves disjoint, independent subproblems without caching; DP caches shared overlapping subproblems.<br>
• <strong>vs Greedy:</strong> Greedy commits to a single locally optimal choice without looking ahead; DP evaluates all subproblem choices and stores optimal values.`
  },
  {
    q: "182. Can you explain the concept of overlapping subproblems in dynamic programming? Why is it important, and how do you identify overlapping subproblems in a problem?",
    category: "Dynamic Programming",
    ans: `<strong>Overlapping Subproblems:</strong> A recursive problem repeatedly solves the exact same subproblem calls with identical parameters (e.g. <code>fib(5)</code> calls <code>fib(3)</code> twice, <code>fib(2)</code> three times). Identified by drawing a recursion tree and observing duplicate state calls.`
  },
  {
    q: "183. Discuss the two main approaches to implementing dynamic programming: top-down (memoization) and bottom-up (tabulation). When would you choose one approach over the other?",
    category: "Dynamic Programming",
    ans: `• <strong>Top-Down (Memoization):</strong> Natural recursion + cache lookup. Evaluates only necessary subproblems on-demand; slight recursion stack overhead.<br>
• <strong>Bottom-Up (Tabulation):</strong> Iterative array filling from base cases. Zero call stack overhead, better cache locality, and enables space optimization (e.g. keeping only the last row).`
  },
  {
    q: "184. How do you determine if a problem can be solved using dynamic programming? What are the characteristics of problems that make them suitable for dynamic programming?",
    category: "Dynamic Programming",
    ans: `A problem is suitable for DP if it satisfies two conditions:<br>
1. <strong>Optimal Substructure:</strong> Optimal solution to problem contains optimal solutions to subproblems.<br>
2. <strong>Overlapping Subproblems:</strong> Subproblems recur repeatedly throughout the recursion tree.`
  },
  {
    q: "185. Explain the concept of optimal substructure in dynamic programming. Why is it necessary for a problem to have optimal substructure to be solvable using dynamic programming?",
    category: "Dynamic Programming",
    ans: `<strong>Optimal Substructure:</strong> Means that the global optimal solution can be constructed strictly from optimal solutions of smaller subproblems without needing to revisit suboptimal sub-solutions (e.g. Shortest Path has optimal substructure; Longest Simple Path does not).`
  },
  {
    q: "186. Walk me through the steps you would take to solve a typical dynamic programming problem, starting from problem understanding to arriving at the solution.",
    category: "Dynamic Programming",
    ans: `1. <strong>Identify DP State:</strong> Define meaning of <code>dp[i][j]</code> precisely.<br>
2. <strong>Formulate Recurrence:</strong> Express <code>dp[i][j]</code> in terms of previous states.<br>
3. <strong>Establish Base Cases:</strong> Initialize base boundary values.<br>
4. <strong>Determine Iteration Order:</strong> Ensure dependencies are computed before dependent states.<br>
5. <strong>Space Optimization:</strong> Compress 2D table to 1D array if only previous row/column is needed.`
  },
  {
    q: "187. Can you provide examples of some classic dynamic programming problems, such as the Fibonacci sequence, longest common subsequence, or the knapsack problem? Explain how dynamic programming is applied to solve each of these problems.",
    category: "Dynamic Programming",
    ans: `• <strong>Fibonacci:</strong> <code>dp[i] = dp[i-1] + dp[i-2]</code> (reduces <code>O(2ⁿ)</code> to <code>O(n)</code> time, <code>O(1)</code> space).<br>
• <strong>LCS:</strong> If <code>X[i] == Y[j]</code>, <code>dp[i][j] = 1 + dp[i-1][j-1]</code>; else <code>max(dp[i-1][j], dp[i][j-1])</code>.<br>
• <strong>0/1 Knapsack:</strong> <code>dp[i][w] = max(dp[i-1][w], val[i] + dp[i-1][w - wt[i]])</code> in <code>O(n · W)</code>.`
  },
  {
    q: "188. What is the time complexity of dynamic programming solutions, both in terms of the number of function calls (for recursive solutions) and the overall time complexity (for iterative solutions)?",
    category: "Dynamic Programming",
    ans: `<code>Total Time = (Total Number of Unique States) × (Time Spent per State Transition)</code>.<br>
For 0/1 Knapsack: <code>(n × W) states × O(1) transition = O(n · W)</code>.`
  },
  {
    q: "189. How do you optimize a dynamic programming solution to reduce its time or space complexity? Can you provide examples of techniques such as state compression, space optimization, or reducing the number of recursive calls?",
    category: "Dynamic Programming",
    ans: `• <strong>Space Optimization (Rolling Array):</strong> If <code>dp[i]</code> depends only on <code>dp[i-1]</code>, reduce 2D <code>O(n²)</code> matrix to two 1D rows <code>O(n)</code>.<br>
• <strong>Bitmask DP:</strong> Represent subset states as an integer bitmask (e.g. TSP Held-Karp in <code>O(n² 2ⁿ)</code>).<br>
• <strong>Monotonic Queue / Convex Hull Trick:</strong> Reduces 1D DP transition time from <code>O(n)</code> to <code>O(1)</code>.`
  },
  {
    q: "190. Describe a scenario where dynamic programming might not be the best approach to solving a problem. What alternative strategies could you consider in such cases?",
    category: "Dynamic Programming",
    ans: `When state space is vast (e.g. 0/1 Knapsack where capacity <code>W = 10¹⁴</code>, making <code>O(n · W)</code> impossible due to memory limits). Use Branch and Bound, Meet-in-the-Middle, or a Fully Polynomial-Time Approximation Scheme (FPTAS).`
  },

  // =========================================================================
  // DOMAIN 11: GREEDY ALGORITHMS & OPTIMIZATION (Q191 - Q200)
  // =========================================================================
  {
    q: "191. What is a greedy algorithm, and how does it work? How does it make decisions at each step?",
    category: "Greedy Algorithms",
    ans: `A <strong>greedy algorithm</strong> builds up a solution piece by piece, always choosing the next piece that offers the most immediate, local benefit without considering future consequences. It never backtracks or reconsiders previous choices.`
  },
  {
    q: "192. Explain the difference between greedy algorithms and dynamic programming. When would you choose one over the other for problem-solving?",
    category: "Greedy vs DP",
    ans: `• <strong>Greedy:</strong> Makes a local irrevocable choice at each step; runs in <code>O(n log n)</code> or <code>O(n)</code>. Used when the greedy choice is mathematically guaranteed to lead to the global optimum.<br>
• <strong>DP:</strong> Evaluates all possible subproblem choices and stores optimal solutions; runs in polynomial/pseudo-polynomial time. Used when local greedy choices lead to suboptimal traps.`
  },
  {
    q: "193. Can you provide examples of problems where a greedy approach yields an optimal solution? How do you prove the correctness of a greedy algorithm?",
    category: "Greedy Algorithms",
    ans: `• <strong>Examples:</strong> Minimum Spanning Tree (Kruskal/Prim), Dijkstra Shortest Path, Huffman Coding, Fractional Knapsack, Activity Selection.<br>
• <strong>Proof Techniques:</strong><br>
  1. <em>Greedy Stays Ahead:</em> Prove by induction that at every step <code>k</code>, the greedy solution is at least as good as any optimal competitor.<br>
  2. <em>Exchange Argument:</em> Assume an optimal solution differs from greedy; show that transforming it step-by-step into the greedy solution never worsens the objective cost.`
  },
  {
    q: "194. Discuss the concept of the ”greedy-choice property” and the ”optimal substructure” in the context of greedy algorithms. Why are these properties important?",
    category: "Greedy Algorithms",
    ans: `• <strong>Greedy-Choice Property:</strong> A global optimum can be assembled strictly from local greedy choices without backtracking.<br>
• <strong>Optimal Substructure:</strong> An optimal solution contains within it optimal solutions to subproblems.<br>
• <strong>Importance:</strong> Both must hold simultaneously for a greedy algorithm to produce a correct, optimal solution.`
  },
  {
    q: "195. What are some common pitfalls or limitations of greedy algorithms? Can you provide examples of problems where a greedy algorithm fails to produce an optimal solution?",
    category: "Greedy Algorithms",
    ans: `• <strong>Pitfall:</strong> Getting trapped in local optima.<br>
• <strong>Failure Examples:</strong><br>
  – <em>0/1 Knapsack:</em> Picking highest value-to-weight ratio items leaves empty space that cannot be filled, yielding suboptimal total value.<br>
  – <em>Coin Change with arbitrary denominations:</em> Coins [1, 3, 4] for amount 6: greedy gives 4 + 1 + 1 (3 coins); optimal is 3 + 3 (2 coins).<br>
  – <em>Traveling Salesman Problem (TSP):</em> Nearest neighbor greedy creates disastrously long final return legs.`
  },
  {
    q: "196. Describe the process of designing a greedy algorithm for a given problem. How do you identify a greedy strategy, and how do you ensure that it leads to the optimal solution?",
    category: "Greedy Algorithms",
    ans: `1. Cast problem as a sequence of choices.<br>
2. Identify intuitive candidate greedy rules (e.g. earliest deadline, shortest edge, highest ratio).<br>
3. Test against counter-examples.<br>
4. Formally prove correctness using an <em>Exchange Argument</em> or <em>Greedy Stays Ahead</em> proof.`
  },
  {
    q: "197. How do you analyze the time complexity of a greedy algorithm? What factors influence the time complexity of a greedy solution?",
    category: "Greedy Algorithms",
    ans: `Time complexity is usually dominated by initial sorting of candidates (<code>O(n log n)</code>) or priority queue operations (<code>O(log n)</code> per extraction/insertion). The selection step itself is typically <code>O(1)</code>.`
  },
  {
    q: "198. Provide examples of classic problems that can be solved using greedy algorithms, such as the coin change problem, interval scheduling, or Huffman coding. Explain how a greedy approach is applied to solve each of these problems.",
    category: "Greedy Algorithms",
    ans: `• <strong>Interval Scheduling:</strong> Sort intervals by <em>finish time</em>; greedily pick the next non-overlapping interval with earliest finish time.<br>
• <strong>Huffman Coding:</strong> Greedily merge the two lowest-frequency forest nodes in a priority queue until 1 root tree remains.<br>
• <strong>Fractional Knapsack:</strong> Sort items by <code>vᵢ / wᵢ</code>; greedily take maximal available fractions of highest-ratio items.`
  },
  {
    q: "199. Discuss strategies for refining or improving a greedy algorithm to handle more complex problem scenarios or edge cases. How do you balance the trade-off between optimality and efficiency?",
    category: "Greedy Algorithms",
    ans: `When pure greedy fails, use <strong>Greedy Randomized Adaptive Search Procedures (GRASP)</strong>, apply local search neighborhood optimization, or formulate a <strong>bounded approximation algorithm</strong>.`
  },
  {
    q: "200. Can you think of scenarios where a greedy algorithm might not be suitable for solving a problem? What alternative approaches could you consider in such cases?",
    category: "Greedy Algorithms",
    ans: `When decisions have non-linear long-term repercussions (e.g. Chess move evaluation, Graph 3-Coloring). Alternatives: Dynamic Programming, Integer Linear Programming (ILP), or Branch and Bound.`
  },

  // =========================================================================
  // DOMAIN 12: GRAPH ALGORITHMS & NETWORK FLOWS (Q201 - Q213)
  // =========================================================================
  {
    q: "201. What is a graph, and what are its components? Explain the difference between directed and undirected graphs.",
    category: "Graph Algorithms",
    ans: `A <strong>graph</strong> <code>G = (V, E)</code> consists of a set of vertices (nodes) <code>V</code> and edges <code>E</code> connecting pairs of vertices.<br>
• <strong>Undirected Graph:</strong> Edges have no orientation; edge <code>(u, v)</code> is bidirectional (symmetric relationship).<br>
• <strong>Directed Graph (Digraph):</strong> Edges have direction; edge <code>(u, v)</code> goes strictly from <code>u</code> to <code>v</code>.`
  },
  {
    q: "202. Discuss common representations of graphs, such as adjacency matrix, adjacency list, and edge list. What are the advantages and disadvantages of each representation?",
    category: "Graph Algorithms",
    ans: `• <strong>Adjacency Matrix:</strong> <code>V × V</code> 2D boolean/weight table. Adv: <code>O(1)</code> edge lookup; Disadv: <code>O(V²)</code> space (wasteful for sparse graphs).<br>
• <strong>Adjacency List:</strong> Array of lists where index <code>u</code> stores neighbors. Adv: <code>O(V + E)</code> space, ideal for sparse graphs; Disadv: <code>O(deg(u))</code> edge check.<br>
• <strong>Edge List:</strong> Simple array of tuples <code>(u, v, weight)</code>. Adv: <code>O(E)</code> space, perfect for Kruskal\'s sort; Disadv: <code>O(E)</code> neighbor queries.`
  },
  {
    q: "203. Explain depth-first search (DFS) and breadth-first search (BFS) algorithms. How do they differ in terms of traversal order and the data structures used?",
    category: "Graph Algorithms",
    ans: `• <strong>BFS (Queue):</strong> Visits all immediate neighbors at depth <code>d</code> before advancing to depth <code>d+1</code> (concentric waves).<br>
• <strong>DFS (Stack / Recursion):</strong> Traverses as deeply as possible along each branch before backtracking.<br>
• Both run in <code>O(V + E)</code> time on adjacency lists.`
  },
  {
    q: "204. Describe the applications of depth-first search and breadth-first search in graph traversal and problem-solving.",
    category: "Graph Algorithms",
    ans: `• <strong>BFS:</strong> Shortest paths in unweighted graphs, Ford-Fulkerson maximum flow (Edmonds-Karp), web crawlers.<br>
• <strong>DFS:</strong> Cycle detection in directed graphs, topological sorting, finding strongly connected components, bipartite testing.`
  },
  {
    q: "205. What is a spanning tree? How do you find a minimum spanning tree in a weighted graph using algorithms like Kruskal’s and Prim’s?",
    category: "Graph Algorithms",
    ans: `A <strong>Spanning Tree</strong> is a connected subgraph connecting all <code>V</code> vertices with exactly <code>V - 1</code> edges and no cycles. A <strong>Minimum Spanning Tree (MST)</strong> minimizes total edge weight.<br>
• <strong>Kruskal\'s:</strong> Sorts edges; greedily adds shortest edge not forming a cycle using Disjoint Set Union in <code>O(E log E)</code>.<br>
• <strong>Prim\'s:</strong> Grows a single tree from root, extracting minimum incident edge via Min-Heap in <code>O((V + E) log V)</code>.`
  },
  {
    q: "206. Discuss Dijkstra’s algorithm and its application in finding the shortest path in a weighted graph with non-negative edge weights. What is the time complexity of Dijkstra’s algorithm?",
    category: "Graph Algorithms",
    ans: `Computes single-source shortest path on graphs with non-negative weights. Greedily extracts vertex with minimum tentative distance from a priority queue and relaxes its outgoing edges. Time: <code>O((V + E) log V)</code> with binary heap; <code>O(E + V log V)</code> with Fibonacci heap.`
  },
  {
    q: "207. Explain the Bellman-Ford algorithm and its significance in finding the shortest path in a graph with negative edge weights or cycles. How does it handle negative cycles?",
    category: "Graph Algorithms",
    ans: `Relaxes all <code>E</code> edges <code>V - 1</code> times in <code>O(V · E)</code> time. Handles negative edge weights. <strong>Negative Cycle Detection:</strong> Runs a <code>V</code>-th iteration; if any distance can still be reduced, a reachable negative weight cycle exists.`
  },
  {
    q: "208. Describe the Floyd-Warshall algorithm and its application in finding the shortest paths between all pairs of vertices in a weighted graph. What is its time complexity?",
    category: "Graph Algorithms",
    ans: `All-pairs shortest path dynamic programming algorithm using 3 nested loops: <code>dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])</code> for intermediate vertex <code>k</code>. Time: <code>Θ(V³)</code>; Space: <code>Θ(V²)</code>.`
  },
  {
    q: "209. What is topological sorting, and in which type of graphs is it applicable? How do you perform topological sorting using depth-first search or Kahn’s algorithm?",
    category: "Graph Algorithms",
    ans: `Linear ordering of vertices in a <strong>Directed Acyclic Graph (DAG)</strong> such that for every edge <code>u → v</code>, <code>u</code> precedes <code>v</code>.<br>
• <strong>Kahn\'s (BFS):</strong> Continuously remove in-degree 0 nodes; cycle detected if processed count <code>< V</code>.<br>
• <strong>DFS:</strong> Push vertices to a stack upon post-order backtrack.`
  },
  {
    q: "210. Discuss algorithms for finding strongly connected components (SCCs) in a directed graph, such as Kosaraju’s algorithm and Tarjan’s algorithm. What are the applications of SCCs?",
    category: "Graph Algorithms",
    ans: `An SCC is a maximal subgraph where every vertex is reachable from every other vertex.<br>
• <strong>Kosaraju\'s:</strong> 1) DFS on G to order vertices by exit time; 2) Transpose graph; 3) DFS on G^T in reverse exit order (2 passes, <code>O(V + E)</code>).<br>
• <strong>Tarjan\'s:</strong> Single-pass DFS tracking discovery times and low-link values using a stack (<code>O(V + E)</code>).`
  },
  {
    q: "211. Explain the concept of graph coloring and its applications. How do you solve graph coloring problems using algorithms like greedy coloring or backtracking?",
    category: "Graph Algorithms",
    ans: `Assigns colors to vertices such that no two adjacent vertices share the same color. Minimizing colors (Chromatic number) is NP-Complete. Solved via Backtracking (exact) or Greedy Welsh-Powell (heuristic). Used in register allocation in compilers and exam scheduling.`
  },
  {
    q: "212. Describe algorithms for finding maximum flows in a flow network, such as Ford-Fulkerson algorithm and Edmonds-Karp algorithm. What are their time complexities and termination conditions?",
    category: "Graph Algorithms",
    ans: `• <strong>Ford-Fulkerson:</strong> Repeatedly finds augmenting paths in residual network via DFS and augments flow. Time: <code>O(E · |f_max|)</code>.<br>
• <strong>Edmonds-Karp:</strong> Uses <strong>BFS</strong> to find shortest augmenting paths, guaranteeing polynomial time <code>O(V · E²)</code>.<br>
• <strong>Termination:</strong> Stops when no s-t path exists in the residual graph (Max-Flow Min-Cut Theorem).`
  },
  {
    q: "213. Discuss applications of graph algorithms in real-world scenarios, such as social networks, transportation networks, and computer networks. How do graph algorithms optimize these systems?",
    category: "Graph Algorithms",
    ans: `• <strong>Social Networks:</strong> Community detection (Girvan-Newman), recommendation engines (random walk graphs).<br>
• <strong>Transportation:</strong> Flight route pricing, traffic flow optimization.<br>
• <strong>Computer Networks:</strong> OSPF / IS-IS routing protocols (Dijkstra\'s), spanning tree protocol (STP) preventing ethernet loops.`
  },

  // =========================================================================
  // DOMAIN 13: STRING ALGORITHMS & PATTERN MATCHING (Q214 - Q226)
  // =========================================================================
  {
    q: "214. What is a string, and how is it represented in programming languages? Discuss the various operations and manipulations that can be performed on strings.",
    category: "String Algorithms",
    ans: `A <strong>string</strong> is a contiguous sequence of characters encoded in ASCII, UTF-8, or UTF-16. Implemented as immutable character arrays (Java, Python) or mutable byte buffers (C/C++). Core operations include concatenation, substring slicing, pattern search, edit distance, and parsing.`
  },
  {
    q: "215. Explain the concept of string matching algorithms. Discuss brute-force string matching and its time complexity. Can you suggest optimizations to improve its efficiency?",
    category: "String Matching",
    ans: `Finds start index of pattern <code>P[0..m-1]</code> in text <code>T[0..n-1]</code>. Brute-force tests all shifts in <code>O(n · m)</code> time. Optimized by precomputing prefix structures (KMP), bad-character shift tables (Boyer-Moore), or rolling hashes (Rabin-Karp).`
  },
  {
    q: "216. Describe the Knuth-Morris-Pratt (KMP) algorithm for string matching. How does it achieve linear-time complexity? What is the role of the failure function in the KMP algorithm?",
    category: "String Matching",
    ans: `KMP achieves <code>O(n + m)</code> by never backtracking the text pointer. The <strong>Longest Prefix Suffix (LPS) / failure function</strong> precomputes the length of the longest proper prefix of <code>P[0..i]</code> that matches a suffix of <code>P[0..i]</code>. On mismatch, pattern shifts forward to <code>P[LPS[k-1]]</code>.`
  },
  {
    q: "217. Discuss the Boyer-Moore algorithm for string matching. What are the main ideas behind the algorithm, and how does it achieve sublinear time complexity in practice?",
    category: "String Matching",
    ans: `Scans pattern from <strong>right to left</strong>. On mismatch, uses two heuristics:<br>
1. <em>Bad Character Rule:</em> Shifts pattern to align mismatched text char with its last occurrence in pattern.<br>
2. <em>Good Suffix Rule:</em> Shifts to match identical matched suffix.<br>
Achieves sublinear average time <code>O(n / m)</code> because it skips multiple characters per mismatch.`
  },
  {
    q: "218. Explain the Rabin-Karp algorithm for string matching. How does it utilize hashing to efficiently search for a substring in a larger text? What are the considerations for choosing a good hash function?",
    category: "String Matching",
    ans: `Computes numeric hash of pattern and compares it against a <strong>rolling hash</strong> of each text window of length <code>m</code>. When hashes match, it performs character verification. Rolling hash updates in <code>O(1)</code> using modular arithmetic: <code>Hash = ((Hash - T[i]·d^(m-1))·d + T[i+m]) mod q</code>. Avg: <code>O(n + m)</code>; Worst: <code>O(n · m)</code>.`
  },
  {
    q: "219. Describe algorithms for finding the longest common subsequence (LCS) between two strings, such as dynamic programming-based approaches. What is the time complexity of these algorithms?",
    category: "String Algorithms",
    ans: `Uses an <code>(m+1) × (n+1)</code> table: if <code>X[i-1] == Y[j-1]</code>, <code>dp[i][j] = 1 + dp[i-1][j-1]</code>; else <code>max(dp[i-1][j], dp[i][j-1])</code>. Time: <code>O(m · n)</code>; Space: <code>O(m · n)</code> (optimizable to <code>O(min(m, n))</code>).`
  },
  {
    q: "220. Discuss algorithms for finding the longest palindromic substring within a given string. How do you approach this problem using dynamic programming or other techniques?",
    category: "String Algorithms",
    ans: `• <strong>Expand Around Center:</strong> Checks <code>2n - 1</code> potential centers in <code>O(n²)</code> time and <code>O(1)</code> space.<br>
• <strong>Dynamic Programming:</strong> <code>dp[i][j] = (S[i] == S[j] && dp[i+1][j-1])</code> in <code>O(n²)</code> space.<br>
• <strong>Manacher\'s Algorithm:</strong> Exploits palindrome symmetry to achieve optimal linear time <code>O(n)</code> and <code>O(n)</code> space.`
  },
  {
    q: "221. Explain the concept of string compression and its applications. How do you implement string compression algorithms like run-length encoding or Huffman coding?",
    category: "String Compression",
    ans: `• <strong>Run-Length Encoding (RLE):</strong> Replaces runs of repeated characters with count + character (e.g. <code>WWWWWW → 6W</code>) in <code>O(n)</code>.<br>
• <strong>Huffman Coding:</strong> Assigns variable-length prefix-free codes using character frequency trees, minimizing total encoded bit length in <code>O(n log k)</code>.`
  },
  {
    q: "222. Discuss algorithms for string manipulation tasks such as reversing a string, rotating a string, or converting between different representations (e.g., uppercase to lowercase).",
    category: "String Algorithms",
    ans: `• <strong>Reverse:</strong> Two pointers swapping inwards in <code>O(n)</code> time and <code>O(1)</code> space.<br>
• <strong>Rotate Array/String by k:</strong> Reverse entire string, reverse first <code>k</code> elements, reverse remaining <code>n-k</code> elements in <code>O(n)</code> time and <code>O(1)</code> space.<br>
• <strong>Case Conversion:</strong> Bitwise operation <code>char ^ 32</code> in <code>O(1)</code>.`
  },
  {
    q: "223. Describe algorithms for string searching and pattern matching in text, such as the Aho-Corasick algorithm or the suffix tree data structure. How do these algorithms improve upon traditional string matching approaches?",
    category: "String Matching",
    ans: `• <strong>Aho-Corasick:</strong> Builds a trie with failure links to match multiple dictionary patterns simultaneously in single text pass <code>O(n + m + z)</code>.<br>
• <strong>Suffix Tree / Array:</strong> Indexes all text suffixes in <code>O(n)</code> preprocessing, enabling subsequent pattern queries in <code>O(m)</code> time.`
  },
  {
    q: "224. Explain the concept of string edit distance and its applications in comparing and aligning sequences of strings. How do you compute the edit distance between two strings using dynamic programming?",
    category: "String Algorithms",
    ans: `<strong>Levenshtein Edit Distance:</strong> Minimum cost of insertions, deletions, and substitutions to transform string <code>A</code> into <code>B</code>.<br>
<code>dp[i][j] = min(dp[i-1][j] + 1, dp[i][j-1] + 1, dp[i-1][j-1] + (A[i-1] != B[j-1]))</code>. Time: <code>O(m · n)</code>.`
  },
  {
    q: "225. Discuss algorithms for string permutation generation and substring generation. How do you generate all possible permutations or substrings of a given string efficiently?",
    category: "String Algorithms",
    ans: `• <strong>Substrings:</strong> Two nested loops <code>O(n²)</code>.<br>
• <strong>Permutations:</strong> Backtracking with swapping in <code>O(n · n!)</code> time, or lexicographical next permutation (Narayan Pandit\'s algorithm in <code>O(n)</code> per step).`
  },
  {
    q: "226. Describe algorithms for string tokenization and parsing, such as splitting a string into tokens based on delimiters or extracting specific substrings based on patterns.",
    category: "String Parsing",
    ans: `• <strong>Delimiter Splitting:</strong> Two-pointer scanner or finite automaton in <code>O(n)</code>.<br>
• <strong>Regex Matching:</strong> Thompson\'s NFA construction running in <code>O(m · n)</code>, or deterministic DFA lexing.`
  },

  // =========================================================================
  // DOMAIN 14: COMPLEXITY CLASSES, NP-COMPLETENESS & APPROXIMATION (Q227 - Q239)
  // =========================================================================
  {
    q: "227. Define the complexity classes P, NP, NPH, and NPC. What distinguishes problems in each class from one another?",
    category: "NP-Completeness",
    ans: `• <strong>P:</strong> Solvable in polynomial time by a deterministic Turing machine.<br>
• <strong>NP:</strong> Solvable in polynomial time by a non-deterministic machine; solutions verifiable in polynomial time deterministically.<br>
• <strong>NP-Hard (NPH):</strong> At least as hard as any problem in NP (contains problems to which all NP problems reduce in polynomial time).<br>
• <strong>NP-Complete (NPC):</strong> The intersection: problems that are both in NP and NP-Hard (<code>NPC = NP ∩ NP-Hard</code>).`
  },
  {
    q: "228. Can you explain the concept of non-deterministic Turing machines and their relevance to the definition of the NP complexity class?",
    category: "NP-Completeness",
    ans: `A <strong>Non-deterministic Turing Machine (NDTM)</strong> can branch into multiple execution paths simultaneously. At each step, it \'guesses\' the correct path. <code>NP</code> is the class of decision problems solvable by an NDTM in polynomial time.`
  },
  {
    q: "229. Discuss the relationship between the classes P and NP. What does it mean for a problem to be NP-complete?",
    category: "NP-Completeness",
    ans: `Clearly <code>P ⊆ NP</code>. If a problem is <strong>NP-Complete</strong>, it represents the hardest problems in NP: if any single NP-Complete problem is proven to have a polynomial-time algorithm, then <strong>P = NP</strong>.`
  },
  {
    q: "230. Provide examples of problems that are known to be in NP but not known to be NP-complete. What makes proving a problem to be NP-complete challenging?",
    category: "NP-Completeness",
    ans: `<strong>Graph Isomorphism</strong> and <strong>Integer Factorization</strong> are in NP but neither known to be in P nor proven NP-Complete (NP-Intermediate candidates under Ladner\'s Theorem).`
  },
  {
    q: "231. Explain the concept of polynomial-time reduction and its role in demonstrating NP-completeness. How do you use reduction to show that a problem is NP-complete?",
    category: "NP-Completeness",
    ans: `To prove problem <code>B</code> is NP-Complete:<br>
1. Prove <code>B ∈ NP</code> (candidate solution is verifiable in polynomial time).<br>
2. Choose a known NP-Complete problem <code>A</code>.<br>
3. Construct a polynomial-time mapping reduction <code>A ≤_p B</code> such that <code>x ∈ A ⟺ f(x) ∈ B</code>.`
  },
  {
    q: "232. Describe the Cook-Levin theorem and its significance in establishing the existence of NP-complete problems. What is the structure of the Boolean satisfiability problem (SAT), and how is it used in reductions?",
    category: "NP-Completeness",
    ans: `<strong>Cook-Levin Theorem (1971):</strong> Proved that the <strong>Boolean Satisfiability Problem (SAT)</strong> is NP-Complete directly from scratch by showing any polynomial NDTM computation can be encoded as a boolean formula. It serves as the master root from which all subsequent NP-Completeness reductions originate.`
  },
  {
    q: "233. Discuss the implications of proving a problem to be NP-complete. What does it mean for the complexity of all other problems in NP?",
    category: "NP-Completeness",
    ans: `It proves that the problem cannot be solved in polynomial time unless <code>P = NP</code>. It tells software engineers to stop searching for an exact polynomial algorithm and pivot immediately toward approximation, heuristics, or parameterized algorithms.`
  },
  {
    q: "234. Can you provide examples of NP-hard problems that are not in NP? How do NP-hard problems relate to NP-complete problems in terms of computational complexity?",
    category: "NP-Completeness",
    ans: `The <strong>Halting Problem</strong> (undecidable; cannot be verified in polynomial time) and the <strong>TSP Optimization Problem</strong> (returning the optimal tour weight, rather than a yes/no decision) are NP-Hard but not in NP.`
  },
  {
    q: "235. Explain the concept of approximation algorithms and their relevance to NP-hard optimization problems. How do approximation algorithms balance between solution quality and computational efficiency?",
    category: "Approximation Algorithms",
    ans: `Instead of running in exponential time for exact solutions, approximation algorithms run in polynomial time to return solutions guaranteed to be within a factor <code>ρ</code> of the optimal answer (e.g. 2-approximation for Vertex Cover).`
  },
  {
    q: "236. Discuss strategies for coping with NP-hardness in practice, such as heuristics, metaheuristics, and problem-specific techniques. How do you choose an appropriate approach for solving an NP-hard problem in real-world applications?",
    category: "NP-Completeness",
    ans: `1. <strong>Fixed-Parameter Tractability (FPT):</strong> Exact algorithm efficient when a parameter <code>k</code> is small (<code>O(2^k · n)</code>).<br>
2. <strong>Approximation Algorithms:</strong> Proven bounded error in polynomial time.<br>
3. <strong>Metaheuristics:</strong> Genetic Algorithms, Simulated Annealing, Tabu Search for large industrial problems.`
  },
  {
    q: "237. Describe the significance of the P vs. NP problem in computational complexity theory. What are the potential consequences of resolving the P vs. NP question one way or another?",
    category: "NP-Completeness",
    ans: `One of the seven Clay Millennium Prize problems. If <code>P = NP</code>, public-key cryptography (RSA, ECC) collapses, but automated mathematical theorem proving, optimal drug synthesis, and logistics would become computationally trivial.`
  },
  {
    q: "238. Can you provide examples of real-world problems that are believed to be NP-complete or NP-hard? How are these problems encountered in fields like computer science, operations research, or mathematical optimization?",
    category: "NP-Completeness",
    ans: `• <strong>Operations Research:</strong> Vehicle Routing Problem (VRP), Airline Crew Scheduling.<br>
• <strong>Bioinformatics:</strong> Protein Folding, Multiple Sequence Alignment.<br>
• <strong>Hardware Design:</strong> VLSI circuit layout placement, FPGA routing.<br>
• <strong>Cybersecurity:</strong> Boolean satisfiability in formal cryptographic verification.`
  },
  {
    q: "239. Discuss recent developments or breakthroughs related to NP-completeness and computational complexity theory. What are some active areas of research in this field?",
    category: "NP-Completeness",
    ans: `Active frontiers include the <strong>Unique Games Conjecture (UGC)</strong> by Subhash Khot, proving hardness of approximation, breakthroughs in quantum complexity (MIP* = RE), and Circuit Complexity lower-bound barriers.`
  }
];
