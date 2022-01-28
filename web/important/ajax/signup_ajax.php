  <?php 
 
  require_once($_SERVER['DOCUMENT_ROOT'] . "/important/function.php");	
  $thing = new user_tools;
  if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	  //user creation
	 $pass = password_hash($_POST['pass'], PASSWORD_DEFAULT);
	 if($thing->user_creation(htmlspecialchars($_POST['username']), $pass, $_POST['email']) === 1) {
		 $thing->update_lastlogin($_POST['username'], 1);
		 
		 echo 1;
	 } else {
		 echo 0;
	 }
} else if ($_SERVER['REQUEST_METHOD'] === 'GET') {
	//username check
	//well now, some cock(insert num here) is posting porno and nfsw art
	$badname = array(
	"cock", 
	"cum", 
	"nigga", 
	"nigger",
	"sex"
	);
	foreach ($badname as $bad) {
		if (strstr($_GET['uname'], $bad)) {
			echo 3;
			die();
		} else {
			echo 0;
		} 
	}
	 if($thing->user_exists(htmlspecialchars($_GET['uname'])) > 0) {
		 echo 1;
	} else {
		echo 0;
	}
} 
