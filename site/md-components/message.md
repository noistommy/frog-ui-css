 # Message
정보, 경고, 오류 등 사용자 피드백을 위한 메시지 컴포넌트


## Anatomy


```html
<div class="ga-message">
  <!-- contents -->
  <div class="contents">...</div>
</div>
<!-- title + contents -->
<div class="ga-message">
  <!-- title -->
  <div class="title">...</div>
  <!-- contents -->
  <div class="contents">...</div>
</div>
<!-- + icon -->
<div class="ga-message icon">
  <!-- icon -->
  <i class="icon xi-icon" />
  <!-- contents -->
  <div class="contents">...</div>
</div>
```

## Usage

#### Base

```html
<div class="ga-message">
  <div class="contents">...</div>
</div>
```

#### Inline

기본형은 block 타입. inline 타입으로 표시 할때 사용

```html
<div class="ga-message inline">
  <div class="contents">...</div>
</div>
```

#### Status

```html
<!-- success status -->
<div class="ga-message success">
  <div class="contents">...</div>
</div>
<!-- success info -->
<div class="ga-message info">
  <div class="contents">...</div>
</div>
<!-- success danger -->
<div class="ga-message danger">
  <div class="contents">...</div>
</div>
<!-- success attention -->
<div class="ga-message attention">
  <div class="contents">...</div>
</div>
<!-- success importance -->
<div class="ga-message importance">
  <div class="contents">...</div>
</div>
```

#### Status display type

```html
<!-- ex) if type is success -->
<!-- Text type -->
<div class="ga-message seccess-text">
  <div class="contents">...</div>
</div>
<!-- Background type -->
<div class="ga-message seccess-bg">
  <div class="contents">...</div>
</div>
<!-- Border type -->
<div class="ga-message seccess-border">
  <div class="contents">...</div>
</div>
```

### messages

#### base

```html
<div class="ga-messages">
  <div class="ga-message">...</div>
  <div class="ga-message">...</div>
  <div class="ga-message">...</div>
</div>
```

#### messages list

```html
<div class="ga-messages list">
  <div class="ga-message">...</div>
  <div class="ga-message">...</div>
  <div class="ga-message">...</div>
</div>
```
