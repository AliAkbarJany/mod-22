/*
const names = ['rafsan', 'morshad', 'kajol', 'rafsan', 'sajon', 'oishee', 'jewaal', 'kajol', 'mehedi', 'sajon'];
for (var i = 0; i < names.length; i++) {
    var element = names[i];
    console.log(i, element);
}
*/

/*
var array = ['rafsan', 'kajol', 'shuvo'];
console.log(array.indexOf('sajon'));

output:-1

*/


function removeDuplicate(names) {
    const unique = [];

    for (var i = 0; i < names.length; i++) {
        var element = names[i];

        if (unique.indexOf(element) == -1) {
            unique.push(element);
            console.log(unique);
        }
    }
    return unique;

    /*
    for (var element of names) {
        if (unique.indexOf(element) == -1) {
            unique.push(element);
            // console.log(unique);
        }
    }
    return unique;
    */


}
const names = ['rafsan', 'morshad', 'kajol', 'rafsan', 'sajon', 'oishee', 'jewaal', 'kajol', 'mehedi', 'sajon'];
const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);