/**
 * Complete Reference of java.util.Arrays Class Methods & Java Utilities
 * Comprehensive list containing all 23+ methods of Arrays class with runnable code & outputs.
 */
const METHODS_DATA = [
  // ==========================================
  // ALL 23 METHODS OF java.util.Arrays CLASS
  // ==========================================
  {
    id: "m-arr-toString",
    practiceNo: 1,
    name: "Arrays.toString()",
    classType: "Arrays",
    category: "Arrays",
    use: "Array ke saare elements ko readable format [e1, e2, ...] mein print karna.",
    useEn: "Returns a string representation of the contents of the specified array.",
    syntax: "Arrays.toString(dataType[] a)",
    code: `import java.util.Arrays;

public class Main {
    public static void main(String[] args) {

        int[] arr = {10, 20, 30, 40};

        // Readable bracket format mein print karein
        System.out.println(Arrays.toString(arr));
    }
}`,
    output: `[10, 20, 30, 40]`,
    explanation: "Directly System.out.println(arr) likhne se memory address (jaise [I@15db9742) print hota hai. Arrays.toString() array ke elements ko comma aur brackets ke saath readable print karta hai.",
    timeComplexity: "O(n)"
  },
  {
    id: "m-arr-asList",
    practiceNo: 2,
    name: "Arrays.asList()",
    classType: "Arrays",
    category: "Arrays",
    use: "Array ko fixed-size List mein convert karna (read & update allowed, size fixed).",
    useEn: "Returns a fixed-size list backed by the specified array.",
    syntax: "Arrays.asList(T... a)",
    code: `import java.util.Arrays;
import java.util.List;

public class Main {
    public static void main(String[] args) {

        String[] fruits = {"Apple", "Banana", "Orange"};

        // Array to List conversion
        List<String> list = Arrays.asList(fruits);

        System.out.println("List elements: " + list);
        System.out.println("Size: " + list.size());

        // Note: list.add("Mango") will throw UnsupportedOperationException (fixed-size)
    }
}`,
    output: `List elements: [Apple, Banana, Orange]
Size: 3`,
    explanation: "Arrays.asList() se mili List ka size fixed hota hai. Elements modify kar sakte hain (.set()), par add ya remove karne par UnsupportedOperationException aayega.",
    timeComplexity: "O(1)"
  },
  {
    id: "m-arr-binarySearch",
    practiceNo: 3,
    name: "Arrays.binarySearch()",
    classType: "Arrays",
    category: "Arrays",
    use: "Sorted array mein kisi element ka index O(log n) mein fast dhundhna.",
    useEn: "Searches the specified array for the specified object using the binary search algorithm.",
    syntax: "Arrays.binarySearch(dataType[] a, dataType key)",
    code: `import java.util.Arrays;

public class Main {
    public static void main(String[] args) {

        int[] arr = {10, 20, 30, 40, 50}; // Must be sorted!

        int idx = Arrays.binarySearch(arr, 30);
        int notFound = Arrays.binarySearch(arr, 25);

        System.out.println("Index of 30: " + idx);
        System.out.println("Index of 25 (not present): " + notFound);
    }
}`,
    output: `Index of 30: 2
Index of 25 (not present): -3`,
    explanation: "Array ka pehle se sorted hona zaroori hai. Agar element array mein nahi milta, toh yeh negative value (-(insertion_point) - 1) return karta hai.",
    timeComplexity: "O(log n)"
  },
  {
    id: "m-arr-binarySearch-range",
    practiceNo: 4,
    name: "Arrays.binarySearch(arr, fromIndex, toIndex, key)",
    classType: "Arrays",
    category: "Arrays",
    use: "Array ke kisi specific range ke andar binary search lagana.",
    useEn: "Searches a range of the specified array for the specified object using the Binary Search Algorithm.",
    syntax: "Arrays.binarySearch(dataType[] a, int fromIndex, int toIndex, dataType key)",
    code: `import java.util.Arrays;

public class Main {
    public static void main(String[] args) {

        int[] arr = {5, 10, 15, 20, 25, 30, 35};

        // Sirf index 1 se index 5 ke beech mein 20 dhundhe
        int index = Arrays.binarySearch(arr, 1, 5, 20);

        System.out.println("Found 20 in range [1, 5) at index: " + index);
    }
}`,
    output: `Found 20 in range [1, 5) at index: 3`,
    explanation: "toIndex exclusive hota hai. Yeh sirf specified sub-array range mein search karta hai, poore array mein nahi.",
    timeComplexity: "O(log(toIndex - fromIndex))"
  },
  {
    id: "m-arr-compare",
    practiceNo: 5,
    name: "Arrays.compare(array1, array2)",
    classType: "Arrays",
    category: "Arrays",
    use: "Do arrays ko lexicographically (dictionary order mein) compare karna (0, negative ya positive).",
    useEn: "Compares two arrays lexicographically: returns negative, 0, or positive if first array is smaller, equal, or greater.",
    syntax: "Arrays.compare(dataType[] a, dataType[] b)",
    code: `import java.util.Arrays;

public class Main {
    public static void main(String[] args) {

        int[] a = {1, 2, 3};
        int[] b = {1, 2, 3};
        int[] c = {1, 2, 4};

        System.out.println("Compare a and b (identical): " + Arrays.compare(a, b)); // 0
        System.out.println("Compare a and c (a < c): " + Arrays.compare(a, c));     // -1
        System.out.println("Compare c and a (c > a): " + Arrays.compare(c, a));     // 1
    }
}`,
    output: `Compare a and b (identical): 0
Compare a and c (a < c): -1
Compare c and a (c > a): 1`,
    explanation: "Java 9 mein introduce hua. Yeh do arrays ko element-by-element compare karta hai. Agar a chota hai toh negative, barabar hai toh 0, bada hai toh positive return karta hai.",
    timeComplexity: "O(min(len1, len2))"
  },
  {
    id: "m-arr-copyOf",
    practiceNo: 6,
    name: "Arrays.copyOf(originalArray, newLength)",
    classType: "Arrays",
    category: "Arrays",
    use: "Array ki copy banana, aur zaroorat padne par naye size ke saath truncate ya pad (0/null) karna.",
    useEn: "Copies the specified array, truncating or padding with default values so copy has specified length.",
    syntax: "Arrays.copyOf(dataType[] original, int newLength)",
    code: `import java.util.Arrays;

public class Main {
    public static void main(String[] args) {

        int[] arr = {1, 2, 3};

        // Array ko size 5 tak expand karein (extra jagah 0 se fill hogi)
        int[] expanded = Arrays.copyOf(arr, 5);

        // Array ko size 2 tak truncate karein
        int[] truncated = Arrays.copyOf(arr, 2);

        System.out.println("Expanded: " + Arrays.toString(expanded));
        System.out.println("Truncated: " + Arrays.toString(truncated));
    }
}`,
    output: `Expanded: [1, 2, 3, 0, 0]
Truncated: [1, 2]`,
    explanation: "Yeh original array ko bina touch kiye naya array create karta hai. Array resize simulation ke liye best hai.",
    timeComplexity: "O(newLength)"
  },
  {
    id: "m-arr-copyOfRange",
    practiceNo: 7,
    name: "Arrays.copyOfRange(originalArray, fromIndex, endIndex)",
    classType: "Arrays",
    category: "Arrays",
    use: "Array ke kisi specific hisse (range) ko naye array mein copy karna.",
    useEn: "Copies the specified range of the specified array into a new array.",
    syntax: "Arrays.copyOfRange(dataType[] original, int from, int to)",
    code: `import java.util.Arrays;

public class Main {
    public static void main(String[] args) {

        int[] arr = {10, 20, 30, 40, 50, 60};

        // Index 2 se 5 tak copy karein (index 5 exclusive hai, yaani index 2, 3, 4)
        int[] subArray = Arrays.copyOfRange(arr, 2, 5);

        System.out.println("Original: " + Arrays.toString(arr));
        System.out.println("Sub-array: " + Arrays.toString(subArray));
    }
}`,
    output: `Original: [10, 20, 30, 40, 50, 60]
Sub-array: [30, 40, 50]`,
    explanation: "endIndex exclusive hota hai. Agar endIndex array length se bada hai, toh bachi jagah 0/null se pad ho jaati hai.",
    timeComplexity: "O(endIndex - fromIndex)"
  },
  {
    id: "m-arr-deepEquals",
    practiceNo: 8,
    name: "Arrays.deepEquals(Object[] a1, Object[] a2)",
    classType: "Arrays",
    category: "Arrays",
    use: "2D ya nested multi-dimensional arrays ko deeply compare karna ki dono exact barabar hain ya nahi.",
    useEn: "Returns true if the two specified arrays are deeply equal to one another.",
    syntax: "Arrays.deepEquals(Object[] a1, Object[] a2)",
    code: `import java.util.Arrays;

public class Main {
    public static void main(String[] args) {

        Integer[][] m1 = { {1, 2}, {3, 4} };
        Integer[][] m2 = { {1, 2}, {3, 4} };
        Integer[][] m3 = { {1, 2}, {3, 9} };

        // Normal Arrays.equals(m1, m2) reference check karega aur false de sakta hai
        System.out.println("m1 deepEquals m2: " + Arrays.deepEquals(m1, m2)); // true
        System.out.println("m1 deepEquals m3: " + Arrays.deepEquals(m1, m3)); // false
    }
}`,
    output: `m1 deepEquals m2: true
m1 deepEquals m3: false`,
    explanation: "Multi-dimensional arrays ke comparison ke liye hamesha deepEquals() use karein, kyunki normal equals() sirf top-level reference check karta hai.",
    timeComplexity: "O(total elements)"
  },
  {
    id: "m-arr-deepHashCode",
    practiceNo: 9,
    name: "Arrays.deepHashCode(Object[] a)",
    classType: "Arrays",
    category: "Arrays",
    use: "Multi-dimensional (2D/3D) array ke contents ke basis par deep hash code generate karna.",
    useEn: "Returns a hash code based on the deep contents of the specified array.",
    syntax: "Arrays.deepHashCode(Object[] a)",
    code: `import java.util.Arrays;

public class Main {
    public static void main(String[] args) {

        Integer[][] matrix1 = { {1, 2}, {3, 4} };
        Integer[][] matrix2 = { {1, 2}, {3, 4} };

        System.out.println("Hash code 1: " + Arrays.deepHashCode(matrix1));
        System.out.println("Hash code 2: " + Arrays.deepHashCode(matrix2));
        System.out.println("Equal contents produce same hash: " + 
            (Arrays.deepHashCode(matrix1) == Arrays.deepHashCode(matrix2)));
    }
}`,
    output: `Hash code 1: 32833
Hash code 2: 32833
Equal contents produce same hash: true`,
    explanation: "Custom hashing aur HashSet/HashMap mein 2D arrays ko store karte waqt deepHashCode() consistent aur reliable hash values deta hai.",
    timeComplexity: "O(total elements)"
  },
  {
    id: "m-arr-deepToString",
    practiceNo: 10,
    name: "Arrays.deepToString(Object[] a)",
    classType: "Arrays",
    category: "Arrays",
    use: "2D ya Multi-dimensional arrays ko clean readable string format mein print karna.",
    useEn: "Returns a string representation of the deep contents of the specified array.",
    syntax: "Arrays.deepToString(Object[] a)",
    code: `import java.util.Arrays;

public class Main {
    public static void main(String[] args) {

        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6}
        };

        // 2D matrix ko print karein
        System.out.println(Arrays.deepToString(matrix));
    }
}`,
    output: `[[1, 2, 3], [4, 5, 6]]`,
    explanation: "Normal Arrays.toString(matrix) row arrays ke hash address print karta hai. Arrays.deepToString() nested structure ke andar jakar format banata hai.",
    timeComplexity: "O(rows * cols)"
  },
  {
    id: "m-arr-equals",
    practiceNo: 11,
    name: "Arrays.equals(array1, array2)",
    classType: "Arrays",
    category: "Arrays",
    use: "Check karna ki do 1D arrays ke saare elements same order mein equal hain ya nahi.",
    useEn: "Returns true if the two specified arrays of ints, chars, etc., are equal to one another.",
    syntax: "Arrays.equals(dataType[] a1, dataType[] a2)",
    code: `import java.util.Arrays;

public class Main {
    public static void main(String[] args) {

        int[] a = {1, 2, 3};
        int[] b = {1, 2, 3};
        int[] c = {1, 3, 2};

        System.out.println("a equals b: " + Arrays.equals(a, b)); // true
        System.out.println("a equals c: " + Arrays.equals(a, c)); // false (order matters)
    }
}`,
    output: `a equals b: true
a equals c: false`,
    explanation: "a == b reference equality check karta hai (jo almost hamesha false hoga). Arrays.equals(a, b) elements ki actual value equality check karta hai.",
    timeComplexity: "O(n)"
  },
  {
    id: "m-arr-fill",
    practiceNo: 12,
    name: "Arrays.fill(originalArray, fillValue)",
    classType: "Arrays",
    category: "Arrays",
    use: "Array ke sabhi indices par ek default value (jaise -1 ya 0) assign karna.",
    useEn: "Assigns the specified data value to each element of the specified array.",
    syntax: "Arrays.fill(dataType[] a, dataType val)",
    code: `import java.util.Arrays;

public class Main {
    public static void main(String[] args) {

        int[] dp = new int[5];

        // Sabhi values ko -1 se initialize karein (useful in DP memoization)
        Arrays.fill(dp, -1);

        System.out.println("Initialized array: " + Arrays.toString(dp));
    }
}`,
    output: `Initialized array: [-1, -1, -1, -1, -1]`,
    explanation: "Dynamic programming memoization tables aur visited arrays initialize karne ke liye yeh standard DSA utility method hai.",
    timeComplexity: "O(n)"
  },
  {
    id: "m-arr-hashCode",
    practiceNo: 13,
    name: "Arrays.hashCode(originalArray)",
    classType: "Arrays",
    category: "Arrays",
    use: "1D Array ke contents ke basis par integer hash code return karna.",
    useEn: "Returns a hash code based on the contents of the specified array.",
    syntax: "Arrays.hashCode(dataType[] a)",
    code: `import java.util.Arrays;

public class Main {
    public static void main(String[] args) {

        int[] a1 = {10, 20, 30};
        int[] a2 = {10, 20, 30};
        int[] a3 = {30, 20, 10};

        System.out.println("Hash a1: " + Arrays.hashCode(a1));
        System.out.println("Hash a2: " + Arrays.hashCode(a2));
        System.out.println("Hash a3: " + Arrays.hashCode(a3));
        System.out.println("a1 and a2 have same hash: " + (Arrays.hashCode(a1) == Arrays.hashCode(a2)));
    }
}`,
    output: `Hash a1: 39391
Hash a2: 39391
Hash a3: 58609
a1 and a2 have same hash: true`,
    explanation: "Agar do arrays ke elements exact same order mein hain, toh unka Arrays.hashCode() identical return hoga.",
    timeComplexity: "O(n)"
  },
  {
    id: "m-arr-mismatch",
    practiceNo: 14,
    name: "Arrays.mismatch(array1, array2)",
    classType: "Arrays",
    category: "Arrays",
    use: "Do arrays ke beech pehla mismatched (alag) element ka index dhundhna (-1 if identical).",
    useEn: "Finds and returns the index of the first mismatch between two specified arrays, or -1 if equal.",
    syntax: "Arrays.mismatch(dataType[] a, dataType[] b)",
    code: `import java.util.Arrays;

public class Main {
    public static void main(String[] args) {

        int[] arr1 = {1, 2, 3, 4, 5};
        int[] arr2 = {1, 2, 99, 4, 5}; // Index 2 par alag hai
        int[] arr3 = {1, 2, 3, 4, 5};

        System.out.println("Mismatch index between arr1 and arr2: " + Arrays.mismatch(arr1, arr2));
        System.out.println("Mismatch index between arr1 and arr3 (equal): " + Arrays.mismatch(arr1, arr3));
    }
}`,
    output: `Mismatch index between arr1 and arr2: 2
Mismatch index between arr1 and arr3 (equal): -1`,
    explanation: "Java 9 mein introduce hua. Yeh traverse karke pehla index batata hai jahan dono arrays differ karte hain. Agar dono array exact equal hain toh -1 return karta hai.",
    timeComplexity: "O(mismatch index)"
  },
  {
    id: "m-arr-parallelPrefix",
    practiceNo: 15,
    name: "Arrays.parallelPrefix(originalArray, operator)",
    classType: "Arrays",
    category: "Arrays",
    use: "Array par parallel running prefix operation (jaise cumulative running sum) perform karna.",
    useEn: "Cumulates, in parallel, each element of the given array in place using the supplied function.",
    syntax: "Arrays.parallelPrefix(dataType[] a, BinaryOperator op)",
    code: `import java.util.Arrays;

public class Main {
    public static void main(String[] args) {

        int[] arr = {1, 2, 3, 4, 5};

        // Prefix sum compute karein: arr[i] = arr[i-1] + arr[i]
        Arrays.parallelPrefix(arr, (x, y) -> x + y);

        System.out.println("Running Prefix Sum: " + Arrays.toString(arr));
    }
}`,
    output: `Running Prefix Sum: [1, 3, 6, 10, 15]`,
    explanation: "Bade datasets par prefix sum ya running product nikalte waqt yeh multi-core CPU threads ka use karke parallelly compute karta hai.",
    timeComplexity: "O(n) parallelized"
  },
  {
    id: "m-arr-parallelSetAll",
    practiceNo: 16,
    name: "Arrays.parallelSetAll(originalArray, generator)",
    classType: "Arrays",
    category: "Arrays",
    use: "Index generator function use karke array ke elements ko parallelly set/initialize karna.",
    useEn: "Sets all elements of the specified array, in parallel, using the provided generator function.",
    syntax: "Arrays.parallelSetAll(dataType[] a, IntUnaryOperator generator)",
    code: `import java.util.Arrays;

public class Main {
    public static void main(String[] args) {

        int[] arr = new int[6];

        // Har index ko index * 10 se set karein parallelly
        Arrays.parallelSetAll(arr, i -> i * 10);

        System.out.println("Generated array: " + Arrays.toString(arr));
    }
}`,
    output: `Generated array: [0, 10, 20, 30, 40, 50]`,
    explanation: "Loop likhe bina indices ke formula se array populate karne ke liye yeh standard functional programming method hai.",
    timeComplexity: "O(n) parallelized"
  },
  {
    id: "m-arr-parallelSort",
    practiceNo: 17,
    name: "Arrays.parallelSort(originalArray)",
    classType: "Arrays",
    category: "Arrays",
    use: "Bade arrays ko multi-threading use karke fast parallel sorting karna.",
    useEn: "Sorts the specified array into ascending numerical order using Parallel Sort (Fork/Join framework).",
    syntax: "Arrays.parallelSort(dataType[] a)",
    code: `import java.util.Arrays;

public class Main {
    public static void main(String[] args) {

        int[] bigArray = {90, 12, 45, 2, 67, 33, 8, 100};

        // Multi-threaded sorting for performance on large arrays
        Arrays.parallelSort(bigArray);

        System.out.println("Parallel Sorted: " + Arrays.toString(bigArray));
    }
}`,
    output: `Parallel Sorted: [2, 8, 12, 33, 45, 67, 90, 100]`,
    explanation: "Normal Arrays.sort() single-threaded hoti hai. Jab array size bohot bada hota hai, tab parallelSort() array ko sub-parts mein todkar alag-alag CPU cores par sort karta hai.",
    timeComplexity: "O(n log n) multi-threaded"
  },
  {
    id: "m-arr-setAll",
    practiceNo: 18,
    name: "Arrays.setAll(originalArray, generator)",
    classType: "Arrays",
    category: "Arrays",
    use: "Single thread par generator function se array ke elements set karna.",
    useEn: "Sets all elements of the specified array using the provided generator function.",
    syntax: "Arrays.setAll(dataType[] a, IntUnaryOperator generator)",
    code: `import java.util.Arrays;

public class Main {
    public static void main(String[] args) {

        int[] squares = new int[6];

        // Har index par uska square (i * i) store karein
        Arrays.setAll(squares, i -> i * i);

        System.out.println("Squares: " + Arrays.toString(squares));
    }
}`,
    output: `Squares: [0, 1, 4, 9, 16, 25]`,
    explanation: "Small to medium arrays ke liye bina parallel overhead ke simple generator calculation se array fill karta hai.",
    timeComplexity: "O(n)"
  },
  {
    id: "m-arr-sort",
    practiceNo: 19,
    name: "Arrays.sort(originalArray)",
    classType: "Arrays",
    category: "Arrays",
    use: "Array ke saare elements ko ascending order (chote se bada) mein sort karna.",
    useEn: "Sorts the specified array into ascending numerical order.",
    syntax: "Arrays.sort(dataType[] a)",
    code: `import java.util.Arrays;

public class Main {
    public static void main(String[] args) {

        int[] arr = {64, 34, 25, 12, 22, 11, 90};

        Arrays.sort(arr);

        System.out.println("Sorted Array: " + Arrays.toString(arr));
    }
}`,
    output: `Sorted Array: [11, 12, 22, 25, 34, 64, 90]`,
    explanation: "Java primitives ke liye Dual-Pivot Quicksort algorithm use karta hai jo practical data par highly optimized hoti hai.",
    timeComplexity: "O(n log n)"
  },
  {
    id: "m-arr-sort-range",
    practiceNo: 20,
    name: "Arrays.sort(originalArray, fromIndex, endIndex)",
    classType: "Arrays",
    category: "Arrays",
    use: "Array ke kisi specific range ke hisse ko sort karna.",
    useEn: "Sorts the specified range of the array into ascending order.",
    syntax: "Arrays.sort(dataType[] a, int fromIndex, int toIndex)",
    code: `import java.util.Arrays;

public class Main {
    public static void main(String[] args) {

        int[] arr = {9, 8, 7, 6, 5, 4, 3};

        // Sirf index 1 se index 4 tak sort karein (index 4 exclusive)
        Arrays.sort(arr, 1, 4);

        System.out.println("Range Sorted: " + Arrays.toString(arr));
    }
}`,
    output: `Range Sorted: [9, 6, 7, 8, 5, 4, 3]`,
    explanation: "toIndex hamesha exclusive hota hai. Array ka bacha hissa undisturbed rehta hai.",
    timeComplexity: "O(k log k)"
  },
  {
    id: "m-arr-sort-comparator",
    practiceNo: 21,
    name: "Arrays.sort(T[] a, Comparator<? super T> c)",
    classType: "Arrays",
    category: "Arrays",
    use: "Custom Comparator use karke objects ke array ko descending ya custom logic se sort karna.",
    useEn: "Sorts the specified array of objects according to the order induced by the specified comparator.",
    syntax: "Arrays.sort(T[] a, Comparator<? super T> c)",
    code: `import java.util.Arrays;
import java.util.Collections;

public class Main {
    public static void main(String[] args) {

        Integer[] arr = {15, 3, 99, 42, 8};

        // Descending order (bade se chota) mein sort karein
        Arrays.sort(arr, Collections.reverseOrder());

        System.out.println("Descending: " + Arrays.toString(arr));

        // String length ke hisaab se sort karein
        String[] words = {"apple", "banana", "kiwi", "fig"};
        Arrays.sort(words, (w1, w2) -> w1.length() - w2.length());

        System.out.println("By Length: " + Arrays.toString(words));
    }
}`,
    output: `Descending: [99, 42, 15, 8, 3]
By Length: [fig, kiwi, apple, banana]`,
    explanation: "Note: Collections.reverseOrder() ke liye primitive int[] ki jagah wrapper Integer[] hona zaroori hai. Custom comparator lambda expressions se likha ja sakta hai.",
    timeComplexity: "O(n log n)"
  },
  {
    id: "m-arr-spliterator",
    practiceNo: 22,
    name: "Arrays.spliterator(originalArray)",
    classType: "Arrays",
    category: "Arrays",
    use: "Array ke elements ko parallel iteration ya partitioning ke liye Spliterator banana.",
    useEn: "Returns a Spliterator covering all of the specified array.",
    syntax: "Arrays.spliterator(dataType[] a)",
    code: `import java.util.Arrays;
import java.util.Spliterator;

public class Main {
    public static void main(String[] args) {

        int[] arr = {10, 20, 30, 40};

        Spliterator.OfInt split = Arrays.spliterator(arr);

        System.out.println("Estimated size: " + split.estimateSize());
        System.out.print("Elements: ");
        split.forEachRemaining((int val) -> System.out.print(val + " "));
        System.out.println();
    }
}`,
    output: `Estimated size: 4
Elements: 10 20 30 40 `,
    explanation: "Spliterator ka use Java Streams internally parallel streams ko divide and conquer split karne ke liye karta hai.",
    timeComplexity: "O(1) creation"
  },
  {
    id: "m-arr-stream",
    practiceNo: 23,
    name: "Arrays.stream(originalArray)",
    classType: "Arrays",
    category: "Arrays",
    use: "Array se sequential Stream banana taaki map, filter, reduce aur sum methods use kar sakein.",
    useEn: "Returns a sequential Stream with the specified array as its source.",
    syntax: "Arrays.stream(dataType[] a)",
    code: `import java.util.Arrays;

public class Main {
    public static void main(String[] args) {

        int[] numbers = {1, 2, 3, 4, 5, 6};

        // 1. Array ka sum ek line mein:
        int sum = Arrays.stream(numbers).sum();

        // 2. Sirf even numbers filter karke unka square:
        int[] evenSquares = Arrays.stream(numbers)
                                  .filter(n -> n % 2 == 0)
                                  .map(n -> n * n)
                                  .toArray();

        System.out.println("Total Sum: " + sum);
        System.out.println("Even Squares: " + Arrays.toString(evenSquares));
    }
}`,
    output: `Total Sum: 21
Even Squares: [4, 16, 36]`,
    explanation: "Modern Java mein loops likhne ke bajaye functional programming pipelines banane ke liye Arrays.stream() sabse powerful method hai.",
    timeComplexity: "O(n)"
  },

  // ==========================================
  // STRING METHODS (java.lang.String)
  // ==========================================
  {
    id: "m-str-1",
    practiceNo: 24,
    name: "String.charAt()",
    classType: "String",
    category: "String",
    use: "String ke kisi specific index par kaun sa character hai nikalna.",
    useEn: "Returns the char value at the specified index.",
    syntax: "str.charAt(int index)",
    code: `public class Main {
    public static void main(String[] args) {

        String s = "InterviewHub";

        char first = s.charAt(0);
        char sixth = s.charAt(5);

        System.out.println("Character at 0: " + first);
        System.out.println("Character at 5: " + sixth);
    }
}`,
    output: `Character at 0: I
Character at 5: v`,
    explanation: "Strings 0-indexed hoti hain. Agar index < 0 ya index >= length() pass karenge toh StringIndexOutOfBoundsException aayega.",
    timeComplexity: "O(1)"
  },
  {
    id: "m-str-2",
    practiceNo: 25,
    name: "String.toCharArray()",
    classType: "String",
    category: "String",
    use: "String ko character array char[] mein convert karna taaki easily iterate ya sort kar sakein.",
    useEn: "Converts this string to a newly allocated character array.",
    syntax: "str.toCharArray()",
    code: `import java.util.Arrays;

public class Main {
    public static void main(String[] args) {

        String s = "hello";

        char[] chars = s.toCharArray();

        // Ab array ko sort kar sakte hain
        Arrays.sort(chars);

        System.out.println(Arrays.toString(chars));
        System.out.println(new String(chars));
    }
}`,
    output: `[e, h, l, l, o]
ehllo`,
    explanation: "Anagram questions solve karne ke liye toCharArray() aur Arrays.sort() ka combination bohot popular hai.",
    timeComplexity: "O(n)"
  },
  {
    id: "m-str-3",
    practiceNo: 26,
    name: "String.substring()",
    classType: "String",
    category: "String",
    use: "String ka koi hissa (substring) shuru aur aakhiri index ke hisaab se extract karna.",
    useEn: "Returns a string that is a substring of this string (end index is exclusive).",
    syntax: "str.substring(int beginIndex, int endIndex)",
    code: `public class Main {
    public static void main(String[] args) {

        String s = "HelloWorld";

        String sub1 = s.substring(5);       // Index 5 se aakhiri tak
        String sub2 = s.substring(0, 5);    // Index 0 se 4 tak (5 exclusive)

        System.out.println("From index 5: " + sub1);
        System.out.println("From 0 to 5: " + sub2);
    }
}`,
    output: `From index 5: World
From 0 to 5: Hello`,
    explanation: "endIndex hamesha exclusive hota hai, yaani index beginIndex se lekar endIndex - 1 tak ke characters aate hain.",
    timeComplexity: "O(n)"
  },
  {
    id: "m-str-4",
    practiceNo: 27,
    name: "String.split()",
    classType: "String",
    category: "String",
    use: "String ko space, comma ya kisi delimiter ke basis par tod kar array banana.",
    useEn: "Splits this string around matches of the given regular expression.",
    syntax: "str.split(String regex)",
    code: `import java.util.Arrays;

public class Main {
    public static void main(String[] args) {

        String sentence = "Java is very powerful";

        String[] words = sentence.split(" ");

        System.out.println(Arrays.toString(words));
        System.out.println("Total words: " + words.length);
    }
}`,
    output: `[Java, is, very, powerful]
Total words: 4`,
    explanation: "Word count, sentence reverse, ya CSV data parsing ke interviews questions mein split() sabse jyada use hota hai.",
    timeComplexity: "O(n)"
  },

  // ==========================================
  // STRINGBUILDER METHODS
  // ==========================================
  {
    id: "m-sb-1",
    practiceNo: 28,
    name: "StringBuilder.reverse()",
    classType: "StringBuilder",
    category: "StringBuilder",
    use: "String ko directly in-place reverse karna (Palindrome check karne ke liye best).",
    useEn: "Causes this character sequence to be replaced by the reverse of the sequence.",
    syntax: "sb.reverse()",
    code: `public class Main {
    public static void main(String[] args) {

        String s = "radar";

        StringBuilder sb = new StringBuilder(s);
        sb.reverse();

        String reversed = sb.toString();

        System.out.println("Reversed: " + reversed);
        System.out.println("Is Palindrome? " + s.equals(reversed));
    }
}`,
    output: `Reversed: radar
Is Palindrome? true`,
    explanation: "Java mein String immutable hoti hai, isliye StringBuilder use karne se memory save hoti hai aur O(n) mein fast reverse ho jata hai.",
    timeComplexity: "O(n)"
  },
  {
    id: "m-sb-2",
    practiceNo: 29,
    name: "StringBuilder.append() & deleteCharAt()",
    classType: "StringBuilder",
    category: "StringBuilder",
    use: "Characters ko dynamic add aur remove karna bina naya String object banaye.",
    useEn: "Appends data to the end and deletes char at specific index efficiently.",
    syntax: "sb.append(data), sb.deleteCharAt(index)",
    code: `public class Main {
    public static void main(String[] args) {

        StringBuilder sb = new StringBuilder();

        sb.append("Code");
        sb.append("Hub");
        System.out.println("After append: " + sb);

        sb.deleteCharAt(sb.length() - 1); // remove last character
        System.out.println("After delete last: " + sb);
    }
}`,
    output: `After append: CodeHub
After delete last: CodeHu`,
    explanation: "Loop ke andar String concatenation (s += 'a') se O(n²) time lagta hai, par sb.append('a') se O(1) amortized time lagta hai.",
    timeComplexity: "O(1) amortized"
  },

  // ==========================================
  // COLLECTIONS METHODS (java.util.Collections)
  // ==========================================
  {
    id: "m-col-1",
    practiceNo: 30,
    name: "Collections.sort() & reverse()",
    classType: "Collections",
    category: "Collections",
    use: "ArrayList ya List ko sort aur reverse karna.",
    useEn: "Sorts the specified list into ascending order, or reverses the elements order.",
    syntax: "Collections.sort(List<T> list), Collections.reverse(List<T> list)",
    code: `import java.util.*;

public class Main {
    public static void main(String[] args) {

        List<Integer> list = new ArrayList<>(Arrays.asList(40, 10, 30, 20));

        Collections.sort(list);
        System.out.println("Sorted: " + list);

        Collections.reverse(list);
        System.out.println("Reversed: " + list);
    }
}`,
    output: `Sorted: [10, 20, 30, 40]
Reversed: [40, 30, 20, 10]`,
    explanation: "Primitive arrays ke liye Arrays.sort() use hota hai, jabki List / ArrayList ke liye Collections.sort() use hota hai.",
    timeComplexity: "O(n log n)"
  },
  {
    id: "m-col-2",
    practiceNo: 31,
    name: "Collections.max() & min()",
    classType: "Collections",
    category: "Collections",
    use: "List ke andar ka maximum ya minimum element ek line mein nikalna.",
    useEn: "Returns the maximum/minimum element of the given collection.",
    syntax: "Collections.max(Collection c), Collections.min(Collection c)",
    code: `import java.util.*;

public class Main {
    public static void main(String[] args) {

        List<Integer> scores = Arrays.asList(78, 95, 42, 88, 99);

        int max = Collections.max(scores);
        int min = Collections.min(scores);

        System.out.println("Highest score: " + max);
        System.out.println("Lowest score: " + min);
    }
}`,
    output: `Highest score: 99
Lowest score: 42`,
    explanation: "Bina manually for loop chalaye, Collections.max() aur min() O(n) mein result de dete hain.",
    timeComplexity: "O(n)"
  },
  {
    id: "m-col-3",
    practiceNo: 32,
    name: "Collections.frequency()",
    classType: "Collections",
    category: "Collections",
    use: "Pata karna ki koi specific element List mein kitni baar aaya hai.",
    useEn: "Returns the number of elements in the specified collection equal to the specified object.",
    syntax: "Collections.frequency(Collection c, Object o)",
    code: `import java.util.*;

public class Main {
    public static void main(String[] args) {

        List<String> votes = Arrays.asList("A", "B", "A", "C", "A", "B");

        int countA = Collections.frequency(votes, "A");
        int countB = Collections.frequency(votes, "B");

        System.out.println("Votes for A: " + countA);
        System.out.println("Votes for B: " + countB);
    }
}`,
    output: `Votes for A: 3
Votes for B: 2`,
    explanation: "Kisi element ka count nikalne ke liye manually loop karne ki zaroorat nahi padti.",
    timeComplexity: "O(n)"
  },

  // ==========================================
  // HASHMAP & HASHSET METHODS
  // ==========================================
  {
    id: "m-map-1",
    practiceNo: 33,
    name: "Map.getOrDefault()",
    classType: "HashMap",
    category: "HashMap",
    use: "Key ka value lena, aur agar key na ho toh default value (jaise 0) lena.",
    useEn: "Returns the value to which the specified key is mapped, or defaultValue if this map contains no mapping for the key.",
    syntax: "map.getOrDefault(Object key, V defaultValue)",
    code: `import java.util.*;

public class Main {
    public static void main(String[] args) {

        String text = "banana";
        Map<Character, Integer> freq = new HashMap<>();

        for (char c : text.toCharArray()) {
            // Agar key nahi hai toh 0 lega, phir + 1 karega
            freq.put(c, freq.getOrDefault(c, 0) + 1);
        }

        System.out.println("Character Frequencies: " + freq);
    }
}`,
    output: `Character Frequencies: {a=3, b=1, n=2}`,
    explanation: "Interview mein frequency count karne ka yeh sabse clean aur elegant tareeka hai. Isse null check lagane ki zaroorat nahi padti.",
    timeComplexity: "O(1) average"
  },
  {
    id: "m-map-2",
    practiceNo: 34,
    name: "Map.containsKey() & entrySet()",
    classType: "HashMap",
    category: "HashMap",
    use: "Check karna ki key exist karti hai ya nahi, aur Map ke saare key-values iterate karna.",
    useEn: "Checks if a key exists in O(1) and iterates over all key-value entries.",
    syntax: "map.containsKey(key), map.entrySet()",
    code: `import java.util.*;

public class Main {
    public static void main(String[] args) {

        Map<String, Integer> marks = new HashMap<>();
        marks.put("Rahul", 85);
        marks.put("Priya", 92);

        System.out.println("Contains Priya? " + marks.containsKey("Priya"));

        // Iterate key-value pairs
        for (Map.Entry<String, Integer> entry : marks.entrySet()) {
            System.out.println(entry.getKey() + " -> " + entry.getValue());
        }
    }
}`,
    output: `Contains Priya? true
Rahul -> 85
Priya -> 92`,
    explanation: "containsKey() O(1) time leta hai. Two Sum aur Anagram problems mein Hash Map check sabse important hota hai.",
    timeComplexity: "O(1) lookup, O(n) iteration"
  },
  {
    id: "m-set-1",
    practiceNo: 35,
    name: "Set.add() & Set.contains()",
    classType: "HashSet",
    category: "HashSet",
    use: "Duplicates ko automatically filter karna aur O(1) time mein check karna.",
    useEn: "Stores unique elements only and checks existence in O(1) time.",
    syntax: "set.add(e), set.contains(e)",
    code: `import java.util.*;

public class Main {
    public static void main(String[] args) {

        int[] arr = {1, 2, 2, 3, 4, 4, 5};
        Set<Integer> unique = new HashSet<>();

        for (int num : arr) {
            unique.add(num);
        }

        System.out.println("Unique elements: " + unique);
        System.out.println("Contains 3? " + unique.contains(3));
    }
}`,
    output: `Unique elements: [1, 2, 3, 4, 5]
Contains 3? true`,
    explanation: "HashSet duplicate elements ko ignore kar deta hai. Set lookup O(1) time leta hai.",
    timeComplexity: "O(1) average"
  },

  // ==========================================
  // MATH METHODS (java.lang.Math)
  // ==========================================
  {
    id: "m-math-1",
    practiceNo: 36,
    name: "Math.max(), Math.min(), Math.abs()",
    classType: "Math",
    category: "Math",
    use: "Do numbers mein se bada, chota, ya absolute (positive) value nikalna.",
    useEn: "Returns the maximum, minimum, or absolute value without conditionals.",
    syntax: "Math.max(a, b), Math.min(a, b), Math.abs(x)",
    code: `public class Main {
    public static void main(String[] args) {

        int a = 15, b = 28;
        int diff = -42;

        System.out.println("Max: " + Math.max(a, b));
        System.out.println("Min: " + Math.min(a, b));
        System.out.println("Absolute: " + Math.abs(diff));
    }
}`,
    output: `Max: 28
Min: 15
Absolute: 42`,
    explanation: "Kadane's algorithm, sliding window, aur dynamic programming mein Math.max() aur Math.min() lagatar use hote hain.",
    timeComplexity: "O(1)"
  },
  {
    id: "m-math-2",
    practiceNo: 37,
    name: "Math.pow() & Math.sqrt()",
    classType: "Math",
    category: "Math",
    use: "Number ki power nikalna (base^exp) aur square root nikalna.",
    useEn: "Computes base raised to the power of exponent, and square root of a number.",
    syntax: "Math.pow(base, exp), Math.sqrt(n)",
    code: `public class Main {
    public static void main(String[] args) {

        double power = Math.pow(2, 5); // 2^5
        double root = Math.sqrt(49);    // square root of 49

        System.out.println("2^5 = " + (int) power);
        System.out.println("sqrt(49) = " + (int) root);
    }
}`,
    output: `2^5 = 32
sqrt(49) = 7`,
    explanation: "Math.pow() aur Math.sqrt() double return karte hain, isliye integer result ke liye (int) cast kar sakte hain.",
    timeComplexity: "O(1)"
  }
];
