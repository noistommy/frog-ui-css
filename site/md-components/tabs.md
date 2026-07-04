# Tabs

탭 형태로 여러 콘텐츠 섹션을 전환하는 UI

## Anatomy

```html
<div class="ga-tabs">
  <!-- tabs menu -->
  <div class="tab-menu">
    <div class="tab-item tab active">tab1</div> <!-- actived tab -->
    <div class="tab-item tab">tab2</div>
    <div class="tab-item tab">tab3</div>
    ...
  </div>
  <!-- tabs contents -->
  <div class="tab-contents">
    <!-- selected tab contents -->
  </div>
</div>
```

## Usage

#### Base

```html
<div class="ga-tabs">
  <div class="tab-menu">
    <div class="tab-item tab active">tab1</div> <!-- actived tab -->
    <div class="tab-item tab">tab2</div>
    <div class="tab-item tab">tab3</div>
    ...
  </div>
  <div class="tab-contents"><!-- selected contents --></div>
</div>
```


#### Vertical

```html
<div class="ga-tabs vertical">
  <!-- tabs -->
</div>
```


#### Active (Line)

```html
<div class="ga-tabs line">
  <!-- tabs -->
</div>
```


#### Active (Button)

```html
<div class="ga-tabs button">
  <!-- tabs -->
</div>
```


#### Browser Style

```html
<div class="ga-tabs browser">
  <!-- tabs -->
</div>
```
