window.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("questionModal");
  const submitBtn = document.getElementById("submitAnswer");
  const answerInput = document.getElementById("answerInput");
  const feedback = document.getElementById("feedback");
  const heart = document.querySelector(".petal-heart");
  const paper = document.getElementById("lovePaper");
  const container = document.querySelector(".container");

  // Hide main content at start
  container.style.display = "none";

  // ✅ SET THE CORRECT DATE HERE (YYYY-MM-DD)
  const correctDate = new Date("2025-08-10");

  submitBtn.addEventListener("click", () => {
    const input = answerInput.value.trim();

    // Try to parse user input as a date
    const userDate = new Date(input);

    // Validate date safely
    const isCorrect =
      !isNaN(userDate.getTime()) &&
      userDate.getFullYear() === correctDate.getFullYear() &&
      userDate.getMonth() === correctDate.getMonth() &&
      userDate.getDate() === correctDate.getDate();

    if (isCorrect) {
      feedback.textContent = "Correct ❤️";
      feedback.style.color = "green";

      setTimeout(() => {
        modal.style.display = "none";
        document.body.classList.add("starry");
        container.style.display = "block";
        startStars();
        startHeartAnimation();
      }, 1200);
    } else {
      feedback.textContent = "Eeeeengk, very wrong 😝";
      feedback.style.color = "crimson";
    }
  });

  // 🌸 Heart petal animation
  function startHeartAnimation() {
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

    // Fade petals after bloom
    setTimeout(() => {
      document
        .querySelectorAll(".petal")
        .forEach(p => p.classList.add("fade-out"));
    }, 4000);

    // Reveal letter
    setTimeout(() => {
      paper.classList.add("revealed");
    }, 2000);
  }

  // 🌠 Falling stars animation
  function startStars() {
    for (let i = 0; i < 30; i++) {
      const star = document.createElement("div");
      star.classList.add("shooting-star");
      star.style.left = Math.random() * 100 + "vw";
      star.style.animationDelay = Math.random() * 5 + "s";
      document.body.appendChild(star);
    }
  }
});
