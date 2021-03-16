// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay
<<<<<<< HEAD


const modalBtn = document.querySelector(".modal-btn");
const modalOverlay = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", function(){
    modalOverlay.classList.toggle("open-modal");
});
closeBtn.addEventListener("click", function(){
    modalOverlay.classList.remove("open-modal");
});
=======
>>>>>>> 529409159053c75a146ad65a94590e59b7851c4c
