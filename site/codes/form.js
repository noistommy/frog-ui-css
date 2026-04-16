const base = `
<form class="ga-form">
  <div class="head">
    <!-- header contents -->
  </div>
  <div class="fields">
    <div class="field">
      <!-- form contents(label, input ...) -->
    </div>
  </div> 
  <div class="divider" />
</form>
`
const header = `
<form class="ga-form">
  <div class="head">
    <div class="title">Form Title</div>
    <div class="desc">Form description</div>
  </div>
  ... ...
</form>
`
const field = `
<form class="ga-form">
  <div class="filed">
    <label for="name"> label
    <input name="name" />
    <!-- helper text -->
    <div class="help-text">help text</div>
    <!-- error text -->
    <div class="error-text">error text</div>
  </div>
</form>
`
const inline = `
<form class="ga-form">
  <div class="field inline">
    <!-- form contents(label, input ...) -->
  </div>
</form>
`
const label = `
<form class="ga-form">
  <div class="filed">
    <!-- no use label -->
    <input name="name" />
  </div>
  <div class="filed">
    <!-- use label -->
    <label for="name"> label
    <input name="name" />
  </div>
  <!-- use form grid -->
  <div class="fields grid">
    <div class="field column span-3">
      <label for="name"> label
    </div>
    <div class="field column span-9">
      <input name="name" />
    </div>
  </div> 
</form>
`
const fields = `
<form class="ga-form">
  <div class="fields">
    <div class="legend">Field title</div>
    <div class="field">
      <input type="text">
    </div>
    <div class="field">
      <input type="text">
    </div>
    <div class="field">
      <input type="text">
    </div>
  </div>
</form>
`

const disabled = `
<form class="ga-form">
  <div class="field disabled">
    <!-- form contents(label, input ...) -->
  </div>
</form>
`

const divide = `
<!-- @divide:  2|4|6|8|10 -->
<form class="ga-form">
  <div class="fields grid divide-{@divide}">
    <div class="field column">
      <input type="text">
    </div>
    <div class="field column">
      <input type="text">
    </div>
    ... ...
    <div class="field column">
      <input type="text">
    </div>
  </div>
</form>
`

const grids = `
<!-- sum of num < 12 in row -->
<form class="ga-form">
  <div class="fields grid">
    <div class="field column span-{num}">
      <input type="text">
    </div>
    <div class="field column span-{num}">
      <input type="text">
    </div>
    ... ...
    <div class="field column span-{num}">
      <input type="text">
    </div>
  </div>
</form>
`

const textarea = `
<!-- Normal -->
<form class="ga-form">
  <div class="field">
    <label>label</label>
    <textarea />
  </div>
</form>
 <!-- Short -->
<form class="ga-form">
  <div class="field short">
    <label>label</label>
    <textarea />
  </div>
</form>
`

const extra = `
<form class="ga-form">
  <!-- something form element field -->
  <div class="field">
    <label>label</label>
    <input />
    <div class="extra">
      <div class="ga-checkbox">
        <input type="checkbox" />
        <label>label</label>
      </div>
    </div>
  </div>
</form>
`
const radios = `
<form class="ga-form">
  <div class="fields">
    <div class="field {inline | none}">
      <div class="ga-checkbox radio">
        <input type="radio" name="radios" />
        <label>label</label>
      </div>
      <div class="ga-checkbox radio">
        <input type="radio" name="radios" />
        <label>label</label>
      </div>
      <div class="ga-checkbox radio">
        <input type="radio" name="radios" />
        <label>label</label>
      </div>
    </div>
  </div>
</form>
`
const selectbox = `
<form class="ga-form">
  <div class="fields">
    <div class="field">
      <div class="ga-select-box">
        <select />
      </div>
    </div>
  </div>
</form>
`


module.exports = {
  base, header, field, inline, label, fields, disabled, divide, grids, textarea,
  extra, radios, selectbox
}