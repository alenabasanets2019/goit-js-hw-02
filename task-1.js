"usestrict"

const logItems = function(array) {
    array.forEach((value, index) => console.log(`${index + 1} - ${value}`));
}
logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);