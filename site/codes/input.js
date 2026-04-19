const base = 
`<div class="ga-input">    
  <input type="text" placeholder="Insert text" />
</div>`
const label = 
`<div class="ga-input">    
  <!-- label system -->    
  <input type="text" placeholder=" " />    
  <label>Title</label>
</div>`
const disabled = 
`<div class="ga-input disabled">    
  <input type="text" placeholder="Insert text" />
</div>`
const readonly = 
`<div class="ga-input disabled">    
  <input type="text" placeholder="Insert text" />
</div>`
const underline = 
`<div class="ga-input underline">    
  <input type="text" placeholder="Insert text" />
</div>`
const transparent = 
`<div class="ga-input transparent">    
  <input type="text" placeholder="Insert text" />
</div>`
const compact = 
`<div class="ga-input compact">    
  <input type="text" placeholder="Insert text" />
</div>`
const edit = 
`<div class="ga-input edit">    
  <input type="text" placeholder="Insert text" />    
  <button class="ga-button icon edit-btn">        
    <i class="xi-pen"></i>    
  </button>
</div>`
const status = 
`<div class="ga-input { STATUS }">    
  <input type="text" placeholder="Insert text" />
</div>`
const fluid = 
`<div class="ga-input fluid">    
  <input type="text" placeholder="Insert text" />
</div>`
const unit = 
`<div class="ga-input unit" data-unit="{ unit text }">    
  <input type="text" placeholder="Insert text" />
</div>`
const icon = 
`<!-- Left -->
<div class="ga-input icon left">    
  <input type="text" placeholder="Insert text" />    
  <i class="xi-icon"></i>
</div>
<!-- Right -->
<div class="ga-input icon right link">    
  <input type="text" placeholder="Insert text" />    
  <i class="xi-icon"></i>
</div>
<!-- Both -->
<div class="ga-input icon both">    
  <i class="xi-icon"></i>    
  <input type="text" placeholder="Insert text" />    
  <i class="xi-icon"></i>
</div>`
const bedge = 
`<div class="ga-input badge">    
  <input type="text" placeholder="Insert text" />    
  <span class="ga-badge">B</span>
</div>`
const labeled = 
`<!-- Left -->
<div class="ga-input labeled left">    
  <input type="text" placeholder="Insert text" />    
  <label>Label Text</label>
</div>
<!-- Right -->
<div class="ga-input labeled right">    
  <input type="text" placeholder="Insert text" />    
  <label>Label Text</label>
</div>`
const button = 
`<div class="ga-input button left">    
  <input type="text" placeholder="Insert text" />    
  <button class="ga-button">Button Text</button>
</div>
<div class="ga-input button right">    
  <input type="text" placeholder="Insert text" />    
  <button class="ga-button">Button Text</button>
</div>`
const textarea = 
`<div class="ga-input">    
  <textarea placeholder="Insert text" />
</div>
<div class="ga-input short">    
  <textarea placeholder="Insert text" />
</div>`

module.exports = {
  base, label, disabled, readonly, underline, transparent, 
  compact, edit, status, fluid, unit, icon, bedge, labeled, 
  button, textarea
}
