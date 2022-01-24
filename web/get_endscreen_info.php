<?php
require_once($_SERVER['DOCUMENT_ROOT'] . "/important/function.php");	
$initvid = new video_tools;
$initusr = new user_tools;
$initgnt = new general_tools;
$x = "0";
while($x < 12) {
$feature = json_decode($initvid->get_rand_featured('n'), 1); 
$endscreen_map = array(
//the map that generates the endscreen
'view_count' => $initvid->get_views_by_id($feature['rid']),
'author' => $initusr->get_uname_by($feature['uid']),
'length_seconds' => '025',
'id' => $feature['rid'],
'title' => $feature['vtitle']
);
$x++;
echo http_build_query($endscreen_map);
if($x < 12) {
	echo ",";
}
}
?>