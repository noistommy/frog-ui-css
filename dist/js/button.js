class Buttons {
    constructor(root) {
        this.root = root
        this.buttons = root.querySelectorAll('.ga-button')
    }

    init(selected = null) {
        this.selected = selected

        this.selectButtons(this.selected || this.buttons[0])
        this.buttons.forEach(btn => {
            btn.addEventListener('click', e => { this.selectButtons(btn) })
        })
    }

    selectButtons(el) {
        for(let btn of this.buttons) {
            btn.classList.remove('selected')
            if(btn === el) {
                btn.classList.add('selected')
            }
        }
    }
}