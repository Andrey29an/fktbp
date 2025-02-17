// let num = 50;
// let num1 = 50.5;
// let num2 = "hello";
// let num3 = true;



// console.log(typeof num);

// console.log(typeof num1);

// console.log(typeof num2);

// console.log(typeof num3);

// num = "50";
// num1 = false;
// num2 = 2342436;
// num3 = false;

// console.log(typeof num);

// console.log(typeof num1);

// console.log(typeof num2);

// console.log(typeof num3);


// let newww = num + num2;
// console.log(newww);

// let boll = Number(num3);
// console.log(boll);

// let noboll = Boolean(num);
// console.log(noboll);

// const number1 = prompt("число 1:", 0);
// const number2 = prompt("число 2:", 0);
// const number3 = prompt("число 3:", 0);
// function funnn() {
//     let innn =   Number(number1)+Number(number2)+Number(number3);
//     let dil = 3;
//     let b = innn / dil;
//     return b
// };
// console.log(funnn());
// console.log(Math.abs(funnn()));
// console.log(Math.ceil(funnn()));
// console.log(Math.floor(funnn()));
// console.log(Math.pow(funnn(), 5));


// let funnnnn = funnn();

// function fiwe( funnnnn ){
//     return funnnnn % 5 === 0 ? "yes" : "no";
// }

// console.log(fiwe(funnnnn));



// let pro1 = prompt("число 1");
// let pro2 = prompt("число 2");
// let pro3 = prompt("число 3");

// let prog = [pro1 , pro2, pro3]

// function god(pro){
//     let i = Math.max(pro)
//     let b = Math.min(pro)
//     return console.log(b, i)
// };

// console.log(god(pro))
// console.log(prog)
// console.log(Math.max(prog));
// console.log(Math.min(prog));

let igi = prompt("ваш вік")

if (igi < 18){
    alert("Вам заборонено вхід")
}
else if (igi >= 18 && igi <=65){
    alert("Ласкаво просимо!")
}
else if(igi > 65 ){
    alert("Будь ласка, будьте обережні!")
}
    









let bloc = prompt("довільне число", 10);

for (let i = 1 ; i < bloc.length ; i+2 ){

    console.log(i)

}



let n = parseInt(prompt("Введіть число n:"));
let factorial = 1;
let i = 1;

while (i <= n) {
    factorial *= i;
    i++;
}

console.log("Факторіал ${n} дорівнює ${factorial}");



let a = prompt("a");
let b = prompt("b");

switch (calcylator) {
    case "+":
        alert(a + b);
        break;
    case "-":
        alert(a - b);
        break;
    default:
        alert("NaN")
}


let random  = (Math.floor(Math.random() * 100) + 1)      

let chislo = prompt("numberrrs")

do {
    alert("Win");
}while (chislo === random)
do {
    alert("число було більшим ");
}while (chislo < random)
do {
    alert("число було меншим");
}while (chislo > random)