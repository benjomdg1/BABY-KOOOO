window.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("questionModal");
  const submitBtn = document.getElementById("submitAnswer");
  const answerInput = document.getElementById("answerInput");
  const feedback = document.getElementById("feedback");
  const heart = document.querySelector(".petal-heart");
  const paper = document.getElementById("lovePaper");

  // Hide everything except the modal initially
  document.querySelector(".container").style.display = "none";

  // Handle answer submission
  submitBtn.addEventListener("click", () => {
    const answer = answerInput.value.trim().toLowerCase();

    if (answer === "mahal na mahal") {
      feedback.textContent = "Correct ❤️";
      feedback.style.color = "green";

      // Close the modal after a delay
      setTimeout(() => {
        modal.style.display = "none";
        document.querySelector(".container").style.display = "block";
        startAnimation(); // trigger petals and letter animation
      }, 1000);
    } else {
      feedback.textContent = "Eeeeengk, very wrong 😝";
      feedback.style.color = "crimson";
    }
  });

  // Function that runs the heart animation
  function startAnimation() {
    const petalCount = 40;
    for (let i = 0; i < petalCount; i++) {
      const petal = document.createElement("div");
      petal.classList.add("petal");

      const angle = (i / petalCount) * Math.PI * 2;
      const x = 16 * Math.pow(Math.sin(angle), 3);
      const y = -(
        13 * Math.cos(angle) -
        5 * Math.cos(2 * angle) -
        2 * Math.cos(3 * angle) -
        Math.cos(4 * angle)
      );

      petal.style.left = 50 + x * 8 + "%";
      petal.style.top = 50 + y * 8 + "%";
      petal.style.animationDelay = `${i * 0.05}s`;
      heart.appendChild(petal);
    }

    // Fade out petals after blooming
    setTimeout(() => {
      document.querySelectorAll(".petal").forEach(p => p.classList.add("fade-out"));
    }, 4000);

    // Reveal the love letter
    setTimeout(() => {
      paper.classList.add("revealed");
    }, 2000);
  }
});
