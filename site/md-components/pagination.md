# Pagination

여러 페이지의 콘텐츠를 탐색하기 위한 페이지네이션 UI. 

## Anatomy

```html
<div class="ga-pagination">
  <!-- click to go first number -->
  <div class="pagination-nav first">
    <i class="xi-icon-first"></i>
  </div>
  <!-- click to go preview number -->
  <div class="pagination-nav prev">
    <i class="xi-icon-prev"></i>
  </div>
  <div class="pagination-page-wrapper">
    <div class="pagination-num active">1</div>
    <!-- ellipsis preview -->
    <div class="pagination-num block-prev">
      <i class="xi-icon-ellipsis"></i>
    </div>
    <div class="pagination-num">{n}</div>
    ... ...
    <!-- ellipsis next -->
    <div class="pagination-num block-prev">
      <i class="xi-icon-ellipsis"></i>
    </div>
    <div class="pagination-num">{last}</div>
  </div>
  <!-- click to go next number -->
  <div class="pagination-nav next">
    <i class="xi-icon-right"></i>
  </div>
  <!-- click to go last number -->
  <div class="pagination-nav end">
    <i class="xi-icon-end"></i>
  </div>
</div>
```

## Usage

#### Base

```html
 <div class="ga-pagination">
    <div class="pagination-nav prev"><i class="xi-angle-left"></i></div>
    <div class="pagination-page-wrapper">
        <div class="pagination-num active">1</div>
        <div class="pagination-num">{n}</div>
        ...
    </div>
    <div class="pagination-nav next"><i class="xi-angle-right"></i></div>
</div>
```

#### display Limit Length
  전체 페이지 중 지정된 페이지 수 만큼 화면에 표시 하기 위해 중간 페이지 를 숨기고 `ellipsis` 버튼을 클릭해 숨겨진 페이지로 이동 할 수 있다.

  **ellipsis preview**: 현재 페이지 이전 페이지를 보여준다
  **ellipsis next**: 현재 페이지 다음 페이지를 보여준다

```html
<div class="ga-pagination">
    <div class="pagination-nav prev"><i class="xi-angle-left"></i></div>
    <div class="pagination-page-wrapper">
        <div class="pagination-num active">1</div>
        <div class="pagination-num block-prev"><i class="xi-ellipsis-h"></i></div>
        <div class="pagination-num">{n}</div>
        ...
        <div class="pagination-num block-next"><i class="xi-ellipsis-h"></i></div>
        <div class="pagination-num">{last}</div>
    </div>
    <div class="pagination-nav next"><i class="xi-angle-right"></i></div>
</div>
```

#### Round

```html
<div class="ga-pagination number round">
  <!-- pagination numbers -->
</div>
```

#### Custom style

```html
<div class="ga-pagination number round">
  <!-- pagination numbers -->
  <div class="pagination-page-wrapper">
    <!-- use custon classname -->
    <div class="pagination-num {custom-pagination-num}">{n}</div>
  </div>
</div>
```


#### Page type
**page type**: `current page`/`all page length` 형태로 보여준다.

```html
<div class="ga-pagination page">
  <!-- pagination numbers -->
</div>
```

#### Compact

```html
<div class="ga-pagination comppact">
  <!-- pagination numbers -->
</div>
```

#### Align


```html
<!-- left align -->
<div class="ga-pagination align-left">
  <!-- pagination numbers -->
</div>
<!-- center align -->
<div class="ga-pagination align-center">
  <!-- pagination numbers -->
</div>
<!-- right align -->
<div class="ga-pagination align-right">
  <!-- pagination numbers -->
</div>
```

