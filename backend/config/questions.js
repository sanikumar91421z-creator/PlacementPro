const questions = {
  1: {
    id: 1,
    title: "Find the Largest Element in an Array",
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
      },
    ],
  },

  2: {
    id: 2,
    title: "Find the Second Largest Element",
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

  3: {
    id: 3,
    title: "Reverse an Array",
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

  4: {
    id: 4,
    title: "Remove Duplicates from Sorted Array",
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

  5: {
    id: 5,
    title: "Two Sum",
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

  6: {
    id: 6,
    title: "Maximum Subarray",
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
  
  7: {
    id: 7,
    title: "Binary Search",
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
        args: [[10, 20, 30, 40, 50], 50],
        expected: 4,
      },
      {
        args: [[1, 2, 3, 4, 5], 10],
        expected: -1,
      },
    ],
  },
};

module.exports = questions;
