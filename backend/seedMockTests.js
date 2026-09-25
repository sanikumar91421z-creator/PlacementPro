require("dotenv").config();

const mongoose = require("mongoose");
const MockTest = require("./models/MockTest");

const mockTests = [
  {
    testId: 1,
    title: "Placement Aptitude Mock Test 1",
    type: "aptitude",
    description:
      "Practice quantitative aptitude, logical reasoning and verbal ability.",
    duration: 30,
    totalMarks: 30,
    questionIds: [
      1, 12, 23, 34, 45, 56, 67, 78, 89, 100, 111, 121, 131, 141, 151, 161, 171,
      172, 173, 174, 181, 191, 201, 211, 221, 222, 223, 224, 225, 226,
    ],
    isActive: true,
  },

  {
    testId: 2,
    title: "Placement Aptitude Mock Test 2",
    type: "aptitude",
    description:
      "Test your aptitude skills with a different set of placement questions.",
    duration: 30,
    totalMarks: 30,
    questionIds: [
      2, 13, 24, 35, 46, 57, 68, 79, 90, 101, 112, 122, 132, 142, 152, 162, 175,
      176, 177, 178, 182, 192, 202, 212, 227, 228, 229, 230, 183, 193,
    ],
    isActive: true,
  },

  {
    testId: 3,
    title: "Placement Aptitude Mock Test 3",
    type: "aptitude",
    description:
      "Evaluate your preparation with quantitative, reasoning and verbal questions.",
    duration: 30,
    totalMarks: 30,
    questionIds: [
      3, 14, 25, 36, 47, 58, 69, 80, 91, 102, 113, 123, 133, 143, 153, 163, 179,
      180, 114, 124, 184, 194, 204, 214, 185, 195, 205, 215, 186, 196,
    ],
    isActive: true,
  },
  {
    questionId: 37,
    topic: "string",
    title: "Check Palindrome String",
    difficulty: "Easy",
    description:
      "Given a string, return true if the string reads the same forward and backward. Otherwise, return false.",
    input: 'str = "madam"',
    output: "true",
    explanation: '"madam" reads the same from left to right and right to left.',
    constraints: [
      "1 ≤ str.length ≤ 10⁵",
      "The string contains lowercase English letters",
    ],
    starterCode: `public class Solution {
    public boolean isPalindrome(String str) {

        // Write your code here

        return false;
    }
}`,
    methodName: "isPalindrome",
    returnType: "boolean",
    parameters: ["String"],
    testCases: [
      { args: ["madam"], expected: true },
      { args: ["hello"], expected: false },
      { args: ["level"], expected: true },
    ],
  },

  {
    questionId: 38,
    topic: "string",
    title: "Count Vowels",
    difficulty: "Easy",
    description:
      "Given a string containing English letters, return the number of vowels present in the string. Consider both uppercase and lowercase vowels.",
    input: 'str = "PlacementPro"',
    output: "4",
    explanation:
      'The vowels in "PlacementPro" are a, e, e and o, so the answer is 4.',
    constraints: [
      "1 ≤ str.length ≤ 10⁵",
      "The string contains English letters",
    ],
    starterCode: `public class Solution {
    public int countVowels(String str) {

        // Write your code here

        return 0;
    }
}`,
    methodName: "countVowels",
    returnType: "int",
    parameters: ["String"],
    testCases: [
      { args: ["PlacementPro"], expected: 4 },
      { args: ["hello"], expected: 2 },
      { args: ["rhythm"], expected: 0 },
    ],
  },

  {
    questionId: 39,
    topic: "string",
    title: "Check if Two Strings are Anagrams",
    difficulty: "Easy",
    description:
      "Given two lowercase strings, return true if they are anagrams of each other. Two strings are anagrams if they contain the same characters with the same frequencies.",
    input: 'str1 = "listen", str2 = "silent"',
    output: "true",
    explanation:
      '"listen" and "silent" contain exactly the same characters with the same frequencies.',
    constraints: [
      "1 ≤ str1.length, str2.length ≤ 10⁵",
      "Both strings contain lowercase English letters",
    ],
    starterCode: `public class Solution {
    public boolean isAnagram(String str1, String str2) {

        // Write your code here

        return false;
    }
}`,
    methodName: "isAnagram",
    returnType: "boolean",
    parameters: ["String", "String"],
    testCases: [
      { args: ["listen", "silent"], expected: true },
      { args: ["hello", "world"], expected: false },
      { args: ["anagram", "nagaram"], expected: true },
    ],
  },

  {
    questionId: 40,
    topic: "string",
    title: "Remove Duplicate Characters",
    difficulty: "Easy",
    description:
      "Given a lowercase string, remove duplicate characters while keeping the first occurrence of each character in its original order.",
    input: 'str = "programming"',
    output: '"progamin"',
    explanation:
      "Repeated characters are removed while the first occurrence of every character is preserved.",
    constraints: [
      "1 ≤ str.length ≤ 10⁵",
      "The string contains lowercase English letters",
    ],
    starterCode: `public class Solution {
    public String removeDuplicates(String str) {

        // Write your code here

        return "";
    }
}`,
    methodName: "removeDuplicates",
    returnType: "String",
    parameters: ["String"],
    testCases: [
      { args: ["programming"], expected: "progamin" },
      { args: ["banana"], expected: "ban" },
      { args: ["aaaa"], expected: "a" },
    ],
  },

  {
    questionId: 41,
    topic: "string",
    title: "Find First Non-Repeating Character",
    difficulty: "Easy",
    description:
      "Given a lowercase string, return the first character that occurs exactly once. Return an empty string if no such character exists.",
    input: 'str = "leetcode"',
    output: '"l"',
    explanation:
      'The character "l" occurs only once and is the first non-repeating character.',
    constraints: [
      "1 ≤ str.length ≤ 10⁵",
      "The string contains lowercase English letters",
    ],
    starterCode: `public class Solution {
    public String firstNonRepeating(String str) {

        // Write your code here

        return "";
    }
}`,
    methodName: "firstNonRepeating",
    returnType: "String",
    parameters: ["String"],
    testCases: [
      { args: ["leetcode"], expected: "l" },
      { args: ["aabbc"], expected: "c" },
      { args: ["aabb"], expected: "" },
    ],
  },

  {
    questionId: 42,
    topic: "string",
    title: "Count Occurrences of a Character",
    difficulty: "Easy",
    description:
      "Given a string and a one-character string target, return the number of times target occurs in the string.",
    input: 'str = "banana", target = "a"',
    output: "3",
    explanation: 'The character "a" appears three times in "banana".',
    constraints: ["1 ≤ str.length ≤ 10⁵", "target.length = 1"],
    starterCode: `public class Solution {
    public int countCharacter(String str, String target) {

        // Write your code here

        return 0;
    }
}`,
    methodName: "countCharacter",
    returnType: "int",
    parameters: ["String", "String"],
    testCases: [
      { args: ["banana", "a"], expected: 3 },
      { args: ["placement", "e"], expected: 2 },
      { args: ["java", "z"], expected: 0 },
    ],
  },

  {
    questionId: 43,
    topic: "string",
    title: "Toggle Case of Characters",
    difficulty: "Easy",
    description:
      "Given a string containing English letters, convert every lowercase letter to uppercase and every uppercase letter to lowercase.",
    input: 'str = "PlacementPro"',
    output: '"pLACEMENTpRO"',
    explanation:
      "Each lowercase character becomes uppercase and each uppercase character becomes lowercase.",
    constraints: [
      "1 ≤ str.length ≤ 10⁵",
      "The string contains English letters",
    ],
    starterCode: `public class Solution {
    public String toggleCase(String str) {

        // Write your code here

        return "";
    }
}`,
    methodName: "toggleCase",
    returnType: "String",
    parameters: ["String"],
    testCases: [
      { args: ["PlacementPro"], expected: "pLACEMENTpRO" },
      { args: ["Java"], expected: "jAVA" },
      { args: ["ABCxyz"], expected: "abcXYZ" },
    ],
  },

  {
    questionId: 44,
    topic: "string",
    title: "Reverse Words in a String",
    difficulty: "Easy",
    description:
      "Given a sentence containing words separated by single spaces, return the sentence with the order of words reversed.",
    input: 'str = "I love Java"',
    output: '"Java love I"',
    explanation:
      'The word order is reversed from "I love Java" to "Java love I".',
    constraints: [
      "1 ≤ str.length ≤ 10⁵",
      "Words are separated by a single space",
    ],
    starterCode: `public class Solution {
    public String reverseWords(String str) {

        // Write your code here

        return "";
    }
}`,
    methodName: "reverseWords",
    returnType: "String",
    parameters: ["String"],
    testCases: [
      { args: ["I love Java"], expected: "Java love I" },
      { args: ["Placement Pro"], expected: "Pro Placement" },
      { args: ["hello"], expected: "hello" },
    ],
  },

  {
    questionId: 45,
    topic: "string",
    title: "Longest Common Prefix",
    difficulty: "Easy",
    description:
      "Given an array of strings, return the longest common prefix shared by all strings. Return an empty string if there is no common prefix.",
    input: 'strs = ["flower", "flow", "flight"]',
    output: '"fl"',
    explanation: 'All three strings begin with "fl".',
    constraints: [
      "1 ≤ strs.length ≤ 10⁴",
      "1 ≤ strs[i].length ≤ 200",
      "strs[i] contains lowercase English letters",
    ],
    starterCode: `public class Solution {
    public String longestCommonPrefix(String[] strs) {

        // Write your code here

        return "";
    }
}`,
    methodName: "longestCommonPrefix",
    returnType: "String",
    parameters: ["String[]"],
    testCases: [
      { args: [["flower", "flow", "flight"]], expected: "fl" },
      { args: [["dog", "racecar", "car"]], expected: "" },
      { args: [["interview", "internet", "internal"]], expected: "inter" },
    ],
  },

  {
    questionId: 46,
    topic: "string",
    title: "Check String Rotation",
    difficulty: "Medium",
    description:
      "Given two strings, return true if the second string can be obtained by rotating the first string. Both strings must have the same length.",
    input: 'str1 = "abcd", str2 = "cdab"',
    output: "true",
    explanation: '"cdab" can be obtained by rotating "abcd".',
    constraints: [
      "1 ≤ str1.length, str2.length ≤ 10⁵",
      "The strings contain English letters",
    ],
    starterCode: `public class Solution {
    public boolean isRotation(String str1, String str2) {

        // Write your code here

        return false;
    }
}`,
    methodName: "isRotation",
    returnType: "boolean",
    parameters: ["String", "String"],
    testCases: [
      { args: ["abcd", "cdab"], expected: true },
      { args: ["abcde", "cdeab"], expected: true },
      { args: ["abc", "acb"], expected: false },
    ],
  },

  {
    questionId: 47,
    topic: "string",
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    description:
      "Given a string, return the length of the longest substring that contains no repeated characters.",
    input: 'str = "abcabcbb"',
    output: "3",
    explanation:
      'The longest substring without repeating characters is "abc", which has length 3.',
    constraints: [
      "0 ≤ str.length ≤ 10⁵",
      "The string may contain letters, digits and symbols",
    ],
    starterCode: `public class Solution {
    public int longestUniqueSubstring(String str) {

        // Write your code here

        return 0;
    }
}`,
    methodName: "longestUniqueSubstring",
    returnType: "int",
    parameters: ["String"],
    testCases: [
      { args: ["abcabcbb"], expected: 3 },
      { args: ["bbbbb"], expected: 1 },
      { args: ["pwwkew"], expected: 3 },
    ],
  },

  {
    questionId: 48,
    topic: "string",
    title: "Longest Palindromic Substring",
    difficulty: "Medium",
    description:
      "Given a string, return its longest palindromic substring. For the test cases used here, the longest palindrome is unique.",
    input: 'str = "cbbd"',
    output: '"bb"',
    explanation:
      '"bb" is the longest substring that reads the same forward and backward.',
    constraints: [
      "1 ≤ str.length ≤ 1000",
      "The string contains English letters and digits",
    ],
    starterCode: `public class Solution {
    public String longestPalindrome(String str) {

        // Write your code here

        return "";
    }
}`,
    methodName: "longestPalindrome",
    returnType: "String",
    parameters: ["String"],
    testCases: [
      { args: ["cbbd"], expected: "bb" },
      { args: ["racecar"], expected: "racecar" },
      { args: ["forgeeksskeegfor"], expected: "geeksskeeg" },
    ],
  },

  {
    questionId: 49,
    topic: "string",
    title: "String Compression",
    difficulty: "Medium",
    description:
      "Given a string containing consecutive repeated characters, compress it by writing each character followed by its consecutive frequency. Characters occurring once should also be followed by 1.",
    input: 'str = "aaabbc"',
    output: '"a3b2c1"',
    explanation:
      "There are three consecutive a characters, two b characters and one c character.",
    constraints: [
      "1 ≤ str.length ≤ 10⁵",
      "The string contains English letters",
    ],
    starterCode: `public class Solution {
    public String compressString(String str) {

        // Write your code here

        return "";
    }
}`,
    methodName: "compressString",
    returnType: "String",
    parameters: ["String"],
    testCases: [
      { args: ["aaabbc"], expected: "a3b2c1" },
      { args: ["abcd"], expected: "a1b1c1d1" },
      { args: ["aaa"], expected: "a3" },
    ],
  },

  {
    questionId: 50,
    topic: "string",
    title: "Check Isomorphic Strings",
    difficulty: "Medium",
    description:
      "Given two strings, return true if characters in the first string can be replaced consistently to obtain the second string. No two different characters may map to the same character.",
    input: 'str1 = "egg", str2 = "add"',
    output: "true",
    explanation: 'The mapping e → a and g → d converts "egg" into "add".',
    constraints: [
      "1 ≤ str1.length, str2.length ≤ 5 × 10⁴",
      "The strings contain ASCII characters",
    ],
    starterCode: `public class Solution {
    public boolean isIsomorphic(String str1, String str2) {

        // Write your code here

        return false;
    }
}`,
    methodName: "isIsomorphic",
    returnType: "boolean",
    parameters: ["String", "String"],
    testCases: [
      { args: ["egg", "add"], expected: true },
      { args: ["foo", "bar"], expected: false },
      { args: ["paper", "title"], expected: true },
    ],
  },

  {
    questionId: 51,
    topic: "string",
    title: "Valid Parentheses",
    difficulty: "Easy",
    description:
      "Given a string containing only parentheses characters '(', ')', '{', '}', '[' and ']', return true if every opening bracket is closed by the same type of bracket in the correct order.",
    input: 'str = "()[]{}"',
    output: "true",
    explanation:
      "Every opening bracket has a matching closing bracket in the correct order.",
    constraints: ["1 ≤ str.length ≤ 10⁴", "str contains only (), {}, and []"],
    starterCode: `public class Solution {
    public boolean isValid(String str) {

        // Write your code here

        return false;
    }
}`,
    methodName: "isValid",
    returnType: "boolean",
    parameters: ["String"],
    testCases: [
      { args: ["()[]{}"], expected: true },
      { args: ["(]"], expected: false },
      { args: ["([{}])"], expected: true },
    ],
  },

  {
    questionId: 52,
    topic: "string",
    title: "Minimum Additions to Make Parentheses Valid",
    difficulty: "Medium",
    description:
      "Given a string containing only '(' and ')', return the minimum number of parentheses that must be added to make the string valid.",
    input: 'str = "())"',
    output: "1",
    explanation: "Adding one opening parenthesis makes the string valid.",
    constraints: ["1 ≤ str.length ≤ 10⁵", "str contains only '(' and ')'"],
    starterCode: `public class Solution {
    public int minAddToMakeValid(String str) {

        // Write your code here

        return 0;
    }
}`,
    methodName: "minAddToMakeValid",
    returnType: "int",
    parameters: ["String"],
    testCases: [
      { args: ["())"], expected: 1 },
      { args: ["((("], expected: 3 },
      { args: ["()"], expected: 0 },
    ],
  },

  {
    questionId: 53,
    topic: "string",
    title: "Roman Number to Integer",
    difficulty: "Easy",
    description: "Given a valid Roman numeral, return its integer value.",
    input: 'str = "MCMXCIV"',
    output: "1994",
    explanation:
      "M = 1000, CM = 900, XC = 90 and IV = 4, giving a total of 1994.",
    constraints: [
      "1 ≤ str.length ≤ 15",
      "str is a valid Roman numeral representing a number from 1 to 3999",
    ],
    starterCode: `public class Solution {
    public int romanToInt(String str) {

        // Write your code here

        return 0;
    }
}`,
    methodName: "romanToInt",
    returnType: "int",
    parameters: ["String"],
    testCases: [
      { args: ["III"], expected: 3 },
      { args: ["LVIII"], expected: 58 },
      { args: ["MCMXCIV"], expected: 1994 },
    ],
  },

  {
    questionId: 54,
    topic: "string",
    title: "Find First Occurrence in a String",
    difficulty: "Easy",
    description:
      "Given two strings haystack and needle, return the index of the first occurrence of needle in haystack. Return -1 if needle does not occur.",
    input: 'haystack = "sadbutsad", needle = "sad"',
    output: "0",
    explanation: '"sad" first appears starting at index 0.',
    constraints: [
      "1 ≤ haystack.length, needle.length ≤ 10⁴",
      "Both strings contain lowercase English letters",
    ],
    starterCode: `public class Solution {
    public int strStr(String haystack, String needle) {

        // Write your code here

        return -1;
    }
}`,
    methodName: "strStr",
    returnType: "int",
    parameters: ["String", "String"],
    testCases: [
      { args: ["sadbutsad", "sad"], expected: 0 },
      { args: ["leetcode", "leeto"], expected: -1 },
      { args: ["hello", "ll"], expected: 2 },
    ],
  },

  {
    questionId: 55,
    topic: "string",
    title: "Multiply Two Large Numbers Represented as Strings",
    difficulty: "Medium",
    description:
      "Given two non-negative integers represented as strings, return their product as a string. The numbers may be too large to store in standard integer types.",
    input: 'num1 = "123", num2 = "456"',
    output: '"56088"',
    explanation: "123 × 456 = 56088.",
    constraints: [
      "1 ≤ num1.length, num2.length ≤ 200",
      "num1 and num2 contain only digits",
      "num1 and num2 do not contain leading zeros except the number 0",
      "Do not use BigInteger",
    ],
    starterCode: `public class Solution {
    public String multiply(String num1, String num2) {

        // Write your code here

        return "";
    }
}`,
    methodName: "multiply",
    returnType: "String",
    parameters: ["String", "String"],
    testCases: [
      { args: ["2", "3"], expected: "6" },
      { args: ["123", "456"], expected: "56088" },
      { args: ["999", "999"], expected: "998001" },
    ],
  },
];

const seedMockTests = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    await MockTest.deleteMany({});

    console.log("Old mock tests removed");

    await MockTest.insertMany(mockTests);

    console.log(`${mockTests.length} mock tests seeded successfully`);
  } catch (error) {
    console.error("Mock test seeding failed:", error.message);
  } finally {
    await mongoose.disconnect();

    console.log("MongoDB disconnected");
  }
};

seedMockTests();
