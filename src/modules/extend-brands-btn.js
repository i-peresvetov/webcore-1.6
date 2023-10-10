let expandButton = document.querySelector(".expand-button");
let brandContainer = document.querySelector(".brand-list-container");

expandButton.addEventListener("click", function () {
  if (expandButton.textContent == "Показать все") {
    expandButton.classList.remove("expand-button--show");
    expandButton.classList.add("expand-button--hide");
    expandButton.textContent = "Скрыть";

    brandContainer.classList.remove("brand-list-container--minimazed");
    brandContainer.classList.add("brand-list-container--expanded");
  } else {
    expandButton.classList.remove("expand-button--hide");
    expandButton.classList.add("expand-button--show");
    expandButton.textContent = "Показать все";

    brandContainer.classList.remove("brand-list-container--expanded");
    brandContainer.classList.add("brand-list-container--minimazed");
  }
});