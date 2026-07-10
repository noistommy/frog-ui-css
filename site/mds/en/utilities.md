`Frog UI` is a styling system based on semantic classes. By default, it follows the principle of avoiding the application of utility classes to defined component styles. However, for user custom styling such as component placement and layout adjustments, using utility classes is more advantageous. Therefore, a minimal set of the most useful utility classes has been defined so that you don't need to use a separate library.

Of course, composing classes using only utility classes is still not considered the right approach. Be sure to apply a combination of semantic + utility classes.

### Flex

This is the most important style in modern styling. It arranges items in a consistent manner.

#### Base
By default, it has the values `flex-direction: row`, `flex-wrap: wrap`, `align-items: center`.
<div class="ga-segment border round-m">
  <div class="contents">
    <div class="ga flex gray-bg-5 gap-1">
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
Using `nowrap` prevents items from wrapping to a new line. This can be used to arrange many items in a single row and use them for interactions such as scrolling.
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
Defines the horizontal alignment of items.
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
Defines the vertical alignment of items.
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
Specifies the initial size of items (unit: %). Depending on where it's used, it can be applied to the container before being applied to items, and it can also be applied individually to each item.
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
`grow`: Applies a uniform size to items to fill the flex space. (item > flex-grow: 1) <br />
`shrink`: Prioritizes the individually specified size of each item. (item > flex-shrink: 0)
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
Applies `flex-grow: {number}` and `flex-shrink: {number}` individually to an item (applicable from 0 to 3).
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
Applies spacing between items.
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

Specifies the padding and margin of an element.

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

