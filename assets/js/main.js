/*
1) Напишите функцию fillArray, которая создает массив и заполняет ее предоставленным значением.

let array = fillArray(10, 'qwerty'), // ['qwerty', 'qwerty', 'qwerty'...]
где 10 - это длинна массива, а 'qwerty' его значения
*/

function fillArray(count, data){
    const array = [...Array(count)].map( el => data );
    return array;
}

const fillArray2 = (count, data) => [...Array(count)].map( el => data );

console.log(fillArray(10, 'qwerty'), fillArray2(10, 'qwerty'));