module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    var turn = 2 ** disksNumber - 1;
    return {turns:turn, seconds: turn / (turnsSpeed / 3600)};
}
