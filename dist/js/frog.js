const lastDayList = [31,28,31,30,31,30,31,31,30,31,30,31];
const days = ['일', '월', '화', '수', '목', '금', '토']
const calendar = document.querySelector('.ga-calendar');
const wrapper = document.querySelector('.cell-wrapper');

const prev = document.querySelector('.prev-month')
const next = document.querySelector('.next-month')

const getDate = () => {
    const y = new Date().getFullYear();
    const m = new Date().getMonth() + 1;
    const d = new Date().getDate();
    return { dy: y, dm: m, dd: d }
}

const {dy, dm, dd} = getDate();
const getStartDay = (year, month) => {
    let startIndex = 0;

    let basicDay = 365 * (year - 1); // 현재 월 기준 전년까지 기본 일 수
    // 윤년 계산
    let leafDay = Math.floor((year-1)/4) -  Math.floor((year-1)/100) +  Math.floor((year-1)/400);
    // 현재 해 오늘까지의 일 수
    let currentYearDay = 1;

    if(month > 1 && year%4 === 0 && (year%100 !== 0 || year%400 === 0)) {
        lastDayList[1] = 29;
    } else {
        lastDayList[1] = 28;
    }

    for(let i=0;i<(month - 1); i++) {
        currentYearDay += lastDayList[i];
    }
    startIndex = (basicDay + leafDay + currentYearDay)%7;
    return startIndex;
};



class Calendar {
    constructor(root, dateString = '') {
        this.root = root
        this.calendar = this.root
        this.wrapper = this.calendar.querySelector('.cell-wrapper')
        this.selectedDate = ''
        this.dateString = dateString
        this.currentYear = null
        this.currentMonth = null
        this.currentDate = 1
        this.selectedYear = null
        this.selectedMonth = null
        this.selectedDay = null
        this.prevButton = this.calendar.querySelector('.prev-month')
        this.nextButton = this.calendar.querySelector('.next-month')
    }

    parseDateString() {
        if (typeof this.dateString !== 'string') return null

        const value = this.dateString.trim()
        let match = value.match(/^(\d{4})-(\d{2})-(\d{2})$/)

        if (match) {
            const year = Number(match[1])
            const month = Number(match[2])
            const date = Number(match[3])
            const maxDate = new Date(year, month, 0).getDate()

            if (month < 1 || month > 12) return null
            if (date < 1 || date > maxDate) return null

            return { year, month, date }
        }

        match = value.match(/^(\d{4})-(\d{2})$/)
        if (!match) return null

        const year = Number(match[1])
        const month = Number(match[2])
        if (month < 1 || month > 12) return null

        return { year, month, date: 1 }
    }

    init() {
        const parsedDate = this.parseDateString()
        const { dy, dm, dd } = getDate();

        if (parsedDate) {
            this.currentYear = parsedDate.year
            this.currentMonth = parsedDate.month
            this.currentDate = parsedDate.date
            this.selectedYear = parsedDate.year
            this.selectedMonth = parsedDate.month
            this.selectedDay = parsedDate.date
        } else {
            this.currentYear = dy
            this.currentMonth = dm
            this.currentDate = dd
            this.selectedYear = dy
            this.selectedMonth = dm
            this.selectedDay = dd
        }

        this.selectedDate = `${this.selectedYear}-${String(this.selectedMonth).padStart(2, '0')}-${String(this.selectedDay).padStart(2, '0')}`

        this.render()

        const initialSelectedCell = this.calendar.querySelector('.cell.selected')
        if (initialSelectedCell) {
            this.selectedDay = Number(initialSelectedCell.dataset.name || this.selectedDay)
            this.selectedDate = `${this.selectedYear}-${String(this.selectedMonth).padStart(2, '0')}-${String(this.selectedDay).padStart(2, '0')}`
        }
        this.calendar.addEventListener('click', e => { this.selectDate(e.target) })
        if (this.prevButton) {
            this.prevButton.addEventListener('click', (e) => {
                e.preventDefault()
                e.stopPropagation()
                this.moveMonth(-1)
            })
        }
        if (this.nextButton) {
            this.nextButton.addEventListener('click', (e) => {
                e.preventDefault()
                e.stopPropagation()
                this.moveMonth(1)
            })
        }
    }

    getSelectedDate() {
        return this.selectedDate
    }

    render() {
        const shouldShowSelectedDate = this.selectedYear === this.currentYear && this.selectedMonth === this.currentMonth
        const date = shouldShowSelectedDate ? this.selectedDay : undefined
        this.setCalendar(this.currentYear, this.currentMonth, date)
    }

    moveMonth(step) {
        const nextMonth = this.currentMonth + step

        if (nextMonth < 1) {
            this.currentYear -= 1
            this.currentMonth = 12
        } else if (nextMonth > 12) {
            this.currentYear += 1
            this.currentMonth = 1
        } else {
            this.currentMonth = nextMonth
        }

        this.render()
    }

    selectDate(el) {
        const cell = el.closest('.cell')
        if (!cell || !this.calendar.contains(cell)) return
        if (cell.classList.contains('disabled')) return

        const selectedCells = this.calendar.querySelectorAll('.cell.selected')
        selectedCells.forEach((selectedCell) => selectedCell.classList.remove('selected'))

        cell.classList.add('selected')
        this.selectedYear = this.currentYear
        this.selectedMonth = this.currentMonth
        this.selectedDay = Number(cell.dataset.name || 1)
        this.selectedDate = `${this.selectedYear}-${String(this.selectedMonth).padStart(2, '0')}-${String(this.selectedDay).padStart(2, '0')}`

        this.calendar.dispatchEvent(new CustomEvent('calendar:change', {
            detail: { selectedDate: this.selectedDate },
        }))
    }
    setCalendar (year = dy, month = dm, date = dd) {
        if (!this.wrapper) return;
       this. wrapper.innerHTML = '';
        // if (month != dm) date = 1;
        let startDay = getStartDay(year, month);
    
        let dayList = [];
    
        let currLast = lastDayList[month-1];
        let prevLast = (month === 1) ? 31 : lastDayList[month - 2];
    
        let currDay = 1;
        let nextDay = 1;
    
        for(let i=0;i<6; i++) {
            for(let j=0; j<7; j++) {
                const cell = document.createElement('span')
                cell.style['--x'] = j;
                cell.style['--y'] = i;
                cell.setAttribute('style', `--x:${j};--y: ${i}` )
                cell.classList.add('cell')
                if(i===0 && j < startDay) {
                    cell.classList.add('disabled')
                    cell.dataset.name = prevLast + (j - startDay) + 1
                    dayList.push(prevLast + (j - startDay) + 1)
                } else if(currDay <= currLast) {
                    if( j === 0) {
                        cell.classList.add('sun')
                    }
                    if( j === 6) {
                        cell.classList.add('sat')
                    }
                    if( currDay === date) {
                        cell.classList.add('today')
                        cell.classList.add('selected')
                    }
                    cell.dataset.name = currDay;
                    dayList.push(currDay)
                    currDay++
                } else {
                    cell.classList.add('disabled')
                    cell.dataset.name = nextDay
                    dayList.push(nextDay)
                    nextDay++
                }
                // dayList.push(currDay)
                this.wrapper.append(cell)
            }
        }
        if(nextDay > 7) {
            dayList = dayList.slice(0,-7)
        }
    
        this.calendar.querySelector('span.year').innerHTML = year+'년';
        this.calendar.querySelector('span.month').innerHTML = month+'월';
    
        return dayList;
    }
}

// export default Calendar;

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

class Slider {
  #defaultOption = {
    noHandle: false,
    tooltip: false,
    range: false,
    clipper: false,
    disabled: false,
    unit: null,
    start: 0,
    end: 100
  }
  constructor(root, options = {}) {
    this.el = root
    this.options = {...this.#defaultOption, ...options}
    this.handleEl = this.el.querySelectorAll('.control-btn')
    this.handleMin = this.el.querySelector('.control-btn.min')
    this.handleMax = this.el.querySelector('.control-btn.max')
    this.rangeEl = this.el.querySelector('input[type="range"]')
    this.resultEl = this.el.querySelector('.result-slider')
    this.resultElBg = this.el.querySelector('.result-slider-bg')
    // 전체 slider 길이(px)
    this.container = 0
    // 0 - start값 까지의 길이(px)
    this.start = 0
    // 0 - end값 까지의 길이(px)
    this.end = 0

    // start부터 end까지의 길이(px)
    this.result = 0
    // start부터 end까지의 길이(%)
    this.resultPer = 0

    this.midX = 0
    this.initX = 0
    this.initW = 0
    this.catch = false

    this.noHandle = false
    this.isTooltip = false
    this.unit = this.el.dataset.unit || ''
    this.range = false


    this.noHandle = this.el.classList.contains('no-handle')
    this.isTooltip = this.el.classList.contains('tooltip')
    this.showResult = this.el.classList.contains('show-result')
    this.range = this.options.range
    this.clipper = this.el.classList.contains('clipper')

    if (!this.range) {
      this.handleMax = this.el.querySelector('.control-btn')
    }

    window.addEventListener('resize', () => this.init(this.setPercent(this.start), this.setPercent(this.end)))

    // console.log(this.el.dataset.color[0])
    this.init()
  }

  init() {
    const sliderEl = this.el.getBoundingClientRect()
    this.container =  this.el.offsetWidth
    this.initX = sliderEl.left
    this.initW = this.resultEl.offsetWidth
    this.midX = this.initW / 2

    this.start = this.range ? this.setPx(this.options.start) : 0
    this.end = this.setPx(this.options.end)

    this.changeValue()
    this.setClass()

    this.el.addEventListener('mousedown', (e) => this.handleDown(e))
    this.el.addEventListener('touchstart', (e) => this.handleDown(e))

  }

  setClass () {
    const classes = [
      this.options.noHandle && 'no-handle',
      this.options.tooltip && 'tooltip',
      this.options.showResult && 'show-result',
      this.options.range && 'range',
      this.options.clipper && 'clipper',
      this.options.disabled && 'disabled'
    ]
    // console.log(classes.filter(t => t))
    const claArr = classes.filter(t => t)
    this.el.classList.add(...claArr)
  }
 
  handleDown ({target, pageX}) {
    const pageValue = this.getPageX(event)
    if (target.closest('.control-btn')) {
      this.catch = true

      window.addEventListener('mousemove', e => this.handleMove(e))
      window.addEventListener('mouseup', e => this.handleUp(e))
      window.addEventListener('touchmove', e => this.handleMove(e))
      window.addEventListener('touchend', e => this.handleMove(e))
      window.addEventListener('touchleave', e => this.handleMove(e))
    } else if (target.closest('.break-point')) {
      this.changeValue (this.setPx(target.dataset.step) + this.initX)
    }  else {
      this.changeValue (pageValue)
    }
  }
  handleMove ({pageX}) {
    if(!this.catch) return
    const pageValue = this.getPageX(event)
    this.changeValue (pageValue)
  }
  handleUp ({target,  pageX}) {
    this.catch = false
    window.removeEventListener('mousemove', e => this.handleMove(e))
    window.removeEventListener('mouseup', e => this.handleUp(e))
    window.removeEventListener('touchmove', e => this.handleMove(e))
    window.removeEventListener('touchend', e => this.handleMove(e))
    window.removeEventListener('touchleave', e => this.handleMove(e))
  }
  changeValue (pageX = null) {
    if (pageX) {
      const newPos = this.updatePos(pageX - this.initX)
  
      if (this.range && newPos <= this.midX) {
        this.start = newPos
      } else {
        this.end = newPos
      }
    }
    this.result = this.end - this.start
    this.midX = this.result / 2 + this.start

    this.resultPer = this.setPercent(this.result)

    // this.rangeEl.value = this.resultPer
    this.resultEl.dataset.width = this.resultPer
    if (this.clipper) {
      this.resultEl.style.clipPath = `inset(0 ${100 - this.setPercent(this.end)}% 0 ${this.setPercent(this.start)}% )` 
    } else {
      this.resultEl.style.width = this.result + 'px'
      this.resultEl.style.left = this.start + 'px'
    }

    
    if (!this.noHandle && this.range) {
      this.handleMin.style.left = this.start + 'px'
      this.handleMin.dataset.width = this.setPercent(this.start)
    }
    if (!this.noHandle) {
      this.handleMax.style.left = this.end + 'px'
      this.handleMax.dataset.width = this.setPercent(this.end)
    }

  }


  updatePos (distance) {
    const offset = distance
    return offset > this.container ? this.container : offset < 0 ? 0 : offset
  }

  setPercent (value) {
    return Math.round(value / this.container * 100)
  }

  setPx (value) {
    return this.container * value / 100
  }
  setTooltip () {
    const tooltip = document.createElement('span')  
  }
  getPageX (e) {
    if (typeof e.pageX === 'number') return e.pageX
    if (e.touches.length) return e.touches[0].pageX
    if (e.changedTouches.length) return e.changedTouches[0].pageX
    return null
  }
  get resultPx () {
    return this.result
  }
  get resultPercent () {
    return this.resultPer
  }
}

(function () {
  const sliders = document.querySelectorAll('[fr-slider]')
  sliders.forEach(slider => {
    const frAttr = parseOptions(slider.getAttribute('fr-slider'))
    const sl = new Slider(slider, frAttr);
      // slider.addEventListener('click', () => console.log(sl.resultPercent))
  })
})()
let tabParent;
let tabs = document.querySelectorAll('.tab-item');
let bTabs = document.querySelectorAll('.browser .tab-menu .tab-item');
const closes = document.querySelectorAll('.btn-close');
const add = document.querySelector('.tab-plus');


tabs.forEach(tab => {
    tab.addEventListener('click', e => selectTab(e));
})

closes.forEach(btn => {
    btn.addEventListener('click', e => removeTab(e));
})

if(add) {
    add.addEventListener('click', e => addTab(e))
}

if(bTabs.length > 0) {
    bTabs[0].classList.add('active');
}


setWidth();
function selectTab({target}) {
    tabParent = target.parentElement;
    for (let t of tabParent.children) {
        t.classList.remove('active')
    }
    target.classList.add('active')
}

function removeTab(e) {
    const targetEl = e.target.parentElement;
    if (targetEl.classList.contains('active')) {
        const sibling = targetEl.previousSibling;
        sibling.classList.add('active');
    }
    targetEl.remove();
    setWidth();
    e.stopPropagation();
}

function addTab() {
    if(tabs.length >= 15) {
        alert('허용 탭 초과');
        return;
    }
    const newItem = createNewTab();
    const closeBtn = createCloseButton();
    // closeBtn.addEventListener('click', e => removeTab(e));
    // newItem.addEventListener('click', e => selectTab(e));
    newItem.append(closeBtn);
    document.querySelector('.browser .tab-menu').append(newItem);
    setWidth();
}

function createNewTab () {
    const item = document.createElement('div');
    const text = document.createElement('span');
    item.classList.add('tab-item', 'tab');
    text.classList.add('tabText', 'ellipsis');
    text.textContent = 'new item';
    item.append(text);
    item.addEventListener('click', e => selectTab(e));
    return item;
}

function createCloseButton () {
    const item = document.createElement('div');
    const icon = document.createElement('i');
    item.classList.add('btn-close','ga-button','icon','tiny','round');
    icon.classList.add('xi-close');
    item.append(icon);
    item.addEventListener('click', e => removeTab(e));
    return item;
}

function setWidth() {
    tabs = document.querySelectorAll('.browser .tab-menu .tab-item');
    tabs.forEach(tab => {
        tab.style.width = (100 / tabs.length) + '%';
    })
}

// class Browser {
//     constructor(options = {}) {
//
//     }
// }

class Tabs {
    constructor(el) {
        this.el = el
        this.menu = this.el.querySelector('.tab-menu')
        this.items = this.menu.querySelectorAll('.tab-item') || null
        this.selectedIndex = 0
        this.contents = this.el.querySelector('.tab-contents')
    }

    init() {
        if (this.items) {
            this.items.forEach((tab, i) => {
                tab.addEventListener('click', e => selectTab(e, i));
            })
        }
    }

    selectTab({target}, i) {
        for (let t of this.tabs) {
            t.classList.remove('active')
        }
        target.classList.add('active')
        this.setDisplayContents(target.textContent)
    }

    setDisplayContents(item) {
        const contents = this.contents.querySelectorAll('[data-tab]')
        console.log(contents)
        contents.forEach(cont => {
            console.log(item, cont.dataset('tab'))
        })
    }
}

const expendIcon = 'xi-caret-down-min'
const folderIcon = 'xi-folder'
const folderOpenIcon = 'xi-folder-o'
const fileIcon = 'xi-file-o'

class TreeList {
  constructor(tree) {
    this.tree = tree
    this.type = 'tree'
  }

  toggleNode(node) {
    const el = node.parentNode
    const isShow = el.getAttribute('aria-show')
    el.setAttribute('aria-show', isShow === 'true' ? 'false' : 'true')
    if (this.type === 'file') {
      node.querySelector('.icon').classList.toggle(isShow ? folderOpenIcon : folderIcon)
    }
  }

  initNode(node) {
    const hasIcon = node.querySelector('.icon')

    const hasChildren = Boolean(node.nextSibling)
    if(!hasIcon) {
      const expendIcon = this.setIcon(hasChildren)
      node.prepend(expendIcon)
    }
  }

  setIcon(hasChildren = false) {
    const icon = document.createElement('i')
    icon.classList.add('icon')
    if (this.type === 'file') {
      if (hasChildren) {
        icon.classList.add(folderIcon)
      } else {
        icon.classList.add(fileIcon)
      }
    } else {
      icon.classList.add('expend-icon')
      if (hasChildren) {
        icon.classList.add(expendIcon)
      }
    }

    return icon
  }

  init() {
    if (!this.tree) return

    const nodes = this.tree.querySelectorAll('.node-title')
    this.type = this.tree.classList.contains('files') ? 'file' : 'tree'

    nodes.forEach((node) => {
      this.initNode(node)
      node.addEventListener('click', () => this.toggleNode(node))
    })
  }
}

// (function () {
//   const treeList = document.querySelectorAll('.ga-tree-list');
//   treeList.forEach((tree) => {
//       const treeInstance = new TreeList(tree)
//       treeInstance.init()
//   })
// })()
(function () {
  const frSelects = document.querySelectorAll('[fr-select]');
  frSelects.forEach((select, i) => {
      const options = parseOptions(select.getAttribute('fr-select'))

      let selectEl = new Select(select, options)
      selectEl.selected = 0
  })
})()