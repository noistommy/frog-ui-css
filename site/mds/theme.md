**Frog UI**는 토큰을 통해 테마별 정적 스타일 파일을 생성하는 디자인 시스템 도구입니다.  여기서 사용자가 새로운 테마를 적용할 때 제어 할 핵심 토큰들을 소개하고,  일관된 UI를 위한 설계 규칙을 함께 정리한 문서를 제공합니다. 이 문서를 가이드로 원하는 스타일 요소를 적용하고, CSS 변수와 토큰을 조합해 라이트·다크 모드를 포함한 다양한 테마를 손쉽게 확장할 수 있도록 구성되어 있습니다.

## Faundation

#### Font size

`baseFontSize` 는 프로젝트 전체에 사용되는 크기의 기준이 되는 절대 값입니다. 해당 값을 기준으로 다른 요소 값을 상대값으로 관리하여 전체적인 크기 비율을 동일하게 유지시킬 수 있도록 합니다. 

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

#### Height rhythm

디자인 시스템에서 **height rhythm** 또는 **vertical rhythm** 으로 불리는 개념은 UI 구성 요소의 세로 높이에 대한 규칙입니다.  요소 마다 적용된 `font-size`, `line-height`, `padding`에 영향을 주어 인라인에 배치된 요소들에 일관된 높이 규칙을 갖도록 합니다.  

```scss
$heightRhythm: {number};

// height-rhythm = line-height + padding-top + padding-bottom
// so, let`s get button padding

$buttonVertivalPadding: calc(($heightRyhthm - $lineHeight) / 2);
```

#### Namespace

**Frog UI**는 전체 스타일을 프로젝트 전역에 위치 시켜 사용합니다.  *시멘틱 클래스*를 사용하고 있지만 그렇다고 동적 해시값만큼 유일한 구분값도 아닙니다.  그래서 스타일 테마의 대표 네임 스페이스을 반드시 사용 해야 전역 충돌를 방지할 수 있습니다.   

```scss
$ns: {string};

.#{$ns}-button { ... }
.#{$ns}-input { ... }
```

#### Grayscale

**Grayscale**은 테마 전반적인 **배경 톤**과 **텍스트 레이어** 구분,  필수 요소의 **기본 색상**으로 사용됩니다.  기본 색상에 대한 일관성을 유지하고 단계에 따른 계층 관계를 직관적으로 확인 할 수 있습니다.

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

 `black` 과 `white` 는 **Grayscale**에서 가장 밝은 값과 가장 어두운 값입니다. 

```scss
@use 'sass:map';

$white: map.get($grays, 'gray-0');
$black: map.get($grays, 'gray-100');
```

#### *Base color - Light*

기본 **라이트 모드** 스타일 속성들의 기준 색상에 대한 설정입니다.  (background, font, border, surface ..)

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

#### *Base color - Dark*

기본 **다크 모드** 스타일 속성들의 기준 색상에 대한 설정입니다. (background, font, border, surface ..)

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

**css** 속성인 `font-weight` 에 대응하여 4단계로 지정합니다.  웹 폰트 마다 제공하는 단계가 다르기 때문에 적용할 폰드가 제공하는 굵기 단계를 미리 확인해서 지정해야 합니다. 

( Pretendard 는 모든 굵기 단계를 제공하는 웹폰트입니다.)

```scss
// 100 - 900

$light: 300;
$regular: 500;
$bold: 700;
$bolder: 900;
```

#### *Line height*

`line-height` 는 **css** 에서 텍스트가 차지하는 총 높이를 말합니다. 줄간격 또는 행간이라 하며 해당 토큰은 시스템 전체의 기본 크기를 지정합니다. 단위 없는 실수값은 비율을 나타내며 기준은 `font-size` 입니다.

```scss
// line-height: font size * 1.5
$lineHeight: 1.5;
```

#### *Letter spacing*

`letter-spacing` 은 글자와 글자 사이의 간격 크기로 **자간**을 의미합니다. 자간을 조정하는 일은 많이 사용되는 속성은 아니지만 미묘한 자간 차이를 두어 텍스트 레이어 구분으로 사용 할 수도 있습니다. 

```scss
$baseLetterSpacing: 0.5px;

$widerSpacing: $baseLetterSpacing * 2;
$wideSpacing: $baseLetterSpacing * 1;
$baseSpacing: normal;
$narrowSpacing:$baseLetterSpacing * -1;
$narrowerSpacing:$baseLetterSpacing * -2;

```

#### Spacing *

일관된 간격 시스템은 레이아웃 전체를 균형있게 보이도록 합니다. 

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

#### Relative px vs Absolute px

**Frog UI**는 `$baseFontSize` 를 기준으로  시스템 전체 사이즈를 상대적으로 지정합니다. 그래서 크기와 관련한 사이즈 지정 시 다음 함수를 호출합니다. 

함수에 따라 결과값이 `em` 또는 `rem` 비율로 지정됩니다.

```scss
@function relativePx($number) {
    @return calc($number/$baseFontSize)*1em
};

@function absolutePx($number) {
    @return calc($number/$baseFontSize)*1rem
};
```

#### Heading system

**Frog UI**는 5단계의 Heading 사이즈를 갖습니다. `absolutePX()` 로 설정하여 상속된 사이즈에 상관없이 기본 폰트 사이즈에 대한 고정 배율을 갖습니다. 

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

대표성, 가장 중요한, 첫 페이지를 위한 특별한 사이즈 입니다. 전체 혹은 한 그룹을 대표하는 역할로 사용됩니다. 

```scss
// hero stype
$heroLarge: relativePx(56); //4em (x14px)
$hero: relativePx(42); //3em (x14px)
$heroSub: relativePx(18); 
$heroSmall: relativePx(24); 
```

#### Sizes system

시스템 내에서 일관된 비율을 유지하는 것이 기본이지만 예외적으로 다른 비율로 대상을 표시해야 할때 다음의 지정된 사이즈 단계에서  선택하여 적용합니다. 

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

`border-radius` 는 *height rhythm*에 영향을 받는 **element type** 과 영향이 없는 **layout type**에 각각 다르게 적용됩니다. layoutRadius는 4단계로 나누어 구분합니다.

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

#### Color types

- base color
- on-background color
- lightness color
- darkness color

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

브랜드를 상징하는 메인 색과 보조 색을 지정합니다.

```scss
$primary: {value};
$secondary: {value};
```

#### Status color

**성공**, **위험**, **정보**, **주의**, **중요** 상태를 시각적 정보로 전달하기 위해 지정된 색상입니다. 

```scss
$success: {value};
$danger: {value}; // error
$info: {value};
$attention: {value}; // warning
$importance: {value}; 
```

#### Colors

**Brands color**만으로 복잡한 정보를 다 표시 할 수 없을 때 사용하기 위한 색상 팔레트입니다. 

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

#### Colors light

Colors 색상 각각의 **light** 색상 입니다. 

<div class="ga-message info inline small">
    <div class="title">tip. Light 를 $lightness 가 아니라 $alpha 로 변환하는 이유는?</div>
    <br>
    <div class="contents">
        Frog UI 는 light/dark 모드를 지원합니다. 모드 변경 시 lightness 값만 밝게 하면 dark 모드를 대응 할 수 없습니다. 그래서 alpha 값을 낮춰 배경색과 믹스된 색상을 표시하도록 하면 dark모드에 대응 할 수 있습니다.
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

`$heightRhythm` 을 지정 했다면 `$verticalPaddingValue` 는 자동으로 결정됩니다. 

```scss
$heightRhythm: 38;

$verticalPaddingValue: calc(($heightRhythm - $baseFontSize) / 2);
```

#### Base padding

`padding`  속성은 네방향의 값으로 이루어져있지만 **Frog UI**에선 `$horizontalPadding` 과 `$verticalPadding` 두개의 쌍으로 지정합니다. 언제나 간격은 상하 좌우 대칭입니다.

```scss
$horizontalPadding: relativePx(16);
$verticalPadding: relativePx($verticalPaddingValue);

// button(base) padding
$buttonPadding: $verticalPadding $horizontalPadding $verticalPadding;
```

#### Compact padding

일정한 비율로 축소된 간격을 지정합니다. 

```scss
// compact
$compactRatio: {number} 0.5;

$compactHorizontalPadding: $horizontalPadding * $compactRatio;
$compactVerticalPadding: $verticalInputPadding * $compactRatio;

$compactPadding: $compactVerticalPadding $compactHorizontalPadding;
```

#### Input padding

tip. input padding 값이 base padding 과 다른 이유?

input은 값을 입력하는 곳입니다. 경우에 따라 많은 텍스트를 입력 했을때 `ellipsis` (말줄임) 처리를 해야 할 수 있습니다. **css** 에서 말줄임 처리 시 반드시 `text-overflow: hidden` 을 지정 해야 하는데 그럼 button와 동일하게 `line-height: 1rem` 를 사용 시  *g, y, q* 같은 글자들이 잘리게 됩니다. 그래서 input에선 `line-height` 를 별도록 지정하고 이른 보정하기 위해 계산된 값을 적용 합니다. 

<div class="ga-message info inline small">
    <div class="title">tip. input padding 값이 base padding 과 다른 이유?</div>
    <br>
    <div class="contents">
        input은 값을 입력하는 곳입니다. 경우에 따라 많은 텍스트를 입력 했을때 `ellipsis` (말줄임) 처리를 해야 할 수 있습니다. css 에서 말줄임 처리 시 반드시 `text-overflow: hidden` 을 지정 해야 하는데 그럼 button와 동일하게 `line-height: 1rem` 를 사용 시 <em>g, y, q</em> 같은 글자들이 잘리게 됩니다. 그래서 input에선 `line-height` 를 별도록 지정하고 이를 보정하기 위한 계산된 값을 적용 합니다. 
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

#### scrollbar

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

#### brans & status

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