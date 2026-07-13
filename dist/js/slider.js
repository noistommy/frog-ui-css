class Slider {
  constructor(el) {
    this.el = el
    this.handleEl = this.el.querySelector('.control-btn')
    this.rangeEl = this.el.querySelector('input[type="range"]')
    this.resultEl = this.el.querySelector('.result-slider')
    // this.sliderEl = this.el.querySelector('.slider')
    this.container = 0
    this.result = 0
    this.resultPer = 0
    this.initX = 0
    this.initW = 0
    this.catch = false
    this.unit = this.el.dataset.unit || ''
  }

  init() {
    const sliderEl = this.el.getBoundingClientRect()
    this.container =  this.el.offsetWidth

    this.initX = sliderEl.left
    this.el.addEventListener('mousedown', (e) => this.handleDown(e))

  }

  // setRange (value) {
  //   this.resultEl = value
  //   this.rangeEl.value = value
  // }
  handleDown ({target, pageX}) {
    if (target.closest('.control-btn')) {
      // if (target.classList.contains('max')) {
      //   console.log('max')
      // }
      this.initX = pageX
      this.initW = this.resultEl.offsetWidth
      this.catch = true
      this.handleEl.classList.add('catch')
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
    this.handleEl.classList.remove('catch')
    window.removeEventListener('mousemove', e => this.handleMove(e))
    window.removeEventListener('mouseup', e => this.handleUp(e))
  }
  changeValue (pageX) {
    this.result = this.updatePos(pageX - this.initX)
    this.resultPer = Math.round(this.result / this.container * 100)

    this.rangeEl.value = this.resultPer
    this.resultEl.dataset.width = this.resultPer + this.unit
    this.handleEl.dataset.width = this.resultPer + this.unit
    this.resultEl.style.width = this.result + 'px'
    this.handleEl.style.left = this.result + 'px'
  }

  updatePos (distance) {
    const offset = this.initW + distance
    return offset < 0 ? 0 : offset > this.container ? this.container : offset
  }

}

(function () {
  const sliders = document.querySelectorAll('.ga-slider')
  sliders.forEach(slider => {
      const sl = new Slider(slider);
      sl.init()
  })
})()


