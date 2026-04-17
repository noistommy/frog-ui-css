const base = `
<!-- checkbox -->
<label class="ga-checkbox {checked}">
    <input type="checkbox" /> Label Text
</label>
<!-- radio -->
<label class="ga-checkbox radio {checked}">
    <input type="radio" /> Label Text
</label>
`

const label = `
<!-- no label -->
<label class="ga-checkbox {checked}">
    <input type="checkbox" />
</label>
<!-- use label -->
<label class="ga-checkbox {checked}">
    <input type="checkbox" /> Use label
</label>
`

const checkbox = `
<label class="ga-checkbox {checked}">
    <input type="checkbox" /> Label Text
</label>
<!-- radio -->
<label class="ga-checkbox radio {checked}">
    <input type="radio" /> Label Text
</label>
`

const radio = `
<label class="ga-checkbox radio {checked}">
    <input type="radio" name="radio" /> Label Text
</label>
`
const indeter = `
<label class="ga-checkbox indeter {checked}">
    <input type="radio" /> Label Text
</label>
`

module.exports = {
  base, label, checkbox, radio, indeter
}