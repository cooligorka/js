var array = [-3, 5, 38, -445, 64, 939],
	startMarker = 0,
	endMarker = array.length - 1;

function Exchange(array, start, end) {
	var tmp = array[start];
	array[start] = array[end];
	array[end] = tmp;
};

function quickSort(array, startMarker, endMarker) {
	var start = startMarker,
		end = endMarker,
		middle = array[Math.round((start + end) / 2)];
	do {
		while (array[start] < middle) {
			start++;
		}
		while (array[end] > middle) {
			end--;
		}
		if (start <= end) {
			Exchange(array, start, end);
			start++;
			end--;
		}
	} while (start <= end);
	if (startMarker < end) {
		quickSort(array, startMarker, end);
	}
	if (start < endMarker) {
		quickSort(array, start, endMarker);
	}
};

quickSort(array, 0, array.length - 1);
alert(array);