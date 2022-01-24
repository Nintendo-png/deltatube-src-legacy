<?php
//used to play videos on the flash player
//this is months of trial and error in use
require_once($_SERVER['DOCUMENT_ROOT'] . "/important/function.php"); 
$initvid = new video_tools;
if($initvid->validate_video_id($_GET['video_id']) == 1) { 
$video_path = "ytd/video/" . $_GET['video_id'] . ".mp4";
header('Accept-Ranges: bytes');
header('Content-Length:'.filesize($video_path));
readfile($video_path);
}
?>