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
