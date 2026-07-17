

`Frog UI`는 시멘틱 클래스를 기반으로 한 스타일링 시스템입니다. 기본적으로, 우리의 디자인 시스템 내에서 유틸리티 클래스를 적용하는 것을 피하는 원칙을 따릅니다. 그러나 컴포넌트 배치 및 레이아웃 조정과 같은 사용자 맞춤 스타일링에는 유틸리티 클래스를 사용하는 것이 더 유리합니다. 따라서 가장 유용한 유틸리티 클래스의 최소 집합을 정의하여 별도의 라이브러리를 사용할 필요가 없도록 했습니다.

물론 유틸리티 클래스만 사용해서 클래스를 구성하는것은 여전히 옳은 방식이라고 생각하지 않습니다. 반드시 시멘틱 + 유틸리티 클래스를 적용하도록 유의하세요.

### Flex

모던 스타일링에서 가장 중요한 스타일 입니다. 아이템들의 규칙적으로 배치 합니다.

#### Base
기본적으로 `flex-direct: row`, `flex-wrap: wrap`, `align-items: center` 값을 갖습니다.
<div class="ga-segment border round-m">
  <div class="contents">
    <div class="flex gray-bg-5 gap-1">
      <div class="item p-3 gray-bg-10">Item 1</div>
      <div class="item p-3 gray-bg-10">Item 2</div>
      <div class="item p-3 gray-bg-10">Item 3</div>
      <div class="item p-3 gray-bg-10">Item 4</div>
    </div>
  </div>
</div>

```html
<div class="ga flex"> ... </div>
```
#### Inline
<div class="ga-segment border round-m">
  <div class="contents">
    <div class="ga flex inline gray-bg-5 gap-1">
      <div class="item p-3 gray-bg-10">Item 1</div>
      <div class="item p-3 gray-bg-10">Item 2</div>
      <div class="item p-3 gray-bg-10">Item 3</div>
      <div class="item p-3 gray-bg-10">Item 4</div>
    </div>
  </div>
</div>

```html
<div class="ga flex inline"> ... </div>
```

#### Column
<div class="ga-segment border round-m">
  <div class="contents">
    <div class="ga flex column gap-1">
      <div class="item p-3 gray-bg-10">Item 1</div>
      <div class="item p-3 gray-bg-10">Item 2</div>
      <div class="item p-3 gray-bg-10">Item 3</div>
      <div class="item p-3 gray-bg-10">Item 4</div>
    </div>
  </div>
</div>

```html
<div class="ga flex column"> ... </div>
```

#### No wrap
`nowrap`을 사용하면 아이템이 줄바꿈되는 것을 방지 할 수 있습니다. 이를 사용하여 많은 아이템을 한줄로 배치하고 스트롤링을 통한 인터렉션등에 이용할 수 있습니다.
<div class="ga-segment border round-m">
  <div class="contents">
    <div class="ga flex nowrap shrink basis-8 gap-1">
      <div class="item p-3 gray-bg-10">Item 1</div>
      <div class="item p-3 gray-bg-10">Item 2</div>
      <div class="item p-3 gray-bg-10">Item 3</div>
      <div class="item p-3 gray-bg-10">Item 4</div>
    </div>
  </div>
</div>

```html
<!-- flex-wrap: wrap; (default) -->
<div class="ga flex nowrap"> ... </div>
```

#### Justify Contents
아이템들의 수평 정렬을 정의 합니다.
<div class="ga-segment border round-m">
  <div class="contents">
    <div class="bold m-4">flex-start</div>
    <div class="ga flex start gap-1 gray-bg-5">
      <div class="item p-3 gray-bg-10">Item 1</div>
      <div class="item p-3 gray-bg-10">Item 2</div>
      <div class="item p-3 gray-bg-10">Item 3</div>
      <div class="item p-3 gray-bg-10">Item 4</div>
    </div>
    <div class="bold m-4">center</div>
    <div class="ga flex center gap-1 gray-bg-5">
      <div class="item p-3 gray-bg-10">Item 1</div>
      <div class="item p-3 gray-bg-10">Item 2</div>
      <div class="item p-3 gray-bg-10">Item 3</div>
      <div class="item p-3 gray-bg-10">Item 4</div>
    </div>
    <div class="bold m-4">flex-end</div>
    <div class="ga flex end gap-1 gray-bg-5">
      <div class="item p-3 gray-bg-10">Item 1</div>
      <div class="item p-3 gray-bg-10">Item 2</div>
      <div class="item p-3 gray-bg-10">Item 3</div>
      <div class="item p-3 gray-bg-10">Item 4</div>
    </div>
    <div class="bold m-4">between</div>
    <div class="ga flex between gap-1 gray-bg-5">
      <div class="item p-3 gray-bg-10">Item 1</div>
      <div class="item p-3 gray-bg-10">Item 2</div>
      <div class="item p-3 gray-bg-10">Item 3</div>
      <div class="item p-3 gray-bg-10">Item 4</div>
    </div>
    <div class="bold m-4">around</div>
    <div class="ga flex around  gap-1 gray-bg-5">
      <div class="item p-3 gray-bg-10">Item 1</div>
      <div class="item p-3 gray-bg-10">Item 2</div>
      <div class="item p-3 gray-bg-10">Item 3</div>
      <div class="item p-3 gray-bg-10">Item 4</div>
    </div>
    <div class="bold m-4">evenly</div>
    <div class="ga flex evenly gap-1 gray-bg-5">
      <div class="item p-3 gray-bg-10">Item 1</div>
      <div class="item p-3 gray-bg-10">Item 2</div>
      <div class="item p-3 gray-bg-10">Item 3</div>
      <div class="item p-3 gray-bg-10">Item 4</div>
    </div>
  </div>
</div>

```html
<!-- justify-contents: flex-start; (default) -->
<div class="ga flex start"> ... </div>
<div class="ga flex center"> ... </div>
<div class="ga flex end"> ... </div>
<div class="ga flex between"> ... </div>
<div class="ga flex around"> ... </div>
<div class="ga flex evenly"> ... </div>
```

#### Align Items
아이템들의 수직 정렬을 정의 합니다.
<div class="ga-segment border round-m">
  <div class="contents">
    <div class="bold m-4">flex-start</div>
    <div class="ga flex top gap-1 gray-bg-5">
      <div class="item p-3 py-5 gray-bg-10">Item 1</div>
      <div class="item p-3 py-8 gray-bg-10">Item 2</div>
      <div class="item p-3 py-2 gray-bg-10">Item 3</div>
      <div class="item p-3 py-4 gray-bg-10">Item 4</div>
    </div>
    <div class="bold m-4">center</div>
    <div class="ga flex mid  gap-1 gray-bg-5">
      <div class="item p-3 py-5 gray-bg-10">Item 1</div>
      <div class="item p-3 py-8 gray-bg-10">Item 2</div>
      <div class="item p-3 py-2 gray-bg-10">Item 3</div>
      <div class="item p-3 py-4 gray-bg-10">Item 4</div>
    </div>
    <div class="bold m-4">flex-end</div>
    <div class="ga flex bottom gap-1 gray-bg-5">
      <div class="item p-3 py-5 gray-bg-10">Item 1</div>
      <div class="item p-3 py-8 gray-bg-10">Item 2</div>
      <div class="item p-3 py-2 gray-bg-10">Item 3</div>
      <div class="item p-3 py-4 gray-bg-10">Item 4</div>
    </div>
    <div class="bold m-4">stretch</div>
    <div class="ga flex stretch gap-1 gray-bg-5">
      <div class="item p-3 py-5 gray-bg-10">Item 1</div>
      <div class="item p-3 py-8 gray-bg-10">Item 2</div>
      <div class="item p-3 py-2 gray-bg-10">Item 3</div>
      <div class="item p-3 py-4 gray-bg-10">Item 4</div>
    </div>
  </div>
</div>

```html
<!-- justify-contents: flex-start; (default) -->
<div class="ga flex top"> ... </div>
<div class="ga flex mid"> ... </div>
<div class="ga flex bottom"> ... </div>
<div class="ga flex stretch"> ... </div>
```

#### Reverse
<div class="ga-segment border round-m">
  <div class="contents">
    <div class="ga flex reverse gap-1">
      <div class="item p-3 gray-bg-10">Item 1</div>
      <div class="item p-3 gray-bg-10">Item 2</div>
      <div class="item p-3 gray-bg-10">Item 3</div>
      <div class="item p-3 gray-bg-10">Item 4</div>
    </div>
  </div>
</div>

```html
<div class="ga flex reverse"> ... </div>
```

#### Basis
아이템들의 초기 크기를 지정합니다. (단위: %) 사용되는 위치에 따라 컨테이터 적용 시 전에 아이템에 적용되고 아이템 각각에 개별 적용도 가능합니다.
<div class="ga-segment border round-m">
  <div class="contents">
    <div>All items set basis 20%</div>
    <div class="ga flex basis-4 gap-1">
      <div class="item p-3 gray-bg-10">basis: 20%</div>
      <div class="item p-3 gray-bg-10">basis: 20%</div>
      <div class="item p-3 gray-bg-10">basis: 20%</div>
      <div class="item p-3 gray-bg-10">basis: 20%</div>
    </div>
  </div>
  <div class="contents">
    <div>Item 1 set basis 25%</div>
    <div class="ga flex gap-1">
      <div class="item p-3 gray-bg-10 basis-5">basis: 25%</div>
      <div class="item p-3 gray-bg-10">Item</div>
      <div class="item p-3 gray-bg-10">Item</div>
      <div class="item p-3 gray-bg-10">Item</div>
    </div>
  </div>
</div>

```html
<!-- num: from 1 to 10 -->
<!-- size: num * 5% -->
<!-- basis-5 : 25% -->
<div class="ga flex basis-{num}"> ... </div>
<div class="ga flex">
  <div class="item basis-{num}"> ...</div>
  <div class="item"> ...</div>
  ...
</div>
```

#### Grow / Shrink (all)
`grow`: 아이템들에 균일하게 크기를 적용하여 플랙스 공간을 채웁니다. (item > flex-grow: 1)

`shrink`: 아이템들 각각의 지정된 크기를 우선 적용합니다. (item > flex-shrink: 0)
<div class="ga-segment border round-m">
  <div class="contents">
    <div class="m-4"></div>
    <div class="ga flex grow gap-1">
      <div class="item p-3 gray-bg-10">Item 1</div>
      <div class="item p-3 gray-bg-10">Item 2</div>
      <div class="item p-3 gray-bg-10">Item 3</div>
      <div class="item p-3 gray-bg-10">Item 4</div>
    </div>
    <div class="m-4"></div>
    <div class="ga flex grow shrink gap-1">
      <div class="item p-3 gray-bg-10">Item</div>
      <div class="item p-3 gray-bg-10">Item</div>
      <div class="item p-3 gray-bg-10 basis-4 ">basis: 20% </div>
      <div class="item p-3 gray-bg-10">Item</div>
    </div>
  </div>
</div>

```html
<!-- all children set 'flex-grow: 1' -->
<div class="ga flex grow"> ... </div>
<!-- all children set 'flex-shrink: 0' -->
<div class="ga flex shrink"> ... </div>
```

#### Grow / Shrink (item)
아이템에 개별로 `flex-grow: {number}`, `flex-shrink: {number}`을 적용합니다. (0 ~ 3까지 적용)
<div class="ga-segment border round-m">
  <div class="contents">
    <div class="ga flex gap-1">
      <div class="item p-3 gray-bg-10 grow-1">grow: 1</div>
      <div class="item p-3 gray-bg-10">Item</div>
      <div class="item p-3 gray-bg-10  basis-6 shrink-0">shrink: 0, basis: 30%</div>
      <div class="item p-3 gray-bg-10">Item</div>
    </div>
  </div>
</div>

```html
<div class="ga flex">
  <div class="item grow-1"> ...</div>
  <div class="item shrink-0"> ...</div>
  <div class="item"> ...</div>
  ...
</div>
```


#### Gap
아이템간 간격을 적용합니다. 
<div class="ga-segment border round-m">
  <div class="contents">
    <div>gap: 4px</div>
    <div class="ga flex gap-1">
      <div class="item p-3 gray-bg-10">Item 1</div>
      <div class="item p-3 gray-bg-10">Item 2</div>
      <div class="item p-3 gray-bg-10">Item 3</div>
      <div class="item p-3 gray-bg-10">Item 4</div>
    </div>
  </div>
  <div class="contents">
    <div>gap: 16px</div>
    <div class="ga flex gap-4">
      <div class="item p-3 gray-bg-10">Item 1</div>
      <div class="item p-3 gray-bg-10">Item 2</div>
      <div class="item p-3 gray-bg-10">Item 3</div>
      <div class="item p-3 gray-bg-10">Item 4</div>
    </div>
  </div>
  <div class="contents">
    <div>gap: 32px</div>
    <div class="ga flex gap-8">
      <div class="item p-3 gray-bg-10">Item 1</div>
      <div class="item p-3 gray-bg-10">Item 2</div>
      <div class="item p-3 gray-bg-10">Item 3</div>
      <div class="item p-3 gray-bg-10">Item 4</div>
    </div>
  </div>
</div>

```html
<!-- gap number from 0 to 10 -->
<div class="ga flex gap-{num}"> ... </div>
```


### Spacing

요소의 padding, margin을 저정 합니다.

#### Dimensions
|Usage|Title|Size|Rem|
|---|---|---|---|
| <span class="pl-0 ga-lightblue"></span> | Spacing 0 | 0px | 0rem |
| <span class="pl-1 ga-lightblue"></span> | Spacing 1 | 2px | 0.5rem |
| <span class="pl-2 ga-lightblue"></span> | Spacing 2 | 4px | 1rem |
| <span class="pl-3 ga-lightblue"></span> | Spacing 3 | 6px | 1.5rem |
| <span class="pl-4 ga-lightblue"></span> | Spacing 4 | 8px | 2rem |
| <span class="pl-5 ga-lightblue"></span> | Spacing 5 | 12px | 3rem |
| <span class="pl-6 ga-lightblue"></span> | Spacing 6 | 16px | 4rem |
| <span class="pl-7 ga-lightblue"></span> | Spacing 7 | 20px | 5rem |
| <span class="pl-8 ga-lightblue"></span> | Spacing 8 | 24px | 6rem |
| <span class="pl-9 ga-lightblue"></span> | Spacing 9 | 28px | 7rem |
| <span class="pl-10 ga-lightblue"></span> | Spacing 10 | 32px | 8rem |
| <span class="pl-11 ga-lightblue"></span> | Spacing 11 | 36px | 9rem |
| <span class="pl-12 ga-lightblue"></span> | Spacing 12 | 40px | 10rem |
| <span class="pl-13 ga-lightblue"></span> | Spacing 13 | 44px | 11rem |
| <span class="pl-14 ga-lightblue"></span> | Spacing 14 | 48px | 12rem |
| <span class="pl-15 ga-lightblue"></span> | Spacing 15 | 60px | 15rem |
| <span class="pl-16 ga-lightblue"></span> | Spacing 16 | 80px | 20rem |

```scss
$spacingUnit: 4px;

// spacing = $spacingUnit * rem size
// Spacing 10 = 4px * 8 = 32px
```

#### Basic

<div class="ga-segment border round-m">
  <div class="contents ga flex center">
    <div class="ga-orange-light">
      <div class="p-6 m-6 ga-blue-light" >
        <div class="ga-primary p-4">contetns</div>
      </div>
    </div>
  </div>
</div>

```html
<div>
  <div class="p-{number} m-{number}">contetns</div>
</div>
```

#### Padding

<div class="ga-segment border round-m">
  <div class="contents ga flex center">
    <div>
      <div class="p-6 ga-blue-light" >
        <div class="ga-primary p-6">p-4</div>
      </div>
    </div>
  </div>
</div>

```html
<div>
  <div class="p-{number}">contetns</div>
</div>
```

#### Padding single side

<div class="ga-segment border round-m">
  <div class="contents ga flex center gap-4">
    <div>
      <div class="pt-6 ga-blue-light" >
        <div class="ga-primary p-6">p-t4</div>
      </div>
    </div>
    <div>
      <div class="pb-6 ga-blue-light" >
        <div class="ga-primary p-6">pb-4</div>
      </div>
    </div>
    <div>
      <div class="pl-6 ga-blue-light" >
        <div class="ga-primary p-6">pl-4</div>
      </div>
    </div>
    <div>
      <div class="pr-6 ga-blue-light" >
        <div class="ga-primary p-6">pr-4</div>
      </div>
    </div>
  </div>
</div>

```html
<div>
  <div class="pt-{number}">contetns</div>
  <div class="pb-{number}">contetns</div>
  <div class="pl-{number}">contetns</div>
  <div class="pr-{number}">contetns</div>
</div>
```

#### Padding Horizontal

<div class="ga-segment border round-m">
  <div class="contents ga flex center">
    <div>
      <div class="px-6 ga-blue-light" >
        <div class="ga-primary p-6">px-4</div>
      </div>
    </div>
  </div>
</div>

```html
<div>
  <div class="px-{number}">contetns</div>
</div>
```


#### Padding Vertical

<div class="ga-segment border round-m">
  <div class="contents ga flex center">
    <div>
      <div class="py-6 ga-blue-light" >
        <div class="ga-primary p-6">py-4</div>
      </div>
    </div>
  </div>
</div>

```html
<div>
  <div class="px-{number}">contetns</div>
</div>
```


#### Margin

<div class="ga-segment border round-m">
  <div class="contents ga flex center">
    <div class="ga-orange-light">
      <div class="m-6 ga-blue-light" >
        <div class="ga-primary p-6">m-4</div>
      </div>
    </div>
  </div>
</div>

```html
<div>
  <div class="m-{number}">contetns</div>
</div>
```

#### Margin single side

<div class="ga-segment border round-m">
  <div class="contents ga flex center gap-4">
    <div class="ga-orange-light">
      <div class="mt-6 ga-blue-light" >
        <div class="ga-primary p-6">mt-4</div>
      </div>
    </div>
    <div class="ga-orange-light">
      <div class="mb-6 ga-blue-light" >
        <div class="ga-primary p-6">mb-4</div>
      </div>
    </div>
    <div class="ga-orange-light">
      <div class="ml-6 ga-blue-light" >
        <div class="ga-primary p-6">ml-4</div>
      </div>
    </div>
    <div class="ga-orange-light">
      <div class="mr-6 ga-blue-light" >
        <div class="ga-primary p-6">mr-4</div>
      </div>
    </div>
  </div>
</div>

```html
<div>
  <div class="mt-{number}">contetns</div>
  <div class="mb-{number}">contetns</div>
  <div class="ml-{number}">contetns</div>
  <div class="mr-{number}">contetns</div>
</div>
```

#### Margin Horizontal

<div class="ga-segment border round-m">
  <div class="contents ga flex center">
    <div class="ga-orange-light">
      <div class="mx-6 ga-blue-light" >
        <div class="ga-primary p-6">mx-4</div>
      </div>
    </div>
  </div>
</div>

```html
<div>
  <div class="mx-{number}">contetns</div>
</div>
```

#### Margin Vertical

<div class="ga-segment border round-m">
  <div class="contents ga flex center">
    <div class="ga-orange-light">
      <div class="my-6 ga-blue-light" >
        <div class="ga-primary p-6">my-4</div>
      </div>
    </div>
  </div>
</div>

```html
<div>
  <div class="my-{number}">contetns</div>
</div>
```


## Radius

<div class="ga-segment border round-m">
  <div class="contents ga flex center">
    <div class="p-4 ga-blue-light" >
      <div class="ga-primary p-6 radius-xs">Radius xs</div>
    </div>
    <div class="p-4 ga-blue-light" >
      <div class="ga-primary p-6 radius-sm">Radius sm</div>
    </div>
    <div class="p-4 ga-blue-light" >
      <div class="ga-primary p-6 radius-md">Radius md</div>
    </div>
    <div class="p-4 ga-blue-light" >
      <div class="ga-primary p-6 radius-lg">Radius lg</div>
    </div>
    <div class="p-4 ga-blue-light" >
      <div class="ga-primary p-6 radius-xl">Radius xl</div>
    </div>
    <div class="p-4 ga-blue-light" >
      <div class="ga-primary p-6 radius-full">Radius full</div>
    </div>
  </div>
</div>

```html
<!-- xs: 2px, sm: 4px, md: 8px, lg: 12px, xl: 16px, full: ($heightRhythm / 2)px -->
<div>
  <div class="radius-xs">Radius xs</div>
  <div class="radius-sm">Radius sm</div>
  <div class="radius-md">Radius md</div>
  <div class="radius-lg">Radius lg</div>
  <div class="radius-xl">Radius xl</div>
  <div class="radius-full">Radius full</div>
</div>
```

