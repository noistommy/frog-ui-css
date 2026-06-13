# Input

일관된 스타일과 포커스 처리를 제공하는 텍스트 입력 필드.

## Usage

#### Base

```html
<div class="ga-input">    
  <input type="text" placeholder="Insert text" />
</div>
```

#### Label

```html
<div class="ga-input">    
  <!-- label system -->    
  <input type="text" placeholder="Insert text" />    
  <label>Title</label>
</div>
```

#### Disabled

```html
<div class="ga-input disabled">    
  <input type="text" placeholder="Insert text" />    
</div>
```

#### Readonly

```html
<div class="ga-input readonly">    
  <input type="text" placeholder="Insert text" />    
</div>
```

#### Underline

```html
<div class="ga-input underline">    
  <input type="text" placeholder="Insert text" />    
</div>
```

#### Transparent

```html
<div class="ga-input tansparent">    
  <input type="text" placeholder="Insert text" />    
</div>
```

#### Compact

```html
<div class="ga-input compact">    
  <input type="text" placeholder="Insert text" />    
</div>
```

#### Edit

```html
<!-- edit idle state-->
<div class="ga-input edit">    
  <input type="text" placeholder="Insert text" />    
</div>
<!-- edit editable state-->
<div class="ga-input edit editable">    
  <input type="text" placeholder="Insert text" />    
</div>
```
#### Status

```html
<!-- success-->
<div class="ga-input success">    
  <input type="text" placeholder="Insert text" />    
</div>
<!-- info-->
<div class="ga-input info">    
  <input type="text" placeholder="Insert text" />    
</div>
<!-- danger-->
<div class="ga-input danger">    
  <input type="text" placeholder="Insert text" />    
</div>
<!-- attention-->
<div class="ga-input attention">    
  <input type="text" placeholder="Insert text" />    
</div>
<!-- importance-->
<div class="ga-input importance">    
  <input type="text" placeholder="Insert text" />    
</div>
```

#### Fluid

```html
<div class="ga-input fluid">    
  <input type="text" placeholder="Insert text" />    
</div>
```

#### Unit

```html
<div class="ga-input unit" data-unit="unit text">    
  <input type="text" placeholder="Insert text" />    
</div>
```

#### Icon

```html
<!-- Left -->
<div class="ga-input icon left">    
  <input type="text" placeholder="Insert text" />
  <i class="xi-icon" />  
</div>
<!-- Right -->
<div class="ga-input icon right">    
  <input type="text" placeholder="Insert text" />
  <i class="xi-icon" />  
</div>
<!-- Both -->
<div class="ga-input icon both">    
  <i class="xi-icon" />  
  <input type="text" placeholder="Insert text" />
  <i class="xi-icon" />  
</div>
```


#### Badge

```html
<div class="ga-input badge">    
  <input type="text" placeholder="Insert text" />
  <span class="ga-badge">badge contents</span>  
</div>
```

#### With Label

```html
<!-- Left -->
<div class="ga-input labeled left">    
  <input type="text" placeholder="Insert text" />
  <label>label text</label>  
</div>
<!-- Right -->
<div class="ga-input labeled right">    
  <input type="text" placeholder="Insert text" />
  <label>label text</label>  
</div>
```

#### With Button

```html
<!-- Left -->
<div class="ga-input button left">    
  <input type="text" placeholder="Insert text" />
  <button class="ga-button">label text</button>  
</div>
<!-- Right -->
<div class="ga-input button right">    
  <input type="text" placeholder="Insert text" />
  <button class="ga-button">label text</button>   
</div>
```

#### Textarea

```html
<div class="ga-input">    
  <textarea placeholder="Insert text" />
</div>
<div class="ga-input short">    
  <textarea placeholder="Insert text" />
</div> 