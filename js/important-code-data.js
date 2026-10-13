/**
 * Most Important Interview Code - Topic-Wise Collection
 * Curated high-frequency questions with multi-language solutions (Python, Java, C++)
 * Structured for easy filtering, searching, and sorting.
 */
const IMPORTANT_CODE_DATA = [
  // ==========================================
  // ARRAYS
  // ==========================================
  {
    id: "imp-arr-0",
    title: "Practice 1: Arrays.toString() — Array Print Karna",
    topic: "Arrays",
    difficulty: "Easy",
    companies: ["TCS", "Accenture", "Cognizant", "Infosys", "Wipro"],
    importance: "Must Do",
    tags: ["Arrays.toString()", "Java Built-in", "Arrays"],
    statement: "<strong>Use:</strong> Array ke saare elements ko readable format <code>[10, 20, 30, 40]</code> mein print karna.<br>Directly <code>System.out.println(arr)</code> likhne se memory address (e.g. <code>[I@15db9742</code>) print hota hai. Readable format ke liye <code>Arrays.toString(arr)</code> use kiya jata hai.",
    examples: [
      {
        input: "int[] arr = {10, 20, 30, 40};",
        output: "[10, 20, 30, 40]",
        explanation: "Array ke saare elements square brackets aur comma ke saath readable format mein print ho jaate hain."
      }
    ],
    approach: "<code>java.util.Arrays</code> package import karein aur <code>Arrays.toString(arr)</code> call karein. Yeh array ke sabhi elements ko traverse karke string representation banata hai.",
    complexity: { time: "O(n)", space: "O(n)" },
    code: {
      python: `arr = [10, 20, 30, 40]

# Python lists are automatically printed in readable format
print(arr)  # Output: [10, 20, 30, 40]`,
      java: `import java.util.Arrays;

public class Main {
    public static void main(String[] args) {

        int[] arr = {10, 20, 30, 40};

        System.out.println(Arrays.toString(arr));
    }
}

// Output:
// [10, 20, 30, 40]`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> arr = {10, 20, 30, 40};
    cout << "[";
    for (size_t i = 0; i < arr.size(); ++i) {
        cout << arr[i] << (i < arr.size() - 1 ? ", " : "");
    }
    cout << "]" << endl; // Output: [10, 20, 30, 40]
    return 0;
}`
    }
  },
  {
    id: "imp-arr-1",
    title: "Two Sum",
    topic: "Arrays",
    difficulty: "Easy",
    companies: ["Amazon", "Google", "Microsoft", "TCS", "Accenture", "Cognizant"],
    importance: "Must Do",
    tags: ["Hash Map", "Arrays", "Two Pointers"],
    statement: "Given an array of integers <code>nums</code> and an integer <code>target</code>, return indices of the two numbers such that they add up to <code>target</code>.<br>You may assume that each input would have exactly one solution, and you may not use the same element twice.",
    examples: [
      {
        input: "nums = [2, 7, 11, 15], target = 9",
        output: "[0, 1]",
        explanation: "Because nums[0] + nums[1] == 2 + 7 == 9, we return [0, 1]."
      },
      {
        input: "nums = [3, 2, 4], target = 6",
        output: "[1, 2]",
        explanation: "nums[1] + nums[2] == 2 + 4 == 6."
      }
    ],
    approach: "Use a Hash Map to store previously visited elements and their indices. For each element <code>x</code>, compute <code>complement = target - x</code>. If complement exists in map, return indices. This achieves O(n) time instead of O(n²) brute force.",
    complexity: { time: "O(n)", space: "O(n)" },
    code: {
      python: `def twoSum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []

# Driver code
print(twoSum([2, 7, 11, 15], 9))  # Output: [0, 1]`,
      java: `import java.util.*;

public class TwoSum {
    public static int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement)) {
                return new int[] { map.get(complement), i };
            }
            map.put(nums[i], i);
        }
        return new int[0];
    }

    public static void main(String[] args) {
        int[] result = twoSum(new int[]{2, 7, 11, 15}, 9);
        System.out.println(Arrays.toString(result)); // [0, 1]
    }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

vector<int> twoSum(vector<int>& nums, int target) {
    unordered_map<int, int> seen;
    for (int i = 0; i < nums.size(); i++) {
        int complement = target - nums[i];
        if (seen.find(complement) != seen.end()) {
            return {seen[complement], i};
        }
        seen[nums[i]] = i;
    }
    return {};
}

int main() {
    vector<int> nums = {2, 7, 11, 15};
    vector<int> res = twoSum(nums, 9);
    cout << "[" << res[0] << ", " << res[1] << "]" << endl;
    return 0;
}`
    }
  },
  {
    id: "imp-arr-2",
    title: "Maximum Subarray (Kadane's Algorithm)",
    topic: "Arrays",
    difficulty: "Medium",
    companies: ["Microsoft", "Amazon", "Capgemini", "Infosys", "Wipro"],
    importance: "Must Do",
    tags: ["Kadane", "Dynamic Programming", "Arrays"],
    statement: "Given an integer array <code>nums</code>, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.",
    examples: [
      {
        input: "nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]",
        output: "6",
        explanation: "The contiguous subarray [4, -1, 2, 1] has the largest sum = 6."
      },
      {
        input: "nums = [1]",
        output: "1",
        explanation: "Single element array."
      }
    ],
    approach: "Kadane's Algorithm maintains a running sum <code>currentSum</code>. At each element, decide whether to add it to existing sum or start a fresh subarray from current element (<code>max(num, currentSum + num)</code>). Track <code>maxSum</code> seen so far.",
    complexity: { time: "O(n)", space: "O(1)" },
    code: {
      python: `def maxSubArray(nums):
    max_sum = nums[0]
    curr_sum = 0
    for num in nums:
        curr_sum = max(num, curr_sum + num)
        max_sum = max(max_sum, curr_sum)
    return max_sum

print(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))  # 6`,
      java: `public class KadaneMaxSubarray {
    public static int maxSubArray(int[] nums) {
        int maxSum = nums[0];
        int currSum = nums[0];
        for (int i = 1; i < nums.length; i++) {
            currSum = Math.max(nums[i], currSum + nums[i]);
            maxSum = Math.max(maxSum, currSum);
        }
        return maxSum;
    }

    public static void main(String[] args) {
        int[] nums = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
        System.out.println(maxSubArray(nums)); // 6
    }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int maxSubArray(vector<int>& nums) {
    int maxSum = nums[0];
    int currSum = nums[0];
    for (size_t i = 1; i < nums.size(); i++) {
        currSum = max(nums[i], currSum + nums[i]);
        maxSum = max(maxSum, currSum);
    }
    return maxSum;
}

int main() {
    vector<int> nums = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
    cout << maxSubArray(nums) << endl; // 6
    return 0;
}`
    }
  },
  {
    id: "imp-arr-3",
    title: "Trapping Rain Water",
    topic: "Arrays",
    difficulty: "Hard",
    companies: ["Amazon", "Google", "Facebook", "Microsoft", "Goldman Sachs"],
    importance: "Top Pick",
    tags: ["Two Pointers", "Stack", "Arrays"],
    statement: "Given <code>n</code> non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
    examples: [
      {
        input: "height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]",
        output: "6",
        explanation: "The above elevation map can trap 6 units of rain water."
      }
    ],
    approach: "Use two pointers (<code>left</code> and <code>right</code>) and track <code>leftMax</code> and <code>rightMax</code>. Move pointer from lower side towards center because water trapped is determined by the shorter boundary.",
    complexity: { time: "O(n)", space: "O(1)" },
    code: {
      python: `def trap(height):
    if not height: return 0
    left, right = 0, len(height) - 1
    left_max, right_max = height[left], height[right]
    water = 0
    while left < right:
        if left_max < right_max:
            left += 1
            left_max = max(left_max, height[left])
            water += left_max - height[left]
        else:
            right -= 1
            right_max = max(right_max, height[right])
            water += right_max - height[right]
    return water

print(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))  # 6`,
      java: `public class TrappingRainWater {
    public static int trap(int[] height) {
        if (height == null || height.length == 0) return 0;
        int left = 0, right = height.length - 1;
        int leftMax = height[left], rightMax = height[right];
        int water = 0;
        while (left < right) {
            if (leftMax < rightMax) {
                left++;
                leftMax = Math.max(leftMax, height[left]);
                water += leftMax - height[left];
            } else {
                right--;
                rightMax = Math.max(rightMax, height[right]);
                water += rightMax - height[right];
            }
        }
        return water;
    }

    public static void main(String[] args) {
        int[] h = {0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1};
        System.out.println(trap(h)); // 6
    }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int trap(vector<int>& height) {
    if (height.empty()) return 0;
    int left = 0, right = height.size() - 1;
    int leftMax = height[left], rightMax = height[right];
    int water = 0;
    while (left < right) {
        if (leftMax < rightMax) {
            left++;
            leftMax = max(leftMax, height[left]);
            water += leftMax - height[left];
        } else {
            right--;
            rightMax = max(rightMax, height[right]);
            water += rightMax - height[right];
        }
    }
    return water;
}

int main() {
    vector<int> h = {0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1};
    cout << trap(h) << endl; // 6
    return 0;
}`
    }
  },
  {
    id: "imp-arr-4",
    title: "Best Time to Buy and Sell Stock",
    topic: "Arrays",
    difficulty: "Easy",
    companies: ["Amazon", "TCS", "Accenture", "Cognizant", "Microsoft"],
    importance: "Must Do",
    tags: ["Greedy", "Arrays"],
    statement: "You are given an array <code>prices</code> where <code>prices[i]</code> is the price of a given stock on the <code>i</code>-th day. You want to maximize your profit by choosing a single day to buy and a different day in the future to sell. Return maximum profit achievable.",
    examples: [
      {
        input: "prices = [7, 1, 5, 3, 6, 4]",
        output: "5",
        explanation: "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6 - 1 = 5."
      }
    ],
    approach: "Track the minimum price seen so far (<code>minPrice</code>) as you iterate. Calculate profit selling at today's price (<code>price - minPrice</code>), and maintain maximum profit.",
    complexity: { time: "O(n)", space: "O(1)" },
    code: {
      python: `def maxProfit(prices):
    min_price = float('inf')
    max_profit = 0
    for p in prices:
        if p < min_price:
            min_price = p
        elif p - min_price > max_profit:
            max_profit = p - min_price
    return max_profit

print(maxProfit([7, 1, 5, 3, 6, 4]))  # 5`,
      java: `public class BuySellStock {
    public static int maxProfit(int[] prices) {
        int minPrice = Integer.MAX_VALUE;
        int maxProfit = 0;
        for (int p : prices) {
            if (p < minPrice) minPrice = p;
            else if (p - minPrice > maxProfit) maxProfit = p - minPrice;
        }
        return maxProfit;
    }

    public static void main(String[] args) {
        System.out.println(maxProfit(new int[]{7, 1, 5, 3, 6, 4})); // 5
    }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <climits>
#include <algorithm>
using namespace std;

int maxProfit(vector<int>& prices) {
    int minPrice = INT_MAX;
    int maxProfit = 0;
    for (int p : prices) {
        if (p < minPrice) minPrice = p;
        else maxProfit = max(maxProfit, p - minPrice);
    }
    return maxProfit;
}

int main() {
    vector<int> prices = {7, 1, 5, 3, 6, 4};
    cout << maxProfit(prices) << endl; // 5
    return 0;
}`
    }
  },

  // ==========================================
  // STRINGS
  // ==========================================
  {
    id: "imp-str-1",
    title: "Longest Substring Without Repeating Characters",
    topic: "Strings",
    difficulty: "Medium",
    companies: ["Amazon", "Microsoft", "Capgemini", "Google", "Adobe"],
    importance: "Must Do",
    tags: ["Sliding Window", "Hash Set", "Strings"],
    statement: "Given a string <code>s</code>, find the length of the longest substring without repeating characters.",
    examples: [
      {
        input: 's = "abcabcbb"',
        output: "3",
        explanation: 'The answer is "abc", with length of 3.'
      },
      {
        input: 's = "bbbbb"',
        output: "1",
        explanation: 'The answer is "b", with length of 1.'
      }
    ],
    approach: "Use Sliding Window with two pointers (<code>left</code> and <code>right</code>) and a hash map tracking last seen index of characters. When duplicate occurs, jump <code>left = max(left, lastSeen[char] + 1)</code>.",
    complexity: { time: "O(n)", space: "O(min(n, m))" },
    code: {
      python: `def lengthOfLongestSubstring(s: str) -> int:
    char_map = {}
    left = 0
    max_len = 0
    for right, ch in enumerate(s):
        if ch in char_map and char_map[ch] >= left:
            left = char_map[ch] + 1
        char_map[ch] = right
        max_len = max(max_len, right - left + 1)
    return max_len

print(lengthOfLongestSubstring("abcabcbb"))  # 3`,
      java: `import java.util.*;

public class LongestSubstring {
    public static int lengthOfLongestSubstring(String s) {
        Map<Character, Integer> map = new HashMap<>();
        int maxLen = 0, left = 0;
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

    public static void main(String[] args) {
        System.out.println(lengthOfLongestSubstring("abcabcbb")); // 3
    }
}`,
      cpp: `#include <iostream>
#include <string>
#include <unordered_map>
#include <algorithm>
using namespace std;

int lengthOfLongestSubstring(string s) {
    unordered_map<char, int> map;
    int maxLen = 0, left = 0;
    for (int right = 0; right < s.size(); right++) {
        char c = s[right];
        if (map.find(c) != map.end() && map[c] >= left) {
            left = map[c] + 1;
        }
        map[c] = right;
        maxLen = max(maxLen, right - left + 1);
    }
    return maxLen;
}

int main() {
    cout << lengthOfLongestSubstring("abcabcbb") << endl; // 3
    return 0;
}`
    }
  },
  {
    id: "imp-str-2",
    title: "Valid Anagram",
    topic: "Strings",
    difficulty: "Easy",
    companies: ["TCS", "Accenture", "Tech Mahindra", "Amazon", "Infosys"],
    importance: "Must Do",
    tags: ["Hash Map", "Counting", "Strings"],
    statement: "Given two strings <code>s</code> and <code>t</code>, return <code>true</code> if <code>t</code> is an anagram of <code>s</code>, and <code>false</code> otherwise.",
    examples: [
      {
        input: 's = "anagram", t = "nagaram"',
        output: "true",
        explanation: "Both strings contain exact same characters with identical frequencies."
      }
    ],
    approach: "Check if lengths are equal. Count character frequencies in an array of size 26. Increment count for <code>s</code> and decrement for <code>t</code>. All entries must be 0.",
    complexity: { time: "O(n)", space: "O(1)" },
    code: {
      python: `def isAnagram(s: str, t: str) -> bool:
    if len(s) != len(t): return False
    count = [0] * 26
    for c1, c2 in zip(s, t):
        count[ord(c1) - ord('a')] += 1
        count[ord(c2) - ord('a')] -= 1
    return all(c == 0 for c in count)

print(isAnagram("anagram", "nagaram"))  # True`,
      java: `public class ValidAnagram {
    public static boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) return false;
        int[] count = new int[26];
        for (int i = 0; i < s.length(); i++) {
            count[s.charAt(i) - 'a']++;
            count[t.charAt(i) - 'a']--;
        }
        for (int c : count) if (c != 0) return false;
        return true;
    }

    public static void main(String[] args) {
        System.out.println(isAnagram("anagram", "nagaram")); // true
    }
}`,
      cpp: `#include <iostream>
#include <string>
#include <vector>
using namespace std;

bool isAnagram(string s, string t) {
    if (s.length() != t.length()) return false;
    vector<int> count(26, 0);
    for (size_t i = 0; i < s.length(); i++) {
        count[s[i] - 'a']++;
        count[t[i] - 'a']--;
    }
    for (int c : count) if (c != 0) return false;
    return true;
}

int main() {
    cout << (isAnagram("anagram", "nagaram") ? "true" : "false") << endl;
    return 0;
}`
    }
  },
  {
    id: "imp-str-3",
    title: "Group Anagrams",
    topic: "Strings",
    difficulty: "Medium",
    companies: ["Amazon", "Google", "Microsoft", "Uber"],
    importance: "Top Pick",
    tags: ["Hash Map", "Sorting", "Strings"],
    statement: "Given an array of strings <code>strs</code>, group the anagrams together. You can return the answer in any order.",
    examples: [
      {
        input: 'strs = ["eat", "tea", "tan", "ate", "nat", "bat"]',
        output: '[["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]',
        explanation: "Words that share identical character frequencies are grouped together."
      }
    ],
    approach: "Sort each word alphabetically to create a canonical key. Group words with identical keys in a hash map <code>map[sortedStr].push(originalStr)</code>.",
    complexity: { time: "O(n * k log k)", space: "O(n * k)" },
    code: {
      python: `from collections import defaultdict

def groupAnagrams(strs):
    groups = defaultdict(list)
    for s in strs:
        key = ''.join(sorted(s))
        groups[key].append(s)
    return list(groups.values())

print(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))`,
      java: `import java.util.*;

public class GroupAnagrams {
    public static List<List<String>> groupAnagrams(String[] strs) {
        Map<String, List<String>> map = new HashMap<>();
        for (String s : strs) {
            char[] ca = s.toCharArray();
            Arrays.sort(ca);
            String key = String.valueOf(ca);
            map.computeIfAbsent(key, k -> new ArrayList<>()).add(s);
        }
        return new ArrayList<>(map.values());
    }

    public static void main(String[] args) {
        String[] strs = {"eat", "tea", "tan", "ate", "nat", "bat"};
        System.out.println(groupAnagrams(strs));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <algorithm>
using namespace std;

vector<vector<string>> groupAnagrams(vector<string>& strs) {
    unordered_map<string, vector<string>> map;
    for (string s : strs) {
        string key = s;
        sort(key.begin(), key.end());
        map[key].push_back(s);
    }
    vector<vector<string>> result;
    for (auto& pair : map) result.push_back(pair.second);
    return result;
}

int main() {
    vector<string> strs = {"eat", "tea", "tan", "ate", "nat", "bat"};
    auto res = groupAnagrams(strs);
    for (auto& group : res) {
        cout << "[ ";
        for (auto& w : group) cout << w << " ";
        cout << "] ";
    }
    cout << endl;
    return 0;
}`
    }
  },

  // ==========================================
  // LINKED LISTS
  // ==========================================
  {
    id: "imp-ll-1",
    title: "Reverse a Linked List",
    topic: "Linked Lists",
    difficulty: "Easy",
    companies: ["Amazon", "Microsoft", "TCS", "Accenture", "Cognizant", "HCL"],
    importance: "Must Do",
    tags: ["Pointers", "Linked List", "Recursion"],
    statement: "Given the <code>head</code> of a singly linked list, reverse the list, and return the reversed list's head.",
    examples: [
      {
        input: "head = [1, 2, 3, 4, 5]",
        output: "[5, 4, 3, 2, 1]",
        explanation: "All next pointers are inverted."
      }
    ],
    approach: "Use three pointers: <code>prev = null</code>, <code>curr = head</code>, and <code>next = null</code>. Iteratively rewire <code>curr.next = prev</code>, then advance <code>prev = curr</code> and <code>curr = next</code>.",
    complexity: { time: "O(n)", space: "O(1)" },
    code: {
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reverseList(head):
    prev = None
    curr = head
    while curr:
        nxt = curr.next
        curr.next = prev
        prev = curr
        curr = nxt
    return prev`,
      java: `class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
}

public class ReverseList {
    public static ListNode reverseList(ListNode head) {
        ListNode prev = null;
        ListNode curr = head;
        while (curr != null) {
            ListNode next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }
}`,
      cpp: `struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

ListNode* reverseList(ListNode* head) {
    ListNode* prev = nullptr;
    ListNode* curr = head;
    while (curr) {
        ListNode* nxt = curr->next;
        curr->next = prev;
        prev = curr;
        curr = nxt;
    }
    return prev;
};`
    }
  },
  {
    id: "imp-ll-2",
    title: "Detect Cycle in Linked List (Floyd's Algorithm)",
    topic: "Linked Lists",
    difficulty: "Easy",
    companies: ["Amazon", "Microsoft", "Tech Mahindra", "Capgemini", "Infosys"],
    importance: "Must Do",
    tags: ["Floyd Tortoise & Hare", "Two Pointers", "Linked List"],
    statement: "Given <code>head</code>, the head of a linked list, determine if the linked list has a cycle in it. Return <code>true</code> if cycle exists, otherwise <code>false</code>.",
    examples: [
      {
        input: "head = [3, 2, 0, -4], pos = 1 (tail connects to node index 1)",
        output: "true",
        explanation: "There is a cycle in the linked list where tail points back to 2."
      }
    ],
    approach: "Floyd's Cycle-Finding Algorithm uses two pointers: <code>slow</code> moving 1 step and <code>fast</code> moving 2 steps. If a cycle exists, <code>fast</code> will catch up to <code>slow</code>.",
    complexity: { time: "O(n)", space: "O(1)" },
    code: {
      python: `def hasCycle(head):
    slow, fast = head, head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            return True
    return False`,
      java: `public class LinkedListCycle {
    public static boolean hasCycle(ListNode head) {
        ListNode slow = head, fast = head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) return true;
        }
        return false;
    }
}`,
      cpp: `bool hasCycle(ListNode* head) {
    ListNode *slow = head, *fast = head;
    while (fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
        if (slow == fast) return true;
    }
    return false;
}`
    }
  },
  {
    id: "imp-ll-3",
    title: "Merge Two Sorted Lists",
    topic: "Linked Lists",
    difficulty: "Easy",
    companies: ["Amazon", "TCS", "Accenture", "Microsoft", "Apple"],
    importance: "Must Do",
    tags: ["Two Pointers", "Linked List"],
    statement: "You are given the heads of two sorted linked lists <code>list1</code> and <code>list2</code>. Merge the two lists into one sorted list by splicing together the nodes of the first two lists.",
    examples: [
      {
        input: "list1 = [1, 2, 4], list2 = [1, 3, 4]",
        output: "[1, 1, 2, 3, 4, 4]",
        explanation: "Combined sorted linked list."
      }
    ],
    approach: "Create a dummy head node. Compare current values of list1 and list2, attach the smaller node to <code>tail.next</code>, and advance the chosen list. Attach the remainder when one list finishes.",
    complexity: { time: "O(n + m)", space: "O(1)" },
    code: {
      python: `def mergeTwoLists(list1, list2):
    dummy = ListNode(0)
    tail = dummy
    while list1 and list2:
        if list1.val < list2.val:
            tail.next = list1
            list1 = list1.next
        else:
            tail.next = list2
            list2 = list2.next
        tail = tail.next
    tail.next = list1 or list2
    return dummy.next`,
      java: `public class MergeSortedLists {
    public static ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        ListNode dummy = new ListNode(0);
        ListNode tail = dummy;
        while (l1 != null && l2 != null) {
            if (l1.val < l2.val) {
                tail.next = l1;
                l1 = l1.next;
            } else {
                tail.next = l2;
                l2 = l2.next;
            }
            tail = tail.next;
        }
        tail.next = (l1 != null) ? l1 : l2;
        return dummy.next;
    }
}`,
      cpp: `ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {
    ListNode dummy(0);
    ListNode* tail = &dummy;
    while (l1 && l2) {
        if (l1->val < l2->val) {
            tail->next = l1;
            l1 = l1->next;
        } else {
            tail->next = l2;
            l2 = l2->next;
        }
        tail = tail->next;
    }
    tail->next = l1 ? l1 : l2;
    return dummy.next;
}`
    }
  },

  // ==========================================
  // STACKS & QUEUES
  // ==========================================
  {
    id: "imp-sq-1",
    title: "Valid Parentheses",
    topic: "Stacks & Queues",
    difficulty: "Easy",
    companies: ["Amazon", "Google", "Facebook", "TCS", "Accenture", "Cognizant"],
    importance: "Must Do",
    tags: ["Stack", "Strings"],
    statement: "Given a string <code>s</code> containing just the characters <code>'('</code>, <code>')'</code>, <code>'{'</code>, <code>'}'</code>, <code>'['</code> and <code>']'</code>, determine if the input string is valid.<br>Open brackets must be closed by the same type and in correct order.",
    examples: [
      {
        input: 's = "()[]{}"',
        output: "true",
        explanation: "All pairs are correctly opened and closed."
      },
      {
        input: 's = "(]"',
        output: "false",
        explanation: "Mismatched closing bracket."
      }
    ],
    approach: "Use a Stack. Push expected closing bracket when opening bracket is encountered. If current character is closing, pop from stack and check for equality. Stack must be empty at the end.",
    complexity: { time: "O(n)", space: "O(n)" },
    code: {
      python: `def isValid(s: str) -> bool:
    stack = []
    mapping = {")": "(", "}": "{", "]": "["}
    for char in s:
        if char in mapping:
            top = stack.pop() if stack else '#'
            if mapping[char] != top:
                return False
        else:
            stack.append(char)
    return not stack

print(isValid("()[]{}"))  # True`,
      java: `import java.util.*;

public class ValidParentheses {
    public static boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();
        for (char c : s.toCharArray()) {
            if (c == '(') stack.push(')');
            else if (c == '{') stack.push('}');
            else if (c == '[') stack.push(']');
            else if (stack.isEmpty() || stack.pop() != c) return false;
        }
        return stack.isEmpty();
    }

    public static void main(String[] args) {
        System.out.println(isValid("()[]{}")); // true
    }
}`,
      cpp: `#include <iostream>
#include <stack>
#include <string>
using namespace std;

bool isValid(string s) {
    stack<char> st;
    for (char c : s) {
        if (c == '(') st.push(')');
        else if (c == '{') st.push('}');
        else if (c == '[') st.push(']');
        else {
            if (st.empty() || st.top() != c) return false;
            st.pop();
        }
    }
    return st.empty();
}

int main() {
    cout << (isValid("()[]{}") ? "true" : "false") << endl;
    return 0;
}`
    }
  },
  {
    id: "imp-sq-2",
    title: "Next Greater Element",
    topic: "Stacks & Queues",
    difficulty: "Medium",
    companies: ["Amazon", "Microsoft", "Goldman Sachs", "Flipkart"],
    importance: "Top Pick",
    tags: ["Monotonic Stack", "Arrays"],
    statement: "Given an array of integers <code>arr</code>, find the next greater element for each element. The next greater element of an element <code>x</code> is the first greater element to the right of <code>x</code>. If it does not exist, return -1.",
    examples: [
      {
        input: "arr = [4, 5, 2, 25]",
        output: "[5, 25, 25, -1]",
        explanation: "For 4 -> 5, for 5 -> 25, for 2 -> 25, for 25 -> -1."
      }
    ],
    approach: "Use a Monotonic Decreasing Stack. Traverse from right to left. While stack is not empty and top is less than or equal to current element, pop. If stack has elements left, top is the answer, else -1. Push current element.",
    complexity: { time: "O(n)", space: "O(n)" },
    code: {
      python: `def nextGreaterElements(arr):
    n = len(arr)
    res = [-1] * n
    stack = []
    for i in range(n - 1, -1, -1):
        while stack and stack[-1] <= arr[i]:
            stack.pop()
        if stack:
            res[i] = stack[-1]
        stack.append(arr[i])
    return res

print(nextGreaterElements([4, 5, 2, 25]))  # [5, 25, 25, -1]`,
      java: `import java.util.*;

public class NextGreater {
    public static int[] nextGreaterElements(int[] arr) {
        int n = arr.length;
        int[] res = new int[n];
        Stack<Integer> stack = new Stack<>();
        for (int i = n - 1; i >= 0; i--) {
            while (!stack.isEmpty() && stack.peek() <= arr[i]) {
                stack.pop();
            }
            res[i] = stack.isEmpty() ? -1 : stack.peek();
            stack.push(arr[i]);
        }
        return res;
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(nextGreaterElements(new int[]{4, 5, 2, 25})));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <stack>
using namespace std;

vector<int> nextGreaterElements(vector<int>& arr) {
    int n = arr.size();
    vector<int> res(n, -1);
    stack<int> st;
    for (int i = n - 1; i >= 0; i--) {
        while (!st.empty() && st.top() <= arr[i]) st.pop();
        if (!st.empty()) res[i] = st.top();
        st.push(arr[i]);
    }
    return res;
}

int main() {
    vector<int> arr = {4, 5, 2, 25};
    vector<int> res = nextGreaterElements(arr);
    for (int x : res) cout << x << " ";
    cout << endl; // 5 25 25 -1
    return 0;
}`
    }
  },

  // ==========================================
  // TREES & BST
  // ==========================================
  {
    id: "imp-tr-1",
    title: "Maximum Depth of Binary Tree",
    topic: "Trees & BST",
    difficulty: "Easy",
    companies: ["Amazon", "Microsoft", "TCS", "Accenture", "Google"],
    importance: "Must Do",
    tags: ["DFS", "Recursion", "Binary Tree"],
    statement: "Given the <code>root</code> of a binary tree, return its maximum depth.<br>A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.",
    examples: [
      {
        input: "root = [3, 9, 20, null, null, 15, 7]",
        output: "3",
        explanation: "Path: 3 -> 20 -> 15 (depth 3)."
      }
    ],
    approach: "Recursive Depth-First Search: <code>maxDepth(root) = 1 + max(maxDepth(root.left), maxDepth(root.right))</code> with base case <code>root == null -> 0</code>.",
    complexity: { time: "O(n)", space: "O(h) where h is height" },
    code: {
      python: `def maxDepth(root):
    if not root:
        return 0
    return 1 + max(maxDepth(root.left), maxDepth(root.right))`,
      java: `public class MaxDepthTree {
    public static int maxDepth(TreeNode root) {
        if (root == null) return 0;
        return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
    }
}`,
      cpp: `int maxDepth(TreeNode* root) {
    if (!root) return 0;
    return 1 + max(maxDepth(root->left), maxDepth(root->right));
}`
    }
  },
  {
    id: "imp-tr-2",
    title: "Invert / Flip Binary Tree",
    topic: "Trees & BST",
    difficulty: "Easy",
    companies: ["Google", "Amazon", "Twitter", "Capgemini"],
    importance: "Must Do",
    tags: ["Recursion", "Binary Tree", "DFS"],
    statement: "Given the <code>root</code> of a binary tree, invert the tree (swap left and right child of every node), and return its root.",
    examples: [
      {
        input: "root = [4, 2, 7, 1, 3, 6, 9]",
        output: "[4, 7, 2, 9, 6, 3, 1]",
        explanation: "Every sub-tree's left and right pointers are mirrored."
      }
    ],
    approach: "Recursively swap the left and right pointers of the current node, then recursively call invert on both children.",
    complexity: { time: "O(n)", space: "O(h)" },
    code: {
      python: `def invertTree(root):
    if not root:
        return None
    root.left, root.right = invertTree(root.right), invertTree(root.left)
    return root`,
      java: `public class InvertTree {
    public static TreeNode invertTree(TreeNode root) {
        if (root == null) return null;
        TreeNode left = invertTree(root.left);
        TreeNode right = invertTree(root.right);
        root.left = right;
        root.right = left;
        return root;
    }
}`,
      cpp: `TreeNode* invertTree(TreeNode* root) {
    if (!root) return nullptr;
    TreeNode* left = invertTree(root->left);
    TreeNode* right = invertTree(root->right);
    root->left = right;
    root->right = left;
    return root;
}`
    }
  },
  {
    id: "imp-tr-3",
    title: "Lowest Common Ancestor (LCA) in BST",
    topic: "Trees & BST",
    difficulty: "Medium",
    companies: ["Amazon", "Microsoft", "Facebook", "Adobe"],
    importance: "Top Pick",
    tags: ["BST", "Recursion", "Binary Search"],
    statement: "Given a Binary Search Tree (BST), find the lowest common ancestor (LCA) node of two given nodes <code>p</code> and <code>q</code>.<br>The LCA is defined as the lowest node in T that has both p and q as descendants.",
    examples: [
      {
        input: "root = [6, 2, 8, 0, 4, 7, 9], p = 2, q = 8",
        output: "6",
        explanation: "LCA of 2 and 8 is root node 6."
      }
    ],
    approach: "Leverage BST property: If both <code>p</code> and <code>q</code> are smaller than <code>root.val</code>, move to left subtree. If both are greater, move to right subtree. Otherwise, current root is the split point (LCA).",
    complexity: { time: "O(h)", space: "O(1) iterative" },
    code: {
      python: `def lowestCommonAncestor(root, p, q):
    curr = root
    while curr:
        if p.val < curr.val and q.val < curr.val:
            curr = curr.left
        elif p.val > curr.val and q.val > curr.val:
            curr = curr.right
        else:
            return curr
    return None`,
      java: `public class LCABST {
    public static TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        TreeNode curr = root;
        while (curr != null) {
            if (p.val < curr.val && q.val < curr.val) curr = curr.left;
            else if (p.val > curr.val && q.val > curr.val) curr = curr.right;
            else return curr;
        }
        return null;
    }
}`,
      cpp: `TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
    TreeNode* curr = root;
    while (curr) {
        if (p->val < curr->val && q->val < curr->val) curr = curr->left;
        else if (p->val > curr->val && q->val > curr->val) curr = curr->right;
        else return curr;
    }
    return nullptr;
}`
    }
  },

  // ==========================================
  // DYNAMIC PROGRAMMING
  // ==========================================
  {
    id: "imp-dp-1",
    title: "Climbing Stairs",
    topic: "Dynamic Programming",
    difficulty: "Easy",
    companies: ["Amazon", "Adobe", "TCS", "Accenture", "Cognizant"],
    importance: "Must Do",
    tags: ["Fibonacci", "DP", "Memoization"],
    statement: "You are climbing a staircase. It takes <code>n</code> steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
    examples: [
      {
        input: "n = 3",
        output: "3",
        explanation: "1+1+1, 1+2, 2+1."
      }
    ],
    approach: "Base cases: 1 step = 1 way, 2 steps = 2 ways. For step <code>n</code>, you could have reached from <code>n-1</code> (1 step) or <code>n-2</code> (2 steps). Therefore <code>ways(n) = ways(n-1) + ways(n-2)</code> (Fibonacci).",
    complexity: { time: "O(n)", space: "O(1)" },
    code: {
      python: `def climbStairs(n: int) -> int:
    if n <= 2: return n
    prev2, prev1 = 1, 2
    for _ in range(3, n + 1):
        curr = prev1 + prev2
        prev2 = prev1
        prev1 = curr
    return prev1

print(climbStairs(3))  # 3`,
      java: `public class ClimbingStairs {
    public static int climbStairs(int n) {
        if (n <= 2) return n;
        int prev2 = 1, prev1 = 2;
        for (int i = 3; i <= n; i++) {
            int curr = prev1 + prev2;
            prev2 = prev1;
            prev1 = curr;
        }
        return prev1;
    }

    public static void main(String[] args) {
        System.out.println(climbStairs(3)); // 3
    }
}`,
      cpp: `#include <iostream>
using namespace std;

int climbStairs(int n) {
    if (n <= 2) return n;
    int prev2 = 1, prev1 = 2;
    for (int i = 3; i <= n; i++) {
        int curr = prev1 + prev2;
        prev2 = prev1;
        prev1 = curr;
    }
    return prev1;
}

int main() {
    cout << climbStairs(3) << endl; // 3
    return 0;
}`
    }
  },
  {
    id: "imp-dp-2",
    title: "Coin Change (Minimum Coins)",
    topic: "Dynamic Programming",
    difficulty: "Medium",
    companies: ["Amazon", "Microsoft", "Goldman Sachs", "Google", "Flipkart"],
    importance: "Must Do",
    tags: ["DP", "Knapsack Pattern", "Optimization"],
    statement: "You are given an integer array <code>coins</code> representing coins of different denominations and an integer <code>amount</code> representing a total amount of money.<br>Return the fewest number of coins that you need to make up that amount. If that amount cannot be made up, return -1.",
    examples: [
      {
        input: "coins = [1, 2, 5], amount = 11",
        output: "3",
        explanation: "11 = 5 + 5 + 1 (3 coins)."
      }
    ],
    approach: "Bottom-up 1D DP: <code>dp[i]</code> = minimum coins for amount <code>i</code>. Initialize with <code>infinity</code> and <code>dp[0] = 0</code>. For each coin, update <code>dp[i] = min(dp[i], dp[i - coin] + 1)</code>.",
    complexity: { time: "O(amount * coins.length)", space: "O(amount)" },
    code: {
      python: `def coinChange(coins, amount):
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0
    for coin in coins:
        for i in range(coin, amount + 1):
            dp[i] = min(dp[i], dp[i - coin] + 1)
    return dp[amount] if dp[amount] != float('inf') else -1

print(coinChange([1, 2, 5], 11))  # 3`,
      java: `import java.util.Arrays;

public class CoinChange {
    public static int coinChange(int[] coins, int amount) {
        int[] dp = new int[amount + 1];
        Arrays.fill(dp, amount + 1);
        dp[0] = 0;
        for (int coin : coins) {
            for (int i = coin; i <= amount; i++) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
        return dp[amount] > amount ? -1 : dp[amount];
    }

    public static void main(String[] args) {
        System.out.println(coinChange(new int[]{1, 2, 5}, 11)); // 3
    }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int coinChange(vector<int>& coins, int amount) {
    vector<int> dp(amount + 1, amount + 1);
    dp[0] = 0;
    for (int coin : coins) {
        for (int i = coin; i <= amount; i++) {
            dp[i] = min(dp[i], dp[i - coin] + 1);
        }
    }
    return dp[amount] > amount ? -1 : dp[amount];
}

int main() {
    vector<int> coins = {1, 2, 5};
    cout << coinChange(coins, 11) << endl; // 3
    return 0;
}`
    }
  },
  {
    id: "imp-dp-3",
    title: "0/1 Knapsack Problem",
    topic: "Dynamic Programming",
    difficulty: "Medium",
    companies: ["Amazon", "Microsoft", "Samsung", "TCS", "Accenture"],
    importance: "Must Do",
    tags: ["0/1 Knapsack", "DP", "Optimization"],
    statement: "Given weights and values of <code>n</code> items, put these items in a knapsack of capacity <code>W</code> to get the maximum total value in the knapsack. Each item can be picked at most once.",
    examples: [
      {
        input: "val = [60, 100, 120], wt = [10, 20, 30], W = 50",
        output: "220",
        explanation: "Pick items 2 and 3 (weights 20 + 30 = 50, value 100 + 120 = 220)."
      }
    ],
    approach: "Use 1D DP array of size <code>W + 1</code>. Traverse backwards from <code>W</code> down to <code>wt[i]</code> to avoid reusing the same item: <code>dp[w] = max(dp[w], dp[w - wt[i]] + val[i])</code>.",
    complexity: { time: "O(n * W)", space: "O(W)" },
    code: {
      python: `def knapsack(W, wt, val, n):
    dp = [0] * (W + 1)
    for i in range(n):
        for w in range(W, wt[i] - 1, -1):
            dp[w] = max(dp[w], dp[w - wt[i]] + val[i])
    return dp[W]

print(knapsack(50, [10, 20, 30], [60, 100, 120], 3))  # 220`,
      java: `public class Knapsack {
    public static int knapSack(int W, int[] wt, int[] val, int n) {
        int[] dp = new int[W + 1];
        for (int i = 0; i < n; i++) {
            for (int w = W; w >= wt[i]; w--) {
                dp[w] = Math.max(dp[w], dp[w - wt[i]] + val[i]);
            }
        }
        return dp[W];
    }

    public static void main(String[] args) {
        int[] val = {60, 100, 120};
        int[] wt = {10, 20, 30};
        System.out.println(knapSack(50, wt, val, 3)); // 220
    }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int knapSack(int W, vector<int>& wt, vector<int>& val, int n) {
    vector<int> dp(W + 1, 0);
    for (int i = 0; i < n; i++) {
        for (int w = W; w >= wt[i]; w--) {
            dp[w] = max(dp[w], dp[w - wt[i]] + val[i]);
        }
    }
    return dp[W];
}

int main() {
    vector<int> val = {60, 100, 120};
    vector<int> wt = {10, 20, 30};
    cout << knapSack(50, wt, val, 3) << endl; // 220
    return 0;
}`
    }
  },

  // ==========================================
  // SEARCHING & SORTING
  // ==========================================
  {
    id: "imp-ss-1",
    title: "Binary Search",
    topic: "Searching & Sorting",
    difficulty: "Easy",
    companies: ["TCS", "Infosys", "Cognizant", "Accenture", "Microsoft", "Google"],
    importance: "Must Do",
    tags: ["Binary Search", "Two Pointers"],
    statement: "Given an array of integers <code>nums</code> which is sorted in ascending order, and an integer <code>target</code>, write a function to search target in nums. If target exists, return its index; otherwise, return -1.",
    examples: [
      {
        input: "nums = [-1, 0, 3, 5, 9, 12], target = 9",
        output: "4",
        explanation: "9 exists in nums and its index is 4."
      }
    ],
    approach: "Maintain <code>left</code> and <code>right</code> pointers. Compute middle index <code>mid = left + (right - left) // 2</code> to prevent integer overflow. Halve the search space based on whether target is greater or less than <code>nums[mid]</code>.",
    complexity: { time: "O(log n)", space: "O(1)" },
    code: {
      python: `def search(nums, target):
    left, right = 0, len(nums) - 1
    while left <= right:
        mid = left + (right - left) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1

print(search([-1, 0, 3, 5, 9, 12], 9))  # 4`,
      java: `public class BinarySearch {
    public static int search(int[] nums, int target) {
        int left = 0, right = nums.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (nums[mid] == target) return mid;
            else if (nums[mid] < target) left = mid + 1;
            else right = mid - 1;
        }
        return -1;
    }

    public static void main(String[] args) {
        System.out.println(search(new int[]{-1, 0, 3, 5, 9, 12}, 9)); // 4
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int search(vector<int>& nums, int target) {
    int left = 0, right = nums.size() - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] == target) return mid;
        else if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

int main() {
    vector<int> nums = {-1, 0, 3, 5, 9, 12};
    cout << search(nums, 9) << endl; // 4
    return 0;
}`
    }
  },
  {
    id: "imp-ss-2",
    title: "Search in Rotated Sorted Array",
    topic: "Searching & Sorting",
    difficulty: "Medium",
    companies: ["Amazon", "Microsoft", "Google", "Facebook", "LinkedIn"],
    importance: "Top Pick",
    tags: ["Binary Search", "Modified Binary Search"],
    statement: "Given a sorted array of distinct values rotated at an unknown pivot, and a target value, return the index of target if it is in the array, or -1 if not. Must be O(log n).",
    examples: [
      {
        input: "nums = [4, 5, 6, 7, 0, 1, 2], target = 0",
        output: "4",
        explanation: "0 is located at index 4."
      }
    ],
    approach: "In a rotated sorted array, at least one half (left or right) is ALWAYS strictly sorted. Determine which half is sorted, then check if target falls inside that sorted range. If yes, search there; otherwise search the other half.",
    complexity: { time: "O(log n)", space: "O(1)" },
    code: {
      python: `def searchRotated(nums, target):
    left, right = 0, len(nums) - 1
    while left <= right:
        mid = left + (right - left) // 2
        if nums[mid] == target:
            return mid
        # Check if left half is sorted
        if nums[left] <= nums[mid]:
            if nums[left] <= target < nums[mid]:
                right = mid - 1
            else:
                left = mid + 1
        # Otherwise right half is sorted
        else:
            if nums[mid] < target <= nums[right]:
                left = mid + 1
            else:
                right = mid - 1
    return -1

print(searchRotated([4, 5, 6, 7, 0, 1, 2], 0))  # 4`,
      java: `public class RotatedSortedSearch {
    public static int search(int[] nums, int target) {
        int left = 0, right = nums.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (nums[mid] == target) return mid;
            if (nums[left] <= nums[mid]) {
                if (nums[left] <= target && target < nums[mid]) right = mid - 1;
                else left = mid + 1;
            } else {
                if (nums[mid] < target && target <= nums[right]) left = mid + 1;
                else right = mid - 1;
            }
        }
        return -1;
    }

    public static void main(String[] args) {
        System.out.println(search(new int[]{4, 5, 6, 7, 0, 1, 2}, 0)); // 4
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int search(vector<int>& nums, int target) {
    int left = 0, right = nums.size() - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] == target) return mid;
        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) right = mid - 1;
            else left = mid + 1;
        } else {
            if (nums[mid] < target && target <= nums[right]) left = mid + 1;
            else right = mid - 1;
        }
    }
    return -1;
}

int main() {
    vector<int> nums = {4, 5, 6, 7, 0, 1, 2};
    cout << search(nums, 0) << endl; // 4
    return 0;
}`
    }
  },

  // ==========================================
  // GRAPHS
  // ==========================================
  {
    id: "imp-gr-1",
    title: "Number of Islands",
    topic: "Graphs",
    difficulty: "Medium",
    companies: ["Amazon", "Microsoft", "Google", "Bloomberg", "Uber"],
    importance: "Must Do",
    tags: ["BFS", "DFS", "Matrix", "Connected Components"],
    statement: "Given an <code>m x n</code> 2D binary grid <code>grid</code> which represents a map of '1's (land) and '0's (water), return the number of islands.<br>An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.",
    examples: [
      {
        input: 'grid = [\n  ["1","1","0","0","0"],\n  ["1","1","0","0","0"],\n  ["0","0","1","0","0"],\n  ["0","0","0","1","1"]\n]',
        output: "3",
        explanation: "There are three distinct connected islands."
      }
    ],
    approach: "Traverse each cell of the grid. When a '1' is encountered, increment island count and perform DFS or BFS to sink/flood-fill all connected land cells by turning them into '0'.",
    complexity: { time: "O(m * n)", space: "O(m * n)" },
    code: {
      python: `def numIslands(grid):
    if not grid: return 0
    rows, cols = len(grid), len(grid[0])
    count = 0

    def dfs(r, c):
        if r < 0 or r >= rows or c < 0 or c >= cols or grid[r][c] != '1':
            return
        grid[r][c] = '0' # mark visited
        dfs(r + 1, c)
        dfs(r - 1, c)
        dfs(r, c + 1)
        dfs(r, c - 1)

    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == '1':
                count += 1
                dfs(r, c)
    return count`,
      java: `public class NumberOfIslands {
    public static int numIslands(char[][] grid) {
        if (grid == null || grid.length == 0) return 0;
        int count = 0;
        for (int r = 0; r < grid.length; r++) {
            for (int c = 0; c < grid[0].length; c++) {
                if (grid[r][c] == '1') {
                    count++;
                    dfs(grid, r, c);
                }
            }
        }
        return count;
    }

    private static void dfs(char[][] grid, int r, int c) {
        if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length || grid[r][c] != '1') return;
        grid[r][c] = '0';
        dfs(grid, r + 1, c);
        dfs(grid, r - 1, c);
        dfs(grid, r, c + 1);
        dfs(grid, r, c - 1);
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

void dfs(vector<vector<char>>& grid, int r, int c) {
    if (r < 0 || r >= grid.size() || c < 0 || c >= grid[0].size() || grid[r][c] != '1') return;
    grid[r][c] = '0';
    dfs(grid, r + 1, c);
    dfs(grid, r - 1, c);
    dfs(grid, r, c + 1);
    dfs(grid, r, c - 1);
}

int numIslands(vector<vector<char>>& grid) {
    int count = 0;
    for (int r = 0; r < grid.size(); r++) {
        for (int c = 0; c < grid[0].size(); c++) {
            if (grid[r][c] == '1') {
                count++;
                dfs(grid, r, c);
            }
        }
    }
    return count;
}`
    }
  },

  // ==========================================
  // RECURSION & BACKTRACKING
  // ==========================================
  {
    id: "imp-rec-1",
    title: "Subsets (Power Set)",
    topic: "Recursion & Backtracking",
    difficulty: "Medium",
    companies: ["Amazon", "Google", "Facebook", "Microsoft"],
    importance: "Top Pick",
    tags: ["Backtracking", "Bit Manipulation"],
    statement: "Given an integer array <code>nums</code> of unique elements, return all possible subsets (the power set). The solution set must not contain duplicate subsets. Return the solution in any order.",
    examples: [
      {
        input: "nums = [1, 2, 3]",
        output: "[[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]",
        explanation: "All 2^3 = 8 subsets."
      }
    ],
    approach: "Standard backtracking: at each recursive step, record the current subset. Loop from <code>start</code> to <code>n-1</code>, include <code>nums[i]</code>, recurse to <code>i + 1</code>, and backtrack by popping the element.",
    complexity: { time: "O(n * 2^n)", space: "O(n)" },
    code: {
      python: `def subsets(nums):
    result = []
    def backtrack(start, current):
        result.append(list(current))
        for i in range(start, len(nums)):
            current.append(nums[i])
            backtrack(i + 1, current)
            current.pop()
    backtrack(0, [])
    return result

print(subsets([1, 2, 3]))`,
      java: `import java.util.*;

public class PowerSet {
    public static List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        backtrack(nums, 0, new ArrayList<>(), result);
        return result;
    }

    private static void backtrack(int[] nums, int start, List<Integer> curr, List<List<Integer>> result) {
        result.add(new ArrayList<>(curr));
        for (int i = start; i < nums.length; i++) {
            curr.add(nums[i]);
            backtrack(nums, i + 1, curr, result);
            curr.remove(curr.size() - 1);
        }
    }

    public static void main(String[] args) {
        System.out.println(subsets(new int[]{1, 2, 3}));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

void backtrack(vector<int>& nums, int start, vector<int>& curr, vector<vector<int>>& result) {
    result.push_back(curr);
    for (int i = start; i < nums.size(); i++) {
        curr.push_back(nums[i]);
        backtrack(nums, i + 1, curr, result);
        curr.pop_back();
    }
}

vector<vector<int>> subsets(vector<int>& nums) {
    vector<vector<int>> result;
    vector<int> curr;
    backtrack(nums, 0, curr, result);
    return result;
}

int main() {
    vector<int> nums = {1, 2, 3};
    auto res = subsets(nums);
    cout << "Total subsets: " << res.size() << endl; // 8
    return 0;
}`
    }
  },
  {
    id: "imp-rec-2",
    title: "N-Queens Problem",
    topic: "Recursion & Backtracking",
    difficulty: "Hard",
    companies: ["Amazon", "Google", "Microsoft", "Directi"],
    importance: "Top Pick",
    tags: ["Backtracking", "Recursion"],
    statement: "The n-queens puzzle is the problem of placing <code>n</code> queens on an <code>n x n</code> chessboard such that no two queens attack each other.<br>Return all distinct solutions to the n-queens puzzle.",
    examples: [
      {
        input: "n = 4",
        output: '[[".Q..","...Q","Q...","..Q."], ["..Q.","Q...","...Q",".Q.."]]',
        explanation: "Two distinct 4-queen configurations."
      }
    ],
    approach: "Place queens row-by-row. Maintain three sets to track attacked columns (<code>cols</code>), positive diagonals (<code>r + c</code>), and negative diagonals (<code>r - c</code>). If a column is safe, place queen and advance to next row.",
    complexity: { time: "O(n!)", space: "O(n)" },
    code: {
      python: `def solveNQueens(n):
    res = []
    board = [["."] * n for _ in range(n)]
    cols = set()
    pos_diag = set() # (r + c)
    neg_diag = set() # (r - c)

    def backtrack(r):
        if r == n:
            res.append(["".join(row) for row in board])
            return
        for c in range(n):
            if c in cols or (r + c) in pos_diag or (r - c) in neg_diag:
                continue
            cols.add(c)
            pos_diag.add(r + c)
            neg_diag.add(r - c)
            board[r][c] = "Q"

            backtrack(r + 1)

            cols.remove(c)
            pos_diag.remove(r + c)
            neg_diag.remove(r - c)
            board[r][c] = "."

    backtrack(0)
    return res

print(len(solveNQueens(4)))  # 2`,
      java: `import java.util.*;

public class NQueens {
    public static List<List<String>> solveNQueens(int n) {
        List<List<String>> res = new ArrayList<>();
        char[][] board = new char[n][n];
        for (char[] row : board) Arrays.fill(row, '.');
        Set<Integer> cols = new HashSet<>();
        Set<Integer> d1 = new HashSet<>();
        Set<Integer> d2 = new HashSet<>();
        backtrack(0, n, board, cols, d1, d2, res);
        return res;
    }

    private static void backtrack(int r, int n, char[][] b, Set<Integer> cols, Set<Integer> d1, Set<Integer> d2, List<List<String>> res) {
        if (r == n) {
            List<String> list = new ArrayList<>();
            for (char[] row : b) list.add(new String(row));
            res.add(list);
            return;
        }
        for (int c = 0; c < n; c++) {
            if (cols.contains(c) || d1.contains(r + c) || d2.contains(r - c)) continue;
            cols.add(c); d1.add(r + c); d2.add(r - c);
            b[r][c] = 'Q';
            backtrack(r + 1, n, b, cols, d1, d2, res);
            cols.remove(c); d1.remove(r + c); d2.remove(r - c);
            b[r][c] = '.';
        }
    }

    public static void main(String[] args) {
        System.out.println(solveNQueens(4).size()); // 2
    }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <string>
#include <unordered_set>
using namespace std;

void backtrack(int r, int n, vector<string>& board, unordered_set<int>& cols,
               unordered_set<int>& d1, unordered_set<int>& d2, vector<vector<string>>& res) {
    if (r == n) {
        res.push_back(board);
        return;
    }
    for (int c = 0; c < n; c++) {
        if (cols.count(c) || d1.count(r + c) || d2.count(r - c)) continue;
        cols.insert(c); d1.insert(r + c); d2.insert(r - c);
        board[r][c] = 'Q';
        backtrack(r + 1, n, board, cols, d1, d2, res);
        cols.erase(c); d1.erase(r + c); d2.erase(r - c);
        board[r][c] = '.';
    }
}

vector<vector<string>> solveNQueens(int n) {
    vector<vector<string>> res;
    vector<string> board(n, string(n, '.'));
    unordered_set<int> cols, d1, d2;
    backtrack(0, n, board, cols, d1, d2, res);
    return res;
}

int main() {
    auto res = solveNQueens(4);
    cout << res.size() << endl; // 2
    return 0;
}`
    }
  },

  // ==========================================
  // MATH & BIT MANIPULATION
  // ==========================================
  {
    id: "imp-bm-1",
    title: "Single Number (XOR Property)",
    topic: "Math & Bit Manipulation",
    difficulty: "Easy",
    companies: ["Amazon", "TCS", "Accenture", "Cognizant", "Microsoft"],
    importance: "Must Do",
    tags: ["Bit Manipulation", "XOR"],
    statement: "Given a non-empty array of integers <code>nums</code>, every element appears twice except for one. Find that single one.<br>Must implement in linear runtime complexity and use only constant extra space.",
    examples: [
      {
        input: "nums = [4, 1, 2, 1, 2]",
        output: "4",
        explanation: "All elements cancel out via XOR except 4."
      }
    ],
    approach: "XOR properties: <code>a ^ a = 0</code> and <code>a ^ 0 = a</code>. XOR-ing all elements together eliminates paired numbers, leaving only the unique element.",
    complexity: { time: "O(n)", space: "O(1)" },
    code: {
      python: `def singleNumber(nums):
    result = 0
    for num in nums:
        result ^= num
    return result

print(singleNumber([4, 1, 2, 1, 2]))  # 4`,
      java: `public class SingleNumber {
    public static int singleNumber(int[] nums) {
        int result = 0;
        for (int num : nums) result ^= num;
        return result;
    }

    public static void main(String[] args) {
        System.out.println(singleNumber(new int[]{4, 1, 2, 1, 2})); // 4
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int singleNumber(vector<int>& nums) {
    int result = 0;
    for (int num : nums) result ^= num;
    return result;
}

int main() {
    vector<int> nums = {4, 1, 2, 1, 2};
    cout << singleNumber(nums) << endl; // 4
    return 0;
}`
    }
  },
  {
    id: "imp-bm-2",
    title: "Number of 1 Bits (Hamming Weight)",
    topic: "Math & Bit Manipulation",
    difficulty: "Easy",
    companies: ["Apple", "Microsoft", "TCS", "Wipro", "Infosys"],
    importance: "Must Do",
    tags: ["Bit Manipulation", "Brian Kernighan"],
    statement: "Write a function that takes the binary representation of a positive integer and returns the number of set bits it has (also known as the Hamming weight).",
    examples: [
      {
        input: "n = 11 (binary 1011)",
        output: "3",
        explanation: "Binary string has three set bits ('1')."
      }
    ],
    approach: "Brian Kernighan's Algorithm: <code>n = n & (n - 1)</code> flips the lowest set bit to 0 in each iteration. The loop runs exactly as many times as there are set bits.",
    complexity: { time: "O(k) where k is set bits", space: "O(1)" },
    code: {
      python: `def hammingWeight(n: int) -> int:
    count = 0
    while n:
        n &= (n - 1)
        count += 1
    return count

print(hammingWeight(11))  # 3`,
      java: `public class HammingWeight {
    public static int hammingWeight(int n) {
        int count = 0;
        while (n != 0) {
            n &= (n - 1);
            count++;
        }
        return count;
    }

    public static void main(String[] args) {
        System.out.println(hammingWeight(11)); // 3
    }
}`,
      cpp: `#include <iostream>
using namespace std;

int hammingWeight(uint32_t n) {
    int count = 0;
    while (n) {
        n &= (n - 1);
        count++;
    }
    return count;
}

int main() {
    cout << hammingWeight(11) << endl; // 3
    return 0;
}`
    }
  }
];
