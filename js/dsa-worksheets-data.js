/**
 * DSA_WORKSHEETS_DATA: Chapter 5.12 Practice Worksheets with Interactive MCQs & Comprehensive Subjective Analyses
 * Source: Chapter 5 Data Structures & Placement Preparation Booklet
 * 
 * Contains 5 Complete Interactive Worksheets:
 * - Worksheet 1: Arrays, Address Calculations, Dynamic Arrays, Stacks & Complexity (10 MCQs + 6 Subjective Questions)
 * - Worksheet 2: Recursion, Infix/Postfix Evaluation, Stack Memory, Graphs & Queues (10 MCQs + 6 Subjective Questions)
 * - Worksheet 3: Deques, Priority Queues, Stacks, Searching & Asymptotic Analysis (10 MCQs + 6 Subjective Questions)
 * - Worksheet 4: Linked Lists, Two Stacks Queue, RPN, Doubly Linked Lists & Trees (10 MCQs + 6 Subjective Questions)
 * - Worksheet 5: BST Traversals, Tree Reconstruction, Sorting Passes & BFS Traversal (10 MCQs + 6 Subjective Questions)
 */

const DSA_WORKSHEETS_DATA = [
  // =========================================================================
  // WORKSHEET 1: ARRAYS, ADDRESSING, DYNAMIC ARRAYS, STACKS & QUEUES
  // =========================================================================
  {
    id: 'ws-dsa-1',
    title: 'Worksheet 1: Arrays, Memory Addressing, Dynamic Arrays, Stacks & Queues',
    badge: 'Worksheet 1 • Arrays & Stacks',
    summary: '10 Interactive MCQs & 6 Comprehensive Subjective Analyses covering array indexing, 2D/3D row-major addressing formulas, dynamic array insertion, matrix swaps, stack complexities, and queue reversals.',
    mcqs: [
      {
        id: 1,
        question: 'In an array of size n, what is the time complexity of accessing the i-th element?',
        options: [
          'A. O(n)',
          'B. O(log n)',
          'C. O(1)',
          'D. O(n log n)'
        ],
        answer: 'C. O(1)',
        explanation: 'Arrays store elements in contiguous memory locations. The address of the i-th element is computed directly via pointer arithmetic: Address = Base_Address + i * Element_Size, enabling instantaneous O(1) random access.'
      },
      {
        id: 2,
        question: 'The base address of a two-dimensional array A[4][5] is 2000, and each element occupies 4 bytes. What is the address of A[2][3] if stored in row-major order?',
        options: [
          'A. 2048',
          'B. 2052',
          'C. 2060',
          'D. 2072'
        ],
        answer: 'B. 2052',
        explanation: 'For an array with dimensions rows=4, cols=5, the row-major formula is: Address(A[i][j]) = Base + W * (i * cols + j). Here Base = 2000, W = 4, cols = 5, i = 2, j = 3. Address = 2000 + 4 * (2 * 5 + 3) = 2000 + 4 * 13 = 2000 + 52 = 2052.'
      },
      {
        id: 3,
        question: 'Which of the following algorithms cannot be implemented using arrays?',
        options: [
          'A. Binary Search',
          'B. Linked List Insertion',
          'C. Merge Sort',
          'D. Stack Operations'
        ],
        answer: 'B. Linked List Insertion',
        explanation: 'Linked List insertion fundamentally relies on allocating discrete, non-contiguous heap nodes linked via dynamic pointers. While an array can simulate a memory pool (cursor implementation), authentic linked list pointer insertion cannot be implemented using pure contiguous arrays.'
      },
      {
        id: 4,
        question: 'Which of the following best describes the time complexity of inserting an element at the beginning of a dynamic array (assuming resizing if necessary)?',
        options: [
          'A. O(1)',
          'B. O(n)',
          'C. O(log n)',
          'D. O(n log n)'
        ],
        answer: 'B. O(n)',
        explanation: 'Inserting an element at the beginning (index 0) of a dynamic array requires shifting all existing n elements one index to the right, which takes O(n) linear time, regardless of whether reallocation is triggered.'
      },
      {
        id: 5,
        question: 'In a 3D array A[x][y][z] stored in row-major order, which formula computes the address of element A[i][j][k] if the base address is B and the size of each element is W?',
        options: [
          'A. B + W · (i · y · z + j · z + k)',
          'B. B + W · (k · x · y + j · x + i)',
          'C. B + W · (i · z + j · x · y + k)',
          'D. B + W · (j · z + i · y · z + k)'
        ],
        answer: 'A. B + W · (i · y · z + j · z + k)',
        explanation: 'In 3D row-major order: index i skips i complete 2D slices (each of size y * z), index j skips j 1D rows within the slice (each of size z), and k gives the column offset within the row. Hence: B + W * (i * y * z + j * z + k).'
      },
      {
        id: 6,
        question: 'Consider the C++ code snippet:\nint a[] = {1, 2, 3, 4, 5, 6, 7};\nint *p = a + 6;\ncout << *p << ", " << *(p - 3);\nWhat will be the output of the program?',
        options: [
          'A. Run time error',
          'B. Syntax error',
          'C. 7, 4',
          'D. None'
        ],
        answer: 'C. 7, 4',
        explanation: 'Pointer p initially points to a + 6 (the last element, value 7). Subtracting 3 moves the pointer back 3 positions to index 3 (value 4). Printing *p and *(p - 3) outputs "7, 4".'
      },
      {
        id: 7,
        question: 'Let A be a square matrix of size n × n. Consider the program:\nD = 10\nfor i = 1 to n do\n  for j = 1 to n do {\n    Temp = A[i][j] + D\n    A[i][j] = A[j][i]\n    A[j][i] = Temp - D\n  }\nWhat is the expected output?',
        options: [
          'A. Transpose of matrix A',
          'B. The matrix A itself',
          'C. Inverse of matrix A',
          'D. Adding 10 to the upper diagonal elements and subtracting 10 from diagonal elements of A'
        ],
        answer: 'B. The matrix A itself',
        explanation: 'The nested loops iterate over all pairs (i, j) from 1 to n. When (i, j) is visited with i < j, A[i][j] and A[j][i] are swapped. Later, when the symmetric pair (j, i) is visited, they are swapped a second time back to their original positions. For diagonal elements (i == j), Temp - D restores the original value. Thus, the final matrix is identical to the original matrix A.'
      },
      {
        id: 8,
        question: 'In a stack, what is the time complexity of inserting or deleting an element?',
        options: [
          'A. O(n)',
          'B. O(log n)',
          'C. O(1)',
          'D. O(n log n)'
        ],
        answer: 'C. O(1)',
        explanation: 'Both push() (insertion) and pop() (deletion) operate exclusively at the top of the stack pointer/index, taking strict O(1) constant time.'
      },
      {
        id: 9,
        question: 'In a stack implementation using a linked list, where is the new element inserted during a push() operation?',
        options: [
          'A. Beginning of the list',
          'B. End of the list',
          'C. Middle of the list',
          'D. None of the above'
        ],
        answer: 'A. Beginning of the list',
        explanation: 'Inserting at the beginning (head) of a singly linked list takes O(1) time without requiring list traversal. The head pointer directly serves as the top of the stack.'
      },
      {
        id: 10,
        question: 'Which of the following is not a typical use of a stack?',
        options: [
          'A. Function call management',
          'B. Expression evaluation',
          'C. Graph breadth-first search (BFS)',
          'D. Undo/Redo functionality'
        ],
        answer: 'C. Graph breadth-first search (BFS)',
        explanation: 'Breadth-First Search (BFS) explores vertices layer by layer and strictly requires a First-In-First-Out Queue. Stacks are used for Depth-First Search (DFS), function call frames, expression evaluation, and undo/redo stacks.'
      }
    ],
    subjective: [
      {
        id: 1,
        q: '1. Explain the differences between static arrays and dynamic arrays. Provide examples.',
        category: 'Arrays',
        ans: '• <strong>Static Arrays:</strong> Memory is allocated at compile-time (on the stack or in static data segment) with a <em>fixed, immutable size</em> that cannot be altered during execution.<br>' +
             '  – <em>Memory:</em> Stack allocated, fast allocation, but risks stack overflow or wasted capacity.<br>' +
             '  – <em>Example (C++):</em> <code>int arr[100];</code> (allocates fixed space for 100 integers).<br><br>' +
             '• <strong>Dynamic Arrays:</strong> Memory is allocated at runtime from the <em>heap</em>. When capacity is exhausted, a new larger buffer (typically 2× size) is allocated, existing elements are copied, and the old buffer is freed.<br>' +
             '  – <em>Amortized Time:</em> Append is <code>O(1)</code> amortized, but occasionally triggers <code>O(n)</code> reallocation.<br>' +
             '  – <em>Example (Java / C++):</em> <code>ArrayList&lt;Integer&gt; list = new ArrayList&lt;&gt;();</code> or <code>std::vector&lt;int&gt; v;</code>.'
      },
      {
        id: 2,
        q: '2. How can you find the maximum and minimum elements in an array with the least number of comparisons? Explain the algorithm.',
        category: 'Algorithmic Optimization',
        ans: '• <strong>Naive Approach:</strong> Scanning sequentially takes <code>2n - 2</code> comparisons.<br>' +
             '• <strong>Optimal Tournament / Pairwise Comparison Method:</strong><br>' +
             '  1. Process elements in <strong>pairs</strong> (two at a time).<br>' +
             '  2. Compare the two elements in the pair with each other (<strong>1 comparison</strong>).<br>' +
             '  3. Compare the larger element of the pair with the global <code>max</code> (<strong>1 comparison</strong>).<br>' +
             '  4. Compare the smaller element of the pair with the global <code>min</code> (<strong>1 comparison</strong>).<br>' +
             '  5. <em>Total Comparisons:</em> Exactly <strong>3 comparisons for every 2 elements</strong>.<br>' +
             '  – For even n: <code>1 + 3*(n - 2)/2 = 3n/2 - 2</code> comparisons.<br>' +
             '  – For odd n: <code>3*(n - 1)/2</code> comparisons.<br>' +
             '  – Reduces comparison count by <strong>25%</strong> compared to the naive 2n approach!'
      },
      {
        id: 3,
        q: '3. Write a program to calculate the sum of all elements in an array of size n. Example: Input: [1, 2, 3, 4, 5] → Output: 15.',
        category: 'Array Implementation',
        ans: '<strong>Java Implementation:</strong><br>' +
             '<pre><code>public class ArraySum {\n' +
             '    public static int calculateSum(int[] arr) {\n' +
             '        int sum = 0;\n' +
             '        for (int num : arr) {\n' +
             '            sum += num;\n' +
             '        }\n' +
             '        return sum;\n' +
             '    }\n' +
             '    public static void main(String[] args) {\n' +
             '        int[] input = {1, 2, 3, 4, 5};\n' +
             '        System.out.println("Output: " + calculateSum(input)); // Prints: 15\n' +
             '    }\n' +
             '}</code></pre>' +
             '• <strong>Time Complexity:</strong> <code>O(n)</code> (single linear pass through all n elements).<br>' +
             '• <strong>Space Complexity:</strong> <code>O(1)</code> (constant auxiliary space).'
      },
      {
        id: 4,
        q: '4. Write a program to reverse the elements of a queue. Example: Input: [1, 2, 3, 4] → Output: [4, 3, 2, 1].',
        category: 'Queue Implementation',
        ans: '<strong>Algorithm (Using an Auxiliary Stack):</strong><br>' +
             '1. Dequeue all elements from the queue one by one and push them onto a Stack (LIFO).<br>' +
             '2. Pop all elements from the stack and enqueue them back into the Queue.<br><br>' +
             '<strong>Java Code:</strong><br>' +
             '<pre><code>import java.util.*;\n\n' +
             'public class QueueReversal {\n' +
             '    public static void reverseQueue(Queue<Integer> q) {\n' +
             '        Stack<Integer> stack = new Stack<>();\n' +
             '        while (!q.isEmpty()) {\n' +
             '            stack.push(q.poll());\n' +
             '        }\n' +
             '        while (!stack.isEmpty()) {\n' +
             '            q.offer(stack.pop());\n' +
             '        }\n' +
             '    }\n' +
             '    public static void main(String[] args) {\n' +
             '        Queue<Integer> q = new LinkedList<>(Arrays.asList(1, 2, 3, 4));\n' +
             '        reverseQueue(q);\n' +
             '        System.out.println(q); // Output: [4, 3, 2, 1]\n' +
             '    }\n' +
             '}</code></pre>' +
             '• <strong>Time Complexity:</strong> <code>O(n)</code>.<br>' +
             '• <strong>Space Complexity:</strong> <code>O(n)</code> for the stack.'
      },
      {
        id: 5,
        q: '5. What are the advantages of Binary search over linear search?',
        category: 'Searching Algorithms',
        ans: '• <strong>Time Complexity Advantage:</strong> Binary Search operates in <code>O(log₂ n)</code> time, whereas Linear Search requires <code>O(n)</code> time.<br>' +
             '  – For 1,000,000 elements: Linear Search may take 1,000,000 comparisons; Binary Search takes at most <strong>20 comparisons</strong> (<code>log₂ 1,000,000 ≈ 19.93</code>)!<br>' +
             '  – For 1,000,000,000 elements: Binary Search takes only <strong>30 comparisons</strong>.<br>' +
             '• <strong>Scalability:</strong> As dataset size doubles, Binary Search only adds <em>one single additional comparison</em>.<br>' +
             '• <em>Prerequisite:</em> Binary search strictly requires the input collection to be sorted.'
      },
      {
        id: 6,
        q: '6. Explain how you can use two stacks to implement a queue. Write the enqueue and dequeue operations.',
        category: 'Queue via Stacks',
        ans: 'A queue can be implemented using two stacks: <code>inbox</code> (for incoming elements) and <code>outbox</code> (for outgoing elements):<br><br>' +
             '• <strong>enqueue(x):</strong> Always push <code>x</code> directly onto <code>inbox</code>. Time: <code>O(1)</code>.<br>' +
             '• <strong>dequeue():</strong><br>' +
             '  1. If <code>outbox</code> is not empty, pop and return from <code>outbox</code>.<br>' +
             '  2. If <code>outbox</code> is empty, transfer all elements from <code>inbox</code> to <code>outbox</code> by popping each from <code>inbox</code> and pushing to <code>outbox</code> (this inverts LIFO into FIFO order!).<br>' +
             '  3. Pop and return top of <code>outbox</code>.<br>' +
             '  4. If both stacks are empty, throw Queue Underflow.<br>' +
             '• <strong>Amortized Cost:</strong> Each element is pushed and popped exactly twice, guaranteeing <strong>O(1) amortized time</strong> per dequeue.'
      }
    ]
  },

  // =========================================================================
  // WORKSHEET 2: RECURSION, POSTFIX, CALL STACKS, GRAPHS & CIRCULAR QUEUES
  // =========================================================================
  {
    id: 'ws-dsa-2',
    title: 'Worksheet 2: Recursion, Infix/Postfix Evaluation, Stack Memory, Graphs & Queues',
    badge: 'Worksheet 2 • Expressions & Graphs',
    summary: '10 Interactive MCQs & 6 Comprehensive Subjective Analyses covering recursive call stacks, postfix evaluation, maximum stack frame depth, complete graph edges, circular queue conditions, and Tower of Hanoi.',
    mcqs: [
      {
        id: 1,
        question: 'Which data structure is used to perform recursion internally in most programming languages?',
        options: [
          'A. Queue',
          'B. Stack',
          'C. Linked List',
          'D. Heap'
        ],
        answer: 'B. Stack',
        explanation: 'Programming language runtimes allocate stack activation frames (containing parameters, local variables, and return instruction addresses) on the Call Stack for every recursive invocation.'
      },
      {
        id: 2,
        question: 'Which of the following data structure is required to convert arithmetic expression in infix to its equivalent postfix notation?',
        options: [
          'A. Queue',
          'B. Linked list',
          'C. Binary search tree',
          'D. Stack'
        ],
        answer: 'D. Stack',
        explanation: 'Dijkstra’s Shunting-Yard algorithm uses an Operator Stack to temporarily hold operators and parentheses while ensuring correct mathematical operator precedence and associativity.'
      },
      {
        id: 3,
        question: 'Given the postfix expression 6 2 3 * - 3 8 2 / + +, what is the evaluated result?',
        options: [
          'A. 5',
          'B. 6',
          'C. 7',
          'D. 8'
        ],
        answer: 'C. 7',
        explanation: 'Step-by-step evaluation:\n1. 2 3 * = 6\n2. 6 6 - = 0\n3. 8 2 / = 4\n4. 3 4 + = 7\n5. 0 7 + = 7. Final result = 7.'
      },
      {
        id: 4,
        question: 'What is the maximum depth of a stack frame in a system with limited memory of M bytes and each frame occupying F bytes?',
        options: [
          'A. M × F',
          'B. M',
          'C. M − F',
          'D. M / F'
        ],
        answer: 'D. M / F',
        explanation: 'Total number of stack frames that can fit into memory before stack overflow occurs equals Total Available Memory divided by Size of each Frame: M / F.'
      },
      {
        id: 5,
        question: 'The number of edges in a complete graph of n vertices is',
        options: [
          'A. n(n+1)',
          'B. n(n-1) / 2',
          'C. n²',
          'D. n'
        ],
        answer: 'B. n(n-1) / 2',
        explanation: 'In a complete undirected graph, every vertex has an edge to every other vertex. Total edges = nC2 = n(n - 1) / 2.'
      },
      {
        id: 6,
        question: 'Let S1 and S2 be two stacks. S1 has capacity 4 and contains [10, 50, 90, 100] (top is 100). S2 has capacity 2 and is empty. Using operations PushToS2, PushToS1, and GenerateOutput, which output sequence can be generated?',
        options: [
          'A. 10, 50, 90, 100',
          'B. 50, 90, 100, 10',
          'C. 90, 50, 100, 10',
          'D. 100, 50, 10, 90'
        ],
        answer: 'C. 90, 50, 100, 10',
        explanation: 'Trace: 1. PushToS2 (pops 100 from S1, S2=[100]) -> 2. GenerateOutput (outputs 90) -> 3. GenerateOutput (outputs 50) -> 4. PushToS1 (pops 100 from S2 to S1, S1=[10, 100]) -> 5. GenerateOutput (outputs 100) -> 6. GenerateOutput (outputs 10). Result: 90, 50, 100, 10.'
      },
      {
        id: 7,
        question: 'What does the function do?\nvoid fun(int n) {\n  Stack S;\n  while (n > 0) { push(&S, n % 2); n = n / 2; }\n  while (!isEmpty(&S)) printf("%d ", pop(&S));\n}',
        options: [
          'A. Prints the value of log n in reverse order',
          'B. Prints binary representation of n in reverse order',
          'C. Prints binary representation of n',
          'D. Prints the value of log n'
        ],
        answer: 'C. Prints binary representation of n',
        explanation: 'n % 2 extracts bits from least significant to most significant. Pushing them to a stack and popping reverses the order, correctly printing the binary representation from MSB to LSB.'
      },
      {
        id: 8,
        question: 'In a circular queue of size N, what is the condition for the queue to be full?',
        options: [
          'A. rear == front',
          'B. (rear + 1) % N == front',
          'C. rear == front - 1',
          'D. rear == front + 1'
        ],
        answer: 'B. (rear + 1) % N == front',
        explanation: 'In a circular queue of capacity N using one empty slot to distinguish full from empty, the queue is full when advancing rear by one modulo N reaches the front pointer: (rear + 1) % N == front.'
      },
      {
        id: 9,
        question: 'What is the time complexity of inserting an element into a queue implemented using a linked list?',
        options: [
          'A. O(1)',
          'B. O(n)',
          'C. O(log n)',
          'D. O(n log n)'
        ],
        answer: 'A. O(1)',
        explanation: 'A linked list queue maintains a rear pointer pointing to the last node. Enqueuing creates a node and sets rear.next = newNode, rear = newNode in O(1) constant time.'
      },
      {
        id: 10,
        question: 'What is the time complexity of deleting an element from a queue implemented using a linked list?',
        options: [
          'A. O(1)',
          'B. O(n)',
          'C. O(log n)',
          'D. O(n log n)'
        ],
        answer: 'A. O(1)',
        explanation: 'A linked list queue maintains a front pointer pointing to the head node. Dequeuing unlinks front = front.next in strict O(1) constant time.'
      }
    ],
    subjective: [
      {
        id: 1,
        q: '1. What are the types of queues in Data Structures?',
        category: 'Queue Classifications',
        ans: '• <strong>1. Simple / Linear Queue:</strong> Standard FIFO queue where insertions occur strictly at the rear and deletions at the front. Suffers from "false overflow" when rear reaches array capacity even if front slots are freed.<br>' +
             '• <strong>2. Circular Queue:</strong> Connects the last position back to the first position in a ring. Reuses freed space via modulo arithmetic: <code>(rear + 1) % N</code>.<br>' +
             '• <strong>3. Priority Queue:</strong> Each element has an assigned priority. Elements with higher priority are dequeued before lower priority ones, regardless of arrival order.<br>' +
             '• <strong>4. Deque (Double-Ended Queue):</strong> Insertion and deletion are permitted at both ends (Front and Rear). Subtypes include <em>Input-Restricted Deque</em> and <em>Output-Restricted Deque</em>.'
      },
      {
        id: 2,
        q: '2. What is a stack? How is it different from a queue?',
        category: 'Stack vs Queue',
        ans: '• <strong>Stack:</strong> A linear data structure that adheres to the <strong>LIFO (Last-In-First-Out)</strong> principle. All insertions (push) and removals (pop) take place at a single end called the <em>top</em>.<br>' +
             '• <strong>Queue:</strong> A linear data structure that adheres to the <strong>FIFO (First-In-First-Out)</strong> principle. Insertions (enqueue) occur at the <em>rear</em> and removals (dequeue) occur at the opposite end called the <em>front</em>.<br>' +
             '<table class="styled-table" style="width:100%; border-collapse:collapse; margin-top:8px;">' +
             '<thead><tr style="background:var(--bg-tertiary);"><th>Aspect</th><th>Stack</th><th>Queue</th></tr></thead>' +
             '<tbody>' +
             '<tr><td><strong>Principle</strong></td><td>LIFO (Last-In-First-Out)</td><td>FIFO (First-In-First-Out)</td></tr>' +
             '<tr><td><strong>Pointers</strong></td><td>Single pointer: <code>top</code></td><td>Two pointers: <code>front</code> and <code>rear</code></td></tr>' +
             '<tr><td><strong>Primary Use Cases</strong></td><td>Recursion, Expression parsing, DFS</td><td>Task scheduling, Buffers, BFS</td></tr>' +
             '</tbody></table>'
      },
      {
        id: 3,
        q: '3. What do you understand by Tower of Hanoi? Explain with one example.',
        category: 'Recursion & Algorithms',
        ans: '• <strong>Concept:</strong> A classic mathematical puzzle consisting of 3 pegs (Source A, Auxiliary B, Destination C) and <code>n</code> disks of different sizes.<br>' +
             '• <strong>Rules:</strong><br>' +
             '  1. Only one disk can be moved at a time.<br>' +
             '  2. A larger disk can never be placed on top of a smaller disk.<br>' +
             '  3. Each move consists of taking the upper disk from one peg and sliding it onto another peg.<br>' +
             '• <strong>Example for n = 3 Disks (Total Moves = 2³ - 1 = 7):</strong><br>' +
             '  1. Move disk 1 from A to C<br>' +
             '  2. Move disk 2 from A to B<br>' +
             '  3. Move disk 1 from C to B<br>' +
             '  4. Move disk 3 from A to C<br>' +
             '  5. Move disk 1 from B to A<br>' +
             '  6. Move disk 2 from B to C<br>' +
             '  7. Move disk 1 from A to C. (Puzzle Solved!)'
      },
      {
        id: 4,
        q: '4. What are the advantages and disadvantages of using linked lists compared to arrays?',
        category: 'Arrays vs Linked Lists',
        ans: '• <strong>Advantages of Linked Lists:</strong><br>' +
             '  – <em>Dynamic Size:</em> Grows and shrinks on demand during runtime without needing pre-allocated size limits.<br>' +
             '  – <em>Fast Insertions/Deletions:</em> Inserting or removing at the head or known pointer takes <code>O(1)</code> time without shifting elements.<br>' +
             '  – <em>No Memory Waste:</em> Allocates exact memory needed per node.<br><br>' +
             '• <strong>Disadvantages of Linked Lists:</strong><br>' +
             '  – <em>No Random Access:</em> Accessing the i-th element requires <code>O(n)</code> linear traversal.<br>' +
             '  – <em>Pointer Memory Overhead:</em> Each node requires extra memory to store pointers (4-8 bytes per pointer).<br>' +
             '  – <em>Poor Cache Locality:</em> Nodes are scattered across heap memory, causing frequent CPU cache misses.'
      },
      {
        id: 5,
        q: '5. In which condition linked list is better than array and vice versa?',
        category: 'Data Structure Selection',
        ans: '• <strong>When Linked List is Better:</strong><br>' +
             '  1. The total number of elements is unpredictable and changes frequently.<br>' +
             '  2. Frequent insertions and deletions occur at the beginning or middle of the collection.<br>' +
             '  3. Large contiguous blocks of free memory are unavailable (mitigating memory fragmentation).<br><br>' +
             '• <strong>When Array is Better:</strong><br>' +
             '  1. Frequent random access to elements using index <code>arr[i]</code> in <code>O(1)</code> time is required.<br>' +
             '  2. The maximum dataset size is known in advance.<br>' +
             '  3. Memory overhead must be minimized (zero pointer overhead).<br>' +
             '  4. High CPU cache line spatial locality is required for iterative loops.'
      },
      {
        id: 6,
        q: '6. Explain the difference between a singly linked list, a doubly linked list, and a circular linked list.',
        category: 'Linked List Types',
        ans: '• <strong>Singly Linked List (SLL):</strong> Each node contains <code>data</code> and a single pointer <code>next</code> pointing to the subsequent node. Traversal is strictly unidirectional (forward only). Last node points to <code>null</code>.<br><br>' +
             '• <strong>Doubly Linked List (DLL):</strong> Each node contains <code>data</code>, a <code>next</code> pointer, and a <code>prev</code> pointer. Allows bidirectional traversal (forward and backward) and <code>O(1)</code> node deletion given node pointer.<br><br>' +
             '• <strong>Circular Linked List (CLL):</strong> The <code>next</code> pointer of the last node points back to the <code>head</code> node instead of <code>null</code>, forming a closed ring. Ideal for round-robin scheduling algorithms.'
      }
    ]
  },

  // =========================================================================
  // WORKSHEET 3: DEQUES, PRIORITY QUEUES, ASYMPTOTIC NOTATIONS & HASHING
  // =========================================================================
  {
    id: 'ws-dsa-3',
    title: 'Worksheet 3: Deques, Priority Queues, Sorting & Asymptotic Complexity',
    badge: 'Worksheet 3 • Complexities & Hashing',
    summary: '10 Interactive MCQs & 6 Comprehensive Subjective Analyses covering restricted deques, priority queues, infix/prefix conversions, Big-O vs Little-o, and linear probing hash table construction.',
    mcqs: [
      {
        id: 1,
        question: 'Identify the data structure which allows deletions at both ends of the list but insertion at only one end.',
        options: [
          'A. Input restricted deque',
          'B. Output restricted deque',
          'C. Priority queues',
          'D. Stack'
        ],
        answer: 'A. Input restricted deque',
        explanation: 'An Input-Restricted Deque restricts insertion to one end only, while permitting deletions at both ends. (An Output-Restricted Deque restricts deletions to one end while permitting insertions at both ends).'
      },
      {
        id: 2,
        question: 'What happens when an element is removed from an empty queue?',
        options: [
          'A. Element is removed',
          'B. Queue becomes full',
          'C. Queue underflow occurs',
          'D. Queue overflow occurs'
        ],
        answer: 'C. Queue underflow occurs',
        explanation: 'Attempting to dequeue from an empty queue causes Queue Underflow (triggering an exception or error state).'
      },
      {
        id: 3,
        question: 'Minimum number of fields in each node of a doubly linked list is?',
        options: [
          'A. 2',
          'B. 3',
          'C. 4',
          'D. None of above'
        ],
        answer: 'B. 3',
        explanation: 'Each node in a doubly linked list requires at least 3 fields: 1 data field, 1 pointer to the previous node (prev), and 1 pointer to the next node (next).'
      },
      {
        id: 4,
        question: 'Which of the following data structure can’t store non-homogeneous data elements?',
        options: [
          'A. Arrays',
          'B. Records',
          'C. Pointers',
          'D. Stacks'
        ],
        answer: 'A. Arrays',
        explanation: 'Arrays are strictly homogeneous data structures that require all elements to be of the exact same data type and byte size.'
      },
      {
        id: 5,
        question: 'Consider a priority queue implemented using a max-heap. What is the time complexity of inserting an element?',
        options: [
          'A. O(1)',
          'B. O(log n)',
          'C. O(n)',
          'D. O(n log n)'
        ],
        answer: 'B. O(log n)',
        explanation: 'In a binary heap of size n, insertion appends the element at the next available leaf and bubbles up along tree height, taking at most O(log n) swaps.'
      },
      {
        id: 6,
        question: 'What is the difference between a queue and a deque (double-ended queue)?',
        options: [
          'A. Queue allows insertion only at the front.',
          'B. Queue allows insertion only at the rear.',
          'C. Deque allows insertion and deletion at both ends.',
          'D. Deque works only as a stack.'
        ],
        answer: 'C. Deque allows insertion and deletion at both ends.',
        explanation: 'A standard queue allows insertion only at the rear and deletion only at the front. A Deque generalizes this by allowing both insertion and deletion at both front and rear.'
      },
      {
        id: 7,
        question: 'Which of the following data structures is most suitable for implementing a program to check for balanced parentheses?',
        options: [
          'A. List',
          'B. Queue',
          'C. Stack',
          'D. Any of the above'
        ],
        answer: 'C. Stack',
        explanation: 'Checking balanced parentheses requires matching the most recently opened bracket with the next closing bracket, matching the LIFO property of a Stack.'
      },
      {
        id: 8,
        question: 'What is the worst-case time complexity of deleting an element from a queue implemented using an array (using front/rear pointers or circular array)?',
        options: [
          'A. O(1)',
          'B. O(n)',
          'C. O(log n)',
          'D. O(n log n)'
        ],
        answer: 'A. O(1)',
        explanation: 'In a standard array-based queue with front and rear pointers (or circular array), dequeuing merely advances the front index: front = (front + 1) % N in O(1) time.'
      },
      {
        id: 9,
        question: 'The worst-case time required to search a given element in a sorted linked list of length n is',
        options: [
          'A. O(1)',
          'B. O(log2 n)',
          'C. O(n)',
          'D. O(n log2 n)'
        ],
        answer: 'C. O(n)',
        explanation: 'Even though the linked list is sorted, elements cannot be accessed in constant time by index. Binary search cannot be implemented efficiently, requiring sequential linear scan taking O(n) worst-case time.'
      },
      {
        id: 10,
        question: 'A priority queue is implemented using a sorted singly linked list where enqueue inserts in sorted order and dequeue removes the head node. What are the time complexities of enqueue and dequeue, respectively?',
        options: [
          'A. Enqueue: O(1), Dequeue: O(1)',
          'B. Enqueue: O(n), Dequeue: O(1)',
          'C. Enqueue: O(n), Dequeue: O(n)',
          'D. Enqueue: O(1), Dequeue: O(n)'
        ],
        answer: 'B. Enqueue: O(n), Dequeue: O(1)',
        explanation: 'Enqueue must traverse the list to locate the correct sorted insertion point taking O(n) time. Dequeue simply pops the highest-priority head node taking O(1) time.'
      }
    ],
    subjective: [
      {
        id: 1,
        q: '1. What is the prefix and postfix notation of (a + b) * (c + d)?',
        category: 'Expression Conversion',
        ans: 'Given Infix Expression: <code>(a + b) * (c + d)</code><br><br>' +
             '• <strong>Prefix Notation (Polish Notation - Operator before operands):</strong><br>' +
             '  1. Convert sub-expression <code>(a + b)</code> → <code>+ a b</code><br>' +
             '  2. Convert sub-expression <code>(c + d)</code> → <code>+ c d</code><br>' +
             '  3. Apply multiplication: <code>* [+ a b] [+ c d]</code><br>' +
             '  – <strong>Prefix Output:</strong> <code>* + a b + c d</code><br><br>' +
             '• <strong>Postfix Notation (Reverse Polish Notation - Operator after operands):</strong><br>' +
             '  1. Convert sub-expression <code>(a + b)</code> → <code>a b +</code><br>' +
             '  2. Convert sub-expression <code>(c + d)</code> → <code>c d +</code><br>' +
             '  3. Apply multiplication: <code>[a b +] [c d +] *</code><br>' +
             '  – <strong>Postfix Output:</strong> <code>a b + c d + *</code>'
      },
      {
        id: 2,
        q: '2. How insertion sort and selection sorts are different?',
        category: 'Sorting Comparison',
        ans: '<table class="styled-table" style="width:100%; border-collapse:collapse; margin-top:8px;">' +
             '<thead><tr style="background:var(--bg-tertiary);"><th>Feature</th><th>Insertion Sort</th><th>Selection Sort</th></tr></thead>' +
             '<tbody>' +
             '<tr><td><strong>Core Strategy</strong></td><td>Picks the next element and inserts it into its correct relative position in the sorted prefix</td><td>Scans the unsorted suffix to find the absolute minimum and swaps it to the sorted boundary</td></tr>' +
             '<tr><td><strong>Best-Case Time</strong></td><td><strong>O(n)</strong> (when input is already sorted)</td><td><strong>O(n²)</strong> (always scans remaining elements)</td></tr>' +
             '<tr><td><strong>Swaps / Writes</strong></td><td>O(n²) shifts in worst case</td><td>At most <strong>O(n)</strong> swaps (optimal for expensive write memory)</td></tr>' +
             '<tr><td><strong>Stability</strong></td><td><strong>Stable</strong> (preserves relative order)</td><td><strong>Unstable</strong> (swapping can leap over identical keys)</td></tr>' +
             '<tr><td><strong>Adaptive</strong></td><td>Yes, runs in O(n) for nearly sorted data</td><td>No, performs O(n²) comparisons regardless of initial order</td></tr>' +
             '</tbody></table>'
      },
      {
        id: 3,
        q: '3. Define the asymptotic notations O, Ω, and Θ. Provide examples for each.',
        category: 'Asymptotic Analysis',
        ans: '• <strong>1. Big-O Notation (O - Asymptotic Upper Bound):</strong><br>' +
             '  Formal definition: <code>f(n) = O(g(n))</code> if there exist positive constants <code>c</code> and <code>n₀</code> such that <code>0 ≤ f(n) ≤ c · g(n)</code> for all <code>n ≥ n₀</code>.<br>' +
             '  <em>Example:</em> <code>3n + 5 = O(n)</code> (for c = 4, n ≥ 5). Represents the worst-case upper ceiling.<br><br>' +
             '• <strong>2. Big-Omega Notation (Ω - Asymptotic Lower Bound):</strong><br>' +
             '  Formal definition: <code>f(n) = Ω(g(n))</code> if there exist positive constants <code>c</code> and <code>n₀</code> such that <code>0 ≤ c · g(n) ≤ f(n)</code> for all <code>n ≥ n₀</code>.<br>' +
             '  <em>Example:</em> <code>2n² + 3 = Ω(n²)</code> (for c = 1, n ≥ 2). Represents the best-case lower floor.<br><br>' +
             '• <strong>3. Big-Theta Notation (Θ - Asymptotically Tight Bound):</strong><br>' +
             '  Formal definition: <code>f(n) = Θ(g(n))</code> if there exist positive constants <code>c₁, c₂</code> and <code>n₀</code> such that <code>c₁ · g(n) ≤ f(n) ≤ c₂ · g(n)</code> for all <code>n ≥ n₀</code>.<br>' +
             '  <em>Example:</em> <code>5n² + 4n = Θ(n²)</code>. The algorithm grows at the exact same asymptotic rate from above and below.'
      },
      {
        id: 4,
        q: '4. Explain the rate of growth. Which is commonly used with the help of table?',
        category: 'Complexity Growth Rates',
        ans: '<strong>Rate of Growth</strong> measures how execution time or space requirements scale as input size <code>n</code> grows towards infinity.<br><br>' +
             '<strong>Hierarchy of Common Growth Rates (Fastest to Slowest Efficiency):</strong><br>' +
             '<code>O(1) &lt; O(log n) &lt; O(√n) &lt; O(n) &lt; O(n log n) &lt; O(n²) &lt; O(n³) &lt; O(2ⁿ) &lt; O(n!)</code><br><br>' +
             '<table class="styled-table" style="width:100%; border-collapse:collapse; margin-top:8px;">' +
             '<thead><tr style="background:var(--bg-tertiary);"><th>Notation</th><th>Name</th><th>n = 10</th><th>n = 100</th><th>n = 1,000</th></tr></thead>' +
             '<tbody>' +
             '<tr><td><code>O(1)</code></td><td>Constant</td><td>1</td><td>1</td><td>1</td></tr>' +
             '<tr><td><code>O(log n)</code></td><td>Logarithmic</td><td>3</td><td>7</td><td>10</td></tr>' +
             '<tr><td><code>O(n)</code></td><td>Linear</td><td>10</td><td>100</td><td>1,000</td></tr>' +
             '<tr><td><code>O(n log n)</code></td><td>Linearithmic</td><td>33</td><td>664</td><td>9,965</td></tr>' +
             '<tr><td><code>O(n²)</code></td><td>Quadratic</td><td>100</td><td>10,000</td><td>1,000,000</td></tr>' +
             '<tr><td><code>O(2ⁿ)</code></td><td>Exponential</td><td>1,024</td><td>1.27 × 10³⁰</td><td>Infeasible</td></tr>' +
             '</tbody></table>'
      },
      {
        id: 5,
        q: '5. Differentiate between Big-O and Little-o notation with examples.',
        category: 'Asymptotic Analysis',
        ans: '• <strong>Big-O (O) - Non-strict Upper Bound (≤):</strong><br>' +
             '  Allows the bound to be tight or loose. <code>f(n) ≤ c · g(n)</code> for all <code>n ≥ n₀</code>.<br>' +
             '  <em>Example:</em> <code>2n = O(n)</code> is valid (tight bound). <code>2n = O(n²)</code> is also mathematically valid (loose bound).<br><br>' +
             '• <strong>Little-o (o) - Strict Upper Bound (<):</strong><br>' +
             '  The bound must be strictly loose and cannot be asymptotically tight. Formally: <code>lim (n→∞) [f(n) / g(n)] = 0</code>.<br>' +
             '  <em>Example:</em> <code>2n = o(n²)</code> is TRUE because <code>lim (2n / n²) = lim (2/n) = 0</code>.<br>' +
             '  <em>Counter-example:</em> <code>2n = o(n)</code> is <strong>FALSE</strong> because <code>lim (2n / n) = 2 ≠ 0</code>.'
      },
      {
        id: 6,
        q: '6. A hash table of size 7 uses linear probing to resolve collisions. Insert the following keys: 10, 20, 15, 7, 14. Use the hash function: h(k) = k mod 7. Show the final hash table after all insertions.',
        category: 'Hash Table Probing',
        ans: '<strong>Hash Table Capacity M = 7 (Slots 0 to 6). Hash Function: h(k) = k mod 7.</strong><br><br>' +
             '<strong>Step-by-Step Insertions:</strong><br>' +
             '1. <strong>Key 10:</strong> <code>h(10) = 10 % 7 = 3</code>. Slot 3 is empty. Store 10 at <strong>Index 3</strong>.<br>' +
             '2. <strong>Key 20:</strong> <code>h(20) = 20 % 7 = 6</code>. Slot 6 is empty. Store 20 at <strong>Index 6</strong>.<br>' +
             '3. <strong>Key 15:</strong> <code>h(15) = 15 % 7 = 1</code>. Slot 1 is empty. Store 15 at <strong>Index 1</strong>.<br>' +
             '4. <strong>Key 7:</strong> <code>h(7) = 7 % 7 = 0</code>. Slot 0 is empty. Store 7 at <strong>Index 0</strong>.<br>' +
             '5. <strong>Key 14:</strong> <code>h(14) = 14 % 7 = 0</code>. Collision at Slot 0!<br>' +
             '   – Linear Probe to <code>(0 + 1) % 7 = 1</code>: Slot 1 is occupied by 15.<br>' +
             '   – Linear Probe to <code>(0 + 2) % 7 = 2</code>: Slot 2 is empty! Store 14 at <strong>Index 2</strong>.<br><br>' +
             '<strong>Final Hash Table State:</strong><br>' +
             '<table class="styled-table" style="width:100%; border-collapse:collapse; margin-top:8px;">' +
             '<thead><tr style="background:var(--bg-tertiary);"><th>Index</th><th>Key Stored</th><th>Status</th></tr></thead>' +
             '<tbody>' +
             '<tr><td><strong>[0]</strong></td><td><code>7</code></td><td>Directly placed (7 % 7 = 0)</td></tr>' +
             '<tr><td><strong>[1]</strong></td><td><code>15</code></td><td>Directly placed (15 % 7 = 1)</td></tr>' +
             '<tr><td><strong>[2]</strong></td><td><code>14</code></td><td>Collision resolved via linear probe (0 → 1 → 2)</td></tr>' +
             '<tr><td><strong>[3]</strong></td><td><code>10</code></td><td>Directly placed (10 % 7 = 3)</td></tr>' +
             '<tr><td><strong>[4]</strong></td><td><em>Empty</em></td><td>null</td></tr>' +
             '<tr><td><strong>[5]</strong></td><td><em>Empty</em></td><td>null</td></tr>' +
             '<tr><td><strong>[6]</strong></td><td><code>20</code></td><td>Directly placed (20 % 7 = 6)</td></tr>' +
             '</tbody></table>'
      }
    ]
  },

  // =========================================================================
  // WORKSHEET 4: LINKED LISTS, RPN, RECURSION & BINARY TREES
  // =========================================================================
  {
    id: 'ws-dsa-4',
    title: 'Worksheet 4: Linked Lists, Queue via Stacks, RPN, Tree Classifications & AVL',
    badge: 'Worksheet 4 • Lists, Trees & AVL',
    summary: '10 Interactive MCQs & 6 Comprehensive Subjective Analyses covering linked list operations, RPN expression evaluation, pointers in DLL, merge sort, Tower of Hanoi recursion, binary tree taxonomy, and BST vs AVL comparisons.',
    mcqs: [
      {
        id: 1,
        question: 'How many stacks are needed to implement a queue if no other data structure is available?',
        options: [
          'A. 1',
          'B. 2',
          'C. 3',
          'D. 4'
        ],
        answer: 'B. 2',
        explanation: 'Two stacks are required to implement a queue: one stack (inbox) accepts new pushes, and the second stack (outbox) reverses the elements to deliver FIFO dequeue behavior.'
      },
      {
        id: 2,
        question: 'Which of the following statements about linked lists is true?',
        options: [
          'A. Elements are stored in contiguous memory locations.',
          'B. Insertion and deletion are costly operations.',
          'C. Linked lists allow dynamic memory allocation.',
          'D. Accessing elements is faster than arrays.'
        ],
        answer: 'C. Linked lists allow dynamic memory allocation.',
        explanation: 'Linked lists dynamically allocate memory for nodes on the heap as new items are added, avoiding fixed-size limits.'
      },
      {
        id: 3,
        question: 'Which of the following operations is not efficient in a singly linked list?',
        options: [
          'A. Insertion at the head',
          'B. Insertion at the tail (with tail pointer)',
          'C. Searching for an arbitrary element',
          'D. Traversing the list'
        ],
        answer: 'C. Searching for an arbitrary element',
        explanation: 'Searching requires sequential traversal from the head node, taking O(n) linear time in the worst case.'
      },
      {
        id: 4,
        question: 'Which of the following is the most suitable data structure for a web browser’s forward and backward navigation?',
        options: [
          'A. Queue',
          'B. Stack',
          'C. Doubly Linked List',
          'D. Binary Tree'
        ],
        answer: 'C. Doubly Linked List',
        explanation: 'A Doubly Linked List natively supports forward and backward navigation via next and prev pointers. (Alternatively, two stacks — backStack and forwardStack — can also model this).'
      },
      {
        id: 5,
        question: 'Which of the following is true about linked lists when compared to arrays?',
        options: [
          'A. Linked lists have fixed size.',
          'B. Arrays require less memory than linked lists.',
          'C. Linked lists provide faster element access than arrays.',
          'D. Linked lists allow efficient insertion and deletion of elements.'
        ],
        answer: 'D. Linked lists allow efficient insertion and deletion of elements.',
        explanation: 'Inserting or deleting a node in a linked list given a pointer takes O(1) time without shifting elements, whereas array insertions/deletions require shifting O(n) elements.'
      },
      {
        id: 6,
        question: 'Which of the following data structures is most suitable for evaluating an expression in Reverse Polish Notation (RPN)?',
        options: [
          'A. List',
          'B. Queue',
          'C. Stack',
          'D. Any of the above'
        ],
        answer: 'C. Stack',
        explanation: 'RPN (postfix notation) is evaluated using a stack: operands are pushed onto the stack, and operators pop the top two operands, evaluate the result, and push it back.'
      },
      {
        id: 7,
        question: 'How many pointers need to be updated when inserting a node in the middle of a doubly linked list?',
        options: [
          'A. 1',
          'B. 2',
          'C. 3',
          'D. 4'
        ],
        answer: 'D. 4',
        explanation: 'Inserting newNode between node A and node B requires updating 4 pointers: 1. newNode.next = B, 2. newNode.prev = A, 3. A.next = newNode, 4. B.prev = newNode.'
      },
      {
        id: 8,
        question: 'The time complexity of linear search algorithm over an array of n elements is',
        options: [
          'A. O(log2 n)',
          'B. O(n)',
          'C. O(n log2 n)',
          'D. O(n²)'
        ],
        answer: 'B. O(n)',
        explanation: 'Linear search examines array elements one by one from index 0 to n-1, taking O(n) time in the worst case.'
      },
      {
        id: 9,
        question: 'Which of the following sorting algorithms does not have a worst case running time of O(n²)?',
        options: [
          'A. Insertion sort',
          'B. Merge sort',
          'C. Quick sort',
          'D. Bubble sort'
        ],
        answer: 'B. Merge sort',
        explanation: 'Merge sort uses Divide & Conquer to guarantee O(n log n) running time across all best, average, and worst cases.'
      },
      {
        id: 10,
        question: 'Consider a linked list with n nodes. What is the space complexity of the list if each node contains one data field and one pointer field?',
        options: [
          'A. O(n)',
          'B. O(n²)',
          'C. O(log n)',
          'D. O(1)'
        ],
        answer: 'A. O(n)',
        explanation: 'Each of the n nodes consumes a constant amount of memory (data + pointer = c bytes), resulting in total space proportional to n: O(n).'
      }
    ],
    subjective: [
      {
        id: 1,
        q: '1. What is hashing? Explain different hashing techniques in detail.',
        category: 'Hashing Techniques',
        ans: '• <strong>Definition:</strong> Hashing is a technique that transforms an arbitrary key into a fixed-size integer index using a mathematical <strong>Hash Function</strong>: <code>index = hash(key) % table_size</code>.<br><br>' +
             '• <strong>Common Hash Function Techniques:</strong><br>' +
             '  1. <em>Division Method:</em> <code>h(k) = k mod m</code> (where <code>m</code> is a prime number not close to a power of 2).<br>' +
             '  2. <em>Multiplication Method:</em> <code>h(k) = floor(m * (k * A mod 1))</code> where <code>A ≈ (√5 - 1)/2 ≈ 0.618033</code> (Knuth’s Golden Ratio method).<br>' +
             '  3. <em>Mid-Square Method:</em> Square the key (<code>k²</code>) and extract the middle <code>r</code> digits.<br>' +
             '  4. <em>Folding Method:</em> Divide the key into equal-sized chunks and sum them together.'
      },
      {
        id: 2,
        q: '2. Differentiate between chaining and open addressing in hash tables.',
        category: 'Collision Resolution',
        ans: '<table class="styled-table" style="width:100%; border-collapse:collapse; margin-top:8px;">' +
             '<thead><tr style="background:var(--bg-tertiary);"><th>Feature</th><th>Separate Chaining (Open Hashing)</th><th>Open Addressing (Closed Hashing)</th></tr></thead>' +
             '<tbody>' +
             '<tr><td><strong>Storage Location</strong></td><td>Collided elements stored in external linked lists outside primary array</td><td>All keys stored directly within primary bucket array</td></tr>' +
             '<tr><td><strong>Load Factor (α)</strong></td><td>Can exceed 1.0 (<code>α &gt; 1</code> is acceptable)</td><td>Must strictly remain below 1.0 (typically <code>α ≤ 0.75</code>)</td></tr>' +
             '<tr><td><strong>Deletion</strong></td><td>Straightforward node unlinking in O(1)</td><td>Complex; requires placing a special <code>DELETED</code> tombstone marker</td></tr>' +
             '<tr><td><strong>Clustering</strong></td><td>No clustering; buckets are isolated</td><td>Suffers from Primary/Secondary clustering with linear/quadratic probing</td></tr>' +
             '<tr><td><strong>Cache Performance</strong></td><td>Poor cache locality (pointer jumping)</td><td>High cache locality (contiguous memory probing)</td></tr>' +
             '</tbody></table>'
      },
      {
        id: 3,
        q: '3. What is Tower of Hanoi problem? Write the recursive solution.',
        category: 'Recursion Implementation',
        ans: '<strong>Tower of Hanoi Recurrence:</strong> <code>T(n) = 2T(n - 1) + 1 = 2ⁿ - 1</code> moves in <code>O(2ⁿ)</code> time.<br><br>' +
             '<strong>Java Recursive Solution:</strong><br>' +
             '<pre><code>public class TowerOfHanoi {\n' +
             '    public static void solveHanoi(int n, char fromPeg, char toPeg, char auxPeg) {\n' +
             '        if (n == 1) {\n' +
             '            System.out.println("Move disk 1 from " + fromPeg + " to " + toPeg);\n' +
             '            return;\n' +
             '        }\n' +
             '        // Step 1: Move top n-1 disks from Source to Auxiliary using Destination\n' +
             '        solveHanoi(n - 1, fromPeg, auxPeg, toPeg);\n' +
             '        // Step 2: Move the nth disk directly from Source to Destination\n' +
             '        System.out.println("Move disk " + n + " from " + fromPeg + " to " + toPeg);\n' +
             '        // Step 3: Move n-1 disks from Auxiliary to Destination using Source\n' +
             '        solveHanoi(n - 1, auxPeg, toPeg, fromPeg);\n' +
             '    }\n' +
             '}</code></pre>'
      },
      {
        id: 4,
        q: '4. Write a recursive function to compute the factorial of a number.',
        category: 'Recursion Implementation',
        ans: '<strong>Mathematical Definition:</strong><br>' +
             '<code>0! = 1</code> (Base Case)<br>' +
             '<code>n! = n × (n - 1)!</code> for <code>n &gt; 0</code> (Recursive Step)<br><br>' +
             '<strong>Java Implementation:</strong><br>' +
             '<pre><code>public class Factorial {\n' +
             '    public static long factorial(int n) {\n' +
             '        if (n < 0) throw new IllegalArgumentException("Number must be non-negative");\n' +
             '        if (n == 0 || n == 1) return 1;\n' +
             '        return n * factorial(n - 1);\n' +
             '    }\n' +
             '}</code></pre>' +
             '• <strong>Time Complexity:</strong> <code>O(n)</code> (makes exactly n recursive calls).<br>' +
             '• <strong>Auxiliary Space:</strong> <code>O(n)</code> (depth of call stack frames).'
      },
      {
        id: 5,
        q: '5. Define and differentiate between Full Binary Tree, Complete Binary Tree, and Perfect Binary Tree.',
        category: 'Binary Tree Types',
        ans: '• <strong>(a) Full (Strict) Binary Tree:</strong> Every node has either <strong>0 or 2 children</strong>. No node has only 1 child.<br><br>' +
             '• <strong>(b) Complete Binary Tree:</strong> All levels are completely filled except possibly the deepest level, which is filled from <strong>left to right</strong> without gaps. (This is the structural basis for Binary Heaps).<br><br>' +
             '• <strong>(c) Perfect Binary Tree:</strong> All interior nodes have exactly 2 children, and all leaf nodes are at the <strong>exact same depth/level</strong>. A perfect binary tree of height <code>h</code> contains exactly <code>2^(h+1) - 1</code> nodes.<br><br>' +
             '<em>Hierarchy:</em> Every Perfect Binary Tree is both Full and Complete, but the reverse is not necessarily true.'
      },
      {
        id: 6,
        q: '6. What are the differences between BST and AVL tree?',
        category: 'Tree Balance Comparison',
        ans: '<table class="styled-table" style="width:100%; border-collapse:collapse; margin-top:8px;">' +
             '<thead><tr style="background:var(--bg-tertiary);"><th>Feature</th><th>Standard Binary Search Tree (BST)</th><th>AVL Tree (Adelson-Velsky & Landis)</th></tr></thead>' +
             '<tbody>' +
             '<tr><td><strong>Balance Guarantee</strong></td><td>No balance guarantee; can skew into a linear chain</td><td>Strictly self-balancing; Balance Factor ∈ {-1, 0, +1}</td></tr>' +
             '<tr><td><strong>Height (Worst Case)</strong></td><td><code>O(n)</code> (degenerate tree)</td><td>Strictly bounded by <strong>O(log₂ n)</strong> (height ≤ 1.44 log₂ n)</td></tr>' +
             '<tr><td><strong>Search Time (Worst Case)</strong></td><td><code>O(n)</code></td><td><strong>O(log n)</strong> guaranteed</td></tr>' +
             '<tr><td><strong>Balancing Mechanism</strong></td><td>None</td><td>Tree Rotations (LL, RR, LR, RL) triggered upon mutation</td></tr>' +
             '<tr><td><strong>Insertion/Deletion Overhead</strong></td><td>Simple pointer insertion in O(h)</td><td>Requires calculating balance factors and executing rotations</td></tr>' +
             '</tbody></table>'
      }
    ]
  },

  // =========================================================================
  // WORKSHEET 5: BST TRAVERSALS, POSTORDER, SORTING PASSES & BFS
  // =========================================================================
  {
    id: 'ws-dsa-5',
    title: 'Worksheet 5: BST Traversals, Tree Reconstruction, Sorting Passes & BFS',
    badge: 'Worksheet 5 • Advanced Trees & Graphs',
    summary: '10 Interactive MCQs & 6 Comprehensive Subjective Analyses covering preorder to postorder conversion, queue performance, postfix evaluation, sorting pass recognition (Selection, Insertion, Bubble), tree array representation, and BFS step-by-step graph traversal.',
    mcqs: [
      {
        id: 1,
        question: 'The preorder traversal of a binary search tree is 15, 10, 12, 11, 20, 18, 16, 19. Which one of the following is the postorder traversal of the tree?',
        options: [
          'A. 10, 11, 12, 15, 16, 18, 19, 20',
          'B. 11, 12, 10, 16, 19, 18, 20, 15',
          'C. 20, 19, 18, 16, 15, 12, 11, 10',
          'D. 19, 16, 18, 20, 11, 12, 10, 15'
        ],
        answer: 'B. 11, 12, 10, 16, 19, 18, 20, 15',
        explanation: 'Root is 15. Left subtree (keys < 15): [10, 12, 11]. Right subtree (keys > 15): [20, 18, 16, 19]. Postorder of left: 11, 12, 10. Postorder of right: 16, 19, 18, 20. Appending root gives: 11, 12, 10, 16, 19, 18, 20, 15.'
      },
      {
        id: 2,
        question: 'A queue is implemented using an array such that ENQUEUE and DEQUEUE operations are performed efficiently. Which one of the following statements is CORRECT (n refers to the number of items in the queue)?',
        options: [
          'A. Both operations can be performed in O(1) time.',
          'B. At most one operation can be performed in O(1) time, but the worst-case time for the other operation will be Ω(n).',
          'C. The worst-case time complexity for both operations will be Ω(n).',
          'D. Worst-case time complexity for both operations will be Ω(log n).'
        ],
        answer: 'A. Both operations can be performed in O(1) time.',
        explanation: 'By using a circular array implementation with front and rear index pointers, both ENQUEUE and DEQUEUE operations execute in O(1) constant time without requiring any element shifting.'
      },
      {
        id: 3,
        question: 'The result of evaluating the postfix expression 10 5 + 60 6 / * 8 - is',
        options: [
          'A. 284',
          'B. 213',
          'C. 142',
          'D. 71'
        ],
        answer: 'C. 142',
        explanation: '1. 10 5 + = 15\n2. 60 6 / = 10\n3. 15 10 * = 150\n4. 150 8 - = 142. Final answer = 142.'
      },
      {
        id: 4,
        question: 'A program P reads in 500 integers in the range [0, 100], representing the scores of 500 students. It then prints the frequency of each score above 50. What would be the best way for P to store the frequencies?',
        options: [
          'A. An array of 50 numbers',
          'B. An array of 100 numbers',
          'C. An array of 500 numbers',
          'D. A dynamically allocated array of 550 numbers'
        ],
        answer: 'A. An array of 50 numbers',
        explanation: 'The scores strictly above 50 range from 51 to 100 (exactly 50 distinct integer score buckets). Storing them in a direct-mapped frequency array of size 50 (mapping score S to index S - 51) is the most space-efficient technique.'
      },
      {
        id: 5,
        question: 'Consider the statements:\n(i) First-in-first-out types of computations are efficiently supported by STACKS.\n(ii) Implementing LISTS on linked lists is more efficient than on an array for basic LIST operations.\n(iii) Implementing QUEUES on a circular array is more efficient than on a linear array with two indices.\n(iv) Last-in-first-out computations are efficiently supported by QUEUES.\nWhich of the following statements is/are true?',
        options: [
          'A. (ii) and (iii) are true',
          'B. (i) and (ii) are true',
          'C. (iii) and (iv) are true',
          'D. (ii) and (iv) are true'
        ],
        answer: 'A. (ii) and (iii) are true',
        explanation: 'Statement (i) is false (stacks are LIFO). Statement (iv) is false (queues are FIFO). Statement (iii) is true (circular array reuses freed slots without shift). Statement (ii) is true for dynamic growth and arbitrary position insertion/deletion.'
      },
      {
        id: 6,
        question: 'The postorder traversal of a binary tree is 8, 9, 6, 7, 4, 5, 2, 3, 1. The inorder traversal is 8, 6, 9, 4, 7, 2, 5, 1, 3. The height of the tree (length of longest root-to-leaf path in edges) is:',
        options: [
          'A. 5',
          'B. 4',
          'C. 10',
          'D. 1'
        ],
        answer: 'B. 4',
        explanation: 'Root is 1. Left subtree contains [8, 6, 9, 4, 7, 2, 5] with root 2, which has left child 4, left child 6, and left child 8 (or 9). The longest path has 4 edges (5 nodes): 1 -> 2 -> 4 -> 6 -> 8. Height = 4.'
      },
      {
        id: 7,
        question: 'Given pass outputs: 22, 14, 56, 7, 25, 8\nPass 1: 7, 14, 56, 22, 25, 8\nPass 2: 7, 8, 56, 22, 25, 14\nChoose the name of the associated sorting algorithm:',
        options: [
          'A. Selection sort',
          'B. Insertion sort',
          'C. Bubble Sort',
          'D. Merge Sort'
        ],
        answer: 'A. Selection sort',
        explanation: 'In Pass 1, the smallest element in the entire array (7) is selected and swapped to index 0. In Pass 2, the next smallest element (8) is selected and swapped to index 1. This is the characteristic behavior of Selection Sort.'
      },
      {
        id: 8,
        question: 'Given pass outputs: 22, 14, 56, 7, 25, 8\nPass 1: 14, 22, 56, 7, 25, 8\nPass 2: 14, 22, 56, 7, 25, 8\nPass 3: 7, 14, 22, 56, 25, 8\nChoose the name of the associated sorting algorithm:',
        options: [
          'A. Selection sort',
          'B. Insertion sort',
          'C. Bubble Sort',
          'D. Merge Sort'
        ],
        answer: 'B. Insertion sort',
        explanation: 'Pass 1 inserts 14 before 22. Pass 2 leaves [14, 22, 56] sorted. Pass 3 takes 7 and inserts it at the beginning. This incrementally maintains a sorted left subarray, which is Insertion Sort.'
      },
      {
        id: 9,
        question: 'Given pass outputs: 22, 14, 56, 7, 25, 8\nPass 1: 14, 22, 7, 25, 8, 56\nPass 2: 14, 7, 22, 8, 25, 56\nChoose the name of the associated sorting algorithm:',
        options: [
          'A. Selection sort',
          'B. Insertion sort',
          'C. Bubble Sort',
          'D. Merge Sort'
        ],
        answer: 'C. Bubble Sort',
        explanation: 'In Pass 1, adjacent comparisons bubble the maximum element (56) to the last position. In Pass 2, the next maximum element (25) bubbles to the second-to-last position. This is Bubble Sort.'
      },
      {
        id: 10,
        question: 'In Figure 5.1, a binary tree has root 7 at level 0; children 11 and 2 at level 1; children of 11 are 7 and 1; children of 2 are 11 and 9 at level 2. What is its array representation?',
        options: [
          'A. [7, 11, 2, 7, 1, 11, 9]',
          'B. [11, 7, 2, 1, 7, 9, 11]',
          'C. [7, 2, 11, 9, 11, 1, 7]',
          'D. Any of the above'
        ],
        answer: 'A. [7, 11, 2, 7, 1, 11, 9]',
        explanation: 'Level-by-level array indexing: Level 0: [7] (index 0). Level 1: [11, 2] (indices 1, 2). Level 2: [7, 1, 11, 9] (indices 3, 4, 5, 6). The resulting complete array representation is: [7, 11, 2, 7, 1, 11, 9].'
      }
    ],
    subjective: [
      {
        id: 1,
        q: '1. What is the maximum number of nodes at level i of a binary tree?',
        category: 'Binary Tree Formulas',
        ans: '• <strong>Maximum Nodes at Level i:</strong> <code>2ⁱ</code> (assuming root is at level 0).<br>' +
             '  – Level 0 (Root): <code>2⁰ = 1</code> node.<br>' +
             '  – Level 1: <code>2¹ = 2</code> nodes.<br>' +
             '  – Level 2: <code>2² = 4</code> nodes.<br>' +
             '  – Level i: <code>2ⁱ</code> nodes.<br><br>' +
             '• <strong>Total Maximum Nodes in a Binary Tree of Height h:</strong><br>' +
             '  <code>N_max = ∑(i=0 to h) 2ⁱ = 2^(h + 1) - 1</code> nodes (a Perfect Binary Tree).'
      },
      {
        id: 2,
        q: '2. Draw a BST for the following key values: 15, 10, 20, 8, 12, 25, 17, 11.',
        category: 'BST Construction',
        ans: '<strong>Step-by-Step BST Insertion Trace:</strong><br>' +
             '• Insert 15: Root.<br>' +
             '• Insert 10: 10 < 15 → Left child of 15.<br>' +
             '• Insert 20: 20 > 15 → Right child of 15.<br>' +
             '• Insert 8: 8 < 15, 8 < 10 → Left child of 10.<br>' +
             '• Insert 12: 12 < 15, 12 > 10 → Right child of 10.<br>' +
             '• Insert 25: 25 > 15, 25 > 20 → Right child of 20.<br>' +
             '• Insert 17: 17 > 15, 17 < 20 → Left child of 20.<br>' +
             '• Insert 11: 11 < 15, 11 > 10, 11 < 12 → Left child of 12.<br><br>' +
             '<strong>Visual Tree Structure:</strong><br>' +
             '<pre><code>' +
             '          15\n' +
             '        /    \\\n' +
             '      10      20\n' +
             '     /  \\    /  \\\n' +
             '    8   12  17   25\n' +
             '       /\n' +
             '      11\n' +
             '</code></pre>' +
             '• <em>Inorder Traversal Verification:</em> 8, 10, 11, 12, 15, 17, 20, 25 (perfectly sorted!).'
      },
      {
        id: 3,
        q: '3. What are records? Explain record structure with one example.',
        category: 'Record Data Structure',
        ans: '• <strong>Definition:</strong> A <strong>Record</strong> (also called a <code>struct</code> in C/C++, <code>class</code>/POJO in Java, or dataclass in Python) is a composite, heterogeneous data structure that groups multiple related fields of <em>different data types</em> into a single logical entity.<br><br>' +
             '• <strong>vs Array:</strong> An array stores <em>homogeneous</em> elements accessed by numeric index. A record stores <em>heterogeneous</em> attributes accessed by descriptive field names.<br><br>' +
             '• <strong>C++ Record Example:</strong><br>' +
             '<pre><code>struct Employee {\n' +
             '    int empId;          // Integer (4 bytes)\n' +
             '    char name[50];      // String (50 bytes)\n' +
             '    double salary;      // Floating point (8 bytes)\n' +
             '    char department[20];// String (20 bytes)\n' +
             '};\n\n' +
             'Employee e1 = {101, "Alice Smith", 85000.50, "Engineering"};\n' +
             'cout << e1.name << " earns $" << e1.salary;</code></pre>'
      },
      {
        id: 4,
        q: '4. Create a BST tree with the following data by inserting the elements in order: 200, 150, 350, 100, 70, 110, 250, 500, 400, 550, 450. Then delete nodes sequentially: 150, 500, 450, 200, 110.',
        category: 'BST Insertion & Deletion',
        ans: '<strong>Part 1: Initial BST Construction:</strong><br>' +
             '<pre><code>' +
             '                 200\n' +
             '               /     \\\n' +
             '             150      350\n' +
             '            /        /   \\\n' +
             '          100      250    500\n' +
             '          /  \\           /   \\\n' +
             '        70   110       400    550\n' +
             '                         \\\n' +
             '                         450\n' +
             '</code></pre>' +
             '<strong>Part 2: Sequential Deletions:</strong><br>' +
             '• <strong>1. Delete 150:</strong> Node 150 has only one child (100). Replace 150 with its left child 100 directly under 200.<br>' +
             '• <strong>2. Delete 500:</strong> Node 500 has two children (400 and 550). Inorder successor is 550. Replace 500 with 550.<br>' +
             '• <strong>3. Delete 450:</strong> Node 450 is a leaf child of 400. Remove directly.<br>' +
             '• <strong>4. Delete 200 (Root):</strong> Root has two children (100 and 350). Inorder successor is 250 (smallest in right subtree). Replace 200 with 250, then unlink 250 from 350.<br>' +
             '• <strong>5. Delete 110:</strong> Node 110 is a leaf under 100. Remove directly.<br><br>' +
             '<strong>Final BST After All Deletions:</strong><br>' +
             '<pre><code>' +
             '                 250\n' +
             '               /     \\\n' +
             '             100      350\n' +
             '            /        /   \\\n' +
             '          70       null   550\n' +
             '                         /\n' +
             '                       400\n' +
             '</code></pre>'
      },
      {
        id: 5,
        q: '5. Consider the graph with starting node r. Find out its Breadth-First Traversal and show each step.',
        category: 'Graph BFS Traversal',
        ans: '<strong>Breadth-First Search (BFS) Algorithm Execution:</strong><br>' +
             'Let graph vertices be: <code>r</code> (start), with neighbors <code>s</code> and <code>v</code>. Vertex <code>s</code> connects to <code>w</code>; vertex <code>w</code> connects to <code>t</code> and <code>x</code>; vertex <code>t</code> connects to <code>u</code>; vertex <code>x</code> connects to <code>y</code>.<br><br>' +
             '<strong>Step-by-Step Queue Trace:</strong><br>' +
             '• <strong>Initialization:</strong> Visited = {r}. Queue = <code>[r]</code>. BFS Order = <code>[]</code>.<br>' +
             '• <strong>Step 1:</strong> Dequeue <code>r</code>. BFS Order = <code>[r]</code>. Enqueue unvisited neighbors <code>s</code> and <code>v</code>. Queue = <code>[s, v]</code>.<br>' +
             '• <strong>Step 2:</strong> Dequeue <code>s</code>. BFS Order = <code>[r, s]</code>. Enqueue unvisited neighbor <code>w</code>. Queue = <code>[v, w]</code>.<br>' +
             '• <strong>Step 3:</strong> Dequeue <code>v</code>. BFS Order = <code>[r, s, v]</code>. No new unvisited neighbors. Queue = <code>[w]</code>.<br>' +
             '• <strong>Step 4:</strong> Dequeue <code>w</code>. BFS Order = <code>[r, s, v, w]</code>. Enqueue unvisited neighbors <code>t</code> and <code>x</code>. Queue = <code>[t, x]</code>.<br>' +
             '• <strong>Step 5:</strong> Dequeue <code>t</code>. BFS Order = <code>[r, s, v, w, t]</code>. Enqueue unvisited neighbor <code>u</code>. Queue = <code>[x, u]</code>.<br>' +
             '• <strong>Step 6:</strong> Dequeue <code>x</code>. BFS Order = <code>[r, s, v, w, t, x]</code>. Enqueue unvisited neighbor <code>y</code>. Queue = <code>[u, y]</code>.<br>' +
             '• <strong>Step 7:</strong> Dequeue <code>u</code>. BFS Order = <code>[r, s, v, w, t, x, u]</code>. Queue = <code>[y]</code>.<br>' +
             '• <strong>Step 8:</strong> Dequeue <code>y</code>. BFS Order = <code>[r, s, v, w, t, x, u, y]</code>. Queue = <code>[]</code> (Empty).<br><br>' +
             '<strong>Final BFS Traversal Output:</strong> <code>r -> s -> v -> w -> t -> x -> u -> y</code>.'
      },
      {
        id: 6,
        q: '6. What do you mean by collision in hashing? Explain different techniques of collision resolution.',
        category: 'Hashing Collision Resolution',
        ans: '• <strong>Definition:</strong> A <strong>Collision</strong> occurs when two distinct keys produce the exact same bucket index through the hash function: <code>h(k₁) == h(k₂)</code> for <code>k₁ ≠ k₂</code>.<br><br>' +
             '• <strong>1. Separate Chaining (Open Hashing):</strong><br>' +
             '  Each bucket slot points to an auxiliary linked list (or balanced tree in Java 8+). Colliding elements are simply appended to the list at that slot.<br><br>' +
             '• <strong>2. Open Addressing (Closed Hashing):</strong><br>' +
             '  All elements reside directly within the hash table array. When a collision occurs, subsequent slots are probed according to an algorithm:<br>' +
             '  – <em>Linear Probing:</em> <code>h(k, i) = (h(k) + i) mod m</code> (Step size is 1; prone to primary clustering).<br>' +
             '  – <em>Quadratic Probing:</em> <code>h(k, i) = (h(k) + c₁·i + c₂·i²) mod m</code> (Reduces primary clustering).<br>' +
             '  – <em>Double Hashing:</em> <code>h(k, i) = (h₁(k) + i · h₂(k)) mod m</code> (Step size governed by second hash function; best dispersion).'
      }
    ]
  }
];
