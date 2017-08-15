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
            var x = array[i];
            array[i] = array[j];
            array[j] = x;
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
