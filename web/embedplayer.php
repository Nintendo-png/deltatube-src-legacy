<?php 
	require_once($_SERVER['DOCUMENT_ROOT'] . "/important/function.php"); 
	$initvid = new video_tools;
	$initusr = new user_tools;
	$initgnt = new general_tools;
	$vid = explode(".php", $_GET['v']);
	if(!isset($vid[0])) { include($_SERVER['DOCUMENT_ROOT'] . "/404.php"); die(); }
    if($initvid->validate_video_id($vid[0]) == 0) { include($_SERVER['DOCUMENT_ROOT'] . "/404.php"); die(); }
	$video_info = json_decode($initvid->get_video_details($vid[0], 0), true);
?>
<!DOCTYPE html>
  <html lang="en" dir="ltr">

<head>

    <title>title - JarkTube</title>
	<link id="css-4115735524" rel="stylesheet" href="/yts/cssbin/www-hitchhiker-vflTcqmWD.css">
	<link id="css-583125701" rel="stylesheet" href="/yts/cssbin/www-the-rest-vflzYVqky.css">	
	<link id="css-3687597597" rel="stylesheet" href="/yts/cssbin/www-home-c4-vfl4MbzOD.css">	

<meta property="og:url" content="https://jark.succulent64.ml/watch?v=<?php echo $_GET['v']; ?>">
    <meta property="og:title" content="<?php echo $video_info['vtitle']; ?>">
    <meta property="og:description" content="<?php echo $video_info['vdesc']; ?>">
    <meta property="og:type" content="video">
    <meta property="og:image" content="https://jark.succulent64.ml/ytd/thumb/<?php echo $vid[0]; ?>.png">
      <meta property="og:video" content="https://jark.succulent64.ml/ytd/video/<?php echo $vid[0]; ?>.mp4">
      <meta property="og:video:type" content="video/mp4">
      <meta property="og:video:width" content="1080">
      <meta property="og:video:height" content="720">

  <style>
    @-o-viewport { width: device-width; }
    @-moz-viewport { width: device-width; }
    @-ms-viewport { width: device-width; }
    @-webkit-viewport { width: device-width; }
    @viewport { width: device-width; }
  </style>

  
</head>
  <body id="" class="date-20120902 en_US ltr   ytg-old-clearfix guide-feed-v2 " dir="ltr">

<div id="watch-longform-ad" class="hid">
  <div id="watch-longform-text">
Advertisement
  </div>
  <div id="watch-longform-ad-placeholder"><img src="/yts/img/pixel-vfl3z5WfW.gif" height="60" width="300"></div>
</div>
  <div id="player" class="full-frame"></div>  
<script id="js-77811903" src="//s.ytimg.com/yts/jsbin/www-embed_core_module-vflZkW0CI.js" data-loaded="true"></script>


  
  <script>
    yt.setConfig({
      'EMBED_BINARY_URL': '//s.ytimg.com/yt/jsbin/www-embed_core_module-vfl4hvmyy.js',
      'POST_MESSAGE_ORIGIN': "*",

        'EVENT_ID': "CKHC1ZWol7ICFSQUIQodyCYHCw==",

      'IS_OPERA_MINI': false
    });
    yt.setMsg({
      'FLASH_UPGRADE': '<div class=\"yt-alert yt-alert-default yt-alert-error  yt-alert-player\">  <div class=\"yt-alert-icon\">\n    <img src=\"\/\/s.ytimg.com\/yt\/img\/pixel-vfl3z5WfW.gif\" class=\"icon master-sprite\" alt=\"Alert icon\">\n  <\/div>\n<div class=\"yt-alert-buttons\"><\/div><div class=\"yt-alert-content\" role=\"alert\">    <span class=\"yt-alert-vertical-trick\"><\/span>\n    <div class=\"yt-alert-message\">\n            You need to upgrade your Adobe Flash Player to watch this video. <br> <a href=\"http:\/\/get.adobe.com\/flashplayer\/\">Download it from Adobe.<\/a>\n    <\/div>\n<\/div><\/div>'
    });
      yt.setConfig({
      'PLAYER_CONFIG': {"assets": {"html": "\/html5_player_template", "css_actions": "/yts/cssbin/www-player-actions-vflBv1HfX.css", "css": "/yts/cssbin/www-player-vfl95jqbw.css", "js": "/yts/jsbin/html5player-vflppn5jI.js"}, "url": "/yts/swfbin/player.swf", "min_version": "8.0.0", "args": {"el": "embedded", "iurl": "<?php echo 'http://jark.succulent64.ml/ytd/thumb/' . $vid[0] . '.png'; ?>", "fexp": "914501,910020,916806,914083,916612,922401,920704,912806,927201,922403,925003,913546,913556,916805,920201,901451", "hl": "bg_BG", "is_html5_mobile_device": false, "video_id": "<?php echo $vid[0]; ?>", "sendtmp": "1", "enablejsapi": "0", "sk": "_yFl1XD2EZMiFxul0uLtvQREHflJoPC5C", "rel": "0", "cr": "US", "playlist_module": "\/\/s.ytimg.com\/yts\/swfbin\/playlist_module-vflWjYGOe.swf", "length_seconds": 024}, "url_v9as2": "/yts/swfbin/player2.swf", "params": {"allowscriptaccess": "always", "allowfullscreen": "true", "bgcolor": "#000000"}, "url_v9as2": "/yts/swfbin/player2.swf", "params": {"allowscriptaccess": "always", "allowfullscreen": "true", "bgcolor": "#000000"}, "attrs": {"width": "100%", "id": "video-player", "height": "100%"}, "url_v8": "http:\/\/web.archive.org\/web\/20120902162809\/http:\/\/s.ytimg.com\/yt\/swfbin\/cps-vflhpKKMB.swf", "html5": false},
    'EMBED_HTML_TEMPLATE': "\u003ciframe width=\"__width__\" height=\"__height__\" src=\"__url__\" frameborder=\"0\" allowfullscreen\u003e\u003c\/iframe\u003e",
    'EMBED_HTML_URL': "http:\/\/jark.succulent64.ml\/embed\/__videoid__"
  });
    yt.setMsg('FLASH_UPGRADE', "\u003cdiv class=\"yt-alert yt-alert-default yt-alert-error  yt-alert-player\"\u003e  \u003cdiv class=\"yt-alert-icon\"\u003e\n    \u003cimg s\u0072c=\"\/\/s.ytimg.com\/yt\/img\/pixel-vfl3z5WfW.gif\" class=\"icon master-sprite\" alt=\"Alert icon\"\u003e\n  \u003c\/div\u003e\n\u003cdiv class=\"yt-alert-buttons\"\u003e\u003c\/div\u003e\u003cdiv class=\"yt-alert-content\" role=\"alert\"\u003e    \u003cspan class=\"yt-alert-vertical-trick\"\u003e\u003c\/span\u003e\n    \u003cdiv class=\"yt-alert-message\"\u003e\n            You need to upgrade your Adobe Flash Player to watch this video. \u003cbr\u003e \u003ca href=\"http:\/\/get.adobe.com\/flashplayer\/\"\u003eDownload it from Adobe.\u003c\/a\u003e\n    \u003c\/div\u003e\n\u003c\/div\u003e\u003c\/div\u003e");
  yt.setMsg('PLAYER_FALLBACK', "\u003cdiv class=\"yt-alert yt-alert-default yt-alert-error  yt-alert-player\"\u003e  \u003cdiv class=\"yt-alert-icon\"\u003e\n    \u003cimg s\u0072c=\"\/\/s.ytimg.com\/yt\/img\/pixel-vfl3z5WfW.gif\" class=\"icon master-sprite\" alt=\"Alert icon\"\u003e\n  \u003c\/div\u003e\n\u003cdiv class=\"yt-alert-buttons\"\u003e\u003c\/div\u003e\u003cdiv class=\"yt-alert-content\" role=\"alert\"\u003e    \u003cspan class=\"yt-alert-vertical-trick\"\u003e\u003c\/span\u003e\n    \u003cdiv class=\"yt-alert-message\"\u003e\n            The Adobe Flash Player or an HTML5 supported browser is required for video playback. \u003cbr\u003e \u003ca href=\"http:\/\/get.adobe.com\/flashplayer\/\"\u003eGet the latest Flash Player\u003c\/a\u003e \u003cbr\u003e \u003ca href=\"\/html5\"\u003eLearn more about upgrading to an HTML5 browser\u003c\/a\u003e\n    \u003c\/div\u003e\n\u003c\/div\u003e\u003c\/div\u003e");
  yt.setMsg('QUICKTIME_FALLBACK', "\u003cdiv class=\"yt-alert yt-alert-default yt-alert-error  yt-alert-player\"\u003e  \u003cdiv class=\"yt-alert-icon\"\u003e\n    \u003cimg s\u0072c=\"\/\/s.ytimg.com\/yt\/img\/pixel-vfl3z5WfW.gif\" class=\"icon master-sprite\" alt=\"Alert icon\"\u003e\n  \u003c\/div\u003e\n\u003cdiv class=\"yt-alert-buttons\"\u003e\u003c\/div\u003e\u003cdiv class=\"yt-alert-content\" role=\"alert\"\u003e    \u003cspan class=\"yt-alert-vertical-trick\"\u003e\u003c\/span\u003e\n    \u003cdiv class=\"yt-alert-message\"\u003e\n            The Adobe Flash Player or QuickTime is required for video playback. \u003cbr\u003e \u003ca href=\"http:\/\/get.adobe.com\/flashplayer\/\"\u003eGet the latest Flash Player\u003c\/a\u003e \u003cbr\u003e \u003ca href=\"http:\/\/www.apple.com\/quicktime\/download\/\"\u003eGet the latest version of QuickTime\u003c\/a\u003e\n    \u003c\/div\u003e\n\u003c\/div\u003e\u003c\/div\u003e");



      yt.embed.writeEmbed();
  </script>




</body>
</html>