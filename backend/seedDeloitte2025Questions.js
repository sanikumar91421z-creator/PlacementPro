require("dotenv").config();
const mongoose = require("mongoose");
const CompanyQuestion = require("./models/CompanyQuestion");

const questions = [

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

    question:
      "What is the difference between SQL and NoSQL databases?",

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

    question:
      "Implement Binary Search.",

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

    question:
      "Explain the basics of full-stack development.",

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

    question:
      "Swap two numbers without using an extra variable.",

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
    sourceName:
      "Candidate-reported Deloitte USI Technology Analyst Interview",

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

    question:
      "Explain the algorithm of Quick Sort.",

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

    question:
      "What is the difference between a class and an object?",

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

    question:
      "Explain multithreading in Java.",

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

    question:
      "What is an interface in Java?",

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

    question:
      "Explain the try-catch block in Java.",

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

    question:
      "Explain SQL joins.",

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

    question:
      "Why do organizations use cloud computing?",

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

    question:
      "What is database sharding?",

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

    question:
      "What is fault tolerance in a distributed or cloud system?",

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

    question:
      "What is GKE?",

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
];

async function seedDeloitte2025Questions() {

  try {

    await mongoose.connect(
      process.env.MONGO_URI
    );

    console.log("MongoDB connected");

    await CompanyQuestion.deleteMany({
      companyId: 9,
      year: 2025,
    });

    console.log(
      "Old Deloitte 2025 questions deleted"
    );

    await CompanyQuestion.insertMany(
      questions
    );

    console.log(
      `${questions.length} Deloitte 2025 candidate-reported questions seeded successfully`
    );

  } catch (error) {

    console.error(
      "Error seeding Deloitte 2025 questions:",
      error
    );

  } finally {

    await mongoose.disconnect();

    console.log(
      "MongoDB disconnected"
    );
  }
}

seedDeloitte2025Questions();
