# Form

## Anatomy

```html
<form class="ga-form">
  <div class="head">
    <!-- header contents -->
  </div>
  <div class="fields">
    <div class="field">
      <!-- form contents(label, input ...) -->
    </div>
  </div> 
  <div class="divider" />
</form>
```


## Usage

#### Header

```html
<form class="ga-form">
  <div class="head">
    <div class="title">title</div>
    <div class="desc">description</div>
  </div>
  ...
</form>
```


#### Field

```html
<form class="ga-form">
  <div class="field">
    <label for="name"> label
    <input name="name" />
    <!-- helper text -->
    <div class="help-text">help text</div>
    <!-- error text -->
    <div class="error-text">error text</div>
  </div>
</form>
```


#### Inline Field

```html
<form class="ga-form">
  <div class="field inline">
    <!-- field contents -->
  </div>
</form>
```


#### Label

```html
<form class="ga-form">
  <div class="field">
    <!-- no use label -->
    <input name="name" />
  </div>
  <div class="field">
    <!-- use label -->
    <label for="name"> label
    <input name="name" />
  </div>
  <!-- use form grid -->
  <div class="fields grid">
    <div class="field column span-3">
      <label for="name"> label
    </div>
    <div class="field column span-9">
      <input name="name" />
    </div>
  </div> 
</form>
```


#### Display required

```html
<form class="ga-form">
  <div class="field">
    <!-- class required -->
    <label for="name" class="required"> label
    <input name="name" />
  </div>
  <div class="field">
    <!-- use label -->
    <label for="name" required> label
    <input name="name" />
  </div>
</form>
```


#### Fields

```html
<form class="ga-form">
  <div class="fields">
    <div class="legend">Field title</div>
    <div class="field">
      <input type="text">
    </div>
    <div class="field">
      <input type="text">
    </div>
    <div class="field">
      <input type="text">
    </div>
  </div>
</form>
```

#### Disabled Field

```html
<form class="ga-form">
  <div class="field disabled">
    <!-- form contents -->
  </div>
</form>
```


#### Field Divide

```html
<!-- divide:  2|4|6|8|10 -->
<form class="ga-form">
  <div class="fields grid divide-{divide}">
    <div class="field column">
      <input type="text">
    </div>
    <div class="field column">
      <input type="text">
    </div>
    ... ...
    <div class="field column">
      <input type="text">
    </div>
  </div>
</form>
```


#### Field Grid

```html
<!-- sum of num < 12 in row -->
<form class="ga-form">
  <div class="fields grid">
    <div class="field column span-{num}">
      <input type="text">
    </div>
    <div class="field column span-{num}">
      <input type="text">
    </div>
    ... ...
    <div class="field column span-{num}">
      <input type="text">
    </div>
  </div>
</form>
```


#### Extra

```html
<form class="ga-form">
  <!-- something form element field -->
  <div class="field">
    <label>label</label>
    <input />
    <div class="extra">
      <div class="ga-checkbox">
        <input type="checkbox" />
        <label>label</label>
      </div>
    </div>
  </div>
</form>
```


#### With Textarea

```html
<!-- Normal -->
<form class="ga-form">
  <div class="field">
    <label>label</label>
    <textarea></textarea>
  </div>
</form>
<!-- Short -->
<form class="ga-form">
  <div class="field short">
    <label>label</label>
    <textarea></textarea>
  </div>
</form>
```


#### With checkbox & radio

```html
<form class="ga-form">
  <div class="fields">
    <div class="field {inline | none}">
      <label class="ga-checkbox">
        <input type="checkbox" name="checkbox" />
        label A
      </label>
      <label class="ga-checkbox">
        <input type="checkbox" name="checkbox" />
        label B
      </label>
      <label class="ga-checkbox">
        <input type="checkbox" name="checkbox" />
        label C
      </label>
    </div>
  </div>
</form>
```


#### With Radios

```html
<form class="ga-form">
  <div class="fields">
    <div class="field {inline | none}">
      <label class="ga-checkbox radio">
        <input type="radio" name="radios" />
        Radio A
      </label>
      <label class="ga-checkbox radio">
        <input type="radio" name="radios" />
        Radio B
      </label>
      <label class="ga-checkbox radio">
        <input type="radio" name="radios" />
        Radio C
      </label>
    </div>
  </div>
</form>
```


#### With Selectbox

```html
<form class="ga-form">
  <div class="fields">
    <div class="field">
      <div class="ga-select-box">
        <select>...</select>
      </div>
    </div>
  </div>
</form>
```