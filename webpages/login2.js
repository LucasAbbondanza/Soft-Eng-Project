var login = function() {
    var username = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    if (username === 'bob' && password === 'secret') {
      ons.notification.alert('Congratulations!');
    } else {
      ons.notification.alert('Incorrect email or password.');
    }
  };
