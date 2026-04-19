const base = 
`
<table class="ga-table">
  <thead>
    <tr>
      <th>column</th>
      ...
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>column value</td>
      ...
    </tr>
  </tbody>
</table>`

const single = 
`
<table class="ga-table single">
  <thead>
    <!-- thead contents -->
  </thead>
  <tbody>
    <!-- tbody contents -->
  </tbody>
</table>`

const labeled = 
`
<table class="ga-table labeled">
  <thead>
    <!-- thead contents -->
  </thead>
  <tbody>
    <!-- tbody contents -->
  </tbody>
</table>`

const footer = 
`
<table class="ga-table">
  <thead>
    <!-- thead contents -->
  </thead>
  <tbody>
    <!-- tbody contents -->
  </tbody>
  <tfoot>
    <!-- footer contents -->
  </tfoot>
</table>`

const structured = 
`<table class="ga-table structured">
  <tbody>
    <tr>
      <td class="label">
        <!-- labeled cell -->
      </td>
      <td colspan="{number}">
        <!-- merged {number} cell -->
      </td>
      ...
    </tr>
    ...
  </tbody>
</table>`

const columns = 
`
<!-- Evenly divided column layout. -->
<!-- two, three, four, five... up to ten can be applied via class -->
<table class="ga-table column three"> ... </table>
<table class="ga-table column four"> ... </table>
`

const grid = 
`
<!-- Grid system column composition. -->
<!-- Apply col-{grid count} on header columns -->
<table class="ga-table">
  <thead>
    <tr>
      <th class="col-1">...</th>
      <th class="col-6">...</th>
      ...
    </tr>
    ...
  </thead>
  <tbody>
    <!-- tbody contents -->
  </tbody>
</table>`

module.exports = {
  base, single, labeled, footer, structured, columns, grid
}
