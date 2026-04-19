const dropdown = ` 
<div class="ga-select-box dropdown">  
  <div class="select-item ga-input icon right">
    <input type="text" readonly />
    <i class="icon xi-chevron-down">
  </div>
  <div class="select-menu">
    <div class="ga-list selection">
      <div class="item option-item">OPTION</div>
      ... ...
    </div">
  </div>
</div>` 

const float = `
<div class="ga-select-box float">
  <div class="select-item ga-input icon right">
    <input type="text" readonly />
    <i class="icon xi-chevron-down">
  </div>
  <div class="select-menu">
    <div class="ga-list selection">
      <div class="item option-item">OPTION</div>
      ... ...
    </div">
  </div>
</div>` 

const compact = `
<div class="ga-select-box dropdown compact">
  <div class="select-item ga-input icon right">
    <input type="text" readonly />
    <i class="icon xi-chevron-down">
  </div>
  <div class="select-menu">
    <div class="ga-list selection">
      <div class="item option-item">OPTION</div>
      ... ...
    </div">
  </div>
</div>` 

const tag_select = `
<div class="ga-select-box">
  <select>
    <option default value=""> OPTION 1</option>
        ... ...
    <option value="value"> OPTION n</option>
  </select>
    <i class="icon xi-chevron-down" />
</div>` 

const tag_select_compact = `
<div class="ga-select-box compact">
  <select>
    <option default value=""> OPTION 1</option>
        ... ...
    <option value="value"> OPTION n</option>
  </select>
    <i class="icon xi-chevron-down" />
</div>` 

module.exports = {
  dropdown, float, compact, tag_select, tag_select_compact
}
