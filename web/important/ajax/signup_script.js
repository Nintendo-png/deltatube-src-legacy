function signup_Validator() {
	var e = document.getElementById("email"),
		a = document.getElementById("username"),
		t = document.getElementById("gaia_loginform"),
		n = document.getElementById("pass"),
		s = document.getElementById("Passwd-2"),
		l = document.getElementById("signup"),
		i = document.getElementById("password-meter-bar"),
		r = i.className;
	if(l.disabled = "true", l.value = "Please wait...", "" == n.value || "" == s.value || "" == e.value || "" == a.value) return alert("Please make sure all fields are filled."), l.value = "Sign Up", void l.removeAttribute("disabled");
	if(-1 !== r.indexOf("level0")) return alert("Please use a stronger password."), l.value = "Sign Up", void l.removeAttribute("disabled");
	if(n.value != s.value) return alert("Please make sure both passwords match."), l.value = "Sign Up", void l.removeAttribute("disabled");
	const d = new XMLHttpRequest;
	d.onload = function() {
		if(1 == this.responseText) alert("This username has been used."), l.value = "Sign Up", l.removeAttribute("disabled");
		else if(3 == this.responseText) alert("Username is not allowed. Please type in a different username."), l.value = "Sign Up", l.removeAttribute("disabled");
		else {
			var e = new FormData(t);
			d.onload = function() {
				1 == this.responseText && (window.location.href = "/")
			}, d.open("POST", "important/ajax/signup_ajax.php", !0), d.send(e)
		}
	}, d.open("GET", "important/ajax/signup_ajax.php?uname=" + a.value, !0), d.send()
}