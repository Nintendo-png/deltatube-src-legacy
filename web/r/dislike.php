<?php
require_once($_SERVER['DOCUMENT_ROOT'] . "/important/function.php"); 
	$initvid = new video_tools;
	$initusr = new user_tools;
	$initgnt = new general_tools;
	$initvid->add_rate($_GET['v'], $_COOKIE['sessionuser'], "dislike");
?>