var $ = jQuery.noConflict();

$(document).ready(function () {
    $('.switches-payment__item--bitpay').click(function() {
        $(this).addClass('switches-payment__item--active');
        $('.switches-payment__item--bank-card').removeClass('switches-payment__item--active');
        $('.withdraw-list__item--bank-card').hide();
        $('.withdraw-list__input-label--bank-card').hide();
        $('.withdraw-list__input-label--bitpay').show();
    });
    $('.switches-payment__item--bank-card').click(function() {
        $(this).addClass('switches-payment__item--active');
        $('.switches-payment__item--bitpay').removeClass('switches-payment__item--active');
        $('.withdraw-list__item--bank-card').show();
        $('.withdraw-list__input-label--bank-card').show();
        $('.withdraw-list__input-label--bitpay').hide();
    });

    $('input[name="date"]').daterangepicker({
		singleDatePicker: true,
		showDropdowns: true,
		minYear: 1901,
		maxYear: parseInt(moment().format('YYYY'),10),
        drops: "auto"
	});

    function inittimePicker(timePicker) {
        const timeOptins = {
            hour: {
                value: 12,
                limit: 12
            },
            minutes: {
                value: 0,
                limit: 59
            },
            timeSnap: 'AM',
            timeButtons: timePicker.querySelectorAll('.input-custom__time-drop-select-btn'),
            timeSpanInput: timePicker.querySelector('.time-span-input'),
            timeMinutesInput: timePicker.querySelector('.time-minutes-input'),
            timeHoursInput: timePicker.querySelector('.time-hours-input'),
            timeDropHeader: timePicker.querySelector('.input-custom__time-drop-btn'),
            timeInput: timePicker.querySelector('.input-custom__input--time')
        }
        function incrimentTime(type) {
            if (timeOptins[type].value === timeOptins[type].limit) {
                timeOptins[type].value = 0
            } else {
                timeOptins[type].value++
            }
        }
        function decrimentTime(type) {
            if (timeOptins[type].value <= 0) {
                timeOptins[type].value = timeOptins[type].limit
            } else {
                timeOptins[type].value--
            }
        }
        function swapTimeSnap(type) {
            timeOptins[type] === 'AM' ? timeOptins[type] = "PM" : timeOptins[type] = "AM"
        }
        function choseTime() {
            let type = this.closest('[data-type]').getAttribute('data-type');
            let inriment = this.getAttribute('data-role');
            if (type === 'timeSnap') {
                swapTimeSnap(type);
            }
            if (inriment === 'plus' && type != 'timeSnap') {
                incrimentTime(type)
            }
            if (inriment === 'minus' && type != 'timeSnap') {
                decrimentTime(type)
            }
            redrepHtmlTime()
        }
        function redrepHtmlTime() {
            const minutesValue = timeOptins.minutes.value < 10 ? '0' + timeOptins.minutes.value : timeOptins.minutes.value
            const hourValue = timeOptins.hour.value < 10 ? '0' + timeOptins.hour.value : timeOptins.hour.value
            timeOptins.timeSpanInput.value = timeOptins.timeSnap
            timeOptins.timeMinutesInput.value = minutesValue
            timeOptins.timeHoursInput.value = hourValue
            timeOptins.timeDropHeader.innerHTML = `${hourValue}:${minutesValue} ${timeOptins.timeSnap}`
            timeOptins.timeInput.value = `${hourValue}:${minutesValue} ${timeOptins.timeSnap}`
        }
        if (timeOptins.timeButtons) {
            for (item of timeOptins.timeButtons) {
                item.addEventListener('click', choseTime)
            }
        }
        const timePickers = document.querySelectorAll('.input-custom__input--time')
        if (timePickers) {
            for (item of timePickers) {
                item.addEventListener('focus', showPicker)
            }
        }
        function showPicker() {
            const parent = this.closest('[data-time-picker]');
            const allPickers = document.querySelectorAll('.input-custom__time-drop');
            for (item of allPickers) {
                item.classList.remove('input-custom__time-drop--active');
            }
            const pickerDrop = parent.querySelector('.input-custom__time-drop');
            pickerDrop.classList.add('input-custom__time-drop--active');
        }
        const timeClose = document.querySelectorAll('[data-time-close]')
        for (item of timeClose) {
            item.addEventListener('click', hidePicker)
        }
        function hidePicker() {
            this.closest('.input-custom__time-drop').classList.remove('input-custom__time-drop--active')
        }
    }

	const timePickers = document.querySelectorAll('[data-time-picker]')
    timePickers.forEach(item => inittimePicker(item))
});