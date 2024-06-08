//  1. 객체에서 특정 키의 값을 안전하게 가져오는 함수를 작성하세요.

// 객체와 키를 인수로 받아, 객체에 해당 키가 존재하면 그 키에 해당하는 값을 반환하고,
// 존재하지 않으면 에러를 발생시키는 함수를 작성하세요.

function getValueAtObject(obj, key) {
  if (Object.prototype.hasOwnProperty.call(obj, key)) {
    return obj[key];
  } else {
    return new Error('존재하는 키 값을 입력해 주세요!');
  }
}

const person = {
  name: 'Alice',
  age: 25,
  city: 'Wonderland',
};

console.log(getValueAtObject(person, 'name')); // 'Alice'
console.log(getValueAtObject(person, 'age')); // 25
console.log(getValueAtObject(person, 'city')); // 'Wonderland'
console.log(getValueAtObject(person, 'country')); // Error !

//
// 2. 배열에서 특정 인덱스의 값을 안전하게 가져오는 함수를 작성하세요.

// 배열과 인덱스를 인수로 받아,
// 인덱스가 배열의 유효한 범위 내에 있으면 그 인덱스에 해당하는 값을 반환하고,
// 유효하지 않은 인덱스일 경우 에러 메시지를 반환하는 함수를 작성하세요.

function getNumberAtArray(arr, index) {
  // if (!Array.isArray(arr)) return new Error('인수가 배열이 아닙니다!');

  // if (index < arr.length && index >= 0) {
  //   return arr[index];
  // } else {
  //   return new Error('유효한 index값을 입력해 주세요!');
  // }

  return !Array.isArray(arr)
    ? new Error('인수가 배열이 아닙니다!')
    : index < arr.length && index >= 0
    ? arr[index]
    : new Error('유효한 index값을 입력해 주세요!');
}

const numbers = [10, 20, 30, 40, 50];
const text = 'text';

console.log(getNumberAtArray(numbers, 2)); // 30
console.log(getNumberAtArray(numbers, 4)); // 50
console.log(getNumberAtArray(numbers, 5)); // Error!
console.log(getNumberAtArray(numbers, -1)); // Error!
console.log(getNumberAtArray(text, 1)); // Error!
