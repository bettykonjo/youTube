// // conditional Statements if/else
// const num = -8
// if (num > 0) {
// console.log('Number is posetive')
// } else {
//     console.log ('number is not posetive')
// }
// // if/else if/else

// const numb = 6
// if (numb > 0) {
// console.log('Number is posetive')
// } else if(numb < 0){
//     console.log('number is negative')
// } else {
//     console.log('numberrs is 0')
// }

// // switch
// const color =red
// switch (color){
//     case 'red':
//         console.log('color is red')
//         break
//      case 'blue':
//          console.log('color is blue')
//          break
//      case 'gold':
//          console.log('color is gold')  
//          break
//     case 'green':
//         console.log('color is green')
//         break
//         default:
//             console.log('not a valid color')
// }
// // looping code
// loop use to repeat a block of code
// foor loop
// for(initializer; Condition; final-expretion){
//     // the code we want to return
// }
// for( let i =1; i<=5; i++){
//     console.log('interation number is ' + i)
// }
// whille loop
// initializer
//  while(Condition){
//     // code to return
//     final-expression
// }
// let i = 1
// while ( i <= 5){
//     console.log('interation number is ' + i)
//     i++
// }

// // do will loop
// let i = 2
// do{
//     console.log('interation number is ' + i) 
//     i++
// } while ( i <= 5)

// // foor ..of loop
// for (const item of array){
//     // code to run
// }
// const numarray = [1,2,3,4,5]
// for (const num of numarray){
//     console.log('interation number is ' + num)
// }
// // functions
// function name (paramerts1, parametir2, parametir3){
//     //code to be executed
// }
// function greet(userName){
//     console,log ('Good morining '+ userName)
// }
// greet('betty')
// greet('marru')
// greet('amene')
// function add(a,b){
// return a+b
// }
// const sum = add(8,5)
// console.log(sum)
// console.log(add(9,14))

// const arrwsum = (a,b) =>{
//  return a+b
// }
// console.log(arrwsum(40,50))

// const arrowsums =(a,b) =>a+b
// console.log(arrowsums(65,2))
// const addfive  =sum => sum + 5

// scope 
// // block scope
// if (true){
//     const myName = 'betelihem'
//     console.log(myName) // betelihem
// }
// console.log(myName) //errer
//  function testFun(){
//      const myName = 'batman'
//      console.log(myName)
//  }
//  testFun()

 // global 
//  const myName = 'supperMan'
// const myNum = 100
// if (true){
//     const myName = 'betelihem'
//     console.log(myName) // betelihem
// console.log(myNum) //100
// }
// console.log(myName) //errer
//  function testFun(){
//      const myName = 'batman'
//      console.log(myName)
// console.log(myNum) //100
//  }
//  testFun()