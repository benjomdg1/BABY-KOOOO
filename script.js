window.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("questionModal");
  const submitBtn = document.getElementById("submitAnswer");
  const answerInput = document.getElementById("answerInput");
  const feedback = document.getElementById("feedback");
  const heart = document.querySelector(".petal-heart");
  const paper = document.getElementById("lovePaper");
  const container = document.querySelector(".container");

  container.style.display = "none";

  // ✅ CORRECT DATE (August 10, 2025)
  const CORRECT_DAY = 10;
  const CORRECT_MONTH = 8; // August
  const CORRECT_YEAR = 2025;

  const months = {
    january: 1, jan: 1,
    february: 2, feb: 2,
    march: 3, mar: 3,
    april: 4, apr: 4,
    may: 5,
    june: 6, jun: 6,
    july: 7, jul: 7,
    august: 8, aug: 8,
    september: 9, sep: 9,
    october: 10, oct: 10,
    november: 11, nov: 11,
    december: 12, dec: 12
  };

  submitBtn.addEventListener("click", () => {
    const raw = answerInput.value
      .toLowerCase()
      .replace(/,/g, "")
      .replace(/\s+/g, " ")
      .trim();

    let day, month, year;

    // FORMAT: August 10 2025 / Aug 10 2025
    const wordMatch = raw.match(
      /([a-z]+)\s(\d{1,2})\s(\d{4})/
    );

    // FORMAT: 8/10/2025 or 08/10/2025
    const slashMatch = raw.match(
      /(\d{1,2})\/(\d{1,2})\/(\d{4})/
    );

    // FORMAT: 2025-08-10
    const dashMatch = raw.match(
      /(\d{4})-(\d{1,2})-(\d{1,2})/
    );

    if (wordMatch && months[wordMatch[1]]) {
      month = months[wordMatch[1]];
      day = parseInt(wordMatch[2], 10);
      year = parseInt(wordMatch[3], 10);
    } 
    else if (slashMatch) {
      month = parseInt(slashMatch[1], 10);
      day = parseInt(slashMatch[2], 10);
      year = parseInt(slashMatch[3], 10);
    } 
    else if (dashMatch) {
      year = parseInt(dashMatch[1], 10);
      month = parseInt(dashMatch[2], 10);
      day = parseInt(dashMatch[3], 10);
    }

    const isCorrect =
      day === CORRECT_DAY &&
      month === CORRECT_MONTH &&
      year === CORRECT_YEAR;

    if (isCorrect) {
      feedback.textContent = "Correct ❤️";
      feedback.style.color = "green";

      setTimeout(() => {
        modal.style.d
