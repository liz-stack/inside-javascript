/* 예제 3-8 for-in문을 이용한 객체 프로퍼티 출력 */

//1. 객체 리터럴을 통한 foo 객체 생성
var foo = {
    name: 'foo',
    age: 30,
    major: "computer science"
};

//2. for in 문을 이용한 객체 프로퍼티 출력
var prop;
for (prop in foo) {
    console.log(prop, foo[prop])
}