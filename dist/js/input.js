
function useEditInput () {
  const editInput = document.querySelector('.edit');
  const editToggle = document.querySelector('.edit-btn');
  const inputEl = editInput.querySelector('input')
  const result = {
    get useValue() {
      return this._txt || '';
    },
    set useValue(value) {
      this._txt = value
    }
  }

  editToggle.onclick = () => {
    const hasEdit = editInput.classList.contains('editable')
    if (hasEdit) {
      result.useValue = inputEl.value;
      editToggle.innerHTML = "<i class='xi-pen' />"
      editInput.classList.remove('editable')
    } else {
      editToggle.innerHTML = "<i class='xi-check' />"
      editInput.classList.add('editable')
      editInput.querySelector('input').focus()
      editInput.querySelector('input').select()
    }
  }
}