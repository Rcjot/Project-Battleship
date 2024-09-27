const Ship = function (length) {
    let hitCount = 0;
    let position = 0;

    function hit() {
        hitCount++;
    }

    function isSunk() {
        if (hitCount >= length) return true;
        return false;
    }

    function rotateShip() {
        if (position === 3) {
            position = 0;
        } else {
            position++;
        }
    }

    function getHitCount() {
        return hitCount;
    }

    function getPosition() {
        return position;
    }

    function getLength() {
        return length;
    }

    return {
        hitCount,
        hit,
        isSunk,
        rotateShip,
        getHitCount,
        getPosition,
        getLength,
    };
};

module.exports = Ship;
