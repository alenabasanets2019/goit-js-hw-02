"usestrict"

const formatString = function (string) {
    let newString = string;
    if (string.split('').length > 40) {
        let array = string.split('', 40);
        newString = array.join('') + '...';
    }
    return newString;
};
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
console.log(formatString('Curabitur ligula sapien.'));
console.log(
formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
),
);