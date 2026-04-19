const base = 
`<div class="ga-segment">      
  <!-- insert contents -->
</div>`
const border = 
`<div class="ga-segment border">       
  <!-- insert contents -->
</div>`
const float = 
`<div class="ga-segment float">       
  <!-- insert contents -->
</div>`
const surface = 
`<div class="ga-segment surface">       
  <!-- insert contents -->
</div>`
const align = 
`<div class="ga-segment align-left">      
  <!-- insert contents -->
</div>
<div class="ga-segment align-center">       
  <!-- insert contents -->
</div>
<div class="ga-segment align-right">       
  <!-- insert contents -->
</div>`
const round =
`<div class="ga-segment round-{s | m | l | xl}">       
  <!-- insert contents -->
</div>`
const title = 
`<div class="ga-segment">   
  <div class="contents">       
    <div class="title">Title</div>        
    <!-- insert contents -->    
  </div>
</div>`
const attached = 
`<div class="ga-segment">  
  <div class="header">Header contents</div>    
  <!-- contents -->    
  <div class="footer">Footer contents</div>
</div>`
const segments =
 `<div class="ga-segments">   
  <div class="ga-segment"><!-- insert contents 1 --></div>  
  <div class="ga-segment"><!-- insert contents 2 --></div>
  ...
 </div>`

module.exports = {
  base, border, float, surface, align, round, title, attached, segments
}
