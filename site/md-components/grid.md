# Grid

CSS Flex 기반의 정렬과 레이아웃을 위한 그리드 유틸리티.

## Anatomy

#### Grid - width type

디자인 시스템을 통해 설정된 그리드 크기에 맞춰 column 각각의 크기를 지정합니다.

```html
<div class="ga-grid">
  <div class="column span-{column number}">...</div>
  <div class="column span-{column number}">...</div>
  ...
</div>
```

#### Grid - divide type

디자인 시스템을 통해 설정된 전제 크기를 지정된 등분으로 나누어 column을 표시합니다.

```html
<div class="ga-grid divide-{divide numner}">
  <div class="column">...</div>
  <div class="column">...</div>
  <div class="column">...</div>
</div>
```

## Usage

#### Base

column 크기를 명시 하지 않았을때 `column = span-1`을 의미합니다.

```html
<div class="ga-grid">    
  <!-- columns -->    
  <div class="column" />    
  <div class="column" />    
  ...    
  <div class="column" />
</div>
```

#### Divide

```html
<div class="ga-grid divide-{2|4|6|8|10}">    
  <!-- columns -->    
  <div class="column" />    
  <div class="column" />
  ...    
  <div class="column" />
</div>
```

#### Widths

```html
<div class="ga-grid">
  <!-- columns -->    
  <div class="column span-{number}" />    
  <div class="column span-{number}" />    
  ...    
  <div class="column span-{number}" />
</div>
```

#### Fill(left|right) Side

- **left-side**: column의 크기에 상관없이 제일 왼쪽 column으로 남은 공간 크기만큼 지정한다.
- **right-side**: column의 크기에 상관없이 제일 오른쪽 column으로 남은 공간 크기만큼 지정한다.
```html
<div class="ga-grid left-side">
  <!-- columns -->    
  <div class="column span-{number}" />    
  <div class="column span-{number}" />    
  ...    
  <div class="column span-{number}" />
</div>
<div class="ga-grid right-side">
  <!-- columns -->    
  <div class="column span-{number}" />    
  <div class="column span-{number}" />    
  ...    
  <div class="column span-{number}" />
</div>
```


#### Align Columns

- **justify-left**: 왼쪽 정렬
- **justify-center**: 중앙 정렬
- **justify-right**: 오른쪽 정렬
- **justify-between**: 양쪽 정렬
- **justify-around**: 등분 정렬

```html
<div class="ga-grid justify-{left | center | right | between | around}">
  <!-- columns -->    
  <div class="column" />    
  <div class="column" />    
  ... ...    
  <div class="column" />
</div>
```

#### Offset

```html
<div class="ga-grid">    
  <!-- columns -->    
  <div class="column span-{number} offset-{number}" />    
  ... ...
</div>
```

#### Rows

```html
<div class="ga-grid">    
  <!-- rows -->    
  <div class="rows">       
    <!-- columns -->       
    <div class="column" />       
    ... ... 
  </div>
  <!-- rows -->    
  <div class="rows">       
    <!-- columns -->       
    <div class="column" />       
    ... ...
  </div>
</div>
```


#### Reponsive

```html
<div class="ga-grid">    
  <!-- columns -->   
  <div class="column span-{n} span-md-{n} span-sm-{n} span-xs-{n}" />   
  ... ...
</div>
```
