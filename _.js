// This object will contain the methods
// It will represent our library and contain all the functionallity
const _ = {
    // This will make a value fit two boundaries
    clamp: function(number, lower, upper) {
        let lowerClampedValue = Math.max(number, lower);
        let clampedValue = Math.min(lowerClampedValue, upper);
        return clampedValue;

    //Alternative
        /*if (number > upper) {
            return upper;
        } if (number < lower) {
            return lower;
        } else {
            return number;
        }*/
    },
    
};

console.log(_.clamp(1, 2, 4));


// Do not write or modify code below this line
module.exports = _;