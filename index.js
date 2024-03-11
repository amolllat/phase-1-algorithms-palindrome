function isPalindrome(word) {
  // Write your algorithm here
  word = word.toLowerCase();

  let left = 0;
  let right = word.length - 1;
  while (left < right) {
    // If characters at the pointers are not equal, it's not a palindrome
    if (word[left] !== word[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

/* 
Add your pseudocode here
  first the i write a function 
    function isPalindrome(word):
    // Step 1: Convert the input word to lowercase
    word = lowercase(word)

    // Step 2: Initialize two pointers, `left` and `right`, pointing to the start and end of the word, respectively
    left = 0
    right = length(word) - 1

    // Step 3: Iterate through the word while `left` is less than `right`
    while left < right:
    // Step 4: If characters at `left` and `right` are not equal, return false (not a palindrome)
    if word[left] != word[right]:
        return false

    // Step 5: Move `left` pointer to the right
      left = left + 1
        
    // Step 6: Move `right` pointer to the left
      right = right - 1

    // Step 7: If the loop completes without returning false, return true (it's a palindrome)
  return true
*/

/*
  Add written explanation of your solution here

  *To ensure case-insensitive comparisons, the function converts the input word to lowercase.
  *It employs two pointers, left and right *initially positioned at the start and end of the word, respectively.
  *The function iterates through the word comparing characters at the left and right pointers.
  *If characters at the pointers do not match, the function returns false, indicating that the word is not a palindrome.
  *Conversely, if all characters match during the iteration, the function returns true, signaling that the word is indeed a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  /*my test for the another cases*/
  console.log("Expecting: true");
  console.log(isPalindrome('abba')); 

  console.log("Expecting: true");   
  console.log(isPalindrome('a'));   
 
  console.log("Expecting: false");    
  console.log(isPalindrome('ab'));   
}

module.exports = isPalindrome;

     