class SelectBox {
    constructor(root) {
        this.root = root
        this.selectedItem = ''
        this.menu = this.root.querySelector('.select-menu')
        this.selectedElement = this.root.querySelector('.selected-item')
        this.optionItems = this.root.querySelectorAll('.item')
        this.inputElement = this.selectedElement.querySelector('input') || null
        this.textElement = this.selectedElement.querySelector('.default-text') || null
    }

    toggleMenu() {
        this.root.classList.toggle('open')
    }

    hideMenu() {
        this.root.classList.remove('open')
    }
    getSelectedItem() {
        return this.selectedItem
    }
    setSelectedItem(optionItem) {
        if (!optionItem) return

        if (typeof optionItem === 'string') {
            this.optionItems.forEach((item) => {
                if (item.textContent === optionItem) {
                    optionItem = item
                }
            })
        }

        this.selectedItem = optionItem.textContent.trim() 
        
        if (this.inputElement) {
            this.inputElement.value = this.selectedItem
        } else if (this.textElement) {
            this.textElement.textContent = this.selectedItem
        }

        this.optionItems.forEach((item) => item.classList.remove('selected'))
        optionItem.classList.add('selected')

        this.root.dispatchEvent(new CustomEvent('selectbox:change', {
            detail: { selectedItem: this.selectedItem },
        }))
    }

    bindEvents() {
        this.root.addEventListener('click', (e) => {
            if (this.menu && this.menu.contains(e.target)) return
            this.toggleMenu()
        })

        document.addEventListener('click', (e) => {
            if (!this.root.contains(e.target)) {
                this.hideMenu()
            }
        })

        if (this.menu) {
            this.menu.addEventListener('click', (e) => {
                const optionItem = e.target.closest('.item')
                if (!optionItem || !this.menu.contains(optionItem)) return

                this.setSelectedItem(optionItem)
                this.hideMenu()
            })
        }
    }

    init() {
        const preSelected = this.root.querySelector('.item.selected')
        const firstOption = this.root.querySelector('.item')

        if (preSelected) {
            this.setSelectedItem(preSelected)
        } else if (firstOption) {
            this.setSelectedItem(firstOption)
        }

        this.bindEvents()
    }
}
