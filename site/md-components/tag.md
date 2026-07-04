# Tag

상태 표시나 필터에 사용하는 compact한 라벨 요소

## Anatomy

```html
<!-- Dot type -->
<div class="ga-tag dot"></div>
<!-- Line type -->
<div class="ga-tag line"></div>
<!-- Label type -->
<div class="ga-tag label">Label Text</div>
<!-- Pointing type -->
<div class="ga-tag pointing up">Pointing Text</div>
<!-- KBD type -->
<div class="ga-tag kbd">Keyboard Text</div>
```

## Usage

#### Base

```html
<!-- Dot type -->
<div class="ga-tag dot"></div>
<!-- Line type -->
<div class="ga-tag line"></div>
<!-- Label type -->
<div class="ga-tag label">Label Text</div>
```

#### with icon

only label type

```html
<!-- Left -->
<div class="ga-tag label">
  <i class="icon left xi-icon" />
  {tag contents}
</div>
<!-- Right -->
<div class="ga-tag label">
  <i class="icon right xi-icon" />
  {tag contents}
</div>
```


#### Pointing

```html
<!-- Left Arrow -->
<div class="ga-tag pointing left">        
  { Tag Contents }
</div>
<!-- Right Arrow -->
<div class="ga-tag pointing right">        
  { Tag Contents }
</div>
<!-- Up Arrow -->
<div class="ga-tag pointing up">        
  { Tag Contents }
</div>
<!-- Down Arrow -->
<div class="ga-tag pointing down">        
  { Tag Contents }
</div>
```


#### Prefix/Suffix

```html
<!-- with prefix -->
<div class="ga-tag label prefix" data-prefix="{prefix value}">
  { Tag Contents }
</div>
<!-- with suffix -->
<div class="ga-tag label suffix" data-suffix="{suffix value}">    
  { Tag Contents }
</div>
```


#### kbd

```html
<!-- kbd (Key Enter) -->
<div class="ga-tag kbd enter">Enter</div>
<!-- kbd (Key Space) -->
<div class="ga-tag kbd space">Space</div>
<!-- kbd (Key Command - Meta) -->
<div class="ga-tag kbd meta cmd">Command</div>
<!-- kbd (Key) -->
<div class="ga-tag kbd">{ Key }</div>
```


#### Round

only label type

```html
<div class="ga-tag label round">{Tag Contents}</div>
```

#### Brand & Status

```html
<!-- primary, secondary -->
<div class="ga-tag label primary">primary</div>
<div class="ga-tag label secondary">secondary</div>
<!-- success, info, danger, attention, importance -->
<div class="ga-tag label success">success</div>
<div class="ga-tag label info">info</div>
<div class="ga-tag label danger">danger</div>
<div class="ga-tag label attention">attention</div>
<div class="ga-tag label importance">importance</div>
<!-- light type -->
<div class="ga-tag label {brand}-light">...</div>
<div class="ga-tag label {status}-light">...</div>
```


#### Colors

```html
<!-- colors: red, orange, yellow, lightgreen, lightblue, blue,
 deepblue, deeppurple, purple, brown, gray -->
<div class="ga-tag label {colors}">...</div>
<!-- light type -->
<div class="ga-tag label {colors}-light">...</div>
```


### Tags

#### base

```html
<div class="ga-tags">
  <div class="ga-tag label">tag 1</div>
  <div class="ga-tag label">tag 2</div>
  <div class="ga-tag label">tag 3</div>
  ...
</div>
```

#### Attached tags

```html
<div class="ga-tags attached">
  <!-- tags -->
</div>
```

#### Hover Effact

```html
<div class="ga-tags one-of-a-kind">
  <!-- tags -->
</div>
```
