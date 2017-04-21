var HouseOfCards = function () {
    this.numberOfEpisodes = 52;
    this.numberOfSeasons = 4;
    this.distributor = 'Netflix';
};

HouseOfCards.prototype = (function () {
    var startPlay = function () {
        console.log('start playing');
    };

    var stopPlay = function () {
        console.log('stop playing');
    };

    return {
        play: startPlay,
        stop: stopPlay
    }
})();
