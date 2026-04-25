***Frog UI***is a design system tool that generates static style files for each theme using tokens. This document introduces the key tokens that users control when applying new themes and outlines design rules for maintaining a consistent UI. Designed to serve as a guide, this document allows you to apply desired style elements and easily extend various themes—including light and dark modes—by combining CSS variables and tokens.

## Foundation

#### Font size

`$baseFontSize` is an absolute value that serves as the baseline for sizing across the entire project. By managing other element values as relative values based on this baseline, you can maintain consistent overall sizing ratios. 

```scss
$baseFontSize: {number};

// 기본 글자 크기에 대한 상대 비율 적용
@function relativePx($number) {
    @return calc($number/$baseFontSize)*1em
};
// 기본 글자 크기에 대한 절대 비율 적용
@function absolutePx($number) {
    @return calc($number/$baseFontSize)*1rem
};

$smallSize: relativePx({number});
$largeSize: relativePx({number});

// scss -> css
:root {
	font-size: $baseFontSize + 'px';
}

.small {
	font-size: $smallSize;
}

.large {
	font-size: $largeSize;
}

```

#### Height Rhythm

The concept known as **height rhythm** or **vertical rhythm** in design systems refers to rules governing the vertical height of UI components. It influences the `font-size`, `line-height`, and `vertical padding` applied to each element, ensuring consistent height rules for inline elements.  

```scss
$heightRhythm: {number};

// height-rhythm = line-height + padding-top + padding-bottom
// so, let`s get button padding

$buttonVertivalPadding: calc(($heightRyhthm - $lineHeight) / 2);
```

#### Namespace

**Frog UI** places all styles in a project-wide namespace. Although *semantic classes*are used, they are not as unique as dynamic hash values. Therefore, you must use the representative namespace of the style theme to prevent global conflicts.   

```scss
$ns: {string};

.#{$ns}-button { ... }
.#{$ns}-input { ... }
```

#### Grayscale

**Grayscale**is used for the overall **background tone**of the theme, to distinguish **text layers**, and as the **default color** for essential elements. It maintains consistency in the default color scheme and allows for intuitive identification of hierarchical relationships based on levels.

```scss
@use 'sass:list';

$grays: (

	'gray-0': {value},
	'gray-5': {value},
	'gray-10': {value},
	...
	'gray-95': {value},
	'gray-100': {value}
)

// $index: level number
// $isDMode: select item on dark mode 
@function getGray($index, $isDMode: false) {
    $resolvedIndex: if($isDMode, 100 - $index, $index);
    $key: 'gray-#{$resolvedIndex}';
    @return map.get($grays, $key);
}
```

#### Black & White

In fact, `black` and `white` are the lightest and darkest values in **Grayscale**. 

```scss
@use 'sass:map';

$white: map.get($grays, 'gray-0');
$black: map.get($grays, 'gray-100');
```

#### *Base Color - Light*

This setting defines the base color for the default **light mode** style attributes. (background, font, border, surface, etc.)

```scss
@use 'sass:map';

$baseColor: getGray(10); // base element item color
$baseColorHover: getGray(15); // base hovered element item color
$background: getGray(0); // base background color
$baseFontColor: getGray(95); // base font color
$subFontColor: getGray(85); // sub font color
$surface: getGray(5); // base surface color
$surfaceHover: getGray(10); // base hovered surface color
$borderColor: getGray(15); //base border color
$borderDarkColor: getGray(25); // base hovered border color
```

#### *Base Color - Dark*

This setting defines the base color for the default **dark mode** style properties. (background, font, border, surface, etc.)

```scss
@use 'sass:map';

$dModeBaseColor: getGray(10, *true*);
$dModeBaseColorHover: getGray(15, *true*);
$dModeBackground: getGray(0, *true*);
$dModeBaseFontColor: getGray(95, *true*);
$dModeSubFontColor: getGray(85, *true*);
$dModeSurface: getGray(5, *true*);
$dModeSurfaceHover: getGray(10, *true*);
$dModeBorderColor: getGray(15, *true*);
$dModeBorderDarkColor: getGray(25, *true*);
```

#### *Font weight*

Set to one of four levels corresponding to the **CSS** `font-weight`property. Since the available weight levels vary by web font, you must check the weight levels supported by the font you plan to use before specifying a value. 

(Pretendard is a web font that supports all weight levels.)

```scss
// 100 - 900

$light: 300;
$regular: 500;
$bold: 700;
$bolder: 900;
```

#### *Line height*

`line-height`refers to the total height occupied by text in **CSS**. Also known as line spacing or interline spacing, this token specifies the default size for the entire system. A unitless floating-point value represents a ratio , with `font-size` as the baseline .

```scss
// line-height: font size * 1.5
$lineHeight: 1.5;
```

#### *Letter spacing*

`letter-spacing`refers to the spacing between characters, also known as letter spacing. While adjusting letter spacing is not a commonly used property, it can be used to create subtle differences in spacing to distinguish between text layers.

```scss
$baseLetterSpacing: 0.5px;

$widerSpacing: $baseLetterSpacing * 2;
$wideSpacing: $baseLetterSpacing * 1;
$baseSpacing: normal;
$narrowSpacing:$baseLetterSpacing * -1;
$narrowerSpacing:$baseLetterSpacing * -2;

```

#### Spacing *

A consistent spacing system ensures that the entire layout appears balanced. 

```scss
$spacingUnit: 4px;

@function spacing($unit) {
	@return calc($unit * $spacingUnit);
}

// return 8px
$spacing-2: spacing(2);
// return 16px
$spacing-4: spacing(4);
```

#### Relative px vs. Absolute px

**Frog UI** uses $baseFontSize as a reference to specify sizes relative to the entire system. Therefore, when specifying sizes related to dimensions, call the following function.

Depending on the function, the result is specified in `em` or `rem` units.

```scss
@function relativePx($number) {
    @return calc($number/$baseFontSize)*1em
};

@function absolutePx($number) {
    @return calc($number/$baseFontSize)*1rem
};
```

#### Heading System

**Frog UI**has five levels of heading sizes. By setting them with `absolutePX()`, they maintain a fixed ratio relative to the base font size, regardless of inherited sizes. 

```scss
$headerFontWeight: $bold;

// example set
$h1: absolutePx(32);
$h2: absolutePx(28);
$h3: absolutePx(24);
$h4: absolutePx(20);
$h5: absolutePx(16);
```

## Sizes

#### Hero

A special size for the most prominent, most important, and first page. It is used to represent the entire page or a specific group. 

```scss
// hero stype
$heroLarge: relativePx(56); //4em (x14px)
$hero: relativePx(42); //3em (x14px)
$heroSub: relativePx(18); 
$heroSmall: relativePx(24); 
```

#### Size system

While maintaining consistent proportions within the system is the default, if an element needs to be displayed at a different proportion as an exception, select and apply one of the following specified size levels. 

```scss
//Size
$tinySize: relativePx(10);
$smallSize: relativePx(12);
$mediumSize: relativePx(16);
$largeSize: relativePx(18);
$hugeSize: relativePx(20);
$massiveSize: relativePx(24);
```

## Radius

`border-radius` is applied differently for **element types** affected by the *height rhythm* and **layout types**unaffected by it. layoutRadius is divided into four levels.

```scss
$baseBorderRadius: relativePx(4);
$baseLayoutRadius: relativePx(14);

$baseInputRadius: $baseBorderRadius;

$layoutRadiuses: (
    s: $baseLayoutRadius * 0.5,
    m: $baseLayoutRadius,
    l: $baseLayoutRadius * 1.5,
    xl: $baseLayoutRadius * 2
);
```

## Colors

#### Color Types

Once a color is determined, the following color groups are created using that color as the base value.  

| Type | Description |
| --- | --- |
| Base color | Raw color values |
| On background color | Base color The text color value relative to the background. It is determined as a light or dark color depending on the color contrast. |
| Lightness color | A color value lighter than the base color. It is used when the color’s importance is lower than the base value or as the background surface.  |
| Darkness color | A value darker than the base color. It is used as the hover or focus value for the base color. |

```scss
@use 'sass:color';
@use 'sass:list';
// ex primary color structure
$primary: {hex value}; // base
$primaryText: $white; // on background
$primaryLight: color.adjust($primary, $lightness: {number}%); // lightness
$primaryDark: color.adjust($primary, $lightness: -{number}%; // darkness

// brand colors
$brandColors: (
    'primary': ($primary, $darkPrimary, $primaryText, $lightPrimary),
    'secondary': ($secondary, $darkSecondary, $secondaryText, $lightPrimary),
);
```

#### Brand color

Specify the main and secondary colors that symbolize the brand.

```scss
$primary: {value};
$secondary: {value};
```

#### Status color

Colors designated to convey **success**, **danger**, **information**, **attention**, and **importance** statuses visually. 

```scss
$success: {value};
$danger: {value}; // error
$info: {value};
$attention: {value}; // warning
$importance: {value}; 
```

#### Colors

This color palette is used when complex information cannot be fully conveyed using only **the brand colors**. 

```scss
$redColor: #D75757;
$orangeColor: #EE9033;
$yellowColor: #F8B825;
$lightgreenColor: #B3BC40;
$greenColor: #61A475;
$lightblueColor: #8CC5CE;
$blueColor: #70A3CA;
$deepblueColor: #5178AF;
$deeppurpleColor: #9180B4;
$purpleColor: #AF77C0;
$brownColor: #A86A82;
$grayColor: #8B8B8B;
```

#### Colors Light

These are the **lighter versions** of each color in the Colors palette. 

<div class="ga-message info inline small">
    <div class="title">Tip: Why is "Light" converted using $alpha instead of $lightness? </div>
    <br>
    <div class="contents">
        **Frog UI** supports light and dark modes. If we simply increase the lightness value to make the color brighter, it won’t work in dark mode because the change would apply to both modes. Therefore, by lowering the alpha value to display a color mixed with the background, we can support dark mode.
    </div>
</div>

```scss
@use 'sass:color';

$color: {value};

// alpha 값은 0 에서 1 사이의 값을 사용합니다.
$color-light: color.adjust($color, $alpha: -{number: 0 - 1})
```

## Padding

#### Vertical padding value

If`$heightRhythm` is specified, `$verticalPaddingValue` is determined automatically. 

```scss
$heightRhythm: 38;

$verticalPaddingValue: calc(($heightRhythm - $baseFontSize) / 2);
```

#### Base padding

Although the`padding` property consists of values for all four directions, in **Frog UI**, it is specified as a pair of `$horizontalPadding` and `$verticalPadding`. The spacing is always symmetrical in all four directions.

```scss
$horizontalPadding: relativePx(16);
$verticalPadding: relativePx($verticalPaddingValue);

// button(base) padding
$buttonPadding: $verticalPadding $horizontalPadding $verticalPadding;
```

#### Compact padding

Specifies spacing reduced by a fixed ratio. 

```scss
// compact
$compactRatio: {number} 0.5;

$compactHorizontalPadding: $horizontalPadding * $compactRatio;
$compactVerticalPadding: $verticalInputPadding * $compactRatio;

$compactPadding: $compactVerticalPadding $compactHorizontalPadding;
```

#### Input padding

<div class="ga-message info inline small">
    <div class="title">Tip: Why is the input padding value different from the base padding?</div>
    <br>
    <div class="contents">
        An input field is where users enter values. In some cases, when a large amount of text is entered, ellipsis (truncation) may be required. In CSS, when handling ellipsis, you must specify `text-overflow: hidden`. However, if you use `line-height: 1rem` as with buttons, characters like g, y, and q will be cut off. Therefore, for inputs, `line-height` is specified separately, and a calculated value is applied to correct this. 
    </div>
</div>

```scss
$inputLineHeight: relativePx(17);
$lineHeightOffset:(( $inputLineHeight - 1em) * 0.5);

$inputVerticalOffsetPadding: calc($verticalInputPadding - $lineHeightOffset - 1px);

$inputPadding: $inputVerticalOffsetPadding $horizontalInputPadding;
```

## Grids

```scss
$gridWhole: 12;
$gridGutter: 4;

// $gridWholeMobile: 4;
// $gridWholeTablet: 8;
// $gridWholeLaptop: 12;

$gridPercent: calc(100 / $gridWhole);

$gridHalf: calc($gridWhole * 0.5);
$gridThird: calc($gridWhole / 3);
$gridQuarter: calc($gridWhole / 4);
$gridFifth: calc($gridWhole / 5);
$gridSixth: calc($gridWhole / 6);
$gridEighth: calc($gridWhole / 8);
$gridTenth: calc($gridWhole / 10);

$gridHalfSize: $gridPercent * $gridHalf;
```

## Breakpoint

```scss
$breakpoints: (
    xs: 0, //mobile-portrait
    sm: 576px, //mobile-landscape
    md: 768px, //tablet
    lg: 992px, //desktop
    xl: 1200px, //desktop-large
) !default;
```

## ETC.

#### Scrollbar

```scss
$useCustomScrollbars: {boolean};

$thumbWidth: 8;
$thumbBorderWidth: 2;

$customScrollbarWidth: $thumbWidth + ($thumbBorderWidth * 2);
$customScrollbarHeight: $customScrollbarWidth;

$trackBackground: rgba(0, 0, 0, 0);
$trackBorderRadius: 0px;

$thumbBorderRadius: $customScrollbarWidth * 0.5;

$thumbBackground: rgba(0, 0, 0, 0.55);
$thumbTransition: color 0.2s ease;

$thumbBorderColor: $background;

$thumbInactiveBackground: rgba(0, 0, 0, 0.15);
$thumbHoverBackground: rgba(128, 135, 139, 0.8);

/* Inverted */
$trackInvertedBackground: rgba(255, 255, 255, 0.1);
$thumbInvertedBackground: rgba(255, 255, 255, 0.25);
$thumbInvertedInactiveBackground: rgba(255, 255, 255, 0.15);
$thumbInvertedHoverBackground: rgba(255, 255, 255, 0.35);
```

#### ButtonActivation

```scss
$isButtonActivation: {boolean};
```

## CSS Variables

#### Global

```scss
:root {
    --font-family: $fontName;
    --line-height: $lineHeight;
		... ...
}
```

#### Light mode

```scss
:root {
    --bgc: #{$background};
    --txt: #{$baseFontColor};
    --txt-light: #{$subFontColor};
    --brd: #{$borderColor};

    --suf: #{$surface};
    --hover-suf: #{$surfaceHover};

    --base-color: #{$baseColor};
    --base-hover-color: #{$baseColorHover};

    --depth-bg: #{$background};
    --depth-bs: 0 1px 8px 2px rgba(0, 0, 0, 0.16);
    
}
```

#### Dark mode

```scss
 :root {
        --bgc: #{$dModeBackground};
        --txt: #{$dModeBaseFontColor};
        --txt-light: #{$dModeSubFontColor};
        --brd: #{$dModeBorderColor};

        --suf: #{$dModeSurface};
        --hover-suf: #{$dModeSurfaceHover};

        --base-color: #{$dModeBaseColor};
        --base-hover-color: #{$dModeBaseColorHover};

        --depth-bg: color-mix(in oklab, #{$dModeBackground}, rgba(0, 0, 0, 0.04));
        --depth-bs: 0 0 0 1px rgba(0, 0, 0, 0.16);

    }
```

#### Brands & Status

```scss
:root {
    --primary: #{$primary};
    --secondary: #{$secondary};

    --success: #{$success};
    --info: #{$info};
    --error: #{$danger};
    --warning: #{$attention};
    --importance: #{$importance};
}
```

#### Breakpoint

```scss
:root {
    --mobile-p: #{map.get($breakpoints, 'xs')};
    --mobile-l: #{map.get($breakpoints, 'sm')};
    --tablet: #{map.get($breakpoints, 'md')};
    --desktop: #{map.get($breakpoints, 'lg')};
    --desktop-l: #{map.get($breakpoints, 'xl')};
}
```