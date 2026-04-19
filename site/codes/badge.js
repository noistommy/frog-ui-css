const base = 
`<div class="target-element">
  <span class="ga-badge">{ Badge Contents }</span>
</div>`

const type = 
`<!-- Float Type -->
<div class="target-element">
  <span class="ga-badge float">{ Badge Contents }</span>
</div>
<!-- Mark Type -->
<div class="target-element">
  <span class="ga-badge mark" />
</div>
`

const text = 
`<div class="target-element">
  <span class="ga-badge float">{ Badge Text }</span>
</div>`

const shadow = 
`<div class="target-element">
  <span class="ga-badge float shadow">{ Badge Contents }</span>
</div>`

const align = 
`<!-- @align: left | center | right -->
<div class="target-element">
  <span class="ga-badge float align-{@align}">{ Badge Contents }</span>
</div>`

const colors = 
`<!--@colors: red, orange, yellow, light-green, light-blue, blue
deep-blue, deep-purple, purple, brown, gray -->
<div class="target-element">
  <span class="ga-badge { @colors }">{ Badge Contents }</span>
</div>`

module.exports = {
  base, type, text, shadow, align, colors
}
