function dodgeNoButton() {
  const noBtn = document.getElementById("no-btn");

  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - 40);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - 40);

  noBtn.style.position = "fixed";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

function showEnvelopeStage() {
  document.getElementById("popup-overlay").classList.add("hidden");
  document.getElementById("envelope-overlay").classList.remove("hidden");
}

function openLetterStage() {
  document.getElementById("envelope-overlay").classList.add("hidden");
  document.getElementById("letter-overlay").classList.remove("hidden");
}
