class Pagination {
    constructor(el) {
        this.el = el
        this.pages = this.el.querySelectorAll('.pagination-num')
        this.prev = this.el.querySelector('.pagination-nav.prev')
        this.next = this.el.querySelector('.pagination-nav.next')
        this.selectedIndex = 0
    }
    init() {
        if (this.pages.length <= 1) return
        this.setActive(this.selectedIndex)
        this.pages.forEach((page, i) => {
            page.addEventListener('click', () => this.selectPageIndex(i))
        })
        if (this.prev && this.next) {
            this.prev.addEventListener('click', () => this.movePage('prev'))
            this.next.addEventListener('click', () => this.movePage('next'))
        }
    }

    setActive (index) {
        this.pages.forEach((p, i) => {
            
            if (i === index) {
                p.classList.add('active')
            } else {
                p.classList.remove('active')
            }
        })
    }
    selectPageIndex(index) {
        this.selectedIndex = index
        this.setActive(index)
    }
    movePage(dir) {
        const select = dir === 'prev' ? this.selectedIndex - 1 : this.selectedIndex + 1;
        if (select >= 0 && select <= this.pages.length - 1) {
            this.selectPageIndex(select)
        }
    } 
}

(function () {
    const paginations = document.querySelectorAll('.ga-pagination')
    paginations.forEach(pn => {
        const pagination = new Pagination(pn);
        pagination.init()
    })
})()