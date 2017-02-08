// console.log(yourFunction(["ASDF", "BLAH", "Oh! ", "Hi ", "There!"], 3));

var wordArray= ["ASDF", "BLAH", "Oh! ", "Hi ", "There!"];
var secondWordArray = ["zombie", "taco", "hi","duder"]
// var stringResult = '';  // starting with an empty string

// concatenate all of the words

function putAllOfTheWordsTogether(stringArray, startingIndex){
  var stringResult = '';  // starting with an empty string

for (var i = startingIndex; i < stringArray.length; i++) {  //change stringArray to local and not word array
  // console.log(stringResult);
    stringResult = stringResult + wordArray[i];  // add a word to the stringResult
    // stringResult[i];
  }
return stringResult;
}

console.log(putAllOfTheWordsTogether(wordArray, 2));
console.log(putAllOfTheWordsTogether(wordArray, 3));
console.log(putAllOfTheWordsTogether(secondWordArray, 3));
// console.log(stringResult);




// var wordArray= ["ASDF", "BLAH", "Oh! ", "Hi ", "There!"];
// console.log(wordArray.join('!!!'));
