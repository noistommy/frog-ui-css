const base = `
<div class="parent-element" 
  fr-tooltip="props string"
>...</div>
`

const theme = `
<!-- @theme: light | dark(default) -->
<div class="parent-element" 
  fr-tooltip="theme: {@theme}"
>...</div>
`

const trigger = `
<!-- @trigger: hover(default) | click -->
<div class="parent-element" 
  fr-tooltip="trigger: {@trigger}"
>...</div>
`

const contentType = `
<!-- type content -->
<div class="parent-element" 
  fr-tooltip="content: {tooltip content}"
>...</div>
<!-- type target -->
<div class="parent-element" 
  fr-tooltip
>
  <span fr-target>
    <!-- tooltip content -->
  </span>
</div>
`

const position = `
<!-- @pos: top | left | right | bottom -->
<div class="parent-element" 
  fr-tooltip="pos: {@pos}"
>...</div>
`

const aligns = `
<!-- (position): top | left | right | bottom -->
<!-- (align): start | center | end -->
<!-- @pos: (position)-(align) -->
<div class="parent-element" 
  fr-tooltip="pos: {@pos}"
>...</div>
`

module.exports = {
  base,theme, trigger, contentType, position, aligns
}
