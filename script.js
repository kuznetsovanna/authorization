

  function setErrorFor(input, message) {
    var err = document.getElementById("erreml");
    err.innerHTML = message; 
  }
  
function errorPassword(message) {
  var err = document.getElementById("errpwd");
  err.innerHTML = message;
}
function validate() {
  // проверка email
  var email = document.querySelector('input[name="email"]').value;
  var textPass = document.querySelector('input[name="password"]').value;
  var email_regexp = /[0-9a-z_A-Z]+@[0-9a-z_A-Z^.]+\.[a-zа-яА-ЯA-Z]{2,4}/i;
  if (!email_regexp.test(email)) {
   
   setErrorFor(email, 'проверьте email')}
   else {setErrorFor(email);
   
  }
  
  // проверка пароля
  if (textPass.length < 6) {
    errorPassword(" Слишком короткий пароль");
    return false;
  }
  if (textPass.search(/[a-zA-Z]/) === -1) {
    errorPassword("пароль должен содержать буквы разных регистров");
    return false;
  }

  if (textPass.search(/[0-9]/) === -1) {
    errorPassword("пароль должен содержать цифры");
    return false;
  }
  if (textPass.search(/[!@#$%^&*()_+"№;%:?\]]/) === -1) {
   errorPassword("пароль должен содержать спец.символы");
    return false;
  }
  return true;
}


// часы
function clockTimer() {
  var date = new Date();
  var time = [date.getHours(), date.getMinutes(), date.getSeconds()]; // |[0] = Hours| |[1] = Minutes| |[2] = Seconds|

  if (time[0] < 10) {
    time[0] = "0" + time[0];
  }
  if (time[1] < 10) {
    time[1] = "0" + time[1];
  }
  if (time[2] < 10) {
    time[2] = "0" + time[2];
  }

  var current_time = time.join(":");

  var clock = document.getElementById("clock");

  clock.innerHTML = current_time;

  setTimeout("clockTimer()", 1000);
}

setTimeout("clockTimer()", 10);
document.write