function playfulReply(userMessage) {
  const banter = [
    "You cheeky devil 😏",
    "Oi, bold move there!",
    "Classic Zinedine flair ⚽",
    "I’ll allow it… this time 😉",
    "Haha, you’re trouble, aren’t you?"
  ];
  return banter[Math.floor(Math.random() * banter.length)];
}

module.exports = { playfulReply };
