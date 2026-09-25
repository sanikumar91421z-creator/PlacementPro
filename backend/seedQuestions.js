require("dotenv").config();

const mongoose = require("mongoose");
const Question = require("./models/Question");

const questions = [
  {
    questionId: 1,
    topic: "array",
    title: "Find the Largest Element in an Array",
    difficulty: "Easy",
    description:
      "Given an array of integers, find and return the largest element present in the array.",
    input: "arr = [10, 5, 20, 8, 15]",
    output: "20",
    explanation: "20 is the largest element in the given array.",
    constraints: ["1 ≤ arr.length ≤ 10⁵", "-10⁹ ≤ arr[i] ≤ 10⁹"],
    starterCode: `public class Solution {
    public int findLargest(int[] arr) {

        // Write your code here

        return 0;
    }
}`,
    methodName: "findLargest",
    returnType: "int",
    parameters: ["int[]"],
    testCases: [
      {
        args: [[10, 5, 20, 8, 15]],
        expected: 20,
      },
      {
        args: [[5, 3, 9, 1, 7]],
        expected: 9,
      },
      {
        args: [[-10, -5, -20, -2]],
        expected: -2,
        hidden: true,
      },
    ],
  },

  {
    questionId: 2,
    topic: "array",
    title: "Find the Second Largest Element",
    difficulty: "Easy",
    description:
      "Given an array of integers, find the second largest distinct element in the array.",
    input: "arr = [10, 5, 20, 8, 15]",
    output: "15",
    explanation:
      "20 is the largest element and 15 is the second largest element.",
    constraints: ["2 ≤ arr.length ≤ 10⁵", "-10⁹ ≤ arr[i] ≤ 10⁹"],
    starterCode: `public class Solution {
    public int findSecondLargest(int[] arr) {

        // Write your code here

        return 0;
    }
}`,
    methodName: "findSecondLargest",
    returnType: "int",
    parameters: ["int[]"],
    testCases: [
      {
        args: [[10, 5, 20, 8, 15]],
        expected: 15,
      },
      {
        args: [[5, 3, 9, 1, 7]],
        expected: 7,
      },
      {
        args: [[10, 10, 5, 8]],
        expected: 8,
      },
    ],
  },

  {
    questionId: 3,
    topic: "array",
    title: "Reverse an Array",
    difficulty: "Easy",
    description:
      "Given an array of integers, reverse the elements of the array.",
    input: "arr = [1, 2, 3, 4, 5]",
    output: "[5, 4, 3, 2, 1]",
    explanation:
      "The elements of the array are reversed from their original order.",
    constraints: ["1 ≤ arr.length ≤ 10⁵", "-10⁹ ≤ arr[i] ≤ 10⁹"],
    starterCode: `public class Solution {
    public int[] reverseArray(int[] arr) {

        // Write your code here

        return arr;
    }
}`,
    methodName: "reverseArray",
    returnType: "int[]",
    parameters: ["int[]"],
    testCases: [
      {
        args: [[1, 2, 3, 4, 5]],
        expected: [5, 4, 3, 2, 1],
      },
      {
        args: [[10, 20, 30]],
        expected: [30, 20, 10],
      },
      {
        args: [[7]],
        expected: [7],
      },
    ],
  },

  {
    questionId: 4,
    topic: "array",
    title: "Remove Duplicates from Sorted Array",
    difficulty: "Easy",
    description:
      "Given a sorted array, return an array containing only the unique elements.",
    input: "arr = [1, 1, 2, 2, 3]",
    output: "[1, 2, 3]",
    explanation:
      "Duplicate values are removed while preserving the sorted order.",
    constraints: [
      "1 ≤ arr.length ≤ 10⁵",
      "The array is sorted in ascending order.",
    ],
    starterCode: `public class Solution {
    public int[] removeDuplicates(int[] arr) {

        // Write your code here

        return arr;
    }
}`,
    methodName: "removeDuplicates",
    returnType: "int[]",
    parameters: ["int[]"],
    testCases: [
      {
        args: [[1, 1, 2, 2, 3]],
        expected: [1, 2, 3],
      },
      {
        args: [[1, 1, 1, 2, 3]],
        expected: [1, 2, 3],
      },
      {
        args: [[1, 2, 3]],
        expected: [1, 2, 3],
      },
    ],
  },

  {
    questionId: 5,
    topic: "array",
    title: "Two Sum",
    difficulty: "Easy",
    description:
      "Given an array of integers and a target, return the indices of two elements whose sum equals the target.",
    input: "arr = [2, 7, 11, 15], target = 9",
    output: "[0, 1]",
    explanation: "arr[0] + arr[1] = 2 + 7 = 9.",
    constraints: ["2 ≤ arr.length ≤ 10⁵", "-10⁹ ≤ arr[i] ≤ 10⁹"],
    starterCode: `public class Solution {
    public int[] twoSum(int[] arr, int target) {

        // Write your code here

        return new int[]{};
    }
}`,
    methodName: "twoSum",
    returnType: "int[]",
    parameters: ["int[]", "int"],
    testCases: [
      {
        args: [[2, 7, 11, 15], 9],
        expected: [0, 1],
      },
      {
        args: [[3, 2, 4], 6],
        expected: [1, 2],
      },
      {
        args: [[3, 3], 6],
        expected: [0, 1],
      },
    ],
  },

  {
    questionId: 6,
    topic: "array",
    title: "Maximum Subarray",
    difficulty: "Medium",
    description:
      "Given an integer array, find the contiguous subarray with the largest sum.",
    input: "arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]",
    output: "6",
    explanation: "The subarray [4, -1, 2, 1] has the maximum sum of 6.",
    constraints: ["1 ≤ arr.length ≤ 10⁵", "-10⁴ ≤ arr[i] ≤ 10⁴"],
    starterCode: `public class Solution {
    public int maxSubArray(int[] arr) {

        // Write your code here

        return 0;
    }
}`,
    methodName: "maxSubArray",
    returnType: "int",
    parameters: ["int[]"],
    testCases: [
      {
        args: [[-2, 1, -3, 4, -1, 2, 1, -5, 4]],
        expected: 6,
      },
      {
        args: [[1]],
        expected: 1,
      },
      {
        args: [[5, 4, -1, 7, 8]],
        expected: 23,
      },
    ],
  },

  {
    questionId: 7,
    topic: "array",
    title: "Binary Search",
    difficulty: "Easy",
    description:
      "Given a sorted array and a target, return the index of the target. Return -1 if it is not present.",
    input: "arr = [1, 3, 5, 7, 9], target = 7",
    output: "3",
    explanation: "The target 7 is located at index 3.",
    constraints: [
      "1 ≤ arr.length ≤ 10⁵",
      "The array is sorted in ascending order.",
    ],
    starterCode: `public class Solution {
    public int binarySearch(int[] arr, int target) {

        // Write your code here

        return -1;
    }
}`,
    methodName: "binarySearch",
    returnType: "int",
    parameters: ["int[]", "int"],
    testCases: [
      {
        args: [[1, 3, 5, 7, 9], 7],
        expected: 3,
      },
      {
        args: [[2, 4, 6, 8, 10], 2],
        expected: 0,
      },
      {
        args: [[1, 2, 3, 4, 5], 10],
        expected: -1,
      },
    ],
  },

  {
    questionId: 8,
    topic: "array",
    title: "Find the Minimum Element",
    difficulty: "Easy",
    description: "Given an integer array, return its smallest element.",
    input: "arr = [8, 3, 10, 1, 6]",
    output: "1",
    explanation: "1 is the smallest element.",
    constraints: ["1 ≤ arr.length ≤ 10⁵"],
    starterCode: `public class Solution {
    public int findMinimum(int[] arr) {

        // Write your code here

        return 0;
    }
}`,
    methodName: "findMinimum",
    returnType: "int",
    parameters: ["int[]"],
    testCases: [
      { args: [[8, 3, 10, 1, 6]], expected: 1 },
      { args: [[-5, -2, -10]], expected: -10 },
      { args: [[7]], expected: 7 },
    ],
  },

  {
    questionId: 9,
    topic: "array",
    title: "Sum of Array Elements",
    difficulty: "Easy",
    description: "Given an integer array, return the sum of all its elements.",
    input: "arr = [1, 2, 3, 4, 5]",
    output: "15",
    explanation: "1 + 2 + 3 + 4 + 5 = 15.",
    constraints: ["1 ≤ arr.length ≤ 10⁵"],
    starterCode: `public class Solution {
    public int arraySum(int[] arr) {

        // Write your code here

        return 0;
    }
}`,
    methodName: "arraySum",
    returnType: "int",
    parameters: ["int[]"],
    testCases: [
      { args: [[1, 2, 3, 4, 5]], expected: 15 },
      { args: [[10, 20]], expected: 30 },
      { args: [[-5, 5]], expected: 0 },
    ],
  },

  {
    questionId: 10,
    topic: "array",
    title: "Count Even Numbers",
    difficulty: "Easy",
    description: "Given an integer array, return the number of even elements.",
    input: "arr = [1, 2, 3, 4, 6]",
    output: "3",
    explanation: "The even elements are 2, 4 and 6.",
    constraints: ["1 ≤ arr.length ≤ 10⁵"],
    starterCode: `public class Solution {
    public int countEven(int[] arr) {

        // Write your code here

        return 0;
    }
}`,
    methodName: "countEven",
    returnType: "int",
    parameters: ["int[]"],
    testCases: [
      { args: [[1, 2, 3, 4, 6]], expected: 3 },
      { args: [[1, 3, 5]], expected: 0 },
      { args: [[2, 4, 8, 10]], expected: 4 },
    ],
  },

  {
    questionId: 11,
    topic: "array",
    title: "Check if Array is Sorted",
    difficulty: "Easy",
    description:
      "Return true if the array is sorted in non-decreasing order, otherwise return false.",
    input: "arr = [1, 2, 2, 4, 5]",
    output: "true",
    explanation:
      "Every element is greater than or equal to the previous element.",
    constraints: ["1 ≤ arr.length ≤ 10⁵"],
    starterCode: `public class Solution {
    public boolean isSorted(int[] arr) {

        // Write your code here

        return false;
    }
}`,
    methodName: "isSorted",
    returnType: "boolean",
    parameters: ["int[]"],
    testCases: [
      { args: [[1, 2, 2, 4, 5]], expected: true },
      { args: [[5, 4, 3]], expected: false },
      { args: [[1]], expected: true },
    ],
  },

  {
    questionId: 12,
    topic: "array",
    title: "Linear Search",
    difficulty: "Easy",
    description:
      "Given an array and a target, return the index of the first occurrence of the target or -1 if it is not found.",
    input: "arr = [4, 2, 7, 1], target = 7",
    output: "2",
    explanation: "7 occurs at index 2.",
    constraints: ["1 ≤ arr.length ≤ 10⁵"],
    starterCode: `public class Solution {
    public int linearSearch(int[] arr, int target) {

        // Write your code here

        return -1;
    }
}`,
    methodName: "linearSearch",
    returnType: "int",
    parameters: ["int[]", "int"],
    testCases: [
      { args: [[4, 2, 7, 1], 7], expected: 2 },
      { args: [[5, 6, 7], 10], expected: -1 },
      { args: [[8, 8, 9], 8], expected: 0 },
    ],
  },

  {
    questionId: 13,
    topic: "array",
    title: "Move Zeroes to End",
    difficulty: "Easy",
    description:
      "Move all zeroes to the end of the array while maintaining the relative order of non-zero elements.",
    input: "arr = [0, 1, 0, 3, 12]",
    output: "[1, 3, 12, 0, 0]",
    explanation:
      "The non-zero elements keep their order and all zeroes are moved to the end.",
    constraints: ["1 ≤ arr.length ≤ 10⁵"],
    starterCode: `public class Solution {
    public int[] moveZeroes(int[] arr) {

        // Write your code here

        return arr;
    }
}`,
    methodName: "moveZeroes",
    returnType: "int[]",
    parameters: ["int[]"],
    testCases: [
      {
        args: [[0, 1, 0, 3, 12]],
        expected: [1, 3, 12, 0, 0],
      },
      {
        args: [[0, 0, 1]],
        expected: [1, 0, 0],
      },
      {
        args: [[1, 2, 3]],
        expected: [1, 2, 3],
      },
    ],
  },

  {
    questionId: 14,
    topic: "array",
    title: "Rotate Array Left by One",
    difficulty: "Easy",
    description: "Rotate the array to the left by one position.",
    input: "arr = [1, 2, 3, 4, 5]",
    output: "[2, 3, 4, 5, 1]",
    explanation: "The first element is moved to the end.",
    constraints: ["1 ≤ arr.length ≤ 10⁵"],
    starterCode: `public class Solution {
    public int[] rotateLeft(int[] arr) {

        // Write your code here

        return arr;
    }
}`,
    methodName: "rotateLeft",
    returnType: "int[]",
    parameters: ["int[]"],
    testCases: [
      {
        args: [[1, 2, 3, 4, 5]],
        expected: [2, 3, 4, 5, 1],
      },
      {
        args: [[10, 20, 30]],
        expected: [20, 30, 10],
      },
      {
        args: [[7]],
        expected: [7],
      },
    ],
  },

  {
    questionId: 15,
    topic: "array",
    title: "Find Missing Number",
    difficulty: "Easy",
    description:
      "Given an array containing distinct numbers from 0 to n with one number missing, return the missing number.",
    input: "arr = [3, 0, 1]",
    output: "2",
    explanation: "The numbers should contain 0, 1, 2 and 3, so 2 is missing.",
    constraints: ["1 ≤ arr.length ≤ 10⁵"],
    starterCode: `public class Solution {
    public int missingNumber(int[] arr) {

        // Write your code here

        return 0;
    }
}`,
    methodName: "missingNumber",
    returnType: "int",
    parameters: ["int[]"],
    testCases: [
      { args: [[3, 0, 1]], expected: 2 },
      { args: [[0, 1]], expected: 2 },
      { args: [[9, 6, 4, 2, 3, 5, 7, 0, 1]], expected: 8 },
    ],
  },

  {
    questionId: 16,
    topic: "array",
    title: "Find Single Number",
    difficulty: "Easy",
    description:
      "Every element appears twice except one. Return the element that appears only once.",
    input: "arr = [4, 1, 2, 1, 2]",
    output: "4",
    explanation: "1 and 2 appear twice, while 4 appears once.",
    constraints: ["1 ≤ arr.length ≤ 10⁵"],
    starterCode: `public class Solution {
    public int singleNumber(int[] arr) {

        // Write your code here

        return 0;
    }
}`,
    methodName: "singleNumber",
    returnType: "int",
    parameters: ["int[]"],
    testCases: [
      { args: [[4, 1, 2, 1, 2]], expected: 4 },
      { args: [[2, 2, 1]], expected: 1 },
      { args: [[7]], expected: 7 },
    ],
  },

  {
    questionId: 17,
    topic: "array",
    title: "Best Time to Buy and Sell Stock",
    difficulty: "Easy",
    description:
      "Given an array where each element represents a stock price on a day, return the maximum profit from one buy and one sell.",
    input: "prices = [7, 1, 5, 3, 6, 4]",
    output: "5",
    explanation: "Buy at 1 and sell at 6 for a maximum profit of 5.",
    constraints: ["1 ≤ prices.length ≤ 10⁵"],
    starterCode: `public class Solution {
    public int maxProfit(int[] prices) {

        // Write your code here

        return 0;
    }
}`,
    methodName: "maxProfit",
    returnType: "int",
    parameters: ["int[]"],
    testCases: [
      {
        args: [[7, 1, 5, 3, 6, 4]],
        expected: 5,
      },
      {
        args: [[7, 6, 4, 3, 1]],
        expected: 0,
      },
      {
        args: [[1, 2]],
        expected: 1,
      },
    ],
  },

  {
    questionId: 18,
    topic: "array",
    title: "Maximum Consecutive Ones",
    difficulty: "Easy",
    description:
      "Given a binary array, return the maximum number of consecutive 1s.",
    input: "arr = [1, 1, 0, 1, 1, 1]",
    output: "3",
    explanation: "The longest consecutive sequence of 1s has length 3.",
    constraints: ["1 ≤ arr.length ≤ 10⁵"],
    starterCode: `public class Solution {
    public int maxConsecutiveOnes(int[] arr) {

        // Write your code here

        return 0;
    }
}`,
    methodName: "maxConsecutiveOnes",
    returnType: "int",
    parameters: ["int[]"],
    testCases: [
      {
        args: [[1, 1, 0, 1, 1, 1]],
        expected: 3,
      },
      {
        args: [[1, 0, 1, 1, 0, 1]],
        expected: 2,
      },
      {
        args: [[0, 0, 0]],
        expected: 0,
      },
    ],
  },

  {
    questionId: 19,
    topic: "array",
    title: "Majority Element",
    difficulty: "Medium",
    description:
      "Given an array, return the element that appears more than n/2 times.",
    input: "arr = [2, 2, 1, 1, 1, 2, 2]",
    output: "2",
    explanation: "2 appears four times in an array of length seven.",
    constraints: ["1 ≤ arr.length ≤ 10⁵", "A majority element always exists."],
    starterCode: `public class Solution {
    public int majorityElement(int[] arr) {

        // Write your code here

        return 0;
    }
}`,
    methodName: "majorityElement",
    returnType: "int",
    parameters: ["int[]"],
    testCases: [
      {
        args: [[2, 2, 1, 1, 1, 2, 2]],
        expected: 2,
      },
      {
        args: [[3, 2, 3]],
        expected: 3,
      },
      {
        args: [[1]],
        expected: 1,
      },
    ],
  },

  {
    questionId: 20,
    topic: "array",
    title: "Maximum Product of Two Elements",
    difficulty: "Medium",
    description:
      "Given an integer array, return the maximum product that can be obtained from two different elements.",
    input: "arr = [3, 4, 5, 2]",
    output: "20",
    explanation: "The maximum product is 4 × 5 = 20.",
    constraints: ["2 ≤ arr.length ≤ 10⁵", "-10⁴ ≤ arr[i] ≤ 10⁴"],
    starterCode: `public class Solution {
    public int maxProduct(int[] arr) {

        // Write your code here

        return 0;
    }
}`,
    methodName: "maxProduct",
    returnType: "int",
    parameters: ["int[]"],
    testCases: [
      {
        args: [[3, 4, 5, 2]],
        expected: 20,
      },
      {
        args: [[-10, -3, 5, 6]],
        expected: 30,
      },
      {
        args: [[1, 2]],
        expected: 2,
      },
    ],
  },
  {
    questionId: 21,
    topic: "array",
    title: "Split Array and Add First Part to End",
    difficulty: "Easy",
    description:
      "Given an integer array and an integer k, split the array after the first k elements and move those elements to the end while maintaining their relative order.",
    input: "arr = [1, 2, 3, 4, 5], k = 2",
    output: "[3, 4, 5, 1, 2]",
    explanation:
      "The first 2 elements are [1, 2]. Move them to the end to get [3, 4, 5, 1, 2].",
    constraints: [
      "1 ≤ arr.length ≤ 10⁵",
      "0 ≤ k < arr.length",
      "-10⁴ ≤ arr[i] ≤ 10⁴",
    ],
    starterCode: `public class Solution {
    public int[] splitAndAdd(int[] arr, int k) {

        // Write your code here

        return new int[0];
    }
}`,
    methodName: "splitAndAdd",
    returnType: "int[]",
    parameters: ["int[]", "int"],
    testCases: [
      {
        args: [[1, 2, 3, 4, 5], 2],
        expected: [3, 4, 5, 1, 2],
      },
      {
        args: [[10, 20, 30, 40, 50, 60], 3],
        expected: [40, 50, 60, 10, 20, 30],
      },
      {
        args: [[1, 2, 3], 1],
        expected: [2, 3, 1],
      },
    ],
  },

  {
    questionId: 22,
    topic: "array",
    title: "Separate Positive and Negative Numbers",
    difficulty: "Easy",
    description:
      "Given an integer array, rearrange it so that all negative numbers appear first followed by all non-negative numbers. Preserve the relative order of the negative and non-negative elements.",
    input: "arr = [-1, 2, -3, 4, -5]",
    output: "[-1, -3, -5, 2, 4]",
    explanation:
      "The negative elements are [-1, -3, -5] and the non-negative elements are [2, 4]. Place the negative elements first while preserving relative order.",
    constraints: ["1 ≤ arr.length ≤ 10⁵", "-10⁴ ≤ arr[i] ≤ 10⁴"],
    starterCode: `public class Solution {
    public int[] separateNegativePositive(int[] arr) {

        // Write your code here

        return new int[0];
    }
}`,
    methodName: "separateNegativePositive",
    returnType: "int[]",
    parameters: ["int[]"],
    testCases: [
      {
        args: [[-1, 2, -3, 4, -5]],
        expected: [-1, -3, -5, 2, 4],
      },
      {
        args: [[1, 2, 3, -1, -2]],
        expected: [-1, -2, 1, 2, 3],
      },
      {
        args: [[-5, -2, 4, 7]],
        expected: [-5, -2, 4, 7],
      },
    ],
  },

  {
    questionId: 23,
    topic: "array",
    title: "Check if an Array is Palindrome",
    difficulty: "Easy",
    description:
      "Given an integer array, determine whether it is a palindrome. An array is a palindrome if it reads the same from left to right and right to left.",
    input: "arr = [1, 2, 3, 2, 1]",
    output: "true",
    explanation:
      "The array reads [1, 2, 3, 2, 1] from both directions, so it is a palindrome.",
    constraints: ["1 ≤ arr.length ≤ 10⁵", "-10⁴ ≤ arr[i] ≤ 10⁴"],
    starterCode: `public class Solution {
    public boolean isPalindrome(int[] arr) {

        // Write your code here

        return false;
    }
}`,
    methodName: "isPalindrome",
    returnType: "boolean",
    parameters: ["int[]"],
    testCases: [
      {
        args: [[1, 2, 3, 2, 1]],
        expected: true,
      },
      {
        args: [[1, 2, 3, 4]],
        expected: false,
      },
      {
        args: [[5, 5]],
        expected: true,
      },
    ],
  },

  {
    questionId: 24,
    topic: "array",
    title: "Find Maximum and Minimum with Minimum Comparisons",
    difficulty: "Medium",
    description:
      "Given an integer array, return its minimum and maximum elements while using as few comparisons as possible. Return the result as [minimum, maximum].",
    input: "arr = [3, 5, 1, 8, 2]",
    output: "[1, 8]",
    explanation: "The minimum element is 1 and the maximum element is 8.",
    constraints: ["1 ≤ arr.length ≤ 10⁵", "-10⁴ ≤ arr[i] ≤ 10⁴"],
    starterCode: `public class Solution {
    public int[] findMinMax(int[] arr) {

        // Write your code here

        return new int[0];
    }
}`,
    methodName: "findMinMax",
    returnType: "int[]",
    parameters: ["int[]"],
    testCases: [
      {
        args: [[3, 5, 1, 8, 2]],
        expected: [1, 8],
      },
      {
        args: [[10, 20, -5, 30, 7]],
        expected: [-5, 30],
      },
      {
        args: [[4, 4, 4]],
        expected: [4, 4],
      },
    ],
  },

  {
    questionId: 25,
    topic: "array",
    title: "Minimum Difference Between Any Two Elements",
    difficulty: "Easy",
    description:
      "Given an integer array containing at least two elements, find the minimum absolute difference between any two different elements.",
    input: "arr = [1, 5, 3, 19, 18, 25]",
    output: "1",
    explanation: "The minimum difference is between 18 and 19, which is 1.",
    constraints: ["2 ≤ arr.length ≤ 10⁵", "-10⁴ ≤ arr[i] ≤ 10⁴"],
    starterCode: `public class Solution {
    public int minimumDifference(int[] arr) {

        // Write your code here

        return 0;
    }
}`,
    methodName: "minimumDifference",
    returnType: "int",
    parameters: ["int[]"],
    testCases: [
      {
        args: [[1, 5, 3, 19, 18, 25]],
        expected: 1,
      },
      {
        args: [[10, 20, 30, 40]],
        expected: 10,
      },
      {
        args: [[5, 5, 10]],
        expected: 0,
      },
    ],
  },

  {
    questionId: 26,
    topic: "array",
    title: "Next Greater Element on Right",
    difficulty: "Medium",
    description:
      "For every element in the array, find the first element to its right that is strictly greater than it. If no greater element exists, use -1.",
    input: "arr = [4, 5, 2, 10, 8]",
    output: "[5, 10, 10, -1, -1]",
    explanation:
      "The next greater elements for 4, 5 and 2 are 5, 10 and 10 respectively. No greater element exists to the right of 10 or 8.",
    constraints: ["1 ≤ arr.length ≤ 10⁵", "-10⁴ ≤ arr[i] ≤ 10⁴"],
    starterCode: `public class Solution {
    public int[] nextGreaterRight(int[] arr) {

        // Write your code here

        return new int[0];
    }
}`,
    methodName: "nextGreaterRight",
    returnType: "int[]",
    parameters: ["int[]"],
    testCases: [
      {
        args: [[4, 5, 2, 10, 8]],
        expected: [5, 10, 10, -1, -1],
      },
      {
        args: [[1, 3, 2, 4]],
        expected: [3, 4, 4, -1],
      },
      {
        args: [[5, 4, 3, 2, 1]],
        expected: [-1, -1, -1, -1, -1],
      },
    ],
  },

  {
    questionId: 27,
    topic: "array",
    title: "Previous Greater or Equal Element on Left",
    difficulty: "Medium",
    description:
      "For every element in the array, find the nearest element on its left whose value is greater than or equal to the current element. If no such element exists, use -1.",
    input: "arr = [10, 5, 11, 6, 6]",
    output: "[-1, 10, -1, 11, 6]",
    explanation:
      "For 5, the nearest greater or equal element on the left is 10. For the last 6, the nearest greater or equal element is the previous 6.",
    constraints: ["1 ≤ arr.length ≤ 10⁵", "-10⁴ ≤ arr[i] ≤ 10⁴"],
    starterCode: `public class Solution {
    public int[] previousGreaterOrEqual(int[] arr) {

        // Write your code here

        return new int[0];
    }
}`,
    methodName: "previousGreaterOrEqual",
    returnType: "int[]",
    parameters: ["int[]"],
    testCases: [
      {
        args: [[10, 5, 11, 6, 6]],
        expected: [-1, 10, -1, 11, 6],
      },
      {
        args: [[5, 4, 3, 2]],
        expected: [-1, 5, 4, 3],
      },
      {
        args: [[1, 2, 3, 4]],
        expected: [-1, -1, -1, -1],
      },
    ],
  },

  {
    questionId: 28,
    topic: "array",
    title: "Nearest Smaller Element on Left",
    difficulty: "Medium",
    description:
      "For every element in the array, find the nearest element on its left that is strictly smaller than the current element. If no such element exists, use -1.",
    input: "arr = [1, 6, 4, 10, 2, 5]",
    output: "[-1, 1, 1, 4, 1, 2]",
    explanation:
      "For each position, the result contains the nearest smaller value found on its left. If none exists, the result is -1.",
    constraints: ["1 ≤ arr.length ≤ 10⁵", "-10⁴ ≤ arr[i] ≤ 10⁴"],
    starterCode: `public class Solution {
    public int[] nearestSmallerLeft(int[] arr) {

        // Write your code here

        return new int[0];
    }
}`,
    methodName: "nearestSmallerLeft",
    returnType: "int[]",
    parameters: ["int[]"],
    testCases: [
      {
        args: [[1, 6, 4, 10, 2, 5]],
        expected: [-1, 1, 1, 4, 1, 2],
      },
      {
        args: [[5, 4, 3, 2, 1]],
        expected: [-1, -1, -1, -1, -1],
      },
      {
        args: [[1, 2, 3, 4]],
        expected: [-1, 1, 2, 3],
      },
    ],
  },

  {
    questionId: 29,
    topic: "array",
    title: "Nearest Smaller Element on Right",
    difficulty: "Medium",
    description:
      "For every element in the array, find the nearest element on its right that is strictly smaller than the current element. If no such element exists, use -1.",
    input: "arr = [4, 8, 5, 2, 25]",
    output: "[2, 5, 2, -1, -1]",
    explanation:
      "For 4, the nearest smaller element on the right is 2. For 8 it is 5, and for 5 it is 2.",
    constraints: ["1 ≤ arr.length ≤ 10⁵", "-10⁴ ≤ arr[i] ≤ 10⁴"],
    starterCode: `public class Solution {
    public int[] nearestSmallerRight(int[] arr) {

        // Write your code here

        return new int[0];
    }
}`,
    methodName: "nearestSmallerRight",
    returnType: "int[]",
    parameters: ["int[]"],
    testCases: [
      {
        args: [[4, 8, 5, 2, 25]],
        expected: [2, 5, 2, -1, -1],
      },
      {
        args: [[1, 2, 3, 4]],
        expected: [-1, -1, -1, -1],
      },
      {
        args: [[5, 4, 3, 2, 1]],
        expected: [4, 3, 2, 1, -1],
      },
    ],
  },

  {
    questionId: 30,
    topic: "array",
    title: "K-th Smallest Element in an Unsorted Array",
    difficulty: "Medium",
    description:
      "Given an unsorted integer array and an integer k, return the k-th smallest element in the array. k is 1-indexed.",
    input: "arr = [7, 10, 4, 3, 20, 15], k = 3",
    output: "7",
    explanation:
      "After arranging the elements in increasing order, we get [3, 4, 7, 10, 15, 20]. The 3rd smallest element is 7.",
    constraints: [
      "1 ≤ arr.length ≤ 10⁵",
      "1 ≤ k ≤ arr.length",
      "-10⁴ ≤ arr[i] ≤ 10⁴",
    ],
    starterCode: `public class Solution {
    public int kthSmallest(int[] arr, int k) {

        // Write your code here

        return 0;
    }
}`,
    methodName: "kthSmallest",
    returnType: "int",
    parameters: ["int[]", "int"],
    testCases: [
      {
        args: [[7, 10, 4, 3, 20, 15], 3],
        expected: 7,
      },
      {
        args: [[12, 3, 5, 7, 19], 2],
        expected: 5,
      },
      {
        args: [[1, 2, 3, 4, 5], 5],
        expected: 5,
      },
    ],
  },

  {
    questionId: 31,
    topic: "array",
    title: "Sort an Array of 0s, 1s and 2s",
    difficulty: "Medium",
    description:
      "Given an array containing only 0s, 1s and 2s, sort the array in ascending order without using a general-purpose sorting algorithm.",
    input: "arr = [0, 2, 1, 2, 0]",
    output: "[0, 0, 1, 2, 2]",
    explanation:
      "After arranging all 0s first, followed by 1s and then 2s, the array becomes [0, 0, 1, 2, 2].",
    constraints: ["1 ≤ arr.length ≤ 10⁵", "arr[i] is 0, 1 or 2"],
    starterCode: `public class Solution {
    public int[] sort012(int[] arr) {

        // Write your code here

        return arr;
    }
}`,
    methodName: "sort012",
    returnType: "int[]",
    parameters: ["int[]"],
    testCases: [
      {
        args: [[0, 2, 1, 2, 0]],
        expected: [0, 0, 1, 2, 2],
      },
      {
        args: [[2, 2, 1, 0, 1, 0]],
        expected: [0, 0, 1, 1, 2, 2],
      },
      {
        args: [[2, 1, 0]],
        expected: [0, 1, 2],
      },
    ],
  },

  {
    questionId: 32,
    topic: "array",
    title: "Merge Two Sorted Arrays",
    difficulty: "Easy",
    description:
      "Given two integer arrays sorted in non-decreasing order, merge them into a single sorted array containing all elements from both arrays.",
    input: "arr1 = [1, 3, 5], arr2 = [2, 4, 6]",
    output: "[1, 2, 3, 4, 5, 6]",
    explanation:
      "Combining the two sorted arrays in sorted order gives [1, 2, 3, 4, 5, 6].",
    constraints: [
      "0 ≤ arr1.length, arr2.length ≤ 10⁵",
      "1 ≤ arr1.length + arr2.length",
      "-10⁴ ≤ arr1[i], arr2[i] ≤ 10⁴",
      "Both arrays are sorted in non-decreasing order",
    ],
    starterCode: `public class Solution {
    public int[] mergeSortedArrays(int[] arr1, int[] arr2) {

        // Write your code here

        return new int[0];
    }
}`,
    methodName: "mergeSortedArrays",
    returnType: "int[]",
    parameters: ["int[]", "int[]"],
    testCases: [
      {
        args: [
          [1, 3, 5],
          [2, 4, 6],
        ],
        expected: [1, 2, 3, 4, 5, 6],
      },
      {
        args: [
          [1, 2, 4],
          [1, 3, 5],
        ],
        expected: [1, 1, 2, 3, 4, 5],
      },
      {
        args: [
          [-5, 0, 5],
          [-3, 2, 10],
        ],
        expected: [-5, -3, 0, 2, 5, 10],
      },
    ],
  },

  {
    questionId: 33,
    topic: "array",
    title: "Union of Two Arrays",
    difficulty: "Medium",
    description:
      "Given two integer arrays, return their union in ascending order. The union must contain each distinct element exactly once.",
    input: "arr1 = [1, 2, 3, 4], arr2 = [3, 4, 5, 6]",
    output: "[1, 2, 3, 4, 5, 6]",
    explanation:
      "The elements 3 and 4 occur in both arrays, but each value appears only once in the union.",
    constraints: [
      "0 ≤ arr1.length, arr2.length ≤ 10⁵",
      "1 ≤ arr1.length + arr2.length",
      "-10⁴ ≤ arr1[i], arr2[i] ≤ 10⁴",
    ],
    starterCode: `public class Solution {
    public int[] unionArrays(int[] arr1, int[] arr2) {

        // Write your code here

        return new int[0];
    }
}`,
    methodName: "unionArrays",
    returnType: "int[]",
    parameters: ["int[]", "int[]"],
    testCases: [
      {
        args: [
          [1, 2, 3, 4],
          [3, 4, 5, 6],
        ],
        expected: [1, 2, 3, 4, 5, 6],
      },
      {
        args: [
          [1, 1, 2, 3],
          [2, 3, 4],
        ],
        expected: [1, 2, 3, 4],
      },
      {
        args: [
          [1, 2],
          [3, 4],
        ],
        expected: [1, 2, 3, 4],
      },
    ],
  },

  {
    questionId: 34,
    topic: "array",
    title: "Common Elements in Three Sorted Arrays",
    difficulty: "Medium",
    description:
      "Given three integer arrays sorted in non-decreasing order, return the distinct elements that are present in all three arrays in ascending order.",
    input:
      "arr1 = [1, 5, 10, 20, 40, 80], arr2 = [6, 7, 20, 80, 100], arr3 = [3, 4, 15, 20, 30, 70, 80, 120]",
    output: "[20, 80]",
    explanation:
      "20 and 80 are the only values that occur in all three sorted arrays.",
    constraints: [
      "1 ≤ arr1.length, arr2.length, arr3.length ≤ 10⁵",
      "-10⁴ ≤ arr1[i], arr2[i], arr3[i] ≤ 10⁴",
      "All three arrays are sorted in non-decreasing order",
    ],
    starterCode: `public class Solution {
    public int[] commonElements(int[] arr1, int[] arr2, int[] arr3) {

        // Write your code here

        return new int[0];
    }
}`,
    methodName: "commonElements",
    returnType: "int[]",
    parameters: ["int[]", "int[]", "int[]"],
    testCases: [
      {
        args: [
          [1, 5, 10, 20, 40, 80],
          [6, 7, 20, 80, 100],
          [3, 4, 15, 20, 30, 70, 80, 120],
        ],
        expected: [20, 80],
      },
      {
        args: [
          [1, 2, 3, 4],
          [2, 3, 5],
          [2, 3, 6],
        ],
        expected: [2, 3],
      },
      {
        args: [
          [1, 2],
          [3, 4],
          [5, 6],
        ],
        expected: [],
      },
    ],
  },

  {
    questionId: 35,
    topic: "array",
    title: "Cyclically Rotate Array by One",
    difficulty: "Easy",
    description:
      "Given an integer array, cyclically rotate it to the right by one position. The last element should become the first element and all other elements should shift one position to the right.",
    input: "arr = [1, 2, 3, 4, 5]",
    output: "[5, 1, 2, 3, 4]",
    explanation:
      "The last element 5 is moved to the beginning and every other element is shifted one position to the right.",
    constraints: ["1 ≤ arr.length ≤ 10⁵", "-10⁴ ≤ arr[i] ≤ 10⁴"],
    starterCode: `public class Solution {
    public int[] cyclicRotateRight(int[] arr) {

        // Write your code here

        return arr;
    }
}`,
    methodName: "cyclicRotateRight",
    returnType: "int[]",
    parameters: ["int[]"],
    testCases: [
      {
        args: [[1, 2, 3, 4, 5]],
        expected: [5, 1, 2, 3, 4],
      },
      {
        args: [[10, 20, 30]],
        expected: [30, 10, 20],
      },
      {
        args: [[1]],
        expected: [1],
      },
    ],
  },
  {
    questionId: 36,
    topic: "string",
    title: "Reverse a String",
    difficulty: "Easy",
    description:
      "Given a string, return the string with its characters in reverse order.",
    input: 'str = "hello"',
    output: '"olleh"',
    explanation: 'Reversing the characters of "hello" gives "olleh".',
    constraints: ["1 ≤ str.length ≤ 10⁵", "str contains printable characters"],
    starterCode: `public class Solution {
    public String reverseString(String str) {

        // Write your code here

        return "";
    }
}`,
    methodName: "reverseString",
    returnType: "String",
    parameters: ["String"],
    testCases: [
      {
        args: ["hello"],
        expected: "olleh",
      },
      {
        args: ["PlacementPro"],
        expected: "orPtnemecalP",
      },
      {
        args: ["Java"],
        expected: "avaJ",
      },
    ],
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
  {
    questionId: 56,
    topic: "linked-list",
    title: "Reverse a Linked List",
    difficulty: "Easy",

    description:
      "Given the head of a singly linked list, reverse the linked list and return the new head.",

    input: "head = [1, 2, 3, 4, 5]",

    output: "[5, 4, 3, 2, 1]",

    explanation:
      "After reversing the linked list, the last node becomes the first node and the first node becomes the last node.",

    constraints: ["1 ≤ number of nodes ≤ 10⁴", "-10⁵ ≤ Node.val ≤ 10⁵"],

    starterCode: `public class Solution {
    public ListNode reverseList(ListNode head) {

        // Write your code here

        return null;
    }
}`,

    methodName: "reverseList",

    returnType: "ListNode",

    parameters: ["ListNode"],

    testCases: [
      {
        args: [[1, 2, 3, 4, 5]],
        expected: [5, 4, 3, 2, 1],
      },
      {
        args: [[1, 2]],
        expected: [2, 1],
      },
      {
        args: [[7]],
        expected: [7],
      },
    ],
  },
  {
    questionId: 57,
    topic: "linked-list",
    title: "Find Middle of Linked List",
    difficulty: "Easy",
    description:
      "Given the head of a singly linked list, return the value of the middle node. If the list has two middle nodes, return the value of the second middle node.",
    input: "head = [1, 2, 3, 4, 5]",
    output: "3",
    explanation: "The middle node of the linked list is the node with value 3.",
    constraints: ["1 ≤ number of nodes ≤ 10⁴", "-10⁵ ≤ Node.val ≤ 10⁵"],
    starterCode: `public class Solution {
    public int middleNode(ListNode head) {

        // Write your code here

        return 0;
    }
}`,
    methodName: "middleNode",
    returnType: "int",
    parameters: ["ListNode"],
    testCases: [
      {
        args: [[1, 2, 3, 4, 5]],
        expected: 3,
      },
      {
        args: [[1, 2, 3, 4, 5, 6]],
        expected: 4,
      },
      {
        args: [[10]],
        expected: 10,
      },
    ],
  },

  {
    questionId: 58,
    topic: "linked-list",
    title: "Count Nodes in Linked List",
    difficulty: "Easy",
    description:
      "Given the head of a singly linked list, return the total number of nodes in the linked list.",
    input: "head = [1, 2, 3, 4, 5]",
    output: "5",
    explanation: "The linked list contains 5 nodes.",
    constraints: ["0 ≤ number of nodes ≤ 10⁴", "-10⁵ ≤ Node.val ≤ 10⁵"],
    starterCode: `public class Solution {
    public int countNodes(ListNode head) {

        // Write your code here

        return 0;
    }
}`,
    methodName: "countNodes",
    returnType: "int",
    parameters: ["ListNode"],
    testCases: [
      {
        args: [[1, 2, 3, 4, 5]],
        expected: 5,
      },
      {
        args: [[10, 20]],
        expected: 2,
      },
      {
        args: [[]],
        expected: 0,
      },
    ],
  },

  {
    questionId: 59,
    topic: "linked-list",
    title: "Search in Linked List",
    difficulty: "Easy",
    description:
      "Given the head of a singly linked list and an integer target, return true if the target exists in the linked list. Otherwise, return false.",
    input: "head = [10, 20, 30, 40], target = 30",
    output: "true",
    explanation: "The value 30 is present in the linked list.",
    constraints: ["0 ≤ number of nodes ≤ 10⁴", "-10⁵ ≤ Node.val, target ≤ 10⁵"],
    starterCode: `public class Solution {
    public boolean search(ListNode head, int target) {

        // Write your code here

        return false;
    }
}`,
    methodName: "search",
    returnType: "boolean",
    parameters: ["ListNode", "int"],
    testCases: [
      {
        args: [[10, 20, 30, 40], 30],
        expected: true,
      },
      {
        args: [[1, 2, 3, 4], 7],
        expected: false,
      },
      {
        args: [[5], 5],
        expected: true,
      },
    ],
  },

  {
    questionId: 60,
    topic: "linked-list",
    title: "Remove Duplicates from Sorted List",
    difficulty: "Easy",
    description:
      "Given the head of a sorted singly linked list, remove duplicate values so that every value appears only once. Return the head of the updated list.",
    input: "head = [1, 1, 2, 3, 3]",
    output: "[1, 2, 3]",
    explanation: "The duplicate values 1 and 3 are removed.",
    constraints: [
      "0 ≤ number of nodes ≤ 10⁴",
      "-10⁵ ≤ Node.val ≤ 10⁵",
      "The linked list is sorted in non-decreasing order.",
    ],
    starterCode: `public class Solution {
    public ListNode deleteDuplicates(ListNode head) {

        // Write your code here

        return head;
    }
}`,
    methodName: "deleteDuplicates",
    returnType: "ListNode",
    parameters: ["ListNode"],
    testCases: [
      {
        args: [[1, 1, 2, 3, 3]],
        expected: [1, 2, 3],
      },
      {
        args: [[1, 1, 1]],
        expected: [1],
      },
      {
        args: [[1, 2, 3]],
        expected: [1, 2, 3],
      },
    ],
  },

  {
    questionId: 61,
    topic: "linked-list",
    title: "Merge Two Sorted Lists",
    difficulty: "Easy",
    description:
      "Given the heads of two sorted singly linked lists, merge them into one sorted linked list and return its head.",
    input: "list1 = [1, 2, 4], list2 = [1, 3, 4]",
    output: "[1, 1, 2, 3, 4, 4]",
    explanation:
      "The two sorted linked lists are merged while maintaining sorted order.",
    constraints: [
      "0 ≤ number of nodes in each list ≤ 10⁴",
      "-10⁵ ≤ Node.val ≤ 10⁵",
      "Both linked lists are sorted in non-decreasing order.",
    ],
    starterCode: `public class Solution {
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {

        // Write your code here

        return null;
    }
}`,
    methodName: "mergeTwoLists",
    returnType: "ListNode",
    parameters: ["ListNode", "ListNode"],
    testCases: [
      {
        args: [
          [1, 2, 4],
          [1, 3, 4],
        ],
        expected: [1, 1, 2, 3, 4, 4],
      },
      {
        args: [[], [0]],
        expected: [0],
      },
      {
        args: [
          [2, 5],
          [1, 3, 6],
        ],
        expected: [1, 2, 3, 5, 6],
      },
    ],
  },

  {
    questionId: 62,
    topic: "linked-list",
    title: "Delete Nth Node From End",
    difficulty: "Medium",
    description:
      "Given the head of a singly linked list and an integer n, remove the nth node from the end of the list and return the updated head.",
    input: "head = [1, 2, 3, 4, 5], n = 2",
    output: "[1, 2, 3, 5]",
    explanation: "The second node from the end has value 4, so it is removed.",
    constraints: [
      "1 ≤ number of nodes ≤ 10⁴",
      "1 ≤ n ≤ number of nodes",
      "-10⁵ ≤ Node.val ≤ 10⁵",
    ],
    starterCode: `public class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {

        // Write your code here

        return head;
    }
}`,
    methodName: "removeNthFromEnd",
    returnType: "ListNode",
    parameters: ["ListNode", "int"],
    testCases: [
      {
        args: [[1, 2, 3, 4, 5], 2],
        expected: [1, 2, 3, 5],
      },
      {
        args: [[1], 1],
        expected: [],
      },
      {
        args: [[1, 2], 1],
        expected: [1],
      },
    ],
  },

  {
    questionId: 63,
    topic: "linked-list",
    title: "Rotate List Right",
    difficulty: "Medium",
    description:
      "Given the head of a singly linked list and an integer k, rotate the list to the right by k positions and return the new head.",
    input: "head = [1, 2, 3, 4, 5], k = 2",
    output: "[4, 5, 1, 2, 3]",
    explanation:
      "Rotating the list two positions to the right moves 4 and 5 to the beginning.",
    constraints: [
      "0 ≤ number of nodes ≤ 10⁴",
      "0 ≤ k ≤ 10⁹",
      "-10⁵ ≤ Node.val ≤ 10⁵",
    ],
    starterCode: `public class Solution {
    public ListNode rotateRight(ListNode head, int k) {

        // Write your code here

        return head;
    }
}`,
    methodName: "rotateRight",
    returnType: "ListNode",
    parameters: ["ListNode", "int"],
    testCases: [
      {
        args: [[1, 2, 3, 4, 5], 2],
        expected: [4, 5, 1, 2, 3],
      },
      {
        args: [[0, 1, 2], 4],
        expected: [2, 0, 1],
      },
      {
        args: [[1], 10],
        expected: [1],
      },
    ],
  },

  {
    questionId: 64,
    topic: "linked-list",
    title: "Odd Even Linked List",
    difficulty: "Medium",
    description:
      "Given the head of a singly linked list, group all nodes at odd positions together followed by all nodes at even positions. Return the reordered list.",
    input: "head = [1, 2, 3, 4, 5]",
    output: "[1, 3, 5, 2, 4]",
    explanation:
      "Nodes at positions 1, 3 and 5 come first, followed by nodes at positions 2 and 4.",
    constraints: ["0 ≤ number of nodes ≤ 10⁴", "-10⁵ ≤ Node.val ≤ 10⁵"],
    starterCode: `public class Solution {
    public ListNode oddEvenList(ListNode head) {

        // Write your code here

        return head;
    }
}`,
    methodName: "oddEvenList",
    returnType: "ListNode",
    parameters: ["ListNode"],
    testCases: [
      {
        args: [[1, 2, 3, 4, 5]],
        expected: [1, 3, 5, 2, 4],
      },
      {
        args: [[2, 1, 3, 5, 6, 4, 7]],
        expected: [2, 3, 6, 7, 1, 5, 4],
      },
      {
        args: [[1, 2]],
        expected: [1, 2],
      },
    ],
  },

  {
    questionId: 65,
    topic: "linked-list",
    title: "Partition List",
    difficulty: "Medium",
    description:
      "Given the head of a singly linked list and an integer x, rearrange the list so that all nodes with values less than x appear before nodes with values greater than or equal to x. Preserve the original relative order within both groups.",
    input: "head = [1, 4, 3, 2, 5, 2], x = 3",
    output: "[1, 2, 2, 4, 3, 5]",
    explanation:
      "Nodes smaller than 3 are placed first while preserving their relative order.",
    constraints: ["0 ≤ number of nodes ≤ 10⁴", "-10⁵ ≤ Node.val, x ≤ 10⁵"],
    starterCode: `public class Solution {
    public ListNode partition(ListNode head, int x) {

        // Write your code here

        return head;
    }
}`,
    methodName: "partition",
    returnType: "ListNode",
    parameters: ["ListNode", "int"],
    testCases: [
      {
        args: [[1, 4, 3, 2, 5, 2], 3],
        expected: [1, 2, 2, 4, 3, 5],
      },
      {
        args: [[2, 1], 2],
        expected: [1, 2],
      },
      {
        args: [[1, 2, 3], 4],
        expected: [1, 2, 3],
      },
    ],
  },

  {
    questionId: 66,
    topic: "linked-list",
    title: "Remove Linked List Elements",
    difficulty: "Easy",
    description:
      "Given the head of a singly linked list and an integer value, remove all nodes whose value is equal to the given value and return the updated head.",
    input: "head = [1, 2, 6, 3, 4, 5, 6], value = 6",
    output: "[1, 2, 3, 4, 5]",
    explanation: "All nodes containing the value 6 are removed.",
    constraints: ["0 ≤ number of nodes ≤ 10⁴", "-10⁵ ≤ Node.val, value ≤ 10⁵"],
    starterCode: `public class Solution {
    public ListNode removeElements(ListNode head, int value) {

        // Write your code here

        return head;
    }
}`,
    methodName: "removeElements",
    returnType: "ListNode",
    parameters: ["ListNode", "int"],
    testCases: [
      {
        args: [[1, 2, 6, 3, 4, 5, 6], 6],
        expected: [1, 2, 3, 4, 5],
      },
      {
        args: [[7, 7, 7, 7], 7],
        expected: [],
      },
      {
        args: [[1, 2, 3], 4],
        expected: [1, 2, 3],
      },
    ],
  },

  {
    questionId: 67,
    topic: "linked-list",
    title: "Swap Nodes in Pairs",
    difficulty: "Medium",
    description:
      "Given the head of a singly linked list, swap every two adjacent nodes and return the head of the modified list.",
    input: "head = [1, 2, 3, 4]",
    output: "[2, 1, 4, 3]",
    explanation: "Nodes 1 and 2 are swapped, and nodes 3 and 4 are swapped.",
    constraints: ["0 ≤ number of nodes ≤ 10⁴", "-10⁵ ≤ Node.val ≤ 10⁵"],
    starterCode: `public class Solution {
    public ListNode swapPairs(ListNode head) {

        // Write your code here

        return head;
    }
}`,
    methodName: "swapPairs",
    returnType: "ListNode",
    parameters: ["ListNode"],
    testCases: [
      {
        args: [[1, 2, 3, 4]],
        expected: [2, 1, 4, 3],
      },
      {
        args: [[1, 2, 3]],
        expected: [2, 1, 3],
      },
      {
        args: [[1]],
        expected: [1],
      },
    ],
  },

  {
    questionId: 68,
    topic: "linked-list",
    title: "Reverse Nodes in K Group",
    difficulty: "Hard",
    description:
      "Given the head of a singly linked list and an integer k, reverse the nodes of the list k at a time. If the number of remaining nodes is less than k, leave those nodes unchanged.",
    input: "head = [1, 2, 3, 4, 5], k = 2",
    output: "[2, 1, 4, 3, 5]",
    explanation:
      "Each complete group of 2 nodes is reversed. The final node remains unchanged.",
    constraints: [
      "1 ≤ number of nodes ≤ 10⁴",
      "1 ≤ k ≤ number of nodes",
      "-10⁵ ≤ Node.val ≤ 10⁵",
    ],
    starterCode: `public class Solution {
    public ListNode reverseKGroup(ListNode head, int k) {

        // Write your code here

        return head;
    }
}`,
    methodName: "reverseKGroup",
    returnType: "ListNode",
    parameters: ["ListNode", "int"],
    testCases: [
      {
        args: [[1, 2, 3, 4, 5], 2],
        expected: [2, 1, 4, 3, 5],
      },
      {
        args: [[1, 2, 3, 4, 5], 3],
        expected: [3, 2, 1, 4, 5],
      },
      {
        args: [[1, 2], 2],
        expected: [2, 1],
      },
    ],
  },

  {
    questionId: 69,
    topic: "linked-list",
    title: "Palindrome Linked List",
    difficulty: "Medium",
    description:
      "Given the head of a singly linked list, return true if the sequence of node values forms a palindrome. Otherwise, return false.",
    input: "head = [1, 2, 2, 1]",
    output: "true",
    explanation:
      "The values read the same from left to right and right to left.",
    constraints: ["1 ≤ number of nodes ≤ 10⁴", "-10⁵ ≤ Node.val ≤ 10⁵"],
    starterCode: `public class Solution {
    public boolean isPalindrome(ListNode head) {

        // Write your code here

        return false;
    }
}`,
    methodName: "isPalindrome",
    returnType: "boolean",
    parameters: ["ListNode"],
    testCases: [
      {
        args: [[1, 2, 2, 1]],
        expected: true,
      },
      {
        args: [[1, 2]],
        expected: false,
      },
      {
        args: [[1, 2, 3, 2, 1]],
        expected: true,
      },
    ],
  },

  {
    questionId: 70,
    topic: "linked-list",
    title: "Add Two Numbers",
    difficulty: "Medium",
    description:
      "Two non-negative integers are represented by two linked lists in reverse digit order. Add the two numbers and return the sum as a linked list in the same reverse digit order.",
    input: "list1 = [2, 4, 3], list2 = [5, 6, 4]",
    output: "[7, 0, 8]",
    explanation:
      "The lists represent 342 and 465. Their sum is 807, represented as [7, 0, 8].",
    constraints: [
      "1 ≤ number of nodes in each list ≤ 100",
      "0 ≤ Node.val ≤ 9",
      "The numbers do not contain leading zeroes except for the number 0 itself.",
    ],
    starterCode: `public class Solution {
    public ListNode addTwoNumbers(ListNode list1, ListNode list2) {

        // Write your code here

        return null;
    }
}`,
    methodName: "addTwoNumbers",
    returnType: "ListNode",
    parameters: ["ListNode", "ListNode"],
    testCases: [
      {
        args: [
          [2, 4, 3],
          [5, 6, 4],
        ],
        expected: [7, 0, 8],
      },
      {
        args: [[0], [0]],
        expected: [0],
      },
      {
        args: [[9, 9, 9], [1]],
        expected: [0, 0, 0, 1],
      },
    ],
  },

  {
    questionId: 71,
    topic: "linked-list",
    title: "Sort Linked List",
    difficulty: "Medium",
    description:
      "Given the head of a singly linked list, sort the list in ascending order and return the head of the sorted list.",
    input: "head = [4, 2, 1, 3]",
    output: "[1, 2, 3, 4]",
    explanation: "The linked list is sorted in ascending order.",
    constraints: ["0 ≤ number of nodes ≤ 10⁴", "-10⁵ ≤ Node.val ≤ 10⁵"],
    starterCode: `public class Solution {
    public ListNode sortList(ListNode head) {

        // Write your code here

        return head;
    }
}`,
    methodName: "sortList",
    returnType: "ListNode",
    parameters: ["ListNode"],
    testCases: [
      {
        args: [[4, 2, 1, 3]],
        expected: [1, 2, 3, 4],
      },
      {
        args: [[-1, 5, 3, 4, 0]],
        expected: [-1, 0, 3, 4, 5],
      },
      {
        args: [[2, 1]],
        expected: [1, 2],
      },
    ],
  },

  {
    questionId: 72,
    topic: "linked-list",
    title: "Reorder Linked List",
    difficulty: "Medium",
    description:
      "Given the head of a singly linked list L0 → L1 → ... → Ln, reorder it to L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → ... and return the head of the reordered list.",
    input: "head = [1, 2, 3, 4]",
    output: "[1, 4, 2, 3]",
    explanation:
      "The first node is followed by the last node, then the second node, then the second-last node.",
    constraints: ["1 ≤ number of nodes ≤ 10⁴", "-10⁵ ≤ Node.val ≤ 10⁵"],
    starterCode: `public class Solution {
    public ListNode reorderList(ListNode head) {

        // Write your code here

        return head;
    }
}`,
    methodName: "reorderList",
    returnType: "ListNode",
    parameters: ["ListNode"],
    testCases: [
      {
        args: [[1, 2, 3, 4]],
        expected: [1, 4, 2, 3],
      },
      {
        args: [[1, 2, 3, 4, 5]],
        expected: [1, 5, 2, 4, 3],
      },
      {
        args: [[1, 2]],
        expected: [1, 2],
      },
    ],
  },

  {
    questionId: 73,
    topic: "linked-list",
    title: "Delete Middle Node",
    difficulty: "Medium",
    description:
      "Given the head of a singly linked list, delete its middle node and return the updated head. For an even number of nodes, the second of the two middle nodes is considered the middle node.",
    input: "head = [1, 3, 4, 7, 1, 2, 6]",
    output: "[1, 3, 4, 1, 2, 6]",
    explanation:
      "The list contains 7 nodes, so the middle node is the fourth node with value 7.",
    constraints: ["1 ≤ number of nodes ≤ 10⁴", "-10⁵ ≤ Node.val ≤ 10⁵"],
    starterCode: `public class Solution {
    public ListNode deleteMiddle(ListNode head) {

        // Write your code here

        return head;
    }
}`,
    methodName: "deleteMiddle",
    returnType: "ListNode",
    parameters: ["ListNode"],
    testCases: [
      {
        args: [[1, 3, 4, 7, 1, 2, 6]],
        expected: [1, 3, 4, 1, 2, 6],
      },
      {
        args: [[1, 2, 3, 4]],
        expected: [1, 2, 4],
      },
      {
        args: [[1]],
        expected: [],
      },
    ],
  },

  {
    questionId: 74,
    topic: "linked-list",
    title: "Maximum Twin Sum",
    difficulty: "Medium",
    description:
      "Given a linked list with an even number of nodes, pair the first node with the last node, the second node with the second-last node, and so on. Return the maximum sum among all such twin pairs.",
    input: "head = [5, 4, 2, 1]",
    output: "6",
    explanation:
      "The twin sums are 5 + 1 = 6 and 4 + 2 = 6. Therefore, the maximum twin sum is 6.",
    constraints: [
      "2 ≤ number of nodes ≤ 10⁴",
      "The number of nodes is even.",
      "0 ≤ Node.val ≤ 10⁵",
    ],
    starterCode: `public class Solution {
    public int pairSum(ListNode head) {

        // Write your code here

        return 0;
    }
}`,
    methodName: "pairSum",
    returnType: "int",
    parameters: ["ListNode"],
    testCases: [
      {
        args: [[5, 4, 2, 1]],
        expected: 6,
      },
      {
        args: [[4, 2, 2, 3]],
        expected: 7,
      },
      {
        args: [[1, 100000]],
        expected: 100001,
      },
    ],
  },

  {
    questionId: 75,
    topic: "linked-list",
    title: "Insert into Sorted Linked List",
    difficulty: "Easy",
    description:
      "Given the head of a singly linked list sorted in non-decreasing order and an integer value, insert the value at the correct position and return the head of the updated sorted list.",
    input: "head = [1, 3, 5, 7], value = 4",
    output: "[1, 3, 4, 5, 7]",
    explanation:
      "The value 4 is inserted between 3 and 5 to maintain sorted order.",
    constraints: [
      "0 ≤ number of nodes ≤ 10⁴",
      "-10⁵ ≤ Node.val, value ≤ 10⁵",
      "The linked list is sorted in non-decreasing order.",
    ],
    starterCode: `public class Solution {
    public ListNode insertSorted(ListNode head, int value) {

        // Write your code here

        return head;
    }
}`,
    methodName: "insertSorted",
    returnType: "ListNode",
    parameters: ["ListNode", "int"],
    testCases: [
      {
        args: [[1, 3, 5, 7], 4],
        expected: [1, 3, 4, 5, 7],
      },
      {
        args: [[2, 4, 6], 1],
        expected: [1, 2, 4, 6],
      },
      {
        args: [[], 5],
        expected: [5],
      },
    ],
  },
];

async function seedQuestions() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    for (const question of questions) {
      await Question.findOneAndUpdate(
        {
          questionId: question.questionId,
        },
        question,
        {
          upsert: true,
          new: true,
          runValidators: true,
        },
      );

      console.log(`Question ${question.questionId} saved`);
    }

    console.log("All questions seeded successfully");
  } catch (error) {
    console.error("Seeding failed:", error.message);
  } finally {
    await mongoose.disconnect();

    console.log("MongoDB disconnected");
  }
}

seedQuestions();
