<?php
require_once($_SERVER['DOCUMENT_ROOT'] . "/important/function.php"); 
	$initusr = new user_tools;
	if($_SERVER['REQUEST_METHOD'] == 'POST') {
		if(isset($_COOKIE['sessionuser'])) {
var_dump($_POST);
		}
	}