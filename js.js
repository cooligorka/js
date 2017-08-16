var n;
var array = [],
	startMarker = 0,
	endMarker = array.length - 1;

function addNumbers(n) {
	var q = Number(prompt('Сколько элементов будет в массиве?', ''));
	if (q > 1 && q !== 0) {
		for (i = 0; i < q; ++i) {
			n = Number(prompt('Укажите числа для сортировки', ''));
			array.push(n);
		}
	} else {
		alert('Укажите число, большее 1!');
		brake;
	}
};

function quickSort(array, startMarker, endMarker) {
	var start = startMarker;
	var end = endMarker;
	var middle = array[Math.round((startMarker + endMarker) / 2)];
	do {
		while (array[start] < middle) {
			++start;
		}
		while (array[end] > middle) {
			--end;
		}
		if (start <= end) {
			exchange(array, start, end);
			start++;
			end--;
		}
	}
	while (start < end);
	if (startMarker < end) {
		quickSort(array, startMarker, end);
	}
	if (start < endMarker) {
		quickSort(array, start, endMarker);
	}
};

function exchange(array, start, end) {
	var tmp = array[start];
	array[start] = array[end];
	array[end] = tmp;
};

//addNumbers();
quickSort(array, 0, array.length - 1);
alert(array);
//console.log(array);