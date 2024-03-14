function 문자출력함수(문자) {
    console.log('문자출력함수 ' + 문자)
}
문자출력함수('a')

// 함수명을 변수처럼 사용
printChar = 문자출력함수
printChar('b')

// 익명함수 : 함수의 이름이 없는 함수
익명함수 = function(문자) {
    console.log('익명함수 ' + 문자)
}
익명함수('c')