const base1 = `
<label class="ga-switch slide">
    <input type="checkbox" checked />
    <span class="switch" />
</label>
`

const base2 = `
<label class="ga-switch slide inside">
    <input type="checkbox" checked />
    <span class="switch" />
</label>
`

const round = `
<label class="ga-switch slide">
    <input type="checkbox" checked />
    <span class="switch round" />
</label>
`

const button = `
<label class="ga-switch button">
    <input type="checkbox" checked />
    <span class="on active">ON</span>
    <span class="off">OFF</span>
</label>
`
const colors = `
<label class="ga-switch { @colors }">
    <input type="checkbox" checked />
    <span class="switch" />
</label>
`

module.exports = {
  base1,
  base2,
  round,
  button,
  colors
}
