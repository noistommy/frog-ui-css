# Badge

Small visual indicators showing counts or statuses.

## Roles
- **Notifications** and **Counts**: A red circle with a number appearing on the top-right corner of message or email app icons.
- **Status Indicators**: A small green dot on the bottom-right corner of a profile picture showing that a user is currently 'Online'.
- **Attribute Highlights**: Short text overlays like 'New', 'Hot', or 'Sale' used to emphasize specific categories or product features.

## Usage

#### Base

```html
<div>
  <span class="ga-badge">Badge Content</span>
</div>
```

#### Type

```html
<!-- Float Type -->
<div>
  <span class="ga-badge float">{ Badge Contents }</span>
</div>
<!-- Mark Type -->
<div>
  <span class="ga-badge mark" />
</div>
```

#### Shadow

```html
<div>
  <span class="ga-badge shadow">Badge Content</span>
</div>
```

#### Align

```html
<!-- Align Left -->
<div>
  <span class="ga-badge align-left">Badge Content</span>
</div>
<!-- Align Center (default) -->
<div>
  <span class="ga-badge align-center">Badge Content</span>
</div>
<!-- Align Right -->
<div>
  <span class="ga-badge align-right">Badge Content</span>
</div>
```

#### Colors

```html
<!--colors: red, orange, yellow, light-green, light-blue, blue
deep-blue, deep-purple, purple, brown, gray -->
<!-- color red -->
<div>
  <span class="ga-badge red">Badge Content</span>
</div>
<!-- colors -->
<div>
  <span class="ga-badge {colors}">Badge Content</span>
</div>
```