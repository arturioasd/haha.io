const rangeSliderYear = document.getElementById('range-slider-price');
const input2 = document.getElementById('input-2');
const input3 = document.getElementById('input-3');
if (rangeSliderYear) {
	noUiSlider.create(rangeSliderYear, {
    start: [input2.value, input3.value],
		connect: true,
		step: 10000,

    range: {
			'min': [0],
			'max': [999999]
    }
	});


	const inputs = [input2, input3];

	rangeSliderYear.noUiSlider.on('update', function(values, handle){
		inputs[handle].value = Math.round(values[handle]);
	});

	const setRangeSliderYear = (i, value) => {
		let arr = [null, null];
		arr[i] = value;

		console.log(arr);

		rangeSliderYear.noUiSlider.set(arr);
	};

	inputs.forEach((el, index) => {
		el.addEventListener('change', (e) => {
			console.log(index);
			setRangeSliderYear(index, e.currentTarget.value);
		});
	});
}