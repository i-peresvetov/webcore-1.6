const textContent = document.querySelector(".content__text-window");
const expandTextBtn = document.querySelector(".content__expand");

expandTextBtn.addEventListener("click", function () {
  textContent.classList.toggle("content__text-window--expanded");
  textContent.classList.toggle("content__text-window--minimazed");
  expandTextBtn.classList.toggle("content__expand--hide");
  expandTextBtn.classList.toggle("content__expand--show");
});
