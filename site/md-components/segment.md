# Segments
텍스트, 이미지, 액션을 묶어 구분해 주는 세그먼트 컨테이너

## Usage

#### Base

```html
<div class="ga-segment">
  <div class="contents">
    <!-- contents -->
  </div>
</div>
```

#### String contents
컨텐츠가 문자열인 경우 `<div class="contents">` 없이 바로 작성 할 수 있다.

```html
<div class="ga-segment"> only string contents </div>
```

#### border

```html
<div class="ga-segment border">
  <div class="contents">
    <!-- contents -->
  </div>
</div>
```

#### float

```html
<div class="ga-segment float">
  <div class="contents">
    <!-- contents -->
  </div>
</div>
```

#### surface

```html
<div class="ga-segment surface">
  <div class="contents">
    <!-- contents -->
  </div>
</div>
```

#### align

`.contents` 내부의 컨텐츠 정렬을 설정합니다.

```html
<div class="ga-segment align-left">
  <div class="contents">
    <!-- contents -->
  </div>
</div>
<div class="ga-segment align-center">
  <div class="contents">
    <!-- contents -->
  </div>
</div>
<div class="ga-segment align-right">
  <div class="contents">
    <!-- contents -->
  </div>
</div>
```

#### Round

```html
<!-- radius small -->
<div class="ga-segment round-s">
  <div class="contents">
    <!-- contents -->
  </div>
</div>
<!-- radius medium -->
<div class="ga-segment round-m">
  <div class="contents">
    <!-- contents -->
  </div>
</div>
<!-- radius large -->
<div class="ga-segment round-l">
  <div class="contents">
    <!-- contents -->
  </div>
</div>
<!-- radius extra large -->
<div class="ga-segment round-xl">
  <div class="contents">
    <!-- contents -->
  </div>
</div>
```

#### Title

```html
<div class="ga-segment">
  <div class="contents">
    <div class="title">title</div>
    <!-- contents -->
  </div>
</div>
```

#### Attached (header, footer)

```html
<div class="ga-segment atteched">
  <div class="header"></div>
  <div class="contents">
    <!-- contents -->
  </div>
  <div class="footer"></div>
</div>
```

#### Extra

```html
<div class="ga-segment extra">
  <div class="contents">
    <!-- contents -->
  </div>
  <div class="extra"></div>
</div>
```

### Segments

#### Base

```html
<div class="ga-segments">
  <div class="ga-segment">
    <div class="contents"><!-- contents --></div>
  </div>
  <div class="ga-segment">
    <div class="contents"><!-- contents --></div>
  </div>
  ... ...
</div>
```




