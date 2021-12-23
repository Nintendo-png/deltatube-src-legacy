  <?php 
 
  require_once($_SERVER['DOCUMENT_ROOT'] . "/important/function.php");	
  $thing = new user_tools;
  if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	  //user verification
	 $pass = password_hash($_POST['Passwd'], PASSWORD_DEFAULT);
	 $hash = $thing->get_hash($_POST['username']);
	 if(password_verify($_POST['Passwd'], $hash)) {
		 $keys = array();
		 $keys['samesite'] = "Lax";
		 $keys['path'] = "/";
		 if(isset($_POST['rememberMe'])){
			 $keys['expires'] = 0;
			 setcookie("sessionuser", $_POST['username'], $keys);
		 } else {
			 $keys['expires'] = time()+3600;
			setcookie("sessionuser", $_POST['username'], $keys);
		 }
		 echo 1;
	 } else {
		 echo 0;
	 }
	 }
?>