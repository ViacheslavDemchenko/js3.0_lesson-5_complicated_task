let date = new Date(),//Создаем объект с текущим моментом времени
	hours = date.getHours(),//Получаем текущее количество часов
	minutes = date.getMinutes(),//Получаем текущее количество минут
	seconds = date.getSeconds(),//Получаем текущее количество секунд
	day = date.getDay(),//Получаем порядковый номер текущего дня (отсчет ведется с воскресенья)
	month = date.getMonth(),//Получаем текущий месяц (отсчет ведется с 0 - январь)
	year = date.getFullYear();//Получаем текущий год

//Функция добавления нуля к однозначным числам даты и врмени
function getZero(num){
	if (num > 0 && num < 10) { //Условие для диапазона от 1 до 9
		return '0' + num;//Функция возвращает секунды, минуты и т.д., добавляя 0 справа от числа
	} else {
		return num;//Если число двузначное, то функция возвращает просто исходное число 
	}
};

alert(`${getZero(hours)}:${getZero(minutes)}:${getZero(seconds)}  ${getZero(day)}.${getZero((month + 1))}.${year}`);

//Функци вывода на экран текущего дня недели словом
function showDay(num) {
	let dayArr = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
/* Функция возвращает порядковый номер элемента массива, соответствующий текущему порядковому
номеру дня недели (получаем его из переменной day) */
    return dayArr[num];
};
alert(showDay(day));

//Создаем переменные инпутов по id и кнопок по селекторам
let firstDate = document.getElementById('input_1'),
	secondDate = document.getElementById('input_2'),
	daysDiff = document.getElementById('input_3'),
	calcBtn = document.querySelector('.calc-btn'),
	clearBtn = document.querySelector('.clear-btn');

//Изначально кнопка очистить недоступна, изменен курсор
	clearBtn.disabled = true;
	clearBtn.style.cursor = 'not-allowed';

//Функция расчета количества дней между заданными датами
calcBtn.onclick = function() {
	let initialDate,//Переменные начальной и конечной даты
		secondaryDate;

		initialDate = firstDate.value;//Присвоение переменным введенных в инпуты значений
		secondaryDate = secondDate.value;

	let date1 = new Date(initialDate),//Перевод полученных данных в начальную и конечную дату
		date2 = new Date(secondaryDate),
		result;
/* Проверка на пустые поля инпутов (если поля заполнены, то идет рассчет,
иначе поле вывода результата остается пустым) */
		if(firstDate.value || secondDate.value)  {
/* Округляем полученную разницу в большую сторону, защищаем от отрицательного результата
(если пользователь введет даты в инпуты наоборот) и полученные миллисекунды переводим в дни) */
			result = Math.ceil(Math.abs(date2.getTime() - date1.getTime()) / (1000 * 3600 * 24));
			daysDiff.value = result;
/* Если данные введены верно, то после нажатия кнопка расчета становится недоступной, а кнопка очистки - доступной, 
меняется фон кнопки, изменяется курсор */
			this.disabled = true;
			this.style.cursor = 'not-allowed';
			this.style.background = '#B0C4DE';
			clearBtn.disabled = false;
			clearBtn.style.background = '';
		} else {
			daysDiff.value = '';
			alert('Введите данные!');
		}
};
/* После нажатия кнопка очистки становится недоступной, а кнопка расчета - доступной, меняется фон
кнопки, изменяется курсор, очищаются поля всех инпутов */
clearBtn.onclick = function() {
	firstDate.value = '';
	secondDate.value = '';
	daysDiff.value = '';
	
	this.disabled = true;
	this.style.cursor = 'not-allowed';
	this.style.background = '#B0C4DE';
	calcBtn.disabled = false;
	calcBtn.style.background = '';
};
