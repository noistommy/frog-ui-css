const base = `
<div class="ga-grid2 divide-column-{num} row-{num}">
    <div class="column" />
    <div class="column" />
    ...
    <div class="column" />
</div>
`

const divide = `
<div class="ga-grid2">
    <div class="column col-{num}" />
    <div class="column col-{num}" />
    ...
    <div class="column col-{num}" />
</div>
`

const divideRow = `
<div class="ga-grid2 set-rows"
 style="--grid-row-num: {num}">
    <div class="column col-{num} row-{num}" />
    <div class="column col-{num}" />
    ...
    <div class="column col-{num}" />
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
  divide,
  divideRow,
  autoFit,
  table,
}
