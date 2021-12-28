<?php
// hello, we use gd for image conversion.
// gif is used because animated pfps
require_once($_SERVER['DOCUMENT_ROOT'] . "/important/function.php"); 
	$initvid = new video_tools;
	$initusr = new user_tools;
	$initgnt = new general_tools;
if($_SERVER['REQUEST_METHOD'] === 'POST' && $_POST['uploadtype'] == "pfp") {
	if(isset($_COOKIE['sessionuser'])) {
$uid = $initusr->get_uid_by($_COOKIE['sessionuser']); 
if($_COOKIE['sessionuser'] == "cock69") {
	die();
}
if(exif_imagetype($_FILES['pfp_upload']['tmp_name']) == 1 || exif_imagetype($_FILES['pfp_upload']['tmp_name']) == 2 || exif_imagetype($_FILES['pfp_upload']['tmp_name']) == 3) {
	
	switch(exif_imagetype($_FILES['pfp_upload']['tmp_name'])) {
		case 1:
			move_uploaded_file($_FILES['pfp_upload']['tmp_name'], $_SERVER['DOCUMENT_ROOT'] .  "/ytd/pfp/" . $uid . ".gif");
			header("Location: /?file_success_img");
			die();
			break;
		case 2:
			$img = imagecreatefromjpeg($_FILES['pfp_upload']['tmp_name']);
			break;
		case 3:
			$img = imagecreatefrompng($_FILES['pfp_upload']['tmp_name']);
			break;
	}
	imagegif($img, $_SERVER['DOCUMENT_ROOT'] .  "/ytd/pfp/" . $uid . ".gif");
	imagedestroy($img);
	header("Location: /?file_success_img");
} else {
	header("Location: /?file_unsupported_img");
}
	} else {
		header("Location: /sign_in");
	}
}
?>