function startGame() {
  // starting a new game
  var messagesElement = document.getElementById("messeges");
  messagesElement.innerText = "Welcome to MultiMath! Starting new game...";
}

document.getElementById("startGame").addEventListener("click", startGame);
