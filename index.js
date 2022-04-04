// 1) Необходимо написать функцию возвращающую тип принятого аргумента
const getArgumentType = (argument) => {
    console.log(typeof (argument));
}


// 2.1) Написать функцию которая возвращает true для четных чисел, false для нечетных
const checkEvenNumbers = (number) => {
    if (number % 2) {
        console.log('Число нечётное');
    } else {
        console.log('Число чётное');
    }
}

/* 2.2) Необходимо написать функцию принимаю 1 аргумент, если аргумент строка - вывести эту строку в консоль,
если аргумент число - вывести в консоль четное оно или нечетное.
Для определения четности использовать функцию из п.2 . Для определения типа использовать функцию из п.1 . */
const checkArgumentType = (argument) => {
    if (typeof argument === "string") {
        console.log(argument);
    } else {
        checkEvenNumbers(argument);
    }
}

/* 3) Написать функцию которая принимает число, если число четное, то необходимо умножить его на 2 и вывести в консоль результат,
если число нечетное, то необходимо умножить его на 3 и вывести в консоль.
(функция должна быть в 2ух вариантах, с ифами и с тернарным оператором)*/
const multipleNumbers = (number) => {
    if (number % 2) {
        console.log(number * 3);
    } else {
        console.log(number * 2);
    }
}

const multipleNumbers2 = (number) => number % 2 ? console.log(number * 3) : console.log(number * 2);

/* 4) написать функцию которая принимает 2 аргумента(аргументами могут быть числа и строки содержащие в себе числа),
если оба аргумента четные, то функция должна вывести на экран сумму чисел,
если хотя бы один из аргументов четный, то функция должна вывести разницу чисел, иначе произведение чисел */
const makeNumberOperation = (a, b) => {
    if (!(+a % 2) && !(+b % 2)) {
        console.log(+a+ +b);
    } else if (!(+a % 2) || !(+b % 2)) {
        console.log(+a - +b);
    } else  {
        console.log(+a * +b);
    }
}

// Вызвать все функции кроме первых двух в конце скрипта!
console.log(checkArgumentType(3));
console.log(checkArgumentType('qwerty'));
console.log(checkArgumentType(2));

console.log(multipleNumbers(2));
console.log(multipleNumbers2(3));

console.log(makeNumberOperation(2, '4'));
console.log(makeNumberOperation('2',3));
console.log(makeNumberOperation(3,3));