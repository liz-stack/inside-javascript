
//1. Object() 함수를 사용해 객체 생성
/* var foo = new Object();

//foo 객체 프로퍼티 생성
foo.name = 'foo';
foo.age = 30;
foo.gender = 'female';

console.log(typeof foo); //object
console.log(foo);        // { name: 'foo', age: 30, gender: 'female' } */

//2. 객체 리터럴 방식 이용
var foo = {
    name : 'foo',
    age : 30,
    gender : 'female'
};

console.log(typeof foo); //object
console.log(foo);        // { name: 'foo', age: 30, gender: 'female' }

//3. 생성자 함수 사용(추후에)