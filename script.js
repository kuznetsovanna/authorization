function setErrorEmail(message) {
    const err = document.getElementById("erreml");
    err.innerHTML = message;
}

function setErrorPassword(message) {
    const err = document.getElementById("errpwd");
    err.innerHTML = message;
}

function validate() {
    let result = true;

    // получение значений полей
    let email = document.querySelector('input[name="email"]').value;
    let textPass = document.querySelector('input[name="password"]').value;

    // проверка email
    let email_regexp = /[0-9a-z_A-Z]+@[0-9a-z_A-Z^.]+\.[a-zа-яА-ЯA-Z]{2,4}/i;
    if (email.length === 0) {
        setErrorEmail('Введите email');
        result = false;
    } else if (!email_regexp.test(email)) {
        setErrorEmail('Email должен соответствовать формату example@domain.com')
        result = false;
    } else {
        setErrorEmail('');
    }

    // проверка пароля
    if (textPass.length === 0) {
        setErrorPassword('Введите пароль');
        result = false;
    } else if (textPass.length < 6) {
        setErrorPassword('Пароль должен быть минимум 6 символов');
        result = false;
    } else if (textPass.search(/[a-zA-Z]/) === -1) {
        setErrorPassword('Пароль должен содержать буквы разных регистров');
        result = false;
    } else if (textPass.search(/[0-9]/) === -1) {
        setErrorPassword('Пароль должен содержать цифры');
        result = false;
    } else if (textPass.search(/[!@#$%^&*()_+"№;%:?\]]/) === -1) {
        setErrorPassword('Пароль должен содержать спец.символы');
        result = false;
    } else {
        setErrorPassword('');
    }

    return result;
}

// день недели
function getWeekDay(date) {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

    return days[date.getDay()];
}

// часы
function clockTimer() {
    let date = new Date();
    let time = [date.getHours(), date.getMinutes(), date.getSeconds()]; // |[0] = Hours| |[1] = Minutes| |[2] = Seconds|

    if (time[0] < 10) {
        time[0] = "0" + time[0];
    }
    if (time[1] < 10) {
        time[1] = "0" + time[1];
    }
    if (time[2] < 10) {
        time[2] = "0" + time[2];
    }

    let current_time = time.join(":");

    // день
    let dd = date.getDate().toString();
    if (dd < 10) {
        dd = "0" + dd;
    }
    // месяц
    let mm = (date.getMonth() + 1).toString();
    if (mm < 10) {
        mm = "0" + mm;
    }
    // год
    let yyyy = date.getFullYear().toString();
    // день недели
    let w = getWeekDay(date);

    // дата и день недели
    let current_date = dd + '.' + mm + '.' + yyyy + ' ' + w + ' ';

    let clock = document.getElementById("clock");

    clock.innerHTML = current_date + current_time;

    setTimeout("clockTimer()", 1000);
}

function getNameBrowser() {
    var ua = navigator.userAgent;


    if (ua.search(/rv:11.0/) > 0) {
        alert('используйте другой браузер');
    }
}


setTimeout("clockTimer()", 10);
