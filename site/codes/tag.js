const base = 
`<!-- Label Type -->
<div class="ga-tag label">{ Tag Contents }</div>
<!-- Line Type -->
<div class="ga-tag line" />
<!-- Dot Type -->
<div class="ga-tag dot" />`


const icon = 
`<!-- Left -->
<div class="ga-tag label">    
  <i class="icon left xi-icon" />    
  { Tag Contents }
</div>
<!-- Right -->
<div class="ga-tag label">    
  <i class="icon right xi-icon" />    
  { Tag Contents }
</div>`


const pointing = 
`<!-- Left -->
<div class="ga-tag label pointing left">    
  <i class="icon left xi-angle-left" />    
  { Tag Contents }
</div>
<!-- Right -->
<div class="ga-tag label pointing right">    
  <i class="icon right xi-angle-right" />    
  { Tag Contents }
</div>
<!-- Up -->
<div class="ga-tag label pointing up">    
  <i class="icon right xi-angle-up" />    
  { Tag Contents }
</div>
<!-- Down -->
<div class="ga-tag label pointing down">    
  <i class="icon right xi-angle-down" />    
  { Tag Contents }
</div>`


const prefix_suffix = 
`<!-- with prefix -->
<div class="ga-tag label prefix" data-prefix="{prefix value}">
  { Tag Contents }
</div>
<!-- with suffix -->
<div class="ga-tag label suffix" data-suffix="{suffix value}">    
  { Tag Contents }
</div>`

const kbd = 
`<!-- kbd (Key Enter) -->
<div class="ga-tag kbd enter">{ Tag Contents }</div>
<!-- kbd (Key Space) -->
<div class="ga-tag kbd space">{ Tag Contents }</div>
<!-- kbd (Key Command - Meta) -->
<div class="ga-tag kbd meta cmd">{ Tag Contents }</div>
<!-- kbd (Key) -->
<div class="ga-tag kbd">{ Tag Contents }</div>`


const tags = 
`<div class="ga-tags">
  <div class="ga-tag label">Tag 1</div>
  <div class="ga-tag label">Tag 2</div>
  <div class="ga-tag label">Tag 3</div>
</div>`

const attached = 
`<div class="ga-tags attached">
  <div class="ga-tag label">Tag 1</div>
  <div class="ga-tag label">Tag 2</div>
  <div class="ga-tag label">Tag 3</div>
</div>`

const hover = 
`<div class="ga-tags one-of-a-kind">
  <div class="ga-tag label">Tag 1</div>
  <div class="ga-tag label">Tag 2</div>
  <div class="ga-tag label">Tag 3</div>
</div>`

const brand_status = 
`<div class="ga-tag label { Brand | Status }">{ Tag Contents }</div>`

const colors = 
`<!-- red, orange, yellow, light-green, light-blue, blue,
 deep-blue, deep-purple, purple, brown, gray -->
<div class="ga-tag label { Colors }">{ Tag Contents }</div>
<div class="ga-tag label { Colors } light">{ Tag Contents }</div>`

module.exports = {
  base, icon, pointing, prefix_suffix, kbd, tags, attached, hover, brand_status, colors
}
