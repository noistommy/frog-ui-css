const base = 
`
<!-- string contents -->
<div class="ga-segment">      
  "String Contents"
</div>
<!-- html elements contents -->
<div class="ga-segment"> 
  <div class="contents">
    <!-- contents -->
  </div>     
</div>
`
const border = 
`<div class="ga-segment border">       
  <!-- contents -->
</div>`
const float = 
`<div class="ga-segment float">       
  <!-- contents -->
</div>`
const surface = 
`<div class="ga-segment surface">       
  <!-- contents -->
</div>`
const align = 
`<div class="ga-segment align-left">      
  <!-- contents -->
</div>
<div class="ga-segment align-center">       
  <!-- contents -->
</div>
<div class="ga-segment align-right">       
  <!-- contents -->
</div>`
const round =
`<div class="ga-segment round-{s | m | l | xl}">       
  <!-- contents -->
</div>`
const title = 
`<div class="ga-segment">   
  <div class="contents">       
    <div class="title">Title</div>        
    <!-- contents -->    
  </div>
</div>`
const attached = 
`<div class="ga-segment attached">  
  <div class="header">Header contents</div>    
  <div class="contents">contents</div>    
  <div class="footer">Footer contents</div>
</div>`
const extra = 
`<div class="ga-segment">  
  <div class="contents">contents</div>    
  <div class="extra">Extra contents</div>
</div>`
const segments =
 `<div class="ga-segments">   
    <div class="ga-segment"><!-- contents 1 --></div>  
    <div class="ga-segment"><!-- contents 2 --></div>
    ...
 </div>`

module.exports = {
  base, border, float, surface, align, round, title, attached, extra, segments
}
