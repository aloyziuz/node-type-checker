/**
 * will check whether a variable is null or undefined
 * @param {any} obj 
 * @returns {boolean}
 */
module.exports.IsNotNullOrUndefined = function (obj){
    return obj !== null && obj !== undefined;
}

/**
 * will check whether a variable is not empty and is a date instance and a valid date.
 * @param {any} date 
 * @returns {boolean}
 */
module.exports.IsValidDate = function(date){
    return IsNotNullOrUndefined(date) && 
    Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date);
}

/**
 * will check whether a variable is not empty and is a valid number
 * @param {any} num 
 * @returns {boolean}
 */
module.exports.IsValidNumber = function (num){
    return IsNotNullOrUndefined(num) && typeof(num) === "number" && !isNaN(num);
}

/**
 * will check whether the string is empty or consist of white spaces.
 * @param {string} str 
 * @returns {boolean}
 */
module.exports.IsNonEmptyString = function (str){
    return IsNotNullOrUndefined(str) && str.toString().trim() !== "";
}