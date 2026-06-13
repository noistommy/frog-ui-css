#### Brands

<div class="ga-segment surface round-m">
  <div class="ga-button primary">Primary</div>
  <div class="ga-button primary dark">Primary - Darker</div>
  <div class="ga-button secondary">Secondary</div>
  <div class="ga-button secondary dark">Secondary - Darker</div>
</div>

```html
<div class="primary">Primary</div>
<div class="primary dark">Primary - Darker</div>
<div class="secondary">Secondary</div>
<div class="secondary dark">Secondary - Darker</div>
```

#### Status

<div class="ga-segment surface round-m ga flex">
  <div>
    <div class="ga-button ga-success">Success</div>
    <div class="ga-button ga-info">Info</div>
    <div class="ga-button ga-danger">Danger</div>
    <div class="ga-button ga-attention">Attention</div>
    <div class="ga-button ga-importance">Importance</div>
  </div>
  <div>
    <div class="ga-button ga-success-light">Success</div>
    <div class="ga-button ga-info-light">Info</div>
    <div class="ga-button ga-danger-light">Danger</div>
    <div class="ga-button ga-attention-light">Attention</div>
    <div class="ga-button ga-importance-light">Importance</div>
  </div>
</div>

```html
// color
<div class="ga-success">Success</div>
<div class="ga-info">Info</div>
// color-light
<div class="ga-success">Success</div>
<div class="ga-info">Info</div>
```

#### Types

<div class="ga-segment surface round-m ga flex">
  <div class="flex gap-2">
    <div class="color-box ga-primary bordered">Basic</div>
    <div class="color-box ga-primary-text">Text</div>
    <div class="color-box ga-primary-bg">Background</div>
    <div class="color-box ga-primary-light">Light</div>
    <div class="color-box bordered ga-primary-border">Border</div>
  </div>
</div>

```html
<div class="ga-primary bordered">Basic</div>
<div class="ga-primary-text">Text</div>
<div class="ga-primary-bg">Background</div>
<div class="ga-primary-light">Light</div>
<div class="ga-primary-border">Border</div>
```

#### Grayscale

<div class="ga-segment surface round-m ga flex">
  <div class="ga flex">
    <div class="color-box small gray-bg-0">White(0)</div>
    <div class="color-box small gray-bg-5">5</div>
    <div class="color-box small gray-bg-10">10</div>
    <div class="color-box small gray-bg-15">15</div>
    <div class="color-box small gray-bg-20">20</div>
    <div class="color-box small gray-bg-30">30</div>
    <div class="color-box small gray-bg-40">40</div>
    <div class="color-box small gray-bg-50">50</div>
    <div class="color-box small gray-bg-60">60</div>
    <div class="color-box small gray-bg-70">70</div>
    <div class="color-box small gray-bg-80">80</div>
    <div class="color-box small gray-bg-85">85</div>
    <div class="color-box small gray-bg-90">90</div>
    <div class="color-box small gray-bg-95">95</div>
    <div class="color-box small gray-bg-100">Black(100)</div>
  </div>
</div>

```html
<div class="gray-bg-0"></div>
<div class="gray-bg-10"></div>
// number: 0 - 100
<div class="gray-bg-{number}"></div>
```

#### Palette Color

<div class="ga-segment surface round-m ga flex">
  <div class="ga flex">
    <div class="color-box ga-red borded">red</div>
    <div class="color-box ga-orange borded">orange</div>
    <div class="color-box ga-yellow borded">yellow</div>
    <div class="color-box ga-lightgreen borded">lightgreen</div>
    <div class="color-box ga-green borded">green</div>
    <div class="color-box ga-lightblue borded">lightblue</div>
    <div class="color-box ga-blue borded">blue</div>
    <div class="color-box ga-deepblue borded">deepblue</div>
    <div class="color-box ga-deeppurple borded">deeppurple</div>
    <div class="color-box ga-purple borded">purple</div>
    <div class="color-box ga-brown borded">brown</div>
    <div class="color-box ga-gray borded">gray</div>
  </div>
  <div class="ga flex">
    <div class="color-box ga-red-light borded">red</div>
    <div class="color-box ga-orange-light borded">orange</div>
    <div class="color-box ga-yellow-light borded">yellow</div>
    <div class="color-box ga-lightgreen-light borded">lightgreen</div>
    <div class="color-box ga-green-light borded">green</div>
    <div class="color-box ga-lightblue-light borded">lightblue</div>
    <div class="color-box ga-blue-light borded">blue</div>
    <div class="color-box ga-deepblue-light borded">deepblue</div>
    <div class="color-box ga-deeppurple-light borded">deeppurple</div>
    <div class="color-box ga-purple-light borded">purple</div>
    <div class="color-box ga-brown-light borded">brown</div>
    <div class="color-box ga-gray-light borded">gray</div>
  </div>
</div>

```html
// color: red | orange | yellow | green | lightgreen | lightblue | blue | deepblue | deeppurple | purple | brown | gray
<div class="ga-{color}"></div>
<div class="ga-{color}-light"></div>

```
