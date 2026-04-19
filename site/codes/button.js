const base = 
`<button class="ga-button">Base</button>`
const type = 
`<button class="ga-button">Tag</button>
<div class="ga-button">Class name</div>`
const brand = 
`<!-- @brand: primary | secondary -->
<button class="ga-button { @brand }">Brand</button>`
const status = 
`<!-- @status: success | danger | info | attention | importance -->
<button class="ga-button { status }">Status</button>`
const colors = 
`<button class="ga-button { @colors }">Color</button>`
const disabled = 
`<button class="ga-button disabled">Disabled(class)</button>
<button class="ga-button" disabled>Disabled(attr)</button>`
const border = 
`<button class="ga-button border">Border</button>`

const fluid = 
`<button class="ga-button fluid">Fluid</button>`
const compact = 
`<button class="ga-button compact">Compact</button>`
const outline = 
`<button class="ga-button outline">Outline</button>`
const icon = 
`<button class="ga-button icon">
  <i class="xi-icon"></i>
</button>`
const round = 
`<button class="ga-button round">Round</button>`
const withIcon = 
`<button class="ga-button">
  <i class="icon left xi-icon"></i>
  Left
</button>
<button class="ga-button">
  Right    
  <i class="icon right xi-icon"></i>
</button>`
const bedge = 
`<button class="ga-button badge">
  <sapn class="in-badge">B</span>
  Contents
</button>
<!-- Can't use attribute fluid with badge type -->`
const text = 
`<button class="ga-button text">Contents</button>`
const buttons = 
`<div class="ga-buttons">
  <div class="ga-button selected">BTN 1</div>
  <div class="ga-button">BTN 2</div>
  <div class="ga-button">BTN 3</div>
  <div class="ga-button">BTN 4</div>
  ... 
</div>`

module.exports = {
  base, type, brand, status, colors, disabled, border, fluid, compact, outline,
  icon, round, withIcon, bedge, text, buttons
}
