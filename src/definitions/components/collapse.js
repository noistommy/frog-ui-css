class Collapse {
    #defaultOptions = {
        open: false,
        toggleName: 'open',
        target: '.col-target'
    }
    constructor (root, options) {
        this.root = root
        this.options = {...this.#defaultOptions, ...options}
        this._open = this.options.open
        this.trigger = this.root.querySelector('[fr-toggle]')
        if (!this.trigger) {
            this.trigger = this.root
        }

        this.trigger.style.cursor = 'pointer'

        this.trigger.addEventListener('click', () => this.setToggle())
        
        window.addEventListener('click', (e) => {
           if (!this.root.contains(e.target)) {
                this.setClose()
           }
        })
        
        this.root.classList.add('collapse')
        this.render()
    }

    setToggle () {
        this._open = !this._open 
        this.render()     
    }
    setShow () {
        this._open = true
        this.render()
    }
    setClose () {

        this._open = false
        this.render()
    }

    get open () {
        return this._open
    }

    set open (value = true) {
        this._open = value
        this.render()
    }

    render () {
        if (this._open) {
            this.root.classList.add(this.options.toggleName)
        } else {
            this.root.classList.remove(this.options.toggleName)
        }
    }
}

class Accordion {
    constructor (root) {
        this.root = root
        this.items = [...this.root.children]

        this.items.forEach(e => e.setAttribute('fr-collapse', ''))

    }
}

(function() {
    const frAccordions = document.querySelectorAll('[fr-accordion]')
    frAccordions.forEach(accor => {
        const acc = new Accordion(accor)
    })

})()

