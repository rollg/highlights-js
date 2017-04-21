var Module = (function () {
    var count = 0;

    var getCount = function() {
        return count;
    };

    var increaseCount = function () {
        count++;
    };

    /**
     * some private method;
     */
    var nullifyCount = function () {
        count = 0;
    };

    var resetCount = function () {
        nullifyCount();
    };

    var setCount = function (countNumber) {
        count = countNumber;
    };

    return {
        get: getCount,
        increase: increaseCount,
        reset: resetCount,
        set: setCount
    }
})();
