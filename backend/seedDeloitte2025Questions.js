 require("dotenv").config();
const mongoose = require("mongoose");
const CompanyQuestion = require("./models/CompanyQuestion");

const companyQuestions = [

 // =========================================================
  // DELOITTE 2025 — CANDIDATE-REPORTED QUESTIONS ONLY
  // =========================================================

  {
    questionId: 1500,
    companyId: 9,
    year: 2025,
    category: "programming",

    question: `Given an integer array nums and an integer target,
return the indices of two numbers such that they add up to target.`,

    options: [],

    answer:
      "Use a HashMap to store previously visited numbers and search for target - nums[i].",

    solution: `Example:

nums = [2, 7, 11, 15]
target = 9

We need two values whose sum is 9.

Step 1:
Current value = 2
Required value = 9 - 2 = 7

7 has not been seen yet.
Store:
2 -> index 0

Step 2:
Current value = 7
Required value = 9 - 7 = 2

2 already exists at index 0.

Therefore:
answer = [0, 1]

Java Solution:

import java.util.*;

class Solution {

    public int[] twoSum(int[] nums, int target) {

        HashMap<Integer, Integer> map =
            new HashMap<>();

        for (int i = 0; i < nums.length; i++) {

            int required =
                target - nums[i];

            if (map.containsKey(required)) {

                return new int[] {
                    map.get(required),
                    i
                };
            }

            map.put(nums[i], i);
        }

        return new int[] {};
    }
}

Time Complexity:
O(n)

Space Complexity:
O(n)`,

    difficulty: "Medium",
    programmingLanguage: "Java",

    sourceType: "previous-year",
    sourceName:
      "Candidate-reported Deloitte Software Engineer Online Assessment - March 2025",

    sourceUrl:
      "https://www.naukri.com/code360/interview-experiences/deloitte/deloitte-interview-experience-on-campus-mar-2025",
  },

  // =========================================================
  // SQL VS NOSQL
  // =========================================================

  {
    questionId: 1501,
    companyId: 9,
    year: 2025,
    category: "dbms",

    question: "What is the difference between SQL and NoSQL databases?",

    options: [],

    answer:
      "SQL databases generally use relational tables and structured schemas, whereas NoSQL databases use non-relational models such as documents, key-value pairs, graphs or wide-column stores.",

    solution: `SQL databases:

1. Primarily use the relational model.
2. Data is generally represented using tables.
3. Tables contain rows and columns.
4. Relationships can be represented using keys.
5. SQL is used to query and manipulate data.
6. Structured schemas are common.

Examples:

MySQL
PostgreSQL
Oracle
SQL Server


NoSQL databases:

NoSQL refers to several non-relational database
models.

Common models include:

1. Document databases
2. Key-value databases
3. Graph databases
4. Wide-column databases

Example:

MongoDB stores BSON-style documents.


Example SQL structure:

Users

id | name | email
-----------------
1  | Ravi | r@example.com


Orders

id | user_id | amount
---------------------
1  | 1       | 500


The relationship can be represented using user_id.


A document-oriented design could instead represent
related information in nested documents depending
on application requirements.


SQL is often suitable when:

- relational structure is important
- complex joins are needed
- strong transactional behavior is important


NoSQL systems can be useful when:

- flexible data models are useful
- access patterns fit a non-relational model
- horizontal distribution/scaling requirements
  favor a particular NoSQL system


Neither category is universally better.

The correct choice depends on:

- data model
- query patterns
- consistency requirements
- transaction requirements
- scalability requirements`,

    difficulty: "Medium",
    programmingLanguage: null,

    sourceType: "previous-year",
    sourceName:
      "Candidate-reported Deloitte USI Analyst Technical Interview 2025",

    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/deloitte-usi-interview-experience-analyst-role/",
  },

  // =========================================================
  // SECOND HIGHEST SALARY
  // =========================================================

  {
    questionId: 1502,
    companyId: 9,
    year: 2025,
    category: "sql",

    question:
      "Write an SQL query to find the second highest salary in a table.",

    options: [],

    answer:
      "Find the maximum salary that is smaller than the overall maximum salary.",

    solution: `Suppose we have:

Employee

id | name  | salary
-------------------
1  | A     | 50000
2  | B     | 70000
3  | C     | 60000
4  | D     | 70000


The highest salary is:

70000

The second highest distinct salary is:

60000


Solution 1:

SELECT MAX(salary) AS second_highest_salary
FROM Employee
WHERE salary < (
    SELECT MAX(salary)
    FROM Employee
);


How it works:

Inner query:

SELECT MAX(salary)
FROM Employee;

returns:

70000


Then:

WHERE salary < 70000

removes the highest salary.

The remaining salaries are:

50000
60000

MAX() returns:

60000


Alternative using DENSE_RANK:

SELECT salary
FROM (
    SELECT
        salary,
        DENSE_RANK() OVER (
            ORDER BY salary DESC
        ) AS salary_rank
    FROM Employee
) t
WHERE salary_rank = 2;


DENSE_RANK is particularly useful when duplicate
salary values exist.`,

    difficulty: "Medium",
    programmingLanguage: null,

    sourceType: "previous-year",
    sourceName:
      "Candidate-reported Deloitte USI Analyst Interview 2025 - Second Highest Salary",

    sourceUrl:
      "https://medium.com/@ayushrskiaa/deloitte-usi-analyst-interview-experience-1dcde840ac9f",
  },

  // =========================================================
  // BINARY SEARCH
  // =========================================================

  {
    questionId: 1503,
    companyId: 9,
    year: 2025,
    category: "programming",

    question: "Implement Binary Search.",

    options: [],

    answer:
      "Repeatedly compare the target with the middle element of a sorted array and discard half of the remaining search space.",

    solution: `Binary Search requires the array to be sorted.

Example:

arr = [2, 5, 8, 12, 16, 23, 38]
target = 16


Initially:

left = 0
right = 6

mid = 3

arr[3] = 12

16 > 12

Therefore search the right half.


Now:

left = 4
right = 6

mid = 5

arr[5] = 23

16 < 23

Search the left half.


Now:

left = 4
right = 4

arr[4] = 16

Target found at index 4.


Java Solution:

class Solution {

    public int search(int[] nums, int target) {

        int left = 0;
        int right = nums.length - 1;

        while (left <= right) {

            int mid =
                left + (right - left) / 2;

            if (nums[mid] == target) {

                return mid;
            }

            if (nums[mid] < target) {

                left = mid + 1;

            } else {

                right = mid - 1;
            }
        }

        return -1;
    }
}


Time Complexity:

O(log n)


Space Complexity:

O(1)


Why O(log n)?

After every comparison, approximately half of
the remaining elements are discarded.`,

    difficulty: "Easy",
    programmingLanguage: "Java",

    sourceType: "previous-year",
    sourceName:
      "Candidate-reported Deloitte USI Analyst Interview 2025 - Binary Search",

    sourceUrl:
      "https://medium.com/@ayushrskiaa/deloitte-usi-analyst-interview-experience-1dcde840ac9f",
  },

  // =========================================================
  // DP — PAINT N HOUSES
  // =========================================================

  {
    questionId: 1504,
    companyId: 9,
    year: 2025,
    category: "programming",

    question: `You are given N houses and the cost of painting each
house using different colors.

Find the minimum cost of painting all houses such that
no two adjacent houses have the same color.`,

    options: [],

    answer:
      "Use dynamic programming where the cost of painting the current house with a color depends on the minimum cost of painting the previous house with a different color.",

    solution: `Suppose there are three colors:

Red
Blue
Green

Let:

dp[i][0] = minimum cost if house i is Red
dp[i][1] = minimum cost if house i is Blue
dp[i][2] = minimum cost if house i is Green


Transitions:

dp[i][0] =
cost[i][0] +
min(dp[i-1][1], dp[i-1][2])


dp[i][1] =
cost[i][1] +
min(dp[i-1][0], dp[i-1][2])


dp[i][2] =
cost[i][2] +
min(dp[i-1][0], dp[i-1][1])


Example:

cost =

[
  [17, 2, 17],
  [16, 16, 5],
  [14, 3, 19]
]


House 0:

Red   = 17
Blue  = 2
Green = 17


House 1:

Red =
16 + min(2,17)
= 18

Blue =
16 + min(17,17)
= 33

Green =
5 + min(17,2)
= 7


House 2:

Red =
14 + min(33,7)
= 21

Blue =
3 + min(18,7)
= 10

Green =
19 + min(18,33)
= 37


Minimum:

min(21,10,37)
= 10


Java Solution:

class Solution {

    public int minCost(int[][] cost) {

        if (
            cost == null ||
            cost.length == 0
        ) {
            return 0;
        }

        int red = cost[0][0];
        int blue = cost[0][1];
        int green = cost[0][2];

        for (int i = 1; i < cost.length; i++) {

            int newRed =
                cost[i][0] +
                Math.min(blue, green);

            int newBlue =
                cost[i][1] +
                Math.min(red, green);

            int newGreen =
                cost[i][2] +
                Math.min(red, blue);

            red = newRed;
            blue = newBlue;
            green = newGreen;
        }

        return Math.min(
            red,
            Math.min(blue, green)
        );
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
      "Candidate-reported Deloitte USI Analyst Interview 2025 - Minimize Cost of Painting N Houses",

    sourceUrl:
      "https://medium.com/@ayushrskiaa/deloitte-usi-analyst-interview-experience-1dcde840ac9f",
  },

  // =========================================================
  // FULL-STACK BASICS
  // =========================================================

  {
    questionId: 1505,
    companyId: 9,
    year: 2025,
    category: "web",

    question: "Explain the basics of full-stack development.",

    options: [],

    answer:
      "Full-stack development involves working with the frontend, backend, APIs, databases and the integration between these application layers.",

    solution: `A typical full-stack application contains several
major parts.


1. Frontend

This is the user-facing application.

Common technologies:

HTML
CSS
JavaScript
React
Angular


For example:

React can display a login form.


2. Backend

The backend receives requests and executes
application/business logic.

Common technologies include:

Node.js
Java
Python
.NET


For example:

POST /api/login


3. API

The frontend commonly communicates with the
backend through HTTP APIs.

Example:

Frontend sends:

POST /api/login

{
  "email": "user@example.com",
  "password": "..."
}


The backend validates the information and sends
a response.


4. Database

The backend stores and retrieves persistent data.

Examples:

MySQL
PostgreSQL
MongoDB


5. Authentication

A full-stack system may use:

Sessions
JWT
OAuth

depending on its architecture.


Overall flow:

User
  |
  v
Frontend
  |
  | HTTP request
  v
Backend/API
  |
  v
Database

The response then travels back through the backend
to the frontend.`,

    difficulty: "Easy",
    programmingLanguage: null,

    sourceType: "previous-year",
    sourceName:
      "Candidate-reported Deloitte USI Analyst Interview 2025 - Full Stack Basics",

    sourceUrl:
      "https://medium.com/@ayushrskiaa/deloitte-usi-analyst-interview-experience-1dcde840ac9f",
  },

  // =========================================================
  // SWAP WITHOUT EXTRA VARIABLE
  // =========================================================

  {
    questionId: 1506,
    companyId: 9,
    year: 2025,
    category: "programming",

    question: "Swap two numbers without using an extra variable.",

    options: [],

    answer:
      "Use arithmetic operations such as addition and subtraction, or XOR for integer values.",

    solution: `Suppose:

a = 10
b = 20


Using addition and subtraction:

a = a + b

a = 30


b = a - b

b = 30 - 20
b = 10


a = a - b

a = 30 - 10
a = 20


Final result:

a = 20
b = 10


Java Solution:

public class Main {

    public static void main(String[] args) {

        int a = 10;
        int b = 20;

        a = a + b;

        b = a - b;

        a = a - b;

        System.out.println("a = " + a);
        System.out.println("b = " + b);
    }
}


Output:

a = 20
b = 10


Another integer approach uses XOR:

a = a ^ b;
b = a ^ b;
a = a ^ b;


Note:

The arithmetic approach can overflow when values
are near the numeric limits of the integer type.

In normal production code, using a temporary
variable is usually clearer and safer unless the
constraint specifically prohibits it.`,

    difficulty: "Easy",
    programmingLanguage: "Java",

    sourceType: "previous-year",
    sourceName: "Candidate-reported Deloitte USI Technology Analyst Interview",

    sourceUrl:
      "https://www.linkedin.com/posts/pursottamsah_potd-professional-bekar-activity-7242994996906246144-N_dA",
  },

  // =========================================================
  // QUICKSORT
  // =========================================================

  {
    questionId: 1507,
    companyId: 9,
    year: 2025,
    category: "pseudocode",

    question: "Explain the algorithm of Quick Sort.",

    options: [],

    answer:
      "Quick Sort selects a pivot, partitions elements around the pivot and recursively sorts the resulting partitions.",

    solution: `Consider:

[6, 3, 8, 5, 2, 7, 4]


Suppose 4 is selected as the pivot.

After partitioning:

elements <= 4 are placed on one side

[3, 2]

pivot:

[4]

elements > 4 are placed on the other side

[6, 8, 5, 7]


Quick Sort then recursively applies the same
procedure to both partitions.


General algorithm:

QUICKSORT(arr, low, high)

    if low < high

        pivotIndex =
            PARTITION(arr, low, high)

        QUICKSORT(
            arr,
            low,
            pivotIndex - 1
        )

        QUICKSORT(
            arr,
            pivotIndex + 1,
            high
        )


Average Time Complexity:

O(n log n)


Worst-case Time Complexity:

O(n^2)


A poor pivot choice can repeatedly create highly
unbalanced partitions, producing the worst case.


Typical recursive stack space:

Average:
O(log n)

Worst case:
O(n)`,

    difficulty: "Medium",
    programmingLanguage: null,

    sourceType: "previous-year",
    sourceName:
      "Candidate-reported Deloitte USI Technology Analyst Interview - Quick Sort Algorithm",

    sourceUrl:
      "https://www.linkedin.com/posts/pursottamsah_potd-professional-bekar-activity-7242994996906246144-N_dA",
  },

  // =========================================================
  // CLASS VS OBJECT
  // =========================================================

  {
    questionId: 1508,
    companyId: 9,
    year: 2025,
    category: "java",

    question: "What is the difference between a class and an object?",

    options: [],

    answer:
      "A class defines a type's structure and behavior, while an object is an instance of that class.",

    solution: `Example:

class Student {

    String name;

    void study() {
        System.out.println("Studying");
    }
}


Student is the class.


Now:

Student s1 = new Student();


s1 is a reference to a Student object created
using new.


Class:

- defines fields and methods
- acts as a blueprint/type definition
- describes behavior and structure


Object:

- is an instance of a class
- has actual runtime state
- can invoke the methods defined by its class


Example:

Student s1 = new Student();
Student s2 = new Student();

s1 and s2 represent two different Student objects
created from the same Student class.`,

    difficulty: "Easy",
    programmingLanguage: null,

    sourceType: "previous-year",
    sourceName:
      "Candidate-reported Deloitte USI Technology Analyst Interview - Class vs Object",

    sourceUrl:
      "https://www.linkedin.com/posts/pursottamsah_potd-professional-bekar-activity-7242994996906246144-N_dA",
  },

  // =========================================================
  // MULTITHREADING
  // =========================================================

  {
    questionId: 1509,
    companyId: 9,
    year: 2025,
    category: "java",

    question: "Explain multithreading in Java.",

    options: [],

    answer:
      "Multithreading allows multiple threads of execution to make progress within a process.",

    solution: `A thread is a unit of execution within a process.

A Java program can contain multiple threads.


Example:

class Task extends Thread {

    public void run() {

        System.out.println(
            "Task is running"
        );
    }
}


public class Main {

    public static void main(String[] args) {

        Task t = new Task();

        t.start();
    }
}


Important:

Calling:

t.start()

creates/schedules execution of a new thread,
which eventually invokes run().


Calling:

t.run()

directly behaves like a normal method call and
does not itself start a new thread.


Another common approach is Runnable:

class Task implements Runnable {

    public void run() {

        System.out.println(
            "Running"
        );
    }
}


Thread t =
    new Thread(new Task());

t.start();


Multithreading introduces important concerns such as:

- race conditions
- synchronization
- visibility
- deadlocks
- thread safety
- coordination between threads`,

    difficulty: "Medium",
    programmingLanguage: "Java",

    sourceType: "previous-year",
    sourceName:
      "Candidate-reported Deloitte USI Technology Analyst Interview - Java Multithreading",

    sourceUrl:
      "https://www.linkedin.com/posts/pursottamsah_potd-professional-bekar-activity-7242994996906246144-N_dA",
  },

  // =========================================================
  // INTERFACE
  // =========================================================

  {
    questionId: 1510,
    companyId: 9,
    year: 2025,
    category: "java",

    question: "What is an interface in Java?",

    options: [],

    answer:
      "An interface defines a contract that implementing classes can fulfill.",

    solution: `Example:

interface Payment {

    void pay(double amount);
}


class CardPayment implements Payment {

    public void pay(double amount) {

        System.out.println(
            "Paid: " + amount
        );
    }
}


The interface defines:

pay(double amount)


The implementing class provides the implementation.


Usage:

Payment payment =
    new CardPayment();

payment.pay(1000);


Interfaces are useful for:

1. Abstraction
2. Loose coupling
3. Defining common contracts
4. Supporting polymorphism
5. Allowing a class to implement multiple interfaces


Modern Java interfaces may also contain:

- default methods
- static methods
- private helper methods

subject to Java version rules.`,

    difficulty: "Medium",
    programmingLanguage: "Java",

    sourceType: "previous-year",
    sourceName:
      "Candidate-reported Deloitte USI Technology Analyst Interview - Java Interface",

    sourceUrl:
      "https://www.linkedin.com/posts/pursottamsah_potd-professional-bekar-activity-7242994996906246144-N_dA",
  },

  // =========================================================
  // TRY-CATCH
  // =========================================================

  {
    questionId: 1511,
    companyId: 9,
    year: 2025,
    category: "java",

    question: "Explain the try-catch block in Java.",

    options: [],

    answer:
      "The try block contains code that may throw an exception, while catch handles a compatible exception.",

    solution: `Example:

public class Main {

    public static void main(String[] args) {

        try {

            int result = 10 / 0;

            System.out.println(result);

        } catch (ArithmeticException e) {

            System.out.println(
                "Cannot divide by zero"
            );
        }
    }
}


The statement:

10 / 0

throws an ArithmeticException.


Java searches for a compatible catch block.

The catch block handles the exception and the
program can continue after the try-catch statement.


finally can be used for code intended to execute
after try/catch handling:

try {

    // risky operation

} catch (Exception e) {

    // handling

} finally {

    // cleanup logic
}


Important:

Catching overly broad exceptions without a reason
can hide programming errors.

Catch the exceptions that the application can
meaningfully handle.`,

    difficulty: "Easy",
    programmingLanguage: "Java",

    sourceType: "previous-year",
    sourceName:
      "Candidate-reported Deloitte USI Technology Analyst Interview - Try Catch",

    sourceUrl:
      "https://www.linkedin.com/posts/pursottamsah_potd-professional-bekar-activity-7242994996906246144-N_dA",
  },

  // =========================================================
  // SQL JOINS
  // =========================================================

  {
    questionId: 1512,
    companyId: 9,
    year: 2025,
    category: "sql",

    question: "Explain SQL joins.",

    options: [],

    answer:
      "SQL joins combine rows from multiple tables based on a related column or join condition.",

    solution: `Suppose we have:

Employee

id | name | department_id


Department

id | department_name


INNER JOIN:

SELECT
    e.name,
    d.department_name
FROM Employee e
INNER JOIN Department d
ON e.department_id = d.id;


INNER JOIN returns matching rows from both sides.


LEFT JOIN:

SELECT
    e.name,
    d.department_name
FROM Employee e
LEFT JOIN Department d
ON e.department_id = d.id;


LEFT JOIN keeps all rows from Employee even when
there is no matching Department row.


RIGHT JOIN:

Keeps all rows from the right-side table, plus
matching rows from the left where supported by
the database.


FULL OUTER JOIN:

Keeps matching rows and unmatched rows from both
sides where supported by the database.


CROSS JOIN:

Returns the Cartesian product.


SELF JOIN:

A table is joined with itself, typically using
aliases.`,

    difficulty: "Medium",
    programmingLanguage: null,

    sourceType: "previous-year",
    sourceName:
      "Candidate-reported Deloitte USI Technology Analyst Interview - SQL Joins",

    sourceUrl:
      "https://www.linkedin.com/posts/pursottamsah_potd-professional-bekar-activity-7242994996906246144-N_dA",
  },

  // =========================================================
  // WHY CLOUD
  // =========================================================

  {
    questionId: 1513,
    companyId: 9,
    year: 2025,
    category: "cloud",

    question: "Why do organizations use cloud computing?",

    options: [],

    answer:
      "Cloud computing can provide on-demand resources, elasticity, managed services, global infrastructure and consumption-based pricing depending on the service.",

    solution: `Organizations may choose cloud platforms for several
reasons.


1. On-demand infrastructure

Resources can often be provisioned without buying
and installing physical hardware first.


2. Elasticity

Capacity can be increased or decreased according
to workload requirements.


3. Managed services

Cloud providers offer managed services for areas
such as:

databases
containers
storage
analytics
monitoring


4. Global infrastructure

Applications can be deployed across multiple
geographic regions.


5. Automation

Infrastructure can be provisioned and managed
through APIs and Infrastructure as Code.


6. Cost model

Many cloud services use consumption-based pricing.

However, cloud is not automatically cheaper.

Actual cost depends on:

architecture
usage
data transfer
storage
managed services
operational requirements


The decision should therefore be based on the
application's technical and business requirements.`,

    difficulty: "Easy",
    programmingLanguage: null,

    sourceType: "previous-year",
    sourceName:
      "Candidate-reported Deloitte USI Technology Analyst Interview - Why Cloud",

    sourceUrl:
      "https://www.linkedin.com/posts/pursottamsah_potd-professional-bekar-activity-7242994996906246144-N_dA",
  },

  // =========================================================
  // SHARDING
  // =========================================================

  {
    questionId: 1514,
    companyId: 9,
    year: 2025,
    category: "dbms",

    question: "What is database sharding?",

    options: [],

    answer:
      "Sharding horizontally partitions data across multiple database nodes using a shard key or partitioning strategy.",

    solution: `Suppose a system contains:

100 million users.


Instead of keeping every user on one database,
the application might partition users.


Example:

Shard 1:
user IDs 1 - 25 million

Shard 2:
25 million - 50 million

Shard 3:
50 million - 75 million

Shard 4:
75 million - 100 million


This is horizontal partitioning.


Another strategy could use:

hash(userId) % numberOfShards


Potential advantages:

- distributes storage
- distributes workload
- can support horizontal scaling


Challenges:

- choosing a good shard key
- cross-shard queries
- rebalancing
- distributed transactions
- operational complexity
- hotspot shards


A poor shard key can result in uneven load.

Therefore sharding should be designed around
actual application access patterns.`,

    difficulty: "Medium",
    programmingLanguage: null,

    sourceType: "previous-year",
    sourceName:
      "Candidate-reported Deloitte USI Technology Analyst Interview - Sharding",

    sourceUrl:
      "https://www.linkedin.com/posts/pursottamsah_potd-professional-bekar-activity-7242994996906246144-N_dA",
  },

  // =========================================================
  // FAULT TOLERANCE
  // =========================================================

  {
    questionId: 1515,
    companyId: 9,
    year: 2025,
    category: "cloud",

    question: "What is fault tolerance in a distributed or cloud system?",

    options: [],

    answer:
      "Fault tolerance is the ability of a system to continue providing acceptable service despite failures of some components.",

    solution: `Suppose an application runs on only one server.

If that server fails:

the entire application can become unavailable.


A more fault-tolerant architecture might use:

Load Balancer
      |
  -----------
  |         |
Server A  Server B
  |         |
  -----------


If Server A fails, requests can potentially be
served by Server B.


Other techniques include:

1. Replication
2. Redundancy
3. Health checks
4. Automatic failover
5. Multiple availability zones
6. Backups
7. Retry strategies
8. Circuit breakers


Important:

High availability and fault tolerance are related,
but they are not exactly identical concepts.

The required architecture depends on the system's
availability and recovery objectives.`,

    difficulty: "Medium",
    programmingLanguage: null,

    sourceType: "previous-year",
    sourceName:
      "Candidate-reported Deloitte USI Technology Analyst Interview - Fault Tolerance",

    sourceUrl:
      "https://www.linkedin.com/posts/pursottamsah_potd-professional-bekar-activity-7242994996906246144-N_dA",
  },

  // =========================================================
  // GKE
  // =========================================================

  {
    questionId: 1516,
    companyId: 9,
    year: 2025,
    category: "cloud",

    question: "What is GKE?",

    options: [],

    answer:
      "GKE stands for Google Kubernetes Engine, Google's managed Kubernetes service.",

    solution: `Kubernetes is a container orchestration platform.

It helps manage containerized applications,
including areas such as:

- deployment
- scaling
- service discovery
- scheduling
- rolling updates


GKE stands for:

Google Kubernetes Engine


It provides managed Kubernetes functionality on
Google Cloud.


A simplified architecture can look like:

Users
  |
Load Balancer
  |
Kubernetes Service
  |
-------------------
|                 |
Pod A           Pod B


The application containers run inside pods.

Kubernetes manages the desired state and can
replace failed workloads depending on configuration.


GKE reduces some of the operational work required
to operate Kubernetes infrastructure compared
with managing every Kubernetes component manually.`,

    difficulty: "Medium",
    programmingLanguage: null,

    sourceType: "previous-year",
    sourceName:
      "Candidate-reported Deloitte USI Technology Analyst Interview - GKE",

    sourceUrl:
      "https://www.linkedin.com/posts/pursottamsah_potd-professional-bekar-activity-7242994996906246144-N_dA",
  },
  {
    questionId: 1517,
    companyId: 9,
    year: 2025,
    category: "programming",

    question: `Given an array containing numbers from 1 to N with exactly
one number missing, find the missing number.`,

    options: [],

    answer:
      "Use the sum formula or XOR to find the missing number in O(n) time and O(1) extra space.",

    solution: `Example:

N = 5
arr = [1, 2, 4, 5]

The complete sequence should be:

1, 2, 3, 4, 5

Therefore:

Missing number = 3


APPROACH 1: SUM FORMULA

Sum of numbers from 1 to N:

N * (N + 1) / 2

For N = 5:

5 * 6 / 2 = 15

Actual array sum:

1 + 2 + 4 + 5 = 12

Missing number:

15 - 12 = 3


Java Solution:

class Solution {

    public int findMissing(int[] arr, int n) {

        long expected =
            (long) n * (n + 1) / 2;

        long actual = 0;

        for (int value : arr) {
            actual += value;
        }

        return (int) (expected - actual);
    }
}


Time Complexity:
O(n)

Space Complexity:
O(1)


Why use long?

The expression:

n * (n + 1)

can overflow an int for large values of n.

Casting n to long before multiplication reduces
that risk.


APPROACH 2: XOR

The same problem can be solved using XOR.

Properties:

x ^ x = 0
x ^ 0 = x


Java:

class Solution {

    public int findMissing(int[] arr, int n) {

        int xor = 0;

        for (int i = 1; i <= n; i++) {
            xor ^= i;
        }

        for (int value : arr) {
            xor ^= value;
        }

        return xor;
    }
}


Every number that appears in both the complete
sequence and the input array cancels.

Only the missing number remains.

Time Complexity:
O(n)

Space Complexity:
O(1)`,

    difficulty: "Easy",
    programmingLanguage: "Java",

    sourceType: "previous-year",

    sourceName: "Deloitte NLA Analyst/Associate Interview - 10 Feb 2025",

    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/deloitte-interview-experience-through-nla/",
  },

  {
    questionId: 1518,
    companyId: 9,
    year: 2025,
    category: "java",

    question: "Explain inheritance in Object-Oriented Programming.",

    options: [],

    answer:
      "Inheritance allows a child class to acquire accessible properties and behavior from a parent class.",

    solution: `Inheritance establishes an IS-A relationship.

Example:

class Employee {

    void work() {
        System.out.println("Employee working");
    }
}


class Developer extends Employee {

    void code() {
        System.out.println("Writing code");
    }
}


public class Main {

    public static void main(String[] args) {

        Developer developer =
            new Developer();

        developer.work();

        developer.code();
    }
}


Developer inherits the accessible work()
method from Employee.


Parent class:

Employee


Child class:

Developer


Benefits:

1. Code reuse
2. Extensibility
3. Method overriding
4. Runtime polymorphism


Example of overriding:

class Animal {

    void sound() {
        System.out.println("Animal sound");
    }
}


class Dog extends Animal {

    @Override
    void sound() {
        System.out.println("Bark");
    }
}


Animal animal = new Dog();

animal.sound();


Output:

Bark


Java supports single inheritance of classes.

A class cannot extend two classes directly.

However, Java supports implementing multiple
interfaces.`,

    difficulty: "Easy",
    programmingLanguage: "Java",

    sourceType: "previous-year",

    sourceName: "Deloitte NLA 2025 Candidate Interview - OOP Inheritance",

    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/deloitte-interview-experience-through-nla/",
  },

  {
    questionId: 1519,
    companyId: 9,
    year: 2025,
    category: "java",

    question: "Explain polymorphism in Object-Oriented Programming.",

    options: [],

    answer:
      "Polymorphism allows the same method name, interface or operation to exhibit different behavior depending on its context or runtime object.",

    solution: `Polymorphism means:

"many forms"


Two common forms in Java are:


1. COMPILE-TIME POLYMORPHISM

Usually demonstrated using method overloading.

Example:

class Calculator {

    int add(int a, int b) {

        return a + b;
    }

    double add(double a, double b) {

        return a + b;
    }
}


Both methods are named:

add()

but have different parameter types.


The compiler determines which method should
be called.


2. RUNTIME POLYMORPHISM

Usually demonstrated using method overriding.

Example:

class Animal {

    void sound() {

        System.out.println(
            "Animal sound"
        );
    }
}


class Dog extends Animal {

    @Override
    void sound() {

        System.out.println(
            "Dog barks"
        );
    }
}


public class Main {

    public static void main(String[] args) {

        Animal animal =
            new Dog();

        animal.sound();
    }
}


Output:

Dog barks


Reference type:

Animal

Actual runtime object:

Dog


Therefore the overridden Dog method executes.

This is dynamic method dispatch.`,

    difficulty: "Medium",
    programmingLanguage: "Java",

    sourceType: "previous-year",

    sourceName: "Deloitte NLA 2025 Candidate Interview - OOP Polymorphism",

    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/deloitte-interview-experience-through-nla/",
  },

  {
    questionId: 1520,
    companyId: 9,
    year: 2025,
    category: "java",

    question: "Explain encapsulation in Object-Oriented Programming.",

    options: [],

    answer:
      "Encapsulation bundles data and related methods inside a class and controls access to the object's internal state.",

    solution: `Consider a bank account.

class BankAccount {

    private double balance;

    public void deposit(double amount) {

        if (amount > 0) {

            balance += amount;
        }
    }

    public double getBalance() {

        return balance;
    }
}


The balance variable is:

private


External code cannot directly write:

account.balance = -5000;


Instead, modification goes through:

deposit()


The class can therefore validate the operation.


Benefits of encapsulation:

1. Protect internal state

2. Prevent uncontrolled modification

3. Hide implementation details

4. Improve maintainability

5. Maintain valid object state


Important:

Encapsulation does not simply mean:

"Create getters and setters."


The main idea is that an object should control
access to its internal state.`,

    difficulty: "Easy",
    programmingLanguage: "Java",

    sourceType: "previous-year",

    sourceName: "Deloitte NLA 2025 Candidate Interview - OOP Encapsulation",

    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/deloitte-interview-experience-through-nla/",
  },

  {
    questionId: 1521,
    companyId: 9,
    year: 2025,
    category: "java",

    question: "Explain abstraction in Object-Oriented Programming.",

    options: [],

    answer:
      "Abstraction exposes essential operations while hiding unnecessary implementation details.",

    solution: `Consider a payment system.

The user only needs to know:

payment.pay(1000);


The user does not need to understand every
internal operation such as:

network communication
payment gateway APIs
encryption
bank communication
transaction processing


Java example:

interface Payment {

    void pay(double amount);
}


class CardPayment
    implements Payment {

    @Override
    public void pay(double amount) {

        System.out.println(
            "Processing card payment"
        );
    }
}


The interface describes:

WHAT operation is available.


CardPayment determines:

HOW the operation is performed.


Java commonly provides abstraction through:

1. Interfaces

2. Abstract classes


ABSTRACTION VS ENCAPSULATION


Abstraction:

Focuses on hiding unnecessary implementation
complexity.


Encapsulation:

Focuses on controlling access to an object's
internal state.


They are related concepts but they are not
the same thing.`,

    difficulty: "Easy",
    programmingLanguage: "Java",

    sourceType: "previous-year",

    sourceName: "Deloitte NLA 2025 Candidate Interview - OOP Abstraction",

    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/deloitte-interview-experience-through-nla/",
  },

  {
    questionId: 1522,
    companyId: 9,
    year: 2025,
    category: "programming",

    question:
      "What is the time and space complexity of your solution for finding the missing number from 1 to N?",

    options: [
      "O(n) time and O(1) extra space",
      "O(n²) time and O(1) extra space",
      "O(log n) time and O(n) extra space",
      "O(1) time and O(n) extra space",
    ],

    answer: "O(n) time and O(1) extra space",

    solution: `For either the sum-based or XOR-based solution,
we traverse the array once.

If there are n elements:

Time Complexity:

O(n)


Only a constant number of variables are used.

For example:

expected
actual

or:

xor


The amount of additional memory does not
increase with n.

Therefore:

Space Complexity:

O(1)


Correct answer:

O(n) time and O(1) extra space


The 2025 candidate specifically reported that
the interviewer followed the missing-number
coding problem with questions about time and
space complexity.`,

    difficulty: "Easy",
    programmingLanguage: null,

    sourceType: "previous-year",

    sourceName: "Deloitte NLA 2025 Missing Number Complexity Follow-up",

    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/deloitte-interview-experience-through-nla/",
  },

  {
    questionId: 1523,
    companyId: 9,
    year: 2025,
    category: "programming",

    question:
      "Can you solve the missing-number problem using a different approach?",

    options: [],

    answer:
      "Yes. If the first solution uses the arithmetic sum, an alternative is XOR, which also provides O(n) time and O(1) extra space.",

    solution: `Suppose:

N = 5

arr = [1, 2, 4, 5]


We XOR the complete range:

1 ^ 2 ^ 3 ^ 4 ^ 5


Then XOR every element in the array:

1 ^ 2 ^ 4 ^ 5


Because:

x ^ x = 0

all numbers occurring in both groups cancel.


1 cancels with 1

2 cancels with 2

4 cancels with 4

5 cancels with 5


Only:

3

remains.


Java:

class Solution {

    public int findMissing(
        int[] arr,
        int n
    ) {

        int result = 0;

        for (int i = 1; i <= n; i++) {

            result ^= i;
        }

        for (int value : arr) {

            result ^= value;
        }

        return result;
    }
}


Time Complexity:

O(n)


Space Complexity:

O(1)


Compared with the arithmetic formula,
XOR also avoids arithmetic-sum overflow.


The candidate reported that the interviewer
asked for different approaches to the live
coding problem.`,

    difficulty: "Easy",
    programmingLanguage: "Java",

    sourceType: "previous-year",

    sourceName:
      "Deloitte NLA 2025 Missing Number Alternative Approach Follow-up",

    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/deloitte-interview-experience-through-nla/",
  },

  {
    questionId: 1524,
    companyId: 9,
    year: 2025,
    category: "programming",

    question: "Give a brief self-introduction and explain your background.",

    options: [],

    answer:
      "Cover your education, relevant technical strengths, important projects or experience, and your interest in the role.",

    solution: `This is not a question with one fixed answer.

A fresher can structure the response as follows:


1. INTRODUCTION

Name and current education.


2. TECHNICAL STRENGTHS

Mention only skills you can explain confidently.


3. PROJECTS

Briefly mention one or two important projects.


4. CONTRIBUTION

Explain what you personally implemented.


5. CAREER OBJECTIVE

Connect your background with the role.


Example structure:

"I am a Computer Science student with a strong
interest in software development and
problem-solving.

I have worked on full-stack projects where I
gained practical experience with frontend,
backend APIs and databases.

Along with development, I have been strengthening
my fundamentals in DSA, OOP, DBMS and SQL.

One of my main projects gave me experience in
designing features, integrating APIs and working
with persistent data.

I am now looking for an opportunity where I can
apply these skills in a professional environment
and continue developing as a software engineer."


Keep the introduction concise.

Do not simply read every line of your resume.

Be prepared for the interviewer to ask follow-up
questions based on anything you mention.`,

    difficulty: "Easy",
    programmingLanguage: null,

    sourceType: "previous-year",

    sourceName:
      "Deloitte NLA Analyst/Associate Interview - 10 Feb 2025 - Self Introduction",

    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/deloitte-interview-experience-through-nla/",
  },

  {
    questionId: 1525,
    companyId: 9,
    year: 2025,
    category: "programming",

    question: "Explain one of your academic or personal projects in detail.",

    options: [],

    answer:
      "Explain the problem, architecture, technologies, your contribution, challenges, solution and results.",

    solution: `A strong project explanation should be structured.


1. PROBLEM

What problem does the application solve?


2. USERS

Who uses the application?


3. TECHNOLOGY STACK

Explain the technologies used.

More importantly, explain WHY you chose them.


4. ARCHITECTURE

Example:

Frontend
    |
    | HTTP
    v
REST API
    |
    v
Backend
    |
    v
Database


5. YOUR CONTRIBUTION

This is very important.

Instead of only saying:

"We created a website."

say:

"I implemented the authentication APIs and
connected the frontend login system with the
backend."


6. CHALLENGE

Explain a genuine technical challenge.


7. SOLUTION

Explain how you investigated and solved it.


8. RESULT

Explain the final outcome.


9. FUTURE IMPROVEMENTS

Explain what you would improve if you had
more time.


Be prepared for follow-up questions such as:

Why did you choose this database?

How does authentication work?

How does the frontend communicate with the backend?

What was the hardest bug?

What exactly did you implement?

How would the application scale?

How would you improve security?


The February 2025 Deloitte candidate explicitly
reported detailed discussion of academic and
personal projects.`,

    difficulty: "Medium",
    programmingLanguage: null,

    sourceType: "previous-year",

    sourceName:
      "Deloitte NLA Analyst/Associate Interview - Project Discussion - 10 Feb 2025",

    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/deloitte-interview-experience-through-nla/",
  },

  {
    questionId: 1526,
    companyId: 9,
    year: 2025,
    category: "programming",

    question: `Suppose a project you have been working on is cancelled
close to its deadline. How would you handle the situation?`,

    options: [],

    answer:
      "Understand the reason, communicate professionally, document useful work, complete any required handover, capture lessons learned and adapt to the team's new priority.",

    solution: `This is a scenario-based behavioral question.

A strong response demonstrates:

professionalism
adaptability
communication
ownership


STEP 1: UNDERSTAND THE DECISION

A project may be cancelled because of:

business priorities
budget changes
client decisions
technical feasibility
regulatory issues


STEP 2: CLARIFY EXPECTATIONS

Ask your manager what needs to happen next.

For example:

documentation
handover
cleanup
knowledge transfer


STEP 3: PRESERVE USEFUL WORK

Subject to company policies, document:

architecture
important decisions
reusable components
known issues
lessons learned


STEP 4: SUPPORT THE TEAM

Help with the transition rather than immediately
abandoning the work.


STEP 5: ADAPT

Move your attention to the organization's
new priority.


Example answer:

"If a project I had worked on was cancelled close
to the deadline, I would first understand the
business reason and clarify what my manager needs
from me during the transition.

I would document the current state, important
technical decisions and any reusable work according
to company policy.

I would complete any required handover and capture
the lessons learned.

Although cancellation after significant effort
can be disappointing, I would treat it as a
business decision and focus on the team's next
priority."


The February 2025 candidate specifically reported
this project-cancellation scenario.`,

    difficulty: "Medium",
    programmingLanguage: null,

    sourceType: "previous-year",

    sourceName:
      "Deloitte NLA Analyst/Associate Scenario Question - 10 Feb 2025",

    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/deloitte-interview-experience-through-nla/",
  },

  {
    questionId: 1527,
    companyId: 9,
    year: 2025,
    category: "programming",

    question:
      "How do you handle working in a team when team members have different opinions about how to solve a problem?",

    options: [],

    answer:
      "Listen to each viewpoint, compare options against objective requirements, communicate respectfully, agree on a decision and support the team once the decision is made.",

    solution: `This is a teamwork and communication question.

A good structure is:


1. LISTEN

Understand each person's reasoning before
responding.


2. IDENTIFY THE COMMON GOAL

Bring the discussion back to:

requirements
deadline
quality
maintainability
user needs


3. COMPARE OPTIONS OBJECTIVELY

For technical decisions, compare factors such as:

complexity
performance
development time
maintainability
risk


4. USE EVIDENCE

When possible:

build a prototype
run a benchmark
check documentation
review requirements


5. MAKE A DECISION

The team should eventually commit to an approach.


6. SUPPORT THE DECISION

Once the decision is made, work toward the
team's objective rather than continuing an
unproductive disagreement.


Example:

"If my teammate and I preferred different technical
approaches, I would first understand why they
preferred their solution.

We would compare both options against the actual
requirements, complexity and maintainability.

If necessary, we could create a small prototype
or ask a senior team member for input.

Once the team agrees on a decision, I would fully
support that approach."


The 2025 Deloitte NLA candidate reports that
teamwork, adaptability and communication were
explicitly evaluated during the interview.`,

    difficulty: "Medium",
    programmingLanguage: null,

    sourceType: "previous-year",

    sourceName: "Deloitte NLA 2025 - Teamwork and Communication Evaluation",

    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/deloitte-interview-experience-through-nla/",
  },

  {
    questionId: 1528,
    companyId: 9,
    year: 2025,
    category: "programming",

    question:
      "How would you adapt if you were assigned to work with a technology that you had never used before?",

    options: [],

    answer:
      "Understand the required scope, learn the fundamentals from reliable resources, build a small prototype, seek guidance when necessary and progressively apply the technology to the real task.",

    solution: `This question evaluates adaptability.

A structured answer:


1. UNDERSTAND THE REQUIREMENT

First determine exactly what part of the
technology the project requires.


2. LEARN FUNDAMENTALS

Use:

official documentation
internal documentation
trusted technical resources


3. BUILD A SMALL PROTOTYPE

Instead of immediately changing production code,
create a small experiment.


4. ASK TARGETED QUESTIONS

If blocked, ask experienced teammates specific
questions rather than waiting indefinitely.


5. APPLY THE KNOWLEDGE

Start with a small project task and gradually
take on more responsibility.


6. DOCUMENT LEARNING

Record important setup steps, decisions and
problems for yourself and the team.


Example answer:

"If I were assigned a technology I had not used
before, I would first understand exactly what the
project requires.

I would learn the fundamentals from the official
documentation and build a small prototype so I
could understand the technology practically.

If I encountered blockers, I would ask experienced
team members targeted questions.

Then I would begin applying what I learned to
smaller project tasks before taking on more
complex work."


This reflects the adaptability component explicitly
reported in the Deloitte NLA 2025 interview.`,

    difficulty: "Medium",
    programmingLanguage: null,

    sourceType: "previous-year",

    sourceName: "Deloitte NLA 2025 - Adaptability and Soft Skills Evaluation",

    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/deloitte-interview-experience-through-nla/",
  },
  {
    questionId: 1529,
    companyId: 9,
    year: 2025,
    category: "programming",

    question: `Given an integer array, rotate the array to the left by k positions.

Example:

Input:
arr = [1, 2, 3, 4, 5]
k = 2

Output:
[3, 4, 5, 1, 2]`,

    options: [],

    answer:
      "Use the reversal algorithm to rotate the array in O(n) time and O(1) extra space.",

    solution: `Example:

arr = [1, 2, 3, 4, 5]
k = 2

Step 1:
Reverse first k elements.

[2, 1, 3, 4, 5]

Step 2:
Reverse remaining elements.

[2, 1, 5, 4, 3]

Step 3:
Reverse the entire array.

[3, 4, 5, 1, 2]


Java Solution:

class Solution {

    public void rotateLeft(int[] arr, int k) {

        int n = arr.length;

        if (n == 0) {
            return;
        }

        k = k % n;

        reverse(arr, 0, k - 1);
        reverse(arr, k, n - 1);
        reverse(arr, 0, n - 1);
    }

    private void reverse(
        int[] arr,
        int left,
        int right
    ) {

        while (left < right) {

            int temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;

            left++;
            right--;
        }
    }
}


Time Complexity:
O(n)

Space Complexity:
O(1)`,

    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Deloitte-style DSA Practice",
    sourceUrl: null,
  },

  {
    questionId: 1530,
    companyId: 9,
    year: 2025,
    category: "programming",

    question: `Given a string containing only '(', ')', '{', '}',
'[' and ']', determine whether the brackets are valid.

Example:

Input:
"{[()]}"

Output:
true`,

    options: [],

    answer:
      "Use a stack to store opening brackets and match each closing bracket with the most recent opening bracket.",

    solution: `A stack works because brackets must close
in reverse order.

Example:

{ [ ( ) ] }

Push {
Push [
Push (

When ) appears:
pop (

When ] appears:
pop [

When } appears:
pop {

Stack becomes empty.

Therefore the expression is valid.


Java Solution:

import java.util.*;

class Solution {

    public boolean isValid(String s) {

        Stack<Character> stack =
            new Stack<>();

        for (char ch : s.toCharArray()) {

            if (
                ch == '(' ||
                ch == '{' ||
                ch == '['
            ) {

                stack.push(ch);

            } else {

                if (stack.isEmpty()) {
                    return false;
                }

                char top = stack.pop();

                if (
                    (ch == ')' && top != '(') ||
                    (ch == '}' && top != '{') ||
                    (ch == ']' && top != '[')
                ) {

                    return false;
                }
            }
        }

        return stack.isEmpty();
    }
}


Time Complexity:
O(n)

Space Complexity:
O(n)`,

    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Deloitte-style DSA Practice",
    sourceUrl: null,
  },

  {
    questionId: 1531,
    companyId: 9,
    year: 2025,
    category: "sql",

    question:
      "Which SQL JOIN returns all rows from the left table and matching rows from the right table?",

    options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "CROSS JOIN"],

    answer: "LEFT JOIN",

    solution: `LEFT JOIN returns every row from the
left table.

If a matching row exists in the right table,
its values are included.

If no match exists, columns from the right
table contain NULL.

Example:

SELECT
    e.name,
    d.department_name
FROM Employee e
LEFT JOIN Department d
ON e.department_id = d.id;


Correct Answer:

LEFT JOIN`,

    difficulty: "Easy",
    programmingLanguage: null,
    sourceType: "company-style",
    sourceName: "Deloitte-style SQL Practice",
    sourceUrl: null,
  },

  {
    questionId: 1532,
    companyId: 9,
    year: 2025,
    category: "sql",

    question: `Which SQL clause is used to filter groups created
using GROUP BY?`,

    options: ["WHERE", "HAVING", "ORDER BY", "DISTINCT"],

    answer: "HAVING",

    solution: `WHERE filters individual rows before grouping.

HAVING filters groups after GROUP BY.


Example:

SELECT
    department,
    COUNT(*) AS employees
FROM Employee
GROUP BY department
HAVING COUNT(*) > 5;


This returns only departments containing
more than five employees.


Correct Answer:

HAVING`,

    difficulty: "Easy",
    programmingLanguage: null,
    sourceType: "company-style",
    sourceName: "Deloitte-style SQL Practice",
    sourceUrl: null,
  },

  {
    questionId: 1533,
    companyId: 9,
    year: 2025,
    category: "dbms",

    question:
      "Which ACID property ensures that a transaction is completed entirely or not performed at all?",

    options: ["Atomicity", "Consistency", "Isolation", "Durability"],

    answer: "Atomicity",

    solution: `ACID stands for:

A - Atomicity
C - Consistency
I - Isolation
D - Durability


Atomicity means a transaction behaves as
one logical unit.

Either:

all operations succeed

or:

all operations are rolled back.


Example:

Bank transfer:

1. Deduct ₹1000 from Account A
2. Add ₹1000 to Account B


If step 2 fails, step 1 should also be
rolled back.

Otherwise money would disappear.


Correct Answer:

Atomicity`,

    difficulty: "Easy",
    programmingLanguage: null,
    sourceType: "company-style",
    sourceName: "Deloitte-style DBMS Practice",
    sourceUrl: null,
  },

  {
    questionId: 1534,
    companyId: 9,
    year: 2025,
    category: "dbms",

    question:
      "What is the primary purpose of normalization in a relational database?",

    options: [
      "Increase duplicate data",
      "Reduce redundancy and undesirable data anomalies",
      "Encrypt database tables",
      "Increase the number of columns",
    ],

    answer: "Reduce redundancy and undesirable data anomalies",

    solution: `Normalization organizes relational data
to reduce unnecessary duplication and
undesirable modification anomalies.

It can help prevent:

Insertion anomalies

Update anomalies

Deletion anomalies


For example, storing department information
repeatedly for every employee can create
unnecessary duplication.

Separating related entities into appropriate
tables can reduce that redundancy.


Common normal forms include:

1NF
2NF
3NF
BCNF


Correct Answer:

Reduce redundancy and undesirable data anomalies`,

    difficulty: "Medium",
    programmingLanguage: null,
    sourceType: "company-style",
    sourceName: "Deloitte-style DBMS Practice",
    sourceUrl: null,
  },

  {
    questionId: 1535,
    companyId: 9,
    year: 2025,
    category: "java",

    question:
      "Which Java keyword prevents a method from being overridden by a subclass?",

    options: ["static", "final", "private", "abstract"],

    answer: "final",

    solution: `A method declared final cannot be
overridden by a subclass.

Example:

class Parent {

    final void display() {

        System.out.println("Parent");
    }
}


A child class cannot override display().


The final keyword can also be used with:

variables
methods
classes


Final variable:

cannot be reassigned after initialization.


Final method:

cannot be overridden.


Final class:

cannot be extended.


Correct Answer:

final`,

    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Deloitte-style Java/OOP Practice",
    sourceUrl: null,
  },

  {
    questionId: 1536,
    companyId: 9,
    year: 2025,
    category: "java",

    question:
      "What happens when a subclass defines a method with the same signature as a non-final instance method in its parent class?",

    options: [
      "Method overloading",
      "Method overriding",
      "Constructor chaining",
      "Compilation always fails",
    ],

    answer: "Method overriding",

    solution: `When a subclass provides its own implementation
of an inherited instance method with the same
signature, this is method overriding.

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


Animal obj = new Dog();

obj.sound();


Output:

Bark


The runtime object determines which overridden
method executes.

This supports runtime polymorphism.


Correct Answer:

Method overriding`,

    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Deloitte-style Java/OOP Practice",
    sourceUrl: null,
  },

  {
    questionId: 1537,
    companyId: 9,
    year: 2025,
    category: "reasoning",

    question: `Find the next number in the sequence:

3, 8, 15, 24, 35, ?`,

    options: ["46", "48", "50", "52"],

    answer: "48",

    solution: `Sequence:

3, 8, 15, 24, 35


Differences:

8 - 3 = 5

15 - 8 = 7

24 - 15 = 9

35 - 24 = 11


The differences are consecutive odd numbers:

5, 7, 9, 11


Next difference:

13


Therefore:

35 + 13 = 48


Correct Answer:

48`,

    difficulty: "Easy",
    programmingLanguage: null,
    sourceType: "company-style",
    sourceName: "Deloitte-style Logical Reasoning Practice",
    sourceUrl: null,
  },

  {
    questionId: 1538,
    companyId: 9,
    year: 2025,
    category: "aptitude",

    question: `A product is marked 25% above its cost price and
sold at a discount of 10% on the marked price.

What is the profit percentage?`,

    options: ["10%", "12.5%", "15%", "17.5%"],

    answer: "12.5%",

    solution: `Assume:

Cost Price = ₹100


Marked 25% above cost:

Marked Price = ₹125


Discount:

10% of ₹125

= ₹12.50


Selling Price:

₹125 - ₹12.50

= ₹112.50


Profit:

₹112.50 - ₹100

= ₹12.50


Profit Percentage:

(12.50 / 100) × 100

= 12.5%


Correct Answer:

12.5%`,

    difficulty: "Medium",
    programmingLanguage: null,
    sourceType: "company-style",
    sourceName: "Deloitte-style Quantitative Aptitude Practice",
    sourceUrl: null,
  },

  {
    questionId: 1539,
    companyId: 9,
    year: 2025,
    category: "aptitude",

    question: `A can complete a piece of work in 12 days and
B can complete the same work in 18 days.

How many days will they take if they work together?`,

    options: ["6 days", "7.2 days", "8 days", "9 days"],

    answer: "7.2 days",

    solution: `A's one-day work:

1 / 12


B's one-day work:

1 / 18


Together:

1/12 + 1/18


LCM = 36


= 3/36 + 2/36

= 5/36


Therefore time required:

36/5

= 7.2 days


Correct Answer:

7.2 days`,

    difficulty: "Medium",
    programmingLanguage: null,
    sourceType: "company-style",
    sourceName: "Deloitte-style Quantitative Aptitude Practice",
    sourceUrl: null,
  },

  {
    questionId: 1540,
    companyId: 9,
    year: 2025,
    category: "reasoning",

    question: `Statements:

All developers are problem solvers.
Some problem solvers are managers.

Which conclusion definitely follows?`,

    options: [
      "All managers are developers",
      "Some developers are managers",
      "All developers are problem solvers",
      "No manager is a developer",
    ],

    answer: "All developers are problem solvers",

    solution: `The first statement directly says:

All developers are problem solvers.


The second statement says:

Some problem solvers are managers.


It does NOT establish that those managers
are developers.

Therefore we cannot conclude:

Some developers are managers.


We also cannot conclude:

All managers are developers.


The only conclusion guaranteed by the
given statements is:

All developers are problem solvers.


Correct Answer:

All developers are problem solvers`,

    difficulty: "Medium",
    programmingLanguage: null,
    sourceType: "company-style",
    sourceName: "Deloitte-style Logical Reasoning Practice",
    sourceUrl: null,
  },

  {
    questionId: 1541,
    companyId: 9,
    year: 2025,
    category: "programming",

    question: `What is the time complexity of binary search
on a sorted array?`,

    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],

    answer: "O(log n)",

    solution: `Binary search repeatedly divides the
search space approximately in half.

For n elements:

n
n/2
n/4
n/8
...

After k operations:

n / 2^k ≈ 1


Therefore:

2^k ≈ n

Taking logarithm:

k ≈ log₂(n)


Hence:

Time Complexity = O(log n)


Correct Answer:

O(log n)`,

    difficulty: "Easy",
    programmingLanguage: null,
    sourceType: "company-style",
    sourceName: "Deloitte-style DSA Assessment Practice",
    sourceUrl: null,
  },

  {
    questionId: 1542,
    companyId: 9,
    year: 2025,
    category: "programming",

    question: `Which data structure follows the FIFO principle?`,

    options: ["Stack", "Queue", "Binary Search Tree", "Heap"],

    answer: "Queue",

    solution: `FIFO means:

First In, First Out.


Suppose we insert:

10
20
30


A queue removes them in the order:

10
20
30


The first element inserted is the first
element removed.


Stack instead follows:

LIFO

Last In, First Out.


Correct Answer:

Queue`,

    difficulty: "Easy",
    programmingLanguage: null,
    sourceType: "company-style",
    sourceName: "Deloitte-style DSA Assessment Practice",
    sourceUrl: null,
  },

  {
    questionId: 1543,
    companyId: 9,
    year: 2025,
    category: "programming",

    question: `Which traversal of a Binary Search Tree produces
the keys in sorted order?`,

    options: ["Preorder", "Inorder", "Postorder", "Level Order"],

    answer: "Inorder",

    solution: `For a Binary Search Tree:

Left subtree contains smaller keys.

Right subtree contains larger keys.


Inorder traversal follows:

Left
Root
Right


Example:

        4
       / \\
      2   6
     / \\ / \\
    1  3 5  7


Inorder traversal:

1, 2, 3, 4, 5, 6, 7


Therefore the values appear in ascending
sorted order when the BST ordering property
is satisfied.


Correct Answer:

Inorder`,

    difficulty: "Easy",
    programmingLanguage: null,
    sourceType: "company-style",
    sourceName: "Deloitte-style DSA Assessment Practice",
    sourceUrl: null,
  },

  {
    questionId: 1544,
    companyId: 9,
    year: 2025,
    category: "programming",

    question: `Which algorithm is commonly used to find the
shortest path from a source vertex in a graph
whose edge weights are non-negative?`,

    options: [
      "Dijkstra's Algorithm",
      "Kruskal's Algorithm",
      "Prim's Algorithm",
      "DFS only",
    ],

    answer: "Dijkstra's Algorithm",

    solution: `Dijkstra's algorithm computes shortest paths
from a source when edge weights are
non-negative.

It repeatedly chooses the currently known
unprocessed vertex with the smallest distance
and relaxes its outgoing edges.


Kruskal's Algorithm:

Used for Minimum Spanning Tree.


Prim's Algorithm:

Also used for Minimum Spanning Tree.


DFS:

Does not generally compute shortest weighted
paths.


Therefore:

Correct Answer:

Dijkstra's Algorithm


Important:

Standard Dijkstra should not be used when
negative edge weights are present.`,

    difficulty: "Medium",
    programmingLanguage: null,
    sourceType: "company-style",
    sourceName: "Deloitte-style DSA Assessment Practice",
    sourceUrl: null,
  },

  {
    questionId: 1545,
    companyId: 9,
    year: 2025,
    category: "programming",

    question: `Which data structure is commonly used by
Breadth-First Search (BFS)?`,

    options: ["Stack", "Queue", "Heap only", "HashSet only"],

    answer: "Queue",

    solution: `BFS explores vertices level by level.

A queue naturally supports this behavior.


Process:

1. Add starting vertex to queue.

2. Remove the front vertex.

3. Visit its unvisited neighbors.

4. Add those neighbors to the queue.

5. Continue until the queue is empty.


Therefore BFS primarily uses:

Queue


DFS commonly uses:

Stack

or recursion.


Correct Answer:

Queue`,

    difficulty: "Easy",
    programmingLanguage: null,
    sourceType: "company-style",
    sourceName: "Deloitte-style DSA Assessment Practice",
    sourceUrl: null,
  },

  {
    questionId: 1546,
    companyId: 9,
    year: 2025,
    category: "dbms",

    question: "Which database key uniquely identifies each record in a table?",

    options: [
      "Foreign Key",
      "Primary Key",
      "Composite Attribute",
      "Derived Attribute",
    ],

    answer: "Primary Key",

    solution: `A primary key uniquely identifies each
row in a relational table.

Example:

Student

student_id | name
-----------------
101        | Amit
102        | Neha


student_id can serve as the primary key.


A primary key must satisfy the database
system's uniqueness and non-null requirements.


A foreign key is used to reference a key
in another table and establish relationships.


Correct Answer:

Primary Key`,

    difficulty: "Easy",
    programmingLanguage: null,
    sourceType: "company-style",
    sourceName: "Deloitte-style DBMS Practice",
    sourceUrl: null,
  },

  {
    questionId: 1547,
    companyId: 9,
    year: 2025,
    category: "programming",

    question: `What is the worst-case time complexity of
Merge Sort?`,

    options: ["O(n)", "O(log n)", "O(n log n)", "O(n²)"],

    answer: "O(n log n)",

    solution: `Merge Sort repeatedly divides the array
into halves.

Number of division levels:

O(log n)


At each level, merging processes a total
of approximately n elements.

Therefore:

O(n) × O(log n)

=

O(n log n)


Merge Sort maintains this complexity in:

best case
average case
worst case


Correct Answer:

O(n log n)`,

    difficulty: "Easy",
    programmingLanguage: null,
    sourceType: "company-style",
    sourceName: "Deloitte-style DSA Assessment Practice",
    sourceUrl: null,
  },

  {
    questionId: 1548,
    companyId: 9,
    year: 2025,
    category: "programming",

    question: `Which technique stores results of overlapping
subproblems so they do not need to be computed repeatedly?`,

    options: [
      "Dynamic Programming",
      "Binary Search",
      "Hash collision",
      "Round Robin",
    ],

    answer: "Dynamic Programming",

    solution: `Dynamic Programming is useful when a problem has
properties such as:

overlapping subproblems

and often:

optimal substructure


Instead of repeatedly solving the same
subproblem, its result is stored.


Two common approaches are:

1. Memoization

Top-down recursion + caching.


2. Tabulation

Bottom-up computation.


Example:

Fibonacci numbers.


Naive recursion repeatedly calculates the
same Fibonacci values.

Dynamic programming stores previously
calculated results.


Correct Answer:

Dynamic Programming`,

    difficulty: "Easy",
    programmingLanguage: null,
    sourceType: "company-style",
    sourceName: "Deloitte-style DSA Assessment Practice",
    sourceUrl: null,
  },
];

async function seedDeloitte2025Questions() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    await CompanyQuestion.deleteMany({
      companyId: 9,
      year: 2025,
    });

    console.log("Old Deloitte 2025 questions deleted");

    await CompanyQuestion.insertMany(questions);

    console.log(
      `${questions.length} Deloitte 2025 candidate-reported questions seeded successfully`,
    );
  } catch (error) {
    console.error("Error seeding Deloitte 2025 questions:", error);
  } finally {
    await mongoose.disconnect();

    console.log("MongoDB disconnected");
  }
}

seedDeloitte2025Questions();
