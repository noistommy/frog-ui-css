# Cards

## Anatomy

```html
<div class="ga-cards">
  <!-- card -->
  <div class="ga-card">
    <div class="contents">
      <!-- insert contents -->
    </div>
  </div>
  ...
</div>
```

## Card

#### Base

```html
<div class="ga-card">
  <div class="contents">
    <!-- insert contents -->
  </div>
</div>
```

#### Title

```html
<div class="ga-card">
  <div class="contents">
    <div class="title">Title</div>
    <!-- insert contents -->
  </div>
</div>
```

#### Image

```html
<!-- media horizontal -->
<div class="ga-card media">
  <div class="image">
    <img src="/path/to/image" alt="image" />
  </div>
  <div class="contents">
    <!-- insert contents -->
  </div>
</div>
<!-- media vertical -->
<div class="ga-card media vertical">
  <div class="image">
    <img src="/path/to/image" alt="image" />
  </div>
  <div class="contents">
    <!-- insert contents -->
  </div>
</div>
```

#### Extra

```html
<div class="ga-card extra">
  <div class="contents">
    <!-- insert contents -->
  </div>
  <div class="extra">
    <!-- insert extra contents -->
  </div>
</div>
```

#### Attached (header, footer)

```html
<div class="ga-card attached">
  <div class="header">
    <!-- insert header contents -->
  </div>
  <div class="contents">
    <!-- insert contents -->
  </div>
  <div class="footer">
    <!-- insert footer contents -->
  </div>
</div>
```

#### Border

```html
<div class="ga-card border">
  <div class="contents">
    <!-- insert contents -->
  </div>
</div>
```

#### Float

```html
<div class="ga-card float">
  <div class="contents">
    <!-- insert contents -->
  </div>
</div>
```

#### Round

```html
<!-- round small-->
<div class="ga-card round-s">
  <div class="contents"><!-- insert contents --></div>
</div>
<!-- round medium-->
<div class="ga-card round-m">
  <div class="contents"><!-- insert contents --></div>
</div>
<!-- round large-->
<div class="ga-card round-l">
  <div class="contents"><!-- insert contents --></div>
</div>
<!-- round extra large-->
<div class="ga-card round-xl">
  <div class="contents"><!-- insert contents --></div>
</div>
```

## Cards

#### Base

```html
<div class="ga-cards">
  <div class="ga-card">
    <div class="contents"><!-- insert contents --></div>
  </div>
  ...
</div>
```

#### Grid
Cards 엘리먼트에 `column-{숫자}`를 사용해 card 들을 그리드 현태로 표시 할 수 있다.
의미는 cards의 전체 width 크기의 {숫자}등분을 의미한다.
ex) column-4 는 4등분 이므로 한줄에 4개의 카드를 배치할 수 있다,

```html
<div class="ga-cards column-{number}">
  <div class="ga-card">
    <div class="contents"><!-- insert contents --></div>
  </div>
  ...
</div>
```

#### responsive

지정된 `beakpoint`에서 각각 지정된 등분으로 표시한다. 지정된 영역에서만 적용 되므로 지정하지 않은 영역은 기본 등분값이 적용된다. 

```html
<div class="ga-cards column-{n} column-md-{n} column-sm-{n} column-xs-{n}">
  <div class="ga-card">
    <div class="contents"><!-- insert contents --></div>
  </div>
  ...
</div>
```