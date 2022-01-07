<?php
//alot of comments for a really insecure thing
session_start();
error_reporting(E_ALL);
ini_set('display_errors', 1);
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$init = new mysqli("localhost", "jarktube", "password", "jarktube");
//shitty place to store classes and stuff, but it's revival so whatever
//helo wee love reuseing cood from older versions of progjets.
$admins = array("test1");
class video_tools {
	function validate_video_id($vid) {
		// used to check if an video exists
		GLOBAL $init;
		$stmt = $init->prepare("SELECT `rid` FROM `video` WHERE `rid` = ?");
		$stmt->bind_param("s", $vid);
		$stmt->execute();
$result = $stmt->get_result();
		if($result->num_rows < 1) {
			return 0;
		} else {
			return 1;
		}
	}
			function get_user_numvideo($uid) {
		//used to get number of videos an user has
			GLOBAL $init;
			$stmt = $init->prepare("SELECT `uid` FROM `video` WHERE `uid` = ?");
		$stmt->bind_param("s", $uid);
		$stmt->execute();
$result = $stmt->get_result();
		  return $result->num_rows;
	}
	function add_views($vid, $uid) {
		//used for the watch page
		GLOBAL $init;
		if(isset($_COOKIE['sessionuser'])) {
		//check if view has been added already
		$stmt = $init->prepare("SELECT * FROM views WHERE `uid` = ? AND `vid` = ?");
		$stmt->bind_param("ss", $uid, $vid);
		$stmt->execute();
		$stmt->store_result();
			if($stmt->num_rows > 0) {
				return 0;
			} else {
				$viewid = bin2hex(random_bytes(2));
		$stmt = $init->prepare("INSERT INTO views (viewid, uid, vid) VALUES (?,?,?)");
		$stmt->bind_param("sss", $viewid, $uid, $vid);
		$stmt->execute();
			return 1;
			}
		}
	}
		function add_rate($vid, $uid, $type) {
		}
		function get_views_by_id($vid) {
			//used to get views
		GLOBAL $init;
		$stmt = $init->prepare("SELECT * FROM `views` WHERE `vid` = ?");
		$stmt->bind_param("s", $vid);
		$stmt->execute();
$stmt->store_result();
			return $stmt->num_rows;
	}
	function get_video_details($id, $mode = NULL) {
		//used to get video details and data for get_video_info and watch page
		GLOBAL $init;
			$stmt = $init->prepare("SELECT * FROM video WHERE `rid` = ?");
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
	function get_most_viewed($cat) {
		//used for the index to get the most viewed video
	GLOBAL $init;
		$stmt = $init->prepare("SELECT * FROM video WHERE `category` = ? ORDER BY views DESC LIMIT 1; ");
		$stmt->bind_param("ss", $cat, $type);
		$stmt->execute();
		$result = $stmt->get_result();
		  while ($row = $result->fetch_assoc()) {
			  return json_encode($row);
			  }
	}
	function get_rand_featured($cat) {
		//used in the index to get a random featured video from the category
	GLOBAL $init;
	$type = "public";
		$stmt = $init->prepare("SELECT * FROM video WHERE `featured` = 1 AND `category` = ? AND `video_type` = ? ORDER BY RAND() DESC LIMIT 1; ");
		$stmt->bind_param("ss", $cat, $type);
		$stmt->execute();
		$result = $stmt->get_result();
		  while ($row = $result->fetch_assoc()) {
			  return json_encode($row);
			  }
	}
}
class user_tools {
	function get_channel_data($username) {
		//used to get channel data from user
		GLOBAL $init;
		$stmt = $init->prepare("SELECT channel_title, channel_desc, channel_links FROM user WHERE `username` = ?");
		$stmt->bind_param("s", $username);
		$stmt->execute();
		$result = $stmt->get_result();
		  while ($row = $result->fetch_assoc()) {
			  return json_encode($row);
			  }
	}
	function update_channel_data($mode, $data) {
		//t
		GLOBAL $init;
		if(isset($_COOKIE['sessionuser'])) {
		if($mode == "desc") {
			$update = "UPDATE user SET channel_desc=? WHERE username=?";
		} else if($mode == "title") {
			$update = "UPDATE user SET channel_title=? WHERE username=?";
		}
		$stmt = $init->prepare($update);
		$stmt->bind_param("ss", $data, $_COOKIE['sessionuser']);
		$stmt->execute();
		return 1;
	}
	}
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
		function get_uid_by($username) {
				GLOBAL $init;
				//used to get uid by username
				$check = "SELECT userid FROM user WHERE username=?";
		$stmt = $init->prepare($check);
		$stmt->bind_param("s", $username);
		$stmt->execute();
$result = $stmt->get_result();
if($result->num_rows > 0) {
		  while ($row = $result->fetch_assoc()) {
			  return $row['userid'];
		  }
}
		}
	   }
	 class general_tools {
		 	function get_all($users = NULL, $videos = NULL) {
		//used to get all in jarktube
			GLOBAL $init;
			if(!is_null($users)) {
				switch ($users) {
					case "banned":
					$check = "SELECT username FROM user WHERE flag=1";
					break;
					default:
					$check = "SELECT username FROM user";
					break;
				}
			}
			if(!$videos == NULL) {
				switch ($videos) {
					case "public":
					$check = "SELECT `video_type` FROM video WHERE `video_type` = 'public'";
					break;
					case "unlisted":
					$check = "SELECT `video_type` FROM video WHERE `video_type` = 'unlisted'";
					break;
					case "private":
					$check = "SELECT `video_type` FROM video WHERE `video_type` = 'private'";
					break;
					case "views":
					$check = "SELECT `viewid` FROM views";
					break;
					default:
					$check = "SELECT `vtitle` FROM video";
					break;
				}
			}
		$stmt = $init->prepare($check);
		$stmt->execute();
$result = $stmt->get_result();
		  return $result->num_rows;
	}
	function get_to_date($date) {
		$vdate = new DateTime($date, new DateTimeZone('America/Phoenix'));
		echo $vdate->format("F d, Y");
	 }		 
	 function get_to_vtime($time) {
		 
	 }
	 }
?>