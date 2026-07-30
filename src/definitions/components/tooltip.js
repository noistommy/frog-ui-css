class Tooltip {
    #defaultOption = {
       content: '',
       pos: 'top-center',
       theme: 'dark',
       show: false,
       trigger: 'hover',
       className: 'ga-tooltip',
    };
    constructor(root, options = {}) {
        this.root = root
        this.options = {...this.#defaultOption, ...options}
        this._show = this.options.show
        this.tooltip = null
        this.currenPos = null
        if (this.options.trigger === 'hover') {
            this.root.addEventListener('mouseenter', e => { this.setShow() })
            this.root.addEventListener('mouseleave', e => { this.setClose() })
            this.root.addEventListener('touchstart', e => { this.setShow() })
            this.root.addEventListener('touchsend', e => { this.setClose() })
        } else {
            this.root.addEventListener('click', e => { this.setToggle() })
        }

       
    }
    setToggle () {
        if (this._show) {
            this.setClose()
        } else {
            this.setShow()
        }
    }
    setTooltip () {
        if (this.tooltip && this._show) this.setClose()

        this.tooltip = document.createElement('div');
        this.setAttribute()
        document.body.append(this.tooltip)
        this.setPosition()

        if (this.options.trigger === 'click') {
            window.addEventListener('scroll', () => this.setPosition())
            window.addEventListener('resize', () => this.setPosition())
        }

        requestAnimationFrame(() => {
            this.tooltip.classList.add('show')
        });
    }

    setAttribute () {
        this.tooltip.innerHTML = this.options.content ?
        this.options.content :
        this.root.querySelector('[fr-target]').innerHTML
        this.tooltip.classList.add(...[
            this.options.className,
            `theme-${this.options.theme}`,
        ]);
    }

    setPosition () {
        const W = window.innerWidth;
        const H = window.innerHeight;
        let [dir, align] = this.options.pos.split('-') || ['top', 'center'];

        const rootPos = this.root.getBoundingClientRect();
        const ttPos = this.tooltip.getBoundingClientRect();
        const offset = 10
        const alignOffset = 0

        let tPos = rootPos.top - ttPos.height - offset
        let bPos = rootPos.bottom + offset

        let lPos = rootPos.left - (ttPos.width + offset)
        let rPos = rootPos.right + offset

        if (dir === 'top' && tPos < 0) dir = 'bottom'
        if (dir === 'bottom' && H - (bPos + ttPos.height) < 0) dir = 'top'

        if (dir === 'left' && lPos < 0) dir = 'right'
        if (dir === 'right' && W - (rPos + ttPos.width) < 0) dir = 'left'

        if (dir === 'top' || dir === 'bottom') {
            this.tooltip.style.top = dir === 'top' ? tPos + 'px' : bPos + 'px'
            const cPos = rootPos.left + rootPos.width / 2 - ttPos.width / 2
            const endPos = rootPos.right - ttPos.width
            if (rootPos.width >= ttPos.width ) {
                align = 'center'
            } else {
                if (align === 'center' && cPos < 0) {
                align = 'start'
                }
                if (W - rootPos.right - (ttPos.width / 2 - rootPos.width / 2) < 0) {
                align = 'end'
                }
            }
            this.tooltip.style.left = align === 'center' ? cPos + 'px' : align === 'end' ? alignOffset + endPos + 'px' : alignOffset + rootPos.left + 'px'
        } else {
            this.tooltip.style.left = dir === 'left' ? `${lPos}px` : `${rPos}px`
            const cPos = rootPos.top + rootPos.height / 2 - ttPos.height / 2
            const endPos = rootPos.bottom - ttPos.height
        
            if (rootPos.height >= ttPos.height) {
              align='center'
            } else {
              if (align === 'center' && cPos < 0) {
                align = 'start'
              }
              if (W - rootPos.right - (ttPos.width / 2 - rootPos.width / 2) < 0) {
                align = 'end'
              }
            }
            this.tooltip.style.top = align === 'center' ? cPos + 'px' : align === 'end' ? endPos + 'px' : rootPos.top + 'px'
        }
        this.tooltip.classList.remove(this.currenPos)
        this.currenPos = `${dir}-${align}`
        this.tooltip.classList.add(this.currenPos)

    }
    get show () {
        return this._show
    }
    set show (value = true) {
        this._show = value
    }

    setShow () {
        if(this._show) return
        this.setTooltip()
        this._show = true
    }
    setClose () {
        this._show = false
        if (this.tooltip) {
            this.tooltip.classList.remove('show')
            this.tooltip.remove()
            this.tooltip = null
        }
        if (this.options.trigger === 'click') {
            window.removeEventListener('scroll', () => this.setPosition())
            window.removeEventListener('resize', () => this.setPosition())
        }
    }

}
