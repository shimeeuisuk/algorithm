str = "Hi8 hello9 eui0!!";
let noblank = str.replace(/ /g, "");
let strresult = noblank.replace(/[^0-9]/g, ""); //숫자가 아닌 문자
let numresult = noblank.replace(/[^a-z]/gi, ""); // 숫자 추출
console.log(strresult);
console.log(numresult);
