  <?php 
 
  require_once($_SERVER['DOCUMENT_ROOT'] . "/important/function.php");	
  $thing = new user_tools;
  if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	  //user creation
	 $pass = password_hash($_POST['pass'], PASSWORD_DEFAULT);
	 if($thing->user_creation(htmlspecialchars($_POST['username']), $pass, $_POST['email']) === 1) {
		 $thing->update_lastlogin($_POST['username'], 1);
		 $keys = array();
		 $keys['samesite'] = "Lax";
		 $keys['path'] = "/";
		 $keys['expires'] = time()+3600;
		 setcookie("sessionuser", $_POST['username'], $keys);
		 echo 1;
	 } else {
		 echo 0;
	 }
} else if ($_SERVER['REQUEST_METHOD'] === 'GET') {
	//username check
	 if($thing->user_exists(htmlspecialchars($_GET['uname'])) > 0) {
		 echo 1;
	}
	 //todo: wv (word vomit) check so users like "cum" don't appear
} 