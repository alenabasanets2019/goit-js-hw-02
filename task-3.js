"usestrict"

const findLongestWord = function (string) {
    let array = string.split(" ");
    let LongestWord = array[0];
    for (let i = 1; i < array.length; i++) {
        if(array[i].length > LongestWord.length) {
            LongestWord = array[i];
        }
    }
    return LongestWord;
};
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
console.log(findLongestWord('Google do a roll')); // 'Google'
console.log(findLongestWord('May the force be with you')); // 'force'