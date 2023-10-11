let expandButton = document.querySelector(".expand-button");
let brandContainer = document.querySelector(".repairing-brands__list");

expandButton.addEventListener("click", function () {
  if (expandButton.textContent == "Показать все") {
    expandButton.classList.remove("expand-button--show");
    expandButton.classList.add("expand-button--hide");
    expandButton.textContent = "Скрыть";

    brandContainer.classList.remove("repairing-brands__list--minimazed");
    brandContainer.classList.add("repairing-brands__list--expanded");
  } else {
    expandButton.classList.remove("expand-button--hide");
    expandButton.classList.add("expand-button--show");
    expandButton.textContent = "Показать все";

    brandContainer.classList.remove("repairing-brands__list--expanded");
    brandContainer.classList.add("repairing-brands__list--minimazed");
  }
});