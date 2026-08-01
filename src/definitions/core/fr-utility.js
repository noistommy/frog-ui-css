
function camelize(str) {
  // '-' 뒤에 오는 소문자(a-z)를 찾아 대문자로 치환하고 하이픈을 제거합니다.
  return str.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
}

function parseValue(value) {
  if (typeof value !== 'string') return value;

  value = value.trim();

  // Boolean 처리
  if (value === 'true') return true;
  if (value === 'false') return false;
  // 숫자 처리
  if (!isNaN(value) && value !== '') return Number(value);
  // Object, Array 처리 (JSON 객체 가능성)
  if (
    (value.startsWith('{') && value.endsWith('}')) || 
    (value.startsWith('[') && value.endsWith(']'))
  ) {
    try {
      return JSON.parse(value);
    } catch (e) {
      // Parsing 실패시 원문 반환
      return value;
    }
  }
  // 나머지(문자열 등)
  return value;
}

function parseOptions(attrString) {
  const options = {};
  if (!attrString) return options;

  // 1. 세미콜론(;)을 기준으로 각 옵션을 분리
  const pairs = attrString.split(';');

  pairs.forEach(pair => {
      // 2. 콜론(:)을 기준으로 key와 value를 분리
      const [key, value] = pair.split(':');

      if (key && value) {
          const cleanKey = key.trim();
          
          // 3. 키값은 카멜케이스로 변경하고, 벨류값은 타입을 변환하여 객체에 바인딩
          const camelKey = camelize(cleanKey);
          options[camelKey] = parseValue(value);
      }
  });

  return options;
}