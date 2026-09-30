require("dotenv").config();
const mongoose = require("mongoose");
const CompanyQuestion = require("./models/CompanyQuestion");

const companyQuestions = [

  // =========================================================
  // PSEUDOCODE / BITWISE / OUTPUT Q1020-Q1034
  // =========================================================

  {
    questionId: 1020,
    companyId: 6,
    year: 2024,
    category: "pseudocode",
    question: `Predict the output:

a = 12
b = 10

PRINT a & b`,
    options: ["8", "10", "12", "14"],
    answer: "8",
    solution:
      "12 = 1100 and 10 = 1010 in binary. AND gives 1000 because only the leftmost common 1-bit remains. Binary 1000 = 8.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Capgemini 2024 bitwise pseudocode assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1021,
    companyId: 6,
    year: 2024,
    category: "pseudocode",
    question: `Predict the output:

a = 12
b = 10

PRINT a | b`,
    options: ["8", "10", "12", "14"],
    answer: "14",
    solution:
      "12 = 1100 and 10 = 1010. Bitwise OR produces 1110. Binary 1110 is decimal 14.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Capgemini 2024 bitwise pseudocode assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1022,
    companyId: 6,
    year: 2024,
    category: "pseudocode",
    question: `Predict the output:

a = 12
b = 10

PRINT a ^ b`,
    options: ["2", "4", "6", "14"],
    answer: "6",
    solution:
      "12 = 1100 and 10 = 1010. XOR produces 1 when the bits differ: 0110. Binary 0110 = 6.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Capgemini 2024 XOR pseudocode assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1023,
    companyId: 6,
    year: 2024,
    category: "pseudocode",
    question: `Predict the output:

x = 7
PRINT x << 2`,
    options: ["14", "21", "28", "32"],
    answer: "28",
    solution:
      "Left shifting a positive integer by 2 positions multiplies it by 2², assuming no overflow. Therefore 7 × 4 = 28.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Capgemini 2024 shift-operator assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1024,
    companyId: 6,
    year: 2024,
    category: "pseudocode",
    question: `Predict the output:

x = 40
PRINT x >> 3`,
    options: ["4", "5", "8", "10"],
    answer: "5",
    solution:
      "40 in binary is 101000. Shifting right by 3 positions gives 000101, which equals 5.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Capgemini 2024 shift-operator assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1025,
    companyId: 6,
    year: 2024,
    category: "pseudocode",
    question: `Predict the output:

sum = 0

FOR i = 1 TO 6
    IF i % 2 == 0
        sum = sum + i
    END IF
END FOR

PRINT sum`,
    options: ["6", "9", "12", "21"],
    answer: "12",
    solution:
      "The even values are 2, 4 and 6. Therefore sum = 2 + 4 + 6 = 12.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Capgemini 2024 loops/conditionals assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1026,
    companyId: 6,
    year: 2024,
    category: "pseudocode",
    question: `Predict the output:

count = 0

FOR i = 1 TO 4
    FOR j = 1 TO i
        count = count + 1
    END FOR
END FOR

PRINT count`,
    options: ["4", "8", "10", "16"],
    answer: "10",
    solution:
      "The inner loop executes 1 + 2 + 3 + 4 times. Therefore count = 10.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Capgemini 2024 nested-loop assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1027,
    companyId: 6,
    year: 2024,
    category: "pseudocode",
    question: `Predict the output:

arr = [3, 8, 2, 9, 5]
count = 0

FOR i = 0 TO 4
    IF arr[i] > 5
        count = count + 1
    END IF
END FOR

PRINT count`,
    options: ["1", "2", "3", "4"],
    answer: "2",
    solution:
      "Only 8 and 9 are greater than 5. Therefore count becomes 2.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Capgemini 2024 array pseudocode assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1028,
    companyId: 6,
    year: 2024,
    category: "pseudocode",
    question: `A stack is initially empty.

PUSH(5)
PUSH(10)
PUSH(15)
POP()
PUSH(20)
POP()

PRINT TOP()`,
    options: ["5", "10", "15", "20"],
    answer: "10",
    solution:
      "Stack after three pushes: [5,10,15]. POP removes 15. PUSH 20 gives [5,10,20]. The next POP removes 20. TOP is therefore 10.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Capgemini Exceller 2024 stack assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1029,
    companyId: 6,
    year: 2024,
    category: "pseudocode",
    question: `Predict the output:

FUNCTION calculate(n)
    IF n == 0
        RETURN 0
    END IF

    RETURN n + calculate(n - 1)
END FUNCTION

PRINT calculate(4)`,
    options: ["4", "6", "10", "24"],
    answer: "10",
    solution:
      "calculate(4) = 4 + 3 + 2 + 1 + calculate(0). calculate(0)=0, so the result is 10.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Capgemini 2024 recursion pseudocode assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1030,
    companyId: 6,
    year: 2024,
    category: "pseudocode",
    question: `Predict the output:

x = 10

IF x > 5
    IF x < 15
        PRINT "A"
    ELSE
        PRINT "B"
    END IF
ELSE
    PRINT "C"
END IF`,
    options: ["A", "B", "C", "No output"],
    answer: "A",
    solution:
      "10 > 5 is true, so execution enters the first IF. 10 < 15 is also true, so A is printed.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Capgemini 2024 conditional pseudocode assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1031,
    companyId: 6,
    year: 2024,
    category: "pseudocode",
    question: `Predict the output:

x = 2

SWITCH(x)
    CASE 1: PRINT "A"
    CASE 2: PRINT "B"
            BREAK
    CASE 3: PRINT "C"
    DEFAULT: PRINT "D"
END SWITCH`,
    options: ["A", "B", "BC", "BD"],
    answer: "B",
    solution:
      "x is 2, so CASE 2 executes. It prints B and then BREAK exits the switch.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Capgemini 2024 switch-statement assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1032,
    companyId: 6,
    year: 2024,
    category: "pseudocode",
    question: `Predict the output:

sum = 0

FOR i = 1 TO 6
    IF i == 4
        CONTINUE
    END IF

    sum = sum + i
END FOR

PRINT sum`,
    options: ["15", "17", "21", "25"],
    answer: "17",
    solution:
      "CONTINUE skips the addition when i=4. Therefore sum = 1+2+3+5+6 = 17.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Capgemini 2024 loop/control-flow assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1033,
    companyId: 6,
    year: 2024,
    category: "pseudocode",
    question: `Predict the output:

sum = 0

FOR i = 1 TO 10
    IF i == 5
        BREAK
    END IF

    sum = sum + i
END FOR

PRINT sum`,
    options: ["6", "10", "15", "45"],
    answer: "10",
    solution:
      "The loop stops when i reaches 5 before adding it. Therefore only 1+2+3+4 are added, producing 10.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Capgemini 2024 loop/control-flow assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1034,
    companyId: 6,
    year: 2024,
    category: "pseudocode",
    question: `Predict the output:

a = 5
b = 9

temp = a
a = b
b = temp

PRINT a, b`,
    options: ["5 9", "9 5", "9 9", "5 5"],
    answer: "9 5",
    solution:
      "temp stores 5. a receives 9, and then b receives the saved value 5. The values have been swapped.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Capgemini 2024 pseudocode assessment pattern",
    sourceUrl: null,
  },

  // =========================================================
  // TECHNICAL MCQ Q1035-Q1044
  // =========================================================

  {
    questionId: 1035,
    companyId: 6,
    year: 2024,
    category: "java",
    question:
      "Which data structure follows LIFO ordering?",
    options: ["Queue", "Stack", "Graph", "Hash table"],
    answer: "Stack",
    solution:
      "LIFO means Last In, First Out. The most recently inserted stack element is removed first.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Capgemini Exceller 2024 data-structures assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1036,
    companyId: 6,
    year: 2024,
    category: "java",
    question:
      "What is the time complexity of binary search on a sorted array?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    answer: "O(log n)",
    solution:
      "Binary search eliminates approximately half of the remaining search range after every comparison, giving O(log n) time.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Capgemini 2024 algorithms assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1037,
    companyId: 6,
    year: 2024,
    category: "java",
    question:
      "Which traversal of a Binary Search Tree returns the keys in sorted order?",
    options: ["Preorder", "Inorder", "Postorder", "Level order"],
    answer: "Inorder",
    solution:
      "Inorder visits left subtree, root and right subtree. Because BST values are ordered around each root, this produces sorted keys.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Capgemini 2024 DSA assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1038,
    companyId: 6,
    year: 2024,
    category: "java",
    question:
      "Which OOP concept allows one class to acquire accessible properties and behavior from another class?",
    options: ["Inheritance", "Compilation", "Iteration", "Normalization"],
    answer: "Inheritance",
    solution:
      "Inheritance allows a subclass to reuse and extend accessible behavior defined by a superclass.",
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Capgemini 2024 OOP assessment/interview pattern",
    sourceUrl: null,
  },

  {
    questionId: 1039,
    companyId: 6,
    year: 2024,
    category: "dbms",
    question:
      "Which database key uniquely identifies each row of a table?",
    options: ["Foreign key", "Primary key", "Duplicate key", "Partial value"],
    answer: "Primary key",
    solution:
      "A primary key provides a unique identifier for each table row and cannot contain duplicate key values.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Capgemini 2024 DBMS assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1040,
    companyId: 6,
    year: 2024,
    category: "dbms",
    question:
      "Which normal form requires attributes to contain atomic values?",
    options: ["1NF", "2NF", "3NF", "BCNF"],
    answer: "1NF",
    solution:
      "First Normal Form requires atomic attribute values and eliminates repeating groups within a row.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Capgemini 2024 database-fundamentals assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1041,
    companyId: 6,
    year: 2024,
    category: "java",
    question:
      "Which CPU scheduling algorithm gives each process a fixed time quantum in cyclic order?",
    options: ["FCFS", "Round Robin", "SJF only", "Priority only"],
    answer: "Round Robin",
    solution:
      "Round Robin places ready processes in a cyclic queue and allows each to execute for a specified time quantum.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Capgemini 2024 operating-systems technical pattern",
    sourceUrl: null,
  },

  {
    questionId: 1042,
    companyId: 6,
    year: 2024,
    category: "java",
    question:
      "Which protocol provides reliable, connection-oriented transport?",
    options: ["UDP", "TCP", "IP", "ARP"],
    answer: "TCP",
    solution:
      "TCP establishes a logical connection and provides mechanisms such as sequencing, acknowledgements and retransmission for reliable delivery.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Capgemini 2024 computer-networks assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1043,
    companyId: 6,
    year: 2024,
    category: "cloud",
    question:
      "Which cloud service model generally provides virtual machines, storage and networking infrastructure to customers?",
    options: ["IaaS", "SaaS", "HTML", "DBMS"],
    answer: "IaaS",
    solution:
      "Infrastructure as a Service provides infrastructure resources such as compute instances, storage and networking while the customer manages higher software layers.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Capgemini 2024 cloud-computing technical pattern",
    sourceUrl: null,
  },

  {
    questionId: 1044,
    companyId: 6,
    year: 2024,
    category: "java",
    question:
      "Which data structure is commonly used by Breadth-First Search?",
    options: ["Stack", "Queue", "Heap only", "Array only"],
    answer: "Queue",
    solution:
      "BFS explores nodes level by level. A queue preserves the order in which newly discovered nodes should be processed.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Capgemini 2024 DSA assessment pattern",
    sourceUrl: null,
  },

  // =========================================================
  // COGNITIVE / REASONING Q1045-Q1050
  // =========================================================

  {
    questionId: 1045,
    companyId: 6,
    year: 2024,
    category: "reasoning",
    question:
      "Find the next number: 2, 6, 12, 20, 30, ?",
    options: ["36", "40", "42", "48"],
    answer: "42",
    solution:
      "Differences are 4, 6, 8 and 10. The next difference is 12, so 30 + 12 = 42.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Capgemini 2024 cognitive/gamification preparation pattern",
    sourceUrl: null,
  },

  {
    questionId: 1046,
    companyId: 6,
    year: 2024,
    category: "reasoning",
    question:
      "A person walks 10 m north, 5 m east and 10 m south. Where is the person relative to the starting point?",
    options: ["5 m East", "5 m West", "10 m North", "15 m East"],
    answer: "5 m East",
    solution:
      "The 10 m north and 10 m south movements cancel. The remaining displacement is 5 m east.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Capgemini 2024 cognitive practice",
    sourceUrl: null,
  },

  {
    questionId: 1047,
    companyId: 6,
    year: 2024,
    category: "reasoning",
    question:
      "Riya is the sister of Amit. Amit is the son of Mohan. How is Riya related to Mohan?",
    options: ["Sister", "Daughter", "Mother", "Aunt"],
    answer: "Daughter",
    solution:
      "Amit is Mohan's son. Riya is Amit's sister, so she is also Mohan's child. Since Riya is female, she is Mohan's daughter.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Capgemini 2024 cognitive practice",
    sourceUrl: null,
  },

  {
    questionId: 1048,
    companyId: 6,
    year: 2024,
    category: "reasoning",
    question:
      "If CAT is coded as DBU by shifting each letter forward by one position, how is DOG coded?",
    options: ["EPH", "EOH", "DPH", "FQI"],
    answer: "EPH",
    solution:
      "D→E, O→P and G→H. Therefore DOG becomes EPH.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Capgemini 2024 cognitive practice",
    sourceUrl: null,
  },

  {
    questionId: 1049,
    companyId: 6,
    year: 2024,
    category: "reasoning",
    question:
      "A student is 12th from the top and 19th from the bottom. How many students are in the class?",
    options: ["29", "30", "31", "32"],
    answer: "30",
    solution:
      "Total = top rank + bottom rank - 1 = 12 + 19 - 1 = 30.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Capgemini 2024 cognitive practice",
    sourceUrl: null,
  },

  {
    questionId: 1050,
    companyId: 6,
    year: 2024,
    category: "reasoning",
    question:
      "Which is the odd one out: 9, 16, 25, 36, 48, 49?",
    options: ["25", "36", "48", "49"],
    answer: "48",
    solution:
      "9, 16, 25, 36 and 49 are perfect squares. 48 is not a perfect square.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Capgemini 2024 cognitive practice",
    sourceUrl: null,
  },

  // =========================================================
  // VERBAL / COMMUNICATION Q1051-Q1056
  // =========================================================

  {
    questionId: 1051,
    companyId: 6,
    year: 2024,
    category: "grammar",
    question:
      "Choose the grammatically correct sentence.",
    options: [
      "He don't understand the problem.",
      "He doesn't understands the problem.",
      "He doesn't understand the problem.",
      "He not understand the problem."
    ],
    answer: "He doesn't understand the problem.",
    solution:
      "After 'doesn't', the main verb stays in its base form. Therefore 'doesn't understand' is correct.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Capgemini 2024 verbal assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1052,
    companyId: 6,
    year: 2024,
    category: "grammar",
    question:
      "Choose the synonym of 'essential'.",
    options: ["Optional", "Necessary", "Unrelated", "Rare"],
    answer: "Necessary",
    solution:
      "Essential means absolutely necessary or extremely important. Therefore 'Necessary' is the closest option.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Capgemini 2024 verbal assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1053,
    companyId: 6,
    year: 2024,
    category: "grammar",
    question:
      "Choose the antonym of 'temporary'.",
    options: ["Brief", "Short", "Permanent", "Limited"],
    answer: "Permanent",
    solution:
      "Temporary means lasting for a limited period. Permanent means lasting indefinitely and is therefore its opposite.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Capgemini 2024 verbal assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1054,
    companyId: 6,
    year: 2024,
    category: "grammar",
    question:
      "Fill in the blank: She has been preparing for the interview ___ Monday.",
    options: ["for", "since", "from", "at"],
    answer: "since",
    solution:
      "'Since' is used with a specific starting point in time. Monday is the starting point.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Capgemini 2024 verbal assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1055,
    companyId: 6,
    year: 2024,
    category: "grammar",
    question:
      "Identify the incorrect word: 'Neither of the answers are correct.'",
    options: ["Neither", "answers", "are", "correct"],
    answer: "are",
    solution:
      "In formal agreement, 'neither' is singular here. The sentence should be 'Neither of the answers is correct.'",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Capgemini 2024 verbal assessment pattern",
    sourceUrl: null,
  },

  {
    questionId: 1056,
    companyId: 6,
    year: 2024,
    category: "comprehension",
    question:
      "A team introduced automated testing. Releases initially took longer while the tests were being developed, but later defects reaching production decreased. Which conclusion is best supported?",
    options: [
      "Automated testing immediately reduced release time.",
      "Automated testing initially required effort but later reduced production defects.",
      "Automated testing increased production defects.",
      "The team stopped releasing software."
    ],
    answer:
      "Automated testing initially required effort but later reduced production defects.",
    solution:
      "The passage states both facts directly: initial development slowed releases, while later fewer defects reached production.",
    difficulty: "Medium",
    sourceType: "company-style",
    sourceName: "Capgemini 2024 verbal/comprehension pattern",
    sourceUrl: null,
  },

  // =========================================================
  // CODING Q1057-Q1064
  // =========================================================

  {
    questionId: 1057,
    companyId: 6,
    year: 2024,
    category: "programming",
    question:
      "Given an integer array, find the maximum element without sorting the array.",
    options: [],
    answer:
      "Traverse the array once while maintaining the largest value encountered.",
    solution: `public class Main {
    public static void main(String[] args) {
        int[] arr = {12, 7, 25, 9, 18};

        int max = arr[0];

        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }

        System.out.println(max);
    }
}

Output:
25

Each element is compared with the current maximum.

Time complexity: O(n)
Space complexity: O(1)`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Capgemini Exceller 2024 array coding pattern",
    sourceUrl: null,
  },

  {
    questionId: 1058,
    companyId: 6,
    year: 2024,
    category: "programming",
    question:
      "Given an integer array, find the second-largest distinct element without sorting.",
    options: [],
    answer:
      "Maintain the largest and second-largest distinct values during one traversal.",
    solution: `public class Main {
    public static void main(String[] args) {
        int[] arr = {10, 25, 8, 25, 18};

        Integer largest = null;
        Integer second = null;

        for (int value : arr) {
            if (largest == null || value > largest) {
                second = largest;
                largest = value;
            } else if (
                value != largest &&
                (second == null || value > second)
            ) {
                second = value;
            }
        }

        if (second == null) {
            System.out.println("No second largest distinct element");
        } else {
            System.out.println(second);
        }
    }
}

Output:
18

Time complexity: O(n)
Space complexity: O(1)`,
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Capgemini 2024 array coding practice",
    sourceUrl: null,
  },

  {
    questionId: 1059,
    companyId: 6,
    year: 2024,
    category: "programming",
    question:
      "Given a string containing only (), {}, and [], determine whether its brackets are balanced.",
    options: [],
    answer:
      "Use a stack. Push opening brackets and match every closing bracket with the most recent opening bracket.",
    solution: `import java.util.*;

public class Main {

    static boolean isBalanced(String s) {
        Stack<Character> stack = new Stack<>();

        for (char ch : s.toCharArray()) {

            if (ch == '(' || ch == '{' || ch == '[') {
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

    public static void main(String[] args) {
        System.out.println(isBalanced("{[()]}"));
    }
}

Output:
true

The stack guarantees that closing brackets match the most
recent unmatched opening bracket.

Time complexity: O(n)
Space complexity: O(n)`,
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Capgemini Exceller 2024 stack coding pattern",
    sourceUrl: null,
  },

  {
    questionId: 1060,
    companyId: 6,
    year: 2024,
    category: "programming",
    question:
      "Given a string, reverse it without using StringBuilder.reverse().",
    options: [],
    answer:
      "Traverse the characters from the end of the string to the beginning.",
    solution: `public class Main {
    public static void main(String[] args) {
        String str = "Capgemini";

        StringBuilder result = new StringBuilder();

        for (int i = str.length() - 1; i >= 0; i--) {
            result.append(str.charAt(i));
        }

        System.out.println(result);
    }
}

Output:
inimegpaC

Time complexity: O(n)
Space complexity: O(n)`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Capgemini 2024 string coding practice",
    sourceUrl: null,
  },

  {
    questionId: 1061,
    companyId: 6,
    year: 2024,
    category: "programming",
    question:
      "Given an integer n, determine whether it is a prime number.",
    options: [],
    answer:
      "Check whether n has any divisor from 2 through sqrt(n).",
    solution: `public class Main {

    static boolean isPrime(int n) {
        if (n < 2) {
            return false;
        }

        for (int i = 2; i * i <= n; i++) {
            if (n % i == 0) {
                return false;
            }
        }

        return true;
    }

    public static void main(String[] args) {
        System.out.println(isPrime(29));
    }
}

Output:
true

A composite number must have at least one factor not greater
than its square root.

Time complexity: O(sqrt(n))
Space complexity: O(1)`,
    difficulty: "Easy",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Capgemini 2024 candidate-reported basic coding/interview pattern",
    sourceUrl: null,
  },

  {
    questionId: 1062,
    companyId: 6,
    year: 2024,
    category: "programming",
    question:
      "Given an integer array and target k, count the number of contiguous subarrays whose sum equals k.",
    options: [],
    answer:
      "Use prefix sums and a HashMap storing how often each previous prefix sum has occurred.",
    solution: `import java.util.*;

public class Main {

    static int countSubarrays(int[] arr, int k) {

        Map<Integer, Integer> frequency = new HashMap<>();

        frequency.put(0, 1);

        int prefixSum = 0;
        int count = 0;

        for (int value : arr) {
            prefixSum += value;

            count += frequency.getOrDefault(
                prefixSum - k,
                0
            );

            frequency.put(
                prefixSum,
                frequency.getOrDefault(prefixSum, 0) + 1
            );
        }

        return count;
    }

    public static void main(String[] args) {
        int[] arr = {2, 3, 5};

        System.out.println(countSubarrays(arr, 5));
    }
}

Output:
2

The valid subarrays are:
[2, 3]
[5]

If currentPrefix - oldPrefix = k, the elements between those
prefixes have sum k.

Time complexity: O(n) expected
Space complexity: O(n)`,
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName:
      "Capgemini May 2024 candidate-reported subarray-sum coding topic",
    sourceUrl: null,
  },

  {
    questionId: 1063,
    companyId: 6,
    year: 2024,
    category: "programming",
    question:
      "Given an integer array, move all zero values to the end while preserving the relative order of non-zero elements.",
    options: [],
    answer:
      "Use one pointer to place each non-zero value at the next available position and fill the remaining positions with zero.",
    solution: `import java.util.Arrays;

public class Main {

    static void moveZeros(int[] arr) {
        int index = 0;

        for (int value : arr) {
            if (value != 0) {
                arr[index++] = value;
            }
        }

        while (index < arr.length) {
            arr[index++] = 0;
        }
    }

    public static void main(String[] args) {
        int[] arr = {0, 1, 0, 3, 12};

        moveZeros(arr);

        System.out.println(Arrays.toString(arr));
    }
}

Output:
[1, 3, 12, 0, 0]

Time complexity: O(n)
Space complexity: O(1) excluding output formatting`,
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Capgemini 2024 array coding pattern",
    sourceUrl: null,
  },

  {
    questionId: 1064,
    companyId: 6,
    year: 2024,
    category: "programming",
    question:
      "Implement a stack using an integer array with push, pop and peek operations.",
    options: [],
    answer:
      "Maintain an array and a top index. Increment top on push and decrement it on pop.",
    solution: `public class Main {

    static class ArrayStack {

        private final int[] arr;
        private int top = -1;

        ArrayStack(int capacity) {
            arr = new int[capacity];
        }

        void push(int value) {
            if (top == arr.length - 1) {
                throw new RuntimeException("Stack overflow");
            }

            arr[++top] = value;
        }

        int pop() {
            if (top == -1) {
                throw new RuntimeException("Stack underflow");
            }

            return arr[top--];
        }

        int peek() {
            if (top == -1) {
                throw new RuntimeException("Stack is empty");
            }

            return arr[top];
        }
    }

    public static void main(String[] args) {

        ArrayStack stack = new ArrayStack(5);

        stack.push(10);
        stack.push(20);
        stack.push(30);

        System.out.println(stack.pop());
        System.out.println(stack.peek());
    }
}

Output:
30
20

Push, pop and peek each take O(1) time.

The array itself requires O(n) space.`,
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Capgemini Exceller 2024 stack coding pattern",
    sourceUrl: null,
  },

  // =========================================================
  // TECHNICAL INTERVIEW Q1065-Q1069
  // =========================================================

  {
    questionId: 1065,
    companyId: 6,
    year: 2024,
    category: "java",
    question:
      "Which statement correctly describes multilevel inheritance?",
    options: [
      "A class inherits from a class that itself inherits from another class",
      "One class contains only static methods",
      "Multiple unrelated classes have the same name",
      "A class cannot have a parent"
    ],
    answer:
      "A class inherits from a class that itself inherits from another class",
    solution:
      "For example, if B extends A and C extends B, then C indirectly inherits accessible members originating in A through B. A 2024 Capgemini Exceller candidate specifically reported inheritance and writing multilevel-inheritance code in the interview.",
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName:
      "Capgemini Exceller 2024 multilevel-inheritance reported interview topic",
    sourceUrl: null,
  },

  {
    questionId: 1066,
    companyId: 6,
    year: 2024,
    category: "java",
    question:
      "What is the primary role of a Java ClassLoader?",
    options: [
      "Load Java classes into the JVM when required",
      "Create SQL tables",
      "Replace the Java compiler",
      "Schedule operating-system processes"
    ],
    answer: "Load Java classes into the JVM when required",
    solution:
      "A ClassLoader locates class definitions and loads them into the JVM as needed. A 2024 Capgemini Exceller candidate specifically reported being asked about the Java ClassLoader.",
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName:
      "Capgemini Exceller 2024 ClassLoader reported interview topic",
    sourceUrl: null,
  },

  {
    questionId: 1067,
    companyId: 6,
    year: 2024,
    category: "java",
    question:
      "How are ordinary method arguments passed in Java?",
    options: [
      "Always by reference",
      "Always by value",
      "Objects by reference and primitives by value",
      "The programmer chooses at runtime"
    ],
    answer: "Always by value",
    solution:
      "Java uses pass-by-value. For an object variable, the value being copied is a reference to the object. This allows a method to mutate the referenced object's state, but Java still does not pass the caller's variable itself by reference. Call-by-reference was specifically reported as a Capgemini 2024 interview topic.",
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName:
      "Capgemini Exceller 2024 Java parameter-passing reported interview topic",
    sourceUrl: null,
  },

  {
    questionId: 1068,
    companyId: 6,
    year: 2024,
    category: "dbms",
    question:
      "Which SQL JOIN returns only rows having matching values in both joined tables?",
    options: ["INNER JOIN", "LEFT JOIN", "FULL OUTER JOIN", "CROSS JOIN"],
    answer: "INNER JOIN",
    solution:
      "INNER JOIN keeps rows satisfying the join condition in both tables. Database fundamentals and DBMS were among the technical areas reported in Capgemini's 2024 assessments/interviews.",
    difficulty: "Easy",
    sourceType: "company-style",
    sourceName: "Capgemini 2024 DBMS/SQL interview-pattern practice",
    sourceUrl: null,
  },

  {
    questionId: 1069,
    companyId: 6,
    year: 2024,
    category: "java",
    question:
      "Which OOP feature allows a subclass to provide its own implementation of an inherited instance method with the same signature?",
    options: [
      "Method overriding",
      "Method loading",
      "Normalization",
      "Indexing"
    ],
    answer: "Method overriding",
    solution:
      "Method overriding occurs when a subclass provides its own implementation of an inherited method with a compatible signature. It is fundamental to runtime polymorphism. OOP and polymorphism were among the areas candidates reported preparing for or receiving in Capgemini's 2024 interviews.",
    difficulty: "Medium",
    programmingLanguage: "Java",
    sourceType: "company-style",
    sourceName: "Capgemini 2024 OOP interview-pattern practice",
    sourceUrl: null,
  },
];

async function seedCapgemini2024Questions() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    await CompanyQuestion.deleteMany({
      companyId: 6,
      year: 2024,
    });

    console.log("Old Capgemini 2024 questions deleted");

    await CompanyQuestion.insertMany(companyQuestions);

    console.log(
      `${companyQuestions.length} Capgemini 2024 questions seeded successfully`
    );

    process.exit(0);
  } catch (error) {
    console.error(
      "Error seeding Capgemini 2024 questions:",
      error
    );

    process.exit(1);
  }
}

seedCapgemini2024Questions();