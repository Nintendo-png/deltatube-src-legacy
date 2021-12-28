function signin_Validator()
{
	//elements
	var signin_username = document.getElementById('username');
	var signin_form = document.getElementById('gaia_loginform');
	var password_1 = document.getElementById('Passwd');
	var signin_button = document.getElementById('signIn');
//starting point
	signin_button.disabled='true';
	signin_button.value='Please wait...';
	if((password_1.value == "") || (signin_username.value == "")){
					alert("Please make sure all fields are filled.");
					signin_button.value='Sign In';
	                signin_button.removeAttribute('disabled');
					return;
	} else {
		//signup system
		//really shitty, the point of this revival
		var formData = new FormData(signin_form);
		  const xhttp = new XMLHttpRequest();
		  xhttp.onload = function() {
    if(this.responseText == 1) {
		window.location.href = "/";
	} else if(this.responseText == 3) { 
	alert("You are banned!");
					signin_button.value='Sign In';
	                signin_button.removeAttribute('disabled');
					return;
	} else {
		alert("Invalid Username or Password.");
					signin_button.value='Sign In';
	                signin_button.removeAttribute('disabled');
					return;
	}
		  }
xhttp.open("POST", "important/ajax/signin_ajax.php", true);
  xhttp.send(formData);
  
	}
	
    }