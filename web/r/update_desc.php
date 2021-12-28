<?php
require_once($_SERVER['DOCUMENT_ROOT'] . "/important/function.php"); 
	$initusr = new user_tools;
	if($_SERVER['REQUEST_METHOD'] == 'POST') {
		if(isset($_COOKIE['sessionuser'])) {
if($initusr->update_channel_data("desc", trim($_POST['comment'])) == 1) {
header("Location: /user/" . $_COOKIE['sessionuser'] . "/about");
}
		}
	}
?>