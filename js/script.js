/* 1. Закінчіть наступний код, щоб він розраховував значення по формулі x * y + z;. 
Виведіть значення змінної d в консоль. */

function calc(x, y, z){
  return x * y + z;
}

var d = calc(5, 3, 7);
console.log(`Результат обчислення формули: ${d}`);

/* 2. Створіть функцію, що розраховує об'єм коробки і повертає результат розрахунку,
 x, y та z повинні передаватися аргументами. */

 function boxSize(x, y, z){
 	return x * y * z;
 }

 let resultBox = boxSize(4, 5, 2);
 console.log(`Результат обчислення об'єму коробки: ${resultBox}`);

/* 3. Створіть функцію, що приймає в себе число і повертає назву дня тижня: 6 ==> "субота". 
	Використайте switch-case. */

function dayOfWeek(num) {
	switch(num) {
		case 1:
			return 'Monday';
		case 2:
			return 'Tuesday';
		case 3:
			return 'Wednesday';
		case 4:
			return 'Thursday';
		case 5:
			return 'Friday';
		case 6:
			return 'Saturday';
		case 7:
			return 'Sunday';
		default:
			return 'Please enter valid value!';
	}
}

console.groupCollapsed('Результати виклику функції дня тижня');
console.log(dayOfWeek(1));
console.log(dayOfWeek(2));
console.log(dayOfWeek(3));
console.log(dayOfWeek(4));
console.log(dayOfWeek(5));
console.log(dayOfWeek(6));
console.log(dayOfWeek(7));
console.log(dayOfWeek('hi'));
console.groupEnd();

/* 4. Створіть функцію, що виводить в консоль аргумент або напис "Аргументів не задано",
		якщо це дійсно так. */

function findArguments(a){
	if (a === undefined) {
		console.log('Аргументів не задано');
	} else {
		console.log(a);
	}
}	

findArguments(7);
findArguments();

// 5. Створіть функцію, в яку передається число. Функція повинна повертати квадрат цього числа.

function square(num){
	return Math.pow(num, 2);
}

let result;
result = square(4);
console.log(`Квадрат переданого числа: ${result}`);

/* 6. Створіть функцію, в яку передається деяке значення і об'єкт html-сторінки, 
		знайдений за допомогою, наприклад, функції document.querySelector. 
		Функція повинна записати в innerText цього об'єкта значення з першого аргумента 
		і повернути true, або false, якщо об'єкт не знайдено. */

let header = document.querySelector('h1');

function passValue(textValue, header){
	if (!header) {
		return false;
	}
	header.innerText = textValue;
	return true;
}

passValue('Cuba Libre', header);

/* 7. Створіть функцію, що приймає 5 аргументів (a, b, c, d, e). 
Функція повина повернути результат обчислення по формулі: a + b * -c - --d + e*/

function formulaCalc(a, b, c, d, e){
	if (a === undefined) { a = 50; }
	if (b === undefined) { b = 1; }
	if (c === undefined) { c = 10; }
	if (d === undefined) { d = 17; }
	if (e === undefined) { e = ' !!!'; }

	let result = a + b * -c - --d + e;
	return result;
}

let resultFormula = formulaCalc(1, 2, 3, 4, 5);
console.log(resultFormula);
