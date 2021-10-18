  <?php if ($_SERVER['REQUEST_METHOD'] === 'GET') {
     require_once("../important/function.php");
	 $thing = new user_tools;
	 echo $thing->user_exists($_GET['uname']);
} ?>