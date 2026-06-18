# List
반복되는 콘텐츠를 표시하기 위한 구조화된 리스트 스타일.

## Anatomy

```html
<div class="ga-list">
  <div class="item"><!-- item contents --></div>
  <div class="item"><!-- item contents --></div>
  <div class="item"><!-- item contents --></div>
  ... ...
</div>
```

## Usage

#### Base

```html
<div class="ga-list">
  <!-- options -->
  <div class="item">option 1</div>
  <div class="item">option 2</div>
  <div class="item">option 3</div>
  ... ...
</div>
```

#### Link


```html
<div class="ga-list">
  <!-- options -->
  <div class="item"> 
    <a class="link">option 1</a> 
  </div>
  <div class="item"> 
    <a class="link">option 2</a> 
  </div>
  <div class="item"> 
    <a class="link">option 3</a> 
  </div>
  ... ...
</div>
```

#### List style

```html
<div class="ga-list ul">
  <!-- options -->
  <div class="item">option 1</div>
  <div class="item">option 2</div>
  <div class="item">option 3</div>
  ... ...
</div>
```

#### Selected item

```html
<!-- selected type - background color -->
<div class="ga-list selection bg">
  <div class="item selected">option 1</div>
  <div class="item">option 2</div>
  <div class="item">option 3</div>
  ... ...
</div>
<!-- selected type - text color -->
<div class="ga-list selection text">
  <div class="item selected">option 1</div>
  <div class="item">option 2</div>
  <div class="item">option 3</div>
  ... ...
</div>
<!-- selected type - dot mark -->
<div class="ga-list selection mark">
  <div class="item selected">option 1</div>
  <div class="item">option 2</div>
  <div class="item">option 3</div>
  ... ...
</div>
```

#### Sub title

```html
<div class="ga-list ul">
  <!-- options with sub title -->
  <div class="item">
    <div class="item-title">
      option 1
      <div class="sub-title">sub title</div>
    </div>
  </div>
  <div class="item">
    <div class="item-title">
      option 2
      <div class="sub-title">sub title</div>
    </div>
  </div>
  <div class="item">
    <div class="item-title">
      option 3
      <div class="sub-title">sub title</div>
    </div>
  </div>
  ... ...
</div>
```

#### With icon

```html
<div class="ga-list">
  <!-- options with icon -->
  <div class="item">
    <i class="list-icon icon xi-icon"></i>        
    <div class="item-title">option 1</div> 
  </div>
  <div class="item">
    <i class="list-icon icon xi-icon"></i>        
    <div class="item-title">option 2</div> 
  </div>
  <div class="item">
    <i class="list-icon icon xi-icon"></i>        
    <div class="item-title">option 3</div> 
  </div>
  ... ...
</div>
```

#### With buttons

```html
<div class="ga-list ul">
  <!-- options with buttons -->
  <div class="item">
    <div class="item-title">option 1</div> 
    <div class="btn-set">
      <!-- button element -->
    </div>
  </div>
  <div class="item">
    <div class="item-title">option 2</div> 
    <div class="btn-set">
      <!-- button element -->
    </div>
  </div>
  <div class="item">
    <div class="item-title">option 3</div> 
    <div class="btn-set">
      <!-- button element -->
    </div>
  </div>
  ... ...
</div>
```

#### With image


```html
<div class="ga-list">
  <!-- options with image -->
  <div class="item">
    <img src="{image_path}" />        
    <div class="item-title">option 1</div> 
  </div>
  <div class="item">
    <img src="{image_path}" />        
    <div class="item-title">option 2</div> 
  </div>
  <div class="item">
    <img src="{image_path}" />        
    <div class="item-title">option 3</div> 
  </div>
  ... ...
</div>
```


#### Border


```html
<div class="ga-list border">
  <!-- options -->
  <div class="item">option 1</div>
  <div class="item">option 2</div>
  <div class="item">option 3</div>
  ... ...
</div>
```

