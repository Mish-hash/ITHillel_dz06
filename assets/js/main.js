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


/*
2) Напишите функцию filterArray, которая очищает массив от нежелательных значений (false, undefined, '', 0, null), СПИСОК КОТОРЫХ ПЕРЕДАН ВВИДЕ АРГУМЕНТОВ ФУНКЦИИ.

let array = [0, 1, 2, null, undefined, 'qwerty', false];
let result = filterArray(array, false, undefined, '', 0, null);
// result - [1,2, 'qwerty'];
*/

const array = [0, 1, 2, null, undefined, 'qwerty', false];

function filterArray(array, ...args) {
    args.forEach(argument => array = array.filter(el => el !== argument));
    return array;
}

const result = filterArray(array, false, undefined, '', 0, null);

console.log(result);


/*
3) Напишите функцию calcSum, которая вернет сумму всех входящих параметров функции.

let sum1 = calcSum(0); // 0
let sum1 = calcSum(1,2,3); // 6
let sum1 = calcSum(5,0,10, 1, 5); // 21

*/

function calcSum(...args) {
    return args.reduce((count, el) => count + el);
}

console.log(calcSum(5,0,10, 1, 5));


/*
4) Напишите функцию декортор, которая будет выводить все данные ей строки добавля в начлч и в конец строку: =====

как должен выглядить код:

createPipe - то что вы должны реализовать

const pipeFunction = createPipe();
pipeFunction('some text you like');
// output: ===== 'some text you like' =====
*/

function createPipe() {
    const prePostFix = '=====';
    return (string) => console.log(`${prePostFix} '${string}' ${prePostFix}`)
}

const pipeFunction = createPipe();
pipeFunction('some text you like');




