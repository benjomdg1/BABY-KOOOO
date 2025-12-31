window.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("questionModal");
  const submitBtn = document.getElementById("submitAnswer");
  const answerInput = document.getElementById("answerInput");
  const feedback = document.getElementById("feedback");
  const heart = document.querySelector(".petal-heart");
  const paper = document.getElementById("lovePaper");
  const container = document.querySelector(".container");

  container.style.display = "none";

  const correctAnswers = [
    "August 10, 2025",
    "aug 10 2025",
    "08/10/2025"
  ];

  submitBtn.addEventListener("click", () => {
    const answer = answerInput.value.trim().toLowerCase();

    if (correctAnswers.includes(answer)) {
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

    setTimeout(() => {
      document.querySelectorAll(".petal")
        .forEach(p => p.classList.add("fade-out"));
    }, 4000);

    setTimeout(() => {
      paper.classList.add("revealed");
    }, 2000);
  }

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

