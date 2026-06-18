const base = `
<div class="ga-grid2 divide-column-{num} row-{num}">
    <div class="column" />
    <div class="column" />
    ...
    <div class="column" />
</div>
`
const dosirak = `
<div class="ga-grid2 dosirak set-rows"
    style="--grid-col-num: {number}; --grid-row-num: {number}"
>
    <div class="column col-{num} row-{num}" />
    <div class="column col-{num} row-{num}" />
    ...
    <div class="column col-{num} row-{num}" />
</div>
`

const divide = `
<div class="ga-grid2 divide-column-{number}">
    <div class="column" />
    <div class="column" />
    ...
    <div class="column" />
</div>
`

const widths = `
<div class="ga-grid2">
    <div class="column col-{num}" />
    <div class="column col-{num}" />
    ...
    <div class="column col-{num}" />
</div>
`

const widthRow = `
<div class="ga-grid2 set-rows"
 style="--grid-row-num: {num}">
    <div class="column col-{num} row-{num}" />
    <div class="column col-{num}" />
    ...
    <div class="column col-{num}" />
</div>
`

const flowColumn = `
<div class="ga-grid2 set-rows flow-column"
 style="--grid-row-num: {num}">
    <div class="column col-{num} row-{num}" />
    ...
</div>
<div class="ga-grid2 set-rows flow-row"
 style="--grid-row-num: {num}">
    <div class="column col-{num} row-{num}" />
    ...
</div>
`
const dense = `
<div class="ga-grid2 set-rows dense"
 style="--grid-row-num: {num}">
    <div class="column col-{num} row-{num}" />
    ...
</div>
`

const autoFit = `
<div class="ga-grid2 auto-fit">
    <div class="column" />
    <div class="column" />
    ...
    <div class="column" />
 <!-- if (grid column > column)-->
</div>
`

const table = `
<div class="ga-grid2 tabled row-{num}">
    <div class="column label col-{num}" /> // <th />
    <div class="column align-{left|center|right}" /> // <td />
    ...
</div>
`

module.exports = {
  base,
  dosirak,
  divide,
  widths,
  widthRow,
  flowColumn,
  dense,
  autoFit,
  table,
}
