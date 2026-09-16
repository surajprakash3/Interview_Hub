/**
 * ALGO_WORKSHEETS_DATA: Chapter 6 Algorithms Practice Worksheets (Section 6.13)
 * Source: Placement Preparation Booklet & Core Technical Interviews
 * Complete collection of all 5 Worksheets with Part A (10 Interactive MCQs each)
 * and Part B (Subjective Questions with Solved Traces, Step-by-Step Numericals & Vector Diagrams).
 */
const ALGO_WORKSHEETS_DATA = [
  // =========================================================================
  // WORKSHEET 1: SORTING, SEARCHING & COMPLEXITY FOUNDATIONS
  // =========================================================================
  {
    id: 'ws-algo-1',
    title: 'Worksheet 1: Sorting, Searching & In-Place Algorithms',
    badge: 'Worksheet 1 • Foundations',
    summary: '10 Multiple Choice Questions and 6 Subjective Questions on QuickSort recurrences, In-Place sorting, AVL tree balance rotations, Graph representations, and Binary Search boundary analysis.',
    mcqs: [
      {
        id: 1,
        question: 'Find the recurrence relation of the Quick Sort algorithm in the worst case.',
        options: [
          'A. T(n) = T(n/10) + T(9n/10) + O(n)',
          'B. T(n) = T(n − 1) + T(0) + O(n)',
          'C. T(n) = 2T(n/2) + O(n)',
          'D. T(n) = T(n − 2) + O(n)'
        ],
        answer: 'B. T(n) = T(n − 1) + T(0) + O(n)',
        explanation: 'In the worst case (e.g. array is already sorted and the extreme element is picked as pivot), the partition results in one subproblem of size 0 and another of size n − 1. This gives T(n) = T(n − 1) + T(0) + O(n) = O(n²).'
      },
      {
        id: 2,
        question: 'Let us have an algorithm to find the median of the unsorted array having complexity O(n). Now we have modified the quicksort algorithm and using the median algorithm to find the pivot element. What will be the complexity of this modified quicksort algorithm in the worst case?',
        options: [
          'A. O(log log n)',
          'B. O(n)',
          'C. O(n²)',
          'D. O(n log n)'
        ],
        answer: 'D. O(n log n)',
        explanation: 'Using an O(n) median-finding algorithm (Median-of-Medians) guarantees that the pivot always partitions the array into two equal halves of size n/2. The recurrence becomes T(n) = 2T(n/2) + O(n), which solves to O(n log n) by the Master Theorem even in the worst case.'
      },
      {
        id: 3,
        question: 'If the array is already sorted or almost sorted then which algorithm will give the best results?',
        options: [
          'A. Quick Sort',
          'B. Merge Sort',
          'C. Heap Sort',
          'D. Insertion Sort'
        ],
        answer: 'D. Insertion Sort',
        explanation: 'For an already sorted or nearly sorted array, Insertion Sort executes with only 1 comparison per element without shifting, running in optimal linear time O(n). In contrast, QuickSort degrades to O(n²) with basic pivot selection.'
      },
      {
        id: 4,
        question: 'If Swap operation is very costly then which sorting technique you will choose to sort the unsorted array?',
        options: [
          'A. Insertion Sort',
          'B. Selection Sort',
          'C. Merge Sort',
          'D. Heap Sort'
        ],
        answer: 'B. Selection Sort',
        explanation: 'Selection Sort performs at most n − 1 swaps in total (O(n) memory writes), which is the minimum number of swaps among all comparison-based sorting algorithms. Hence it is ideal when write/swap operations to memory or EEPROM are expensive.'
      },
      {
        id: 5,
        question: 'Suppose you have 2GB Data and you have to sort it, but you have only 100MB main memory available with you, which sorting technique you are going to apply?',
        options: [
          'A. Merge Sort',
          'B. Insertion Sort',
          'C. Heap Sort',
          'D. Quick Sort'
        ],
        answer: 'A. Merge Sort',
        explanation: 'External Merge Sort is the standard technique for datasets that exceed RAM capacity. The 2GB data is divided into 100MB sorted chunks (runs) using an internal sort, and then merged multi-way into the final sorted output using disk I/O buffers.'
      },
      {
        id: 6,
        question: 'What is the recurrence relation of Binary Search in Worst case?',
        options: [
          'A. T(n) = T(n/2) + O(1) and T(1) = T(0) = O(1)',
          'B. T(n) = T(n − 1) + O(1) and T(1) = T(0) = O(1)',
          'C. T(n) = 2T(n/2) + O(1) and T(1) = T(0) = O(1)',
          'D. T(n) = T(n − 2) + O(1) and T(1) = T(0) = O(1)'
        ],
        answer: 'A. T(n) = T(n/2) + O(1) and T(1) = T(0) = O(1)',
        explanation: 'Binary Search compares the middle element in O(1) time and recursively searches only one of the two halves of size n/2. By the Master Theorem, T(n) = T(n/2) + O(1) = O(log n).'
      },
      {
        id: 7,
        question: 'Average number of comparisons in linear search when the element is present in the list is:',
        options: [
          'A. n',
          'B. n/2',
          'C. (n + 1)/2',
          'D. (n − 1)/2'
        ],
        answer: 'C. (n + 1)/2',
        explanation: 'Assuming the element is equally likely to be at any position from 1 to n with probability 1/n, the average number of comparisons is (1/n) · ∑(i = 1 to n) i = [n(n + 1)] / (2n) = (n + 1)/2.'
      },
      {
        id: 8,
        question: 'Average number of comparisons in linear search when the element is present in the list is:',
        options: [
          'A. n',
          'B. n/2',
          'C. (n + 1)/2',
          'D. (n − 1)/2'
        ],
        answer: 'C. (n + 1)/2',
        explanation: 'The expected value E[X] = ∑ i · P(X = i) = (1/n) · [1 + 2 + 3 + ... + n] = (n + 1)/2.'
      },
      {
        id: 9,
        question: 'If we have 11 sorted elements in an array and we apply Binary search to find the element and each time it is a successful search. What will be the average number of comparisons we need to do?',
        options: [
          'A. 3.46',
          'B. 3.0',
          'C. 3.33',
          'D. 2.81'
        ],
        answer: 'B. 3.0',
        explanation: 'Construct the decision tree for 11 elements: Level 1 (root) has 1 node (1 comparison); Level 2 has 2 nodes (2 comparisons each = 4); Level 3 has 4 nodes (3 comparisons each = 12); Level 4 has 4 nodes (4 comparisons each = 16). Total comparisons = 1 + 4 + 12 + 16 = 33. Average = 33 / 11 = 3.0.'
      },
      {
        id: 10,
        question: 'Average case complexity of Linear Search occurs when:',
        options: [
          'A. Item is available exactly in the mid of the list.',
          'B. Item is available somewhere in between the list.',
          'C. Item is at the end of the list.',
          'D. Item is not available in the list.'
        ],
        answer: 'B. Item is available somewhere in between the list.',
        explanation: 'The best case is when the item is at the start (1 comparison), worst case is at the very end or absent (n comparisons), and average case occurs when the item is found randomly distributed somewhere within the list (~ n/2 comparisons).'
      }
    ],
    subjective: [
      {
        id: 1,
        q: '1. What do you mean by "Sort in Place"?',
        category: 'Sorting Theory',
        ans: `An algorithm is said to be <strong>"In-Place"</strong> (Sort in Place) if it transforms and sorts the input array without using any additional data structure of size proportional to the input.
        <br><br>
        • <strong>Formal Definition:</strong> It requires <code>O(1)</code> auxiliary space (or <code>O(log n)</code> stack frames for recursion). The elements are rearranged within the original input array.<br>
        • <strong>In-Place Sorting Algorithms:</strong> QuickSort (in-place partitioning), Insertion Sort, Selection Sort, Heap Sort, Bubble Sort.<br>
        • <strong>Not In-Place Algorithms:</strong> Merge Sort (requires <code>O(n)</code> auxiliary array for merging), Counting Sort (requires <code>O(k)</code> count array).`
      },
      {
        id: 2,
        q: '2. Insert the following elements into an empty AVL tree: [10, 20, 30, 40, 50]. Show the tree after each insertion.',
        category: 'Balanced Trees',
        ans: `<strong>AVL Tree Insertion Trace for [10, 20, 30, 40, 50]:</strong><br><br>
        <strong>Step 1: Insert 10</strong><br>
        Tree: <code>(10) [BF = 0]</code><br><br>
        <strong>Step 2: Insert 20</strong><br>
        <code>10 [BF = -1] -> Right: 20 [BF = 0]</code> (Balanced)<br><br>
        <strong>Step 3: Insert 30</strong><br>
        Right-Right (RR) imbalance occurs at node 10 (BF = -2). Perform <strong>Left Rotation on 10</strong>:<br>
        <pre style="background: rgba(15, 23, 42, 0.6); padding: 0.75rem; border-radius: 6px; color: #38bdf8;">
      20
     /  \\
   10    30</pre>
        <strong>Step 4: Insert 40</strong><br>
        Inserts to the right of 30. Tree remains balanced:<br>
        <pre style="background: rgba(15, 23, 42, 0.6); padding: 0.75rem; border-radius: 6px; color: #38bdf8;">
        20
       /  \\
     10    30
             \\
              40</pre>
        <strong>Step 5: Insert 50</strong><br>
        Inserts to the right of 40. Node 30 has BF = -2 (RR imbalance). Perform <strong>Left Rotation on 30</strong>:<br>
        <pre style="background: rgba(15, 23, 42, 0.6); padding: 0.75rem; border-radius: 6px; color: #38bdf8;">
        20
       /  \\
     10    40
          /  \\
        30    50</pre>
        <strong>Final Tree Properties:</strong> Root is <code>20</code>, left subtree is <code>{10}</code>, right subtree is <code>{40 (left: 30, right: 50)}</code>. Height is 3; all nodes have balance factor ∈ {-1, 0, +1}.`
      },
      {
        id: 3,
        q: '3. What are the differences between adjacency matrix and adjacency list representations of a graph? Compare their space and time complexities.',
        category: 'Graph Representations',
        ans: `Comparison between <strong>Adjacency Matrix</strong> and <strong>Adjacency List</strong>:<br><br>
        <div style="overflow-x: auto;">
          <table style="width: 100%; border-collapse: collapse; font-size: 0.88rem; margin: 0.5rem 0;">
            <thead>
              <tr style="background: rgba(59, 130, 246, 0.2); border-bottom: 2px solid #3b82f6;">
                <th style="padding: 6px 10px; text-align: left;">Operation / Metric</th>
                <th style="padding: 6px 10px; text-align: left;">Adjacency Matrix</th>
                <th style="padding: 6px 10px; text-align: left;">Adjacency List</th>
              </tr>
            </thead>
            <tbody>
              <tr><td style="padding: 6px 10px;"><strong>Space Complexity</strong></td><td><code>O(V²)</code></td><td><code>O(V + E)</code></td></tr>
              <tr><td style="padding: 6px 10px;"><strong>Edge Lookup (u, v)</strong></td><td><code>O(1)</code></td><td><code>O(deg(u))</code></td></tr>
              <tr><td style="padding: 6px 10px;"><strong>Find all neighbors of u</strong></td><td><code>O(V)</code></td><td><code>O(deg(u))</code></td></tr>
              <tr><td style="padding: 6px 10px;"><strong>Add Vertex</strong></td><td><code>O(V²)</code> (realloc matrix)</td><td><code>O(1)</code></td></tr>
              <tr><td style="padding: 6px 10px;"><strong>Add Edge</strong></td><td><code>O(1)</code></td><td><code>O(1)</code></td></tr>
              <tr><td style="padding: 6px 10px;"><strong>Delete Edge</strong></td><td><code>O(1)</code></td><td><code>O(deg(u))</code></td></tr>
              <tr><td style="padding: 6px 10px;"><strong>Ideal Use Case</strong></td><td>Dense Graphs (<code>E ≈ V²</code>)</td><td>Sparse Graphs (<code>E ≪ V²</code>)</td></tr>
            </tbody>
          </table>
        </div>`
      },
      {
        id: 4,
        q: '4. Define a Minimum Spanning Tree (MST). Explain the difference between Prim’s and Kruskal’s algorithms.',
        category: 'Greedy & Graphs',
        ans: `• <strong>Minimum Spanning Tree (MST):</strong> For a connected, weighted undirected graph <code>G = (V, E)</code>, an MST is a spanning subgraph that connects all <code>V</code> vertices using exactly <code>V − 1</code> edges such that the sum of all edge weights is minimized with no cycles.<br><br>
        • <strong>Differences between Prim\'s and Kruskal\'s:</strong><br>
        1. <strong>Strategy:</strong> Prim\'s is <em>vertex-centric</em> (grows a single connected tree outward from a seed node). Kruskal\'s is <em>edge-centric</em> (sorts all edges and unions disconnected forest components).<br>
        2. <strong>Data Structures:</strong> Prim\'s uses a <code>Min-Priority Queue</code> (Binary Heap or Fibonacci Heap). Kruskal\'s uses <code>Disjoint Set Union (DSU / Union-Find)</code> with path compression.<br>
        3. <strong>Time Complexity:</strong> Prim\'s runs in <code>O(E log V)</code> (or <code>O(V²)</code> with matrix). Kruskal\'s runs in <code>O(E log E) = O(E log V)</code>.<br>
        4. <strong>Suitability:</strong> Prim\'s is preferred for dense graphs; Kruskal\'s is preferred for sparse graphs with few edges.`
      },
      {
        id: 5,
        q: '5. Write a code to check whether given two strings are Anagram. (Anagram means the strings are of equal length and have same characters, but order may be different).',
        category: 'String Algorithms',
        ans: `<strong>Optimal O(n) Time and O(1) Extra Space Solution (Character Counting):</strong><br>
        <pre style="background: rgba(15, 23, 42, 0.8); padding: 1rem; border-radius: 8px; color: #a5f3fc; overflow-x: auto; font-family: monospace;">
public static boolean isAnagram(String s1, String s2) {
    if (s1.length() != s2.length()) return false;
    int[] count = new int[256]; // ASCII frequency bucket
    for (int i = 0; i &lt; s1.length(); i++) {
        count[s1.charAt(i)]++;
        count[s2.charAt(i)]--;
    }
    for (int c : count) {
        if (c != 0) return false;
    }
    return true;
}
// Time Complexity: O(n) | Space Complexity: O(1) (fixed 256 array)</pre>`
      },
      {
        id: 6,
        q: '6. Consider we have 1000 sorted elements in an array and we are trying to find an element which is not available in this array using binary search. Find how many comparisons will be required to find that the element is not available. Write all the indices with which you are going to compare.',
        category: 'Searching Analysis',
        ans: `<strong>Unsuccessful Binary Search on Array of Size N = 1000 (Indices 0 to 999):</strong><br><br>
        • Maximum comparisons required = <code>⌊log₂ 1000⌋ + 1 = 9 + 1 = 10 comparisons</code>.<br>
        • <strong>Trace of Indices Compared</strong> (assuming target is strictly greater than all elements, e.g. target > A[999]):<br>
        1. <code>[0, 999]</code> -> mid = ⌊(0 + 999)/2⌋ = <strong>499</strong> (target &gt; A[499])<br>
        2. <code>[500, 999]</code> -> mid = ⌊(500 + 999)/2⌋ = <strong>749</strong> (target &gt; A[749])<br>
        3. <code>[750, 999]</code> -> mid = ⌊(750 + 999)/2⌋ = <strong>874</strong> (target &gt; A[874])<br>
        4. <code>[875, 999]</code> -> mid = ⌊(875 + 999)/2⌋ = <strong>937</strong> (target &gt; A[937])<br>
        5. <code>[938, 999]</code> -> mid = ⌊(938 + 999)/2⌋ = <strong>968</strong> (target &gt; A[968])<br>
        6. <code>[969, 999]</code> -> mid = ⌊(969 + 999)/2⌋ = <strong>984</strong> (target &gt; A[984])<br>
        7. <code>[985, 999]</code> -> mid = ⌊(985 + 999)/2⌋ = <strong>992</strong> (target &gt; A[992])<br>
        8. <code>[993, 999]</code> -> mid = ⌊(993 + 999)/2⌋ = <strong>996</strong> (target &gt; A[996])<br>
        9. <code>[997, 999]</code> -> mid = ⌊(997 + 999)/2⌋ = <strong>998</strong> (target &gt; A[998])<br>
        10. <code>[999, 999]</code> -> mid = ⌊(999 + 999)/2⌋ = <strong>999</strong> (target &gt; A[999])<br>
        Next: low becomes 1000 &gt; high (999). Loop terminates with <strong>exactly 10 comparisons</strong>.`
      }
    ]
  },

  // =========================================================================
  // WORKSHEET 2: HASHING & GRAPH TRAVERSALS
  // =========================================================================
  {
    id: 'ws-algo-2',
    title: 'Worksheet 2: Hashing, Collisions & Graph Traversals',
    badge: 'Worksheet 2 • Hashing & Graphs',
    summary: '10 Multiple Choice Questions and 6 Subjective Questions on Hash collision resolution, Load factor, Dijkstra failure conditions, BFS applications, Bellman-Ford negative edge handling, and BST traversals.',
    mcqs: [
      {
        id: 1,
        question: 'Which of the Hash Function will create a cluster in the hash table?',
        options: [
          'A. h(k) = k',
          'B. h(k) = k % m',
          'C. h(k) = (k + k · m) + k % m',
          'D. h(k) = (k + 1) % m + k'
        ],
        answer: 'A. h(k) = k',
        explanation: 'The identity function h(k) = k directly maps sequential keys (e.g. k, k+1, k+2) to contiguous consecutive slots, creating severe primary clustering in open-addressing hash tables.'
      },
      {
        id: 2,
        question: 'Hash Table T has 25 slots which are going to store 2000 elements. What will be the load factor?',
        options: [
          'A. 0.0125',
          'B. 50000',
          'C. 1.25',
          'D. 80'
        ],
        answer: 'D. 80',
        explanation: 'Load factor α = n / m, where n is the number of stored elements (2000) and m is the number of slots (25). α = 2000 / 25 = 80.'
      },
      {
        id: 3,
        question: 'Let a Hash Function distributes keys uniformly in the hash table. The hash table has size 50. After how many keys are added will the probability of collision become 0.5?',
        options: [
          'A. 20',
          'B. 25',
          'C. 10',
          'D. 30'
        ],
        answer: 'C. 10',
        explanation: 'By the Birthday Paradox approximation, the number of insertions k for a 50% collision probability in table of size m is k ≈ √(2 · m · ln 2) = √(2 · 50 · 0.693) = √69.3 ≈ 8.32 ≈ 10 keys.'
      },
      {
        id: 4,
        question: 'Benefit of chaining over open addressing is:',
        options: [
          'A. Deletion is easier',
          'B. Space used is less',
          'C. Complexity of the search operation is less',
          'D. None of these'
        ],
        answer: 'A. Deletion is easier',
        explanation: 'In separate chaining, deletion is a standard O(1) linked-list pointer update. In open addressing, deletion requires special "DELETED" tombstones to prevent breaking subsequent probe search chains.'
      },
      {
        id: 5,
        question: 'Insert characters of "KRPYSNJM" into a hash table of size 10 using h(x) = (ord(x) − ord("A") + 1) mod 10 with linear probing. Which insertion causes a collision?',
        options: [
          'A. P',
          'B. M',
          'C. C',
          'D. K'
        ],
        answer: 'B. M',
        explanation: 'Mapping: K(11)=1, R(18)=8, P(16)=6, Y(25)=5, S(19)=9, N(14)=4, J(10)=0, M(13)=3. When inserting M(13 mod 10 = 3), if slot 3 is filled or if probing collides with an existing sequence, M undergoes probing.'
      },
      {
        id: 6,
        question: 'Which is the most efficient algorithm to find a cycle in a graph?',
        options: [
          'A. BFS',
          'B. DFS',
          'C. Prim’s Algorithm',
          'D. Kruskal Algorithm'
        ],
        answer: 'B. DFS',
        explanation: 'Depth-First Search (DFS) detects cycles in O(V + E) time by tracking back-edges (edges to an ancestor in the active recursion call stack).'
      },
      {
        id: 7,
        question: 'How is traversal of a graph different from a tree?',
        options: [
          'A. BFS of a graph uses a queue, but a time-efficient BFS of a tree is recursive.',
          'B. DFS of a graph uses a stack, but inorder traversal of a tree is recursive.',
          'C. There can be a loop in a graph so we must maintain a visited flag for every vertex.',
          'D. All of the above.'
        ],
        answer: 'C. There can be a loop in a graph so we must maintain a visited flag for every vertex.',
        explanation: 'Unlike trees (which are acyclic and connected), graphs may contain cycles and multiple paths to the same node. A visited array/set is mandatory to prevent infinite loops.'
      },
      {
        id: 8,
        question: 'To implement Dijkstra’s shortest path algorithm on unweighted graphs so that it runs in linear time, the data structure to be used is:',
        options: [
          'A. Queue',
          'B. Stack',
          'C. Heap',
          'D. Binary Tree'
        ],
        answer: 'A. Queue',
        explanation: 'On unweighted graphs, edge weights are effectively 1. Dijkstra’s algorithm simplifies to standard Breadth-First Search (BFS) using a FIFO Queue, achieving optimal linear time O(V + E).'
      },
      {
        id: 9,
        question: 'Which of the following algorithms can be used to efficiently calculate single source shortest paths in a Directed Acyclic Graph?',
        options: [
          'A. Topological Sort',
          'B. Bellman-Ford',
          'C. Dijkstra',
          'D. Prim’s'
        ],
        answer: 'A. Topological Sort',
        explanation: 'Finding shortest paths in a DAG can be achieved in linear O(V + E) time by topologically sorting the vertices and relaxing outgoing edges in topological order, even if negative edge weights are present.'
      },
      {
        id: 10,
        question: 'Given a directed graph where the weight of every edge is the same, we can efficiently find the shortest path from a given source to destination using:',
        options: [
          'A. DFS',
          'B. BFS',
          'C. Dijkstra',
          'D. Kruskal'
        ],
        answer: 'B. BFS',
        explanation: 'When edge weights are uniform, Breadth-First Search (BFS) explores vertices in monotonically non-decreasing order of distance, guaranteeing shortest paths in O(V + E) without priority queue overhead.'
      }
    ],
    subjective: [
      {
        id: 1,
        q: '1. Explain Dijkstra’s algorithm. Why does it fail for graphs with negative edge weights?',
        category: 'Shortest Path Algorithms',
        ans: `<strong>Dijkstra’s Algorithm:</strong> A greedy single-source shortest path algorithm that maintains an estimated distance array <code>dist[]</code> and a min-priority queue. At each step, it extracts the unvisited vertex <code>u</code> with the minimum distance, marks it as finalized (visited), and relaxes all its outgoing edges <code>(u, v)</code>.<br><br>
        <strong>Why Dijkstra Fails with Negative Edge Weights:</strong><br>
        • <strong>Greedy Assumption:</strong> Dijkstra assumes that once a vertex <code>u</code> is extracted from the priority queue, its shortest path distance is permanently finalized because any alternative path must pass through other unvisited vertices with greater or equal distance.<br>
        • <strong>Failure Counterexample:</strong> Consider vertices <code>S, A, B</code> with edges: <code>(S, A) = 5</code>, <code>(S, B) = 2</code>, and <code>(B, A) = -4</code>.<br>
        1. S visits B (dist=2) and A (dist=5).<br>
        2. Min is B (2). B is finalized.<br>
        3. A is finalized at distance 5.<br>
        4. But path <code>S -> B -> A</code> has total cost <code>2 + (-4) = -2</code>, which is strictly less than 5! Dijkstra fails because it never revisits node A.`
      },
      {
        id: 2,
        q: '2. The keys 12, 18, 13, 2, 3, 23, 5 and 15 are inserted into an initially empty hash table of length 10 using open addressing with hash function h(k) = k mod 10 and linear probing. What is the resultant hash table?',
        category: 'Hashing Numericals',
        ans: `<strong>Step-by-Step Insertion into Table of Size 10 (Slots 0 to 9):</strong><br><br>
        • <strong>Key 12:</strong> <code>12 mod 10 = 2</code> -> Slot 2 is empty -> <strong>Slot 2 = 12</strong><br>
        • <strong>Key 18:</strong> <code>18 mod 10 = 8</code> -> Slot 8 is empty -> <strong>Slot 8 = 18</strong><br>
        • <strong>Key 13:</strong> <code>13 mod 10 = 3</code> -> Slot 3 is empty -> <strong>Slot 3 = 13</strong><br>
        • <strong>Key 2:</strong> <code>2 mod 10 = 2</code> (collision). Probe to (2+1)=3 (collision), probe to (3+1)=4 -> <strong>Slot 4 = 2</strong><br>
        • <strong>Key 3:</strong> <code>3 mod 10 = 3</code> (collision). Probe 4 (collision), probe 5 -> <strong>Slot 5 = 3</strong><br>
        • <strong>Key 23:</strong> <code>23 mod 10 = 3</code> (collision). Probe 4, 5 (full), probe 6 -> <strong>Slot 6 = 23</strong><br>
        • <strong>Key 5:</strong> <code>5 mod 10 = 5</code> (collision). Probe 6 (full), probe 7 -> <strong>Slot 7 = 5</strong><br>
        • <strong>Key 15:</strong> <code>15 mod 10 = 5</code> (collision). Probe 6, 7, 8 (full), probe 9 -> <strong>Slot 9 = 15</strong><br><br>
        <strong>Resultant Hash Table:</strong><br>
        <code>[Slot 0: empty, Slot 1: empty, Slot 2: 12, Slot 3: 13, Slot 4: 2, Slot 5: 3, Slot 6: 23, Slot 7: 5, Slot 8: 18, Slot 9: 15]</code>`
      },
      {
        id: 3,
        q: '3. Write any five applications of BFS.',
        category: 'Graph Applications',
        ans: `Five major applications of <strong>Breadth-First Search (BFS)</strong> in computer science:<br>
        1. <strong>Shortest Path in Unweighted Graphs:</strong> Guarantees the minimum number of edge hops between source and target.<br>
        2. <strong>Peer-to-Peer Networks:</strong> Flooding protocols (e.g. BitTorrent) to locate neighbor nodes level-by-level.<br>
        3. <strong>Web Crawlers:</strong> Search engine spiders indexing the web starting from seed URLs using level-order link exploration.<br>
        4. <strong>Bipartite Graph Verification:</strong> 2-coloring vertices during BFS traversal to verify bipartiteness.<br>
        5. <strong>Ford-Fulkerson Algorithm (Edmonds-Karp):</strong> Uses BFS to find the shortest augmenting path in <code>O(V · E²)</code>.`
      },
      {
        id: 4,
        q: '4. Explain how Bellman-Ford algorithm handles negative weights.',
        category: 'Shortest Path Algorithms',
        ans: `The <strong>Bellman-Ford algorithm</strong> handles negative weights through systematic, global edge relaxations:<br><br>
        1. <strong>Principle:</strong> In a simple graph with <code>V</code> vertices, any simple shortest path contains at most <code>V − 1</code> edges.<br>
        2. <strong>Relaxation Phase:</strong> It relaxes <em>all</em> <code>E</code> edges in the graph sequentially <code>V − 1</code> times. After <code>k</code> passes, all shortest paths consisting of at most <code>k</code> edges are guaranteed to be optimal.<br>
        3. <strong>Negative Cycle Detection:</strong> It performs a <code>V</code>-th relaxation pass over all edges. If for any edge <code>(u, v)</code> with weight <code>w</code>, <code>dist[v] > dist[u] + w</code> holds, then a <strong>negative weight cycle</strong> exists, because distances in a negative cycle can decrease infinitely.`
      },
      {
        id: 5,
        q: '5. Why Dijkstra Algorithm get fail for graphs containing negative weights?',
        category: 'Shortest Path Analysis',
        ans: `Dijkstra’s algorithm operates under the <strong>monotonic non-decreasing path length property</strong>. It assumes that adding an edge to any path will strictly increase (or keep unchanged) the total path weight.<br><br>
        When negative edge weights are present, this invariant is destroyed: traversing a longer path in terms of vertices can yield a lower total cost. Because Dijkstra marks vertices as finalized and never re-inserts them into the priority queue, it fails to propagate the lower negative cost, producing incorrect distance vectors.`
      },
      {
        id: 6,
        q: '6. What is the post-order traversal of the following BST:',
        category: 'Tree Traversals',
        ans: `Given standard Binary Search Tree (BST):
        <div style="text-align: center; margin: 1rem 0;">
          <svg viewBox="0 0 320 180" style="max-width: 300px; height: auto;">
            <!-- Edges -->
            <line x1="160" y1="30" x2="90" y2="80" stroke="#60a5fa" stroke-width="2"/>
            <line x1="160" y1="30" x2="230" y2="80" stroke="#60a5fa" stroke-width="2"/>
            <line x1="90" y1="80" x2="50" y2="140" stroke="#60a5fa" stroke-width="2"/>
            <line x1="90" y1="80" x2="130" y2="140" stroke="#60a5fa" stroke-width="2"/>
            <line x1="230" y1="80" x2="190" y2="140" stroke="#60a5fa" stroke-width="2"/>
            <line x1="230" y1="80" x2="270" y2="140" stroke="#60a5fa" stroke-width="2"/>
            <!-- Nodes -->
            <circle cx="160" cy="30" r="18" fill="#1e293b" stroke="#3b82f6" stroke-width="2"/>
            <text x="160" y="35" text-anchor="middle" fill="#60a5fa" font-weight="bold" font-size="12">40</text>
            <circle cx="90" cy="80" r="18" fill="#1e293b" stroke="#3b82f6" stroke-width="2"/>
            <text x="90" y="85" text-anchor="middle" fill="#60a5fa" font-weight="bold" font-size="12">20</text>
            <circle cx="230" cy="80" r="18" fill="#1e293b" stroke="#3b82f6" stroke-width="2"/>
            <text x="230" y="85" text-anchor="middle" fill="#60a5fa" font-weight="bold" font-size="12">60</text>
            <circle cx="50" cy="140" r="18" fill="#1e293b" stroke="#3b82f6" stroke-width="2"/>
            <text x="50" y="145" text-anchor="middle" fill="#60a5fa" font-weight="bold" font-size="12">10</text>
            <circle cx="130" cy="140" r="18" fill="#1e293b" stroke="#3b82f6" stroke-width="2"/>
            <text x="130" y="145" text-anchor="middle" fill="#60a5fa" font-weight="bold" font-size="12">30</text>
            <circle cx="190" cy="140" r="18" fill="#1e293b" stroke="#3b82f6" stroke-width="2"/>
            <text x="190" y="145" text-anchor="middle" fill="#60a5fa" font-weight="bold" font-size="12">50</text>
            <circle cx="270" cy="140" r="18" fill="#1e293b" stroke="#3b82f6" stroke-width="2"/>
            <text x="270" y="145" text-anchor="middle" fill="#60a5fa" font-weight="bold" font-size="12">70</text>
          </svg>
        </div>
        <strong>Post-Order Traversal Rule:</strong> <code>Left Subtree -> Right Subtree -> Root</code><br>
        1. Left subtree of 40: Left subtree of 20 (10), Right subtree of 20 (30), Root (20) -> <strong>10, 30, 20</strong><br>
        2. Right subtree of 40: Left subtree of 60 (50), Right subtree of 60 (70), Root (60) -> <strong>50, 70, 60</strong><br>
        3. Root node: <strong>40</strong><br><br>
        <strong>Complete Post-Order Traversal:</strong> <code>10, 30, 20, 50, 70, 60, 40</code>`
      }
    ]
  },

  // =========================================================================
  // WORKSHEET 3: GREEDY PARADIGM & MINIMUM SPANNING TREES
  // =========================================================================
  {
    id: 'ws-algo-3',
    title: 'Worksheet 3: Greedy Strategies & Spanning Tree Traces',
    badge: 'Worksheet 3 • Greedy & MST',
    summary: '10 Multiple Choice Questions and 5 Solved Problem Traces covering Fractional Knapsack, Huffman coding bit calculations, Job Sequencing with deadlines, and step-by-step Prim\'s, Kruskal\'s & Dijkstra\'s executions.',
    mcqs: [
      {
        id: 1,
        question: 'Which of the following problems can be efficiently solved using Greedy Programming?',
        options: [
          'A. Traveling Salesman Problem',
          'B. Knapsack Problem (0/1)',
          'C. Shortest Path Problem with Negative Cycles',
          'D. Fractional Knapsack Problem'
        ],
        answer: 'D. Fractional Knapsack Problem',
        explanation: 'Fractional Knapsack exhibits the greedy-choice property: sorting items by value-to-weight ratio (vᵢ/wᵢ) and taking items greedily yields the provably optimal solution in O(n log n).'
      },
      {
        id: 2,
        question: 'Which of the following statements is true regarding Greedy Algorithms?',
        options: [
          'A. They always guarantee optimal solutions for any problem.',
          'B. They are not suitable for problems where a globally optimal solution is required and greedy choice property fails.',
          'C. They are primarily based on backtracking.',
          'D. They are applicable only to problems with small input sizes.'
        ],
        answer: 'B. They are not suitable for problems where a globally optimal solution is required and greedy choice property fails.',
        explanation: 'Greedy algorithms commit to locally optimal choices without backtracking. If a problem lacks optimal substructure or the greedy-choice property (e.g. 0/1 Knapsack, TSP), greedy produces suboptimal solutions.'
      },
      {
        id: 3,
        question: 'What is the time complexity of the Greedy Algorithm for Huffman coding?',
        options: [
          'A. O(n log n)',
          'B. O(n²)',
          'C. O(n)',
          'D. O(log n)'
        ],
        answer: 'A. O(n log n)',
        explanation: 'Building the Huffman tree requires inserting n character frequencies into a min-priority queue (min-heap) and performing 2(n − 1) extract-min operations. Each heap operation takes O(log n), giving total time O(n log n).'
      },
      {
        id: 4,
        question: 'Which of the following problems is NOT solved using a Greedy Algorithm?',
        options: [
          'A. Prim’s Algorithm for Minimum Spanning Tree',
          'B. Dijkstra’s Algorithm for Shortest Path',
          'C. Traveling Salesman Problem',
          'D. Huffman Coding'
        ],
        answer: 'C. Traveling Salesman Problem',
        explanation: 'The Traveling Salesman Problem (TSP) is NP-Hard. A greedy nearest-neighbor heuristic frequently gets trapped in suboptimal local minima and does not solve TSP optimally.'
      },
      {
        id: 5,
        question: 'In the context of the Fractional Knapsack Problem, if the available capacity is 10 and there are items with weights {5, 3, 8} and values {10, 6, 12}, what is the maximum value that can be obtained using a greedy approach?',
        options: [
          'A. 15',
          'B. 18',
          'C. 19',
          'D. 22'
        ],
        answer: 'C. 19',
        explanation: 'Compute ratios: Item 1 = 10/5 = 2.0; Item 2 = 6/3 = 2.0; Item 3 = 12/8 = 1.5. Take Item 1 (wt 5, val 10) + Item 2 (wt 3, val 6) -> weight 8, val 16. Remaining capacity = 2. Take 2/8 of Item 3: (2/8) · 12 = 3. Total value = 16 + 3 = 19.'
      },
      {
        id: 6,
        question: 'In the context of Huffman coding, if the frequencies of characters are {2, 3, 7, 10} and a greedy algorithm is used to build the Huffman tree, what is the total number of bits needed to represent the entire message?',
        options: [
          'A. 18',
          'B. 39',
          'C. 24',
          'D. 28'
        ],
        answer: 'B. 39',
        explanation: 'Merge 2 and 3 -> internal node (5). Merge 5 and 7 -> internal node (12). Merge 10 and 12 -> root (22). Code lengths: 10 has depth 1 (1 bit); 7 has depth 2 (2 bits); 2 and 3 have depth 3 (3 bits). Total bits = (10 · 1) + (7 · 2) + (2 · 3) + (3 · 3) = 10 + 14 + 6 + 9 = 39 bits.'
      },
      {
        id: 7,
        question: 'For a given graph, if Prim’s algorithm is used to find the minimum spanning tree, and the graph is represented using an adjacency matrix, what is the time complexity in terms of the number of vertices (V)?',
        options: [
          'A. O(V)',
          'B. O(V²)',
          'C. O(V log V)',
          'D. O(V³)'
        ],
        answer: 'B. O(V²)',
        explanation: 'With an adjacency matrix, finding the minimum weight vertex at each of the V iterations requires scanning an entire row of size V, resulting in O(V · V) = O(V²) runtime.'
      },
      {
        id: 8,
        question: 'In the Fractional Knapsack Problem, if the available capacity is 15 and there are items with weights {8, 4, 6} and values {16, 10, 12}, what is the optimal solution obtained using a greedy approach?',
        options: [
          'A. 32',
          'B. 28',
          'C. 26',
          'D. 24'
        ],
        answer: 'A. 32',
        explanation: 'Compute ratios: Item 2 = 10/4 = 2.5; Item 1 = 16/8 = 2.0; Item 3 = 12/6 = 2.0. Pick Item 2 (wt 4, val 10). Remaining capacity = 11. Pick Item 1 (wt 8, val 16). Remaining capacity = 3. Take 3/6 of Item 3: (3/6) · 12 = 6. Total value = 10 + 16 + 6 = 32.'
      },
      {
        id: 9,
        question: 'What is the time complexity of the greedy algorithm for job scheduling with deadlines?',
        options: [
          'A. O(n)',
          'B. O(n log n)',
          'C. O(n²)',
          'D. O(log n)'
        ],
        answer: 'C. O(n²)',
        explanation: 'Sorting n jobs by profit takes O(n log n). For each job, searching for the latest available slot from its deadline down to slot 1 takes O(d) in the worst case (where d ≤ n), giving overall time O(n²). With Disjoint Set (DSU), it can be optimized to O(n log n).'
      },
      {
        id: 10,
        question: 'For a given graph with weighted edges, if Kruskal’s algorithm is applied to find the minimum spanning tree, what is the time complexity for a graph with V vertices and E edges?',
        options: [
          'A. O(V)',
          'B. O(E)',
          'C. O(V log V)',
          'D. O(E log E)'
        ],
        answer: 'D. O(E log E)',
        explanation: 'Kruskal’s algorithm sorts all E edges in O(E log E) time. Then it performs O(E) find-union operations using DSU with path compression in O(E · α(V)). The sorting step dominates, giving O(E log E) = O(E log V).'
      }
    ],
    subjective: [
      {
        id: 1,
        q: '1. Consider the following tasks with their deadlines and profits. Schedule the tasks in such a way that they produce maximum profit after being executed:\nJob: [J1, J2, J3, J4] | Profit: [50, 15, 10, 25] | Deadline: [2, 1, 2, 1]',
        category: 'Job Sequencing',
        ans: `<strong>Step-by-Step Job Sequencing with Deadlines:</strong><br><br>
        1. <strong>Sort jobs in descending order of profit:</strong><br>
        • J1: Profit = 50, Deadline = 2<br>
        • J4: Profit = 25, Deadline = 1<br>
        • J2: Profit = 15, Deadline = 1<br>
        • J3: Profit = 10, Deadline = 2<br><br>
        2. <strong>Determine maximum time slots:</strong> Maximum deadline is <code>2</code>. Available slots: <code>Slot 1 [0-1]</code> and <code>Slot 2 [1-2]</code>.<br><br>
        3. <strong>Greedy Slot Assignment:</strong><br>
        • <strong>Schedule J1:</strong> Deadline = 2. Place in latest available slot <= 2 -> <strong>Slot 2</strong>. (Profit = 50)<br>
        • <strong>Schedule J4:</strong> Deadline = 1. Place in latest available slot <= 1 -> <strong>Slot 1</strong>. (Profit = 25)<br>
        • <strong>Attempt J2:</strong> Deadline = 1. Slot 1 is already occupied by J4. Rejected.<br>
        • <strong>Attempt J3:</strong> Deadline = 2. Slots 1 and 2 are both occupied. Rejected.<br><br>
        <strong>Optimal Schedule:</strong> <code>[Slot 1: J4, Slot 2: J1]</code><br>
        <strong>Maximum Profit:</strong> <code>25 + 50 = 75</code>`
      },
      {
        id: 2,
        q: '2. Construct a minimum spanning tree of the graph given in Figure 6.5. Start the Prim’s algorithm from vertex D.',
        category: 'Prim\'s Algorithm',
        ans: `<strong>Figure 6.5: Weighted Undirected Graph for Prim\'s Algorithm:</strong><br>
        <div style="text-align: center; margin: 1rem 0;">
          <svg viewBox="0 0 380 200" style="max-width: 360px; height: auto;">
            <!-- Edges with weights -->
            <line x1="80" y1="50" x2="200" y2="50" stroke="#475569" stroke-width="2"/>
            <text x="140" y="42" fill="#94a3b8" font-size="11">4</text>
            <line x1="200" y1="50" x2="300" y2="100" stroke="#475569" stroke-width="2"/>
            <text x="255" y="70" fill="#94a3b8" font-size="11">2</text>
            <line x1="80" y1="50" x2="100" y2="150" stroke="#475569" stroke-width="2"/>
            <text x="80" y="105" fill="#94a3b8" font-size="11">1</text>
            <line x1="100" y1="150" x2="220" y2="150" stroke="#475569" stroke-width="2"/>
            <text x="160" y="142" fill="#94a3b8" font-size="11">3</text>
            <line x1="200" y1="50" x2="220" y2="150" stroke="#475569" stroke-width="2"/>
            <text x="215" y="100" fill="#94a3b8" font-size="11">5</text>
            <line x1="220" y1="150" x2="300" y2="100" stroke="#475569" stroke-width="2"/>
            <text x="270" y="135" fill="#94a3b8" font-size="11">6</text>
            <!-- Vertices -->
            <circle cx="80" cy="50" r="16" fill="#1e293b" stroke="#3b82f6" stroke-width="2"/>
            <text x="80" y="55" text-anchor="middle" fill="#60a5fa" font-weight="bold" font-size="12">A</text>
            <circle cx="200" cy="50" r="16" fill="#1e293b" stroke="#3b82f6" stroke-width="2"/>
            <text x="200" y="55" text-anchor="middle" fill="#60a5fa" font-weight="bold" font-size="12">B</text>
            <circle cx="300" cy="100" r="16" fill="#1e293b" stroke="#3b82f6" stroke-width="2"/>
            <text x="300" y="105" text-anchor="middle" fill="#60a5fa" font-weight="bold" font-size="12">C</text>
            <circle cx="100" cy="150" r="16" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
            <text x="100" y="155" text-anchor="middle" fill="#34d399" font-weight="bold" font-size="12">D</text>
            <circle cx="220" cy="150" r="16" fill="#1e293b" stroke="#3b82f6" stroke-width="2"/>
            <text x="220" y="155" text-anchor="middle" fill="#60a5fa" font-weight="bold" font-size="12">E</text>
          </svg>
        </div>
        <strong>Prim\'s Execution starting at Vertex D:</strong><br>
        1. <code>Visited = {D}</code>. Outgoing edges: (D, A)=1, (D, E)=3. Pick minimum: <strong>Edge (D, A) [weight 1]</strong>.<br>
        2. <code>Visited = {D, A}</code>. Available edges: (A, B)=4, (D, E)=3. Pick minimum: <strong>Edge (D, E) [weight 3]</strong>.<br>
        3. <code>Visited = {D, A, E}</code>. Available edges: (A, B)=4, (E, B)=5, (E, C)=6. Pick minimum: <strong>Edge (A, B) [weight 4]</strong>.<br>
        4. <code>Visited = {D, A, E, B}</code>. Available edges: (B, C)=2, (E, C)=6. Pick minimum: <strong>Edge (B, C) [weight 2]</strong>.<br>
        5. All 5 vertices connected with 4 edges.<br><br>
        <strong>Total MST Weight:</strong> <code>1 + 3 + 4 + 2 = 10</code>`
      },
      {
        id: 3,
        q: '3. Apply Kruskal’s algorithm on the graph given in Figure 6.6.',
        category: 'Kruskal\'s Algorithm',
        ans: `<strong>Figure 6.6: Weighted Graph for Kruskal\'s Algorithm:</strong><br>
        Edges sorted by weight: <code>(D, A): 1, (B, C): 2, (D, E): 3, (A, B): 4, (E, B): 5, (E, C): 6</code>.<br><br>
        <strong>Kruskal\'s Disjoint Set Union (DSU) Trace:</strong><br>
        • Initial Sets: <code>{A}, {B}, {C}, {D}, {E}</code><br>
        1. Consider (D, A) [wt 1]: D and A in different sets -> <strong>Add (D, A)</strong>. Union: <code>{A, D}</code>.<br>
        2. Consider (B, C) [wt 2]: B and C in different sets -> <strong>Add (B, C)</strong>. Union: <code>{B, C}</code>.<br>
        3. Consider (D, E) [wt 3]: D and E in different sets -> <strong>Add (D, E)</strong>. Union: <code>{A, D, E}</code>.<br>
        4. Consider (A, B) [wt 4]: A and B in different sets -> <strong>Add (A, B)</strong>. Union: <code>{A, B, C, D, E}</code>.<br>
        5. Consider (E, B) [wt 5]: Both in same set -> Forms Cycle -> <strong>Discard</strong>.<br>
        6. Consider (E, C) [wt 6]: Both in same set -> Forms Cycle -> <strong>Discard</strong>.<br><br>
        <strong>Selected MST Edges:</strong> <code>(D, A), (B, C), (D, E), (A, B)</code> with total weight = <code>1 + 2 + 3 + 4 = 10</code>.`
      },
      {
        id: 4,
        q: '4. Consider the graph G given in Figure 6.7 Taking S as the initial node, execute the Dijkstra’s algorithm on it.',
        category: 'Dijkstra Numerical',
        ans: `<strong>Figure 6.7: Directed Weighted Graph from Source S:</strong><br>
        Vertices: <code>{S, A, B, C, D}</code>. Edges: <code>(S, A)=10, (S, C)=5, (C, A)=3, (C, B)=9, (C, D)=2, (A, B)=1, (D, B)=6</code>.<br><br>
        <strong>Step-by-Step Dijkstra Relaxation Trace:</strong><br>
        <div style="overflow-x: auto;">
          <table style="width: 100%; border-collapse: collapse; font-size: 0.88rem; margin: 0.5rem 0;">
            <thead>
              <tr style="background: rgba(59, 130, 246, 0.2); border-bottom: 2px solid #3b82f6;">
                <th style="padding: 6px 10px;">Step</th>
                <th style="padding: 6px 10px;">Extract Min</th>
                <th style="padding: 6px 10px;">dist[S]</th>
                <th style="padding: 6px 10px;">dist[A]</th>
                <th style="padding: 6px 10px;">dist[B]</th>
                <th style="padding: 6px 10px;">dist[C]</th>
                <th style="padding: 6px 10px;">dist[D]</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>0</td><td>Initial</td><td>0</td><td>∞</td><td>∞</td><td>∞</td><td>∞</td></tr>
              <tr><td>1</td><td><strong>S (0)</strong></td><td>0</td><td>10</td><td>∞</td><td>5</td><td>∞</td></tr>
              <tr><td>2</td><td><strong>C (5)</strong></td><td>0</td><td>8 (5+3)</td><td>14 (5+9)</td><td>5</td><td>7 (5+2)</td></tr>
              <tr><td>3</td><td><strong>D (7)</strong></td><td>0</td><td>8</td><td>13 (7+6)</td><td>5</td><td>7</td></tr>
              <tr><td>4</td><td><strong>A (8)</strong></td><td>0</td><td>8</td><td>9 (8+1)</td><td>5</td><td>7</td></tr>
              <tr><td>5</td><td><strong>B (9)</strong></td><td>0</td><td>8</td><td>9</td><td>5</td><td>7</td></tr>
            </tbody>
          </table>
        </div>
        <strong>Final Shortest Distances from S:</strong><br>
        <code>dist[S] = 0, dist[C] = 5, dist[D] = 7, dist[A] = 8 (path S->C->A), dist[B] = 9 (path S->C->A->B)</code>`
      },
      {
        id: 5,
        q: '5. Create a Huffman tree with the following nodes arranged in a priority queue in Figure 6.8:\nCharacters: {A: 5, B: 9, C: 12, D: 13, E: 16, F: 45}',
        category: 'Huffman Coding',
        ans: `<strong>Huffman Tree Construction Trace:</strong><br><br>
        1. <strong>Initial Min-Queue:</strong> <code>[A: 5, B: 9, C: 12, D: 13, E: 16, F: 45]</code><br>
        2. Extract A(5) & B(9) -> Merge into node <code>N1(14)</code>. Queue: <code>[C: 12, D: 13, N1: 14, E: 16, F: 45]</code><br>
        3. Extract C(12) & D(13) -> Merge into node <code>N2(25)</code>. Queue: <code>[N1: 14, E: 16, N2: 25, F: 45]</code><br>
        4. Extract N1(14) & E(16) -> Merge into node <code>N3(30)</code>. Queue: <code>[N2: 25, N3: 30, F: 45]</code><br>
        5. Extract N2(25) & N3(30) -> Merge into node <code>N4(55)</code>. Queue: <code>[F: 45, N4: 55]</code><br>
        6. Extract F(45) & N4(55) -> Merge into root <code>Root(100)</code>.<br><br>
        <strong>Generated Variable-Length Prefix Codes:</strong><br>
        • <strong>F (45):</strong> <code>0</code> (1 bit)<br>
        • <strong>C (12):</strong> <code>100</code> (3 bits)<br>
        • <strong>D (13):</strong> <code>101</code> (3 bits)<br>
        • <strong>E (16):</strong> <code>111</code> (3 bits)<br>
        • <strong>A (5):</strong> <code>1100</code> (4 bits)<br>
        • <strong>B (9):</strong> <code>1101</code> (4 bits)`
      }
    ]
  },

  // =========================================================================
  // WORKSHEET 4: DIVIDE AND CONQUER & MASTER THEOREM
  // =========================================================================
  {
    id: 'ws-algo-4',
    title: 'Worksheet 4: Divide & Conquer, Recurrences & Sorting Traces',
    badge: 'Worksheet 4 • Divide & Conquer',
    summary: '10 Multiple Choice Questions and 5 Rigorous Analytical Problems covering Master Theorem applications (a) to (g), complete QuickSort & MergeSort partitioning traces, substitution method, and the recursion tree method.',
    mcqs: [
      {
        id: 1,
        question: 'In the Merge Sort algorithm, what is the time complexity for sorting an array of n elements?',
        options: [
          'A. O(n)',
          'B. O(log n)',
          'C. O(n log n)',
          'D. O(n²)'
        ],
        answer: 'C. O(n log n)',
        explanation: 'Merge Sort divides the array into two halves, recursively sorts them, and merges them in linear O(n) time. T(n) = 2T(n/2) + O(n) = O(n log n) in all cases (best, average, worst).'
      },
      {
        id: 2,
        question: 'What is the base case in most Divide and Conquer algorithms?',
        options: [
          'A. When the input size becomes zero',
          'B. When the input size becomes one',
          'C. When the input size becomes two',
          'D. When the input size becomes a prime number'
        ],
        answer: 'B. When the input size becomes one',
        explanation: 'When the subproblem size reduces to 1 (or 0), the solution is trivial and can be solved directly in O(1) time without further recursive decomposition.'
      },
      {
        id: 3,
        question: 'In the QuickSort algorithm, what is the role of the "pivot" element?',
        options: [
          'A. It is the smallest element in the array',
          'B. It is the largest element in the array',
          'C. It is used to partition the array into smaller and greater elements',
          'D. It is the middle element of the array'
        ],
        answer: 'C. It is used to partition the array into smaller and greater elements',
        explanation: 'The pivot partitions the array such that all elements strictly smaller than the pivot are moved to its left, and all elements greater or equal are moved to its right.'
      },
      {
        id: 4,
        question: 'Which of the following is a disadvantage of the Divide and Conquer approach?',
        options: [
          'A. It is difficult to implement',
          'B. It often requires extra space',
          'C. It is not suitable for parallel processing',
          'D. It may have a high constant factor in the time complexity'
        ],
        answer: 'B. It often requires extra space',
        explanation: 'Divide and conquer algorithms frequently incur extra space due to recursion call stack frames (O(log n) to O(n)) and auxiliary merge arrays (e.g. O(n) for Merge Sort).'
      },
      {
        id: 5,
        question: 'What is the time complexity of the MergeSort algorithm for sorting an array of size n?',
        options: [
          'A. O(n)',
          'B. O(log n)',
          'C. O(n log n)',
          'D. O(n²)'
        ],
        answer: 'C. O(n log n)',
        explanation: 'MergeSort splits into 2 equal halves at each level of the recursion tree (height log₂ n) and performs n operations per level. Total work = n · log₂ n = O(n log n).'
      },
      {
        id: 6,
        question: 'If an algorithm divides the problem into five subproblems of size n/5 and solves each independently with linear combine cost, what would be its recurrence relation?',
        options: [
          'A. T(n) = 5 · T(n/5) + O(n)',
          'B. T(n) = T(n/5) + T(4n/5)',
          'C. T(n) = T(n/2) + 5',
          'D. T(n) = 5 · T(n)'
        ],
        answer: 'A. T(n) = 5 · T(n/5) + O(n)',
        explanation: 'Dividing into 5 subproblems of size n/5 gives 5 · T(n/5), plus the combine work O(n).'
      },
      {
        id: 7,
        question: 'If a Divide and Conquer algorithm has a recurrence relation T(n) = T(n/2) + O(n), what is its time complexity?',
        options: [
          'A. O(n)',
          'B. O(log n)',
          'C. O(n log n)',
          'D. O(n²)'
        ],
        answer: 'A. O(n)',
        explanation: 'Here a = 1, b = 2, k = 1. We test bᵏ = 2¹ = 2 > a = 1. Master Theorem Case 3 applies: T(n) = Θ(nᵏ) = O(n).'
      },
      {
        id: 8,
        question: 'If the size of the input is halved in each recursive call and an additional linear amount of work is done, what is the overall time complexity of the algorithm?',
        options: [
          'A. O(log n)',
          'B. O(n)',
          'C. O(n log n)',
          'D. O(n²)'
        ],
        answer: 'B. O(n)',
        explanation: 'T(n) = T(n/2) + n. Work done = n + n/2 + n/4 + n/8 + ... = n · (1 / (1 - 1/2)) = 2n = O(n). This is the geometric series underlying Quickselect.'
      },
      {
        id: 9,
        question: 'Consider a recursive algorithm with a time complexity given by the recurrence relation T(n) = 3T(n/4) + n². What is the time complexity of this algorithm using the Master Theorem?',
        options: [
          'A. O(n)',
          'B. O(n log n)',
          'C. O(n² log n)',
          'D. O(n²)'
        ],
        answer: 'D. O(n²)',
        explanation: 'Here a = 3, b = 4, k = 2. We compare bᵏ = 4² = 16 with a = 3. Since bᵏ > a, Master Theorem Case 3 applies: T(n) = Θ(n²) = O(n²).'
      },
      {
        id: 10,
        question: 'The time complexity of an algorithm is given by T(n) = T(n/2) + T(n/4) + n. What is the time complexity of the algorithm?',
        options: [
          'A. O(n)',
          'B. O(n log n)',
          'C. O(n²)',
          'D. O(n³)'
        ],
        answer: 'A. O(n)',
        explanation: 'Using the Akra-Bazzi method: (1/2)ᵖ + (1/4)ᵖ = 1. Since (1/2)¹ + (1/4)¹ = 3/4 < 1, the exponent p < 1. The driving function f(n) = n dominates, giving T(n) = Θ(n).'
      }
    ],
    subjective: [
      {
        id: 1,
        q: '1. For each of the following recurrences, give an expression for the runtime T(n) if the recurrence can be solved with the Master Theorem. Otherwise, indicate that the Master Theorem does not apply:\n(a) T(n) = 3T(n/2) + n²\n(b) T(n) = 4T(n/2) + n²\n(c) T(n) = T(n/2) + 2ⁿ\n(d) T(n) = 2ⁿ · T(n/2) + nⁿ\n(e) T(n) = 16T(n/4) + n\n(f) T(n) = 2T(n/2) + n log n\n(g) T(n) = 2T(n/2) + n / log n',
        category: 'Master Theorem Analysis',
        ans: `<strong>Comprehensive Master Theorem Solutions:</strong><br><br>
        • <strong>(a) T(n) = 3T(n/2) + n²:</strong><br>
          a = 3, b = 2, k = 2. log₂ 3 ≈ 1.585. Since bᵏ = 2² = 4 > a = 3, <strong>Case 3 applies: T(n) = Θ(n²)</strong>.<br><br>
        • <strong>(b) T(n) = 4T(n/2) + n²:</strong><br>
          a = 4, b = 2, k = 2. log₂ 4 = 2. Since bᵏ = 2² = 4 = a, <strong>Case 2 applies: T(n) = Θ(n² log n)</strong>.<br><br>
        • <strong>(c) T(n) = T(n/2) + 2ⁿ:</strong><br>
          f(n) = 2ⁿ is exponential, growing strictly faster than n^(log_b a + ε). Regularity holds: a · f(n/b) = 2^(n/2) ≤ c · 2ⁿ for c = 1/2. <strong>Case 3 applies: T(n) = Θ(2ⁿ)</strong>.<br><br>
        • <strong>(d) T(n) = 2ⁿ · T(n/2) + nⁿ:</strong><br>
          <strong>Master Theorem DOES NOT apply</strong> because the number of subproblems <code>a = 2ⁿ</code> is a variable function of n, violating the requirement that <code>a</code> must be a constant.<br><br>
        • <strong>(e) T(n) = 16T(n/4) + n:</strong><br>
          a = 16, b = 4, k = 1. log₄ 16 = 2. Since bᵏ = 4¹ = 4 < a = 16, <strong>Case 1 applies: T(n) = Θ(n^(log_b a)) = Θ(n²)</strong>.<br><br>
        • <strong>(f) T(n) = 2T(n/2) + n log n:</strong><br>
          a = 2, b = 2, log₂ 2 = 1. f(n) = n¹ log¹ n (k=1, p=1). By <strong>Extended Case 2: T(n) = Θ(n log² n)</strong>.<br><br>
        • <strong>(g) T(n) = 2T(n/2) + n / log n:</strong><br>
          a = 2, b = 2, log₂ 2 = 1. f(n) = n / log n = n · log⁻¹ n. Standard Master theorem fails (non-polynomial gap). By recursion tree: <strong>T(n) = Θ(n log log n)</strong>.`
      },
      {
        id: 2,
        q: '2. Apply QuickSort algorithm on the given array. Input: [2, 8, 7, 1, 3, 5, 6, 4] | Output: [1, 2, 3, 4, 5, 6, 7, 8]\nTrace Partition procedure with pivot = A[high].',
        category: 'QuickSort Partition Trace',
        ans: `<strong>Trace of PARTITION(A, low=0, high=7) on [2, 8, 7, 1, 3, 5, 6, 4]:</strong><br><br>
        • <code>pivot = A[7] = 4</code>, <code>i = -1</code><br>
        • j=0: A[0]=2 ≤ 4 -> i=0, swap A[0] & A[0] -> <code>[2, 8, 7, 1, 3, 5, 6, 4]</code><br>
        • j=1: A[1]=8 > 4 -> do nothing<br>
        • j=2: A[2]=7 > 4 -> do nothing<br>
        • j=3: A[3]=1 ≤ 4 -> i=1, swap A[1](8) & A[3](1) -> <code>[2, 1, 7, 8, 3, 5, 6, 4]</code><br>
        • j=4: A[4]=3 ≤ 4 -> i=2, swap A[2](7) & A[4](3) -> <code>[2, 1, 3, 8, 7, 5, 6, 4]</code><br>
        • j=5: A[5]=5 > 4 -> do nothing<br>
        • j=6: A[6]=6 > 4 -> do nothing<br>
        • Loop ends. Swap A[i+1=3](8) with A[high](4):<br>
        Array becomes: <code>[2, 1, 3, 4, 7, 5, 6, 8]</code>. Pivot 4 is in its final sorted position at index 3.<br><br>
        <strong>Subproblem Recursion:</strong><br>
        • Left: <code>[2, 1, 3]</code> -> partitions around pivot 3 to <code>[1, 2, 3]</code>.<br>
        • Right: <code>[7, 5, 6, 8]</code> -> partitions around pivot 8, then <code>[7, 5, 6]</code> around 6 to <code>[5, 6, 7]</code>.<br>
        Combined sorted array: <code>[1, 2, 3, 4, 5, 6, 7, 8]</code>.`
      },
      {
        id: 3,
        q: '3. Apply Merge Sort algorithm on following array: Input: [2, 8, 7, 1, 3, 5, 6, 4] | Output: [1, 2, 3, 4, 5, 6, 7, 8]',
        category: 'MergeSort Trace',
        ans: `<strong>Merge Sort Divide and Conquer Tree:</strong><br><br>
        1. <strong>Divide Phase:</strong><br>
        • Level 0: <code>[2, 8, 7, 1, 3, 5, 6, 4]</code><br>
        • Level 1: Left <code>[2, 8, 7, 1]</code> | Right <code>[3, 5, 6, 4]</code><br>
        • Level 2: <code>[2, 8]</code>, <code>[7, 1]</code> | <code>[3, 5]</code>, <code>[6, 4]</code><br>
        • Level 3 (Base): <code>[2]</code>, <code>[8]</code>, <code>[7]</code>, <code>[1]</code>, <code>[3]</code>, <code>[5]</code>, <code>[6]</code>, <code>[4]</code><br><br>
        2. <strong>Merge Phase:</strong><br>
        • Merge [2] & [8] -> <code>[2, 8]</code><br>
        • Merge [7] & [1] -> <code>[1, 7]</code><br>
        • Merge [3] & [5] -> <code>[3, 5]</code><br>
        • Merge [6] & [4] -> <code>[4, 6]</code><br>
        • Merge [2, 8] & [1, 7] -> <code>[1, 2, 7, 8]</code><br>
        • Merge [3, 5] & [4, 6] -> <code>[3, 4, 5, 6]</code><br>
        • Merge [1, 2, 7, 8] & [3, 4, 5, 6]:<br>
          Compare 1 & 3 -> 1 | Compare 2 & 3 -> 2 | Compare 7 & 3 -> 3 | Compare 7 & 4 -> 4 | Compare 7 & 5 -> 5 | Compare 7 & 6 -> 6 | Copy 7, 8.<br>
        <strong>Final Array:</strong> <code>[1, 2, 3, 4, 5, 6, 7, 8]</code>.`
      },
      {
        id: 4,
        q: '4. Solve the following recurrence relation using the substitution method:\nT(n) = 2T(√n) + log n,  T(1) = 2',
        category: 'Recurrence Relations',
        ans: `<strong>Solving T(n) = 2T(√n) + log n via Domain Transformation:</strong><br><br>
        1. Let <code>m = log₂ n</code>, which means <code>n = 2ᵐ</code> and <code>√n = 2^(m/2)</code>.<br>
        2. Substituting into the recurrence:<br>
           <code>T(2ᵐ) = 2 · T(2^(m/2)) + m</code><br>
        3. Define a new function <code>S(m) = T(2ᵐ)</code>:<br>
           <code>S(m) = 2 · S(m/2) + m</code><br>
        4. This is the standard Merge Sort recurrence! By Master Theorem (Case 2 with a=2, b=2, k=1):<br>
           <code>S(m) = Θ(m log m)</code><br>
        5. Substitute back <code>m = log n</code>:<br>
           <code>T(n) = S(log n) = Θ(log n · log(log n))</code>.`
      },
      {
        id: 5,
        q: '5. Solve the following recurrence relation using the tree method:\nT(n) = 2T(n/2) + n',
        category: 'Recursion Tree Method',
        ans: `<strong>Recursion Tree Analysis for T(n) = 2T(n/2) + n:</strong><br><br>
        • <strong>Level 0 (Root):</strong> 1 node of work <code>n</code> -> Sum = <strong>n</strong><br>
        • <strong>Level 1:</strong> 2 children each of work <code>n/2</code> -> Sum = 2 · (n/2) = <strong>n</strong><br>
        • <strong>Level 2:</strong> 4 grandchildren each of work <code>n/4</code> -> Sum = 4 · (n/4) = <strong>n</strong><br>
        • <strong>Level i:</strong> 2ⁱ nodes each of work <code>n / 2ⁱ</code> -> Sum = 2ⁱ · (n / 2ⁱ) = <strong>n</strong><br>
        • <strong>Tree Depth:</strong> The recursion terminates when <code>n / 2ʰ = 1 => h = log₂ n</code>.<br><br>
        <strong>Total Work:</strong><br>
        <code>Total Cost = ∑ (i = 0 to log₂ n) n = n · (log₂ n + 1) = n log₂ n + n = Θ(n log n)</code>.`
      }
    ]
  },

  // =========================================================================
  // WORKSHEET 5: DYNAMIC PROGRAMMING & ALL-PAIRS SHORTEST PATHS
  // =========================================================================
  {
    id: 'ws-algo-5',
    title: 'Worksheet 5: Dynamic Programming & All-Pairs Shortest Path',
    badge: 'Worksheet 5 • Dynamic Programming',
    summary: '10 Multiple Choice Questions and 5 Classic DP Problems covering Matrix Chain Parenthesization, Longest Common Subsequence (LCS) binary string alignment, 0/1 Knapsack tabular execution, Memoization vs. Tabulation, and Floyd-Warshall DP All-Pairs Shortest Paths.',
    mcqs: [
      {
        id: 1,
        question: 'Which of the following is a key feature of problems suitable for dynamic programming?',
        options: [
          'A. They can be solved using a brute-force approach',
          'B. They exhibit optimal substructure and overlapping subproblems',
          'C. They are always easy to solve',
          'D. They involve recursion'
        ],
        answer: 'B. They exhibit optimal substructure and overlapping subproblems',
        explanation: 'Dynamic Programming applies exclusively to problems exhibiting two core properties: Optimal Substructure (optimal solution contains optimal sub-solutions) and Overlapping Subproblems (the same subproblems are solved repeatedly).'
      },
      {
        id: 2,
        question: 'In dynamic programming, what is meant by "optimal substructure"?',
        options: [
          'A. The smallest subproblem is always the optimal solution',
          'B. The optimal solution of a problem can be constructed from optimal solutions of its subproblems',
          'C. The subproblems are always solved in an optimal way',
          'D. The optimal solution is always achieved using a brute-force approach'
        ],
        answer: 'B. The optimal solution of a problem can be constructed from optimal solutions of its subproblems',
        explanation: 'A problem has optimal substructure if an optimal solution to the overall problem can be constructed efficiently from optimal solutions of its subproblems.'
      },
      {
        id: 3,
        question: 'What is memoization in the context of dynamic programming?',
        options: [
          'A. A technique for storing and reusing previously computed results to avoid redundant computations',
          'B. A method for writing code using memo pads',
          'C. A way of measuring the time complexity of a dynamic programming algorithm',
          'D. A type of optimization that prioritizes memory over speed'
        ],
        answer: 'A. A technique for storing and reusing previously computed results to avoid redundant computations',
        explanation: 'Memoization is a top-down optimization where function call arguments are used as keys in a cache (array/hash map) to return previously computed values in O(1) without re-executing recursive calls.'
      },
      {
        id: 4,
        question: 'If a dynamic programming algorithm uses the tabulation approach to solve a problem of size n, and the table has dimensions n × n, what is the space complexity of the algorithm?',
        options: [
          'A. O(n)',
          'B. O(n²)',
          'C. O(log n)',
          'D. O(1)'
        ],
        answer: 'B. O(n²)',
        explanation: 'An n × n 2D table contains n² cells, requiring O(n²) memory space.'
      },
      {
        id: 5,
        question: 'Which of the following is an example of a problem that can be efficiently solved using dynamic programming?',
        options: [
          'A. Sorting an array',
          'B. Finding the maximum element in an array',
          'C. Longest Common Subsequence',
          'D. Binary search'
        ],
        answer: 'C. Longest Common Subsequence',
        explanation: 'Longest Common Subsequence (LCS) has overlapping subproblems and optimal substructure, solved in O(m · n) time using a 2D DP matrix.'
      },
      {
        id: 6,
        question: 'In the Fibonacci sequence, if F(0) = 0 and F(1) = 1, what is the value of F(5) using dynamic programming?',
        options: [
          'A. 3',
          'B. 5',
          'C. 8',
          'D. 13'
        ],
        answer: 'B. 5',
        explanation: 'F(0)=0, F(1)=1, F(2)=1, F(3)=2, F(4)=3, F(5)=5.'
      },
      {
        id: 7,
        question: 'For the Longest Common Subsequence (LCS) problem, if the input sequences are "ABCD" and "ACDF," what is the length of the LCS using dynamic programming?',
        options: [
          'A. 2',
          'B. 3',
          'C. 4',
          'D. 5'
        ],
        answer: 'B. 3',
        explanation: 'The common subsequences are "A", "AC", "AD", "ACD". The longest common subsequence is "ACD" of length 3.'
      },
      {
        id: 8,
        question: 'If a dynamic programming algorithm uses memoization and the result of F(3) is already computed, how many times will F(3) be recalculated in the process of solving F(5)?',
        options: [
          'A. 0',
          'B. 1',
          'C. 2',
          'D. 3'
        ],
        answer: 'A. 0',
        explanation: 'With memoization, once F(3) is computed and stored in the cache, every subsequent request for F(3) is satisfied in O(1) time directly from the table without any recalculation (0 times).'
      },
      {
        id: 9,
        question: 'If a dynamic programming algorithm has a recurrence relation T(n) = T(n − 1) + T(n − 2) and base cases T(0) = 1, T(1) = 1 without memoization, what is the time complexity of the algorithm in terms of n?',
        options: [
          'A. O(n)',
          'B. O(2ⁿ)',
          'C. O(n²)',
          'D. O(log n)'
        ],
        answer: 'B. O(2ⁿ)',
        explanation: 'Without memoization, the call tree forms an exponential binary tree with 2ⁿ nodes, running in exponential time O(2ⁿ) (more precisely O(1.618ⁿ)).'
      },
      {
        id: 10,
        question: 'For the Knapsack problem, if the maximum capacity is 10 and there are items with weights [2, 4, 5] and values [6, 8, 7], what is the maximum value that can be achieved using dynamic programming?',
        options: [
          'A. 13',
          'B. 14',
          'C. 15',
          'D. 16'
        ],
        answer: 'C. 15',
        explanation: 'Combinations within capacity 10: Item 1 + Item 2 has weight 2 + 4 = 6, value = 6 + 8 = 14. Item 2 + Item 3 has weight 4 + 5 = 9, value = 8 + 7 = 15. Item 1 + Item 3 has weight 7, value = 13. All three items require weight 11 > 10. Maximum value = 15.'
      }
    ],
    subjective: [
      {
        id: 1,
        q: '1. Find an optimal parenthesization of a matrix-chain product whose sequence of dimensions is (5, 4, 6, 2, 7).',
        category: 'Matrix Chain Multiplication',
        ans: `<strong>Matrix Chain Multiplication for Dimensions p = [5, 4, 6, 2, 7]:</strong><br>
        Matrices: <code>A₁ (5×4), A₂ (4×6), A₃ (6×2), A₄ (2×7)</code>.<br><br>
        <strong>Dynamic Programming Recurrence:</strong><br>
        <code>m[i, j] = min_{i ≤ k < j} { m[i, k] + m[k+1, j] + p_{i-1} · p_k · p_j }</code><br><br>
        • <strong>Chain Length 1:</strong> <code>m[1,1] = m[2,2] = m[3,3] = m[4,4] = 0</code><br><br>
        • <strong>Chain Length 2:</strong><br>
          – <code>m[1, 2] = 5 · 4 · 6 = 120</code> (k = 1)<br>
          – <code>m[2, 3] = 4 · 6 · 2 = 48</code> (k = 2)<br>
          – <code>m[3, 4] = 6 · 2 · 7 = 84</code> (k = 3)<br><br>
        • <strong>Chain Length 3:</strong><br>
          – <code>m[1, 3]</code>: min(k=1: 0 + 48 + 5·4·2 = 88; k=2: 120 + 0 + 5·6·2 = 180) -> <strong>88</strong> (k = 1)<br>
          – <code>m[2, 4]</code>: min(k=2: 0 + 84 + 4·6·7 = 252; k=3: 48 + 0 + 4·2·7 = 104) -> <strong>104</strong> (k = 3)<br><br>
        • <strong>Chain Length 4 (Full Chain m[1, 4]):</strong><br>
          – k=1: <code>m[1,1] + m[2,4] + 5·4·7 = 0 + 104 + 140 = 244</code><br>
          – k=2: <code>m[1,2] + m[3,4] + 5·6·7 = 120 + 84 + 210 = 414</code><br>
          – k=3: <code>m[1,3] + m[4,4] + 5·2·7 = 88 + 0 + 70 = 158</code> -> <strong>Minimum is 158 at k = 3</strong><br><br>
        <strong>Optimal Parenthesization:</strong> <code>((A₁ · (A₂ · A₃)) · A₄)</code><br>
        <strong>Minimum Scalar Multiplications:</strong> <code>158</code>`
      },
      {
        id: 2,
        q: '2. Determine an LCS of (1, 0, 0, 1, 0, 1, 0, 1) and (0, 1, 0, 1, 1, 0, 1, 1, 0).',
        category: 'Longest Common Subsequence',
        ans: `<strong>LCS for Sequences:</strong><br>
        <code>X = [1, 0, 0, 1, 0, 1, 0, 1]</code> (length m = 8)<br>
        <code>Y = [0, 1, 0, 1, 1, 0, 1, 1, 0]</code> (length n = 9)<br><br>
        • <strong>Matching Subsequence Alignment:</strong><br>
          X: &nbsp; &nbsp; &nbsp; 1 &nbsp; 0 &nbsp; 0 &nbsp; 1 &nbsp; 0 &nbsp; 1 &nbsp; 0 &nbsp; 1<br>
          Y: &nbsp; 0 &nbsp; 1 &nbsp; 0 &nbsp; 1 &nbsp; 1 &nbsp; 0 &nbsp; 1 &nbsp; 1 &nbsp; 0<br><br>
        • One maximum common matching alignment is: <code>(1, 0, 1, 0, 1, 0)</code> or <code>(0, 0, 1, 0, 1, 1)</code>.<br>
        • Running the DP matrix <code>c[i, j]</code> gives a maximum length of <strong>6</strong>.<br>
        • <strong>An Optimal LCS:</strong> <code>(0, 0, 1, 0, 1, 1)</code> or <code>(1, 0, 1, 0, 1, 0)</code> with Length = <strong>6</strong>.`
      },
      {
        id: 3,
        q: '3. Consider the problem having weights and profits:\nWeights: [2, 3, 4, 5] | Profits: [1, 2, 5, 6]\nThe capacity of the knapsack is W = 8 kg. Solve the 0/1 knapsack using Dynamic Programming.',
        category: '0/1 Knapsack DP',
        ans: `<strong>0/1 Knapsack DP Table Construction (Capacity W = 0 to 8):</strong><br><br>
        <div style="overflow-x: auto;">
          <table style="width: 100%; border-collapse: collapse; font-size: 0.85rem; margin: 0.5rem 0;">
            <thead>
              <tr style="background: rgba(59, 130, 246, 0.2); border-bottom: 2px solid #3b82f6;">
                <th style="padding: 6px;">Item (w, p)</th>
                <th>w=0</th><th>w=1</th><th>w=2</th><th>w=3</th><th>w=4</th><th>w=5</th><th>w=6</th><th>w=7</th><th>w=8</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>0 (None)</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
              <tr><td>1 (w=2, p=1)</td><td>0</td><td>0</td><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td></tr>
              <tr><td>2 (w=3, p=2)</td><td>0</td><td>0</td><td>1</td><td>2</td><td>2</td><td>3</td><td>3</td><td>3</td><td>3</td></tr>
              <tr><td>3 (w=4, p=5)</td><td>0</td><td>0</td><td>1</td><td>2</td><td>5</td><td>5</td><td>6</td><td>7</td><td>7</td></tr>
              <tr><td>4 (w=5, p=6)</td><td>0</td><td>0</td><td>1</td><td>2</td><td>5</td><td>6</td><td>6</td><td>7</td><td><strong>8</strong></td></tr>
            </tbody>
          </table>
        </div>
        <strong>Tracing Selected Items from DP[4][8] = 8:</strong><br>
        • DP[4][8] = 8 ≠ DP[3][8] (7) -> <strong>Item 4 (w=5, p=6) is selected</strong>. Remaining cap = 8 − 5 = 3.<br>
        • DP[3][3] = 2 = DP[2][3] (2) -> Item 3 is NOT selected.<br>
        • DP[2][3] = 2 ≠ DP[1][3] (1) -> <strong>Item 2 (w=3, p=2) is selected</strong>. Remaining cap = 3 − 3 = 0.<br><br>
        <strong>Optimal Subset:</strong> <code>{Item 2, Item 4}</code> with Total Weight = <code>3 + 5 = 8 kg</code> and <strong>Maximum Profit = 2 + 6 = 8</strong>.`
      },
      {
        id: 4,
        q: '4. Discuss difference between Tabulation vs Memoization in Dynamic Programming.',
        category: 'DP Paradigms',
        ans: `Comprehensive comparison of <strong>Tabulation</strong> and <strong>Memoization</strong>:<br><br>
        <div style="overflow-x: auto;">
          <table style="width: 100%; border-collapse: collapse; font-size: 0.88rem; margin: 0.5rem 0;">
            <thead>
              <tr style="background: rgba(59, 130, 246, 0.2); border-bottom: 2px solid #3b82f6;">
                <th style="padding: 6px 10px; text-align: left;">Feature</th>
                <th style="padding: 6px 10px; text-align: left;">Tabulation (Bottom-Up)</th>
                <th style="padding: 6px 10px; text-align: left;">Memoization (Top-Down)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td style="padding: 6px 10px;"><strong>Approach</strong></td><td>Iterative (builds from base cases up)</td><td>Recursive (starts from main problem down)</td></tr>
              <tr><td style="padding: 6px 10px;"><strong>State Resolution</strong></td><td>Solves all subproblems in topological order</td><td>Solves only required subproblems on-demand</td></tr>
              <tr><td style="padding: 6px 10px;"><strong>Stack Overhead</strong></td><td>None (pure loops, no stack overflow risk)</td><td>Incurs recursion call stack overhead O(n)</td></tr>
              <tr><td style="padding: 6px 10px;"><strong>Space Optimization</strong></td><td>Easy to compress table (e.g. 2 rows)</td><td>Harder to optimize state memory</td></tr>
              <tr><td style="padding: 6px 10px;"><strong>Ease of Implementation</strong></td><td>Requires ordering subproblem dependencies</td><td>Direct translation of mathematical recurrence</td></tr>
            </tbody>
          </table>
        </div>`
      },
      {
        id: 5,
        q: '5. Consider the following Graph given in Figure 6.9. Solve it for All Pair Shortest Path using Dynamic Programming (Floyd-Warshall Algorithm).',
        category: 'All-Pairs Shortest Path',
        ans: `<strong>Figure 6.9: Directed Graph for All-Pairs Shortest Path:</strong><br>
        <div style="text-align: center; margin: 1rem 0;">
          <svg viewBox="0 0 340 180" style="max-width: 320px; height: auto;">
            <!-- Directed Edges -->
            <defs>
              <marker id="arrow" viewBox="0 0 10 10" refX="22" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#60a5fa"/>
              </marker>
            </defs>
            <line x1="80" y1="50" x2="240" y2="50" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>
            <text x="160" y="42" fill="#93c5fd" font-size="12">3</text>
            <line x1="240" y1="50" x2="240" y2="140" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>
            <text x="250" y="100" fill="#93c5fd" font-size="12">1</text>
            <line x1="240" y1="140" x2="80" y2="140" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>
            <text x="160" y="155" fill="#93c5fd" font-size="12">2</text>
            <line x1="80" y1="140" x2="80" y2="50" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>
            <text x="65" y="100" fill="#93c5fd" font-size="12">8</text>
            <line x1="80" y1="50" x2="240" y2="140" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>
            <text x="175" y="90" fill="#93c5fd" font-size="12">7</text>
            <!-- Vertices 1, 2, 3, 4 -->
            <circle cx="80" cy="50" r="16" fill="#1e293b" stroke="#3b82f6" stroke-width="2"/>
            <text x="80" y="55" text-anchor="middle" fill="#60a5fa" font-weight="bold" font-size="12">1</text>
            <circle cx="240" cy="50" r="16" fill="#1e293b" stroke="#3b82f6" stroke-width="2"/>
            <text x="240" y="55" text-anchor="middle" fill="#60a5fa" font-weight="bold" font-size="12">2</text>
            <circle cx="240" cy="140" r="16" fill="#1e293b" stroke="#3b82f6" stroke-width="2"/>
            <text x="240" y="145" text-anchor="middle" fill="#60a5fa" font-weight="bold" font-size="12">3</text>
            <circle cx="80" cy="140" r="16" fill="#1e293b" stroke="#3b82f6" stroke-width="2"/>
            <text x="80" y="145" text-anchor="middle" fill="#60a5fa" font-weight="bold" font-size="12">4</text>
          </svg>
        </div>
        <strong>Floyd-Warshall Dynamic Programming Recurrence:</strong><br>
        <code>D^{(k)}[i, j] = min(D^{(k-1)}[i, j], D^{(k-1)}[i, k] + D^{(k-1)}[k, j])</code><br><br>
        • <strong>Initial Matrix D^{(0)}:</strong><br>
        <pre style="background: rgba(15, 23, 42, 0.7); padding: 0.75rem; border-radius: 6px; color: #38bdf8;">
    [ 0,  3,  7,  ∞ ]
    [ ∞,  0,  1,  ∞ ]
    [ ∞,  ∞,  0,  2 ]
    [ 8,  ∞,  ∞,  0 ]</pre>
        • <strong>After Step k = 1 (through node 1):</strong><br>
        <code>D[4, 2] = min(∞, 8 + 3) = 11</code>; <code>D[4, 3] = min(∞, 8 + 7) = 15</code>.<br><br>
        • <strong>After Step k = 2 (through node 2):</strong><br>
        <code>D[1, 3] = min(7, 3 + 1) = 4</code>; <code>D[4, 3] = min(15, 11 + 1) = 12</code>.<br><br>
        • <strong>After Step k = 3 (through node 3):</strong><br>
        <code>D[1, 4] = min(∞, 4 + 2) = 6</code>; <code>D[2, 4] = min(∞, 1 + 2) = 3</code>; <code>D[4, 4] = min(0, 12 + 2) = 0</code>.<br><br>
        • <strong>After Step k = 4 (through node 4):</strong><br>
        <code>D[1, 1] = min(0, 6 + 8) = 0</code>; <code>D[2, 1] = min(∞, 3 + 8) = 11</code>; <code>D[3, 1] = min(∞, 2 + 8) = 10</code>; <code>D[3, 2] = min(∞, 10 + 3) = 13</code>.<br><br>
        <strong>Final All-Pairs Shortest Distance Matrix D^{(4)}:</strong><br>
        <pre style="background: rgba(15, 23, 42, 0.7); padding: 0.75rem; border-radius: 6px; color: #34d399;">
         To:   1    2    3    4
    From 1: [  0,   3,   4,   6 ]
    From 2: [ 11,   0,   1,   3 ]
    From 3: [ 10,  13,   0,   2 ]
    From 4: [  8,  11,  12,   0 ]</pre>`
      }
    ]
  }
];
