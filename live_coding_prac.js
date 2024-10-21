// 1) duplicate([1, 2, 3, 4, 5]);
function duplicate(arr) {
  if (!arr.length) return;

  return arr.concat(arr);
}

console.log("1", duplicate([1, 2, 3, 4, 5]));
//return [1,2,3,4,5,1,2,3,4,5]

/**
 * 2)
 * sum(1)(2)(); /// 3
sum(1)(2)(3)(4)(); // 10

mul(2)(3)(4); // 24
mul(4)(3)(4); // 48
 */

const sum = function (a) {
  return function (b) {
    if (b) {
      return sum(a + b);
    }

    return a;
  };
};

// 반환값이 계속 새로운 함수를 반환하기 때문에 결과값도 함수가 되는 것이다.
const mul2 = function (a) {
  return function (b) {
    return mul2(a * b);
  };
};

const mul = function (a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
};

console.log(sum(1)(2)(3));
console.log(mul(2)(3)(4));

/**
 * 3)
 * var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27
 */

function createBase(base) {
  return function (num) {
    return num + base;
  };
}

var addSix = createBase(6);
console.log(addSix(10));

/**
 * 4)
 * const delay = () => {}

const main = async() => {
	console.log('1번')
  	delay(4)
    // 첫번째 콘솔('1번')이 찍힌 후 4초 후에 찍힘`
  	// output 
  	// '1번'
    // ...4초 후...
  	// '2번!!!'
    console.log('2번!!!')
  };
main();

 */

const delay = (sec) => {
  return new Promise((resolve) => {
    setTimeout(resolve, sec * 1000);
  });
};

const main = async () => {
  console.log("1번");
  //   await delay(4);
  console.log("2번!!!");
};

main();

/**
 * array의 중복 요소를 제거한 뒤 출력하세요.
 */

const arrDup = [1, 1, 1, 2, 2, 3, 3, 3, 2];
const removeDup = new Set(arrDup);

console.log([...removeDup]);

const exampleArray = [4, 2, 9, 2, 4, 6, 8, 9];

const uniqueArray = exampleArray.filter((item, index) => {
  return exampleArray.indexOf(item) === index;
});

console.log(uniqueArray);

/**
 * 문자열의 중복 요소를 제거한 뒤 출력하세요.
 */
const exampleStr = "aabbbeedudaacca";

const arrStr = [...exampleStr];
const uniqueStr = arrStr
  .filter((item, index) => {
    return arrStr.indexOf(item) === index;
  })
  .join("");

console.log(uniqueStr);

/**
 * 주어진 문자열을 뒤집어 출력하세요.

글자별로 뒤집기
단어별로 뒤집기
 */

let string = "Hello! Welcome to my Velog. Ask me anything.";

const reverseString = (string, seperate) => {
  const splitArr = string.split(seperate);

  let newArr = [];

  for (let i = splitArr.length; i >= 0; i--) {
    newArr.push(splitArr[i]);
  }
  console.log(newArr.join(seperate));

  return splitArr.reverse().join(seperate);
};

console.log(reverseString(string, ""));
console.log(reverseString(string, " "));

/**
 * 숫자형 array를 매개변수로 갖게 하고, Math.max를 활용해 최댓값을 출력하세요.
(단, 스프레드 연산자를 쓰지 않고)
 */

const exampleArray2 = [4, 2, 8, 1, 1, 3];

const maxNum = exampleArray2.reduce((acc, curr) => {
  return (acc = Math.max(acc, curr));
}, -Infinity);
console.log(maxNum);
console.log(...exampleArray);
console.log(Math.max(...exampleArray));

/**
 * 어떤 데이터의 타입이 array인지 아닌지 판별하세요.
 */

let example01 = [];
let example02 = ["Hi"];
let example03 = "Hi";
let example04 = 17;

const isArray = (arr) => {
  return Array.isArray(arr);
};
console.log(isArray(example01));
console.log(isArray(example04));

/**
 * 문제 설명

2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 
요일의 이름은 일요일부터 토요일까지

각각 SUN,MON,TUE,WED,THU,FRI,SAT 입니다.

예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.
 */

const calculateDate = (a, b) => {
  const day = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  const month_list = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  //date[(sum(month_list[:-month])+day-1)%7]
  return day[sum()];
};

console.log(calculateDate(5, 24));

/**
 * 문제 설명:
사용자 목록이 주어졌을 때, 이를 조건에 맞게 필터링하고 정렬하는 기능을 구현하세요.

요구 사항:
주어진 사용자 목록은 이름, 나이, 성별로 구성됩니다.
이름을 기준으로 오름차순 또는 내림차순으로 정렬할 수 있어야 합니다.
나이 기준으로 특정 나이 이상의 사용자만 필터링할 수 있어야 합니다.
 */

const users = [
  { name: "Alice", age: 30, gender: "female" },
  { name: "Bob", age: 25, gender: "male" },
  { name: "Charlie", age: 35, gender: "male" },
  { name: "Diana", age: 28, gender: "female" },
];

function filterAndSortUsers(users, minAge, sortBy) {
  // 여기에 코드를 작성하세요
  const filterByAge = users.filter((user) => user.age >= minAge);

  const sortByName = filterByAge.sort((a, b) => {
    if (sortBy === "asc") {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
    } else {
      if (a.name > b.name) return -1;
      if (a.name < b.name) return 1;
    }
  });

  console.log(sortByName);
}

// 예시 사용
console.log(filterAndSortUsers(users, 30, "asc")); // [{name: 'Charlie', ...}, {name: 'Alice', ...}]
console.log(filterAndSortUsers(users, 20, "desc")); // 정렬 및 필터링 결과 출력
