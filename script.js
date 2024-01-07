const question_and_answer = document.querySelectorAll(
     "[data-question_and_answer]"
);
const plus = document.querySelector("[data-plus]");

question_and_answer.forEach((qanda) => {
     qanda.addEventListener("click", () => {
          if (qanda.classList.contains("active")) {
               qanda.classList.remove("active");
               qanda.children[0].children[1].innerHTML = "<span>+</span>";
          } else {
               qanda.classList.add("active");
               qanda.children[0].children[1].innerHTML = "<span>-</span>";
          }
     });
});
