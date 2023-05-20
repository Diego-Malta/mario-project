const modalElement = document.querySelector(".modal");
const video = document.getElementById("video");
const videoLink = "https://www.youtube.com/embed/TnGl01FkMMo";
const openModal = document.querySelector(".trailer-button");
const closeModal = document.querySelector(".modal-close");

function switchModal(){
    modalElement.classList.toggle("open");
}

openModal.addEventListener("click", () => {
    switchModal();
    video.setAttribute("src", videoLink);
});

closeModal.addEventListener("click", () => {
    switchModal();
    video.setAttribute("src", "");
});