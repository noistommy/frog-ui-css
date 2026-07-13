const base = `
<div class="ga-slider">
  <input type="range" hidden /> 
  <div class="result-slider" data-width="50"></div>
  <div class="control-btn" data-width="50"></div>
</div>
`

const disabled = `
<div class="ga-slider disabled">
  <input type="range" hidden /> 
  <div class="result-slider" data-width="50"></div>
  <div class="control-btn" data-width="50"></div>
</div>
`

const labels = `
<div class="ga-slider">
  <input type="range" hidden /> 
  <div class="result-slider" data-width="50"></div>
  <div class="control-btn" data-width="50"></div>
  <div class="label-text>
    <div class="start-label">0</div>
    <div class="end-label">100</div>
  </div>
</div>
`

const tooltip = `
<div class="ga-slider">
  <input type="range" hidden /> 
  <div class="result-slider" data-width="50"></div>
  <div class="control-btn tooltip" data-width="50"></div>
</div>
`

const result = `
<div class="ga-slider">
  <input type="range" hidden /> 
  <div class="result-slider" data-width="50"></div>
  <div class="control-btn show-result" data-width="50"></div>
</div>
`

const unit = `
<div class="ga-slider" data-unit="%">
  <input type="range" hidden /> 
  <div class="result-slider" data-width="50"></div>
  <div class="control-btn show-result" data-width="50"></div>
</div>
`

const track = `
<!-- track type: thin | normal | fat -->
<div class="ga-slider {track type}">
  <input type="range" hidden /> 
  <div class="result-slider" data-width="50"></div>
  <div class="control-btn show-result" data-width="50"></div>
</div>
`

const colors = `
<!-- colors: red | orange | yellow ... -->
<div class="ga-slider {track type}">
  <input type="range" hidden /> 
  <div class="result-slider" data-width="50"></div>
  <div class="control-btn show-result" data-width="50"></div>
</div>
`

module.exports = {
  base, disabled, labels, tooltip, result, unit, track, colors
}
