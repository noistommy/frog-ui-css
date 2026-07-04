# Switch

부드러운 전환 효과를 가진 on/off 토글 형태의 입력 컴포넌트.

## Usage

#### Base

```html
<label class="ga-switch slide">
    <input type="checkbox" />
    <span class="switch" />
</label>
```

#### Inside

```html
<label class="ga-switch slide inside">
    <input type="checkbox" />
    <span class="switch" />
</label>
```

#### Round

```html
<label class="ga-switch slide round">
    <input type="checkbox" />
    <span class="switch" />
</label>
```

#### Button type

**Arttribute(data-length)**: (not required) on/off 버튼 컨텐츠의 글자수가 차이가 많이 날때 두 영역의 크지를 맞추기 위해 둘 중 큰 글자 수를 입력해서 영역 크기를 지정합니다.

```html
<!-- data-length:: Max character length count both of contents. -->
<label class="ga-switch button" data-length="{<number>}">
    <input type="checkbox" />
    <span class="on active">ON</span>
    <span class="off">OFF</span>
</label>
```


#### Colors

```html
<!--colors: red, orange, yellow, lightgreen, lightblue, blue
deepblue, deeppurple, purple, brown, gray -->
<!-- color: red -->
<label class="ga-switch red">
  <input type="checkbox" />
  <span class="switch" /></span>
</label>
<!-- colors -->
<label class="ga-switch {colors}">
  <input type="checkbox" />
  <span class="switch" /></span>
</label>
```