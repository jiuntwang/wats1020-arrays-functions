// WATS3020 - Arrays and Functions Assignment by Jiun Wang



// TODO: Create a Function called truncateWords() that accepts two arguments: 
// longText (a String with several words in it)
// numWords (an Integer that sets the number of words you want in the returned text)

// TODO: Within the truncateWords() Function, complete the following steps:
// 1. Use the split() function to split the String into an Array
// 2. Use the length attribute to find the number of words in the Array
// 3. Determine how many words should be removed from the String
// 4. Remove those words from the Array
// 5. Add an additional String item to the Array to put an ellipses in: "..."
// 6. Use the join() function to convert the Array back into a String
// 7. Return the truncated String from the Function

  //Create a function
  function truncateWords(longText, numWords) {
  //Split the string into an array
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
  var stringArray = longText.split(" ");
  console.log(stringArray);
  
  //Find how many words are in the array
  var stringLength = stringArray.length;
  console.log(stringLength);
 
  //Determine how many words should be removed from the string
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
  // Starts at 0, and deletes after word 25 (start, deleteCount)
  var shortArray = stringArray.splice(0, numWords);
  console.log(numWords);
  console.log(shortArray);
 
  //Add "..." to the end of the array
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
  shortArray.push("...");
  console.log(shortArray);
 
  //Convert array back to a string
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
  var shortString = shortArray.join(" ");
  console.log(shortString);
 
  //Return string from the function
  //http://www.w3schools.com/jsref/jsref_return.asp
  return shortString; 
}


  //Display the result of the truncateWords function
  var longText = "Well I heard there was a secret chord, That David played and it pleased the Lord, But you don't really care for music, do you? Well it goes like this: The Fourth, the fifth, the minor fall and the major lift, The baffled king composing Hallelujah";
  var numWords = 25;
  var shortString = truncateWords(longText, numWords);
  console.log('longText: ' + longText);
  console.log('shortString: ' + shortString);


// This portion of the script is meant to call and display the result of your Function.
// You do not need to change the following lines, but you may change them if you 
// are experimenting further or pursuing stretch goals.
// var originalText = "There are two hard things in Computer Science: Cach invalidation, naming things, and off-by-one errors.";
// var wordLimit = 8;
// var shortText = truncateWords(originalText, wordLimit);
// console.log('originalText: ' + originalText);
// console.log('shortText: ' + shortText);


