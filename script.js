const icons = document.querySelectorAll("[data-icon]");

icons.forEach((icon) => {
     icon.addEventListener("click", () => openAnswers(icon));
});

function openAnswers(icon) {
     icon.innerHTML = "hello";
     console.log(icon);
}
