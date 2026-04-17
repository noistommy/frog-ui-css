const code_1_1 = `<div class="ga-grid">\n    <!-- columns -->\n    <div class="column" />\n    <div class="column" />\n    ...\n    <div class="column" />\n</div>`
const code_2_1 = `<div class="ga-grid divide-{2|4|6|8|10}">\n    <!-- columns -->\n    <div class="column" />\n    <div class="column" />\n    ...\n    <div class="column" />\n</div>`
const code_3_1 = `<div class="ga-grid">\n    <!-- columns -->\n    <div class="column span-{number}" />\n    <div class="column span-{number}" />\n    ...\n    <div class="column span-{number}" />\n</div>`
const code_4_1 = `<div class="ga-grid {left | right}-side">\n    <!-- columns -->\n    <div class="column" />\n    <div class="column" />\n    ... ...\n    <div class="column" />\n</div>`
const code_5_1 = `<div class="ga-grid justify-{left | center | right | between | around}">\n    <!-- columns -->\n    <div class="column" />\n    <div class="column" />\n    ... ...\n    <div class="column" />\n</div>`
const code_6_1 = `<div class="ga-grid">\n    <!-- columns -->\n    <div class="column span-{number} offset-{number}" />\n    ... ...\n</div>`
const code_7_1 = `<div class="ga-grid">\n    <!-- rows -->\n    <div class="rows">\n       <!-- columns -->\n       <div class="column" />\n       ... ...\n    <!-- rows -->\n    <div class="rows">\n       <!-- columns -->\n       <div class="column" />\n       ... ...\n</div>`
const code_8_1 = `<div class="ga-grid">\n    <!-- columns -->\n   <div class="column span-{n} span-md-{n} span-sm-{n} span-xs-{n}" />\n   ... ...\n</div>`

module.exports = {
  code_1_1, code_2_1, code_3_1, code_4_1, code_5_1, code_6_1, code_7_1, code_8_1
}
