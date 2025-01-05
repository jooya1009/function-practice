// 1. 자바스크립트 함수는 함수의 실제 매개변수가 될 수 있다.
function one(arg) {
    arg();
}
function two() {
    console.log('two');
}
one(two);


// 2. 자바스크립트 함수는 함수의 반환값이 될 수 있다.
function three(arg) {
    return arg;
}
function four() {
    console.log('four');
}
three(four)();


// 3. 자바스크립트 함수는 할당명령문의 대상이 될 수 있다.
// 4. 자바스크립트 함수는 동일비교의 대상이 될 수 있다.
const five = function (arg) {
    return arg;
};
five(1);


// 1. 기본값 매개변수 default function parameter
function six(arg = 'six') {
    console.log(arg);
}
six();

// 2. 나머지 매개변수 Rest parameter
function seven(arg, ...rest) {
    console.log(rest);
}
seven(1);
seven(1, 2, 3, 4);

// 3. arguments 객체
function eight(arg) {
    console.log(arguments);
}
eight(1, 2, 3, 4);


// 1. 함수 선언문
function nine() {
    console.log('nine');
}
nine();

// 2. 함수 표현식
const ten = function () {
    console.log('ten');
}
ten();

// 3. Function 생성자 함수
const eleven = new Function("console.log('eleven')")
eleven();

// 4. 화살표 함수 표현식
const twelve = () => {
    console.log('twelve');
};
twelve();

// 1. IIFE (즉시 실행 함수)
(function thirteen() {
    console.log('thirteen');
})();

// 2. 재귀함수
function fourteen(arg) {
    if(arg === 3) return;
    console.log(arg);
    fourteen(arg + 1);
}
fourteen(1);

// 3. 중첩함수
function fifteen(arg) {
    function sixteen(){
        console.log(arg);
    }
    sixteen();
}
fifteen(1);

// 4. 콜백함수
function seventeen(arg) {
    arg();
}
seventeen(() => {
    console.log(1);
});

