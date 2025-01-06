export interface Question {
  id: number;
  title: string;
  description: string;
  category: string;
  difficulty: string;
  platforms: string[];
  companies: string[];
  solution: {
    text: string;
    code: {
      cpp: string;
      java: string;
      javascript: string;
    }
  };
  videos: {
    id: number;
    title: string;
    language: string;
    url: string;
  }[];
}

export const questions: Question[] = [
  {
    id: 11,
    title: 'Two Sum',
    description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
    category: 'Array',
    difficulty: 'Easy',
    platforms: ['LeetCode', 'GeeksForGeeks'],
    companies: ['Amazon', 'Google', 'Facebook', 'Apple'],
    solution: {
      text: 'Use a hash map to store complements and find the pair in one pass.',
      code: {
        cpp: `class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int, int> map;
        for (int i = 0; i < nums.size(); i++) {
            int complement = target - nums[i];
            if (map.count(complement)) {
                return {map[complement], i};
            }
            map[nums[i]] = i;
        }
        return {};
    }
};`,
        java: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement)) {
                return new int[] { map.get(complement), i };
            }
            map.put(nums[i], i);
        }
        return new int[]{};
    }
}`,
        javascript: `var twoSum = function(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
};`
      }
    },
    videos: []
  },
  {
    id: 12,
    title: 'Reverse Linked List',
    description: 'Given the head of a singly linked list, reverse the list, and return the reversed list.',
    category: 'Linked List',
    difficulty: 'Easy',
    platforms: ['LeetCode', 'GeeksForGeeks'],
    companies: ['Microsoft', 'Amazon', 'Apple'],
    solution: {
      text: 'Use three pointers to reverse the links between nodes.',
      code: {
        cpp: `class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        ListNode* prev = nullptr;
        ListNode* curr = head;
        while (curr != nullptr) {
            ListNode* nextTemp = curr->next;
            curr->next = prev;
            prev = curr;
            curr = nextTemp;
        }
        return prev;
    }
};`,
        java: `class Solution {
    public ListNode reverseList(ListNode head) {
        ListNode prev = null;
        ListNode curr = head;
        while (curr != null) {
            ListNode nextTemp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextTemp;
        }
        return prev;
    }
}`,
        javascript: `var reverseList = function(head) {
    let prev = null;
    let curr = head;
    while (curr !== null) {
        let nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }
    return prev;
};`
      }
    },
    videos: []
  },
  {
    id: 3,
    title: 'Best Time to Buy and Sell Stock',
    description: 'You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.',
    category: 'Array',
    difficulty: 'Easy',
    platforms: ['LeetCode'],
    companies: ['Amazon', 'Microsoft', 'Google', 'Apple'],
    solution: {
      text: 'Keep track of the minimum price seen so far and calculate maximum profit at each step.',
      code: {
        cpp: `class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int minPrice = INT_MAX;
        int maxProfit = 0;
        
        for(int price : prices) {
            minPrice = min(minPrice, price);
            maxProfit = max(maxProfit, price - minPrice);
        }
        
        return maxProfit;
    }
};`,
        java: `class Solution {
    public int maxProfit(int[] prices) {
        int minPrice = Integer.MAX_VALUE;
        int maxProfit = 0;
        
        for(int price : prices) {
            minPrice = Math.min(minPrice, price);
            maxProfit = Math.max(maxProfit, price - minPrice);
        }
        
        return maxProfit;
    }
}`,
        javascript: `var maxProfit = function(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;
    
    for(let price of prices) {
        minPrice = Math.min(minPrice, price);
        maxProfit = Math.max(maxProfit, price - minPrice);
    }
    
    return maxProfit;
};`
      }
    },
    videos: [
      {
        id: 1,
        title: 'Best Time to Buy and Sell Stock - Explained',
        language: 'English',
        url: 'https://www.youtube.com/embed/1pkOgXD63yU'
      }
    ]
  },
  {
    id: 4,
    title: 'Contains Duplicate',
    description: 'Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.',
    category: 'Array',
    difficulty: 'Easy',
    platforms: ['LeetCode'],
    companies: ['Amazon', 'Microsoft', 'Apple'],
    solution: {
      text: 'Use a hash set to keep track of seen numbers.',
      code: {
        cpp: `class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        unordered_set<int> seen;
        for(int num : nums) {
            if(seen.count(num)) return true;
            seen.insert(num);
        }
        return false;
    }
};`,
        java: `class Solution {
    public boolean containsDuplicate(int[] nums) {
        Set<Integer> seen = new HashSet<>();
        for(int num : nums) {
            if(seen.contains(num)) return true;
            seen.add(num);
        }
        return false;
    }
}`,
        javascript: `var containsDuplicate = function(nums) {
    const seen = new Set();
    for(let num of nums) {
        if(seen.has(num)) return true;
        seen.add(num);
    }
    return false;
};`
      }
    },
    videos: [
      {
        id: 1,
        title: 'Contains Duplicate - Simple Solution',
        language: 'English',
        url: 'https://www.youtube.com/embed/3OamzN90kPg'
      }
    ]
  },
  {
    id: 5,
    title: 'Product of Array Except Self',
    description: 'Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].',
    category: 'Array',
    difficulty: 'Medium',
    platforms: ['LeetCode'],
    companies: ['Facebook', 'Amazon', 'Google', 'Microsoft'],
    solution: {
      text: 'Use two passes: first to compute left products, then right products.',
      code: {
        cpp: `class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        int n = nums.size();
        vector<int> answer(n, 1);
        
        // Left products
        for(int i = 1; i < n; i++) {
            answer[i] = answer[i-1] * nums[i-1];
        }
        
        // Right products
        int rightProduct = 1;
        for(int i = n-1; i >= 0; i--) {
            answer[i] *= rightProduct;
            rightProduct *= nums[i];
        }
        
        return answer;
    }
};`,
        java: `class Solution {
    public int[] productExceptSelf(int[] nums) {
        int n = nums.length;
        int[] answer = new int[n];
        Arrays.fill(answer, 1);
        
        for(int i = 1; i < n; i++) {
            answer[i] = answer[i-1] * nums[i-1];
        }
        
        int rightProduct = 1;
        for(int i = n-1; i >= 0; i--) {
            answer[i] *= rightProduct;
            rightProduct *= nums[i];
        }
        
        return answer;
    }
}`,
        javascript: `var productExceptSelf = function(nums) {
    const n = nums.length;
    const answer = new Array(n).fill(1);
    
    for(let i = 1; i < n; i++) {
        answer[i] = answer[i-1] * nums[i-1];
    }
    
    let rightProduct = 1;
    for(let i = n-1; i >= 0; i--) {
        answer[i] *= rightProduct;
        rightProduct *= nums[i];
    }
    
    return answer;
};`
      }
    },
    videos: [
      {
        id: 1,
        title: 'Product of Array Except Self - Detailed Explanation',
        language: 'English',
        url: 'https://www.youtube.com/embed/bNvIQI2wAjk'
      }
    ]
  },
  {
    id: 6,
    title: 'Maximum Subarray Sum (Kadane\'s Algorithm)',
    description: 'Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.',
    category: 'Array',
    difficulty: 'Medium',
    platforms: ['LeetCode'],
    companies: ['Microsoft', 'Amazon', 'Google'],
    solution: {
      text: 'Use Kadane\'s Algorithm: At each position, decide if we should extend the existing subarray or start a new one.',
      code: {
        cpp: `class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        int maxSoFar = nums[0];
        int maxEndingHere = nums[0];
        
        for(int i = 1; i < nums.size(); i++) {
            maxEndingHere = max(nums[i], maxEndingHere + nums[i]);
            maxSoFar = max(maxSoFar, maxEndingHere);
        }
        
        return maxSoFar;
    }
};`,
        java: `class Solution {
    public int maxSubArray(int[] nums) {
        int maxSoFar = nums[0];
        int maxEndingHere = nums[0];
        
        for(int i = 1; i < nums.length; i++) {
            maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
            maxSoFar = Math.max(maxSoFar, maxEndingHere);
        }
        
        return maxSoFar;
    }
}`,
        javascript: `var maxSubArray = function(nums) {
    let maxSoFar = nums[0];
    let maxEndingHere = nums[0];
    
    for(let i = 1; i < nums.length; i++) {
        maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
    
    return maxSoFar;
};`
      }
    },
    videos: [
      {
        id: 1,
        title: 'Kadane\'s Algorithm Explained',
        language: 'English',
        url: 'https://www.youtube.com/embed/86CQq3pKSUw'
      },
      {
        id: 2,
        title: "Kadane's Algorithm (Hindi)",
        language: "Hindi",
        url: "https://www.youtube.com/embed/9IZYqostl2M"
      }
    ]
  },
  {
    id: 7,
    title: 'Find Minimum in Rotated Sorted Array',
    description: 'Suppose an array of length n sorted in ascending order is rotated between 1 and n times. Given the sorted rotated array nums of unique elements, return the minimum element of this array.',
    category: 'Binary Search',
    difficulty: 'Medium',
    platforms: ['LeetCode'],
    companies: ['Amazon', 'Microsoft', 'Google'],
    solution: {
      text: 'Use binary search. Compare middle element with right element to determine which half to search.',
      code: {
        cpp: `class Solution {
public:
    int findMin(vector<int>& nums) {
        int left = 0, right = nums.size() - 1;
        
        while(left < right) {
            int mid = left + (right - left) / 2;
            
            if(nums[mid] > nums[right]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        
        return nums[left];
    }
};`,
        java: `class Solution {
    public int findMin(int[] nums) {
        int left = 0, right = nums.length - 1;
        
        while(left < right) {
            int mid = left + (right - left) / 2;
            
            if(nums[mid] > nums[right]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        
        return nums[left];
    }
}`,
        javascript: `var findMin = function(nums) {
    let left = 0, right = nums.length - 1;
    
    while(left < right) {
        const mid = Math.floor(left + (right - left) / 2);
        
        if(nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    
    return nums[left];
};`
      }
    },
    videos: [
      {
        id: 1,
        title: 'Find Minimum in Rotated Sorted Array - Binary Search Approach',
        language: 'English',
        url: 'https://www.youtube.com/embed/nIVW4P8b1VA'
      }
    ]
  },
  {
    id: 8,
    title: 'Number of 1 Bits',
    description: 'Write a function that takes an unsigned integer and returns the number of \'1\' bits it has (also known as the Hamming weight).',
    category: 'Bit Manipulation',
    difficulty: 'Easy',
    platforms: ['LeetCode'],
    companies: ['Apple', 'Microsoft'],
    solution: {
      text: 'Use bit manipulation techniques to count the number of 1 bits.',
      code: {
        cpp: `class Solution {
public:
    int hammingWeight(uint32_t n) {
        int count = 0;
        while(n) {
            n &= (n-1); // Clear the least significant 1 bit
            count++;
        }
        return count;
    }
};`,
        java: `public class Solution {
    public int hammingWeight(int n) {
        int count = 0;
        while(n != 0) {
            n &= (n-1);
            count++;
        }
        return count;
    }
}`,
        javascript: `var hammingWeight = function(n) {
    let count = 0;
    while(n !== 0) {
        n &= (n-1);
        count++;
    }
    return count;
};`
      }
    },
    videos: [
      {
        id: 1,
        title: 'Number of 1 Bits - Bit Manipulation',
        language: 'English',
        url: 'https://www.youtube.com/embed/5Km3utixwZs'
      }
    ]
  },
  {
    id: 9,
    title: 'Set Matrix Zeroes',
    description: 'Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0\'s.',
    category: 'Array',
    difficulty: 'Medium',
    platforms: ['LeetCode'],
    companies: ['Amazon', 'Microsoft', 'Google'],
    solution: {
      text: 'Use the first row and column as markers for which rows and columns need to be set to zero.',
      code: {
        cpp: `class Solution {
public:
    void setZeroes(vector<vector<int>>& matrix) {
        int m = matrix.size(), n = matrix[0].size();
        bool firstRow = false, firstCol = false;
        
        for(int i = 0; i < m; i++) {
            for(int j = 0; j < n; j++) {
                if(matrix[i][j] == 0) {
                    if(i == 0) firstRow = true;
                    if(j == 0) firstCol = true;
                    matrix[0][j] = matrix[i][0] = 0;
                }
            }
        }
        
        for(int i = 1; i < m; i++) {
            for(int j = 1; j < n; j++) {
                if(matrix[0][j] == 0 || matrix[i][0] == 0) {
                    matrix[i][j] = 0;
                }
            }
        }
        
        if(firstRow) {
            for(int j = 0; j < n; j++) matrix[0][j] = 0;
        }
        if(firstCol) {
            for(int i = 0; i < m; i++) matrix[i][0] = 0;
        }
    }
};`,
        java: `class Solution {
    public void setZeroes(int[][] matrix) {
        int m = matrix.length, n = matrix[0].length;
        boolean firstRow = false, firstCol = false;
        
        for(int i = 0; i < m; i++) {
            for(int j = 0; j < n; j++) {
                if(matrix[i][j] == 0) {
                    if(i == 0) firstRow = true;
                    if(j == 0) firstCol = true;
                    matrix[0][j] = matrix[i][0] = 0;
                }
            }
        }
        
        for(int i = 1; i < m; i++) {
            for(int j = 1; j < n; j++) {
                if(matrix[0][j] == 0 || matrix[i][0] == 0) {
                    matrix[i][j] = 0;
                }
            }
        }
        
        if(firstRow) {
            for(int j = 0; j < n; j++) matrix[0][j] = 0;
        }
        if(firstCol) {
            for(int i = 0; i < m; i++) matrix[i][0] = 0;
        }
    }
}`,
        javascript: `var setZeroes = function(matrix) {
    let m = matrix.length, n = matrix[0].length;
    let firstRow = false, firstCol = false;
    
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(matrix[i][j] === 0) {
                if(i === 0) firstRow = true;
                if(j === 0) firstCol = true;
                matrix[0][j] = matrix[i][0] = 0;
            }
        }
    }
    
    for(let i = 1; i < m; i++) {
        for(let j = 1; j < n; j++) {
            if(matrix[0][j] === 0 || matrix[i][0] === 0) {
                matrix[i][j] = 0;
            }
        }
    }
    
    if(firstRow) {
        for(let j = 0; j < n; j++) matrix[0][j] = 0;
    }
    if(firstCol) {
        for(let i = 0; i < m; i++) matrix[i][0] = 0;
    }
};`
      }
    },
    videos: [
      {
        id: 1,
        title: 'Set Matrix Zeroes - Optimal Approach',
        language: 'English',
        url: 'https://www.youtube.com/embed/M65xBewcqcI'
      }
    ]
  },
  {
    id: 10,
    title: 'Pascal\'s Triangle',
    description: 'Given an integer numRows, return the first numRows of Pascal\'s triangle.',
    category: 'Array',
    difficulty: 'Easy',
    platforms: ['LeetCode'],
    companies: ['Amazon', 'Google', 'Apple'],
    solution: {
      text: 'Use dynamic programming to build each row based on the previous row.',
      code: {
        cpp: `class Solution {
public:
    vector<vector<int>> generate(int numRows) {
        vector<vector<int>> triangle;
        if(numRows == 0) return triangle;
        
        triangle.push_back({1});
        
        for(int i = 1; i < numRows; i++) {
            vector<int> row(i+1, 1);
            for(int j = 1; j < i; j++) {
                row[j] = triangle[i-1][j-1] + triangle[i-1][j];
            }
            triangle.push_back(row);
        }
        
        return triangle;
    }
};`,
        java: `class Solution {
    public List<List<Integer>> generate(int numRows) {
        List<List<Integer>> triangle = new ArrayList<>();
        if(numRows == 0) return triangle;
        
        triangle.add(Arrays.asList(1));
        
        for(int i = 1; i < numRows; i++) {
            List<Integer> row = new ArrayList<>();
            row.add(1);
            for(int j = 1; j < i; j++) {
                row.add(triangle.get(i-1).get(j-1) + triangle.get(i-1).get(j));
            }
            row.add(1);
            triangle.add(row);
        }
        
        return triangle;
    }
}`,
        javascript: `var generate = function(numRows) {
    if(numRows === 0) return [];
    
    let triangle = [[1]];
    
    for(let i = 1; i < numRows; i++) {
        let row = [1];
        for(let j = 1; j < i; j++) {
            row.push(triangle[i-1][j-1] + triangle[i-1][j]);
        }
        row.push(1);
        triangle.push(row);
    }
    
    return triangle;
};`
      }
    },
    videos: [
      {
        id: 1,
        title: 'Pascal\'s Triangle - Explained',
        language: 'English',
        url: 'https://www.youtube.com/embed/6FLvhQjZqvM'
      }
    ]
  },
  {
    id: 13,
    title: "Merge k Sorted Lists",
    description: "You are given an array of k linked-lists lists, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.",
    category: "Linked List",
    difficulty: "Hard",
    platforms: ["LeetCode"],
    companies: ["Amazon", "Google", "Microsoft"],
    solution: {
      text: "Use a priority queue to efficiently merge k sorted lists.",
      code: {
        cpp: `struct compare {
    bool operator()(ListNode* a, ListNode* b) {
        return a->val > b->val;
    }
};

class Solution {
public:
    ListNode* mergeKLists(vector<ListNode*>& lists) {
        priority_queue<ListNode*, vector<ListNode*>, compare> pq;
        for (ListNode* node : lists) {
            if (node) pq.push(node);
        }

        ListNode dummy(0);
        ListNode* tail = &dummy;
        while (!pq.empty()) {
            ListNode* node = pq.top();
            pq.pop();
            tail->next = node;
            tail = tail->next;
            if (node->next) pq.push(node->next);
        }
        return dummy.next;
    }
};`,
        java: `class Solution {
    public ListNode mergeKLists(ListNode[] lists) {
        PriorityQueue<ListNode, Integer> pq = new PriorityQueue<>(Comparator.comparingInt(a -> a.val));
        for (ListNode node : lists) {
            if (node != null) pq.offer(node);
        }

        ListNode dummy = new ListNode(0);
        ListNode tail = dummy;
        while (!pq.isEmpty()) {
            ListNode node = pq.poll();
            tail.next = node;
            tail = tail.next;
            if (node.next != null) pq.offer(node.next);
        }
        return dummy.next;
    }
}`,
        javascript: `class ListNode {
    constructor(val, next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

var mergeKLists = function(lists) {
    const pq = new MinPriorityQueue({ priority: (x) => x.val });
    for (const list of lists) {
        if (list) pq.enqueue(list);
    }

    const dummy = new ListNode(0);
    let tail = dummy;
    while (!pq.isEmpty()) {
        const node = pq.dequeue().element;
        tail.next = node;
        tail = tail.next;
        if (node.next) pq.enqueue(node.next);
    }
    return dummy.next;
};`
      }
    },
    videos: []
  },
  {
    id: 14,
    title: "Longest Palindromic Substring",
    description: "Given a string s, return the longest palindromic substring in s.",
    category: "String",
    difficulty: "Medium",
    platforms: ["LeetCode"],
    companies: ["Amazon", "Google", "Microsoft"],
    solution: {
      text: "Use dynamic programming or expand around the center.",
      code: {
        cpp: `class Solution {
public:
    string longestPalindrome(string s) {
        int n = s.length();
        if (n < 2) return s;

        string longest = "";
        for (int i = 0; i < n; i++) {
            // Odd length palindromes
            int l = i, r = i;
            while (l >= 0 && r < n && s[l] == s[r]) {
                if (r - l + 1 > longest.length()) longest = s.substr(l, r - l + 1);
                l--;
                r++;
            }

            // Even length palindromes
            l = i, r = i + 1;
            while (l >= 0 && r < n && s[l] == s[r]) {
                if (r - l + 1 > longest.length()) longest = s.substr(l, r - l + 1);
                l--;
                r++;
            }
        }
        return longest;
    }
};`,
        java: `class Solution {
    public String longestPalindrome(String s) {
        int n = s.length();
        if (n < 2) return s;

        String longest = "";
        for (int i = 0; i < n; i++) {
            // Odd length palindromes
            int l = i, r = i;
            while (l >= 0 && r < n && s.charAt(l) == s.charAt(r)) {
                if (r - l + 1 > longest.length()) longest = s.substring(l, r + 1);
                l--;
                r++;
            }

            // Even length palindromes
            l = i, r = i + 1;
            while (l >= 0 && r < n && s.charAt(l) == s.charAt(r)) {
                if (r - l + 1 > longest.length()) longest = s.substring(l, r + 1);
                l--;
                r++;
            }
        }
        return longest;
    }
}`,
        javascript: `var longestPalindrome = function(s) {
    let n = s.length;
    if (n < 2) return s;

    let longest = "";
    for (let i = 0; i < n; i++) {
        // Odd length palindromes
        let l = i, r = i;
        while (l >= 0 && r < n && s[l] === s[r]) {
            if (r - l + 1 > longest.length) longest = s.substring(l, r + 1);
            l--;
            r++;
        }

        // Even length palindromes
        l = i, r = i + 1;
        while (l >= 0 && r < n && s[l] === s[r]) {
            if (r - l + 1 > longest.length) longest = s.substring(l, r + 1);
            l--;
            r++;
        }
    }
    return longest;
};`
      }
    },
    videos: []
  },
  {
    id: 15,
    title: "3Sum",
    description: "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.",
    category: "Array",
    difficulty: "Medium",
    platforms: ["LeetCode"],
    companies: ["Amazon", "Google", "Facebook"],
    solution: {
      text: "Sort the array and use two pointers to find triplets that sum to zero.",
      code: {
        cpp: `class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        vector<vector<int>> result;
        for (int i = 0; i < nums.size() - 2; i++) {
            if (i > 0 && nums[i] == nums[i - 1]) continue;
            int l = i + 1, r = nums.size() - 1;
            while (l < r) {
                int sum = nums[i] + nums[l] + nums[r];
                if (sum == 0) {
                    result.push_back({nums[i], nums[l], nums[r]});
                    while (l < r && nums[l] == nums[l + 1]) l++;
                    while (l < r && nums[r] == nums[r - 1]) r--;
                    l++;
                    r--;
                } else if (sum < 0) {
                    l++;
                } else {
                    r--;
                }
            }
        }
        return result;
    }
};`,
        java: `class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        Arrays.sort(nums);
        List<List<Integer>> result = new ArrayList<>();
        for (int i = 0; i < nums.length - 2; i++) {
            if (i > 0 && nums[i] == nums[i - 1]) continue;
            int l = i + 1, r = nums.length - 1;
            while (l < r) {
                int sum = nums[i] + nums[l] + nums[r];
                if (sum == 0) {
                    result.add(Arrays.asList(nums[i], nums[l], nums[r]));
                    while (l < r && nums[l] == nums[l + 1]) l++;
                    while (l < r && nums[r] == nums[r - 1]) r--;
                    l++;
                    r--;
                } else if (sum < 0) {
                    l++;
                } else {
                    r--;
                }
            }
        }
        return result;
    }
}`,
        javascript: `var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    const result = [];
    for (let i =0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let l = i + 1, r = nums.length - 1;
        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r];
            if (sum === 0) {
                result.push([nums[i], nums[l], nums[r]]);
                while (l < r && nums[l] === nums[l + 1]) l++;
                while (l < r && nums[r] === nums[r - 1]) r--;
                l++;
                r--;
            } else if (sum < 0) {
                l++;
            } else {
                r--;
            }
        }
    }
    return result;
};`
      }
    },
    videos: []
  },
  {
    id: 16,
    title: "Group Anagrams",
    description: "Given an array of strings strs, group the anagrams together. You can return the answer in any order.",
    category: "String",
    difficulty: "Medium",
    platforms: ["LeetCode"],
    companies: ["Amazon", "Google", "Microsoft"],
    solution: {
      text: "Use a hash map to group anagrams based on their sorted character representation.",
      code: {
        cpp: `class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        unordered_map<string, vector<string>> map;
        for (string& str : strs) {
            string sortedStr = str;
            sort(sortedStr.begin(), sortedStr.end());
            map[sortedStr].push_back(str);
        }
        vector<vector<string>> result;
        for (auto& pair : map) {
            result.push_back(pair.second);
        }
        return result;
    }
};`,
        java: `class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        Map<String, List<String>> map = new HashMap<>();
        for (String str : strs) {
            char[] chars = str.toCharArray();
            Arrays.sort(chars);
            String sortedStr = new String(chars);
            map.computeIfAbsent(sortedStr, k -> new ArrayList<>()).add(str);
        }
        return new ArrayList<>(map.values());
    }
}`,
        javascript: `var groupAnagrams = function(strs) {
    const map = new Map();
    for (const str of strs) {
        const sortedStr = str.split('').sort().join('');
        if (!map.has(sortedStr)) map.set(sortedStr, []);
        map.get(sortedStr).push(str);
    }
    return Array.from(map.values());
};`
      }
    },
    videos: []
  },
  {
    id: 17,
    title: "Valid Parentheses",
    description: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
    category: "Stack",
    difficulty: "Easy",
    platforms: ["LeetCode"],
    companies: ["Amazon", "Google", "Facebook"],
    solution: {
      text: "Use a stack to keep track of opening brackets and check for matching closing brackets.",
      code: {
        cpp: `class Solution {
public:
    bool isValid(string s) {
        stack<char> st;
        for (char c : s) {
            if (c == '(' || c == '{' || c == '[') {
                st.push(c);
            } else {
                if (st.empty()) return false;
                char top = st.top();
                st.pop();
                if ((c == ')' && top != '(') || (c == '}' && top != '{') || (c == ']' && top != '[')) return false;
            }
        }
        return st.empty();
    }
};`,
        java: `class Solution {
    public boolean isValid(String s) {
        Stack<Character> st = new Stack<>();
        for (char c : s.toCharArray()) {
            if (c == '(' || c == '{' || c == '[') {
                st.push(c);
            } else {
                if (st.isEmpty()) return false;
                char top = st.pop();
                if ((c == ')' && top != '(') || (c == '}' && top != '{') || (c == ']' && top != '[')) return false;
            }
        }
        return st.isEmpty();
    }
}`,
        javascript: `var isValid = function(s) {
    const stack = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (map[char]) {
            stack.push(map[char]);
        } else {
            if (stack.length === 0 || stack.pop() !== char) return false;
        }
    }
    return stack.length === 0;
};`
      }
    },
    videos: []
  },
  {
    id: 18,
    title: "Implement Queue using Stacks",
    description: "Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).",
    category: "Stack",
    difficulty: "Medium",
    platforms: ["LeetCode"],
    companies: ["Amazon", "Google", "Microsoft"],
    solution: {
      text: "Use two stacks, one for enqueue and one for dequeue operations.",
      code: {
        cpp: `class MyQueue {
public:
    stack<int> s1, s2;
    void push(int x) {
        s1.push(x);
    }
    int pop() {
        if (s2.empty()) {
            while (!s1.empty()) {
                s2.push(s1.top());
                s1.pop();
            }
        }
        int top = s2.top();
        s2.pop();
        return top;
    }
    int peek() {
        if (s2.empty()) {
            while (!s1.empty()) {
                s2.push(s1.top());
                s1.pop();
            }
        }
        return s2.top();
    }
    bool empty() {
        return s1.empty() && s2.empty();
    }
};`,
        java: `class MyQueue {
    Stack<Integer> s1 = new Stack<>();
    Stack<Integer> s2 = new Stack<>();
    public void push(int x) {
        s1.push(x);
    }
    public int pop() {
        if (s2.isEmpty()) {
            while (!s1.isEmpty()) {
                s2.push(s1.pop());
            }
        }
        return s2.pop();
    }
    public int peek() {
        if (s2.isEmpty()) {
            while (!s1.isEmpty()) {
                s2.push(s1.pop());
            }
        }
        return s2.peek();
    }
    public boolean empty() {
        return s1.isEmpty() && s2.isEmpty();
    }
}`,
        javascript: `var MyQueue = function() {
    this.s1 = [];
    this.s2 = [];
};

MyQueue.prototype.push = function(x) {
    this.s1.push(x);
};

MyQueue.prototype.pop = function() {
    if (this.s2.length === 0) {
        while (this.s1.length > 0) {
            this.s2.push(this.s1.pop());
        }
    }
    return this.s2.pop();
};

MyQueue.prototype.peek = function() {
    if (this.s2.length === 0) {
        while (this.s1.length > 0) {
            this.s2.push(this.s1.pop());
        }
    }
    return this.s2[this.s2.length - 1];
};

MyQueue.prototype.empty = function() {
    return this.s1.length === 0 && this.s2.length === 0;
};`
      }
    },
    videos: []
  },
  {
    id: 19,
    title: "Evaluate Reverse Polish Notation",
    description: "Evaluate the value of an arithmetic expression in Reverse Polish Notation.",
    category: "Stack",
    difficulty: "Medium",
    platforms: ["LeetCode"],
    companies: ["Amazon", "Google", "Microsoft"],
    solution: {
      text: "Use a stack to evaluate the expression.",
      code: {
        cpp: `class Solution {
public:
    int evalRPN(vector<string>& tokens) {
        stack<long long> st;
        for (string& token : tokens) {
            if (token == "+" || token == "-" || token == "*" || token == "/") {
                long long operand2 = st.top();
                st.pop();
                long long operand1 = st.top();
                st.pop();
                long long result;
                if (token == "+") result = operand1 + operand2;
                else if (token == "-") result = operand1 - operand2;
                else if (token == "*") result = operand1 * operand2;
                else result = operand1 / operand2;
                st.push(result);
            } else {
                st.push(stoll(token));
            }
        }
        return st.top();
    }
};`,
        java: `class Solution {
    public int evalRPN(String[] tokens) {
        Stack<Long> st = new Stack<>();
        for (String token : tokens) {
            if (token.equals("+") || token.equals("-") || token.equals("*") || token.equals("/")) {
                long operand2 = st.pop();
                long operand1 = st.pop();
                long result;
                if (token.equals("+")) result = operand1 + operand2;
                else if (token.equals("-")) result = operand1 - operand2;
                else if (token.equals("*")) result = operand1 * operand2;
                else result = operand1 / operand2;
                st.push(result);
            } else {
                st.push(Long.parseLong(token));
            }
        }
        return st.pop().intValue();
    }
}`,
        javascript: `var evalRPN = function(tokens) {
    const stack = [];
    for (const token of tokens) {
        if (token === '+' || token === '-' || token === '*' || token === '/') {
            const operand2 = stack.pop();
            const operand1 = stack.pop();
            let result;
            if (token === '+') result = operand1 + operand2;
            else if (token === '-') result = operand1 - operand2;
            else if (token === '*') result = operand1 * operand2;
            else result = Math.trunc(operand1 / operand2);
            stack.push(result);
        } else {
            stack.push(parseInt(token));
        }
    }
    return stack[0];
};`
      }
    },
    videos: []
  },
  {
    id: 20,
    title: "Daily Temperatures",
    description: "Given an array of integers temperatures representing the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature.",
    category: "Stack",
    difficulty: "Medium",
    platforms: ["LeetCode"],
    companies: ["Google", "Amazon", "Microsoft"],
    solution: {
      text: "Use a stack to keep track of indices of days with temperatures.",
      code: {
        cpp: `class Solution {
public:
    vector<int> dailyTemperatures(vector<int>& temperatures) {
        int n = temperatures.size();
        vector<int> result(n, 0);
        stack<int> st;
        for (int i = 0; i < n; i++) {
            while (!st.empty() && temperatures[st.top()] < temperatures[i]) {
                int top = st.top();
                st.pop();
                result[top] = i - top;
            }
            st.push(i);
        }
        return result;
    }
};`,
        java: `class Solution {
    public int[] dailyTemperatures(int[] temperatures) {
        int n = temperatures.length;
        int[] result = new int[n];
        Stack<Integer> st = new Stack<>();
        for (int i = 0; i < n; i++) {
            while (!st.isEmpty() && temperatures[st.peek()] < temperatures[i]) {
                int top = st.pop();
                result[top] = i - top;
            }
            st.push(i);
        }
        return result;
    }
}`,
        javascript: `var dailyTemperatures = function(temperatures) {
    const n = temperatures.length;
    const result = new Array(n).fill(0);
    const stack = [];
    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && temperatures[stack[stack.length - 1]] < temperatures[i]) {
            const top = stack.pop();
            result[top] = i - top;
        }
        stack.push(i);
    }
    return result;
};`
      }
    },
    videos: []
  },
  {
    id: 21,
    title: "LRU Cache",
    description: "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
    category: "Data Structure",
    difficulty: "Medium",
    platforms: ["LeetCode"],
    companies: ["Amazon", "Google", "Microsoft"],
    solution: {
      text: "Use a doubly linked list and a hash map.",
      code: {
        cpp: `class Node {
public:
    int key, val;
    Node* prev, *next;
    Node(int k, int v) : key(k), val(v), prev(nullptr), next(nullptr) {}
};

class LRUCache {
public:
    int capacity;
    unordered_map<int, Node*> map;
    Node* head, *tail;
    LRUCache(int capacity) : capacity(capacity), head(new Node(0, 0)), tail(new Node(0, 0)) {
        head->next = tail;
        tail->prev = head;
    }
    int get(int key) {
        if (map.count(key)) {
            Node* node = map[key];
            moveToHead(node);
            return node->val;
        }
        return -1;
    }
    void put(int key, int value) {
        if (map.count(key)) {
            Node* node = map[key];
            node->val = value;
            moveToHead(node);
        } else {
            Node* node = new Node(key, value);
            map[key] = node;
            addToHead(node);
            if (map.size() > capacity) {
                Node* last = tail->prev;
                map.erase(last->key);
                removeNode(last);
            }
        }
    }
private:
    void addToHead(Node* node) {
        node->next = head->next;
        head->next->prev = node;
        head->next = node;
        node->prev = head;
    }
    void removeNode(Node* node) {
        node->prev->next = node->next;
        node->next->prev = node->prev;
    }
    void moveToHead(Node* node) {
        removeNode(node);
        addToHead(node);
    }
};`,
        java: `class Node {
    int key, val;
    Node prev, next;
    Node(int k, int v) {
        key = k;
        val = v;
    }
}

class LRUCache {
    int capacity;
    Map<Integer, Node> map = new HashMap<>();
    Node head = new Node(0, 0), tail = new Node(0, 0);
    public LRUCache(int capacity) {
        this.capacity = capacity;
        head.next = tail;
        tail.prev = head;
    }
    public int get(int key) {
        if (map.containsKey(key)) {
            Node node = map.get(key);
            moveToHead(node);
            return node.val;
        }
        return -1;
    }
    public void put(int key, int value) {
        if (map.containsKey(key)) {
            Node node = map.get(key);
            node.val = value;
            moveToHead(node);
        } else {
            Node node = new Node(key, value);
            map.put(key, node);
            addToHead(node);
            if (map.size() > capacity) {
                Node last = tail.prev;
                map.remove(last.key);
                removeNode(last);
            }
        }
    }
    private void addToHead(Node node) {
        node.next = head.next;
        head.next.prev = node;
        head.next = node;
        node.prev = head;
    }
    private void removeNode(Node node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }
    private void moveToHead(Node node) {
        removeNode(node);
        addToHead(node);
    }
}`,
        javascript: `class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
        this.head = new Node(0, 0);
        this.tail = new Node(0, 0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }
    get(key) {
        if (this.map.has(key)) {
            const node = this.map.get(key);
            this.moveToHead(node);
            return node.val;
        }
        return -1;
    }
    put(key, value) {
        if (this.map.has(key)) {
            const node = this.map.get(key);
            node.val = value;
            this.moveToHead(node);
        } else {
            const node = new Node(key, value);
            this.map.set(key, node);
            this.addToHead(node);
            if (this.map.size > this.capacity) {
                const last = this.tail.prev;
                this.map.delete(last.key);
                this.removeNode(last);
            }
        }
    }
    addToHead(node) {
        node.next = this.head.next;
        this.head.next.prev = node;
        this.head.next = node;
        node.prev = this.head;
    }
    removeNode(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }
    moveToHead(node) {
        this.removeNode(node);
        this.addToHead(node);
    }
}`
      }
    },
    videos: []
  },
  {
    id: 22,
    title: "Top K Frequent Elements",
    description: "Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.",
    category: "Heap",
    difficulty: "Medium",
    platforms: ["LeetCode"],
    companies: ["Amazon", "Google", "Microsoft"],
    solution: {
      text: "Use a min-heap to keep track of the k most frequent elements.",
      code: {
        cpp: `class Solution {
public:
    vector<int> topKFrequent(vector<int>& nums, int k) {
        unordered_map<int, int> count;
        for (int num : nums) count[num]++;
        priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;
        for (auto& pair : count) {
            pq.push({pair.second, pair.first});
            if (pq.size() > k) pq.pop();
        }
        vector<int> result;
        while (!pq.empty()) {
            result.push_back(pq.top().second);
            pq.pop();
        }
        return result;
    }
};`,
        java: `class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> count = new HashMap<>();
        for (int num : nums) count.put(num, count.getOrDefault(num, 0) + 1);
        PriorityQueue<Map.Entry<Integer, Integer>, Integer> pq = new PriorityQueue<>(Comparator.comparingInt(e -> e.getValue()));
        for (Map.Entry<Integer, Integer> entry : count.entrySet()) {
            pq.offer(entry);
            if (pq.size() > k) pq.poll();
        }
        int[] result = new int[k];
        for (int i = k - 1; i >= 0; i--) {
            result[i] = pq.poll().getKey();
        }
        return result;
    }
}`,
        javascript: `var topKFrequent = function(nums, k) {
    const count = {};
    for (const num of nums) {
        count[num] = (count[num] || 0) + 1;
    }
    const pq = new MinPriorityQueue({ priority: (x) => x[1] });
    for (const [num, freq] of Object.entries(count)) {
        pq.enqueue([num, freq]);
        if (pq.size() > k) pq.dequeue();
    }
    return pq.toArray().map((x) => x[0]);
};`
      }
    },
    videos: []
  },
  {
    id: 23,
    title: "Kth Largest Element in an Array",
    description: "Given an integer array nums and an integer k, return the kth largest element in the array.",
    category: "Heap",
    difficulty: "Medium",
    platforms: ["LeetCode"],
    companies: ["Amazon", "Google", "Microsoft"],
    solution: {
      text: "Use a min-heap to find the kth largest element.",
      code: {
        cpp: `class Solution {
public:
    int findKthLargest(vector<int>& nums, int k) {
        priority_queue<int, vector<int>, greater<int>> pq;
        for (int num : nums) {
            pq.push(num);
            if (pq.size() > k) pq.pop();
        }
        return pq.top();
    }
};`,
        java: `class Solution {
    public int findKthLargest(int[] nums, int k) {
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        for (int num : nums) {
            pq.offer(num);
            if (pq.size() > k) pq.poll();
        }
        return pq.peek();
    }
}`,
        javascript: `var findKthLargest = function(nums, k) {
    const minHeap = new MinPriorityQueue();
    for (const num of nums) {
        minHeap.enqueue(num);
        if (minHeap.size() > k) {
            minHeap.dequeue();
        }
    }
    return minHeap.front().element;
};`
      }
    },
    videos: []
  },
  {
    id: 24,
    title: "Merge Intervals",
    description: "Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.",
    category: "Array",
    difficulty: "Medium",
    platforms: ["LeetCode"],
    companies: ["Amazon", "Google", "Microsoft"],
    solution: {
      text: "Sort the intervals by start time and merge overlapping intervals.",
      code: {
        cpp: `class Solution {
public:
    vector<vector<int>> merge(vector<vector<int>>& intervals) {
        sort(intervals.begin(), intervals.end());
        vector<vector<int>> result;
        vector<int> current = intervals[0];
        for (int i = 1; i < intervals.size(); i++) {
            if (intervals[i][0] <= current[1]) {
                current[1] = max(current[1], intervals[i][1]);
            } else {
                result.push_back(current);
                current = intervals[i];
            }
        }
        result.push_back(current);
        return result;
    }
};`,
        java: `class Solution {
    public int[][] merge(int[][] intervals) {
        Arrays.sort(intervals, (a, b) -> a[0] - b[0]);
        List<int[]> result = new ArrayList<>();
        int[] current = intervals[0];
        for (int i = 1; i < intervals.length; i++) {
            if (intervals[i][0] <= current[1]) {
                current[1] = Math.max(current[1], intervals[i][1]);
            } else {
                result.add(current);
                current = intervals[i];
            }
        }
        result.add(current);
        return result.toArray(new int[0][]);
    }
}`,
        javascript: `var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    const result = [];
    let current = intervals[0];
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] <= current[1]) {
            current[1] = Math.max(current[1], intervals[i][1]);
        } else {
            result.push(current);
            current = intervals[i];
        }
    }
    result.push(current);
    return result;
};`
      }
    },
    videos: []
  },
  {
    id: 25,
    title: 'Merge Two Sorted Lists',
    description: 'Merge two sorted linked lists and return it as a sorted list.',
    category: 'Linked List',
    difficulty: 'Easy',
    platforms: ['LeetCode', 'GeeksForGeeks'],
    companies: ['Amazon', 'Microsoft', 'Google'],
    solution: {
      text: 'Use a dummy head and iterate through both lists.',
      code: {
        cpp: `class Solution {
public:
    ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {
        ListNode dummy(0);
        ListNode* tail = &dummy;
        
        while (l1 && l2) {
            if (l1->val < l2->val) {
                tail->next = l1;
                l1 = l1->next;
            } else {
                tail->next = l2;
                l2 = l2->next;
            }
            tail = tail->next;
        }
        
        tail->next = l1 ? l1 : l2;
        return dummy.next;
    }
};`,
        java: `class Solution {
    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        ListNode dummy = new ListNode(0);
        ListNode tail = dummy;
        
        while (l1 != null && l2 != null) {
            if (l1.val < l2.val) {
                tail.next = l1;
                l1 = l1.next;
            } else {
                tail.next = l2;
                l2 = l2.next;
            }
            tail = tail.next;
        }
        
        tail.next = (l1 != null) ? l1 : l2;
        return dummy.next;
    }
}`,
        javascript: `var mergeTwoLists = function(l1, l2) {
    let dummy = new ListNode(0);
    let tail = dummy;
    
    while (l1 && l2) {
        if (l1.val < l2.val) {
            tail.next = l1;
            l1 = l1.next;
        } else {
            tail.next = l2;
            l2 = l2.next;
        }
        tail = tail.next;
    }
    
    tail.next = l1 || l2;
    return dummy.next;
};`
      }
    },
    videos: []
  },
  {
    id: 26,
    title: "Maximum Subarray Sum (Kadane's Algorithm)",
    description: "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
    category: "Array",
    difficulty: "Medium",
    platforms: ["LeetCode", "GeeksForGeeks"],
    companies: ["Amazon", "Microsoft", "Google"],
    solution: {
      text: "Use Kadane's Algorithm to find the maximum subarray sum by keeping track of the current sum and maximum sum seen so far.",
      code: {
        cpp: `class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        int maxSoFar = nums[0];
        int maxEndingHere = nums[0];
        
        for(int i = 1; i < nums.size(); i++) {
            maxEndingHere = max(nums[i], maxEndingHere + nums[i]);
            maxSoFar = max(maxSoFar, maxEndingHere);
        }
        
        return maxSoFar;
    }
};`,
        java: `class Solution {
    public int maxSubArray(int[] nums) {
        int maxSoFar = nums[0];
        int maxEndingHere = nums[0];
        
        for(int i = 1; i < nums.length; i++) {
            maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
            maxSoFar = Math.max(maxSoFar, maxEndingHere);
        }
        
        return maxSoFar;
    }
}`,
        javascript: `var maxSubArray = function(nums) {
    let maxSoFar = nums[0];
    let maxEndingHere = nums[0];
    
    for(let i = 1; i < nums.length; i++) {
        maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
    
    return maxSoFar;
};`
      }
    },
    videos: [
      {
        id: 1,
        title: "Kadane's Algorithm (Hindi)",
        language: "Hindi",
        url: "https://www.youtube.com/embed/9IZYqostl2M"
      }
    ]
  },
  {
    id: 27,
    title: "Longest Consecutive Sequence",
    description: "Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.",
    category: "Array",
    difficulty: "Medium",
    platforms: ["LeetCode", "GeeksForGeeks"],
    companies: ["Google", "Amazon", "Microsoft"],
    solution: {
      text: "Use a HashSet to store all numbers, then for each number check if it's the start of a sequence by looking for consecutive numbers.",
      code: {
        cpp: `class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
        unordered_set<int> numSet(nums.begin(), nums.end());
        int longestStreak = 0;
        
        for(int num : nums) {
            if(!numSet.count(num - 1)) {
                int currentNum = num;
                int currentStreak = 1;
                
                while(numSet.count(currentNum + 1)) {
                    currentNum++;
                    currentStreak++;
                }
                
                longestStreak = max(longestStreak, currentStreak);
            }
        }
        
        return longestStreak;
    }
};`,
        java: `class Solution {
    public int longestConsecutive(int[] nums) {
        Set<Integer> numSet = new HashSet<>();
        for(int num : nums) numSet.add(num);
        
        int longestStreak = 0;
        
        for(int num : nums) {
            if(!numSet.contains(num - 1)) {
                int currentNum = num;
                int currentStreak = 1;
                
                while(numSet.contains(currentNum + 1)) {
                    currentNum++;
                    currentStreak++;
                }
                
                longestStreak = Math.max(longestStreak, currentStreak);
            }
        }
        
        return longestStreak;
    }
}`,
        javascript: `varlongestConsecutive = function(nums) {
    const numSet = new Set(nums);
    let longestStreak = 0;
    
    for(const num of nums) {
        if(!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;
            
            while(numSet.has(currentNum + 1)) {
                currentNum++;
                currentStreak++;
            }
            
            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }
    
    return longestStreak;
};`
      }
    },
    videos: [
      {
        id: 1,
        title: "Longest Consecutive Sequence (English)",
        language: "English",
        url: "https://www.youtube.com/embed/oO5uLE7EUlM"
      },
      {
        id: 2,
        title: "Longest Consecutive Sequence (Hindi)",
        language: "Hindi",
        url: "https://www.youtube.com/embed/MBJoQI9OQbU"
      }
    ]
  }
];

