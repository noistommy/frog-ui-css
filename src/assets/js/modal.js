const showB = document.querySelector('.show-btn');
let closeB = null

const modal = document.querySelector('.ga-modal-container');
const closeModal = () => {
  modal.classList.remove('open')
}
closeB = document.querySelector('.close');
if(modal) {
  showB.onclick = () => {
    modal.classList.add('open')
    var cancel = document.querySelector('.cancel');
    cancel.addEventListener('click', closeModal)
  }
  closeB.onclick = () => {
    closeModal()
  }
}



