class Slider {
  constructor(root) {
    this.el = root
    this.handleEl = this.el.querySelectorAll('.control-btn')
    this.handleMin = this.el.querySelector('.control-btn.min')
    this.handleMax = this.el.querySelector('.control-btn.max')
    this.rangeEl = this.el.querySelector('input[type="range"]')
    this.resultEl = this.el.querySelector('.result-slider')
    
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

    if (!this.range) {
      this.handleMax = this.el.querySelector('.control-btn')
    }

    this.noHandle = this.el.classList.contains('no-handle')
    this.isTooltip = this.el.classList.contains('tooltip')
    this.range = this.el.classList.contains('range')

    window.addEventListener('resize', () => this.init(this.setPercent(this.start), this.setPercent(this.end)))
  }

  init(start = 0, end = 0) {
    const sliderEl = this.el.getBoundingClientRect()
    this.container =  this.el.offsetWidth
    this.initX = sliderEl.left
    this.initW = this.resultEl.offsetWidth
    this.midX = this.initW / 2

    this.start = this.range ? this.setPx(start) : 0
    this.end = this.setPx(end)

    this.changeValue()

    this.el.addEventListener('mousedown', (e) => this.handleDown(e))
    this.el.addEventListener('touchstart', (e) => this.handleDown(e))

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
    } else {
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
    
    this.resultEl.style.width = this.result + 'px'
    this.resultEl.style.left = this.start + 'px'
    
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
  const sliders = document.querySelectorAll('.ga-slider')
  sliders.forEach(slider => {
      const sl = new Slider(slider);
      sl.init(10, 50)

      // slider.addEventListener('click', () => console.log(sl.resultPercent))
  })
})()


