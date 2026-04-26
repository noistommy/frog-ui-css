### Brands(primary, secondary, [tertiary])

<div class="ga-segment surface round-s">
	<button class="ga-button primary">Accept</button>
	<button class="ga-button secondary">View</button>
	<button class="ga-button text">Cancel</button>
	<!-- tag -->
	<span class="ga-tag label primary">Best</span>
	<span class="ga-tag label secondary">Better</span>
</div>

Primary, Secondary는 단순히 “첫번째, 두번째” 같이 순서를 나타내는것이 아니라 브랜드의 중요도와 우선순위를 나타내는 명칭입니다. Primary, Secondary는 색상/역활에 따라 주요 CTA, 브랜드 핵심요소에 Primary, 보조 요소나 보완 요소에 Secondary를 사용합니다. 


<div class="ga-message info inline">
	Tertiary는 시스템에서 부정적인 요소 및 역활에 필요하지만, Frog UI에선 따로 지정하지 않고 다른 역활과 구분되도록 스타일( text, outline, …)을 다르게 두는 방식을 사용합니다.
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

상태를 시각적으로 표시하기 위해 사용되는 색상에 대한 명칭입니다. 

| Name | Description |  |
| --- | --- | --- |
| Success | *정상*, *완료*, *정답*, *올바른* 을 의미  | positive, right, done, complete, passed, confirmed |
| Danger | *실패,* *위험*, *오류*, *오답* 을 의미합니다. | error, fail, failed, issue, problem, invalid, broken |
| Info | *안내*, *참고*, *정보* 를 의미합니다. | information, notice, tip, note |
| Attention | 실패는 아니지만 *주위* 를 의미합니다. | warning, caution, alert, risk |
| Importance | *중요*, *강조*를 위미합니다. | key, emphasis, highlight, critical, priority |



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

Frog UI의 사이즈 시스템은 기본 폰트에 따라 전체 요소가 상대적으로 변경 되도록 구성 되어 있습니다. ( 상대 단위 사용: re, rem) 각 사이즈 단계는 기본폰트 사이즈에 변화를 주어 그에 따른 요소의 크기를 결정하도록 설계되었습니다.  

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

**Fluid(플루이드)** :: "유동적인", "가변적인"이라는 뜻으로, 웹 페이지의 레이아웃이나 요소들이 화면 크기(브라우저 너비)에 따라 고정되지 않고 유연하게 늘어나거나 줄어드는 방식**을 의미합니다.

위 의미와 같이 fluid는 요소가 부모 요소에 꽉 차도록 표시하기 위해  사용하도록 만들어졌습니다. 


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

round는 css로 `border-radius`  의 적용 유무를 나타내는 클래스입니다.  관련 하여 ‘radius’, ‘round corner’ 등의 의미를 직관적으로 나타내기 위해 ‘round’로 결정하였습니다. 

‘round’는 요소의 종류에 따라 두가지 방식으로 나눠서 사용 됩니다. 
- elements type - button, input등에 사용되며 기본 radius에 상관 없이 full size border-radius 값을 지정합니다.
- layout type - card, segment, table등에 사용되며 -s, -m, -l, -xl의 접미사와 함께 사용해서 각 단계별 크기를 다르게 지정하도록 합니다. 

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

Compact :: “압축된”, “간결한”이라는 뜻으로, 요소에 padding을 줄여 동일한 요소보다 압축된 형대로 보여지도록 사용합니다. 

small과 같은 사이즈 요소와 차별점은 컨텐츠의 크기 변화없이 여백만 줄인다는 것입니다. Table, List, 등 고정된 영역 내부에 사용하거나 정보량이 많은 화면에 정보의 손실(크기)없이 표시 하기 위해 사용합니다.

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

컨텐츠의 적절한 배치나 여러 surface 옵션을 두고 요소의 색상을 지정해서 배경과 요소를 구분할 수있지만 요소에 테두리를 두는것만큼 확실한 방법은 없다고 할 수 있습니다. 특히 views 타입(card, segment..)은 필수 속성으로 고려해야 합니다.

button요소의 경우 border와 비슷한 outline속성이 있는데 어떤 차이가 있을까?

위에서 말했듯 border는 구분의 역활로 사용되기 때문에 border요소만 추가 하지만 outline은 배경+테두리 모두 변화시키는 속성입니다. border, outline을 동시에 적용했을때 outline 우선순위가 더 높습니다.

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

요소에 icon이 사용되었을때 사용하는 클래스입니다. 정확하게 표현하면 Icon과 함께 사용되는 요소를 말합니다.  그래서 반드시 icon 과 함께 배치 위치 정보를 함께 지정해야 합니다. 

<div class="ga-message info">
	exc. button 일때 icon과 with icon 을 구분해서 표시합니다.
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
아이콘, 뱃지를 배치 하거나 아이템을 정렬하기 위한 방향을 지정 하기 위해 사용합니다. 

#### left, right, both

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

버튼이나 인풋박스에서 아이콘을 함께 배치할떄 아이콘의 배치 위치를 대상 엘리먼트 기분으로 다음과 같이 지정합니다.

- left: 컨텐츠의 왼쪽에 위치
- right: 컨텐츠의 오른쪽에 위치
- both: 컨텐츠의 양쪽에 위치

#### start, center, end (justify)

수평으로 나열된 아이템 정렬 시 사용합니다. 

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

start(left) - center- end(right)

#### top, middle, bottom (align)

수직으로 나열된 아이템 정렬 시 사용합니다.

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

element 여러개를 그룹으로 감싸기 위해 해당 wrapper에 element + s 로 명명합니다. 

button, tag, card 에 사용됩니다.

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
```