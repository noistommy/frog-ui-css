
const base = `
<ul class="ga-breadcrumb">
    <li>
      <a href="/home" >Home</a>
    </li>
    <li>
      <a href="/page" >Page</a>
    </li>
    <li class="current">
      <span>Current</span>  
    </li>
</ul>
`

const noHover = `
<ul class="ga-breadcrumb no-hover">
  <!-- breadcrumb link items -->
</ul>
`

const round = `
<ul class="ga-breadcrumb round">
  <!-- breadcrumb link items -->
</ul>
`

const compact = `
<ul class="ga-breadcrumb compact">
  <!-- breadcrumb link items -->
</ul>
`

const icon = `
<ul class="ga-breadcrumb">
  <li>
    <a href="/home" >
      <i class="icon left xi-icon" />  
      Home
    </a>
  </li>
  <li>
    ... ...
  </li>
  <li class="current">
    <span>
      <i class="icon left xi-icon" />  
      Current
    </span>  
  </li>
</ul>
`

const customMark = `
<ul class="ga-breadcrumb">
  <li>
    <a href="/home" >Home</a>
  </li>
  <li data-split="|">
    ...
  </li>
  <li class="current" data-split="<">
    <span>
      <i class="icon left xi-icon" />  
      Current
    </span>  
  </li>
</ul>
`

const dropdown = `
<ul class="ga-breadcrumb">
  <li>
    <a href="/home" >Home</a>
  </li>
  <li>
    <span class="dropdown">
      <i class="icon xi-ellipsis-h" />
      <!-- page list -->
    </span>
  </li>
  <li class="current">
    <span>
      <i class="icon left xi-icon" />  
      Current
    </span>  
  </li>
</ul>
`


const ellipsis = `
<ul class="ga-breadcrumb">
  <li>
    <a href="/home" >Home</a>
  </li>
  <li>
    <a href="/home" class="ellipsis" fr-tooltip>long page name...</a>
  </li>
  <li class="current">
    <span>
      <i class="icon left xi-icon" />  
      Current
    </span>  
  </li>
</ul>
`


const fr_js = `
// use class Breadcrumb

const pages = [
  { name: 'Home', path: '/', icon: 'xi-home' },
  { name: 'Page', path: '/page', icon: 'xi-page' },
  ... ...
  { name: 'Current', path: '', icon: 'xi-marker' },
];
const bc = document.queryselector('[fr-breadcrumb]');
const options = {
  round: false,
  compact: false,
  noHover: false,
  mark: '/',
  ellipsis: true
}
new Breadcrumb(bc, options).setPages = pages;
`

const fr_html = `
<ul class="ga-breadcrumb" fr-breadcrumb></ul>
`


module.exports = {
  base, noHover, round, compact, icon, customMark, dropdown, ellipsis, fr_js, fr_html
}
