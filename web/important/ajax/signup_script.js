
function signup_Validator()
{
	//elements
	var signup_email = document.getElementById('email');
	var signup_username = document.getElementById('uname');
	var signup_form = document.getElementById('theForm');
	var password_1 = document.getElementById('password_1');
	var password_2 = document.getElementById('password_2');
	var signup_button = document.theForm.signup_button;

//starting point
	signup_button.disabled='true';
	signup_button.value='Please wait...';
	if((password_1.value == "") || (password_2.value == "") || (signup_email.value == "") || (signup_username.value == "")){
					alert("Please make sure all fields are filled.");
					signup_button.value='Sign Up';
	                signup_button.removeAttribute('disabled');
					return;
	} else {
	if(password_1.value == password_2.value) {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    if(this.responseText > 0) {
			alert("This username has been used.");
		signup_button.value='Sign Up';
	signup_button.removeAttribute('disabled');
	} else {
		//signup system
		//really shitty, the point of this revival
		var formData = new FormData(signup_form);
		  xhttp.onload = function() {
    if(this.responseText == 1) {
		window.location.href = "index.php";
	}
		  }
xhttp.open("POST", "important/ajax/signup_ajax.php", true);
  xhttp.send(formData);
  
	}
	
    }
  xhttp.open("GET", "important/ajax/signup_ajax.php?uname=" + signup_username.value, true);
  xhttp.send();

	} else {
					alert("Please make sure both passwords match.");
					signup_button.value='Sign Up';
	                signup_button.removeAttribute('disabled');
	return;
	}
	}
}
   