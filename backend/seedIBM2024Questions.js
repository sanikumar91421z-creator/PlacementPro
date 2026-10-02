require("dotenv").config();
const mongoose = require("mongoose");
const CompanyQuestion = require("./models/CompanyQuestion");

const questions = [

{
  questionId: 1740,
  companyId: 10,
  year: 2024,
  category: "programming",
  question: `Given an integer, reverse its digits.

Example:

Input:
12345

Output:
54321`,
  options: [],
  answer: "Repeatedly extract the last digit using modulo 10 and append it to the reversed number.",
  solution: `Java Solution:

class Solution {
    public int reverseNumber(int n) {

        int reversed = 0;

        while (n != 0) {

            int digit = n % 10;

            reversed =
                reversed * 10 + digit;

            n /= 10;
        }

        return reversed;
    }
}

Example:

12345

Steps:

5
54
543
5432
54321

Output:

54321

Time Complexity: O(log n)
Space Complexity: O(1).`,
  difficulty: "Easy",
  programmingLanguage: "Java",
  sourceType: "previous-year",
  sourceName: "IBM Software Engineer Full Time 2024 Candidate Report",
  sourceUrl: "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-software-engineer-full-time/"
},

{
  questionId: 1741,
  companyId: 10,
  year: 2024,
  category: "programming",
  question: `Reverse an integer array in-place.

Example:

Input:
[1, 2, 3, 4, 5]

Output:
[5, 4, 3, 2, 1]`,
  options: [],
  answer: "Use two pointers and swap elements from opposite ends.",
  solution: `Java Solution:

class Solution {

    public void reverse(int[] nums) {

        int left = 0;
        int right = nums.length - 1;

        while (left < right) {

            int temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;

            left++;
            right--;
        }
    }
}

Time Complexity:

O(n)

Space Complexity:

O(1).`,
  difficulty: "Easy",
  programmingLanguage: "Java",
  sourceType: "previous-year",
  sourceName: "IBM Software Engineer Full Time 2024 Candidate Report",
  sourceUrl: "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-software-engineer-full-time/"
},

{
  questionId: 1742,
  companyId: 10,
  year: 2024,
  category: "programming",
  question: `Implement Bubble Sort.

Example:

Input:
[5, 1, 4, 2, 8]

Output:
[1, 2, 4, 5, 8]`,
  options: [],
  answer: "Repeatedly compare adjacent elements and swap them when they are in the wrong order.",
  solution: `Java Solution:

class Solution {

    public void bubbleSort(int[] arr) {

        int n = arr.length;

        for (int i = 0; i < n - 1; i++) {

            boolean swapped = false;

            for (
                int j = 0;
                j < n - i - 1;
                j++
            ) {

                if (arr[j] > arr[j + 1]) {

                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;

                    swapped = true;
                }
            }

            if (!swapped) {
                break;
            }
        }
    }
}

Worst-case Time Complexity:

O(n²)

Best case with early termination:

O(n)

Space Complexity:

O(1).`,
  difficulty: "Easy",
  programmingLanguage: "Java",
  sourceType: "previous-year",
  sourceName: "IBM Software Engineer Full Time 2024 Candidate Report",
  sourceUrl: "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-software-engineer-full-time/"
},

{
  questionId: 1743,
  companyId: 10,
  year: 2024,
  category: "programming",
  question: `Given a string containing words separated by one or more spaces, find the length of the last word.

Example:

Input:
"  IBM software engineer  "

Output:
8`,
  options: [],
  answer: "Ignore trailing spaces and count characters backward until a space is reached.",
  solution: `Java Solution:

class Solution {

    public int lengthOfLastWord(String s) {

        int i = s.length() - 1;

        while (
            i >= 0 &&
            s.charAt(i) == ' '
        ) {
            i--;
        }

        int length = 0;

        while (
            i >= 0 &&
            s.charAt(i) != ' '
        ) {
            length++;
            i--;
        }

        return length;
    }
}

Last word:

engineer

Length:

8

Time Complexity: O(n)
Space Complexity: O(1).`,
  difficulty: "Easy",
  programmingLanguage: "Java",
  sourceType: "previous-year",
  sourceName: "IBM Software Engineer On-Campus 2024 Candidate Report",
  sourceUrl: "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-software-engineer-full-time-on-campus-2024/"
},

{
  questionId: 1744,
  companyId: 10,
  year: 2024,
  category: "programming",
  question: `Given a linked list, determine whether it contains a cycle.`,
  options: [],
  answer: "Use Floyd's slow and fast pointer algorithm.",
  solution: `Use two pointers:

slow -> moves one node
fast -> moves two nodes

If the list contains a cycle, they will
eventually meet.

Java Solution:

class ListNode {
    int val;
    ListNode next;
}

class Solution {

    public boolean hasCycle(
        ListNode head
    ) {

        ListNode slow = head;
        ListNode fast = head;

        while (
            fast != null &&
            fast.next != null
        ) {

            slow = slow.next;
            fast = fast.next.next;

            if (slow == fast) {
                return true;
            }
        }

        return false;
    }
}

Time Complexity:

O(n)

Space Complexity:

O(1).`,
  difficulty: "Medium",
  programmingLanguage: "Java",
  sourceType: "previous-year",
  sourceName: "IBM Software Engineer On-Campus 2024 Candidate Report",
  sourceUrl: "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-software-engineer-full-time-on-campus-2024/"
},

{
  questionId: 1745,
  companyId: 10,
  year: 2024,
  category: "programming",
  question: `Create a basic node for a singly linked list in Java.`,
  options: [],
  answer: "Create a class containing a value and a reference to the next node.",
  solution: `Java:

class ListNode {

    int data;
    ListNode next;

    ListNode(int data) {
        this.data = data;
        this.next = null;
    }
}

Each node stores:

1. Data
2. Reference to the next node

Example:

ListNode first =
    new ListNode(10);

ListNode second =
    new ListNode(20);

first.next = second;`,
  difficulty: "Easy",
  programmingLanguage: "Java",
  sourceType: "previous-year",
  sourceName: "IBM Software Engineer On-Campus 2024 Candidate Report",
  sourceUrl: "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-software-engineer-full-time-on-campus-2024/"
},

{
  questionId: 1746,
  companyId: 10,
  year: 2024,
  category: "programming",
  question: `Given a sentence, determine whether it is a pangram.

A pangram contains every English alphabet letter at least once.

Example:

Input:
"The quick brown fox jumps over the lazy dog"

Output:
true`,
  options: [],
  answer: "Track which of the 26 English letters appear and verify that all 26 are present.",
  solution: `Java Solution:

class Solution {

    public boolean isPangram(String s) {

        boolean[] seen =
            new boolean[26];

        int count = 0;

        for (
            char ch :
            s.toLowerCase().toCharArray()
        ) {

            if (
                ch >= 'a' &&
                ch <= 'z'
            ) {

                int index = ch - 'a';

                if (!seen[index]) {
                    seen[index] = true;
                    count++;
                }
            }
        }

        return count == 26;
    }
}

Time Complexity:

O(n)

Space Complexity:

O(1).`,
  difficulty: "Easy",
  programmingLanguage: "Java",
  sourceType: "previous-year",
  sourceName: "IBM On-Campus 2024 Candidate Report",
  sourceUrl: "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-on-campus-5/"
},

{
  questionId: 1747,
  companyId: 10,
  year: 2024,
  category: "programming",
  question: `Given a string, find the longest palindromic substring.

Example:

Input:
"babad"

Output:
"bab"

"aba" is also valid.`,
  options: [],
  answer: "Expand around every possible odd and even palindrome center.",
  solution: `Java Solution:

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

            int odd =
                expand(s, i, i);

            int even =
                expand(s, i, i + 1);

            int len =
                Math.max(odd, even);

            if (
                len >
                end - start + 1
            ) {

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

O(1).`,
  difficulty: "Medium",
  programmingLanguage: "Java",
  sourceType: "previous-year",
  sourceName: "IBM On-Campus 2024 Candidate Report",
  sourceUrl: "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-on-campus-5/"
},

{
  questionId: 1748,
  companyId: 10,
  year: 2024,
  category: "programming",
  question: `Given a string s and a list of words, determine whether s can be formed by concatenating words from the list.

Example:

s = "leetcode"
words = ["leet", "code"]

Output:
true`,
  options: [],
  answer: "Use dynamic programming where dp[i] indicates whether the prefix ending before index i can be segmented.",
  solution: `Java Solution:

import java.util.*;

class Solution {

    public boolean wordBreak(
        String s,
        List<String> words
    ) {

        Set<String> dictionary =
            new HashSet<>(words);

        boolean[] dp =
            new boolean[s.length() + 1];

        dp[0] = true;

        for (
            int i = 1;
            i <= s.length();
            i++
        ) {

            for (
                int j = 0;
                j < i;
                j++
            ) {

                if (
                    dp[j] &&
                    dictionary.contains(
                        s.substring(j, i)
                    )
                ) {

                    dp[i] = true;
                    break;
                }
            }
        }

        return dp[s.length()];
    }
}

Time Complexity:

O(n²) substring checks conceptually,
with actual substring cost depending on
the Java version/implementation.

Space Complexity:

O(n) excluding the dictionary.`,
  difficulty: "Medium",
  programmingLanguage: "Java",
  sourceType: "previous-year",
  sourceName: "IBM On-Campus 2024 Candidate Report",
  sourceUrl: "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-on-campus-5/"
},

{
  questionId: 1749,
  companyId: 10,
  year: 2024,
  category: "programming",
  question: `Given the head of a linked list and two values low and high, delete every node whose value lies within the inclusive range [low, high].`,
  options: [],
  answer: "Use a dummy node and bypass each node whose value lies inside the specified range.",
  solution: `Java Solution:

class ListNode {

    int val;
    ListNode next;

    ListNode(int val) {
        this.val = val;
    }
}

class Solution {

    public ListNode removeRange(
        ListNode head,
        int low,
        int high
    ) {

        ListNode dummy =
            new ListNode(0);

        dummy.next = head;

        ListNode current = dummy;

        while (
            current.next != null
        ) {

            int value =
                current.next.val;

            if (
                value >= low &&
                value <= high
            ) {

                current.next =
                    current.next.next;

            } else {

                current =
                    current.next;
            }
        }

        return dummy.next;
    }
}

Time Complexity:

O(n)

Space Complexity:

O(1).`,
  difficulty: "Medium",
  programmingLanguage: "Java",
  sourceType: "previous-year",
  sourceName: "IBM CIO Campus Recruitment 2024 Candidate Report",
  sourceUrl: "https://www.geeksforgeeks.org/interview-experiences/ibm-ciocampus-recruitment-experience/"
},

{
  questionId: 1750,
  companyId: 10,
  year: 2024,
  category: "sql",
  question: `Write an SQL query to count employees in each department.`,
  options: [],
  answer: "Use COUNT(*) together with GROUP BY.",
  solution: `SQL:

SELECT
    department_id,
    COUNT(*) AS employee_count
FROM Employee
GROUP BY department_id;

GROUP BY creates one group for each
department.

COUNT(*) returns the number of rows in
each group.`,
  difficulty: "Easy",
  programmingLanguage: null,
  sourceType: "previous-year",
  sourceName: "IBM CIO Campus Recruitment 2024 Candidate Report",
  sourceUrl: "https://www.geeksforgeeks.org/interview-experiences/ibm-ciocampus-recruitment-experience/"
},

{
  questionId: 1751,
  companyId: 10,
  year: 2024,
  category: "sql",
  question: `Write an SQL query to display each department and its average employee salary.`,
  options: [],
  answer: "SELECT department_id, AVG(salary) FROM Employee GROUP BY department_id;",
  solution: `SQL:

SELECT
    department_id,
    AVG(salary) AS average_salary
FROM Employee
GROUP BY department_id;

AVG calculates the mean salary for each
department group.`,
  difficulty: "Easy",
  programmingLanguage: null,
  sourceType: "company-style",
  sourceName: "IBM 2024 SQL GROUP BY Practice",
  sourceUrl: "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-software-engineer-full-time/"
},

{
  questionId: 1752,
  companyId: 10,
  year: 2024,
  category: "sql",
  question: `Which SQL aggregate function returns the largest value in a column?`,
  options: [
    "MAX()",
    "AVG()",
    "COUNT()",
    "SUM()"
  ],
  answer: "MAX()",
  solution: `MAX() returns the maximum non-NULL value
from an expression.

Example:

SELECT MAX(salary)
FROM Employee;

Correct Answer:

MAX().`,
  difficulty: "Easy",
  programmingLanguage: null,
  sourceType: "company-style",
  sourceName: "IBM 2024 SQL Aggregate Practice",
  sourceUrl: "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-software-engineer-full-time/"
},

{
  questionId: 1753,
  companyId: 10,
  year: 2024,
  category: "sql",
  question: `Which JOIN returns only rows that satisfy the join condition in both tables?`,
  options: [
    "INNER JOIN",
    "LEFT JOIN",
    "FULL OUTER JOIN",
    "CROSS JOIN"
  ],
  answer: "INNER JOIN",
  solution: `INNER JOIN returns matching combinations
of rows according to the join condition.

Example:

SELECT e.name, d.name
FROM Employee e
INNER JOIN Department d
ON e.department_id = d.id;

Correct Answer:

INNER JOIN.`,
  difficulty: "Easy",
  programmingLanguage: null,
  sourceType: "company-style",
  sourceName: "IBM 2024 SQL JOIN Practice",
  sourceUrl: "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-software-engineer-full-time/"
},

{
  questionId: 1754,
  companyId: 10,
  year: 2024,
  category: "dbms",
  question: `Which ACID property ensures that concurrent transactions do not improperly interfere with one another?`,
  options: [
    "Atomicity",
    "Consistency",
    "Isolation",
    "Durability"
  ],
  answer: "Isolation",
  solution: `Isolation controls interaction between
concurrent transactions.

The intended result is that concurrent
execution should behave according to the
database's configured isolation guarantees.

Correct Answer:

Isolation.`,
  difficulty: "Easy",
  programmingLanguage: null,
  sourceType: "company-style",
  sourceName: "IBM 2024 DBMS Practice",
  sourceUrl: null
},

{
  questionId: 1755,
  companyId: 10,
  year: 2024,
  category: "dbms",
  question: `What is normalization in relational database design primarily intended to reduce?`,
  options: [
    "Unnecessary data redundancy and undesirable anomalies",
    "The number of SQL keywords",
    "CPU clock speed",
    "Network addresses"
  ],
  answer: "Unnecessary data redundancy and undesirable anomalies",
  solution: `Normalization organizes data into
relations designed to reduce unnecessary
duplication.

It can reduce:

Update anomalies
Insertion anomalies
Deletion anomalies

Correct Answer:

Unnecessary data redundancy and
undesirable anomalies.`,
  difficulty: "Easy",
  programmingLanguage: null,
  sourceType: "company-style",
  sourceName: "IBM 2024 DBMS Practice",
  sourceUrl: null
},

{
  questionId: 1756,
  companyId: 10,
  year: 2024,
  category: "java",
  question: `Which OOP concept allows one class to derive accessible behavior and data from another class?`,
  options: [
    "Inheritance",
    "Compilation",
    "Iteration",
    "Tokenization"
  ],
  answer: "Inheritance",
  solution: `Inheritance creates an IS-A relationship.

Java example:

class Animal {
    void eat() {}
}

class Dog extends Animal {
}

Dog inherits accessible members from
Animal.

Correct Answer:

Inheritance.`,
  difficulty: "Easy",
  programmingLanguage: "Java",
  sourceType: "previous-year",
  sourceName: "IBM Software Engineer Full Time 2024 Candidate Report",
  sourceUrl: "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-software-engineer-full-time/"
},

{
  questionId: 1757,
  companyId: 10,
  year: 2024,
  category: "java",
  question: `What is abstraction in object-oriented programming?`,
  options: [
    "Exposing essential behavior while hiding unnecessary implementation details",
    "Making every variable public",
    "Duplicating every class",
    "Converting SQL to HTML"
  ],
  answer: "Exposing essential behavior while hiding unnecessary implementation details",
  solution: `Abstraction focuses on what an object
does rather than exposing every detail of
how it does it.

Java supports abstraction through
constructs including:

abstract classes
interfaces

Correct Answer:

Exposing essential behavior while hiding
unnecessary implementation details.`,
  difficulty: "Easy",
  programmingLanguage: "Java",
  sourceType: "previous-year",
  sourceName: "IBM Software Engineer Full Time 2024 Candidate Report",
  sourceUrl: "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-software-engineer-full-time/"
},

{
  questionId: 1758,
  companyId: 10,
  year: 2024,
  category: "java",
  question: `What is method overriding?`,
  options: [
    "A subclass provides its own implementation of an inherited instance method",
    "Two unrelated variables have the same name",
    "A class contains no constructor",
    "A method contains a loop"
  ],
  answer: "A subclass provides its own implementation of an inherited instance method",
  solution: `Example:

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

Dog provides its own implementation of
sound().

Correct Answer:

A subclass provides its own implementation
of an inherited instance method.`,
  difficulty: "Easy",
  programmingLanguage: "Java",
  sourceType: "company-style",
  sourceName: "IBM 2024 OOP Practice",
  sourceUrl: "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-software-engineer-full-time/"
},

{
  questionId: 1759,
  companyId: 10,
  year: 2024,
  category: "programming",
  question: `What is a deadlock in an operating system?`,
  options: [
    "A situation where processes wait indefinitely for resources held by one another",
    "A sorting algorithm",
    "A database index",
    "A successful process termination"
  ],
  answer: "A situation where processes wait indefinitely for resources held by one another",
  solution: `Deadlock occurs when a set of processes
cannot proceed because each is waiting for
a resource or event that depends on another
process in the set.

The classic necessary conditions are:

Mutual exclusion
Hold and wait
No preemption
Circular wait

Correct Answer:

A situation where processes wait
indefinitely for resources held by one
another.`,
  difficulty: "Medium",
  programmingLanguage: null,
  sourceType: "previous-year",
  sourceName: "IBM Software Engineer Full Time 2024 Candidate Report",
  sourceUrl: "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-software-engineer-full-time/"
},

{
  questionId: 1760,
  companyId: 10,
  year: 2024,
  category: "programming",
  question: `What is a semaphore in operating systems?`,
  options: [
    "A synchronization primitive used to coordinate access to shared resources",
    "A database table",
    "A sorting algorithm",
    "An HTML element"
  ],
  answer: "A synchronization primitive used to coordinate access to shared resources",
  solution: `A semaphore maintains a value manipulated
through atomic synchronization operations.

It can be used to coordinate processes or
threads and control access to shared
resources.

Common forms:

Binary semaphore
Counting semaphore

Correct Answer:

A synchronization primitive used to
coordinate access to shared resources.`,
  difficulty: "Medium",
  programmingLanguage: null,
  sourceType: "previous-year",
  sourceName: "IBM Software Engineer On-Campus 2024 Candidate Report",
  sourceUrl: "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-software-engineer-full-time-on-campus-2024/"
},

{
  questionId: 1761,
  companyId: 10,
  year: 2024,
  category: "programming",
  question: `Which statement best describes the difference between a process and a thread?`,
  options: [
    "A process has its own address space, while threads of the same process generally share that process's address space",
    "Threads always run on different computers",
    "Processes cannot execute instructions",
    "Processes and threads are identical"
  ],
  answer: "A process has its own address space, while threads of the same process generally share that process's address space",
  solution: `A process represents an executing program
with its own virtual address space and
resources.

Threads belong to a process.

Threads in the same process generally share:

Code
Heap
Process resources

but have their own execution state such as
stacks and registers.

Correct Answer:

A process has its own address space, while
threads of the same process generally
share that process's address space.`,
  difficulty: "Medium",
  programmingLanguage: null,
  sourceType: "previous-year",
  sourceName: "IBM Software Engineer On-Campus 2024 Candidate Report",
  sourceUrl: "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-software-engineer-full-time-on-campus-2024/"
},

{
  questionId: 1762,
  companyId: 10,
  year: 2024,
  category: "programming",
  question: `What is paging in operating systems?`,
  options: [
    "A memory-management technique that divides virtual memory into fixed-size pages and physical memory into frames",
    "A CPU sorting technique",
    "A database transaction",
    "A network encryption algorithm"
  ],
  answer: "A memory-management technique that divides virtual memory into fixed-size pages and physical memory into frames",
  solution: `Paging divides a virtual address space
into fixed-size pages.

Physical memory is divided into frames of
the corresponding size.

Page tables map virtual pages to physical
frames.

Correct Answer:

A memory-management technique that divides
virtual memory into fixed-size pages and
physical memory into frames.`,
  difficulty: "Medium",
  programmingLanguage: null,
  sourceType: "previous-year",
  sourceName: "IBM Software Engineer Full Time 2024 Candidate Report",
  sourceUrl: "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-software-engineer-full-time/"
},

{
  questionId: 1763,
  companyId: 10,
  year: 2024,
  category: "programming",
  question: `What is a major difference between paging and segmentation?`,
  options: [
    "Paging uses fixed-size pages, while segmentation represents variable-size logical segments",
    "Both always use fixed-size units",
    "Segmentation is a sorting algorithm",
    "Paging works only in databases"
  ],
  answer: "Paging uses fixed-size pages, while segmentation represents variable-size logical segments",
  solution: `Paging:

Uses fixed-size pages and frames.

Segmentation:

Represents logical program regions such as
code, stack or data using variable-size
segments.

Correct Answer:

Paging uses fixed-size pages, while
segmentation represents variable-size
logical segments.`,
  difficulty: "Medium",
  programmingLanguage: null,
  sourceType: "previous-year",
  sourceName: "IBM Software Engineer Full Time 2024 Candidate Report",
  sourceUrl: "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-software-engineer-full-time/"
},

{
  questionId: 1764,
  companyId: 10,
  year: 2024,
  category: "programming",
  question: `Which of the following is an Inter-Process Communication mechanism?`,
  options: [
    "Shared memory",
    "Bubble Sort",
    "Binary Search",
    "CSS"
  ],
  answer: "Shared memory",
  solution: `Common IPC mechanisms include:

Pipes
Shared memory
Message queues
Sockets
Signals

Therefore:

Shared memory

is an IPC mechanism.

Correct Answer:

Shared memory.`,
  difficulty: "Easy",
  programmingLanguage: null,
  sourceType: "previous-year",
  sourceName: "IBM Software Engineer On-Campus 2024 Candidate Report",
  sourceUrl: "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-software-engineer-full-time-on-campus-2024/"
},

{
  questionId: 1765,
  companyId: 10,
  year: 2024,
  category: "programming",
  question: `What is an interrupt?`,
  options: [
    "A signal or event that causes the processor to temporarily handle an interrupt service routine",
    "A SQL constraint",
    "A Java class",
    "A sorting method"
  ],
  answer: "A signal or event that causes the processor to temporarily handle an interrupt service routine",
  solution: `An interrupt notifies the processor that an
event requires attention.

The processor temporarily transfers
execution to an interrupt handler or
interrupt service routine.

After handling the event, normal execution
can resume.

Correct Answer:

A signal or event that causes the processor
to temporarily handle an interrupt service
routine.`,
  difficulty: "Medium",
  programmingLanguage: null,
  sourceType: "previous-year",
  sourceName: "IBM Software Engineer On-Campus 2024 Candidate Report",
  sourceUrl: "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-software-engineer-full-time-on-campus-2024/"
},

{
  questionId: 1766,
  companyId: 10,
  year: 2024,
  category: "programming",
  question: `Which CPU scheduling algorithm gives each process a fixed time quantum in cyclic order?`,
  options: [
    "Round Robin",
    "FCFS only",
    "Binary Search",
    "Dijkstra"
  ],
  answer: "Round Robin",
  solution: `Round Robin maintains runnable processes
in a cyclic queue.

Each process receives a limited time slice
called a quantum.

If it does not finish, it is normally
placed back into the ready queue.

Correct Answer:

Round Robin.`,
  difficulty: "Easy",
  programmingLanguage: null,
  sourceType: "company-style",
  sourceName: "IBM 2024 Operating Systems Practice",
  sourceUrl: "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-software-engineer-full-time-on-campus-2024/"
},

{
  questionId: 1767,
  companyId: 10,
  year: 2024,
  category: "programming",
  question: `Which Linux command prints the current working directory?`,
  options: [
    "pwd",
    "ls",
    "mkdir",
    "rm"
  ],
  answer: "pwd",
  solution: `pwd means:

print working directory.

Example:

pwd

may output:

/home/user/project

Correct Answer:

pwd.`,
  difficulty: "Easy",
  programmingLanguage: null,
  sourceType: "company-style",
  sourceName: "IBM 2024 Linux Assessment Practice",
  sourceUrl: "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-software-engineer-full-time-on-campus-2024/"
},

{
  questionId: 1768,
  companyId: 10,
  year: 2024,
  category: "programming",
  question: `Which Linux command is commonly used to list files and directories?`,
  options: [
    "ls",
    "pwd",
    "cd",
    "echo only"
  ],
  answer: "ls",
  solution: `The ls command lists directory contents.

Example:

ls

or:

ls -la

Correct Answer:

ls.`,
  difficulty: "Easy",
  programmingLanguage: null,
  sourceType: "company-style",
  sourceName: "IBM 2024 Linux Assessment Practice",
  sourceUrl: "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-software-engineer-full-time-on-campus-2024/"
},

{
  questionId: 1769,
  companyId: 10,
  year: 2024,
  category: "programming",
  question: `Which Linux command is commonly used to search for a text pattern inside files?`,
  options: [
    "grep",
    "mkdir",
    "pwd",
    "touch"
  ],
  answer: "grep",
  solution: `grep searches text for patterns.

Example:

grep "error" app.log

This prints lines containing:

error

Correct Answer:

grep.`,
  difficulty: "Easy",
  programmingLanguage: null,
  sourceType: "company-style",
  sourceName: "IBM 2024 Linux Assessment Practice",
  sourceUrl: "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-software-engineer-full-time-on-campus-2024/"
},

{
  questionId: 1770,
  companyId: 10,
  year: 2024,
  category: "programming",
  question: `What is virtualization?`,
  options: [
    "Creating virtualized computing resources such as virtual machines on physical hardware",
    "A sorting algorithm",
    "A SQL aggregate function",
    "A Java loop"
  ],
  answer: "Creating virtualized computing resources such as virtual machines on physical hardware",
  solution: `Virtualization abstracts physical computing
resources.

A hypervisor can allow multiple virtual
machines to run on the same physical host.

Each VM can have its own guest operating
system.

Correct Answer:

Creating virtualized computing resources
such as virtual machines on physical
hardware.`,
  difficulty: "Easy",
  programmingLanguage: null,
  sourceType: "previous-year",
  sourceName: "IBM On-Campus 2024 Candidate Report",
  sourceUrl: "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-on-campus-5/"
},

{
  questionId: 1771,
  companyId: 10,
  year: 2024,
  category: "cloud",
  question: `What is a key difference between containers and traditional virtual machines?`,
  options: [
    "Containers generally share the host OS kernel, while virtual machines normally include separate guest operating systems",
    "Containers require a separate physical computer for every application",
    "Virtual machines cannot run applications",
    "There is no architectural difference"
  ],
  answer: "Containers generally share the host OS kernel, while virtual machines normally include separate guest operating systems",
  solution: `Virtual machines virtualize hardware and
typically run separate guest operating
systems.

Containers isolate applications while
sharing the host operating-system kernel.

This generally makes containers more
lightweight than full VMs.

Correct Answer:

Containers generally share the host OS
kernel, while virtual machines normally
include separate guest operating systems.`,
  difficulty: "Medium",
  programmingLanguage: null,
  sourceType: "previous-year",
  sourceName: "IBM CIO Campus Recruitment 2024 Candidate Report",
  sourceUrl: "https://www.geeksforgeeks.org/interview-experiences/ibm-ciocampus-recruitment-experience/"
},

{
  questionId: 1772,
  companyId: 10,
  year: 2024,
  category: "cloud",
  question: `What is Docker primarily used for?`,
  options: [
    "Packaging and running applications in containers",
    "Replacing every database with text files",
    "CPU scheduling",
    "Creating relational joins"
  ],
  answer: "Packaging and running applications in containers",
  solution: `Docker provides tools for building,
distributing and running containerized
applications.

A container image packages an application
with its required runtime dependencies.

Correct Answer:

Packaging and running applications in
containers.`,
  difficulty: "Easy",
  programmingLanguage: null,
  sourceType: "company-style",
  sourceName: "IBM 2024 Docker Practice",
  sourceUrl: "https://www.geeksforgeeks.org/interview-experiences/ibm-ciocampus-recruitment-experience/"
},

{
  questionId: 1773,
  companyId: 10,
  year: 2024,
  category: "programming",
  question: `Given an array, find the maximum sum of any contiguous subarray.

Example:

Input:
[-2,1,-3,4,-1,2,1,-5,4]

Output:
6`,
  options: [],
  answer: "Use Kadane's algorithm.",
  solution: `Maximum subarray:

[4, -1, 2, 1]

Sum:

6

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

O(1).`,
  difficulty: "Medium",
  programmingLanguage: "Java",
  sourceType: "company-style",
  sourceName: "IBM 2024 Coding Preparation Pattern",
  sourceUrl: "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-off-campus-3/"
},

{
  questionId: 1774,
  companyId: 10,
  year: 2024,
  category: "programming",
  question: `Given two strings, find the length of their Longest Common Subsequence.

Example:

text1 = "abcde"
text2 = "ace"

Output:
3`,
  options: [],
  answer: "Use dynamic programming over prefixes of both strings.",
  solution: `The LCS is:

ace

Length:

3

Java Solution:

class Solution {

    public int longestCommonSubsequence(
        String a,
        String b
    ) {

        int m = a.length();
        int n = b.length();

        int[][] dp =
            new int[m + 1][n + 1];

        for (int i = 1; i <= m; i++) {

            for (int j = 1; j <= n; j++) {

                if (
                    a.charAt(i - 1) ==
                    b.charAt(j - 1)
                ) {

                    dp[i][j] =
                        dp[i - 1][j - 1] + 1;

                } else {

                    dp[i][j] =
                        Math.max(
                            dp[i - 1][j],
                            dp[i][j - 1]
                        );
                }
            }
        }

        return dp[m][n];
    }
}

Time Complexity:

O(m × n)

Space Complexity:

O(m × n).`,
  difficulty: "Medium",
  programmingLanguage: "Java",
  sourceType: "company-style",
  sourceName: "IBM 2024 Coding Preparation Pattern",
  sourceUrl: "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-off-campus-3/"
},

{
  questionId: 1775,
  companyId: 10,
  year: 2024,
  category: "programming",
  question: `Which algorithm finds shortest paths from a single source when all edge weights are non-negative?`,
  options: [
    "Dijkstra's Algorithm",
    "Bubble Sort",
    "Binary Search",
    "DFS in every weighted graph"
  ],
  answer: "Dijkstra's Algorithm",
  solution: `Dijkstra's algorithm computes shortest
paths from one source when edge weights
are non-negative.

An efficient implementation commonly uses
a priority queue.

Correct Answer:

Dijkstra's Algorithm.`,
  difficulty: "Medium",
  programmingLanguage: null,
  sourceType: "company-style",
  sourceName: "IBM 2024 Coding Preparation Pattern",
  sourceUrl: "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-off-campus-3/"
},

{
  questionId: 1776,
  companyId: 10,
  year: 2024,
  category: "grammar",
  question: `Choose the grammatically correct sentence.`,
  options: [
    "She does not know the answer.",
    "She do not know the answer.",
    "She does not knows the answer.",
    "She not knows the answer."
  ],
  answer: "She does not know the answer.",
  solution: `With third-person singular:

She does

After the auxiliary "does", the main verb
uses its base form:

know

Therefore:

She does not know the answer.

Correct Answer:

She does not know the answer.`,
  difficulty: "Easy",
  programmingLanguage: null,
  sourceType: "company-style",
  sourceName: "IBM 2024 English Language Assessment Practice",
  sourceUrl: "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-off-campus-3/"
},

{
  questionId: 1777,
  companyId: 10,
  year: 2024,
  category: "grammar",
  question: `Choose the word closest in meaning to "rapid".`,
  options: [
    "Fast",
    "Slow",
    "Weak",
    "Rare"
  ],
  answer: "Fast",
  solution: `Rapid means:

happening quickly or moving fast.

Therefore the closest option is:

Fast.`,
  difficulty: "Easy",
  programmingLanguage: null,
  sourceType: "company-style",
  sourceName: "IBM 2024 English Language Assessment Practice",
  sourceUrl: "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-off-campus-3/"
},

{
  questionId: 1778,
  companyId: 10,
  year: 2024,
  category: "grammar",
  question: `Choose the opposite of "expand".`,
  options: [
    "Contract",
    "Increase",
    "Extend",
    "Grow"
  ],
  answer: "Contract",
  solution: `Expand means to become larger.

Its opposite is:

Contract

which means to become smaller or reduce
in size.

Correct Answer:

Contract.`,
  difficulty: "Easy",
  programmingLanguage: null,
  sourceType: "company-style",
  sourceName: "IBM 2024 English Language Assessment Practice",
  sourceUrl: "https://www.geeksforgeeks.org/interview-experiences/ibm-interview-experience-off-campus-3/"
},

{
  questionId: 1779,
  companyId: 10,
  year: 2024,
  category: "reasoning",
  question: `Find the missing number:

2, 6, 12, 20, 30, ?`,
  options: [
    "36",
    "40",
    "42",
    "48"
  ],
  answer: "42",
  solution: `Pattern:

1 × 2 = 2
2 × 3 = 6
3 × 4 = 12
4 × 5 = 20
5 × 6 = 30

Next:

6 × 7 = 42

Correct Answer:

42.`,
  difficulty: "Easy",
  programmingLanguage: null,
  sourceType: "company-style",
  sourceName: "IBM 2024 Cognitive Assessment Practice",
  sourceUrl: null
},

{
  questionId: 1780,
  companyId: 10,
  year: 2024,
  category: "reasoning",
  question: `All developers are problem solvers. Some problem solvers are designers. Which statement must be true?`,
  options: [
    "All developers are problem solvers",
    "All designers are developers",
    "No developer is a designer",
    "All problem solvers are developers"
  ],
  answer: "All developers are problem solvers",
  solution: `The first statement explicitly says:

All developers are problem solvers.

The second statement does not establish
that every designer is a developer.

Therefore the only guaranteed statement is:

All developers are problem solvers.`,
  difficulty: "Easy",
  programmingLanguage: null,
  sourceType: "company-style",
  sourceName: "IBM 2024 Reasoning Practice",
  sourceUrl: null
},

{
  questionId: 1781,
  companyId: 10,
  year: 2024,
  category: "aptitude",
  question: `A train travels 300 km in 5 hours. What is its average speed?`,
  options: [
    "50 km/h",
    "55 km/h",
    "60 km/h",
    "65 km/h"
  ],
  answer: "60 km/h",
  solution: `Speed = Distance / Time

= 300 / 5

= 60 km/h.

Correct Answer:

60 km/h.`,
  difficulty: "Easy",
  programmingLanguage: null,
  sourceType: "company-style",
  sourceName: "IBM 2024 Aptitude Practice",
  sourceUrl: null
},

{
  questionId: 1782,
  companyId: 10,
  year: 2024,
  category: "aptitude",
  question: `The ratio of A:B is 4:5. If their total is 72, what is B?`,
  options: [
    "32",
    "36",
    "40",
    "45"
  ],
  answer: "40",
  solution: `Total parts:

4 + 5 = 9

One part:

72 / 9 = 8

B has five parts:

5 × 8 = 40.

Correct Answer:

40.`,
  difficulty: "Easy",
  programmingLanguage: null,
  sourceType: "company-style",
  sourceName: "IBM 2024 Aptitude Practice",
  sourceUrl: null
},

{
  questionId: 1783,
  companyId: 10,
  year: 2024,
  category: "aptitude",
  question: `An item costs ₹1000 and is sold for ₹1250. What is the profit percentage?`,
  options: [
    "20%",
    "25%",
    "30%",
    "35%"
  ],
  answer: "25%",
  solution: `Profit:

1250 - 1000

= 250

Profit percentage:

(250 / 1000) × 100

= 25%.

Correct Answer:

25%.`,
  difficulty: "Easy",
  programmingLanguage: null,
  sourceType: "company-style",
  sourceName: "IBM 2024 Aptitude Practice",
  sourceUrl: null
},

{
  questionId: 1784,
  companyId: 10,
  year: 2024,
  category: "pseudocode",
  question: `What is the output?

x = 4
y = 3
z = x * y + 2

print z`,
  options: [
    "10",
    "12",
    "14",
    "18"
  ],
  answer: "14",
  solution: `x = 4
y = 3

x × y = 12

z = 12 + 2

z = 14

Correct Answer:

14.`,
  difficulty: "Easy",
  programmingLanguage: null,
  sourceType: "company-style",
  sourceName: "IBM 2024 Programming Logic Practice",
  sourceUrl: null
},

{
  questionId: 1785,
  companyId: 10,
  year: 2024,
  category: "pseudocode",
  question: `What is the output?

count = 0

for i = 1 to 5
    if i % 2 == 0
        count = count + 1

print count`,
  options: [
    "1",
    "2",
    "3",
    "5"
  ],
  answer: "2",
  solution: `Numbers from 1 through 5:

1
2
3
4
5

Even values:

2
4

Therefore count becomes:

2.

Correct Answer:

2.`,
  difficulty: "Easy",
  programmingLanguage: null,
  sourceType: "company-style",
  sourceName: "IBM 2024 Programming Logic Practice",
  sourceUrl: null
},

{
  questionId: 1786,
  companyId: 10,
  year: 2024,
  category: "web",
  question: `What happens when a browser requests a typical HTTPS web page?`,
  options: [
    "The browser resolves the host, establishes a network connection, negotiates TLS, sends an HTTP request, receives resources and renders the page",
    "The browser directly executes the server database",
    "The browser converts HTML into Java bytecode",
    "No network communication occurs"
  ],
  answer: "The browser resolves the host, establishes a network connection, negotiates TLS, sends an HTTP request, receives resources and renders the page",
  solution: `At a simplified level:

1. Resolve the hostname using DNS.
2. Establish the network connection.
3. Negotiate TLS for HTTPS.
4. Send an HTTP request.
5. Receive HTML and other resources.
6. Parse HTML/CSS.
7. Execute relevant JavaScript.
8. Construct and render the page.

Correct Answer:

The browser resolves the host, establishes
a network connection, negotiates TLS,
sends an HTTP request, receives resources
and renders the page.`,
  difficulty: "Medium",
  programmingLanguage: null,
  sourceType: "company-style",
  sourceName: "IBM 2024 Web Fundamentals Practice",
  sourceUrl: null
},

{
  questionId: 1787,
  companyId: 10,
  year: 2024,
  category: "web",
  question: `Which HTTP method is primarily intended to retrieve a resource without requesting a state change?`,
  options: [
    "GET",
    "POST",
    "DELETE",
    "PATCH"
  ],
  answer: "GET",
  solution: `GET is used to retrieve a representation
of a resource.

Example:

GET /api/users/10

POST commonly creates or submits data.

DELETE requests deletion.

PATCH performs a partial modification.

Correct Answer:

GET.`,
  difficulty: "Easy",
  programmingLanguage: null,
  sourceType: "company-style",
  sourceName: "IBM 2024 Web Fundamentals Practice",
  sourceUrl: null
},

{
  questionId: 1788,
  companyId: 10,
  year: 2024,
  category: "cloud",
  question: `Which cloud characteristic allows computing resources to increase or decrease according to workload demand?`,
  options: [
    "Elasticity",
    "Compilation",
    "Normalization",
    "Recursion"
  ],
  answer: "Elasticity",
  solution: `Elasticity is the ability to provision or
release resources as demand changes.

For example:

Traffic increases
-> additional instances can be started.

Traffic decreases
-> unnecessary capacity can be removed.

Correct Answer:

Elasticity.`,
  difficulty: "Easy",
  programmingLanguage: null,
  sourceType: "company-style",
  sourceName: "IBM 2024 Cloud Practice",
  sourceUrl: null
},

{
  questionId: 1789,
  companyId: 10,
  year: 2024,
  category: "programming",
  question: `Given an array of integers, return the second largest distinct value.

Example:

Input:
[10, 5, 20, 20, 8, 15]

Output:
15`,
  options: [],
  answer: "Track the largest and second-largest distinct values during one traversal.",
  solution: `Java Solution:

class Solution {

    public Integer secondLargest(
        int[] nums
    ) {

        Integer largest = null;
        Integer second = null;

        for (int value : nums) {

            if (
                largest == null ||
                value > largest
            ) {

                if (
                    largest == null ||
                    value != largest
                ) {
                    second = largest;
                    largest = value;
                }

            } else if (
                value != largest &&
                (
                    second == null ||
                    value > second
                )
            ) {

                second = value;
            }
        }

        return second;
    }
}

For:

[10, 5, 20, 20, 8, 15]

Largest distinct value:

20

Second largest distinct value:

15

Output:

15

Time Complexity:

O(n)

Space Complexity:

O(1).`,
  difficulty: "Easy",
  programmingLanguage: "Java",
  sourceType: "company-style",
  sourceName: "IBM 2024 DSA Practice",
  sourceUrl: null
}

];

async function seedIBM2024Questions() {

  try {

    await mongoose.connect(
      process.env.MONGO_URI
    );

    console.log("MongoDB connected");

    await CompanyQuestion.deleteMany({
      companyId: 10,
      year: 2024
    });

    console.log(
      "Old IBM 2024 questions deleted"
    );

    await CompanyQuestion.insertMany(
      questions
    );

    console.log(
      `${questions.length} IBM 2024 questions seeded successfully`
    );

  } catch (error) {

    console.error(
      "Error seeding IBM 2024 questions:",
      error
    );

  } finally {

    await mongoose.disconnect();

    console.log("MongoDB disconnected");
  }
}

seedIBM2024Questions();