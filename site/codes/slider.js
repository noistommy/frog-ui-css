const base = `
<div class="ga-slider" >
  <input type="range" hidden /> 
  <div class="result-slider"></div>
  <div class="control-btn"></div>
</div>
`
const range = `
<div class="ga-slider range">
  <input name="start" type="range" hidden /> 
  <input name="end" type="range" hidden /> 
  <div class="result-slider"></div>
  <div class="control-btn min"></div>
  <div class="control-btn max"></div>
</div>
`

const noHandle = `
<div class="ga-slider no-handle">
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
<div class="ga-slider tooltip">
  <input type="range" hidden /> 
  <div class="result-slider"></div>
  <div class="control-btn min"></div>
  <div class="control-btn max"></div>
</div>
`

const result = `
<div class="ga-slider show-result">
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
