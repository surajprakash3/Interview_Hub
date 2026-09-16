/**
 * QUESTIONS_DATA — All MNC Coding Questions
 * Companies: Accenture, Capgemini, Cognizant, Tech Mahindra, TCS, HCL
 */
const QUESTIONS_DATA = [
  // ═══════════════════════════════════════════════
  // ACCENTURE
  // ═══════════════════════════════════════════════
  {
    id: 'accenture',
    name: 'Accenture',
    icon: '<i class="ri-rocket-2-fill"></i>',
    color: 'linear-gradient(135deg, #A100FF, #7B00CC)',
    description: 'Coding questions from Accenture recruitment drives including Hirepro assessments.',
    tags: ['Arrays', 'Strings', 'Math', 'DP', 'BFS'],
    questions: [
      // Q1
      {
        title: 'Smallest Number in Array',
        problem: `Write a program to find the smallest number in a given array of integers. The first line of the input will be an integer indicating how many array elements are being input. If we let n denote this number, the following n lines of input will have one integer each.\n\n(2022 Hirepro)\nSample Input:\n3\n2\n10\n-1\nOutput:\n-1`,
        examples: [
          { input: '3\\n2\\n10\\n-1', output: '-1', explanation: 'Among 2, 10, -1, the smallest is -1.' }
        ],
        solutions: {
          cpp: `#include <iostream>
#include <limits.h>
using namespace std;
int main() {
    int n;
    cin >> n;
    int min_num = INT_MAX;
    for (int i = 0; i < n; ++i) {
        int num;
        cin >> num;
        if (num < min_num) {
            min_num = num;
        }
    }
    cout << min_num << endl;
    return 0;
}`,
          java: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        int min_num = Integer.MAX_VALUE;
        for (int i = 0; i < n; ++i) {
            int num = scanner.nextInt();
            if (num < min_num) {
                min_num = num;
            }
        }
        System.out.println(min_num);
    }
}`,
          python: `n = int(input())
min_num = float('inf')
for _ in range(n):
    num = int(input())
    if num < min_num:
        min_num = num
print(min_num)`
        }
      },
      // Q2
      {
        title: 'Max Cake Pieces',
        problem: `Given N cuts, find the maximum number of pieces a cake can be divided into. The result should be modulo 1000000007.`,
        examples: [
          { input: '3', output: '7', explanation: 'With 3 cuts, max pieces = (3*(3+1))/2 + 1 = 7.' }
        ],
        solutions: {
          cpp: `#include <iostream>
using namespace std;
const int MOD = 1000000007;
int maxCakePieces(int N) {
    long long n = N;
    long long pieces = ((n * (n + 1)) / 2) + 1;
    return pieces % MOD;
}
int main() {
    int N;
    cin >> N;
    cout << maxCakePieces(N) << endl;
    return 0;
}`,
          java: `import java.util.Scanner;
public class Main {
    static final int MOD = 1000000007;
    public static int maxCakePieces(int N) {
        long n = N;
        long pieces = ((n * (n + 1)) / 2) + 1;
        return (int)(pieces % MOD);
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        System.out.println(maxCakePieces(N));
    }
}`,
          python: `def max_cake_pieces(N):
    MOD = 10**9 + 7
    pieces = (N * (N + 1)) // 2 + 1
    return pieces % MOD

N = int(input())
print(max_cake_pieces(N))`
        }
      },
      // Q3
      {
        title: 'Regions on a Plane',
        problem: `Mr. Professor is a great scientist, but he is not able to find a solution to one problem. There are N straight lines that are not parallel, and no three lines go through the same point. The lines divide the plane into M regions. Write a function to find out the maximum number of such regions he can get on the plane.\n\nInput Specification:\ninput1: An integer N representing the number of straight lines (0 <= N <= 100)\nOutput Specification:\nReturn the maximum number of regions.`,
        examples: [
          { input: '3', output: '7', explanation: 'With 3 non-parallel lines, max regions = (3*(3+1))/2 + 1 = 7.' }
        ],
        solutions: {
          cpp: `#include <iostream>
using namespace std;
int maxRegions(int N) {
    return (N * (N + 1)) / 2 + 1;
}
int main() {
    int N;
    cin >> N;
    cout << maxRegions(N) << endl;
    return 0;
}`,
          java: `import java.util.Scanner;
public class Main {
    public static int maxRegions(int N) {
        return (N * (N + 1)) / 2 + 1;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        System.out.println(maxRegions(N));
    }
}`,
          python: `def max_regions(N):
    return (N * (N + 1)) // 2 + 1

N = int(input())
print(max_regions(N))`
        }
      },
      // Q4
      {
        title: 'Sum of Odd Integers in Array',
        problem: `Write a function to calculate the sum of all odd integers in a given array.`,
        examples: [
          { input: '5\\n1 2 3 4 5', output: '9', explanation: 'Odd numbers: 1, 3, 5. Sum = 9.' }
        ],
        solutions: {
          cpp: `#include <iostream>
using namespace std;
int SumOddIntegers(int arr[], int n) {
    int sum = 0;
    for(int i = 0; i < n; ++i) {
        if (arr[i] % 2 != 0) {
            sum += arr[i];
        }
    }
    return sum;
}
int main() {
    int n;
    cin >> n;
    int arr[n];
    for(int i = 0; i < n; ++i) {
        cin >> arr[i];
    }
    cout << SumOddIntegers(arr, n) << endl;
    return 0;
}`,
          java: `import java.util.Scanner;
public class SumOddIntegers {
    public static int sumOddIntegers(int[] arr, int n) {
        int sum = 0;
        for(int i = 0; i < n; i++) {
            if (arr[i] % 2 != 0) {
                sum += arr[i];
            }
        }
        return sum;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for(int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        System.out.println(sumOddIntegers(arr, n));
        sc.close();
    }
}`,
          python: `def sum_odd_integers(arr, n):
    return sum(x for x in arr if x % 2 != 0)

n = int(input())
arr = list(map(int, input().split()))
print(sum_odd_integers(arr, n))`
        }
      },
      // Q5
      {
        title: 'Inversion Count (Merge Sort)',
        problem: `Given an array, count the number of inversions. An inversion is a pair (i, j) where i < j but arr[i] > arr[j]. Use merge sort for an efficient O(n log n) solution.`,
        examples: [
          { input: '5\\n2 4 1 3 5', output: '3', explanation: 'Inversions: (2,1), (4,1), (4,3) = 3 inversions.' }
        ],
        solutions: {
          cpp: `#include <iostream>
using namespace std;
int merge(int arr[], int temp[], int left, int mid, int right) {
    int i = left, j = mid, k = left;
    int inv_count = 0;
    while ((i <= mid - 1) && (j <= right)) {
        if (arr[i] <= arr[j]) {
            temp[k++] = arr[i++];
        } else {
            temp[k++] = arr[j++];
            inv_count += (mid - i);
        }
    }
    while (i <= mid - 1) temp[k++] = arr[i++];
    while (j <= right) temp[k++] = arr[j++];
    for (int i = left; i <= right; i++) arr[i] = temp[i];
    return inv_count;
}
int mergeSort(int arr[], int temp[], int left, int right) {
    int mid, inv_count = 0;
    if (right > left) {
        mid = (right + left) / 2;
        inv_count += mergeSort(arr, temp, left, mid);
        inv_count += mergeSort(arr, temp, mid + 1, right);
        inv_count += merge(arr, temp, left, mid + 1, right);
    }
    return inv_count;
}
int InversionCount(int arr[], int n) {
    if (arr == nullptr) return -1;
    if (n < 2) return 0;
    int temp[n];
    return mergeSort(arr, temp, 0, n - 1);
}
int main() {
    int n;
    cin >> n;
    int arr[n];
    for(int i = 0; i < n; ++i) cin >> arr[i];
    cout << InversionCount(arr, n) << endl;
    return 0;
}`,
          java: `import java.util.Scanner;
public class InversionCount {
    public static int mergeSort(int[] arr, int[] temp, int left, int right) {
        int mid, invCount = 0;
        if (right > left) {
            mid = (right + left) / 2;
            invCount += mergeSort(arr, temp, left, mid);
            invCount += mergeSort(arr, temp, mid + 1, right);
            invCount += merge(arr, temp, left, mid + 1, right);
        }
        return invCount;
    }
    public static int merge(int[] arr, int[] temp, int left, int mid, int right) {
        int i = left, j = mid, k = left, invCount = 0;
        while (i <= mid - 1 && j <= right) {
            if (arr[i] <= arr[j]) {
                temp[k++] = arr[i++];
            } else {
                temp[k++] = arr[j++];
                invCount += (mid - i);
            }
        }
        while (i <= mid - 1) temp[k++] = arr[i++];
        while (j <= right) temp[k++] = arr[j++];
        for (i = left; i <= right; i++) arr[i] = temp[i];
        return invCount;
    }
    public static int inversionCount(int[] arr, int n) {
        if (arr == null) return -1;
        if (n < 2) return 0;
        int[] temp = new int[n];
        return mergeSort(arr, temp, 0, n - 1);
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) arr[i] = sc.nextInt();
        System.out.println(inversionCount(arr, n));
        sc.close();
    }
}`,
          python: `def merge(arr, temp, left, mid, right):
    i, j, k = left, mid, left
    inv_count = 0
    while i <= mid - 1 and j <= right:
        if arr[i] <= arr[j]:
            temp[k] = arr[i]; i += 1
        else:
            temp[k] = arr[j]; inv_count += (mid - i); j += 1
        k += 1
    while i <= mid - 1: temp[k] = arr[i]; i += 1; k += 1
    while j <= right: temp[k] = arr[j]; j += 1; k += 1
    for i in range(left, right + 1): arr[i] = temp[i]
    return inv_count

def merge_sort(arr, temp, left, right):
    inv_count = 0
    if right > left:
        mid = (left + right) // 2
        inv_count += merge_sort(arr, temp, left, mid)
        inv_count += merge_sort(arr, temp, mid + 1, right)
        inv_count += merge(arr, temp, left, mid + 1, right)
    return inv_count

def inversion_count(arr, n):
    if arr is None: return -1
    if n < 2: return 0
    temp = [0]*n
    return merge_sort(arr, temp, 0, n - 1)

n = int(input())
arr = list(map(int, input().split()))
print(inversion_count(arr, n))`
        }
      },
      // Q6
      {
        title: 'Energy Collection Game (BFS)',
        problem: `A player starts at city 0 with 0 energy. Each city i has energy E[i] that can be collected (takes 1 hour). To jump from city i to city i+1, the player needs J[i] energy (costs 1 hour). Find the minimum hours to accumulate at least T energy.\n\nInput: n cities, target T, energy array E[], jump costs J[].`,
        examples: [
          { input: '3 10\\n3 5 8\\n2 4', output: '5', explanation: 'Collect and jump optimally to reach T=10 energy in minimum hours.' }
        ],
        solutions: {
          cpp: `#include <iostream>
#include <vector>
#include <queue>
#include <set>
using namespace std;
struct State { int city, energy, hours; };
int minHours(int n, int T, vector<int>& E, vector<int>& J) {
    queue<State> q;
    set<pair<int, int>> visited;
    q.push({0, 0, 0});
    while (!q.empty()) {
        auto [city, energy, hours] = q.front(); q.pop();
        if (energy >= T) return hours;
        int new_energy = energy + E[city];
        if (visited.find({city, new_energy}) == visited.end()) {
            visited.insert({city, new_energy});
            q.push({city, new_energy, hours + 1});
        }
        if (city < n - 1 && energy >= J[city]) {
            int next_city = city + 1;
            int after_jump_energy = energy - J[city];
            if (visited.find({next_city, after_jump_energy}) == visited.end()) {
                visited.insert({next_city, after_jump_energy});
                q.push({next_city, after_jump_energy, hours + 1});
            }
        }
    }
    return -1;
}
int main() {
    int n, T;
    cin >> n >> T;
    vector<int> E(n), J(n - 1);
    for (int i = 0; i < n; ++i) cin >> E[i];
    for (int i = 0; i < n - 1; ++i) cin >> J[i];
    cout << minHours(n, T, E, J) << endl;
    return 0;
}`,
          java: `import java.util.*;
class Main {
    static class State {
        int city, energy, hours;
        State(int c, int e, int h) { city = c; energy = e; hours = h; }
    }
    public static int minHours(int n, int T, int[] E, int[] J) {
        Queue<State> q = new LinkedList<>();
        Set<String> visited = new HashSet<>();
        q.add(new State(0, 0, 0));
        while (!q.isEmpty()) {
            State s = q.poll();
            if (s.energy >= T) return s.hours;
            int newEnergy = s.energy + E[s.city];
            String collectKey = s.city + "_" + newEnergy;
            if (!visited.contains(collectKey)) {
                visited.add(collectKey);
                q.add(new State(s.city, newEnergy, s.hours + 1));
            }
            if (s.city < n - 1 && s.energy >= J[s.city]) {
                int nextCity = s.city + 1;
                int jumpEnergy = s.energy - J[s.city];
                String jumpKey = nextCity + "_" + jumpEnergy;
                if (!visited.contains(jumpKey)) {
                    visited.add(jumpKey);
                    q.add(new State(nextCity, jumpEnergy, s.hours + 1));
                }
            }
        }
        return -1;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt(), T = sc.nextInt();
        int[] E = new int[n], J = new int[n - 1];
        for (int i = 0; i < n; i++) E[i] = sc.nextInt();
        for (int i = 0; i < n - 1; i++) J[i] = sc.nextInt();
        System.out.println(minHours(n, T, E, J));
    }
}`,
          python: `from collections import deque

def min_hours_to_defeat_enemy(n, T, E, J):
    visited = set()
    q = deque()
    q.append((0, 0, 0))
    while q:
        city, energy, hours = q.popleft()
        if energy >= T: return hours
        new_energy = energy + E[city]
        if (city, new_energy) not in visited:
            visited.add((city, new_energy))
            q.append((city, new_energy, hours + 1))
        if city < n - 1 and energy >= J[city]:
            next_city = city + 1
            jump_energy = energy - J[city]
            if (next_city, jump_energy) not in visited:
                visited.add((next_city, jump_energy))
                q.append((next_city, jump_energy, hours + 1))
    return -1

n, T = map(int, input().split())
E = list(map(int, input().split()))
J = list(map(int, input().split()))
print(min_hours_to_defeat_enemy(n, T, E, J))`
        }
      },
      // Q7
      {
        title: 'Remove Students for Toppers',
        problem: `Given marks of N students, find the top two distinct marks. Count how many students need to be removed so that only one student has the highest mark and only one has the second highest mark. Print the total number of removals needed.`,
        examples: [
          { input: '7\\n85 90 85 92 90 92 88', output: '2', explanation: 'Top two marks: 92 (appears 2 times), 90 (appears 2 times). Remove 1+1 = 2 students.' }
        ],
        solutions: {
          cpp: `#include <iostream>
#include <vector>
#include <map>
#include <algorithm>
using namespace std;
int main() {
    int n;
    cin >> n;
    vector<int> marks(n);
    map<int, int> freq;
    for (int i = 0; i < n; ++i) {
        cin >> marks[i];
        freq[marks[i]]++;
    }
    vector<int> unique_marks;
    for (auto& p : freq) unique_marks.push_back(p.first);
    sort(unique_marks.rbegin(), unique_marks.rend());
    int remove_count = 0;
    for (int i = 0; i < 2 && i < unique_marks.size(); ++i) {
        remove_count += freq[unique_marks[i]] - 1;
    }
    cout << remove_count << endl;
    return 0;
}`,
          java: `import java.util.*;
public class RemoveStudents {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] marks = new int[n];
        Map<Integer, Integer> freq = new HashMap<>();
        for (int i = 0; i < n; i++) {
            marks[i] = sc.nextInt();
            freq.put(marks[i], freq.getOrDefault(marks[i], 0) + 1);
        }
        List<Integer> uniqueMarks = new ArrayList<>(freq.keySet());
        Collections.sort(uniqueMarks, Collections.reverseOrder());
        int remove = 0;
        for (int i = 0; i < Math.min(2, uniqueMarks.size()); i++) {
            remove += freq.get(uniqueMarks.get(i)) - 1;
        }
        System.out.println(remove);
    }
}`,
          python: `from collections import Counter

def remove_students_for_toppers(n, marks):
    freq = Counter(marks)
    top_two = sorted(set(marks), reverse=True)[:2]
    total_remove = sum(freq[m] - 1 for m in top_two)
    return total_remove

n = int(input())
marks = list(map(int, input().split()))
print(remove_students_for_toppers(n, marks))`
        }
      },
      // Q8
      {
        title: 'Add Two Numbers in Range (Hirepro)',
        problem: `Given two integers a and b, if both are in the range [-10000, 10000], print their sum. Otherwise print -1.\n\n(Hirepro - On Campus)`,
        examples: [
          { input: '5\\n3', output: '8', explanation: 'Both 5 and 3 are in range, so output is 5+3=8.' },
          { input: '20000\\n3', output: '-1', explanation: '20000 is out of range [-10000, 10000], so output is -1.' }
        ],
        solutions: {
          cpp: `#include <iostream>
using namespace std;
int main() {
    int a, b;
    cin >> a >> b;
    if (a >= -10000 && a <= 10000 && b >= -10000 && b <= 10000)
        cout << a + b << endl;
    else
        cout << -1 << endl;
    return 0;
}`,
          java: `import java.util.Scanner;
public class AddInRange {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        if (a >= -10000 && a <= 10000 && b >= -10000 && b <= 10000) {
            System.out.println(a + b);
        } else {
            System.out.println(-1);
        }
    }
}`,
          python: `a = int(input())
b = int(input())
if -10000 <= a <= 10000 and -10000 <= b <= 10000:
    print(a + b)
else:
    print(-1)`
        }
      },
      // Q9
      {
        title: 'Climbing Stairs',
        problem: `Alice climbs a staircase and takes N steps to reach the top. In each turn, Alice can climb either 1 step or M steps. Determine the minimum number of climbs required to reach the top (i.e., reach the Nth stair exactly).\n\nConstraints: 1 ≤ N ≤ 10^9, 1 ≤ M ≤ 10^9`,
        examples: [
          { input: '5 1', output: '5', explanation: 'Alice can only climb 1 step at a time. So she needs 5 steps.' },
          { input: '4 3', output: '2', explanation: '0 -> 1 -> 4 or 0 -> 3 -> 4. Minimum = 2 moves.' }
        ],
        solutions: {
          cpp: `#include <iostream>
#include <climits>
using namespace std;
int main() {
    long long n, m;
    cin >> n >> m;
    long long min_moves = LLONG_MAX;
    for (long long b = 0; b * m <= n; ++b) {
        long long a = n - b * m;
        long long total = a + b;
        min_moves = min(min_moves, total);
    }
    cout << min_moves << endl;
    return 0;
}`,
          java: `import java.util.Scanner;
public class ClimbingStairs {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        long n = sc.nextLong();
        long m = sc.nextLong();
        long minMoves = Long.MAX_VALUE;
        for (long b = 0; b * m <= n; b++) {
            long a = n - b * m;
            long total = a + b;
            minMoves = Math.min(minMoves, total);
        }
        System.out.println(minMoves);
    }
}`,
          python: `n, m = map(int, input().split())
min_moves = float('inf')
b = 0
while b * m <= n:
    a = n - b * m
    total = a + b
    min_moves = min(min_moves, total)
    b += 1
print(min_moves)`
        }
      },
      // Q10
      {
        title: 'Minimum Cost to Convert String to Vowel',
        problem: `Given a lowercase string, find the minimum cost to convert all characters to the same vowel. Converting a consonant costs 10, and converting a vowel to another vowel costs the absolute ASCII difference. Return -1 if no conversion is necessary.`,
        examples: [
          { input: 'aeiou', output: '30', explanation: 'Convert all to one vowel with minimum total cost.' }
        ],
        solutions: {
          cpp: `#include <iostream>
#include <vector>
#include <algorithm>
#include <climits>
#include <cstdlib>
using namespace std;
int minCostToVowel(const string &str) {
    vector<char> vowels = {'a', 'e', 'i', 'o', 'u'};
    int minCost = INT_MAX;
    for (char target : vowels) {
        int cost = 0;
        for (char c : str) {
            if (c == target) continue;
            if (find(vowels.begin(), vowels.end(), c) != vowels.end())
                cost += abs(target - c);
            else
                cost += 10;
        }
        minCost = min(minCost, cost);
    }
    return minCost == 0 ? -1 : minCost;
}
int main() {
    string str;
    cin >> str;
    cout << minCostToVowel(str) << endl;
    return 0;
}`,
          java: `import java.util.Scanner;
public class MinimumCostString {
    public static int minCostToVowel(String str) {
        char[] vowels = {'a', 'e', 'i', 'o', 'u'};
        int minCost = Integer.MAX_VALUE;
        for (char target : vowels) {
            int cost = 0;
            for (char c : str.toCharArray()) {
                if (c == target) continue;
                if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u')
                    cost += Math.abs(target - c);
                else
                    cost += 10;
            }
            minCost = Math.min(minCost, cost);
        }
        return minCost == 0 ? -1 : minCost;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.next();
        System.out.println(minCostToVowel(str));
        sc.close();
    }
}`,
          python: `def min_cost_to_vowel(s):
    vowels = 'aeiou'
    min_cost = float('inf')
    for target in vowels:
        cost = 0
        for c in s:
            if c == target: continue
            if c in vowels:
                cost += abs(ord(target) - ord(c))
            else:
                cost += 10
        min_cost = min(min_cost, cost)
    return -1 if min_cost == 0 else min_cost

s = input().strip()
print(min_cost_to_vowel(s))`
        }
      },
      // Q11
      {
        title: 'Find Largest Pair Sum',
        problem: `Given an array of integers, find the largest sum of any pair of elements. The pair must consist of two distinct elements (by index).`,
        examples: [
          { input: '5\\n12 34 10 6 40', output: '74', explanation: 'Largest two elements are 40 and 34. Sum = 74.' }
        ],
        solutions: {
          cpp: `#include <iostream>
#include <climits>
using namespace std;
int FindLargestPairSum(int* arr, int n) {
    int firstMax = INT_MIN, secondMax = INT_MIN;
    for (int i = 0; i < n; i++) {
        if (arr[i] > firstMax) {
            secondMax = firstMax;
            firstMax = arr[i];
        } else if (arr[i] > secondMax) {
            secondMax = arr[i];
        }
    }
    return firstMax + secondMax;
}
int main() {
    int n;
    cin >> n;
    int* arr = new int[n];
    for (int i = 0; i < n; i++) cin >> arr[i];
    cout << FindLargestPairSum(arr, n) << endl;
    delete[] arr;
    return 0;
}`,
          java: `import java.util.Scanner;
public class Main {
    public static int FindLargestPairSum(int[] arr, int n) {
        int firstMax = Integer.MIN_VALUE;
        int secondMax = Integer.MIN_VALUE;
        for (int i = 0; i < n; i++) {
            if (arr[i] > firstMax) {
                secondMax = firstMax;
                firstMax = arr[i];
            } else if (arr[i] > secondMax) {
                secondMax = arr[i];
            }
        }
        return firstMax + secondMax;
    }
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) arr[i] = scanner.nextInt();
        System.out.println(FindLargestPairSum(arr, n));
        scanner.close();
    }
}`,
          python: `def FindLargestPairSum(arr):
    first_max = second_max = float('-inf')
    for num in arr:
        if num > first_max:
            second_max = first_max
            first_max = num
        elif num > second_max:
            second_max = num
    return first_max + second_max

n = int(input())
arr = list(map(int, input().split()))
print(FindLargestPairSum(arr))`
        }
      },
      // Q12
      {
        title: 'Sum of Remainders',
        problem: `Given two integers n and div, find the sum of remainders when each number from 1 to n is divided by div.`,
        examples: [
          { input: 'n=5, div=3', output: '4', explanation: 'Remainders: 1%3=1, 2%3=2, 3%3=0, 4%3=1, 5%3=2. Sum = 1+2+0+1+2 = 6.' }
        ],
        solutions: {
          cpp: `#include <iostream>
using namespace std;
int FindSumOfRemainders(int n, int div) {
    int sum = 0;
    for (int i = 1; i <= n; i++) {
        sum += i % div;
    }
    return sum;
}
int main() {
    int n, div;
    cin >> n >> div;
    if (div <= 0) {
        cout << "Divisor must be greater than 0." << endl;
        return 1;
    }
    cout << FindSumOfRemainders(n, div) << endl;
    return 0;
}`,
          java: `import java.util.Scanner;
public class Main {
    public static int FindSumOfRemainders(int n, int div) {
        int sum = 0;
        for (int i = 1; i <= n; i++) {
            sum += i % div;
        }
        return sum;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int div = sc.nextInt();
        if (div <= 0) {
            System.out.println("Divisor must be greater than 0.");
            return;
        }
        System.out.println(FindSumOfRemainders(n, div));
        sc.close();
    }
}`,
          python: `def FindSumOfRemainders(n, div):
    return sum(i % div for i in range(1, n + 1))

n = int(input())
div = int(input())
if div <= 0:
    print("Divisor must be greater than 0.")
else:
    print(FindSumOfRemainders(n, div))`
        }
      },
      // Q13
      {
        title: 'Next Smaller Number',
        problem: `Given an array, for each element find the next smaller element to its right. If no smaller element exists, return -1 for that position.`,
        examples: [
          { input: '5\\n4 8 5 2 25', output: '2 5 2 -1 -1', explanation: 'Next smaller for 4 is 2, for 8 is 5, for 5 is 2, no smaller for 2 and 25.' }
        ],
        solutions: {
          cpp: `#include <iostream>
using namespace std;
int* NextSmallerNumber(int a[], int m) {
    if (a == nullptr) return nullptr;
    int* result = new int[m];
    for (int i = 0; i < m; i++) {
        result[i] = -1;
        for (int j = i + 1; j < m; j++) {
            if (a[j] < a[i]) {
                result[i] = a[j];
                break;
            }
        }
    }
    return result;
}
int main() {
    int m;
    cin >> m;
    int* a = new int[m];
    for (int i = 0; i < m; i++) cin >> a[i];
    int* result = NextSmallerNumber(a, m);
    for (int i = 0; i < m; i++) cout << result[i] << " ";
    delete[] a;
    delete[] result;
    return 0;
}`,
          java: `import java.util.Scanner;
public class Main {
    public static int[] NextSmallerNumber(int[] a, int m) {
        if (a == null) return null;
        int[] result = new int[m];
        for (int i = 0; i < m; i++) {
            result[i] = -1;
            for (int j = i + 1; j < m; j++) {
                if (a[j] < a[i]) {
                    result[i] = a[j];
                    break;
                }
            }
        }
        return result;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int m = sc.nextInt();
        int[] a = new int[m];
        for (int i = 0; i < m; i++) a[i] = sc.nextInt();
        int[] result = NextSmallerNumber(a, m);
        for (int val : result) System.out.print(val + " ");
        sc.close();
    }
}`,
          python: `def NextSmallerNumber(a):
    if a is None: return None
    m = len(a)
    result = [-1] * m
    for i in range(m):
        for j in range(i + 1, m):
            if a[j] < a[i]:
                result[i] = a[j]
                break
    return result

m = int(input())
a = list(map(int, input().split()))
result = NextSmallerNumber(a)
print(" ".join(map(str, result)))`
        }
      },
      // Q14
      {
        title: 'Reverse String (Alphabets Only)',
        problem: `Given a string, reverse only the alphabetic characters while keeping special characters in their original positions.`,
        examples: [
          { input: 'a,b$c', output: 'c,b$a', explanation: 'Only alphabets a, b, c are reversed to c, b, a. Special chars stay in place.' }
        ],
        solutions: {
          cpp: `#include <iostream>
#include <cstring>
#include <cctype>
using namespace std;
char* ReverseString(char* s) {
    if (s == nullptr) return nullptr;
    int left = 0;
    int right = strlen(s) - 1;
    while (left < right) {
        if (!isalpha(s[left])) { left++; }
        else if (!isalpha(s[right])) { right--; }
        else { swap(s[left], s[right]); left++; right--; }
    }
    return s;
}
int main() {
    string input;
    getline(cin, input);
    char* str = new char[input.length() + 1];
    strcpy(str, input.c_str());
    char* result = ReverseString(str);
    cout << result << endl;
    delete[] str;
    return 0;
}`,
          java: `import java.util.Scanner;
public class Main {
    public static String ReverseString(String s) {
        if (s == null) return null;
        char[] chars = s.toCharArray();
        int left = 0, right = chars.length - 1;
        while (left < right) {
            if (!Character.isLetter(chars[left])) { left++; }
            else if (!Character.isLetter(chars[right])) { right--; }
            else {
                char temp = chars[left];
                chars[left] = chars[right];
                chars[right] = temp;
                left++; right--;
            }
        }
        return new String(chars);
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String input = sc.nextLine();
        System.out.println(ReverseString(input));
        sc.close();
    }
}`,
          python: `def ReverseString(s):
    if s is None: return None
    s = list(s)
    left, right = 0, len(s) - 1
    while left < right:
        if not s[left].isalpha(): left += 1
        elif not s[right].isalpha(): right -= 1
        else:
            s[left], s[right] = s[right], s[left]
            left += 1; right -= 1
    return ''.join(s)

s = input()
print(ReverseString(s))`
        }
      },
      // Q15
      {
        title: 'Cards Pyramid',
        problem: `Find the number of cards needed to build a pyramid of N levels. The formula is n*(3n+1)/2. Return result modulo 1000007. Return -1 if n is 0.`,
        examples: [
          { input: '3', output: '15', explanation: '3*(3*3+1)/2 = 3*10/2 = 15 cards.' }
        ],
        solutions: {
          cpp: `#include <iostream>
using namespace std;
int CardsPyramid(int n) {
    if (n == 0) return -1;
    const int MOD = 1000007;
    long long result = (1LL * n * (3 * n + 1)) / 2;
    return result % MOD;
}
int main() {
    int n;
    cin >> n;
    cout << CardsPyramid(n) << endl;
    return 0;
}`,
          java: `import java.util.Scanner;
public class Main {
    public static int CardsPyramid(int n) {
        if (n == 0) return -1;
        final int MOD = 1000007;
        long result = ((long) n * (3 * n + 1)) / 2;
        return (int)(result % MOD);
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        System.out.println(CardsPyramid(n));
        sc.close();
    }
}`,
          python: `def CardsPyramid(n):
    if n == 0: return -1
    MOD = 1000007
    result = (n * (3 * n + 1)) // 2
    return result % MOD

n = int(input())
print(CardsPyramid(n))`
        }
      },
      // Q16
      {
        title: 'Minimum Perfect Squares Sum',
        problem: `Given a positive integer n, find the least number of perfect square numbers (1, 4, 9, 16, ...) that sum to n.`,
        examples: [
          { input: '12', output: '3', explanation: '12 = 4 + 4 + 4. Three perfect squares.' },
          { input: '13', output: '2', explanation: '13 = 4 + 9. Two perfect squares.' }
        ],
        solutions: {
          cpp: `#include <iostream>
#include <vector>
#include <cmath>
using namespace std;
int MinSquares(int n) {
    vector<int> dp(n + 1, n);
    dp[0] = 0;
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j * j <= i; j++) {
            dp[i] = min(dp[i], dp[i - j * j] + 1);
        }
    }
    return dp[n];
}
int main() {
    int n;
    cin >> n;
    cout << MinSquares(n) << endl;
    return 0;
}`,
          java: `import java.util.Scanner;
public class Main {
    public static int MinSquares(int n) {
        int[] dp = new int[n + 1];
        for (int i = 1; i <= n; i++) {
            dp[i] = i;
            for (int j = 1; j * j <= i; j++) {
                dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
            }
        }
        return dp[n];
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        System.out.println(MinSquares(n));
        sc.close();
    }
}`,
          python: `def MinSquares(n):
    dp = [0] + [n] * n
    for i in range(1, n + 1):
        for j in range(1, int(i**0.5) + 1):
            dp[i] = min(dp[i], dp[i - j*j] + 1)
    return dp[n]

n = int(input())
print(MinSquares(n))`
        }
      },
      // Q17
      {
        title: 'Sum of Binary Digits (Hirepro 2023)',
        problem: `You are given a number N. Convert the number to its binary form and return the sum of its binary digits (i.e., the number of 1's in the binary representation).`,
        examples: [
          { input: '15', output: '4', explanation: 'Binary of 15 is 1111, sum of digits = 4.' }
        ],
        solutions: {
          cpp: `#include <iostream>
using namespace std;
int SumOfBinaryDigits(int n) {
    int count = 0;
    while (n > 0) {
        count += (n & 1);
        n >>= 1;
    }
    return count;
}
int main() {
    int n;
    cin >> n;
    cout << SumOfBinaryDigits(n) << endl;
    return 0;
}`,
          java: `import java.util.Scanner;
public class Main {
    public static int SumOfBinaryDigits(int n) {
        int count = 0;
        while (n > 0) {
            count += (n & 1);
            n >>= 1;
        }
        return count;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        System.out.println(SumOfBinaryDigits(n));
        sc.close();
    }
}`,
          python: `def SumOfBinaryDigits(n):
    return bin(n).count('1')

n = int(input())
print(SumOfBinaryDigits(n))`
        }
      },
      // Q18
      {
        title: 'Abbreviate Word (Hirepro 2023)',
        problem: `Given a word, abbreviate it by keeping the first and last characters, and replacing the middle characters with the count of characters removed. If the word has 2 or fewer characters, return it as is.`,
        examples: [
          { input: 'internationalization', output: 'i18n', explanation: 'First char: i, last char: n, middle chars count: 18.' },
          { input: 'ab', output: 'ab', explanation: 'Word has 2 chars, return as is.' }
        ],
        solutions: {
          cpp: `#include <iostream>
#include <string>
using namespace std;
string AbbreviateWord(const string& word) {
    int len = word.length();
    if (len <= 2) return word;
    return word[0] + to_string(len - 2) + word[len - 1];
}
int main() {
    string word;
    cin >> word;
    cout << AbbreviateWord(word) << endl;
    return 0;
}`,
          java: `import java.util.Scanner;
public class Main {
    public static String AbbreviateWord(String word) {
        int len = word.length();
        if (len <= 2) return word;
        return word.charAt(0) + String.valueOf(len - 2) + word.charAt(len - 1);
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String word = sc.next();
        System.out.println(AbbreviateWord(word));
        sc.close();
    }
}`,
          python: `def AbbreviateWord(word):
    if len(word) <= 2: return word
    return word[0] + str(len(word) - 2) + word[-1]

word = input()
print(AbbreviateWord(word))`
        }
      },
      // Q19
      {
        title: 'Balance Fruits',
        problem: `Given the number of apples (a), mangoes (m) and rupees (rs): if apples > mangoes, reduce rupees by (a-m). If mangoes > apples, increase rupees by (m-a). Return the final rupees.`,
        examples: [
          { input: '5 3 100', output: '98', explanation: 'Apples > Mangoes: rs = 100 - (5-3) = 98.' }
        ],
        solutions: {
          cpp: `#include <iostream>
using namespace std;
int BalanceFruits(int a, int m, int rs) {
    if (a > m) rs -= (a - m);
    else if (m > a) rs += (m - a);
    return rs;
}
int main() {
    int a, m, rs;
    cin >> a >> m >> rs;
    cout << BalanceFruits(a, m, rs) << endl;
    return 0;
}`,
          java: `import java.util.Scanner;
public class Main {
    public static int BalanceFruits(int a, int m, int rs) {
        if (a > m) rs -= (a - m);
        else if (m > a) rs += (m - a);
        return rs;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt(), m = sc.nextInt(), rs = sc.nextInt();
        System.out.println(BalanceFruits(a, m, rs));
        sc.close();
    }
}`,
          python: `def BalanceFruits(a, m, rs):
    if a > m: rs -= (a - m)
    elif m > a: rs += (m - a)
    return rs

a = int(input())
m = int(input())
rs = int(input())
print(BalanceFruits(a, m, rs))`
        }
      },
      // Q20
      {
        title: 'Tallest Tree',
        problem: `Given N trees with heights in feet and inches, find the tallest tree and return its height in total inches. Each tree has a struct with feets and inches fields.`,
        examples: [
          { input: '2\\n5 6\\n4 11', output: '66', explanation: 'Tree 1: 5*12+6=66 inches. Tree 2: 4*12+11=59 inches. Tallest = 66.' }
        ],
        solutions: {
          cpp: `#include <iostream>
using namespace std;
struct TreeHeight { int feets; int inches; };
int TallestTree(TreeHeight trees[], int n) {
    if (trees == NULL || n <= 0) return -1;
    int maxHeight = 0;
    for (int i = 0; i < n; ++i) {
        int heightInInches = trees[i].feets * 12 + trees[i].inches;
        if (heightInInches > maxHeight) maxHeight = heightInInches;
    }
    return maxHeight;
}
int main() {
    int n;
    cin >> n;
    TreeHeight* trees = new TreeHeight[n];
    for (int i = 0; i < n; i++) cin >> trees[i].feets >> trees[i].inches;
    cout << TallestTree(trees, n) << endl;
    delete[] trees;
    return 0;
}`,
          java: `import java.util.Scanner;
class TreeHeight {
    int feets, inches;
    TreeHeight(int f, int i) { this.feets = f; this.inches = i; }
}
public class Main {
    public static int TallestTree(TreeHeight[] trees, int n) {
        if (trees == null || n <= 0) return -1;
        int maxHeight = 0;
        for (int i = 0; i < n; i++) {
            int height = trees[i].feets * 12 + trees[i].inches;
            if (height > maxHeight) maxHeight = height;
        }
        return maxHeight;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        TreeHeight[] trees = new TreeHeight[n];
        for (int i = 0; i < n; i++) {
            int f = sc.nextInt(), in_ = sc.nextInt();
            trees[i] = new TreeHeight(f, in_);
        }
        System.out.println(TallestTree(trees, n));
        sc.close();
    }
}`,
          python: `def TallestTree(trees, n):
    if not trees or n <= 0: return -1
    return max(f * 12 + i for f, i in trees)

n = int(input())
trees = []
for _ in range(n):
    f, i = map(int, input().split())
    trees.append((f, i))
print(TallestTree(trees, n))`
        }
      }
    ]
  },

  // ═══════════════════════════════════════════════
  // CAPGEMINI
  // ═══════════════════════════════════════════════
  {
    id: 'capgemini',
    name: 'Capgemini',
    icon: '<i class="ri-global-fill"></i>',
    color: 'linear-gradient(135deg, #0070AD, #004C75)',
    description: 'Interview coding questions from Capgemini covering strings, arrays, linked lists, and matrix operations.',
    tags: ['Strings', 'Arrays', 'LinkedList', 'Matrix', 'Sorting'],
    questions: [
      // Q1
      {
        title: 'Reverse ASCII Sum (2024)',
        problem: `Given a lowercase English string, calculate its "Reverse ASCII Sum". The "Reverse ASCII Sum" is computed by assigning a reverse alphabetical value to each character (where 'a' corresponds to 26, 'b' to 25, ..., 'z' to 1). Then, multiply this reverse alphabetical value by its 1-based position in the string and sum up all the results.`,
        examples: [
          { input: 'abc', output: '148', explanation: "a(26)*1 + b(25)*2 + c(24)*3 = 26+50+72 = 148" },
          { input: 'z', output: '1', explanation: "z has reverse value 1, position 1. 1*1 = 1." }
        ],
        solutions: {
          cpp: `#include <iostream>
#include <string>
using namespace std;
int main() {
    string s;
    cin >> s;
    int sum = 0;
    for (int i = 0; i < s.length(); i++) {
        int reverseVal = 'z' - s[i] + 1;
        sum += (i + 1) * reverseVal;
    }
    cout << sum << endl;
    return 0;
}`,
          java: `import java.util.Scanner;
public class ReverseAsciiSum {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.nextLine();
        int sum = 0;
        for (int i = 0; i < s.length(); i++) {
            int reverseVal = 'z' - s.charAt(i) + 1;
            sum += (i + 1) * reverseVal;
        }
        System.out.println(sum);
        sc.close();
    }
}`,
          python: `s = input()
total = 0
for i in range(len(s)):
    reverse_val = ord('z') - ord(s[i]) + 1
    total += (i + 1) * reverse_val
print(total)`
        }
      },
      // Q2
      {
        title: 'Lexicographically Smallest String (2024)',
        problem: `Given a string, rearrange its characters to form the lexicographically smallest possible string.`,
        examples: [
          { input: 'banana', output: 'aaabnn', explanation: 'Sorted characters: a, a, a, b, n, n → "aaabnn".' },
          { input: 'apple', output: 'aelpp', explanation: 'Sorted characters: a, e, l, p, p → "aelpp".' }
        ],
        solutions: {
          cpp: `#include <iostream>
#include <algorithm>
#include <string>
using namespace std;
int main() {
    string s;
    cin >> s;
    sort(s.begin(), s.end());
    cout << s << endl;
    return 0;
}`,
          java: `import java.util.Arrays;
import java.util.Scanner;
public class LexicoSmallestString {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.nextLine();
        char[] arr = s.toCharArray();
        Arrays.sort(arr);
        System.out.println(new String(arr));
        sc.close();
    }
}`,
          python: `s = input()
print(''.join(sorted(s)))`
        }
      },
      // Q3
      {
        title: 'Segment Coverage Sum (2024)',
        problem: `You are given a list of N 2D integer segments [L,R]. Given a query range [X,Y], for each integer point P from X to Y, count how many segments cover that point. Return the total sum of coverages.`,
        examples: [
          { input: 'N=5, Segments: [(2,5),(1,4),(2,8),(3,6),(5,7)], X=1, Y=3', output: '8', explanation: 'P=1: count=1, P=2: count=3, P=3: count=4. Total=8.' }
        ],
        solutions: {
          cpp: `#include <iostream>
#include <vector>
using namespace std;
int main() {
    int N, X, Y;
    cin >> N;
    vector<pair<int, int>> segments(N);
    for (int i = 0; i < N; i++)
        cin >> segments[i].first >> segments[i].second;
    cin >> X >> Y;
    int total = 0;
    for (int p = X; p <= Y; p++)
        for (auto seg : segments)
            if (p >= seg.first && p <= seg.second) total++;
    cout << total << endl;
    return 0;
}`,
          java: `import java.util.*;
public class SegmentCoverageSum {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int[][] segments = new int[N][2];
        for (int i = 0; i < N; i++) {
            segments[i][0] = sc.nextInt();
            segments[i][1] = sc.nextInt();
        }
        int X = sc.nextInt(), Y = sc.nextInt();
        int total = 0;
        for (int p = X; p <= Y; p++)
            for (int[] seg : segments)
                if (p >= seg[0] && p <= seg[1]) total++;
        System.out.println(total);
        sc.close();
    }
}`,
          python: `N = int(input())
segments = [tuple(map(int, input().split())) for _ in range(N)]
X, Y = map(int, input().split())
total = 0
for p in range(X, Y + 1):
    for l, r in segments:
        if l <= p <= r:
            total += 1
print(total)`
        }
      },
      // Q4
      {
        title: 'Virus Detection - Special String',
        problem: `A string is called special if all characters at alternative positions starting from index 0 are the same. Given N strings, print 1 if special, else 0.`,
        examples: [
          { input: '3\\nADAOAS\\nMADAM\\nLFLRL', output: '1\\n0\\n1', explanation: 'ADAOAS: chars at 0,2,4 are A,A,A → same → 1. MADAM: M,D,M → not same → 0.' }
        ],
        solutions: {
          cpp: `#include <iostream>
using namespace std;
int isSpecialString(string s) {
    char expected = s[0];
    for (int i = 0; i < s.length(); i += 2) {
        if (s[i] != expected) return 0;
    }
    return 1;
}
int main() {
    int N;
    cin >> N;
    while (N--) {
        string s;
        cin >> s;
        cout << isSpecialString(s) << endl;
    }
    return 0;
}`,
          java: `import java.util.Scanner;
public class VirusDetection {
    public static int isSpecialString(String s) {
        char expected = s.charAt(0);
        for (int i = 0; i < s.length(); i += 2) {
            if (s.charAt(i) != expected) return 0;
        }
        return 1;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt(); sc.nextLine();
        for (int i = 0; i < N; i++) {
            System.out.println(isSpecialString(sc.nextLine()));
        }
        sc.close();
    }
}`,
          python: `def is_special_string(s):
    expected = s[0]
    for i in range(0, len(s), 2):
        if s[i] != expected: return 0
    return 1

N = int(input())
for _ in range(N):
    print(is_special_string(input().strip()))`
        }
      },
      // Q5
      {
        title: 'Calculate Initial Velocity (2024)',
        problem: `Given the final velocity (v), acceleration (a), and time (t) from v = u + at, calculate the initial velocity u.`,
        examples: [
          { input: '1 1 1', output: '0', explanation: 'u = v - a*t = 1 - 1*1 = 0.' },
          { input: '10 2 3', output: '4', explanation: 'u = 10 - 2*3 = 4.' }
        ],
        solutions: {
          cpp: `#include <iostream>
using namespace std;
int main() {
    int v, a, t;
    cin >> v >> a >> t;
    cout << v - a * t << endl;
    return 0;
}`,
          java: `import java.util.Scanner;
public class InitialVelocity {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int v = sc.nextInt(), a = sc.nextInt(), t = sc.nextInt();
        System.out.println(v - a * t);
        sc.close();
    }
}`,
          python: `v, a, t = map(int, input().split())
print(v - a * t)`
        }
      },
      // Q6
      {
        title: 'Sum of Digits in an Interval',
        problem: `Given two integers A and B, find S which is the sum of digits of all integers in the interval [A,B] (inclusive).`,
        examples: [
          { input: '50 55', output: '45', explanation: 'sum_digits(50..55) = 5+6+7+8+9+10 = 45.' },
          { input: '28 31', output: '28', explanation: 'sum_digits(28..31) = 10+11+4+3 = 28.' }
        ],
        solutions: {
          cpp: `#include <iostream>
using namespace std;
int sumDigits(long long n) {
    int sum = 0;
    while (n > 0) { sum += n % 10; n /= 10; }
    return sum;
}
int main() {
    long long A, B;
    cin >> A >> B;
    long long total = 0;
    for (long long i = A; i <= B; ++i) total += sumDigits(i);
    cout << total << endl;
    return 0;
}`,
          java: `import java.util.Scanner;
public class SumOfDigitsInInterval {
    public static int sumDigits(long n) {
        int sum = 0;
        while (n > 0) { sum += (int)(n % 10); n /= 10; }
        return sum;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        long A = sc.nextLong(), B = sc.nextLong();
        long total = 0;
        for (long i = A; i <= B; i++) total += sumDigits(i);
        System.out.println(total);
        sc.close();
    }
}`,
          python: `def sum_digits(n):
    return sum(int(d) for d in str(n))

A, B = map(int, input().split())
print(sum(sum_digits(num) for num in range(A, B + 1)))`
        }
      },
      // Q7
      {
        title: 'Array Rotation (2021)',
        problem: `Write a program with a function rotate(arr[], d, n) that rotates an array arr[] of size n by d elements (left rotation).`,
        examples: [
          { input: '5\\n1 3 5 7 9\\n2', output: '5 7 9 1 3', explanation: 'First 2 elements [1,3] move to end. Result: [5,7,9,1,3].' },
          { input: '4\\n10 20 30 40\\n0', output: '10 20 30 40', explanation: 'No rotation needed.' }
        ],
        solutions: {
          cpp: `#include <iostream>
#include <vector>
using namespace std;
void rotate(vector<int>& arr, int d, int n) {
    d = d % n;
    vector<int> rotated;
    for (int i = d; i < n; ++i) rotated.push_back(arr[i]);
    for (int i = 0; i < d; ++i) rotated.push_back(arr[i]);
    for (int i = 0; i < n; ++i) cout << rotated[i] << " ";
    cout << endl;
}
int main() {
    int n, d;
    cin >> n;
    vector<int> arr(n);
    for (int i = 0; i < n; ++i) cin >> arr[i];
    cin >> d;
    rotate(arr, d, n);
    return 0;
}`,
          java: `import java.util.*;
public class Main {
    public static void rotate(int[] arr, int d, int n) {
        d = d % n;
        int[] result = new int[n];
        int idx = 0;
        for (int i = d; i < n; i++) result[idx++] = arr[i];
        for (int i = 0; i < d; i++) result[idx++] = arr[i];
        for (int i = 0; i < n; i++) System.out.print(result[i] + " ");
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) arr[i] = sc.nextInt();
        int d = sc.nextInt();
        rotate(arr, d, n);
    }
}`,
          python: `n = int(input())
arr = list(map(int, input().split()))
d = int(input())
d = d % n
rotated = arr[d:] + arr[:d]
print(" ".join(map(str, rotated)))`
        }
      },
      // Q8
      {
        title: 'Move Hash to Front',
        problem: `Given a string with '#' characters, move all hashes to the front of the string while keeping the order of other characters.`,
        examples: [
          { input: 'Move#Hash#to#Front', output: '###MoveHashtoFront', explanation: 'All 3 hashes moved to front.' }
        ],
        solutions: {
          cpp: `#include <iostream>
#include <string>
using namespace std;
string moveHashToFront(string s) {
    int hashCount = 0;
    string result = "";
    for (char ch : s) {
        if (ch == '#') hashCount++;
        else result += ch;
    }
    return string(hashCount, '#') + result;
}
int main() {
    string input;
    getline(cin, input);
    cout << moveHashToFront(input) << endl;
    return 0;
}`,
          java: `import java.util.Scanner;
public class Main {
    public static String moveHashToFront(String s) {
        int hashCount = 0;
        StringBuilder result = new StringBuilder();
        for (char ch : s.toCharArray()) {
            if (ch == '#') hashCount++;
            else result.append(ch);
        }
        StringBuilder finalResult = new StringBuilder();
        for (int i = 0; i < hashCount; i++) finalResult.append('#');
        finalResult.append(result);
        return finalResult.toString();
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println(moveHashToFront(sc.nextLine()));
    }
}`,
          python: `def move_hash_to_front(s):
    hash_count = s.count('#')
    without_hash = s.replace('#', '')
    return '#' * hash_count + without_hash

print(move_hash_to_front(input()))`
        }
      },
      // Q9
      {
        title: 'String Compression',
        problem: `Reduce a string by replacing consecutive repeated characters with the character followed by its count (only if count > 1).\n\nInput: aabbbbeeeeffggg → Output: a2b4e4f2g3\nInput: abbccccc → Output: ab2c5`,
        examples: [
          { input: 'aabbbbeeeeffggg', output: 'a2b4e4f2g3', explanation: 'a appears 2 times, b 4 times, etc.' },
          { input: 'abbccccc', output: 'ab2c5', explanation: 'a once (no count), b twice, c five times.' }
        ],
        solutions: {
          cpp: `#include <iostream>
#include <string>
using namespace std;
string compressString(string s) {
    if (s.empty()) return "";
    string result = "";
    int count = 1;
    for (size_t i = 1; i < s.length(); ++i) {
        if (s[i] == s[i-1]) { count++; }
        else {
            result += s[i-1];
            if (count > 1) result += to_string(count);
            count = 1;
        }
    }
    result += s.back();
    if (count > 1) result += to_string(count);
    return result;
}
int main() {
    string input;
    cin >> input;
    cout << compressString(input) << endl;
    return 0;
}`,
          java: `import java.util.Scanner;
public class Main {
    public static String compressString(String s) {
        if (s.isEmpty()) return "";
        StringBuilder result = new StringBuilder();
        int count = 1;
        for (int i = 1; i < s.length(); i++) {
            if (s.charAt(i) == s.charAt(i - 1)) { count++; }
            else {
                result.append(s.charAt(i - 1));
                if (count > 1) result.append(count);
                count = 1;
            }
        }
        result.append(s.charAt(s.length() - 1));
        if (count > 1) result.append(count);
        return result.toString();
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println(compressString(sc.nextLine()));
    }
}`,
          python: `def compress_string(s):
    if not s: return ""
    result = []
    count = 1
    for i in range(1, len(s)):
        if s[i] == s[i-1]: count += 1
        else:
            result.append(s[i-1])
            if count > 1: result.append(str(count))
            count = 1
    result.append(s[-1])
    if count > 1: result.append(str(count))
    return ''.join(result)

print(compress_string(input()))`
        }
      },
      // Q10
      {
        title: 'Count Occurrences of Each Element',
        problem: `Given an array of integers, print the number of times each integer has occurred.`,
        examples: [
          { input: '10\\n1 2 3 3 4 1 4 5 1 2', output: '1 occurs 3 times\\n2 occurs 2 times\\n...', explanation: '1 appears 3 times, 2 appears 2 times, etc.' }
        ],
        solutions: {
          cpp: `#include <iostream>
#include <unordered_map>
using namespace std;
int main() {
    int n, x;
    cin >> n;
    unordered_map<int, int> freq;
    for (int i = 0; i < n; i++) { cin >> x; freq[x]++; }
    for (auto &p : freq)
        cout << p.first << " occurs " << p.second << " times\\n";
    return 0;
}`,
          java: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        Map<Integer, Integer> freq = new HashMap<>();
        for (int i = 0; i < n; i++) {
            int num = sc.nextInt();
            freq.put(num, freq.getOrDefault(num, 0) + 1);
        }
        for (Map.Entry<Integer, Integer> entry : freq.entrySet())
            System.out.println(entry.getKey() + " occurs " + entry.getValue() + " times");
    }
}`,
          python: `from collections import Counter
n = int(input())
arr = list(map(int, input().split()))
for num, count in Counter(arr).items():
    print(f"{num} occurs {count} times")`
        }
      },
      // Q11
      {
        title: 'Dealership Tyres Count',
        problem: `Calculate the total number of tyres in each dealership. Each dealership has cars (4 tyres) and bikes (2 tyres).`,
        examples: [
          { input: '3\\n4 2\\n4 0\\n1 2', output: '20\\n16\\n8', explanation: 'D1: 4*4+2*2=20, D2: 4*4+0*2=16, D3: 1*4+2*2=8.' }
        ],
        solutions: {
          cpp: `#include <iostream>
using namespace std;
int main() {
    int n, cars, bikes;
    cin >> n;
    while (n--) {
        cin >> cars >> bikes;
        cout << cars * 4 + bikes * 2 << endl;
    }
    return 0;
}`,
          java: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        while (n-- > 0) {
            int cars = sc.nextInt(), bikes = sc.nextInt();
            System.out.println(cars * 4 + bikes * 2);
        }
    }
}`,
          python: `n = int(input())
for _ in range(n):
    cars, bikes = map(int, input().split())
    print(cars * 4 + bikes * 2)`
        }
      },
      // Q12
      {
        title: 'Balanced Parentheses',
        problem: `Given a string containing just (), {}, [], determine if the input string has valid (balanced) parentheses.`,
        examples: [
          { input: '{{()}}', output: 'true', explanation: 'All brackets properly nested and closed.' },
          { input: '()', output: 'true', explanation: 'Single valid pair.' }
        ],
        solutions: {
          cpp: `#include <iostream>
#include <stack>
#include <unordered_map>
using namespace std;
bool isValid(string s) {
    stack<char> st;
    unordered_map<char, char> match = {{')', '('}, {']', '['}, {'}', '{'}};
    for (char ch : s) {
        if (match.count(ch)) {
            if (st.empty() || st.top() != match[ch]) return false;
            st.pop();
        } else { st.push(ch); }
    }
    return st.empty();
}
int main() {
    string s;
    cin >> s;
    cout << (isValid(s) ? "true" : "false") << endl;
    return 0;
}`,
          java: `import java.util.*;
public class Main {
    public static boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();
        Map<Character, Character> map = Map.of(')', '(', '}', '{', ']', '[');
        for (char ch : s.toCharArray()) {
            if (map.containsKey(ch)) {
                if (stack.isEmpty() || stack.peek() != map.get(ch)) return false;
                stack.pop();
            } else { stack.push(ch); }
        }
        return stack.isEmpty();
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println(isValid(sc.nextLine()));
    }
}`,
          python: `def is_valid_parentheses(s):
    stack = []
    mapping = {')': '(', '}': '{', ']': '['}
    for ch in s:
        if ch in mapping.values(): stack.append(ch)
        elif ch in mapping:
            if not stack or stack[-1] != mapping[ch]: return False
            stack.pop()
    return not stack

print(str(is_valid_parentheses(input())).lower())`
        }
      },
      // Q13
      {
        title: 'Spiral Matrix Traversal',
        problem: `Traverse a given m×n matrix in a spiral format (clockwise from top-left) and print its elements.`,
        examples: [
          { input: '3 3\\n1 2 3\\n4 5 6\\n7 8 9', output: '1 2 3 6 9 8 7 4 5', explanation: 'Spiral: right, down, left, up, then inner.' }
        ],
        solutions: {
          cpp: `#include <iostream>
using namespace std;
int main() {
    int rows, cols;
    cin >> rows >> cols;
    int a[100][100];
    for (int i = 0; i < rows; ++i)
        for (int j = 0; j < cols; ++j) cin >> a[i][j];
    int top = 0, bottom = rows - 1, left = 0, right = cols - 1;
    while (top <= bottom && left <= right) {
        for (int i = left; i <= right; ++i) cout << a[top][i] << " ";
        top++;
        for (int i = top; i <= bottom; ++i) cout << a[i][right] << " ";
        right--;
        if (top <= bottom) {
            for (int i = right; i >= left; --i) cout << a[bottom][i] << " ";
            bottom--;
        }
        if (left <= right) {
            for (int i = bottom; i >= top; --i) cout << a[i][left] << " ";
            left++;
        }
    }
    return 0;
}`,
          java: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int rows = sc.nextInt(), cols = sc.nextInt();
        int[][] a = new int[rows][cols];
        for (int i = 0; i < rows; ++i)
            for (int j = 0; j < cols; ++j) a[i][j] = sc.nextInt();
        int top = 0, bottom = rows - 1, left = 0, right = cols - 1;
        while (top <= bottom && left <= right) {
            for (int i = left; i <= right; ++i) System.out.print(a[top][i] + " ");
            top++;
            for (int i = top; i <= bottom; ++i) System.out.print(a[i][right] + " ");
            right--;
            if (top <= bottom) {
                for (int i = right; i >= left; --i) System.out.print(a[bottom][i] + " ");
                bottom--;
            }
            if (left <= right) {
                for (int i = bottom; i >= top; --i) System.out.print(a[i][left] + " ");
                left++;
            }
        }
    }
}`,
          python: `rows, cols = map(int, input().split())
matrix = [list(map(int, input().split())) for _ in range(rows)]
top, bottom, left, right = 0, rows - 1, 0, cols - 1
res = []
while top <= bottom and left <= right:
    for i in range(left, right + 1): res.append(matrix[top][i])
    top += 1
    for i in range(top, bottom + 1): res.append(matrix[i][right])
    right -= 1
    if top <= bottom:
        for i in range(right, left - 1, -1): res.append(matrix[bottom][i])
        bottom -= 1
    if left <= right:
        for i in range(bottom, top - 1, -1): res.append(matrix[i][left])
        left += 1
print(*res)`
        }
      },
      // Q14
      {
        title: 'Find Factors of a Number',
        problem: `Given an integer, find all its factors. If negative, use absolute value. If zero, print "No Factors".`,
        examples: [
          { input: '54', output: '1, 2, 3, 6, 9, 18, 27, 54', explanation: 'All divisors of 54.' },
          { input: '0', output: 'No Factors', explanation: 'Zero has no factors.' }
        ],
        solutions: {
          cpp: `#include <iostream>
#include <set>
#include <cmath>
using namespace std;
int main() {
    int num;
    cin >> num;
    if (num == 0) { cout << "No Factors"; return 0; }
    num = abs(num);
    set<int> factors;
    for (int i = 1; i * i <= num; i++) {
        if (num % i == 0) { factors.insert(i); factors.insert(num / i); }
    }
    bool first = true;
    for (int f : factors) {
        if (!first) cout << ", ";
        cout << f; first = false;
    }
    return 0;
}`,
          java: `import java.util.*;
public class FindFactor {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        if (num == 0) { System.out.println("No Factors"); return; }
        num = Math.abs(num);
        TreeSet<Integer> factors = new TreeSet<>();
        for (int i = 1; i * i <= num; i++) {
            if (num % i == 0) { factors.add(i); factors.add(num / i); }
        }
        StringJoiner sj = new StringJoiner(", ");
        for (int f : factors) sj.add(String.valueOf(f));
        System.out.println(sj.toString());
    }
}`,
          python: `num = int(input())
if num == 0:
    print("No Factors")
else:
    num = abs(num)
    factors = set()
    for i in range(1, int(num**0.5) + 1):
        if num % i == 0: factors.add(i); factors.add(num // i)
    print(', '.join(map(str, sorted(factors))))`
        }
      },
      // Q15
      {
        title: 'Minimum Discount Item',
        problem: `Mayuri buys N items. Each has a name, price, and discount %. Find the item with the minimum discount (in absolute monetary value).`,
        examples: [
          { input: '4\\nmobile,10000,20\\nshoe,5000,10\\nwatch,6000,15\\nlaptop,35000,5', output: 'shoe', explanation: 'Discount: mobile=2000, shoe=500, watch=900, laptop=1750. Min=500 → shoe.' }
        ],
        solutions: {
          cpp: `#include <iostream>
#include <climits>
using namespace std;
int main() {
    int n;
    cin >> n; cin.ignore();
    string item, minItem;
    int minDisc = INT_MAX;
    while (n--) {
        string line; getline(cin, line);
        size_t p1 = line.find(','), p2 = line.rfind(',');
        item = line.substr(0, p1);
        int price = stoi(line.substr(p1 + 1, p2 - p1 - 1));
        int disc = stoi(line.substr(p2 + 1));
        int discount = price * disc / 100;
        if (discount < minDisc) { minDisc = discount; minItem = item; }
    }
    cout << minItem;
    return 0;
}`,
          java: `import java.util.*;
public class MinimumDiscountItem {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = Integer.parseInt(sc.nextLine());
        int minDiscount = Integer.MAX_VALUE;
        String minItem = "";
        for (int i = 0; i < n; i++) {
            String[] parts = sc.nextLine().split(",");
            String item = parts[0];
            int price = Integer.parseInt(parts[1]);
            int discount = Integer.parseInt(parts[2]);
            int discAmount = price * discount / 100;
            if (discAmount < minDiscount) { minDiscount = discAmount; minItem = item; }
        }
        System.out.println(minItem);
    }
}`,
          python: `n = int(input())
min_discount = float('inf')
min_item = ""
for _ in range(n):
    item, price, disc = input().split(',')
    discount = int(price) * int(disc) // 100
    if discount < min_discount:
        min_discount = discount
        min_item = item
print(min_item)`
        }
      },
      // Q16
      {
        title: 'Pythagorean Triplets',
        problem: `Generate all Pythagorean triplets (a, b, c) with values smaller than or equal to a given limit where a² + b² = c² and a < b.`,
        examples: [
          { input: 'limit = 20', output: '3 4 5\\n5 12 13\\n8 15 17\\n12 16 20', explanation: 'All Pythagorean triplets with values ≤ 20.' }
        ],
        solutions: {
          cpp: `#include <iostream>
#include <cmath>
using namespace std;
int main() {
    string s; getline(cin, s);
    int limit = stoi(s.substr(s.find('=') + 1));
    for (int a = 1; a < limit; a++)
        for (int b = a + 1; b < limit; b++) {
            int c2 = a*a + b*b, c = sqrt(c2);
            if (c*c == c2 && c <= limit)
                cout << a << " " << b << " " << c << "\\n";
        }
    return 0;
}`,
          java: `import java.util.*;
public class PythagoreanTriplets {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int limit = Integer.parseInt(sc.nextLine().split("=")[1].trim());
        for (int a = 1; a < limit; a++)
            for (int b = a + 1; b < limit; b++) {
                int c2 = a*a + b*b, c = (int)Math.sqrt(c2);
                if (c*c == c2 && c <= limit)
                    System.out.println(a + " " + b + " " + c);
            }
    }
}`,
          python: `import re
limit = int(re.findall(r'\\d+', input())[0])
for a in range(1, limit):
    for b in range(a+1, limit):
        c = (a**2 + b**2)**0.5
        if c.is_integer() and c <= limit:
            print(f"{a} {b} {int(c)}")`
        }
      },
      // Q17
      {
        title: 'Reverse a Linked List',
        problem: `Write a function to reverse a singly linked list.\n\nInput: 1 -> 2 -> 3 -> 4 -> 5\nOutput: 5 -> 4 -> 3 -> 2 -> 1`,
        examples: [
          { input: '1 -> 2 -> 3 -> 4 -> 5', output: '5 -> 4 -> 3 -> 2 -> 1', explanation: 'Each node pointer is flipped to point backward.' }
        ],
        solutions: {
          cpp: `#include <iostream>
using namespace std;
struct ListNode {
    int val; ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};
ListNode* reverseList(ListNode* head) {
    ListNode *prev = nullptr, *next = nullptr;
    while (head) {
        next = head->next;
        head->next = prev;
        prev = head;
        head = next;
    }
    return prev;
}
void printList(ListNode* head) {
    while (head) {
        cout << head->val;
        if (head->next) cout << " -> ";
        head = head->next;
    }
    cout << endl;
}
int main() {
    int n, val;
    cin >> n;
    if (n == 0) { cout << "List is empty.\\n"; return 0; }
    cin >> val;
    ListNode* head = new ListNode(val);
    ListNode* current = head;
    for (int i = 1; i < n; ++i) {
        cin >> val;
        current->next = new ListNode(val);
        current = current->next;
    }
    head = reverseList(head);
    printList(head);
    return 0;
}`,
          java: `import java.util.Scanner;
class ListNode {
    int val; ListNode next;
    ListNode(int val) { this.val = val; this.next = null; }
}
public class ReverseLinkedList {
    public static ListNode reverseList(ListNode head) {
        ListNode prev = null, next = null;
        while (head != null) {
            next = head.next; head.next = prev;
            prev = head; head = next;
        }
        return prev;
    }
    public static void printList(ListNode head) {
        while (head != null) {
            System.out.print(head.val);
            if (head.next != null) System.out.print(" -> ");
            head = head.next;
        }
        System.out.println();
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        if (n == 0) { System.out.println("List is empty."); return; }
        ListNode head = new ListNode(sc.nextInt());
        ListNode current = head;
        for (int i = 1; i < n; i++) {
            current.next = new ListNode(sc.nextInt());
            current = current.next;
        }
        head = reverseList(head);
        printList(head);
    }
}`,
          python: `class ListNode:
    def __init__(self, val):
        self.val = val
        self.next = None

def reverse_list(head):
    prev = None
    while head:
        next_node = head.next
        head.next = prev
        prev = head
        head = next_node
    return prev

def print_list(head):
    while head:
        print(head.val, end=" -> " if head.next else "\\n")
        head = head.next

n = int(input())
if n == 0:
    print("List is empty.")
else:
    values = list(map(int, input().split()))
    head = ListNode(values[0])
    current = head
    for val in values[1:]:
        current.next = ListNode(val)
        current = current.next
    head = reverse_list(head)
    print_list(head)`
        }
      },
      // Q18
      {
        title: 'Longest Substring Without Repeating Characters',
        problem: `Given a string, find the length of the longest substring without repeating characters.`,
        examples: [
          { input: 'abcabcbb', output: '3', explanation: 'Longest substring without repeating: "abc" with length 3.' },
          { input: 'bbbbb', output: '1', explanation: 'Longest is "b" with length 1.' }
        ],
        solutions: {
          cpp: `#include <iostream>
#include <unordered_set>
#include <string>
using namespace std;
int lengthOfLongestSubstring(string s) {
    unordered_set<char> seen;
    int left = 0, maxLen = 0;
    for (int right = 0; right < s.length(); right++) {
        while (seen.count(s[right])) { seen.erase(s[left]); left++; }
        seen.insert(s[right]);
        maxLen = max(maxLen, right - left + 1);
    }
    return maxLen;
}
int main() {
    string s; cin >> s;
    cout << lengthOfLongestSubstring(s) << endl;
    return 0;
}`,
          java: `import java.util.*;
public class LongestUniqueSubstring {
    public static int lengthOfLongestSubstring(String s) {
        Set<Character> seen = new HashSet<>();
        int left = 0, maxLen = 0;
        for (int right = 0; right < s.length(); right++) {
            while (seen.contains(s.charAt(right))) {
                seen.remove(s.charAt(left)); left++;
            }
            seen.add(s.charAt(right));
            maxLen = Math.max(maxLen, right - left + 1);
        }
        return maxLen;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println(lengthOfLongestSubstring(sc.nextLine()));
    }
}`,
          python: `def length_of_longest_substring(s):
    seen = set()
    left = max_len = 0
    for right in range(len(s)):
        while s[right] in seen:
            seen.remove(s[left]); left += 1
        seen.add(s[right])
        max_len = max(max_len, right - left + 1)
    return max_len

print(length_of_longest_substring(input()))`
        }
      },
      // Q19
      {
        title: 'Matrix Rotation by 90 Degrees',
        problem: `Given an n×n matrix, rotate it 90 degrees clockwise in-place. Approach: transpose the matrix, then reverse each row.`,
        examples: [
          { input: '3\\n1 2 3\\n4 5 6\\n7 8 9', output: '7 4 1\\n8 5 2\\n9 6 3', explanation: 'Matrix rotated 90° clockwise.' }
        ],
        solutions: {
          cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
void rotate(vector<vector<int>>& matrix) {
    int n = matrix.size();
    for(int i = 0; i < n; ++i)
        for(int j = i + 1; j < n; ++j)
            swap(matrix[i][j], matrix[j][i]);
    for(auto& row : matrix) reverse(row.begin(), row.end());
}
int main() {
    int n; cin >> n;
    vector<vector<int>> mat(n, vector<int>(n));
    for(int i = 0; i < n; ++i)
        for(int j = 0; j < n; ++j) cin >> mat[i][j];
    rotate(mat);
    for(auto& row : mat) {
        for(int val : row) cout << val << " ";
        cout << "\\n";
    }
    return 0;
}`,
          java: `import java.util.*;
public class RotateMatrix {
    public static void rotate(int[][] mat) {
        int n = mat.length;
        for (int i = 0; i < n; ++i)
            for (int j = i + 1; j < n; ++j) {
                int tmp = mat[i][j]; mat[i][j] = mat[j][i]; mat[j][i] = tmp;
            }
        for (int[] row : mat)
            for (int i = 0, j = n - 1; i < j; ++i, --j) {
                int tmp = row[i]; row[i] = row[j]; row[j] = tmp;
            }
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[][] mat = new int[n][n];
        for (int i = 0; i < n; ++i)
            for (int j = 0; j < n; ++j) mat[i][j] = sc.nextInt();
        rotate(mat);
        for (int[] row : mat) {
            for (int val : row) System.out.print(val + " ");
            System.out.println();
        }
    }
}`,
          python: `def rotate(matrix):
    matrix[:] = [list(row) for row in zip(*matrix)]
    for row in matrix: row.reverse()

n = int(input())
matrix = [list(map(int, input().split())) for _ in range(n)]
rotate(matrix)
for row in matrix: print(*row)`
        }
      },
      // Q20
      {
        title: "Kadane's Algorithm - Largest Sum Subarray",
        problem: `Find the maximum sum of a contiguous subarray.\n\nInput: [-2, 1, -3, 4, -1, 2, 1, -5, 4]\nOutput: 6\nExplanation: [4, -1, 2, 1] has largest sum = 6.`,
        examples: [
          { input: '-2 1 -3 4 -1 2 1 -5 4', output: '6', explanation: 'Subarray [4, -1, 2, 1] has largest sum = 6.' }
        ],
        solutions: {
          cpp: `#include <iostream>
#include <vector>
#include <climits>
using namespace std;
int main() {
    int n; cin >> n;
    vector<int> arr(n);
    for(int i = 0; i < n; ++i) cin >> arr[i];
    int max_sum = arr[0], curr_sum = arr[0];
    for(int i = 1; i < n; ++i) {
        curr_sum = max(arr[i], curr_sum + arr[i]);
        max_sum = max(max_sum, curr_sum);
    }
    cout << max_sum << endl;
    return 0;
}`,
          java: `import java.util.*;
public class Kadane {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for(int i = 0; i < n; i++) arr[i] = sc.nextInt();
        int maxSum = arr[0], currSum = arr[0];
        for(int i = 1; i < n; i++) {
            currSum = Math.max(arr[i], currSum + arr[i]);
            maxSum = Math.max(maxSum, currSum);
        }
        System.out.println(maxSum);
    }
}`,
          python: `arr = list(map(int, input().split()))
max_sum = curr_sum = arr[0]
for num in arr[1:]:
    curr_sum = max(num, curr_sum + num)
    max_sum = max(max_sum, curr_sum)
print(max_sum)`
        }
      }
    ]
  },

  // ═══════════════════════════════════════════════
  // COGNIZANT
  // ═══════════════════════════════════════════════
  {
    id: 'cognizant',
    name: 'Cognizant',
    icon: '<i class="ri-brain-fill"></i>',
    color: 'linear-gradient(135deg, #0033A0, #001F6B)',
    description: 'Coding questions from Cognizant GenC and GenC Next assessments covering arrays, strings, SQL, and logic.',
    tags: ['Arrays', 'Two Pointers', 'Strings', 'SQL', 'Logic'],
    questions: [
      {
        title: 'Conditional Subarrays',
        problem: `You have a sorted array A of N integers and a value X. Find all subarrays where sum of smallest + biggest element ≤ X. Return the count of such subarrays.`,
        examples: [
          { input: 'N=4, X=5, A={1,3,5,8}', output: '2', explanation: 'Subarrays where min+max ≤ 5.' }
        ],
        solutions: {
          cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
int countMiniBoxes(int N, int X, vector<int>& A) {
    int left = 0, right = N - 1, count = 0;
    while (left <= right) {
        if (A[left] + A[right] <= X) {
            count += (right - left + 1);
            left++;
        } else { right--; }
    }
    return count;
}
int main() {
    int N, X; cin >> N >> X;
    vector<int> A(N);
    for (int i = 0; i < N; i++) cin >> A[i];
    sort(A.begin(), A.end());
    cout << countMiniBoxes(N, X, A) << endl;
    return 0;
}`,
          java: `import java.util.*;
public class MiniBoxCounter {
    public static int countMiniBoxes(int N, int X, int[] A) {
        int left = 0, right = N - 1, count = 0;
        while (left <= right) {
            if (A[left] + A[right] <= X) {
                count += (right - left + 1); left++;
            } else { right--; }
        }
        return count;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt(), X = sc.nextInt();
        int[] A = new int[N];
        for (int i = 0; i < N; i++) A[i] = sc.nextInt();
        Arrays.sort(A);
        System.out.println(countMiniBoxes(N, X, A));
    }
}`,
          python: `def count_mini_boxes(N, X, A):
    left, right, count = 0, N - 1, 0
    while left <= right:
        if A[left] + A[right] <= X:
            count += (right - left + 1); left += 1
        else: right -= 1
    return count

N = int(input())
X = int(input())
A = list(map(int, input().split()))
A.sort()
print(count_mini_boxes(N, X, A))`
        }
      },
      {
        title: 'Palindromic String Count',
        problem: `Given a string S with missing characters replaced by '?', find the total number of palindromic strings modulo M that can be formed by replacing '?' with any letter a-z.`,
        examples: [
          { input: 'M=3, S=ca?d', output: '0', explanation: "c≠d, so no palindrome possible." }
        ],
        solutions: {
          cpp: `#include <iostream>
#include <string>
using namespace std;
int countPalindromicStrings(int M, string S) {
    int n = S.size();
    long long result = 1;
    for (int i = 0; i < n / 2; i++) {
        char a = S[i], b = S[n - 1 - i];
        if (a == '?' && b == '?') result = (result * 26) % M;
        else if (a == '?' || b == '?') continue;
        else if (a != b) return 0;
    }
    if (n % 2 == 1 && S[n / 2] == '?') result = (result * 26) % M;
    return result;
}
int main() {
    int M; string S;
    cin >> M >> S;
    cout << countPalindromicStrings(M, S) << endl;
    return 0;
}`,
          java: `import java.util.*;
public class PalindromeCount {
    public static int countPalindromicStrings(int M, String S) {
        int n = S.length();
        long result = 1;
        for (int i = 0; i < n / 2; i++) {
            char a = S.charAt(i), b = S.charAt(n - 1 - i);
            if (a == '?' && b == '?') result = (result * 26) % M;
            else if (a == '?' || b == '?') continue;
            else if (a != b) return 0;
        }
        if (n % 2 == 1 && S.charAt(n / 2) == '?') result = (result * 26) % M;
        return (int) result;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int M = sc.nextInt();
        String S = sc.next();
        System.out.println(countPalindromicStrings(M, S));
    }
}`,
          python: `def count_palindromic_strings(M, S):
    n = len(S)
    result = 1
    for i in range(n // 2):
        a, b = S[i], S[n - 1 - i]
        if a == '?' and b == '?': result = (result * 26) % M
        elif a == '?' or b == '?': continue
        elif a != b: return 0
    if n % 2 == 1 and S[n // 2] == '?': result = (result * 26) % M
    return result

M = int(input())
S = input()
print(count_palindromic_strings(M, S))`
        }
      },
      {
        title: 'Adjacent Sum Divisibility',
        problem: `Maria has array A = {1,2,...,N}. Create array B where B[i] = A[i]+A[i+1], and B[last] = A[last]+A[first]. Given X, return sum of elements in B divisible by X.`,
        examples: [
          { input: 'N=10, X=2', output: '0', explanation: 'B = {3,5,7,9,11,13,15,17,19,11}. No element divisible by 2.' }
        ],
        solutions: {
          cpp: `#include <iostream>
#include <vector>
using namespace std;
int specialSum(int N, int X) {
    vector<int> A(N);
    for (int i = 0; i < N; i++) A[i] = i + 1;
    vector<int> B;
    for (int i = 0; i < N - 1; i++) B.push_back(A[i] + A[i + 1]);
    B.push_back(A[N - 1] + A[0]);
    int total = 0;
    for (int val : B) if (val % X == 0) total += val;
    return total;
}
int main() {
    int N, X; cin >> N >> X;
    cout << specialSum(N, X) << endl;
    return 0;
}`,
          java: `import java.util.*;
public class SpecialSum {
    public static int specialSum(int N, int X) {
        int[] A = new int[N];
        for (int i = 0; i < N; i++) A[i] = i + 1;
        int[] B = new int[N];
        for (int i = 0; i < N - 1; i++) B[i] = A[i] + A[i + 1];
        B[N - 1] = A[N - 1] + A[0];
        int total = 0;
        for (int val : B) if (val % X == 0) total += val;
        return total;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt(), X = sc.nextInt();
        System.out.println(specialSum(N, X));
    }
}`,
          python: `def special_sum(N, X):
    A = list(range(1, N + 1))
    B = [A[i] + A[i + 1] for i in range(N - 1)]
    B.append(A[-1] + A[0])
    return sum(b for b in B if b % X == 0)

N = int(input())
X = int(input())
print(special_sum(N, X))`
        }
      },
      {
        title: 'Bookshelf Problem',
        problem: `N students each have some books. Shelves hold max K books and must be fully filled. Excess/deficit carries over. Find total number of fully filled bookshelves.`,
        examples: [
          { input: 'N=4, K=4, books=[5,7,8,10]', output: '7', explanation: 'Total=30, 30/4=7 full shelves with 2 leftover.' }
        ],
        solutions: {
          cpp: `#include <iostream>
#include <vector>
using namespace std;
int countFilledShelves(int N, int K, vector<int>& books) {
    int shelves = 0, carry = 0;
    for (int i = 0; i < N; i++) {
        int total = books[i] + carry;
        shelves += total / K;
        carry = total % K;
    }
    return shelves;
}
int main() {
    int N, K; cin >> N >> K;
    vector<int> books(N);
    for (int i = 0; i < N; i++) cin >> books[i];
    cout << countFilledShelves(N, K, books) << endl;
    return 0;
}`,
          java: `import java.util.*;
public class BookshelfCounter {
    public static int countFilledShelves(int N, int K, int[] books) {
        int shelves = 0, carry = 0;
        for (int i = 0; i < N; i++) {
            int total = books[i] + carry;
            shelves += total / K;
            carry = total % K;
        }
        return shelves;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt(), K = sc.nextInt();
        int[] books = new int[N];
        for (int i = 0; i < N; i++) books[i] = sc.nextInt();
        System.out.println(countFilledShelves(N, K, books));
    }
}`,
          python: `def count_filled_shelves(N, K, books):
    carry, shelves = 0, 0
    for b in books:
        total = b + carry
        shelves += total // K
        carry = total % K
    return shelves

N = int(input())
K = int(input())
books = list(map(int, input().split()))
print(count_filled_shelves(N, K, books))`
        }
      },
      {
        title: 'Lift Weight Capacity',
        problem: `A lift has max weight X. Given N people with weights, find the maximum number of people that can use the lift together without exceeding capacity.`,
        examples: [
          { input: 'N=3, X=9, weights=[5,1,5]', output: '2', explanation: 'Sort: [1,5,5]. Take 1+5=6 ≤ 9. Max 2 people.' }
        ],
        solutions: {
          cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
int maxPeople(int N, int X, vector<int>& A) {
    sort(A.begin(), A.end());
    int total = 0, count = 0;
    for (int w : A) {
        if (total + w <= X) { total += w; count++; }
        else break;
    }
    return count;
}
int main() {
    int N, X; cin >> N >> X;
    vector<int> A(N);
    for (int i = 0; i < N; i++) cin >> A[i];
    cout << maxPeople(N, X, A) << endl;
    return 0;
}`,
          java: `import java.util.*;
public class LiftCapacity {
    public static int maxPeople(int N, int X, int[] A) {
        Arrays.sort(A);
        int total = 0, count = 0;
        for (int w : A) {
            if (total + w <= X) { total += w; count++; }
            else break;
        }
        return count;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt(), X = sc.nextInt();
        int[] A = new int[N];
        for (int i = 0; i < N; i++) A[i] = sc.nextInt();
        System.out.println(maxPeople(N, X, A));
    }
}`,
          python: `def max_people(N, X, A):
    A.sort()
    total, count = 0, 0
    for w in A:
        if total + w <= X: total += w; count += 1
        else: break
    return count

N = int(input())
X = int(input())
A = list(map(int, input().split()))
print(max_people(N, X, A))`
        }
      },
      {
        title: 'Unique Airport Codes',
        problem: `Given a string of length N, split it into groups of 3 characters. Find how many unique groups exist (considering sorted order of characters within each group).`,
        examples: [
          { input: 'N=12, S=ABCZABCADDAC', output: '3', explanation: 'Groups: ABC, ZAB, CAD, DAC. Sorted: ABC, ABZ, ACD, ACD → 3 unique.' }
        ],
        solutions: {
          cpp: `#include <iostream>
#include <set>
#include <algorithm>
using namespace std;
int uniqueCodes(int N, string S) {
    set<string> seen;
    for (int i = 0; i < N; i += 3) {
        string code = S.substr(i, 3);
        sort(code.begin(), code.end());
        seen.insert(code);
    }
    return seen.size();
}
int main() {
    int N; string S;
    cin >> N >> S;
    cout << uniqueCodes(N, S) << endl;
    return 0;
}`,
          java: `import java.util.*;
public class UniqueAirportCodes {
    public static int uniqueCodes(int N, String S) {
        Set<String> seen = new HashSet<>();
        for (int i = 0; i < N; i += 3) {
            char[] chars = S.substring(i, i + 3).toCharArray();
            Arrays.sort(chars);
            seen.add(new String(chars));
        }
        return seen.size();
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        String S = sc.next();
        System.out.println(uniqueCodes(N, S));
    }
}`,
          python: `def unique_codes(N, S):
    seen = set()
    for i in range(0, N, 3):
        code = ''.join(sorted(S[i:i+3]))
        seen.add(code)
    return len(seen)

N = int(input())
S = input()
print(unique_codes(N, S))`
        }
      },
      {
        title: 'Moving Stones (Three Stones Game)',
        problem: `Given three stone positions a, b, c, find the minimum and maximum number of moves to make them consecutive. A move consists of moving one stone to any unoccupied position.`,
        examples: [
          { input: 'a=1, b=2, c=5', output: '[1,2]', explanation: 'Move stone from 5 to 3. Min=1, Max=2.' },
          { input: 'a=4, b=3, c=2', output: '[0,0]', explanation: 'Already consecutive.' }
        ],
        solutions: {
          cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
vector<int> numMovesStones(int a, int b, int c) {
    vector<int> stones = {a, b, c};
    sort(stones.begin(), stones.end());
    int x = stones[0], y = stones[1], z = stones[2];
    int max_moves = (y - x - 1) + (z - y - 1);
    int min_moves = 0;
    if (y - x == 1 && z - y == 1) min_moves = 0;
    else if (y - x <= 2 || z - y <= 2) min_moves = 1;
    else min_moves = 2;
    return {min_moves, max_moves};
}
int main() {
    int a, b, c; cin >> a >> b >> c;
    auto res = numMovesStones(a, b, c);
    cout << "[" << res[0] << ", " << res[1] << "]\\n";
    return 0;
}`,
          java: `import java.util.*;
public class ThreeStonesGame {
    public static int[] numMovesStones(int a, int b, int c) {
        int[] stones = {a, b, c};
        Arrays.sort(stones);
        int x = stones[0], y = stones[1], z = stones[2];
        if (z - x == 2) return new int[]{0, 0};
        else if (y - x <= 2 || z - y <= 2) return new int[]{1, z - x - 2};
        else return new int[]{2, z - x - 2};
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt(), b = sc.nextInt(), c = sc.nextInt();
        int[] res = numMovesStones(a, b, c);
        System.out.println("[" + res[0] + ", " + res[1] + "]");
    }
}`,
          python: `def numMovesStones(a, b, c):
    x, y, z = sorted([a, b, c])
    if z - x == 2: return [0, 0]
    elif y - x <= 2 or z - y <= 2: return [1, z - x - 2]
    else: return [2, z - x - 2]

a, b, c = int(input()), int(input()), int(input())
print(numMovesStones(a, b, c))`
        }
      },
      {
        title: 'Reverse Array if Half Sum Condition',
        problem: `Check if sum of first half of array is less than sum of second half. If yes, reverse the entire array. Print the result.`,
        examples: [
          { input: '6\\n1 2 3 10 11 12', output: '12 11 10 3 2 1', explanation: 'Sum first half=6, second half=33. 6<33, so reverse.' }
        ],
        solutions: {
          cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
int main() {
    int n; cin >> n;
    vector<int> arr(n);
    for (int i = 0; i < n; i++) cin >> arr[i];
    int mid = n / 2, sum1 = 0, sum2 = 0;
    for (int i = 0; i < mid; i++) sum1 += arr[i];
    for (int i = mid; i < n; i++) sum2 += arr[i];
    if (sum1 < sum2) reverse(arr.begin(), arr.end());
    for (int i = 0; i < n; i++) cout << arr[i] << " ";
    return 0;
}`,
          java: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) arr[i] = sc.nextInt();
        int mid = n / 2, sum1 = 0, sum2 = 0;
        for (int i = 0; i < mid; i++) sum1 += arr[i];
        for (int i = mid; i < n; i++) sum2 += arr[i];
        if (sum1 < sum2) {
            for (int i = 0; i < n / 2; i++) {
                int temp = arr[i]; arr[i] = arr[n-1-i]; arr[n-1-i] = temp;
            }
        }
        for (int i = 0; i < n; i++) System.out.print(arr[i] + " ");
    }
}`,
          python: `n = int(input())
arr = list(map(int, input().split()))
mid = n // 2
if sum(arr[:mid]) < sum(arr[mid:]): arr.reverse()
print(*arr)`
        }
      },
      {
        title: 'Fuel Consumption Calculator',
        problem: `Calculate fuel consumption in liters/100km and miles/gallon. 1 km = 0.6214 miles, 1 liter = 0.2642 gallons. Display "Invalid Input" for zero/negative values.`,
        examples: [
          { input: 'Liters: 20, Distance: 150', output: 'Liters/100KM: 13.33\\nMiles/gallons: 17.64', explanation: '(20/150)*100=13.33. Miles=93.21, Gallons=5.284, MPG=17.64.' }
        ],
        solutions: {
          cpp: `#include <iostream>
#include <iomanip>
using namespace std;
int main() {
    float liters, distance;
    cin >> liters;
    if (liters <= 0) { cout << (int)liters << " is an Invalid Input\\n"; return 0; }
    cin >> distance;
    if (distance <= 0) { cout << (int)distance << " is an Invalid Input\\n"; return 0; }
    float litersPer100km = (liters / distance) * 100;
    float miles = distance * 0.6214;
    float gallons = liters * 0.2642;
    float milesPerGallon = miles / gallons;
    cout << fixed << setprecision(2) << "Liters/100KM\\n" << litersPer100km << endl;
    cout << "Miles/gallons\\n" << milesPerGallon << endl;
    return 0;
}`,
          java: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        float liters = sc.nextFloat();
        if (liters <= 0) { System.out.printf("%.0f is an Invalid Input\\n", liters); return; }
        float distance = sc.nextFloat();
        if (distance <= 0) { System.out.printf("%.0f is an Invalid Input\\n", distance); return; }
        float litersPer100km = (liters / distance) * 100;
        float miles = distance * 0.6214f;
        float gallons = liters * 0.2642f;
        System.out.printf("Liters/100KM\\n%.2f\\nMiles/gallons\\n%.2f\\n", litersPer100km, miles / gallons);
    }
}`,
          python: `liters = float(input())
if liters <= 0:
    print(f"{int(liters)} is an Invalid Input")
else:
    distance = float(input())
    if distance <= 0:
        print(f"{int(distance)} is an Invalid Input")
    else:
        print(f"Liters/100KM\\n{(liters / distance) * 100:.2f}")
        print(f"Miles/gallons\\n{(distance * 0.6214) / (liters * 0.2642):.2f}")`
        }
      },
      {
        title: 'Movie Snacks Bill Generator',
        problem: `Vohra buys pizzas (Rs.100), puffs (Rs.20), and cool drinks (Rs.10). Generate the total bill.`,
        examples: [
          { input: 'Pizzas:10, Puffs:12, Cooldrinks:5', output: 'Total price=1290', explanation: '10*100 + 12*20 + 5*10 = 1290.' }
        ],
        solutions: {
          cpp: `#include <iostream>
using namespace std;
int main() {
    int pizzas, puffs, cooldrinks;
    cin >> pizzas >> puffs >> cooldrinks;
    int total = (pizzas * 100) + (puffs * 20) + (cooldrinks * 10);
    cout << "No of pizzas:" << pizzas << endl;
    cout << "No of puffs:" << puffs << endl;
    cout << "No of cooldrinks:" << cooldrinks << endl;
    cout << "Total price=" << total << endl;
    cout << "ENJOY THE SHOW!!!" << endl;
    return 0;
}`,
          java: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int pizzas = sc.nextInt(), puffs = sc.nextInt(), cooldrinks = sc.nextInt();
        int total = (pizzas * 100) + (puffs * 20) + (cooldrinks * 10);
        System.out.println("Total price=" + total);
        System.out.println("ENJOY THE SHOW!!!");
    }
}`,
          python: `pizzas = int(input())
puffs = int(input())
cooldrinks = int(input())
total = (pizzas * 100) + (puffs * 20) + (cooldrinks * 10)
print(f"Total price={total}")
print("ENJOY THE SHOW!!!")`
        }
      }
    ]
  },

  // ═══════════════════════════════════════════════
  // TECH MAHINDRA
  // ═══════════════════════════════════════════════
  {
    id: 'tech-mahindra',
    name: 'Tech Mahindra',
    icon: '<i class="ri-settings-3-fill"></i>',
    color: 'linear-gradient(135deg, #E4002B, #B30022)',
    description: 'Coding questions from Tech Mahindra covering math sequences, encryption, arrays, and string operations.',
    tags: ['Math', 'Arrays', 'Strings', 'Encryption', 'DP'],
    questions: [
      {
        title: 'Geometric Progression - Nth Term',
        problem: `Given the 2nd and 3rd terms of a G.P., find the nth term. Calculate ratio r = third/second, first term a = second/r, then nth = a * r^(n-1).`,
        examples: [
          { input: 'second=6, third=18, n=5', output: '162', explanation: 'r=3, a=2. 5th term = 2 * 3^4 = 162.' }
        ],
        solutions: {
          cpp: `#include <iostream>
#include <cmath>
using namespace std;
int main() {
    double second, third; int n;
    cin >> second >> third >> n;
    double r = third / second;
    double a = second / r;
    double nth_term = a * pow(r, n - 1);
    cout << nth_term << endl;
    return 0;
}`,
          java: `import java.util.Scanner;
public class GP_TermFinder {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double second = sc.nextDouble(), third = sc.nextDouble();
        int n = sc.nextInt();
        double r = third / second;
        double a = second / r;
        System.out.printf("%.2f\\n", a * Math.pow(r, n - 1));
    }
}`,
          python: `second = float(input())
third = float(input())
n = int(input())
r = third / second
a = second / r
print(a * (r ** (n - 1)))`
        }
      },
      {
        title: 'Decrypt Caesar Cipher (Shift -3)',
        problem: `A message is encrypted by replacing each letter with the letter 3 positions to the left. Decrypt by shifting 3 positions to the right.`,
        examples: [
          { input: 'nrfzh', output: 'quick', explanation: 'Each letter shifted +3: n→q, r→u, f→i, z→c, h→k.' }
        ],
        solutions: {
          cpp: `#include <iostream>
using namespace std;
int main() {
    string encrypted, decrypted = "";
    cin >> encrypted;
    for (char ch : encrypted) {
        char original = (ch - 'a' + 3) % 26 + 'a';
        decrypted += original;
    }
    cout << decrypted << endl;
    return 0;
}`,
          java: `import java.util.Scanner;
public class DecryptMessage {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String encrypted = sc.nextLine();
        StringBuilder decrypted = new StringBuilder();
        for (char ch : encrypted.toCharArray()) {
            char original = (char)((ch - 'a' + 3) % 26 + 'a');
            decrypted.append(original);
        }
        System.out.println(decrypted);
    }
}`,
          python: `encrypted = input()
decrypted = ""
for ch in encrypted:
    original = chr((ord(ch) - ord('a') + 3) % 26 + ord('a'))
    decrypted += original
print(decrypted)`
        }
      },
      {
        title: 'Odd-Even Count Difference',
        problem: `Given an array of integers, return the difference between the count of odd numbers and even numbers.`,
        examples: [
          { input: '8\\n10 20 30 40 55 66 77 83', output: '-2', explanation: '3 odd - 5 even = -2.' }
        ],
        solutions: {
          cpp: `#include <iostream>
using namespace std;
int countOddEvenDifference(int n, int arr[]) {
    int odd = 0, even = 0;
    for (int i = 0; i < n; i++) {
        if (arr[i] % 2 == 0) even++; else odd++;
    }
    return odd - even;
}
int main() {
    int n; cin >> n;
    int arr[n];
    for (int i = 0; i < n; i++) cin >> arr[i];
    cout << countOddEvenDifference(n, arr) << endl;
    return 0;
}`,
          java: `import java.util.Scanner;
public class Main {
    public static int countOddEvenDifference(int n, int[] arr) {
        int odd = 0, even = 0;
        for (int num : arr) { if (num % 2 == 0) even++; else odd++; }
        return odd - even;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) arr[i] = sc.nextInt();
        System.out.println(countOddEvenDifference(n, arr));
    }
}`,
          python: `def countOddEvenDifference(n, arr):
    odd = sum(1 for x in arr if x % 2 != 0)
    even = sum(1 for x in arr if x % 2 == 0)
    return odd - even

n = int(input())
arr = list(map(int, input().split()))
print(countOddEvenDifference(n, arr))`
        }
      },
      {
        title: 'Security Key - Unique Repeating Digits',
        problem: `Given an integer, count the number of unique digits that repeat (appear more than once). This count is the "security key".`,
        examples: [
          { input: '12345', output: '0', explanation: 'No digit repeats.' },
          { input: '121342', output: '2', explanation: 'Digits 1 and 2 repeat. Security key = 2.' }
        ],
        solutions: {
          cpp: `#include <iostream>
#include <string>
using namespace std;
int findSecurityKey(int num) {
    int freq[10] = {0};
    string data = to_string(num);
    for (char ch : data) freq[ch - '0']++;
    int count = 0;
    for (int i = 0; i < 10; ++i) if (freq[i] > 1) count++;
    return count;
}
int main() {
    int num; cin >> num;
    cout << findSecurityKey(num);
    return 0;
}`,
          java: `import java.util.Scanner;
public class SecurityKey {
    public static int findSecurityKey(int num) {
        int[] freq = new int[10];
        for (char c : String.valueOf(num).toCharArray()) freq[c - '0']++;
        int count = 0;
        for (int f : freq) if (f > 1) count++;
        return count;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println(findSecurityKey(sc.nextInt()));
    }
}`,
          python: `def find_security_key(num):
    freq = [0] * 10
    for digit in str(num): freq[int(digit)] += 1
    return sum(1 for f in freq if f > 1)

print(find_security_key(int(input())))`
        }
      },
      {
        title: 'Sum of Absolute Differences from Position',
        problem: `Calculate the sum of absolute differences between adjacent elements in an array, starting from a given position.`,
        examples: [
          { input: '7\\n1 2 3 6 4 6 3\\n3', output: '10', explanation: 'From position 3: |6-4|+|4-6|+|6-3| = 2+2+3 = ... Starting from pos 3: |3-6|+|6-4|+|4-6|+|6-3| = 3+2+2+3 = 10.' }
        ],
        solutions: {
          cpp: `#include <iostream>
#include <vector>
#include <cmath>
using namespace std;
int sumAbsoluteDifferences(const vector<int>& arr, int pos) {
    int sum = 0;
    for (int i = pos - 1; i < arr.size() - 1; ++i)
        sum += abs(arr[i + 1] - arr[i]);
    return sum;
}
int main() {
    int n, pos; cin >> n;
    vector<int> arr(n);
    for (int i = 0; i < n; i++) cin >> arr[i];
    cin >> pos;
    cout << sumAbsoluteDifferences(arr, pos) << endl;
    return 0;
}`,
          java: `import java.util.Scanner;
public class AbsoluteDifferenceSum {
    public static int sumAbsoluteDifferences(int[] arr, int pos) {
        int sum = 0;
        for (int i = pos - 1; i < arr.length - 1; i++)
            sum += Math.abs(arr[i + 1] - arr[i]);
        return sum;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) arr[i] = sc.nextInt();
        int pos = sc.nextInt();
        System.out.println(sumAbsoluteDifferences(arr, pos));
    }
}`,
          python: `def sum_absolute_differences(arr, pos):
    total = 0
    for i in range(pos - 1, len(arr) - 1):
        total += abs(arr[i + 1] - arr[i])
    return total

n = int(input())
arr = list(map(int, input().split()))
pos = int(input())
print(sum_absolute_differences(arr, pos))`
        }
      },
      {
        title: 'Max Revenue Per Day',
        problem: `Given M days and N products with daily sales revenue, find the maximum revenue received each day.`,
        examples: [
          { input: '3 4\\n100 198 333 323\\n122 232 221 111\\n223 565 245 764', output: '333 232 764', explanation: 'Max of each row.' }
        ],
        solutions: {
          cpp: `#include <iostream>
#include <climits>
using namespace std;
int main() {
    int M, N; cin >> M >> N;
    for (int i = 0; i < M; i++) {
        int max_val = INT_MIN;
        for (int j = 0; j < N; j++) {
            int sale; cin >> sale;
            if (sale > max_val) max_val = sale;
        }
        cout << max_val << " ";
    }
    return 0;
}`,
          java: `import java.util.Scanner;
public class MaxSalesPerDay {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int M = sc.nextInt(), N = sc.nextInt();
        for (int i = 0; i < M; i++) {
            int max = Integer.MIN_VALUE;
            for (int j = 0; j < N; j++) {
                int val = sc.nextInt();
                if (val > max) max = val;
            }
            System.out.print(max + " ");
        }
    }
}`,
          python: `M, N = map(int, input().split())
for _ in range(M):
    row = list(map(int, input().split()))
    print(max(row), end=" ")`
        }
      },
      {
        title: 'Total Distance Between Adjacent Items',
        problem: `Calculate the sum of absolute distances between adjacent numbers in an array.`,
        examples: [
          { input: '5\\n10 11 7 12 14', output: '12', explanation: '|11-10|+|7-11|+|12-7|+|14-12| = 1+4+5+2 = 12.' }
        ],
        solutions: {
          cpp: `#include <iostream>
#include <cmath>
using namespace std;
int findTotalDistance(int n, int arr[]) {
    int total = 0;
    for (int i = 0; i < n - 1; ++i)
        total += abs(arr[i+1] - arr[i]);
    return total;
}
int main() {
    int arr[] = {10, 11, 7, 12, 14};
    int n = sizeof(arr) / sizeof(arr[0]);
    cout << findTotalDistance(n, arr);
    return 0;
}`,
          java: `public class DistanceCalculator {
    public static int findTotalDistance(int n, int[] arr) {
        int total = 0;
        for (int i = 0; i < n - 1; i++)
            total += Math.abs(arr[i+1] - arr[i]);
        return total;
    }
    public static void main(String[] args) {
        int[] arr = {10, 11, 7, 12, 14};
        System.out.println(findTotalDistance(arr.length, arr));
    }
}`,
          python: `def findTotalDistance(n, arr):
    return sum(abs(arr[i+1] - arr[i]) for i in range(n - 1))

arr = [10, 11, 7, 12, 14]
print(findTotalDistance(len(arr), arr))`
        }
      },
      {
        title: 'Product of Digits',
        problem: `Calculate the product of all digits of a given integer.`,
        examples: [
          { input: '345', output: '60', explanation: '3 × 4 × 5 = 60.' }
        ],
        solutions: {
          cpp: `#include <iostream>
using namespace std;
int main() {
    int num; cin >> num;
    int product = 1;
    if (num == 0) { product = 0; }
    else { while (num > 0) { product *= num % 10; num /= 10; } }
    cout << product << endl;
    return 0;
}`,
          java: `import java.util.Scanner;
public class ProductOfDigits {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        int product = 1;
        if (num == 0) product = 0;
        else { while (num > 0) { product *= num % 10; num /= 10; } }
        System.out.println(product);
    }
}`,
          python: `num = int(input())
product = 1
if num == 0: product = 0
else:
    while num > 0:
        product *= num % 10
        num //= 10
print(product)`
        }
      },
      {
        title: 'Curtains from Cloth Pieces',
        problem: `A cloth merchant has pieces of different lengths. Each curtain requires 12 feet. Find total curtains that can be made from all pieces combined (each piece independently).`,
        examples: [
          { input: '5\\n3 42 60 6 14', output: '9', explanation: '0+3+5+0+1 = 9 curtains.' }
        ],
        solutions: {
          cpp: `#include <iostream>
using namespace std;
int main() {
    int n; cin >> n;
    int length, totalCurtains = 0;
    for (int i = 0; i < n; i++) {
        cin >> length;
        totalCurtains += length / 12;
    }
    cout << totalCurtains << endl;
    return 0;
}`,
          java: `import java.util.Scanner;
public class Curtains {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt(), total = 0;
        for (int i = 0; i < n; i++) total += sc.nextInt() / 12;
        System.out.println(total);
    }
}`,
          python: `n = int(input())
lengths = list(map(int, input().split()))
print(sum(l // 12 for l in lengths))`
        }
      },
      {
        title: 'Vowel and Consonant Counter',
        problem: `Count the number of vowels and consonants in a given string (ignoring non-alphabetic characters).`,
        examples: [
          { input: 'Hello World', output: 'Vowels: 3\\nConsonants: 7', explanation: 'e, o, o are vowels. H, l, l, W, r, l, d are consonants.' }
        ],
        solutions: {
          cpp: `#include <iostream>
#include <cctype>
using namespace std;
int main() {
    string str;
    getline(cin, str);
    int vowels = 0, consonants = 0;
    for (char ch : str) {
        ch = tolower(ch);
        if (isalpha(ch)) {
            if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') vowels++;
            else consonants++;
        }
    }
    cout << "Vowels: " << vowels << endl;
    cout << "Consonants: " << consonants << endl;
    return 0;
}`,
          java: `import java.util.Scanner;
public class VowelConsonantCounter {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String input = sc.nextLine().toLowerCase();
        int vowels = 0, consonants = 0;
        for (char ch : input.toCharArray()) {
            if (Character.isLetter(ch)) {
                if ("aeiou".indexOf(ch) != -1) vowels++;
                else consonants++;
            }
        }
        System.out.println("Vowels: " + vowels);
        System.out.println("Consonants: " + consonants);
    }
}`,
          python: `string = input().lower()
vowels = consonants = 0
for char in string:
    if char.isalpha():
        if char in 'aeiou': vowels += 1
        else: consonants += 1
print("Vowels:", vowels)
print("Consonants:", consonants)`
        }
      }
    ]
  },

  // ═══════════════════════════════════════════════
  // TCS
  // ═══════════════════════════════════════════════
  {
    id: 'tcs',
    name: 'TCS',
    icon: '<i class="ri-shield-star-fill"></i>',
    color: 'linear-gradient(135deg, #0062B8, #003D73)',
    description: 'TCS NQT and interview coding questions covering majority elements, sorting, missing numbers, and dynamic programming.',
    tags: ['Arrays', 'Sorting', 'DP', 'Hashing', 'Math'],
    questions: [
      {
        title: 'Majority Element (N/3)',
        problem: `In a kingdom's council, find opinions supported by more than N/3 nobles.`,
        examples: [
          { input: '1 2 3 2 2 4 2', output: '2', explanation: '7 elements. N/3=2.33. Element 2 appears 4 times (> 2.33).' }
        ],
        solutions: {
          cpp: `#include <iostream>
#include <unordered_map>
#include <sstream>
using namespace std;
int main() {
    string line; getline(cin, line);
    stringstream ss(line);
    int num, count = 0;
    unordered_map<int, int> freq;
    while (ss >> num) { freq[num]++; count++; }
    bool found = false;
    for (auto &p : freq) {
        if (p.second > count / 3) { cout << p.first << " "; found = true; }
    }
    if (!found) cout << "No Majority";
    return 0;
}`,
          java: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String[] input = sc.nextLine().split("\\\\s+");
        Map<Integer, Integer> freq = new HashMap<>();
        int N = input.length;
        for (String s : input) {
            int num = Integer.parseInt(s);
            freq.put(num, freq.getOrDefault(num, 0) + 1);
        }
        boolean found = false;
        for (int key : freq.keySet()) {
            if (freq.get(key) > N / 3) { System.out.print(key + " "); found = true; }
        }
        if (!found) System.out.print("No Majority");
    }
}`,
          python: `from collections import defaultdict
arr = list(map(int, input().split()))
N = len(arr)
freq = defaultdict(int)
for num in arr: freq[num] += 1
found = False
for key in freq:
    if freq[key] > N // 3: print(key, end=" "); found = True
if not found: print("No Majority")`
        }
      },
      {
        title: 'Dutch National Flag (Sort 3, 6, 7)',
        problem: `Sort an array containing only 3, 6, and 7 such that all 3s come first, then 6s, then 7s. Use 3-way partitioning.`,
        examples: [
          { input: '3 7 6 7 3 6 3', output: '3 3 3 6 6 7 7', explanation: 'Dutch National Flag algorithm applied.' }
        ],
        solutions: {
          cpp: `#include <iostream>
#include <vector>
using namespace std;
int main() {
    vector<char> arr;
    char x;
    while (cin >> x) { arr.push_back(x); if (cin.peek() == '\\n') break; }
    int left = 0, mid = 0, right = arr.size() - 1;
    while (mid <= right) {
        if (arr[mid] == '3') swap(arr[left++], arr[mid++]);
        else if (arr[mid] == '6') mid++;
        else if (arr[mid] == '7') swap(arr[mid], arr[right--]);
        else mid++;
    }
    for (char c : arr) cout << c << " ";
    return 0;
}`,
          java: `import java.util.*;
public class SortBySwap {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String[] input = scanner.nextLine().split("\\\\s+");
        char[] arr = new char[input.length];
        for (int i = 0; i < input.length; i++) arr[i] = input[i].charAt(0);
        int left = 0, mid = 0, right = arr.length - 1;
        while (mid <= right) {
            if (arr[mid] == '3') { char t = arr[left]; arr[left] = arr[mid]; arr[mid] = t; left++; mid++; }
            else if (arr[mid] == '6') mid++;
            else if (arr[mid] == '7') { char t = arr[right]; arr[right] = arr[mid]; arr[mid] = t; right--; }
            else mid++;
        }
        for (char c : arr) System.out.print(c + " ");
    }
}`,
          python: `arr = input().split()
left, mid, right = 0, 0, len(arr) - 1
while mid <= right:
    if arr[mid] == '3':
        arr[left], arr[mid] = arr[mid], arr[left]; left += 1; mid += 1
    elif arr[mid] == '6': mid += 1
    elif arr[mid] == '7':
        arr[mid], arr[right] = arr[right], arr[mid]; right -= 1
    else: mid += 1
print(" ".join(arr))`
        }
      },
      {
        title: 'Find Missing Number',
        problem: `Children numbered 1 to N, one forgot their tag. Given N-1 tags, find the missing number using sum formula.`,
        examples: [
          { input: 'N=5, given: 1 2 4 5', output: '3', explanation: 'Expected sum=15, given sum=12. Missing=3.' }
        ],
        solutions: {
          cpp: `#include <iostream>
#include <vector>
using namespace std;
int main() {
    int N; cin >> N;
    vector<int> arr(N - 1);
    int sum = 0;
    for (int i = 0; i < N - 1; ++i) { cin >> arr[i]; sum += arr[i]; }
    cout << (N * (N + 1)) / 2 - sum << endl;
    return 0;
}`,
          java: `import java.util.*;
public class MissingNumberFinder {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int sum = 0;
        for (int i = 0; i < N - 1; i++) sum += sc.nextInt();
        System.out.println(N * (N + 1) / 2 - sum);
    }
}`,
          python: `N = int(input())
arr = list(map(int, input().split()))
print(N * (N + 1) // 2 - sum(arr))`
        }
      },
      {
        title: 'Prime Numbers with Prime Digit Sum',
        problem: `Find all primes in range [n, m] where the sum of the prime's digits is also prime.`,
        examples: [
          { input: '10 30', output: '11\\n23\\n29', explanation: '11: 1+1=2 (prime). 23: 2+3=5 (prime). 29: 2+9=11 (prime).' }
        ],
        solutions: {
          cpp: `#include <iostream>
using namespace std;
bool isPrime(int n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 == 0 || n % 3 == 0) return false;
    for (int i = 5; i * i <= n; i += 6)
        if (n % i == 0 || n % (i + 2) == 0) return false;
    return true;
}
bool sumIsPrime(int n) {
    int sum = 0;
    while (n > 0) { sum += n % 10; n /= 10; }
    return isPrime(sum);
}
int main() {
    int n, m; cin >> n >> m;
    for (int i = n; i <= m; i++)
        if (isPrime(i) && sumIsPrime(i)) cout << i << "\\n";
    return 0;
}`,
          java: `import java.util.Scanner;
public class Main {
    public static boolean isPrime(int n) {
        if (n <= 1) return false;
        if (n <= 3) return true;
        if (n % 2 == 0 || n % 3 == 0) return false;
        for (int i = 5; i * i <= n; i += 6)
            if (n % i == 0 || n % (i + 2) == 0) return false;
        return true;
    }
    public static boolean sumIsPrime(int n) {
        int sum = 0;
        while (n > 0) { sum += n % 10; n /= 10; }
        return isPrime(sum);
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt(), m = sc.nextInt();
        for (int i = n; i <= m; i++)
            if (isPrime(i) && sumIsPrime(i)) System.out.println(i);
    }
}`,
          python: `def is_prime(n):
    if n <= 1: return False
    if n <= 3: return True
    if n % 2 == 0 or n % 3 == 0: return False
    i = 5
    while i * i <= n:
        if n % i == 0 or n % (i + 2) == 0: return False
        i += 6
    return True

n, m = map(int, input().split())
for i in range(n, m + 1):
    if is_prime(i) and is_prime(sum(int(d) for d in str(i))):
        print(i)`
        }
      },
      {
        title: 'FizzBuzz (ThreeFive)',
        problem: `For each number: print "ThreeFive" if divisible by both 3 and 5, "Five" if only by 5, "Three" if only by 3, otherwise the number itself.`,
        examples: [
          { input: '5\\n1 3 5 15 16', output: '1 Three Five ThreeFive 16', explanation: 'Standard FizzBuzz variant.' }
        ],
        solutions: {
          cpp: `#include <iostream>
using namespace std;
int main() {
    int n; cin >> n;
    for (int i = 0; i < n; i++) {
        int num; cin >> num;
        if (num % 3 == 0 && num % 5 == 0) cout << "ThreeFive ";
        else if (num % 5 == 0) cout << "Five ";
        else if (num % 3 == 0) cout << "Three ";
        else cout << num << " ";
    }
    return 0;
}`,
          java: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        for (int i = 0; i < n; i++) {
            int num = sc.nextInt();
            if (num % 3 == 0 && num % 5 == 0) System.out.print("ThreeFive ");
            else if (num % 5 == 0) System.out.print("Five ");
            else if (num % 3 == 0) System.out.print("Three ");
            else System.out.print(num + " ");
        }
    }
}`,
          python: `n = int(input())
arr = list(map(int, input().split()))
for num in arr:
    if num % 3 == 0 and num % 5 == 0: print("ThreeFive", end=" ")
    elif num % 5 == 0: print("Five", end=" ")
    elif num % 3 == 0: print("Three", end=" ")
    else: print(num, end=" ")`
        }
      },
      {
        title: 'Top K Students by Marks',
        problem: `Given students with marks, print the top K students ranked by marks in descending order.`,
        examples: [
          { input: '3 5\\n85 Alice\\n92 Bob\\n78 Charlie\\n90 David\\n88 Eva', output: 'Bob: 92\\nDavid: 90\\nAlice: 85', explanation: 'Top 3 sorted by marks descending.' }
        ],
        solutions: {
          cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
int main() {
    int k, N; cin >> k >> N;
    vector<pair<int, string>> students;
    for (int i = 0; i < N; i++) {
        int marks; string name;
        cin >> marks >> name;
        students.push_back({marks, name});
    }
    sort(students.begin(), students.end(), [](auto &a, auto &b) { return a.first > b.first; });
    for (int i = 0; i < k && i < (int)students.size(); i++)
        cout << students[i].second << ": " << students[i].first << "\\n";
    return 0;
}`,
          java: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int k = sc.nextInt(), N = sc.nextInt();
        List<int[]> students = new ArrayList<>();
        List<String> names = new ArrayList<>();
        for (int i = 0; i < N; i++) {
            int marks = sc.nextInt();
            String name = sc.next();
            students.add(new int[]{marks, i});
            names.add(name);
        }
        students.sort((a, b) -> b[0] - a[0]);
        for (int i = 0; i < k && i < students.size(); i++)
            System.out.println(names.get(students.get(i)[1]) + ": " + students.get(i)[0]);
    }
}`,
          python: `k, N = map(int, input().split())
students = []
for _ in range(N):
    marks, name = input().split()
    students.append((int(marks), name))
students.sort(key=lambda x: x[0], reverse=True)
for i in range(min(k, len(students))):
    print(f"{students[i][1]}: {students[i][0]}")`
        }
      },
      {
        title: 'Armstrong Numbers from List',
        problem: `Find all Armstrong numbers from a given list. An Armstrong number equals the sum of its digits each raised to the power of the number of digits.`,
        examples: [
          { input: '1 153 370 100 371', output: '1 153 370 371', explanation: '153 = 1³+5³+3³. 370 = 3³+7³+0³. 371 = 3³+7³+1³.' }
        ],
        solutions: {
          cpp: `#include <iostream>
#include <cmath>
#include <sstream>
using namespace std;
bool isArmstrong(int num) {
    int sum = 0, temp = num;
    int digits = to_string(num).length();
    while (temp > 0) { sum += pow(temp % 10, digits); temp /= 10; }
    return sum == num;
}
int main() {
    string line; getline(cin, line);
    stringstream ss(line);
    int num;
    while (ss >> num) if (isArmstrong(num)) cout << num << " ";
    return 0;
}`,
          java: `import java.util.Scanner;
public class Main {
    public static boolean isArmstrong(int num) {
        int sum = 0, temp = num;
        int digits = String.valueOf(num).length();
        while (temp > 0) { sum += Math.pow(temp % 10, digits); temp /= 10; }
        return sum == num;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String[] nums = sc.nextLine().split("\\\\s+");
        for (String s : nums) {
            int num = Integer.parseInt(s);
            if (isArmstrong(num)) System.out.print(num + " ");
        }
    }
}`,
          python: `def is_armstrong(num):
    digits = len(str(num))
    return num == sum(int(d)**digits for d in str(num))

nums = input().split()
for n in nums:
    if is_armstrong(int(n)): print(int(n), end=" ")`
        }
      },
      {
        title: 'Sum of Unique Elements',
        problem: `Find the sum of all elements that appear exactly once in a list.`,
        examples: [
          { input: '1 2 2 3 4 4 5', output: '9', explanation: 'Unique: 1, 3, 5. Sum = 9.' }
        ],
        solutions: {
          cpp: `#include <iostream>
#include <unordered_map>
#include <sstream>
using namespace std;
int main() {
    unordered_map<int,int> freq;
    int num;
    string line; getline(cin, line);
    istringstream ss(line);
    while (ss >> num) freq[num]++;
    int sum = 0;
    for (auto &p : freq) if (p.second == 1) sum += p.first;
    cout << sum << endl;
    return 0;
}`,
          java: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String[] nums = sc.nextLine().split(" ");
        Map<Integer, Integer> freq = new HashMap<>();
        for (String s : nums) {
            int n = Integer.parseInt(s);
            freq.put(n, freq.getOrDefault(n, 0) + 1);
        }
        int sum = 0;
        for (int key : freq.keySet()) if (freq.get(key) == 1) sum += key;
        System.out.println(sum);
    }
}`,
          python: `nums = list(map(int, input().split()))
freq = {}
for num in nums: freq[num] = freq.get(num, 0) + 1
print(sum(k for k, v in freq.items() if v == 1))`
        }
      },
      {
        title: 'Shipping Cost Calculator',
        problem: `Calculate total shipping cost: Base=$5, $2/kg, $0.50 per 10km.`,
        examples: [
          { input: '10 25', output: '$26.25', explanation: '5 + 10*2 + (25/10)*0.5 = 5+20+1.25 = $26.25.' }
        ],
        solutions: {
          cpp: `#include <iostream>
#include <iomanip>
using namespace std;
int main() {
    int weight, distance;
    cin >> weight >> distance;
    double total = 5.0 + weight * 2.0 + (distance / 10.0) * 0.5;
    cout << fixed << setprecision(2) << "$" << total << endl;
    return 0;
}`,
          java: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int weight = sc.nextInt(), distance = sc.nextInt();
        double total = 5.0 + weight * 2.0 + (distance / 10.0) * 0.5;
        System.out.printf("$%.2f\\n", total);
    }
}`,
          python: `w, d = map(int, input().split())
total = 5.0 + w * 2.0 + (d / 10) * 0.5
print("$%.2f" % total)`
        }
      },
      {
        title: 'Unique Paths in Grid (DP)',
        problem: `In an m×n grid, moving only down or right, count unique paths from top-left to bottom-right.`,
        examples: [
          { input: '3 3', output: '6', explanation: 'C(4,2) = 6 unique paths in a 3x3 grid.' }
        ],
        solutions: {
          cpp: `#include <iostream>
#include <vector>
using namespace std;
int uniquePaths(int m, int n) {
    vector<vector<int>> dp(m, vector<int>(n, -1));
    function<int(int, int)> f = [&](int i, int j) -> int {
        if (i == 0 && j == 0) return 1;
        if (i < 0 || j < 0) return 0;
        if (dp[i][j] != -1) return dp[i][j];
        return dp[i][j] = f(i - 1, j) + f(i, j - 1);
    };
    return f(m - 1, n - 1);
}
int main() {
    int m, n; cin >> m >> n;
    cout << uniquePaths(m, n) << endl;
    return 0;
}`,
          java: `import java.util.Scanner;
public class Solution {
    public int f(int i, int j, int[][] dp) {
        if (i == 0 && j == 0) return 1;
        if (i < 0 || j < 0) return 0;
        if (dp[i][j] != -1) return dp[i][j];
        return dp[i][j] = f(i - 1, j, dp) + f(i, j - 1, dp);
    }
    public int uniquePaths(int m, int n) {
        int[][] dp = new int[m][n];
        for (int[] row : dp) java.util.Arrays.fill(row, -1);
        return f(m - 1, n - 1, dp);
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int m = sc.nextInt(), n = sc.nextInt();
        System.out.println(new Solution().uniquePaths(m, n));
    }
}`,
          python: `def uniquePaths(m, n):
    dp = [[-1]*n for _ in range(m)]
    def f(i, j):
        if i == 0 and j == 0: return 1
        if i < 0 or j < 0: return 0
        if dp[i][j] != -1: return dp[i][j]
        dp[i][j] = f(i-1, j) + f(i, j-1)
        return dp[i][j]
    return f(m-1, n-1)

m, n = map(int, input().split())
print(uniquePaths(m, n))`
        }
      }
    ]
  },

  // ═══════════════════════════════════════════════
  // HCL
  // ═══════════════════════════════════════════════
  {
    id: 'hcl',
    name: 'HCL',
    icon: '<i class="ri-server-fill"></i>',
    color: 'linear-gradient(135deg, #0072C6, #004E8C)',
    description: 'HCL Technologies coding questions covering cubes, sales tracking, multiplication tables, and bitwise operations.',
    tags: ['Math', 'Arrays', 'Bitwise', 'Strings', 'Greedy'],
    questions: [
      {
        title: 'Sum of Cubes in Range',
        problem: `Given two integers, find the sum of cubes of all numbers between them (inclusive).`,
        examples: [
          { input: '1 3', output: '36', explanation: '1³ + 2³ + 3³ = 1 + 8 + 27 = 36.' }
        ],
        solutions: {
          cpp: `#include <iostream>
using namespace std;
int main() {
    int start, end;
    cin >> start >> end;
    int sum = 0;
    for (int i = start; i <= end; i++) sum += i * i * i;
    cout << sum << endl;
    return 0;
}`,
          java: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int start = sc.nextInt(), end = sc.nextInt();
        int sum = 0;
        for (int i = start; i <= end; i++) sum += i * i * i;
        System.out.println(sum);
    }
}`,
          python: `start, end = map(int, input().split())
print(sum(i**3 for i in range(start, end + 1)))`
        }
      },
      {
        title: 'Sales Revenue Tracker',
        problem: `Track sales of items. Find: most sold item (by revenue), total revenue, and average revenue per entry.`,
        examples: [
          { input: '5\\napple 2 100\\nbanana 3 50\\napple 1 100\\nbanana 1 50\\ncherry 5 20', output: 'Most Sold: apple\\nTotal: 600.00\\nAvg: 120.00', explanation: 'apple: 200+100=300, banana: 150+50=200, cherry: 100.' }
        ],
        solutions: {
          cpp: `#include <iostream>
#include <unordered_map>
#include <string>
using namespace std;
int main() {
    int n; cin >> n;
    unordered_map<string, double> sales;
    double totalRevenue = 0;
    for (int i = 0; i < n; ++i) {
        string item; int qty, price;
        cin >> item >> qty >> price;
        double sale = qty * price;
        sales[item] += sale;
        totalRevenue += sale;
    }
    string topItem; double maxSale = 0;
    for (auto& p : sales) {
        if (p.second > maxSale) { maxSale = p.second; topItem = p.first; }
    }
    printf("Most Sold Item: %s\\nTotal Revenue: %.2f\\nAverage Revenue Per Entry: %.2f\\n",
           topItem.c_str(), totalRevenue, totalRevenue / n);
    return 0;
}`,
          java: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        Map<String, Double> sales = new HashMap<>();
        double totalRevenue = 0;
        for (int i = 0; i < n; i++) {
            String item = sc.next();
            int qty = sc.nextInt(), price = sc.nextInt();
            double sale = qty * price;
            sales.put(item, sales.getOrDefault(item, 0.0) + sale);
            totalRevenue += sale;
        }
        String topItem = Collections.max(sales.entrySet(), Map.Entry.comparingByValue()).getKey();
        System.out.println("Most Sold Item: " + topItem);
        System.out.printf("Total Revenue: %.2f\\n", totalRevenue);
        System.out.printf("Average Revenue Per Entry: %.2f\\n", totalRevenue / n);
    }
}`,
          python: `n = int(input())
sales = {}
total_revenue = 0
for _ in range(n):
    item, qty, price = input().split()
    sale = int(qty) * int(price)
    sales[item] = sales.get(item, 0) + sale
    total_revenue += sale
top_item = max(sales, key=sales.get)
print(f"Most Sold Item: {top_item}")
print(f"Total Revenue: {total_revenue:.2f}")
print(f"Average Revenue Per Entry: {total_revenue / n:.2f}")`
        }
      },
      {
        title: 'Multiplication Table with Sum',
        problem: `Print the multiplication table of n from 1 to 10 and calculate the sum of all products.`,
        examples: [
          { input: '5', output: '5 x 1 = 5\\n...\\n5 x 10 = 50\\nSum = 275', explanation: 'Sum = 5*(1+2+...+10) = 5*55 = 275.' }
        ],
        solutions: {
          cpp: `#include <iostream>
using namespace std;
int main() {
    int n, sum = 0;
    cin >> n;
    for (int i = 1; i <= 10; i++) {
        int product = n * i;
        cout << n << " x " << i << " = " << product << endl;
        sum += product;
    }
    cout << "Sum = " << sum << endl;
    return 0;
}`,
          java: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt(), sum = 0;
        for (int i = 1; i <= 10; i++) {
            int product = n * i;
            System.out.println(n + " x " + i + " = " + product);
            sum += product;
        }
        System.out.println("Sum = " + sum);
    }
}`,
          python: `n = int(input())
total = 0
for i in range(1, 11):
    product = n * i
    print(f"{n} x {i} = {product}")
    total += product
print(f"Sum = {total}")`
        }
      },
      {
        title: 'Unique Bitwise OR of Subarrays',
        problem: `Given an array, find how many distinct values can be obtained by computing the bitwise OR of all possible contiguous subarrays.`,
        examples: [
          { input: '3\\n1 2 4', output: '6', explanation: 'OR values: 1,3,7,2,6,4 → 6 unique.' }
        ],
        solutions: {
          cpp: `#include <iostream>
#include <set>
using namespace std;
int main() {
    int n; cin >> n;
    int arr[n];
    for(int i = 0; i < n; i++) cin >> arr[i];
    set<int> orSet;
    for(int i = 0; i < n; i++) {
        int orVal = 0;
        for(int j = i; j < n; j++) {
            orVal |= arr[j];
            orSet.insert(orVal);
        }
    }
    cout << orSet.size() << endl;
    return 0;
}`,
          java: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for(int i = 0; i < n; i++) arr[i] = sc.nextInt();
        Set<Integer> orSet = new HashSet<>();
        for (int i = 0; i < n; i++) {
            int orVal = 0;
            for (int j = i; j < n; j++) {
                orVal |= arr[j];
                orSet.add(orVal);
            }
        }
        System.out.println(orSet.size());
    }
}`,
          python: `n = int(input())
arr = list(map(int, input().split()))
or_set = set()
for i in range(n):
    or_val = 0
    for j in range(i, n):
        or_val |= arr[j]
        or_set.add(or_val)
print(len(or_set))`
        }
      },
      {
        title: 'Shoe Pairing',
        problem: `Given shoes with size and side (L/R), count how many complete pairs (same size, one L and one R) can be made.`,
        examples: [
          { input: '6\\n7L 7R 8L 8R 8L 9R', output: '2', explanation: 'Pairs: (7L,7R) and (8L,8R). One 8L and 9R remain unpaired.' }
        ],
        solutions: {
          cpp: `#include <iostream>
#include <unordered_map>
#include <algorithm>
using namespace std;
int main() {
    int n; cin >> n;
    unordered_map<string, int> count;
    for (int i = 0; i < n; ++i) {
        string shoe; cin >> shoe;
        count[shoe]++;
    }
    int pairs = 0;
    for (auto &entry : count) {
        string key = entry.first;
        if (key.back() == 'L') {
            string opposite = key.substr(0, key.size() - 1) + 'R';
            if (count.count(opposite))
                pairs += min(entry.second, count[opposite]);
        }
    }
    cout << pairs << endl;
    return 0;
}`,
          java: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        Map<String, Integer> count = new HashMap<>();
        for (int i = 0; i < n; i++) {
            String shoe = sc.next();
            count.put(shoe, count.getOrDefault(shoe, 0) + 1);
        }
        int pairs = 0;
        for (String key : count.keySet()) {
            if (key.endsWith("L")) {
                String opposite = key.substring(0, key.length() - 1) + "R";
                if (count.containsKey(opposite))
                    pairs += Math.min(count.get(key), count.get(opposite));
            }
        }
        System.out.println(pairs);
    }
}`,
          python: `n = int(input())
shoes = input().split()
count = {}
for shoe in shoes:
    count[shoe] = count.get(shoe, 0) + 1
pairs = 0
for key in count:
    if key.endswith('L'):
        opposite = key[:-1] + 'R'
        if opposite in count:
            pairs += min(count[key], count[opposite])
print(pairs)`
        }
      },
      {
        title: 'Check Divisibility by 9 (3-digit)',
        problem: `Accept a 3-digit number and check if it's divisible by 9.`,
        examples: [
          { input: '126', output: 'Number 126 is divisible by 9', explanation: '126 / 9 = 14. Divisible.' },
          { input: '125', output: 'Number 125 is not divisible by 9', explanation: '125 / 9 = 13.88. Not divisible.' }
        ],
        solutions: {
          cpp: `#include <iostream>
using namespace std;
int main() {
    int number; cin >> number;
    if (number >= 100 && number <= 999) {
        if (number % 9 == 0)
            cout << "Number " << number << " is divisible by 9" << endl;
        else
            cout << "Number " << number << " is not divisible by 9" << endl;
    }
    return 0;
}`,
          java: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int number = sc.nextInt();
        if (number >= 100 && number <= 999) {
            if (number % 9 == 0)
                System.out.println("Number " + number + " is divisible by 9");
            else
                System.out.println("Number " + number + " is not divisible by 9");
        }
    }
}`,
          python: `number = int(input())
if 100 <= number <= 999:
    if number % 9 == 0:
        print(f"Number {number} is divisible by 9")
    else:
        print(f"Number {number} is not divisible by 9")`
        }
      }
    ]
  }
];
