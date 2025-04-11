import projects from "./data.js";

function animateWords() {
  const sentence = "I am a Fullstack web developer";
  const words = sentence.split(" ");
  const container = document.getElementById("sentence");

  words.forEach((word, i) => {
    if (word === "Fullstack") {
      const span = document.createElement("span");
      span.className = "fullstack";
      span.textContent = word + " ";
      span.appendChild(document.createElement("br"));
      container.appendChild(span);
    } else if (word === "developer") {
      // Animate each letter
      word.split("").forEach((letter, index) => {
        const span = document.createElement("span");
        span.className = "letter";
        span.textContent = letter;
        span.style.animationDelay = `${index * 0.1}s`;
        container.appendChild(span);
      });
      container.appendChild(document.createTextNode(" "));
    } else {
      container.appendChild(document.createTextNode(word + " "));
    }
  });
}

animateWords();

let htmlSummary = "";
projects.forEach((project) => {
  htmlSummary += `
  <div class="card project-card" style="width: 18rem;">
  <img src=${project.imageUrl} class="card-img-top" alt="imageUrl">
  <div class="card-body">
    <h5 class="card-title">${project.title}</h5>
    <p class="card-text">${project.description}</p>
    <a href="${project.projectUrl}" target="_blanck" class="btn btn-secondary project-button">Preview</a>
  </div>
</div>`;
  const container = document.querySelector(".project-container");
  container.innerHTML = htmlSummary;
});
