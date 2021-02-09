(function(){
    var root = this;
    var previous_typecheck = root.TypeCheck;

    var TypeCheck = {
        /**
         * will check whether a variable is null or undefined
         * @param {any} obj 
         * @returns {boolean}
         */
        IsNotNullOrUndefined: function(obj){
            return obj !== null && obj !== undefined;
        },

        /**
         * will check whether a variable is not empty and is a date instance and a valid date.
         * @param {any} date 
         * @returns {boolean}
         */
        IsValidDate: function(date){
            return module.exports.IsNotNullOrUndefined(date) && 
            Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date);
        },

        /**
         * will check whether a variable is not empty and is a valid number
         * @param {any} num 
         * @returns {boolean}
         */
        IsValidNumber: function(num){
            return module.exports.IsNotNullOrUndefined(num) && typeof(num) === "number" && !isNaN(num);
        },
        
        /**
         * will check whether the string is empty or consist of white spaces.
         * @param {string} str 
         * @returns {boolean}
         */
        IsNonEmptyString: function(str){
            return module.exports.IsNotNullOrUndefined(str) && str.toString().trim() !== "";
        }
    }

    TypeCheck.noConflict = function(){
        root.TypeCheck = previous_typecheck;
        return TypeCheck;
    }

    if( typeof exports !== 'undefined' ) {
        if( typeof module !== 'undefined' && module.exports ) {
            exports = module.exports = TypeCheck;
        }
        exports.TypeCheck = TypeCheck;
    } 
    else {
        root.TypeCheck = TypeCheck;
    }
}).call(this);
