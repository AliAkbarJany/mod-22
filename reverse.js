
/*
var array = [12, 34, 45, 67, 89, 98, 65, 23];

console.log(array);
console.log('array length:', array.length);
console.log('index of 89:', array.indexOf(89));
console.log('element of 6 number index is', array[6])
array[1] = 0;
console.log('34 er jaigai 0 hobe ', array);
*/

// string-----------

/*
var myString = 'how are you';

console.log('length of string:', myString.length);
console.log('element of 3 number index::', myString[2]);

myString[2] = 'z';
console.log(myString);
*/


function reverseString(text) {
    let reverse = '';
    for (var i = 0; i < greetings.length; i++) {
        var letter = greetings[i];
        console.log(i, letter);
        // reverse = reverse + letter;
        reverse = letter + reverse;
        console.log(reverse);
    }
    return reverse;
}

const greetings = "how are you";
const reversed = reverseString(greetings);
console.log('here is the reverse result::', reversed);






