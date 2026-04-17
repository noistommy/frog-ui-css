// const checkbox = document.querySelectorAll('.ga-checkbox');

function changChecked(e, t, s=null) {
    let input = e.previousSibling
    input.checked = s ? s : !input.checked;
    t.classList.toggle('checked')
}

function selectRadio(e, elem) {
    const name = e.previousSibling.getAttribute('name');
    const radioList = document.querySelectorAll(`[name="${name}"]`)
    for(let r of radioList) {
        r.checked = false
        r.parentElement.classList.remove('checked')
    }
    changChecked(e, elem)
}

// checkbox.forEach(elem => {
//     if(elem.className.indexOf('radio') > -1) {
//         elem.addEventListener('click', e => {selectRadio(e.target, elem)})
//     } else {
//         elem.addEventListener('click', e => {changChecked(e.target, elem)})
//     }
// })

function useCheckBox(wrapper = document) {
    const cbs = wrapper.querySelectorAll('.ga-checkbox');
    cbs.forEach(elem => {
        if (elem.className.indexOf('radio') > -1) {
            elem.addEventListener('click', e => { selectRadio(e.target, elem) })
        } else {
            elem.addEventListener('click', e => { changChecked(e.target, elem) })
        }
    })

}

class Checkbox {
    constructor(el) {
        this.el = el
        this.input = this.el.querySelector('input')
        this.type = this.input.type
    }
    init() {
        this.el.addEventListener('click', e => this.type === 'checkbox' ? this.changChecked() : this.selectRadio())
    }
    changChecked() {
        this.input.checked = !this.input.checked;
        this.el.classList.toggle('checked')
    }
    selectRadio() {
        const name = this.input.name;
        const radioList = document.querySelectorAll(`[name="${name}"]`)
        for(let r of radioList) {
            r.checked = false
            r.parentElement.classList.remove('checked')
        }
        this.changChecked()
    }
}

(function () {
    const checkboxes = document.querySelectorAll('label.ga-checkbox')
    checkboxes.forEach(checkbox => {
        const cb = new Checkbox(checkbox);
        cb.init()
    })
})()