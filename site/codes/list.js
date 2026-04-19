const base = 
`<div class="ga-list">
  <div class="item"> option1 </div>
  <div class="item"> option2 </div>
  ...
  <div class="item"> option3 </div>
</div>`

const link = 
`<div class="ga-list">
  <div class="item"> 
    <a class="link">option 1</a> 
  </div>
  <div class="item"> 
    <a class="link">option 2</a> 
  </div>
  <div class="item"> 
    <a class="link">option 3</a> 
  </div>
  ... ...
</div>`

const list = 
`<div class="ga-list ul">
  <div class="item"> option1 </div>
  <div class="item"> option2 </div>
  ...
  <div class="item"> option3 </div>
</div>`

const select = 
`<div class="ga-list selection {mark|bg|text}">
  <div class="item selected"> option1 </div>
  <div class="item"> option2 </div>
  ...
  <div class="item"> option3 </div>
</div>`

const subTitle = 
`<div class="ga-list">
  <div class="item">         
    <div class="item-title">             
      option 1            
      <div class="sub-title">sub text</div>  
    </div>
  </div>    
  <div class="item">         
    <div class="item-title">             
      option 2            
      <div class="sub-title">sub text</div>  
    </div>
  </div>    
  <div class="item">         
    <div class="item-title">             
      option 3            
      <div class="sub-title">sub text</div>  
    </div>
  </div> 
  ... ...   
</div>`

const icon = 
`<div class="ga-list">
  <div class="item">        
    <i class="list-icon icon xi-icon"></i>        
    <div class="item-title">option 1</div>    
  </div>
  <div class="item">        
    <i class="list-icon icon xi-icon"></i>        
    <div class="item-title">option 2</div>    
  </div>
  <div class="item">        
    <i class="list-icon icon xi-icon"></i>        
    <div class="item-title">option 3</div>    
  </div>
  ... ...
</div>`

const button = 
`<div class="ga-list border">
    <div class="item"> 
      <div class="item-title">option</div>
      <div class="btn-set">
        <!-- button element -->
      </div>
    </div>
    ...
</div>`

const border = 
`<div class="ga-list border">
  <div class="item"> option1 </div>
  <div class="item"> option2 </div>
  ...
  <div class="item"> option3 </div>
</div>`

const image = 
`<div class="ga-list">
  <div class="item">        
    <img src="{image_path}" />        
    <div class="item-title">option 1</div>    
  </div>
  <div class="item">        
    <img src="{image_path}" />        
    <div class="item-title">option 2</div>    
  </div>
  <div class="item">        
    <img src="{image_path}" />        
    <div class="item-title">option 3</div>    
  </div>
  ... ...
</div>`

module.exports = {
  base, link, list, select, subTitle, icon, button, border, image
}
