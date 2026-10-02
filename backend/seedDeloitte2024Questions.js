require("dotenv").config();
const mongoose = require("mongoose");
const CompanyQuestion = require("./models/CompanyQuestion");

const questions = [
{
  questionId: 1560,
  companyId: 9,
  year: 2024,
  category: "programming",

  question: `Given an array of integers, determine whether all elements
can be divided into pairs such that the sum of the two numbers
in every pair is even.`,

  options: [],

  answer:
    "Pairing is possible if the number of odd elements is even and the number of even elements is even.",

  solution: `A pair has an even sum when:

even + even = even

or:

odd + odd = even


Therefore every odd number must be paired
with another odd number.

Every even number must be paired with another
even number.


Example:

arr = [1, 3, 2, 4]

Odd numbers:

1, 3

Even numbers:

2, 4

Pairs:

(1, 3) -> 4
(2, 4) -> 6

Both sums are even.

Therefore:

YES


Java Solution:

class Solution {

    public boolean canPair(int[] arr) {

        int odd = 0;
        int even = 0;

        for (int value : arr) {

            if (value % 2 == 0) {
                even++;
            } else {
                odd++;
            }
        }

        return odd % 2 == 0 &&
               even % 2 == 0;
    }
}


Time Complexity:

O(n)


Space Complexity:

O(1)`,

  difficulty: "Easy",
  programmingLanguage: "Java",

  sourceType: "previous-year",
  sourceName:
    "Deloitte FTE On-Campus 2024 - Coding Assessment",

  sourceUrl:
    "https://www.geeksforgeeks.org/interview-experiences/deloitte-interview-experience-for-fte-on-campus-2024/",
},

{
  questionId: 1561,
  companyId: 9,
  year: 2024,
  category: "programming",

  question: `Given a string, find the minimum number of character
deletions required to make the string non-palindromic.

If the string is already non-palindromic, return 0.`,

  options: [],

  answer:
    "If the string is already non-palindromic return 0. Otherwise, for a palindrome of length greater than 1, deleting one suitable character makes it non-palindromic; a one-character string cannot become a non-empty non-palindrome by deletion.",

  solution: `First determine whether the original string
is a palindrome.

Example:

s = "abc"

Reverse:

"cba"

They are different.

Therefore the string is already
non-palindromic.

Answer:

0


Now consider:

s = "abba"

It is a palindrome.

Removing one endpoint gives:

"bba"

which is not a palindrome.

Answer:

1


Java Solution:

class Solution {

    public int minimumDeletion(String s) {

        if (!isPalindrome(s)) {
            return 0;
        }

        if (s.length() <= 1) {
            return -1;
        }

        return 1;
    }

    private boolean isPalindrome(String s) {

        int left = 0;
        int right = s.length() - 1;

        while (left < right) {

            if (
                s.charAt(left) !=
                s.charAt(right)
            ) {
                return false;
            }

            left++;
            right--;
        }

        return true;
    }
}


Time Complexity:

O(n)

Space Complexity:

O(1)


Note:

The exact handling of an empty resulting
string depends on the problem definition.

The important reported assessment idea was
minimum deletion to make the string
non-palindromic.`,

  difficulty: "Medium",
  programmingLanguage: "Java",

  sourceType: "previous-year",
  sourceName:
    "Deloitte FTE On-Campus 2024 - Coding Assessment",

  sourceUrl:
    "https://www.geeksforgeeks.org/interview-experiences/deloitte-interview-experience-for-fte-on-campus-2024/",
},

{
  questionId: 1562,
  companyId: 9,
  year: 2024,
  category: "programming",

  question: `Given an array, find the element that occurs only once
while the other elements occur twice.`,

  options: [],

  answer:
    "XOR all array elements. Equal elements cancel each other and the non-repeating element remains.",

  solution: `Example:

arr = [4, 1, 2, 1, 2]

Use XOR:

4 ^ 1 ^ 2 ^ 1 ^ 2


XOR properties:

x ^ x = 0

x ^ 0 = x


Rearranging:

4 ^ (1 ^ 1) ^ (2 ^ 2)

=

4 ^ 0 ^ 0

=

4


Java Solution:

class Solution {

    public int singleNumber(int[] arr) {

        int result = 0;

        for (int value : arr) {
            result ^= value;
        }

        return result;
    }
}


Time Complexity:

O(n)


Space Complexity:

O(1)`,

  difficulty: "Easy",
  programmingLanguage: "Java",

  sourceType: "previous-year",
  sourceName:
    "Deloitte Analyst Trainee Off-Campus 2024 - Coding Round",

  sourceUrl:
    "https://www.geeksforgeeks.org/interview-experiences/deloitte-interview-experience-for-analyst-trainee-off-campus-2/",
},

{
  questionId: 1563,
  companyId: 9,
  year: 2024,
  category: "programming",

  question: `Given three side lengths, determine whether the triangle is
equilateral, isosceles or scalene.`,

  options: [],

  answer:
    "First validate the triangle inequality. Then compare the three sides to classify the triangle.",

  solution: `Suppose:

a = 5
b = 5
c = 5

All three sides are equal.

Therefore:

Equilateral


If exactly two sides are equal:

Isosceles


If all three sides are different:

Scalene


Before classification, validate:

a + b > c
a + c > b
b + c > a


Java Solution:

class Solution {

    public String triangleType(
        int a,
        int b,
        int c
    ) {

        if (
            a <= 0 ||
            b <= 0 ||
            c <= 0 ||
            a + b <= c ||
            a + c <= b ||
            b + c <= a
        ) {

            return "Not a valid triangle";
        }

        if (a == b && b == c) {

            return "Equilateral";
        }

        if (
            a == b ||
            b == c ||
            a == c
        ) {

            return "Isosceles";
        }

        return "Scalene";
    }
}


Time Complexity:

O(1)

Space Complexity:

O(1)`,

  difficulty: "Easy",
  programmingLanguage: "Java",

  sourceType: "previous-year",
  sourceName:
    "Deloitte Analyst Trainee Off-Campus 2024 - Coding Round",

  sourceUrl:
    "https://www.geeksforgeeks.org/interview-experiences/deloitte-interview-experience-for-analyst-trainee-off-campus-2/",
},

{
  questionId: 1564,
  companyId: 9,
  year: 2024,
  category: "programming",

  question:
    "Write a program to add two integers without using the + operator.",

  options: [],

  answer:
    "Use XOR for addition without carry and AND followed by a left shift to calculate the carry.",

  solution: `Binary addition can be implemented using
bitwise operations.


XOR:

a ^ b

performs addition without carrying.


AND:

a & b

identifies positions where a carry occurs.


Shift the carry:

(a & b) << 1


Repeat until there is no carry.


Java Solution:

class Solution {

    public int add(int a, int b) {

        while (b != 0) {

            int carry =
                (a & b) << 1;

            a = a ^ b;

            b = carry;
        }

        return a;
    }
}


Example:

a = 5
b = 3

Binary:

5 = 0101
3 = 0011


After repeated XOR and carry operations:

Result = 8


Time Complexity:

O(number of bits)


For fixed-width Java int values this is
bounded by the integer word size.


Space Complexity:

O(1)`,

  difficulty: "Medium",
  programmingLanguage: "Java",

  sourceType: "previous-year",
  sourceName:
    "Deloitte Analyst Trainee 2024 - Live Coding",

  sourceUrl:
    "https://www.geeksforgeeks.org/interview-experiences/deloitte-interview-experience-for-analyst-trainee-off-campus-2/",
},

{
  questionId: 1565,
  companyId: 9,
  year: 2024,
  category: "programming",

  question:
    "Reverse an integer without converting it into a string.",

  options: [],

  answer:
    "Repeatedly extract the last digit using modulo 10 and append it to the reversed number.",

  solution: `Example:

number = 1234


Extract:

1234 % 10 = 4


Reverse:

0 * 10 + 4 = 4


Remaining:

123


Continue:

4 * 10 + 3 = 43

43 * 10 + 2 = 432

432 * 10 + 1 = 4321


Java Solution:

class Solution {

    public int reverse(int number) {

        int result = 0;

        while (number != 0) {

            int digit =
                number % 10;

            result =
                result * 10 + digit;

            number /= 10;
        }

        return result;
    }
}


Time Complexity:

O(d)

where d is the number of digits.


Space Complexity:

O(1)


For production code, integer overflow should
also be checked before multiplication.`,

  difficulty: "Easy",
  programmingLanguage: "Java",

  sourceType: "previous-year",
  sourceName:
    "Deloitte Analyst Trainee 2024 - Live Coding",

  sourceUrl:
    "https://www.geeksforgeeks.org/interview-experiences/deloitte-interview-experience-for-analyst-trainee-off-campus-2/",
},

{
  questionId: 1566,
  companyId: 9,
  year: 2024,
  category: "programming",

  question: `Given an integer array, find the maximum possible sum
of a contiguous subarray.`,

  options: [],

  answer:
    "Use Kadane's algorithm to maintain the best subarray ending at the current position and the best overall sum.",

  solution: `Example:

arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]


Maximum subarray:

[4, -1, 2, 1]


Sum:

6


Kadane's Algorithm:

At each element decide whether to:

1. Start a new subarray

or

2. Extend the previous subarray


Java Solution:

class Solution {

    public int maxSubArray(int[] nums) {

        int current = nums[0];
        int best = nums[0];

        for (
            int i = 1;
            i < nums.length;
            i++
        ) {

            current =
                Math.max(
                    nums[i],
                    current + nums[i]
                );

            best =
                Math.max(
                    best,
                    current
                );
        }

        return best;
    }
}


Time Complexity:

O(n)


Space Complexity:

O(1)`,

  difficulty: "Medium",
  programmingLanguage: "Java",

  sourceType: "previous-year",
  sourceName:
    "Deloitte USI Tax Technology 2024 - Coding Assessment",

  sourceUrl:
    "https://www.geeksforgeeks.org/interview-experiences/deloitte-usi-tax-technology-interview-experience-business-solution-analyst-1-software-engineer-1/",
},

{
  questionId: 1567,
  companyId: 9,
  year: 2024,
  category: "programming",

  question: `Given two sorted singly linked lists, merge them into
one sorted linked list.`,

  options: [],

  answer:
    "Use two pointers and repeatedly attach the node with the smaller value.",

  solution: `Example:

List 1:

1 -> 3 -> 5

List 2:

2 -> 4 -> 6


Result:

1 -> 2 -> 3 -> 4 -> 5 -> 6


Use a dummy node to simplify construction.


Java Solution:

class ListNode {

    int val;
    ListNode next;

    ListNode(int val) {
        this.val = val;
    }
}


class Solution {

    public ListNode merge(
        ListNode a,
        ListNode b
    ) {

        ListNode dummy =
            new ListNode(0);

        ListNode current = dummy;

        while (
            a != null &&
            b != null
        ) {

            if (a.val <= b.val) {

                current.next = a;
                a = a.next;

            } else {

                current.next = b;
                b = b.next;
            }

            current = current.next;
        }

        if (a != null) {
            current.next = a;
        } else {
            current.next = b;
        }

        return dummy.next;
    }
}


Time Complexity:

O(n + m)


Space Complexity:

O(1)

excluding the existing list nodes.`,

  difficulty: "Medium",
  programmingLanguage: "Java",

  sourceType: "previous-year",
  sourceName:
    "Deloitte USI Tax Technology 2024 - Technical Interview",

  sourceUrl:
    "https://www.geeksforgeeks.org/interview-experiences/deloitte-usi-tax-technology-interview-experience-business-solution-analyst-1-software-engineer-1/",
},

{
  questionId: 1568,
  companyId: 9,
  year: 2024,
  category: "puzzle",

  question: `There are three bags.

One contains only red balls.
One contains only blue balls.
One contains both red and blue balls.

All three bags are labeled incorrectly.

You may draw one ball from one bag.

How can you correctly label all three bags?`,

  options: [],

  answer:
    "Draw from the bag labeled 'Mixed'. Since every label is wrong, that bag cannot actually be mixed. The color drawn identifies its true type, after which the other two labels follow by elimination.",

  solution: `All labels are incorrect.

Therefore the bag labeled:

Mixed

cannot actually be the mixed bag.


Open that bag.


CASE 1:

You draw a red ball.

Since the bag cannot be mixed, it must be:

Red Only


Now consider the bag labeled:

Blue Only

Its label is also wrong.

It cannot be Red Only because that bag has
already been identified.

Therefore it must be:

Mixed


The remaining bag must be:

Blue Only


CASE 2:

If you draw blue from the bag labeled Mixed,
the same reasoning works in reverse.


Only one ball needs to be drawn.`,

  difficulty: "Medium",
  programmingLanguage: null,

  sourceType: "previous-year",
  sourceName:
    "Deloitte USI Tax Technology 2024 - Interview Puzzle",

  sourceUrl:
    "https://www.geeksforgeeks.org/interview-experiences/deloitte-usi-tax-technology-interview-experience-business-solution-analyst-1-software-engineer-1/",
},

{
  questionId: 1569,
  companyId: 9,
  year: 2024,
  category: "dbms",

  question:
    "What is the difference between a primary key and a foreign key?",

  options: [
    "A primary key identifies rows in its table, while a foreign key references a key in another or the same table",
    "Both always perform exactly the same function",
    "A foreign key must always be unique",
    "A primary key can contain duplicate values"
  ],

  answer:
    "A primary key identifies rows in its table, while a foreign key references a key in another or the same table",

  solution: `PRIMARY KEY

Uniquely identifies each row in a table.

Example:

Student

student_id | name

student_id can be the primary key.


FOREIGN KEY

Creates a relationship by referencing a
candidate/primary key in another table,
or sometimes the same table.


Example:

Enrollment

student_id | course_id


student_id can reference:

Student(student_id)


Primary keys require uniqueness.

Foreign-key values can repeat when multiple
rows reference the same parent row.


Correct Answer:

A primary key identifies rows in its table,
while a foreign key references a key in
another or the same table.`,

  difficulty: "Easy",
  programmingLanguage: null,

  sourceType: "previous-year",
  sourceName:
    "Deloitte USI Tax Technology 2024 - DBMS Interview",

  sourceUrl:
    "https://www.geeksforgeeks.org/interview-experiences/deloitte-usi-tax-technology-interview-experience-business-solution-analyst-1-software-engineer-1/",
},

{
  questionId: 1570,
  companyId: 9,
  year: 2024,
  category: "dbms",

  question:
    "What is a database index and why is it used?",

  options: [],

  answer:
    "An index is an auxiliary data structure that can speed up data retrieval, usually at the cost of additional storage and write-maintenance overhead.",

  solution: `Suppose a table contains millions of rows.

Without a useful index, a query may need to
inspect many rows to find matching records.


An index maintains searchable information
about selected columns.


Example:

CREATE INDEX idx_employee_email
ON Employee(email);


A query such as:

SELECT *
FROM Employee
WHERE email = 'a@example.com';

may be able to use the index instead of
performing a full table scan.


Benefits:

Faster searches
Faster filtering in suitable cases
Can help joins and ordering


Costs:

Additional storage

INSERT/UPDATE/DELETE operations may require
index maintenance.


Therefore creating indexes on every column
is not automatically optimal.`,

  difficulty: "Medium",
  programmingLanguage: null,

  sourceType: "previous-year",
  sourceName:
    "Deloitte USI Tax Technology 2024 - DBMS Interview",

  sourceUrl:
    "https://www.geeksforgeeks.org/interview-experiences/deloitte-usi-tax-technology-interview-experience-business-solution-analyst-1-software-engineer-1/",
},

{
  questionId: 1571,
  companyId: 9,
  year: 2024,
  category: "web",

  question:
    "What is the difference between == and === in JavaScript?",

  options: [
    "== may perform type coercion, while === compares without type coercion",
    "=== performs type coercion but == does not",
    "They are always identical",
    "=== can compare only strings"
  ],

  answer:
    "== may perform type coercion, while === compares without type coercion",

  solution: `In JavaScript:

==

is the loose equality operator.

It may perform type conversion before
comparison.


Example:

5 == "5"

Result:

true


The string may be converted during the
comparison.


===

is strict equality.

It does not perform this type coercion.


Example:

5 === "5"

Result:

false


because:

5

is a number

while:

"5"

is a string.


Correct Answer:

== may perform type coercion, while ===
compares without type coercion.`,

  difficulty: "Easy",
  programmingLanguage: null,

  sourceType: "previous-year",
  sourceName:
    "Deloitte USI Tax Technology 2024 - Technical Interview",

  sourceUrl:
    "https://www.geeksforgeeks.org/interview-experiences/deloitte-usi-tax-technology-interview-experience-business-solution-analyst-1-software-engineer-1/",
},

{
  questionId: 1572,
  companyId: 9,
  year: 2024,
  category: "dbms",

  question:
    "What is a view in a relational database?",

  options: [
    "A virtual table based on a query",
    "A mandatory physical copy of an entire database",
    "A database password",
    "A network protocol"
  ],

  answer:
    "A virtual table based on a query",

  solution: `A database view represents the result
of a stored query.

Example:

CREATE VIEW active_employees AS

SELECT
    id,
    name,
    department
FROM Employee
WHERE active = true;


Now:

SELECT *
FROM active_employees;


can be queried similarly to a table.


A normal view generally stores the query
definition rather than maintaining a separate
physical copy of every result row.

Materialized views are different because they
can physically store query results.


Correct Answer:

A virtual table based on a query.`,

  difficulty: "Easy",
  programmingLanguage: null,

  sourceType: "previous-year",
  sourceName:
    "Deloitte USI Tax Technology 2024 - Final Technical Round",

  sourceUrl:
    "https://www.geeksforgeeks.org/interview-experiences/deloitte-usi-tax-technology-interview-experience-business-solution-analyst-1-software-engineer-1/",
},

{
  questionId: 1573,
  companyId: 9,
  year: 2024,
  category: "programming",

  question:
    "Explain preorder, inorder and postorder traversal of a binary tree.",

  options: [],

  answer:
    "Preorder is Root-Left-Right, inorder is Left-Root-Right, and postorder is Left-Right-Root.",

  solution: `Consider:

        1
       / \\
      2   3
     / \\
    4   5


PREORDER

Root
Left
Right

Result:

1 2 4 5 3


INORDER

Left
Root
Right

Result:

4 2 5 1 3


POSTORDER

Left
Right
Root

Result:

4 5 2 3 1


Java Example:

void inorder(Node root) {

    if (root == null) {
        return;
    }

    inorder(root.left);

    System.out.println(root.data);

    inorder(root.right);
}


Each traversal visits every node once.

Time Complexity:

O(n)


Recursive auxiliary space:

O(h)

where h is tree height.`,

  difficulty: "Medium",
  programmingLanguage: "Java",

  sourceType: "previous-year",
  sourceName:
    "Deloitte USI Tax Technology 2024 - Tree Traversal Interview",

  sourceUrl:
    "https://www.geeksforgeeks.org/interview-experiences/deloitte-usi-tax-technology-interview-experience-business-solution-analyst-1-software-engineer-1/",
},

{
  questionId: 1574,
  companyId: 9,
  year: 2024,
  category: "programming",

  question: `Implement a stack using a singly linked list.`,

  options: [],

  answer:
    "Treat the linked-list head as the top of the stack so push and pop can both run in O(1) time.",

  solution: `A stack follows:

LIFO

Last In, First Out.


Using the linked-list head as top:

PUSH:

Insert at head.


POP:

Remove from head.


Java Solution:

class StackNode {

    int data;
    StackNode next;

    StackNode(int data) {
        this.data = data;
    }
}


class LinkedStack {

    private StackNode top;

    public void push(int value) {

        StackNode node =
            new StackNode(value);

        node.next = top;

        top = node;
    }

    public int pop() {

        if (top == null) {

            throw new RuntimeException(
                "Stack is empty"
            );
        }

        int value = top.data;

        top = top.next;

        return value;
    }

    public int peek() {

        if (top == null) {

            throw new RuntimeException(
                "Stack is empty"
            );
        }

        return top.data;
    }

    public boolean isEmpty() {

        return top == null;
    }
}


Push:

O(1)


Pop:

O(1)


Peek:

O(1)`,

  difficulty: "Medium",
  programmingLanguage: "Java",

  sourceType: "previous-year",
  sourceName:
    "HashedIn by Deloitte Software Engineer Interview - Feb 2024",

  sourceUrl:
    "https://www.geeksforgeeks.org/interview-experiences/hashedin-by-deloitte-interview-experience-for-software-engineer-feb-2024/",
},

{
  questionId: 1575,
  companyId: 9,
  year: 2024,
  category: "programming",

  question: `Given an integer array and an integer k, find the kth
largest element in the array.`,

  options: [],

  answer:
    "Maintain a min-heap of size k. After processing all elements, the heap root is the kth largest element.",

  solution: `Example:

nums = [3, 2, 1, 5, 6, 4]

k = 2


Largest values:

6, 5


Therefore:

2nd largest = 5


Maintain a min-heap containing at most
k elements.


Java Solution:

import java.util.*;

class Solution {

    public int findKthLargest(
        int[] nums,
        int k
    ) {

        PriorityQueue<Integer> heap =
            new PriorityQueue<>();

        for (int value : nums) {

            heap.offer(value);

            if (heap.size() > k) {
                heap.poll();
            }
        }

        return heap.peek();
    }
}


Why a min-heap?

We only need to retain the largest k
elements seen so far.

The smallest among those k elements remains
at the root.


Time Complexity:

O(n log k)


Space Complexity:

O(k)`,

  difficulty: "Medium",
  programmingLanguage: "Java",

  sourceType: "previous-year",
  sourceName:
    "HashedIn by Deloitte Software Engineer Interview - Feb 2024",

  sourceUrl:
    "https://www.geeksforgeeks.org/interview-experiences/hashedin-by-deloitte-interview-experience-for-software-engineer-feb-2024/",
},

{
  questionId: 1576,
  companyId: 9,
  year: 2024,
  category: "programming",

  question: `You are given an array prices where prices[i] is the price
of a chocolate and an integer money.

Choose exactly two chocolates such that their total cost
does not exceed money.

Return the money remaining after buying the cheapest
possible pair. If no pair can be purchased, return the
original amount.`,

  options: [],

  answer:
    "Find the two smallest prices in one pass. If their sum is at most money, subtract it; otherwise return money.",

  solution: `Example:

prices = [1, 2, 2]

money = 3


Two smallest prices:

1 and 2


Cost:

3


Remaining:

3 - 3 = 0


Instead of sorting the entire array,
track the smallest and second-smallest values.


Java Solution:

class Solution {

    public int buyChoco(
        int[] prices,
        int money
    ) {

        int first = Integer.MAX_VALUE;
        int second = Integer.MAX_VALUE;

        for (int price : prices) {

            if (price < first) {

                second = first;
                first = price;

            } else if (price < second) {

                second = price;
            }
        }

        int cost = first + second;

        if (cost <= money) {
            return money - cost;
        }

        return money;
    }
}


Time Complexity:

O(n)


Space Complexity:

O(1)


A sorting solution would typically take:

O(n log n)


The candidate reported first discussing a
sorting solution and then optimizing it to
linear time.`,

  difficulty: "Easy",
  programmingLanguage: "Java",

  sourceType: "previous-year",
  sourceName:
    "Deloitte HashedIn Interview Experience 2024 - Buy Two Chocolates",

  sourceUrl:
    "https://www.geeksforgeeks.org/interview-experiences/deloitte-hashedin-interview-experience/",
},

{
  questionId: 1577,
  companyId: 9,
  year: 2024,
  category: "programming",

  question: `Koko has several piles of bananas and h hours available.

Koko chooses an integer eating speed k bananas per hour.

Find the minimum integer k such that all piles can be
finished within h hours.`,

  options: [],

  answer:
    "Binary-search the eating speed from 1 to the maximum pile size.",

  solution: `Suppose:

piles = [3, 6, 7, 11]

h = 8


If speed is k, hours needed for one pile are:

ceil(pile / k)


The answer lies between:

1

and:

maximum pile size


If a speed works, any larger speed also works.

This monotonic property allows binary search.


Java Solution:

class Solution {

    public int minEatingSpeed(
        int[] piles,
        int h
    ) {

        int low = 1;
        int high = 0;

        for (int pile : piles) {
            high = Math.max(high, pile);
        }

        while (low < high) {

            int mid =
                low + (high - low) / 2;

            long hours = 0;

            for (int pile : piles) {

                hours +=
                    (pile + mid - 1L) / mid;
            }

            if (hours <= h) {

                high = mid;

            } else {

                low = mid + 1;
            }
        }

        return low;
    }
}


Time Complexity:

O(n log M)

where M is the maximum pile size.


Space Complexity:

O(1)`,

  difficulty: "Medium",
  programmingLanguage: "Java",

  sourceType: "previous-year",
  sourceName:
    "Deloitte HashedIn Interview Experience 2024 - Koko Eating Bananas",

  sourceUrl:
    "https://www.geeksforgeeks.org/interview-experiences/deloitte-hashedin-interview-experience/",
},

{
  questionId: 1578,
  companyId: 9,
  year: 2024,
  category: "programming",

  question: `Given an array representing elevation heights,
calculate how much rainwater can be trapped after raining.`,

  options: [],

  answer:
    "Use two pointers while maintaining the maximum height seen from the left and right.",

  solution: `Example:

height = [4, 2, 0, 3, 2, 5]


Water trapped:

9 units


Two-pointer idea:

Maintain:

leftMax
rightMax


If the left boundary is smaller, process
the left side.

Otherwise process the right side.


Java Solution:

class Solution {

    public int trap(int[] height) {

        int left = 0;
        int right = height.length - 1;

        int leftMax = 0;
        int rightMax = 0;

        int water = 0;

        while (left < right) {

            if (
                height[left] <=
                height[right]
            ) {

                if (
                    height[left] >= leftMax
                ) {

                    leftMax = height[left];

                } else {

                    water +=
                        leftMax - height[left];
                }

                left++;

            } else {

                if (
                    height[right] >= rightMax
                ) {

                    rightMax = height[right];

                } else {

                    water +=
                        rightMax - height[right];
                }

                right--;
            }
        }

        return water;
    }
}


Time Complexity:

O(n)


Space Complexity:

O(1)`,

  difficulty: "Hard",
  programmingLanguage: "Java",

  sourceType: "previous-year",
  sourceName:
    "HashedIn by Deloitte Software Engineer Interview - Feb 2024",

  sourceUrl:
    "https://www.geeksforgeeks.org/interview-experiences/hashedin-by-deloitte-interview-experience-for-software-engineer-feb-2024/",
},

{
  questionId: 1579,
  companyId: 9,
  year: 2024,
  category: "sql",

  question: `What is the difference between DELETE and TRUNCATE
in SQL?`,

  options: [
    "DELETE can remove selected rows using a WHERE clause, while TRUNCATE removes all rows from the table",
    "TRUNCATE supports WHERE but DELETE never does",
    "DELETE always deletes the table structure",
    "There is no difference"
  ],

  answer:
    "DELETE can remove selected rows using a WHERE clause, while TRUNCATE removes all rows from the table",

  solution: `DELETE:

Can remove selected rows.

Example:

DELETE FROM Employee
WHERE department = 'Sales';


TRUNCATE:

Removes all rows from a table.

Example:

TRUNCATE TABLE Employee;


A key practical difference is:

DELETE can use a WHERE clause.

TRUNCATE does not selectively remove rows
using WHERE.


Exact transaction/logging/identity behavior
can differ between database systems, so those
details should be checked for the specific DBMS.


Correct Answer:

DELETE can remove selected rows using WHERE,
while TRUNCATE removes all rows.`,

  difficulty: "Easy",
  programmingLanguage: null,

  sourceType: "previous-year",
  sourceName:
    "Deloitte Analyst Interview - 21 Aug 2024",

  sourceUrl:
    "https://www.geeksforgeeks.org/interview-experiences/deloitte-interview-experience-for-analyst-profile/",
},

{
  questionId: 1580,
  companyId: 9,
  year: 2024,
  category: "programming",

  question:
    "Write a recursive program to generate the Fibonacci sequence.",

  options: [],

  answer:
    "Use the recurrence F(n) = F(n-1) + F(n-2), with base cases F(0)=0 and F(1)=1.",

  solution: `Fibonacci sequence:

0, 1, 1, 2, 3, 5, 8, ...


Definition:

F(0) = 0

F(1) = 1

F(n) =
F(n - 1) + F(n - 2)


Java Solution:

class Solution {

    public int fibonacci(int n) {

        if (n <= 1) {
            return n;
        }

        return fibonacci(n - 1)
             + fibonacci(n - 2);
    }
}


For example:

F(5)

=

F(4) + F(3)

=

5


Important:

The basic recursive implementation repeatedly
solves the same subproblems.


Time Complexity:

O(2^n)

approximately.


Space Complexity:

O(n)

for the recursion stack.


Memoization or iteration can reduce the time
complexity to O(n).`,

  difficulty: "Easy",
  programmingLanguage: "Java",

  sourceType: "previous-year",
  sourceName:
    "Deloitte Analyst Interview - 21 Aug 2024",

  sourceUrl:
    "https://www.geeksforgeeks.org/interview-experiences/deloitte-interview-experience-for-analyst-profile/",
},

{
  questionId: 1581,
  companyId: 9,
  year: 2024,
  category: "programming",

  question:
    "Swap two numbers without using a third variable.",

  options: [],

  answer:
    "Use XOR operations or arithmetic operations to swap the values without an additional temporary variable.",

  solution: `XOR Approach:

Suppose:

a = 5
b = 10


Perform:

a = a ^ b;

b = a ^ b;

a = a ^ b;


After these operations:

a = 10
b = 5


Java:

class Solution {

    public void swapExample() {

        int a = 5;
        int b = 10;

        a = a ^ b;
        b = a ^ b;
        a = a ^ b;

        System.out.println(a);
        System.out.println(b);
    }
}


Output:

10
5


This uses no third variable.


An arithmetic approach using addition and
subtraction also exists, but it can overflow
for sufficiently large integer values.

XOR avoids that arithmetic-overflow issue
for integer values.`,

  difficulty: "Easy",
  programmingLanguage: "Java",

  sourceType: "previous-year",
  sourceName:
    "Deloitte Analyst Interview - 21 Aug 2024",

  sourceUrl:
    "https://www.geeksforgeeks.org/interview-experiences/deloitte-interview-experience-for-analyst-profile/",
},

{
  questionId: 1582,
  companyId: 9,
  year: 2024,
  category: "dbms",

  question: `Design the main database tables for a railway reservation
system similar to IRCTC and explain their relationships.`,

  options: [],

  answer:
    "Separate entities such as users, trains, stations, routes/schedules, bookings, passengers and payments, and connect them with primary and foreign keys.",

  solution: `A simplified design can include:


USERS

user_id PK
name
email
phone


TRAINS

train_id PK
train_number
train_name


STATIONS

station_id PK
station_code
station_name


TRAIN_STOPS

train_id FK
station_id FK
stop_order
arrival_time
departure_time


BOOKINGS

booking_id PK
user_id FK
train_id FK
journey_date
source_station_id FK
destination_station_id FK
status


PASSENGERS

passenger_id PK
booking_id FK
name
age
seat_number


PAYMENTS

payment_id PK
booking_id FK
amount
status
transaction_reference


Relationships:

User
  |
  | 1:N
  v
Booking


Train
  |
  | 1:N
  v
Booking


Booking
  |
  | 1:N
  v
Passenger


Booking
  |
  | 1:N or 1:1 depending on design
  v
Payment


Train and Station form a many-to-many
relationship resolved through TRAIN_STOPS.


Important design considerations include:

normalization
indexes
seat availability
concurrent booking
transaction isolation
unique constraints


The candidate reported being asked to design
an IRCTC database and then optimize it.`,

  difficulty: "Hard",
  programmingLanguage: null,

  sourceType: "previous-year",
  sourceName:
    "HashedIn by Deloitte Software Engineer Interview - Feb 2024",

  sourceUrl:
    "https://www.geeksforgeeks.org/interview-experiences/hashedin-by-deloitte-interview-experience-for-software-engineer-feb-2024/",
},

{
  questionId: 1583,
  companyId: 9,
  year: 2024,
  category: "programming",

  question: `Write a program to print every character in a string
along with its character code value.`,

  options: [],

  answer:
    "Iterate over the string and cast each Java char to an integer to display its UTF-16 code unit value; for ordinary ASCII characters this equals the ASCII value.",

  solution: `Example:

Input:

ABC


Output:

A -> 65
B -> 66
C -> 67


Java Solution:

class Solution {

    public void printCodes(String text) {

        for (
            int i = 0;
            i < text.length();
            i++
        ) {

            char ch =
                text.charAt(i);

            System.out.println(
                ch + " -> " + (int) ch
            );
        }
    }
}


For basic ASCII characters:

'A' = 65

'B' = 66

'a' = 97


Technical note:

Java char represents a UTF-16 code unit.

Therefore casting char to int is not a
general-purpose Unicode code-point solution
for supplementary characters.

For the ASCII-oriented interview problem,
the simple approach is sufficient.


Time Complexity:

O(n)


Space Complexity:

O(1)

excluding output.`,

  difficulty: "Easy",
  programmingLanguage: "Java",

  sourceType: "previous-year",
  sourceName:
    "Deloitte Analyst Trainee National Level Assessment 2024 - Interview",

  sourceUrl:
    "https://www.geeksforgeeks.org/interview-experiences/deloitte-interview-experience-for-analyst-trainee-national-level-assesment/",
},

{
  questionId: 1584,
  companyId: 9,
  year: 2024,
  category: "programming",

  question: `Explain the seven layers of the OSI model and the
main function of each layer.`,

  options: [],

  answer:
    "The OSI layers from bottom to top are Physical, Data Link, Network, Transport, Session, Presentation and Application.",

  solution: `OSI has seven conceptual layers.


7. APPLICATION

Provides network services to applications.

Examples of application-layer protocols include:

HTTP
SMTP
DNS


6. PRESENTATION

Concerned with representation of data.

Examples of functions:

encoding
serialization
encryption/decryption concepts
compression


5. SESSION

Manages logical communication sessions.


4. TRANSPORT

Provides end-to-end transport services.

Examples:

TCP
UDP


3. NETWORK

Handles logical addressing and routing.

Example protocol:

IP


2. DATA LINK

Handles frame-level communication on a link.

Examples of concerns:

MAC addressing
framing
link-level error detection


1. PHYSICAL

Concerned with transmitting raw bits through
physical media/signaling.


Mnemonic from Layer 7 to Layer 1:

All
People
Seem
To
Need
Data
Processing


The 2024 Deloitte interview report explicitly
lists OSI layers and their functions as an
interview question.`,

  difficulty: "Medium",
  programmingLanguage: null,

  sourceType: "previous-year",
  sourceName:
    "Deloitte Interview Questions Report - Updated Feb 2024",

  sourceUrl:
    "https://www.geeksforgeeks.org/interview-experiences/deloitte-interview-experience-3/",
},
{
  questionId: 1585,
  companyId: 9,
  year: 2024,
  category: "programming",

  question: `Given a string, reverse the string without using any built-in reverse function.

Example:

Input:
"Deloitte"

Output:
"ettiol eD".replace(" ", "")`,

  options: [],

  answer:
    "Use two pointers to swap characters from both ends until the pointers meet.",

  solution: `Example:

Input:
Deloitte

Start with:

left = 0
right = length - 1

Swap characters at left and right and move
both pointers toward the center.

Java Solution:

class Solution {

    public String reverseString(String s) {

        char[] chars = s.toCharArray();

        int left = 0;
        int right = chars.length - 1;

        while (left < right) {

            char temp = chars[left];
            chars[left] = chars[right];
            chars[right] = temp;

            left++;
            right--;
        }

        return new String(chars);
    }
}

For:

Deloitte

Output:

ettioleD

Without spacing:

ettioleD

Time Complexity:
O(n)

Space Complexity:
O(n)

because Java String is immutable and we create
a character array.`,

  difficulty: "Easy",
  programmingLanguage: "Java",
  sourceType: "previous-year",
  sourceName: "Deloitte 2024 Technical Interview Practice",
  sourceUrl: null,
},

{
  questionId: 1586,
  companyId: 9,
  year: 2024,
  category: "sql",

  question: `Write an SQL query to find the second highest salary
from an Employee table.`,

  options: [],

  answer:
    "Find the maximum salary that is smaller than the overall maximum salary.",

  solution: `Suppose Employee contains:

id | name | salary
1  | A    | 50000
2  | B    | 70000
3  | C    | 60000
4  | D    | 70000

The highest distinct salary is:

70000

The second highest distinct salary is:

60000


SQL:

SELECT MAX(salary) AS second_highest_salary
FROM Employee
WHERE salary < (
    SELECT MAX(salary)
    FROM Employee
);


Another approach using DENSE_RANK:

SELECT salary
FROM (
    SELECT
        salary,
        DENSE_RANK() OVER (
            ORDER BY salary DESC
        ) AS rnk
    FROM Employee
) t
WHERE rnk = 2;


DENSE_RANK is useful when duplicate salaries
are present.`,

  difficulty: "Medium",
  programmingLanguage: null,
  sourceType: "previous-year",
  sourceName: "Deloitte 2024 SQL Interview Practice",
  sourceUrl: null,
},

{
  questionId: 1587,
  companyId: 9,
  year: 2024,
  category: "sql",

  question: `Write an SQL query to find employees whose first name
ends with the letter 'a'.`,

  options: [],

  answer:
    "Use the LIKE operator with the pattern '%a'.",

  solution: `Assume table:

Employee

id
first_name
salary


Query:

SELECT *
FROM Employee
WHERE first_name LIKE '%a';


Explanation:

%

matches zero or more characters.

a

must appear at the end.


Examples matching the condition:

Neha
Priya
Riya


Whether matching is case-sensitive depends
on the database system and collation.`,

  difficulty: "Easy",
  programmingLanguage: null,
  sourceType: "company-style",
  sourceName: "Deloitte 2024 SQL Assessment Practice",
  sourceUrl: null,
},

{
  questionId: 1588,
  companyId: 9,
  year: 2024,
  category: "sql",

  question: `Which SQL query correctly counts the number of employees
in each department?`,

  options: [
    "SELECT department, COUNT(*) FROM Employee GROUP BY department;",
    "SELECT COUNT(department) FROM Employee;",
    "SELECT department FROM Employee ORDER BY COUNT(*);",
    "SELECT DISTINCT COUNT(*) FROM Employee;"
  ],

  answer:
    "SELECT department, COUNT(*) FROM Employee GROUP BY department;",

  solution: `GROUP BY creates one group for each distinct
department.

COUNT(*) then counts rows in each group.

Correct query:

SELECT
    department,
    COUNT(*)
FROM Employee
GROUP BY department;


Example:

IT      5
HR      3
Sales   8


Correct Answer:

SELECT department, COUNT(*)
FROM Employee
GROUP BY department;`,

  difficulty: "Easy",
  programmingLanguage: null,
  sourceType: "company-style",
  sourceName: "Deloitte 2024 SQL Assessment Practice",
  sourceUrl: null,
},

{
  questionId: 1589,
  companyId: 9,
  year: 2024,
  category: "dbms",

  question:
    "What is the difference between a primary key and a unique key?",

  options: [
    "A table has one primary key constraint, while it can have multiple unique constraints",
    "A unique key can never enforce uniqueness",
    "Primary keys allow duplicate values",
    "There is no difference"
  ],

  answer:
    "A table has one primary key constraint, while it can have multiple unique constraints",

  solution: `Both PRIMARY KEY and UNIQUE constraints
enforce uniqueness.

PRIMARY KEY:

Identifies each row of the table.

A table has one primary key constraint.

The primary-key columns cannot contain NULL.


UNIQUE:

Also enforces uniqueness.

A table can contain multiple UNIQUE
constraints.


NULL behavior for UNIQUE constraints can
differ between database systems.


Example:

CREATE TABLE Users (

    id INT PRIMARY KEY,

    email VARCHAR(100) UNIQUE,

    username VARCHAR(50) UNIQUE
);


Here:

id

is the primary key.

email and username have separate unique
constraints.`,

  difficulty: "Medium",
  programmingLanguage: null,
  sourceType: "previous-year",
  sourceName: "Deloitte 2024 DBMS Interview Practice",
  sourceUrl: null,
},

{
  questionId: 1590,
  companyId: 9,
  year: 2024,
  category: "dbms",

  question:
    "What is the purpose of normalization in DBMS?",

  options: [
    "Reduce redundancy and undesirable data anomalies",
    "Duplicate every record",
    "Increase the number of databases",
    "Convert SQL into Java"
  ],

  answer:
    "Reduce redundancy and undesirable data anomalies",

  solution: `Normalization organizes relational data to
reduce unnecessary duplication and undesirable
data modification anomalies.

Common normal forms:

1NF
2NF
3NF
BCNF


Example:

Instead of repeatedly storing:

employee_name
department_name
department_location

for every employee, department information
can be separated into a Department table.


Benefits can include:

Reduced redundancy

Reduced update anomalies

Reduced insertion anomalies

Reduced deletion anomalies


Correct Answer:

Reduce redundancy and undesirable data
anomalies.`,

  difficulty: "Easy",
  programmingLanguage: null,
  sourceType: "company-style",
  sourceName: "Deloitte 2024 DBMS Assessment Practice",
  sourceUrl: null,
},

{
  questionId: 1591,
  companyId: 9,
  year: 2024,
  category: "java",

  question:
    "What is the difference between method overloading and method overriding in Java?",

  options: [
    "Overloading uses the same method name with different parameter lists; overriding provides a subclass implementation of an inherited method",
    "Both mean exactly the same thing",
    "Overloading requires inheritance in every case",
    "Overriding changes only variable names"
  ],

  answer:
    "Overloading uses the same method name with different parameter lists; overriding provides a subclass implementation of an inherited method",

  solution: `METHOD OVERLOADING

Same method name with different parameter
lists.

Example:

void print(int x)

void print(String x)


The compiler determines which overloaded
method matches the arguments.


METHOD OVERRIDING

A subclass provides its own implementation
of an inherited instance method.

Example:

class Animal {

    void sound() {
        System.out.println("Animal");
    }
}

class Dog extends Animal {

    @Override
    void sound() {
        System.out.println("Bark");
    }
}


With overriding, dynamic dispatch can select
the subclass implementation at runtime.


Correct Answer:

Overloading -> different parameter lists.

Overriding -> subclass redefines inherited
method behavior.`,

  difficulty: "Medium",
  programmingLanguage: "Java",
  sourceType: "previous-year",
  sourceName: "Deloitte 2024 Java/OOP Interview Practice",
  sourceUrl: null,
},

{
  questionId: 1592,
  companyId: 9,
  year: 2024,
  category: "java",

  question:
    "Can an abstract class have a constructor in Java?",

  options: [
    "Yes",
    "No",
    "Only if every method is static",
    "Only if the class is final"
  ],

  answer: "Yes",

  solution: `Yes.

An abstract class cannot itself be instantiated
directly, but it can have constructors.

The constructor is used when a subclass object
is created.

Example:

abstract class Vehicle {

    Vehicle() {
        System.out.println(
            "Vehicle constructor"
        );
    }
}

class Car extends Vehicle {

    Car() {
        System.out.println(
            "Car constructor"
        );
    }
}


When:

new Car();

is executed, the superclass constructor runs
as part of object initialization.


Correct Answer:

Yes`,

  difficulty: "Easy",
  programmingLanguage: "Java",
  sourceType: "company-style",
  sourceName: "Deloitte 2024 Java/OOP Assessment Practice",
  sourceUrl: null,
},

{
  questionId: 1593,
  companyId: 9,
  year: 2024,
  category: "java",

  question:
    "Which Java collection does not allow duplicate elements?",

  options: [
    "ArrayList",
    "LinkedList",
    "HashSet",
    "Vector"
  ],

  answer: "HashSet",

  solution: `A Set represents a collection that does not
contain duplicate elements according to its
equality rules.

HashSet is a commonly used Set implementation.

Example:

Set<Integer> set = new HashSet<>();

set.add(10);
set.add(20);
set.add(10);


Contents contain only:

10
20


ArrayList and LinkedList can contain
duplicates.


Correct Answer:

HashSet`,

  difficulty: "Easy",
  programmingLanguage: "Java",
  sourceType: "company-style",
  sourceName: "Deloitte 2024 Java Assessment Practice",
  sourceUrl: null,
},

{
  questionId: 1594,
  companyId: 9,
  year: 2024,
  category: "programming",

  question: `Given a string, return the first character that does
not repeat.

Example:

Input:
"swiss"

Output:
'w'`,

  options: [],

  answer:
    "Count the frequency of each character, then scan the string again and return the first character whose frequency is one.",

  solution: `Example:

s = "swiss"

Frequencies:

s -> 3
w -> 1
i -> 1


Scan from left to right:

s repeats.

w occurs once.

Therefore:

w


Java Solution:

import java.util.*;

class Solution {

    public Character firstNonRepeating(
        String s
    ) {

        Map<Character, Integer> frequency =
            new HashMap<>();

        for (char ch : s.toCharArray()) {

            frequency.put(
                ch,
                frequency.getOrDefault(ch, 0) + 1
            );
        }

        for (char ch : s.toCharArray()) {

            if (frequency.get(ch) == 1) {
                return ch;
            }
        }

        return null;
    }
}


Time Complexity:

O(n)


Space Complexity:

O(k)

where k is the number of distinct
characters.`,

  difficulty: "Easy",
  programmingLanguage: "Java",
  sourceType: "previous-year",
  sourceName: "Deloitte 2024 DSA Interview Practice",
  sourceUrl: null,
},

{
  questionId: 1595,
  companyId: 9,
  year: 2024,
  category: "programming",

  question: `Given a singly linked list, delete its middle node.

For an even number of nodes, delete the second middle node.`,

  options: [],

  answer:
    "Use slow and fast pointers. When the fast pointer reaches the end, the slow pointer is at the middle node.",

  solution: `Example:

1 -> 2 -> 3 -> 4 -> 5

Middle:

3

Result:

1 -> 2 -> 4 -> 5


Use:

slow
fast
previous


Fast moves two nodes.

Slow moves one node.


Java Solution:

class ListNode {

    int val;
    ListNode next;

    ListNode(int val) {
        this.val = val;
    }
}


class Solution {

    public ListNode deleteMiddle(
        ListNode head
    ) {

        if (
            head == null ||
            head.next == null
        ) {
            return null;
        }

        ListNode slow = head;
        ListNode fast = head;
        ListNode previous = null;

        while (
            fast != null &&
            fast.next != null
        ) {

            previous = slow;
            slow = slow.next;
            fast = fast.next.next;
        }

        previous.next = slow.next;

        return head;
    }
}


Time Complexity:

O(n)


Space Complexity:

O(1)`,

  difficulty: "Medium",
  programmingLanguage: "Java",
  sourceType: "previous-year",
  sourceName: "Deloitte 2024 DSA Interview Practice",
  sourceUrl: null,
},

{
  questionId: 1596,
  companyId: 9,
  year: 2024,
  category: "programming",

  question: `Given an array, find the next greater element for every
array element.

The next greater element is the first greater value
appearing to its right.

Example:

Input:
[4, 5, 2, 10]

Output:
[5, 10, 10, -1]`,

  options: [],

  answer:
    "Traverse from right to left using a monotonic decreasing stack.",

  solution: `Input:

[4, 5, 2, 10]


For 4:

next greater = 5


For 5:

next greater = 10


For 2:

next greater = 10


For 10:

none

Therefore:

[5, 10, 10, -1]


Java Solution:

import java.util.*;

class Solution {

    public int[] nextGreater(int[] nums) {

        int n = nums.length;

        int[] answer = new int[n];

        Stack<Integer> stack =
            new Stack<>();

        for (int i = n - 1; i >= 0; i--) {

            while (
                !stack.isEmpty() &&
                stack.peek() <= nums[i]
            ) {
                stack.pop();
            }

            answer[i] =
                stack.isEmpty()
                ? -1
                : stack.peek();

            stack.push(nums[i]);
        }

        return answer;
    }
}


Time Complexity:

O(n)


Each element is pushed and popped at most
once.


Space Complexity:

O(n)`,

  difficulty: "Medium",
  programmingLanguage: "Java",
  sourceType: "previous-year",
  sourceName: "Deloitte 2024 DSA Interview Practice",
  sourceUrl: null,
},

{
  questionId: 1597,
  companyId: 9,
  year: 2024,
  category: "programming",

  question: `Given a string s, determine whether it is a palindrome.

Ignore character case.

Example:

Input:
"Madam"

Output:
true`,

  options: [],

  answer:
    "Compare characters from both ends using two pointers.",

  solution: `Input:

Madam


Convert characters to a common case:

madam


Compare:

m == m

a == a

d is the middle character.


Therefore:

true


Java Solution:

class Solution {

    public boolean isPalindrome(String s) {

        int left = 0;
        int right = s.length() - 1;

        while (left < right) {

            char a =
                Character.toLowerCase(
                    s.charAt(left)
                );

            char b =
                Character.toLowerCase(
                    s.charAt(right)
                );

            if (a != b) {
                return false;
            }

            left++;
            right--;
        }

        return true;
    }
}


Time Complexity:

O(n)


Space Complexity:

O(1)`,

  difficulty: "Easy",
  programmingLanguage: "Java",
  sourceType: "previous-year",
  sourceName: "Deloitte 2024 Coding Interview Practice",
  sourceUrl: null,
},

{
  questionId: 1598,
  companyId: 9,
  year: 2024,
  category: "programming",

  question: `Given an array containing numbers from 1 to n where one
number is missing and another number occurs twice, find both
the missing and repeating numbers.`,

  options: [],

  answer:
    "Use a frequency array, mathematical equations, XOR partitioning, or in-place marking. A frequency array gives a simple O(n) solution.",

  solution: `Example:

arr = [1, 3, 3, 4]

n = 4


Expected numbers:

1, 2, 3, 4


3 appears twice.

2 is missing.


Output:

Repeating = 3
Missing = 2


Java Solution:

class Solution {

    public int[] findNumbers(int[] arr) {

        int n = arr.length;

        int[] frequency =
            new int[n + 1];

        for (int value : arr) {
            frequency[value]++;
        }

        int missing = -1;
        int repeating = -1;

        for (int i = 1; i <= n; i++) {

            if (frequency[i] == 0) {
                missing = i;
            }

            if (frequency[i] == 2) {
                repeating = i;
            }
        }

        return new int[] {
            repeating,
            missing
        };
    }
}


Time Complexity:

O(n)


Space Complexity:

O(n)


More advanced solutions can reduce auxiliary
space to O(1).`,

  difficulty: "Medium",
  programmingLanguage: "Java",
  sourceType: "previous-year",
  sourceName: "Deloitte/HashedIn 2024 DSA Interview Practice",
  sourceUrl: null,
},

{
  questionId: 1599,
  companyId: 9,
  year: 2024,
  category: "programming",

  question: `Given an array and a target value, find all unique pairs
whose sum equals the target.

Example:

Input:
arr = [1, 5, 7, -1, 5]
target = 6

Possible unique value pairs:
(1, 5)
(7, -1)`,

  options: [],

  answer:
    "Use a HashSet to track values already seen and another set to prevent duplicate pairs.",

  solution: `For each number:

required = target - number


If required has already been seen,
a pair exists.


Example:

target = 6


For 5:

required = 1


If 1 was previously seen:

(1, 5)

is a valid pair.


Java Solution:

import java.util.*;

class Solution {

    public List<List<Integer>> findPairs(
        int[] arr,
        int target
    ) {

        Set<Integer> seen =
            new HashSet<>();

        Set<String> used =
            new HashSet<>();

        List<List<Integer>> result =
            new ArrayList<>();

        for (int value : arr) {

            int required =
                target - value;

            if (seen.contains(required)) {

                int a =
                    Math.min(value, required);

                int b =
                    Math.max(value, required);

                String key = a + ":" + b;

                if (used.add(key)) {

                    result.add(
                        Arrays.asList(a, b)
                    );
                }
            }

            seen.add(value);
        }

        return result;
    }
}


Time Complexity:

O(n) average


Space Complexity:

O(n)`,

  difficulty: "Medium",
  programmingLanguage: "Java",
  sourceType: "previous-year",
  sourceName: "Deloitte/HashedIn 2024 DSA Interview Practice",
  sourceUrl: null,
},

{
  questionId: 1600,
  companyId: 9,
  year: 2024,
  category: "programming",

  question: `Given a string, find its longest palindromic substring.

Example:

Input:
"babad"

Output:
"bab"

"aba" is also a valid answer.`,

  options: [],

  answer:
    "Expand around every possible palindrome center and keep track of the longest interval.",

  solution: `A palindrome can have:

one center character

or:

a center between two characters.


For every index, expand:

1. Around (i, i)

2. Around (i, i + 1)


Java Solution:

class Solution {

    public String longestPalindrome(
        String s
    ) {

        if (
            s == null ||
            s.length() < 2
        ) {
            return s;
        }

        int start = 0;
        int end = 0;

        for (
            int i = 0;
            i < s.length();
            i++
        ) {

            int len1 =
                expand(s, i, i);

            int len2 =
                expand(s, i, i + 1);

            int len =
                Math.max(len1, len2);

            if (len > end - start + 1) {

                start =
                    i - (len - 1) / 2;

                end =
                    i + len / 2;
            }
        }

        return s.substring(
            start,
            end + 1
        );
    }

    private int expand(
        String s,
        int left,
        int right
    ) {

        while (
            left >= 0 &&
            right < s.length() &&
            s.charAt(left) ==
            s.charAt(right)
        ) {

            left--;
            right++;
        }

        return right - left - 1;
    }
}


Time Complexity:

O(n²)


Space Complexity:

O(1)`,

  difficulty: "Medium",
  programmingLanguage: "Java",
  sourceType: "previous-year",
  sourceName: "Deloitte/HashedIn 2024 DSA Interview Practice",
  sourceUrl: null,
},

{
  questionId: 1601,
  companyId: 9,
  year: 2024,
  category: "programming",

  question: `You are given k sorted linked lists.

Merge all of them into one sorted linked list.`,

  options: [],

  answer:
    "Use a min-heap containing the current smallest node from each list.",

  solution: `Suppose:

List 1:
1 -> 4 -> 5

List 2:
1 -> 3 -> 4

List 3:
2 -> 6


Result:

1 -> 1 -> 2 -> 3 -> 4 -> 4 -> 5 -> 6


Insert the first node of each list into a
min-heap.

Repeatedly:

1. Remove smallest node.

2. Add it to the result.

3. Insert its next node into the heap.


Java Solution:

import java.util.*;

class ListNode {

    int val;
    ListNode next;

    ListNode(int val) {
        this.val = val;
    }
}


class Solution {

    public ListNode mergeKLists(
        ListNode[] lists
    ) {

        PriorityQueue<ListNode> heap =
            new PriorityQueue<>(
                (a, b) ->
                    Integer.compare(
                        a.val,
                        b.val
                    )
            );

        for (ListNode node : lists) {

            if (node != null) {
                heap.offer(node);
            }
        }

        ListNode dummy =
            new ListNode(0);

        ListNode current = dummy;

        while (!heap.isEmpty()) {

            ListNode node =
                heap.poll();

            current.next = node;
            current = current.next;

            if (node.next != null) {
                heap.offer(node.next);
            }
        }

        return dummy.next;
    }
}


If N is the total number of nodes:

Time Complexity:

O(N log k)


Heap Space:

O(k)`,

  difficulty: "Hard",
  programmingLanguage: "Java",
  sourceType: "previous-year",
  sourceName: "Deloitte/HashedIn 2024 DSA Interview Practice",
  sourceUrl: null,
},

{
  questionId: 1602,
  companyId: 9,
  year: 2024,
  category: "programming",

  question: `What is the main property of a Binary Search Tree?`,

  options: [
    "For each node, keys in the left subtree are smaller and keys in the right subtree are larger under the usual distinct-key convention",
    "Every node must have exactly two children",
    "Every BST is a complete binary tree",
    "The root must always contain the smallest value"
  ],

  answer:
    "For each node, keys in the left subtree are smaller and keys in the right subtree are larger under the usual distinct-key convention",

  solution: `In a standard Binary Search Tree with
distinct keys:

Left subtree:

contains smaller keys.


Right subtree:

contains larger keys.


Example:

        8
       / \\
      3   10
     / \\    \\
    1   6    14


Searching can eliminate one subtree at each
comparison when the tree is reasonably
balanced.


Average search in a reasonably balanced BST:

O(log n)


Worst case for an unbalanced BST:

O(n)


Correct Answer:

Left values are smaller and right values are
larger under the standard distinct-key
convention.`,

  difficulty: "Easy",
  programmingLanguage: null,
  sourceType: "previous-year",
  sourceName: "Deloitte 2024 DSA Interview Practice",
  sourceUrl: null,
},

{
  questionId: 1603,
  companyId: 9,
  year: 2024,
  category: "programming",

  question:
    "Which sorting algorithm has O(n log n) worst-case time complexity among the following?",

  options: [
    "Bubble Sort",
    "Insertion Sort",
    "Merge Sort",
    "Selection Sort"
  ],

  answer: "Merge Sort",

  solution: `Merge Sort:

Best:
O(n log n)

Average:
O(n log n)

Worst:
O(n log n)


Bubble Sort:

Worst:
O(n²)


Insertion Sort:

Worst:
O(n²)


Selection Sort:

O(n²)


Merge Sort recursively divides the array
and merges sorted halves.

There are approximately:

log n

levels.

Each level processes:

O(n)

elements.


Therefore:

O(n log n)


Correct Answer:

Merge Sort`,

  difficulty: "Easy",
  programmingLanguage: null,
  sourceType: "company-style",
  sourceName: "Deloitte 2024 DSA Assessment Practice",
  sourceUrl: null,
},

{
  questionId: 1604,
  companyId: 9,
  year: 2024,
  category: "pseudocode",

  question: `What is the output of the following pseudocode?

x = 5
y = 10

if x < y
    x = x + y
    y = x - y
    x = x - y
end if

print x, y`,

  options: [
    "5 10",
    "10 5",
    "15 5",
    "10 10"
  ],

  answer: "10 5",

  solution: `Initially:

x = 5
y = 10


Condition:

x < y

5 < 10

TRUE


First:

x = x + y

x = 15


Second:

y = x - y

y = 15 - 10

y = 5


Third:

x = x - y

x = 15 - 5

x = 10


Final values:

x = 10
y = 5


Output:

10 5


Correct Answer:

10 5`,

  difficulty: "Easy",
  programmingLanguage: null,
  sourceType: "company-style",
  sourceName: "Deloitte 2024 Pseudocode Assessment Practice",
  sourceUrl: null,
},

{
  questionId: 1605,
  companyId: 9,
  year: 2024,
  category: "pseudocode",

  question: `What is the output?

function calculate(n)
    if n <= 1
        return 1
    end if

    return n * calculate(n - 1)
end function

print calculate(5)`,

  options: [
    "25",
    "120",
    "15",
    "60"
  ],

  answer: "120",

  solution: `The function computes factorial.

calculate(5)

=

5 * calculate(4)

=

5 * 4 * calculate(3)

=

5 * 4 * 3 * calculate(2)

=

5 * 4 * 3 * 2 * calculate(1)


Base case:

calculate(1) = 1


Therefore:

5 * 4 * 3 * 2 * 1

=

120


Correct Answer:

120`,

  difficulty: "Easy",
  programmingLanguage: null,
  sourceType: "company-style",
  sourceName: "Deloitte 2024 Pseudocode Assessment Practice",
  sourceUrl: null,
},

{
  questionId: 1606,
  companyId: 9,
  year: 2024,
  category: "aptitude",

  question: `A train travels 360 km in 4.5 hours.

What is its average speed?`,

  options: [
    "70 km/h",
    "75 km/h",
    "80 km/h",
    "90 km/h"
  ],

  answer: "80 km/h",

  solution: `Formula:

Speed = Distance / Time


Distance:

360 km


Time:

4.5 hours


Speed:

360 / 4.5

=

80 km/h


Correct Answer:

80 km/h`,

  difficulty: "Easy",
  programmingLanguage: null,
  sourceType: "company-style",
  sourceName: "Deloitte 2024 Quantitative Assessment Practice",
  sourceUrl: null,
},

{
  questionId: 1607,
  companyId: 9,
  year: 2024,
  category: "aptitude",

  question: `The ratio of the ages of A and B is 3:5.

If their total age is 48 years, what is B's age?`,

  options: [
    "18",
    "24",
    "30",
    "32"
  ],

  answer: "30",

  solution: `Ratio:

A : B

=

3 : 5


Total parts:

3 + 5 = 8


Total age:

48


One part:

48 / 8

=

6


B has 5 parts:

5 * 6

=

30


Correct Answer:

30 years`,

  difficulty: "Easy",
  programmingLanguage: null,
  sourceType: "company-style",
  sourceName: "Deloitte 2024 Quantitative Assessment Practice",
  sourceUrl: null,
},

{
  questionId: 1608,
  companyId: 9,
  year: 2024,
  category: "reasoning",

  question: `Find the next number:

2, 6, 12, 20, 30, ?`,

  options: [
    "36",
    "40",
    "42",
    "44"
  ],

  answer: "42",

  solution: `Sequence:

2
6
12
20
30


Pattern:

1 * 2 = 2

2 * 3 = 6

3 * 4 = 12

4 * 5 = 20

5 * 6 = 30


Next:

6 * 7

=

42


Another way:

Differences:

4, 6, 8, 10

Next difference:

12

30 + 12 = 42


Correct Answer:

42`,

  difficulty: "Easy",
  programmingLanguage: null,
  sourceType: "company-style",
  sourceName: "Deloitte 2024 Logical Reasoning Practice",
  sourceUrl: null,
},

{
  questionId: 1609,
  companyId: 9,
  year: 2024,
  category: "reasoning",

  question: `If COMPUTER is coded as DPNQVUFS by replacing each
letter with the next letter in the alphabet, how is DATA coded?`,

  options: [
    "EBUB",
    "EATA",
    "DBUB",
    "EBTA"
  ],

  answer: "EBUB",

  solution: `Rule:

Replace every letter with the next letter
in the alphabet.


DATA:

D -> E

A -> B

T -> U

A -> B


Therefore:

DATA

becomes:

EBUB


Correct Answer:

EBUB`,

  difficulty: "Easy",
  programmingLanguage: null,
  sourceType: "company-style",
  sourceName: "Deloitte 2024 Logical Reasoning Practice",
  sourceUrl: null,
},

{
  questionId: 1610,
  companyId: 9,
  year: 2024,
  category: "comprehension",

  question: `Read the passage:

"Cloud computing allows organizations to access computing
resources over a network without necessarily maintaining
all infrastructure locally. It can improve scalability and
allow resources to be provisioned according to demand."

According to the passage, which is a benefit of cloud
computing?`,

  options: [
    "Resources can be provisioned according to demand",
    "Every organization must own all physical servers",
    "Cloud computing eliminates networks",
    "Resources can never be scaled"
  ],

  answer:
    "Resources can be provisioned according to demand",

  solution: `The passage directly states that cloud
computing:

"can improve scalability"

and allows resources to be:

"provisioned according to demand"


Therefore the supported answer is:

Resources can be provisioned according to
demand.


The other options contradict the passage.`,

  difficulty: "Easy",
  programmingLanguage: null,
  sourceType: "company-style",
  sourceName: "Deloitte 2024 Verbal Assessment Practice",
  sourceUrl: null,
},

{
  questionId: 1611,
  companyId: 9,
  year: 2024,
  category: "cloud",

  question:
    "Which cloud service model provides virtual machines, storage and networking infrastructure while the customer manages the operating system and applications?",

  options: [
    "IaaS",
    "PaaS",
    "SaaS",
    "DNS"
  ],

  answer: "IaaS",

  solution: `IaaS means:

Infrastructure as a Service.


It provides infrastructure resources such as:

virtual machines
storage
networking


The customer typically manages:

operating system
runtime
applications
data


PaaS provides a higher-level application
platform.

SaaS provides complete software applications
to end users.


Correct Answer:

IaaS`,

  difficulty: "Easy",
  programmingLanguage: null,
  sourceType: "company-style",
  sourceName: "Deloitte 2024 Cloud Assessment Practice",
  sourceUrl: null,
},

{
  questionId: 1612,
  companyId: 9,
  year: 2024,
  category: "programming",

  question:
    "Which data structure is normally used to implement Breadth-First Search?",

  options: [
    "Queue",
    "Stack",
    "Binary Search Tree",
    "HashMap only"
  ],

  answer: "Queue",

  solution: `Breadth-First Search explores a graph
level by level.

A queue follows:

FIFO

First In, First Out.


Basic BFS:

1. Insert source into queue.

2. Remove the front vertex.

3. Visit its unvisited neighbors.

4. Insert those neighbors into queue.

5. Repeat.


Therefore the main traversal structure is:

Queue


Correct Answer:

Queue`,

  difficulty: "Easy",
  programmingLanguage: null,
  sourceType: "company-style",
  sourceName: "Deloitte 2024 DSA Assessment Practice",
  sourceUrl: null,
},

{
  questionId: 1613,
  companyId: 9,
  year: 2024,
  category: "programming",

  question: `What is the time complexity of searching for an element
using binary search in a sorted array?`,

  options: [
    "O(1)",
    "O(log n)",
    "O(n)",
    "O(n²)"
  ],

  answer: "O(log n)",

  solution: `Binary search eliminates approximately half
of the remaining search space after every
comparison.

Search sizes:

n

n / 2

n / 4

n / 8

...


After k operations:

n / 2^k

is approximately 1.


Therefore:

2^k is approximately n


So:

k is approximately log2(n)


Time Complexity:

O(log n)


Correct Answer:

O(log n)`,

  difficulty: "Easy",
  programmingLanguage: null,
  sourceType: "company-style",
  sourceName: "Deloitte 2024 DSA Assessment Practice",
  sourceUrl: null,
},

{
  questionId: 1614,
  companyId: 9,
  year: 2024,
  category: "programming",

  question: `Given n stairs, you can climb either 1 or 2 stairs
at a time.

Find the number of distinct ways to reach the nth stair.

Example:

n = 4

Output:
5`,

  options: [],

  answer:
    "Use dynamic programming. The number of ways to reach stair n equals ways(n-1) + ways(n-2).",

  solution: `To reach stair n, the final move must come from:

n - 1

using one step

or:

n - 2

using two steps.


Therefore:

ways(n) =
ways(n - 1) + ways(n - 2)


For:

n = 4


Ways:

1 + 1 + 1 + 1

1 + 1 + 2

1 + 2 + 1

2 + 1 + 1

2 + 2


Total:

5


Java Solution:

class Solution {

    public int climbStairs(int n) {

        if (n <= 2) {
            return n;
        }

        int previous2 = 1;
        int previous1 = 2;

        for (int i = 3; i <= n; i++) {

            int current =
                previous1 + previous2;

            previous2 = previous1;
            previous1 = current;
        }

        return previous1;
    }
}


Time Complexity:

O(n)


Space Complexity:

O(1)`,

  difficulty: "Easy",
  programmingLanguage: "Java",
  sourceType: "previous-year",
  sourceName: "Deloitte 2024 Coding Interview Practice",
  sourceUrl: null,
},
];

async function seedDeloitte2024Questions() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");

    await CompanyQuestion.deleteMany({
      companyId: 9,
      year: 2024,
    });

    console.log("Old Deloitte 2024 questions deleted");

    await CompanyQuestion.insertMany(questions);

    console.log(
      `${questions.length} Deloitte 2024 questions seeded successfully`
    );
  } catch (error) {
    console.error(
      "Error seeding Deloitte 2024 questions:",
      error
    );
  } finally {
    await mongoose.disconnect();
    console.log("MongoDB disconnected");
  }
}

seedDeloitte2024Questions();