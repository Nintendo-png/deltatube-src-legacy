<?php
//after a couple days, I finally got this to work.
//get_video_info took longer, but yeah
//it is incomplete, but it's ok
header('Content-Type: application/json');
require_once($_SERVER['DOCUMENT_ROOT'] . "/important/function.php"); 
	$initvid = new video_tools;
	$initusr = new user_tools;
	$initgnt = new general_tools;
    $video_info = json_decode($initvid->get_video_details($_GET['video_id'], 0), true);
	$uname = $initusr->get_uname_by($video_info['uid']); 
	$userdetail = array(
	'channel_logo_url' => '/ytd/pfp/' . $video_info['uid'] . '.gif',
	'username' => htmlspecialchars($uname),
	'subscriber_count' => '10,463,231',
	'image_url' => '/ytd/pfp/' . $video_info['uid'] . '.gif',
	'public_name' => 'YouTube',
	'channel_title' => 'YouTube Spotlight',
	'subscriber_count_string' => '<strong>10,463,231</strong> subscribers'
	);
	$videodetail = array(
	'view_count_string' => '<strong>' . $initvid->get_views_by_id($_GET['video_id']) . '</strong> views', 
	'description' => $video_info['vdesc'],
	'dislikes_count_unformatted' => 2084,
	'likes_count_unformatted' => 12038,
	'likes_dislikes_string' => '2,038 likes, 2,084 dislikes',
	'view_count' => $initvid->get_views_by_id($_GET['video_id'])
	);
	$json = array(
	'user_info' => $userdetail,
	'video_info' => $videodetail
	);
	echo json_encode($json);
?>