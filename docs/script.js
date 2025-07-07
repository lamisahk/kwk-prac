const messages = [
  "Be the reason someone feels welcomed, seen, heard, valued, loved, and supported.",
  "Toto, I have a feeling we're not in Kansas anymore.",
  "A ship is safe in harbor, but that’s not what ships are for.",
  "You don’t need to have it all figured out to start.",
  "This message self-destructs in… just kidding, it lives here rent-free now.",
  "Somewhere, a console.log is cheering for you.",
];

function generateMessage() {
  const randomIndex = Math.floor(Math.random() * messages.length);
  const messageDisplay = document.getElementById("messageDisplay");
  messageDisplay.textContent = messages[randomIndex];
}
