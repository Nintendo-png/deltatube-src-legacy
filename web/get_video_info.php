<?php
// get_video_data thing made by succulent64 for JarkTube
// This is minutes of looking at format maps in use.
require_once($_SERVER['DOCUMENT_ROOT'] . "/important/function.php"); 
	$initvid = new video_tools;
	$initusr = new user_tools;
	$initgnt = new general_tools;
	 if($initvid->validate_video_id($_GET['video_id']) == 1) { 
	 $video_info = json_decode($initvid->get_video_details($_GET['video_id'], 0), true);
	 $uname = $initusr->get_uname_by($video_info['uid']);
	 if(isset($_COOKIE['sessionuser'])) {
	 $initvid->add_views($_GET['video_id'], $_COOKIE['sessionuser']); 
	 }
	 
	} else {
			echo "status=fail&reason=Invalid+Video+ID.&errorcode=1";
			die();
	}
if(isset($_GET['video_id'])) {
	if(isset($_GET['html5'])) {
$fmt_map = array(
//the map that plays videos
'itag' => '43',
'url' => '/ytd/video/' . $_GET['video_id'] . '.mp4',
'sig' => 'jark' . rand(1, 8) . '-' . bin2hex(random_bytes(5)),
'fallback_host' => 'tc.v14.cache3.c.youtube.com',
'quality' => 'hd1080',
'type' => 'video/webm; codecs="vp8.0, vorbis"'
);
	} else {
		$fmt_map = array(
//the map that plays videos
'itag' => '43',
'url' => '/ytd/video/' . $_GET['video_id'] . '.mp4',
'sig' => 'jark' . rand(1, 8) . '-' . bin2hex(random_bytes(5)),
'fallback_host' => 'tc.v14.cache3.c.youtube.com',
'quality' => 'hd720',
'type' => 'video/webm; codecs="vp8.0, vorbis"'
); 
echo http_build_query($fmt_map);
die();
	}
$url_encoded_fmt_stream_map = http_build_query($fmt_map);
$other_map = array(
// the map that doesn't store video urls
'hl' => 'en_US',
'cc_module' => 'ass.swf',
'track_embed' => '1',
'video_verticals' => '[933, 8, 930]',
'vq' => 'auto',
'title' => $video_info['vtitle'],
'sendtmp' => '1',
'avg_rating' => '5.0',
'ttsurl' => 'IS_Intro_Subs.scc',
'caps' => 'asr',
'expire' => '1361228889',
'sparams' => 'asr_langs,caps,v,expire',
'v' => $_GET['video_id'],
'key' => 'yt1',
'asr_langs' => 'ko,de,pt,en,nl,ja,ru,es,fr,i$$t',
'url_encoded_fmt_stream_map' => $url_encoded_fmt_stream_map,
'view_count' => $initvid->get_views_by_id($_GET['video_id']),
'cc_asr' =>  '1',
'token' => 'vjVQa1PpcFPQw_h19VxFJZdJZbKkh5-obrhC9M93j-E',
'no_get_video_log' => '0',
'muted' => '0',
'allow_ratings' => '1',
'keywords' => $video_info['keywords'],
'account_playback_token' => '',
'video_id' => $_GET['video_id'],
'thumbnail_url' => 'http://jark.succulent64.ml/ytd/thumb/' . $_GET['video_id'] . '.png',
'status' => 'ok',
'has_cc' => 'True',
'fexp' => '907063,919329,913565,920704,912806,902000,922403,922405,929901,913605,925006,908529,920201,930101,911116,926403,910221,901451,919114',
'ftoken' => '',
'iurlsd' => 'http://jark.succulent64.ml/ytd/thumb/' . $_GET['video_id'] . '.png',
'cc_font' => 'Arial Unicode MS, arial, verdana, _sans',
'allow_embed' => '1',
'author' => $uname,
'length_seconds' => $video_info['vtime'],
'storyboard_spec' => '',
'abd' => '1',
'iurlmaxres' => 'http://jark.succulent64.ml/ytd/thumb/' . $_GET['video_id'] . '.png',
'watermark' => 'http://s.ytimg.com/yts/img/watermark/youtube_watermark-vflHX6b6E.png,http://s.ytimg.com/yts/img/watermark/youtube_hd_watermark-vflAzLcD6.png',
'cc3_module' => 'ass.swf',
'tmi' => '1',
'ptk' => 'youtube_none',
'endscreen_module' => 'ass.swf',
'fmt_list' => '45/1280x720/99/0/0,22/1280x720/9/0/115,44/854x480/99/0/0,35/854x480/9/0/115,43/640x360/99/0/0,34/640x360/9/0/115,18/640x360/9/0/115,5/320x240/7/0/0,36/320x240/99/0/0,17/176x144/99/0/0×tamp=1361203689',
'timestamp' => '1361203689'
);
echo http_build_query($other_map);
// var_export($other_map);
} else {
	echo "status=fail&reason=Invalid+parameters.&errorcode=2";
}
?>