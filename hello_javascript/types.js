//숫자 타입
var intNum =10;
var floatNum =0.1;

//문자열 타입`
var singleQuoteStr = 'single quote string';
var doubleQuoteStr = "double quoee String";
var singleChar = 'a';

//불리언 타입
var boolVar = true;

//undefined 타입
var emptyVar;

//null 타입
var nullVar = null;


// console.log(
//     typeof intNum,
//     typeof floatNum,
//     typeof singleQuoteStr,
//     typeof doubleQuoteStr,
//     typeof singleChar,
//     typeof boolVar,
//     typeof emptyVar,
//     typeof nullVar
//     );

//3-2 나눗셈 연산
var num =5/2;
    
//console.log(num);
//console.log(Math.floor(num));

//3-3 문자열 예제
var str = 'test';
//console.log(str[0], str[1], str[2], str[3]); //t e s t

str[0]='T';
//console.log(str); //대문자 변경 안됨. js에서 한 번 생성된 문자열은 읽기만 가능(변경X)

//3-4. null & undefined
console.log(typeof nullVar == null);  //false
console.log(nullVar== null);          //true

