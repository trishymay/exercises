// 1. write a function called woofToMeow that takes an array of strings. replace every string "woof" inside the array with "meow".
// ["woof", "tire", "beep", "woof"] => ["meow", "tire", "beep", "meow"]

function woofToMeow (arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "woof") {
      arr[i] = "meow";
    }
  }
  return arr;
}

// 2. write a function called englishToKitten that takes a string. return a new string with every word in the string replaced with "meow". keep all of the punctuation from the original string.

// "more food, please." => "meow meow, meow."

function englishToKitten (string) {
  return string.replace(/\w+/g, "meow");
}


// 3. write a function called sum that takes an array of numbers and returns the sum of everything in the array.
// [1,2,3] => 6

function sum (arr) {
  var total = 0;
  for(var i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

// 4. write a function called echo that takes a function and another argument, and calls the function twice with the given argument.
// echo(alert, "beep");
// will call
// alert("beep");
// twice

function echo (f, input) {
  f(input);
  f(input);
}

// 5. write a function called repeat that takes a function and an array of arguments, and calls the function once per argument.

// repeat(func, arguments);
// repeat(alert, ["test", "anotherTest"]);
// will call
// alert("test");
// and
// alert("anotherTest");

function repeat (f, arr) {
  for (var i = 0; i < arr.length; i++) {
    f(arr[i]);
  }
}