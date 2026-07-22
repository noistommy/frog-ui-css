const base = `
<!-- data- 속정은 script 적용 없이 css를 이용해 값을 표시 할때 사용 -->
<div class="ga-slider" data-end="50">
  <input type="range" hidden /> 
  <div class="result-slider"></div>
  <div class="control-btn"></div>
</div>
`
const range = `
<div class="ga-slider" data-start="0" data-end="50">
  <input name="start" type="range" hidden /> 
  <input name="end" type="range" hidden /> 
  <div class="result-slider"></div>
  <div class="control-btn min"></div>
  <div class="control-btn max"></div>
</div>
`

const noHandle = `
<div class="ga-slider no-handle" data-start="0" data-end="50">
  <input name="start" type="range" hidden /> 
  <input name="end" type="range" hidden />
  <div class="result-slider"></div>
</div>
`

const disabled = `
<div class="ga-slider disabled">
  <input type="range" hidden /> 
  <div class="result-slider"></div>
  <div class="control-btn"></div>
</div>
`

const labels = `
<div class="ga-slider">
  <input type="range" hidden /> 
  <div class="result-slider"></div>
  <div class="control-btn"></div>
  <div class="label-text">
    <div class="start-label">0</div>
    <div class="end-label">100</div>
  </div>
</div>
`

const tooltip = `
<div class="ga-slider tooltip" data-start="0" data-end="50">
  <input type="range" hidden /> 
  <div class="result-slider"></div>
  <div class="control-btn min"></div>
  <div class="control-btn max"></div>
</div>
`

const result = `
<div class="ga-slider show-result" data-start="0" data-end="50">
  <input type="range" hidden /> 
  <div class="result-slider"></div>
  <div class="control-btn"></div>
</div>
`

const unit = `
<div class="ga-slider" data-unit="%">
  <input type="range" hidden /> 
  <div class="result-slider"></div>
  <div class="control-btn show-result"></div>
</div>
`

const track = `
<!-- track type: thin | normal | fat -->
<div class="ga-slider {track type}">
  <input type="range" hidden></div>
  <div class="control-btn"></div>
</div>
`

const colors = `
<!-- colors: red | orange | yellow ... -->
<div class="ga-slider {track type}">
  <input type="range" hidden /> 
  <div class="result-slider"></div>
  <div class="control-btn"></div>
</div>
`

module.exports = {
  base, range, noHandle, disabled, labels, tooltip, result, unit, track, colors
}
