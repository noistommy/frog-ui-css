class Select {
    #defaultOption = {
        type: 'single', //multiple
        resultType: 'index', //data
        activeName: 'selected'
    };
    constructor(root, options = {}) {
        this.root = root
        this.options = {...this.#defaultOption, ...options}
        this._selected = ''
        this.items = [...this.root.children]
        this.items.forEach((item, i) => {
            if (item.classList.contains('selected')) this._selected = i 
            item.addEventListener('click', e => { this.selectItem(item, i) })
        })
    }

    selectItem (item, index) {
        this._selected = index
        this.render()
    }
    get selected () {
        return this._selected
    }
    set selected (value = null) {
        this._selected = value
        this.render()
    }

    render () {
        this.items.forEach((t, i) => {
            t.classList.remove(this.options.activeName)
            if (i === this._selected) {
                t.classList.add(this.options.activeName)
            }
        })
    }
}


