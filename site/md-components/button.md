# Button
크기, 색상, 상태에 따른 다양한 버튼 인터랙션 컴포넌트

## Usage

#### Base

```html
<button class="ga-button">button contents</button>
```
#### Element type

특정 조건이 없다면 `<button />` 태그를 우선으로 사용합니다.

```html
<!-- button tag -->
<button class="ga-button">button contents</button>
<!-- other tag -->
 <div class="ga-button">button contents</div>
```

#### Brand

```html
<!-- primary -->
<button class="ga-button primary">button contents</button>
<!-- secondary -->
 <div class="ga-button secondary">button contents</div>
```

#### Status

```html
<!-- success -->
<button class="ga-button success">button contents</button>
<!-- info -->
 <div class="ga-button info">button contents</div>
<!-- danger -->
 <div class="ga-button danger">button contents</div>
<!-- attention -->
 <div class="ga-button attention">button contents</div>
<!-- importance -->
 <div class="ga-button importance">button contents</div>
```

#### Brand

```html
<!--colors: red, orange, yellow, light-green, light-blue, blue
deep-blue, deep-purple, purple, brown, gray -->
<!-- red button -->
<button class="ga-button red">button contents</button>
<!-- colors button -->
 <div class="ga-button {colors}">button contents</div>
```

#### Disabled

```html
<!-- Disabled(class -->
<button class="ga-button disabled">button contents</button>
<!--Disabled(attr) -->
<button class="ga-button" disabled>button contents</button>
```

#### Border

```html
<button class="ga-button border">button contents</button>
```

#### Fluid

```html
<button class="ga-button fluid">button contents</button>
```

#### Compact

```html
<button class="ga-button compact">button contents</button>
```

#### Outline

```html
<button class="ga-button outline">button contents</button>
```

#### Icon (included xeicon version 2.3.3)

[xeicon](https://xpressengine.github.io/XEIcon/index.html)

```html
<button class="ga-button icon">
  <i class="xi-icon" />
</button>
```

#### Round

```html
<button class="ga-button round">button contents</button>
```

#### With Icon

```html
<!-- Left -->
<button class="ga-button">
  <i class="icon left xi-icon"></i>
  Left
</button>
<!-- Right -->
<button class="ga-button">
  Right
  <i class="icon right xi-icon"></i>
</button>
```

#### With Bedge

```html
<button class="ga-button badge">
  <span class="in-badge">badge contents</span>
  button contents
</button>
<!-- Can't use attribute fluid with badge type -->
```

### Text

```html
<button class="ga-button text">button contents</button>
```

## Buttons

#### Base

```html
<div class="ga-buttons">
  <button class="ga-button selected">BTN 1</button>
  <button class="ga-button">BTN 2</button>
  <button class="ga-button">BTN 3</button>
  <button class="ga-button">BTN 4</button>
  ... 
</div>
```

#### Round

```html
<div class="ga-buttons round">
  <button class="ga-button selected">BTN 1</button>
  <button class="ga-button">BTN 2</button>
  <button class="ga-button">BTN 3</button>
  <button class="ga-button">BTN 4</button>
  ... 
</div>
```

#### Border

```html
<div class="ga-buttons border">
  <button class="ga-button selected">BTN 1</button>
  <button class="ga-button">BTN 2</button>
  <button class="ga-button">BTN 3</button>
  <button class="ga-button">BTN 4</button>
  ... 
</div>
```

#### Selected
`selected`클래스를 사용하여 버튼 그룸 중 특정 버튼에 대한 활성 표시를 할 수 있습니다. 이를 이용해 버튼 라디오 또는 탭 네비게이션 UI에 이용할 수 있습니다.

```html
<div class="ga-buttons border">
  <button class="ga-button selected">BTN 1</button>
  <button class="ga-button">BTN 2</button>
  <button class="ga-button">BTN 3</button>
  <button class="ga-button">BTN 4</button>
  ... 
</div>
```
