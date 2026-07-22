class Slider {
  constructor(root) {
    this.el = root
    this.handleEl = this.el.querySelectorAll('.control-btn')
    this.handleMin = this.el.querySelector('.control-btn.min')
    this.handleMax = this.el.querySelector('.control-btn.max')
    this.rangeEl = this.el.querySelector('input[type="range"]')
    this.resultEl = this.el.querySelector('.result-slider')
    this.container = 0
    this.start = 0
    this.end = 0
    this.resultPer = 0
    this.midX = 0
    this.initX = 0
    this.initW = 0
    this.catch = false
    this.noHandle = false
    this.unit = this.el.dataset.unit || ''
    this.type = this.el.dataset.type // (single), range

    if (this.type !== 'range') {
      this.handleMax = this.el.querySelector('.control-btn')
    }

    this.noHandle = this.el.classList.contains('no-handle')
    window.addEventListener('resize', () => this.init(this.setPercent(this.start), this.setPercent(this.end)))
  }

  init(start = 0, end = 0) {
    const sliderEl = this.el.getBoundingClientRect()
    this.container =  this.el.offsetWidth
    this.initX = sliderEl.left
    this.initW = this.resultEl.offsetWidth
    this.midX = this.initW / 2

    this.start = this.type === 'range' ? this.setPx(start) : 0
    this.end = this.setPx(end)

    this.changeValue()

    this.el.addEventListener('mousedown', (e) => this.handleDown(e))

  }
 
  handleDown ({target, pageX}) {
    if (target.closest('.control-btn')) {
      // if (target.classList.contains('max')) {
      //   console.log('max')
      // }
      // this.initX = pageX
      this.catch = true

      window.addEventListener('mousemove', e => this.handleMove(e))
      window.addEventListener('mouseup', e => this.handleUp(e))
    } else {
      this.changeValue (pageX)
    }
  }
  handleMove ({pageX}) {
    if(!this.catch) return
    this.changeValue (pageX)
  }
  handleUp ({target,  pageX}) {
    this.catch = false
    window.removeEventListener('mousemove', e => this.handleMove(e))
    window.removeEventListener('mouseup', e => this.handleUp(e))
  }
  changeValue (pageX = null) {
    if (pageX) {
      const newPos = this.updatePos(pageX - this.initX)
  
      if (this.type === 'range' && newPos <= this.midX) {
        this.start = newPos
      } else {
        this.end = newPos
      }
    }
    const result = this.end - this.start
    this.midX = result / 2 + this.start

    // console.log("result", result)

    this.resultPer = this.setPercent(result)

    // this.rangeEl.value = this.resultPer

    this.resultEl.dataset.width = this.resultPer

    this.el.dataset.start = this.setPercent(this.start)
    this.el.dataset.end = this.setPercent(this.end)
    
    

    
    this.resultEl.style.width = result + 'px'
    this.resultEl.style.left = this.start + 'px'
    
    

    if (!this.noHandle && this.type === 'range') {
      // this.handleMin.dataset.width = this.setPercent(this.start) + this.unit
      this.handleMin.style.left = this.start + 'px'
    }
    if (!this.noHandle) {
      // this.handleMax.dataset.width = this.setPercent(this.end) + this.unit
      this.handleMax.style.left = this.end + 'px'
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

  // setRange (value) {
  //   this.resultEl = value
  //   this.rangeEl.value = value
  // }

}

(function () {
  const sliders = document.querySelectorAll('.ga-slider')
  sliders.forEach(slider => {
      const sl = new Slider(slider);
      sl.init(10, 50)
  })
})()


