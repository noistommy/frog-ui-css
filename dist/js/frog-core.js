
function camelize(str) {
  // '-' 뒤에 오는 소문자(a-z)를 찾아 대문자로 치환하고 하이픈을 제거합니다.
  return str.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
}

function parseValue(value) {
  value = value.trim(); // 양끝 공백 제거
  
  if (value === 'true') return true;
  if (value === 'false') return false;
  if (!isNaN(value)) return Number(value); // 숫자인 경우 변환
  
  return value; // 문자열인 경우 그대로 반환 ('uk-open' 등)
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