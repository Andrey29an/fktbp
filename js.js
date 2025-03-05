// практична 1(Вдалої провірки)

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


// let funnnnn = funnn();

// function fiwe( funnnnn ){
//     return funnnnn % 5 === 0 ? "yes" : "no";
// }

// console.log(fiwe(funnnnn));



// let pro1 = prompt("число 1");
// let pro2 = prompt("число 2");
// let pro3 = prompt("число 3");

// let prog = [pro1 , pro2, pro3]

// function findMaxElement(prog) {
//     let max = prog[0];
//     for (let i = 1; i < prog.length; i++) {
//       if (prog[i] > max) {
//         max = prog[i];
//       }
//     }
//     return max;
//   }
//   function calculateMin(prog) {
//     let min = prog[0];
//     for (let i = 1; i < prog.length; i++) {
//       if (prog[i] < min) {
//         min = prog[i];
//       }
//     }
//     return min;
//   }
  
//   const figgg = findMaxElement(prog)
//   const foggg = calculateMin(prog)
//   console.log(figgg)
//   console.log(foggg)

//   const age = prompt("ваш вік", 18);

//   if(age < 10){
//     alert(" Ви дитина");
//   }
//   else if(10 <= age && age <= 18){
//     alert("Ви підліток");
//   }
//   else if(19 <= age && age < 50){
//     alert("Ви дорослий");
//   }
//   else if(50 <= age){
//     alert("Ви літня людина");
//   }

// практична 2 
// let igi = prompt("ваш вік")

// if (Number(igi) < 18){
//     alert("Вам заборонено вхід")
// }
// else if (Number(igi) >= 18 && Number(igi) <=65){
//     alert("Ласкаво просимо!")
// }
// else if(Number(igi) > 65 ){
//     alert("Будь ласка, будьте обережні!")
// }

// let bloc = prompt("довільне число", 10);
// let bloccc = parseInt(bloc)
// console.log(typeof(bloccc))
// console.log(bloccc)

// for (let i = 0 ; i <= bloccc ; i += 2) {
//     console.log(i)
// }






const numbers = [1 ,3 , 5 , 7 , 9 ];

function calculateAverage(array) {
    if (array.length === 0) return 0;
  
    const sum = array.reduce((acc, value) => acc + value, 0);
    const average = sum / array.length;
  
    return average;
  };



let iii = Math.max.apply(null, numbers);
const bbb = Math.min.apply(null, numbers);

console.log(calculateAverage(numbers));
console.log(numbers.concat());
console.log(iii);
console.log(bbb);
