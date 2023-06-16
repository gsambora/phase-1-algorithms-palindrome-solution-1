function reverseString(word){
  return word.split("").reverse().join("")
}

function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = reverseString(word);

  return word === reversedWord;
}

/* 
  Add your pseudocode here
  reverse the input string

  if the reversed string is the same as the input
    return true
  else
    return false
*/

/*
  Add written explanation of your solution here
  If we input a word into the function, we want to return true if the reversed word is the same.
  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));
}

module.exports = isPalindrome;
