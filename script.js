




function setErrorEmail(message) {
    var err = document.getElementById("erreml");
    err.innerHTML = message;
}

function SetErrorPassword(message) {
    var err = document.getElementById("errpwd");
    err.innerHTML = message;
}

function validate() {
    // проверка email
    var email = document.querySelector('input[name="email"]').value;
    var textPass = document.querySelector('input[name="password"]').value;
    var email_regexp = /[0-9a-z_A-Z]+@[0-9a-z_A-Z^.]+\.[a-zа-яА-ЯA-Z]{2,4}/i;
    if (!email_regexp.test(email)) {

        setErrorEmail(email, 'проверьте email')
    } else {
        setErrorEmail(' ');

    }

    // проверка пароля
    if (textPass.length < 6) {
        SetErrorPassword(" Слишком короткий пароль");
        return false;
    }
    if (textPass.search(/[a-zA-Z]/) === -1) {
        SetErrorPassword("пароль должен содержать буквы разных регистров");
        return false;
    }

    if (textPass.search(/[0-9]/) === -1) {
        SetErrorPassword("пароль должен содержать цифры");
        return false;
    }
    if (textPass.search(/[!@#$%^&*()_+"№;%:?\]]/) === -1) {
        SetErrorPassword("пароль должен содержать спец.символы");
        return false;
    }
    return true;
}
// день недели
function getWeekDay(date) {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

    return days[date.getDay()];}
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
        let dd  = date.getDate().toString();
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
        let current_date = `${dd}.${mm}.${yyyy} ${w} `;

        let clock = document.getElementById("clock");

        clock.innerHTML = current_date + current_time;

        setTimeout("clockTimer()", 1000);
    }

    setTimeout("clockTimer()", 10);
    document.write

function get_name_browser(){
    var ua = navigator.userAgent;


if (ua.search(/rv:11.0/) > 0){
        alert('используйте другой браузер');}
    }
