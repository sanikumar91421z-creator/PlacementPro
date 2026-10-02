require("dotenv").config();
const mongoose = require("mongoose");
const CompanyQuestion = require("./models/CompanyQuestion");

const questions = [

{
  questionId: 1680,
  companyId: 10,
  year: 2025,
  category: "programming",
  question: `Given two strings s1 and s2, determine whether they are anagrams of each other.

Example:

Input:
s1 = "listen"
s2 = "silent"

Output:
true`,
  options: [],
  answer: "Compare the frequency of every character in both strings.",
  solution: `Two strings are anagrams if they contain exactly the same characters with the same frequencies.

Java Solution:

class Solution {
    public boolean isAnagram(String s1, String s2) {
        if (s1.length() != s2.length()) {
            return false;
        }

        int[] freq = new int[256];

        for (int i = 0; i < s1.length(); i++) {
            freq[s1.charAt(i)]++;
            freq[s2.charAt(i)]--;
        }

        for (int count : freq) {
            if (count != 0) {
                return false;
            }
        }

        return true;
    }
}

Time Complexity: O(n)
Space Complexity: O(1) for the fixed-size frequency array.`,
  difficulty: "Easy",
  programmingLanguage: "Java",
  sourceType: "previous-year",
  sourceName: "IBM India SDE On-Campus 2025 Candidate Report",
  sourceUrl: "https://www.geeksforgeeks.org/interview-experiences/ibm-india-interview-experience-for-software-developer-on-campus/"
},

{
  questionId: 1681,
  companyId: 10,
  year: 2025,
  category: "programming",
  question: `Compress consecutive repeated characters in a string.

Example:

Input:
"abbcddeee"

Output:
"ab2cd2e3"`,
  options: [],
  answer: "Traverse consecutive groups and append the character followed by its count when the count is greater than one.",
  solution: `For:

abbcddeee

Groups are:

a -> 1
b -> 2
c -> 1
d -> 2
e -> 3

Therefore:

ab2cd2e3

Java Solution:

class Solution {
    public String compress(String s) {
        StringBuilder result = new StringBuilder();

        int i = 0;

        while (i < s.length()) {
            char ch = s.charAt(i);
            int j = i;

            while (j < s.length() && s.charAt(j) == ch) {
                j++;
            }

            int count = j - i;

            result.append(ch);

            if (count > 1) {
                result.append(count);
            }

            i = j;
        }

        return result.toString();
    }
}

Time Complexity: O(n)
Space Complexity: O(n).`,
  difficulty: "Easy",
  programmingLanguage: "Java",
  sourceType: "previous-year",
  sourceName: "IBM India SDE On-Campus 2025 Candidate Report",
  sourceUrl: "https://www.geeksforgeeks.org/interview-experiences/ibm-india-interview-experience-for-software-developer-on-campus/"
},

{
  questionId: 1682,
  companyId: 10,
  year: 2025,
  category: "programming",
  question: `You are given an array representing the amount of money in houses arranged in a row. Adjacent houses cannot both be robbed. Find the maximum amount that can be obtained.

Example:

Input:
[1, 2, 3, 1]

Output:
4`,
  options: [],
  answer: "Use dynamic programming and choose between skipping the current house or taking it together with the best answer two positions earlier.",
  solution: `For each house:

currentBest =
max(previousBest,
    value + bestTwoPositionsBack)

Java Solution:

class Solution {
    public int rob(int[] nums) {
        int prev2 = 0;
        int prev1 = 0;

        for (int value : nums) {
            int current = Math.max(
                prev1,
                prev2 + value
            );

            prev2 = prev1;
            prev1 = current;
        }

        return prev1;
    }
}

For:

[1, 2, 3, 1]

Choose houses containing:

1 + 3 = 4

Time Complexity: O(n)
Space Complexity: O(1).`,
  difficulty: "Medium",
  programmingLanguage: "Java",
  sourceType: "previous-year",
  sourceName: "IBM India SDE On-Campus 2025 Candidate Report",
  sourceUrl: "https://www.geeksforgeeks.org/interview-experiences/ibm-india-interview-experience-for-software-developer-on-campus/"
},

{
  questionId: 1683,
  companyId: 10,
  year: 2025,
  category: "programming",
  question: `Which Java data structure is commonly used to implement a priority queue?`,
  options: [
    "PriorityQueue",
    "ArrayList only",
    "HashSet",
    "StringBuilder"
  ],
  answer: "PriorityQueue",
  solution: `Java provides the PriorityQueue class.

By default:

PriorityQueue<Integer>

behaves as a min-heap.

Example:

PriorityQueue<Integer> pq =
    new PriorityQueue<>();

pq.offer(30);
pq.offer(10);
pq.offer(20);

pq.poll();

returns:

10

Correct Answer: PriorityQueue.`,
  difficulty: "Easy",
  programmingLanguage: "Java",
  sourceType: "company-style",
  sourceName: "IBM 2025 Priority Queue Assessment Practice",
  sourceUrl: "https://www.geeksforgeeks.org/interview-experiences/ibm-india-interview-experience-for-software-developer-on-campus/"
},

{
  questionId: 1684,
  companyId: 10,
  year: 2025,
  category: "programming",
  question: `Given an integer array, find the kth largest element.

Example:

Input:
nums = [3, 2, 1, 5, 6, 4]
k = 2

Output:
5`,
  options: [],
  answer: "Maintain a min-heap of size k.",
  solution: `Keep only the k largest elements seen so far.

Java Solution:

import java.util.*;

class Solution {
    public int findKthLargest(int[] nums, int k) {

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

For:

[3,2,1,5,6,4], k = 2

the two largest values are:

6 and 5.

Therefore:

5

Time Complexity: O(n log k)
Space Complexity: O(k).`,
  difficulty: "Medium",
  programmingLanguage: "Java",
  sourceType: "company-style",
  sourceName: "IBM 2025 Max-Heap/Priority Queue Practice",
  sourceUrl: "https://www.geeksforgeeks.org/campus-experiences/ibm-india-on-campus-interview-experience-2025/"
},

{
  questionId: 1685,
  companyId: 10,
  year: 2025,
  category: "programming",
  question: `Given meeting intervals, determine the minimum number of rooms required so that all meetings can take place.

Example:

[[0,30],[5,10],[15,20]]

Output:
2`,
  options: [],
  answer: "Sort meetings by start time and maintain a min-heap containing current ending times.",
  solution: `At time 5:

[0,30] is still running.

Therefore another room is needed.

[5,10] finishes before [15,20] begins,
so that room can be reused.

Maximum simultaneous rooms:

2

Java Solution:

import java.util.*;

class Solution {
    public int minRooms(int[][] meetings) {

        Arrays.sort(
            meetings,
            (a, b) -> Integer.compare(a[0], b[0])
        );

        PriorityQueue<Integer> ends =
            new PriorityQueue<>();

        for (int[] meeting : meetings) {

            if (
                !ends.isEmpty() &&
                ends.peek() <= meeting[0]
            ) {
                ends.poll();
            }

            ends.offer(meeting[1]);
        }

        return ends.size();
    }
}

Time Complexity: O(n log n).`,
  difficulty: "Medium",
  programmingLanguage: "Java",
  sourceType: "company-style",
  sourceName: "IBM 2025 Heap Practice",
  sourceUrl: null
},

{
  questionId: 1686,
  companyId: 10,
  year: 2025,
  category: "programming",
  question: `Given an array of intervals, merge all overlapping intervals.

Example:

Input:
[[1,3],[2,6],[8,10],[15,18]]

Output:
[[1,6],[8,10],[15,18]]`,
  options: [],
  answer: "Sort intervals by starting point and merge an interval when it overlaps the previous merged interval.",
  solution: `First sort by starting time.

[1,3] and [2,6] overlap.

They become:

[1,6]

Java Solution:

import java.util.*;

class Solution {
    public int[][] merge(int[][] intervals) {

        Arrays.sort(
            intervals,
            (a, b) -> Integer.compare(a[0], b[0])
        );

        List<int[]> result = new ArrayList<>();

        for (int[] current : intervals) {

            if (
                result.isEmpty() ||
                result.get(result.size() - 1)[1] < current[0]
            ) {
                result.add(current);
            } else {
                result.get(result.size() - 1)[1] =
                    Math.max(
                        result.get(result.size() - 1)[1],
                        current[1]
                    );
            }
        }

        return result.toArray(new int[result.size()][]);
    }
}

Time Complexity: O(n log n).`,
  difficulty: "Medium",
  programmingLanguage: "Java",
  sourceType: "company-style",
  sourceName: "IBM 2025 Greedy Practice",
  sourceUrl: "https://www.geeksforgeeks.org/campus-experiences/ibm-india-on-campus-interview-experience-2025/"
},

{
  questionId: 1687,
  companyId: 10,
  year: 2025,
  category: "programming",
  question: `Given jobs with deadlines and profits, schedule jobs so that the total profit is maximized. Each job takes one unit of time.`,
  options: [],
  answer: "Sort jobs by profit in descending order and place each job in the latest available slot before its deadline.",
  solution: `Greedy strategy:

1. Sort jobs by decreasing profit.
2. For each job, search backward from its deadline.
3. Put it in the latest free slot.
4. Skip it if no valid slot exists.

Why choose the latest slot?

It leaves earlier slots available for other jobs.

A straightforward implementation takes:

O(n log n + n × maxDeadline)

and can be optimized further using
Disjoint Set Union.`,
  difficulty: "Medium",
  programmingLanguage: "Java",
  sourceType: "company-style",
  sourceName: "IBM 2025 Greedy Assessment Practice",
  sourceUrl: "https://www.geeksforgeeks.org/campus-experiences/ibm-india-on-campus-interview-experience-2025/"
},

{
  questionId: 1688,
  companyId: 10,
  year: 2025,
  category: "sql",
  question: `Write an SQL query to display employee names together with their department names.

Tables:

Employee(id, name, department_id)
Department(id, department_name)`,
  options: [],
  answer: "Use an INNER JOIN between Employee.department_id and Department.id.",
  solution: `SQL:

SELECT
    e.name,
    d.department_name
FROM Employee e
INNER JOIN Department d
    ON e.department_id = d.id;

INNER JOIN returns employees having a
matching department record.`,
  difficulty: "Easy",
  programmingLanguage: null,
  sourceType: "previous-year",
  sourceName: "IBM India On-Campus 2025 Candidate Report - SQL JOIN",
  sourceUrl: "https://www.geeksforgeeks.org/campus-experiences/ibm-india-on-campus-interview-experience-2025/"
},

{
  questionId: 1689,
  companyId: 10,
  year: 2025,
  category: "sql",
  question: `Write an SQL query to count employees in each department.`,
  options: [],
  answer: "SELECT department_id, COUNT(*) FROM Employee GROUP BY department_id;",
  solution: `SQL:

SELECT
    department_id,
    COUNT(*) AS employee_count
FROM Employee
GROUP BY department_id;

GROUP BY creates one group for each
department_id.

COUNT(*) counts employees in each group.`,
  difficulty: "Easy",
  programmingLanguage: null,
  sourceType: "company-style",
  sourceName: "IBM 2025 SQL Assessment Practice",
  sourceUrl: "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-on-campus-3/"
},

{
  questionId: 1690,
  companyId: 10,
  year: 2025,
  category: "sql",
  question: `Which clause filters grouped results after GROUP BY?`,
  options: ["WHERE", "HAVING", "ORDER BY", "DISTINCT"],
  answer: "HAVING",
  solution: `WHERE filters rows before grouping.

HAVING filters groups after GROUP BY.

Example:

SELECT department_id, COUNT(*)
FROM Employee
GROUP BY department_id
HAVING COUNT(*) > 5;

Correct Answer:

HAVING.`,
  difficulty: "Easy",
  programmingLanguage: null,
  sourceType: "company-style",
  sourceName: "IBM 2025 SQL Assessment Practice",
  sourceUrl: "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-on-campus-3/"
},

{
  questionId: 1691,
  companyId: 10,
  year: 2025,
  category: "sql",
  question: `Which SQL query correctly returns departments having more than five employees?`,
  options: [
    "SELECT department_id FROM Employee GROUP BY department_id HAVING COUNT(*) > 5;",
    "SELECT department_id FROM Employee WHERE COUNT(*) > 5;",
    "SELECT COUNT(*) FROM Employee ORDER BY department_id > 5;",
    "SELECT department_id FROM Employee HAVING department_id > 5;"
  ],
  answer: "SELECT department_id FROM Employee GROUP BY department_id HAVING COUNT(*) > 5;",
  solution: `First group employees by department.

Then apply the aggregate condition using
HAVING.

Correct query:

SELECT department_id
FROM Employee
GROUP BY department_id
HAVING COUNT(*) > 5;`,
  difficulty: "Medium",
  programmingLanguage: null,
  sourceType: "company-style",
  sourceName: "IBM 2025 SQL Assessment Practice",
  sourceUrl: "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-on-campus-3/"
},

{
  questionId: 1692,
  companyId: 10,
  year: 2025,
  category: "sql",
  question: `What does a LEFT JOIN return?`,
  options: [
    "All rows from the left table and matching rows from the right table",
    "Only matching rows",
    "Only rows from the right table",
    "Only duplicate rows"
  ],
  answer: "All rows from the left table and matching rows from the right table",
  solution: `LEFT JOIN preserves every row from the
left table.

If no matching row exists in the right
table, columns from the right side are
returned as NULL.

Correct Answer:

All rows from the left table and matching
rows from the right table.`,
  difficulty: "Easy",
  programmingLanguage: null,
  sourceType: "company-style",
  sourceName: "IBM 2025 SQL JOIN Practice",
  sourceUrl: null
},

{
  questionId: 1693,
  companyId: 10,
  year: 2025,
  category: "dbms",
  question: `What is a foreign key?`,
  options: [
    "A column or set of columns that references a candidate key in another or the same table",
    "A column that always contains duplicates",
    "A SQL sorting command",
    "A database password"
  ],
  answer: "A column or set of columns that references a candidate key in another or the same table",
  solution: `A foreign key establishes a relationship
between relational tables.

Example:

Department:
id PRIMARY KEY

Employee:
department_id FOREIGN KEY

Employee.department_id can reference
Department.id.

Correct Answer:

A column or set of columns that references
a candidate key in another or the same table.`,
  difficulty: "Easy",
  programmingLanguage: null,
  sourceType: "company-style",
  sourceName: "IBM 2025 DBMS Practice",
  sourceUrl: null
},

{
  questionId: 1694,
  companyId: 10,
  year: 2025,
  category: "dbms",
  question: `Which ACID property ensures committed data remains stored even after a system failure?`,
  options: ["Atomicity", "Consistency", "Isolation", "Durability"],
  answer: "Durability",
  solution: `Durability means that once a transaction
has successfully committed, its effects
should persist even if the system later
fails.

Correct Answer:

Durability.`,
  difficulty: "Easy",
  programmingLanguage: null,
  sourceType: "company-style",
  sourceName: "IBM 2025 DBMS Practice",
  sourceUrl: null
},

{
  questionId: 1695,
  companyId: 10,
  year: 2025,
  category: "dbms",
  question: `What is a database index primarily used for?`,
  options: [
    "Improving data retrieval performance",
    "Deleting every duplicate automatically",
    "Replacing tables",
    "Encrypting the entire database"
  ],
  answer: "Improving data retrieval performance",
  solution: `An index provides an additional data
structure that can make lookups faster.

However, indexes also require storage and
can add overhead to INSERT, UPDATE and
DELETE operations.

Correct Answer:

Improving data retrieval performance.`,
  difficulty: "Easy",
  programmingLanguage: null,
  sourceType: "company-style",
  sourceName: "IBM 2025 DBMS Practice",
  sourceUrl: null
},

{
  questionId: 1696,
  companyId: 10,
  year: 2025,
  category: "java",
  question: `What is runtime polymorphism in Java?`,
  options: [
    "Selecting an overridden instance method at runtime based on the actual object",
    "Declaring multiple local variables",
    "Creating multiple constructors only",
    "Compiling Java into SQL"
  ],
  answer: "Selecting an overridden instance method at runtime based on the actual object",
  solution: `Runtime polymorphism is commonly achieved
through method overriding and dynamic method
dispatch.

Example:

Animal a = new Dog();
a.sound();

If Dog overrides sound(), the Dog version
runs.

Correct Answer:

Selecting an overridden instance method at
runtime based on the actual object.`,
  difficulty: "Medium",
  programmingLanguage: "Java",
  sourceType: "company-style",
  sourceName: "IBM 2025 OOP Practice",
  sourceUrl: "https://www.geeksforgeeks.org/interview-experiences/ibm-india-interview-experience-for-software-developer-on-campus/"
},

{
  questionId: 1697,
  companyId: 10,
  year: 2025,
  category: "java",
  question: `Which OOP concept allows a child class to acquire accessible properties and behavior from a parent class?`,
  options: ["Inheritance", "Encapsulation", "Compilation", "Iteration"],
  answer: "Inheritance",
  solution: `Inheritance allows one class to derive
from another.

Java example:

class Animal {
    void eat() {}
}

class Dog extends Animal {
}

Dog inherits accessible members of Animal.

Correct Answer:

Inheritance.`,
  difficulty: "Easy",
  programmingLanguage: "Java",
  sourceType: "company-style",
  sourceName: "IBM 2025 OOP Practice",
  sourceUrl: null
},

{
  questionId: 1698,
  companyId: 10,
  year: 2025,
  category: "java",
  question: `What is encapsulation?`,
  options: [
    "Bundling data and behavior and controlling access to internal state",
    "Creating only static variables",
    "Executing SQL queries",
    "Sorting an array"
  ],
  answer: "Bundling data and behavior and controlling access to internal state",
  solution: `Encapsulation combines data and related
methods inside a class.

Access modifiers such as private can prevent
direct external access to internal fields.

Example:

class Account {
    private double balance;

    public double getBalance() {
        return balance;
    }
}

Correct Answer:

Bundling data and behavior and controlling
access to internal state.`,
  difficulty: "Easy",
  programmingLanguage: "Java",
  sourceType: "company-style",
  sourceName: "IBM 2025 OOP Practice",
  sourceUrl: null
},

{
  questionId: 1699,
  companyId: 10,
  year: 2025,
  category: "java",
  question: `Which SOLID principle states that a class should have one primary reason to change?`,
  options: [
    "Single Responsibility Principle",
    "Open/Closed Principle",
    "Liskov Substitution Principle",
    "Dependency Inversion Principle"
  ],
  answer: "Single Responsibility Principle",
  solution: `SRP stands for:

Single Responsibility Principle.

The idea is that a class should focus on
one responsibility or cohesive reason for
change.

Correct Answer:

Single Responsibility Principle.`,
  difficulty: "Medium",
  programmingLanguage: "Java",
  sourceType: "previous-year",
  sourceName: "IBM India SDE On-Campus 2025 Candidate Report - SOLID",
  sourceUrl: "https://www.geeksforgeeks.org/interview-experiences/ibm-india-interview-experience-for-software-developer-on-campus/"
},

{
  questionId: 1700,
  companyId: 10,
  year: 2025,
  category: "java",
  question: `Which SOLID principle says software entities should be open for extension but closed for modification?`,
  options: [
    "Open/Closed Principle",
    "Single Responsibility Principle",
    "Interface Segregation Principle",
    "Liskov Substitution Principle"
  ],
  answer: "Open/Closed Principle",
  solution: `The Open/Closed Principle recommends
designing software so new behavior can
often be added through extension without
repeatedly changing stable existing code.

Correct Answer:

Open/Closed Principle.`,
  difficulty: "Medium",
  programmingLanguage: "Java",
  sourceType: "company-style",
  sourceName: "IBM 2025 SOLID Principles Practice",
  sourceUrl: "https://www.geeksforgeeks.org/interview-experiences/ibm-india-interview-experience-for-software-developer-on-campus/"
},

{
  questionId: 1701,
  companyId: 10,
  year: 2025,
  category: "programming",
  question: `What is the difference between an array and a linked list?`,
  options: [
    "Arrays use indexed contiguous storage, while linked-list nodes are connected through references",
    "Linked lists always support O(1) random indexing",
    "Arrays cannot store multiple elements",
    "There is no difference"
  ],
  answer: "Arrays use indexed contiguous storage, while linked-list nodes are connected through references",
  solution: `Array:

Elements occupy contiguous logical storage.
Supports O(1) indexed access.

Linked List:

Nodes are connected through references.
Random access generally requires traversal.

Insertion/deletion characteristics also
depend on the position and whether a node
reference is already known.

Correct Answer:

Arrays use indexed contiguous storage,
while linked-list nodes are connected
through references.`,
  difficulty: "Easy",
  programmingLanguage: null,
  sourceType: "company-style",
  sourceName: "IBM 2025 DSA Fundamentals Practice",
  sourceUrl: null
},

{
  questionId: 1702,
  companyId: 10,
  year: 2025,
  category: "programming",
  question: `Reverse a singly linked list.

Example:

1 -> 2 -> 3 -> null

Output:

3 -> 2 -> 1 -> null`,
  options: [],
  answer: "Iteratively reverse each node's next reference.",
  solution: `Java Solution:

class ListNode {
    int val;
    ListNode next;

    ListNode(int val) {
        this.val = val;
    }
}

class Solution {
    public ListNode reverse(ListNode head) {

        ListNode previous = null;
        ListNode current = head;

        while (current != null) {

            ListNode next = current.next;

            current.next = previous;

            previous = current;
            current = next;
        }

        return previous;
    }
}

Time Complexity: O(n)
Space Complexity: O(1).`,
  difficulty: "Easy",
  programmingLanguage: "Java",
  sourceType: "company-style",
  sourceName: "IBM 2025 Linked List Practice",
  sourceUrl: null
},

{
  questionId: 1703,
  companyId: 10,
  year: 2025,
  category: "programming",
  question: `What is the time complexity of binary search on a sorted array?`,
  options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
  answer: "O(log n)",
  solution: `Binary search removes approximately half
of the remaining search range after each
comparison.

Therefore:

Time Complexity = O(log n).

Correct Answer:

O(log n).`,
  difficulty: "Easy",
  programmingLanguage: null,
  sourceType: "company-style",
  sourceName: "IBM 2025 DSA Practice",
  sourceUrl: null
},

{
  questionId: 1704,
  companyId: 10,
  year: 2025,
  category: "programming",
  question: `Which data structure follows FIFO?`,
  options: ["Queue", "Stack", "Binary Tree", "Set"],
  answer: "Queue",
  solution: `FIFO means:

First In, First Out.

The first element inserted is the first
element removed.

This is the behavior of a queue.

Correct Answer:

Queue.`,
  difficulty: "Easy",
  programmingLanguage: null,
  sourceType: "company-style",
  sourceName: "IBM 2025 DSA Practice",
  sourceUrl: null
},

{
  questionId: 1705,
  companyId: 10,
  year: 2025,
  category: "programming",
  question: `Which traversal normally uses a queue?`,
  options: [
    "Breadth-First Search",
    "Depth-First Search only",
    "Binary Search",
    "Quick Sort"
  ],
  answer: "Breadth-First Search",
  solution: `BFS visits vertices level by level.

A queue stores discovered vertices waiting
to be processed.

Correct Answer:

Breadth-First Search.`,
  difficulty: "Easy",
  programmingLanguage: null,
  sourceType: "company-style",
  sourceName: "IBM 2025 DSA Practice",
  sourceUrl: null
},

{
  questionId: 1706,
  companyId: 10,
  year: 2025,
  category: "programming",
  question: `What is the average-case lookup complexity of a hash table with a good hash distribution?`,
  options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
  answer: "O(1)",
  solution: `A hash table maps a key to a bucket using
a hash function.

Under normal assumptions and a good hash
distribution, lookup is O(1) on average.

Worst-case performance can be worse.

Correct Answer:

O(1).`,
  difficulty: "Medium",
  programmingLanguage: null,
  sourceType: "company-style",
  sourceName: "IBM 2025 DSA Practice",
  sourceUrl: null
},

{
  questionId: 1707,
  companyId: 10,
  year: 2025,
  category: "pseudocode",
  question: `What is the output?

x = 7

if x > 5
    if x < 10
        print "A"
    else
        print "B"
else
    print "C"`,
  options: ["A", "B", "C", "No output"],
  answer: "A",
  solution: `x = 7.

First condition:

7 > 5

TRUE.

Second condition:

7 < 10

TRUE.

Therefore:

A

is printed.

Correct Answer: A.`,
  difficulty: "Easy",
  programmingLanguage: null,
  sourceType: "company-style",
  sourceName: "IBM 2025 If-Else Assessment Practice",
  sourceUrl: "https://www.geeksforgeeks.org/campus-experiences/ibm-india-on-campus-interview-experience-2025/"
},

{
  questionId: 1708,
  companyId: 10,
  year: 2025,
  category: "pseudocode",
  question: `What is the output?

sum = 0

for i = 1 to 4
    sum = sum + i * i

print sum`,
  options: ["10", "20", "30", "40"],
  answer: "30",
  solution: `Calculate:

1² + 2² + 3² + 4²

=

1 + 4 + 9 + 16

=

30.

Correct Answer:

30.`,
  difficulty: "Easy",
  programmingLanguage: null,
  sourceType: "company-style",
  sourceName: "IBM 2025 Logic Assessment Practice",
  sourceUrl: null
},

{
  questionId: 1709,
  companyId: 10,
  year: 2025,
  category: "programming",
  question: `Print a hollow square of size n.

For n = 4:

****
*  *
*  *
****`,
  options: [],
  answer: "Print a star when the current row or column lies on the boundary; otherwise print a space.",
  solution: `Java Solution:

class Solution {
    public void hollowSquare(int n) {

        for (int i = 0; i < n; i++) {

            for (int j = 0; j < n; j++) {

                if (
                    i == 0 ||
                    i == n - 1 ||
                    j == 0 ||
                    j == n - 1
                ) {
                    System.out.print("*");
                } else {
                    System.out.print(" ");
                }
            }

            System.out.println();
        }
    }
}

For n = 4:

****
*  *
*  *
****

Time Complexity: O(n²).`,
  difficulty: "Easy",
  programmingLanguage: "Java",
  sourceType: "previous-year",
  sourceName: "IBM On-Campus Coding Round Candidate Report",
  sourceUrl: "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-on-campus-3/"
},

{
  questionId: 1710,
  companyId: 10,
  year: 2025,
  category: "programming",
  question: `Print the following pattern for n = 4:

*
**
***
****`,
  options: [],
  answer: "For row i, print i stars.",
  solution: `Java Solution:

class Solution {
    public void pattern(int n) {

        for (int i = 1; i <= n; i++) {

            for (int j = 1; j <= i; j++) {
                System.out.print("*");
            }

            System.out.println();
        }
    }
}

For n = 4:

*
**
***
****

Time Complexity: O(n²).`,
  difficulty: "Easy",
  programmingLanguage: "Java",
  sourceType: "company-style",
  sourceName: "IBM 2025 Pattern Printing Practice",
  sourceUrl: "https://www.geeksforgeeks.org/campus-experiences/ibm-india-on-campus-interview-experience-2025/"
},

{
  questionId: 1711,
  companyId: 10,
  year: 2025,
  category: "web",
  question: `What is the primary purpose of HTML in a web application?`,
  options: [
    "Define the structure and semantic content of a web page",
    "Store relational database records",
    "Compile Java programs",
    "Replace the operating system"
  ],
  answer: "Define the structure and semantic content of a web page",
  solution: `HTML defines the structure and semantic
content of web documents.

CSS generally handles presentation.

JavaScript can provide interactive behavior.

Correct Answer:

Define the structure and semantic content
of a web page.`,
  difficulty: "Easy",
  programmingLanguage: null,
  sourceType: "company-style",
  sourceName: "IBM 2025 Web Development Interview Practice",
  sourceUrl: "https://www.geeksforgeeks.org/campus-experiences/ibm-india-on-campus-interview-experience-2025/"
},

{
  questionId: 1712,
  companyId: 10,
  year: 2025,
  category: "web",
  question: `What is the role of CSS in web development?`,
  options: [
    "Control presentation and layout",
    "Create SQL tables",
    "Compile Java bytecode",
    "Manage CPU scheduling"
  ],
  answer: "Control presentation and layout",
  solution: `CSS stands for:

Cascading Style Sheets.

It controls presentation such as:

layout
spacing
typography
responsive design
visual styling

Correct Answer:

Control presentation and layout.`,
  difficulty: "Easy",
  programmingLanguage: null,
  sourceType: "company-style",
  sourceName: "IBM 2025 Web Development Practice",
  sourceUrl: null
},

{
  questionId: 1713,
  companyId: 10,
  year: 2025,
  category: "web",
  question: `Which protocol is normally used to securely transfer web traffic between a browser and a web server?`,
  options: ["HTTPS", "FTP", "SMTP", "ARP"],
  answer: "HTTPS",
  solution: `HTTPS is HTTP protected using TLS.

TLS provides security properties such as
encryption and server authentication when
properly configured.

Correct Answer:

HTTPS.`,
  difficulty: "Easy",
  programmingLanguage: null,
  sourceType: "company-style",
  sourceName: "IBM 2025 Web Fundamentals Practice",
  sourceUrl: null
},

{
  questionId: 1714,
  companyId: 10,
  year: 2025,
  category: "web",
  question: `Which HTTP status code normally means "Not Found"?`,
  options: ["200", "201", "404", "500"],
  answer: "404",
  solution: `Common HTTP codes:

200 -> OK
201 -> Created
404 -> Not Found
500 -> Internal Server Error

Correct Answer:

404.`,
  difficulty: "Easy",
  programmingLanguage: null,
  sourceType: "company-style",
  sourceName: "IBM 2025 Web Fundamentals Practice",
  sourceUrl: null
},

{
  questionId: 1715,
  companyId: 10,
  year: 2025,
  category: "web",
  question: `When designing an online grocery-store website, which combination is especially important for a good user experience?`,
  options: [
    "Responsive design, clear navigation, search, accessibility and efficient page loading",
    "Removing product search",
    "Using only desktop layouts",
    "Displaying every product on one unstructured page"
  ],
  answer: "Responsive design, clear navigation, search, accessibility and efficient page loading",
  solution: `A practical e-commerce website should
consider factors such as:

Responsive layouts
Clear navigation
Product search/filtering
Accessibility
Performance
Security
Usable checkout flow

Correct Answer:

Responsive design, clear navigation,
search, accessibility and efficient
page loading.`,
  difficulty: "Medium",
  programmingLanguage: null,
  sourceType: "company-style",
  sourceName: "IBM India On-Campus 2025 Website Design Scenario",
  sourceUrl: "https://www.geeksforgeeks.org/campus-experiences/ibm-india-on-campus-interview-experience-2025/"
},

{
  questionId: 1716,
  companyId: 10,
  year: 2025,
  category: "cloud",
  question: `Which cloud service model provides virtual machines, networking and storage while customers manage much of the software stack?`,
  options: ["IaaS", "SaaS", "DNS", "HTML"],
  answer: "IaaS",
  solution: `IaaS means:

Infrastructure as a Service.

The provider supplies infrastructure such
as:

virtual machines
networking
storage

The customer typically manages the OS,
runtime and applications.

Correct Answer:

IaaS.`,
  difficulty: "Easy",
  programmingLanguage: null,
  sourceType: "company-style",
  sourceName: "IBM 2025 Cloud Practice",
  sourceUrl: null
},

{
  questionId: 1717,
  companyId: 10,
  year: 2025,
  category: "cloud",
  question: `What does horizontal scaling mean?`,
  options: [
    "Adding more machines or instances",
    "Increasing only the RAM of one machine",
    "Deleting all servers",
    "Changing a database column name"
  ],
  answer: "Adding more machines or instances",
  solution: `Horizontal scaling means increasing
capacity by adding additional instances
or machines.

Vertical scaling means increasing resources
such as CPU or RAM on an existing machine.

Correct Answer:

Adding more machines or instances.`,
  difficulty: "Easy",
  programmingLanguage: null,
  sourceType: "company-style",
  sourceName: "IBM 2025 Cloud Practice",
  sourceUrl: null
},

{
  questionId: 1718,
  companyId: 10,
  year: 2025,
  category: "reasoning",
  question: `Find the next number:

3, 6, 12, 24, 48, ?`,
  options: ["72", "84", "96", "100"],
  answer: "96",
  solution: `Each number is multiplied by 2:

3 × 2 = 6
6 × 2 = 12
12 × 2 = 24
24 × 2 = 48

Next:

48 × 2 = 96.

Correct Answer:

96.`,
  difficulty: "Easy",
  programmingLanguage: null,
  sourceType: "company-style",
  sourceName: "IBM 2025 Cognitive Practice",
  sourceUrl: null
},

{
  questionId: 1719,
  companyId: 10,
  year: 2025,
  category: "reasoning",
  question: `Find the odd one out:

8, 27, 64, 100, 125`,
  options: ["8", "27", "100", "125"],
  answer: "100",
  solution: `8 = 2³
27 = 3³
64 = 4³
125 = 5³

100 is not a perfect cube.

Therefore:

100

is the odd one out.`,
  difficulty: "Easy",
  programmingLanguage: null,
  sourceType: "company-style",
  sourceName: "IBM 2025 Cognitive Practice",
  sourceUrl: null
},

{
  questionId: 1720,
  companyId: 10,
  year: 2025,
  category: "reasoning",
  question: `If A is taller than B and B is taller than C, which statement must be true?`,
  options: [
    "A is taller than C",
    "C is taller than A",
    "A and C have equal height",
    "Nothing can be concluded"
  ],
  answer: "A is taller than C",
  solution: `Given:

A > B

and:

B > C

By transitivity:

A > C.

Correct Answer:

A is taller than C.`,
  difficulty: "Easy",
  programmingLanguage: null,
  sourceType: "company-style",
  sourceName: "IBM 2025 Cognitive Practice",
  sourceUrl: null
},

{
  questionId: 1721,
  companyId: 10,
  year: 2025,
  category: "aptitude",
  question: `A product costs ₹1200 and is sold for ₹1380. What is the profit percentage?`,
  options: ["10%", "12%", "15%", "18%"],
  answer: "15%",
  solution: `Profit:

1380 - 1200 = 180

Profit percentage:

(180 / 1200) × 100

= 15%.

Correct Answer:

15%.`,
  difficulty: "Easy",
  programmingLanguage: null,
  sourceType: "company-style",
  sourceName: "IBM 2025 Quantitative Practice",
  sourceUrl: null
},

{
  questionId: 1722,
  companyId: 10,
  year: 2025,
  category: "aptitude",
  question: `The average of five numbers is 24. What is their total?`,
  options: ["100", "110", "120", "125"],
  answer: "120",
  solution: `Average = Total / Number of values

Therefore:

Total =
Average × Number

= 24 × 5

= 120.

Correct Answer:

120.`,
  difficulty: "Easy",
  programmingLanguage: null,
  sourceType: "company-style",
  sourceName: "IBM 2025 Quantitative Practice",
  sourceUrl: null
},

{
  questionId: 1723,
  companyId: 10,
  year: 2025,
  category: "aptitude",
  question: `A can complete a task in 10 days and B can complete it in 15 days. How long will they take together?`,
  options: ["5 days", "6 days", "7 days", "8 days"],
  answer: "6 days",
  solution: `A's one-day work:

1/10

B's one-day work:

1/15

Together:

1/10 + 1/15

= 3/30 + 2/30

= 5/30

= 1/6

Therefore they complete the task in:

6 days.

Correct Answer:

6 days.`,
  difficulty: "Easy",
  programmingLanguage: null,
  sourceType: "company-style",
  sourceName: "IBM 2025 Quantitative Practice",
  sourceUrl: null
},

{
  questionId: 1724,
  companyId: 10,
  year: 2025,
  category: "grammar",
  question: `Choose the correctly spelled word.`,
  options: [
    "Accomodation",
    "Accommodation",
    "Acommodation",
    "Accommadation"
  ],
  answer: "Accommodation",
  solution: `The correct spelling is:

Accommodation

Correct Answer:

Accommodation.`,
  difficulty: "Easy",
  programmingLanguage: null,
  sourceType: "company-style",
  sourceName: "IBM 2025 English Assessment Practice",
  sourceUrl: null
},

{
  questionId: 1725,
  companyId: 10,
  year: 2025,
  category: "grammar",
  question: `Choose the grammatically correct sentence.`,
  options: [
    "He have completed the project.",
    "He has completed the project.",
    "He has complete the project.",
    "He completed has the project."
  ],
  answer: "He has completed the project.",
  solution: `Present perfect uses:

has/have + past participle.

With "He":

has

is correct.

Therefore:

He has completed the project.

Correct Answer:

He has completed the project.`,
  difficulty: "Easy",
  programmingLanguage: null,
  sourceType: "company-style",
  sourceName: "IBM 2025 English Assessment Practice",
  sourceUrl: null
},

{
  questionId: 1726,
  companyId: 10,
  year: 2025,
  category: "puzzle",
  question: `You have two ropes. Each rope takes exactly 60 minutes to burn completely, but neither burns at a uniform rate. How can you measure exactly 45 minutes?`,
  options: [],
  answer: "Light the first rope at both ends and the second rope at one end. When the first finishes after 30 minutes, light the other end of the second rope; it will then finish 15 minutes later.",
  solution: `At time 0:

Light Rope A at both ends.

Light Rope B at one end.

Rope A takes exactly 30 minutes to burn
because both ends are burning.

After 30 minutes:

Light the other end of Rope B.

Rope B has 30 minutes of one-ended burn
time remaining, regardless of its uneven
burn rate.

Burning the remainder from both ends makes
it finish in 15 additional minutes.

Total:

30 + 15 = 45 minutes.`,
  difficulty: "Medium",
  programmingLanguage: null,
  sourceType: "previous-year",
  sourceName: "IBM India SDE On-Campus 2025 Candidate Report",
  sourceUrl: "https://www.geeksforgeeks.org/interview-experiences/ibm-india-interview-experience-for-software-developer-on-campus/"
},

{
  questionId: 1727,
  companyId: 10,
  year: 2025,
  category: "puzzle",
  question: `What is the minimum number of straight cuts needed to divide a cake into 8 pieces, assuming pieces may be created in three dimensions?`,
  options: ["2", "3", "4", "7"],
  answer: "3",
  solution: `One approach:

Cut 1:
Divide cake into 2 halves.

Cut 2:
Divide both dimensions to obtain 4 pieces.

Cut 3:
Make a horizontal cut through the cake,
doubling 4 pieces to 8.

Therefore:

3 cuts.

Correct Answer:

3.`,
  difficulty: "Easy",
  programmingLanguage: null,
  sourceType: "previous-year",
  sourceName: "IBM India SDE On-Campus 2025 Candidate Report",
  sourceUrl: "https://www.geeksforgeeks.org/interview-experiences/ibm-india-interview-experience-for-software-developer-on-campus/"
},

{
  questionId: 1728,
  companyId: 10,
  year: 2025,
  category: "puzzle",
  question: `There are 12 coins. Eleven have the same weight and one fake coin is lighter. Using a balance scale, what is the minimum number of weighings required to guarantee finding the lighter coin?`,
  options: ["2", "3", "4", "6"],
  answer: "3",
  solution: `Each balance-scale weighing has three
possible outcomes:

left lighter
right lighter
balanced

Three weighings can distinguish up to:

3³ = 27

possibilities.

A constructive strategy:

Divide 12 coins into three groups of 4.

Weigh 4 against 4.

This identifies which group of 4 contains
the lighter coin.

Then narrow the group using two more
weighings.

Therefore:

3 weighings are sufficient.

Correct Answer:

3.`,
  difficulty: "Medium",
  programmingLanguage: null,
  sourceType: "previous-year",
  sourceName: "IBM India SDE On-Campus 2025 Candidate Report",
  sourceUrl: "https://www.geeksforgeeks.org/interview-experiences/ibm-india-interview-experience-for-software-developer-on-campus/"
},

{
  questionId: 1729,
  companyId: 10,
  year: 2025,
  category: "programming",
  question: `You need to design a URL-shortening service. Which data structure is suitable for storing mappings from short codes to original URLs for fast average lookup?`,
  options: [
    "Hash table",
    "Stack",
    "Binary heap only",
    "Linked list only"
  ],
  answer: "Hash table",
  solution: `A URL shortener needs a mapping such as:

abc123
->

https://example.com/a/very/long/url

A hash table provides fast average lookup
by short code.

In a real production system, persistent
storage, unique-code generation, caching,
expiration, replication and collision
handling would also need to be considered.

Correct Answer:

Hash table.`,
  difficulty: "Medium",
  programmingLanguage: null,
  sourceType: "previous-year",
  sourceName: "IBM India SDE On-Campus 2025 Candidate Report",
  sourceUrl: "https://www.geeksforgeeks.org/interview-experiences/ibm-india-interview-experience-for-software-developer-on-campus/"
}

];

async function seedIBM2025Questions() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    await CompanyQuestion.deleteMany({
      companyId: 10,
      year: 2025
    });

    console.log("Old IBM 2025 questions deleted");

    await CompanyQuestion.insertMany(questions);

    console.log(
      `${questions.length} IBM 2025 questions seeded successfully`
    );

  } catch (error) {

    console.error(
      "Error seeding IBM 2025 questions:",
      error
    );

  } finally {

    await mongoose.disconnect();

    console.log("MongoDB disconnected");
  }
}

seedIBM2025Questions();