<html>
<head>
<title>User Creation</title>
</head>
<body>
<h3>User Creation Test</h3>
<p>Might 403 this later so no one can fuck around with the website's user system.</p>
 <form method="POST">
  <label for="lname">Username:</label>
  <input type="text" id="uname" name="uname"><br><br>
    <label for="lname">Password:</label>
  <input type="text" id="pass" name="pass"><br><br>
    <label for="lname">Email:</label>
  <input type="text" id="email" name="email"><br><br>
  <input type="submit" value="post">
  <?php if ($_SERVER['REQUEST_METHOD'] === 'POST') {
     require_once("../important/function.php");
	 $thing = new user_tools;
	 $pass = password_hash($_POST['pass'], PASSWORD_DEFAULT);
	 echo $thing->user_creation($_POST['uname'], $pass, $_POST['email']);
} ?>
</form> 
</body>
</html>
