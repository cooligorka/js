/*var name = "Igor";
alert(name);
console.log(name);
var name = prompt("Yours name");
alert(name);

var a = 4;
var s = a * a;
alert(s);

var x = 2;
var y = 6;
console.log(x);
x = y;
console.log(y, x);
console.log(y + x);

var d = 24;
console.log(d / 12);
console.log(d / 6);

var a = 5;
var b = 2;
console.log(a > 2);
console.log(b <= 3);

var x = prompt("Check this is three-digit odd number?");
var res = (x >= 100 && x <= 999 && x % 2 !== 0);
if (res === true) {
	alert("Yes");
}
else {
	alert("No");
}

	var x = 1;
	var y = 2;
	var res1 = String(x) + y; // Допишите код, необходимо использовать переменные x и y
	console.log(res1); // 12
	console.log(typeof res1); // string

	var res2 = String(y > x) + y; // Допишите код, необходимо использовать перченные x и y
	console.log(res2); // true2
	console.log(typeof res2); // string

	var res3 = y > x; // Допишите код, необходимо использовать переменные x и y
	console.log(res3); // true
	console.log(typeof res3); // boolean

	var res4 = String(y > x) * y; // Допишите код, необходимо использовать переменные x и y
	console.log(res4); // NaN
	console.log(typeof res4); // number }

	var userData = prompt("Insert any data!");
	var obj = [2, "Text", true, null, userData];
	
	console.log(userData);
	console.log(obj);
if (typeof(userData) === String){
	alert(userData +": This is String type!");
};

var x = prompt('Insert number', '');
x = Number(x);
console.log(x);
if (x > 0) {
	x = x + 1;
	alert(x);
} else if (x < 0) {
	x = x - 2;
	alert(x);
} else {
	x = 10;
	alert(x);
}

var x = prompt('Insert number', '');
x = Number(x);
y = String(x % 2);
if (x === 0) {
	alert('Нулевое число!');
	} else if (y === "0") {
		if (x > 0) {
			alert('Положительное четное');		
		} else {
			alert('Отрицательное четное');		
		}
		} else { 
			if (x > 0) {
				alert('Положительное нечетное');
			} else {
				alert('Отрицательное нечетное');
			}
		}			

var k = Number(prompt('Insert number', ''));
if (k > 5 || k < 1) {
		alert('Error');
} else { switch (k) {
	case 1:
		alert('Bad');
		brake;
	case 2:
		alert('Bad too');
		brake;
	case 3:
		alert('Better');
		brake;
	case 4:
		alert('Good');
		brake;
	case 5:
		alert('Exelent');
		brake;
	default:
		alert('Insert number')
		brake;
	}
}

var a = 57, b = 9, z;
while (a > b && (a - b) > 9) {
	b = b + 9;
	}
	z = a - b;
	alert(z);
*/


var n;
var array = [],
	firstEl = 0,
	lastEl = array.length - 1;

function addNumbers(n) {
	var q = Number( prompt('Сколько элементов будет в массиве?' , ''));
	if (q > 1 && q !== 0){			
		for (i = 0; i < q; ++i) {
		n = Number( prompt('Укажите числа для сортировки' , ''));
		array.push(n);
		}
	} else {
		alert('Укажите число, большее 1!');
		brake;
		}
}

function exchange(array, i, j) {
    var x = array[i];
    array[i] = array[j];
    array[j] = x;
}

function sortArray(array, firstEl, lastEl) {
    var i = firstEl;
    var j = lastEl;
    var middle = array[Math.round((firstEl + lastEl) / 2)];
    do {
        while (array[i] < middle) {
            ++i;
        }
        while (array[j] > middle) {
            --j;
        }
        if (i <= j) {
            exchange(array, i, j);
            i++;
            j--;
        }
    }
	while (i < j);
    if (firstEl < j) {
        sortArray(array, firstEl, j);
    }
    if (i < lastEl) {
        sortArray(array, i, lastEl);
    }
}

addNumbers();
sortArray(array, 0, array.length - 1);
alert(array);
console.log(array);