<!DOCTYPE html>
  <html lang="en" dir="ltr">
<?php
require_once($_SERVER['DOCUMENT_ROOT'] . "/important/function.php"); 
	$initvid = new video_tools;
	$initusr = new user_tools;
	$initgnt = new general_tools;
	if(!isset($_GET['v'])) { include('404.php'); die(); }
    if($initvid->validate_video_id($_GET['v']) == 0) { include('404.php'); die(); }
	$video_info = json_decode($initvid->get_video_details($_GET['v'], 0), true);
	?>
<head>

   
    <title>Rewind YouTube Style 2012 - YouTube</title>

    <link id="css-2604226302" rel="stylesheet" href="//s.ytimg.com/yts/cssbin/www-embed-vfl27ufTh.css">


    <link rel="canonical" href="/web/20121221164608/http://www.youtube.com/watch?v=iCkYw3cRwLo">

  <style>
    @-o-viewport { width: device-width; }
    @-moz-viewport { width: device-width; }
    @-ms-viewport { width: device-width; }
    @-webkit-viewport { width: device-width; }
    @viewport { width: device-width; }
  </style>

      <script>
var yt = yt || {};yt.timing = yt.timing || {};yt.timing.data_ = yt.timing.data_ || {};yt.timing.tick = function() {};yt.timing.info = function() {};    </script>

</head>




  <body id="" class="date-20121221 en_US ltr   ytg-old-clearfix guide-feed-v2 site-left-aligned exp-new-site-width exp-watch7-comment-ui " dir="ltr">


<div id="watch-longform-ad" class="hid">
  <div id="watch-longform-text">
Advertisement
  </div>
  <div id="watch-longform-ad-placeholder"><img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" height="60" width="300"></div>
</div>



  <div id="player" class="full-frame"></div>

        
    <script id="js-3637430272" src="//s.ytimg.com/yts/jsbin/www-embed_core_module-vfl3edHYR.js" data-loaded="true"></script>


  <script>
    yt.setConfig({
      'EMBED_BINARY_URL': '//s.ytimg.com/yts/jsbin/www-embed_core_module-vfl3edHYR.js',
      'POST_MESSAGE_ORIGIN': "*",

        'EVENT_ID': "CJLx1Kz5q7QCFZSXIQod_HayGw==",

      'IS_OPERA_MINI': false
    });
    yt.setMsg({
      'FLASH_UPGRADE': '<div class=\"yt-alert yt-alert-default yt-alert-error  yt-alert-player\">  <div class=\"yt-alert-icon\">\n    <img src=\"\/\/s.ytimg.com\/yts\/img\/pixel-vfl3z5WfW.gif\" class=\"icon master-sprite\" alt=\"Alert icon\">\n  <\/div>\n<div class=\"yt-alert-buttons\"><\/div><div class=\"yt-alert-content\" role=\"alert\">    <span class=\"yt-alert-vertical-trick\"><\/span>\n    <div class=\"yt-alert-message\">\n            You need to upgrade your Adobe Flash Player to watch this video. <br> <a href=\"http:\/\/get.adobe.com\/flashplayer\/\">Download it from Adobe.<\/a>\n    <\/div>\n<\/div><\/div>'
    });
      yt.setConfig({
      'PLAYER_CONFIG': {"min_version": "8.0.0", "html5": false, "url": "/yts/swfbin/player.swf", "attrs": {"id": "video-player", "width": "100%", "height": "100%"}, "params": {"allowscriptaccess": "always", "allowfullscreen": "true", "bgcolor": "#000000"}, "args": {"cr": "NL", "allow_ratings": 1, "length_seconds": 255, "iurlsd": "https:\/\/web.archive.org\/web\/20121221164608\/http:\/\/i2.ytimg.com\/vi\/iCkYw3cRwLo\/sddefault.jpg", "is_html5_mobile_device": false, "rel": "1", "hl": "en_US", "playlist_module": "https:\/\/web.archive.org\/web\/20121221164608\/http:\/\/s.ytimg.com\/yts\/swfbin\/playlist_module-vflh5WbBc.swf", "title": "<?php echo $video_info['vtitle']; ?>", "iurl": "<?php echo 'http://jark.succulent64.ml/ytd/thumb/' . $_GET['v'] . '.png'; ?>", "fexp": "914501,910020,916806,914083,916612,922401,920704,912806,927201,922403,925003,913546,913556,916805,920201,901451", "hl": "bg_BG", "is_html5_mobile_device": false, "video_id": "<?php echo $_GET['v']; ?>", "enablejsapi": "0"}, "url_v9as2": "/yts/swfbin/player2.swf", "url_v8": "/yts/swfbin/player2.swf", "assets": {"html": "\/html5_player_template", "css_actions": "\/\/s.ytimg.com\/yts\/cssbin\/www-player-actions-vflBv1HfX.css", "js": "\/\/s.ytimg.com\/yts\/jsbin\/html5player-vflppn5jI.js", "css": "\/\/s.ytimg.com\/yts\/cssbin\/www-player-vfl95jqbw.css"}},
    'EMBED_HTML_TEMPLATE': "\u003ciframe width=\"__width__\" height=\"__height__\" src=\"__url__\" frameborder=\"0\" allowfullscreen\u003e\u003c\/iframe\u003e",
    'EMBED_HTML_URL': "http:\/\/jark.succulent64.ml\/embed\/__videoid__"
  });
    yt.setMsg('FLASH_UPGRADE', "\u003cdiv class=\"yt-alert yt-alert-default yt-alert-error  yt-alert-player\"\u003e  \u003cdiv class=\"yt-alert-icon\"\u003e\n    \u003cimg s\u0072c=\"\/\/s.ytimg.com\/yts\/img\/pixel-vfl3z5WfW.gif\" class=\"icon master-sprite\" alt=\"Alert icon\"\u003e\n  \u003c\/div\u003e\n\u003cdiv class=\"yt-alert-buttons\"\u003e\u003c\/div\u003e\u003cdiv class=\"yt-alert-content\" role=\"alert\"\u003e    \u003cspan class=\"yt-alert-vertical-trick\"\u003e\u003c\/span\u003e\n    \u003cdiv class=\"yt-alert-message\"\u003e\n            You need to upgrade your Adobe Flash Player to watch this video. \u003cbr\u003e \u003ca href=\"http:\/\/get.adobe.com\/flashplayer\/\"\u003eDownload it from Adobe.\u003c\/a\u003e\n    \u003c\/div\u003e\n\u003c\/div\u003e\u003c\/div\u003e");
  yt.setMsg('PLAYER_FALLBACK', "\u003cdiv class=\"yt-alert yt-alert-default yt-alert-error  yt-alert-player\"\u003e  \u003cdiv class=\"yt-alert-icon\"\u003e\n    \u003cimg s\u0072c=\"\/\/s.ytimg.com\/yts\/img\/pixel-vfl3z5WfW.gif\" class=\"icon master-sprite\" alt=\"Alert icon\"\u003e\n  \u003c\/div\u003e\n\u003cdiv class=\"yt-alert-buttons\"\u003e\u003c\/div\u003e\u003cdiv class=\"yt-alert-content\" role=\"alert\"\u003e    \u003cspan class=\"yt-alert-vertical-trick\"\u003e\u003c\/span\u003e\n    \u003cdiv class=\"yt-alert-message\"\u003e\n            The Adobe Flash Player or an HTML5 supported browser is required for video playback. \u003cbr\u003e \u003ca href=\"http:\/\/get.adobe.com\/flashplayer\/\"\u003eGet the latest Flash Player\u003c\/a\u003e \u003cbr\u003e \u003ca href=\"\/html5\"\u003eLearn more about upgrading to an HTML5 browser\u003c\/a\u003e\n    \u003c\/div\u003e\n\u003c\/div\u003e\u003c\/div\u003e");
  yt.setMsg('QUICKTIME_FALLBACK', "\u003cdiv class=\"yt-alert yt-alert-default yt-alert-error  yt-alert-player\"\u003e  \u003cdiv class=\"yt-alert-icon\"\u003e\n    \u003cimg s\u0072c=\"\/\/s.ytimg.com\/yts\/img\/pixel-vfl3z5WfW.gif\" class=\"icon master-sprite\" alt=\"Alert icon\"\u003e\n  \u003c\/div\u003e\n\u003cdiv class=\"yt-alert-buttons\"\u003e\u003c\/div\u003e\u003cdiv class=\"yt-alert-content\" role=\"alert\"\u003e    \u003cspan class=\"yt-alert-vertical-trick\"\u003e\u003c\/span\u003e\n    \u003cdiv class=\"yt-alert-message\"\u003e\n            The Adobe Flash Player or QuickTime is required for video playback. \u003cbr\u003e \u003ca href=\"http:\/\/get.adobe.com\/flashplayer\/\"\u003eGet the latest Flash Player\u003c\/a\u003e \u003cbr\u003e \u003ca href=\"http:\/\/www.apple.com\/quicktime\/download\/\"\u003eGet the latest version of QuickTime\u003c\/a\u003e\n    \u003c\/div\u003e\n\u003c\/div\u003e\u003c\/div\u003e");



      yt.embed.writeEmbed();
  </script>





</body>
</html>
<!--
     FILE ARCHIVED ON 06:03:32 Dec 01, 2012 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 00:46:31 Dec 28, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
-->
<!--
playback timings (ms):
  captures_list: 97.153
  exclusion.robots: 0.084
  exclusion.robots.policy: 0.078
  RedisCDXSource: 1.592
  esindex: 0.008
  LoadShardBlock: 73.211 (3)
  PetaboxLoader3.datanode: 51.742 (4)
  CDXLines.iter: 19.465 (3)
  load_resource: 62.458
  PetaboxLoader3.resolve: 23.734
-->