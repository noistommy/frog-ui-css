const base = `
<div class="ga-message">
    <!-- contents -->
</div>
<!-- title + contents -->
<div class="ga-message">
    <div class="title">
        <!-- title -->
    </div>
    <div class="contents">
        <!-- contents -->
    </div>
</div>
<!-- + icon -->
<div class="ga-message icon">
    <i class="icon xi-icon" />
    <!-- contents -->
</div>
`
const inline = `
<div class="ga-message inline">
    <!-- contents -->
</div>
`

const state = `
<!-- @status: success | danger | info | attention | importance -->
<div class="ga-message { status }">
    <!-- contents -->
</div>
`
const state_type = `
<!-- @type: none | text | bg | border -->
<div class="ga-message success-{ type }">
    <!-- contents -->
</div>
`

const messages = `
<div class="ga-messages">
    <div class="ga-message"><!-- contents --></div>
    <div class="ga-message"><!-- contents --></div>
    <div class="ga-message"><!-- contents --></div>
    ...
</div>
`
const messages_list = `
<div class="ga-messages list">
    <div class="ga-message"><!-- contents --></div>
    <div class="ga-message"><!-- contents --></div>
    <div class="ga-message"><!-- contents --></div>
    ...
</div>
`

module.exports = {
  base,
  inline,
  state,
  state_type,
  messages,
  messages_list,
}
