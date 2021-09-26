// // Looping Triangle
// let x = ''
// for (let i=0;i<10;i++){
//     x = ''
//     for(let j=0;j<(i+1);j++){
//         x += '#'
//     }
//     console.log(x)
// }

// // FizzBuzz game
// for (let i=0;i<=100;i++){
//     if(i % (3*5) == 0){
//         console.log('FizzBuzz')
//     } else if(i % 3 == 0){
//         console.log('Fizz')
//     } else if (i % 5 == 0){
//         console.log('Buzz')
//     } else {
//         console.log(i)
//     }
// }

// Chessboard
// let size = 8
// let chessboard = ''
// let x = ' '
// let y = '#'
// let z = ''
// for (let i=0;i<(size*size);i++){
//     if(i%2==0 || i==0){
//         chessboard += x
//     }else{
//         chessboard += y
//     }
//     if(i%8==0){
//         chessboard += '\n'
//         z = x
//         x = y
//         y = z
//     }
// }
// console.log(chessboard)