### Token Data type

**Frog UI** is a design system based on Sass. All tokens in this system are defined using Sass syntax. The values of these tokens can also be defined using Sass data types.

#### scss data type

| type | description |  |
| --- | --- | --- |
| number | Numbers (integers, real numbers, including units) | 10, .8, 5px, 2em … |
| string | Texts (including quotes) | bold, relative, “Noto Sans” … |
| color | Colors (hex, RGB, name, etc.) | red, #ffffff, rgb(), oklab() … |
| boolean | true, false | true, false |
| null | null | null |
| list | List (separated by spaces or commas) | ( a, b, c ) | apple banana    |
| map | A list consisting of key-value pairs. | ( apple: a, banana: b) |

In Frog UI, it’s displayed as follows:

```scss
// number
$baseFontSize: 14;
$alphaValue: .8;

// string
$fontName: 'Pretendard Variable';

// color
$primary: #6d9d72; // hex
$shadow: rgba(0, 0, 0, 0.16); // rgba()
$white: white; // color name

// boolean
$isButtonActivation: true;

// list
$primaryList: ($primary, $primaryDark, $primaryText, $primaryLight);

// map
$brands: (
	'primary': $primaryList;
	'secondary': $secondaryList:
);
```

In addition, values can be assigned in various ways, such as by calculating values between related tokens, or by using the return values of functions.

```scss
// 연산과 함수를 이용해 '$baseFontSize'를 확장합니다.
$baseFontSize: 14;

// computed valeue
$fontSize: $baseFontSize + 'px';

// function
@function relativePx($num) {
	@return $baseFontSize / $num + 'rem'; 
}

$largeSize: relativePx(18);
```

### Token Structure

![token_structure.svg](/img/token_structure.svg)

#### raw value

It’s the final value of a defined token. For example, this can include unique values that represent quantities of data, such as pixel values, percentage values, RGB color values, and hexadecimal values. These values can also be used as style attribute values.

#### reference token

It’s a collection of numerical values that represent different levels or steps related to the original values. These are global tokens that can be used throughout the entire design system. Depending on the characteristics of the data, these values represent things like size, color tones, etc., in numerical form.

#### base token

These are tokens that serve as the core elements of the design system. They act as the standard data points that are used to finalize the overall style and theme of the design.
Frog UI uses a method of expanding the base token to complete the overall style of the interface. I believe this is the most efficient way to manage the entire system with a minimal number of tokens.

#### + css variable

In Frog UI, the final output is created as static .css files as part of the build process. Therefore, tokens are used only within the design system. After the build is complete, users cannot modify or use these tokens. As a result, users need to declare and assign certain tokens as variables in the CSS file, so that they can be used directly or to control the theme mode (dark mode) of the website.

#### component token

These are the style tokens used in the various components. Each component’s properties can be customized by defining new tokens or by extending existing tokens. Most importantly, in order to apply the theme settings, the base token isn’t used directly. Instead, the values assigned to CSS variables are utilized.