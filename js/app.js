function startGame() {
    var playerName = getInputValue("playername");
    logPlayer(playerName);
    postScore(80, playerName);
}
function logPlayer(name) {
    if (name === void 0) { name = "MultiMath Player"; }
    console.log("New game starting for player: ".concat(name));
}
function getInputValue(elementID) {
    var inputElement = (document.getElementById(elementID));
    if (inputElement.value === "") {
        return undefined;
    }
    else {
        return inputElement.value;
    }
}
function postScore(score, playerName) {
    if (playerName === void 0) { playerName = "MultiMath Player"; }
    var scoreElement = document.getElementById("postedScores");
    scoreElement.innerText = "".concat(score, " - ").concat(playerName);
}
document.getElementById("startGame").addEventListener("click", startGame);
var logMessage = function (message) { return console.log(message); };
logMessage("Welcome to MultiMath!");
//# sourceMappingURL=app.js.map