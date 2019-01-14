
/*Ask the user to enter a word to add to an array. Add the user input into the array.
  If the user enters a 'q', stop asking them to enter a word.*/

var list_words = [];

var stop = prompt("Please enter a word in your array. Press 'q' to exit"); // asks for user input

 while (stop!='q')
 {

     list_words.push(stop);
     stop = prompt("Please enter another in your array. Press 'q' to exit") //asks for input until they enter "q"
 }

 console.log(list_words);  // list the array