/**
 * DSA 3: Comprehensive Placement Practice Sheet (1055 Problems)
 * Covers 44+ algorithmic topics from Arrays to Advanced Graph Algorithms & Dynamic Programming.
 */
const DSA3_SHEET_DATA = [
  {
    "id": 1,
    "title": "Best Time to Buy and Sell Stock",
    "lc": 121,
    "cat": "ARRAYS",
    "url": "https://leetcode.com/problemset/all/?search=Best%20Time%20to%20Buy%20and%20Sell%20Stock"
  },
  {
    "id": 2,
    "title": "Merge Sorted Array",
    "lc": 88,
    "cat": "ARRAYS",
    "url": "https://leetcode.com/problemset/all/?search=Merge%20Sorted%20Array"
  },
  {
    "id": 3,
    "title": "Find Missing and Repeated Values",
    "lc": 2965,
    "cat": "ARRAYS",
    "url": "https://leetcode.com/problemset/all/?search=Find%20Missing%20and%20Repeated%20Values"
  },
  {
    "id": 4,
    "title": "Two Sum",
    "lc": 1,
    "cat": "ARRAYS",
    "url": "https://leetcode.com/problemset/all/?search=Two%20Sum"
  },
  {
    "id": 5,
    "title": "Contains Duplicate",
    "lc": 217,
    "cat": "ARRAYS",
    "url": "https://leetcode.com/problemset/all/?search=Contains%20Duplicate"
  },
  {
    "id": 6,
    "title": "Maximum Subarray",
    "lc": 53,
    "cat": "ARRAYS",
    "url": "https://leetcode.com/problemset/all/?search=Maximum%20Subarray"
  },
  {
    "id": 7,
    "title": "Move Zeroes",
    "lc": 283,
    "cat": "ARRAYS",
    "url": "https://leetcode.com/problemset/all/?search=Move%20Zeroes"
  },
  {
    "id": 8,
    "title": "Remove Duplicates from Sorted Array",
    "lc": 26,
    "cat": "ARRAYS",
    "url": "https://leetcode.com/problemset/all/?search=Remove%20Duplicates%20from%20Sorted%20Array"
  },
  {
    "id": 9,
    "title": "Majority Element",
    "lc": 169,
    "cat": "ARRAYS",
    "url": "https://leetcode.com/problemset/all/?search=Majority%20Element"
  },
  {
    "id": 10,
    "title": "Rotate Array",
    "lc": 189,
    "cat": "ARRAYS",
    "url": "https://leetcode.com/problemset/all/?search=Rotate%20Array"
  },
  {
    "id": 11,
    "title": "Missing Number",
    "lc": 268,
    "cat": "ARRAYS",
    "url": "https://leetcode.com/problemset/all/?search=Missing%20Number"
  },
  {
    "id": 12,
    "title": "Single Number",
    "lc": 136,
    "cat": "ARRAYS",
    "url": "https://leetcode.com/problemset/all/?search=Single%20Number"
  },
  {
    "id": 13,
    "title": "Jump Game II",
    "lc": 45,
    "cat": "ARRAYS",
    "url": "https://leetcode.com/problemset/all/?search=Jump%20Game%20II"
  },
  {
    "id": 14,
    "title": "3Sum",
    "lc": 15,
    "cat": "ARRAYS",
    "url": "https://leetcode.com/problemset/all/?search=3Sum"
  },
  {
    "id": 15,
    "title": "Container With Most Water",
    "lc": 11,
    "cat": "ARRAYS",
    "url": "https://leetcode.com/problemset/all/?search=Container%20With%20Most%20Water"
  },
  {
    "id": 16,
    "title": "Product of Array Except Self",
    "lc": 238,
    "cat": "ARRAYS",
    "url": "https://leetcode.com/problemset/all/?search=Product%20of%20Array%20Except%20Self"
  },
  {
    "id": 17,
    "title": "Subarray Sum Equals K",
    "lc": 560,
    "cat": "ARRAYS",
    "url": "https://leetcode.com/problemset/all/?search=Subarray%20Sum%20Equals%20K"
  },
  {
    "id": 18,
    "title": "Maximum Product Subarray",
    "lc": 152,
    "cat": "ARRAYS",
    "url": "https://leetcode.com/problemset/all/?search=Maximum%20Product%20Subarray"
  },
  {
    "id": 19,
    "title": "Sort Colors",
    "lc": 75,
    "cat": "ARRAYS",
    "url": "https://leetcode.com/problemset/all/?search=Sort%20Colors"
  },
  {
    "id": 20,
    "title": "Next Permutation",
    "lc": 31,
    "cat": "ARRAYS",
    "url": "https://leetcode.com/problemset/all/?search=Next%20Permutation"
  },
  {
    "id": 21,
    "title": "Merge Intervals",
    "lc": 56,
    "cat": "ARRAYS",
    "url": "https://leetcode.com/problemset/all/?search=Merge%20Intervals"
  },
  {
    "id": 22,
    "title": "Insert Interval",
    "lc": 57,
    "cat": "ARRAYS",
    "url": "https://leetcode.com/problemset/all/?search=Insert%20Interval"
  },
  {
    "id": 23,
    "title": "Non-overlapping Intervals",
    "lc": 435,
    "cat": "ARRAYS",
    "url": "https://leetcode.com/problemset/all/?search=Non-overlapping%20Intervals"
  },
  {
    "id": 24,
    "title": "Longest Consecutive Sequence",
    "lc": 128,
    "cat": "ARRAYS",
    "url": "https://leetcode.com/problemset/all/?search=Longest%20Consecutive%20Sequence"
  },
  {
    "id": 25,
    "title": "Set Matrix Zeroes",
    "lc": 73,
    "cat": "ARRAYS",
    "url": "https://leetcode.com/problemset/all/?search=Set%20Matrix%20Zeroes"
  },
  {
    "id": 26,
    "title": "Spiral Matrix",
    "lc": 54,
    "cat": "ARRAYS",
    "url": "https://leetcode.com/problemset/all/?search=Spiral%20Matrix"
  },
  {
    "id": 27,
    "title": "Rotate Image",
    "lc": 48,
    "cat": "ARRAYS",
    "url": "https://leetcode.com/problemset/all/?search=Rotate%20Image"
  },
  {
    "id": 28,
    "title": "Kth Largest Element in an Array",
    "lc": 215,
    "cat": "ARRAYS",
    "url": "https://leetcode.com/problemset/all/?search=Kth%20Largest%20Element%20in%20an%20Array"
  },
  {
    "id": 29,
    "title": "Product of Array Except Self",
    "lc": 238,
    "cat": "PREFIX/SUFFIX TECHNIQUES",
    "url": "https://leetcode.com/problemset/all/?search=Product%20of%20Array%20Except%20Self"
  },
  {
    "id": 30,
    "title": "Maximum Subarray",
    "lc": 53,
    "cat": "PREFIX/SUFFIX TECHNIQUES",
    "url": "https://leetcode.com/problemset/all/?search=Maximum%20Subarray"
  },
  {
    "id": 31,
    "title": "Subarray Sum Equals K",
    "lc": 560,
    "cat": "PREFIX/SUFFIX TECHNIQUES",
    "url": "https://leetcode.com/problemset/all/?search=Subarray%20Sum%20Equals%20K"
  },
  {
    "id": 32,
    "title": "Find Pivot Index",
    "lc": 724,
    "cat": "PREFIX/SUFFIX TECHNIQUES",
    "url": "https://leetcode.com/problemset/all/?search=Find%20Pivot%20Index"
  },
  {
    "id": 33,
    "title": "Range Sum Query – Immutable",
    "lc": 303,
    "cat": "PREFIX/SUFFIX TECHNIQUES",
    "url": "https://leetcode.com/problemset/all/?search=Range%20Sum%20Query%20%E2%80%93%20Immutable"
  },
  {
    "id": 34,
    "title": "Subarray Sums Divisible by K",
    "lc": 974,
    "cat": "PREFIX/SUFFIX TECHNIQUES",
    "url": "https://leetcode.com/problemset/all/?search=Subarray%20Sums%20Divisible%20by%20K"
  },
  {
    "id": 35,
    "title": "Continuous Subarray Sum",
    "lc": 523,
    "cat": "PREFIX/SUFFIX TECHNIQUES",
    "url": "https://leetcode.com/problemset/all/?search=Continuous%20Subarray%20Sum"
  },
  {
    "id": 36,
    "title": "Running Sum of 1d Array",
    "lc": 1480,
    "cat": "PREFIX/SUFFIX TECHNIQUES",
    "url": "https://leetcode.com/problemset/all/?search=Running%20Sum%20of%201d%20Array"
  },
  {
    "id": 37,
    "title": "Minimum Value to Get Positive Step by Step Sum",
    "lc": 1413,
    "cat": "PREFIX/SUFFIX TECHNIQUES",
    "url": "https://leetcode.com/problemset/all/?search=Minimum%20Value%20to%20Get%20Positive%20Step%20by%20Step%20Sum"
  },
  {
    "id": 38,
    "title": "Trapping Rain Water",
    "lc": 42,
    "cat": "PREFIX/SUFFIX TECHNIQUES",
    "url": "https://leetcode.com/problemset/all/?search=Trapping%20Rain%20Water"
  },
  {
    "id": 39,
    "title": "Maximum Product Subarray",
    "lc": 152,
    "cat": "PREFIX/SUFFIX TECHNIQUES",
    "url": "https://leetcode.com/problemset/all/?search=Maximum%20Product%20Subarray"
  },
  {
    "id": 40,
    "title": "Find the Highest Altitude",
    "lc": 1732,
    "cat": "PREFIX/SUFFIX TECHNIQUES",
    "url": "https://leetcode.com/problemset/all/?search=Find%20the%20Highest%20Altitude"
  },
  {
    "id": 41,
    "title": "Maximum Average Subarray I",
    "lc": 643,
    "cat": "Fixed-Size Sliding Window",
    "url": "https://leetcode.com/problemset/all/?search=Maximum%20Average%20Subarray%20I"
  },
  {
    "id": 42,
    "title": "Maximum Points You Can Obtain from Cards",
    "lc": 1423,
    "cat": "Fixed-Size Sliding Window",
    "url": "https://leetcode.com/problemset/all/?search=Maximum%20Points%20You%20Can%20Obtain%20from%20Cards"
  },
  {
    "id": 43,
    "title": "Sliding Window Maximum",
    "lc": 239,
    "cat": "Fixed-Size Sliding Window",
    "url": "https://leetcode.com/problemset/all/?search=Sliding%20Window%20Maximum"
  },
  {
    "id": 44,
    "title": "Find All Anagrams in a String",
    "lc": 438,
    "cat": "Fixed-Size Sliding Window",
    "url": "https://leetcode.com/problemset/all/?search=Find%20All%20Anagrams%20in%20a%20String"
  },
  {
    "id": 45,
    "title": "Permutation in String",
    "lc": 567,
    "cat": "Fixed-Size Sliding Window",
    "url": "https://leetcode.com/problemset/all/?search=Permutation%20in%20String"
  },
  {
    "id": 46,
    "title": "Minimum Size Subarray Sum",
    "lc": 209,
    "cat": "Variable-Size Sliding Window",
    "url": "https://leetcode.com/problemset/all/?search=Minimum%20Size%20Subarray%20Sum"
  },
  {
    "id": 47,
    "title": "Longest Substring Without Repeating Characters",
    "lc": 3,
    "cat": "Variable-Size Sliding Window",
    "url": "https://leetcode.com/problemset/all/?search=Longest%20Substring%20Without%20Repeating%20Characters"
  },
  {
    "id": 48,
    "title": "Longest Repeating Character Replacement",
    "lc": 424,
    "cat": "Variable-Size Sliding Window",
    "url": "https://leetcode.com/problemset/all/?search=Longest%20Repeating%20Character%20Replacement"
  },
  {
    "id": 49,
    "title": "Fruit Into Baskets",
    "lc": 904,
    "cat": "Variable-Size Sliding Window",
    "url": "https://leetcode.com/problemset/all/?search=Fruit%20Into%20Baskets"
  },
  {
    "id": 50,
    "title": "Max Consecutive Ones III",
    "lc": 1004,
    "cat": "Variable-Size Sliding Window",
    "url": "https://leetcode.com/problemset/all/?search=Max%20Consecutive%20Ones%20III"
  },
  {
    "id": 51,
    "title": "Minimum Window Substring",
    "lc": 76,
    "cat": "Variable-Size Sliding Window",
    "url": "https://leetcode.com/problemset/all/?search=Minimum%20Window%20Substring"
  },
  {
    "id": 52,
    "title": "Subarrays with K Different Integers",
    "lc": 992,
    "cat": "Variable-Size Sliding Window",
    "url": "https://leetcode.com/problemset/all/?search=Subarrays%20with%20K%20Different%20Integers"
  },
  {
    "id": 53,
    "title": "Longest Subarray of 1's After Deleting One Element",
    "lc": 1493,
    "cat": "Variable-Size Sliding Window",
    "url": "https://leetcode.com/problemset/all/?search=Longest%20Subarray%20of%201's%20After%20Deleting%20One%20Element"
  },
  {
    "id": 54,
    "title": "Binary Search",
    "lc": 704,
    "cat": "BINARY SEARCH PATTERNS",
    "url": "https://leetcode.com/problemset/all/?search=Binary%20Search"
  },
  {
    "id": 55,
    "title": "Search Insert Position",
    "lc": 35,
    "cat": "BINARY SEARCH PATTERNS",
    "url": "https://leetcode.com/problemset/all/?search=Search%20Insert%20Position"
  },
  {
    "id": 56,
    "title": "First Bad Version",
    "lc": 278,
    "cat": "BINARY SEARCH PATTERNS",
    "url": "https://leetcode.com/problemset/all/?search=First%20Bad%20Version"
  },
  {
    "id": 57,
    "title": "Guess Number Higher or Lower",
    "lc": 374,
    "cat": "BINARY SEARCH PATTERNS",
    "url": "https://leetcode.com/problemset/all/?search=Guess%20Number%20Higher%20or%20Lower"
  },
  {
    "id": 58,
    "title": "Find First and Last Position of Element in Sorted Array",
    "lc": 34,
    "cat": "BINARY SEARCH PATTERNS",
    "url": "https://leetcode.com/problemset/all/?search=Find%20First%20and%20Last%20Position%20of%20Element%20in%20Sorted%20Array"
  },
  {
    "id": 59,
    "title": "Search Insert Position",
    "lc": 35,
    "cat": "BINARY SEARCH PATTERNS",
    "url": "https://leetcode.com/problemset/all/?search=Search%20Insert%20Position"
  },
  {
    "id": 60,
    "title": "Find First and Last Position of Element in Sorted Array",
    "lc": 34,
    "cat": "BINARY SEARCH PATTERNS",
    "url": "https://leetcode.com/problemset/all/?search=Find%20First%20and%20Last%20Position%20of%20Element%20in%20Sorted%20Array"
  },
  {
    "id": 61,
    "title": "Find Smallest Letter Greater Than Target",
    "lc": 744,
    "cat": "BINARY SEARCH PATTERNS",
    "url": "https://leetcode.com/problemset/all/?search=Find%20Smallest%20Letter%20Greater%20Than%20Target"
  },
  {
    "id": 62,
    "title": "Find K Closest Elements",
    "lc": 658,
    "cat": "BINARY SEARCH PATTERNS",
    "url": "https://leetcode.com/problemset/all/?search=Find%20K%20Closest%20Elements"
  },
  {
    "id": 63,
    "title": "Search in Rotated Sorted Array",
    "lc": 33,
    "cat": "BINARY SEARCH PATTERNS",
    "url": "https://leetcode.com/problemset/all/?search=Search%20in%20Rotated%20Sorted%20Array"
  },
  {
    "id": 64,
    "title": "Find Minimum in Rotated Sorted Array",
    "lc": 153,
    "cat": "BINARY SEARCH PATTERNS",
    "url": "https://leetcode.com/problemset/all/?search=Find%20Minimum%20in%20Rotated%20Sorted%20Array"
  },
  {
    "id": 65,
    "title": "Search in Rotated Sorted Array II",
    "lc": 81,
    "cat": "BINARY SEARCH PATTERNS",
    "url": "https://leetcode.com/problemset/all/?search=Search%20in%20Rotated%20Sorted%20Array%20II"
  },
  {
    "id": 66,
    "title": "Find Minimum in Rotated Sorted Array II",
    "lc": 154,
    "cat": "BINARY SEARCH PATTERNS",
    "url": "https://leetcode.com/problemset/all/?search=Find%20Minimum%20in%20Rotated%20Sorted%20Array%20II"
  },
  {
    "id": 67,
    "title": "Sqrt(x)",
    "lc": 69,
    "cat": "BINARY SEARCH PATTERNS",
    "url": "https://leetcode.com/problemset/all/?search=Sqrt(x)"
  },
  {
    "id": 68,
    "title": "Valid Perfect Square",
    "lc": 367,
    "cat": "BINARY SEARCH PATTERNS",
    "url": "https://leetcode.com/problemset/all/?search=Valid%20Perfect%20Square"
  },
  {
    "id": 69,
    "title": "Koko Eating Bananas",
    "lc": 875,
    "cat": "BINARY SEARCH PATTERNS",
    "url": "https://leetcode.com/problemset/all/?search=Koko%20Eating%20Bananas"
  },
  {
    "id": 70,
    "title": "Capacity To Ship Packages Within D Days",
    "lc": 1011,
    "cat": "BINARY SEARCH PATTERNS",
    "url": "https://leetcode.com/problemset/all/?search=Capacity%20To%20Ship%20Packages%20Within%20D%20Days"
  },
  {
    "id": 71,
    "title": "Find the Smallest Divisor Given a Threshold",
    "lc": 1283,
    "cat": "BINARY SEARCH PATTERNS",
    "url": "https://leetcode.com/problemset/all/?search=Find%20the%20Smallest%20Divisor%20Given%20a%20Threshold"
  },
  {
    "id": 72,
    "title": "Minimum Number of Days to Make m Bouquets",
    "lc": 1482,
    "cat": "BINARY SEARCH PATTERNS",
    "url": "https://leetcode.com/problemset/all/?search=Minimum%20Number%20of%20Days%20to%20Make%20m%20Bouquets"
  },
  {
    "id": 73,
    "title": "Split Array Largest Sum",
    "lc": 410,
    "cat": "BINARY SEARCH PATTERNS",
    "url": "https://leetcode.com/problemset/all/?search=Split%20Array%20Largest%20Sum"
  },
  {
    "id": 74,
    "title": "Magnetic Force Between Two Balls",
    "lc": 1552,
    "cat": "BINARY SEARCH PATTERNS",
    "url": "https://leetcode.com/problemset/all/?search=Magnetic%20Force%20Between%20Two%20Balls"
  },
  {
    "id": 75,
    "title": "Minimize Maximum Distance to Gas Station",
    "lc": 774,
    "cat": "BINARY SEARCH PATTERNS",
    "url": "https://leetcode.com/problemset/all/?search=Minimize%20Maximum%20Distance%20to%20Gas%20Station"
  },
  {
    "id": 76,
    "title": "Search a 2D Matrix",
    "lc": 74,
    "cat": "BINARY SEARCH PATTERNS",
    "url": "https://leetcode.com/problemset/all/?search=Search%20a%202D%20Matrix"
  },
  {
    "id": 77,
    "title": "Search a 2D Matrix II",
    "lc": 240,
    "cat": "BINARY SEARCH PATTERNS",
    "url": "https://leetcode.com/problemset/all/?search=Search%20a%202D%20Matrix%20II"
  },
  {
    "id": 78,
    "title": "Kth Smallest Element in a Sorted Matrix",
    "lc": 378,
    "cat": "BINARY SEARCH PATTERNS",
    "url": "https://leetcode.com/problemset/all/?search=Kth%20Smallest%20Element%20in%20a%20Sorted%20Matrix"
  },
  {
    "id": 79,
    "title": "Find a Peak Element II",
    "lc": 1901,
    "cat": "BINARY SEARCH PATTERNS",
    "url": "https://leetcode.com/problemset/all/?search=Find%20a%20Peak%20Element%20II"
  },
  {
    "id": 80,
    "title": "Find Peak Element",
    "lc": 162,
    "cat": "BINARY SEARCH PATTERNS",
    "url": "https://leetcode.com/problemset/all/?search=Find%20Peak%20Element"
  },
  {
    "id": 81,
    "title": "Peak Index in a Mountain Array",
    "lc": 852,
    "cat": "BINARY SEARCH PATTERNS",
    "url": "https://leetcode.com/problemset/all/?search=Peak%20Index%20in%20a%20Mountain%20Array"
  },
  {
    "id": 82,
    "title": "Find in Mountain Array",
    "lc": 1095,
    "cat": "BINARY SEARCH PATTERNS",
    "url": "https://leetcode.com/problemset/all/?search=Find%20in%20Mountain%20Array"
  },
  {
    "id": 83,
    "title": "Find the Duplicate Number",
    "lc": 287,
    "cat": "BINARY SEARCH PATTERNS",
    "url": "https://leetcode.com/problemset/all/?search=Find%20the%20Duplicate%20Number"
  },
  {
    "id": 84,
    "title": "Single Element in a Sorted Array",
    "lc": 540,
    "cat": "BINARY SEARCH PATTERNS",
    "url": "https://leetcode.com/problemset/all/?search=Single%20Element%20in%20a%20Sorted%20Array"
  },
  {
    "id": 85,
    "title": "Median of Two Sorted Arrays",
    "lc": 4,
    "cat": "BINARY SEARCH PATTERNS",
    "url": "https://leetcode.com/problemset/all/?search=Median%20of%20Two%20Sorted%20Arrays"
  },
  {
    "id": 86,
    "title": "Kth Missing Positive Number",
    "lc": 1539,
    "cat": "BINARY SEARCH PATTERNS",
    "url": "https://leetcode.com/problemset/all/?search=Kth%20Missing%20Positive%20Number"
  },
  {
    "id": 87,
    "title": "H-Index II",
    "lc": 275,
    "cat": "BINARY SEARCH PATTERNS",
    "url": "https://leetcode.com/problemset/all/?search=H-Index%20II"
  },
  {
    "id": 88,
    "title": "Find Right Interval",
    "lc": 436,
    "cat": "BINARY SEARCH PATTERNS",
    "url": "https://leetcode.com/problemset/all/?search=Find%20Right%20Interval"
  },
  {
    "id": 89,
    "title": "Time Based Key-Value Store",
    "lc": 981,
    "cat": "BINARY SEARCH PATTERNS",
    "url": "https://leetcode.com/problemset/all/?search=Time%20Based%20Key-Value%20Store"
  },
  {
    "id": 90,
    "title": "Sqrt(x)",
    "lc": 69,
    "cat": "PARAMETRIC SEARCH",
    "url": "https://leetcode.com/problemset/all/?search=Sqrt(x)"
  },
  {
    "id": 91,
    "title": "Valid Perfect Square",
    "lc": 367,
    "cat": "PARAMETRIC SEARCH",
    "url": "https://leetcode.com/problemset/all/?search=Valid%20Perfect%20Square"
  },
  {
    "id": 92,
    "title": "Koko Eating Bananas",
    "lc": 875,
    "cat": "PARAMETRIC SEARCH",
    "url": "https://leetcode.com/problemset/all/?search=Koko%20Eating%20Bananas"
  },
  {
    "id": 93,
    "title": "Capacity To Ship Packages Within D Days",
    "lc": 1011,
    "cat": "PARAMETRIC SEARCH",
    "url": "https://leetcode.com/problemset/all/?search=Capacity%20To%20Ship%20Packages%20Within%20D%20Days"
  },
  {
    "id": 94,
    "title": "Find the Smallest Divisor Given a Threshold",
    "lc": 1283,
    "cat": "PARAMETRIC SEARCH",
    "url": "https://leetcode.com/problemset/all/?search=Find%20the%20Smallest%20Divisor%20Given%20a%20Threshold"
  },
  {
    "id": 95,
    "title": "Minimum Number of Days to Make m Bouquets",
    "lc": 1482,
    "cat": "PARAMETRIC SEARCH",
    "url": "https://leetcode.com/problemset/all/?search=Minimum%20Number%20of%20Days%20to%20Make%20m%20Bouquets"
  },
  {
    "id": 96,
    "title": "Magnetic Force Between Two Balls",
    "lc": 1552,
    "cat": "PARAMETRIC SEARCH",
    "url": "https://leetcode.com/problemset/all/?search=Magnetic%20Force%20Between%20Two%20Balls"
  },
  {
    "id": 97,
    "title": "Split Array Largest Sum",
    "lc": 410,
    "cat": "PARAMETRIC SEARCH",
    "url": "https://leetcode.com/problemset/all/?search=Split%20Array%20Largest%20Sum"
  },
  {
    "id": 98,
    "title": "Minimize Maximum Distance to Gas Station",
    "lc": 774,
    "cat": "PARAMETRIC SEARCH",
    "url": "https://leetcode.com/problemset/all/?search=Minimize%20Maximum%20Distance%20to%20Gas%20Station"
  },
  {
    "id": 99,
    "title": "Maximum Candies Allocated to K Children",
    "lc": 2226,
    "cat": "PARAMETRIC SEARCH",
    "url": "https://leetcode.com/problemset/all/?search=Maximum%20Candies%20Allocated%20to%20K%20Children"
  },
  {
    "id": 100,
    "title": "Maximum Running Time of N Computers",
    "lc": 2141,
    "cat": "PARAMETRIC SEARCH",
    "url": "https://leetcode.com/problemset/all/?search=Maximum%20Running%20Time%20of%20N%20Computers"
  },
  {
    "id": 101,
    "title": "Minimum Time to Complete Trips",
    "lc": 2187,
    "cat": "PARAMETRIC SEARCH",
    "url": "https://leetcode.com/problemset/all/?search=Minimum%20Time%20to%20Complete%20Trips"
  },
  {
    "id": 102,
    "title": "Minimum Time to Repair Cars",
    "lc": 2594,
    "cat": "PARAMETRIC SEARCH",
    "url": "https://leetcode.com/problemset/all/?search=Minimum%20Time%20to%20Repair%20Cars"
  },
  {
    "id": 103,
    "title": "House Robber IV",
    "lc": 2560,
    "cat": "PARAMETRIC SEARCH",
    "url": "https://leetcode.com/problemset/all/?search=House%20Robber%20IV"
  },
  {
    "id": 104,
    "title": "Minimize the Maximum of Two Arrays",
    "lc": 2513,
    "cat": "PARAMETRIC SEARCH",
    "url": "https://leetcode.com/problemset/all/?search=Minimize%20the%20Maximum%20of%20Two%20Arrays"
  },
  {
    "id": 105,
    "title": "Minimum Limit of Balls in a Bag",
    "lc": 1760,
    "cat": "PARAMETRIC SEARCH",
    "url": "https://leetcode.com/problemset/all/?search=Minimum%20Limit%20of%20Balls%20in%20a%20Bag"
  },
  {
    "id": 106,
    "title": "Maximum Tastiness of Candy Basket",
    "lc": 2517,
    "cat": "PARAMETRIC SEARCH",
    "url": "https://leetcode.com/problemset/all/?search=Maximum%20Tastiness%20of%20Candy%20Basket"
  },
  {
    "id": 107,
    "title": "Minimum Speed to Arrive on Time",
    "lc": 1870,
    "cat": "PARAMETRIC SEARCH",
    "url": "https://leetcode.com/problemset/all/?search=Minimum%20Speed%20to%20Arrive%20on%20Time"
  },
  {
    "id": 108,
    "title": "Maximum Number of Removable Characters",
    "lc": 1898,
    "cat": "PARAMETRIC SEARCH",
    "url": "https://leetcode.com/problemset/all/?search=Maximum%20Number%20of%20Removable%20Characters"
  },
  {
    "id": 109,
    "title": "Aggressive Cows",
    "lc": null,
    "cat": "PARAMETRIC SEARCH",
    "url": "https://www.google.com/search?q=Aggressive%20Cows%20practice%20problem"
  },
  {
    "id": 110,
    "title": "Book Allocation Problem",
    "lc": null,
    "cat": "PARAMETRIC SEARCH",
    "url": "https://www.google.com/search?q=Book%20Allocation%20Problem%20practice%20problem"
  },
  {
    "id": 111,
    "title": "Painter's Partition Problem",
    "lc": null,
    "cat": "PARAMETRIC SEARCH",
    "url": "https://www.google.com/search?q=Painter's%20Partition%20Problem%20practice%20problem"
  },
  {
    "id": 112,
    "title": "Merge Two Sorted Lists",
    "lc": 21,
    "cat": "LINKED LIST",
    "url": "https://leetcode.com/problemset/all/?search=Merge%20Two%20Sorted%20Lists"
  },
  {
    "id": 113,
    "title": "Middle of the Linked List",
    "lc": 876,
    "cat": "LINKED LIST",
    "url": "https://leetcode.com/problemset/all/?search=Middle%20of%20the%20Linked%20List"
  },
  {
    "id": 114,
    "title": "Add Two Numbers",
    "lc": 2,
    "cat": "LINKED LIST",
    "url": "https://leetcode.com/problemset/all/?search=Add%20Two%20Numbers"
  },
  {
    "id": 115,
    "title": "Palindrome Linked List",
    "lc": 234,
    "cat": "LINKED LIST",
    "url": "https://leetcode.com/problemset/all/?search=Palindrome%20Linked%20List"
  },
  {
    "id": 116,
    "title": "Linked List Cycle",
    "lc": 141,
    "cat": "LINKED LIST",
    "url": "https://leetcode.com/problemset/all/?search=Linked%20List%20Cycle"
  },
  {
    "id": 117,
    "title": "Linked List Cycle II",
    "lc": 142,
    "cat": "LINKED LIST",
    "url": "https://leetcode.com/problemset/all/?search=Linked%20List%20Cycle%20II"
  },
  {
    "id": 118,
    "title": "Remove Nth Node From End of List",
    "lc": 19,
    "cat": "LINKED LIST",
    "url": "https://leetcode.com/problemset/all/?search=Remove%20Nth%20Node%20From%20End%20of%20List"
  },
  {
    "id": 119,
    "title": "Intersection of Two Linked Lists",
    "lc": 160,
    "cat": "LINKED LIST",
    "url": "https://leetcode.com/problemset/all/?search=Intersection%20of%20Two%20Linked%20Lists"
  },
  {
    "id": 120,
    "title": "Reverse Linked List",
    "lc": 206,
    "cat": "LINKED LIST",
    "url": "https://leetcode.com/problemset/all/?search=Reverse%20Linked%20List"
  },
  {
    "id": 121,
    "title": "Reverse Linked List II",
    "lc": 92,
    "cat": "LINKED LIST",
    "url": "https://leetcode.com/problemset/all/?search=Reverse%20Linked%20List%20II"
  },
  {
    "id": 122,
    "title": "Reorder List",
    "lc": 143,
    "cat": "LINKED LIST",
    "url": "https://leetcode.com/problemset/all/?search=Reorder%20List"
  },
  {
    "id": 123,
    "title": "Remove Duplicates from Sorted List",
    "lc": 83,
    "cat": "LINKED LIST",
    "url": "https://leetcode.com/problemset/all/?search=Remove%20Duplicates%20from%20Sorted%20List"
  },
  {
    "id": 124,
    "title": "Remove Duplicates from Sorted List II",
    "lc": 82,
    "cat": "LINKED LIST",
    "url": "https://leetcode.com/problemset/all/?search=Remove%20Duplicates%20from%20Sorted%20List%20II"
  },
  {
    "id": 125,
    "title": "Delete the Middle Node of a Linked List",
    "lc": 2095,
    "cat": "LINKED LIST",
    "url": "https://leetcode.com/problemset/all/?search=Delete%20the%20Middle%20Node%20of%20a%20Linked%20List"
  },
  {
    "id": 126,
    "title": "Rotate List",
    "lc": 61,
    "cat": "LINKED LIST",
    "url": "https://leetcode.com/problemset/all/?search=Rotate%20List"
  },
  {
    "id": 127,
    "title": "Odd Even Linked List",
    "lc": 328,
    "cat": "LINKED LIST",
    "url": "https://leetcode.com/problemset/all/?search=Odd%20Even%20Linked%20List"
  },
  {
    "id": 128,
    "title": "Sort List",
    "lc": 148,
    "cat": "LINKED LIST",
    "url": "https://leetcode.com/problemset/all/?search=Sort%20List"
  },
  {
    "id": 129,
    "title": "Flatten a Multilevel Doubly Linked List",
    "lc": 430,
    "cat": "LINKED LIST",
    "url": "https://leetcode.com/problemset/all/?search=Flatten%20a%20Multilevel%20Doubly%20Linked%20List"
  },
  {
    "id": 130,
    "title": "Reverse Nodes in k-Group",
    "lc": 25,
    "cat": "LINKED LIST",
    "url": "https://leetcode.com/problemset/all/?search=Reverse%20Nodes%20in%20k-Group"
  },
  {
    "id": 131,
    "title": "Copy List with Random Pointer",
    "lc": 138,
    "cat": "LINKED LIST",
    "url": "https://leetcode.com/problemset/all/?search=Copy%20List%20with%20Random%20Pointer"
  },
  {
    "id": 132,
    "title": "Merge k Sorted Lists",
    "lc": 23,
    "cat": "LINKED LIST",
    "url": "https://leetcode.com/problemset/all/?search=Merge%20k%20Sorted%20Lists"
  },
  {
    "id": 133,
    "title": "LRU Cache",
    "lc": 146,
    "cat": "LINKED LIST",
    "url": "https://leetcode.com/problemset/all/?search=LRU%20Cache"
  },
  {
    "id": 134,
    "title": "Swap Nodes in Pairs",
    "lc": 24,
    "cat": "LINKED LIST",
    "url": "https://leetcode.com/problemset/all/?search=Swap%20Nodes%20in%20Pairs"
  },
  {
    "id": 135,
    "title": "Split Linked List in Parts",
    "lc": 725,
    "cat": "LINKED LIST",
    "url": "https://leetcode.com/problemset/all/?search=Split%20Linked%20List%20in%20Parts"
  },
  {
    "id": 136,
    "title": "Middle of the Linked List",
    "lc": 876,
    "cat": "FAST & SLOW POINTER",
    "url": "https://leetcode.com/problemset/all/?search=Middle%20of%20the%20Linked%20List"
  },
  {
    "id": 137,
    "title": "Linked List Cycle",
    "lc": 141,
    "cat": "FAST & SLOW POINTER",
    "url": "https://leetcode.com/problemset/all/?search=Linked%20List%20Cycle"
  },
  {
    "id": 138,
    "title": "Linked List Cycle II",
    "lc": 142,
    "cat": "FAST & SLOW POINTER",
    "url": "https://leetcode.com/problemset/all/?search=Linked%20List%20Cycle%20II"
  },
  {
    "id": 139,
    "title": "Palindrome Linked List",
    "lc": 234,
    "cat": "FAST & SLOW POINTER",
    "url": "https://leetcode.com/problemset/all/?search=Palindrome%20Linked%20List"
  },
  {
    "id": 140,
    "title": "Remove Nth Node From End of List",
    "lc": 19,
    "cat": "FAST & SLOW POINTER",
    "url": "https://leetcode.com/problemset/all/?search=Remove%20Nth%20Node%20From%20End%20of%20List"
  },
  {
    "id": 141,
    "title": "Reorder List",
    "lc": 143,
    "cat": "FAST & SLOW POINTER",
    "url": "https://leetcode.com/problemset/all/?search=Reorder%20List"
  },
  {
    "id": 142,
    "title": "Find the Duplicate Number",
    "lc": 287,
    "cat": "FAST & SLOW POINTER",
    "url": "https://leetcode.com/problemset/all/?search=Find%20the%20Duplicate%20Number"
  },
  {
    "id": 143,
    "title": "Valid Parentheses",
    "lc": 20,
    "cat": "STACK",
    "url": "https://leetcode.com/problemset/all/?search=Valid%20Parentheses"
  },
  {
    "id": 144,
    "title": "Min Stack",
    "lc": 155,
    "cat": "STACK",
    "url": "https://leetcode.com/problemset/all/?search=Min%20Stack"
  },
  {
    "id": 145,
    "title": "Implement Stack using Queues",
    "lc": 225,
    "cat": "STACK",
    "url": "https://leetcode.com/problemset/all/?search=Implement%20Stack%20using%20Queues"
  },
  {
    "id": 146,
    "title": "Implement Queue using Stacks",
    "lc": 232,
    "cat": "STACK",
    "url": "https://leetcode.com/problemset/all/?search=Implement%20Queue%20using%20Stacks"
  },
  {
    "id": 147,
    "title": "Evaluate Reverse Polish Notation",
    "lc": 150,
    "cat": "STACK",
    "url": "https://leetcode.com/problemset/all/?search=Evaluate%20Reverse%20Polish%20Notation"
  },
  {
    "id": 148,
    "title": "Daily Temperatures",
    "lc": 739,
    "cat": "STACK",
    "url": "https://leetcode.com/problemset/all/?search=Daily%20Temperatures"
  },
  {
    "id": 149,
    "title": "Next Greater Element I",
    "lc": 496,
    "cat": "STACK",
    "url": "https://leetcode.com/problemset/all/?search=Next%20Greater%20Element%20I"
  },
  {
    "id": 150,
    "title": "Next Greater Element II",
    "lc": 503,
    "cat": "STACK",
    "url": "https://leetcode.com/problemset/all/?search=Next%20Greater%20Element%20II"
  },
  {
    "id": 151,
    "title": "Next Greater Element III",
    "lc": 556,
    "cat": "STACK",
    "url": "https://leetcode.com/problemset/all/?search=Next%20Greater%20Element%20III"
  },
  {
    "id": 152,
    "title": "Largest Rectangle in Histogram",
    "lc": 84,
    "cat": "STACK",
    "url": "https://leetcode.com/problemset/all/?search=Largest%20Rectangle%20in%20Histogram"
  },
  {
    "id": 153,
    "title": "Maximal Rectangle",
    "lc": 85,
    "cat": "STACK",
    "url": "https://leetcode.com/problemset/all/?search=Maximal%20Rectangle"
  },
  {
    "id": 154,
    "title": "Remove K Digits",
    "lc": 402,
    "cat": "STACK",
    "url": "https://leetcode.com/problemset/all/?search=Remove%20K%20Digits"
  },
  {
    "id": 155,
    "title": "Decode String",
    "lc": 394,
    "cat": "STACK",
    "url": "https://leetcode.com/problemset/all/?search=Decode%20String"
  },
  {
    "id": 156,
    "title": "Simplify Path",
    "lc": 71,
    "cat": "STACK",
    "url": "https://leetcode.com/problemset/all/?search=Simplify%20Path"
  },
  {
    "id": 157,
    "title": "Asteroid Collision",
    "lc": 735,
    "cat": "STACK",
    "url": "https://leetcode.com/problemset/all/?search=Asteroid%20Collision"
  },
  {
    "id": 158,
    "title": "Car Fleet",
    "lc": 853,
    "cat": "STACK",
    "url": "https://leetcode.com/problemset/all/?search=Car%20Fleet"
  },
  {
    "id": 159,
    "title": "Online Stock Span",
    "lc": 901,
    "cat": "STACK",
    "url": "https://leetcode.com/problemset/all/?search=Online%20Stock%20Span"
  },
  {
    "id": 160,
    "title": "Basic Calculator II",
    "lc": 227,
    "cat": "STACK",
    "url": "https://leetcode.com/problemset/all/?search=Basic%20Calculator%20II"
  },
  {
    "id": 161,
    "title": "Basic Calculator",
    "lc": 224,
    "cat": "STACK",
    "url": "https://leetcode.com/problemset/all/?search=Basic%20Calculator"
  },
  {
    "id": 162,
    "title": "Trapping Rain Water",
    "lc": 42,
    "cat": "STACK",
    "url": "https://leetcode.com/problemset/all/?search=Trapping%20Rain%20Water"
  },
  {
    "id": 163,
    "title": "Remove All Adjacent Duplicates in String",
    "lc": 1047,
    "cat": "STACK",
    "url": "https://leetcode.com/problemset/all/?search=Remove%20All%20Adjacent%20Duplicates%20in%20String"
  },
  {
    "id": 164,
    "title": "Remove All Adjacent Duplicates in String II",
    "lc": 1209,
    "cat": "STACK",
    "url": "https://leetcode.com/problemset/all/?search=Remove%20All%20Adjacent%20Duplicates%20in%20String%20II"
  },
  {
    "id": 165,
    "title": "Backspace String Compare",
    "lc": 844,
    "cat": "STACK",
    "url": "https://leetcode.com/problemset/all/?search=Backspace%20String%20Compare"
  },
  {
    "id": 166,
    "title": "Minimum Add to Make Parentheses Valid",
    "lc": 921,
    "cat": "STACK",
    "url": "https://leetcode.com/problemset/all/?search=Minimum%20Add%20to%20Make%20Parentheses%20Valid"
  },
  {
    "id": 167,
    "title": "Minimum Remove to Make Valid Parentheses",
    "lc": 1249,
    "cat": "STACK",
    "url": "https://leetcode.com/problemset/all/?search=Minimum%20Remove%20to%20Make%20Valid%20Parentheses"
  },
  {
    "id": 168,
    "title": "Score of Parentheses",
    "lc": 856,
    "cat": "STACK",
    "url": "https://leetcode.com/problemset/all/?search=Score%20of%20Parentheses"
  },
  {
    "id": 169,
    "title": "Make The String Great",
    "lc": 1544,
    "cat": "STACK",
    "url": "https://leetcode.com/problemset/all/?search=Make%20The%20String%20Great"
  },
  {
    "id": 170,
    "title": "Find the Most Competitive Subsequence",
    "lc": 1673,
    "cat": "STACK",
    "url": "https://leetcode.com/problemset/all/?search=Find%20the%20Most%20Competitive%20Subsequence"
  },
  {
    "id": 171,
    "title": "Implement Queue using Stacks",
    "lc": 232,
    "cat": "QUEUE",
    "url": "https://leetcode.com/problemset/all/?search=Implement%20Queue%20using%20Stacks"
  },
  {
    "id": 172,
    "title": "Implement Stack using Queues",
    "lc": 225,
    "cat": "QUEUE",
    "url": "https://leetcode.com/problemset/all/?search=Implement%20Stack%20using%20Queues"
  },
  {
    "id": 173,
    "title": "Design Circular Queue",
    "lc": 622,
    "cat": "QUEUE",
    "url": "https://leetcode.com/problemset/all/?search=Design%20Circular%20Queue"
  },
  {
    "id": 174,
    "title": "Number of Recent Calls",
    "lc": 933,
    "cat": "QUEUE",
    "url": "https://leetcode.com/problemset/all/?search=Number%20of%20Recent%20Calls"
  },
  {
    "id": 175,
    "title": "Number of Islands",
    "lc": 200,
    "cat": "QUEUE",
    "url": "https://leetcode.com/problemset/all/?search=Number%20of%20Islands"
  },
  {
    "id": 176,
    "title": "Binary Tree Level Order Traversal",
    "lc": 102,
    "cat": "QUEUE",
    "url": "https://leetcode.com/problemset/all/?search=Binary%20Tree%20Level%20Order%20Traversal"
  },
  {
    "id": 177,
    "title": "Binary Tree Zigzag Level Order Traversal",
    "lc": 103,
    "cat": "QUEUE",
    "url": "https://leetcode.com/problemset/all/?search=Binary%20Tree%20Zigzag%20Level%20Order%20Traversal"
  },
  {
    "id": 178,
    "title": "Rotting Oranges",
    "lc": 994,
    "cat": "QUEUE",
    "url": "https://leetcode.com/problemset/all/?search=Rotting%20Oranges"
  },
  {
    "id": 179,
    "title": "Open the Lock",
    "lc": 752,
    "cat": "QUEUE",
    "url": "https://leetcode.com/problemset/all/?search=Open%20the%20Lock"
  },
  {
    "id": 180,
    "title": "Perfect Squares",
    "lc": 279,
    "cat": "QUEUE",
    "url": "https://leetcode.com/problemset/all/?search=Perfect%20Squares"
  },
  {
    "id": 181,
    "title": "Word Ladder",
    "lc": 127,
    "cat": "QUEUE",
    "url": "https://leetcode.com/problemset/all/?search=Word%20Ladder"
  },
  {
    "id": 182,
    "title": "Sliding Window Maximum",
    "lc": 239,
    "cat": "QUEUE",
    "url": "https://leetcode.com/problemset/all/?search=Sliding%20Window%20Maximum"
  },
  {
    "id": 183,
    "title": "Reveal Cards In Increasing Order",
    "lc": 950,
    "cat": "QUEUE",
    "url": "https://leetcode.com/problemset/all/?search=Reveal%20Cards%20In%20Increasing%20Order"
  },
  {
    "id": 184,
    "title": "Dota2 Senate",
    "lc": 649,
    "cat": "QUEUE",
    "url": "https://leetcode.com/problemset/all/?search=Dota2%20Senate"
  },
  {
    "id": 185,
    "title": "Time Needed to Buy Tickets",
    "lc": 2073,
    "cat": "QUEUE",
    "url": "https://leetcode.com/problemset/all/?search=Time%20Needed%20to%20Buy%20Tickets"
  },
  {
    "id": 186,
    "title": "Number of Students Unable to Eat Lunch",
    "lc": 1700,
    "cat": "QUEUE",
    "url": "https://leetcode.com/problemset/all/?search=Number%20of%20Students%20Unable%20to%20Eat%20Lunch"
  },
  {
    "id": 187,
    "title": "First Unique Character in a String",
    "lc": 387,
    "cat": "QUEUE",
    "url": "https://leetcode.com/problemset/all/?search=First%20Unique%20Character%20in%20a%20String"
  },
  {
    "id": 188,
    "title": "Moving Average from Data Stream",
    "lc": 346,
    "cat": "QUEUE",
    "url": "https://leetcode.com/problemset/all/?search=Moving%20Average%20from%20Data%20Stream"
  },
  {
    "id": 189,
    "title": "Design Front Middle Back Queue",
    "lc": 1670,
    "cat": "QUEUE",
    "url": "https://leetcode.com/problemset/all/?search=Design%20Front%20Middle%20Back%20Queue"
  },
  {
    "id": 190,
    "title": "Shortest Path in Binary Matrix",
    "lc": 1091,
    "cat": "QUEUE",
    "url": "https://leetcode.com/problemset/all/?search=Shortest%20Path%20in%20Binary%20Matrix"
  },
  {
    "id": 191,
    "title": "Next Greater Element I",
    "lc": 496,
    "cat": "MONOTONIC STACK & QUEUE",
    "url": "https://leetcode.com/problemset/all/?search=Next%20Greater%20Element%20I"
  },
  {
    "id": 192,
    "title": "Next Greater Element II",
    "lc": 503,
    "cat": "MONOTONIC STACK & QUEUE",
    "url": "https://leetcode.com/problemset/all/?search=Next%20Greater%20Element%20II"
  },
  {
    "id": 193,
    "title": "Daily Temperatures",
    "lc": 739,
    "cat": "MONOTONIC STACK & QUEUE",
    "url": "https://leetcode.com/problemset/all/?search=Daily%20Temperatures"
  },
  {
    "id": 194,
    "title": "Online Stock Span",
    "lc": 901,
    "cat": "MONOTONIC STACK & QUEUE",
    "url": "https://leetcode.com/problemset/all/?search=Online%20Stock%20Span"
  },
  {
    "id": 195,
    "title": "Largest Rectangle in Histogram",
    "lc": 84,
    "cat": "MONOTONIC STACK & QUEUE",
    "url": "https://leetcode.com/problemset/all/?search=Largest%20Rectangle%20in%20Histogram"
  },
  {
    "id": 196,
    "title": "Maximal Rectangle",
    "lc": 85,
    "cat": "MONOTONIC STACK & QUEUE",
    "url": "https://leetcode.com/problemset/all/?search=Maximal%20Rectangle"
  },
  {
    "id": 197,
    "title": "Trapping Rain Water",
    "lc": 42,
    "cat": "MONOTONIC STACK & QUEUE",
    "url": "https://leetcode.com/problemset/all/?search=Trapping%20Rain%20Water"
  },
  {
    "id": 198,
    "title": "Remove K Digits",
    "lc": 402,
    "cat": "MONOTONIC STACK & QUEUE",
    "url": "https://leetcode.com/problemset/all/?search=Remove%20K%20Digits"
  },
  {
    "id": 199,
    "title": "Most Competitive Subsequence",
    "lc": 1673,
    "cat": "MONOTONIC STACK & QUEUE",
    "url": "https://leetcode.com/problemset/all/?search=Most%20Competitive%20Subsequence"
  },
  {
    "id": 200,
    "title": "Sum of Subarray Minimums",
    "lc": 907,
    "cat": "MONOTONIC STACK & QUEUE",
    "url": "https://leetcode.com/problemset/all/?search=Sum%20of%20Subarray%20Minimums"
  },
  {
    "id": 201,
    "title": "Sum of Subarray Ranges",
    "lc": 2104,
    "cat": "MONOTONIC STACK & QUEUE",
    "url": "https://leetcode.com/problemset/all/?search=Sum%20of%20Subarray%20Ranges"
  },
  {
    "id": 202,
    "title": "Remove Nodes From Linked List",
    "lc": 2487,
    "cat": "MONOTONIC STACK & QUEUE",
    "url": "https://leetcode.com/problemset/all/?search=Remove%20Nodes%20From%20Linked%20List"
  },
  {
    "id": 203,
    "title": "Final Prices With a Special Discount in a Shop",
    "lc": 1475,
    "cat": "MONOTONIC STACK & QUEUE",
    "url": "https://leetcode.com/problemset/all/?search=Final%20Prices%20With%20a%20Special%20Discount%20in%20a%20Shop"
  },
  {
    "id": 204,
    "title": "Shortest Subarray with Sum at Least K",
    "lc": 862,
    "cat": "MONOTONIC STACK & QUEUE",
    "url": "https://leetcode.com/problemset/all/?search=Shortest%20Subarray%20with%20Sum%20at%20Least%20K"
  },
  {
    "id": 205,
    "title": "Sliding Window Maximum",
    "lc": 239,
    "cat": "MONOTONIC STACK & QUEUE",
    "url": "https://leetcode.com/problemset/all/?search=Sliding%20Window%20Maximum"
  },
  {
    "id": 206,
    "title": "Constrained Subsequence Sum",
    "lc": 1425,
    "cat": "MONOTONIC STACK & QUEUE",
    "url": "https://leetcode.com/problemset/all/?search=Constrained%20Subsequence%20Sum"
  },
  {
    "id": 207,
    "title": "Jump Game VI",
    "lc": 1696,
    "cat": "MONOTONIC STACK & QUEUE",
    "url": "https://leetcode.com/problemset/all/?search=Jump%20Game%20VI"
  },
  {
    "id": 208,
    "title": "Longest Continuous Subarray With Absolute Diff <= Limit",
    "lc": 1438,
    "cat": "MONOTONIC STACK & QUEUE",
    "url": "https://leetcode.com/problemset/all/?search=Longest%20Continuous%20Subarray%20With%20Absolute%20Diff%20%3C%3D%20Limit"
  },
  {
    "id": 209,
    "title": "Constrained Subsequence Sum",
    "lc": 1425,
    "cat": "MONOTONIC STACK & QUEUE",
    "url": "https://leetcode.com/problemset/all/?search=Constrained%20Subsequence%20Sum"
  },
  {
    "id": 210,
    "title": "Maximum of Minimum Values in All Subarrays",
    "lc": null,
    "cat": "MONOTONIC STACK & QUEUE",
    "url": "https://www.google.com/search?q=Maximum%20of%20Minimum%20Values%20in%20All%20Subarrays%20practice%20problem"
  },
  {
    "id": 211,
    "title": "Binary Tree Preorder Traversal",
    "lc": 144,
    "cat": "TREE TRAVERSALS",
    "url": "https://leetcode.com/problemset/all/?search=Binary%20Tree%20Preorder%20Traversal"
  },
  {
    "id": 212,
    "title": "Binary Tree Inorder Traversal",
    "lc": 94,
    "cat": "TREE TRAVERSALS",
    "url": "https://leetcode.com/problemset/all/?search=Binary%20Tree%20Inorder%20Traversal"
  },
  {
    "id": 213,
    "title": "Binary Tree Postorder Traversal",
    "lc": 145,
    "cat": "TREE TRAVERSALS",
    "url": "https://leetcode.com/problemset/all/?search=Binary%20Tree%20Postorder%20Traversal"
  },
  {
    "id": 214,
    "title": "Binary Tree Level Order Traversal",
    "lc": 102,
    "cat": "TREE TRAVERSALS",
    "url": "https://leetcode.com/problemset/all/?search=Binary%20Tree%20Level%20Order%20Traversal"
  },
  {
    "id": 215,
    "title": "Binary Tree Zigzag Level Order Traversal",
    "lc": 103,
    "cat": "TREE TRAVERSALS",
    "url": "https://leetcode.com/problemset/all/?search=Binary%20Tree%20Zigzag%20Level%20Order%20Traversal"
  },
  {
    "id": 216,
    "title": "Binary Tree Right Side View",
    "lc": 199,
    "cat": "TREE TRAVERSALS",
    "url": "https://leetcode.com/problemset/all/?search=Binary%20Tree%20Right%20Side%20View"
  },
  {
    "id": 217,
    "title": "Binary Tree Left Side View",
    "lc": null,
    "cat": "TREE TRAVERSALS",
    "url": "https://www.google.com/search?q=Binary%20Tree%20Left%20Side%20View%20practice%20problem"
  },
  {
    "id": 218,
    "title": "Maximum Depth of Binary Tree",
    "lc": 104,
    "cat": "TREE TRAVERSALS",
    "url": "https://leetcode.com/problemset/all/?search=Maximum%20Depth%20of%20Binary%20Tree"
  },
  {
    "id": 219,
    "title": "Minimum Depth of Binary Tree",
    "lc": 111,
    "cat": "TREE TRAVERSALS",
    "url": "https://leetcode.com/problemset/all/?search=Minimum%20Depth%20of%20Binary%20Tree"
  },
  {
    "id": 220,
    "title": "Same Tree",
    "lc": 100,
    "cat": "TREE TRAVERSALS",
    "url": "https://leetcode.com/problemset/all/?search=Same%20Tree"
  },
  {
    "id": 221,
    "title": "Symmetric Tree",
    "lc": 101,
    "cat": "TREE TRAVERSALS",
    "url": "https://leetcode.com/problemset/all/?search=Symmetric%20Tree"
  },
  {
    "id": 222,
    "title": "Invert Binary Tree",
    "lc": 226,
    "cat": "TREE TRAVERSALS",
    "url": "https://leetcode.com/problemset/all/?search=Invert%20Binary%20Tree"
  },
  {
    "id": 223,
    "title": "Count Complete Tree Nodes",
    "lc": 222,
    "cat": "TREE TRAVERSALS",
    "url": "https://leetcode.com/problemset/all/?search=Count%20Complete%20Tree%20Nodes"
  },
  {
    "id": 224,
    "title": "Kth Smallest Element in a BST",
    "lc": 230,
    "cat": "TREE TRAVERSALS",
    "url": "https://leetcode.com/problemset/all/?search=Kth%20Smallest%20Element%20in%20a%20BST"
  },
  {
    "id": 225,
    "title": "Validate Binary Search Tree",
    "lc": 98,
    "cat": "TREE TRAVERSALS",
    "url": "https://leetcode.com/problemset/all/?search=Validate%20Binary%20Search%20Tree"
  },
  {
    "id": 226,
    "title": "Inorder Successor in BST",
    "lc": 285,
    "cat": "TREE TRAVERSALS",
    "url": "https://leetcode.com/problemset/all/?search=Inorder%20Successor%20in%20BST"
  },
  {
    "id": 227,
    "title": "Inorder Predecessor in BST",
    "lc": null,
    "cat": "TREE TRAVERSALS",
    "url": "https://www.google.com/search?q=Inorder%20Predecessor%20in%20BST%20practice%20problem"
  },
  {
    "id": 228,
    "title": "Lowest Common Ancestor of a Binary Tree",
    "lc": 236,
    "cat": "TREE TRAVERSALS",
    "url": "https://leetcode.com/problemset/all/?search=Lowest%20Common%20Ancestor%20of%20a%20Binary%20Tree"
  },
  {
    "id": 229,
    "title": "Lowest Common Ancestor of a BST",
    "lc": 235,
    "cat": "TREE TRAVERSALS",
    "url": "https://leetcode.com/problemset/all/?search=Lowest%20Common%20Ancestor%20of%20a%20BST"
  },
  {
    "id": 230,
    "title": "Construct Binary Tree from Preorder and Inorder Traversal",
    "lc": 105,
    "cat": "TREE TRAVERSALS",
    "url": "https://leetcode.com/problemset/all/?search=Construct%20Binary%20Tree%20from%20Preorder%20and%20Inorder%20Traversal"
  },
  {
    "id": 231,
    "title": "Construct Binary Tree from Inorder and Postorder Traversal",
    "lc": 106,
    "cat": "TREE TRAVERSALS",
    "url": "https://leetcode.com/problemset/all/?search=Construct%20Binary%20Tree%20from%20Inorder%20and%20Postorder%20Traversal"
  },
  {
    "id": 232,
    "title": "Binary Tree Paths",
    "lc": 257,
    "cat": "TREE TRAVERSALS",
    "url": "https://leetcode.com/problemset/all/?search=Binary%20Tree%20Paths"
  },
  {
    "id": 233,
    "title": "Path Sum",
    "lc": 112,
    "cat": "TREE TRAVERSALS",
    "url": "https://leetcode.com/problemset/all/?search=Path%20Sum"
  },
  {
    "id": 234,
    "title": "Path Sum II",
    "lc": 113,
    "cat": "TREE TRAVERSALS",
    "url": "https://leetcode.com/problemset/all/?search=Path%20Sum%20II"
  },
  {
    "id": 235,
    "title": "Sum Root to Leaf Numbers",
    "lc": 129,
    "cat": "TREE TRAVERSALS",
    "url": "https://leetcode.com/problemset/all/?search=Sum%20Root%20to%20Leaf%20Numbers"
  },
  {
    "id": 236,
    "title": "Diameter of Binary Tree",
    "lc": 543,
    "cat": "TREE TRAVERSALS",
    "url": "https://leetcode.com/problemset/all/?search=Diameter%20of%20Binary%20Tree"
  },
  {
    "id": 237,
    "title": "Balanced Binary Tree",
    "lc": 110,
    "cat": "TREE TRAVERSALS",
    "url": "https://leetcode.com/problemset/all/?search=Balanced%20Binary%20Tree"
  },
  {
    "id": 238,
    "title": "Flatten Binary Tree to Linked List",
    "lc": 114,
    "cat": "TREE TRAVERSALS",
    "url": "https://leetcode.com/problemset/all/?search=Flatten%20Binary%20Tree%20to%20Linked%20List"
  },
  {
    "id": 239,
    "title": "Boundary of Binary Tree",
    "lc": 545,
    "cat": "TREE TRAVERSALS",
    "url": "https://leetcode.com/problemset/all/?search=Boundary%20of%20Binary%20Tree"
  },
  {
    "id": 240,
    "title": "Vertical Order Traversal of a Binary Tree",
    "lc": 987,
    "cat": "TREE TRAVERSALS",
    "url": "https://leetcode.com/problemset/all/?search=Vertical%20Order%20Traversal%20of%20a%20Binary%20Tree"
  },
  {
    "id": 241,
    "title": "Top View of Binary Tree",
    "lc": null,
    "cat": "TREE TRAVERSALS",
    "url": "https://www.google.com/search?q=Top%20View%20of%20Binary%20Tree%20practice%20problem"
  },
  {
    "id": 242,
    "title": "Bottom View of Binary Tree",
    "lc": null,
    "cat": "TREE TRAVERSALS",
    "url": "https://www.google.com/search?q=Bottom%20View%20of%20Binary%20Tree%20practice%20problem"
  },
  {
    "id": 243,
    "title": "Maximum Depth of Binary Tree",
    "lc": 104,
    "cat": "BINARY TREE",
    "url": "https://leetcode.com/problemset/all/?search=Maximum%20Depth%20of%20Binary%20Tree"
  },
  {
    "id": 244,
    "title": "Minimum Depth of Binary Tree",
    "lc": 111,
    "cat": "BINARY TREE",
    "url": "https://leetcode.com/problemset/all/?search=Minimum%20Depth%20of%20Binary%20Tree"
  },
  {
    "id": 245,
    "title": "Same Tree",
    "lc": 100,
    "cat": "BINARY TREE",
    "url": "https://leetcode.com/problemset/all/?search=Same%20Tree"
  },
  {
    "id": 246,
    "title": "Symmetric Tree",
    "lc": 101,
    "cat": "BINARY TREE",
    "url": "https://leetcode.com/problemset/all/?search=Symmetric%20Tree"
  },
  {
    "id": 247,
    "title": "Invert Binary Tree",
    "lc": 226,
    "cat": "BINARY TREE",
    "url": "https://leetcode.com/problemset/all/?search=Invert%20Binary%20Tree"
  },
  {
    "id": 248,
    "title": "Binary Tree Preorder Traversal",
    "lc": 144,
    "cat": "BINARY TREE",
    "url": "https://leetcode.com/problemset/all/?search=Binary%20Tree%20Preorder%20Traversal"
  },
  {
    "id": 249,
    "title": "Binary Tree Inorder Traversal",
    "lc": 94,
    "cat": "BINARY TREE",
    "url": "https://leetcode.com/problemset/all/?search=Binary%20Tree%20Inorder%20Traversal"
  },
  {
    "id": 250,
    "title": "Binary Tree Postorder Traversal",
    "lc": 145,
    "cat": "BINARY TREE",
    "url": "https://leetcode.com/problemset/all/?search=Binary%20Tree%20Postorder%20Traversal"
  },
  {
    "id": 251,
    "title": "Binary Tree Level Order Traversal",
    "lc": 102,
    "cat": "BINARY TREE",
    "url": "https://leetcode.com/problemset/all/?search=Binary%20Tree%20Level%20Order%20Traversal"
  },
  {
    "id": 252,
    "title": "Binary Tree Zigzag Level Order Traversal",
    "lc": 103,
    "cat": "BINARY TREE",
    "url": "https://leetcode.com/problemset/all/?search=Binary%20Tree%20Zigzag%20Level%20Order%20Traversal"
  },
  {
    "id": 253,
    "title": "Binary Tree Right Side View",
    "lc": 199,
    "cat": "BINARY TREE",
    "url": "https://leetcode.com/problemset/all/?search=Binary%20Tree%20Right%20Side%20View"
  },
  {
    "id": 254,
    "title": "Binary Tree Left Side View",
    "lc": null,
    "cat": "BINARY TREE",
    "url": "https://www.google.com/search?q=Binary%20Tree%20Left%20Side%20View%20practice%20problem"
  },
  {
    "id": 255,
    "title": "Binary Tree Paths",
    "lc": 257,
    "cat": "BINARY TREE",
    "url": "https://leetcode.com/problemset/all/?search=Binary%20Tree%20Paths"
  },
  {
    "id": 256,
    "title": "Path Sum",
    "lc": 112,
    "cat": "BINARY TREE",
    "url": "https://leetcode.com/problemset/all/?search=Path%20Sum"
  },
  {
    "id": 257,
    "title": "Path Sum II",
    "lc": 113,
    "cat": "BINARY TREE",
    "url": "https://leetcode.com/problemset/all/?search=Path%20Sum%20II"
  },
  {
    "id": 258,
    "title": "Sum Root to Leaf Numbers",
    "lc": 129,
    "cat": "BINARY TREE",
    "url": "https://leetcode.com/problemset/all/?search=Sum%20Root%20to%20Leaf%20Numbers"
  },
  {
    "id": 259,
    "title": "Diameter of Binary Tree",
    "lc": 543,
    "cat": "BINARY TREE",
    "url": "https://leetcode.com/problemset/all/?search=Diameter%20of%20Binary%20Tree"
  },
  {
    "id": 260,
    "title": "Balanced Binary Tree",
    "lc": 110,
    "cat": "BINARY TREE",
    "url": "https://leetcode.com/problemset/all/?search=Balanced%20Binary%20Tree"
  },
  {
    "id": 261,
    "title": "Lowest Common Ancestor of a Binary Tree",
    "lc": 236,
    "cat": "BINARY TREE",
    "url": "https://leetcode.com/problemset/all/?search=Lowest%20Common%20Ancestor%20of%20a%20Binary%20Tree"
  },
  {
    "id": 262,
    "title": "Construct Binary Tree from Preorder and Inorder Traversal",
    "lc": 105,
    "cat": "BINARY TREE",
    "url": "https://leetcode.com/problemset/all/?search=Construct%20Binary%20Tree%20from%20Preorder%20and%20Inorder%20Traversal"
  },
  {
    "id": 263,
    "title": "Construct Binary Tree from Inorder and Postorder Traversal",
    "lc": 106,
    "cat": "BINARY TREE",
    "url": "https://leetcode.com/problemset/all/?search=Construct%20Binary%20Tree%20from%20Inorder%20and%20Postorder%20Traversal"
  },
  {
    "id": 264,
    "title": "Flatten Binary Tree to Linked List",
    "lc": 114,
    "cat": "BINARY TREE",
    "url": "https://leetcode.com/problemset/all/?search=Flatten%20Binary%20Tree%20to%20Linked%20List"
  },
  {
    "id": 265,
    "title": "Populating Next Right Pointers in Each Node",
    "lc": 116,
    "cat": "BINARY TREE",
    "url": "https://leetcode.com/problemset/all/?search=Populating%20Next%20Right%20Pointers%20in%20Each%20Node"
  },
  {
    "id": 266,
    "title": "Populating Next Right Pointers in Each Node II",
    "lc": 117,
    "cat": "BINARY TREE",
    "url": "https://leetcode.com/problemset/all/?search=Populating%20Next%20Right%20Pointers%20in%20Each%20Node%20II"
  },
  {
    "id": 267,
    "title": "Count Complete Tree Nodes",
    "lc": 222,
    "cat": "BINARY TREE",
    "url": "https://leetcode.com/problemset/all/?search=Count%20Complete%20Tree%20Nodes"
  },
  {
    "id": 268,
    "title": "Boundary of Binary Tree",
    "lc": 545,
    "cat": "BINARY TREE",
    "url": "https://leetcode.com/problemset/all/?search=Boundary%20of%20Binary%20Tree"
  },
  {
    "id": 269,
    "title": "Vertical Order Traversal of a Binary Tree",
    "lc": 987,
    "cat": "BINARY TREE",
    "url": "https://leetcode.com/problemset/all/?search=Vertical%20Order%20Traversal%20of%20a%20Binary%20Tree"
  },
  {
    "id": 270,
    "title": "Top View of Binary Tree",
    "lc": null,
    "cat": "BINARY TREE",
    "url": "https://www.google.com/search?q=Top%20View%20of%20Binary%20Tree%20practice%20problem"
  },
  {
    "id": 271,
    "title": "Bottom View of Binary Tree",
    "lc": null,
    "cat": "BINARY TREE",
    "url": "https://www.google.com/search?q=Bottom%20View%20of%20Binary%20Tree%20practice%20problem"
  },
  {
    "id": 272,
    "title": "Maximum Width of Binary Tree",
    "lc": 662,
    "cat": "BINARY TREE",
    "url": "https://leetcode.com/problemset/all/?search=Maximum%20Width%20of%20Binary%20Tree"
  },
  {
    "id": 273,
    "title": "All Nodes Distance K in Binary Tree",
    "lc": 863,
    "cat": "BINARY TREE",
    "url": "https://leetcode.com/problemset/all/?search=All%20Nodes%20Distance%20K%20in%20Binary%20Tree"
  },
  {
    "id": 274,
    "title": "Binary Tree Maximum Path Sum",
    "lc": 124,
    "cat": "BINARY TREE",
    "url": "https://leetcode.com/problemset/all/?search=Binary%20Tree%20Maximum%20Path%20Sum"
  },
  {
    "id": 275,
    "title": "Serialize and Deserialize Binary Tree",
    "lc": 297,
    "cat": "BINARY TREE",
    "url": "https://leetcode.com/problemset/all/?search=Serialize%20and%20Deserialize%20Binary%20Tree"
  },
  {
    "id": 276,
    "title": "House Robber III",
    "lc": 337,
    "cat": "BINARY TREE",
    "url": "https://leetcode.com/problemset/all/?search=House%20Robber%20III"
  },
  {
    "id": 277,
    "title": "Sum of Left Leaves",
    "lc": 404,
    "cat": "BINARY TREE",
    "url": "https://leetcode.com/problemset/all/?search=Sum%20of%20Left%20Leaves"
  },
  {
    "id": 278,
    "title": "Find Bottom Left Tree Value",
    "lc": 513,
    "cat": "BINARY TREE",
    "url": "https://leetcode.com/problemset/all/?search=Find%20Bottom%20Left%20Tree%20Value"
  },
  {
    "id": 279,
    "title": "Even Odd Tree",
    "lc": 1609,
    "cat": "BINARY TREE",
    "url": "https://leetcode.com/problemset/all/?search=Even%20Odd%20Tree"
  },
  {
    "id": 280,
    "title": "Cousins in Binary Tree",
    "lc": 993,
    "cat": "BINARY TREE",
    "url": "https://leetcode.com/problemset/all/?search=Cousins%20in%20Binary%20Tree"
  },
  {
    "id": 281,
    "title": "Search in a Binary Search Tree",
    "lc": 700,
    "cat": "BST",
    "url": "https://leetcode.com/problemset/all/?search=Search%20in%20a%20Binary%20Search%20Tree"
  },
  {
    "id": 282,
    "title": "Insert into a Binary Search Tree",
    "lc": 701,
    "cat": "BST",
    "url": "https://leetcode.com/problemset/all/?search=Insert%20into%20a%20Binary%20Search%20Tree"
  },
  {
    "id": 283,
    "title": "Delete Node in a BST",
    "lc": 450,
    "cat": "BST",
    "url": "https://leetcode.com/problemset/all/?search=Delete%20Node%20in%20a%20BST"
  },
  {
    "id": 284,
    "title": "Validate Binary Search Tree",
    "lc": 98,
    "cat": "BST",
    "url": "https://leetcode.com/problemset/all/?search=Validate%20Binary%20Search%20Tree"
  },
  {
    "id": 285,
    "title": "Kth Smallest Element in a BST",
    "lc": 230,
    "cat": "BST",
    "url": "https://leetcode.com/problemset/all/?search=Kth%20Smallest%20Element%20in%20a%20BST"
  },
  {
    "id": 286,
    "title": "Inorder Successor in BST",
    "lc": 285,
    "cat": "BST",
    "url": "https://leetcode.com/problemset/all/?search=Inorder%20Successor%20in%20BST"
  },
  {
    "id": 287,
    "title": "Inorder Predecessor in BST",
    "lc": null,
    "cat": "BST",
    "url": "https://www.google.com/search?q=Inorder%20Predecessor%20in%20BST%20practice%20problem"
  },
  {
    "id": 288,
    "title": "Lowest Common Ancestor of a BST",
    "lc": 235,
    "cat": "BST",
    "url": "https://leetcode.com/problemset/all/?search=Lowest%20Common%20Ancestor%20of%20a%20BST"
  },
  {
    "id": 289,
    "title": "Convert Sorted Array to Binary Search Tree",
    "lc": 108,
    "cat": "BST",
    "url": "https://leetcode.com/problemset/all/?search=Convert%20Sorted%20Array%20to%20Binary%20Search%20Tree"
  },
  {
    "id": 290,
    "title": "Convert Sorted List to Binary Search Tree",
    "lc": 109,
    "cat": "BST",
    "url": "https://leetcode.com/problemset/all/?search=Convert%20Sorted%20List%20to%20Binary%20Search%20Tree"
  },
  {
    "id": 291,
    "title": "Two Sum IV - Input is a BST",
    "lc": 653,
    "cat": "BST",
    "url": "https://leetcode.com/problemset/all/?search=Two%20Sum%20IV%20-%20Input%20is%20a%20BST"
  },
  {
    "id": 292,
    "title": "Minimum Absolute Difference in BST",
    "lc": 530,
    "cat": "BST",
    "url": "https://leetcode.com/problemset/all/?search=Minimum%20Absolute%20Difference%20in%20BST"
  },
  {
    "id": 293,
    "title": "Find Mode in Binary Search Tree",
    "lc": 501,
    "cat": "BST",
    "url": "https://leetcode.com/problemset/all/?search=Find%20Mode%20in%20Binary%20Search%20Tree"
  },
  {
    "id": 294,
    "title": "Range Sum of BST",
    "lc": 938,
    "cat": "BST",
    "url": "https://leetcode.com/problemset/all/?search=Range%20Sum%20of%20BST"
  },
  {
    "id": 295,
    "title": "Trim a Binary Search Tree",
    "lc": 669,
    "cat": "BST",
    "url": "https://leetcode.com/problemset/all/?search=Trim%20a%20Binary%20Search%20Tree"
  },
  {
    "id": 296,
    "title": "Recover Binary Search Tree",
    "lc": 99,
    "cat": "BST",
    "url": "https://leetcode.com/problemset/all/?search=Recover%20Binary%20Search%20Tree"
  },
  {
    "id": 297,
    "title": "Balance a Binary Search Tree",
    "lc": 1382,
    "cat": "BST",
    "url": "https://leetcode.com/problemset/all/?search=Balance%20a%20Binary%20Search%20Tree"
  },
  {
    "id": 298,
    "title": "Increasing Order Search Tree",
    "lc": 897,
    "cat": "BST",
    "url": "https://leetcode.com/problemset/all/?search=Increasing%20Order%20Search%20Tree"
  },
  {
    "id": 299,
    "title": "All Elements in Two Binary Search Trees",
    "lc": 1305,
    "cat": "BST",
    "url": "https://leetcode.com/problemset/all/?search=All%20Elements%20in%20Two%20Binary%20Search%20Trees"
  },
  {
    "id": 300,
    "title": "Binary Search Tree Iterator",
    "lc": 173,
    "cat": "BST",
    "url": "https://leetcode.com/problemset/all/?search=Binary%20Search%20Tree%20Iterator"
  },
  {
    "id": 301,
    "title": "Construct Binary Search Tree from Preorder Traversal",
    "lc": 1008,
    "cat": "BST",
    "url": "https://leetcode.com/problemset/all/?search=Construct%20Binary%20Search%20Tree%20from%20Preorder%20Traversal"
  },
  {
    "id": 302,
    "title": "Unique Binary Search Trees",
    "lc": 96,
    "cat": "BST",
    "url": "https://leetcode.com/problemset/all/?search=Unique%20Binary%20Search%20Trees"
  },
  {
    "id": 303,
    "title": "Unique Binary Search Trees II",
    "lc": 95,
    "cat": "BST",
    "url": "https://leetcode.com/problemset/all/?search=Unique%20Binary%20Search%20Trees%20II"
  },
  {
    "id": 304,
    "title": "Verify Preorder Sequence in Binary Search Tree",
    "lc": 255,
    "cat": "BST",
    "url": "https://leetcode.com/problemset/all/?search=Verify%20Preorder%20Sequence%20in%20Binary%20Search%20Tree"
  },
  {
    "id": 305,
    "title": "Delete Nodes And Return Forest",
    "lc": 1110,
    "cat": "BST",
    "url": "https://leetcode.com/problemset/all/?search=Delete%20Nodes%20And%20Return%20Forest"
  },
  {
    "id": 306,
    "title": "Split BST",
    "lc": 776,
    "cat": "BST",
    "url": "https://leetcode.com/problemset/all/?search=Split%20BST"
  },
  {
    "id": 307,
    "title": "Largest BST Subtree",
    "lc": null,
    "cat": "BST",
    "url": "https://www.google.com/search?q=Largest%20BST%20Subtree%20practice%20problem"
  },
  {
    "id": 308,
    "title": "Recover a BST",
    "lc": 99,
    "cat": "BST",
    "url": "https://leetcode.com/problemset/all/?search=Recover%20a%20BST"
  },
  {
    "id": 309,
    "title": "Implement an AVL Tree",
    "lc": null,
    "cat": "AVL",
    "url": "https://www.google.com/search?q=Implement%20an%20AVL%20Tree%20practice%20problem"
  },
  {
    "id": 310,
    "title": "Insert a Node in an AVL Tree",
    "lc": null,
    "cat": "AVL",
    "url": "https://www.google.com/search?q=Insert%20a%20Node%20in%20an%20AVL%20Tree%20practice%20problem"
  },
  {
    "id": 311,
    "title": "Delete a Node from an AVL Tree",
    "lc": null,
    "cat": "AVL",
    "url": "https://www.google.com/search?q=Delete%20a%20Node%20from%20an%20AVL%20Tree%20practice%20problem"
  },
  {
    "id": 312,
    "title": "Search in an AVL Tree",
    "lc": null,
    "cat": "AVL",
    "url": "https://www.google.com/search?q=Search%20in%20an%20AVL%20Tree%20practice%20problem"
  },
  {
    "id": 313,
    "title": "Calculate Height of an AVL Tree",
    "lc": null,
    "cat": "AVL",
    "url": "https://www.google.com/search?q=Calculate%20Height%20of%20an%20AVL%20Tree%20practice%20problem"
  },
  {
    "id": 314,
    "title": "Calculate Balance Factor of a Node",
    "lc": null,
    "cat": "AVL",
    "url": "https://www.google.com/search?q=Calculate%20Balance%20Factor%20of%20a%20Node%20practice%20problem"
  },
  {
    "id": 315,
    "title": "Perform LL Rotation",
    "lc": null,
    "cat": "AVL",
    "url": "https://www.google.com/search?q=Perform%20LL%20Rotation%20practice%20problem"
  },
  {
    "id": 316,
    "title": "Perform RR Rotation",
    "lc": null,
    "cat": "AVL",
    "url": "https://www.google.com/search?q=Perform%20RR%20Rotation%20practice%20problem"
  },
  {
    "id": 317,
    "title": "Perform LR Rotation",
    "lc": null,
    "cat": "AVL",
    "url": "https://www.google.com/search?q=Perform%20LR%20Rotation%20practice%20problem"
  },
  {
    "id": 318,
    "title": "Perform RL Rotation",
    "lc": null,
    "cat": "AVL",
    "url": "https://www.google.com/search?q=Perform%20RL%20Rotation%20practice%20problem"
  },
  {
    "id": 319,
    "title": "Identify the Required Rotation for an Unbalanced Node",
    "lc": null,
    "cat": "AVL",
    "url": "https://www.google.com/search?q=Identify%20the%20Required%20Rotation%20for%20an%20Unbalanced%20Node%20practice%20problem"
  },
  {
    "id": 320,
    "title": "Insert Multiple Keys and Construct the AVL Tree",
    "lc": null,
    "cat": "AVL",
    "url": "https://www.google.com/search?q=Insert%20Multiple%20Keys%20and%20Construct%20the%20AVL%20Tree%20practice%20problem"
  },
  {
    "id": 321,
    "title": "Delete Multiple Keys and Rebalance the AVL Tree",
    "lc": null,
    "cat": "AVL",
    "url": "https://www.google.com/search?q=Delete%20Multiple%20Keys%20and%20Rebalance%20the%20AVL%20Tree%20practice%20problem"
  },
  {
    "id": 322,
    "title": "Validate Whether a Binary Tree is Height-Balanced",
    "lc": 110,
    "cat": "AVL",
    "url": "https://leetcode.com/problemset/all/?search=Validate%20Whether%20a%20Binary%20Tree%20is%20Height-Balanced"
  },
  {
    "id": 323,
    "title": "Convert a Sorted Array to a Height-Balanced BST",
    "lc": 108,
    "cat": "AVL",
    "url": "https://leetcode.com/problemset/all/?search=Convert%20a%20Sorted%20Array%20to%20a%20Height-Balanced%20BST"
  },
  {
    "id": 324,
    "title": "Balance a Binary Search Tree",
    "lc": 1382,
    "cat": "AVL",
    "url": "https://leetcode.com/problemset/all/?search=Balance%20a%20Binary%20Search%20Tree"
  },
  {
    "id": 325,
    "title": "Check Whether a BST Can Be Balanced",
    "lc": null,
    "cat": "AVL",
    "url": "https://www.google.com/search?q=Check%20Whether%20a%20BST%20Can%20Be%20Balanced%20practice%20problem"
  },
  {
    "id": 326,
    "title": "Compare Heights and Balance Factors After Insertions",
    "lc": null,
    "cat": "AVL",
    "url": "https://www.google.com/search?q=Compare%20Heights%20and%20Balance%20Factors%20After%20Insertions%20practice%20problem"
  },
  {
    "id": 327,
    "title": "Find the Height of an AVL Tree After N Insertions",
    "lc": null,
    "cat": "AVL",
    "url": "https://www.google.com/search?q=Find%20the%20Height%20of%20an%20AVL%20Tree%20After%20N%20Insertions%20practice%20problem"
  },
  {
    "id": 328,
    "title": "Implement Segment Tree",
    "lc": null,
    "cat": "SEGMENT TREE",
    "url": "https://www.google.com/search?q=Implement%20Segment%20Tree%20practice%20problem"
  },
  {
    "id": 329,
    "title": "Build a Segment Tree for Range Sum Query",
    "lc": null,
    "cat": "SEGMENT TREE",
    "url": "https://www.google.com/search?q=Build%20a%20Segment%20Tree%20for%20Range%20Sum%20Query%20practice%20problem"
  },
  {
    "id": 330,
    "title": "Range Sum Query – Mutable",
    "lc": 307,
    "cat": "SEGMENT TREE",
    "url": "https://leetcode.com/problemset/all/?search=Range%20Sum%20Query%20%E2%80%93%20Mutable"
  },
  {
    "id": 331,
    "title": "Range Minimum Query using Segment Tree",
    "lc": null,
    "cat": "SEGMENT TREE",
    "url": "https://www.google.com/search?q=Range%20Minimum%20Query%20using%20Segment%20Tree%20practice%20problem"
  },
  {
    "id": 332,
    "title": "Range Maximum Query using Segment Tree",
    "lc": null,
    "cat": "SEGMENT TREE",
    "url": "https://www.google.com/search?q=Range%20Maximum%20Query%20using%20Segment%20Tree%20practice%20problem"
  },
  {
    "id": 333,
    "title": "Point Update in Segment Tree",
    "lc": null,
    "cat": "SEGMENT TREE",
    "url": "https://www.google.com/search?q=Point%20Update%20in%20Segment%20Tree%20practice%20problem"
  },
  {
    "id": 334,
    "title": "Range Update in Segment Tree",
    "lc": null,
    "cat": "SEGMENT TREE",
    "url": "https://www.google.com/search?q=Range%20Update%20in%20Segment%20Tree%20practice%20problem"
  },
  {
    "id": 335,
    "title": "Lazy Propagation in Segment Tree",
    "lc": null,
    "cat": "SEGMENT TREE",
    "url": "https://www.google.com/search?q=Lazy%20Propagation%20in%20Segment%20Tree%20practice%20problem"
  },
  {
    "id": 336,
    "title": "Range Sum Query with Lazy Propagation",
    "lc": null,
    "cat": "SEGMENT TREE",
    "url": "https://www.google.com/search?q=Range%20Sum%20Query%20with%20Lazy%20Propagation%20practice%20problem"
  },
  {
    "id": 337,
    "title": "Range Minimum Query with Lazy Propagation",
    "lc": null,
    "cat": "SEGMENT TREE",
    "url": "https://www.google.com/search?q=Range%20Minimum%20Query%20with%20Lazy%20Propagation%20practice%20problem"
  },
  {
    "id": 338,
    "title": "Range Maximum Query with Lazy Propagation",
    "lc": null,
    "cat": "SEGMENT TREE",
    "url": "https://www.google.com/search?q=Range%20Maximum%20Query%20with%20Lazy%20Propagation%20practice%20problem"
  },
  {
    "id": 339,
    "title": "Count of Smaller Numbers After Self",
    "lc": 315,
    "cat": "SEGMENT TREE",
    "url": "https://leetcode.com/problemset/all/?search=Count%20of%20Smaller%20Numbers%20After%20Self"
  },
  {
    "id": 340,
    "title": "Count of Range Sum",
    "lc": 327,
    "cat": "SEGMENT TREE",
    "url": "https://leetcode.com/problemset/all/?search=Count%20of%20Range%20Sum"
  },
  {
    "id": 341,
    "title": "The Skyline Problem",
    "lc": 218,
    "cat": "SEGMENT TREE",
    "url": "https://leetcode.com/problemset/all/?search=The%20Skyline%20Problem"
  },
  {
    "id": 342,
    "title": "My Calendar III",
    "lc": 732,
    "cat": "SEGMENT TREE",
    "url": "https://leetcode.com/problemset/all/?search=My%20Calendar%20III"
  },
  {
    "id": 343,
    "title": "Falling Squares",
    "lc": 699,
    "cat": "SEGMENT TREE",
    "url": "https://leetcode.com/problemset/all/?search=Falling%20Squares"
  },
  {
    "id": 344,
    "title": "Range Sum of Sorted Subarray Sums",
    "lc": 1508,
    "cat": "SEGMENT TREE",
    "url": "https://leetcode.com/problemset/all/?search=Range%20Sum%20of%20Sorted%20Subarray%20Sums"
  },
  {
    "id": 345,
    "title": "Number of Longest Increasing Subsequence",
    "lc": 673,
    "cat": "SEGMENT TREE",
    "url": "https://leetcode.com/problemset/all/?search=Number%20of%20Longest%20Increasing%20Subsequence"
  },
  {
    "id": 346,
    "title": "Reverse Pairs",
    "lc": 493,
    "cat": "SEGMENT TREE",
    "url": "https://leetcode.com/problemset/all/?search=Reverse%20Pairs"
  },
  {
    "id": 347,
    "title": "Create Sorted Array through Instructions",
    "lc": 1649,
    "cat": "SEGMENT TREE",
    "url": "https://leetcode.com/problemset/all/?search=Create%20Sorted%20Array%20through%20Instructions"
  },
  {
    "id": 348,
    "title": "Implement Min Heap",
    "lc": null,
    "cat": "HEAP",
    "url": "https://www.google.com/search?q=Implement%20Min%20Heap%20practice%20problem"
  },
  {
    "id": 349,
    "title": "Implement Max Heap",
    "lc": null,
    "cat": "HEAP",
    "url": "https://www.google.com/search?q=Implement%20Max%20Heap%20practice%20problem"
  },
  {
    "id": 350,
    "title": "Heapify an Array",
    "lc": null,
    "cat": "HEAP",
    "url": "https://www.google.com/search?q=Heapify%20an%20Array%20practice%20problem"
  },
  {
    "id": 351,
    "title": "Build Heap from an Array",
    "lc": null,
    "cat": "HEAP",
    "url": "https://www.google.com/search?q=Build%20Heap%20from%20an%20Array%20practice%20problem"
  },
  {
    "id": 352,
    "title": "Kth Largest Element in an Array",
    "lc": 215,
    "cat": "HEAP",
    "url": "https://leetcode.com/problemset/all/?search=Kth%20Largest%20Element%20in%20an%20Array"
  },
  {
    "id": 353,
    "title": "Kth Smallest Element in an Array",
    "lc": null,
    "cat": "HEAP",
    "url": "https://www.google.com/search?q=Kth%20Smallest%20Element%20in%20an%20Array%20practice%20problem"
  },
  {
    "id": 354,
    "title": "Kth Largest Element in a Stream",
    "lc": 703,
    "cat": "HEAP",
    "url": "https://leetcode.com/problemset/all/?search=Kth%20Largest%20Element%20in%20a%20Stream"
  },
  {
    "id": 355,
    "title": "Top K Frequent Elements",
    "lc": 347,
    "cat": "HEAP",
    "url": "https://leetcode.com/problemset/all/?search=Top%20K%20Frequent%20Elements"
  },
  {
    "id": 356,
    "title": "Top K Frequent Words",
    "lc": 692,
    "cat": "HEAP",
    "url": "https://leetcode.com/problemset/all/?search=Top%20K%20Frequent%20Words"
  },
  {
    "id": 357,
    "title": "K Closest Points to Origin",
    "lc": 973,
    "cat": "HEAP",
    "url": "https://leetcode.com/problemset/all/?search=K%20Closest%20Points%20to%20Origin"
  },
  {
    "id": 358,
    "title": "Find K Pairs with Smallest Sums",
    "lc": 373,
    "cat": "HEAP",
    "url": "https://leetcode.com/problemset/all/?search=Find%20K%20Pairs%20with%20Smallest%20Sums"
  },
  {
    "id": 359,
    "title": "Merge k Sorted Lists",
    "lc": 23,
    "cat": "HEAP",
    "url": "https://leetcode.com/problemset/all/?search=Merge%20k%20Sorted%20Lists"
  },
  {
    "id": 360,
    "title": "Find Median from Data Stream",
    "lc": 295,
    "cat": "HEAP",
    "url": "https://leetcode.com/problemset/all/?search=Find%20Median%20from%20Data%20Stream"
  },
  {
    "id": 361,
    "title": "Sliding Window Median",
    "lc": 480,
    "cat": "HEAP",
    "url": "https://leetcode.com/problemset/all/?search=Sliding%20Window%20Median"
  },
  {
    "id": 362,
    "title": "Sort an Array",
    "lc": 912,
    "cat": "HEAP",
    "url": "https://leetcode.com/problemset/all/?search=Sort%20an%20Array"
  },
  {
    "id": 363,
    "title": "Sort Characters By Frequency",
    "lc": 451,
    "cat": "HEAP",
    "url": "https://leetcode.com/problemset/all/?search=Sort%20Characters%20By%20Frequency"
  },
  {
    "id": 364,
    "title": "Last Stone Weight",
    "lc": 1046,
    "cat": "HEAP",
    "url": "https://leetcode.com/problemset/all/?search=Last%20Stone%20Weight"
  },
  {
    "id": 365,
    "title": "Task Scheduler",
    "lc": 621,
    "cat": "HEAP",
    "url": "https://leetcode.com/problemset/all/?search=Task%20Scheduler"
  },
  {
    "id": 366,
    "title": "Reorganize String",
    "lc": 767,
    "cat": "HEAP",
    "url": "https://leetcode.com/problemset/all/?search=Reorganize%20String"
  },
  {
    "id": 367,
    "title": "Single-Threaded CPU",
    "lc": 1834,
    "cat": "HEAP",
    "url": "https://leetcode.com/problemset/all/?search=Single-Threaded%20CPU"
  },
  {
    "id": 368,
    "title": "Maximum Performance of a Team",
    "lc": 1383,
    "cat": "HEAP",
    "url": "https://leetcode.com/problemset/all/?search=Maximum%20Performance%20of%20a%20Team"
  },
  {
    "id": 369,
    "title": "IPO",
    "lc": 502,
    "cat": "HEAP",
    "url": "https://leetcode.com/problemset/all/?search=IPO"
  },
  {
    "id": 370,
    "title": "Minimum Cost to Hire K Workers",
    "lc": 857,
    "cat": "HEAP",
    "url": "https://leetcode.com/problemset/all/?search=Minimum%20Cost%20to%20Hire%20K%20Workers"
  },
  {
    "id": 371,
    "title": "Smallest Range Covering Elements from K Lists",
    "lc": 632,
    "cat": "HEAP",
    "url": "https://leetcode.com/problemset/all/?search=Smallest%20Range%20Covering%20Elements%20from%20K%20Lists"
  },
  {
    "id": 372,
    "title": "Find K-th Smallest Pair Distance",
    "lc": 719,
    "cat": "HEAP",
    "url": "https://leetcode.com/problemset/all/?search=Find%20K-th%20Smallest%20Pair%20Distance"
  },
  {
    "id": 373,
    "title": "Kth Largest Element in a Stream",
    "lc": 703,
    "cat": "PRIORITY QUEUE",
    "url": "https://leetcode.com/problemset/all/?search=Kth%20Largest%20Element%20in%20a%20Stream"
  },
  {
    "id": 374,
    "title": "Kth Largest Element in an Array",
    "lc": 215,
    "cat": "PRIORITY QUEUE",
    "url": "https://leetcode.com/problemset/all/?search=Kth%20Largest%20Element%20in%20an%20Array"
  },
  {
    "id": 375,
    "title": "Top K Frequent Elements",
    "lc": 347,
    "cat": "PRIORITY QUEUE",
    "url": "https://leetcode.com/problemset/all/?search=Top%20K%20Frequent%20Elements"
  },
  {
    "id": 376,
    "title": "Top K Frequent Words",
    "lc": 692,
    "cat": "PRIORITY QUEUE",
    "url": "https://leetcode.com/problemset/all/?search=Top%20K%20Frequent%20Words"
  },
  {
    "id": 377,
    "title": "K Closest Points to Origin",
    "lc": 973,
    "cat": "PRIORITY QUEUE",
    "url": "https://leetcode.com/problemset/all/?search=K%20Closest%20Points%20to%20Origin"
  },
  {
    "id": 378,
    "title": "Find K Pairs with Smallest Sums",
    "lc": 373,
    "cat": "PRIORITY QUEUE",
    "url": "https://leetcode.com/problemset/all/?search=Find%20K%20Pairs%20with%20Smallest%20Sums"
  },
  {
    "id": 379,
    "title": "Merge k Sorted Lists",
    "lc": 23,
    "cat": "PRIORITY QUEUE",
    "url": "https://leetcode.com/problemset/all/?search=Merge%20k%20Sorted%20Lists"
  },
  {
    "id": 380,
    "title": "Find Median from Data Stream",
    "lc": 295,
    "cat": "PRIORITY QUEUE",
    "url": "https://leetcode.com/problemset/all/?search=Find%20Median%20from%20Data%20Stream"
  },
  {
    "id": 381,
    "title": "Sliding Window Median",
    "lc": 480,
    "cat": "PRIORITY QUEUE",
    "url": "https://leetcode.com/problemset/all/?search=Sliding%20Window%20Median"
  },
  {
    "id": 382,
    "title": "Last Stone Weight",
    "lc": 1046,
    "cat": "PRIORITY QUEUE",
    "url": "https://leetcode.com/problemset/all/?search=Last%20Stone%20Weight"
  },
  {
    "id": 383,
    "title": "Task Scheduler",
    "lc": 621,
    "cat": "PRIORITY QUEUE",
    "url": "https://leetcode.com/problemset/all/?search=Task%20Scheduler"
  },
  {
    "id": 384,
    "title": "Reorganize String",
    "lc": 767,
    "cat": "PRIORITY QUEUE",
    "url": "https://leetcode.com/problemset/all/?search=Reorganize%20String"
  },
  {
    "id": 385,
    "title": "Single-Threaded CPU",
    "lc": 1834,
    "cat": "PRIORITY QUEUE",
    "url": "https://leetcode.com/problemset/all/?search=Single-Threaded%20CPU"
  },
  {
    "id": 386,
    "title": "Maximum Performance of a Team",
    "lc": 1383,
    "cat": "PRIORITY QUEUE",
    "url": "https://leetcode.com/problemset/all/?search=Maximum%20Performance%20of%20a%20Team"
  },
  {
    "id": 387,
    "title": "IPO",
    "lc": 502,
    "cat": "PRIORITY QUEUE",
    "url": "https://leetcode.com/problemset/all/?search=IPO"
  },
  {
    "id": 388,
    "title": "Minimum Cost to Hire K Workers",
    "lc": 857,
    "cat": "PRIORITY QUEUE",
    "url": "https://leetcode.com/problemset/all/?search=Minimum%20Cost%20to%20Hire%20K%20Workers"
  },
  {
    "id": 389,
    "title": "Smallest Range Covering Elements from K Lists",
    "lc": 632,
    "cat": "PRIORITY QUEUE",
    "url": "https://leetcode.com/problemset/all/?search=Smallest%20Range%20Covering%20Elements%20from%20K%20Lists"
  },
  {
    "id": 390,
    "title": "Meeting Rooms II",
    "lc": 253,
    "cat": "PRIORITY QUEUE",
    "url": "https://leetcode.com/problemset/all/?search=Meeting%20Rooms%20II"
  },
  {
    "id": 391,
    "title": "Minimum Number of Refueling Stops",
    "lc": 871,
    "cat": "PRIORITY QUEUE",
    "url": "https://leetcode.com/problemset/all/?search=Minimum%20Number%20of%20Refueling%20Stops"
  },
  {
    "id": 392,
    "title": "Furthest Building You Can Reach",
    "lc": 1642,
    "cat": "PRIORITY QUEUE",
    "url": "https://leetcode.com/problemset/all/?search=Furthest%20Building%20You%20Can%20Reach"
  },
  {
    "id": 393,
    "title": "Process Tasks Using Servers",
    "lc": 1882,
    "cat": "PRIORITY QUEUE",
    "url": "https://leetcode.com/problemset/all/?search=Process%20Tasks%20Using%20Servers"
  },
  {
    "id": 394,
    "title": "Total Cost to Hire K Workers",
    "lc": 2462,
    "cat": "PRIORITY QUEUE",
    "url": "https://leetcode.com/problemset/all/?search=Total%20Cost%20to%20Hire%20K%20Workers"
  },
  {
    "id": 395,
    "title": "Minimum Cost to Connect Sticks",
    "lc": null,
    "cat": "PRIORITY QUEUE",
    "url": "https://www.google.com/search?q=Minimum%20Cost%20to%20Connect%20Sticks%20practice%20problem"
  },
  {
    "id": 396,
    "title": "Huffman Coding",
    "lc": null,
    "cat": "PRIORITY QUEUE",
    "url": "https://www.google.com/search?q=Huffman%20Coding%20practice%20problem"
  },
  {
    "id": 397,
    "title": "Dijkstra's Shortest Path Algorithm",
    "lc": 743,
    "cat": "PRIORITY QUEUE",
    "url": "https://leetcode.com/problemset/all/?search=Dijkstra's%20Shortest%20Path%20Algorithm"
  },
  {
    "id": 398,
    "title": "Prim's Minimum Spanning Tree Algorithm",
    "lc": null,
    "cat": "PRIORITY QUEUE",
    "url": "https://www.google.com/search?q=Prim's%20Minimum%20Spanning%20Tree%20Algorithm%20practice%20problem"
  },
  {
    "id": 399,
    "title": "Kth Largest Element in an Array",
    "lc": 215,
    "cat": "TOP-K ELEMENTS",
    "url": "https://leetcode.com/problemset/all/?search=Kth%20Largest%20Element%20in%20an%20Array"
  },
  {
    "id": 400,
    "title": "Kth Largest Element in a Stream",
    "lc": 703,
    "cat": "TOP-K ELEMENTS",
    "url": "https://leetcode.com/problemset/all/?search=Kth%20Largest%20Element%20in%20a%20Stream"
  },
  {
    "id": 401,
    "title": "Top K Frequent Elements",
    "lc": 347,
    "cat": "TOP-K ELEMENTS",
    "url": "https://leetcode.com/problemset/all/?search=Top%20K%20Frequent%20Elements"
  },
  {
    "id": 402,
    "title": "Top K Frequent Words",
    "lc": 692,
    "cat": "TOP-K ELEMENTS",
    "url": "https://leetcode.com/problemset/all/?search=Top%20K%20Frequent%20Words"
  },
  {
    "id": 403,
    "title": "K Closest Points to Origin",
    "lc": 973,
    "cat": "TOP-K ELEMENTS",
    "url": "https://leetcode.com/problemset/all/?search=K%20Closest%20Points%20to%20Origin"
  },
  {
    "id": 404,
    "title": "Kth Smallest Element in a Sorted Matrix",
    "lc": 378,
    "cat": "TOP-K ELEMENTS",
    "url": "https://leetcode.com/problemset/all/?search=Kth%20Smallest%20Element%20in%20a%20Sorted%20Matrix"
  },
  {
    "id": 405,
    "title": "Kth Smallest Pair Distance",
    "lc": 719,
    "cat": "TOP-K ELEMENTS",
    "url": "https://leetcode.com/problemset/all/?search=Kth%20Smallest%20Pair%20Distance"
  },
  {
    "id": 406,
    "title": "Find K Pairs with Smallest Sums",
    "lc": 373,
    "cat": "TOP-K ELEMENTS",
    "url": "https://leetcode.com/problemset/all/?search=Find%20K%20Pairs%20with%20Smallest%20Sums"
  },
  {
    "id": 407,
    "title": "Find K Closest Elements",
    "lc": 658,
    "cat": "TOP-K ELEMENTS",
    "url": "https://leetcode.com/problemset/all/?search=Find%20K%20Closest%20Elements"
  },
  {
    "id": 408,
    "title": "Kth Smallest Element in a BST",
    "lc": 230,
    "cat": "TOP-K ELEMENTS",
    "url": "https://leetcode.com/problemset/all/?search=Kth%20Smallest%20Element%20in%20a%20BST"
  },
  {
    "id": 409,
    "title": "Kth Largest Element in a BST",
    "lc": null,
    "cat": "TOP-K ELEMENTS",
    "url": "https://www.google.com/search?q=Kth%20Largest%20Element%20in%20a%20BST%20practice%20problem"
  },
  {
    "id": 410,
    "title": "Kth Smallest Number in Multiplication Table",
    "lc": 668,
    "cat": "TOP-K ELEMENTS",
    "url": "https://leetcode.com/problemset/all/?search=Kth%20Smallest%20Number%20in%20Multiplication%20Table"
  },
  {
    "id": 411,
    "title": "Kth Smallest Prime Fraction",
    "lc": 786,
    "cat": "TOP-K ELEMENTS",
    "url": "https://leetcode.com/problemset/all/?search=Kth%20Smallest%20Prime%20Fraction"
  },
  {
    "id": 412,
    "title": "K Highest Ranked Items Within a Price Range",
    "lc": 2146,
    "cat": "TOP-K ELEMENTS",
    "url": "https://leetcode.com/problemset/all/?search=K%20Highest%20Ranked%20Items%20Within%20a%20Price%20Range"
  },
  {
    "id": 413,
    "title": "The K Weakest Rows in a Matrix",
    "lc": 1337,
    "cat": "TOP-K ELEMENTS",
    "url": "https://leetcode.com/problemset/all/?search=The%20K%20Weakest%20Rows%20in%20a%20Matrix"
  },
  {
    "id": 414,
    "title": "Find Subsequence of Length K With the Largest Sum",
    "lc": 2099,
    "cat": "TOP-K ELEMENTS",
    "url": "https://leetcode.com/problemset/all/?search=Find%20Subsequence%20of%20Length%20K%20With%20the%20Largest%20Sum"
  },
  {
    "id": 415,
    "title": "Maximum Subsequence Score",
    "lc": 2542,
    "cat": "TOP-K ELEMENTS",
    "url": "https://leetcode.com/problemset/all/?search=Maximum%20Subsequence%20Score"
  },
  {
    "id": 416,
    "title": "Kth Largest Sum in a Binary Tree",
    "lc": 2583,
    "cat": "TOP-K ELEMENTS",
    "url": "https://leetcode.com/problemset/all/?search=Kth%20Largest%20Sum%20in%20a%20Binary%20Tree"
  },
  {
    "id": 417,
    "title": "Kth Largest Integer in the Array",
    "lc": 1985,
    "cat": "TOP-K ELEMENTS",
    "url": "https://leetcode.com/problemset/all/?search=Kth%20Largest%20Integer%20in%20the%20Array"
  },
  {
    "id": 418,
    "title": "Find the K-Sum of an Array",
    "lc": 2386,
    "cat": "TOP-K ELEMENTS",
    "url": "https://leetcode.com/problemset/all/?search=Find%20the%20K-Sum%20of%20an%20Array"
  },
  {
    "id": 419,
    "title": "Find the Kth Largest Integer in the Array",
    "lc": 1985,
    "cat": "TOP-K ELEMENTS",
    "url": "https://leetcode.com/problemset/all/?search=Find%20the%20Kth%20Largest%20Integer%20in%20the%20Array"
  },
  {
    "id": 420,
    "title": "K-th Smallest in Lexicographical Order",
    "lc": 440,
    "cat": "TOP-K ELEMENTS",
    "url": "https://leetcode.com/problemset/all/?search=K-th%20Smallest%20in%20Lexicographical%20Order"
  },
  {
    "id": 421,
    "title": "Two Sum",
    "lc": 1,
    "cat": "HASHING",
    "url": "https://leetcode.com/problemset/all/?search=Two%20Sum"
  },
  {
    "id": 422,
    "title": "Contains Duplicate",
    "lc": 217,
    "cat": "HASHING",
    "url": "https://leetcode.com/problemset/all/?search=Contains%20Duplicate"
  },
  {
    "id": 423,
    "title": "Contains Duplicate II",
    "lc": 219,
    "cat": "HASHING",
    "url": "https://leetcode.com/problemset/all/?search=Contains%20Duplicate%20II"
  },
  {
    "id": 424,
    "title": "Valid Anagram",
    "lc": 242,
    "cat": "HASHING",
    "url": "https://leetcode.com/problemset/all/?search=Valid%20Anagram"
  },
  {
    "id": 425,
    "title": "Group Anagrams",
    "lc": 49,
    "cat": "HASHING",
    "url": "https://leetcode.com/problemset/all/?search=Group%20Anagrams"
  },
  {
    "id": 426,
    "title": "Longest Consecutive Sequence",
    "lc": 128,
    "cat": "HASHING",
    "url": "https://leetcode.com/problemset/all/?search=Longest%20Consecutive%20Sequence"
  },
  {
    "id": 427,
    "title": "Majority Element",
    "lc": 169,
    "cat": "HASHING",
    "url": "https://leetcode.com/problemset/all/?search=Majority%20Element"
  },
  {
    "id": 428,
    "title": "Majority Element II",
    "lc": 229,
    "cat": "HASHING",
    "url": "https://leetcode.com/problemset/all/?search=Majority%20Element%20II"
  },
  {
    "id": 429,
    "title": "First Unique Character in a String",
    "lc": 387,
    "cat": "HASHING",
    "url": "https://leetcode.com/problemset/all/?search=First%20Unique%20Character%20in%20a%20String"
  },
  {
    "id": 430,
    "title": "Ransom Note",
    "lc": 383,
    "cat": "HASHING",
    "url": "https://leetcode.com/problemset/all/?search=Ransom%20Note"
  },
  {
    "id": 431,
    "title": "Intersection of Two Arrays",
    "lc": 349,
    "cat": "HASHING",
    "url": "https://leetcode.com/problemset/all/?search=Intersection%20of%20Two%20Arrays"
  },
  {
    "id": 432,
    "title": "Intersection of Two Arrays II",
    "lc": 350,
    "cat": "HASHING",
    "url": "https://leetcode.com/problemset/all/?search=Intersection%20of%20Two%20Arrays%20II"
  },
  {
    "id": 433,
    "title": "Happy Number",
    "lc": 202,
    "cat": "HASHING",
    "url": "https://leetcode.com/problemset/all/?search=Happy%20Number"
  },
  {
    "id": 434,
    "title": "Isomorphic Strings",
    "lc": 205,
    "cat": "HASHING",
    "url": "https://leetcode.com/problemset/all/?search=Isomorphic%20Strings"
  },
  {
    "id": 435,
    "title": "Word Pattern",
    "lc": 290,
    "cat": "HASHING",
    "url": "https://leetcode.com/problemset/all/?search=Word%20Pattern"
  },
  {
    "id": 436,
    "title": "Longest Substring Without Repeating Characters",
    "lc": 3,
    "cat": "HASHING",
    "url": "https://leetcode.com/problemset/all/?search=Longest%20Substring%20Without%20Repeating%20Characters"
  },
  {
    "id": 437,
    "title": "Subarray Sum Equals K",
    "lc": 560,
    "cat": "HASHING",
    "url": "https://leetcode.com/problemset/all/?search=Subarray%20Sum%20Equals%20K"
  },
  {
    "id": 438,
    "title": "Longest Subarray with Sum K",
    "lc": null,
    "cat": "HASHING",
    "url": "https://www.google.com/search?q=Longest%20Subarray%20with%20Sum%20K%20practice%20problem"
  },
  {
    "id": 439,
    "title": "Subarray Sums Divisible by K",
    "lc": 974,
    "cat": "HASHING",
    "url": "https://leetcode.com/problemset/all/?search=Subarray%20Sums%20Divisible%20by%20K"
  },
  {
    "id": 440,
    "title": "Continuous Subarray Sum",
    "lc": 523,
    "cat": "HASHING",
    "url": "https://leetcode.com/problemset/all/?search=Continuous%20Subarray%20Sum"
  },
  {
    "id": 441,
    "title": "4Sum II",
    "lc": 454,
    "cat": "HASHING",
    "url": "https://leetcode.com/problemset/all/?search=4Sum%20II"
  },
  {
    "id": 442,
    "title": "3Sum",
    "lc": 15,
    "cat": "HASHING",
    "url": "https://leetcode.com/problemset/all/?search=3Sum"
  },
  {
    "id": 443,
    "title": "4Sum",
    "lc": 18,
    "cat": "HASHING",
    "url": "https://leetcode.com/problemset/all/?search=4Sum"
  },
  {
    "id": 444,
    "title": "Two Sum II – Input Array Is Sorted",
    "lc": 167,
    "cat": "HASHING",
    "url": "https://leetcode.com/problemset/all/?search=Two%20Sum%20II%20%E2%80%93%20Input%20Array%20Is%20Sorted"
  },
  {
    "id": 445,
    "title": "Top K Frequent Elements",
    "lc": 347,
    "cat": "HASHING",
    "url": "https://leetcode.com/problemset/all/?search=Top%20K%20Frequent%20Elements"
  },
  {
    "id": 446,
    "title": "Top K Frequent Words",
    "lc": 692,
    "cat": "HASHING",
    "url": "https://leetcode.com/problemset/all/?search=Top%20K%20Frequent%20Words"
  },
  {
    "id": 447,
    "title": "Find All Anagrams in a String",
    "lc": 438,
    "cat": "HASHING",
    "url": "https://leetcode.com/problemset/all/?search=Find%20All%20Anagrams%20in%20a%20String"
  },
  {
    "id": 448,
    "title": "Permutation in String",
    "lc": 567,
    "cat": "HASHING",
    "url": "https://leetcode.com/problemset/all/?search=Permutation%20in%20String"
  },
  {
    "id": 449,
    "title": "Minimum Window Substring",
    "lc": 76,
    "cat": "HASHING",
    "url": "https://leetcode.com/problemset/all/?search=Minimum%20Window%20Substring"
  },
  {
    "id": 450,
    "title": "Longest Palindrome",
    "lc": 409,
    "cat": "HASHING",
    "url": "https://leetcode.com/problemset/all/?search=Longest%20Palindrome"
  },
  {
    "id": 451,
    "title": "Find Duplicate Subtrees",
    "lc": 652,
    "cat": "HASHING",
    "url": "https://leetcode.com/problemset/all/?search=Find%20Duplicate%20Subtrees"
  },
  {
    "id": 452,
    "title": "Copy List with Random Pointer",
    "lc": 138,
    "cat": "HASHING",
    "url": "https://leetcode.com/problemset/all/?search=Copy%20List%20with%20Random%20Pointer"
  },
  {
    "id": 453,
    "title": "LRU Cache",
    "lc": 146,
    "cat": "HASHING",
    "url": "https://leetcode.com/problemset/all/?search=LRU%20Cache"
  },
  {
    "id": 454,
    "title": "Design HashMap",
    "lc": 706,
    "cat": "HASHING",
    "url": "https://leetcode.com/problemset/all/?search=Design%20HashMap"
  },
  {
    "id": 455,
    "title": "Design HashSet",
    "lc": 705,
    "cat": "HASHING",
    "url": "https://leetcode.com/problemset/all/?search=Design%20HashSet"
  },
  {
    "id": 456,
    "title": "Insert Delete GetRandom O(1)",
    "lc": 380,
    "cat": "HASHING",
    "url": "https://leetcode.com/problemset/all/?search=Insert%20Delete%20GetRandom%20O(1)"
  },
  {
    "id": 457,
    "title": "Insert Delete GetRandom O(1) – Duplicates Allowed",
    "lc": 381,
    "cat": "HASHING",
    "url": "https://leetcode.com/problemset/all/?search=Insert%20Delete%20GetRandom%20O(1)%20%E2%80%93%20Duplicates%20Allowed"
  },
  {
    "id": 458,
    "title": "LFU Cache",
    "lc": 460,
    "cat": "HASHING",
    "url": "https://leetcode.com/problemset/all/?search=LFU%20Cache"
  },
  {
    "id": 459,
    "title": "Time Based Key-Value Store",
    "lc": 981,
    "cat": "HASHING",
    "url": "https://leetcode.com/problemset/all/?search=Time%20Based%20Key-Value%20Store"
  },
  {
    "id": 460,
    "title": "Logger Rate Limiter",
    "lc": 359,
    "cat": "HASHING",
    "url": "https://leetcode.com/problemset/all/?search=Logger%20Rate%20Limiter"
  },
  {
    "id": 461,
    "title": "Design Underground System",
    "lc": 1396,
    "cat": "HASHING",
    "url": "https://leetcode.com/problemset/all/?search=Design%20Underground%20System"
  },
  {
    "id": 462,
    "title": "Find the Difference of Two Arrays",
    "lc": 2215,
    "cat": "HASHING",
    "url": "https://leetcode.com/problemset/all/?search=Find%20the%20Difference%20of%20Two%20Arrays"
  },
  {
    "id": 463,
    "title": "Unique Number of Occurrences",
    "lc": 1207,
    "cat": "HASHING",
    "url": "https://leetcode.com/problemset/all/?search=Unique%20Number%20of%20Occurrences"
  },
  {
    "id": 464,
    "title": "Count Number of Bad Pairs",
    "lc": 2364,
    "cat": "HASHING",
    "url": "https://leetcode.com/problemset/all/?search=Count%20Number%20of%20Bad%20Pairs"
  },
  {
    "id": 465,
    "title": "Number of Good Pairs",
    "lc": 1512,
    "cat": "HASHING",
    "url": "https://leetcode.com/problemset/all/?search=Number%20of%20Good%20Pairs"
  },
  {
    "id": 466,
    "title": "Longest Arithmetic Subsequence",
    "lc": 1027,
    "cat": "HASHING",
    "url": "https://leetcode.com/problemset/all/?search=Longest%20Arithmetic%20Subsequence"
  },
  {
    "id": 467,
    "title": "Subarray with 0 Sum",
    "lc": null,
    "cat": "HASHING",
    "url": "https://www.google.com/search?q=Subarray%20with%200%20Sum%20practice%20problem"
  },
  {
    "id": 468,
    "title": "Count Subarrays with Given XOR",
    "lc": null,
    "cat": "HASHING",
    "url": "https://www.google.com/search?q=Count%20Subarrays%20with%20Given%20XOR%20practice%20problem"
  },
  {
    "id": 469,
    "title": "Two Sum",
    "lc": 1,
    "cat": "MAPS",
    "url": "https://leetcode.com/problemset/all/?search=Two%20Sum"
  },
  {
    "id": 470,
    "title": "Contains Duplicate",
    "lc": 217,
    "cat": "MAPS",
    "url": "https://leetcode.com/problemset/all/?search=Contains%20Duplicate"
  },
  {
    "id": 471,
    "title": "Valid Anagram",
    "lc": 242,
    "cat": "MAPS",
    "url": "https://leetcode.com/problemset/all/?search=Valid%20Anagram"
  },
  {
    "id": 472,
    "title": "Group Anagrams",
    "lc": 49,
    "cat": "MAPS",
    "url": "https://leetcode.com/problemset/all/?search=Group%20Anagrams"
  },
  {
    "id": 473,
    "title": "Majority Element",
    "lc": 169,
    "cat": "MAPS",
    "url": "https://leetcode.com/problemset/all/?search=Majority%20Element"
  },
  {
    "id": 474,
    "title": "First Unique Character in a String",
    "lc": 387,
    "cat": "MAPS",
    "url": "https://leetcode.com/problemset/all/?search=First%20Unique%20Character%20in%20a%20String"
  },
  {
    "id": 475,
    "title": "Isomorphic Strings",
    "lc": 205,
    "cat": "MAPS",
    "url": "https://leetcode.com/problemset/all/?search=Isomorphic%20Strings"
  },
  {
    "id": 476,
    "title": "Word Pattern",
    "lc": 290,
    "cat": "MAPS",
    "url": "https://leetcode.com/problemset/all/?search=Word%20Pattern"
  },
  {
    "id": 477,
    "title": "Subarray Sum Equals K",
    "lc": 560,
    "cat": "MAPS",
    "url": "https://leetcode.com/problemset/all/?search=Subarray%20Sum%20Equals%20K"
  },
  {
    "id": 478,
    "title": "Subarray Sums Divisible by K",
    "lc": 974,
    "cat": "MAPS",
    "url": "https://leetcode.com/problemset/all/?search=Subarray%20Sums%20Divisible%20by%20K"
  },
  {
    "id": 479,
    "title": "Continuous Subarray Sum",
    "lc": 523,
    "cat": "MAPS",
    "url": "https://leetcode.com/problemset/all/?search=Continuous%20Subarray%20Sum"
  },
  {
    "id": 480,
    "title": "Longest Subarray with Sum K",
    "lc": null,
    "cat": "MAPS",
    "url": "https://www.google.com/search?q=Longest%20Subarray%20with%20Sum%20K%20practice%20problem"
  },
  {
    "id": 481,
    "title": "Longest Consecutive Sequence",
    "lc": 128,
    "cat": "MAPS",
    "url": "https://leetcode.com/problemset/all/?search=Longest%20Consecutive%20Sequence"
  },
  {
    "id": 482,
    "title": "Top K Frequent Elements",
    "lc": 347,
    "cat": "MAPS",
    "url": "https://leetcode.com/problemset/all/?search=Top%20K%20Frequent%20Elements"
  },
  {
    "id": 483,
    "title": "Top K Frequent Words",
    "lc": 692,
    "cat": "MAPS",
    "url": "https://leetcode.com/problemset/all/?search=Top%20K%20Frequent%20Words"
  },
  {
    "id": 484,
    "title": "Find All Anagrams in a String",
    "lc": 438,
    "cat": "MAPS",
    "url": "https://leetcode.com/problemset/all/?search=Find%20All%20Anagrams%20in%20a%20String"
  },
  {
    "id": 485,
    "title": "Permutation in String",
    "lc": 567,
    "cat": "MAPS",
    "url": "https://leetcode.com/problemset/all/?search=Permutation%20in%20String"
  },
  {
    "id": 486,
    "title": "Minimum Window Substring",
    "lc": 76,
    "cat": "MAPS",
    "url": "https://leetcode.com/problemset/all/?search=Minimum%20Window%20Substring"
  },
  {
    "id": 487,
    "title": "4Sum II",
    "lc": 454,
    "cat": "MAPS",
    "url": "https://leetcode.com/problemset/all/?search=4Sum%20II"
  },
  {
    "id": 488,
    "title": "Number of Good Pairs",
    "lc": 1512,
    "cat": "MAPS",
    "url": "https://leetcode.com/problemset/all/?search=Number%20of%20Good%20Pairs"
  },
  {
    "id": 489,
    "title": "Count Number of Bad Pairs",
    "lc": 2364,
    "cat": "MAPS",
    "url": "https://leetcode.com/problemset/all/?search=Count%20Number%20of%20Bad%20Pairs"
  },
  {
    "id": 490,
    "title": "Find Duplicate Subtrees",
    "lc": 652,
    "cat": "MAPS",
    "url": "https://leetcode.com/problemset/all/?search=Find%20Duplicate%20Subtrees"
  },
  {
    "id": 491,
    "title": "Copy List with Random Pointer",
    "lc": 138,
    "cat": "MAPS",
    "url": "https://leetcode.com/problemset/all/?search=Copy%20List%20with%20Random%20Pointer"
  },
  {
    "id": 492,
    "title": "LRU Cache",
    "lc": 146,
    "cat": "MAPS",
    "url": "https://leetcode.com/problemset/all/?search=LRU%20Cache"
  },
  {
    "id": 493,
    "title": "LFU Cache",
    "lc": 460,
    "cat": "MAPS",
    "url": "https://leetcode.com/problemset/all/?search=LFU%20Cache"
  },
  {
    "id": 494,
    "title": "Design HashMap",
    "lc": 706,
    "cat": "MAPS",
    "url": "https://leetcode.com/problemset/all/?search=Design%20HashMap"
  },
  {
    "id": 495,
    "title": "Design HashSet",
    "lc": 705,
    "cat": "MAPS",
    "url": "https://leetcode.com/problemset/all/?search=Design%20HashSet"
  },
  {
    "id": 496,
    "title": "Insert Delete GetRandom O(1)",
    "lc": 380,
    "cat": "MAPS",
    "url": "https://leetcode.com/problemset/all/?search=Insert%20Delete%20GetRandom%20O(1)"
  },
  {
    "id": 497,
    "title": "Time Based Key-Value Store",
    "lc": 981,
    "cat": "MAPS",
    "url": "https://leetcode.com/problemset/all/?search=Time%20Based%20Key-Value%20Store"
  },
  {
    "id": 498,
    "title": "Logger Rate Limiter",
    "lc": 359,
    "cat": "MAPS",
    "url": "https://leetcode.com/problemset/all/?search=Logger%20Rate%20Limiter"
  },
  {
    "id": 499,
    "title": "Design Underground System",
    "lc": 1396,
    "cat": "MAPS",
    "url": "https://leetcode.com/problemset/all/?search=Design%20Underground%20System"
  },
  {
    "id": 500,
    "title": "Find the Difference of Two Arrays",
    "lc": 2215,
    "cat": "MAPS",
    "url": "https://leetcode.com/problemset/all/?search=Find%20the%20Difference%20of%20Two%20Arrays"
  },
  {
    "id": 501,
    "title": "Unique Number of Occurrences",
    "lc": 1207,
    "cat": "MAPS",
    "url": "https://leetcode.com/problemset/all/?search=Unique%20Number%20of%20Occurrences"
  },
  {
    "id": 502,
    "title": "Rank Transform of an Array",
    "lc": 1331,
    "cat": "MAPS",
    "url": "https://leetcode.com/problemset/all/?search=Rank%20Transform%20of%20an%20Array"
  },
  {
    "id": 503,
    "title": "Degree of an Array",
    "lc": 697,
    "cat": "MAPS",
    "url": "https://leetcode.com/problemset/all/?search=Degree%20of%20an%20Array"
  },
  {
    "id": 504,
    "title": "Brick Wall",
    "lc": 554,
    "cat": "MAPS",
    "url": "https://leetcode.com/problemset/all/?search=Brick%20Wall"
  },
  {
    "id": 505,
    "title": "Most Frequent Even Element",
    "lc": 2404,
    "cat": "MAPS",
    "url": "https://leetcode.com/problemset/all/?search=Most%20Frequent%20Even%20Element"
  },
  {
    "id": 506,
    "title": "Destination City",
    "lc": 1436,
    "cat": "MAPS",
    "url": "https://leetcode.com/problemset/all/?search=Destination%20City"
  },
  {
    "id": 507,
    "title": "Find Players With Zero or One Losses",
    "lc": 2225,
    "cat": "MAPS",
    "url": "https://leetcode.com/problemset/all/?search=Find%20Players%20With%20Zero%20or%20One%20Losses"
  },
  {
    "id": 508,
    "title": "Time Needed to Inform All Employees",
    "lc": 1376,
    "cat": "MAPS",
    "url": "https://leetcode.com/problemset/all/?search=Time%20Needed%20to%20Inform%20All%20Employees"
  },
  {
    "id": 509,
    "title": "Contains Duplicate",
    "lc": 217,
    "cat": "SETS",
    "url": "https://leetcode.com/problemset/all/?search=Contains%20Duplicate"
  },
  {
    "id": 510,
    "title": "Contains Duplicate II",
    "lc": 219,
    "cat": "SETS",
    "url": "https://leetcode.com/problemset/all/?search=Contains%20Duplicate%20II"
  },
  {
    "id": 511,
    "title": "Longest Consecutive Sequence",
    "lc": 128,
    "cat": "SETS",
    "url": "https://leetcode.com/problemset/all/?search=Longest%20Consecutive%20Sequence"
  },
  {
    "id": 512,
    "title": "Intersection of Two Arrays",
    "lc": 349,
    "cat": "SETS",
    "url": "https://leetcode.com/problemset/all/?search=Intersection%20of%20Two%20Arrays"
  },
  {
    "id": 513,
    "title": "Intersection of Two Arrays II",
    "lc": 350,
    "cat": "SETS",
    "url": "https://leetcode.com/problemset/all/?search=Intersection%20of%20Two%20Arrays%20II"
  },
  {
    "id": 514,
    "title": "Happy Number",
    "lc": 202,
    "cat": "SETS",
    "url": "https://leetcode.com/problemset/all/?search=Happy%20Number"
  },
  {
    "id": 515,
    "title": "Single Number",
    "lc": 136,
    "cat": "SETS",
    "url": "https://leetcode.com/problemset/all/?search=Single%20Number"
  },
  {
    "id": 516,
    "title": "Find the Difference of Two Arrays",
    "lc": 2215,
    "cat": "SETS",
    "url": "https://leetcode.com/problemset/all/?search=Find%20the%20Difference%20of%20Two%20Arrays"
  },
  {
    "id": 517,
    "title": "Unique Number of Occurrences",
    "lc": 1207,
    "cat": "SETS",
    "url": "https://leetcode.com/problemset/all/?search=Unique%20Number%20of%20Occurrences"
  },
  {
    "id": 518,
    "title": "Set Matrix Zeroes",
    "lc": 73,
    "cat": "SETS",
    "url": "https://leetcode.com/problemset/all/?search=Set%20Matrix%20Zeroes"
  },
  {
    "id": 519,
    "title": "First Missing Positive",
    "lc": 41,
    "cat": "SETS",
    "url": "https://leetcode.com/problemset/all/?search=First%20Missing%20Positive"
  },
  {
    "id": 520,
    "title": "Missing Number",
    "lc": 268,
    "cat": "SETS",
    "url": "https://leetcode.com/problemset/all/?search=Missing%20Number"
  },
  {
    "id": 521,
    "title": "Find All Numbers Disappeared in an Array",
    "lc": 448,
    "cat": "SETS",
    "url": "https://leetcode.com/problemset/all/?search=Find%20All%20Numbers%20Disappeared%20in%20an%20Array"
  },
  {
    "id": 522,
    "title": "Find Common Characters",
    "lc": 1002,
    "cat": "SETS",
    "url": "https://leetcode.com/problemset/all/?search=Find%20Common%20Characters"
  },
  {
    "id": 523,
    "title": "Distribute Candies",
    "lc": 575,
    "cat": "SETS",
    "url": "https://leetcode.com/problemset/all/?search=Distribute%20Candies"
  },
  {
    "id": 524,
    "title": "Fair Candy Swap",
    "lc": 888,
    "cat": "SETS",
    "url": "https://leetcode.com/problemset/all/?search=Fair%20Candy%20Swap"
  },
  {
    "id": 525,
    "title": "Two Out of Three",
    "lc": 2032,
    "cat": "SETS",
    "url": "https://leetcode.com/problemset/all/?search=Two%20Out%20of%20Three"
  },
  {
    "id": 526,
    "title": "Count the Number of Consistent Strings",
    "lc": 1684,
    "cat": "SETS",
    "url": "https://leetcode.com/problemset/all/?search=Count%20the%20Number%20of%20Consistent%20Strings"
  },
  {
    "id": 527,
    "title": "Maximum Number of Balloons",
    "lc": 1189,
    "cat": "SETS",
    "url": "https://leetcode.com/problemset/all/?search=Maximum%20Number%20of%20Balloons"
  },
  {
    "id": 528,
    "title": "Determine if Two Strings Are Close",
    "lc": 1657,
    "cat": "SETS",
    "url": "https://leetcode.com/problemset/all/?search=Determine%20if%20Two%20Strings%20Are%20Close"
  },
  {
    "id": 529,
    "title": "Word Break",
    "lc": 139,
    "cat": "SETS",
    "url": "https://leetcode.com/problemset/all/?search=Word%20Break"
  },
  {
    "id": 530,
    "title": "Word Break II",
    "lc": 140,
    "cat": "SETS",
    "url": "https://leetcode.com/problemset/all/?search=Word%20Break%20II"
  },
  {
    "id": 531,
    "title": "Repeated DNA Sequences",
    "lc": 187,
    "cat": "SETS",
    "url": "https://leetcode.com/problemset/all/?search=Repeated%20DNA%20Sequences"
  },
  {
    "id": 532,
    "title": "Longest Substring Without Repeating Characters",
    "lc": 3,
    "cat": "SETS",
    "url": "https://leetcode.com/problemset/all/?search=Longest%20Substring%20Without%20Repeating%20Characters"
  },
  {
    "id": 533,
    "title": "Minimum Window Substring",
    "lc": 76,
    "cat": "SETS",
    "url": "https://leetcode.com/problemset/all/?search=Minimum%20Window%20Substring"
  },
  {
    "id": 534,
    "title": "3Sum",
    "lc": 15,
    "cat": "SETS",
    "url": "https://leetcode.com/problemset/all/?search=3Sum"
  },
  {
    "id": 535,
    "title": "4Sum",
    "lc": 18,
    "cat": "SETS",
    "url": "https://leetcode.com/problemset/all/?search=4Sum"
  },
  {
    "id": 536,
    "title": "Valid Sudoku",
    "lc": 36,
    "cat": "SETS",
    "url": "https://leetcode.com/problemset/all/?search=Valid%20Sudoku"
  },
  {
    "id": 537,
    "title": "Sudoku Solver",
    "lc": 37,
    "cat": "SETS",
    "url": "https://leetcode.com/problemset/all/?search=Sudoku%20Solver"
  },
  {
    "id": 538,
    "title": "Robot Room Cleaner",
    "lc": 489,
    "cat": "SETS",
    "url": "https://leetcode.com/problemset/all/?search=Robot%20Room%20Cleaner"
  },
  {
    "id": 539,
    "title": "Number of Distinct Islands",
    "lc": 694,
    "cat": "SETS",
    "url": "https://leetcode.com/problemset/all/?search=Number%20of%20Distinct%20Islands"
  },
  {
    "id": 540,
    "title": "Making A Large Island",
    "lc": 827,
    "cat": "SETS",
    "url": "https://leetcode.com/problemset/all/?search=Making%20A%20Large%20Island"
  },
  {
    "id": 541,
    "title": "Accounts Merge",
    "lc": 721,
    "cat": "SETS",
    "url": "https://leetcode.com/problemset/all/?search=Accounts%20Merge"
  },
  {
    "id": 542,
    "title": "Most Stones Removed with Same Row or Column",
    "lc": 947,
    "cat": "SETS",
    "url": "https://leetcode.com/problemset/all/?search=Most%20Stones%20Removed%20with%20Same%20Row%20or%20Column"
  },
  {
    "id": 543,
    "title": "Design HashSet",
    "lc": 705,
    "cat": "SETS",
    "url": "https://leetcode.com/problemset/all/?search=Design%20HashSet"
  },
  {
    "id": 544,
    "title": "Design a Food Rating System",
    "lc": 2353,
    "cat": "SETS",
    "url": "https://leetcode.com/problemset/all/?search=Design%20a%20Food%20Rating%20System"
  },
  {
    "id": 545,
    "title": "My Calendar I",
    "lc": 729,
    "cat": "SETS",
    "url": "https://leetcode.com/problemset/all/?search=My%20Calendar%20I"
  },
  {
    "id": 546,
    "title": "My Calendar II",
    "lc": 731,
    "cat": "SETS",
    "url": "https://leetcode.com/problemset/all/?search=My%20Calendar%20II"
  },
  {
    "id": 547,
    "title": "Find the Index of the First Occurrence in a String",
    "lc": 28,
    "cat": "STRING HASHING",
    "url": "https://leetcode.com/problemset/all/?search=Find%20the%20Index%20of%20the%20First%20Occurrence%20in%20a%20String"
  },
  {
    "id": 548,
    "title": "Repeated Substring Pattern",
    "lc": 459,
    "cat": "STRING HASHING",
    "url": "https://leetcode.com/problemset/all/?search=Repeated%20Substring%20Pattern"
  },
  {
    "id": 549,
    "title": "Longest Common Prefix",
    "lc": 14,
    "cat": "STRING HASHING",
    "url": "https://leetcode.com/problemset/all/?search=Longest%20Common%20Prefix"
  },
  {
    "id": 550,
    "title": "Valid Anagram",
    "lc": 242,
    "cat": "STRING HASHING",
    "url": "https://leetcode.com/problemset/all/?search=Valid%20Anagram"
  },
  {
    "id": 551,
    "title": "Group Anagrams",
    "lc": 49,
    "cat": "STRING HASHING",
    "url": "https://leetcode.com/problemset/all/?search=Group%20Anagrams"
  },
  {
    "id": 552,
    "title": "Isomorphic Strings",
    "lc": 205,
    "cat": "STRING HASHING",
    "url": "https://leetcode.com/problemset/all/?search=Isomorphic%20Strings"
  },
  {
    "id": 553,
    "title": "Longest Substring Without Repeating Characters",
    "lc": 3,
    "cat": "STRING HASHING",
    "url": "https://leetcode.com/problemset/all/?search=Longest%20Substring%20Without%20Repeating%20Characters"
  },
  {
    "id": 554,
    "title": "Find All Anagrams in a String",
    "lc": 438,
    "cat": "STRING HASHING",
    "url": "https://leetcode.com/problemset/all/?search=Find%20All%20Anagrams%20in%20a%20String"
  },
  {
    "id": 555,
    "title": "Permutation in String",
    "lc": 567,
    "cat": "STRING HASHING",
    "url": "https://leetcode.com/problemset/all/?search=Permutation%20in%20String"
  },
  {
    "id": 556,
    "title": "Repeated DNA Sequences",
    "lc": 187,
    "cat": "STRING HASHING",
    "url": "https://leetcode.com/problemset/all/?search=Repeated%20DNA%20Sequences"
  },
  {
    "id": 557,
    "title": "Rabin-Karp String Matching",
    "lc": null,
    "cat": "STRING HASHING",
    "url": "https://www.google.com/search?q=Rabin-Karp%20String%20Matching%20practice%20problem"
  },
  {
    "id": 558,
    "title": "Implement strStr() using Rolling Hash",
    "lc": 28,
    "cat": "STRING HASHING",
    "url": "https://leetcode.com/problemset/all/?search=Implement%20strStr()%20using%20Rolling%20Hash"
  },
  {
    "id": 559,
    "title": "Longest Duplicate Substring",
    "lc": 1044,
    "cat": "STRING HASHING",
    "url": "https://leetcode.com/problemset/all/?search=Longest%20Duplicate%20Substring"
  },
  {
    "id": 560,
    "title": "Shortest Palindrome",
    "lc": 214,
    "cat": "STRING HASHING",
    "url": "https://leetcode.com/problemset/all/?search=Shortest%20Palindrome"
  },
  {
    "id": 561,
    "title": "Distinct Echo Substrings",
    "lc": 1316,
    "cat": "STRING HASHING",
    "url": "https://leetcode.com/problemset/all/?search=Distinct%20Echo%20Substrings"
  },
  {
    "id": 562,
    "title": "Longest Happy Prefix",
    "lc": 1392,
    "cat": "STRING HASHING",
    "url": "https://leetcode.com/problemset/all/?search=Longest%20Happy%20Prefix"
  },
  {
    "id": 563,
    "title": "Find Substring With Given Hash Value",
    "lc": 2156,
    "cat": "STRING HASHING",
    "url": "https://leetcode.com/problemset/all/?search=Find%20Substring%20With%20Given%20Hash%20Value"
  },
  {
    "id": 564,
    "title": "Substring with Concatenation of All Words",
    "lc": 30,
    "cat": "STRING HASHING",
    "url": "https://leetcode.com/problemset/all/?search=Substring%20with%20Concatenation%20of%20All%20Words"
  },
  {
    "id": 565,
    "title": "Number of Matching Subsequences",
    "lc": 792,
    "cat": "STRING HASHING",
    "url": "https://leetcode.com/problemset/all/?search=Number%20of%20Matching%20Subsequences"
  },
  {
    "id": 566,
    "title": "Word Pattern",
    "lc": 290,
    "cat": "STRING HASHING",
    "url": "https://leetcode.com/problemset/all/?search=Word%20Pattern"
  },
  {
    "id": 567,
    "title": "Word Break",
    "lc": 139,
    "cat": "STRING HASHING",
    "url": "https://leetcode.com/problemset/all/?search=Word%20Break"
  },
  {
    "id": 568,
    "title": "Word Break II",
    "lc": 140,
    "cat": "STRING HASHING",
    "url": "https://leetcode.com/problemset/all/?search=Word%20Break%20II"
  },
  {
    "id": 569,
    "title": "Encode and Decode Strings",
    "lc": null,
    "cat": "STRING HASHING",
    "url": "https://www.google.com/search?q=Encode%20and%20Decode%20Strings%20practice%20problem"
  },
  {
    "id": 570,
    "title": "Palindromic Substrings",
    "lc": 647,
    "cat": "STRING HASHING",
    "url": "https://leetcode.com/problemset/all/?search=Palindromic%20Substrings"
  },
  {
    "id": 571,
    "title": "Longest Palindromic Substring",
    "lc": 5,
    "cat": "STRING HASHING",
    "url": "https://leetcode.com/problemset/all/?search=Longest%20Palindromic%20Substring"
  },
  {
    "id": 572,
    "title": "Palindrome Pairs",
    "lc": 336,
    "cat": "STRING HASHING",
    "url": "https://leetcode.com/problemset/all/?search=Palindrome%20Pairs"
  },
  {
    "id": 573,
    "title": "Find Duplicate Subtrees",
    "lc": 652,
    "cat": "STRING HASHING",
    "url": "https://leetcode.com/problemset/all/?search=Find%20Duplicate%20Subtrees"
  },
  {
    "id": 574,
    "title": "Count Unique Characters of All Substrings of a Given String",
    "lc": 828,
    "cat": "STRING HASHING",
    "url": "https://leetcode.com/problemset/all/?search=Count%20Unique%20Characters%20of%20All%20Substrings%20of%20a%20Given%20String"
  },
  {
    "id": 575,
    "title": "Longest Duplicate Substring using Binary Search + Hashing",
    "lc": 1044,
    "cat": "STRING HASHING",
    "url": "https://leetcode.com/problemset/all/?search=Longest%20Duplicate%20Substring%20using%20Binary%20Search%20%2B%20Hashing"
  },
  {
    "id": 576,
    "title": "Binary Tree Level Order Traversal",
    "lc": 102,
    "cat": "BFS",
    "url": "https://leetcode.com/problemset/all/?search=Binary%20Tree%20Level%20Order%20Traversal"
  },
  {
    "id": 577,
    "title": "Binary Tree Zigzag Level Order Traversal",
    "lc": 103,
    "cat": "BFS",
    "url": "https://leetcode.com/problemset/all/?search=Binary%20Tree%20Zigzag%20Level%20Order%20Traversal"
  },
  {
    "id": 578,
    "title": "Minimum Depth of Binary Tree",
    "lc": 111,
    "cat": "BFS",
    "url": "https://leetcode.com/problemset/all/?search=Minimum%20Depth%20of%20Binary%20Tree"
  },
  {
    "id": 579,
    "title": "Number of Islands",
    "lc": 200,
    "cat": "BFS",
    "url": "https://leetcode.com/problemset/all/?search=Number%20of%20Islands"
  },
  {
    "id": 580,
    "title": "Flood Fill",
    "lc": 733,
    "cat": "BFS",
    "url": "https://leetcode.com/problemset/all/?search=Flood%20Fill"
  },
  {
    "id": 581,
    "title": "Rotting Oranges",
    "lc": 994,
    "cat": "BFS",
    "url": "https://leetcode.com/problemset/all/?search=Rotting%20Oranges"
  },
  {
    "id": 582,
    "title": "01 Matrix",
    "lc": 542,
    "cat": "BFS",
    "url": "https://leetcode.com/problemset/all/?search=01%20Matrix"
  },
  {
    "id": 583,
    "title": "Walls and Gates",
    "lc": null,
    "cat": "BFS",
    "url": "https://www.google.com/search?q=Walls%20and%20Gates%20practice%20problem"
  },
  {
    "id": 584,
    "title": "Shortest Path in Binary Matrix",
    "lc": 1091,
    "cat": "BFS",
    "url": "https://leetcode.com/problemset/all/?search=Shortest%20Path%20in%20Binary%20Matrix"
  },
  {
    "id": 585,
    "title": "Word Ladder",
    "lc": 127,
    "cat": "BFS",
    "url": "https://leetcode.com/problemset/all/?search=Word%20Ladder"
  },
  {
    "id": 586,
    "title": "Word Ladder II",
    "lc": 126,
    "cat": "BFS",
    "url": "https://leetcode.com/problemset/all/?search=Word%20Ladder%20II"
  },
  {
    "id": 587,
    "title": "Open the Lock",
    "lc": 752,
    "cat": "BFS",
    "url": "https://leetcode.com/problemset/all/?search=Open%20the%20Lock"
  },
  {
    "id": 588,
    "title": "Perfect Squares",
    "lc": 279,
    "cat": "BFS",
    "url": "https://leetcode.com/problemset/all/?search=Perfect%20Squares"
  },
  {
    "id": 589,
    "title": "Snakes and Ladders",
    "lc": 909,
    "cat": "BFS",
    "url": "https://leetcode.com/problemset/all/?search=Snakes%20and%20Ladders"
  },
  {
    "id": 590,
    "title": "Minimum Knight Moves",
    "lc": 1197,
    "cat": "BFS",
    "url": "https://leetcode.com/problemset/all/?search=Minimum%20Knight%20Moves"
  },
  {
    "id": 591,
    "title": "As Far from Land as Possible",
    "lc": 1162,
    "cat": "BFS",
    "url": "https://leetcode.com/problemset/all/?search=As%20Far%20from%20Land%20as%20Possible"
  },
  {
    "id": 592,
    "title": "Shortest Bridge",
    "lc": 934,
    "cat": "BFS",
    "url": "https://leetcode.com/problemset/all/?search=Shortest%20Bridge"
  },
  {
    "id": 593,
    "title": "Pacific Atlantic Water Flow",
    "lc": 417,
    "cat": "BFS",
    "url": "https://leetcode.com/problemset/all/?search=Pacific%20Atlantic%20Water%20Flow"
  },
  {
    "id": 594,
    "title": "Surrounded Regions",
    "lc": 130,
    "cat": "BFS",
    "url": "https://leetcode.com/problemset/all/?search=Surrounded%20Regions"
  },
  {
    "id": 595,
    "title": "Clone Graph",
    "lc": 133,
    "cat": "BFS",
    "url": "https://leetcode.com/problemset/all/?search=Clone%20Graph"
  },
  {
    "id": 596,
    "title": "Is Graph Bipartite?",
    "lc": 785,
    "cat": "BFS",
    "url": "https://leetcode.com/problemset/all/?search=Is%20Graph%20Bipartite%3F"
  },
  {
    "id": 597,
    "title": "Possible Bipartition",
    "lc": 886,
    "cat": "BFS",
    "url": "https://leetcode.com/problemset/all/?search=Possible%20Bipartition"
  },
  {
    "id": 598,
    "title": "Course Schedule",
    "lc": 207,
    "cat": "BFS",
    "url": "https://leetcode.com/problemset/all/?search=Course%20Schedule"
  },
  {
    "id": 599,
    "title": "Course Schedule II",
    "lc": 210,
    "cat": "BFS",
    "url": "https://leetcode.com/problemset/all/?search=Course%20Schedule%20II"
  },
  {
    "id": 600,
    "title": "Minimum Genetic Mutation",
    "lc": 433,
    "cat": "BFS",
    "url": "https://leetcode.com/problemset/all/?search=Minimum%20Genetic%20Mutation"
  },
  {
    "id": 601,
    "title": "Bus Routes",
    "lc": 815,
    "cat": "BFS",
    "url": "https://leetcode.com/problemset/all/?search=Bus%20Routes"
  },
  {
    "id": 602,
    "title": "Shortest Path with Alternating Colors",
    "lc": 1129,
    "cat": "BFS",
    "url": "https://leetcode.com/problemset/all/?search=Shortest%20Path%20with%20Alternating%20Colors"
  },
  {
    "id": 603,
    "title": "All Nodes Distance K in Binary Tree",
    "lc": 863,
    "cat": "BFS",
    "url": "https://leetcode.com/problemset/all/?search=All%20Nodes%20Distance%20K%20in%20Binary%20Tree"
  },
  {
    "id": 604,
    "title": "Amount of Time for Binary Tree to Be Infected",
    "lc": 2385,
    "cat": "BFS",
    "url": "https://leetcode.com/problemset/all/?search=Amount%20of%20Time%20for%20Binary%20Tree%20to%20Be%20Infected"
  },
  {
    "id": 605,
    "title": "Find if Path Exists in Graph",
    "lc": 1971,
    "cat": "BFS",
    "url": "https://leetcode.com/problemset/all/?search=Find%20if%20Path%20Exists%20in%20Graph"
  },
  {
    "id": 606,
    "title": "Nearest Exit from Entrance in Maze",
    "lc": 1926,
    "cat": "BFS",
    "url": "https://leetcode.com/problemset/all/?search=Nearest%20Exit%20from%20Entrance%20in%20Maze"
  },
  {
    "id": 607,
    "title": "Keys and Rooms",
    "lc": 841,
    "cat": "BFS",
    "url": "https://leetcode.com/problemset/all/?search=Keys%20and%20Rooms"
  },
  {
    "id": 608,
    "title": "Shortest Path in a Grid with Obstacles Elimination",
    "lc": 1293,
    "cat": "BFS",
    "url": "https://leetcode.com/problemset/all/?search=Shortest%20Path%20in%20a%20Grid%20with%20Obstacles%20Elimination"
  },
  {
    "id": 609,
    "title": "Binary Tree Preorder Traversal",
    "lc": 144,
    "cat": "DFS",
    "url": "https://leetcode.com/problemset/all/?search=Binary%20Tree%20Preorder%20Traversal"
  },
  {
    "id": 610,
    "title": "Binary Tree Inorder Traversal",
    "lc": 94,
    "cat": "DFS",
    "url": "https://leetcode.com/problemset/all/?search=Binary%20Tree%20Inorder%20Traversal"
  },
  {
    "id": 611,
    "title": "Binary Tree Postorder Traversal",
    "lc": 145,
    "cat": "DFS",
    "url": "https://leetcode.com/problemset/all/?search=Binary%20Tree%20Postorder%20Traversal"
  },
  {
    "id": 612,
    "title": "Maximum Depth of Binary Tree",
    "lc": 104,
    "cat": "DFS",
    "url": "https://leetcode.com/problemset/all/?search=Maximum%20Depth%20of%20Binary%20Tree"
  },
  {
    "id": 613,
    "title": "Same Tree",
    "lc": 100,
    "cat": "DFS",
    "url": "https://leetcode.com/problemset/all/?search=Same%20Tree"
  },
  {
    "id": 614,
    "title": "Symmetric Tree",
    "lc": 101,
    "cat": "DFS",
    "url": "https://leetcode.com/problemset/all/?search=Symmetric%20Tree"
  },
  {
    "id": 615,
    "title": "Invert Binary Tree",
    "lc": 226,
    "cat": "DFS",
    "url": "https://leetcode.com/problemset/all/?search=Invert%20Binary%20Tree"
  },
  {
    "id": 616,
    "title": "Diameter of Binary Tree",
    "lc": 543,
    "cat": "DFS",
    "url": "https://leetcode.com/problemset/all/?search=Diameter%20of%20Binary%20Tree"
  },
  {
    "id": 617,
    "title": "Balanced Binary Tree",
    "lc": 110,
    "cat": "DFS",
    "url": "https://leetcode.com/problemset/all/?search=Balanced%20Binary%20Tree"
  },
  {
    "id": 618,
    "title": "Path Sum",
    "lc": 112,
    "cat": "DFS",
    "url": "https://leetcode.com/problemset/all/?search=Path%20Sum"
  },
  {
    "id": 619,
    "title": "Path Sum II",
    "lc": 113,
    "cat": "DFS",
    "url": "https://leetcode.com/problemset/all/?search=Path%20Sum%20II"
  },
  {
    "id": 620,
    "title": "Lowest Common Ancestor of a Binary Tree",
    "lc": 236,
    "cat": "DFS",
    "url": "https://leetcode.com/problemset/all/?search=Lowest%20Common%20Ancestor%20of%20a%20Binary%20Tree"
  },
  {
    "id": 621,
    "title": "Binary Tree Maximum Path Sum",
    "lc": 124,
    "cat": "DFS",
    "url": "https://leetcode.com/problemset/all/?search=Binary%20Tree%20Maximum%20Path%20Sum"
  },
  {
    "id": 622,
    "title": "Flatten Binary Tree to Linked List",
    "lc": 114,
    "cat": "DFS",
    "url": "https://leetcode.com/problemset/all/?search=Flatten%20Binary%20Tree%20to%20Linked%20List"
  },
  {
    "id": 623,
    "title": "Number of Islands",
    "lc": 200,
    "cat": "DFS",
    "url": "https://leetcode.com/problemset/all/?search=Number%20of%20Islands"
  },
  {
    "id": 624,
    "title": "Flood Fill",
    "lc": 733,
    "cat": "DFS",
    "url": "https://leetcode.com/problemset/all/?search=Flood%20Fill"
  },
  {
    "id": 625,
    "title": "Surrounded Regions",
    "lc": 130,
    "cat": "DFS",
    "url": "https://leetcode.com/problemset/all/?search=Surrounded%20Regions"
  },
  {
    "id": 626,
    "title": "Pacific Atlantic Water Flow",
    "lc": 417,
    "cat": "DFS",
    "url": "https://leetcode.com/problemset/all/?search=Pacific%20Atlantic%20Water%20Flow"
  },
  {
    "id": 627,
    "title": "Clone Graph",
    "lc": 133,
    "cat": "DFS",
    "url": "https://leetcode.com/problemset/all/?search=Clone%20Graph"
  },
  {
    "id": 628,
    "title": "Find if Path Exists in Graph",
    "lc": 1971,
    "cat": "DFS",
    "url": "https://leetcode.com/problemset/all/?search=Find%20if%20Path%20Exists%20in%20Graph"
  },
  {
    "id": 629,
    "title": "Number of Provinces",
    "lc": 547,
    "cat": "DFS",
    "url": "https://leetcode.com/problemset/all/?search=Number%20of%20Provinces"
  },
  {
    "id": 630,
    "title": "Max Area of Island",
    "lc": 695,
    "cat": "DFS",
    "url": "https://leetcode.com/problemset/all/?search=Max%20Area%20of%20Island"
  },
  {
    "id": 631,
    "title": "Count Connected Components in an Undirected Graph",
    "lc": 323,
    "cat": "DFS",
    "url": "https://leetcode.com/problemset/all/?search=Count%20Connected%20Components%20in%20an%20Undirected%20Graph"
  },
  {
    "id": 632,
    "title": "Graph Valid Tree",
    "lc": 261,
    "cat": "DFS",
    "url": "https://leetcode.com/problemset/all/?search=Graph%20Valid%20Tree"
  },
  {
    "id": 633,
    "title": "Is Graph Bipartite?",
    "lc": 785,
    "cat": "DFS",
    "url": "https://leetcode.com/problemset/all/?search=Is%20Graph%20Bipartite%3F"
  },
  {
    "id": 634,
    "title": "Possible Bipartition",
    "lc": 886,
    "cat": "DFS",
    "url": "https://leetcode.com/problemset/all/?search=Possible%20Bipartition"
  },
  {
    "id": 635,
    "title": "Course Schedule",
    "lc": 207,
    "cat": "DFS",
    "url": "https://leetcode.com/problemset/all/?search=Course%20Schedule"
  },
  {
    "id": 636,
    "title": "Course Schedule II",
    "lc": 210,
    "cat": "DFS",
    "url": "https://leetcode.com/problemset/all/?search=Course%20Schedule%20II"
  },
  {
    "id": 637,
    "title": "All Paths From Source to Target",
    "lc": 797,
    "cat": "DFS",
    "url": "https://leetcode.com/problemset/all/?search=All%20Paths%20From%20Source%20to%20Target"
  },
  {
    "id": 638,
    "title": "Keys and Rooms",
    "lc": 841,
    "cat": "DFS",
    "url": "https://leetcode.com/problemset/all/?search=Keys%20and%20Rooms"
  },
  {
    "id": 639,
    "title": "Reconstruct Itinerary",
    "lc": 332,
    "cat": "DFS",
    "url": "https://leetcode.com/problemset/all/?search=Reconstruct%20Itinerary"
  },
  {
    "id": 640,
    "title": "Word Search",
    "lc": 79,
    "cat": "DFS",
    "url": "https://leetcode.com/problemset/all/?search=Word%20Search"
  },
  {
    "id": 641,
    "title": "Letter Combinations of a Phone Number",
    "lc": 17,
    "cat": "DFS",
    "url": "https://leetcode.com/problemset/all/?search=Letter%20Combinations%20of%20a%20Phone%20Number"
  },
  {
    "id": 642,
    "title": "Combination Sum",
    "lc": 39,
    "cat": "DFS",
    "url": "https://leetcode.com/problemset/all/?search=Combination%20Sum"
  },
  {
    "id": 643,
    "title": "Subsets",
    "lc": 78,
    "cat": "DFS",
    "url": "https://leetcode.com/problemset/all/?search=Subsets"
  },
  {
    "id": 644,
    "title": "Permutations",
    "lc": 46,
    "cat": "DFS",
    "url": "https://leetcode.com/problemset/all/?search=Permutations"
  },
  {
    "id": 645,
    "title": "N-Queens",
    "lc": 51,
    "cat": "DFS",
    "url": "https://leetcode.com/problemset/all/?search=N-Queens"
  },
  {
    "id": 646,
    "title": "Generate Parentheses",
    "lc": 22,
    "cat": "DFS",
    "url": "https://leetcode.com/problemset/all/?search=Generate%20Parentheses"
  },
  {
    "id": 647,
    "title": "Palindrome Partitioning",
    "lc": 131,
    "cat": "DFS",
    "url": "https://leetcode.com/problemset/all/?search=Palindrome%20Partitioning"
  },
  {
    "id": 648,
    "title": "Number of Enclaves",
    "lc": 1020,
    "cat": "DFS",
    "url": "https://leetcode.com/problemset/all/?search=Number%20of%20Enclaves"
  },
  {
    "id": 649,
    "title": "Count Sub Islands",
    "lc": 1905,
    "cat": "DFS",
    "url": "https://leetcode.com/problemset/all/?search=Count%20Sub%20Islands"
  },
  {
    "id": 650,
    "title": "Critical Connections in a Network",
    "lc": 1192,
    "cat": "DFS",
    "url": "https://leetcode.com/problemset/all/?search=Critical%20Connections%20in%20a%20Network"
  },
  {
    "id": 651,
    "title": "Number of Provinces",
    "lc": 547,
    "cat": "CONNECTED COMPONENTS",
    "url": "https://leetcode.com/problemset/all/?search=Number%20of%20Provinces"
  },
  {
    "id": 652,
    "title": "Number of Connected Components in an Undirected Graph",
    "lc": 323,
    "cat": "CONNECTED COMPONENTS",
    "url": "https://leetcode.com/problemset/all/?search=Number%20of%20Connected%20Components%20in%20an%20Undirected%20Graph"
  },
  {
    "id": 653,
    "title": "Graph Valid Tree",
    "lc": 261,
    "cat": "CONNECTED COMPONENTS",
    "url": "https://leetcode.com/problemset/all/?search=Graph%20Valid%20Tree"
  },
  {
    "id": 654,
    "title": "Number of Islands",
    "lc": 200,
    "cat": "CONNECTED COMPONENTS",
    "url": "https://leetcode.com/problemset/all/?search=Number%20of%20Islands"
  },
  {
    "id": 655,
    "title": "Max Area of Island",
    "lc": 695,
    "cat": "CONNECTED COMPONENTS",
    "url": "https://leetcode.com/problemset/all/?search=Max%20Area%20of%20Island"
  },
  {
    "id": 656,
    "title": "Number of Enclaves",
    "lc": 1020,
    "cat": "CONNECTED COMPONENTS",
    "url": "https://leetcode.com/problemset/all/?search=Number%20of%20Enclaves"
  },
  {
    "id": 657,
    "title": "Number of Closed Islands",
    "lc": 1254,
    "cat": "CONNECTED COMPONENTS",
    "url": "https://leetcode.com/problemset/all/?search=Number%20of%20Closed%20Islands"
  },
  {
    "id": 658,
    "title": "Count Sub Islands",
    "lc": 1905,
    "cat": "CONNECTED COMPONENTS",
    "url": "https://leetcode.com/problemset/all/?search=Count%20Sub%20Islands"
  },
  {
    "id": 659,
    "title": "Surrounded Regions",
    "lc": 130,
    "cat": "CONNECTED COMPONENTS",
    "url": "https://leetcode.com/problemset/all/?search=Surrounded%20Regions"
  },
  {
    "id": 660,
    "title": "Making A Large Island",
    "lc": 827,
    "cat": "CONNECTED COMPONENTS",
    "url": "https://leetcode.com/problemset/all/?search=Making%20A%20Large%20Island"
  },
  {
    "id": 661,
    "title": "Most Stones Removed with Same Row or Column",
    "lc": 947,
    "cat": "CONNECTED COMPONENTS",
    "url": "https://leetcode.com/problemset/all/?search=Most%20Stones%20Removed%20with%20Same%20Row%20or%20Column"
  },
  {
    "id": 662,
    "title": "Accounts Merge",
    "lc": 721,
    "cat": "CONNECTED COMPONENTS",
    "url": "https://leetcode.com/problemset/all/?search=Accounts%20Merge"
  },
  {
    "id": 663,
    "title": "Satisfiability of Equality Equations",
    "lc": 990,
    "cat": "CONNECTED COMPONENTS",
    "url": "https://leetcode.com/problemset/all/?search=Satisfiability%20of%20Equality%20Equations"
  },
  {
    "id": 664,
    "title": "Redundant Connection",
    "lc": 684,
    "cat": "CONNECTED COMPONENTS",
    "url": "https://leetcode.com/problemset/all/?search=Redundant%20Connection"
  },
  {
    "id": 665,
    "title": "Redundant Connection II",
    "lc": 685,
    "cat": "CONNECTED COMPONENTS",
    "url": "https://leetcode.com/problemset/all/?search=Redundant%20Connection%20II"
  },
  {
    "id": 666,
    "title": "Number of Operations to Make Network Connected",
    "lc": 1319,
    "cat": "CONNECTED COMPONENTS",
    "url": "https://leetcode.com/problemset/all/?search=Number%20of%20Operations%20to%20Make%20Network%20Connected"
  },
  {
    "id": 667,
    "title": "Regions Cut By Slashes",
    "lc": 959,
    "cat": "CONNECTED COMPONENTS",
    "url": "https://leetcode.com/problemset/all/?search=Regions%20Cut%20By%20Slashes"
  },
  {
    "id": 668,
    "title": "Smallest String With Swaps",
    "lc": 1202,
    "cat": "CONNECTED COMPONENTS",
    "url": "https://leetcode.com/problemset/all/?search=Smallest%20String%20With%20Swaps"
  },
  {
    "id": 669,
    "title": "Checking Existence of Edge Length Limited Paths",
    "lc": 1697,
    "cat": "CONNECTED COMPONENTS",
    "url": "https://leetcode.com/problemset/all/?search=Checking%20Existence%20of%20Edge%20Length%20Limited%20Paths"
  },
  {
    "id": 670,
    "title": "Min Cost to Connect All Points",
    "lc": 1584,
    "cat": "CONNECTED COMPONENTS",
    "url": "https://leetcode.com/problemset/all/?search=Min%20Cost%20to%20Connect%20All%20Points"
  },
  {
    "id": 671,
    "title": "Kruskal's Minimum Spanning Tree",
    "lc": null,
    "cat": "CONNECTED COMPONENTS",
    "url": "https://www.google.com/search?q=Kruskal's%20Minimum%20Spanning%20Tree%20practice%20problem"
  },
  {
    "id": 672,
    "title": "Dynamic Number of Islands",
    "lc": null,
    "cat": "CONNECTED COMPONENTS",
    "url": "https://www.google.com/search?q=Dynamic%20Number%20of%20Islands%20practice%20problem"
  },
  {
    "id": 673,
    "title": "Friend Circles / Connected Friend Groups",
    "lc": null,
    "cat": "CONNECTED COMPONENTS",
    "url": "https://www.google.com/search?q=Friend%20Circles%20%2F%20Connected%20Friend%20Groups%20practice%20problem"
  },
  {
    "id": 674,
    "title": "Count Components After Removing Edges",
    "lc": null,
    "cat": "CONNECTED COMPONENTS",
    "url": "https://www.google.com/search?q=Count%20Components%20After%20Removing%20Edges%20practice%20problem"
  },
  {
    "id": 675,
    "title": "Shortest Path in Binary Matrix",
    "lc": 1091,
    "cat": "SHORTEST PATHS",
    "url": "https://leetcode.com/problemset/all/?search=Shortest%20Path%20in%20Binary%20Matrix"
  },
  {
    "id": 676,
    "title": "Word Ladder",
    "lc": 127,
    "cat": "SHORTEST PATHS",
    "url": "https://leetcode.com/problemset/all/?search=Word%20Ladder"
  },
  {
    "id": 677,
    "title": "Open the Lock",
    "lc": 752,
    "cat": "SHORTEST PATHS",
    "url": "https://leetcode.com/problemset/all/?search=Open%20the%20Lock"
  },
  {
    "id": 678,
    "title": "Minimum Knight Moves",
    "lc": 1197,
    "cat": "SHORTEST PATHS",
    "url": "https://leetcode.com/problemset/all/?search=Minimum%20Knight%20Moves"
  },
  {
    "id": 679,
    "title": "Network Delay Time",
    "lc": 743,
    "cat": "SHORTEST PATHS",
    "url": "https://leetcode.com/problemset/all/?search=Network%20Delay%20Time"
  },
  {
    "id": 680,
    "title": "Cheapest Flights Within K Stops",
    "lc": 787,
    "cat": "SHORTEST PATHS",
    "url": "https://leetcode.com/problemset/all/?search=Cheapest%20Flights%20Within%20K%20Stops"
  },
  {
    "id": 681,
    "title": "Path With Minimum Effort",
    "lc": 1631,
    "cat": "SHORTEST PATHS",
    "url": "https://leetcode.com/problemset/all/?search=Path%20With%20Minimum%20Effort"
  },
  {
    "id": 682,
    "title": "Swim in Rising Water",
    "lc": 778,
    "cat": "SHORTEST PATHS",
    "url": "https://leetcode.com/problemset/all/?search=Swim%20in%20Rising%20Water"
  },
  {
    "id": 683,
    "title": "Shortest Path in a Grid with Obstacles Elimination",
    "lc": 1293,
    "cat": "SHORTEST PATHS",
    "url": "https://leetcode.com/problemset/all/?search=Shortest%20Path%20in%20a%20Grid%20with%20Obstacles%20Elimination"
  },
  {
    "id": 684,
    "title": "Shortest Path with Alternating Colors",
    "lc": 1129,
    "cat": "SHORTEST PATHS",
    "url": "https://leetcode.com/problemset/all/?search=Shortest%20Path%20with%20Alternating%20Colors"
  },
  {
    "id": 685,
    "title": "Find the City With the Smallest Number of Neighbors at a Threshold Distance",
    "lc": 1334,
    "cat": "SHORTEST PATHS",
    "url": "https://leetcode.com/problemset/all/?search=Find%20the%20City%20With%20the%20Smallest%20Number%20of%20Neighbors%20at%20a%20Threshold%20Distance"
  },
  {
    "id": 686,
    "title": "All-Pairs Shortest Path — Floyd-Warshall",
    "lc": null,
    "cat": "SHORTEST PATHS",
    "url": "https://www.google.com/search?q=All-Pairs%20Shortest%20Path%20%E2%80%94%20Floyd-Warshall%20practice%20problem"
  },
  {
    "id": 687,
    "title": "Dijkstra's Shortest Path Algorithm",
    "lc": null,
    "cat": "SHORTEST PATHS",
    "url": "https://www.google.com/search?q=Dijkstra's%20Shortest%20Path%20Algorithm%20practice%20problem"
  },
  {
    "id": 688,
    "title": "Bellman-Ford Algorithm",
    "lc": null,
    "cat": "SHORTEST PATHS",
    "url": "https://www.google.com/search?q=Bellman-Ford%20Algorithm%20practice%20problem"
  },
  {
    "id": 689,
    "title": "Shortest Path in a DAG",
    "lc": null,
    "cat": "SHORTEST PATHS",
    "url": "https://www.google.com/search?q=Shortest%20Path%20in%20a%20DAG%20practice%20problem"
  },
  {
    "id": 690,
    "title": "0-1 BFS Shortest Path",
    "lc": null,
    "cat": "SHORTEST PATHS",
    "url": "https://www.google.com/search?q=0-1%20BFS%20Shortest%20Path%20practice%20problem"
  },
  {
    "id": 691,
    "title": "Cheapest Flights Within K Stops using Bellman-Ford",
    "lc": 787,
    "cat": "SHORTEST PATHS",
    "url": "https://leetcode.com/problemset/all/?search=Cheapest%20Flights%20Within%20K%20Stops%20using%20Bellman-Ford"
  },
  {
    "id": 692,
    "title": "Minimum Cost to Reach Destination in Time",
    "lc": 1928,
    "cat": "SHORTEST PATHS",
    "url": "https://leetcode.com/problemset/all/?search=Minimum%20Cost%20to%20Reach%20Destination%20in%20Time"
  },
  {
    "id": 693,
    "title": "Minimum Cost to Make at Least One Valid Path in a Grid",
    "lc": 1368,
    "cat": "SHORTEST PATHS",
    "url": "https://leetcode.com/problemset/all/?search=Minimum%20Cost%20to%20Make%20at%20Least%20One%20Valid%20Path%20in%20a%20Grid"
  },
  {
    "id": 694,
    "title": "Minimum Obstacle Removal to Reach Corner",
    "lc": 2290,
    "cat": "SHORTEST PATHS",
    "url": "https://leetcode.com/problemset/all/?search=Minimum%20Obstacle%20Removal%20to%20Reach%20Corner"
  },
  {
    "id": 695,
    "title": "Second Minimum Time to Reach Destination",
    "lc": 2045,
    "cat": "SHORTEST PATHS",
    "url": "https://leetcode.com/problemset/all/?search=Second%20Minimum%20Time%20to%20Reach%20Destination"
  },
  {
    "id": 696,
    "title": "Number of Ways to Arrive at Destination",
    "lc": 1976,
    "cat": "SHORTEST PATHS",
    "url": "https://leetcode.com/problemset/all/?search=Number%20of%20Ways%20to%20Arrive%20at%20Destination"
  },
  {
    "id": 697,
    "title": "Shortest Path Visiting All Nodes",
    "lc": 847,
    "cat": "SHORTEST PATHS",
    "url": "https://leetcode.com/problemset/all/?search=Shortest%20Path%20Visiting%20All%20Nodes"
  },
  {
    "id": 698,
    "title": "Bus Routes",
    "lc": 815,
    "cat": "SHORTEST PATHS",
    "url": "https://leetcode.com/problemset/all/?search=Bus%20Routes"
  },
  {
    "id": 699,
    "title": "Sliding Puzzle",
    "lc": 773,
    "cat": "SHORTEST PATHS",
    "url": "https://leetcode.com/problemset/all/?search=Sliding%20Puzzle"
  },
  {
    "id": 700,
    "title": "Minimum Cost to Connect All Points",
    "lc": 1584,
    "cat": "SHORTEST PATHS",
    "url": "https://leetcode.com/problemset/all/?search=Minimum%20Cost%20to%20Connect%20All%20Points"
  },
  {
    "id": 701,
    "title": "Reconstruct Itinerary",
    "lc": 332,
    "cat": "SHORTEST PATHS",
    "url": "https://leetcode.com/problemset/all/?search=Reconstruct%20Itinerary"
  },
  {
    "id": 702,
    "title": "Cheapest Flights Within K Stops",
    "lc": 787,
    "cat": "SHORTEST PATHS",
    "url": "https://leetcode.com/problemset/all/?search=Cheapest%20Flights%20Within%20K%20Stops"
  },
  {
    "id": 703,
    "title": "Implement Dijkstra's Shortest Path Algorithm",
    "lc": null,
    "cat": "DIJKSTRA’S",
    "url": "https://www.google.com/search?q=Implement%20Dijkstra's%20Shortest%20Path%20Algorithm%20practice%20problem"
  },
  {
    "id": 704,
    "title": "Network Delay Time",
    "lc": 743,
    "cat": "DIJKSTRA’S",
    "url": "https://leetcode.com/problemset/all/?search=Network%20Delay%20Time"
  },
  {
    "id": 705,
    "title": "Path With Minimum Effort",
    "lc": 1631,
    "cat": "DIJKSTRA’S",
    "url": "https://leetcode.com/problemset/all/?search=Path%20With%20Minimum%20Effort"
  },
  {
    "id": 706,
    "title": "Number of Ways to Arrive at Destination",
    "lc": 1976,
    "cat": "DIJKSTRA’S",
    "url": "https://leetcode.com/problemset/all/?search=Number%20of%20Ways%20to%20Arrive%20at%20Destination"
  },
  {
    "id": 707,
    "title": "Cheapest Flights Within K Stops",
    "lc": 787,
    "cat": "DIJKSTRA’S",
    "url": "https://leetcode.com/problemset/all/?search=Cheapest%20Flights%20Within%20K%20Stops"
  },
  {
    "id": 708,
    "title": "Swim in Rising Water",
    "lc": 778,
    "cat": "DIJKSTRA’S",
    "url": "https://leetcode.com/problemset/all/?search=Swim%20in%20Rising%20Water"
  },
  {
    "id": 709,
    "title": "Minimum Cost to Reach Destination in Time",
    "lc": 1928,
    "cat": "DIJKSTRA’S",
    "url": "https://leetcode.com/problemset/all/?search=Minimum%20Cost%20to%20Reach%20Destination%20in%20Time"
  },
  {
    "id": 710,
    "title": "Find the City With the Smallest Number of Neighbors at a Threshold Distance",
    "lc": 1334,
    "cat": "DIJKSTRA’S",
    "url": "https://leetcode.com/problemset/all/?search=Find%20the%20City%20With%20the%20Smallest%20Number%20of%20Neighbors%20at%20a%20Threshold%20Distance"
  },
  {
    "id": 711,
    "title": "Shortest Path in a Grid with Weighted Cells",
    "lc": null,
    "cat": "DIJKSTRA’S",
    "url": "https://www.google.com/search?q=Shortest%20Path%20in%20a%20Grid%20with%20Weighted%20Cells%20practice%20problem"
  },
  {
    "id": 712,
    "title": "Dijkstra with Multiple Sources",
    "lc": null,
    "cat": "DIJKSTRA’S",
    "url": "https://www.google.com/search?q=Dijkstra%20with%20Multiple%20Sources%20practice%20problem"
  },
  {
    "id": 713,
    "title": "Dijkstra with Path Reconstruction",
    "lc": null,
    "cat": "DIJKSTRA’S",
    "url": "https://www.google.com/search?q=Dijkstra%20with%20Path%20Reconstruction%20practice%20problem"
  },
  {
    "id": 714,
    "title": "Dijkstra for Shortest Path Between Two Specific Nodes",
    "lc": null,
    "cat": "DIJKSTRA’S",
    "url": "https://www.google.com/search?q=Dijkstra%20for%20Shortest%20Path%20Between%20Two%20Specific%20Nodes%20practice%20problem"
  },
  {
    "id": 715,
    "title": "Dijkstra on an Adjacency Matrix",
    "lc": null,
    "cat": "DIJKSTRA’S",
    "url": "https://www.google.com/search?q=Dijkstra%20on%20an%20Adjacency%20Matrix%20practice%20problem"
  },
  {
    "id": 716,
    "title": "Dijkstra Using a Min Priority Queue",
    "lc": null,
    "cat": "DIJKSTRA’S",
    "url": "https://www.google.com/search?q=Dijkstra%20Using%20a%20Min%20Priority%20Queue%20practice%20problem"
  },
  {
    "id": 717,
    "title": "Second Shortest Path in a Weighted Graph",
    "lc": null,
    "cat": "DIJKSTRA’S",
    "url": "https://www.google.com/search?q=Second%20Shortest%20Path%20in%20a%20Weighted%20Graph%20practice%20problem"
  },
  {
    "id": 718,
    "title": "Cheapest Route with a Maximum Number of Stops",
    "lc": 787,
    "cat": "DIJKSTRA’S",
    "url": "https://leetcode.com/problemset/all/?search=Cheapest%20Route%20with%20a%20Maximum%20Number%20of%20Stops"
  },
  {
    "id": 719,
    "title": "Minimum Cost to Make at Least One Valid Path in a Grid",
    "lc": 1368,
    "cat": "DIJKSTRA’S",
    "url": "https://leetcode.com/problemset/all/?search=Minimum%20Cost%20to%20Make%20at%20Least%20One%20Valid%20Path%20in%20a%20Grid"
  },
  {
    "id": 720,
    "title": "Minimum Obstacle Removal to Reach Corner",
    "lc": 2290,
    "cat": "DIJKSTRA’S",
    "url": "https://leetcode.com/problemset/all/?search=Minimum%20Obstacle%20Removal%20to%20Reach%20Corner"
  },
  {
    "id": 721,
    "title": "Minimum Cost to Connect All Points",
    "lc": 1584,
    "cat": "DIJKSTRA’S",
    "url": "https://leetcode.com/problemset/all/?search=Minimum%20Cost%20to%20Connect%20All%20Points"
  },
  {
    "id": 722,
    "title": "Path With Maximum Probability",
    "lc": 1514,
    "cat": "DIJKSTRA’S",
    "url": "https://leetcode.com/problemset/all/?search=Path%20With%20Maximum%20Probability"
  },
  {
    "id": 723,
    "title": "Minimum Cost to Reach Destination",
    "lc": null,
    "cat": "DIJKSTRA’S",
    "url": "https://www.google.com/search?q=Minimum%20Cost%20to%20Reach%20Destination%20practice%20problem"
  },
  {
    "id": 724,
    "title": "Shortest Path Visiting All Nodes",
    "lc": 847,
    "cat": "DIJKSTRA’S",
    "url": "https://leetcode.com/problemset/all/?search=Shortest%20Path%20Visiting%20All%20Nodes"
  },
  {
    "id": 725,
    "title": "Reachable Nodes In Restricted Subdivided Graph",
    "lc": 882,
    "cat": "DIJKSTRA’S",
    "url": "https://leetcode.com/problemset/all/?search=Reachable%20Nodes%20In%20Restricted%20Subdivided%20Graph"
  },
  {
    "id": 726,
    "title": "Implement Prim's MST Algorithm",
    "lc": null,
    "cat": "MST",
    "url": "https://www.google.com/search?q=Implement%20Prim's%20MST%20Algorithm%20practice%20problem"
  },
  {
    "id": 727,
    "title": "Implement Kruskal's MST Algorithm",
    "lc": null,
    "cat": "MST",
    "url": "https://www.google.com/search?q=Implement%20Kruskal's%20MST%20Algorithm%20practice%20problem"
  },
  {
    "id": 728,
    "title": "Implement DSU / Union-Find",
    "lc": null,
    "cat": "MST",
    "url": "https://www.google.com/search?q=Implement%20DSU%20%2F%20Union-Find%20practice%20problem"
  },
  {
    "id": 729,
    "title": "Minimum Cost to Connect All Points",
    "lc": 1584,
    "cat": "MST",
    "url": "https://leetcode.com/problemset/all/?search=Minimum%20Cost%20to%20Connect%20All%20Points"
  },
  {
    "id": 730,
    "title": "Connecting Cities With Minimum Cost",
    "lc": 1135,
    "cat": "MST",
    "url": "https://leetcode.com/problemset/all/?search=Connecting%20Cities%20With%20Minimum%20Cost"
  },
  {
    "id": 731,
    "title": "Optimize Water Distribution in a Village",
    "lc": 1168,
    "cat": "MST",
    "url": "https://leetcode.com/problemset/all/?search=Optimize%20Water%20Distribution%20in%20a%20Village"
  },
  {
    "id": 732,
    "title": "Min Cost to Connect All Points using Prim's Algorithm",
    "lc": 1584,
    "cat": "MST",
    "url": "https://leetcode.com/problemset/all/?search=Min%20Cost%20to%20Connect%20All%20Points%20using%20Prim's%20Algorithm"
  },
  {
    "id": 733,
    "title": "Min Cost to Connect All Points using Kruskal's Algorithm",
    "lc": 1584,
    "cat": "MST",
    "url": "https://leetcode.com/problemset/all/?search=Min%20Cost%20to%20Connect%20All%20Points%20using%20Kruskal's%20Algorithm"
  },
  {
    "id": 734,
    "title": "Redundant Connection",
    "lc": 684,
    "cat": "MST",
    "url": "https://leetcode.com/problemset/all/?search=Redundant%20Connection"
  },
  {
    "id": 735,
    "title": "Number of Operations to Make Network Connected",
    "lc": 1319,
    "cat": "MST",
    "url": "https://leetcode.com/problemset/all/?search=Number%20of%20Operations%20to%20Make%20Network%20Connected"
  },
  {
    "id": 736,
    "title": "Most Stones Removed with Same Row or Column",
    "lc": 947,
    "cat": "MST",
    "url": "https://leetcode.com/problemset/all/?search=Most%20Stones%20Removed%20with%20Same%20Row%20or%20Column"
  },
  {
    "id": 737,
    "title": "Accounts Merge",
    "lc": 721,
    "cat": "MST",
    "url": "https://leetcode.com/problemset/all/?search=Accounts%20Merge"
  },
  {
    "id": 738,
    "title": "Checking Existence of Edge Length Limited Paths",
    "lc": 1697,
    "cat": "MST",
    "url": "https://leetcode.com/problemset/all/?search=Checking%20Existence%20of%20Edge%20Length%20Limited%20Paths"
  },
  {
    "id": 739,
    "title": "Find Critical and Pseudo-Critical Edges in MST",
    "lc": 1489,
    "cat": "MST",
    "url": "https://leetcode.com/problemset/all/?search=Find%20Critical%20and%20Pseudo-Critical%20Edges%20in%20MST"
  },
  {
    "id": 740,
    "title": "Minimum Spanning Tree with a Given Edge Constraint",
    "lc": null,
    "cat": "MST",
    "url": "https://www.google.com/search?q=Minimum%20Spanning%20Tree%20with%20a%20Given%20Edge%20Constraint%20practice%20problem"
  },
  {
    "id": 741,
    "title": "Second Best Minimum Spanning Tree",
    "lc": null,
    "cat": "MST",
    "url": "https://www.google.com/search?q=Second%20Best%20Minimum%20Spanning%20Tree%20practice%20problem"
  },
  {
    "id": 742,
    "title": "MST with Preconnected Components",
    "lc": null,
    "cat": "MST",
    "url": "https://www.google.com/search?q=MST%20with%20Preconnected%20Components%20practice%20problem"
  },
  {
    "id": 743,
    "title": "MST with Maximum Edge Constraint",
    "lc": null,
    "cat": "MST",
    "url": "https://www.google.com/search?q=MST%20with%20Maximum%20Edge%20Constraint%20practice%20problem"
  },
  {
    "id": 744,
    "title": "Kruskal's Algorithm with Edge Sorting",
    "lc": null,
    "cat": "MST",
    "url": "https://www.google.com/search?q=Kruskal's%20Algorithm%20with%20Edge%20Sorting%20practice%20problem"
  },
  {
    "id": 745,
    "title": "Prim's Algorithm with Priority Queue",
    "lc": null,
    "cat": "MST",
    "url": "https://www.google.com/search?q=Prim's%20Algorithm%20with%20Priority%20Queue%20practice%20problem"
  },
  {
    "id": 746,
    "title": "Implement Disjoint Set Union (Union-Find)",
    "lc": null,
    "cat": "DSU / UNION FIND",
    "url": "https://www.google.com/search?q=Implement%20Disjoint%20Set%20Union%20(Union-Find)%20practice%20problem"
  },
  {
    "id": 747,
    "title": "Union by Rank",
    "lc": null,
    "cat": "DSU / UNION FIND",
    "url": "https://www.google.com/search?q=Union%20by%20Rank%20practice%20problem"
  },
  {
    "id": 748,
    "title": "Union by Size",
    "lc": null,
    "cat": "DSU / UNION FIND",
    "url": "https://www.google.com/search?q=Union%20by%20Size%20practice%20problem"
  },
  {
    "id": 749,
    "title": "Path Compression",
    "lc": null,
    "cat": "DSU / UNION FIND",
    "url": "https://www.google.com/search?q=Path%20Compression%20practice%20problem"
  },
  {
    "id": 750,
    "title": "Number of Provinces",
    "lc": 547,
    "cat": "DSU / UNION FIND",
    "url": "https://leetcode.com/problemset/all/?search=Number%20of%20Provinces"
  },
  {
    "id": 751,
    "title": "Number of Connected Components in an Undirected Graph",
    "lc": 323,
    "cat": "DSU / UNION FIND",
    "url": "https://leetcode.com/problemset/all/?search=Number%20of%20Connected%20Components%20in%20an%20Undirected%20Graph"
  },
  {
    "id": 752,
    "title": "Graph Valid Tree",
    "lc": 261,
    "cat": "DSU / UNION FIND",
    "url": "https://leetcode.com/problemset/all/?search=Graph%20Valid%20Tree"
  },
  {
    "id": 753,
    "title": "Redundant Connection",
    "lc": 684,
    "cat": "DSU / UNION FIND",
    "url": "https://leetcode.com/problemset/all/?search=Redundant%20Connection"
  },
  {
    "id": 754,
    "title": "Number of Operations to Make Network Connected",
    "lc": 1319,
    "cat": "DSU / UNION FIND",
    "url": "https://leetcode.com/problemset/all/?search=Number%20of%20Operations%20to%20Make%20Network%20Connected"
  },
  {
    "id": 755,
    "title": "Accounts Merge",
    "lc": 721,
    "cat": "DSU / UNION FIND",
    "url": "https://leetcode.com/problemset/all/?search=Accounts%20Merge"
  },
  {
    "id": 756,
    "title": "Most Stones Removed with Same Row or Column",
    "lc": 947,
    "cat": "DSU / UNION FIND",
    "url": "https://leetcode.com/problemset/all/?search=Most%20Stones%20Removed%20with%20Same%20Row%20or%20Column"
  },
  {
    "id": 757,
    "title": "Satisfiability of Equality Equations",
    "lc": 990,
    "cat": "DSU / UNION FIND",
    "url": "https://leetcode.com/problemset/all/?search=Satisfiability%20of%20Equality%20Equations"
  },
  {
    "id": 758,
    "title": "Smallest String With Swaps",
    "lc": 1202,
    "cat": "DSU / UNION FIND",
    "url": "https://leetcode.com/problemset/all/?search=Smallest%20String%20With%20Swaps"
  },
  {
    "id": 759,
    "title": "Checking Existence of Edge Length Limited Paths",
    "lc": 1697,
    "cat": "DSU / UNION FIND",
    "url": "https://leetcode.com/problemset/all/?search=Checking%20Existence%20of%20Edge%20Length%20Limited%20Paths"
  },
  {
    "id": 760,
    "title": "Min Cost to Connect All Points",
    "lc": 1584,
    "cat": "DSU / UNION FIND",
    "url": "https://leetcode.com/problemset/all/?search=Min%20Cost%20to%20Connect%20All%20Points"
  },
  {
    "id": 761,
    "title": "Connecting Cities With Minimum Cost",
    "lc": 1135,
    "cat": "DSU / UNION FIND",
    "url": "https://leetcode.com/problemset/all/?search=Connecting%20Cities%20With%20Minimum%20Cost"
  },
  {
    "id": 762,
    "title": "Critical and Pseudo-Critical Edges in MST",
    "lc": 1489,
    "cat": "DSU / UNION FIND",
    "url": "https://leetcode.com/problemset/all/?search=Critical%20and%20Pseudo-Critical%20Edges%20in%20MST"
  },
  {
    "id": 763,
    "title": "Regions Cut By Slashes",
    "lc": 959,
    "cat": "DSU / UNION FIND",
    "url": "https://leetcode.com/problemset/all/?search=Regions%20Cut%20By%20Slashes"
  },
  {
    "id": 764,
    "title": "Optimize Water Distribution in a Village",
    "lc": 1168,
    "cat": "DSU / UNION FIND",
    "url": "https://leetcode.com/problemset/all/?search=Optimize%20Water%20Distribution%20in%20a%20Village"
  },
  {
    "id": 765,
    "title": "Number of Islands II",
    "lc": 305,
    "cat": "DSU / UNION FIND",
    "url": "https://leetcode.com/problemset/all/?search=Number%20of%20Islands%20II"
  },
  {
    "id": 766,
    "title": "Graph Connectivity With Threshold",
    "lc": 1627,
    "cat": "DSU / UNION FIND",
    "url": "https://leetcode.com/problemset/all/?search=Graph%20Connectivity%20With%20Threshold"
  },
  {
    "id": 767,
    "title": "Couples Holding Hands",
    "lc": 765,
    "cat": "DSU / UNION FIND",
    "url": "https://leetcode.com/problemset/all/?search=Couples%20Holding%20Hands"
  },
  {
    "id": 768,
    "title": "Remove Max Number of Edges to Keep Graph Fully Traversable",
    "lc": 1579,
    "cat": "DSU / UNION FIND",
    "url": "https://leetcode.com/problemset/all/?search=Remove%20Max%20Number%20of%20Edges%20to%20Keep%20Graph%20Fully%20Traversable"
  },
  {
    "id": 769,
    "title": "Bricks Falling When Hit",
    "lc": 803,
    "cat": "DSU / UNION FIND",
    "url": "https://leetcode.com/problemset/all/?search=Bricks%20Falling%20When%20Hit"
  },
  {
    "id": 770,
    "title": "GCD Sort of an Array",
    "lc": 1998,
    "cat": "DSU / UNION FIND",
    "url": "https://leetcode.com/problemset/all/?search=GCD%20Sort%20of%20an%20Array"
  },
  {
    "id": 771,
    "title": "Implement Topological Sort using Kahn's Algorithm (BFS)",
    "lc": null,
    "cat": "TOPOLOGICAL SORT",
    "url": "https://www.google.com/search?q=Implement%20Topological%20Sort%20using%20Kahn's%20Algorithm%20(BFS)%20practice%20problem"
  },
  {
    "id": 772,
    "title": "Implement Topological Sort using DFS",
    "lc": null,
    "cat": "TOPOLOGICAL SORT",
    "url": "https://www.google.com/search?q=Implement%20Topological%20Sort%20using%20DFS%20practice%20problem"
  },
  {
    "id": 773,
    "title": "Course Schedule",
    "lc": 207,
    "cat": "TOPOLOGICAL SORT",
    "url": "https://leetcode.com/problemset/all/?search=Course%20Schedule"
  },
  {
    "id": 774,
    "title": "Course Schedule II",
    "lc": 210,
    "cat": "TOPOLOGICAL SORT",
    "url": "https://leetcode.com/problemset/all/?search=Course%20Schedule%20II"
  },
  {
    "id": 775,
    "title": "Alien Dictionary",
    "lc": 269,
    "cat": "TOPOLOGICAL SORT",
    "url": "https://leetcode.com/problemset/all/?search=Alien%20Dictionary"
  },
  {
    "id": 776,
    "title": "Parallel Courses",
    "lc": 1136,
    "cat": "TOPOLOGICAL SORT",
    "url": "https://leetcode.com/problemset/all/?search=Parallel%20Courses"
  },
  {
    "id": 777,
    "title": "Parallel Courses III",
    "lc": 2050,
    "cat": "TOPOLOGICAL SORT",
    "url": "https://leetcode.com/problemset/all/?search=Parallel%20Courses%20III"
  },
  {
    "id": 778,
    "title": "Find All Possible Recipes from Given Supplies",
    "lc": 2115,
    "cat": "TOPOLOGICAL SORT",
    "url": "https://leetcode.com/problemset/all/?search=Find%20All%20Possible%20Recipes%20from%20Given%20Supplies"
  },
  {
    "id": 779,
    "title": "Minimum Height Trees",
    "lc": 310,
    "cat": "TOPOLOGICAL SORT",
    "url": "https://leetcode.com/problemset/all/?search=Minimum%20Height%20Trees"
  },
  {
    "id": 780,
    "title": "Sequence Reconstruction",
    "lc": 444,
    "cat": "TOPOLOGICAL SORT",
    "url": "https://leetcode.com/problemset/all/?search=Sequence%20Reconstruction"
  },
  {
    "id": 781,
    "title": "Sort Items by Groups Respecting Dependencies",
    "lc": 1203,
    "cat": "TOPOLOGICAL SORT",
    "url": "https://leetcode.com/problemset/all/?search=Sort%20Items%20by%20Groups%20Respecting%20Dependencies"
  },
  {
    "id": 782,
    "title": "Build a Matrix With Conditions",
    "lc": 2392,
    "cat": "TOPOLOGICAL SORT",
    "url": "https://leetcode.com/problemset/all/?search=Build%20a%20Matrix%20With%20Conditions"
  },
  {
    "id": 783,
    "title": "Find Eventual Safe States",
    "lc": 802,
    "cat": "TOPOLOGICAL SORT",
    "url": "https://leetcode.com/problemset/all/?search=Find%20Eventual%20Safe%20States"
  },
  {
    "id": 784,
    "title": "Loud and Rich",
    "lc": 851,
    "cat": "TOPOLOGICAL SORT",
    "url": "https://leetcode.com/problemset/all/?search=Loud%20and%20Rich"
  },
  {
    "id": 785,
    "title": "Strange Printer II",
    "lc": 1591,
    "cat": "TOPOLOGICAL SORT",
    "url": "https://leetcode.com/problemset/all/?search=Strange%20Printer%20II"
  },
  {
    "id": 786,
    "title": "Course Schedule with Prerequisites",
    "lc": 207,
    "cat": "TOPOLOGICAL SORT",
    "url": "https://leetcode.com/problemset/all/?search=Course%20Schedule%20with%20Prerequisites"
  },
  {
    "id": 787,
    "title": "Alien Dictionary — Detect Invalid Ordering",
    "lc": 269,
    "cat": "TOPOLOGICAL SORT",
    "url": "https://leetcode.com/problemset/all/?search=Alien%20Dictionary%20%E2%80%94%20Detect%20Invalid%20Ordering"
  },
  {
    "id": 788,
    "title": "Topological Ordering with Multiple Valid Answers",
    "lc": null,
    "cat": "TOPOLOGICAL SORT",
    "url": "https://www.google.com/search?q=Topological%20Ordering%20with%20Multiple%20Valid%20Answers%20practice%20problem"
  },
  {
    "id": 789,
    "title": "Detect Cycle in Directed Graph using DFS",
    "lc": null,
    "cat": "TOPOLOGICAL SORT",
    "url": "https://www.google.com/search?q=Detect%20Cycle%20in%20Directed%20Graph%20using%20DFS%20practice%20problem"
  },
  {
    "id": 790,
    "title": "Detect Cycle in Directed Graph using Kahn's Algorithm",
    "lc": null,
    "cat": "TOPOLOGICAL SORT",
    "url": "https://www.google.com/search?q=Detect%20Cycle%20in%20Directed%20Graph%20using%20Kahn's%20Algorithm%20practice%20problem"
  },
  {
    "id": 791,
    "title": "Implement Kosaraju's Algorithm",
    "lc": null,
    "cat": "STRONGLY CONNECTED COMPONENTS (SCC)",
    "url": "https://www.google.com/search?q=Implement%20Kosaraju's%20Algorithm%20practice%20problem"
  },
  {
    "id": 792,
    "title": "Implement Tarjan's Algorithm for SCC",
    "lc": null,
    "cat": "STRONGLY CONNECTED COMPONENTS (SCC)",
    "url": "https://www.google.com/search?q=Implement%20Tarjan's%20Algorithm%20for%20SCC%20practice%20problem"
  },
  {
    "id": 793,
    "title": "Find Strongly Connected Components in a Directed Graph",
    "lc": null,
    "cat": "STRONGLY CONNECTED COMPONENTS (SCC)",
    "url": "https://www.google.com/search?q=Find%20Strongly%20Connected%20Components%20in%20a%20Directed%20Graph%20practice%20problem"
  },
  {
    "id": 794,
    "title": "Number of Strongly Connected Components",
    "lc": null,
    "cat": "STRONGLY CONNECTED COMPONENTS (SCC)",
    "url": "https://www.google.com/search?q=Number%20of%20Strongly%20Connected%20Components%20practice%20problem"
  },
  {
    "id": 795,
    "title": "Course Schedule",
    "lc": 207,
    "cat": "STRONGLY CONNECTED COMPONENTS (SCC)",
    "url": "https://leetcode.com/problemset/all/?search=Course%20Schedule"
  },
  {
    "id": 796,
    "title": "Course Schedule II",
    "lc": 210,
    "cat": "STRONGLY CONNECTED COMPONENTS (SCC)",
    "url": "https://leetcode.com/problemset/all/?search=Course%20Schedule%20II"
  },
  {
    "id": 797,
    "title": "Find Eventual Safe States",
    "lc": 802,
    "cat": "STRONGLY CONNECTED COMPONENTS (SCC)",
    "url": "https://leetcode.com/problemset/all/?search=Find%20Eventual%20Safe%20States"
  },
  {
    "id": 798,
    "title": "Critical Connections in a Network",
    "lc": 1192,
    "cat": "STRONGLY CONNECTED COMPONENTS (SCC)",
    "url": "https://leetcode.com/problemset/all/?search=Critical%20Connections%20in%20a%20Network"
  },
  {
    "id": 799,
    "title": "Minimum Number of Vertices to Reach All Nodes",
    "lc": 1557,
    "cat": "STRONGLY CONNECTED COMPONENTS (SCC)",
    "url": "https://leetcode.com/problemset/all/?search=Minimum%20Number%20of%20Vertices%20to%20Reach%20All%20Nodes"
  },
  {
    "id": 800,
    "title": "Reorder Routes to Make All Paths Lead to the City Zero",
    "lc": 1466,
    "cat": "STRONGLY CONNECTED COMPONENTS (SCC)",
    "url": "https://leetcode.com/problemset/all/?search=Reorder%20Routes%20to%20Make%20All%20Paths%20Lead%20to%20the%20City%20Zero"
  },
  {
    "id": 801,
    "title": "Longest Cycle in a Graph",
    "lc": 2360,
    "cat": "STRONGLY CONNECTED COMPONENTS (SCC)",
    "url": "https://leetcode.com/problemset/all/?search=Longest%20Cycle%20in%20a%20Graph"
  },
  {
    "id": 802,
    "title": "Maximum Employees to Be Invited to a Meeting",
    "lc": 2127,
    "cat": "STRONGLY CONNECTED COMPONENTS (SCC)",
    "url": "https://leetcode.com/problemset/all/?search=Maximum%20Employees%20to%20Be%20Invited%20to%20a%20Meeting"
  },
  {
    "id": 803,
    "title": "2-SAT / Satisfiability of Boolean Constraints using SCC",
    "lc": null,
    "cat": "STRONGLY CONNECTED COMPONENTS (SCC)",
    "url": "https://www.google.com/search?q=2-SAT%20%2F%20Satisfiability%20of%20Boolean%20Constraints%20using%20SCC%20practice%20problem"
  },
  {
    "id": 804,
    "title": "Condensation Graph Construction",
    "lc": null,
    "cat": "STRONGLY CONNECTED COMPONENTS (SCC)",
    "url": "https://www.google.com/search?q=Condensation%20Graph%20Construction%20practice%20problem"
  },
  {
    "id": 805,
    "title": "SCC-based Reachability",
    "lc": null,
    "cat": "STRONGLY CONNECTED COMPONENTS (SCC)",
    "url": "https://www.google.com/search?q=SCC-based%20Reachability%20practice%20problem"
  },
  {
    "id": 806,
    "title": "SCC + Topological Sort",
    "lc": null,
    "cat": "STRONGLY CONNECTED COMPONENTS (SCC)",
    "url": "https://www.google.com/search?q=SCC%20%2B%20Topological%20Sort%20practice%20problem"
  },
  {
    "id": 807,
    "title": "Climbing Stairs",
    "lc": 70,
    "cat": "DYNAMIC PROGRAMMING: 1D DP",
    "url": "https://leetcode.com/problemset/all/?search=Climbing%20Stairs"
  },
  {
    "id": 808,
    "title": "Min Cost Climbing Stairs",
    "lc": 746,
    "cat": "DYNAMIC PROGRAMMING: 1D DP",
    "url": "https://leetcode.com/problemset/all/?search=Min%20Cost%20Climbing%20Stairs"
  },
  {
    "id": 809,
    "title": "House Robber",
    "lc": 198,
    "cat": "DYNAMIC PROGRAMMING: 1D DP",
    "url": "https://leetcode.com/problemset/all/?search=House%20Robber"
  },
  {
    "id": 810,
    "title": "House Robber II",
    "lc": 213,
    "cat": "DYNAMIC PROGRAMMING: 1D DP",
    "url": "https://leetcode.com/problemset/all/?search=House%20Robber%20II"
  },
  {
    "id": 811,
    "title": "Decode Ways",
    "lc": 91,
    "cat": "DYNAMIC PROGRAMMING: 1D DP",
    "url": "https://leetcode.com/problemset/all/?search=Decode%20Ways"
  },
  {
    "id": 812,
    "title": "Word Break",
    "lc": 139,
    "cat": "DYNAMIC PROGRAMMING: 1D DP",
    "url": "https://leetcode.com/problemset/all/?search=Word%20Break"
  },
  {
    "id": 813,
    "title": "Maximum Subarray",
    "lc": 53,
    "cat": "DYNAMIC PROGRAMMING: 1D DP",
    "url": "https://leetcode.com/problemset/all/?search=Maximum%20Subarray"
  },
  {
    "id": 814,
    "title": "Maximum Product Subarray",
    "lc": 152,
    "cat": "DYNAMIC PROGRAMMING: 1D DP",
    "url": "https://leetcode.com/problemset/all/?search=Maximum%20Product%20Subarray"
  },
  {
    "id": 815,
    "title": "Longest Palindromic Substring",
    "lc": 5,
    "cat": "DYNAMIC PROGRAMMING: 1D DP",
    "url": "https://leetcode.com/problemset/all/?search=Longest%20Palindromic%20Substring"
  },
  {
    "id": 816,
    "title": "Perfect Squares",
    "lc": 279,
    "cat": "DYNAMIC PROGRAMMING: 1D DP",
    "url": "https://leetcode.com/problemset/all/?search=Perfect%20Squares"
  },
  {
    "id": 817,
    "title": "Integer Break",
    "lc": 343,
    "cat": "DYNAMIC PROGRAMMING: 1D DP",
    "url": "https://leetcode.com/problemset/all/?search=Integer%20Break"
  },
  {
    "id": 818,
    "title": "Partition Equal Subset Sum",
    "lc": 416,
    "cat": "DYNAMIC PROGRAMMING: 1D DP",
    "url": "https://leetcode.com/problemset/all/?search=Partition%20Equal%20Subset%20Sum"
  },
  {
    "id": 819,
    "title": "Combination Sum IV",
    "lc": 377,
    "cat": "DYNAMIC PROGRAMMING: 1D DP",
    "url": "https://leetcode.com/problemset/all/?search=Combination%20Sum%20IV"
  },
  {
    "id": 820,
    "title": "Number of Ways to Stay in the Same Place",
    "lc": 1269,
    "cat": "DYNAMIC PROGRAMMING: 1D DP",
    "url": "https://leetcode.com/problemset/all/?search=Number%20of%20Ways%20to%20Stay%20in%20the%20Same%20Place"
  },
  {
    "id": 821,
    "title": "Solving Questions With Brainpower",
    "lc": 2140,
    "cat": "DYNAMIC PROGRAMMING: 1D DP",
    "url": "https://leetcode.com/problemset/all/?search=Solving%20Questions%20With%20Brainpower"
  },
  {
    "id": 822,
    "title": "Delete and Earn",
    "lc": 740,
    "cat": "DYNAMIC PROGRAMMING: 1D DP",
    "url": "https://leetcode.com/problemset/all/?search=Delete%20and%20Earn"
  },
  {
    "id": 823,
    "title": "Paint House",
    "lc": 256,
    "cat": "DYNAMIC PROGRAMMING: 1D DP",
    "url": "https://leetcode.com/problemset/all/?search=Paint%20House"
  },
  {
    "id": 824,
    "title": "Paint Fence",
    "lc": 276,
    "cat": "DYNAMIC PROGRAMMING: 1D DP",
    "url": "https://leetcode.com/problemset/all/?search=Paint%20Fence"
  },
  {
    "id": 825,
    "title": "Maximum Alternating Subsequence Sum",
    "lc": 1911,
    "cat": "DYNAMIC PROGRAMMING: 1D DP",
    "url": "https://leetcode.com/problemset/all/?search=Maximum%20Alternating%20Subsequence%20Sum"
  },
  {
    "id": 826,
    "title": "Longest Arithmetic Subsequence",
    "lc": 1027,
    "cat": "DYNAMIC PROGRAMMING: 1D DP",
    "url": "https://leetcode.com/problemset/all/?search=Longest%20Arithmetic%20Subsequence"
  },
  {
    "id": 827,
    "title": "Arithmetic Slices",
    "lc": 413,
    "cat": "DYNAMIC PROGRAMMING: 1D DP",
    "url": "https://leetcode.com/problemset/all/?search=Arithmetic%20Slices"
  },
  {
    "id": 828,
    "title": "Number of Longest Increasing Subsequence",
    "lc": 673,
    "cat": "DYNAMIC PROGRAMMING: 1D DP",
    "url": "https://leetcode.com/problemset/all/?search=Number%20of%20Longest%20Increasing%20Subsequence"
  },
  {
    "id": 829,
    "title": "Decode Ways II",
    "lc": 639,
    "cat": "DYNAMIC PROGRAMMING: 1D DP",
    "url": "https://leetcode.com/problemset/all/?search=Decode%20Ways%20II"
  },
  {
    "id": 830,
    "title": "Jump Game",
    "lc": 55,
    "cat": "DYNAMIC PROGRAMMING: 1D DP",
    "url": "https://leetcode.com/problemset/all/?search=Jump%20Game"
  },
  {
    "id": 831,
    "title": "Jump Game II",
    "lc": 45,
    "cat": "DYNAMIC PROGRAMMING: 1D DP",
    "url": "https://leetcode.com/problemset/all/?search=Jump%20Game%20II"
  },
  {
    "id": 832,
    "title": "Jump Game VII",
    "lc": 1871,
    "cat": "DYNAMIC PROGRAMMING: 1D DP",
    "url": "https://leetcode.com/problemset/all/?search=Jump%20Game%20VII"
  },
  {
    "id": 833,
    "title": "Best Time to Buy and Sell Stock with Cooldown",
    "lc": 309,
    "cat": "DYNAMIC PROGRAMMING: 1D DP",
    "url": "https://leetcode.com/problemset/all/?search=Best%20Time%20to%20Buy%20and%20Sell%20Stock%20with%20Cooldown"
  },
  {
    "id": 834,
    "title": "Best Time to Buy and Sell Stock III",
    "lc": 123,
    "cat": "DYNAMIC PROGRAMMING: 1D DP",
    "url": "https://leetcode.com/problemset/all/?search=Best%20Time%20to%20Buy%20and%20Sell%20Stock%20III"
  },
  {
    "id": 835,
    "title": "Best Time to Buy and Sell Stock IV",
    "lc": 188,
    "cat": "DYNAMIC PROGRAMMING: 1D DP",
    "url": "https://leetcode.com/problemset/all/?search=Best%20Time%20to%20Buy%20and%20Sell%20Stock%20IV"
  },
  {
    "id": 836,
    "title": "Best Time to Buy and Sell Stock with Transaction Fee",
    "lc": 714,
    "cat": "DYNAMIC PROGRAMMING: 1D DP",
    "url": "https://leetcode.com/problemset/all/?search=Best%20Time%20to%20Buy%20and%20Sell%20Stock%20with%20Transaction%20Fee"
  },
  {
    "id": 837,
    "title": "Longest Valid Parentheses",
    "lc": 32,
    "cat": "DYNAMIC PROGRAMMING: 1D DP",
    "url": "https://leetcode.com/problemset/all/?search=Longest%20Valid%20Parentheses"
  },
  {
    "id": 838,
    "title": "Count Ways to Build Good Strings",
    "lc": 2466,
    "cat": "DYNAMIC PROGRAMMING: 1D DP",
    "url": "https://leetcode.com/problemset/all/?search=Count%20Ways%20to%20Build%20Good%20Strings"
  },
  {
    "id": 839,
    "title": "Minimum Cost For Tickets",
    "lc": 983,
    "cat": "DYNAMIC PROGRAMMING: 1D DP",
    "url": "https://leetcode.com/problemset/all/?search=Minimum%20Cost%20For%20Tickets"
  },
  {
    "id": 840,
    "title": "Triangle",
    "lc": 120,
    "cat": "DYNAMIC PROGRAMMING: 1D DP",
    "url": "https://leetcode.com/problemset/all/?search=Triangle"
  },
  {
    "id": 841,
    "title": "Minimum Falling Path Sum",
    "lc": 931,
    "cat": "DYNAMIC PROGRAMMING: 1D DP",
    "url": "https://leetcode.com/problemset/all/?search=Minimum%20Falling%20Path%20Sum"
  },
  {
    "id": 842,
    "title": "Unique Paths",
    "lc": 62,
    "cat": "DYNAMIC PROGRAMMING: 2D DP",
    "url": "https://leetcode.com/problemset/all/?search=Unique%20Paths"
  },
  {
    "id": 843,
    "title": "Unique Paths II",
    "lc": 63,
    "cat": "DYNAMIC PROGRAMMING: 2D DP",
    "url": "https://leetcode.com/problemset/all/?search=Unique%20Paths%20II"
  },
  {
    "id": 844,
    "title": "Minimum Path Sum",
    "lc": 64,
    "cat": "DYNAMIC PROGRAMMING: 2D DP",
    "url": "https://leetcode.com/problemset/all/?search=Minimum%20Path%20Sum"
  },
  {
    "id": 845,
    "title": "Triangle",
    "lc": 120,
    "cat": "DYNAMIC PROGRAMMING: 2D DP",
    "url": "https://leetcode.com/problemset/all/?search=Triangle"
  },
  {
    "id": 846,
    "title": "Minimum Falling Path Sum",
    "lc": 931,
    "cat": "DYNAMIC PROGRAMMING: 2D DP",
    "url": "https://leetcode.com/problemset/all/?search=Minimum%20Falling%20Path%20Sum"
  },
  {
    "id": 847,
    "title": "Maximal Square",
    "lc": 221,
    "cat": "DYNAMIC PROGRAMMING: 2D DP",
    "url": "https://leetcode.com/problemset/all/?search=Maximal%20Square"
  },
  {
    "id": 848,
    "title": "Maximal Rectangle",
    "lc": 85,
    "cat": "DYNAMIC PROGRAMMING: 2D DP",
    "url": "https://leetcode.com/problemset/all/?search=Maximal%20Rectangle"
  },
  {
    "id": 849,
    "title": "Dungeon Game",
    "lc": 174,
    "cat": "DYNAMIC PROGRAMMING: 2D DP",
    "url": "https://leetcode.com/problemset/all/?search=Dungeon%20Game"
  },
  {
    "id": 850,
    "title": "Cherry Pickup",
    "lc": 741,
    "cat": "DYNAMIC PROGRAMMING: 2D DP",
    "url": "https://leetcode.com/problemset/all/?search=Cherry%20Pickup"
  },
  {
    "id": 851,
    "title": "Cherry Pickup II",
    "lc": 1463,
    "cat": "DYNAMIC PROGRAMMING: 2D DP",
    "url": "https://leetcode.com/problemset/all/?search=Cherry%20Pickup%20II"
  },
  {
    "id": 852,
    "title": "Longest Increasing Path in a Matrix",
    "lc": 329,
    "cat": "DYNAMIC PROGRAMMING: 2D DP",
    "url": "https://leetcode.com/problemset/all/?search=Longest%20Increasing%20Path%20in%20a%20Matrix"
  },
  {
    "id": 853,
    "title": "Longest Common Subsequence",
    "lc": 1143,
    "cat": "DYNAMIC PROGRAMMING: 2D DP",
    "url": "https://leetcode.com/problemset/all/?search=Longest%20Common%20Subsequence"
  },
  {
    "id": 854,
    "title": "Edit Distance",
    "lc": 72,
    "cat": "DYNAMIC PROGRAMMING: 2D DP",
    "url": "https://leetcode.com/problemset/all/?search=Edit%20Distance"
  },
  {
    "id": 855,
    "title": "Distinct Subsequences",
    "lc": 115,
    "cat": "DYNAMIC PROGRAMMING: 2D DP",
    "url": "https://leetcode.com/problemset/all/?search=Distinct%20Subsequences"
  },
  {
    "id": 856,
    "title": "Interleaving String",
    "lc": 97,
    "cat": "DYNAMIC PROGRAMMING: 2D DP",
    "url": "https://leetcode.com/problemset/all/?search=Interleaving%20String"
  },
  {
    "id": 857,
    "title": "Longest Palindromic Subsequence",
    "lc": 516,
    "cat": "DYNAMIC PROGRAMMING: 2D DP",
    "url": "https://leetcode.com/problemset/all/?search=Longest%20Palindromic%20Subsequence"
  },
  {
    "id": 858,
    "title": "Palindromic Substrings",
    "lc": 647,
    "cat": "DYNAMIC PROGRAMMING: 2D DP",
    "url": "https://leetcode.com/problemset/all/?search=Palindromic%20Substrings"
  },
  {
    "id": 859,
    "title": "Shortest Common Supersequence",
    "lc": 1092,
    "cat": "DYNAMIC PROGRAMMING: 2D DP",
    "url": "https://leetcode.com/problemset/all/?search=Shortest%20Common%20Supersequence"
  },
  {
    "id": 860,
    "title": "Minimum ASCII Delete Sum for Two Strings",
    "lc": 712,
    "cat": "DYNAMIC PROGRAMMING: 2D DP",
    "url": "https://leetcode.com/problemset/all/?search=Minimum%20ASCII%20Delete%20Sum%20for%20Two%20Strings"
  },
  {
    "id": 861,
    "title": "Regular Expression Matching",
    "lc": 10,
    "cat": "DYNAMIC PROGRAMMING: 2D DP",
    "url": "https://leetcode.com/problemset/all/?search=Regular%20Expression%20Matching"
  },
  {
    "id": 862,
    "title": "Wildcard Matching",
    "lc": 44,
    "cat": "DYNAMIC PROGRAMMING: 2D DP",
    "url": "https://leetcode.com/problemset/all/?search=Wildcard%20Matching"
  },
  {
    "id": 863,
    "title": "0/1 Knapsack",
    "lc": null,
    "cat": "DYNAMIC PROGRAMMING: 2D DP",
    "url": "https://www.google.com/search?q=0%2F1%20Knapsack%20practice%20problem"
  },
  {
    "id": 864,
    "title": "Subset Sum",
    "lc": null,
    "cat": "DYNAMIC PROGRAMMING: 2D DP",
    "url": "https://www.google.com/search?q=Subset%20Sum%20practice%20problem"
  },
  {
    "id": 865,
    "title": "Partition Equal Subset Sum",
    "lc": 416,
    "cat": "DYNAMIC PROGRAMMING: 2D DP",
    "url": "https://leetcode.com/problemset/all/?search=Partition%20Equal%20Subset%20Sum"
  },
  {
    "id": 866,
    "title": "Target Sum",
    "lc": 494,
    "cat": "DYNAMIC PROGRAMMING: 2D DP",
    "url": "https://leetcode.com/problemset/all/?search=Target%20Sum"
  },
  {
    "id": 867,
    "title": "Ones and Zeroes",
    "lc": 474,
    "cat": "DYNAMIC PROGRAMMING: 2D DP",
    "url": "https://leetcode.com/problemset/all/?search=Ones%20and%20Zeroes"
  },
  {
    "id": 868,
    "title": "Last Stone Weight II",
    "lc": 1049,
    "cat": "DYNAMIC PROGRAMMING: 2D DP",
    "url": "https://leetcode.com/problemset/all/?search=Last%20Stone%20Weight%20II"
  },
  {
    "id": 869,
    "title": "Best Time to Buy and Sell Stock with Cooldown",
    "lc": 309,
    "cat": "DYNAMIC PROGRAMMING: 2D DP",
    "url": "https://leetcode.com/problemset/all/?search=Best%20Time%20to%20Buy%20and%20Sell%20Stock%20with%20Cooldown"
  },
  {
    "id": 870,
    "title": "Best Time to Buy and Sell Stock III",
    "lc": 123,
    "cat": "DYNAMIC PROGRAMMING: 2D DP",
    "url": "https://leetcode.com/problemset/all/?search=Best%20Time%20to%20Buy%20and%20Sell%20Stock%20III"
  },
  {
    "id": 871,
    "title": "Best Time to Buy and Sell Stock IV",
    "lc": 188,
    "cat": "DYNAMIC PROGRAMMING: 2D DP",
    "url": "https://leetcode.com/problemset/all/?search=Best%20Time%20to%20Buy%20and%20Sell%20Stock%20IV"
  },
  {
    "id": 872,
    "title": "0/1 Knapsack",
    "lc": null,
    "cat": "0/1 KNAPSACK",
    "url": "https://www.google.com/search?q=0%2F1%20Knapsack%20practice%20problem"
  },
  {
    "id": 873,
    "title": "Subset Sum",
    "lc": null,
    "cat": "0/1 KNAPSACK",
    "url": "https://www.google.com/search?q=Subset%20Sum%20practice%20problem"
  },
  {
    "id": 874,
    "title": "Equal Sum Partition",
    "lc": null,
    "cat": "0/1 KNAPSACK",
    "url": "https://www.google.com/search?q=Equal%20Sum%20Partition%20practice%20problem"
  },
  {
    "id": 875,
    "title": "Partition Equal Subset Sum",
    "lc": 416,
    "cat": "0/1 KNAPSACK",
    "url": "https://leetcode.com/problemset/all/?search=Partition%20Equal%20Subset%20Sum"
  },
  {
    "id": 876,
    "title": "Target Sum",
    "lc": 494,
    "cat": "0/1 KNAPSACK",
    "url": "https://leetcode.com/problemset/all/?search=Target%20Sum"
  },
  {
    "id": 877,
    "title": "Ones and Zeroes",
    "lc": 474,
    "cat": "0/1 KNAPSACK",
    "url": "https://leetcode.com/problemset/all/?search=Ones%20and%20Zeroes"
  },
  {
    "id": 878,
    "title": "Last Stone Weight II",
    "lc": 1049,
    "cat": "0/1 KNAPSACK",
    "url": "https://leetcode.com/problemset/all/?search=Last%20Stone%20Weight%20II"
  },
  {
    "id": 879,
    "title": "Count of Subsets with Given Sum",
    "lc": null,
    "cat": "0/1 KNAPSACK",
    "url": "https://www.google.com/search?q=Count%20of%20Subsets%20with%20Given%20Sum%20practice%20problem"
  },
  {
    "id": 880,
    "title": "Count the Number of Subsets with Difference K",
    "lc": null,
    "cat": "0/1 KNAPSACK",
    "url": "https://www.google.com/search?q=Count%20the%20Number%20of%20Subsets%20with%20Difference%20K%20practice%20problem"
  },
  {
    "id": 881,
    "title": "Minimum Subset Sum Difference",
    "lc": null,
    "cat": "0/1 KNAPSACK",
    "url": "https://www.google.com/search?q=Minimum%20Subset%20Sum%20Difference%20practice%20problem"
  },
  {
    "id": 882,
    "title": "0/1 Knapsack with Exact Weight",
    "lc": null,
    "cat": "0/1 KNAPSACK",
    "url": "https://www.google.com/search?q=0%2F1%20Knapsack%20with%20Exact%20Weight%20practice%20problem"
  },
  {
    "id": 883,
    "title": "Maximum Value with Limited Capacity",
    "lc": null,
    "cat": "0/1 KNAPSACK",
    "url": "https://www.google.com/search?q=Maximum%20Value%20with%20Limited%20Capacity%20practice%20problem"
  },
  {
    "id": 884,
    "title": "Minimum Number of Items for Target Weight",
    "lc": null,
    "cat": "0/1 KNAPSACK",
    "url": "https://www.google.com/search?q=Minimum%20Number%20of%20Items%20for%20Target%20Weight%20practice%20problem"
  },
  {
    "id": 885,
    "title": "Can Partition Array Into Two Equal Sum Subsets",
    "lc": null,
    "cat": "0/1 KNAPSACK",
    "url": "https://www.google.com/search?q=Can%20Partition%20Array%20Into%20Two%20Equal%20Sum%20Subsets%20practice%20problem"
  },
  {
    "id": 886,
    "title": "Tallest Billboard",
    "lc": 956,
    "cat": "0/1 KNAPSACK",
    "url": "https://leetcode.com/problemset/all/?search=Tallest%20Billboard"
  },
  {
    "id": 887,
    "title": "Profitable Schemes",
    "lc": 879,
    "cat": "0/1 KNAPSACK",
    "url": "https://leetcode.com/problemset/all/?search=Profitable%20Schemes"
  },
  {
    "id": 888,
    "title": "Shopping Offers",
    "lc": 638,
    "cat": "0/1 KNAPSACK",
    "url": "https://leetcode.com/problemset/all/?search=Shopping%20Offers"
  },
  {
    "id": 889,
    "title": "Number of Ways to Reach a Target Sum",
    "lc": null,
    "cat": "0/1 KNAPSACK",
    "url": "https://www.google.com/search?q=Number%20of%20Ways%20to%20Reach%20a%20Target%20Sum%20practice%20problem"
  },
  {
    "id": 890,
    "title": "Maximum Subset Sum with No Adjacent Elements",
    "lc": null,
    "cat": "0/1 KNAPSACK",
    "url": "https://www.google.com/search?q=Maximum%20Subset%20Sum%20with%20No%20Adjacent%20Elements%20practice%20problem"
  },
  {
    "id": 891,
    "title": "Unbounded Knapsack",
    "lc": null,
    "cat": "UNBOUNDED KNAPSACK",
    "url": "https://www.google.com/search?q=Unbounded%20Knapsack%20practice%20problem"
  },
  {
    "id": 892,
    "title": "Rod Cutting",
    "lc": null,
    "cat": "UNBOUNDED KNAPSACK",
    "url": "https://www.google.com/search?q=Rod%20Cutting%20practice%20problem"
  },
  {
    "id": 893,
    "title": "Coin Change",
    "lc": 322,
    "cat": "UNBOUNDED KNAPSACK",
    "url": "https://leetcode.com/problemset/all/?search=Coin%20Change"
  },
  {
    "id": 894,
    "title": "Coin Change II",
    "lc": 518,
    "cat": "UNBOUNDED KNAPSACK",
    "url": "https://leetcode.com/problemset/all/?search=Coin%20Change%20II"
  },
  {
    "id": 895,
    "title": "Combination Sum IV",
    "lc": 377,
    "cat": "UNBOUNDED KNAPSACK",
    "url": "https://leetcode.com/problemset/all/?search=Combination%20Sum%20IV"
  },
  {
    "id": 896,
    "title": "Perfect Squares",
    "lc": 279,
    "cat": "UNBOUNDED KNAPSACK",
    "url": "https://leetcode.com/problemset/all/?search=Perfect%20Squares"
  },
  {
    "id": 897,
    "title": "Minimum Coins to Make a Given Amount",
    "lc": null,
    "cat": "UNBOUNDED KNAPSACK",
    "url": "https://www.google.com/search?q=Minimum%20Coins%20to%20Make%20a%20Given%20Amount%20practice%20problem"
  },
  {
    "id": 898,
    "title": "Maximum Ribbon Cut",
    "lc": null,
    "cat": "UNBOUNDED KNAPSACK",
    "url": "https://www.google.com/search?q=Maximum%20Ribbon%20Cut%20practice%20problem"
  },
  {
    "id": 899,
    "title": "Integer Break",
    "lc": 343,
    "cat": "UNBOUNDED KNAPSACK",
    "url": "https://leetcode.com/problemset/all/?search=Integer%20Break"
  },
  {
    "id": 900,
    "title": "Minimum Cost to Cut a Rod",
    "lc": null,
    "cat": "UNBOUNDED KNAPSACK",
    "url": "https://www.google.com/search?q=Minimum%20Cost%20to%20Cut%20a%20Rod%20practice%20problem"
  },
  {
    "id": 901,
    "title": "Number of Ways to Reach a Target Sum",
    "lc": null,
    "cat": "UNBOUNDED KNAPSACK",
    "url": "https://www.google.com/search?q=Number%20of%20Ways%20to%20Reach%20a%20Target%20Sum%20practice%20problem"
  },
  {
    "id": 902,
    "title": "Coin Change with Limited/Unlimited Usage Variations",
    "lc": null,
    "cat": "UNBOUNDED KNAPSACK",
    "url": "https://www.google.com/search?q=Coin%20Change%20with%20Limited%2FUnlimited%20Usage%20Variations%20practice%20problem"
  },
  {
    "id": 903,
    "title": "Maximum Value with Unlimited Items",
    "lc": null,
    "cat": "UNBOUNDED KNAPSACK",
    "url": "https://www.google.com/search?q=Maximum%20Value%20with%20Unlimited%20Items%20practice%20problem"
  },
  {
    "id": 904,
    "title": "Count Ways to Achieve a Target Sum",
    "lc": null,
    "cat": "UNBOUNDED KNAPSACK",
    "url": "https://www.google.com/search?q=Count%20Ways%20to%20Achieve%20a%20Target%20Sum%20practice%20problem"
  },
  {
    "id": 905,
    "title": "Combination Sum",
    "lc": 39,
    "cat": "UNBOUNDED KNAPSACK",
    "url": "https://leetcode.com/problemset/all/?search=Combination%20Sum"
  },
  {
    "id": 906,
    "title": "Combination Sum II",
    "lc": 40,
    "cat": "UNBOUNDED KNAPSACK",
    "url": "https://leetcode.com/problemset/all/?search=Combination%20Sum%20II"
  },
  {
    "id": 907,
    "title": "Minimum Cost For Tickets",
    "lc": 983,
    "cat": "UNBOUNDED KNAPSACK",
    "url": "https://leetcode.com/problemset/all/?search=Minimum%20Cost%20For%20Tickets"
  },
  {
    "id": 908,
    "title": "Count Ways to Climb Stairs with Variable Steps",
    "lc": null,
    "cat": "UNBOUNDED KNAPSACK",
    "url": "https://www.google.com/search?q=Count%20Ways%20to%20Climb%20Stairs%20with%20Variable%20Steps%20practice%20problem"
  },
  {
    "id": 909,
    "title": "Minimum Number of Perfect Squares",
    "lc": 279,
    "cat": "UNBOUNDED KNAPSACK",
    "url": "https://leetcode.com/problemset/all/?search=Minimum%20Number%20of%20Perfect%20Squares"
  },
  {
    "id": 910,
    "title": "Coin Change with Multiple Denominations",
    "lc": null,
    "cat": "UNBOUNDED KNAPSACK",
    "url": "https://www.google.com/search?q=Coin%20Change%20with%20Multiple%20Denominations%20practice%20problem"
  },
  {
    "id": 911,
    "title": "Longest Common Subsequence",
    "lc": 1143,
    "cat": "LCS (LONGEST COMMON SUBSEQUENCE)",
    "url": "https://leetcode.com/problemset/all/?search=Longest%20Common%20Subsequence"
  },
  {
    "id": 912,
    "title": "Longest Common Substring",
    "lc": null,
    "cat": "LCS (LONGEST COMMON SUBSEQUENCE)",
    "url": "https://www.google.com/search?q=Longest%20Common%20Substring%20practice%20problem"
  },
  {
    "id": 913,
    "title": "Longest Palindromic Subsequence",
    "lc": 516,
    "cat": "LCS (LONGEST COMMON SUBSEQUENCE)",
    "url": "https://leetcode.com/problemset/all/?search=Longest%20Palindromic%20Subsequence"
  },
  {
    "id": 914,
    "title": "Shortest Common Supersequence",
    "lc": 1092,
    "cat": "LCS (LONGEST COMMON SUBSEQUENCE)",
    "url": "https://leetcode.com/problemset/all/?search=Shortest%20Common%20Supersequence"
  },
  {
    "id": 915,
    "title": "Print/Reconstruct the LCS",
    "lc": null,
    "cat": "LCS (LONGEST COMMON SUBSEQUENCE)",
    "url": "https://www.google.com/search?q=Print%2FReconstruct%20the%20LCS%20practice%20problem"
  },
  {
    "id": 916,
    "title": "Longest Repeating Subsequence",
    "lc": null,
    "cat": "LCS (LONGEST COMMON SUBSEQUENCE)",
    "url": "https://www.google.com/search?q=Longest%20Repeating%20Subsequence%20practice%20problem"
  },
  {
    "id": 917,
    "title": "Minimum Deletions to Make Two Strings Equal",
    "lc": null,
    "cat": "LCS (LONGEST COMMON SUBSEQUENCE)",
    "url": "https://www.google.com/search?q=Minimum%20Deletions%20to%20Make%20Two%20Strings%20Equal%20practice%20problem"
  },
  {
    "id": 918,
    "title": "Delete Operation for Two Strings",
    "lc": 583,
    "cat": "LCS (LONGEST COMMON SUBSEQUENCE)",
    "url": "https://leetcode.com/problemset/all/?search=Delete%20Operation%20for%20Two%20Strings"
  },
  {
    "id": 919,
    "title": "Minimum ASCII Delete Sum for Two Strings",
    "lc": 712,
    "cat": "LCS (LONGEST COMMON SUBSEQUENCE)",
    "url": "https://leetcode.com/problemset/all/?search=Minimum%20ASCII%20Delete%20Sum%20for%20Two%20Strings"
  },
  {
    "id": 920,
    "title": "Edit Distance",
    "lc": 72,
    "cat": "LCS (LONGEST COMMON SUBSEQUENCE)",
    "url": "https://leetcode.com/problemset/all/?search=Edit%20Distance"
  },
  {
    "id": 921,
    "title": "Distinct Subsequences",
    "lc": 115,
    "cat": "LCS (LONGEST COMMON SUBSEQUENCE)",
    "url": "https://leetcode.com/problemset/all/?search=Distinct%20Subsequences"
  },
  {
    "id": 922,
    "title": "Interleaving String",
    "lc": 97,
    "cat": "LCS (LONGEST COMMON SUBSEQUENCE)",
    "url": "https://leetcode.com/problemset/all/?search=Interleaving%20String"
  },
  {
    "id": 923,
    "title": "Wildcard Matching",
    "lc": 44,
    "cat": "LCS (LONGEST COMMON SUBSEQUENCE)",
    "url": "https://leetcode.com/problemset/all/?search=Wildcard%20Matching"
  },
  {
    "id": 924,
    "title": "Regular Expression Matching",
    "lc": 10,
    "cat": "LCS (LONGEST COMMON SUBSEQUENCE)",
    "url": "https://leetcode.com/problemset/all/?search=Regular%20Expression%20Matching"
  },
  {
    "id": 925,
    "title": "Longest Palindromic Substring",
    "lc": 5,
    "cat": "LCS (LONGEST COMMON SUBSEQUENCE)",
    "url": "https://leetcode.com/problemset/all/?search=Longest%20Palindromic%20Substring"
  },
  {
    "id": 926,
    "title": "Palindromic Substrings",
    "lc": 647,
    "cat": "LCS (LONGEST COMMON SUBSEQUENCE)",
    "url": "https://leetcode.com/problemset/all/?search=Palindromic%20Substrings"
  },
  {
    "id": 927,
    "title": "Minimum Insertions to Make a String Palindrome",
    "lc": 1312,
    "cat": "LCS (LONGEST COMMON SUBSEQUENCE)",
    "url": "https://leetcode.com/problemset/all/?search=Minimum%20Insertions%20to%20Make%20a%20String%20Palindrome"
  },
  {
    "id": 928,
    "title": "Minimum Deletions to Make a String Palindrome",
    "lc": null,
    "cat": "LCS (LONGEST COMMON SUBSEQUENCE)",
    "url": "https://www.google.com/search?q=Minimum%20Deletions%20to%20Make%20a%20String%20Palindrome%20practice%20problem"
  },
  {
    "id": 929,
    "title": "Longest Common Subsequence of Three Strings",
    "lc": null,
    "cat": "LCS (LONGEST COMMON SUBSEQUENCE)",
    "url": "https://www.google.com/search?q=Longest%20Common%20Subsequence%20of%20Three%20Strings%20practice%20problem"
  },
  {
    "id": 930,
    "title": "Shortest Common Supersequence Reconstruction",
    "lc": 1092,
    "cat": "LCS (LONGEST COMMON SUBSEQUENCE)",
    "url": "https://leetcode.com/problemset/all/?search=Shortest%20Common%20Supersequence%20Reconstruction"
  },
  {
    "id": 931,
    "title": "Longest Increasing Subsequence",
    "lc": 300,
    "cat": "LIS (LONGEST INCREASING SUBSEQUENCE)",
    "url": "https://leetcode.com/problemset/all/?search=Longest%20Increasing%20Subsequence"
  },
  {
    "id": 932,
    "title": "Longest Decreasing Subsequence",
    "lc": null,
    "cat": "LIS (LONGEST INCREASING SUBSEQUENCE)",
    "url": "https://www.google.com/search?q=Longest%20Decreasing%20Subsequence%20practice%20problem"
  },
  {
    "id": 933,
    "title": "Longest Bitonic Subsequence",
    "lc": null,
    "cat": "LIS (LONGEST INCREASING SUBSEQUENCE)",
    "url": "https://www.google.com/search?q=Longest%20Bitonic%20Subsequence%20practice%20problem"
  },
  {
    "id": 934,
    "title": "Number of Longest Increasing Subsequences",
    "lc": 673,
    "cat": "LIS (LONGEST INCREASING SUBSEQUENCE)",
    "url": "https://leetcode.com/problemset/all/?search=Number%20of%20Longest%20Increasing%20Subsequences"
  },
  {
    "id": 935,
    "title": "Russian Doll Envelopes",
    "lc": 354,
    "cat": "LIS (LONGEST INCREASING SUBSEQUENCE)",
    "url": "https://leetcode.com/problemset/all/?search=Russian%20Doll%20Envelopes"
  },
  {
    "id": 936,
    "title": "Maximum Length of Pair Chain",
    "lc": 646,
    "cat": "LIS (LONGEST INCREASING SUBSEQUENCE)",
    "url": "https://leetcode.com/problemset/all/?search=Maximum%20Length%20of%20Pair%20Chain"
  },
  {
    "id": 937,
    "title": "Longest Divisible Subset",
    "lc": 368,
    "cat": "LIS (LONGEST INCREASING SUBSEQUENCE)",
    "url": "https://leetcode.com/problemset/all/?search=Longest%20Divisible%20Subset"
  },
  {
    "id": 938,
    "title": "Minimum Number of Removals to Make Mountain Array",
    "lc": 1671,
    "cat": "LIS (LONGEST INCREASING SUBSEQUENCE)",
    "url": "https://leetcode.com/problemset/all/?search=Minimum%20Number%20of%20Removals%20to%20Make%20Mountain%20Array"
  },
  {
    "id": 939,
    "title": "Minimum Deletions to Make Array Sorted",
    "lc": null,
    "cat": "LIS (LONGEST INCREASING SUBSEQUENCE)",
    "url": "https://www.google.com/search?q=Minimum%20Deletions%20to%20Make%20Array%20Sorted%20practice%20problem"
  },
  {
    "id": 940,
    "title": "Maximum Sum Increasing Subsequence",
    "lc": null,
    "cat": "LIS (LONGEST INCREASING SUBSEQUENCE)",
    "url": "https://www.google.com/search?q=Maximum%20Sum%20Increasing%20Subsequence%20practice%20problem"
  },
  {
    "id": 941,
    "title": "Longest Alternating Subsequence",
    "lc": null,
    "cat": "LIS (LONGEST INCREASING SUBSEQUENCE)",
    "url": "https://www.google.com/search?q=Longest%20Alternating%20Subsequence%20practice%20problem"
  },
  {
    "id": 942,
    "title": "Longest Arithmetic Subsequence",
    "lc": 1027,
    "cat": "LIS (LONGEST INCREASING SUBSEQUENCE)",
    "url": "https://leetcode.com/problemset/all/?search=Longest%20Arithmetic%20Subsequence"
  },
  {
    "id": 943,
    "title": "Longest Arithmetic Subsequence of Given Difference",
    "lc": 1218,
    "cat": "LIS (LONGEST INCREASING SUBSEQUENCE)",
    "url": "https://leetcode.com/problemset/all/?search=Longest%20Arithmetic%20Subsequence%20of%20Given%20Difference"
  },
  {
    "id": 944,
    "title": "Arithmetic Slices",
    "lc": 413,
    "cat": "LIS (LONGEST INCREASING SUBSEQUENCE)",
    "url": "https://leetcode.com/problemset/all/?search=Arithmetic%20Slices"
  },
  {
    "id": 945,
    "title": "Largest Divisible Subset",
    "lc": 368,
    "cat": "LIS (LONGEST INCREASING SUBSEQUENCE)",
    "url": "https://leetcode.com/problemset/all/?search=Largest%20Divisible%20Subset"
  },
  {
    "id": 946,
    "title": "Longest String Chain",
    "lc": 1048,
    "cat": "LIS (LONGEST INCREASING SUBSEQUENCE)",
    "url": "https://leetcode.com/problemset/all/?search=Longest%20String%20Chain"
  },
  {
    "id": 947,
    "title": "Number of Matching Subsequences",
    "lc": 792,
    "cat": "LIS (LONGEST INCREASING SUBSEQUENCE)",
    "url": "https://leetcode.com/problemset/all/?search=Number%20of%20Matching%20Subsequences"
  },
  {
    "id": 948,
    "title": "Maximum Length of Repeated Subarray",
    "lc": 718,
    "cat": "LIS (LONGEST INCREASING SUBSEQUENCE)",
    "url": "https://leetcode.com/problemset/all/?search=Maximum%20Length%20of%20Repeated%20Subarray"
  },
  {
    "id": 949,
    "title": "Maximum Sum of 3 Non-Overlapping Subarrays",
    "lc": 689,
    "cat": "LIS (LONGEST INCREASING SUBSEQUENCE)",
    "url": "https://leetcode.com/problemset/all/?search=Maximum%20Sum%20of%203%20Non-Overlapping%20Subarrays"
  },
  {
    "id": 950,
    "title": "Russian Doll Envelopes — Optimized LIS",
    "lc": 354,
    "cat": "LIS (LONGEST INCREASING SUBSEQUENCE)",
    "url": "https://leetcode.com/problemset/all/?search=Russian%20Doll%20Envelopes%20%E2%80%94%20Optimized%20LIS"
  },
  {
    "id": 951,
    "title": "Matrix Chain Multiplication",
    "lc": null,
    "cat": "INTERVAL DP",
    "url": "https://www.google.com/search?q=Matrix%20Chain%20Multiplication%20practice%20problem"
  },
  {
    "id": 952,
    "title": "Burst Balloons",
    "lc": 312,
    "cat": "INTERVAL DP",
    "url": "https://leetcode.com/problemset/all/?search=Burst%20Balloons"
  },
  {
    "id": 953,
    "title": "Minimum Cost to Cut a Stick",
    "lc": 1547,
    "cat": "INTERVAL DP",
    "url": "https://leetcode.com/problemset/all/?search=Minimum%20Cost%20to%20Cut%20a%20Stick"
  },
  {
    "id": 954,
    "title": "Palindrome Partitioning II",
    "lc": 132,
    "cat": "INTERVAL DP",
    "url": "https://leetcode.com/problemset/all/?search=Palindrome%20Partitioning%20II"
  },
  {
    "id": 955,
    "title": "Strange Printer",
    "lc": 664,
    "cat": "INTERVAL DP",
    "url": "https://leetcode.com/problemset/all/?search=Strange%20Printer"
  },
  {
    "id": 956,
    "title": "Minimum Score Triangulation of Polygon",
    "lc": 1039,
    "cat": "INTERVAL DP",
    "url": "https://leetcode.com/problemset/all/?search=Minimum%20Score%20Triangulation%20of%20Polygon"
  },
  {
    "id": 957,
    "title": "Stone Game",
    "lc": 877,
    "cat": "INTERVAL DP",
    "url": "https://leetcode.com/problemset/all/?search=Stone%20Game"
  },
  {
    "id": 958,
    "title": "Stone Game II",
    "lc": 1140,
    "cat": "INTERVAL DP",
    "url": "https://leetcode.com/problemset/all/?search=Stone%20Game%20II"
  },
  {
    "id": 959,
    "title": "Stone Game III",
    "lc": 1406,
    "cat": "INTERVAL DP",
    "url": "https://leetcode.com/problemset/all/?search=Stone%20Game%20III"
  },
  {
    "id": 960,
    "title": "Predict the Winner",
    "lc": 486,
    "cat": "INTERVAL DP",
    "url": "https://leetcode.com/problemset/all/?search=Predict%20the%20Winner"
  },
  {
    "id": 961,
    "title": "Minimum Cost Tree From Leaf Values",
    "lc": 1130,
    "cat": "INTERVAL DP",
    "url": "https://leetcode.com/problemset/all/?search=Minimum%20Cost%20Tree%20From%20Leaf%20Values"
  },
  {
    "id": 962,
    "title": "Remove Boxes",
    "lc": 546,
    "cat": "INTERVAL DP",
    "url": "https://leetcode.com/problemset/all/?search=Remove%20Boxes"
  },
  {
    "id": 963,
    "title": "Strange Printer II",
    "lc": 1591,
    "cat": "INTERVAL DP",
    "url": "https://leetcode.com/problemset/all/?search=Strange%20Printer%20II"
  },
  {
    "id": 964,
    "title": "Minimum Cost to Merge Stones",
    "lc": 1000,
    "cat": "INTERVAL DP",
    "url": "https://leetcode.com/problemset/all/?search=Minimum%20Cost%20to%20Merge%20Stones"
  },
  {
    "id": 965,
    "title": "Optimal Binary Search Tree",
    "lc": null,
    "cat": "INTERVAL DP",
    "url": "https://www.google.com/search?q=Optimal%20Binary%20Search%20Tree%20practice%20problem"
  },
  {
    "id": 966,
    "title": "Boolean Parenthesization",
    "lc": null,
    "cat": "INTERVAL DP",
    "url": "https://www.google.com/search?q=Boolean%20Parenthesization%20practice%20problem"
  },
  {
    "id": 967,
    "title": "Palindrome Partitioning",
    "lc": 131,
    "cat": "INTERVAL DP",
    "url": "https://leetcode.com/problemset/all/?search=Palindrome%20Partitioning"
  },
  {
    "id": 968,
    "title": "Longest Palindromic Subsequence",
    "lc": 516,
    "cat": "INTERVAL DP",
    "url": "https://leetcode.com/problemset/all/?search=Longest%20Palindromic%20Subsequence"
  },
  {
    "id": 969,
    "title": "Minimum Insertions to Make a String Palindrome",
    "lc": 1312,
    "cat": "INTERVAL DP",
    "url": "https://leetcode.com/problemset/all/?search=Minimum%20Insertions%20to%20Make%20a%20String%20Palindrome"
  },
  {
    "id": 970,
    "title": "Parsing a Boolean Expression",
    "lc": 1106,
    "cat": "INTERVAL DP",
    "url": "https://leetcode.com/problemset/all/?search=Parsing%20a%20Boolean%20Expression"
  },
  {
    "id": 971,
    "title": "House Robber III",
    "lc": 337,
    "cat": "TREE DP",
    "url": "https://leetcode.com/problemset/all/?search=House%20Robber%20III"
  },
  {
    "id": 972,
    "title": "Diameter of Binary Tree",
    "lc": 543,
    "cat": "TREE DP",
    "url": "https://leetcode.com/problemset/all/?search=Diameter%20of%20Binary%20Tree"
  },
  {
    "id": 973,
    "title": "Binary Tree Maximum Path Sum",
    "lc": 124,
    "cat": "TREE DP",
    "url": "https://leetcode.com/problemset/all/?search=Binary%20Tree%20Maximum%20Path%20Sum"
  },
  {
    "id": 974,
    "title": "Binary Tree Cameras",
    "lc": 968,
    "cat": "TREE DP",
    "url": "https://leetcode.com/problemset/all/?search=Binary%20Tree%20Cameras"
  },
  {
    "id": 975,
    "title": "Longest ZigZag Path in a Binary Tree",
    "lc": 1372,
    "cat": "TREE DP",
    "url": "https://leetcode.com/problemset/all/?search=Longest%20ZigZag%20Path%20in%20a%20Binary%20Tree"
  },
  {
    "id": 976,
    "title": "Maximum Independent Set in a Tree",
    "lc": null,
    "cat": "TREE DP",
    "url": "https://www.google.com/search?q=Maximum%20Independent%20Set%20in%20a%20Tree%20practice%20problem"
  },
  {
    "id": 977,
    "title": "Tree Matching / Maximum Matching",
    "lc": null,
    "cat": "TREE DP",
    "url": "https://www.google.com/search?q=Tree%20Matching%20%2F%20Maximum%20Matching%20practice%20problem"
  },
  {
    "id": 978,
    "title": "Minimum Vertex Cover in a Tree",
    "lc": null,
    "cat": "TREE DP",
    "url": "https://www.google.com/search?q=Minimum%20Vertex%20Cover%20in%20a%20Tree%20practice%20problem"
  },
  {
    "id": 979,
    "title": "Maximum Path Sum in a Binary Tree",
    "lc": 124,
    "cat": "TREE DP",
    "url": "https://leetcode.com/problemset/all/?search=Maximum%20Path%20Sum%20in%20a%20Binary%20Tree"
  },
  {
    "id": 980,
    "title": "Longest Path in a Tree",
    "lc": null,
    "cat": "TREE DP",
    "url": "https://www.google.com/search?q=Longest%20Path%20in%20a%20Tree%20practice%20problem"
  },
  {
    "id": 981,
    "title": "Sum of Distances in Tree",
    "lc": 834,
    "cat": "TREE DP",
    "url": "https://leetcode.com/problemset/all/?search=Sum%20of%20Distances%20in%20Tree"
  },
  {
    "id": 982,
    "title": "Time Needed to Inform All Employees",
    "lc": 1376,
    "cat": "TREE DP",
    "url": "https://leetcode.com/problemset/all/?search=Time%20Needed%20to%20Inform%20All%20Employees"
  },
  {
    "id": 983,
    "title": "All Possible Full Binary Trees",
    "lc": 894,
    "cat": "TREE DP",
    "url": "https://leetcode.com/problemset/all/?search=All%20Possible%20Full%20Binary%20Trees"
  },
  {
    "id": 984,
    "title": "Unique Binary Search Trees",
    "lc": 96,
    "cat": "TREE DP",
    "url": "https://leetcode.com/problemset/all/?search=Unique%20Binary%20Search%20Trees"
  },
  {
    "id": 985,
    "title": "Unique Binary Search Trees II",
    "lc": 95,
    "cat": "TREE DP",
    "url": "https://leetcode.com/problemset/all/?search=Unique%20Binary%20Search%20Trees%20II"
  },
  {
    "id": 986,
    "title": "House Robber III with State DP",
    "lc": 337,
    "cat": "TREE DP",
    "url": "https://leetcode.com/problemset/all/?search=House%20Robber%20III%20with%20State%20DP"
  },
  {
    "id": 987,
    "title": "Maximum Difference Between Node and Ancestor",
    "lc": 1026,
    "cat": "TREE DP",
    "url": "https://leetcode.com/problemset/all/?search=Maximum%20Difference%20Between%20Node%20and%20Ancestor"
  },
  {
    "id": 988,
    "title": "Distribute Coins in Binary Tree",
    "lc": 979,
    "cat": "TREE DP",
    "url": "https://leetcode.com/problemset/all/?search=Distribute%20Coins%20in%20Binary%20Tree"
  },
  {
    "id": 989,
    "title": "Longest Univalue Path",
    "lc": 687,
    "cat": "TREE DP",
    "url": "https://leetcode.com/problemset/all/?search=Longest%20Univalue%20Path"
  },
  {
    "id": 990,
    "title": "Smallest Sufficient Team",
    "lc": 1125,
    "cat": "TREE DP",
    "url": "https://leetcode.com/problemset/all/?search=Smallest%20Sufficient%20Team"
  },
  {
    "id": 991,
    "title": "Number of Ways to Reorder Array to Get Same BST",
    "lc": 1569,
    "cat": "TREE DP",
    "url": "https://leetcode.com/problemset/all/?search=Number%20of%20Ways%20to%20Reorder%20Array%20to%20Get%20Same%20BST"
  },
  {
    "id": 992,
    "title": "Binary Tree Coloring Game",
    "lc": 1145,
    "cat": "TREE DP",
    "url": "https://leetcode.com/problemset/all/?search=Binary%20Tree%20Coloring%20Game"
  },
  {
    "id": 993,
    "title": "Maximum Sum BST in Binary Tree",
    "lc": 1373,
    "cat": "TREE DP",
    "url": "https://leetcode.com/problemset/all/?search=Maximum%20Sum%20BST%20in%20Binary%20Tree"
  },
  {
    "id": 994,
    "title": "Tree Diameter with Weighted Edges",
    "lc": null,
    "cat": "TREE DP",
    "url": "https://www.google.com/search?q=Tree%20Diameter%20with%20Weighted%20Edges%20practice%20problem"
  },
  {
    "id": 995,
    "title": "Rerooting DP on Trees",
    "lc": null,
    "cat": "TREE DP",
    "url": "https://www.google.com/search?q=Rerooting%20DP%20on%20Trees%20practice%20problem"
  },
  {
    "id": 996,
    "title": "Bitmask Basics: Set/Clear/Toggle/Check a Bit",
    "lc": null,
    "cat": "BITMASK DP",
    "url": "https://www.google.com/search?q=Bitmask%20Basics%3A%20Set%2FClear%2FToggle%2FCheck%20a%20Bit%20practice%20problem"
  },
  {
    "id": 997,
    "title": "Count Set Bits",
    "lc": 191,
    "cat": "BITMASK DP",
    "url": "https://leetcode.com/problemset/all/?search=Count%20Set%20Bits"
  },
  {
    "id": 998,
    "title": "Power Set / Generate All Subsets",
    "lc": 78,
    "cat": "BITMASK DP",
    "url": "https://leetcode.com/problemset/all/?search=Power%20Set%20%2F%20Generate%20All%20Subsets"
  },
  {
    "id": 999,
    "title": "Subsets II using Bitmask",
    "lc": 90,
    "cat": "BITMASK DP",
    "url": "https://leetcode.com/problemset/all/?search=Subsets%20II%20using%20Bitmask"
  },
  {
    "id": 1000,
    "title": "Single Number",
    "lc": 136,
    "cat": "BITMASK DP",
    "url": "https://leetcode.com/problemset/all/?search=Single%20Number"
  },
  {
    "id": 1001,
    "title": "Single Number II",
    "lc": 137,
    "cat": "BITMASK DP",
    "url": "https://leetcode.com/problemset/all/?search=Single%20Number%20II"
  },
  {
    "id": 1002,
    "title": "Maximum XOR for Each Query",
    "lc": 1829,
    "cat": "BITMASK DP",
    "url": "https://leetcode.com/problemset/all/?search=Maximum%20XOR%20for%20Each%20Query"
  },
  {
    "id": 1003,
    "title": "Maximum Product of Word Lengths",
    "lc": 318,
    "cat": "BITMASK DP",
    "url": "https://leetcode.com/problemset/all/?search=Maximum%20Product%20of%20Word%20Lengths"
  },
  {
    "id": 1004,
    "title": "Maximum Compatibility Score Sum",
    "lc": 1947,
    "cat": "BITMASK DP",
    "url": "https://leetcode.com/problemset/all/?search=Maximum%20Compatibility%20Score%20Sum"
  },
  {
    "id": 1005,
    "title": "Smallest Sufficient Team",
    "lc": 1125,
    "cat": "BITMASK DP",
    "url": "https://leetcode.com/problemset/all/?search=Smallest%20Sufficient%20Team"
  },
  {
    "id": 1006,
    "title": "Traveling Salesman Problem (TSP)",
    "lc": null,
    "cat": "BITMASK DP",
    "url": "https://www.google.com/search?q=Traveling%20Salesman%20Problem%20(TSP)%20practice%20problem"
  },
  {
    "id": 1007,
    "title": "Assignment Problem using Bitmask DP",
    "lc": null,
    "cat": "BITMASK DP",
    "url": "https://www.google.com/search?q=Assignment%20Problem%20using%20Bitmask%20DP%20practice%20problem"
  },
  {
    "id": 1008,
    "title": "Minimum Cost to Assign Jobs",
    "lc": null,
    "cat": "BITMASK DP",
    "url": "https://www.google.com/search?q=Minimum%20Cost%20to%20Assign%20Jobs%20practice%20problem"
  },
  {
    "id": 1009,
    "title": "Partition Array into K Equal Sum Subsets",
    "lc": 698,
    "cat": "BITMASK DP",
    "url": "https://leetcode.com/problemset/all/?search=Partition%20Array%20into%20K%20Equal%20Sum%20Subsets"
  },
  {
    "id": 1010,
    "title": "Matchsticks to Square",
    "lc": 473,
    "cat": "BITMASK DP",
    "url": "https://leetcode.com/problemset/all/?search=Matchsticks%20to%20Square"
  },
  {
    "id": 1011,
    "title": "Maximum Students Taking Exam",
    "lc": 1349,
    "cat": "BITMASK DP",
    "url": "https://leetcode.com/problemset/all/?search=Maximum%20Students%20Taking%20Exam"
  },
  {
    "id": 1012,
    "title": "Minimum Number of Work Sessions",
    "lc": 1986,
    "cat": "BITMASK DP",
    "url": "https://leetcode.com/problemset/all/?search=Minimum%20Number%20of%20Work%20Sessions"
  },
  {
    "id": 1013,
    "title": "Parallel Courses II",
    "lc": 1494,
    "cat": "BITMASK DP",
    "url": "https://leetcode.com/problemset/all/?search=Parallel%20Courses%20II"
  },
  {
    "id": 1014,
    "title": "Shortest Path Visiting All Nodes",
    "lc": 847,
    "cat": "BITMASK DP",
    "url": "https://leetcode.com/problemset/all/?search=Shortest%20Path%20Visiting%20All%20Nodes"
  },
  {
    "id": 1015,
    "title": "Number of Ways to Wear Different Hats to Each Other",
    "lc": 1434,
    "cat": "BITMASK DP",
    "url": "https://leetcode.com/problemset/all/?search=Number%20of%20Ways%20to%20Wear%20Different%20Hats%20to%20Each%20Other"
  },
  {
    "id": 1016,
    "title": "Minimum XOR Sum of Two Arrays",
    "lc": 1879,
    "cat": "BITMASK DP",
    "url": "https://leetcode.com/problemset/all/?search=Minimum%20XOR%20Sum%20of%20Two%20Arrays"
  },
  {
    "id": 1017,
    "title": "Maximum AND Sum of Array",
    "lc": 2172,
    "cat": "BITMASK DP",
    "url": "https://leetcode.com/problemset/all/?search=Maximum%20AND%20Sum%20of%20Array"
  },
  {
    "id": 1018,
    "title": "Can I Win",
    "lc": 464,
    "cat": "BITMASK DP",
    "url": "https://leetcode.com/problemset/all/?search=Can%20I%20Win"
  },
  {
    "id": 1019,
    "title": "Matchsticks to Square — Bitmask DP",
    "lc": 473,
    "cat": "BITMASK DP",
    "url": "https://leetcode.com/problemset/all/?search=Matchsticks%20to%20Square%20%E2%80%94%20Bitmask%20DP"
  },
  {
    "id": 1020,
    "title": "Count Special Subsequences using Bitmask",
    "lc": null,
    "cat": "BITMASK DP",
    "url": "https://www.google.com/search?q=Count%20Special%20Subsequences%20using%20Bitmask%20practice%20problem"
  },
  {
    "id": 1021,
    "title": "Implement Trie (Prefix Tree)",
    "lc": 208,
    "cat": "TRIES",
    "url": "https://leetcode.com/problemset/all/?search=Implement%20Trie%20(Prefix%20Tree)"
  },
  {
    "id": 1022,
    "title": "Design Add and Search Words Data Structure",
    "lc": 211,
    "cat": "TRIES",
    "url": "https://leetcode.com/problemset/all/?search=Design%20Add%20and%20Search%20Words%20Data%20Structure"
  },
  {
    "id": 1023,
    "title": "Word Search II",
    "lc": 212,
    "cat": "TRIES",
    "url": "https://leetcode.com/problemset/all/?search=Word%20Search%20II"
  },
  {
    "id": 1024,
    "title": "Replace Words",
    "lc": 648,
    "cat": "TRIES",
    "url": "https://leetcode.com/problemset/all/?search=Replace%20Words"
  },
  {
    "id": 1025,
    "title": "Longest Word in Dictionary",
    "lc": 720,
    "cat": "TRIES",
    "url": "https://leetcode.com/problemset/all/?search=Longest%20Word%20in%20Dictionary"
  },
  {
    "id": 1026,
    "title": "Prefix and Suffix Search",
    "lc": 745,
    "cat": "TRIES",
    "url": "https://leetcode.com/problemset/all/?search=Prefix%20and%20Suffix%20Search"
  },
  {
    "id": 1027,
    "title": "Map Sum Pairs",
    "lc": 677,
    "cat": "TRIES",
    "url": "https://leetcode.com/problemset/all/?search=Map%20Sum%20Pairs"
  },
  {
    "id": 1028,
    "title": "Search Suggestions System",
    "lc": 1268,
    "cat": "TRIES",
    "url": "https://leetcode.com/problemset/all/?search=Search%20Suggestions%20System"
  },
  {
    "id": 1029,
    "title": "Maximum XOR of Two Numbers in an Array",
    "lc": 421,
    "cat": "TRIES",
    "url": "https://leetcode.com/problemset/all/?search=Maximum%20XOR%20of%20Two%20Numbers%20in%20an%20Array"
  },
  {
    "id": 1030,
    "title": "Maximum XOR With an Element From Array",
    "lc": 1707,
    "cat": "TRIES",
    "url": "https://leetcode.com/problemset/all/?search=Maximum%20XOR%20With%20an%20Element%20From%20Array"
  },
  {
    "id": 1031,
    "title": "Concatenated Words",
    "lc": 472,
    "cat": "TRIES",
    "url": "https://leetcode.com/problemset/all/?search=Concatenated%20Words"
  },
  {
    "id": 1032,
    "title": "Implement Magic Dictionary",
    "lc": 676,
    "cat": "TRIES",
    "url": "https://leetcode.com/problemset/all/?search=Implement%20Magic%20Dictionary"
  },
  {
    "id": 1033,
    "title": "Stream of Characters",
    "lc": 1032,
    "cat": "TRIES",
    "url": "https://leetcode.com/problemset/all/?search=Stream%20of%20Characters"
  },
  {
    "id": 1034,
    "title": "Design Search Autocomplete System",
    "lc": 642,
    "cat": "TRIES",
    "url": "https://leetcode.com/problemset/all/?search=Design%20Search%20Autocomplete%20System"
  },
  {
    "id": 1035,
    "title": "Single Number",
    "lc": 136,
    "cat": "BIT MANIPULATION",
    "url": "https://leetcode.com/problemset/all/?search=Single%20Number"
  },
  {
    "id": 1036,
    "title": "Number of 1 Bits",
    "lc": 191,
    "cat": "BIT MANIPULATION",
    "url": "https://leetcode.com/problemset/all/?search=Number%20of%201%20Bits"
  },
  {
    "id": 1037,
    "title": "Counting Bits",
    "lc": 338,
    "cat": "BIT MANIPULATION",
    "url": "https://leetcode.com/problemset/all/?search=Counting%20Bits"
  },
  {
    "id": 1038,
    "title": "Power of Two",
    "lc": 231,
    "cat": "BIT MANIPULATION",
    "url": "https://leetcode.com/problemset/all/?search=Power%20of%20Two"
  },
  {
    "id": 1039,
    "title": "Missing Number",
    "lc": 268,
    "cat": "BIT MANIPULATION",
    "url": "https://leetcode.com/problemset/all/?search=Missing%20Number"
  },
  {
    "id": 1040,
    "title": "Reverse Bits",
    "lc": 190,
    "cat": "BIT MANIPULATION",
    "url": "https://leetcode.com/problemset/all/?search=Reverse%20Bits"
  },
  {
    "id": 1041,
    "title": "Single Number II",
    "lc": 137,
    "cat": "BIT MANIPULATION",
    "url": "https://leetcode.com/problemset/all/?search=Single%20Number%20II"
  },
  {
    "id": 1042,
    "title": "Single Number III",
    "lc": 260,
    "cat": "BIT MANIPULATION",
    "url": "https://leetcode.com/problemset/all/?search=Single%20Number%20III"
  },
  {
    "id": 1043,
    "title": "Sum of Two Integers",
    "lc": 371,
    "cat": "BIT MANIPULATION",
    "url": "https://leetcode.com/problemset/all/?search=Sum%20of%20Two%20Integers"
  },
  {
    "id": 1044,
    "title": "Bitwise AND of Numbers Range",
    "lc": 201,
    "cat": "BIT MANIPULATION",
    "url": "https://leetcode.com/problemset/all/?search=Bitwise%20AND%20of%20Numbers%20Range"
  },
  {
    "id": 1045,
    "title": "Subsets",
    "lc": 78,
    "cat": "BIT MANIPULATION",
    "url": "https://leetcode.com/problemset/all/?search=Subsets"
  },
  {
    "id": 1046,
    "title": "Subsets II",
    "lc": 90,
    "cat": "BIT MANIPULATION",
    "url": "https://leetcode.com/problemset/all/?search=Subsets%20II"
  },
  {
    "id": 1047,
    "title": "Power Set using Bitmask",
    "lc": null,
    "cat": "BIT MANIPULATION",
    "url": "https://www.google.com/search?q=Power%20Set%20using%20Bitmask%20practice%20problem"
  },
  {
    "id": 1048,
    "title": "Find XOR of All Numbers",
    "lc": null,
    "cat": "BIT MANIPULATION",
    "url": "https://www.google.com/search?q=Find%20XOR%20of%20All%20Numbers%20practice%20problem"
  },
  {
    "id": 1049,
    "title": "Maximum XOR of Two Numbers",
    "lc": 421,
    "cat": "BIT MANIPULATION",
    "url": "https://leetcode.com/problemset/all/?search=Maximum%20XOR%20of%20Two%20Numbers"
  },
  {
    "id": 1050,
    "title": "Maximum XOR With an Element From Array",
    "lc": 1707,
    "cat": "BIT MANIPULATION",
    "url": "https://leetcode.com/problemset/all/?search=Maximum%20XOR%20With%20an%20Element%20From%20Array"
  },
  {
    "id": 1051,
    "title": "Minimum Bit Flips to Convert Number",
    "lc": 2220,
    "cat": "BIT MANIPULATION",
    "url": "https://leetcode.com/problemset/all/?search=Minimum%20Bit%20Flips%20to%20Convert%20Number"
  },
  {
    "id": 1052,
    "title": "Minimum One Bit Operations to Make Integers Zero",
    "lc": 1611,
    "cat": "BIT MANIPULATION",
    "url": "https://leetcode.com/problemset/all/?search=Minimum%20One%20Bit%20Operations%20to%20Make%20Integers%20Zero"
  },
  {
    "id": 1053,
    "title": "UTF-8 Validation",
    "lc": 393,
    "cat": "BIT MANIPULATION",
    "url": "https://leetcode.com/problemset/all/?search=UTF-8%20Validation"
  },
  {
    "id": 1054,
    "title": "Divide Two Integers",
    "lc": 29,
    "cat": "BIT MANIPULATION",
    "url": "https://leetcode.com/problemset/all/?search=Divide%20Two%20Integers"
  },
  {
    "id": 1055,
    "title": "XOR Queries of a Subarray",
    "lc": 1310,
    "cat": "BIT MANIPULATION",
    "url": "https://leetcode.com/problemset/all/?search=XOR%20Queries%20of%20a%20Subarray"
  }
];

const DSA3_CATEGORIES = [
  "ARRAYS",
  "PREFIX/SUFFIX TECHNIQUES",
  "Fixed-Size Sliding Window",
  "Variable-Size Sliding Window",
  "BINARY SEARCH PATTERNS",
  "PARAMETRIC SEARCH",
  "LINKED LIST",
  "FAST & SLOW POINTER",
  "STACK",
  "QUEUE",
  "MONOTONIC STACK & QUEUE",
  "TREE TRAVERSALS",
  "BINARY TREE",
  "BST",
  "AVL",
  "SEGMENT TREE",
  "HEAP",
  "PRIORITY QUEUE",
  "TOP-K ELEMENTS",
  "HASHING",
  "MAPS",
  "SETS",
  "STRING HASHING",
  "BFS",
  "DFS",
  "CONNECTED COMPONENTS",
  "SHORTEST PATHS",
  "DIJKSTRA’S",
  "MST",
  "DSU / UNION FIND",
  "TOPOLOGICAL SORT",
  "STRONGLY CONNECTED COMPONENTS (SCC)",
  "DYNAMIC PROGRAMMING: 1D DP",
  "DYNAMIC PROGRAMMING: 2D DP",
  "0/1 KNAPSACK",
  "UNBOUNDED KNAPSACK",
  "LCS (LONGEST COMMON SUBSEQUENCE)",
  "LIS (LONGEST INCREASING SUBSEQUENCE)",
  "INTERVAL DP",
  "TREE DP",
  "BITMASK DP",
  "TRIES",
  "BIT MANIPULATION"
];
