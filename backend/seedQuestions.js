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
  {
    questionId: 76,
    topic: "stack",
    title: "Valid Parentheses",
    difficulty: "Easy",

    description:
      "Given a string containing only the characters '(', ')', '{', '}', '[' and ']', determine whether the input string is valid. A string is valid if every opening bracket is closed by the same type of bracket and the brackets are closed in the correct order.",

    input: 's = "({[]})"',

    output: "true",

    explanation:
      "Each opening bracket has a matching closing bracket in the correct order, so the string is valid.",

    constraints: [
      "1 ≤ s.length ≤ 10⁴",
      "s contains only the characters '(', ')', '{', '}', '[' and ']'.",
    ],

    starterCode: `public class Solution {
    public boolean isValid(String s) {

        // Write your code here

        return false;
    }
}`,

    methodName: "isValid",

    returnType: "boolean",

    parameters: ["String"],

    testCases: [
      {
        args: ["()"],
        expected: true,
      },
      {
        args: ["()[]{}"],
        expected: true,
      },
      {
        args: ["(]"],
        expected: false,
      },
      {
        args: ["([)]"],
        expected: false,
      },
      {
        args: ["{[]}"],
        expected: true,
      },
    ],
  },
  {
    questionId: 77,
    topic: "stack",
    title: "Implement Stack Using Array",
    difficulty: "Easy",
    description:
      "Given an array of integers, simulate pushing all elements onto a stack and then pop all elements. Return the elements in the order they are popped.",
    input: "arr = [10, 20, 30, 40]",
    output: "[40, 30, 20, 10]",
    explanation:
      "A stack follows LIFO order, so the last inserted element is removed first.",
    constraints: ["0 ≤ arr.length ≤ 10⁴", "-10⁵ ≤ arr[i] ≤ 10⁵"],
    starterCode: `public class Solution {
    public int[] stackOperations(int[] arr) {

        // Write your code here

        return new int[0];
    }
}`,
    methodName: "stackOperations",
    returnType: "int[]",
    parameters: ["int[]"],
    testCases: [
      { args: [[10, 20, 30, 40]], expected: [40, 30, 20, 10] },
      { args: [[1, 2, 3]], expected: [3, 2, 1] },
      { args: [[5]], expected: [5] },
    ],
  },

  {
    questionId: 78,
    topic: "stack",
    title: "Implement Stack Using Queues",
    difficulty: "Easy",
    description:
      "Given an array representing values pushed into a stack, implement stack behavior using queue operations and return all elements in pop order.",
    input: "arr = [1, 2, 3, 4]",
    output: "[4, 3, 2, 1]",
    explanation:
      "Although queue operations are used internally, the resulting data structure must follow LIFO stack behavior.",
    constraints: ["0 ≤ arr.length ≤ 10⁴", "-10⁵ ≤ arr[i] ≤ 10⁵"],
    starterCode: `public class Solution {
    public int[] stackUsingQueue(int[] arr) {

        // Write your code here

        return new int[0];
    }
}`,
    methodName: "stackUsingQueue",
    returnType: "int[]",
    parameters: ["int[]"],
    testCases: [
      { args: [[1, 2, 3, 4]], expected: [4, 3, 2, 1] },
      { args: [[10, 20]], expected: [20, 10] },
      { args: [[7]], expected: [7] },
    ],
  },

  {
    questionId: 79,
    topic: "stack",
    title: "Min Stack",
    difficulty: "Medium",
    description:
      "Given an array representing elements pushed into a stack, return the minimum element present in the stack. Design your approach using an additional stack so that the minimum can be obtained efficiently.",
    input: "arr = [5, 2, 8, 1, 3]",
    output: "1",
    explanation: "The minimum value stored in the stack is 1.",
    constraints: ["1 ≤ arr.length ≤ 10⁴", "-10⁵ ≤ arr[i] ≤ 10⁵"],
    starterCode: `public class Solution {
    public int getMin(int[] arr) {

        // Write your code here

        return 0;
    }
}`,
    methodName: "getMin",
    returnType: "int",
    parameters: ["int[]"],
    testCases: [
      { args: [[5, 2, 8, 1, 3]], expected: 1 },
      { args: [[10, 20, 5, 30]], expected: 5 },
      { args: [[-2, 0, -3]], expected: -3 },
    ],
  },

  {
    questionId: 80,
    topic: "stack",
    title: "Next Greater Element",
    difficulty: "Medium",
    description:
      "Given an integer array, find the next greater element to the right for every element. If no greater element exists, use -1.",
    input: "arr = [4, 5, 2, 10]",
    output: "[5, 10, 10, -1]",
    explanation:
      "For 4 the next greater element is 5, for 5 it is 10, for 2 it is 10, and 10 has no greater element to its right.",
    constraints: ["1 ≤ arr.length ≤ 10⁵", "-10⁹ ≤ arr[i] ≤ 10⁹"],
    starterCode: `public class Solution {
    public int[] nextGreaterElement(int[] arr) {

        // Write your code here

        return new int[0];
    }
}`,
    methodName: "nextGreaterElement",
    returnType: "int[]",
    parameters: ["int[]"],
    testCases: [
      { args: [[4, 5, 2, 10]], expected: [5, 10, 10, -1] },
      { args: [[3, 2, 1]], expected: [-1, -1, -1] },
      { args: [[1, 3, 2, 4]], expected: [3, 4, 4, -1] },
    ],
  },

  {
    questionId: 81,
    topic: "stack",
    title: "Next Greater Element II",
    difficulty: "Medium",
    description:
      "Given a circular integer array, return the next greater element for every element. While searching to the right, you may wrap around to the beginning of the array. Return -1 if no greater element exists.",
    input: "arr = [1, 2, 1]",
    output: "[2, -1, 2]",
    explanation:
      "The array is circular, so the last 1 can find 2 after wrapping around.",
    constraints: ["1 ≤ arr.length ≤ 10⁵", "-10⁹ ≤ arr[i] ≤ 10⁹"],
    starterCode: `public class Solution {
    public int[] nextGreaterElements(int[] arr) {

        // Write your code here

        return new int[0];
    }
}`,
    methodName: "nextGreaterElements",
    returnType: "int[]",
    parameters: ["int[]"],
    testCases: [
      { args: [[1, 2, 1]], expected: [2, -1, 2] },
      { args: [[1, 2, 3, 4, 3]], expected: [2, 3, 4, -1, 4] },
      { args: [[5, 4, 3]], expected: [-1, 5, 5] },
    ],
  },

  {
    questionId: 82,
    topic: "stack",
    title: "Previous Smaller Element",
    difficulty: "Medium",
    description:
      "For every element in the array, find the nearest element to its left that is strictly smaller. If no such element exists, return -1 for that position.",
    input: "arr = [4, 5, 2, 10, 8]",
    output: "[-1, 4, -1, 2, 2]",
    explanation:
      "For each position, the nearest strictly smaller value on its left is returned.",
    constraints: ["1 ≤ arr.length ≤ 10⁵", "-10⁹ ≤ arr[i] ≤ 10⁹"],
    starterCode: `public class Solution {
    public int[] previousSmaller(int[] arr) {

        // Write your code here

        return new int[0];
    }
}`,
    methodName: "previousSmaller",
    returnType: "int[]",
    parameters: ["int[]"],
    testCases: [
      { args: [[4, 5, 2, 10, 8]], expected: [-1, 4, -1, 2, 2] },
      { args: [[1, 2, 3]], expected: [-1, 1, 2] },
      { args: [[3, 2, 1]], expected: [-1, -1, -1] },
    ],
  },

  {
    questionId: 83,
    topic: "stack",
    title: "Next Smaller Element",
    difficulty: "Medium",
    description:
      "For every element in the array, find the nearest element to its right that is strictly smaller. If no such element exists, return -1.",
    input: "arr = [4, 8, 5, 2, 25]",
    output: "[2, 5, 2, -1, -1]",
    explanation:
      "The nearest smaller values on the right are returned for each array element.",
    constraints: ["1 ≤ arr.length ≤ 10⁵", "-10⁹ ≤ arr[i] ≤ 10⁹"],
    starterCode: `public class Solution {
    public int[] nextSmaller(int[] arr) {

        // Write your code here

        return new int[0];
    }
}`,
    methodName: "nextSmaller",
    returnType: "int[]",
    parameters: ["int[]"],
    testCases: [
      { args: [[4, 8, 5, 2, 25]], expected: [2, 5, 2, -1, -1] },
      { args: [[3, 2, 1]], expected: [2, 1, -1] },
      { args: [[1, 2, 3]], expected: [-1, -1, -1] },
    ],
  },

  {
    questionId: 84,
    topic: "stack",
    title: "Stock Span Problem",
    difficulty: "Medium",
    description:
      "Given daily stock prices, calculate the span of the stock price for each day. The span is the maximum number of consecutive days ending on the current day for which the price was less than or equal to today's price.",
    input: "prices = [100, 80, 60, 70, 60, 75, 85]",
    output: "[1, 1, 1, 2, 1, 4, 6]",
    explanation:
      "Each value represents how many consecutive previous days, including the current day, had a price less than or equal to the current price.",
    constraints: ["1 ≤ prices.length ≤ 10⁵", "1 ≤ prices[i] ≤ 10⁹"],
    starterCode: `public class Solution {
    public int[] calculateSpan(int[] prices) {

        // Write your code here

        return new int[0];
    }
}`,
    methodName: "calculateSpan",
    returnType: "int[]",
    parameters: ["int[]"],
    testCases: [
      {
        args: [[100, 80, 60, 70, 60, 75, 85]],
        expected: [1, 1, 1, 2, 1, 4, 6],
      },
      { args: [[10, 20, 30, 40]], expected: [1, 2, 3, 4] },
      { args: [[40, 30, 20, 10]], expected: [1, 1, 1, 1] },
    ],
  },

  {
    questionId: 85,
    topic: "stack",
    title: "Daily Temperatures",
    difficulty: "Medium",
    description:
      "Given an array of daily temperatures, return an array where each element represents the number of days you must wait until a warmer temperature. If there is no future warmer day, return 0 for that position.",
    input: "temperatures = [73, 74, 75, 71, 69, 72, 76, 73]",
    output: "[1, 1, 4, 2, 1, 1, 0, 0]",
    explanation:
      "For temperature 73 on the first day, a warmer temperature occurs one day later.",
    constraints: ["1 ≤ temperatures.length ≤ 10⁵", "0 ≤ temperatures[i] ≤ 100"],
    starterCode: `public class Solution {
    public int[] dailyTemperatures(int[] temperatures) {

        // Write your code here

        return new int[0];
    }
}`,
    methodName: "dailyTemperatures",
    returnType: "int[]",
    parameters: ["int[]"],
    testCases: [
      {
        args: [[73, 74, 75, 71, 69, 72, 76, 73]],
        expected: [1, 1, 4, 2, 1, 1, 0, 0],
      },
      { args: [[30, 40, 50, 60]], expected: [1, 1, 1, 0] },
      { args: [[30, 60, 90]], expected: [1, 1, 0] },
    ],
  },

  {
    questionId: 86,
    topic: "stack",
    title: "Largest Rectangle in Histogram",
    difficulty: "Hard",
    description:
      "Given an array of non-negative integers representing histogram bar heights, where each bar has width 1, return the area of the largest rectangle that can be formed.",
    input: "heights = [2, 1, 5, 6, 2, 3]",
    output: "10",
    explanation:
      "The largest rectangle uses the bars with heights 5 and 6 and has area 10.",
    constraints: ["1 ≤ heights.length ≤ 10⁵", "0 ≤ heights[i] ≤ 10⁴"],
    starterCode: `public class Solution {
    public int largestRectangleArea(int[] heights) {

        // Write your code here

        return 0;
    }
}`,
    methodName: "largestRectangleArea",
    returnType: "int",
    parameters: ["int[]"],
    testCases: [
      { args: [[2, 1, 5, 6, 2, 3]], expected: 10 },
      { args: [[2, 4]], expected: 4 },
      { args: [[1, 1, 1, 1]], expected: 4 },
    ],
  },

  {
    questionId: 87,
    topic: "stack",
    title: "Maximal Rectangle",
    difficulty: "Hard",
    description:
      "Given a binary matrix represented as an array of strings, find the area of the largest rectangle containing only 1s.",
    input: 'matrix = ["10100", "10111", "11111", "10010"]',
    output: "6",
    explanation: "The largest rectangle containing only 1s has area 6.",
    constraints: [
      "1 ≤ matrix.length ≤ 200",
      "1 ≤ matrix[i].length ≤ 200",
      "Each character is either '0' or '1'.",
    ],
    starterCode: `public class Solution {
    public int maximalRectangle(String[] matrix) {

        // Write your code here

        return 0;
    }
}`,
    methodName: "maximalRectangle",
    returnType: "int",
    parameters: ["String[]"],
    testCases: [
      {
        args: [["10100", "10111", "11111", "10010"]],
        expected: 6,
      },
      {
        args: [["1"]],
        expected: 1,
      },
      {
        args: [["00", "00"]],
        expected: 0,
      },
    ],
  },

  {
    questionId: 88,
    topic: "stack",
    title: "Trapping Rain Water Using Stack",
    difficulty: "Hard",
    description:
      "Given an array representing elevation heights where each bar has width 1, return the total amount of rain water that can be trapped after raining.",
    input: "height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]",
    output: "6",
    explanation: "The elevation map can trap a total of 6 units of water.",
    constraints: ["1 ≤ height.length ≤ 10⁵", "0 ≤ height[i] ≤ 10⁵"],
    starterCode: `public class Solution {
    public int trap(int[] height) {

        // Write your code here

        return 0;
    }
}`,
    methodName: "trap",
    returnType: "int",
    parameters: ["int[]"],
    testCases: [
      {
        args: [[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]],
        expected: 6,
      },
      { args: [[4, 2, 0, 3, 2, 5]], expected: 9 },
      { args: [[1, 2, 3]], expected: 0 },
    ],
  },

  {
    questionId: 89,
    topic: "stack",
    title: "Asteroid Collision",
    difficulty: "Medium",
    description:
      "Given an array of integers representing asteroids moving in a row, the absolute value represents size and the sign represents direction. Positive asteroids move right and negative asteroids move left. When two asteroids collide, the smaller one is destroyed. If they are equal, both are destroyed. Return the state after all collisions.",
    input: "asteroids = [5, 10, -5]",
    output: "[5, 10]",
    explanation:
      "The asteroids 10 and -5 collide. Since 10 is larger, -5 is destroyed.",
    constraints: [
      "1 ≤ asteroids.length ≤ 10⁴",
      "-1000 ≤ asteroids[i] ≤ 1000",
      "asteroids[i] != 0",
    ],
    starterCode: `public class Solution {
    public int[] asteroidCollision(int[] asteroids) {

        // Write your code here

        return new int[0];
    }
}`,
    methodName: "asteroidCollision",
    returnType: "int[]",
    parameters: ["int[]"],
    testCases: [
      { args: [[5, 10, -5]], expected: [5, 10] },
      { args: [[8, -8]], expected: [] },
      { args: [[10, 2, -5]], expected: [10] },
    ],
  },

  {
    questionId: 90,
    topic: "stack",
    title: "Remove K Digits",
    difficulty: "Medium",
    description:
      "Given a non-negative integer num represented as a string and an integer k, remove exactly k digits so that the resulting number is as small as possible. Return the result as a string without unnecessary leading zeroes.",
    input: 'num = "1432219", k = 3',
    output: '"1219"',
    explanation:
      "Removing digits 4, 3 and 2 produces the smallest possible number 1219.",
    constraints: [
      "1 ≤ num.length ≤ 10⁵",
      "0 ≤ k ≤ num.length",
      "num contains only digits.",
    ],
    starterCode: `public class Solution {
    public String removeKdigits(String num, int k) {

        // Write your code here

        return "";
    }
}`,
    methodName: "removeKdigits",
    returnType: "String",
    parameters: ["String", "int"],
    testCases: [
      { args: ["1432219", 3], expected: "1219" },
      { args: ["10200", 1], expected: "200" },
      { args: ["10", 2], expected: "0" },
    ],
  },

  {
    questionId: 91,
    topic: "stack",
    title: "Decode String",
    difficulty: "Medium",
    description:
      "Given an encoded string using the pattern k[encodedString], return its decoded form. The substring inside the brackets must be repeated exactly k times. Encoded strings may be nested.",
    input: 's = "3[a2[c]]"',
    output: '"accaccacc"',
    explanation:
      "First 2[c] becomes cc, so a2[c] becomes acc. Repeating acc three times gives accaccacc.",
    constraints: [
      "1 ≤ s.length ≤ 10⁴",
      "The input is always a valid encoded string.",
    ],
    starterCode: `public class Solution {
    public String decodeString(String s) {

        // Write your code here

        return "";
    }
}`,
    methodName: "decodeString",
    returnType: "String",
    parameters: ["String"],
    testCases: [
      { args: ["3[a]2[bc]"], expected: "aaabcbc" },
      { args: ["3[a2[c]]"], expected: "accaccacc" },
      { args: ["2[abc]3[cd]ef"], expected: "abcabccdcdcdef" },
    ],
  },

  {
    questionId: 92,
    topic: "stack",
    title: "Evaluate Reverse Polish Notation",
    difficulty: "Medium",
    description:
      "Given an array of strings representing an arithmetic expression in Reverse Polish Notation, evaluate the expression and return its integer result. Valid operators are +, -, * and /. Integer division truncates toward zero.",
    input: 'tokens = ["2", "1", "+", "3", "*"]',
    output: "9",
    explanation: "2 + 1 = 3, then 3 * 3 = 9.",
    constraints: [
      "1 ≤ tokens.length ≤ 10⁴",
      "Each token is an integer or one of '+', '-', '*', '/'.",
      "The expression is always valid.",
    ],
    starterCode: `public class Solution {
    public int evalRPN(String[] tokens) {

        // Write your code here

        return 0;
    }
}`,
    methodName: "evalRPN",
    returnType: "int",
    parameters: ["String[]"],
    testCases: [
      {
        args: [["2", "1", "+", "3", "*"]],
        expected: 9,
      },
      {
        args: [["4", "13", "5", "/", "+"]],
        expected: 6,
      },
      {
        args: [
          ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"],
        ],
        expected: 22,
      },
    ],
  },

  {
    questionId: 93,
    topic: "stack",
    title: "Infix to Postfix Conversion",
    difficulty: "Medium",
    description:
      "Given a valid infix expression containing lowercase letters, parentheses and the operators +, -, *, / and ^, convert it into postfix notation.",
    input: 'expression = "a+b*(c^d-e)^(f+g*h)-i"',
    output: '"abcd^e-fgh*+^*+i-"',
    explanation:
      "Operators are placed after their operands according to precedence and associativity.",
    constraints: [
      "1 ≤ expression.length ≤ 10⁴",
      "Operands are lowercase English letters.",
      "The expression is valid.",
    ],
    starterCode: `public class Solution {
    public String infixToPostfix(String expression) {

        // Write your code here

        return "";
    }
}`,
    methodName: "infixToPostfix",
    returnType: "String",
    parameters: ["String"],
    testCases: [
      {
        args: ["a+b*(c^d-e)^(f+g*h)-i"],
        expected: "abcd^e-fgh*+^*+i-",
      },
      {
        args: ["a+b*c"],
        expected: "abc*+",
      },
      {
        args: ["(a+b)*c"],
        expected: "ab+c*",
      },
    ],
  },

  {
    questionId: 94,
    topic: "stack",
    title: "Simplify Path",
    difficulty: "Medium",
    description:
      "Given an absolute Unix-style file path, convert it to its simplified canonical path. A single dot represents the current directory, two dots represent the parent directory, and multiple consecutive slashes are treated as one slash.",
    input: 'path = "/home//foo/"',
    output: '"/home/foo"',
    explanation:
      "Repeated slashes and the trailing slash are removed to produce the canonical path.",
    constraints: [
      "1 ≤ path.length ≤ 3000",
      "path is a valid absolute Unix-style path.",
    ],
    starterCode: `public class Solution {
    public String simplifyPath(String path) {

        // Write your code here

        return "";
    }
}`,
    methodName: "simplifyPath",
    returnType: "String",
    parameters: ["String"],
    testCases: [
      { args: ["/home/"], expected: "/home" },
      { args: ["/../"], expected: "/" },
      { args: ["/home//foo/"], expected: "/home/foo" },
      { args: ["/a/./b/../../c/"], expected: "/c" },
    ],
  },

  {
    questionId: 95,
    topic: "stack",
    title: "Remove All Adjacent Duplicates in String II",
    difficulty: "Medium",
    description:
      "Given a string s and an integer k, repeatedly remove groups of k adjacent equal characters until no such group remains. Return the final string.",
    input: 's = "deeedbbcccbdaa", k = 3',
    output: '"aa"',
    explanation:
      "Removing eee and ccc creates new adjacent groups. After repeatedly removing groups of three equal characters, the result is aa.",
    constraints: [
      "1 ≤ s.length ≤ 10⁵",
      "2 ≤ k ≤ 10⁴",
      "s contains lowercase English letters.",
    ],
    starterCode: `public class Solution {
    public String removeDuplicates(String s, int k) {

        // Write your code here

        return "";
    }
}`,
    methodName: "removeDuplicates",
    returnType: "String",
    parameters: ["String", "int"],
    testCases: [
      {
        args: ["deeedbbcccbdaa", 3],
        expected: "aa",
      },
      {
        args: ["abcd", 2],
        expected: "abcd",
      },
      {
        args: ["pbbcggttciiippooaais", 2],
        expected: "ps",
      },
    ],
  },
  {
    questionId: 96,
    topic: "queue",
    title: "Implement Queue Using Array",
    difficulty: "Easy",

    description:
      "Given an integer array, insert all elements into a queue in the same order and then remove all elements from the queue. Return the elements in the order they are removed.",

    input: "arr = [10, 20, 30, 40]",

    output: "[10, 20, 30, 40]",

    explanation:
      "A queue follows FIFO (First In First Out), so elements are removed in the same order in which they were inserted.",

    constraints: ["0 ≤ arr.length ≤ 10⁴", "-10⁵ ≤ arr[i] ≤ 10⁵"],

    starterCode: `public class Solution {
    public int[] queueOperations(int[] arr) {

        // Write your code here

        return new int[0];
    }
}`,

    methodName: "queueOperations",

    returnType: "int[]",

    parameters: ["int[]"],

    testCases: [
      {
        args: [[10, 20, 30, 40]],
        expected: [10, 20, 30, 40],
      },
      {
        args: [[1, 2, 3]],
        expected: [1, 2, 3],
      },
      {
        args: [[5]],
        expected: [5],
      },
    ],
  },
  {
    questionId: 97,
    topic: "queue",
    title: "Implement Queue Using Stacks",
    difficulty: "Easy",
    description:
      "Given an integer array, insert all elements into a queue implemented using stacks and then remove all elements. Return the elements in FIFO order.",
    input: "arr = [10, 20, 30, 40]",
    output: "[10, 20, 30, 40]",
    explanation:
      "Although stacks follow LIFO order, using two stacks allows us to simulate FIFO queue behavior.",
    constraints: ["0 ≤ arr.length ≤ 10⁴", "-10⁵ ≤ arr[i] ≤ 10⁵"],
    starterCode: `public class Solution {
    public int[] queueUsingStacks(int[] arr) {

        // Write your code here

        return new int[0];
    }
}`,
    methodName: "queueUsingStacks",
    returnType: "int[]",
    parameters: ["int[]"],
    testCases: [
      { args: [[10, 20, 30, 40]], expected: [10, 20, 30, 40] },
      { args: [[1, 2, 3]], expected: [1, 2, 3] },
      { args: [[7]], expected: [7] },
    ],
  },

  {
    questionId: 98,
    topic: "queue",
    title: "Implement Circular Queue",
    difficulty: "Medium",
    description:
      "Given an integer array and a capacity k, simulate inserting the elements into a circular queue. Whenever the queue becomes full, remove the oldest element before inserting the new element. Return the final contents of the queue from front to rear.",
    input: "arr = [1, 2, 3, 4, 5], k = 3",
    output: "[3, 4, 5]",
    explanation:
      "The queue can contain at most 3 elements. The oldest elements are removed when new elements are inserted into a full queue.",
    constraints: [
      "1 ≤ arr.length ≤ 10⁴",
      "1 ≤ k ≤ arr.length",
      "-10⁵ ≤ arr[i] ≤ 10⁵",
    ],
    starterCode: `public class Solution {
    public int[] circularQueue(int[] arr, int k) {

        // Write your code here

        return new int[0];
    }
}`,
    methodName: "circularQueue",
    returnType: "int[]",
    parameters: ["int[]", "int"],
    testCases: [
      { args: [[1, 2, 3, 4, 5], 3], expected: [3, 4, 5] },
      { args: [[10, 20, 30], 3], expected: [10, 20, 30] },
      { args: [[1, 2, 3, 4], 2], expected: [3, 4] },
    ],
  },

  {
    questionId: 99,
    topic: "queue",
    title: "Reverse a Queue",
    difficulty: "Easy",
    description:
      "Given an array representing the elements of a queue from front to rear, reverse the queue and return its elements.",
    input: "queue = [1, 2, 3, 4, 5]",
    output: "[5, 4, 3, 2, 1]",
    explanation:
      "After reversing the queue, the last element becomes the first element.",
    constraints: ["0 ≤ queue.length ≤ 10⁴", "-10⁵ ≤ queue[i] ≤ 10⁵"],
    starterCode: `public class Solution {
    public int[] reverseQueue(int[] queue) {

        // Write your code here

        return new int[0];
    }
}`,
    methodName: "reverseQueue",
    returnType: "int[]",
    parameters: ["int[]"],
    testCases: [
      { args: [[1, 2, 3, 4, 5]], expected: [5, 4, 3, 2, 1] },
      { args: [[10, 20]], expected: [20, 10] },
      { args: [[7]], expected: [7] },
    ],
  },

  {
    questionId: 100,
    topic: "queue",
    title: "Reverse First K Elements of Queue",
    difficulty: "Easy",
    description:
      "Given an array representing a queue and an integer k, reverse the first k elements while keeping the remaining elements in the same relative order.",
    input: "queue = [1, 2, 3, 4, 5], k = 3",
    output: "[3, 2, 1, 4, 5]",
    explanation: "Only the first three elements are reversed.",
    constraints: [
      "1 ≤ queue.length ≤ 10⁴",
      "1 ≤ k ≤ queue.length",
      "-10⁵ ≤ queue[i] ≤ 10⁵",
    ],
    starterCode: `public class Solution {
    public int[] reverseFirstK(int[] queue, int k) {

        // Write your code here

        return new int[0];
    }
}`,
    methodName: "reverseFirstK",
    returnType: "int[]",
    parameters: ["int[]", "int"],
    testCases: [
      { args: [[1, 2, 3, 4, 5], 3], expected: [3, 2, 1, 4, 5] },
      { args: [[10, 20, 30, 40], 2], expected: [20, 10, 30, 40] },
      { args: [[1, 2, 3], 3], expected: [3, 2, 1] },
    ],
  },

  {
    questionId: 101,
    topic: "queue",
    title: "Generate Binary Numbers from 1 to N",
    difficulty: "Easy",
    description:
      "Given a positive integer n, generate the binary representations of all numbers from 1 to n in increasing order.",
    input: "n = 5",
    output: '["1", "10", "11", "100", "101"]',
    explanation:
      "These are the binary representations of the decimal numbers from 1 through 5.",
    constraints: ["1 ≤ n ≤ 10⁴"],
    starterCode: `public class Solution {
    public String[] generateBinary(int n) {

        // Write your code here

        return new String[0];
    }
}`,
    methodName: "generateBinary",
    returnType: "String[]",
    parameters: ["int"],
    testCases: [
      { args: [5], expected: ["1", "10", "11", "100", "101"] },
      { args: [3], expected: ["1", "10", "11"] },
      { args: [1], expected: ["1"] },
    ],
  },

  {
    questionId: 102,
    topic: "queue",
    title: "First Non-Repeating Character in a Stream",
    difficulty: "Medium",
    description:
      "Given a stream of lowercase characters represented by a string, return a string containing the first non-repeating character after each character is processed. Use '#' when no non-repeating character exists.",
    input: 'stream = "aabc"',
    output: '"a#bb"',
    explanation:
      "After reading a the answer is a. After the second a there is no non-repeating character. After b and c, b is the first non-repeating character.",
    constraints: [
      "1 ≤ stream.length ≤ 10⁵",
      "stream contains lowercase English letters.",
    ],
    starterCode: `public class Solution {
    public String firstNonRepeating(String stream) {

        // Write your code here

        return "";
    }
}`,
    methodName: "firstNonRepeating",
    returnType: "String",
    parameters: ["String"],
    testCases: [
      { args: ["aabc"], expected: "a#bb" },
      { args: ["zz"], expected: "z#" },
      { args: ["abc"], expected: "aaa" },
    ],
  },

  {
    questionId: 103,
    topic: "queue",
    title: "Interleave First and Second Half of Queue",
    difficulty: "Medium",
    description:
      "Given an array representing a queue containing an even number of elements, interleave the first half with the second half and return the resulting queue.",
    input: "queue = [1, 2, 3, 4, 5, 6]",
    output: "[1, 4, 2, 5, 3, 6]",
    explanation:
      "The first half [1,2,3] is interleaved with the second half [4,5,6].",
    constraints: [
      "2 ≤ queue.length ≤ 10⁴",
      "queue.length is even.",
      "-10⁵ ≤ queue[i] ≤ 10⁵",
    ],
    starterCode: `public class Solution {
    public int[] interleaveQueue(int[] queue) {

        // Write your code here

        return new int[0];
    }
}`,
    methodName: "interleaveQueue",
    returnType: "int[]",
    parameters: ["int[]"],
    testCases: [
      { args: [[1, 2, 3, 4, 5, 6]], expected: [1, 4, 2, 5, 3, 6] },
      { args: [[1, 2, 3, 4]], expected: [1, 3, 2, 4] },
      { args: [[10, 20]], expected: [10, 20] },
    ],
  },

  {
    questionId: 104,
    topic: "queue",
    title: "Sliding Window Maximum",
    difficulty: "Hard",
    description:
      "Given an integer array nums and an integer k, return the maximum value in every contiguous subarray of size k.",
    input: "nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3",
    output: "[3, 3, 5, 5, 6, 7]",
    explanation:
      "The maximum values of each window of size 3 are 3, 3, 5, 5, 6 and 7.",
    constraints: [
      "1 ≤ nums.length ≤ 10⁵",
      "1 ≤ k ≤ nums.length",
      "-10⁴ ≤ nums[i] ≤ 10⁴",
    ],
    starterCode: `public class Solution {
    public int[] maxSlidingWindow(int[] nums, int k) {

        // Write your code here

        return new int[0];
    }
}`,
    methodName: "maxSlidingWindow",
    returnType: "int[]",
    parameters: ["int[]", "int"],
    testCases: [
      {
        args: [[1, 3, -1, -3, 5, 3, 6, 7], 3],
        expected: [3, 3, 5, 5, 6, 7],
      },
      { args: [[1], 1], expected: [1] },
      { args: [[9, 11], 2], expected: [11] },
    ],
  },

  {
    questionId: 105,
    topic: "queue",
    title: "First Negative Integer in Every Window",
    difficulty: "Medium",
    description:
      "Given an integer array and a window size k, return the first negative integer in every contiguous window of size k. If a window contains no negative integer, return 0 for that window.",
    input: "arr = [-8, 2, 3, -6, 10], k = 2",
    output: "[-8, 0, -6, -6]",
    explanation:
      "For every window of size 2, the first negative value is returned. Zero is used when a window contains no negative number.",
    constraints: [
      "1 ≤ arr.length ≤ 10⁵",
      "1 ≤ k ≤ arr.length",
      "-10⁹ ≤ arr[i] ≤ 10⁹",
    ],
    starterCode: `public class Solution {
    public int[] firstNegative(int[] arr, int k) {

        // Write your code here

        return new int[0];
    }
}`,
    methodName: "firstNegative",
    returnType: "int[]",
    parameters: ["int[]", "int"],
    testCases: [
      { args: [[-8, 2, 3, -6, 10], 2], expected: [-8, 0, -6, -6] },
      { args: [[1, 2, 3, 4], 2], expected: [0, 0, 0] },
      { args: [[-1, -2, -3], 2], expected: [-1, -2] },
    ],
  },

  {
    questionId: 106,
    topic: "queue",
    title: "Sum of Minimum and Maximum of All Windows",
    difficulty: "Medium",
    description:
      "Given an integer array and an integer k, find the sum of the minimum and maximum element of every contiguous subarray of size k, and return the total sum.",
    input: "arr = [2, 5, -1, 7, -3, -1, -2], k = 4",
    output: "18",
    explanation:
      "For every window of size 4, add its minimum and maximum values. The total of all these values is 18.",
    constraints: [
      "1 ≤ arr.length ≤ 10⁵",
      "1 ≤ k ≤ arr.length",
      "-10⁴ ≤ arr[i] ≤ 10⁴",
    ],
    starterCode: `public class Solution {
    public int sumMinMax(int[] arr, int k) {

        // Write your code here

        return 0;
    }
}`,
    methodName: "sumMinMax",
    returnType: "int",
    parameters: ["int[]", "int"],
    testCases: [
      { args: [[2, 5, -1, 7, -3, -1, -2], 4], expected: 18 },
      { args: [[1, 2, 3], 2], expected: 8 },
      { args: [[5, 5, 5], 2], expected: 20 },
    ],
  },

  {
    questionId: 107,
    topic: "queue",
    title: "Rotten Oranges",
    difficulty: "Medium",
    description:
      "A grid is represented as an array of strings where '0' means empty, '1' means a fresh orange, and '2' means a rotten orange. Every minute, a rotten orange makes its adjacent fresh oranges rotten in the four cardinal directions. Return the minimum number of minutes required for all oranges to become rotten, or -1 if it is impossible.",
    input: 'grid = ["211", "110", "011"]',
    output: "4",
    explanation:
      "Using multi-source BFS from all initially rotten oranges, all fresh oranges become rotten after 4 minutes.",
    constraints: [
      "1 ≤ grid.length ≤ 100",
      "1 ≤ grid[i].length ≤ 100",
      "Each character is '0', '1' or '2'.",
    ],
    starterCode: `public class Solution {
    public int orangesRotting(String[] grid) {

        // Write your code here

        return 0;
    }
}`,
    methodName: "orangesRotting",
    returnType: "int",
    parameters: ["String[]"],
    testCases: [
      { args: [["211", "110", "011"]], expected: 4 },
      { args: [["211", "111", "011"]], expected: 4 },
      { args: [["211", "110", "101"]], expected: -1 },
      { args: [["0"]], expected: 0 },
    ],
  },

  {
    questionId: 108,
    topic: "queue",
    title: "Number of Recent Calls",
    difficulty: "Easy",
    description:
      "Given a strictly increasing array of request times, return an array where each position contains the number of requests that occurred in the inclusive time interval [t - 3000, t] for the current request time t.",
    input: "times = [1, 100, 3001, 3002]",
    output: "[1, 2, 3, 3]",
    explanation:
      "For each request, only requests made during the previous 3000 milliseconds including the current request are counted.",
    constraints: [
      "1 ≤ times.length ≤ 10⁴",
      "1 ≤ times[i] ≤ 10⁹",
      "times is strictly increasing.",
    ],
    starterCode: `public class Solution {
    public int[] recentCalls(int[] times) {

        // Write your code here

        return new int[0];
    }
}`,
    methodName: "recentCalls",
    returnType: "int[]",
    parameters: ["int[]"],
    testCases: [
      { args: [[1, 100, 3001, 3002]], expected: [1, 2, 3, 3] },
      { args: [[1, 3002]], expected: [1, 1] },
      { args: [[100, 200, 300]], expected: [1, 2, 3] },
    ],
  },

  {
    questionId: 109,
    topic: "queue",
    title: "Dota2 Senate",
    difficulty: "Medium",
    description:
      "A senate consists of members from two parties represented by 'R' and 'D'. Senators act in order and may ban one senator from the opposite party. Banned senators lose all future rights. Return 'Radiant' if the R party eventually wins, otherwise return 'Dire'.",
    input: 'senate = "RDD"',
    output: '"Dire"',
    explanation:
      "By processing active senators in queue order, the Dire party eventually eliminates all Radiant senators.",
    constraints: [
      "1 ≤ senate.length ≤ 10⁴",
      "senate contains only 'R' and 'D'.",
    ],
    starterCode: `public class Solution {
    public String predictPartyVictory(String senate) {

        // Write your code here

        return "";
    }
}`,
    methodName: "predictPartyVictory",
    returnType: "String",
    parameters: ["String"],
    testCases: [
      { args: ["RD"], expected: "Radiant" },
      { args: ["RDD"], expected: "Dire" },
      { args: ["RRDDD"], expected: "Radiant" },
    ],
  },

  {
    questionId: 110,
    topic: "queue",
    title: "Reveal Cards in Increasing Order",
    difficulty: "Medium",
    description:
      "Given an array of distinct integers representing a deck of cards, reorder the deck so that repeatedly revealing the top card and moving the next top card to the bottom reveals the cards in increasing order. Return the required initial deck order.",
    input: "deck = [17, 13, 11, 2, 3, 5, 7]",
    output: "[2, 13, 3, 11, 5, 17, 7]",
    explanation:
      "Starting with this ordering causes the cards to be revealed in increasing order: 2, 3, 5, 7, 11, 13, 17.",
    constraints: [
      "1 ≤ deck.length ≤ 1000",
      "1 ≤ deck[i] ≤ 10⁶",
      "All deck values are distinct.",
    ],
    starterCode: `public class Solution {
    public int[] deckRevealedIncreasing(int[] deck) {

        // Write your code here

        return new int[0];
    }
}`,
    methodName: "deckRevealedIncreasing",
    returnType: "int[]",
    parameters: ["int[]"],
    testCases: [
      {
        args: [[17, 13, 11, 2, 3, 5, 7]],
        expected: [2, 13, 3, 11, 5, 17, 7],
      },
      { args: [[1, 1000]], expected: [1, 1000] },
      { args: [[3, 1, 2]], expected: [1, 3, 2] },
    ],
  },

  {
    questionId: 111,
    topic: "queue",
    title: "Task Scheduler",
    difficulty: "Medium",
    description:
      "Given a string of uppercase letters representing CPU tasks and a non-negative integer n representing the cooldown interval, return the minimum number of time units required to complete all tasks. Identical tasks must be separated by at least n time units.",
    input: 'tasks = "AAABBB", n = 2',
    output: "8",
    explanation:
      "One valid schedule is A, B, idle, A, B, idle, A, B, which requires 8 time units.",
    constraints: [
      "1 ≤ tasks.length ≤ 10⁴",
      "tasks contains uppercase English letters.",
      "0 ≤ n ≤ 100",
    ],
    starterCode: `public class Solution {
    public int leastInterval(String tasks, int n) {

        // Write your code here

        return 0;
    }
}`,
    methodName: "leastInterval",
    returnType: "int",
    parameters: ["String", "int"],
    testCases: [
      { args: ["AAABBB", 2], expected: 8 },
      { args: ["AAABBB", 0], expected: 6 },
      { args: ["AAAAAABCDEFG", 2], expected: 16 },
    ],
  },

  {
    questionId: 112,
    topic: "queue",
    title: "Jump Game VI",
    difficulty: "Medium",
    description:
      "Given an integer array nums and an integer k, start at index 0. From index i you may jump to any index from i + 1 through i + k. Your score is the sum of the values at all visited indices. Return the maximum score possible when reaching the last index.",
    input: "nums = [1, -1, -2, 4, -7, 3], k = 2",
    output: "7",
    explanation:
      "An optimal path gives a total score of 7. A monotonic deque can be used to track the best reachable score.",
    constraints: [
      "1 ≤ nums.length ≤ 10⁵",
      "1 ≤ k ≤ nums.length",
      "-10⁴ ≤ nums[i] ≤ 10⁴",
    ],
    starterCode: `public class Solution {
    public int maxResult(int[] nums, int k) {

        // Write your code here

        return 0;
    }
}`,
    methodName: "maxResult",
    returnType: "int",
    parameters: ["int[]", "int"],
    testCases: [
      { args: [[1, -1, -2, 4, -7, 3], 2], expected: 7 },
      { args: [[10, -5, -2, 4, 0, 3], 3], expected: 17 },
      { args: [[1, -5, -20, 4, -1, 3, -6, -3], 2], expected: 0 },
    ],
  },

  {
    questionId: 113,
    topic: "queue",
    title: "Shortest Subarray with Sum at Least K",
    difficulty: "Hard",
    description:
      "Given an integer array nums and an integer k, return the length of the shortest non-empty contiguous subarray whose sum is at least k. Return -1 if no such subarray exists. The array may contain negative numbers.",
    input: "nums = [2, -1, 2], k = 3",
    output: "3",
    explanation:
      "The entire array has sum 3, and no shorter subarray has a sum of at least 3.",
    constraints: [
      "1 ≤ nums.length ≤ 10⁵",
      "-10⁵ ≤ nums[i] ≤ 10⁵",
      "1 ≤ k ≤ 10⁹",
    ],
    starterCode: `public class Solution {
    public int shortestSubarray(int[] nums, int k) {

        // Write your code here

        return -1;
    }
}`,
    methodName: "shortestSubarray",
    returnType: "int",
    parameters: ["int[]", "int"],
    testCases: [
      { args: [[1], 1], expected: 1 },
      { args: [[1, 2], 4], expected: -1 },
      { args: [[2, -1, 2], 3], expected: 3 },
      { args: [[84, -37, 32, 40, 95], 167], expected: 3 },
    ],
  },

  {
    questionId: 114,
    topic: "queue",
    title: "Constrained Subsequence Sum",
    difficulty: "Hard",
    description:
      "Given an integer array nums and an integer k, choose a non-empty subsequence such that the indices of every two consecutive chosen elements differ by at most k. Return the maximum possible subsequence sum.",
    input: "nums = [10, 2, -10, 5, 20], k = 2",
    output: "37",
    explanation:
      "Choosing 10, 2, 5 and 20 gives the maximum sum 37 while satisfying the index-distance constraint.",
    constraints: [
      "1 ≤ nums.length ≤ 10⁵",
      "1 ≤ k ≤ nums.length",
      "-10⁴ ≤ nums[i] ≤ 10⁴",
    ],
    starterCode: `public class Solution {
    public int constrainedSubsetSum(int[] nums, int k) {

        // Write your code here

        return 0;
    }
}`,
    methodName: "constrainedSubsetSum",
    returnType: "int",
    parameters: ["int[]", "int"],
    testCases: [
      { args: [[10, 2, -10, 5, 20], 2], expected: 37 },
      { args: [[-1, -2, -3], 1], expected: -1 },
      { args: [[10, -2, -10, -5, 20], 2], expected: 23 },
    ],
  },

  {
    questionId: 115,
    topic: "queue",
    title: "Maximum Value of Equation",
    difficulty: "Hard",
    description:
      "Points are represented by two arrays x and y, where point i is (x[i], y[i]) and x is strictly increasing. For two points i and j with i < j and x[j] - x[i] <= k, maximize y[i] + y[j] + x[j] - x[i]. Return the maximum value.",
    input: "x = [1, 2, 3, 5], y = [1, 3, 2, 5], k = 2",
    output: "10",
    explanation:
      "Using the points (3,2) and (5,5), the value is 2 + 5 + 5 - 3 = 9. Using (1,1) and (2,3) gives 5. The maximum valid value for these points is 9.",
    constraints: [
      "2 ≤ x.length = y.length ≤ 10⁵",
      "x is strictly increasing.",
      "1 ≤ k ≤ 10⁹",
      "-10⁸ ≤ y[i] ≤ 10⁸",
    ],
    starterCode: `public class Solution {
    public int findMaxValueOfEquation(int[] x, int[] y, int k) {

        // Write your code here

        return 0;
    }
}`,
    methodName: "findMaxValueOfEquation",
    returnType: "int",
    parameters: ["int[]", "int[]", "int"],
    testCases: [
      {
        args: [[1, 2, 3, 5], [1, 3, 2, 5], 2],
        expected: 9,
      },
      {
        args: [[1, 3, 6], [3, 0, 10], 3],
        expected: 13,
      },
      {
        args: [[1, 2], [1, 2], 1],
        expected: 4,
      },
    ],
  },
  {
    questionId: 116,
    topic: "binary-tree",
    title: "Binary Tree Inorder Traversal",
    difficulty: "Easy",

    description:
      "Given the root of a binary tree, return the inorder traversal of its node values. In inorder traversal, visit the left subtree first, then the root node, and finally the right subtree.",

    input: "root = [1, null, 2, 3]",

    output: "[1, 3, 2]",

    explanation:
      "The inorder traversal visits the nodes in the order: 1, 3, 2.",

    constraints: ["0 ≤ number of nodes ≤ 100", "-100 ≤ Node.val ≤ 100"],

    starterCode: `public class Solution {
    public int[] inorderTraversal(TreeNode root) {

        // Write your code here

        return new int[0];
    }
}`,

    methodName: "inorderTraversal",

    returnType: "int[]",

    parameters: ["TreeNode"],

    testCases: [
      {
        args: [[1, null, 2, 3]],
        expected: [1, 3, 2],
      },
      {
        args: [[1, 2, 3, 4, 5]],
        expected: [4, 2, 5, 1, 3],
      },
      {
        args: [[]],
        expected: [],
      },
      {
        args: [[1]],
        expected: [1],
      },
    ],
  },
  {
    questionId: 117,
    topic: "binary-tree",
    title: "Binary Tree Preorder Traversal",
    difficulty: "Easy",
    description:
      "Given the root of a binary tree, return the preorder traversal of its node values. In preorder traversal, visit the root first, then the left subtree, and finally the right subtree.",
    input: "root = [1, null, 2, 3]",
    output: "[1, 2, 3]",
    explanation: "Preorder traversal follows Root → Left → Right.",
    constraints: ["0 ≤ number of nodes ≤ 100", "-100 ≤ Node.val ≤ 100"],
    starterCode: `public class Solution {
    public int[] preorderTraversal(TreeNode root) {

        // Write your code here

        return new int[0];
    }
}`,
    methodName: "preorderTraversal",
    returnType: "int[]",
    parameters: ["TreeNode"],
    testCases: [
      { args: [[1, null, 2, 3]], expected: [1, 2, 3] },
      { args: [[1, 2, 3, 4, 5]], expected: [1, 2, 4, 5, 3] },
      { args: [[]], expected: [] },
      { args: [[1]], expected: [1] },
    ],
  },

  {
    questionId: 118,
    topic: "binary-tree",
    title: "Binary Tree Postorder Traversal",
    difficulty: "Easy",
    description:
      "Given the root of a binary tree, return the postorder traversal of its node values. In postorder traversal, visit the left subtree, then the right subtree, and finally the root.",
    input: "root = [1, null, 2, 3]",
    output: "[3, 2, 1]",
    explanation: "Postorder traversal follows Left → Right → Root.",
    constraints: ["0 ≤ number of nodes ≤ 100", "-100 ≤ Node.val ≤ 100"],
    starterCode: `public class Solution {
    public int[] postorderTraversal(TreeNode root) {

        // Write your code here

        return new int[0];
    }
}`,
    methodName: "postorderTraversal",
    returnType: "int[]",
    parameters: ["TreeNode"],
    testCases: [
      { args: [[1, null, 2, 3]], expected: [3, 2, 1] },
      { args: [[1, 2, 3, 4, 5]], expected: [4, 5, 2, 3, 1] },
      { args: [[]], expected: [] },
      { args: [[1]], expected: [1] },
    ],
  },

  {
    questionId: 119,
    topic: "binary-tree",
    title: "Maximum Depth of Binary Tree",
    difficulty: "Easy",
    description:
      "Given the root of a binary tree, return its maximum depth. The maximum depth is the number of nodes along the longest path from the root to a leaf.",
    input: "root = [3, 9, 20, null, null, 15, 7]",
    output: "3",
    explanation: "The longest root-to-leaf path contains 3 nodes.",
    constraints: ["0 ≤ number of nodes ≤ 10⁴", "-100 ≤ Node.val ≤ 100"],
    starterCode: `public class Solution {
    public int maxDepth(TreeNode root) {

        // Write your code here

        return 0;
    }
}`,
    methodName: "maxDepth",
    returnType: "int",
    parameters: ["TreeNode"],
    testCases: [
      { args: [[3, 9, 20, null, null, 15, 7]], expected: 3 },
      { args: [[1, null, 2]], expected: 2 },
      { args: [[]], expected: 0 },
      { args: [[1]], expected: 1 },
    ],
  },

  {
    questionId: 120,
    topic: "binary-tree",
    title: "Minimum Depth of Binary Tree",
    difficulty: "Easy",
    description:
      "Given the root of a binary tree, return its minimum depth. The minimum depth is the number of nodes along the shortest path from the root to the nearest leaf node.",
    input: "root = [3, 9, 20, null, null, 15, 7]",
    output: "2",
    explanation:
      "Node 9 is a leaf, so the shortest root-to-leaf path contains 2 nodes.",
    constraints: ["0 ≤ number of nodes ≤ 10⁴", "-100 ≤ Node.val ≤ 100"],
    starterCode: `public class Solution {
    public int minDepth(TreeNode root) {

        // Write your code here

        return 0;
    }
}`,
    methodName: "minDepth",
    returnType: "int",
    parameters: ["TreeNode"],
    testCases: [
      { args: [[3, 9, 20, null, null, 15, 7]], expected: 2 },
      { args: [[2, null, 3, null, 4, null, 5]], expected: 4 },
      { args: [[]], expected: 0 },
      { args: [[1]], expected: 1 },
    ],
  },

  {
    questionId: 121,
    topic: "binary-tree",
    title: "Same Tree",
    difficulty: "Easy",
    description:
      "Given the roots of two binary trees, determine whether they are identical. Two trees are identical if they have the same structure and the same value at every corresponding node.",
    input: "p = [1, 2, 3], q = [1, 2, 3]",
    output: "true",
    explanation: "Both trees have the same structure and node values.",
    constraints: [
      "0 ≤ number of nodes in each tree ≤ 100",
      "-10⁴ ≤ Node.val ≤ 10⁴",
    ],
    starterCode: `public class Solution {
    public boolean isSameTree(TreeNode p, TreeNode q) {

        // Write your code here

        return false;
    }
}`,
    methodName: "isSameTree",
    returnType: "boolean",
    parameters: ["TreeNode", "TreeNode"],
    testCases: [
      {
        args: [
          [1, 2, 3],
          [1, 2, 3],
        ],
        expected: true,
      },
      {
        args: [
          [1, 2],
          [1, null, 2],
        ],
        expected: false,
      },
      {
        args: [
          [1, 2, 1],
          [1, 1, 2],
        ],
        expected: false,
      },
      { args: [[], []], expected: true },
    ],
  },

  {
    questionId: 122,
    topic: "binary-tree",
    title: "Symmetric Tree",
    difficulty: "Easy",
    description:
      "Given the root of a binary tree, determine whether the tree is symmetric around its center.",
    input: "root = [1, 2, 2, 3, 4, 4, 3]",
    output: "true",
    explanation: "The left and right subtrees are mirror images of each other.",
    constraints: ["0 ≤ number of nodes ≤ 1000", "-100 ≤ Node.val ≤ 100"],
    starterCode: `public class Solution {
    public boolean isSymmetric(TreeNode root) {

        // Write your code here

        return false;
    }
}`,
    methodName: "isSymmetric",
    returnType: "boolean",
    parameters: ["TreeNode"],
    testCases: [
      { args: [[1, 2, 2, 3, 4, 4, 3]], expected: true },
      { args: [[1, 2, 2, null, 3, null, 3]], expected: false },
      { args: [[1]], expected: true },
      { args: [[]], expected: true },
    ],
  },

  {
    questionId: 123,
    topic: "binary-tree",
    title: "Balanced Binary Tree",
    difficulty: "Easy",
    description:
      "Given the root of a binary tree, determine whether it is height-balanced. A tree is height-balanced if the heights of the left and right subtrees of every node differ by at most one.",
    input: "root = [3, 9, 20, null, null, 15, 7]",
    output: "true",
    explanation:
      "The height difference between the left and right subtree of every node is at most one.",
    constraints: ["0 ≤ number of nodes ≤ 5000", "-10⁴ ≤ Node.val ≤ 10⁴"],
    starterCode: `public class Solution {
    public boolean isBalanced(TreeNode root) {

        // Write your code here

        return false;
    }
}`,
    methodName: "isBalanced",
    returnType: "boolean",
    parameters: ["TreeNode"],
    testCases: [
      { args: [[3, 9, 20, null, null, 15, 7]], expected: true },
      { args: [[1, 2, 2, 3, 3, null, null, 4, 4]], expected: false },
      { args: [[]], expected: true },
      { args: [[1]], expected: true },
    ],
  },

  {
    questionId: 124,
    topic: "binary-tree",
    title: "Diameter of Binary Tree",
    difficulty: "Easy",
    description:
      "Given the root of a binary tree, return the diameter of the tree. The diameter is the number of edges in the longest path between any two nodes.",
    input: "root = [1, 2, 3, 4, 5]",
    output: "3",
    explanation: "One longest path is 4 → 2 → 1 → 3, containing 3 edges.",
    constraints: ["0 ≤ number of nodes ≤ 10⁴", "-100 ≤ Node.val ≤ 100"],
    starterCode: `public class Solution {
    public int diameterOfBinaryTree(TreeNode root) {

        // Write your code here

        return 0;
    }
}`,
    methodName: "diameterOfBinaryTree",
    returnType: "int",
    parameters: ["TreeNode"],
    testCases: [
      { args: [[1, 2, 3, 4, 5]], expected: 3 },
      { args: [[1, 2]], expected: 1 },
      { args: [[1]], expected: 0 },
      { args: [[]], expected: 0 },
    ],
  },

  {
    questionId: 125,
    topic: "binary-tree",
    title: "Binary Tree Level Order Traversal",
    difficulty: "Medium",
    description:
      "Given the root of a binary tree, return all node values in level-order from left to right as a single integer array.",
    input: "root = [3, 9, 20, null, null, 15, 7]",
    output: "[3, 9, 20, 15, 7]",
    explanation: "The nodes are visited level by level from left to right.",
    constraints: ["0 ≤ number of nodes ≤ 2000", "-1000 ≤ Node.val ≤ 1000"],
    starterCode: `public class Solution {
    public int[] levelOrder(TreeNode root) {

        // Write your code here

        return new int[0];
    }
}`,
    methodName: "levelOrder",
    returnType: "int[]",
    parameters: ["TreeNode"],
    testCases: [
      {
        args: [[3, 9, 20, null, null, 15, 7]],
        expected: [3, 9, 20, 15, 7],
      },
      { args: [[1, 2, 3, 4, 5]], expected: [1, 2, 3, 4, 5] },
      { args: [[1]], expected: [1] },
      { args: [[]], expected: [] },
    ],
  },

  {
    questionId: 126,
    topic: "binary-tree",
    title: "Right Side View of Binary Tree",
    difficulty: "Medium",
    description:
      "Given the root of a binary tree, imagine standing on the right side of the tree. Return the value of the node visible at each level from top to bottom.",
    input: "root = [1, 2, 3, null, 5, null, 4]",
    output: "[1, 3, 4]",
    explanation: "The nodes visible from the right side are 1, 3 and 4.",
    constraints: ["0 ≤ number of nodes ≤ 100", "-100 ≤ Node.val ≤ 100"],
    starterCode: `public class Solution {
    public int[] rightSideView(TreeNode root) {

        // Write your code here

        return new int[0];
    }
}`,
    methodName: "rightSideView",
    returnType: "int[]",
    parameters: ["TreeNode"],
    testCases: [
      { args: [[1, 2, 3, null, 5, null, 4]], expected: [1, 3, 4] },
      { args: [[1, null, 3]], expected: [1, 3] },
      { args: [[1]], expected: [1] },
      { args: [[]], expected: [] },
    ],
  },

  {
    questionId: 127,
    topic: "binary-tree",
    title: "Left View of Binary Tree",
    difficulty: "Medium",
    description:
      "Given the root of a binary tree, return the first node visible from the left side at each level.",
    input: "root = [1, 2, 3, 4, 5, null, 6]",
    output: "[1, 2, 4]",
    explanation: "The first node at each level is 1, then 2, then 4.",
    constraints: ["0 ≤ number of nodes ≤ 10⁴", "-10⁴ ≤ Node.val ≤ 10⁴"],
    starterCode: `public class Solution {
    public int[] leftView(TreeNode root) {

        // Write your code here

        return new int[0];
    }
}`,
    methodName: "leftView",
    returnType: "int[]",
    parameters: ["TreeNode"],
    testCases: [
      { args: [[1, 2, 3, 4, 5, null, 6]], expected: [1, 2, 4] },
      { args: [[1, null, 2, 3]], expected: [1, 2, 3] },
      { args: [[1]], expected: [1] },
      { args: [[]], expected: [] },
    ],
  },

  {
    questionId: 128,
    topic: "binary-tree",
    title: "Path Sum",
    difficulty: "Easy",
    description:
      "Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path whose node values add up to targetSum.",
    input:
      "root = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1], targetSum = 22",
    output: "true",
    explanation: "The root-to-leaf path 5 → 4 → 11 → 2 has a sum of 22.",
    constraints: [
      "0 ≤ number of nodes ≤ 5000",
      "-1000 ≤ Node.val ≤ 1000",
      "-1000 ≤ targetSum ≤ 1000",
    ],
    starterCode: `public class Solution {
    public boolean hasPathSum(TreeNode root, int targetSum) {

        // Write your code here

        return false;
    }
}`,
    methodName: "hasPathSum",
    returnType: "boolean",
    parameters: ["TreeNode", "int"],
    testCases: [
      {
        args: [[5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1], 22],
        expected: true,
      },
      { args: [[1, 2, 3], 5], expected: false },
      { args: [[1, 2], 1], expected: false },
      { args: [[], 0], expected: false },
    ],
  },

  {
    questionId: 129,
    topic: "binary-tree",
    title: "Lowest Common Ancestor of a Binary Tree",
    difficulty: "Medium",
    description:
      "Given the root of a binary tree and two distinct node values p and q, return the value of their lowest common ancestor. All node values in the tree are unique.",
    input: "root = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], p = 5, q = 1",
    output: "3",
    explanation:
      "Node 3 is the lowest node whose subtree contains both nodes 5 and 1.",
    constraints: [
      "2 ≤ number of nodes ≤ 10⁴",
      "All node values are unique.",
      "p and q exist in the tree.",
    ],
    starterCode: `public class Solution {
    public int lowestCommonAncestor(TreeNode root, int p, int q) {

        // Write your code here

        return 0;
    }
}`,
    methodName: "lowestCommonAncestor",
    returnType: "int",
    parameters: ["TreeNode", "int", "int"],
    testCases: [
      {
        args: [[3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], 5, 1],
        expected: 3,
      },
      {
        args: [[3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], 5, 4],
        expected: 5,
      },
      { args: [[1, 2], 1, 2], expected: 1 },
    ],
  },

  {
    questionId: 130,
    topic: "binary-tree",
    title: "Validate Binary Search Tree",
    difficulty: "Medium",
    description:
      "Given the root of a binary tree, determine whether it is a valid binary search tree. For every node, all values in its left subtree must be strictly smaller and all values in its right subtree must be strictly greater.",
    input: "root = [2, 1, 3]",
    output: "true",
    explanation:
      "The left value is smaller than 2 and the right value is greater than 2.",
    constraints: ["1 ≤ number of nodes ≤ 10⁴", "-2³¹ ≤ Node.val ≤ 2³¹ - 1"],
    starterCode: `public class Solution {
    public boolean isValidBST(TreeNode root) {

        // Write your code here

        return false;
    }
}`,
    methodName: "isValidBST",
    returnType: "boolean",
    parameters: ["TreeNode"],
    testCases: [
      { args: [[2, 1, 3]], expected: true },
      { args: [[5, 1, 4, null, null, 3, 6]], expected: false },
      { args: [[2, 2, 2]], expected: false },
      { args: [[1]], expected: true },
    ],
  },

  {
    questionId: 131,
    topic: "binary-tree",
    title: "Search in a Binary Search Tree",
    difficulty: "Easy",
    description:
      "Given the root of a binary search tree and an integer val, return true if a node with the given value exists in the tree. Otherwise return false.",
    input: "root = [4, 2, 7, 1, 3], val = 2",
    output: "true",
    explanation: "The value 2 exists in the binary search tree.",
    constraints: [
      "0 ≤ number of nodes ≤ 5000",
      "1 ≤ Node.val ≤ 10⁷",
      "1 ≤ val ≤ 10⁷",
    ],
    starterCode: `public class Solution {
    public boolean searchBST(TreeNode root, int val) {

        // Write your code here

        return false;
    }
}`,
    methodName: "searchBST",
    returnType: "boolean",
    parameters: ["TreeNode", "int"],
    testCases: [
      { args: [[4, 2, 7, 1, 3], 2], expected: true },
      { args: [[4, 2, 7, 1, 3], 5], expected: false },
      { args: [[2, 1, 3], 3], expected: true },
      { args: [[], 1], expected: false },
    ],
  },

  {
    questionId: 132,
    topic: "binary-tree",
    title: "Kth Smallest Element in a BST",
    difficulty: "Medium",
    description:
      "Given the root of a binary search tree and an integer k, return the kth smallest value in the tree.",
    input: "root = [3, 1, 4, null, 2], k = 1",
    output: "1",
    explanation:
      "The inorder traversal of a BST gives values in sorted order. The first smallest value is 1.",
    constraints: [
      "1 ≤ k ≤ number of nodes",
      "1 ≤ number of nodes ≤ 10⁴",
      "All node values are unique.",
    ],
    starterCode: `public class Solution {
    public int kthSmallest(TreeNode root, int k) {

        // Write your code here

        return 0;
    }
}`,
    methodName: "kthSmallest",
    returnType: "int",
    parameters: ["TreeNode", "int"],
    testCases: [
      { args: [[3, 1, 4, null, 2], 1], expected: 1 },
      { args: [[5, 3, 6, 2, 4, null, null, 1], 3], expected: 3 },
      { args: [[2, 1, 3], 2], expected: 2 },
    ],
  },

  {
    questionId: 133,
    topic: "binary-tree",
    title: "Range Sum of BST",
    difficulty: "Easy",
    description:
      "Given the root of a binary search tree and two integers low and high, return the sum of all node values in the inclusive range [low, high].",
    input: "root = [10, 5, 15, 3, 7, null, 18], low = 7, high = 15",
    output: "32",
    explanation:
      "The values in the range [7,15] are 7, 10 and 15. Their sum is 32.",
    constraints: [
      "1 ≤ number of nodes ≤ 2 × 10⁴",
      "1 ≤ Node.val ≤ 10⁵",
      "1 ≤ low ≤ high ≤ 10⁵",
    ],
    starterCode: `public class Solution {
    public int rangeSumBST(TreeNode root, int low, int high) {

        // Write your code here

        return 0;
    }
}`,
    methodName: "rangeSumBST",
    returnType: "int",
    parameters: ["TreeNode", "int", "int"],
    testCases: [
      {
        args: [[10, 5, 15, 3, 7, null, 18], 7, 15],
        expected: 32,
      },
      {
        args: [[10, 5, 15, 3, 7, 13, 18, 1, null, 6], 6, 10],
        expected: 23,
      },
      { args: [[5, 3, 7], 1, 2], expected: 0 },
    ],
  },

  {
    questionId: 134,
    topic: "binary-tree",
    title: "Maximum Path Sum in Binary Tree",
    difficulty: "Hard",
    description:
      "Given the root of a binary tree, return the maximum path sum. A path may start and end at any nodes, but each adjacent pair of nodes in the path must be connected by an edge and no node may appear more than once.",
    input: "root = [-10, 9, 20, null, null, 15, 7]",
    output: "42",
    explanation: "The maximum-sum path is 15 → 20 → 7, giving 42.",
    constraints: ["1 ≤ number of nodes ≤ 3 × 10⁴", "-1000 ≤ Node.val ≤ 1000"],
    starterCode: `public class Solution {
    public int maxPathSum(TreeNode root) {

        // Write your code here

        return 0;
    }
}`,
    methodName: "maxPathSum",
    returnType: "int",
    parameters: ["TreeNode"],
    testCases: [
      { args: [[1, 2, 3]], expected: 6 },
      { args: [[-10, 9, 20, null, null, 15, 7]], expected: 42 },
      { args: [[-3]], expected: -3 },
      { args: [[2, -1]], expected: 2 },
    ],
  },

  {
    questionId: 135,
    topic: "binary-tree",
    title: "Count Complete Tree Nodes",
    difficulty: "Medium",
    description:
      "Given the root of a complete binary tree, return the total number of nodes in the tree. A complete binary tree has every level completely filled except possibly the last level, whose nodes are as far left as possible.",
    input: "root = [1, 2, 3, 4, 5, 6]",
    output: "6",
    explanation: "The tree contains six nodes.",
    constraints: [
      "0 ≤ number of nodes ≤ 5 × 10⁴",
      "The input tree is complete.",
    ],
    starterCode: `public class Solution {
    public int countNodes(TreeNode root) {

        // Write your code here

        return 0;
    }
}`,
    methodName: "countNodes",
    returnType: "int",
    parameters: ["TreeNode"],
    testCases: [
      { args: [[1, 2, 3, 4, 5, 6]], expected: 6 },
      { args: [[1]], expected: 1 },
      { args: [[]], expected: 0 },
      { args: [[1, 2, 3]], expected: 3 },
    ],
  },
  {
    questionId: 136,
    topic: "graph",
    title: "BFS Traversal of Graph",
    difficulty: "Easy",

    description:
      "Given an undirected graph with V vertices numbered from 0 to V - 1 and a list of edges, return the Breadth First Search (BFS) traversal starting from vertex 0. When multiple adjacent vertices are available, visit them in increasing order.",

    input: "V = 5, edges = [[0,1],[0,2],[1,3],[1,4]]",

    output: "[0, 1, 2, 3, 4]",

    explanation:
      "Starting from vertex 0, BFS first visits 0. Then it visits its neighbors 1 and 2. After that, vertices 3 and 4 are visited through vertex 1.",

    constraints: [
      "1 ≤ V ≤ 1000",
      "0 ≤ number of edges ≤ 5000",
      "0 ≤ u, v < V",
      "The graph is undirected.",
    ],

    starterCode: `public class Solution {
    public int[] bfsTraversal(int V, int[][] edges) {

        // Write your code here

        return new int[0];
    }
}`,

    methodName: "bfsTraversal",

    returnType: "int[]",

    parameters: ["int", "int[][]"],

    testCases: [
      {
        args: [
          5,
          [
            [0, 1],
            [0, 2],
            [1, 3],
            [1, 4],
          ],
        ],
        expected: [0, 1, 2, 3, 4],
      },
      {
        args: [
          4,
          [
            [0, 1],
            [0, 2],
            [1, 2],
            [2, 3],
          ],
        ],
        expected: [0, 1, 2, 3],
      },
      {
        args: [
          6,
          [
            [0, 1],
            [0, 2],
            [1, 3],
            [2, 4],
            [4, 5],
          ],
        ],
        expected: [0, 1, 2, 3, 4, 5],
      },
      {
        args: [1, []],
        expected: [0],
      },
    ],
  },
  {
    questionId: 137,
    topic: "graph",
    title: "DFS Traversal of Graph",
    difficulty: "Easy",
    description:
      "Given an undirected graph with V vertices numbered from 0 to V - 1 and a list of edges, return the Depth First Search traversal starting from vertex 0. Visit adjacent vertices in increasing order.",
    input: "V = 5, edges = [[0,1],[0,2],[1,3],[1,4]]",
    output: "[0, 1, 3, 4, 2]",
    explanation:
      "Starting from 0, DFS explores vertex 1 and its unvisited neighbors before returning to visit vertex 2.",
    constraints: [
      "1 ≤ V ≤ 1000",
      "0 ≤ number of edges ≤ 5000",
      "0 ≤ u, v < V",
      "The graph is undirected.",
    ],
    starterCode: `public class Solution {
    public int[] dfsTraversal(int V, int[][] edges) {
        // Write your code here
        return new int[0];
    }
}`,
    methodName: "dfsTraversal",
    returnType: "int[]",
    parameters: ["int", "int[][]"],
    testCases: [
      {
        args: [
          5,
          [
            [0, 1],
            [0, 2],
            [1, 3],
            [1, 4],
          ],
        ],
        expected: [0, 1, 3, 4, 2],
      },
      {
        args: [
          4,
          [
            [0, 1],
            [0, 2],
            [1, 2],
            [2, 3],
          ],
        ],
        expected: [0, 1, 2, 3],
      },
      {
        args: [
          6,
          [
            [0, 1],
            [0, 2],
            [1, 3],
            [2, 4],
            [4, 5],
          ],
        ],
        expected: [0, 1, 3, 2, 4, 5],
      },
      {
        args: [1, []],
        expected: [0],
      },
    ],
  },

  {
    questionId: 138,
    topic: "graph",
    title: "Number of Provinces",
    difficulty: "Medium",
    description:
      "Given an adjacency matrix isConnected where isConnected[i][j] is 1 if city i and city j are directly connected, return the total number of provinces.",
    input: "isConnected = [[1,1,0],[1,1,0],[0,0,1]]",
    output: "2",
    explanation:
      "Cities 0 and 1 form one province, while city 2 forms another province.",
    constraints: [
      "1 ≤ number of cities ≤ 200",
      "isConnected[i][i] = 1",
      "isConnected[i][j] = isConnected[j][i]",
    ],
    starterCode: `public class Solution {
    public int findCircleNum(int[][] isConnected) {
        // Write your code here
        return 0;
    }
}`,
    methodName: "findCircleNum",
    returnType: "int",
    parameters: ["int[][]"],
    testCases: [
      {
        args: [
          [
            [1, 1, 0],
            [1, 1, 0],
            [0, 0, 1],
          ],
        ],
        expected: 2,
      },
      {
        args: [
          [
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1],
          ],
        ],
        expected: 3,
      },
      {
        args: [
          [
            [1, 1, 1],
            [1, 1, 1],
            [1, 1, 1],
          ],
        ],
        expected: 1,
      },
      {
        args: [[[1]]],
        expected: 1,
      },
    ],
  },

  {
    questionId: 139,
    topic: "graph",
    title: "Number of Islands",
    difficulty: "Medium",
    description:
      "Given a grid containing 0s and 1s, where 1 represents land and 0 represents water, return the number of islands. Land cells are connected horizontally or vertically.",
    input: "grid = [[1,1,0],[1,0,0],[0,0,1]]",
    output: "2",
    explanation:
      "The connected land cells in the upper-left form one island and the bottom-right cell forms another.",
    constraints: ["1 ≤ rows, columns ≤ 300", "grid[i][j] is either 0 or 1"],
    starterCode: `public class Solution {
    public int numIslands(int[][] grid) {
        // Write your code here
        return 0;
    }
}`,
    methodName: "numIslands",
    returnType: "int",
    parameters: ["int[][]"],
    testCases: [
      {
        args: [
          [
            [1, 1, 0],
            [1, 0, 0],
            [0, 0, 1],
          ],
        ],
        expected: 2,
      },
      {
        args: [
          [
            [1, 1, 1],
            [1, 1, 1],
            [1, 1, 1],
          ],
        ],
        expected: 1,
      },
      {
        args: [
          [
            [0, 0],
            [0, 0],
          ],
        ],
        expected: 0,
      },
      {
        args: [
          [
            [1, 0, 1],
            [0, 1, 0],
            [1, 0, 1],
          ],
        ],
        expected: 5,
      },
    ],
  },

  {
    questionId: 140,
    topic: "graph",
    title: "Flood Fill",
    difficulty: "Easy",
    description:
      "Given an image represented by an integer matrix, a starting cell (sr, sc), and a new color, perform flood fill and return the modified image.",
    input: "image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2",
    output: "[[2, 2, 2], [2, 2, 0], [2, 0, 1]]",
    explanation:
      "All cells connected to the starting cell having the original color 1 are changed to color 2.",
    constraints: [
      "1 ≤ rows, columns ≤ 50",
      "0 ≤ sr < rows",
      "0 ≤ sc < columns",
    ],
    starterCode: `public class Solution {
    public int[][] floodFill(int[][] image, int sr, int sc, int color) {
        // Write your code here
        return image;
    }
}`,
    methodName: "floodFill",
    returnType: "int[][]",
    parameters: ["int[][]", "int", "int", "int"],
    testCases: [
      {
        args: [
          [
            [1, 1, 1],
            [1, 1, 0],
            [1, 0, 1],
          ],
          1,
          1,
          2,
        ],
        expected: [
          [2, 2, 2],
          [2, 2, 0],
          [2, 0, 1],
        ],
      },
      {
        args: [
          [
            [0, 0, 0],
            [0, 0, 0],
          ],
          0,
          0,
          1,
        ],
        expected: [
          [1, 1, 1],
          [1, 1, 1],
        ],
      },
      {
        args: [
          [
            [1, 1],
            [1, 1],
          ],
          0,
          0,
          1,
        ],
        expected: [
          [1, 1],
          [1, 1],
        ],
      },
    ],
  },

  {
    questionId: 141,
    topic: "graph",
    title: "Detect Cycle in Undirected Graph",
    difficulty: "Medium",
    description:
      "Given an undirected graph with V vertices and a list of edges, return true if the graph contains a cycle. Otherwise return false.",
    input: "V = 4, edges = [[0,1],[1,2],[2,0],[2,3]]",
    output: "true",
    explanation: "Vertices 0, 1 and 2 form a cycle.",
    constraints: ["1 ≤ V ≤ 10⁴", "0 ≤ number of edges ≤ 10⁴"],
    starterCode: `public class Solution {
    public boolean hasCycle(int V, int[][] edges) {
        // Write your code here
        return false;
    }
}`,
    methodName: "hasCycle",
    returnType: "boolean",
    parameters: ["int", "int[][]"],
    testCases: [
      {
        args: [
          4,
          [
            [0, 1],
            [1, 2],
            [2, 0],
            [2, 3],
          ],
        ],
        expected: true,
      },
      {
        args: [
          4,
          [
            [0, 1],
            [1, 2],
            [2, 3],
          ],
        ],
        expected: false,
      },
      {
        args: [
          3,
          [
            [0, 1],
            [1, 2],
            [2, 0],
          ],
        ],
        expected: true,
      },
      {
        args: [1, []],
        expected: false,
      },
    ],
  },

  {
    questionId: 142,
    topic: "graph",
    title: "Detect Cycle in Directed Graph",
    difficulty: "Medium",
    description:
      "Given a directed graph with V vertices and a list of directed edges, return true if the graph contains a cycle.",
    input: "V = 4, edges = [[0,1],[1,2],[2,0],[2,3]]",
    output: "true",
    explanation: "The directed path 0 → 1 → 2 → 0 forms a cycle.",
    constraints: ["1 ≤ V ≤ 10⁴", "0 ≤ number of edges ≤ 10⁴"],
    starterCode: `public class Solution {
    public boolean hasDirectedCycle(int V, int[][] edges) {
        // Write your code here
        return false;
    }
}`,
    methodName: "hasDirectedCycle",
    returnType: "boolean",
    parameters: ["int", "int[][]"],
    testCases: [
      {
        args: [
          4,
          [
            [0, 1],
            [1, 2],
            [2, 0],
            [2, 3],
          ],
        ],
        expected: true,
      },
      {
        args: [
          4,
          [
            [0, 1],
            [1, 2],
            [2, 3],
          ],
        ],
        expected: false,
      },
      {
        args: [
          2,
          [
            [0, 1],
            [1, 0],
          ],
        ],
        expected: true,
      },
      {
        args: [1, []],
        expected: false,
      },
    ],
  },

  {
    questionId: 143,
    topic: "graph",
    title: "Topological Sort",
    difficulty: "Medium",
    description:
      "Given a directed acyclic graph with V vertices and directed edges, return one valid topological ordering. When multiple vertices are available, choose the smallest numbered vertex first.",
    input: "V = 4, edges = [[0,1],[0,2],[1,3],[2,3]]",
    output: "[0, 1, 2, 3]",
    explanation:
      "Vertex 0 appears before 1 and 2, while both 1 and 2 appear before 3.",
    constraints: ["1 ≤ V ≤ 10⁴", "The graph is a DAG"],
    starterCode: `public class Solution {
    public int[] topologicalSort(int V, int[][] edges) {
        // Write your code here
        return new int[0];
    }
}`,
    methodName: "topologicalSort",
    returnType: "int[]",
    parameters: ["int", "int[][]"],
    testCases: [
      {
        args: [
          4,
          [
            [0, 1],
            [0, 2],
            [1, 3],
            [2, 3],
          ],
        ],
        expected: [0, 1, 2, 3],
      },
      {
        args: [
          3,
          [
            [0, 1],
            [1, 2],
          ],
        ],
        expected: [0, 1, 2],
      },
      {
        args: [
          4,
          [
            [0, 2],
            [1, 2],
            [2, 3],
          ],
        ],
        expected: [0, 1, 2, 3],
      },
      {
        args: [1, []],
        expected: [0],
      },
    ],
  },

  {
    questionId: 144,
    topic: "graph",
    title: "Course Schedule",
    difficulty: "Medium",
    description:
      "There are numCourses courses numbered from 0 to numCourses - 1. Each prerequisite pair [a,b] means course b must be completed before course a. Return true if all courses can be completed.",
    input: "numCourses = 2, prerequisites = [[1,0]]",
    output: "true",
    explanation: "Course 0 can be completed before course 1.",
    constraints: ["1 ≤ numCourses ≤ 2000", "0 ≤ prerequisites.length ≤ 5000"],
    starterCode: `public class Solution {
    public boolean canFinish(int numCourses, int[][] prerequisites) {
        // Write your code here
        return false;
    }
}`,
    methodName: "canFinish",
    returnType: "boolean",
    parameters: ["int", "int[][]"],
    testCases: [
      {
        args: [2, [[1, 0]]],
        expected: true,
      },
      {
        args: [
          2,
          [
            [1, 0],
            [0, 1],
          ],
        ],
        expected: false,
      },
      {
        args: [
          4,
          [
            [1, 0],
            [2, 1],
            [3, 2],
          ],
        ],
        expected: true,
      },
      {
        args: [3, []],
        expected: true,
      },
    ],
  },

  {
    questionId: 145,
    topic: "graph",
    title: "Is Graph Bipartite",
    difficulty: "Medium",
    description:
      "Given an undirected graph with V vertices and a list of edges, determine whether the graph is bipartite. A graph is bipartite if its vertices can be divided into two groups such that no edge connects vertices in the same group.",
    input: "V = 4, edges = [[0,1],[1,2],[2,3],[3,0]]",
    output: "true",
    explanation: "The vertices can be divided into the groups {0,2} and {1,3}.",
    constraints: ["1 ≤ V ≤ 10⁴", "0 ≤ number of edges ≤ 10⁴"],
    starterCode: `public class Solution {
    public boolean isBipartite(int V, int[][] edges) {
        // Write your code here
        return false;
    }
}`,
    methodName: "isBipartite",
    returnType: "boolean",
    parameters: ["int", "int[][]"],
    testCases: [
      {
        args: [
          4,
          [
            [0, 1],
            [1, 2],
            [2, 3],
            [3, 0],
          ],
        ],
        expected: true,
      },
      {
        args: [
          3,
          [
            [0, 1],
            [1, 2],
            [2, 0],
          ],
        ],
        expected: false,
      },
      {
        args: [
          5,
          [
            [0, 1],
            [2, 3],
          ],
        ],
        expected: true,
      },
      {
        args: [1, []],
        expected: true,
      },
    ],
  },

  {
    questionId: 146,
    topic: "graph",
    title: "Rotting Oranges",
    difficulty: "Medium",
    description:
      "Given a grid where 0 represents an empty cell, 1 represents a fresh orange and 2 represents a rotten orange, return the minimum number of minutes required for all fresh oranges to become rotten. Return -1 if it is impossible.",
    input: "grid = [[2,1,1],[1,1,0],[0,1,1]]",
    output: "4",
    explanation:
      "Rotting spreads to adjacent fresh oranges each minute. All oranges become rotten after 4 minutes.",
    constraints: ["1 ≤ rows, columns ≤ 10", "grid[i][j] is 0, 1 or 2"],
    starterCode: `public class Solution {
    public int orangesRotting(int[][] grid) {
        // Write your code here
        return 0;
    }
}`,
    methodName: "orangesRotting",
    returnType: "int",
    parameters: ["int[][]"],
    testCases: [
      {
        args: [
          [
            [2, 1, 1],
            [1, 1, 0],
            [0, 1, 1],
          ],
        ],
        expected: 4,
      },
      {
        args: [
          [
            [2, 1, 1],
            [0, 1, 1],
            [1, 0, 1],
          ],
        ],
        expected: -1,
      },
      {
        args: [[[0, 2]]],
        expected: 0,
      },
      {
        args: [[[1]]],
        expected: -1,
      },
    ],
  },

  {
    questionId: 147,
    topic: "graph",
    title: "Shortest Path in Unweighted Graph",
    difficulty: "Medium",
    description:
      "Given an undirected unweighted graph with V vertices, a list of edges and a source vertex, return the shortest distance from the source to every vertex. Return -1 for unreachable vertices.",
    input: "V = 5, edges = [[0,1],[0,2],[1,3],[2,4]], source = 0",
    output: "[0, 1, 1, 2, 2]",
    explanation:
      "Vertices 1 and 2 are one edge from 0, while vertices 3 and 4 are two edges away.",
    constraints: ["1 ≤ V ≤ 10⁴", "0 ≤ source < V"],
    starterCode: `public class Solution {
    public int[] shortestPath(int V, int[][] edges, int source) {
        // Write your code here
        return new int[0];
    }
}`,
    methodName: "shortestPath",
    returnType: "int[]",
    parameters: ["int", "int[][]", "int"],
    testCases: [
      {
        args: [
          5,
          [
            [0, 1],
            [0, 2],
            [1, 3],
            [2, 4],
          ],
          0,
        ],
        expected: [0, 1, 1, 2, 2],
      },
      {
        args: [
          4,
          [
            [0, 1],
            [1, 2],
          ],
          0,
        ],
        expected: [0, 1, 2, -1],
      },
      {
        args: [
          3,
          [
            [0, 1],
            [1, 2],
          ],
          2,
        ],
        expected: [2, 1, 0],
      },
      {
        args: [1, [], 0],
        expected: [0],
      },
    ],
  },

  {
    questionId: 148,
    topic: "graph",
    title: "Dijkstra Shortest Path",
    difficulty: "Medium",
    description:
      "Given a weighted undirected graph with V vertices, edges represented as [u,v,weight], and a source vertex, return the shortest distance from the source to every vertex. Return -1 for unreachable vertices.",
    input:
      "V = 5, edges = [[0,1,4],[0,2,1],[2,1,2],[1,3,1],[2,3,5],[3,4,3]], source = 0",
    output: "[0, 3, 1, 4, 7]",
    explanation: "The shortest route to vertex 1 is 0 → 2 → 1 with cost 3.",
    constraints: ["1 ≤ V ≤ 10⁴", "Edge weights are non-negative"],
    starterCode: `public class Solution {
    public int[] dijkstra(int V, int[][] edges, int source) {
        // Write your code here
        return new int[0];
    }
}`,
    methodName: "dijkstra",
    returnType: "int[]",
    parameters: ["int", "int[][]", "int"],
    testCases: [
      {
        args: [
          5,
          [
            [0, 1, 4],
            [0, 2, 1],
            [2, 1, 2],
            [1, 3, 1],
            [2, 3, 5],
            [3, 4, 3],
          ],
          0,
        ],
        expected: [0, 3, 1, 4, 7],
      },
      {
        args: [
          3,
          [
            [0, 1, 5],
            [1, 2, 2],
            [0, 2, 10],
          ],
          0,
        ],
        expected: [0, 5, 7],
      },
      {
        args: [4, [[0, 1, 1]], 0],
        expected: [0, 1, -1, -1],
      },
    ],
  },

  {
    questionId: 149,
    topic: "graph",
    title: "Network Delay Time",
    difficulty: "Medium",
    description:
      "Given a directed weighted graph represented by times[i] = [u,v,w], where w is the travel time from u to v, return the minimum time required for a signal sent from node k to reach all n nodes. Return -1 if some node cannot be reached.",
    input: "times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2",
    output: "2",
    explanation:
      "The signal reaches nodes 1 and 3 after 1 unit and node 4 after 2 units.",
    constraints: ["1 ≤ n ≤ 100", "1 ≤ u, v ≤ n", "0 ≤ w ≤ 100"],
    starterCode: `public class Solution {
    public int networkDelayTime(int[][] times, int n, int k) {
        // Write your code here
        return -1;
    }
}`,
    methodName: "networkDelayTime",
    returnType: "int",
    parameters: ["int[][]", "int", "int"],
    testCases: [
      {
        args: [
          [
            [2, 1, 1],
            [2, 3, 1],
            [3, 4, 1],
          ],
          4,
          2,
        ],
        expected: 2,
      },
      {
        args: [[[1, 2, 1]], 2, 1],
        expected: 1,
      },
      {
        args: [[[1, 2, 1]], 2, 2],
        expected: -1,
      },
      {
        args: [[], 1, 1],
        expected: 0,
      },
    ],
  },

  {
    questionId: 150,
    topic: "graph",
    title: "Minimum Spanning Tree Using Prim's Algorithm",
    difficulty: "Medium",
    description:
      "Given a connected weighted undirected graph with V vertices and edges represented as [u,v,weight], return the total weight of its minimum spanning tree using Prim's algorithm.",
    input: "V = 4, edges = [[0,1,1],[0,2,4],[1,2,2],[1,3,5],[2,3,3]]",
    output: "6",
    explanation:
      "The minimum spanning tree can use edges with weights 1, 2 and 3, giving a total weight of 6.",
    constraints: [
      "1 ≤ V ≤ 10⁴",
      "The graph is connected",
      "Edge weights are non-negative",
    ],
    starterCode: `public class Solution {
    public int primMST(int V, int[][] edges) {
        // Write your code here
        return 0;
    }
}`,
    methodName: "primMST",
    returnType: "int",
    parameters: ["int", "int[][]"],
    testCases: [
      {
        args: [
          4,
          [
            [0, 1, 1],
            [0, 2, 4],
            [1, 2, 2],
            [1, 3, 5],
            [2, 3, 3],
          ],
        ],
        expected: 6,
      },
      {
        args: [
          3,
          [
            [0, 1, 5],
            [1, 2, 3],
            [0, 2, 1],
          ],
        ],
        expected: 4,
      },
      {
        args: [2, [[0, 1, 7]]],
        expected: 7,
      },
      {
        args: [1, []],
        expected: 0,
      },
    ],
  },

  {
    questionId: 151,
    topic: "graph",
    title: "Minimum Spanning Tree Using Kruskal's Algorithm",
    difficulty: "Medium",
    description:
      "Given a connected weighted undirected graph with V vertices and edges represented as [u,v,weight], return the total weight of its minimum spanning tree using Kruskal's algorithm.",
    input: "V = 4, edges = [[0,1,1],[0,2,4],[1,2,2],[1,3,5],[2,3,3]]",
    output: "6",
    explanation:
      "Selecting the lowest-weight edges without creating cycles gives a minimum spanning tree of total weight 6.",
    constraints: ["1 ≤ V ≤ 10⁴", "The graph is connected"],
    starterCode: `public class Solution {
    public int kruskalMST(int V, int[][] edges) {
        // Write your code here
        return 0;
    }
}`,
    methodName: "kruskalMST",
    returnType: "int",
    parameters: ["int", "int[][]"],
    testCases: [
      {
        args: [
          4,
          [
            [0, 1, 1],
            [0, 2, 4],
            [1, 2, 2],
            [1, 3, 5],
            [2, 3, 3],
          ],
        ],
        expected: 6,
      },
      {
        args: [
          3,
          [
            [0, 1, 5],
            [1, 2, 3],
            [0, 2, 1],
          ],
        ],
        expected: 4,
      },
      {
        args: [2, [[0, 1, 10]]],
        expected: 10,
      },
      {
        args: [1, []],
        expected: 0,
      },
    ],
  },

  {
    questionId: 152,
    topic: "graph",
    title: "Count Connected Components",
    difficulty: "Medium",
    description:
      "Given an undirected graph with n vertices numbered from 0 to n - 1 and a list of edges, return the number of connected components in the graph.",
    input: "n = 5, edges = [[0,1],[1,2],[3,4]]",
    output: "2",
    explanation:
      "Vertices {0,1,2} form one component and vertices {3,4} form another.",
    constraints: ["1 ≤ n ≤ 2000", "0 ≤ number of edges ≤ 5000"],
    starterCode: `public class Solution {
    public int countComponents(int n, int[][] edges) {
        // Write your code here
        return 0;
    }
}`,
    methodName: "countComponents",
    returnType: "int",
    parameters: ["int", "int[][]"],
    testCases: [
      {
        args: [
          5,
          [
            [0, 1],
            [1, 2],
            [3, 4],
          ],
        ],
        expected: 2,
      },
      {
        args: [
          5,
          [
            [0, 1],
            [1, 2],
            [2, 3],
            [3, 4],
          ],
        ],
        expected: 1,
      },
      {
        args: [4, []],
        expected: 4,
      },
      {
        args: [1, []],
        expected: 1,
      },
    ],
  },

  {
    questionId: 153,
    topic: "graph",
    title: "Cheapest Flights Within K Stops",
    difficulty: "Medium",
    description:
      "Given n cities and flights represented by [from,to,price], return the cheapest price from src to dst using at most k stops. Return -1 if no such route exists.",
    input:
      "n = 4, flights = [[0,1,100],[1,2,100],[2,3,100],[0,2,500]], src = 0, dst = 3, k = 1",
    output: "600",
    explanation:
      "With at most one stop, the valid cheapest route is 0 → 2 → 3 with cost 600.",
    constraints: ["1 ≤ n ≤ 100", "0 ≤ k < n", "Flight prices are positive"],
    starterCode: `public class Solution {
    public int findCheapestPrice(
        int n,
        int[][] flights,
        int src,
        int dst,
        int k
    ) {
        // Write your code here
        return -1;
    }
}`,
    methodName: "findCheapestPrice",
    returnType: "int",
    parameters: ["int", "int[][]", "int", "int", "int"],
    testCases: [
      {
        args: [
          4,
          [
            [0, 1, 100],
            [1, 2, 100],
            [2, 3, 100],
            [0, 2, 500],
          ],
          0,
          3,
          1,
        ],
        expected: 600,
      },
      {
        args: [
          3,
          [
            [0, 1, 100],
            [1, 2, 100],
            [0, 2, 500],
          ],
          0,
          2,
          1,
        ],
        expected: 200,
      },
      {
        args: [
          3,
          [
            [0, 1, 100],
            [1, 2, 100],
            [0, 2, 500],
          ],
          0,
          2,
          0,
        ],
        expected: 500,
      },
      {
        args: [3, [[0, 1, 100]], 0, 2, 1],
        expected: -1,
      },
    ],
  },

  {
    questionId: 154,
    topic: "graph",
    title: "Word Ladder",
    difficulty: "Hard",
    description:
      "Given beginWord, endWord and a list of words, return the number of words in the shortest transformation sequence from beginWord to endWord. Only one letter may be changed at a time and every transformed word must exist in wordList. Return 0 if no sequence exists.",
    input:
      'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]',
    output: "5",
    explanation:
      "One shortest sequence is hit → hot → dot → dog → cog, containing 5 words.",
    constraints: [
      "All words have the same length",
      "All words contain lowercase English letters",
    ],
    starterCode: `public class Solution {
    public int ladderLength(
        String beginWord,
        String endWord,
        String[] wordList
    ) {
        // Write your code here
        return 0;
    }
}`,
    methodName: "ladderLength",
    returnType: "int",
    parameters: ["String", "String", "String[]"],
    testCases: [
      {
        args: ["hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]],
        expected: 5,
      },
      {
        args: ["hit", "cog", ["hot", "dot", "dog", "lot", "log"]],
        expected: 0,
      },
      {
        args: ["a", "c", ["a", "b", "c"]],
        expected: 2,
      },
    ],
  },

  {
    questionId: 155,
    topic: "graph",
    title: "Alien Dictionary",
    difficulty: "Hard",
    description:
      "Given a sorted list of words from an alien language containing the first k lowercase English letters, return one valid ordering of the alien alphabet. When multiple characters have zero indegree, choose the alphabetically smaller character first. Return an empty string if the ordering is invalid.",
    input: 'words = ["baa","abcd","abca","cab","cad"], k = 4',
    output: "bdac",
    explanation:
      "Comparing adjacent words gives ordering constraints b → a, d → a, a → c and b → d, producing bdac.",
    constraints: [
      "1 ≤ words.length ≤ 1000",
      "1 ≤ k ≤ 26",
      "Characters belong to the first k lowercase English letters",
    ],
    starterCode: `public class Solution {
    public String alienOrder(String[] words, int k) {
        // Write your code here
        return "";
    }
}`,
    methodName: "alienOrder",
    returnType: "String",
    parameters: ["String[]", "int"],
    testCases: [
      {
        args: [["baa", "abcd", "abca", "cab", "cad"], 4],
        expected: "bdac",
      },
      {
        args: [["caa", "aaa", "aab"], 3],
        expected: "cab",
      },
      {
        args: [["abc", "ab"], 3],
        expected: "",
      },
    ],
  },
  {
    questionId: 156,
    topic: "dynamic-programming",
    title: "Climbing Stairs",
    difficulty: "Easy",
    description:
      "You are climbing a staircase with n steps. Each time you can climb either 1 or 2 steps. Return the number of distinct ways to reach the top.",
    input: "n = 5",
    output: "8",
    explanation:
      "There are 8 different ways to reach the fifth step using jumps of 1 or 2 steps.",
    constraints: ["1 ≤ n ≤ 45"],
    starterCode: `public class Solution {
    public int climbStairs(int n) {
        // Write your code here
        return 0;
    }
}`,
    methodName: "climbStairs",
    returnType: "int",
    parameters: ["int"],
    testCases: [
      {
        args: [2],
        expected: 2,
      },
      {
        args: [3],
        expected: 3,
      },
      {
        args: [5],
        expected: 8,
      },
      {
        args: [10],
        expected: 89,
      },
    ],
  },

  {
    questionId: 157,
    topic: "dynamic-programming",
    title: "Fibonacci Number",
    difficulty: "Easy",
    description:
      "Given an integer n, return the nth Fibonacci number. F(0) = 0, F(1) = 1 and F(n) = F(n - 1) + F(n - 2).",
    input: "n = 6",
    output: "8",
    explanation: "The Fibonacci sequence is 0, 1, 1, 2, 3, 5, 8, so F(6) = 8.",
    constraints: ["0 ≤ n ≤ 30"],
    starterCode: `public class Solution {
    public int fib(int n) {
        // Write your code here
        return 0;
    }
}`,
    methodName: "fib",
    returnType: "int",
    parameters: ["int"],
    testCases: [
      {
        args: [0],
        expected: 0,
      },
      {
        args: [1],
        expected: 1,
      },
      {
        args: [6],
        expected: 8,
      },
      {
        args: [10],
        expected: 55,
      },
    ],
  },

  {
    questionId: 158,
    topic: "dynamic-programming",
    title: "Min Cost Climbing Stairs",
    difficulty: "Easy",
    description:
      "You are given an integer array cost where cost[i] is the cost of stepping on the ith stair. After paying the cost, you may climb one or two steps. Return the minimum cost required to reach the top.",
    input: "cost = [10,15,20]",
    output: "15",
    explanation:
      "Start from index 1, pay 15 and move two steps to reach the top.",
    constraints: ["2 ≤ cost.length ≤ 1000", "0 ≤ cost[i] ≤ 999"],
    starterCode: `public class Solution {
    public int minCostClimbingStairs(int[] cost) {
        // Write your code here
        return 0;
    }
}`,
    methodName: "minCostClimbingStairs",
    returnType: "int",
    parameters: ["int[]"],
    testCases: [
      {
        args: [[10, 15, 20]],
        expected: 15,
      },
      {
        args: [[1, 100, 1, 1, 1, 100, 1, 1, 100, 1]],
        expected: 6,
      },
      {
        args: [[0, 0]],
        expected: 0,
      },
    ],
  },

  {
    questionId: 159,
    topic: "dynamic-programming",
    title: "House Robber",
    difficulty: "Medium",
    description:
      "Given an array nums where nums[i] represents the money in the ith house, return the maximum amount you can rob without robbing two adjacent houses.",
    input: "nums = [2,7,9,3,1]",
    output: "12",
    explanation: "Rob houses containing 2, 9 and 1 for a total of 12.",
    constraints: ["1 ≤ nums.length ≤ 100", "0 ≤ nums[i] ≤ 400"],
    starterCode: `public class Solution {
    public int rob(int[] nums) {
        // Write your code here
        return 0;
    }
}`,
    methodName: "rob",
    returnType: "int",
    parameters: ["int[]"],
    testCases: [
      {
        args: [[1, 2, 3, 1]],
        expected: 4,
      },
      {
        args: [[2, 7, 9, 3, 1]],
        expected: 12,
      },
      {
        args: [[5]],
        expected: 5,
      },
      {
        args: [[2, 1, 1, 2]],
        expected: 4,
      },
    ],
  },

  {
    questionId: 160,
    topic: "dynamic-programming",
    title: "House Robber II",
    difficulty: "Medium",
    description:
      "Houses are arranged in a circle, so the first and last houses are adjacent. Return the maximum amount you can rob without robbing two adjacent houses.",
    input: "nums = [2,3,2]",
    output: "3",
    explanation:
      "You cannot rob both the first and last houses because they are adjacent.",
    constraints: ["1 ≤ nums.length ≤ 100", "0 ≤ nums[i] ≤ 1000"],
    starterCode: `public class Solution {
    public int rob(int[] nums) {
        // Write your code here
        return 0;
    }
}`,
    methodName: "rob",
    returnType: "int",
    parameters: ["int[]"],
    testCases: [
      {
        args: [[2, 3, 2]],
        expected: 3,
      },
      {
        args: [[1, 2, 3, 1]],
        expected: 4,
      },
      {
        args: [[1]],
        expected: 1,
      },
      {
        args: [[1, 2, 3]],
        expected: 3,
      },
    ],
  },

  {
    questionId: 161,
    topic: "dynamic-programming",
    title: "Coin Change",
    difficulty: "Medium",
    description:
      "Given an array coins representing coin denominations and an integer amount, return the minimum number of coins required to make the amount. Return -1 if the amount cannot be formed.",
    input: "coins = [1,2,5], amount = 11",
    output: "3",
    explanation: "11 can be formed using 5 + 5 + 1, requiring 3 coins.",
    constraints: [
      "1 ≤ coins.length ≤ 12",
      "1 ≤ coins[i]",
      "0 ≤ amount ≤ 10000",
    ],
    starterCode: `public class Solution {
    public int coinChange(int[] coins, int amount) {
        // Write your code here
        return 0;
    }
}`,
    methodName: "coinChange",
    returnType: "int",
    parameters: ["int[]", "int"],
    testCases: [
      {
        args: [[1, 2, 5], 11],
        expected: 3,
      },
      {
        args: [[2], 3],
        expected: -1,
      },
      {
        args: [[1], 0],
        expected: 0,
      },
      {
        args: [[2, 5, 10, 1], 27],
        expected: 4,
      },
    ],
  },

  {
    questionId: 162,
    topic: "dynamic-programming",
    title: "Coin Change II",
    difficulty: "Medium",
    description:
      "Given an integer amount and an array coins, return the number of different combinations that can make up the amount. You may use each coin an unlimited number of times.",
    input: "amount = 5, coins = [1,2,5]",
    output: "4",
    explanation: "The combinations are 5, 2+2+1, 2+1+1+1 and 1+1+1+1+1.",
    constraints: ["0 ≤ amount ≤ 5000", "1 ≤ coins.length ≤ 300"],
    starterCode: `public class Solution {
    public int change(int amount, int[] coins) {
        // Write your code here
        return 0;
    }
}`,
    methodName: "change",
    returnType: "int",
    parameters: ["int", "int[]"],
    testCases: [
      {
        args: [5, [1, 2, 5]],
        expected: 4,
      },
      {
        args: [3, [2]],
        expected: 0,
      },
      {
        args: [10, [10]],
        expected: 1,
      },
      {
        args: [0, [1, 2]],
        expected: 1,
      },
    ],
  },

  {
    questionId: 163,
    topic: "dynamic-programming",
    title: "0/1 Knapsack",
    difficulty: "Medium",
    description:
      "Given arrays weights and values and an integer capacity, return the maximum total value that can be placed in the knapsack. Each item may be selected at most once.",
    input: "weights = [1,3,4,5], values = [1,4,5,7], capacity = 7",
    output: "9",
    explanation:
      "Selecting items with weights 3 and 4 gives total weight 7 and total value 9.",
    constraints: [
      "1 ≤ weights.length ≤ 100",
      "weights.length = values.length",
      "1 ≤ capacity ≤ 1000",
    ],
    starterCode: `public class Solution {
    public int knapsack(int[] weights, int[] values, int capacity) {
        // Write your code here
        return 0;
    }
}`,
    methodName: "knapsack",
    returnType: "int",
    parameters: ["int[]", "int[]", "int"],
    testCases: [
      {
        args: [[1, 3, 4, 5], [1, 4, 5, 7], 7],
        expected: 9,
      },
      {
        args: [[1, 2, 3], [10, 15, 40], 6],
        expected: 65,
      },
      {
        args: [[2, 3, 4], [4, 5, 6], 1],
        expected: 0,
      },
    ],
  },

  {
    questionId: 164,
    topic: "dynamic-programming",
    title: "Partition Equal Subset Sum",
    difficulty: "Medium",
    description:
      "Given an integer array nums, return true if the array can be partitioned into two subsets whose sums are equal.",
    input: "nums = [1,5,11,5]",
    output: "true",
    explanation:
      "The array can be divided into [1,5,5] and [11], both having sum 11.",
    constraints: ["1 ≤ nums.length ≤ 200", "1 ≤ nums[i] ≤ 100"],
    starterCode: `public class Solution {
    public boolean canPartition(int[] nums) {
        // Write your code here
        return false;
    }
}`,
    methodName: "canPartition",
    returnType: "boolean",
    parameters: ["int[]"],
    testCases: [
      {
        args: [[1, 5, 11, 5]],
        expected: true,
      },
      {
        args: [[1, 2, 3, 5]],
        expected: false,
      },
      {
        args: [[1, 1]],
        expected: true,
      },
      {
        args: [[2, 2, 3, 5]],
        expected: false,
      },
    ],
  },

  {
    questionId: 165,
    topic: "dynamic-programming",
    title: "Longest Increasing Subsequence",
    difficulty: "Medium",
    description:
      "Given an integer array nums, return the length of the longest strictly increasing subsequence.",
    input: "nums = [10,9,2,5,3,7,101,18]",
    output: "4",
    explanation:
      "One longest increasing subsequence is [2,3,7,101], which has length 4.",
    constraints: ["1 ≤ nums.length ≤ 2500"],
    starterCode: `public class Solution {
    public int lengthOfLIS(int[] nums) {
        // Write your code here
        return 0;
    }
}`,
    methodName: "lengthOfLIS",
    returnType: "int",
    parameters: ["int[]"],
    testCases: [
      {
        args: [[10, 9, 2, 5, 3, 7, 101, 18]],
        expected: 4,
      },
      {
        args: [[0, 1, 0, 3, 2, 3]],
        expected: 4,
      },
      {
        args: [[7, 7, 7, 7]],
        expected: 1,
      },
      {
        args: [[1, 2, 3, 4, 5]],
        expected: 5,
      },
    ],
  },

  {
    questionId: 166,
    topic: "dynamic-programming",
    title: "Longest Common Subsequence",
    difficulty: "Medium",
    description:
      "Given two strings text1 and text2, return the length of their longest common subsequence.",
    input: 'text1 = "abcde", text2 = "ace"',
    output: "3",
    explanation: "The longest common subsequence is ace, which has length 3.",
    constraints: ["1 ≤ text1.length, text2.length ≤ 1000"],
    starterCode: `public class Solution {
    public int longestCommonSubsequence(String text1, String text2) {
        // Write your code here
        return 0;
    }
}`,
    methodName: "longestCommonSubsequence",
    returnType: "int",
    parameters: ["String", "String"],
    testCases: [
      {
        args: ["abcde", "ace"],
        expected: 3,
      },
      {
        args: ["abc", "abc"],
        expected: 3,
      },
      {
        args: ["abc", "def"],
        expected: 0,
      },
      {
        args: ["bl", "yby"],
        expected: 1,
      },
    ],
  },

  {
    questionId: 167,
    topic: "dynamic-programming",
    title: "Edit Distance",
    difficulty: "Medium",
    description:
      "Given two strings word1 and word2, return the minimum number of insertions, deletions and replacements required to convert word1 into word2.",
    input: 'word1 = "horse", word2 = "ros"',
    output: "3",
    explanation: "Horse can be converted to ros using three operations.",
    constraints: ["0 ≤ word1.length, word2.length ≤ 500"],
    starterCode: `public class Solution {
    public int minDistance(String word1, String word2) {
        // Write your code here
        return 0;
    }
}`,
    methodName: "minDistance",
    returnType: "int",
    parameters: ["String", "String"],
    testCases: [
      {
        args: ["horse", "ros"],
        expected: 3,
      },
      {
        args: ["intention", "execution"],
        expected: 5,
      },
      {
        args: ["", "abc"],
        expected: 3,
      },
      {
        args: ["abc", "abc"],
        expected: 0,
      },
    ],
  },

  {
    questionId: 168,
    topic: "dynamic-programming",
    title: "Unique Paths",
    difficulty: "Medium",
    description:
      "A robot is located at the top-left corner of an m x n grid and can move only right or down. Return the number of unique paths to the bottom-right corner.",
    input: "m = 3, n = 7",
    output: "28",
    explanation:
      "There are 28 different ways for the robot to reach the bottom-right cell.",
    constraints: ["1 ≤ m, n ≤ 100"],
    starterCode: `public class Solution {
    public int uniquePaths(int m, int n) {
        // Write your code here
        return 0;
    }
}`,
    methodName: "uniquePaths",
    returnType: "int",
    parameters: ["int", "int"],
    testCases: [
      {
        args: [3, 7],
        expected: 28,
      },
      {
        args: [3, 2],
        expected: 3,
      },
      {
        args: [1, 1],
        expected: 1,
      },
      {
        args: [2, 2],
        expected: 2,
      },
    ],
  },

  {
    questionId: 169,
    topic: "dynamic-programming",
    title: "Minimum Path Sum",
    difficulty: "Medium",
    description:
      "Given a grid filled with non-negative numbers, find a path from the top-left to the bottom-right that minimizes the sum of all numbers along the path. You may move only right or down.",
    input: "grid = [[1,3,1],[1,5,1],[4,2,1]]",
    output: "7",
    explanation: "The path 1 → 3 → 1 → 1 → 1 has the minimum sum of 7.",
    constraints: ["1 ≤ rows, columns ≤ 200", "0 ≤ grid[i][j] ≤ 200"],
    starterCode: `public class Solution {
    public int minPathSum(int[][] grid) {
        // Write your code here
        return 0;
    }
}`,
    methodName: "minPathSum",
    returnType: "int",
    parameters: ["int[][]"],
    testCases: [
      {
        args: [
          [
            [1, 3, 1],
            [1, 5, 1],
            [4, 2, 1],
          ],
        ],
        expected: 7,
      },
      {
        args: [
          [
            [1, 2, 3],
            [4, 5, 6],
          ],
        ],
        expected: 12,
      },
      {
        args: [[[5]]],
        expected: 5,
      },
    ],
  },

  {
    questionId: 170,
    topic: "dynamic-programming",
    title: "Maximum Product Subarray",
    difficulty: "Medium",
    description:
      "Given an integer array nums, find the contiguous subarray that has the largest product and return that product.",
    input: "nums = [2,3,-2,4]",
    output: "6",
    explanation: "The subarray [2,3] has the largest product, which is 6.",
    constraints: ["1 ≤ nums.length ≤ 20000"],
    starterCode: `public class Solution {
    public int maxProduct(int[] nums) {
        // Write your code here
        return 0;
    }
}`,
    methodName: "maxProduct",
    returnType: "int",
    parameters: ["int[]"],
    testCases: [
      {
        args: [[2, 3, -2, 4]],
        expected: 6,
      },
      {
        args: [[-2, 0, -1]],
        expected: 0,
      },
      {
        args: [[-2, 3, -4]],
        expected: 24,
      },
      {
        args: [[5]],
        expected: 5,
      },
    ],
  },

  {
    questionId: 171,
    topic: "dynamic-programming",
    title: "Decode Ways",
    difficulty: "Medium",
    description:
      "A message containing digits can be decoded using 1 → A, 2 → B, ..., 26 → Z. Given a string s containing only digits, return the number of ways to decode it.",
    input: 's = "226"',
    output: "3",
    explanation: "226 can be decoded as BZ, VF or BBF.",
    constraints: ["1 ≤ s.length ≤ 100", "s contains only digits"],
    starterCode: `public class Solution {
    public int numDecodings(String s) {
        // Write your code here
        return 0;
    }
}`,
    methodName: "numDecodings",
    returnType: "int",
    parameters: ["String"],
    testCases: [
      {
        args: ["12"],
        expected: 2,
      },
      {
        args: ["226"],
        expected: 3,
      },
      {
        args: ["06"],
        expected: 0,
      },
      {
        args: ["10"],
        expected: 1,
      },
    ],
  },

  {
    questionId: 172,
    topic: "dynamic-programming",
    title: "Word Break",
    difficulty: "Medium",
    description:
      "Given a string s and an array dictionary containing valid words, return true if s can be segmented into a sequence of one or more dictionary words.",
    input: 's = "leetcode", dictionary = ["leet","code"]',
    output: "true",
    explanation: "leetcode can be segmented as leet + code.",
    constraints: ["1 ≤ s.length ≤ 300", "1 ≤ dictionary.length ≤ 1000"],
    starterCode: `public class Solution {
    public boolean wordBreak(String s, String[] dictionary) {
        // Write your code here
        return false;
    }
}`,
    methodName: "wordBreak",
    returnType: "boolean",
    parameters: ["String", "String[]"],
    testCases: [
      {
        args: ["leetcode", ["leet", "code"]],
        expected: true,
      },
      {
        args: ["applepenapple", ["apple", "pen"]],
        expected: true,
      },
      {
        args: ["catsandog", ["cats", "dog", "sand", "and", "cat"]],
        expected: false,
      },
      {
        args: ["a", ["a"]],
        expected: true,
      },
    ],
  },

  {
    questionId: 173,
    topic: "dynamic-programming",
    title: "Best Time to Buy and Sell Stock with Cooldown",
    difficulty: "Medium",
    description:
      "Given an array prices where prices[i] is the stock price on day i, return the maximum profit you can achieve. After selling a stock, you cannot buy another stock on the next day.",
    input: "prices = [1,2,3,0,2]",
    output: "3",
    explanation:
      "One optimal sequence is buy, sell, cooldown, buy, sell for a total profit of 3.",
    constraints: ["1 ≤ prices.length ≤ 5000"],
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
        args: [[1, 2, 3, 0, 2]],
        expected: 3,
      },
      {
        args: [[1]],
        expected: 0,
      },
      {
        args: [[2, 1, 4]],
        expected: 3,
      },
      {
        args: [[5, 4, 3, 2, 1]],
        expected: 0,
      },
    ],
  },

  {
    questionId: 174,
    topic: "dynamic-programming",
    title: "Target Sum",
    difficulty: "Medium",
    description:
      "You are given an integer array nums and an integer target. Assign either a plus or minus sign to every number. Return the number of different expressions that evaluate to target.",
    input: "nums = [1,1,1,1,1], target = 3",
    output: "5",
    explanation:
      "There are 5 different sign assignments that produce the target value 3.",
    constraints: ["1 ≤ nums.length ≤ 20", "0 ≤ nums[i] ≤ 1000"],
    starterCode: `public class Solution {
    public int findTargetSumWays(int[] nums, int target) {
        // Write your code here
        return 0;
    }
}`,
    methodName: "findTargetSumWays",
    returnType: "int",
    parameters: ["int[]", "int"],
    testCases: [
      {
        args: [[1, 1, 1, 1, 1], 3],
        expected: 5,
      },
      {
        args: [[1], 1],
        expected: 1,
      },
      {
        args: [[1], 2],
        expected: 0,
      },
      {
        args: [[0, 0, 0, 0, 0], 0],
        expected: 32,
      },
    ],
  },

  {
    questionId: 175,
    topic: "dynamic-programming",
    title: "Distinct Subsequences",
    difficulty: "Hard",
    description:
      "Given two strings s and t, return the number of distinct subsequences of s that equal t. A subsequence is formed by deleting zero or more characters without changing the relative order of the remaining characters.",
    input: 's = "rabbbit", t = "rabbit"',
    output: "3",
    explanation:
      "There are three different ways to delete characters from rabbbit to form rabbit.",
    constraints: ["1 ≤ s.length, t.length ≤ 1000"],
    starterCode: `public class Solution {
    public int numDistinct(String s, String t) {
        // Write your code here
        return 0;
    }
}`,
    methodName: "numDistinct",
    returnType: "int",
    parameters: ["String", "String"],
    testCases: [
      {
        args: ["rabbbit", "rabbit"],
        expected: 3,
      },
      {
        args: ["babgbag", "bag"],
        expected: 5,
      },
      {
        args: ["abc", "abc"],
        expected: 1,
      },
      {
        args: ["abc", "abcd"],
        expected: 0,
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
