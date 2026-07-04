# Table

행과 헤더 스타일을 지원하는 데이터 테이블.

## Usage

#### Base

```html
<table class="ga-table">
  <thead>
    <tr>
      <th>head column 1</th>
      <th>head column 2</th>
      ...
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>column value 1-1</td>
      <td>column value 1-2</td>
      ...
    </tr>
    <tr>
      <td>column value 1-1</td>
      <td>column value 1-2</td>
      ...
    </tr>
    ...
  </tbody>
</table>
````


#### Single rows

**single type**: 셀 과 셀 사이 보더가 없는 스타일

```html
<table class="ga-table single">
  <!-- table -->
</table>
```


#### Footer

```html
<table class="ga-table">
  <thead>
    <!-- thead contents -->
  </thead>
  <tbody>
    <!-- tbody contents -->
  </tbody>
  <tfoot>
    <!-- tfoot contents -->
  </tfoot>
</table>
```


#### Vertical table


```html
<table class="ga-table structured">
    <tr>
      <!-- head cell -->
      <td class="label"><!-- labeled cell --></td>
      <!-- body cells -->
      <td><!-- body cell --></td>
      <td><!-- body cell --></td>
      ...
    </tr>
    ...
</table>
```


#### Merged Cell

```html
<table class="ga-table">
  ...
  <td colspan="{number}"><!-- merged {number} cell --></td>
  ...
</table>
```


#### Table Column Count

Evenly divide columns by the specified count (10-step percentage split)

```html
<!-- Evenly divided column layout. -->
<!-- two, three, four, five... up to ten can be applied via class -->
<table class="ga-table column three"> ... </table>
<table class="ga-table column four"> ... </table>
```


#### Table + Grid (Column width)

```html
<!-- Grid system column composition. -->
<!-- Apply col-{grid count} on header columns -->
<table class="ga-table">
  <thead>
    <tr>
      <th class="col-1">...</th>
      <th class="col-6">...</th>
      ...
    </tr>
    ...
  </thead>
  <tbody>
    <!-- tbody contents -->
  </tbody>
</table>
```

