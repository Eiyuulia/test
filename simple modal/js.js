// Catch Element
const modalBtn = document.getElementById('modal-btn');
const modal = document.getElementById('simple-modal');
const closeBtn = document.getElementsByClassName('close-btn')[0];


// Function

//      F Open Modal
function openModal(){
    modal.style.cssText = 'display: block;';
}
//      F Close Modal
function closeModal(){
    modal.style.cssText = 'display: none;';
}
function closeModalB(e){
    if (e.target == modal){
        modal.style.cssText = 'display: none;';
    }
}


// Event Listener

//      EL Open Modal
modalBtn.addEventListener('click', openModal);
//      EL Close Modal with button
closeBtn.addEventListener('click', closeModal);
//      EL Close Modal with click on outside modal
window.addEventListener('click', closeModalB);