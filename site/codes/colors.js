const brand = `
<div class="primary">Primary</div>
<div class="primary dark">Primary - Darker</div>
<div class="secondary">Secondary</div>
<div class="secondary dark">Secondary - Darker</div>`

const state = `
<div class="ga-success">Success</div>
<div class="ga-info">Info</div>
<div class="ga-danger">Danger</div>
<div class="ga-attention">Attention</div>
<div class="ga-importance">Importance</div>`

const types = `
<!-- @type: (all) | text | bg | light -->
<div class="ga-{brand|state}">All</div>
<div class="ga-{brand|state}-text">Text</div>
<div class="ga-{brand|state}-bg">Background</div>
<div class="ga-{brand|state}-light">Light</div>
<div class="ga-{brand|state}-border">Border</div>`

const grayscale = `
<!-- grays = [0, 5, 10, 15, 20, 30, 40, 50, 60, 70, 80, 85, 90, 95, 100] -->
<div class="gray-bg-0"></div>
... ...
<div class="gray-bg-100"></div>`

const palette = `
<!-- colors = [red, orange, yellow, lightgreen, green, lightblue,
 blue, deepblue, deeppurple, brown, gray] -->
<div class="ga-{colors}">...</div>
<div class=" ga-{colors}-light">...</div>
... ...`

module.exports = {
  brand, state, types, grayscale, palette
}
