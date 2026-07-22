class Buttons {
    constructor(root) {
        this.root = root
        this._selected = null 
        this.buttons = root.querySelectorAll('.ga-button')

    }

    init(selected = null) {
        this._selected = selected || 0

        this.selectButtons(this.buttons[this._selected])
        this.buttons.forEach((btn, i) => {
            btn.addEventListener('click', e => { this.selectButtons(btn) })
        })
    }

    selectButtons(el) {
        for(let [index, btn] of this.buttons.entries()) {
            btn.classList.remove('selected')
            if(btn === el) {
                btn.classList.add('selected')
                this._selected = index
            }
        }
    }

    get selected () {
        return this._selected
    }

    set selected (index) {
        this._selected = index
    }
}

class Select {
    constructor(root) {
        this.root = root
        this._selected = null
        console.log(this.root)
        this.items = this.root.childNodes
        this.items.forEach((item, i) => {
            item.addEventListener('click', e => { this.selectItem(i) })
        })
    }

    selectItem (index) {
        console.log(index)
    }
}