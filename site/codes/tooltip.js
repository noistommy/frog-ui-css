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

const offset = `
<!-- @offset: number(px) -->
<div class="parent-element" 
  fr-tooltip="offset: {@offset}"
>...</div>
`

const size = `
<!-- @size: small | null -->
<div class="parent-element" 
  fr-tooltip="size: {@size}"
>...</div>
`

const maxWidth = `
<!-- @maxWidth: number-->
<!-- default: 250-->
<div class="parent-element" 
  fr-tooltip="maxWidth: {@maxWidth}"
>...</div>
`

const textAlign = `
<!-- @textAlign: 'left | 'center' | 'right'-->
<!-- default: center-->
<div class="parent-element" 
  fr-tooltip="textAlign: {@textAlign}"
>...</div>
`

const padding = `
<!-- @textAlign: number(px)-->
<!-- default: 8-->
<div class="parent-element" 
  fr-tooltip="padding: {@padding}"
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
  base,theme, trigger, offset, size, maxWidth, textAlign, padding, contentType, position, aligns
}
