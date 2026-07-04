# Grid2

CSS Grid 기반의 정렬과 레이아웃을 위한 그리드 유틸리티.


## Usage

#### Base

```html
<div class="ga-grid2 divide-column-{num} row-{num}">
  <div class="column" />
  <div class="column" />
  ...
  <div class="column" />
</div>
```

#### Dosirak

```html
<div class="ga-grid2 dosirak set-rows"
       style="--grid-col-num: {number}; --grid-row-num: {number}" 
>
  <div class="column col-{num} row-{num}"></div>
  <div class="column col-{num} row-{num}"></div>
  ...
  <div class="column col-{num} row-{num}"></div>
</div>
```

#### Divide

```html
<div class="ga-grid2 divide-column-{number}">
  <div class="column"><!-- column contents --></div>
  <div class="column"><!-- column contents --></div>
  ...
  <div class="column"><!-- column contents --></div>
</div>
```

#### Widths

```html
<div class="ga-grid2">
  <div class="column col-{number}"><!-- column contents --></div>
  <div class="column col-{number}"><!-- column contents --></div>
  ...
  <div class="column col-{number}"><!-- column contents --></div>
</div>
```

#### Widths (+Row)

```html
<div class="ga-grid2 set-rows"
 style="--grid-row-num: {num}">
  <div class="column col-{num} row-{num}" ><!-- column contents --></div>
  <div class="column col-{num} row-{num}" ><!-- column contents --></div>
  ...
  <div class="column col-{num} row-{num}" ><!-- column contents --></div>
</div>
```

#### Flow Type

```html
<!-- column horizontal -->
<div class="ga-grid2 set-rows flow-column">
  <!-- grid columns -->
</div>
<!-- column vertical -->
<div class="ga-grid2 set-rows flow-row">
  <!-- grid columns -->
</div>
```

#### Dense

**Dense**: column 순서에 의한 배치가 우선이지만 `dense` 옵션이 `true` 일때 순서에 상관없이 배치 중간 빈칸을 채웁니다.

```html
<div class="ga-grid2 set-rows dense">
  <!-- grid columns -->
</div>
```

#### Auto-fit

**Auto-fit**: 지정된 column 크기에 상관없이 `row size / column length` 기준으로 자동 채우기 합니다.

```html
<div class="ga-grid2 set-rows auto-fit">
  <!-- grid columns -->
</div>
```