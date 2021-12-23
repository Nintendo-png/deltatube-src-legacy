<html>
<head>
<title>User Check</title>
</head>
<body>
<h3>Username test</h3>
<p>Type an Username. Any username will work!</p>
 <form method="POST">
  <label for="lname">Username:</label>
  <input type="text" id="uname" name="uname"><br><br>
  <input type="submit" value="fetch">
  <?php if ($_SERVER['REQUEST_METHOD'] === 'POST') {
     require_once("../important/function.php");
	 $thing = new user_tools;
	 echo $thing->user_exists($_POST['uname']);
} ?>
</form> 
</body>
</html>
