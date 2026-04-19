const base = 
`<div class="ga-panel">    
  <div class="panel-header"> ... </div>    
  <div class="panel-contents"> ... </div>
</div>`
const border = 
`<div class="ga-panel border">    
  <div class="panel-header"> ... </div>    
  <div class="panel-contents"> ... </div>
</div>`
const collapse = 
`<div class="ga-panel collapse">    
  <div class="panel-header"> ... </div>    
  <div class="panel-contents"> ... </div>
</div>`
const accordion = 
`<div class="ga-accordion">    
  <div class="ga-panel collapse">    
    <div class="panel-header"> ... </div>    
    <div class="panel-contents"> ... </div>
  </div>
  <div class="ga-panel collapse">    
    <div class="panel-header"> ... </div>    
    <div class="panel-contents"> ... </div>
  </div>
  ... ...
</div>`
const toggle = 
`<!-- Toggle button on left --> 
<div class="ga-panel collapse icon left">...</div>
<!-- Toggle button on right(default) --> 
<div class="ga-panel collapse">...</div>`
const contents = 
`<div class="ga-panel collapse">    
  <div class="panel-header"> ... </div>    
  <div class="panel-contents">        
  <!-- header --> 
  <div class="header"></div>       
  <!-- body --> 
  <div class="body"></div>        
  <!-- footer -->  
  <div class="footer"></div>    
</div>
</div>`

module.exports = {
  base, border, collapse, accordion, toggle, contents
}
