const feedbackBtn = document.querySelector(".menu-button--chat");
const feedbackBtnClose = document.querySelector(".modal-feedback__close");
const modalFeedback = document.querySelector(".modal-feedback");

feedbackBtn.addEventListener("click", function () {
  modalFeedback.classList.toggle("modal--show");
  modalFeedback.classList.toggle("modal--hide");
});
feedbackBtnClose.addEventListener("click", function () {
  modalFeedback.classList.toggle("modal--show");
  modalFeedback.classList.toggle("modal--hide");
});


const callBtn = document.querySelector(".menu-button--call");
const callBtnClose = document.querySelector(".modal-call__close");
const modalCall = document.querySelector(".modal-call");

callBtn.addEventListener("click", function () {
  modalCall.classList.toggle("modal--show");
  modalCall.classList.toggle("modal--hide");
});
callBtnClose.addEventListener("click", function () {
  modalCall.classList.toggle("modal--show");
  modalCall.classList.toggle("modal--hide");
});
