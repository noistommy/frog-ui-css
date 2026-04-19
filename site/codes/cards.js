const base = 
`<div class="ga-card border">
  <div class="contents">
    <!-- insert contents -->
  </div>
</div>`
const title = 
`<div class="ga-card border">
  <div class="contents">
    <div class="title">Title</div>
    <!-- insert contents -->
  </div>
</div>`
const image = 
`<div class="ga-card border image">
  <div class="image">
    <img src="..." alt="..." />
  </div>
  <div class="title">Title</div>
  <div class="contents">
    <!-- insert contents -->
  </div>
</div>`
const extra = 
`<div class="ga-card border extra">
  <div class="title">Title</div>
  <div class="contents">
    <!-- insert contents -->
  </div>
  <div class="extra">Extra</div>
</div>`
const attached = 
`<div class="ga-card border attached">
  <div class="header">Header contents</div>
  <div class="contents"><!-- insert contents --></div>
  <div class="footer">Footer contents</div>
</div>`
const border = 
`<div class="ga-card border">
  <div class="contents"><!-- insert contents --></div>
</div>`
const float = 
`<div class="ga-card float">
  <div class="contents"><!-- insert contents --></div>
</div>`
const round = 
`<!-- @round: s | m | l | xl -->
<div class="ga-card round-{@round}">
  <div class="contents"><!-- insert contents --></div>
</div>`
const cards = 
`<div class="ga-cards ">
  <!-- cards -->
</div>`

module.exports = {
  base, title, image, extra, attached, border, float, round, cards
}
