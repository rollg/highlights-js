var Singleton = (function () {
    var instance;

    var createInstance = function() {
        var count = 0;

        var getCountMethod = function () {
            return count;
        };

        var resetCount = function () {
            count = 0;
        };

        var increaseCount = function () {
            count++;
        };

        return {
            get: getCountMethod,
            reset: resetCount,
            increase: increaseCount
        }
    };

    var getInstance = function () {
        if (!instance) {
            instance = createInstance();
        }
        return instance;
    };

    return {
        getInstance: getInstance
    }
})();
