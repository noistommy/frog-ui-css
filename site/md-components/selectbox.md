# Selectbox
여러 옵션 중 하나를 선택하는 드롭다운 UI.

## Anatomy

```html
<div class="ga-select-box dropdown">
  <!-- Display selected Item  -->
  <div class="select-item ga-input icon right">
    <input type="text" readonly />
    <i class="icon xi-chevron-down">
  </div>
  <!-- Menu list -->
  <div class="select-menu">
    <div class="ga-list selection">
      <div class="item option-item">OPTION</div>
      ... ...
    </div">
  </div>
</div>
```

- **Selected Item**: 선택된 아이템 표시 및 메뉴 검색을 위해 `ga-input` 텍스트 박스를 사용
- **Menu List**: 목록 표시 및 선택된 아이템 표시를 위해 `ga-list` 를 사용

## Usage

#### Base - Dropdown

**dropdown type**: 메뉴가 select item 영역 아래 에서 `show/hide` 동작한다

```html
<div class="ga-select-box dropdown">  
  <div class="select-item ga-input icon right">
    <input type="text" readonly />
    <i class="icon xi-chevron-down">
  </div>
  <div class="select-menu">
    <div class="ga-list selection">
      <div class="item option-item">OPTION</div>
      ... ...
    </div">
  </div>
</div>
```

#### Float

**float type**: 메뉴가 select item 영역 위에서 `show/hide` 동작한다.

```html
<div class="ga-select-box float">
  <!-- select item -->
  <!-- menu list -->
</div>
```

#### Compact

```html
<div class="ga-select-box compact">
  <!-- select item -->
  <!-- menu list -->
</div>
```

### Selct-Option Tag

#### Base

```html
<div class="ga-select-box">
  <select>
    <option default value="">Option1</option>
    <option value="value">Option2</option>
    ...
  </select>
  <i class="icon xi-angle-down" /></i>
</div>
```
