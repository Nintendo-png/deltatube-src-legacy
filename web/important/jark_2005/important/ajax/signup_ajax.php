  <?php 
 
  require_once("../function.php");	
  $thing = new user_tools;
  if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	  //user creation
	 $pass = password_hash($_POST['password_1'], PASSWORD_DEFAULT);
	 if($thing->user_creation($_POST['username'], $pass, $_POST['email']) === 1) {
		 $thing->update_lastlogin($_POST['username'], 1);
		 $_SESSION['user'] = $_POST['username'];
		 echo 1;
	 } else {
		 echo 0;
	 }
} else if ($_SERVER['REQUEST_METHOD'] === 'GET') {
	//username check
	 if($thing->user_exists($_GET['uname']) > 0) {
		 echo 1;
	}
	 //todo: wv (word vomit) check so users like "cum" don't appear
} 