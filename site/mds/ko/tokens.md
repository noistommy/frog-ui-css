### Token Data type

frog ui 는 sass 기반 디자인 시스템으로 모든 토큰은 scss 문법에 따라 작성 됩니다. 토큰의 값 또한 scss data type을 사용하여 정의 할 수 있습니다. 

#### scss data type

| type | description |  |
| --- | --- | --- |
| number | 숫자(정수, 실수, 단위포함) | 10, .8, 5px, 2em … |
| string | 문자(따옴표 포함) | bold, relative, “Noto Sans” … |
| color | 색상 (hex, rgb, name …) | red, #ffffff, rgb(), oklab() … |
| boolean | true, false | true, false |
| null | null | null |
| list | 목록(공백이나 ,로 구분) | ( a, b, c ) | apple banana    |
| map | key, value로 구성된 목록 | ( apple: a, banana: b) |

Frog ui 에서는 다음과 같이 표시합니다.

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

추가로, 연관된 토큰간 계산된 값이나 function의 리턴값등 다양한 방식으로 확장하여 값을 할당합니다.

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

정의된 토큰에 대한 최종 값입니다. 예를들어 pixel값, %값, RGB 색상값, 헥사값 등 데이터의 양을 나타내는 고유값 부터 스타일 속성 값으로 사용 될 수 있습니다.

#### reference token

원시 값에 대한 단계값의 모임입니다.  디자인 시스템 전반에서 사용 가능한 전역 토큰으로 데이터의 특성에 따라 크기, 색상 톤, 등을 단계별로 숫자로 구분합니다. 

#### base token

디자인 시스템의 핵심이 되는 토큰으로 최종 스타일 테마를 완성하기 위한 기준 데이터가 되는 토큰입니다.

 Frog UI는 base token을 확장하며 전체 스타일을 완성하는 방식을 사용합니다. 이는 최소의 토큰만으로 전체 시스템을 관리하기 위한 최적의 방식이라고 생각합니다.

#### + css variable

Frog UI는 최종 결과물을 빌드를 통해 .css 정적 파일로 만들게 됩니다. 그래서 토큰은 디자인 시스템 내에서만 사용 되고 빌드 된 이후 사용자는 토큰을 사용하거나 변경 할 수 없습니다. 그렇기 때문에 사용자가 토큰 데이터를 직접 사용하거나 적용된 사이트의 테마모드(다크모드)를 컨트롤 하기 위해  일정 토큰을 css에서 직접 적용 가능한  변수로 선언/ 할당 합니다.

#### component token

컴포넌트에 사용되는 스타일 토큰을 입니다. 각 컴포넌트 특성에 맞게 새로 정의하거나 앞서 정의된 토큰들을  확장 가능하도록 정의해 사용합니다. 무엇보다 테마모드를 적용하기 위해 base token을 직접 적용하지 않고 css variable로 할당된 값을 적용합니다.