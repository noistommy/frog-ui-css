const base = 
`<div class="ga-grid">    
  <!-- columns -->    
  <div class="column" />    
  <div class="column" />    
  ...    
  <div class="column" />
</div>`
const divide = 
`<div class="ga-grid divide-{2|4|6|8|10}">    
  <!-- columns -->    
  <div class="column" />    
  <div class="column" />
  ...    
  <div class="column" />
</div>`
const widths = 
`<div class="ga-grid">
  <!-- columns -->    
  <div class="column span-{number}" />    
  <div class="column span-{number}" />    
  ...    
  <div class="column span-{number}" />
</div>`
const fillSide = 
`<div class="ga-grid {left | right}-side">    
  <!-- columns -->    
  <div class="column" />    
  <div class="column" />    
  ... ...    
  <div class="column" />
</div>`
const align = 
`<div class="ga-grid justify-{left | center | right | between | around}">
  <!-- columns -->    
  <div class="column" />    
  <div class="column" />    
  ... ...    
  <div class="column" />
</div>`
const offset = 
`<div class="ga-grid">    
  <!-- columns -->    
  <div class="column span-{number} offset-{number}" />    
  ... ...
</div>`
const rows = 
`<div class="ga-grid">    
  <!-- rows -->    
  <div class="rows">       
    <!-- columns -->       
    <div class="column" />       
    ... ... 
  </div>
  <!-- rows -->    
  <div class="rows">       
    <!-- columns -->       
    <div class="column" />       
    ... ...
  </div>
</div>`
const responsive = 
`<div class="ga-grid">    
  <!-- columns -->   
  <div class="column span-{n} span-md-{n} span-sm-{n} span-xs-{n}" />   
  ... ...
</div>`

module.exports = {
  base, divide, widths, fillSide, align, offset, rows, responsive
}
