# Checkbox and Radio
접근성이 보장된 명확한 시각 상태를 가진 멀티 선택 입력.

## Usage

#### Active check type

```html
<!-- use classname 'checked' -->
<label class="ga-checkbox {checked}">
    <input type="checkbox" /> Label Text
</label>
<!-- use input attr 'checked' -->
<label class="ga-checkbox">
    <input type="checkbox" {checked} /> Label Text
</label>
```

#### Base

```html
<!-- checkbox -->
<label class="ga-checkbox">
    <input type="checkbox" /> Label Text
</label>
<!-- radio -->
<label class="ga-checkbox radio">
    <input type="radio" /> Label Text
</label>
```

#### No label

```html
<!-- no label -->
<label class="ga-checkbox {checked}">
    <input type="checkbox" />
</label>
<!-- use label -->
<label class="ga-checkbox {checked}">
    <input type="checkbox" /> Use label
</label>
```

#### Checkboxs

```html
<div class="wrapper">
  <label class="ga-checkbox">
    <input type="checkbox" name="checkbox" /> checkbox 1
  </label>
  <label class="ga-checkbox">
    <input type="checkbox" name="checkbox" /> checkbox 2
  </label>
  <label class="ga-checkbox">
    <input type="checkbox" name="checkbox" /> checkbox 3
  </label>
</div>
```

#### Indeterminate

```html
<label class="ga-checkbox indeter">
    <input type="checkbox" /> Label text
</label>
```

#### Radios

```html
<div class="wrapper">
  <label class="ga-checkbox radio">
    <input type="radio" name="radio" /> option 1
  </label>
  <label class="ga-checkbox radio">
    <input type="radio" name="radio" /> option 2
  </label>
  <label class="ga-checkbox radio">
    <input type="radio" name="radio" /> option 3
  </label>
</div>
```