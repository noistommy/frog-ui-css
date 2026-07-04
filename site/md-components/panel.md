# Panel

접기/펼치기가 가능한 사이드 또는 콘텐츠 패널.

## Usage

#### Base

```html
<div class="ga-panel">    
  <div class="panel-header"> ... </div>    
  <div class="panel-contents"> ... </div>
</div>
```

#### Border

```html
<div class="ga-panel border">    
  <div class="panel-header"> ... </div>    
  <div class="panel-contents"> ... </div>
</div>
```

#### Collapse

```html
<div class="ga-panel collapse">    
  <div class="panel-header"> ... </div>    
  <div class="panel-contents"> ... </div>
</div>
```

#### Collapse Toggle Button

```html
<!-- Toggle button on left -->
<div class="ga-panel icon left">    
  <div class="panel-header"> ... </div>    
  <div class="panel-contents"> ... </div>
</div>
<!-- Toggle button on right: default -->
<div class="ga-panel">    
  <div class="panel-header"> ... </div>    
  <div class="panel-contents"> ... </div>
</div>
```

#### Contents

```html
<div class="ga-panel">    
  <div class="panel-header"> ... </div>    
  <div class="panel-contents">
    <div class="header"></div>
    <div class="body"></div>
    <div class="footer"></div>
  </div>
</div>
```

#### Accordion (panels)

```html
<div class="ga-accordion">
  <div class="ga-panel"> ... </div>
  <div class="ga-panel"> ... </div>
  <div class="ga-panel"> ... </div>
  ... ...
</div>
```