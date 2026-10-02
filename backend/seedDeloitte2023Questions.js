require("dotenv").config();
const mongoose = require("mongoose");
const CompanyQuestion = require("./models/CompanyQuestion");

const questions = [
  {
    questionId: 1620,
    companyId: 9,
    year: 2023,
    category: "aptitude",
    question:
      "A can complete a piece of work in 12 days and B can complete the same work in 18 days. In how many days can they complete it together?",
    options: ["6 days", "7.2 days", "8 days", "9 days"],
    answer: "7.2 days",
    solution: `A's one-day work = 1/12.
B's one-day work = 1/18.

Together:

1/12 + 1/18
= 3/36 + 2/36
= 5/36

Required time:

36/5 = 7.2 days.

Correct Answer: 7.2 days.`,
    difficulty: "Easy",
    programmingLanguage: null,
    sourceType: "company-style",
    sourceName: "Deloitte 2023 Aptitude Pattern",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/deloitte-interview-experience-for-cloud-tech-role-2023/",
  },

  {
    questionId: 1621,
    companyId: 9,
    year: 2023,
    category: "aptitude",
    question: "A car travels 240 km in 4 hours. What is its average speed?",
    options: ["50 km/h", "55 km/h", "60 km/h", "65 km/h"],
    answer: "60 km/h",
    solution: `Speed = Distance / Time

= 240 / 4
= 60 km/h.

Correct Answer: 60 km/h.`,
    difficulty: "Easy",
    programmingLanguage: null,
    sourceType: "company-style",
    sourceName: "Deloitte 2023 Aptitude Pattern",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/deloitte-interview-experience-for-cloud-tech-role-2023/",
  },

  {
    questionId: 1622,
    companyId: 9,
    year: 2023,
    category: "aptitude",
    question: "If 20% of a number is 80, what is the number?",
    options: ["320", "360", "400", "480"],
    answer: "400",
    solution: `Let the number be x.

20% of x = 80

0.20x = 80

x = 80 / 0.20

x = 400.

Correct Answer: 400.`,
    difficulty: "Easy",
    programmingLanguage: null,
    sourceType: "company-style",
    sourceName: "Deloitte 2023 Aptitude Practice",
    sourceUrl: null,
  },

  {
    questionId: 1623,
    companyId: 9,
    year: 2023,
    category: "aptitude",
    question:
      "The ratio of two numbers is 3:7 and their sum is 80. What is the larger number?",
    options: ["24", "48", "56", "60"],
    answer: "56",
    solution: `Total ratio parts:

3 + 7 = 10

One part:

80 / 10 = 8

Larger number:

7 × 8 = 56.

Correct Answer: 56.`,
    difficulty: "Easy",
    programmingLanguage: null,
    sourceType: "company-style",
    sourceName: "Deloitte 2023 Aptitude Practice",
    sourceUrl: null,
  },

  {
    questionId: 1624,
    companyId: 9,
    year: 2023,
    category: "aptitude",
    question:
      "An item is purchased for ₹800 and sold for ₹920. What is the profit percentage?",
    options: ["10%", "12%", "15%", "20%"],
    answer: "15%",
    solution: `Profit:

920 - 800 = 120

Profit percentage:

(120 / 800) × 100

= 15%.

Correct Answer: 15%.`,
    difficulty: "Easy",
    programmingLanguage: null,
    sourceType: "company-style",
    sourceName: "Deloitte 2023 Aptitude Practice",
    sourceUrl: null,
  },

  {
    questionId: 1625,
    companyId: 9,
    year: 2023,
    category: "reasoning",
    question: "Find the next number in the series: 1, 4, 9, 16, 25, ?",
    options: ["30", "32", "36", "49"],
    answer: "36",
    solution: `These are perfect squares:

1² = 1
2² = 4
3² = 9
4² = 16
5² = 25

Next:

6² = 36.

Correct Answer: 36.`,
    difficulty: "Easy",
    programmingLanguage: null,
    sourceType: "company-style",
    sourceName: "Deloitte 2023 Logical Reasoning Pattern",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/deloitte-interview-experience-for-cloud-tech-role-2023/",
  },

  {
    questionId: 1626,
    companyId: 9,
    year: 2023,
    category: "reasoning",
    question:
      "If CAT is coded as DBU by shifting every letter one position forward, how is DOG coded?",
    options: ["EPH", "EOH", "DPH", "FQI"],
    answer: "EPH",
    solution: `Each letter moves one position forward:

D -> E
O -> P
G -> H

Therefore:

DOG -> EPH.

Correct Answer: EPH.`,
    difficulty: "Easy",
    programmingLanguage: null,
    sourceType: "company-style",
    sourceName: "Deloitte 2023 Logical Reasoning Practice",
    sourceUrl: null,
  },

  {
    questionId: 1627,
    companyId: 9,
    year: 2023,
    category: "reasoning",
    question:
      "A person walks 5 km north and then 5 km east. In which direction is the person from the starting point?",
    options: ["North-West", "South-East", "North-East", "South-West"],
    answer: "North-East",
    solution: `The person first moves north.

Then the person moves east.

Therefore, relative to the starting point, the final position is:

North-East.

Correct Answer: North-East.`,
    difficulty: "Easy",
    programmingLanguage: null,
    sourceType: "company-style",
    sourceName: "Deloitte 2023 Logical Reasoning Practice",
    sourceUrl: null,
  },

  {
    questionId: 1628,
    companyId: 9,
    year: 2023,
    category: "reasoning",
    question:
      "All programmers are logical. Some logical people are gamers. Which conclusion is definitely true?",
    options: [
      "All gamers are programmers",
      "All programmers are logical",
      "All logical people are programmers",
      "No programmer is a gamer",
    ],
    answer: "All programmers are logical",
    solution: `The first statement directly says:

All programmers are logical.

The second statement only says that some
logical people are gamers.

It does not establish that all gamers are
programmers or that no programmer can be
a gamer.

Correct Answer:

All programmers are logical.`,
    difficulty: "Easy",
    programmingLanguage: null,
    sourceType: "company-style",
    sourceName: "Deloitte 2023 Logical Reasoning Practice",
    sourceUrl: null,
  },

  {
    questionId: 1629,
    companyId: 9,
    year: 2023,
    category: "grammar",
    question: "Choose the grammatically correct sentence.",
    options: [
      "She have completed the assignment.",
      "She has completed the assignment.",
      "She having completed the assignment.",
      "She has complete the assignment.",
    ],
    answer: "She has completed the assignment.",
    solution: `The subject "She" takes "has".

The present perfect construction is:

has + past participle

Therefore:

She has completed the assignment.

Correct Answer:

She has completed the assignment.`,
    difficulty: "Easy",
    programmingLanguage: null,
    sourceType: "company-style",
    sourceName: "Deloitte 2023 Verbal Ability Pattern",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/deloitte-interview-experience-for-cloud-tech-role-2023/",
  },

  {
    questionId: 1630,
    companyId: 9,
    year: 2023,
    category: "grammar",
    question: "Choose the word closest in meaning to 'abundant'.",
    options: ["Scarce", "Plentiful", "Tiny", "Weak"],
    answer: "Plentiful",
    solution: `Abundant means:

existing in large quantities.

Plentiful has the closest meaning.

Correct Answer: Plentiful.`,
    difficulty: "Easy",
    programmingLanguage: null,
    sourceType: "company-style",
    sourceName: "Deloitte 2023 Verbal Ability Practice",
    sourceUrl: null,
  },

  {
    questionId: 1631,
    companyId: 9,
    year: 2023,
    category: "comprehension",
    question: `Read the passage:

"Automation can reduce repetitive manual work and allow employees to focus on tasks that require judgment and creativity."

According to the passage, what is one benefit of automation?`,
    options: [
      "It increases repetitive manual work",
      "It eliminates creativity",
      "It can reduce repetitive manual work",
      "It prevents employees from making decisions",
    ],
    answer: "It can reduce repetitive manual work",
    solution: `The passage explicitly states that automation
can reduce repetitive manual work.

Therefore the correct answer is:

It can reduce repetitive manual work.`,
    difficulty: "Easy",
    programmingLanguage: null,
    sourceType: "company-style",
    sourceName: "Deloitte 2023 Verbal Ability Practice",
    sourceUrl: null,
  },

  {
    questionId: 1632,
    companyId: 9,
    year: 2023,
    category: "dbms",
    question: "What is a primary key in a relational database?",
    options: [
      "A field or set of fields that uniquely identifies each row",
      "A field that must contain duplicate values",
      "A command used to delete a table",
      "A type of operating system",
    ],
    answer: "A field or set of fields that uniquely identifies each row",
    solution: `A primary key uniquely identifies each row
in a relational table.

Primary-key values cannot be NULL.

A table has one PRIMARY KEY constraint,
although that key may consist of multiple
columns.

Correct Answer:

A field or set of fields that uniquely
identifies each row.`,
    difficulty: "Easy",
    programmingLanguage: null,
    sourceType: "company-style",
    sourceName: "Deloitte 2023 DBMS Pattern",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/deloitte-interview-experience-for-analyst-on-campus-2022-23/",
  },

  {
    questionId: 1633,
    companyId: 9,
    year: 2023,
    category: "dbms",
    question:
      "Which ACID property ensures that a transaction is completed entirely or not performed at all?",
    options: ["Atomicity", "Consistency", "Isolation", "Durability"],
    answer: "Atomicity",
    solution: `Atomicity means a transaction behaves as
one indivisible unit.

Either:

all operations succeed

or:

the transaction is rolled back.

Correct Answer: Atomicity.`,
    difficulty: "Easy",
    programmingLanguage: null,
    sourceType: "company-style",
    sourceName: "Deloitte 2023 DBMS Practice",
    sourceUrl: null,
  },

  {
    questionId: 1634,
    companyId: 9,
    year: 2023,
    category: "dbms",
    question: "What is a foreign key?",
    options: [
      "A key used to establish a relationship with a key in another or the same table",
      "A key that must always be the primary key of the same table",
      "A key used only for sorting",
      "A key that stores passwords",
    ],
    answer:
      "A key used to establish a relationship with a key in another or the same table",
    solution: `A foreign key references a candidate key,
commonly a primary key, in another table
or sometimes the same table.

It helps maintain referential integrity.

Example:

Department(id)

Employee(department_id)

Employee.department_id can reference
Department.id.

Correct Answer:

A key used to establish a relationship with
a key in another or the same table.`,
    difficulty: "Easy",
    programmingLanguage: null,
    sourceType: "company-style",
    sourceName: "Deloitte 2023 DBMS Practice",
    sourceUrl: null,
  },

  {
    questionId: 1635,
    companyId: 9,
    year: 2023,
    category: "sql",
    question: "Which SQL clause is used to filter rows before grouping?",
    options: ["WHERE", "HAVING", "ORDER BY", "GROUP BY"],
    answer: "WHERE",
    solution: `WHERE filters individual rows before
GROUP BY processing.

HAVING is normally used to filter groups
after aggregation.

Correct Answer: WHERE.`,
    difficulty: "Easy",
    programmingLanguage: null,
    sourceType: "company-style",
    sourceName: "Deloitte 2023 SQL Pattern",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/deloitte-interview-experience-for-analyst-on-campus-2022-23/",
  },

  {
    questionId: 1636,
    companyId: 9,
    year: 2023,
    category: "sql",
    question:
      "Which SQL JOIN returns only rows having matching values in both joined tables?",
    options: ["INNER JOIN", "LEFT JOIN", "CROSS JOIN", "FULL OUTER JOIN"],
    answer: "INNER JOIN",
    solution: `INNER JOIN returns rows where the join
condition matches between the tables.

Example:

SELECT *
FROM Employee e
INNER JOIN Department d
ON e.department_id = d.id;

Correct Answer: INNER JOIN.`,
    difficulty: "Easy",
    programmingLanguage: null,
    sourceType: "previous-year",
    sourceName: "Deloitte Analyst On-Campus 2022-23 Candidate Report",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/deloitte-interview-experience-for-analyst-on-campus-2022-23/",
  },

  {
    questionId: 1637,
    companyId: 9,
    year: 2023,
    category: "sql",
    question: `Write an SQL query to display all employees whose salary is greater than 50000.`,
    options: [],
    answer: "SELECT * FROM Employee WHERE salary > 50000;",
    solution: `Use WHERE to filter employees by salary.

Query:

SELECT *
FROM Employee
WHERE salary > 50000;

Only rows whose salary is greater than
50000 are returned.`,
    difficulty: "Easy",
    programmingLanguage: null,
    sourceType: "company-style",
    sourceName: "Deloitte 2023 SQL Practice",
    sourceUrl: null,
  },

  {
    questionId: 1638,
    companyId: 9,
    year: 2023,
    category: "sql",
    question: "What does GROUP BY do in SQL?",
    options: [
      "Groups rows having the same values in specified columns",
      "Deletes duplicate tables",
      "Creates a database",
      "Encrypts columns",
    ],
    answer: "Groups rows having the same values in specified columns",
    solution: `GROUP BY combines rows sharing the same
grouping values.

It is commonly used with aggregate
functions such as:

COUNT
SUM
AVG
MIN
MAX

Example:

SELECT department, COUNT(*)
FROM Employee
GROUP BY department;

Correct Answer:

Groups rows having the same values in
specified columns.`,
    difficulty: "Easy",
    programmingLanguage: null,
    sourceType: "company-style",
    sourceName: "Deloitte 2023 SQL Practice",
    sourceUrl: null,
  },

  {
    questionId: 1639,
    companyId: 9,
    year: 2023,
    category: "java",
    question:
      "Which OOP concept hides internal implementation details and exposes a controlled interface?",
    options: ["Encapsulation", "Recursion", "Compilation", "Iteration"],
    answer: "Encapsulation",
    solution: `Encapsulation bundles data and behavior
inside a class and controls access to the
internal state.

Private fields with public methods are a
common example.

Correct Answer: Encapsulation.`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Deloitte 2023 OOP Pattern",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/deloitte-interview-experience-for-analyst-on-campus-2022-23/",
  },

  {
    questionId: 1640,
    companyId: 9,
    year: 2023,
    category: "java",
    question: "What is polymorphism in object-oriented programming?",
    options: [
      "The ability to use a common interface while objects can provide different behavior",
      "Storing only integers",
      "Creating databases",
      "Deleting objects automatically",
    ],
    answer:
      "The ability to use a common interface while objects can provide different behavior",
    solution: `Polymorphism means "many forms".

A common interface or method call can
result in different behavior depending
on the actual object.

In Java, overriding is a common example
of runtime polymorphism.

Correct Answer:

The ability to use a common interface while
objects can provide different behavior.`,
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "previous-year",
    sourceName: "Deloitte Analyst On-Campus 2022-23 Candidate Report",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/deloitte-interview-experience-for-analyst-on-campus-2022-23/",
  },

  {
    questionId: 1641,
    companyId: 9,
    year: 2023,
    category: "java",
    question: "What is method overloading?",
    options: [
      "Using the same method name with different parameter lists",
      "Redefining only variables",
      "Creating multiple classes with the same name",
      "Calling a method recursively",
    ],
    answer: "Using the same method name with different parameter lists",
    solution: `Method overloading occurs when multiple
methods have the same name but different
parameter lists.

Example:

void display(int x)

void display(String x)

The compiler determines the applicable
overload from the arguments.

Correct Answer:

Using the same method name with different
parameter lists.`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "previous-year",
    sourceName: "Deloitte Analyst On-Campus 2022-23 Candidate Report",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/deloitte-interview-experience-for-analyst-on-campus-2022-23/",
  },

  {
    questionId: 1642,
    companyId: 9,
    year: 2023,
    category: "java",
    question: "What is method overriding?",
    options: [
      "A subclass provides its own implementation of an inherited method",
      "Two local variables have the same name",
      "A method has no parameters",
      "A constructor calls itself",
    ],
    answer: "A subclass provides its own implementation of an inherited method",
    solution: `In overriding, a subclass supplies its own
implementation of an inherited instance
method with a compatible signature.

Example:

class Animal {
    void sound() {}
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Bark");
    }
}

Correct Answer:

A subclass provides its own implementation
of an inherited method.`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "previous-year",
    sourceName: "Deloitte Analyst On-Campus 2022-23 Candidate Report",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/deloitte-interview-experience-for-analyst-on-campus-2022-23/",
  },

  {
    questionId: 1643,
    companyId: 9,
    year: 2023,
    category: "java",
    question: "Which Java keyword is used to inherit from a class?",
    options: ["extends", "implements", "import", "package"],
    answer: "extends",
    solution: `Java uses extends for class inheritance.

Example:

class Dog extends Animal {
}

implements is used when a class implements
an interface.

Correct Answer: extends.`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Deloitte 2023 Java Practice",
    sourceUrl: null,
  },

  {
    questionId: 1644,
    companyId: 9,
    year: 2023,
    category: "cloud",
    question: "Why do organizations use cloud platforms?",
    options: [
      "Scalability and flexible resource provisioning",
      "To eliminate all networking",
      "To prevent remote access",
      "Because cloud systems require no security controls",
    ],
    answer: "Scalability and flexible resource provisioning",
    solution: `Cloud platforms can provide advantages such
as:

Scalability
Elastic resource provisioning
Managed services
Reduced need to maintain some physical
infrastructure directly
Faster deployment

Cloud does not eliminate networking or
security responsibilities.

Correct Answer:

Scalability and flexible resource
provisioning.`,
    difficulty: "Easy",
    programmingLanguage: null,
    sourceType: "previous-year",
    sourceName: "Deloitte Analyst On-Campus 2022-23 Candidate Report",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/deloitte-interview-experience-for-analyst-on-campus-2022-23/",
  },

  {
    questionId: 1645,
    companyId: 9,
    year: 2023,
    category: "cloud",
    question:
      "Which cloud service model provides complete software applications to users over a network?",
    options: ["SaaS", "IaaS", "PaaS", "LAN"],
    answer: "SaaS",
    solution: `SaaS means:

Software as a Service.

The provider hosts and manages the
application and users access the software
as a service.

Correct Answer: SaaS.`,
    difficulty: "Easy",
    programmingLanguage: null,
    sourceType: "company-style",
    sourceName: "Deloitte 2023 Cloud Computing Pattern",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/deloitte-interview-experience-for-analyst-on-campus-2022-23/",
  },

  {
    questionId: 1646,
    companyId: 9,
    year: 2023,
    category: "cloud",
    question: "What does scalability mean in cloud computing?",
    options: [
      "The ability to adjust resources to handle changing workload requirements",
      "The inability to add resources",
      "Deleting every server",
      "Using only one computer permanently",
    ],
    answer:
      "The ability to adjust resources to handle changing workload requirements",
    solution: `Scalability means a system can accommodate
changes in workload by increasing or
decreasing available resources or capacity.

Correct Answer:

The ability to adjust resources to handle
changing workload requirements.`,
    difficulty: "Easy",
    programmingLanguage: null,
    sourceType: "company-style",
    sourceName: "Deloitte 2023 Cloud Computing Practice",
    sourceUrl: null,
  },

  {
    questionId: 1647,
    companyId: 9,
    year: 2023,
    category: "programming",
    question: `Given an integer array, find the largest element.

Example:

Input:
[4, 9, 2, 7]

Output:
9`,
    options: [],
    answer:
      "Traverse the array while maintaining the largest value found so far.",
    solution: `Java Solution:

class Solution {
    public int largest(int[] nums) {

        int max = nums[0];

        for (int value : nums) {
            if (value > max) {
                max = value;
            }
        }

        return max;
    }
}

For:

[4, 9, 2, 7]

maximum = 9.

Time Complexity: O(n)
Space Complexity: O(1).`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Deloitte 2023 Coding Pattern",
    sourceUrl: null,
  },

  {
    questionId: 1648,
    companyId: 9,
    year: 2023,
    category: "programming",
    question: `Given a string, count the number of vowels.

Example:

Input:
"deloitte"

Output:
4`,
    options: [],
    answer:
      "Traverse the string and increment a counter whenever the current character is a vowel.",
    solution: `The vowels in "deloitte" are:

e
o
i
e

Total = 4.

Java Solution:

class Solution {

    public int countVowels(String s) {

        int count = 0;

        for (char ch : s.toLowerCase().toCharArray()) {

            if (
                ch == 'a' ||
                ch == 'e' ||
                ch == 'i' ||
                ch == 'o' ||
                ch == 'u'
            ) {
                count++;
            }
        }

        return count;
    }
}

Time Complexity: O(n)
Space Complexity: O(1).`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Deloitte 2023 Coding Practice",
    sourceUrl: null,
  },

  {
    questionId: 1649,
    companyId: 9,
    year: 2023,
    category: "programming",
    question: `Given an integer n, determine whether it is prime.

Example:

Input:
29

Output:
true`,
    options: [],
    answer: "Test possible divisors from 2 through the square root of n.",
    solution: `A number is prime if it is greater than 1
and has no positive divisors other than
1 and itself.

Java Solution:

class Solution {

    public boolean isPrime(int n) {

        if (n < 2) {
            return false;
        }

        for (int i = 2; i <= n / i; i++) {

            if (n % i == 0) {
                return false;
            }
        }

        return true;
    }
}

For 29, no divisor exists from 2 through
sqrt(29).

Therefore:

true

Time Complexity: O(sqrt(n))
Space Complexity: O(1).`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Deloitte 2023 Coding Practice",
    sourceUrl: null,
  },

  {
    questionId: 1650,
    companyId: 9,
    year: 2023,
    category: "programming",
    question: `Given an integer array, calculate the sum of all even elements.

Example:

Input:
[1, 2, 3, 4, 6]

Output:
12`,
    options: [],
    answer: "Traverse the array and add values divisible by 2.",
    solution: `Even values:

2, 4, 6

Sum:

2 + 4 + 6 = 12.

Java Solution:

class Solution {

    public int evenSum(int[] nums) {

        int sum = 0;

        for (int value : nums) {

            if (value % 2 == 0) {
                sum += value;
            }
        }

        return sum;
    }
}

Time Complexity: O(n)
Space Complexity: O(1).`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Deloitte 2023 Coding Practice",
    sourceUrl: null,
  },

  {
    questionId: 1651,
    companyId: 9,
    year: 2023,
    category: "programming",
    question: `Given an array, determine whether it is sorted in non-decreasing order.

Example:

Input:
[1, 2, 2, 5, 8]

Output:
true`,
    options: [],
    answer:
      "Compare every element with the previous element and return false if a decrease is found.",
    solution: `Java Solution:

class Solution {

    public boolean isSorted(int[] nums) {

        for (int i = 1; i < nums.length; i++) {

            if (nums[i] < nums[i - 1]) {
                return false;
            }
        }

        return true;
    }
}

The array:

[1, 2, 2, 5, 8]

never decreases.

Therefore:

true

Time Complexity: O(n)
Space Complexity: O(1).`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Deloitte 2023 Coding Practice",
    sourceUrl: null,
  },

  {
    questionId: 1652,
    companyId: 9,
    year: 2023,
    category: "programming",
    question: `Given a string, count the frequency of each character.

Example:

Input:
"aabca"

Output:
a=3, b=1, c=1`,
    options: [],
    answer: "Use a HashMap to store each character and its frequency.",
    solution: `Java Solution:

import java.util.*;

class Solution {

    public Map<Character, Integer> frequency(String s) {

        Map<Character, Integer> map =
            new LinkedHashMap<>();

        for (char ch : s.toCharArray()) {

            map.put(
                ch,
                map.getOrDefault(ch, 0) + 1
            );
        }

        return map;
    }
}

For:

aabca

frequencies are:

a = 3
b = 1
c = 1

Time Complexity: O(n)
Space Complexity: O(k)

where k is the number of distinct
characters.`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Deloitte 2023 Coding Practice",
    sourceUrl: null,
  },

  {
    questionId: 1653,
    companyId: 9,
    year: 2023,
    category: "programming",
    question: `Find the factorial of a non-negative integer n.

Example:

Input:
5

Output:
120`,
    options: [],
    answer: "Multiply all integers from 1 through n.",
    solution: `5! =

5 × 4 × 3 × 2 × 1

= 120.

Java Solution:

class Solution {

    public long factorial(int n) {

        long result = 1;

        for (int i = 2; i <= n; i++) {
            result *= i;
        }

        return result;
    }
}

Time Complexity: O(n)
Space Complexity: O(1).

Note:

For large n, long will overflow and
BigInteger would be required.`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Deloitte 2023 Coding Practice",
    sourceUrl: null,
  },

  {
    questionId: 1654,
    companyId: 9,
    year: 2023,
    category: "programming",
    question: `Find the nth Fibonacci number assuming:

F(0) = 0
F(1) = 1

Example:

Input:
7

Output:
13`,
    options: [],
    answer: "Use two variables to iteratively build the Fibonacci sequence.",
    solution: `Sequence:

0, 1, 1, 2, 3, 5, 8, 13

Therefore:

F(7) = 13.

Java Solution:

class Solution {

    public int fibonacci(int n) {

        if (n <= 1) {
            return n;
        }

        int a = 0;
        int b = 1;

        for (int i = 2; i <= n; i++) {

            int next = a + b;

            a = b;
            b = next;
        }

        return b;
    }
}

Time Complexity: O(n)
Space Complexity: O(1).`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Deloitte 2023 Coding Practice",
    sourceUrl: null,
  },

  {
    questionId: 1655,
    companyId: 9,
    year: 2023,
    category: "pseudocode",
    question: `What is the output?

x = 10
y = 5

x = x + y
y = x - y
x = x - y

print x, y`,
    options: ["10 5", "5 10", "15 5", "5 15"],
    answer: "5 10",
    solution: `Initially:

x = 10
y = 5

x = x + y
x = 15

y = x - y
y = 10

x = x - y
x = 5

Output:

5 10.`,
    difficulty: "Easy",
    programmingLanguage: null,
    sourceType: "company-style",
    sourceName: "Deloitte 2023 Pseudocode Pattern",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/deloitte-interview-experience-for-analyst-on-campus-2022-23/",
  },

  {
    questionId: 1656,
    companyId: 9,
    year: 2023,
    category: "pseudocode",
    question: `What is the output?

sum = 0

for i = 1 to 5
    sum = sum + i
end for

print sum`,
    options: ["5", "10", "15", "20"],
    answer: "15",
    solution: `The loop calculates:

1 + 2 + 3 + 4 + 5

= 15.

Correct Answer: 15.`,
    difficulty: "Easy",
    programmingLanguage: null,
    sourceType: "company-style",
    sourceName: "Deloitte 2023 Pseudocode Practice",
    sourceUrl: null,
  },

  {
    questionId: 1657,
    companyId: 9,
    year: 2023,
    category: "pseudocode",
    question: `What is the output?

x = 8

if x % 2 == 0
    print "Even"
else
    print "Odd"
end if`,
    options: ["Even", "Odd", "8", "Error"],
    answer: "Even",
    solution: `8 % 2 = 0.

Therefore the condition is true.

Output:

Even.`,
    difficulty: "Easy",
    programmingLanguage: null,
    sourceType: "company-style",
    sourceName: "Deloitte 2023 Pseudocode Practice",
    sourceUrl: null,
  },

  {
    questionId: 1658,
    companyId: 9,
    year: 2023,
    category: "programming",
    question: "Which data structure follows the LIFO principle?",
    options: ["Stack", "Queue", "Graph", "Heap"],
    answer: "Stack",
    solution: `LIFO means:

Last In, First Out.

A stack follows LIFO.

Example:

push 10
push 20
push 30

The first pop returns:

30.

Correct Answer: Stack.`,
    difficulty: "Easy",
    programmingLanguage: null,
    sourceType: "company-style",
    sourceName: "Deloitte 2023 CS Fundamentals Practice",
    sourceUrl: null,
  },

  {
    questionId: 1659,
    companyId: 9,
    year: 2023,
    category: "programming",
    question:
      "What is the average-case lookup complexity of a HashMap with a good hash distribution?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    answer: "O(1)",
    solution: `Hash tables use a hash function to map
keys to storage locations.

With a good hash distribution and normal
load conditions, lookup is O(1) on average.

Worst-case behavior can be worse depending
on collisions and implementation.

Correct Answer: O(1).`,
    difficulty: "Medium",
    programmingLanguage: null,
    sourceType: "company-style",
    sourceName: "Deloitte 2023 CS Fundamentals Practice",
    sourceUrl: null,
  },

  {
    questionId: 1660,
    companyId: 9,
    year: 2023,
    category: "programming",
    question:
      "Which traversal of a Binary Search Tree returns keys in sorted order under the standard BST ordering?",
    options: ["Inorder", "Preorder", "Postorder", "Level order"],
    answer: "Inorder",
    solution: `Inorder traversal visits:

Left subtree
Root
Right subtree

For a standard BST, this visits the keys
in sorted order.

Correct Answer: Inorder.`,
    difficulty: "Easy",
    programmingLanguage: null,
    sourceType: "company-style",
    sourceName: "Deloitte 2023 CS Fundamentals Practice",
    sourceUrl: null,
  },

  {
    questionId: 1661,
    companyId: 9,
    year: 2023,
    category: "programming",
    question: "Which data structure is normally used by Depth-First Search?",
    options: ["Stack", "Queue", "Priority Queue only", "Hash table only"],
    answer: "Stack",
    solution: `DFS explores deeply along a path before
backtracking.

It can use:

an explicit stack

or:

the program's call stack through recursion.

Correct Answer: Stack.`,
    difficulty: "Easy",
    programmingLanguage: null,
    sourceType: "company-style",
    sourceName: "Deloitte 2023 CS Fundamentals Practice",
    sourceUrl: null,
  },

  {
    questionId: 1662,
    companyId: 9,
    year: 2023,
    category: "programming",
    question: "What is the worst-case time complexity of Bubble Sort?",
    options: ["O(1)", "O(log n)", "O(n log n)", "O(n²)"],
    answer: "O(n²)",
    solution: `Bubble Sort can perform approximately
n passes, with up to n comparisons per pass.

Therefore the worst-case complexity is:

O(n²).

Correct Answer: O(n²).`,
    difficulty: "Easy",
    programmingLanguage: null,
    sourceType: "company-style",
    sourceName: "Deloitte 2023 CS Fundamentals Practice",
    sourceUrl: null,
  },

  {
    questionId: 1663,
    companyId: 9,
    year: 2023,
    category: "programming",
    question:
      "Which algorithm is commonly used to find shortest paths from one source in a graph with non-negative edge weights?",
    options: [
      "Dijkstra's algorithm",
      "DFS only",
      "Bubble Sort",
      "Binary Search",
    ],
    answer: "Dijkstra's algorithm",
    solution: `Dijkstra's algorithm computes shortest
paths from a source when edge weights are
non-negative.

A priority queue is commonly used in an
efficient implementation.

Correct Answer:

Dijkstra's algorithm.`,
    difficulty: "Medium",
    programmingLanguage: null,
    sourceType: "company-style",
    sourceName: "Deloitte 2023 CS Fundamentals Practice",
    sourceUrl: null,
  },

  {
    questionId: 1664,
    companyId: 9,
    year: 2023,
    category: "programming",
    question:
      "Which technique stores solutions to overlapping subproblems so they do not need to be repeatedly recomputed?",
    options: [
      "Dynamic Programming",
      "Linear Search",
      "Hash collision",
      "Round Robin",
    ],
    answer: "Dynamic Programming",
    solution: `Dynamic Programming is useful when a
problem has properties such as:

overlapping subproblems

and often:

optimal substructure.

Previously computed results can be stored
using memoization or tabulation.

Correct Answer:

Dynamic Programming.`,
    difficulty: "Easy",
    programmingLanguage: null,
    sourceType: "company-style",
    sourceName: "Deloitte 2023 CS Fundamentals Practice",
    sourceUrl: null,
  },

  {
    questionId: 1665,
    companyId: 9,
    year: 2023,
    category: "cloud",
    question:
      "Which cloud deployment model is dedicated to a single organization?",
    options: [
      "Private Cloud",
      "Public Cloud",
      "Community forum",
      "Peer-to-peer only",
    ],
    answer: "Private Cloud",
    solution: `A private cloud is provisioned for exclusive
use by a single organization.

It may be operated internally or by a
third party.

Correct Answer: Private Cloud.`,
    difficulty: "Easy",
    programmingLanguage: null,
    sourceType: "company-style",
    sourceName: "Deloitte 2023 Cloud Computing Practice",
    sourceUrl: null,
  },

  {
    questionId: 1666,
    companyId: 9,
    year: 2023,
    category: "dbms",
    question:
      "What is normalization mainly used for in relational database design?",
    options: [
      "Reducing unnecessary redundancy and data anomalies",
      "Increasing duplicate data",
      "Replacing SQL with Java",
      "Creating operating-system processes",
    ],
    answer: "Reducing unnecessary redundancy and data anomalies",
    solution: `Normalization organizes relational data
into appropriate relations.

Its goals include reducing unnecessary
duplication and preventing undesirable:

update anomalies
insertion anomalies
deletion anomalies.

Correct Answer:

Reducing unnecessary redundancy and data
anomalies.`,
    difficulty: "Easy",
    programmingLanguage: null,
    sourceType: "company-style",
    sourceName: "Deloitte 2023 DBMS Practice",
    sourceUrl: null,
  },

  {
    questionId: 1667,
    companyId: 9,
    year: 2023,
    category: "sql",
    question:
      "Which SQL aggregate function returns the average of numeric values?",
    options: ["AVG()", "COUNT()", "MAX()", "SUM()"],
    answer: "AVG()",
    solution: `AVG() calculates the arithmetic mean of
non-NULL numeric values in the selected
expression.

Example:

SELECT AVG(salary)
FROM Employee;

Correct Answer: AVG().`,
    difficulty: "Easy",
    programmingLanguage: null,
    sourceType: "company-style",
    sourceName: "Deloitte 2023 SQL Practice",
    sourceUrl: null,
  },

  {
    questionId: 1668,
    companyId: 9,
    year: 2023,
    category: "java",
    question:
      "Can Java achieve multiple inheritance of type through interfaces?",
    options: [
      "Yes, a class can implement multiple interfaces",
      "No, Java supports only one interface",
      "Only constructors can do this",
      "Only static methods can do this",
    ],
    answer: "Yes, a class can implement multiple interfaces",
    solution: `Java does not allow a class to extend
multiple classes.

However, a class can implement multiple
interfaces.

Example:

interface A {}
interface B {}

class C implements A, B {}

Therefore Java supports multiple
inheritance of type through interfaces.

Correct Answer:

Yes, a class can implement multiple
interfaces.`,
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Deloitte 2023 OOP Practice",
    sourceUrl:
      "https://www.geeksforgeeks.org/interview-experiences/deloitte-interview-experience-for-analyst-on-campus-2022-23/",
  },

  {
    questionId: 1669,
    companyId: 9,
    year: 2023,
    category: "sql",
    question: `Write an SQL query to count the number of employees in each department.`,
    options: [],
    answer: "SELECT department, COUNT(*) FROM Employee GROUP BY department;",
    solution: `Use GROUP BY to create one group for each
department.

Then COUNT(*) counts the rows in each group.

Query:

SELECT
    department,
    COUNT(*) AS employee_count
FROM Employee
GROUP BY department;

Example output:

IT       8
HR       4
Finance  6`,
    difficulty: "Easy",
    programmingLanguage: null,
    sourceType: "company-style",
    sourceName: "Deloitte 2023 SQL Practice",
    sourceUrl: null,
  },
];

async function seedDeloitte2023Questions() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    await CompanyQuestion.deleteMany({
      companyId: 9,
      year: 2023,
    });

    console.log("Old Deloitte 2023 questions deleted");

    await CompanyQuestion.insertMany(questions);

    console.log(
      `${questions.length} Deloitte 2023 questions seeded successfully`,
    );
  } catch (error) {
    console.error("Error seeding Deloitte 2023 questions:", error);
  } finally {
    await mongoose.disconnect();

    console.log("MongoDB disconnected");
  }
}

seedDeloitte2023Questions();
