/**
 * DSA 1: Pattern-Wise Interview Reference (18 Core Patterns)
 * Includes Recognition Clues, When to Use, Memory Tricks, Interview Drills, and LeetCode problems with solutions.
 */
const DSA1_PATTERNS_DATA = [
  {
    id: "pat-1",
    num: 1,
    name: "Sliding Window",
    whenToUse: "Contiguous subarray/substring; longest, shortest, maximum, minimum, or count of valid windows.",
    recognitionClues: ["substring", "subarray", "contiguous", "at most / at least", "longest / shortest", "replace / remove in a window"],
    memoryTrick: "Expand right; shrink left when the window violates the condition.",
    interviewDrill: "Explain why this pattern fits before coding: contiguous elements allow updating window state in O(1) instead of recalculating from scratch O(n).",
    problems: [
      {
        no: 3,
        title: "Longest Substring Without Repeating Characters",
        difficulty: "Medium",
        url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
        python: `def lengthOfLongestSubstring(s: str) -> int:
    char_map = {}
    left = 0
    max_len = 0
    for right, ch in enumerate(s):
        if ch in char_map and char_map[ch] >= left:
            left = char_map[ch] + 1
        char_map[ch] = right
        max_len = max(max_len, right - left + 1)
    return max_len`,
        java: `import java.util.*;
public class Solution {
    public int lengthOfLongestSubstring(String s) {
        Map<Character, Integer> map = new HashMap<>();
        int left = 0, maxLen = 0;
        for (int right = 0; right < s.length(); right++) {
            char c = s.charAt(right);
            if (map.containsKey(c) && map.get(c) >= left) {
                left = map.get(c) + 1;
            }
            map.put(c, right);
            maxLen = Math.max(maxLen, right - left + 1);
        }
        return maxLen;
    }
}`
      },
      {
        no: 76,
        title: "Minimum Window Substring",
        difficulty: "Hard",
        url: "https://leetcode.com/problems/minimum-window-substring/",
        python: `def minWindow(s: str, t: str) -> str:
    from collections import Counter
    if not t or not s: return ""
    dict_t = Counter(t)
    required = len(dict_t)
    l, r, formed = 0, 0, 0
    window_counts = {}
    ans = float("inf"), None, None
    while r < len(s):
        char = s[r]
        window_counts[char] = window_counts.get(char, 0) + 1
        if char in dict_t and window_counts[char] == dict_t[char]:
            formed += 1
        while l <= r and formed == required:
            char = s[l]
            if r - l + 1 < ans[0]:
                ans = (r - l + 1, l, r)
            window_counts[char] -= 1
            if char in dict_t and window_counts[char] < dict_t[char]:
                formed -= 1
            l += 1
        r += 1
    return "" if ans[0] == float("inf") else s[ans[1] : ans[2] + 1]`,
        java: `import java.util.*;
public class Solution {
    public String minWindow(String s, String t) {
        if (s.length() == 0 || t.length() == 0) return "";
        int[] map = new int[128];
        for (char c : t.toCharArray()) map[c]++;
        int left = 0, right = 0, count = t.length(), minLen = Integer.MAX_VALUE, start = 0;
        while (right < s.length()) {
            if (map[s.charAt(right++)]-- > 0) count--;
            while (count == 0) {
                if (right - left < minLen) {
                    minLen = right - left;
                    start = left;
                }
                if (map[s.charAt(left++)]++ == 0) count++;
            }
        }
        return minLen == Integer.MAX_VALUE ? "" : s.substring(start, start + minLen);
    }
}`
      },
      {
        no: 209,
        title: "Minimum Size Subarray Sum",
        difficulty: "Medium",
        url: "https://leetcode.com/problems/minimum-size-subarray-sum/",
        python: `def minSubArrayLen(target: int, nums: list[int]) -> int:
    left = 0
    curr_sum = 0
    min_len = float('inf')
    for right in range(len(nums)):
        curr_sum += nums[right]
        while curr_sum >= target:
            min_len = min(min_len, right - left + 1)
            curr_sum -= nums[left]
            left += 1
    return 0 if min_len == float('inf') else min_len`,
        java: `public class Solution {
    public int minSubArrayLen(int target, int[] nums) {
        int left = 0, sum = 0, minLen = Integer.MAX_VALUE;
        for (int right = 0; right < nums.length; right++) {
            sum += nums[right];
            while (sum >= target) {
                minLen = Math.min(minLen, right - left + 1);
                sum -= nums[left++];
            }
        }
        return minLen == Integer.MAX_VALUE ? 0 : minLen;
    }
}`
      },
      { no: 424, title: "Longest Repeating Character Replacement", difficulty: "Medium", url: "https://leetcode.com/problems/longest-repeating-character-replacement/" },
      { no: 239, title: "Sliding Window Maximum", difficulty: "Hard", url: "https://leetcode.com/problems/sliding-window-maximum/" },
      { no: 438, title: "Find All Anagrams in a String", difficulty: "Medium", url: "https://leetcode.com/problems/find-all-anagrams-in-a-string/" }
    ]
  },
  {
    id: "pat-2",
    num: 2,
    name: "Two Pointers",
    whenToUse: "Two indices move through an array/string to avoid unnecessary nested-loop comparisons; especially common with sorted data or both ends.",
    recognitionClues: ["sorted array", "pair sum", "remove duplicates", "reverse", "partition", "palindrome", "both ends"],
    memoryTrick: "On sorted data, move the pointer that can improve the sum/condition.",
    interviewDrill: "Explain why this pattern fits before coding: monotonicity allows pruning search space from O(n²) to O(n).",
    problems: [
      {
        no: 1,
        title: "Two Sum",
        difficulty: "Easy",
        url: "https://leetcode.com/problems/two-sum/",
        python: `def twoSum(nums, target):
    seen = {}
    for i, n in enumerate(nums):
        if target - n in seen: return [seen[target - n], i]
        seen[n] = i`,
        java: `public int[] twoSum(int[] nums, int target) {
    Map<Integer, Integer> map = new HashMap<>();
    for (int i = 0; i < nums.length; i++) {
        if (map.containsKey(target - nums[i])) return new int[]{map.get(target - nums[i]), i};
        map.put(nums[i], i);
    }
    return new int[0];
}`
      },
      { no: 15, title: "3Sum", difficulty: "Medium", url: "https://leetcode.com/problems/3sum/" },
      { no: 26, title: "Remove Duplicates from Sorted Array", difficulty: "Easy", url: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/" },
      { no: 27, title: "Remove Element", difficulty: "Easy", url: "https://leetcode.com/problems/remove-element/" },
      { no: 125, title: "Valid Palindrome", difficulty: "Easy", url: "https://leetcode.com/problems/valid-palindrome/" },
      { no: 167, title: "Two Sum II - Input Array Is Sorted", difficulty: "Medium", url: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/" }
    ]
  },
  {
    id: "pat-3",
    num: 3,
    name: "Fast & Slow Pointers",
    whenToUse: "Cycle detection, middle elements, and repeated states in linked structures or similar processes.",
    recognitionClues: ["cycle", "loop", "middle", "repeated state", "circular movement"],
    memoryTrick: "Slow moves 1 step; fast moves 2. A meeting can reveal a cycle/repeated state.",
    interviewDrill: "Explain why this pattern fits: Floyd's Tortoise and Hare guarantees detection in O(n) time and O(1) space.",
    problems: [
      { no: 141, title: "Linked List Cycle", difficulty: "Easy", url: "https://leetcode.com/problems/linked-list-cycle/" },
      { no: 142, title: "Linked List Cycle II", difficulty: "Medium", url: "https://leetcode.com/problems/linked-list-cycle-ii/" },
      { no: 876, title: "Middle of the Linked List", difficulty: "Easy", url: "https://leetcode.com/problems/middle-of-the-linked-list/" },
      { no: 287, title: "Find the Duplicate Number", difficulty: "Medium", url: "https://leetcode.com/problems/find-the-duplicate-number/" },
      { no: 202, title: "Happy Number", difficulty: "Easy", url: "https://leetcode.com/problems/happy-number/" },
      { no: 143, title: "Reorder List", difficulty: "Medium", url: "https://leetcode.com/problems/reorder-list/" }
    ]
  },
  {
    id: "pat-4",
    num: 4,
    name: "Prefix Sum",
    whenToUse: "Use cumulative information to answer range-sum or repeated subarray-sum queries efficiently.",
    recognitionClues: ["range sum", "subarray sum", "sum between i and j", "repeated queries"],
    memoryTrick: "Precompute cumulative values; range sum becomes a subtraction of two prefix values (prefix[R] - prefix[L-1]).",
    interviewDrill: "Explain why this pattern fits: reduces O(n) range queries to O(1) after O(n) precomputation.",
    problems: [
      { no: 303, title: "Range Sum Query - Immutable", difficulty: "Easy", url: "https://leetcode.com/problems/range-sum-query-immutable/" },
      { no: 560, title: "Subarray Sum Equals K", difficulty: "Medium", url: "https://leetcode.com/problems/subarray-sum-equals-k/" },
      { no: 724, title: "Find Pivot Index", difficulty: "Easy", url: "https://leetcode.com/problems/find-pivot-index/" },
      { no: 238, title: "Product of Array Except Self", difficulty: "Medium", url: "https://leetcode.com/problems/product-of-array-except-self/" },
      { no: 325, title: "Maximum Size Subarray Sum Equals k", difficulty: "Medium", url: "https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/" },
      { no: 525, title: "Contiguous Array", difficulty: "Medium", url: "https://leetcode.com/problems/contiguous-array/" }
    ]
  },
  {
    id: "pat-5",
    num: 5,
    name: "Hash Map / Hash Set",
    whenToUse: "Fast lookup, frequency counting, grouping, duplicate detection, and remembering previously seen values.",
    recognitionClues: ["frequency", "duplicate", "seen before", "lookup", "pair matching", "grouping"],
    memoryTrick: "Store what you have seen so far so membership/frequency checks become near O(1) average.",
    interviewDrill: "Explain why this pattern fits: trades O(n) extra space to eliminate nested searches and achieve O(n) total time.",
    problems: [
      { no: 1, title: "Two Sum", difficulty: "Easy", url: "https://leetcode.com/problems/two-sum/" },
      { no: 49, title: "Group Anagrams", difficulty: "Medium", url: "https://leetcode.com/problems/group-anagrams/" },
      { no: 242, title: "Valid Anagram", difficulty: "Easy", url: "https://leetcode.com/problems/valid-anagram/" },
      { no: 128, title: "Longest Consecutive Sequence", difficulty: "Medium", url: "https://leetcode.com/problems/longest-consecutive-sequence/" },
      { no: 347, title: "Top K Frequent Elements", difficulty: "Medium", url: "https://leetcode.com/problems/top-k-frequent-elements/" },
      { no: 383, title: "Ransom Note", difficulty: "Easy", url: "https://leetcode.com/problems/ransom-note/" }
    ]
  },
  {
    id: "pat-6",
    num: 6,
    name: "Binary Search",
    whenToUse: "Search a sorted space or an answer space with a monotonic true/false feasibility condition.",
    recognitionClues: ["sorted array", "first/last occurrence", "rotated array", "minimum feasible answer", "monotonic condition"],
    memoryTrick: "If feasibility changes only once, discard half the candidates each step.",
    interviewDrill: "Explain why this pattern fits: any search problem with a monotonic predicate (FFFFTTTT) can be solved in O(log n).",
    problems: [
      { no: 704, title: "Binary Search", difficulty: "Easy", url: "https://leetcode.com/problems/binary-search/" },
      { no: 33, title: "Search in Rotated Sorted Array", difficulty: "Medium", url: "https://leetcode.com/problems/search-in-rotated-sorted-array/" },
      { no: 34, title: "Find First and Last Position of Element in Sorted Array", difficulty: "Medium", url: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/" },
      { no: 153, title: "Find Minimum in Rotated Sorted Array", difficulty: "Medium", url: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/" },
      { no: 875, title: "Koko Eating Bananas", difficulty: "Medium", url: "https://leetcode.com/problems/koko-eating-bananas/" },
      { no: 1011, title: "Capacity To Ship Packages Within D Days", difficulty: "Medium", url: "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/" }
    ]
  },
  {
    id: "pat-7",
    num: 7,
    name: "Backtracking",
    whenToUse: "Explore choices, build candidates, and undo choices to try alternatives.",
    recognitionClues: ["all combinations", "permutations", "valid strings", "choose/explore/undo", "constraints"],
    memoryTrick: "Choose → explore → undo. Use it when the problem asks you to enumerate possibilities.",
    interviewDrill: "Explain why this pattern fits: recursively traverse the state tree and prune dead-end branches.",
    problems: [
      { no: 46, title: "Permutations", difficulty: "Medium", url: "https://leetcode.com/problems/permutations/" },
      { no: 47, title: "Permutations II", difficulty: "Medium", url: "https://leetcode.com/problems/permutations-ii/" },
      { no: 78, title: "Subsets", difficulty: "Medium", url: "https://leetcode.com/problems/subsets/" },
      { no: 39, title: "Combination Sum", difficulty: "Medium", url: "https://leetcode.com/problems/combination-sum/" },
      { no: 22, title: "Generate Parentheses", difficulty: "Medium", url: "https://leetcode.com/problems/generate-parentheses/" },
      { no: 79, title: "Word Search", difficulty: "Medium", url: "https://leetcode.com/problems/word-search/" }
    ]
  },
  {
    id: "pat-8",
    num: 8,
    name: "Depth First Search (DFS)",
    whenToUse: "Explore connected components, tree paths, or graph branches deeply before returning.",
    recognitionClues: ["tree traversal", "connected components", "path existence", "islands", "recursive exploration"],
    memoryTrick: "Go deep on one branch/region, then backtrack. Track visited where needed.",
    interviewDrill: "Explain why this pattern fits: recursive call stack or explicit stack explores entire connected subtrees.",
    problems: [
      { no: 200, title: "Number of Islands", difficulty: "Medium", url: "https://leetcode.com/problems/number-of-islands/" },
      { no: 695, title: "Max Area of Island", difficulty: "Medium", url: "https://leetcode.com/problems/max-area-of-island/" },
      { no: 98, title: "Validate Binary Search Tree", difficulty: "Medium", url: "https://leetcode.com/problems/validate-binary-search-tree/" },
      { no: 104, title: "Maximum Depth of Binary Tree", difficulty: "Easy", url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/" },
      { no: 543, title: "Diameter of Binary Tree", difficulty: "Easy", url: "https://leetcode.com/problems/diameter-of-binary-tree/" },
      { no: 133, title: "Clone Graph", difficulty: "Medium", url: "https://leetcode.com/problems/clone-graph/" }
    ]
  },
  {
    id: "pat-9",
    num: 9,
    name: "Breadth First Search (BFS)",
    whenToUse: "Level-order traversal and shortest path/minimum steps in an unweighted graph.",
    recognitionClues: ["shortest path", "level by level", "minimum steps", "nearest node", "tree levels"],
    memoryTrick: "Explore by distance layers; first discovery in an unweighted graph gives shortest steps.",
    interviewDrill: "Explain why this pattern fits: a Queue processes nodes radially layer-by-layer.",
    problems: [
      { no: 102, title: "Binary Tree Level Order Traversal", difficulty: "Medium", url: "https://leetcode.com/problems/binary-tree-level-order-traversal/" },
      { no: 103, title: "Binary Tree Zigzag Level Order Traversal", difficulty: "Medium", url: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/" },
      { no: 111, title: "Minimum Depth of Binary Tree", difficulty: "Easy", url: "https://leetcode.com/problems/minimum-depth-of-binary-tree/" },
      { no: 127, title: "Word Ladder", difficulty: "Hard", url: "https://leetcode.com/problems/word-ladder/" },
      { no: 994, title: "Rotting Oranges", difficulty: "Medium", url: "https://leetcode.com/problems/rotting-oranges/" },
      { no: 1091, title: "Shortest Path in Binary Matrix", difficulty: "Medium", url: "https://leetcode.com/problems/shortest-path-in-binary-matrix/" }
    ]
  },
  {
    id: "pat-10",
    num: 10,
    name: "Monotonic Stack",
    whenToUse: "Next/previous greater or smaller elements, spans, histogram boundaries, and one-directional relationships.",
    recognitionClues: ["next greater", "next smaller", "previous greater", "span", "histogram", "temperature"],
    memoryTrick: "Keep the stack monotonic; pop elements when the current value resolves their answer.",
    interviewDrill: "Explain why this pattern fits: each element is pushed and popped at most once, achieving O(n) total runtime.",
    problems: [
      { no: 739, title: "Daily Temperatures", difficulty: "Medium", url: "https://leetcode.com/problems/daily-temperatures/" },
      { no: 496, title: "Next Greater Element I", difficulty: "Easy", url: "https://leetcode.com/problems/next-greater-element-i/" },
      { no: 503, title: "Next Greater Element II", difficulty: "Medium", url: "https://leetcode.com/problems/next-greater-element-ii/" },
      { no: 84, title: "Largest Rectangle in Histogram", difficulty: "Hard", url: "https://leetcode.com/problems/largest-rectangle-in-histogram/" },
      { no: 901, title: "Online Stock Span", difficulty: "Medium", url: "https://leetcode.com/problems/online-stock-span/" },
      { no: 42, title: "Trapping Rain Water", difficulty: "Hard", url: "https://leetcode.com/problems/trapping-rain-water/" }
    ]
  },
  {
    id: "pat-11",
    num: 11,
    name: "Heap / Priority Queue",
    whenToUse: "Repeatedly need the smallest/largest element, top-k items, or the next highest-priority event.",
    recognitionClues: ["top k", "kth largest/smallest", "merge k lists", "scheduling", "streaming median"],
    memoryTrick: "Keep only the best candidates when full sorting is unnecessary.",
    interviewDrill: "Explain why this pattern fits: size-k Min-Heap keeps top k largest items in O(n log k) instead of full sorting O(n log n).",
    problems: [
      { no: 215, title: "Kth Largest Element in an Array", difficulty: "Medium", url: "https://leetcode.com/problems/kth-largest-element-in-an-array/" },
      { no: 347, title: "Top K Frequent Elements", difficulty: "Medium", url: "https://leetcode.com/problems/top-k-frequent-elements/" },
      { no: 23, title: "Merge k Sorted Lists", difficulty: "Hard", url: "https://leetcode.com/problems/merge-k-sorted-lists/" },
      { no: 295, title: "Find Median from Data Stream", difficulty: "Hard", url: "https://leetcode.com/problems/find-median-from-data-stream/" },
      { no: 703, title: "Kth Largest Element in a Stream", difficulty: "Easy", url: "https://leetcode.com/problems/kth-largest-element-in-a-stream/" },
      { no: 621, title: "Task Scheduler", difficulty: "Medium", url: "https://leetcode.com/problems/task-scheduler/" }
    ]
  },
  {
    id: "pat-12",
    num: 12,
    name: "Greedy",
    whenToUse: "A locally best choice can be proven to lead to a globally optimal result.",
    recognitionClues: ["maximize/minimize", "earliest finish", "minimum jumps", "scheduling", "optimize after sorting"],
    memoryTrick: "Make the best safe local choice, but be able to justify why it preserves an optimum.",
    interviewDrill: "Explain why this pattern fits: greedy choice property ensures optimal substructure without backtrack overhead.",
    problems: [
      { no: 55, title: "Jump Game", difficulty: "Medium", url: "https://leetcode.com/problems/jump-game/" },
      { no: 45, title: "Jump Game II", difficulty: "Medium", url: "https://leetcode.com/problems/jump-game-ii/" },
      { no: 56, title: "Merge Intervals", difficulty: "Medium", url: "https://leetcode.com/problems/merge-intervals/" },
      { no: 435, title: "Non-overlapping Intervals", difficulty: "Medium", url: "https://leetcode.com/problems/non-overlapping-intervals/" },
      { no: 678, title: "Valid Parenthesis String", difficulty: "Medium", url: "https://leetcode.com/problems/valid-parenthesis-string/" },
      { no: 134, title: "Gas Station", difficulty: "Medium", url: "https://leetcode.com/problems/gas-station/" }
    ]
  },
  {
    id: "pat-13",
    num: 13,
    name: "Intervals",
    whenToUse: "Ranges such as meetings, time slots, segments, or numeric intervals with overlap/merge/conflict questions.",
    recognitionClues: ["meeting times", "overlaps", "merge ranges", "insert interval", "remove conflicts"],
    memoryTrick: "Sort by the key that matches the objective, then sweep and merge/choose.",
    interviewDrill: "Explain why this pattern fits: sorting intervals by start (or end) time converts 2D conflicts into a 1D sweep.",
    problems: [
      { no: 56, title: "Merge Intervals", difficulty: "Medium", url: "https://leetcode.com/problems/merge-intervals/" },
      { no: 57, title: "Insert Interval", difficulty: "Medium", url: "https://leetcode.com/problems/insert-interval/" },
      { no: 435, title: "Non-overlapping Intervals", difficulty: "Medium", url: "https://leetcode.com/problems/non-overlapping-intervals/" },
      { no: 252, title: "Meeting Rooms", difficulty: "Easy", url: "https://leetcode.com/problems/meeting-rooms/" },
      { no: 253, title: "Meeting Rooms II", difficulty: "Medium", url: "https://leetcode.com/problems/meeting-rooms-ii/" },
      { no: 986, title: "Interval List Intersections", difficulty: "Medium", url: "https://leetcode.com/problems/interval-list-intersections/" }
    ]
  },
  {
    id: "pat-14",
    num: 14,
    name: "Trie (Prefix Tree)",
    whenToUse: "Prefix-oriented string problems, dictionaries, autocomplete, or word traversal.",
    recognitionClues: ["prefix", "dictionary", "autocomplete", "word search", "lexicographic tree"],
    memoryTrick: "Share prefix nodes so prefix queries avoid scanning every stored word.",
    interviewDrill: "Explain why this pattern fits: queries take O(L) proportional to word length L, independent of total dictionary size N.",
    problems: [
      { no: 208, title: "Implement Trie (Prefix Tree)", difficulty: "Medium", url: "https://leetcode.com/problems/implement-trie-prefix-tree/" },
      { no: 211, title: "Design Add and Search Words Data Structure", difficulty: "Medium", url: "https://leetcode.com/problems/design-add-and-search-words-data-structure/" },
      { no: 212, title: "Word Search II", difficulty: "Hard", url: "https://leetcode.com/problems/word-search-ii/" },
      { no: 648, title: "Replace Words", difficulty: "Medium", url: "https://leetcode.com/problems/replace-words/" },
      { no: 677, title: "Map Sum Pairs", difficulty: "Medium", url: "https://leetcode.com/problems/map-sum-pairs/" },
      { no: 720, title: "Longest Word in Dictionary", difficulty: "Medium", url: "https://leetcode.com/problems/longest-word-in-dictionary/" }
    ]
  },
  {
    id: "pat-15",
    num: 15,
    name: "Dynamic Programming",
    whenToUse: "Overlapping subproblems plus optimal substructure; store states so repeated work is not repeated.",
    recognitionClues: ["count ways", "maximize/minimize", "repeated subproblems", "take/skip", "paths", "subsequences"],
    memoryTrick: "Define the state, transition, base case, then memoize/tabulate repeated states.",
    interviewDrill: "Explain why this pattern fits: subproblems overlap exponentially without cache, but collapse to polynomial time with DP table.",
    problems: [
      { no: 70, title: "Climbing Stairs", difficulty: "Easy", url: "https://leetcode.com/problems/climbing-stairs/" },
      { no: 198, title: "House Robber", difficulty: "Medium", url: "https://leetcode.com/problems/house-robber/" },
      { no: 322, title: "Coin Change", difficulty: "Medium", url: "https://leetcode.com/problems/coin-change/" },
      { no: 300, title: "Longest Increasing Subsequence", difficulty: "Medium", url: "https://leetcode.com/problems/longest-increasing-subsequence/" },
      { no: 1143, title: "Longest Common Subsequence", difficulty: "Medium", url: "https://leetcode.com/problems/longest-common-subsequence/" },
      { no: 416, title: "Partition Equal Subset Sum", difficulty: "Medium", url: "https://leetcode.com/problems/partition-equal-subset-sum/" }
    ]
  },
  {
    id: "pat-16",
    num: 16,
    name: "Union Find (Disjoint Set Union)",
    whenToUse: "Connectivity and merging groups; useful when edges are added and components must be tracked.",
    recognitionClues: ["connected components", "union", "find parent", "dynamic connectivity", "undirected cycle"],
    memoryTrick: "Maintain one representative per component; union components with rank/size and path compression.",
    interviewDrill: "Explain why this pattern fits: near O(1) α(n) inverse Ackermann operations for dynamic graph connectivity.",
    problems: [
      { no: 547, title: "Number of Provinces", difficulty: "Medium", url: "https://leetcode.com/problems/number-of-provinces/" },
      { no: 721, title: "Accounts Merge", difficulty: "Medium", url: "https://leetcode.com/problems/accounts-merge/" },
      { no: 684, title: "Redundant Connection", difficulty: "Medium", url: "https://leetcode.com/problems/redundant-connection/" },
      { no: 200, title: "Number of Islands", difficulty: "Medium", url: "https://leetcode.com/problems/number-of-islands/" },
      { no: 261, title: "Graph Valid Tree", difficulty: "Medium", url: "https://leetcode.com/problems/graph-valid-tree/" },
      { no: 990, title: "Satisfiability of Equality Equations", difficulty: "Medium", url: "https://leetcode.com/problems/satisfiability-of-equality-equations/" }
    ]
  },
  {
    id: "pat-17",
    num: 17,
    name: "Topological Sort",
    whenToUse: "Directed dependency problems where one task must precede another.",
    recognitionClues: ["prerequisites", "dependency order", "schedule", "DAG", "build order"],
    memoryTrick: "Model prerequisite → dependent edges; a valid order requires in-degree 0 queue (Kahn's) or post-order DFS.",
    interviewDrill: "Explain why this pattern fits: Kahn's algorithm processes in-degree 0 nodes to establish legal linear order in O(V + E).",
    problems: [
      { no: 207, title: "Course Schedule", difficulty: "Medium", url: "https://leetcode.com/problems/course-schedule/" },
      { no: 210, title: "Course Schedule II", difficulty: "Medium", url: "https://leetcode.com/problems/course-schedule-ii/" },
      { no: 269, title: "Alien Dictionary", difficulty: "Hard", url: "https://leetcode.com/problems/alien-dictionary/" },
      { no: 802, title: "Find Eventual Safe States", difficulty: "Medium", url: "https://leetcode.com/problems/find-eventual-safe-states/" },
      { no: 1203, title: "Sort Items by Groups Respecting Dependencies", difficulty: "Hard", url: "https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/" },
      { no: 2050, title: "Parallel Courses III", difficulty: "Hard", url: "https://leetcode.com/problems/parallel-courses-iii/" }
    ]
  },
  {
    id: "pat-18",
    num: 18,
    name: "Kadane's Algorithm",
    whenToUse: "Maximum / minimum contiguous-subarray problems where a running best can be maintained and combined with a global best.",
    recognitionClues: ["maximum subarray", "maximum sum", "contiguous", "running best", "best ending here", "one deletion", "circular"],
    memoryTrick: "Track the best ending here and the global best; reset when continuing is worse.",
    interviewDrill: "Explain why this pattern fits: at every index i, max sum either starts afresh at nums[i] or extends previous sum in O(n) time & O(1) space.",
    problems: [
      { no: 53, title: "Maximum Subarray", difficulty: "Medium", url: "https://leetcode.com/problems/maximum-subarray/" },
      { no: 918, title: "Maximum Sum Circular Subarray", difficulty: "Medium", url: "https://leetcode.com/problems/maximum-sum-circular-subarray/" },
      { no: 152, title: "Maximum Product Subarray", difficulty: "Medium", url: "https://leetcode.com/problems/maximum-product-subarray/" },
      { no: 1749, title: "Maximum Absolute Sum of Any Subarray", difficulty: "Medium", url: "https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray/" },
      { no: 1191, title: "K-Concatenation Maximum Sum", difficulty: "Medium", url: "https://leetcode.com/problems/k-concatenation-maximum-sum/" },
      { no: 1186, title: "Maximum Subarray Sum with One Deletion", difficulty: "Medium", url: "https://leetcode.com/problems/maximum-subarray-sum-with-one-deletion/" }
    ]
  }
];

const LAST_MINUTE_PATTERN_SCAN = [
  { signal: "Subarray / substring", pattern: "Sliding Window / Prefix Sum" },
  { signal: "Sorted / monotonic search space", pattern: "Binary Search" },
  { signal: "Sorted data / both ends", pattern: "Two Pointers" },
  { signal: "Cycle / middle / repeated state", pattern: "Fast & Slow Pointers" },
  { signal: "Fast lookup / frequency", pattern: "Hash Map / Set" },
  { signal: "All combinations / permutations", pattern: "Backtracking" },
  { signal: "Tree / graph exploration", pattern: "DFS / BFS" },
  { signal: "Shortest steps in unweighted graph", pattern: "BFS" },
  { signal: "Next greater / smaller / span", pattern: "Monotonic Stack" },
  { signal: "Top K / repeated min-max", pattern: "Heap / Priority Queue" },
  { signal: "Local optimum with proof", pattern: "Greedy" },
  { signal: "Ranges / overlaps / meetings", pattern: "Intervals" },
  { signal: "Word prefixes / dictionary", pattern: "Trie" },
  { signal: "Overlapping subproblems / optimization", pattern: "Dynamic Programming" },
  { signal: "Connectivity / merging groups", pattern: "Union Find" },
  { signal: "Dependencies / prerequisites", pattern: "Topological Sort" },
  { signal: "Maximum contiguous subarray / running best", pattern: "Kadane's Algorithm" }
];
