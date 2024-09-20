const Ship = function (length) {
    let hitCount = 0;

    function hit() {
        hitCount++;
    }
    function isSunk() {
        if (hitCount >= length) return true;
        return false;
    }

    function getHitCount() {
        return hitCount;
    }

    return {
        hitCount,
        hit,
        isSunk,
        getHitCount,
    };
};

module.exports = Ship;
