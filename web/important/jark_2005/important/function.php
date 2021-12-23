<?php
session_start();
error_reporting(E_ALL);
ini_set('display_errors', 1);
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$init = new mysqli("localhost", "jarktube", "zd/ARYdRPwoGFpgx", "jarktube");
//shitty place to store classes and stuff, but it's revival so whatever
class video_tools {
	function validate_video_id($vid) {
		GLOBAL $init;
		$stmt = $init->prepare("SELECT `video_id` FROM `video` WHERE `video_id` = ?");
		$stmt->bind_param("s", $vid);
		$stmt->execute();
$result = $stmt->get_result();
		if($result->num_rows < 1) {
			return 0;
		} else {
			return 1;
		}
	}
	function get_video_details($id, $mode = NULL) {
		GLOBAL $init;
			$stmt = $init->prepare("SELECT title, video_desc, user_id, date_time, featured FROM video WHERE `video_id` = ?");
		$stmt->bind_param("s", $id);
		$stmt->execute();
		$result = $stmt->get_result();
		  while ($row = $result->fetch_assoc()) {
			  if($mode == 1) { 
			  return var_dump($row);  
			  } else {
			  return json_encode($row);
			  }
	}
}
}
class user_tools {
	function user_exists($username, $userid = NULL) {
		//used to verify username on signup
			GLOBAL $init;
				$check = "SELECT username FROM user WHERE username=?";
				$chkstr = $username;
		$stmt = $init->prepare($check);
		$stmt->bind_param("s", $username);
		$stmt->execute();
$result = $stmt->get_result();
		  return $result->num_rows;
	}
	function get_hash($username) {
		//used to get password hash for login
			GLOBAL $init;
				$check = "SELECT passhash FROM user WHERE username=?";
		$stmt = $init->prepare($check);
		$stmt->bind_param("s", $username);
		$stmt->execute();
$result = $stmt->get_result();
		  while ($row = $result->fetch_assoc()) {
			  return $row['passhash'];
		  }
	}
		function get_flag($username) {
		//used to check if user is banned or deleted
			GLOBAL $init;
				$check = "SELECT flag FROM user WHERE username=?";
		$stmt = $init->prepare($check);
		$stmt->bind_param("s", $username);
		$stmt->execute();
$result = $stmt->get_result();
		  while ($row = $result->fetch_assoc()) {
			  switch ($row['flag']) {
				  case 0:
				  //default. No ban.
					return 0;
					break;
				  case 1:
				  //ban. breaking of tos.
					return 1;
					break;
				  case 2:
				  //deleted. user selected.
					return 2;
					break;
				  case 3:
				 //deleted. user selected.
					return 3;
					break;
			  }
		  }
	}
	function user_creation($username, $passhash, $email) {
		//used for the signup page
		GLOBAL $init;
		//creating account
			$uidgen = bin2hex(random_bytes(4));
			$check = "INSERT INTO user (username, userid, email_addr, passhash) VALUES (?,?,?,?)";
		$stmt = $init->prepare($check);
		$stmt->bind_param("ssss", $username, $uidgen, $email, $passhash);
		$stmt->execute();
		//check if account was created
		$check = "SELECT `username` FROM `user` WHERE `username` = ?";
		$stmt = $init->prepare($check);
		$stmt->bind_param("s", $username);
		$stmt->execute();
		  $stmt->store_result();
		  $_SESSION['uid'] = $uidgen;
			return 1;
		}
		function update_lastlogin($uid, $type = NULL) {
		GLOBAL $init;
		date_default_timezone_set('UTC');
			//meant to be used on login or signup page
			$logindate = date("m/d/Y h:i.s a");
			if($type = 1) {
				$check = "UPDATE user SET lastlogin=? WHERE username=?";
		} else {
			$check = "UPDATE user SET lastlogin=? WHERE userid=?";
		}
		$stmt = $init->prepare($check);
		$stmt->bind_param("ss", $logindate, $uid);
		$stmt->execute();
		}
		function get_uname_by($userid) {
				GLOBAL $init;
				//used to get username by userid
				$check = "SELECT username FROM user WHERE userid=?";
		$stmt = $init->prepare($check);
		$stmt->bind_param("s", $userid);
		$stmt->execute();
$result = $stmt->get_result();
if($result->num_rows > 0) {
		  while ($row = $result->fetch_assoc()) {
			  return $row['username'];
		  }
}
		}
	   }
	 class general_tools {
		 
	 }		 
?>