/**
 * DSA 2: 90-Day / 150 LeetCode Practice Roadmap (NeetCode 150 / Blind 75 Master Curriculum)
 * Contains all 150 curated problems across 18 topics with day tracking, review checkpoints,
 * difficulties, and direct LeetCode practice links.
 */
const DSA2_ROADMAP_DATA = [
  // Day 1
  { id: 1, day: 1, topic: "Arrays", title: "Contains Duplicate", difficulty: "Easy", url: "https://leetcode.com/problems/contains-duplicate/", pattern: "Hash Map / Set" },
  { id: 2, day: 1, topic: "Arrays", title: "Product of Array Except Self", difficulty: "Medium", url: "https://leetcode.com/problems/product-of-array-except-self/", pattern: "Prefix Sum / Array" },
  { id: 3, day: 1, topic: "Arrays", title: "Valid Sudoku", difficulty: "Medium", url: "https://leetcode.com/problems/valid-sudoku/", pattern: "Hash Set / Matrix" },

  // Day 2
  { id: 4, day: 2, topic: "Hashing", title: "Valid Anagram", difficulty: "Easy", url: "https://leetcode.com/problems/valid-anagram/", pattern: "Hash Map / Frequency" },
  { id: 5, day: 2, topic: "Hashing", title: "Two Sum", difficulty: "Easy", url: "https://leetcode.com/problems/two-sum/", pattern: "Hash Map (Complement)" },
  { id: 6, day: 2, topic: "Hashing", title: "Group Anagrams", difficulty: "Medium", url: "https://leetcode.com/problems/group-anagrams/", pattern: "Hash Map / Sorting" },

  // Day 3
  { id: 7, day: 3, topic: "Hashing", title: "Top K Frequent Elements", difficulty: "Medium", url: "https://leetcode.com/problems/top-k-frequent-elements/", pattern: "Bucket Sort / Heap" },
  { id: 8, day: 3, topic: "Hashing", title: "Longest Consecutive Sequence", difficulty: "Medium", url: "https://leetcode.com/problems/longest-consecutive-sequence/", pattern: "Hash Set" },

  // Day 4
  { id: 9, day: 4, topic: "Hashing", title: "Subarray Sum Equals K", difficulty: "Medium", url: "https://leetcode.com/problems/subarray-sum-equals-k/", pattern: "Prefix Sum + Hash Map" },

  // Day 5
  { id: 10, day: 5, topic: "Two Pointers", title: "Valid Palindrome", difficulty: "Easy", url: "https://leetcode.com/problems/valid-palindrome/", pattern: "Two Pointers (Both Ends)" },
  { id: 11, day: 5, topic: "Two Pointers", title: "Two Sum II - Input Array Is Sorted", difficulty: "Medium", url: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/", pattern: "Two Pointers (Sorted)" },

  // Day 6
  { id: 12, day: 6, topic: "Two Pointers", title: "Sort Colors", difficulty: "Medium", url: "https://leetcode.com/problems/sort-colors/", pattern: "Dutch National Flag (3 Pointers)" },
  { id: 13, day: 6, topic: "Two Pointers", title: "3Sum", difficulty: "Medium", url: "https://leetcode.com/problems/3sum/", pattern: "Sort + Two Pointers" },

  // Day 7 (Review)
  { id: "rev-7", day: 7, topic: "Review", title: "Review Day: Redo Days 1–6", difficulty: "Review", isReview: true, note: "Consolidate Arrays, Hashing, and Two Pointers foundations." },

  // Day 8
  { id: 14, day: 8, topic: "Two Pointers", title: "Container With Most Water", difficulty: "Medium", url: "https://leetcode.com/problems/container-with-most-water/", pattern: "Two Pointers (Greedy Inward)" },
  { id: 15, day: 8, topic: "Two Pointers", title: "Trapping Rain Water", difficulty: "Hard", url: "https://leetcode.com/problems/trapping-rain-water/", pattern: "Two Pointers (Left/Right Max)" },

  // Day 9
  { id: 16, day: 9, topic: "Sliding Window", title: "Best Time to Buy and Sell Stock", difficulty: "Easy", url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/", pattern: "Sliding Window / Greedy" },
  { id: 17, day: 9, topic: "Sliding Window", title: "Longest Substring Without Repeating Characters", difficulty: "Medium", url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/", pattern: "Dynamic Window + Hash Map" },

  // Day 10
  { id: 18, day: 10, topic: "Sliding Window", title: "Longest Repeating Character Replacement", difficulty: "Medium", url: "https://leetcode.com/problems/longest-repeating-character-replacement/", pattern: "Window Max Frequency" },
  { id: 19, day: 10, topic: "Sliding Window", title: "Permutation in String", difficulty: "Medium", url: "https://leetcode.com/problems/permutation-in-string/", pattern: "Fixed Window + Frequency Map" },

  // Day 11
  { id: 20, day: 11, topic: "Sliding Window", title: "Find All Anagrams in a String", difficulty: "Medium", url: "https://leetcode.com/problems/find-all-anagrams-in-a-string/", pattern: "Fixed Window + Counts" },
  { id: 21, day: 11, topic: "Sliding Window", title: "Minimum Window Substring", difficulty: "Hard", url: "https://leetcode.com/problems/minimum-window-substring/", pattern: "Variable Window + Formed Chars" },

  // Day 12
  { id: 22, day: 12, topic: "Sliding Window", title: "Sliding Window Maximum", difficulty: "Hard", url: "https://leetcode.com/problems/sliding-window-maximum/", pattern: "Monotonic Deque" },

  // Day 13
  { id: 23, day: 13, topic: "Stack", title: "Valid Parentheses", difficulty: "Easy", url: "https://leetcode.com/problems/valid-parentheses/", pattern: "Stack (LIFO Match)" },
  { id: 24, day: 13, topic: "Stack", title: "Implement Queue using Stacks", difficulty: "Easy", url: "https://leetcode.com/problems/implement-queue-using-stacks/", pattern: "In / Out Stacks" },
  { id: 25, day: 13, topic: "Stack", title: "Min Stack", difficulty: "Medium", url: "https://leetcode.com/problems/min-stack/", pattern: "Auxiliary Min Stack" },

  // Day 14 (Review)
  { id: "rev-14", day: 14, topic: "Review", title: "Review Day: Redo Days 8–13", difficulty: "Review", isReview: true, note: "Solidify Two Pointers hard cases, Sliding Window tricks, and Stack basics." },

  // Day 15
  { id: 26, day: 15, topic: "Stack", title: "Evaluate Reverse Polish Notation", difficulty: "Medium", url: "https://leetcode.com/problems/evaluate-reverse-polish-notation/", pattern: "Stack Postfix Evaluation" },
  { id: 27, day: 15, topic: "Stack", title: "Daily Temperatures", difficulty: "Medium", url: "https://leetcode.com/problems/daily-temperatures/", pattern: "Monotonic Decreasing Stack" },

  // Day 16
  { id: 28, day: 16, topic: "Stack", title: "Generate Parentheses", difficulty: "Medium", url: "https://leetcode.com/problems/generate-parentheses/", pattern: "Backtracking / Stack" },
  { id: 29, day: 16, topic: "Stack", title: "Car Fleet", difficulty: "Medium", url: "https://leetcode.com/problems/car-fleet/", pattern: "Sort by Position + Stack" },

  // Day 17
  { id: 30, day: 17, topic: "Stack", title: "Largest Rectangle in Histogram", difficulty: "Hard", url: "https://leetcode.com/problems/largest-rectangle-in-histogram/", pattern: "Monotonic Increasing Stack" },

  // Day 18
  { id: 31, day: 18, topic: "Binary Search", title: "Binary Search", difficulty: "Easy", url: "https://leetcode.com/problems/binary-search/", pattern: "Classic Binary Search" },
  { id: 32, day: 18, topic: "Binary Search", title: "Find First and Last Position in Sorted Array", difficulty: "Medium", url: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/", pattern: "Bound Search (Lower/Upper)" },

  // Day 19
  { id: 33, day: 19, topic: "Binary Search", title: "Search a 2D Matrix", difficulty: "Medium", url: "https://leetcode.com/problems/search-a-2d-matrix/", pattern: "Virtual 1D Array Binary Search" },
  { id: 34, day: 19, topic: "Binary Search", title: "Koko Eating Bananas", difficulty: "Medium", url: "https://leetcode.com/problems/koko-eating-bananas/", pattern: "Binary Search on Answer" },

  // Day 20
  { id: 35, day: 20, topic: "Binary Search", title: "Find Minimum in Rotated Sorted Array", difficulty: "Medium", url: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/", pattern: "Inflection Point Search" },
  { id: 36, day: 20, topic: "Binary Search", title: "Search in Rotated Sorted Array", difficulty: "Medium", url: "https://leetcode.com/problems/search-in-rotated-sorted-array/", pattern: "Half-Sorted Branch Search" },

  // Day 21 (Review)
  { id: "rev-21", day: 21, topic: "Review", title: "Review Day: Redo Days 15–20", difficulty: "Review", isReview: true, note: "Re-solve Monotonic Stacks and Rotated Binary Search variants." },

  // Day 22
  { id: 37, day: 22, topic: "Binary Search", title: "Time Based Key-Value Store", difficulty: "Medium", url: "https://leetcode.com/problems/time-based-key-value-store/", pattern: "Hash Map + Binary Search" },
  { id: 38, day: 22, topic: "Binary Search", title: "Median of Two Sorted Arrays", difficulty: "Hard", url: "https://leetcode.com/problems/median-of-two-sorted-arrays/", pattern: "Binary Search on Partition" },

  // Day 23
  { id: 39, day: 23, topic: "Linked List", title: "Reverse Linked List", difficulty: "Easy", url: "https://leetcode.com/problems/reverse-linked-list/", pattern: "Iterative 3-Pointers" },
  { id: 40, day: 23, topic: "Linked List", title: "Merge Two Sorted Lists", difficulty: "Easy", url: "https://leetcode.com/problems/merge-two-sorted-lists/", pattern: "Dummy Head + Pointer Weaving" },
  { id: 41, day: 23, topic: "Linked List", title: "Linked List Cycle", difficulty: "Easy", url: "https://leetcode.com/problems/linked-list-cycle/", pattern: "Fast & Slow Pointers" },

  // Day 24
  { id: 42, day: 24, topic: "Linked List", title: "Palindrome Linked List", difficulty: "Easy", url: "https://leetcode.com/problems/palindrome-linked-list/", pattern: "Find Mid + Reverse Half" },
  { id: 43, day: 24, topic: "Linked List", title: "Reorder List", difficulty: "Medium", url: "https://leetcode.com/problems/reorder-list/", pattern: "Mid + Reverse + Merge" },

  // Day 25
  { id: 44, day: 25, topic: "Linked List", title: "Remove Nth Node From End of List", difficulty: "Medium", url: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/", pattern: "Two Pointers Gap N" },
  { id: 45, day: 25, topic: "Linked List", title: "Find the Duplicate Number", difficulty: "Medium", url: "https://leetcode.com/problems/find-the-duplicate-number/", pattern: "Floyd Cycle Detection" },

  // Day 26
  { id: 46, day: 26, topic: "Linked List", title: "Add Two Numbers", difficulty: "Medium", url: "https://leetcode.com/problems/add-two-numbers/", pattern: "Digit-by-digit + Carry" },
  { id: 47, day: 26, topic: "Linked List", title: "Copy List with Random Pointer", difficulty: "Medium", url: "https://leetcode.com/problems/copy-list-with-random-pointer/", pattern: "Interleaving Nodes / Hash Map" },

  // Day 27
  { id: 48, day: 27, topic: "Linked List", title: "LRU Cache", difficulty: "Medium", url: "https://leetcode.com/problems/lru-cache/", pattern: "Hash Map + Doubly Linked List" },
  { id: 49, day: 27, topic: "Linked List", title: "Merge K Sorted Lists", difficulty: "Hard", url: "https://leetcode.com/problems/merge-k-sorted-lists/", pattern: "Min-Heap / Divide & Conquer" },

  // Day 28 (Review)
  { id: "rev-28", day: 28, topic: "Review", title: "Review Day: Redo Days 22–27", difficulty: "Review", isReview: true, note: "Re-code LRU Cache, Merge K Sorted Lists, and Median of Two Sorted Arrays." },

  // Day 29
  { id: 50, day: 29, topic: "Linked List", title: "Reverse Nodes in K-Group", difficulty: "Hard", url: "https://leetcode.com/problems/reverse-nodes-in-k-group/", pattern: "K-Group Segment Reversal" },

  // Day 30
  { id: 51, day: 30, topic: "Trees", title: "Invert Binary Tree", difficulty: "Easy", url: "https://leetcode.com/problems/invert-binary-tree/", pattern: "Recursive DFS" },
  { id: 52, day: 30, topic: "Trees", title: "Maximum Depth of Binary Tree", difficulty: "Easy", url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/", pattern: "DFS Depth" },
  { id: 53, day: 30, topic: "Trees", title: "Same Tree", difficulty: "Easy", url: "https://leetcode.com/problems/same-tree/", pattern: "Dual DFS" },

  // Day 31
  { id: 54, day: 31, topic: "Trees", title: "Diameter of Binary Tree", difficulty: "Easy", url: "https://leetcode.com/problems/diameter-of-binary-tree/", pattern: "DFS Subtree Heights" },
  { id: 55, day: 31, topic: "Trees", title: "Balanced Binary Tree", difficulty: "Easy", url: "https://leetcode.com/problems/balanced-binary-tree/", pattern: "DFS Bottom-up Height Check" },
  { id: 56, day: 31, topic: "Trees", title: "Subtree of Another Tree", difficulty: "Easy", url: "https://leetcode.com/problems/subtree-of-another-tree/", pattern: "Same Tree Subtree Check" },

  // Day 32
  { id: 57, day: 32, topic: "Trees", title: "Lowest Common Ancestor of a BST", difficulty: "Medium", url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/", pattern: "BST Value Property Split" },
  { id: 58, day: 32, topic: "Trees", title: "Binary Tree Level Order Traversal", difficulty: "Medium", url: "https://leetcode.com/problems/binary-tree-level-order-traversal/", pattern: "Queue BFS Level-by-Level" },

  // Day 33
  { id: 59, day: 33, topic: "Trees", title: "Binary Tree Right Side View", difficulty: "Medium", url: "https://leetcode.com/problems/binary-tree-right-side-view/", pattern: "BFS Last Element of Level" },
  { id: 60, day: 33, topic: "Trees", title: "Count Good Nodes in Binary Tree", difficulty: "Medium", url: "https://leetcode.com/problems/count-good-nodes-in-binary-tree/", pattern: "DFS Path Maximum Tracker" },

  // Day 34
  { id: 61, day: 34, topic: "Trees", title: "Validate Binary Search Tree", difficulty: "Medium", url: "https://leetcode.com/problems/validate-binary-search-tree/", pattern: "DFS Range [low, high]" },
  { id: 62, day: 34, topic: "Trees", title: "Kth Smallest Element in a BST", difficulty: "Medium", url: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/", pattern: "Inorder Traversal (Sorted)" },

  // Day 35 (Review)
  { id: "rev-35", day: 35, topic: "Review", title: "Review Day: Redo Days 29–34", difficulty: "Review", isReview: true, note: "Review Reverse in K-Group and all core Tree traversals." },

  // Day 36
  { id: 63, day: 36, topic: "Trees", title: "Construct Binary Tree from Preorder and Inorder", difficulty: "Medium", url: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/", pattern: "Preorder Root + Inorder Partition" },
  { id: 64, day: 36, topic: "Trees", title: "Binary Tree Maximum Path Sum", difficulty: "Hard", url: "https://leetcode.com/problems/binary-tree-maximum-path-sum/", pattern: "Postorder Subtree Gain" },

  // Day 37
  { id: 65, day: 37, topic: "Trees", title: "Serialize and Deserialize Binary Tree", difficulty: "Hard", url: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/", pattern: "Preorder Serialization with Nulls" },

  // Day 38
  { id: 66, day: 38, topic: "Heap / Priority Queue", title: "Kth Largest Element in a Stream", difficulty: "Easy", url: "https://leetcode.com/problems/kth-largest-element-in-a-stream/", pattern: "Min-Heap of Size K" },
  { id: 67, day: 38, topic: "Heap / Priority Queue", title: "Last Stone Weight", difficulty: "Easy", url: "https://leetcode.com/problems/last-stone-weight/", pattern: "Max-Heap Simulation" },

  // Day 39
  { id: 68, day: 39, topic: "Heap / Priority Queue", title: "K Closest Points to Origin", difficulty: "Medium", url: "https://leetcode.com/problems/k-closest-points-to-origin/", pattern: "Max-Heap Size K / Quickselect" },
  { id: 69, day: 39, topic: "Heap / Priority Queue", title: "Kth Largest Element in an Array", difficulty: "Medium", url: "https://leetcode.com/problems/kth-largest-element-in-an-array/", pattern: "Min-Heap / Quickselect" },

  // Day 40
  { id: 70, day: 40, topic: "Heap / Priority Queue", title: "Task Scheduler", difficulty: "Medium", url: "https://leetcode.com/problems/task-scheduler/", pattern: "Max-Heap Frequency + Cooldown Queue" },
  { id: 71, day: 40, topic: "Heap / Priority Queue", title: "Design Twitter", difficulty: "Medium", url: "https://leetcode.com/problems/design-twitter/", pattern: "Hash Map + K-Way Merge Heap" },

  // Day 41
  { id: 72, day: 41, topic: "Heap / Priority Queue", title: "Find Median from Data Stream", difficulty: "Hard", url: "https://leetcode.com/problems/find-median-from-data-stream/", pattern: "Two Heaps (Max-Heap + Min-Heap)" },

  // Day 42 (Review)
  { id: "rev-42", day: 42, topic: "Review", title: "Review Day: Redo Days 36–41", difficulty: "Review", isReview: true, note: "Re-solve Binary Tree Max Path Sum and Two-Heap Median Stream." },

  // Day 43
  { id: 73, day: 43, topic: "Backtracking", title: "Subsets", difficulty: "Medium", url: "https://leetcode.com/problems/subsets/", pattern: "Include / Exclude Backtracking" },
  { id: 74, day: 43, topic: "Backtracking", title: "Subsets II", difficulty: "Medium", url: "https://leetcode.com/problems/subsets-ii/", pattern: "Sort + Duplicate Skip Backtracking" },

  // Day 44
  { id: 75, day: 44, topic: "Backtracking", title: "Combination Sum", difficulty: "Medium", url: "https://leetcode.com/problems/combination-sum/", pattern: "Target Reduction Backtracking" },
  { id: 76, day: 44, topic: "Backtracking", title: "Combination Sum II", difficulty: "Medium", url: "https://leetcode.com/problems/combination-sum-ii/", pattern: "Sort + Skip Duplicates at Depth" },

  // Day 45
  { id: 77, day: 45, topic: "Backtracking", title: "Permutations", difficulty: "Medium", url: "https://leetcode.com/problems/permutations/", pattern: "Swap / Visited Array Backtracking" },
  { id: 78, day: 45, topic: "Backtracking", title: "Word Search", difficulty: "Medium", url: "https://leetcode.com/problems/word-search/", pattern: "2D Grid DFS Backtracking" },

  // Day 46
  { id: 79, day: 46, topic: "Backtracking", title: "Palindrome Partitioning", difficulty: "Medium", url: "https://leetcode.com/problems/palindrome-partitioning/", pattern: "Prefix Palindrome + Recurse Suffix" },
  { id: 80, day: 46, topic: "Backtracking", title: "Letter Combinations of a Phone Number", difficulty: "Medium", url: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/", pattern: "Digit-to-Letters Mapping" },

  // Day 47
  { id: 81, day: 47, topic: "Backtracking", title: "N-Queens", difficulty: "Hard", url: "https://leetcode.com/problems/n-queens/", pattern: "Column & Diagonal Bitsets" },

  // Day 48
  { id: 82, day: 48, topic: "Tries", title: "Implement Trie (Prefix Tree)", difficulty: "Medium", url: "https://leetcode.com/problems/implement-trie-prefix-tree/", pattern: "Trie Node (Children Map + isEnd)" },
  { id: 83, day: 48, topic: "Tries", title: "Design Add and Search Words Data Structure", difficulty: "Medium", url: "https://leetcode.com/problems/design-add-and-search-words-data-structure/", pattern: "Trie + Wildcard '.' DFS" },

  // Day 49 (Review)
  { id: "rev-49", day: 49, topic: "Review", title: "Review Day: Redo Days 43–48", difficulty: "Review", isReview: true, note: "Master N-Queens, Word Search, and Trie lookups." },

  // Day 50
  { id: 84, day: 50, topic: "Tries", title: "Word Search II", difficulty: "Hard", url: "https://leetcode.com/problems/word-search-ii/", pattern: "Trie on Words + Grid DFS" },
  { id: 85, day: 50, topic: "Graphs", title: "Number of Islands", difficulty: "Medium", url: "https://leetcode.com/problems/number-of-islands/", pattern: "Grid BFS / DFS Flood Fill" },

  // Day 51
  { id: 86, day: 51, topic: "Graphs", title: "Max Area of Island", difficulty: "Medium", url: "https://leetcode.com/problems/max-area-of-island/", pattern: "Grid DFS Connected Component Area" },
  { id: 87, day: 51, topic: "Graphs", title: "Clone Graph", difficulty: "Medium", url: "https://leetcode.com/problems/clone-graph/", pattern: "DFS / BFS + Old-to-New Node Map" },

  // Day 52
  { id: 88, day: 52, topic: "Graphs", title: "Number of Provinces", difficulty: "Medium", url: "https://leetcode.com/problems/number-of-provinces/", pattern: "Union-Find / DFS Components" },
  { id: 89, day: 52, topic: "Graphs", title: "Rotting Oranges", difficulty: "Medium", url: "https://leetcode.com/problems/rotting-oranges/", pattern: "Multi-Source BFS" },

  // Day 53
  { id: 90, day: 53, topic: "Graphs", title: "Pacific Atlantic Water Flow", difficulty: "Medium", url: "https://leetcode.com/problems/pacific-atlantic-water-flow/", pattern: "Reverse Ocean DFS from Borders" },
  { id: 91, day: 53, topic: "Graphs", title: "Surrounded Regions", difficulty: "Medium", url: "https://leetcode.com/problems/surrounded-regions/", pattern: "Border Connected 'O' Mark DFS" },

  // Day 54
  { id: 92, day: 54, topic: "Graphs", title: "Course Schedule", difficulty: "Medium", url: "https://leetcode.com/problems/course-schedule/", pattern: "Topological Sort (Kahn's or DFS Cycle)" },
  { id: 93, day: 54, topic: "Graphs", title: "Course Schedule II", difficulty: "Medium", url: "https://leetcode.com/problems/course-schedule-ii/", pattern: "Topological Sort Ordering" },

  // Day 55
  { id: 94, day: 55, topic: "Graphs", title: "Redundant Connection", difficulty: "Medium", url: "https://leetcode.com/problems/redundant-connection/", pattern: "Union-Find Cycle Detection" },
  { id: 95, day: 55, topic: "Graphs", title: "Word Ladder", difficulty: "Hard", url: "https://leetcode.com/problems/word-ladder/", pattern: "Shortest Path BFS on Word Graph" },

  // Day 56 (Review)
  { id: "rev-56", day: 56, topic: "Review", title: "Review Day: Redo Days 50–55", difficulty: "Review", isReview: true, note: "Review Topological Sort and BFS Shortest Path (Word Ladder)." },

  // Day 57
  { id: 96, day: 57, topic: "Graphs", title: "Network Delay Time", difficulty: "Medium", url: "https://leetcode.com/problems/network-delay-time/", pattern: "Dijkstra's Algorithm (Min-Heap)" },
  { id: 97, day: 57, topic: "Graphs", title: "Min Cost to Connect All Points", difficulty: "Medium", url: "https://leetcode.com/problems/min-cost-to-connect-all-points/", pattern: "Prim's / Kruskal's MST" },

  // Day 58
  { id: 98, day: 58, topic: "Graphs", title: "Cheapest Flights Within K Stops", difficulty: "Medium", url: "https://leetcode.com/problems/cheapest-flights-within-k-stops/", pattern: "Bellman-Ford / Modified Dijkstra" },
  { id: 99, day: 58, topic: "Graphs", title: "Swim in Rising Water", difficulty: "Hard", url: "https://leetcode.com/problems/swim-in-rising-water/", pattern: "Dijkstra / Binary Search + BFS" },

  // Day 59
  { id: 100, day: 59, topic: "Graphs", title: "Reconstruct Itinerary", difficulty: "Hard", url: "https://leetcode.com/problems/reconstruct-itinerary/", pattern: "Hierholzer's Eulerian Path" },

  // Day 60
  { id: 101, day: 60, topic: "DP - 1D", title: "Climbing Stairs", difficulty: "Easy", url: "https://leetcode.com/problems/climbing-stairs/", pattern: "Fibonacci 1D DP" },
  { id: 102, day: 60, topic: "DP - 1D", title: "Min Cost Climbing Stairs", difficulty: "Easy", url: "https://leetcode.com/problems/min-cost-climbing-stairs/", pattern: "1D Step Cost Minimization" },

  // Day 61
  { id: 103, day: 61, topic: "DP - 1D", title: "House Robber", difficulty: "Medium", url: "https://leetcode.com/problems/house-robber/", pattern: "Non-adjacent Choice DP" },
  { id: 104, day: 61, topic: "DP - 1D", title: "House Robber II", difficulty: "Medium", url: "https://leetcode.com/problems/house-robber-ii/", pattern: "Circular Subarray House Robber" },

  // Day 62
  { id: 105, day: 62, topic: "DP - 1D", title: "Longest Palindromic Substring", difficulty: "Medium", url: "https://leetcode.com/problems/longest-palindromic-substring/", pattern: "Expand Around Center / DP" },
  { id: 106, day: 62, topic: "DP - 1D", title: "Palindromic Substrings", difficulty: "Medium", url: "https://leetcode.com/problems/palindromic-substrings/", pattern: "Count Center Expansions" },

  // Day 63 (Review)
  { id: "rev-63", day: 63, topic: "Review", title: "Review Day: Redo Days 57–62", difficulty: "Review", isReview: true, note: "Solidify Dijkstra, MST algorithms, and 1D DP base transitions." },

  // Day 64
  { id: 107, day: 64, topic: "DP - 1D", title: "Decode Ways", difficulty: "Medium", url: "https://leetcode.com/problems/decode-ways/", pattern: "1-Digit & 2-Digit Jump DP" },
  { id: 108, day: 64, topic: "DP - 1D", title: "Coin Change", difficulty: "Medium", url: "https://leetcode.com/problems/coin-change/", pattern: "Unbounded Knapsack Min Coins" },

  // Day 65
  { id: 109, day: 65, topic: "DP - 1D", title: "Maximum Product Subarray", difficulty: "Medium", url: "https://leetcode.com/problems/maximum-product-subarray/", pattern: "Running Min & Max Product DP" },
  { id: 110, day: 65, topic: "DP - 1D", title: "Word Break", difficulty: "Medium", url: "https://leetcode.com/problems/word-break/", pattern: "String Prefix Partition DP" },

  // Day 66
  { id: 111, day: 66, topic: "DP - 1D", title: "Longest Increasing Subsequence", difficulty: "Medium", url: "https://leetcode.com/problems/longest-increasing-subsequence/", pattern: "O(n log n) Patience Sorting / DP" },
  { id: 112, day: 66, topic: "DP - 1D", title: "Partition Equal Subset Sum", difficulty: "Medium", url: "https://leetcode.com/problems/partition-equal-subset-sum/", pattern: "0/1 Knapsack Target Sum//2" },

  // Day 67
  { id: 113, day: 67, topic: "DP - 2D", title: "Unique Paths", difficulty: "Medium", url: "https://leetcode.com/problems/unique-paths/", pattern: "Grid Path Addition DP" },
  { id: 114, day: 67, topic: "DP - 2D", title: "Longest Common Subsequence", difficulty: "Medium", url: "https://leetcode.com/problems/longest-common-subsequence/", pattern: "2D Grid Character Match DP" },

  // Day 68
  { id: 115, day: 68, topic: "DP - 2D", title: "Coin Change II", difficulty: "Medium", url: "https://leetcode.com/problems/coin-change-ii/", pattern: "Unbounded Knapsack Ways Count" },
  { id: 116, day: 68, topic: "DP - 2D", title: "Target Sum", difficulty: "Medium", url: "https://leetcode.com/problems/target-sum/", pattern: "Subset Sum Partition Formulation" },

  // Day 69
  { id: 117, day: 69, topic: "DP - 2D", title: "Best Time to Buy and Sell Stock with Cooldown", difficulty: "Medium", url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/", pattern: "State Machine DP (Buy/Sell/Rest)" },
  { id: 118, day: 69, topic: "DP - 2D", title: "Edit Distance", difficulty: "Medium", url: "https://leetcode.com/problems/edit-distance/", pattern: "Insert/Delete/Replace Matrix DP" },

  // Day 70 (Review)
  { id: "rev-70", day: 70, topic: "Review", title: "Review Day: Redo Days 64–69", difficulty: "Review", isReview: true, note: "Re-code Coin Change, LIS, LCS, and Edit Distance from scratch." },

  // Day 71
  { id: 119, day: 71, topic: "DP - 2D", title: "Interleaving String", difficulty: "Medium", url: "https://leetcode.com/problems/interleaving-string/", pattern: "2D Character Interleave DP" },
  { id: 120, day: 71, topic: "DP - 2D", title: "Longest Increasing Path in a Matrix", difficulty: "Hard", url: "https://leetcode.com/problems/longest-increasing-path-in-a-matrix/", pattern: "Memoized DFS in Directed Acyclic Grid" },

  // Day 72
  { id: 121, day: 72, topic: "DP - 2D", title: "Distinct Subsequences", difficulty: "Hard", url: "https://leetcode.com/problems/distinct-subsequences/", pattern: "String Match Count Matrix DP" },
  { id: 122, day: 72, topic: "DP - 2D", title: "Burst Balloons", difficulty: "Hard", url: "https://leetcode.com/problems/burst-balloons/", pattern: "Interval DP (Last Balloon Choice)" },

  // Day 73
  { id: 123, day: 73, topic: "DP - 2D", title: "Regular Expression Matching", difficulty: "Hard", url: "https://leetcode.com/problems/regular-expression-matching/", pattern: "Wildcard '.' and '*' 2D DP" },

  // Day 74
  { id: 124, day: 74, topic: "Greedy", title: "Maximum Subarray", difficulty: "Medium", url: "https://leetcode.com/problems/maximum-subarray/", pattern: "Kadane's Running Max" },
  { id: 125, day: 74, topic: "Greedy", title: "Jump Game", difficulty: "Medium", url: "https://leetcode.com/problems/jump-game/", pattern: "Furthest Reachable Index Greedy" },

  // Day 75
  { id: 126, day: 75, topic: "Greedy", title: "Jump Game II", difficulty: "Medium", url: "https://leetcode.com/problems/jump-game-ii/", pattern: "BFS-Level Minimum Jumps Greedy" },
  { id: 127, day: 75, topic: "Greedy", title: "Gas Station", difficulty: "Medium", url: "https://leetcode.com/problems/gas-station/", pattern: "Running Surplus Reset Point" },

  // Day 76
  { id: 128, day: 76, topic: "Greedy", title: "Hand of Straights", difficulty: "Medium", url: "https://leetcode.com/problems/hand-of-straights/", pattern: "Sorted Frequency Map Consecutive Check" },
  { id: 129, day: 76, topic: "Greedy", title: "Merge Triplets to Form Target Triplet", difficulty: "Medium", url: "https://leetcode.com/problems/merge-triplets-to-form-target-triplet/", pattern: "Greedy Filter Valid Triplet Indices" },

  // Day 77 (Review)
  { id: "rev-77", day: 77, topic: "Review", title: "Review Day: Redo Days 71–76", difficulty: "Review", isReview: true, note: "Master Interval DP, Regular Expression Matching, and Greedy jump proofs." },

  // Day 78
  { id: 130, day: 78, topic: "Greedy", title: "Partition Labels", difficulty: "Medium", url: "https://leetcode.com/problems/partition-labels/", pattern: "Last Occurrence Index Window" },
  { id: 131, day: 78, topic: "Greedy", title: "Valid Parenthesis String", difficulty: "Medium", url: "https://leetcode.com/problems/valid-parenthesis-string/", pattern: "Min / Max Open Parentheses Range" },

  // Day 79
  { id: 132, day: 79, topic: "Intervals", title: "Insert Interval", difficulty: "Medium", url: "https://leetcode.com/problems/insert-interval/", pattern: "Linear Merge Non-overlapping" },
  { id: 133, day: 79, topic: "Intervals", title: "Merge Intervals", difficulty: "Medium", url: "https://leetcode.com/problems/merge-intervals/", pattern: "Sort by Start + Overlap Expansion" },

  // Day 80
  { id: 134, day: 80, topic: "Intervals", title: "Non-overlapping Intervals", difficulty: "Medium", url: "https://leetcode.com/problems/non-overlapping-intervals/", pattern: "Sort by End (Activity Selection Greedy)" },
  { id: 135, day: 80, topic: "Intervals", title: "Minimum Interval to Include Each Query", difficulty: "Hard", url: "https://leetcode.com/problems/minimum-interval-to-include-each-query/", pattern: "Sort Intervals & Queries + Min-Heap" },

  // Day 81
  { id: 136, day: 81, topic: "Math & Geometry", title: "Rotate Image", difficulty: "Medium", url: "https://leetcode.com/problems/rotate-image/", pattern: "Transpose + Reverse Rows" },
  { id: 137, day: 81, topic: "Math & Geometry", title: "Spiral Matrix", difficulty: "Medium", url: "https://leetcode.com/problems/spiral-matrix/", pattern: "4-Boundary Inward Spiral Walk" },

  // Day 82
  { id: 138, day: 82, topic: "Math & Geometry", title: "Set Matrix Zeroes", difficulty: "Medium", url: "https://leetcode.com/problems/set-matrix-zeroes/", pattern: "First Row & Col Flag Trick O(1) Space" },
  { id: 139, day: 82, topic: "Math & Geometry", title: "Happy Number", difficulty: "Easy", url: "https://leetcode.com/problems/happy-number/", pattern: "Floyd Cycle Detection on Sum of Squares" },

  // Day 83
  { id: 140, day: 83, topic: "Math & Geometry", title: "Plus One", difficulty: "Easy", url: "https://leetcode.com/problems/plus-one/", pattern: "Array Carry Propagation" },
  { id: 141, day: 83, topic: "Math & Geometry", title: "Pow(x, n)", difficulty: "Medium", url: "https://leetcode.com/problems/powx-n/", pattern: "Binary Exponentiation O(log n)" },

  // Day 84 (Review)
  { id: "rev-84", day: 84, topic: "Review", title: "Review Day: Redo Days 78–83", difficulty: "Review", isReview: true, note: "Re-solve Interval overlaps and in-place Matrix manipulation tricks." },

  // Day 85
  { id: 142, day: 85, topic: "Math & Geometry", title: "Multiply Strings", difficulty: "Medium", url: "https://leetcode.com/problems/multiply-strings/", pattern: "Column-wise Multiplication Array" },
  { id: 143, day: 85, topic: "Math & Geometry", title: "Detect Squares", difficulty: "Medium", url: "https://leetcode.com/problems/detect-squares/", pattern: "Hash Map Coordinate Geometry" },

  // Day 86
  { id: 144, day: 86, topic: "Bit Manipulation", title: "Single Number", difficulty: "Easy", url: "https://leetcode.com/problems/single-number/", pattern: "XOR Cancellation (a ^ a = 0)" },
  { id: 145, day: 86, topic: "Bit Manipulation", title: "Number of 1 Bits", difficulty: "Easy", url: "https://leetcode.com/problems/number-of-1-bits/", pattern: "Brian Kernighan's (n & (n - 1))" },

  // Day 87
  { id: 146, day: 87, topic: "Bit Manipulation", title: "Counting Bits", difficulty: "Easy", url: "https://leetcode.com/problems/counting-bits/", pattern: "Bit DP (dp[i] = dp[i >> 1] + (i & 1))" },
  { id: 147, day: 87, topic: "Bit Manipulation", title: "Reverse Bits", difficulty: "Easy", url: "https://leetcode.com/problems/reverse-bits/", pattern: "32-bit Shift and Masking" },

  // Day 88
  { id: 148, day: 88, topic: "Bit Manipulation", title: "Missing Number", difficulty: "Easy", url: "https://leetcode.com/problems/missing-number/", pattern: "XOR / Gauss Sum Formula" },
  { id: 149, day: 88, topic: "Bit Manipulation", title: "Sum of Two Integers", difficulty: "Medium", url: "https://leetcode.com/problems/sum-of-two-integers/", pattern: "Half Adder (XOR Sum, AND Carry)" },

  // Day 89
  { id: 150, day: 89, topic: "Bit Manipulation", title: "Reverse Integer (then redo your 5 weakest problems)", difficulty: "Medium", url: "https://leetcode.com/problems/reverse-integer/", pattern: "Modulo Digit Reversal + 32-bit Overflow Check" },

  // Day 90 (Mock)
  { id: "rev-90", day: 90, topic: "Mock", title: "Final Mock: 2 random Mediums + 1 Hard, 45 min each", difficulty: "Mock", isReview: true, note: "Simulate a live 45-minute FAANG/MNC technical interview round under timed exam conditions." }
];

const DSA2_TOPIC_LIST = [
  "Arrays",
  "Hashing",
  "Two Pointers",
  "Sliding Window",
  "Stack",
  "Binary Search",
  "Linked List",
  "Trees",
  "Heap / Priority Queue",
  "Backtracking",
  "Tries",
  "Graphs",
  "DP - 1D",
  "DP - 2D",
  "Greedy",
  "Intervals",
  "Math & Geometry",
  "Bit Manipulation"
];
