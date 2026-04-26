### Brands(primary, secondary, [tertiary])

<div class="ga-segment surface round-s">
	<button class="ga-button primary">Accept</button>
	<button class="ga-button secondary">View</button>
	<button class="ga-button text">Cancel</button>
	<!-- tag -->
	<span class="ga-tag label primary">Best</span>
	<span class="ga-tag label secondary">Better</span>
</div>

“Primary” and “Secondary” aren’t simply terms used to indicate order, like “first” and “second”. Instead, they represent the importance and priority of various elements within a brand. Depending on their role or function, elements that are crucial to the brand are labeled as “Primary”, while those that are less important or serve as complements to other elements are labeled as “Secondary”.

<div class="ga-message info inline">
	In a system, “tertiary” elements and roles are necessary to handle negative aspects or functions. However, in Frog UI, these elements aren’t explicitly designated as such. Instead, their style (text, outline, etc.) is changed to distinguish them from other elements and roles.
</div>

```html
<!-- button -->
<button class="ga-button primary">Accept</button>
<button class="ga-button secondary">View</button>

<!-- button tertiary -->
<button class="ga-button text">Cancel</button>

<!-- tag --> 
<span class="ga-tag label primary">Best</span>
<span class="ga-tag label secondary">Better</span>
```

### Status(success, info, danger, attention, importance)

<div class="ga-segment surface round-s">
	<div class="contents">
		<div class="ga-tag label success">success</div>
		<div class="ga-tag label danger">danger</div>
		<div class="ga-tag label info">info</div>
		<div class="ga-tag label attention">attention</div>
		<div class="ga-tag label importance">importance</div>
	</div>	
</div>

These are the names of the colors that are used to visually represent different states.

| Name | Description |  |
| --- | --- | --- |
| Success | It means *normal*, *completed*, *correct*, or *right*.  | positive, right, done, complete, passed, confirmed |
| Danger | It refers to *failures*, *risks*, *mistakes*, and *incorrect answers*. | error, fail, failed, issue, problem, invalid, broken |
| Info | It refers to *guidance*, *references*, and *information*. | information, notice, tip, note |
| Attention | It’s not a failures, but means *warning*. | warning, caution, alert, risk |
| Importance | It means *important*. | key, emphasis, highlight, critical, priority |

```html
<div class="ga-tag label success">success</div>
<div class="ga-tag label danger">danger</div>
<div class="ga-tag label info">info</div>
<div class="ga-tag label attention">attention</div>
<div class="ga-tag label importance">importance</div>
```

### Sizes(tiny, small, large, huge, massive)

<div class="ga-segment surface round-s">
	<div class="contents">
		<div class="ga-button  border tiny">tiny</div>
		<div class="ga-button  border small">small</div>
		<div class="ga-button  border medium">medium</div>
		<div class="ga-button  border large">large</div>
		<div class="ga-button  border huge">huge</div>
		<div class="ga-button  border massive">massive</div>
	</div>	
</div>

Frog UI’s sizing system is designed such that all elements change proportionally based on the size of the default font. (Relative units are used: re, rem.) Each size level is determined by adjusting the size of the default font, thereby determining the size of all other elements accordingly.

```html
<button class="ga-button large">Big Event!!</button>
```

### fluid

<div class="ga-segment surface round-s">
	<div class="contents fluid">
		<button class="ga-button primary fluid">Fluid</button>
		<hr class="ga divider" />
		<div class="ga-input fluid">
			<input type="text" placeholder="fluid" />
		</div>
	</div>	
</div>

**Fluid** means “fluidic” or “variable”. It refers to a layout or design where the elements on a web page aren’t fixed in size but can adjust dynamically according to the screen size (the width of the browser).

As mentioned above, the “fluid” property is used to ensure that a child element fills its parent element completely.

```html
<button class="ga-button fluid">...</button>
<div class="ga-input fluid">
	<input type="text" />
</div>
```

### round

<div class="ga-segment surface round-s">
	<div class="contents">
		<button class="ga-button primary round">Round</button>
		<button class="ga-button secondary round">Round</button>
		<button class="ga-button round">Round</button>
		<hr class="ga divider" />
		<div class="ga-input round">
			<input type="text" placeholder="round" />
		</div>
		<hr class="ga divider" />
		<div class="ga-segment round-l">Message</div>
	</div>	
</div>

“Round” is a CSS class that indicates whether the effect of `border-radius` should be applied or not. To more intuitively convey concepts like “radius” and “round corners”, the term “round” was chosen as the name for this class.

“Round” can be used in two different ways, depending on the type of element in question.

- This element type is used for elements like buttons and input fields. It specifies a full-size border-radius value, regardless of the element’s default radius settings.

- The layout type can be “card”, “segment”, “table”, etc. It’s used in combination with the suffixes -s, -m, -l, -xl to specify different sizes for each element at various stages.

```html
<!-- Element type -->
<button class="ga-button round">Rounded Button</button>

<!-- Layout type -->
<div class="ga-card round-xl"> ... </div>
```

### compact

<div class="ga-segment surface round-s">
	<div class="contents">
		<button class="ga-button primary compact">Compact</button>
		<button class="ga-button secondary compact">Compact</button>
		<button class="ga-button compact">Compact</button>
		<hr class="ga divider" />
		<div class="ga-input compact">
			<input type="text" placeholder="compact" />
		</div>
	</div>	
</div>

Compact :: This term means “compressed” or “concise”. It’s used to make elements appear more compact by reducing the padding around them. In other words, it makes the same elements look smaller in size.

The difference from size-related elements like “small” is that it reduces the amount of whitespace, without changing the size of the actual content. It’s useful for using within fixed areas like tables and lists, or for displaying large amounts of information on a screen, without any loss of information due to changes in size.

```html
<!-- compacted button -->
<button class="ga-button compact">compacted Button</button>

<!-- compacted input -->
<div class="ga-input compact">
	<input type="text" />
</div>
```

### border

<div class="ga-segment surface round-s">
	<div class="contents">
		<button class="ga-button border">Border</button>
		<button class="ga-button outline">Outline</button>
		<hr class="ga divider" />
		<div class="ga-segment border">Border</div>
	</div>	
</div>

It’s possible to distinguish between the background and various elements by properly arranging the content and choosing from different surface options, as well as by specifying the colors of the elements. However, nothing is as effective as adding borders to the elements. This is especially true for view types like cards and segments, where borders should be considered an essential attribute.

In the case of the button element, it has an outline attribute, which is similar to the border attribute. What’s the difference between the two?

As mentioned earlier, the border is used to create a visual separation between elements. Therefore, only the border element needs to be added. On the other hand, the outline property affects both the background and the border of an element. When both border and outline are applied simultaneously, the outline has higher priority.

```html
<!-- use border -->
<button class="ga-button border">Border</button>
<!-- use outline -->
<button class="ga-button outline">Outline</button>
 
<!-- border < outline -->
<button class="ga-button outline border">Outline</button>
```

### icon

<div class="ga-segment surface round-s">
	<div class="contents">
		<button class="ga-button border icon">
			<i class="xi-bars"></i>
		</button>
		<button class="ga-button border">
			<i class="icon left xi-bars"></i>
			Menu
		</button>
		<hr class="ga divider" />
		<div class="ga-message align-left icon">
			<i class="icon xi-check-circle"></i>
			Contents info
		</div>
	</div>	
</div>

It’s a class that’s used when an icon is associated with a certain element. To be more precise, it refers to elements that are used in conjunction with icons. Therefore, it’s necessary to specify both the position of the icon and the element it’s associated with.

<div class="ga-message info">
	exc. button, the icon and the text associated with the icon are displayed separately.
</div>


```html
<!-- icon button -->
<button class="ga-button icon">
	<i class="xi-icon" />
</button>

<!-- button with icon -->
<button class="ga-button">
	<i class="xi-icon icon left" />
	Contents
</button>

<!-- message with icon -->
<div class="ga-message icon">
	<i class="xi-icon" />
	...
</div>
```

### Positions

It’s used to arrange icons and badges, or to specify the direction in which items should be aligned.

#### left, right, both (with element)

<div class="ga-segment surface round-s">
	<div class="contents">
		<button class="ga-button border">
			<i class="icon left xi-angle-left"></i>
			Left
		</button>
		<button class="ga-button border">
			<i class="icon left xi-angle-left"></i>
			Both
			<i class="icon right xi-angle-right"></i>
		</button>
		<button class="ga-button border">
			Right
			<i class="icon right xi-angle-right"></i>
		</button>
	</div>	
</div>

When icons are placed alongside buttons or input boxes, the position of the icons should be determined relative to the target element, as follows.

- Left: Located on the left side of the content.
- Right: Located on the right side of the content.
- Both: Located on both sides of the content.

#### start, center, end (justify)

<div class="ga-segment surface round-s">
	<div class="contents fluid">
		<div class=" ga-grid divide-8 justify-left">
			<div class="column">
				<button class="ga-button border">Item</button>
			</div>
			<div class="column">
				<button class="ga-button border">Item</button>
			</div>
			<div class="column">
				<button class="ga-button border">Item</button>
			</div>
		</div>
		<div class=" ga-grid divide-8 justify-center">
			<div class="column">
				<button class="ga-button border">Item</button>
			</div>
			<div class="column">
				<button class="ga-button border">Item</button>
			</div>
			<div class="column">
				<button class="ga-button border">Item</button>
			</div>
		</div>
		<div class=" ga-grid divide-8 justify-right">
			<div class="column">
				<button class="ga-button border">Item</button>
			</div>
			<div class="column">
				<button class="ga-button border">Item</button>
			</div>
			<div class="column">
				<button class="ga-button border">Item</button>
			</div>
		</div>
	</div>	
</div>

Used for aligning items that are listed horizontally.

start(left) - center- end(right)

#### top, middle, bottom(align)

Used for sorting items that are listed vertically.

top - middle(mid) - bottom

### -s

<div class="ga-segment surface round-s">
	<div class="contents">
		<div class="ga-buttons border">
			<button class="ga-button selected">
				Play
			</button>
			<button class="ga-button">
				Stop
			</button>
			<button class="ga-button">
				Pause
			</button>
		</div>
		<hr class="ga divider" />
		<div class="ga-tags attached">
			<span class="ga-tag primary pointing right">module</span>
			<span class="ga-tag label secondary">v.1.2.0</span>
		</div>
		<div class="ga-tags attached">
			<span class="ga-tag label red">html</span>
			<span class="ga-tag label lightgreen">scss</span>
		</div>
	</div>	
</div>

To group multiple elements together, the wrapper is named as “element+s”.

It’s used in buttons, tags, and cards.

- {name space}-button → {name space}-buttons
- {name space}-tag → {name space}-tags
- {name space}-card → {name space}-cards

```html
<!-- button group -->
<div class="ga-buttons">
	<button class="be-button"></button>
	<button class="be-button"></button>
	<button class="be-button"></button>
</div>
<!-- tag group -->
<div class="ga-tags attached">
	<span class="ga-tag label">first</span>
	<span class="ga-tag label">second</span>
</div>
```s