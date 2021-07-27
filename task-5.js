"usestrict"

const checkForSpam = function(message) {
    if (message.toLowerCase().indexOf('spam') != -1 || message.toLowerCase().indexOf('sale') != -1) {
        return true;
    } else return false;
};
console.log(checkForSpam('Latest technology news')); // false
console.log(checkForSpam('JavaScript weekly newsletter')); // false
console.log(checkForSpam('Get best sale offers now!')); // true
console.log(checkForSpam('[SPAM] How to earn fast money?')); // true