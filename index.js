function isPalindrome(word) {
  // Write your algorithm here
  let reversedWord = '';
  word = word.toLowerCase();
  reversedWord = [...word].reverse().join('');
  if(word === reversedWord ){
    return true;
  }
  else {
    return false;
  }

}

/* 
  Add your pseudocode here
  declare a variabe reversedWord to hold the rreversed string
  convert the revered word to lowerCase
  split word
  reverse word
  join word 
  is word === reversedWord
  return true is yes
  return false if not
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
