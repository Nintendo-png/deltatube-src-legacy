<?php 
	require_once($_SERVER['DOCUMENT_ROOT'] . "/important/function.php"); 
	$initvid = new video_tools;
	$initusr = new user_tools;
	$initgnt = new general_tools;
	if(!isset($_GET['v'])) { include('404.php'); die(); }
    if($initvid->validate_video_id($_GET['v']) == 0) { include('404.php'); die(); }
	$video_info = json_decode($initvid->get_video_details($_GET['v'], 0), true);
	$getuname = htmlspecialchars($initusr->get_uname_by($video_info['uid'])); 
	if(isset($_COOKIE['sessionuser'])) { 
	$getuid = $initusr->get_uid_by($_COOKIE['sessionuser']); 
	if($getuid == $video_info['uid']) {
		$owner = 1;
	} else {
		$owner = 0;
	}
	} else {
		$owner = 0;
	}
?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>

	<title><?php echo $video_info['vtitle']; ?> - JarkTube</title>
	<link rel="icon" href="/yts/img/favicon-vfldLzJxy.ico" type="image/x-icon">
	<link rel="shortcut icon" href="/yts/img/favicon-vfldLzJxy.ico" type="image/x-icon">
	<meta name="description" content="An Hitchhiker 2013 YouTube revival">
	<meta name="keywords" content="video, sharing, camera phone, video phone, free, upload">
	<link id="css-4115735524" rel="stylesheet" href="/yts/cssbin/www-hitchhiker-vflTcqmWD.css">
			   <link id="css-3965215878" rel="stylesheet" href="//s.ytimg.com/yts/cssbin/www-player-vfl4CRo3S.css">
	<link id="css-583125701" rel="stylesheet" href="/yts/cssbin/www-the-rest-vflzYVqky.css">	
	<link id="css-3687597597" rel="stylesheet" href="/yts/cssbin/www-home-c4-vfl4MbzOD.css">	
	      <link id="css-699966100" rel="stylesheet" href="//s.ytimg.com/yts/cssbin/www-watch-inlineedit-vflg-l3kd.css">	   
		  <script id="js-528919983" src="/yts/jsbin/www-core-vflG1GmWt.js" data-loaded="true"></script>
      <link id="css-1181818654" rel="stylesheet" href="//s.ytimg.com/yts/cssbin/www-watch-transcript-vfl-zKZyz.css">    
    <script id="js-1886910086" src="//s.ytimg.com/yts/jsbin/www-watch7-core-vflzdEjU1.js" data-loaded="true"></script>
    <script id="js-77811903" src="//s.ytimg.com/yts/jsbin/www-embed_core_module-vflZkW0CI.js" data-loaded="true"></script>

<meta property="og:url" content="https://jark.succulent64.ml/watch?v=<?php echo $_GET['v']; ?>">
    <meta property="og:title" content="<?php echo $video_info['vtitle']; ?>">
    <meta property="og:description" content="<?php echo $video_info['vdesc']; ?>">
    <meta property="og:type" content="video">
    <meta property="og:image" content="https://jark.succulent64.ml/ytd/thumb/<?php echo $_GET['v']; ?>.png">
      <meta property="og:video" content="https://jark.succulent64.ml/ytd/video/<?php echo $_GET['v']; ?>.mp4">
      <meta property="og:video:type" content="video/mp4">
      <meta property="og:video:width" content="1080">
      <meta property="og:video:height" content="720">

	</head>

<body class="ltr exp-new-site-width exp-watch7-comment-ui site-left-aligned hitchhiker-enabled guide-enabled guide-expanded" dir="ltr">
	<div id="body-container">
		<!-- begin page -->
		<?php require_once($_SERVER['DOCUMENT_ROOT'] . "/yts/modbin/header.php"); ?>
	<div id="alerts"></div>
		<div id="header"></div>
		<div id="page-container">
	<div id="page" class="  watch  ">
		<div id="guide">
		
			<div id="guide-container" class="collapsible-guide">
			
				<div id="guide-main" class="guide-module spf-nolink collapsed" data-orientation="vertical" data-position="bottomright" data-force-position="true" data-click-outside-persists="true" data-card-class="watch7-card-promo">
				
					<div class="guide-module-toggle"> <span class="guide-module-toggle-icon">
            <span class="guide-module-toggle-arrow"></span> <img src="/yts/img/pixel-vfl3z5WfW.gif" alt=""> <img src="/yts/img/pixel-vfl3z5WfW.gif" alt="" id="collapsed-notification-icon"> </span>
						<div class="guide-module-toggle-label">
							<h3>
              <span>
				Guide 
				<span class="yt-badge-new">new</span>
              </span>
			  
            </h3> </div>
			
					</div>
					
					
			<?php require_once($_SERVER['DOCUMENT_ROOT'] . "/yts/modbin/guide-module.php"); ?>
			
				</div>
				
				<div id="watch-context-container" class="guide-module hid  collapsed" data-orientation="vertical" data-position="bottomright" data-force-position="true" data-click-outside-persists="true" data-card-class="watch7-card-promo"> </div>
			</div>
		</div>
		<div id="content">
				<div id="watch7-video-container">
					<div id="watch7-video" class="">
					
          <script>
if (window.yt.timing) {yt.timing.tick("bf");}    </script>

          <div id="watch7-player" class="html5-video-player">
		  <div id="video-player" class="html5-video-player" style="display: none;" tabindex="-1">
      <style class="html5-viewport-sheet" disabled="true">
    @-o-viewport { width: device-width; }
    @-moz-viewport { width: device-width; }
    @-ms-viewport { width: device-width; }
    @-webkit-viewport { width: device-width; }
    @viewport { width: device-width; }
  </style>

      <div class="html5-video-fallback html5-stop-propagation" style="display: none;">
    <div class="html5-video-fallback-content">
      This video is currently unavailable.
    </div>
  </div>

    <div class="html5-video-container">
        <div class="html5-modal-panel html5-stop-propagation hid">
    <div class="html5-modal-panel-clipboard-substitute-content">
      <input type="text" readonly="readonly"></input>
    </div>
    <div class="html5-modal-panel-infobox-content">
    </div>
    <button onclick="return false;" type="button" class="html5-modal-panel-close-button" role="button">
Close
    </button>
    <div class="html5-show-video-info-template hid">
      <table class="html5-video-info-table">
        <tr><th>Video ID:</th><td>__videoId__</td></tr>
        <tr><th>Dimensions:</th><td>__videoWidth__x__videoHeight__</td></tr>
        <tr><th>Volume:</th><td>__volume__%</td></tr>
        <tr><th>Stream Type:</th><td>__streamType__</td></tr>
      </table>
      &nbsp;
      <table class="html5-video-info-table html5-video-element-info-table">
        <tr><th>Decoded Frames</th><th>Dropped Frames</th><th>Parsed Frames</th><th>Presented Frames</th></tr>
        <tr><td>__decodedFrames__</td><td>__droppedFrames__</td><td>__parsedFrames__</td><td>__presentedFrames__</td></tr>
        <tr><th>Video Bytes Decoded</th><th>Audio Bytes Decoded</th><th>Painted Frames</th><th>Paint Delay</th></tr>
        <tr><td>__videoBytesDecoded__</td><td>__audioBytesDecoded__</td><td>__paintedFrames__</td><td>__paintDelay__</td></tr>
      </table>
    </div>
  </div>

        <div class="html5-dialog-holder html5-center-overlay html5-center-transform">
      <div class="captions-translation-dialog html5-popup-dialog html5-stop-propagation hid">
    <div class="html5-popup-dialog-title">
      <h3>Translate...</h3>
      <span class="html5-beta-label">BETA</span>
    </div>
    <select class="captions-translation-select"></select>
    <div class="html5-popup-dialog-buttons">
      <button type="button" class="captions-translation-confirm yt-uix-button yt-uix-button-default" onclick=";return false;" role="button"><span class="yt-uix-button-content">OK </span></button>
      <button type="button" class="captions-translation-cancel yt-uix-button yt-uix-button-default" onclick=";return false;" role="button"><span class="yt-uix-button-content">Cancel </span></button>
    </div>
  </div>
  <div class="captions-settings-dialog html5-popup-dialog html5-stop-propagation hid">
    <div class="html5-popup-dialog-title">
      <h3>Caption Settings</h3>
    </div>
    <div class="html5-popup-dialog-body">
      <div class="html5-popup-grouping">
        <form class="html5-popup-side-left">
          <p>Background - Shortcut: b</p>
            <ul class="captions-settings-background-opacity">
    
    
    
      <li>
          <span class="yt-uix-form-input-radio-container captions-settings-background-opacity-radio"><input type="radio" name="background-opacity" class="yt-uix-form-input-radio" name="background-opacity" id="captions-settings-background-opacity: 0.0" value="0.0"><span class="yt-uix-form-input-radio-element"></span></span>

        <label for="captions-settings-background-opacity: 0.0" aria-label="background: Transparent">Transparent</label>
      </li>
      <li>
          <span class="yt-uix-form-input-radio-container captions-settings-background-opacity-radio"><input type="radio" name="background-opacity" class="yt-uix-form-input-radio" name="background-opacity" id="captions-settings-background-opacity: 0.5" value="0.5"><span class="yt-uix-form-input-radio-element"></span></span>

        <label for="captions-settings-background-opacity: 0.5" aria-label="background: Semi-Transparent">Semi-Transparent</label>
      </li>
      <li>
          <span class="yt-uix-form-input-radio-container captions-settings-background-opacity-radio"><input type="radio" name="background-opacity" class="yt-uix-form-input-radio" name="background-opacity" id="captions-settings-background-opacity: 1.0" value="1.0"><span class="yt-uix-form-input-radio-element"></span></span>

        <label for="captions-settings-background-opacity: 1.0" aria-label="background: Opaque">Opaque</label>
      </li>
  </ul>

        </form>
        <form class="html5-popup-side-left">
          <p>Text - Shortcut: o</p>
            <ul class="captions-settings-text-opacity">
    
    
    
      <li>
          <span class="yt-uix-form-input-radio-container captions-settings-text-opacity-radio"><input type="radio" name="text-opacity" class="yt-uix-form-input-radio" name="text-opacity" id="captions-settings-text-opacity: 0.0" value="0.0"><span class="yt-uix-form-input-radio-element"></span></span>

        <label for="captions-settings-text-opacity: 0.0" aria-label="text: Transparent">Transparent</label>
      </li>
      <li>
          <span class="yt-uix-form-input-radio-container captions-settings-text-opacity-radio"><input type="radio" name="text-opacity" class="yt-uix-form-input-radio" name="text-opacity" id="captions-settings-text-opacity: 0.5" value="0.5"><span class="yt-uix-form-input-radio-element"></span></span>

        <label for="captions-settings-text-opacity: 0.5" aria-label="text: Semi-Transparent">Semi-Transparent</label>
      </li>
      <li>
          <span class="yt-uix-form-input-radio-container captions-settings-text-opacity-radio"><input type="radio" name="text-opacity" class="yt-uix-form-input-radio" name="text-opacity" id="captions-settings-text-opacity: 1.0" value="1.0"><span class="yt-uix-form-input-radio-element"></span></span>

        <label for="captions-settings-text-opacity: 1.0" aria-label="text: Opaque">Opaque</label>
      </li>
  </ul>

        </form>
        <form class="html5-popup-side-left">
          <p>Window - Shortcut: w</p>
            <ul class="captions-settings-window-opacity">
    
    
    
      <li>
          <span class="yt-uix-form-input-radio-container captions-settings-window-opacity-radio"><input type="radio" name="window-opacity" class="yt-uix-form-input-radio" name="window-opacity" id="captions-settings-window-opacity: 0.0" value="0.0"><span class="yt-uix-form-input-radio-element"></span></span>

        <label for="captions-settings-window-opacity: 0.0" aria-label="window: Transparent">Transparent</label>
      </li>
      <li>
          <span class="yt-uix-form-input-radio-container captions-settings-window-opacity-radio"><input type="radio" name="window-opacity" class="yt-uix-form-input-radio" name="window-opacity" id="captions-settings-window-opacity: 0.5" value="0.5"><span class="yt-uix-form-input-radio-element"></span></span>

        <label for="captions-settings-window-opacity: 0.5" aria-label="window: Semi-Transparent">Semi-Transparent</label>
      </li>
      <li>
          <span class="yt-uix-form-input-radio-container captions-settings-window-opacity-radio"><input type="radio" name="window-opacity" class="yt-uix-form-input-radio" name="window-opacity" id="captions-settings-window-opacity: 1.0" value="1.0"><span class="yt-uix-form-input-radio-element"></span></span>

        <label for="captions-settings-window-opacity: 1.0" aria-label="window: Opaque">Opaque</label>
      </li>
  </ul>

        </form>
        <p class="html5-popup-side-right">
          <button type="button" class="captions-settings-font-inc yt-uix-button yt-uix-button-default yt-uix-tooltip" onclick=";return false;" title="Increase font size" role="button" aria-label="Increase font size"><span class="yt-uix-button-content">+ </span></button>
          <button type="button" class="captions-settings-font-dec yt-uix-button yt-uix-button-default yt-uix-tooltip" onclick=";return false;" title="Decrease font size" role="button" aria-label="Decrease font size"><span class="yt-uix-button-content">- </span></button>
Shortcut: +/-
        </p>
      </div>
      <div class="html5-popup-grouping">
        <div class="html5-popup-side-left">
          <div class="html5-popup-grouping captions-settings-color-picker-group">
            <p class="html5-popup-side-left">
Foreground
            </p>
            <p class="html5-popup-side-right">
                  <button data-color="#080808" style="background: #080808" onclick=";return false;" type="button" class="html5-color-picker-button yt-uix-button yt-uix-button-default yt-uix-button-empty" role="button" aria-label="color #080808"></button>
    <button data-color="#00f" style="background: #00f" onclick=";return false;" type="button" class="html5-color-picker-button yt-uix-button yt-uix-button-default yt-uix-button-empty" role="button" aria-label="color #00f"></button>
    <button data-color="#0f0" style="background: #0f0" onclick=";return false;" type="button" class="html5-color-picker-button yt-uix-button yt-uix-button-default yt-uix-button-empty" role="button" aria-label="color #0f0"></button>
    <button data-color="#0ff" style="background: #0ff" onclick=";return false;" type="button" class="html5-color-picker-button yt-uix-button yt-uix-button-default yt-uix-button-empty" role="button" aria-label="color #0ff"></button>
    <button data-color="#f00" style="background: #f00" onclick=";return false;" type="button" class="html5-color-picker-button yt-uix-button yt-uix-button-default yt-uix-button-empty" role="button" aria-label="color #f00"></button>
    <button data-color="#f0f" style="background: #f0f" onclick=";return false;" type="button" class="html5-color-picker-button yt-uix-button yt-uix-button-default yt-uix-button-empty" role="button" aria-label="color #f0f"></button>
    <button data-color="#ff0" style="background: #ff0" onclick=";return false;" type="button" class="html5-color-picker-button yt-uix-button yt-uix-button-default yt-uix-button-empty" role="button" aria-label="color #ff0"></button>
    <button data-color="#fff" style="background: #fff" onclick=";return false;" type="button" class="html5-color-picker-button yt-uix-button yt-uix-button-default yt-uix-button-empty" role="button" aria-label="color #fff"></button>

            </p>
          </div>
          <div class="html5-popup-grouping captions-settings-color-picker-group">
            <p class="html5-popup-side-left">
Background
            </p>
            <p class="html5-popup-side-right">
                  <button style="background: #080808" onclick=";return false;" type="button" class="html5-color-picker-button yt-uix-button yt-uix-button-default yt-uix-button-empty" data-background="#080808" role="button" aria-label="background #080808"></button>
    <button style="background: #00f" onclick=";return false;" type="button" class="html5-color-picker-button yt-uix-button yt-uix-button-default yt-uix-button-empty" data-background="#00f" role="button" aria-label="background #00f"></button>
    <button style="background: #0f0" onclick=";return false;" type="button" class="html5-color-picker-button yt-uix-button yt-uix-button-default yt-uix-button-empty" data-background="#0f0" role="button" aria-label="background #0f0"></button>
    <button style="background: #0ff" onclick=";return false;" type="button" class="html5-color-picker-button yt-uix-button yt-uix-button-default yt-uix-button-empty" data-background="#0ff" role="button" aria-label="background #0ff"></button>
    <button style="background: #f00" onclick=";return false;" type="button" class="html5-color-picker-button yt-uix-button yt-uix-button-default yt-uix-button-empty" data-background="#f00" role="button" aria-label="background #f00"></button>
    <button style="background: #f0f" onclick=";return false;" type="button" class="html5-color-picker-button yt-uix-button yt-uix-button-default yt-uix-button-empty" data-background="#f0f" role="button" aria-label="background #f0f"></button>
    <button style="background: #ff0" onclick=";return false;" type="button" class="html5-color-picker-button yt-uix-button yt-uix-button-default yt-uix-button-empty" data-background="#ff0" role="button" aria-label="background #ff0"></button>
    <button style="background: #fff" onclick=";return false;" type="button" class="html5-color-picker-button yt-uix-button yt-uix-button-default yt-uix-button-empty" data-background="#fff" role="button" aria-label="background #fff"></button>

            </p>
          </div>
          <div class="html5-popup-grouping captions-settings-color-picker-group">
            <p class="html5-popup-side-left">
Window
            </p>
            <p class="html5-popup-side-right">
                  <button style="background: #080808" onclick=";return false;" data-windowcolor="#080808" type="button" class="html5-color-picker-button yt-uix-button yt-uix-button-default yt-uix-button-empty" role="button" aria-label="windowColor #080808"></button>
    <button style="background: #00f" onclick=";return false;" data-windowcolor="#00f" type="button" class="html5-color-picker-button yt-uix-button yt-uix-button-default yt-uix-button-empty" role="button" aria-label="windowColor #00f"></button>
    <button style="background: #0f0" onclick=";return false;" data-windowcolor="#0f0" type="button" class="html5-color-picker-button yt-uix-button yt-uix-button-default yt-uix-button-empty" role="button" aria-label="windowColor #0f0"></button>
    <button style="background: #0ff" onclick=";return false;" data-windowcolor="#0ff" type="button" class="html5-color-picker-button yt-uix-button yt-uix-button-default yt-uix-button-empty" role="button" aria-label="windowColor #0ff"></button>
    <button style="background: #f00" onclick=";return false;" data-windowcolor="#f00" type="button" class="html5-color-picker-button yt-uix-button yt-uix-button-default yt-uix-button-empty" role="button" aria-label="windowColor #f00"></button>
    <button style="background: #f0f" onclick=";return false;" data-windowcolor="#f0f" type="button" class="html5-color-picker-button yt-uix-button yt-uix-button-default yt-uix-button-empty" role="button" aria-label="windowColor #f0f"></button>
    <button style="background: #ff0" onclick=";return false;" data-windowcolor="#ff0" type="button" class="html5-color-picker-button yt-uix-button yt-uix-button-default yt-uix-button-empty" role="button" aria-label="windowColor #ff0"></button>
    <button style="background: #fff" onclick=";return false;" data-windowcolor="#fff" type="button" class="html5-color-picker-button yt-uix-button yt-uix-button-default yt-uix-button-empty" role="button" aria-label="windowColor #fff"></button>

            </p>
          </div>
        </div>
        <div class="captions-settings-drop-down-group">
          <div class="html5-popup-grouping captions-settings-char-edge-style-group">
            <p class="html5-popup-side-left">
Character Edge Style
            </p>
            <p class="html5-popup-side-right">
              <span class="yt-uix-form-input-select captions-settings-char-edge-style"><span class="yt-uix-form-input-select-content"><img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="yt-uix-form-input-select-arrow"><span class="yt-uix-form-input-select-value"></span></span><select class="yt-uix-form-input-select-element captions-settings-char-edge-style-select">  <option value="none">
None
  </option>
  <option value="dropShadow">
Drop Shadow
  </option>
  <option value="raised">
Raised
  </option>
  <option value="depressed">
Depressed
  </option>
  <option value="uniform">
Uniform
  </option>
</select></span>
            </p>
          </div>
          <div class="html5-popup-grouping captions-settings-font-family-group">
            <p class="html5-popup-side-left">
Font Family
            </p>
            <p class="html5-popup-side-right">
              <span class="yt-uix-form-input-select captions-settings-font-family"><span class="yt-uix-form-input-select-content"><img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="yt-uix-form-input-select-arrow"><span class="yt-uix-form-input-select-value"></span></span><select class="yt-uix-form-input-select-element captions-settings-font-family-select">  <option value="monoSerif">
Monospaced Serif
  </option>
  <option value="propSerif">
Proportional Serif
  </option>
  <option value="monoSans">
Monospaced Sans-Serif
  </option>
  <option value="propSans">
Proportional Sans-Serif
  </option>
  <option value="casual">
Casual
  </option>
  <option value="cursive">
Cursive
  </option>
  <option value="smallCaps">
Small Capitals
  </option>
</select></span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="html5-popup-grouping html5-popup-dialog-buttons captions-settings-dialog-buttons">
      <p class="html5-popup-side-left">
      </p>
      <button type="button" class="captions-settings-cancel yt-uix-button yt-uix-button-default" onclick=";return false;" role="button"><span class="yt-uix-button-content">Reset </span></button>
      <button type="button" class="captions-settings-confirm yt-uix-button yt-uix-button-default" onclick=";return false;" role="button"><span class="yt-uix-button-content">Done </span></button>
    </div>
  </div>

      <div class="threed-html5-warning-dialog html5-popup-dialog html5-stop-propagation hid">
    <div class="html5-popup-dialog-title">
      <h3>No HTML5 3D hardware detected</h3>
    </div>
    <div class="html5-popup-dialog-body">
      <p>
Get <a href="//web.archive.org/web/20121201043430/http://support.google.com/youtube/bin/answer.py?answer=1229982&amp;hl=en-US">help setting up HTML5 3D</a>, or change 3D viewing modes.
      </p>
    </div>
    <div class="html5-popup-dialog-buttons">
      <button href="#" type="button" class="html5-threed-dialog-change-mode-button yt-uix-button yt-uix-button-default" onclick=";window.location.href=this.getAttribute('href');return false;" role="button"><span class="yt-uix-button-content">Change 3D viewing mode </span></button>
      <button type="button" class="threed-html5-warning-close yt-uix-button yt-uix-button-default" onclick=";return false;" role="button"><span class="yt-uix-button-content">Close </span></button>
    </div>
  </div>

  </div>

        <div class="html5-video-content"></div>

        <div class="video-annotations">
    <div class="annotation-close-button-container hid">
      <svg class="annotation-close-button" width="100%" height="100%" viewbox="0 0 21 21">
        <circle cx="10" cy="10" r="8"/>
        <path d="M 7,7 L 13,13"/>
        <path d="M 7,13 L 13,7"/>
      </svg>
    </div>
    <svg class="countdowntimer hid" width="60" height="60">
      <g>
        <circle cx="30" cy="30" r="15" class="countdowntimer-background-circle"/>
        <path d="M30,30 z" class="countdowntimer-diminishing-pieslice"/>
        <circle cx="30" cy="30" r="4" class="countdowntimer-middle-dot"/>
      </g>
    </svg>
  </div>

        <div class="video-ads">
    <div class="video-ad-status-bar">
      <div class="video-ad-label">Advertisement</div>
      <div class="video-ad-time-left"></div>
        <div class="html5-progress-bar html5-stop-propagation">
    <div class="html5-ad-progress-list html5-progress-list html5-progress-item"></div>
  </div>

    </div>
    <div class="ad-container"></div>
  </div>

        <div class="html5-video-loader html5-center-overlay hid"></div>

        <div class="html5-info-bar html5-stop-propagation">
    <div class="html5-title" tabindex="1"></div>
    <div class="html5-info-bar-buttons">
      <button type="button" class="html5-more-info-button html5-control-right html5-control-sep-left yt-uix-button yt-uix-button-player" onclick=";return false;" role="button"><span class="yt-uix-button-icon-wrapper"><img class="yt-uix-button-icon yt-uix-button-icon-html5" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt=""><span class="yt-uix-button-valign"></span></span><span class="yt-uix-button-content">More info </span></button>

      <button type="button" class="html5-share-button html5-text-button html5-control-right html5-control-sep-left hid yt-uix-button yt-uix-button-player" onclick=";return false;" role="button"><span class="yt-uix-button-content">Share </span></button>


      <div class="html5-like-dislike-buttons hid">
        <button type="button" class="html5-dislike-button html5-control-right yt-uix-button yt-uix-button-player yt-uix-tooltip yt-uix-button-empty" onclick=";return false;" title="Dislike" role="button" aria-label="Dislike"><span class="yt-uix-button-icon-wrapper"><img class="yt-uix-button-icon yt-uix-button-icon-html5" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="Dislike"><span class="yt-uix-button-valign"></span></span></button>
        <button type="button" class="html5-like-button html5-control-right html5-control-sep-left yt-uix-button yt-uix-button-player" onclick=";return false;" role="button"><span class="yt-uix-button-icon-wrapper"><img class="yt-uix-button-icon yt-uix-button-icon-html5" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt=""><span class="yt-uix-button-valign"></span></span><span class="yt-uix-button-content">Like </span></button>
      </div>
      <div class="html5-info-bar-logo hid">YouTube</div>
    </div>
      <div class="html5-info-panel">
    <div class="html5-info-panel-loading-icon">
      <div class="html5-info-panel-loader hid"></div>
    </div>

    <div class="html5-info-panel-content hid">
      <div class="html5-author">
        <div class="html5-author-img">
          <span class="video-thumb ux-thumb yt-thumb-default-138 "><span class="yt-thumb-clip"><span class="yt-thumb-clip-inner"><img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="Thumbnail" width="138"><span class="vertical-align"></span></span></span></span>
        </div>
        <div class="html5-author-info">
          <div class="html5-author-name"></div>
          <div class="html5-subscriber-count"></div>
        </div>
      </div>

      <span class="enable-fancy-subscribe-button">
        <span class="yt-uix-button-context-light yt-uix-button-subscription-container"><button href="" onclick=";return false;" type="button" class="yt-subscription-button yt-subscription-button-js-default html5-subscribe-button yt-uix-button-dark  yt-uix-button yt-uix-button-subscription" data-subscription-feature="" data-sessionlink="ei=CN3t7MGw-LMCFRYSIQodyjSJOw%3D%3D" data-subscription-value="id" data-subscription-type="" role="button"><span class="yt-uix-button-icon-wrapper"><img class="yt-uix-button-icon yt-uix-button-icon-subscribe" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt=""><span class="yt-uix-button-valign"></span></span><span class="yt-uix-button-content">  <span class="subscribe-label">Subscribe</span>
  <span class="subscribed-label">Subscribed</span>
  <span class="unsubscribe-label">Unsubscribe</span>
 </span></button><span class="yt-subscription-button-disabled-mask"></span></span>
      </span>

      <div class="html5-video-info">
        <div class="html5-view-count"></div>
          <div class="video-extras-sparkbars">
    <div class="video-extras-sparkbar-likes" style="width: 0%"></div>
    <div class="video-extras-sparkbar-dislikes" style="width: 0%"></div>
  </div>
  <span class="video-extras-likes-dislikes">
    
  </span>

      </div>

      <p class="html5-description-text"></p>
    </div>
  </div>

  </div>

        <img class="html5-watermark html5-stop-propagation html5-scalable-icon hid" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="watermark">

          <style>
    .html5-overlay-button-background {
      fill: url(/web/20121201043430im_/http://www.youtube.com/html5_player_template#html5-big-play-button-black);
    }
    .html5-video-player:hover .html5-overlay-button-background {
      fill: url(/web/20121201043430im_/http://www.youtube.com/html5_player_template#html5-big-play-button-red);
    }
    </style>
    <svg class="html5-big-play-button html5-center-overlay html5-scalable-icon">
      <path fill="#380308" d="M89.2,34.4c-0.064,2.649-0.265,5.434-0.6,8.35c-0.467,3.733-1.05,6.867-1.75,9.4
c-1.4,5.133-4.4,8.184-9,9.149c-3.533,0.733-7.6,1.217-12.2,1.45c-4.033,0.233-9.867,0.35-17.5,0.35H40.1
c-10.567,0-20.133-0.6-28.7-1.8c-4.467-0.667-7.467-3.716-9-9.149c-0.7-2.533-1.267-5.667-1.7-9.4
c-0.361-2.916-0.578-5.699-0.65-8.35c0.122,2.316,0.338,4.733,0.65,7.25c0.433,3.732,1,6.866,1.7,9.399
c1.533,5.435,4.533,8.483,9,9.15c8.567,1.2,18.133,1.8,28.7,1.8h8.05c7.633,0,13.467-0.117,17.5-0.35
c4.6-0.233,8.667-0.718,12.2-1.45c4.6-0.967,7.6-4.018,9-9.15c0.7-2.533,1.283-5.667,1.75-9.399
C88.89,39.134,89.089,36.717,89.2,34.4z"/>
      <path class="html5-overlay-button-background" d="M86.85,10.9c0.7,2.532,1.283,5.684,1.75,9.449c0.433,3.733,0.65,7.268,0.65,10.601V31
c0,3.333-0.217,6.883-0.65,10.65c-0.467,3.732-1.05,6.866-1.75,9.399c-1.4,5.133-4.4,8.185-9,9.15
c-3.533,0.732-7.6,1.216-12.2,1.45C61.617,61.883,55.783,62,48.15,62H40.1c-10.567,0-20.133-0.6-28.7-1.8
c-4.467-0.667-7.467-3.717-9-9.15c-0.7-2.533-1.267-5.667-1.7-9.399C0.233,37.883,0,34.333,0,31v-0.05
c0-3.333,0.233-6.867,0.7-10.601c0.433-3.767,1-6.917,1.7-9.449c1.4-5.134,4.4-8.184,9-9.15c3.5-0.7,7.567-1.183,12.2-1.45
C27.533,0.1,33.367,0,41.1,0h8.05c10.8,0,20.367,0.583,28.7,1.75C82.317,2.417,85.317,5.467,86.85,10.9z"/>
      <g viewbox="-15.025 -15.151 30.05 30.303" transform="matrix(1 0 0 -1 47.375 29.75)">
        <path fill="#FCFCFC" d="M10.275,4c3.167-1.866,4.75-3.199,4.75-4c0-0.8-1.583-2.149-4.75-4.05
                                c-1.367-0.8-4.517-2.482-9.45-5.05c-4.5-2.333-7.233-3.733-8.2-4.2c-2.533-1.232-4.066-1.85-4.6-1.85
                                c-1.233-0.033-2.083,0.399-2.55,1.3c-0.333,0.667-0.5,1.75-0.5,3.25v21.2c0,1.5,0.167,2.583,0.5,3.25
                                c0.467,0.899,1.317,1.333,2.55,1.3c0.534,0,2.067-0.617,4.6-1.85c0.967-0.468,3.7-1.867,8.2-4.2C5.758,6.533,8.908,4.833,10.275,4
                                z"/>
      </g>
      <defs>
        <lineargradient id="html5-big-play-button-red" gradientunits="userSpaceOnUse" x1="44.625" y1="0" x2="44.625" y2="62">
          <stop offset="0" style="stop-color:#CD332D"/>
          <stop offset="0.8549" style="stop-color:#6E0610"/>
        </lineargradient>
        <lineargradient id="html5-big-play-button-black" gradientunits="userSpaceOnUse" x1="44.625" y1="0" x2="44.625" y2="62">
          <stop offset="0" style="stop-color:#3E3D3D"/>
          <stop offset="0.7451" style="stop-color:#131313"/>
        </lineargradient>
      </defs>
    </svg>

        <div class="html5-endscreen">
    <div class="html5-endscreen-content"></div>

    <div class="videowall-still-content-template">
      <!--
        <span class="videowall-still-featured-label">Featured video</span>
        <span class="videowall-info">__info__</span>
      -->
    </div>
    <div class="videowall-info-template">
      <!--
        <span class="videowall-info-title">__title__</span>
        <span class="videowall-info-author">__author__</span>
        <span class="videowall-info-duration">__duration__</span>
        <span class="videowall-info-view-count">__view_count__</span>
      -->
    </div>
  </div>

        <ul class="html5-context-menu yt-uix-button-menu hid">
    <li>
      <span class="yt-uix-button-menu-item html5-context-menu-copy-video-url">Copy video URL</span>
    </li>
    <li>
      <span class="yt-uix-button-menu-item html5-context-menu-copy-video-url-at-current-time">Copy video URL at current time</span>
    </li>
    <li>
      <span class="yt-uix-button-menu-item html5-context-menu-copy-embed-html">Copy embed HTML</span>
    </li>
    <li>
      <span class="yt-uix-button-menu-item html5-context-menu-report-playback-issue">Report playback issue</span>
    </li>
    <li>
      <span class="yt-uix-button-menu-item html5-context-menu-copy-debug-info">Copy debug info</span>
    </li>
    <li>
      <span class="yt-uix-button-menu-item html5-context-menu-stop-download">Stop download</span>
    </li>
    <li>
      <span class="yt-uix-button-menu-item html5-context-menu-pop-out">Pop out</span>
    </li>
    <li>
      <a class="yt-uix-button-menu-item" target="_blank" href="/web/20121201043430/http://www.youtube.com/my_speed">Take speed test</a>
    </li>
    <li>
      <span class="yt-uix-button-menu-item html5-context-menu-show-video-info">Show video info</span>
    </li>
    <li>
      <a class="yt-uix-button-menu-item" target="_blank" href="/web/20121201043430/http://www.youtube.com/html5">About HTML5</a>
    </li>
  </ul>

        <div class="html5-ypc-module">
    <div class="html5-ypc-overlay html5-stop-propagation">
      <div class="html5-ypc-message"></div>
      <button class="html5-ypc-purchase"></button>
      <button class="html5-module-close html5-stop-propagation"></button>
    </div>
    <button class="html5-module-recall html5-stop-propagation"></button>
  </div>

      <div class="html5-fresca-module html5-stop-propagation"><div class="html5-fresca-band-slate"><hgroup class="html5-fresca-message"></hgroup><span class="html5-fresca-countdown"></span></div></div><div class="html5-fresca-template"><!--<h2 class="html5-fresca-heading">__heading__</h2><h3 class="html5-fresca-subheading">__subheading__</h3><h4 class="html5-fresca-long-text">__long_text__</h4>--></div>
    </div>
    <div class="html5-video-controls">
        <div class="html5-progress-bar html5-stop-propagation">
    <div class="html5-progress-bar-inner">
      <div class="html5-scrubber-track">
        <div class="html5-scrubber-button html5-draggable html5-progress-item"></div>
      </div>
      <div class="html5-progress-list html5-progress-item">
        <div class="html5-play-progress html5-progress-section"></div>
        <div class="html5-load-progress html5-progress-section"></div>
      </div>
      <div class="html5-ad-progress-list html5-progress-list html5-progress-item"></div>
      <div class="html5-progress-screenreader" aria-live="assertive"></div>
    </div>
  </div>
  <div class="html5-progress-tooltip hid">
    <img class="html5-progress-tooltip-thumbnail" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif">
    <span class="html5-progress-tooltip-timestamp"></span>
    <div class="html5-progress-tooltip-arrow"></div>
  </div>

        <div class="html5-playlist html5-stop-propagation">
    <div class="html5-playlist-info">
      <div class="html5-playlist-message"></div>
      <div class="html5-playlist-title"></div>
    </div>
    <div class="html5-playlist-pager">
      <button type="button" class="html5-playlist-pager-button html5-playlist-pager-button-left yt-uix-button yt-uix-button-player yt-uix-button-empty" onclick=";return false;" role="button"><span class="yt-uix-button-icon-wrapper"><img class="yt-uix-button-icon yt-uix-button-icon-html5" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt=""><span class="yt-uix-button-valign"></span></span></button>
      <button type="button" class="html5-playlist-pager-button html5-playlist-pager-button-right yt-uix-button yt-uix-button-player yt-uix-button-empty" onclick=";return false;" role="button"><span class="yt-uix-button-icon-wrapper"><img class="yt-uix-button-icon yt-uix-button-icon-html5" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt=""><span class="yt-uix-button-valign"></span></span></button>
    </div>
    <div class="html5-playlist-strip">
      <img class="html5-playlist-thumbnail" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif">
    </div>
  </div>

        <div class="html5-storyboard">
    <div class="html5-storyboard-filmstrip">
      <img class="html5-storyboard-thumbnail" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif">
    </div>
    <div class="html5-storyboard-lens">
      <img class="html5-storyboard-lens-thumbnail" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif">
      <span class="html5-storyboard-lens-timestamp"></span>
    </div>
  </div>

        <div class="html5-player-chrome html5-stop-propagation">
    <button data-title-default="Play" title="Play" class="html5-play-button html5-control html5-control-sep yt-uix-button yt-uix-button-player yt-uix-tooltip yt-uix-button-empty" data-title-replay="Replay" onclick=";return false;" data-title-pause="Pause" type="button" data-title-stop="Stop live playback" tabindex="3" role="button" aria-label="Play"><span class="yt-uix-button-icon-wrapper"><img class="yt-uix-button-icon yt-uix-button-icon-html5" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="Play"><span class="yt-uix-button-valign"></span></span></button>

    <div class="yt-uix-button yt-uix-button-player html5-volume-control html5-control html5-control-sep">
    <button data-title-default="Mute" title="Mute" data-title-alt="Unmute" onclick=";return false;" type="button" class="html5-volume-button yt-uix-button yt-uix-button-player yt-uix-tooltip yt-uix-button-empty" tabindex="4" role="button" aria-label="Mute toggle"><span class="yt-uix-button-icon-wrapper"><img class="yt-uix-button-icon yt-uix-button-icon-html5" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="Mute"><span class="yt-uix-button-valign"></span></span></button>

      <div class="html5-volume-panel" role="slider" tabindex="5" aria-valuemin="0" aria-valuemax="100">
        <div class="html5-volume-slider html5-draggable">
          <div class="html5-volume-slider-foreground"></div>
        </div>
      </div>
    </div>
    <div class="progress-text html5-control"><span class="current-time html5-current-time">0:00</span><span class="html5-time-separator"> / </span><span class="duration-time html5-duration-time">0:00</span><span class="html5-live-indicator hid">Live</span></div>


    <button data-title-default="Full screen" data-value="fullscreen" title="Full screen" data-title-alt="Exit full screen" onclick=";return false;" type="button" class="html5-fullscreen-button html5-control-right yt-uix-button yt-uix-button-player yt-uix-tooltip yt-uix-button-empty" tabindex="15" role="button" aria-label="Full screen"><span class="yt-uix-button-icon-wrapper"><img class="yt-uix-button-icon yt-uix-button-icon-html5" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="Full screen"><span class="yt-uix-button-valign"></span></span></button>


    <button onclick=";return false;" title="Watch later" type="button" class="html5-watch-later-button html5-control-right html5-control-sep yt-uix-button yt-uix-button-player yt-uix-tooltip yt-uix-button-empty" tabindex="11" role="button" aria-label="Watch later"><span class="yt-uix-button-icon-wrapper"><img class="yt-uix-button-icon yt-uix-button-icon-html5" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="Watch later"><span class="yt-uix-button-valign"></span></span></button>

    <button onclick=";return false;" title="Settings" type="button" class="html5-quality-button html5-control-right html5-control-sep yt-uix-button-reverse yt-uix-button-center-menu flip hid yt-uix-button yt-uix-button-player yt-uix-tooltip yt-uix-button-empty" tabindex="10" role="button" aria-pressed="false" aria-expanded="false" aria-haspopup="true" aria-activedescendant="" aria-label="Settings"><span class="yt-uix-button-icon-wrapper"><img class="yt-uix-button-icon yt-uix-button-icon-html5" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="Settings"><span class="yt-uix-button-valign"></span></span><img class="yt-uix-button-arrow" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt=""><div class=" yt-uix-button-menu yt-uix-button-menu-player" style="display: none;">  <div class="html5-settings-popup-menu html5-popup-menu list-style-menu">
    <ul class="html5-quality-popup-menu">
      <li class="html5-popup-menu-header">
Quality
      </li>
      <li class="yt-uix-button-menu-item" data-value="highres">
        <span>Original <sup>HD</sup></span>
      </li>
      <li class="yt-uix-button-menu-item" data-value="hd1080">
        <span class="yt-uix-button-menu-close">1080p <sup>HD</sup></span>
      </li>
      <li class="yt-uix-button-menu-item" data-value="hd720">
        <span class="yt-uix-button-menu-close">720p <sup>HD</sup></span>
      </li>
      <li class="yt-uix-button-menu-item" data-value="large">
        <span class="yt-uix-button-menu-close">480p</span>
      </li>
      <li class="yt-uix-button-menu-item" data-value="medium">
        <span class="yt-uix-button-menu-close">360p</span>
      </li>
      <li class="yt-uix-button-menu-item" data-value="small">
        <span class="yt-uix-button-menu-close">240p</span>
      </li>
      <li class="yt-uix-button-menu-item" data-value="tiny">
        <span class="yt-uix-button-menu-close">144p</span>
      </li>
      <li class="yt-uix-button-menu-item" data-value="auto">
        <span class="yt-uix-button-menu-close">Auto</span>
      </li>
    </ul>
    <ul class="html5-speed-popup-menu hid">
      <li class="html5-popup-menu-header">
Speed
      </li>
      <li class="yt-uix-button-menu-item" data-value="2.0">
        <span class="yt-uix-button-menu-close">2.0x</span>
      </li>
      <li class="yt-uix-button-menu-item" data-value="1.5">
        <span class="yt-uix-button-menu-close">1.5x</span>
      </li>
      <li class="yt-uix-button-menu-item" data-value="1.0">
        <span class="yt-uix-button-menu-close">Normal</span>
      </li>
      <li class="yt-uix-button-menu-item" data-value="0.5">
        <span class="yt-uix-button-menu-close">0.5x</span>
      </li>
      <li class="yt-uix-button-menu-item" data-value="0.25">
        <span class="yt-uix-button-menu-close">0.25x</span>
      </li>
    </ul>
  </div>
</div></button>

    <button onclick=";return false;" title="Captions" type="button" class="html5-captions-button html5-module-button html5-control-right yt-uix-button-reverse flip yt-uix-button yt-uix-button-player yt-uix-tooltip yt-uix-button-empty" tabindex="9" role="button" aria-pressed="false" aria-expanded="false" aria-haspopup="true" aria-activedescendant="" aria-label="Captions toggle"><img class="yt-uix-button-arrow" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt=""><div class=" yt-uix-button-menu yt-uix-button-menu-player" style="display: none;">  <ul class="html5-captions-popup-menu html5-popup-menu">
    <li>
      <div class="html5-captions-actions html5-popup-menu-item-group">
        <ul>
          <li class="yt-uix-button-menu-item" data-action="settings">
Settings...
          </li>
        </ul>
      </div>
      <div class="captions-transforms html5-captions-actions html5-popup-menu-item-group">
        <ul>
          <li class="yt-uix-button-menu-item" data-action="translate">
Translate Captions
            <span class="html5-beta-label">BETA</span>
          </li>
        </ul>
      </div>
      <form class="html5-captions-tracks html5-popup-menu-item-group">
        <ul></ul>
      </form>
      <div class="html5-captions-off html5-popup-menu-item-group">
        <ul>
          <li class="yt-uix-button-menu-item" data-action="captions-off">
Turn Captions Off
          </li>
        </ul>
      </div>
    </li>
  </ul>
</div></button>

    <button onclick=";return false;" title="Annotations" type="button" class="html5-annotations-button html5-control-right hid yt-uix-button yt-uix-button-player yt-uix-tooltip yt-uix-button-empty" tabindex="8" role="button" aria-label="Annotations"><span class="yt-uix-button-icon-wrapper"><img class="yt-uix-button-icon yt-uix-button-icon-html5" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="Annotations"><span class="yt-uix-button-valign"></span></span></button>

    <button type="button" class="html5-text-button html5-threed-button html5-control-right yt-uix-button-reverse flip hid yt-uix-button yt-uix-button-player" onclick=";return false;" tabindex="7" role="button" aria-pressed="false" aria-expanded="false" aria-haspopup="true" aria-activedescendant="" aria-label="3D"><span class="yt-uix-button-content">3D </span><img class="yt-uix-button-arrow" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt=""><div class=" yt-uix-button-menu yt-uix-button-menu-player" style="display: none;">  <ul class="html5-threed-popup-menu html5-popup-menu">
    <li class="yt-uix-button-menu-item">
      <a class="html5-threed-popup-menu-change-mode-link">Change 3D viewing mode...</a>
    </li>
    <li class="yt-uix-button-menu-item html5-threed-conversion-on hid">
Turn on converted 3D
    </li>
    <li class="yt-uix-button-menu-item html5-threed-conversion-off hid">
Turn off converted 3D
    </li>
  </ul>
</div></button>

    <button onclick=";return false;" title="Playlist" type="button" class="html5-playlist-button html5-control-right hid yt-uix-button yt-uix-button-player yt-uix-tooltip yt-uix-button-empty" tabindex="6" role="button" aria-label="Playlist"><span class="yt-uix-button-icon-wrapper"><img class="yt-uix-button-icon yt-uix-button-icon-html5" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="Playlist"><span class="yt-uix-button-valign"></span></span></button>

  </div>

    </div>
      <div id="html5-player-messages" class="hid">
    <div id="HTML5_DEFAULT_FALLBACK">This video is currently unavailable.</div>
    <div id="HTML5_NO_AVAILABLE_FORMATS_FALLBACK">Your browser does not currently recognize any of the video formats available.<br><a href="/web/20121201043430/http://www.youtube.com/html5">Click here to visit our frequently asked questions about HTML5 video.</a></div>
    <div id="FLASH_FALLBACK"><div class="yt-alert yt-alert-default yt-alert-error  yt-alert-player">  <div class="yt-alert-icon">
    <img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="icon master-sprite" alt="Alert icon">
  </div>
<div class="yt-alert-buttons"></div><div class="yt-alert-content" role="alert">    <span class="yt-alert-vertical-trick"></span>
    <div class="yt-alert-message">
            The Adobe Flash Player is required for video playback. <br> <a href="http://web.archive.org/web/20121201043430/http://get.adobe.com/flashplayer/">Get the latest Flash Player</a>
    </div>
</div></div></div>
    <div id="DEVICE_FALLBACK"><div class="yt-alert yt-alert-default yt-alert-error  yt-alert-player">  <div class="yt-alert-icon">
    <img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="icon master-sprite" alt="Alert icon">
  </div>
<div class="yt-alert-buttons"></div><div class="yt-alert-content" role="alert">    <span class="yt-alert-vertical-trick"></span>
    <div class="yt-alert-message">
            Sorry, this video is not available on this device.
    </div>
</div></div></div>
    <div id="HTML5_EMBED_MIN_SIZE_MESSAGE">Video player is too small.</div>

    <div id="HTML5_SPEED_NORMAL">Normal</div>
    <div id="HTML5_QUALITY_SETTING">quality</div>
    <div id="HTML5_SPEED_SETTING">speed</div>
    <div id="HTML5_VOLUME_SETTING">volume</div>
    <div id="HTML5_VOLUME_MUTED">muted</div>
    <div id="HTML5_VOLUME_MUTE">mute</div>
    <div id="HTML5_VOLUME_UNMUTE">unmute</div>
    <div id="HTML5_CONTROL_TOGGLE">toggle</div>

    <div id="HTML5_SUBS_TRANSCRIBED">transcribed</div>
      <div id="HTML5_SUBS_ASR">automatic captions</div>
    <div id="VISIT_ADVERTISERS_SITE">Visit advertiser's site</div>
    <div id="FRESCA_STARTING_SOON_MESSAGE">Starting soon...</div>
    <div id="FRESCA_COMPLETE_MESSAGE">Thanks for watching!</div>
    <div id="FRESCA_STAND_BY_MESSAGE">Please stand by.</div>

    <div id="ERROR_CANNOT_ACTIVATE_RENTAL">An error occurred when activating your rental. Please reload this page or try again later.</div>
    <div id="ERROR_NOT_SIGNED_IN">Please sign in to resume watching.</div>
    <div id="ERROR_RENTAL_EXPIRED">Your video rental has expired.</div>
    <div id="ERROR_STOPPED_BY_ANOTHER_PLAYBACK">Your account is playing this video in another location. Please reload this page to resume watching</div>
    <div id="ERROR_UNUSUAL_ACTIVITY">Due to unusual account activity, this video is not currently available.</div>
    <div id="ERROR_STREAMING_UNAVAILABLE">Video playback is unavailable right now because this video has been downloaded for offline viewing</div>
    <div id="ERROR_LICENSE">Sorry, there was an error licensing this video.</div>
  </div>

  </div>
  <div id="player" class="full-frame"></div>  
    
</div>
   

      <!-- begin watch-video-extra -->
      <div id="watch-video-extra">
        
        
      </div>
      <!-- end watch-video-extra -->
	   <?php if($owner == 1) { ?> <div id="watch7-creator-bar" class="clearfix yt-uix-button-panel">
<ul id="watch7-creator-bar-nav-buttons">
  <li class="creator-bar-item " >
    <a href="/my_videos" class="yt-uix-button   yt-uix-sessionlink yt-uix-button-dark"><span class="yt-uix-button-content">Video Manager</span></a>
  </li>
</ul><ul id="watch7-creator-bar-edit-buttons">  <li class="creator-bar-item yt-uix-tooltip yt-uix-tooltip-reverse" title="Info and Settings">
    <a href="/my_videos_edit?video_id=KvDfdCqjtXg" class="yt-uix-button yt-uix-sessionlink yt-uix-button-text-dark yt-uix-button-empty"><img class="yt-uix-button-icon yt-uix-button-icon-info" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt=""></a>
  </li>
  <li class="creator-bar-item yt-uix-tooltip yt-uix-tooltip-reverse" title="Audio">
    <a href="/audio?v=KvDfdCqjtXg" class="yt-uix-button yt-uix-sessionlink yt-uix-button-text-dark yt-uix-button-empty"><img class="yt-uix-button-icon yt-uix-button-icon-audio" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt=""></a>
  </li>
  <li class="creator-bar-item yt-uix-tooltip yt-uix-tooltip-reverse" title="Annotations">
    <a href="/my_videos_annotate?v=KvDfdCqjtXg" class="yt-uix-button yt-uix-sessionlink yt-uix-button-text-dark yt-uix-button-empty"><img class="yt-uix-button-icon yt-uix-button-icon-annotations" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt=""></a>
  </li>
	   </ul>  </div> <?php } ?>
    </div>
	
				</div>
				
				<div id="watch7-main-container">
					<div id="watch7-main" class="clearfix">
						<div id="watch7-content">
							<div class="yt-uix-button-panel">
								<div id="watch7-headline" class="clearfix  yt-uix-expander yt-uix-expander-collapsed">
								<?php if($owner == 1) { ?><span id="watch-privacy-icon" class="yt-uix-tooltip yt-uix-tooltip-reverse <?php echo $video_info['video_type']; ?>" title="This video is <?php echo $video_info['video_type']; ?>." data-tooltip-text="This video is <?php echo $video_info['video_type']; ?>.">
      <img src="/yts/img/pixel-vfl3z5WfW.gif" alt="This video is <?php echo $video_info['video_type']; ?>.">
								</span><?php } ?>
									<h1 id="watch-headline-title">
      

  


  <span class=" yt-uix-expander-head" dir="ltr" title="<?php echo $video_info['vtitle']; ?>">
    <?php echo $video_info['vtitle']; ?>
  </span>

    </h1> </div>
								<div id="watch7-user-header"><a href="/user/<?php echo $getuname; ?>?feature=watch" class="yt-user-photo ">
								<span class="video-thumb ux-thumb yt-thumb-square-48 "><span class="yt-thumb-clip"><span class="yt-thumb-clip-inner"><img src="/ytd/pfp/<?php echo $video_info['uid']; ?>.gif?<?php echo date("His"); ?>" alt="<?php echo $getuname; ?>" width="48"><span class="vertical-align"></span></span></span></span></a><a href="/user/<?php echo $getuname; ?>?feature=watch" class="yt-uix-sessionlink yt-user-name " 
								dir="ltr"><?php echo $getuname; ?></a><span class="yt-user-separator">&middot;</span><a class="yt-uix-sessionlink yt-user-videos" href="/user/<?php echo $getuname; ?>/videos"><?php echo $initvid->get_user_video($video_info['uid']); ?> videos</a>
									<br>
									<?php if($owner == 1) { ?>
									<span class="yt-uix-button-subscription-container yt-uix-button-context-light">  <button type="button" class="yt-subscription-button  yt-uix-button yt-uix-button-hh-default yt-uix-tooltip" disabled="True" onclick=";return false;" title="No need to subscribe to yourself!" role="button" data-tooltip-text="No need to subscribe to yourself!"><span class="yt-uix-button-content">Subscribe </span></button>
<span class="yt-subscription-button-subscriber-count-branded-horizontal">1</span><span class="yt-subscription-button-disabled-mask"></span></span>
									<?php } else { ?>
									<span class="yt-uix-button-subscription-container yt-uix-button-context-light"><button href="" onclick=";window.location.href=this.getAttribute('href');return false;" type="button" class="yt-subscription-button yt-subscription-button-js-default   yt-uix-button yt-uix-button-subscribe-branded" role="button"><span class="yt-uix-button-icon-wrapper"><img class="yt-uix-button-icon yt-uix-button-icon-subscribe-branded" src="/yts/img/pixel-vfl3z5WfW.gif" alt=""><span class="yt-uix-button-valign"></span></span><span class="yt-uix-button-content">  <span class="subscribe-hh-label">Subscribe</span> <span class="subscribed-hh-label">Subscribed</span> <span class="unsubscribe-hh-label">Unsubscribe</span> </span>
									</button><span class="yt-subscription-button-subscriber-count-branded-horizontal">0</span><span class="yt-subscription-button-disabled-mask"></span></span>
									<?php } ?>
									<div id="watch7-views-info"> <span class="watch-view-count">
      <?php echo $initvid->get_views_by_id($_GET['v']); ?> views
  </span>
										<div class="video-extras-sparkbars">
											<div class="video-extras-sparkbar-likes" style="width: 500px;"></div>
											<div class="video-extras-sparkbar-dislikes" style="width: 500px;"></div>
										</div> <span class="video-extras-likes-dislikes">
      <img class="icon-watch-stats-like" src="/yts/img/pixel-vfl3z5WfW.gif" alt="Like"> 0
 &nbsp;&nbsp;&nbsp;   <img class="icon-watch-stats-dislike" src="/yts/img/pixel-vfl3z5WfW.gif" alt="Dislike"> 1

  </span> </div>
								</div>
								<div id="watch7-action-buttons" class="clearfix">
									<div id="watch7-sentiment-actions"> <span id="watch-like-dislike-buttons" class="yt-uix-button-group " data-vote-state="2" data-button-toggle-group="optional">
									<span class="yt-uix-clickcard"><button href="/r/like.php?v=<?php echo $_GET['v']; ?>" onclick=";window.location.href=this.getAttribute('href');return false;" title="" type="button" class="yt-uix-button yt-uix-button-hh-text yt-uix-tooltip" id="watch-like" data-button-toggle="true" data-position="bottomright" data-unlike-tooltip="Unlike" data-orientation="vertical" data-like-tooltip="I like this" role="button"><span class="yt-uix-button-icon-wrapper"><img class="yt-uix-button-icon yt-uix-button-icon-watch-like" src="/yts/img/pixel-vfl3z5WfW.gif" alt=""><span class="yt-uix-button-valign"></span></span><span class="yt-uix-button-content">Like </span></button>
										</span>
										<span class="yt-uix-clickcard"><button href="/r/dislike.php?v=<?php echo $_GET['v']; ?>" onclick=";window.location.href=this.getAttribute('href');return false;" title="I dislike this" type="button" class="yt-uix-button yt-uix-button-hh-text yt-uix-tooltip yt-uix-button-empty" id="watch-dislike" data-button-toggle="true" data-position="bottomright" data-orientation="vertical" role="button"><span class="yt-uix-button-icon-wrapper"><img class="yt-uix-button-icon yt-uix-button-icon-watch-dislike" src="/yts/img/pixel-vfl3z5WfW.gif" alt="I dislike this"><span class="yt-uix-button-valign"></span></span>
										</button>
										</span>
										</span>
									</div>
									<div id="watch7-secondary-actions" class="yt-uix-button-group" data-button-toggle-group="required"> <span>
    <button type="button" class="action-panel-trigger  yt-uix-button-toggled yt-uix-button yt-uix-button-hh-text yt-uix-tooltip" onclick=";return false;" title="" data-button-toggle="true" data-trigger-for="action-panel-details" role="button"><span class="yt-uix-button-content">About </span></button>
										</span> <span>
    <button type="button" class="action-panel-trigger   yt-uix-button yt-uix-button-hh-text yt-uix-tooltip" onclick=";return false;" title="" data-button-toggle="true" data-trigger-for="action-panel-share" role="button"><span class="yt-uix-button-content">Share </span></button>
										</span> <span class="yt-uix-clickcard">
    <button type="button" class="action-panel-trigger   yt-uix-clickcard-target yt-uix-button yt-uix-button-hh-text yt-uix-tooltip" onclick=";return false;" title="" data-button-toggle="true" data-trigger-for="action-panel-none" data-position="bottomleft" data-orientation="vertical" data-upsell="playlist" role="button"><span class="yt-uix-button-content">Add to </span></button>
										<div class="watch7-hovercard yt-uix-clickcard-content">
											<h3 class="watch7-hovercard-header">Sign in to JarkTube</h3>
											<div class="watch7-hovercard-message">Sign in to like <span class="yt-user-name " dir="ltr">TerminalMontage</span>'s video. </div>
											<div class="watch7-hovercard-account-line"> <a href="/sign_in" class="yt-uix-button yt-uix-sessionlink yt-uix-button-hh-primary"><span class="yt-uix-button-content">Sign in</span></a> </div>
										</div>
										</span> <span>
    <button type="button" class="action-panel-trigger   yt-uix-button yt-uix-button-hh-text yt-uix-tooltip yt-uix-button-empty" onclick=";return false;" title="Statistics" data-button-toggle="true" data-trigger-for="action-panel-stats" role="button"><span class="yt-uix-button-icon-wrapper"><img class="yt-uix-button-icon yt-uix-button-icon-action-panel-stats" src="/yts/img/pixel-vfl3z5WfW.gif" alt="Statistics"><span class="yt-uix-button-valign"></span></span>
										</button>
										</span> <span>
    <button type="button" class="action-panel-trigger   yt-uix-button yt-uix-button-hh-text yt-uix-tooltip yt-uix-button-empty" onclick=";return false;" title="Report" data-button-toggle="true" data-trigger-for="action-panel-report" role="button"><span class="yt-uix-button-icon-wrapper"><img class="yt-uix-button-icon yt-uix-button-icon-action-panel-report" src="/yts/img/pixel-vfl3z5WfW.gif" alt="Report"><span class="yt-uix-button-valign"></span></span>
										</button>
										</span>
									</div>
								</div>
								<div id="watch7-action-panels" class="yt-uix-button-panel">
								<!-- add button if person owns video -->
									<div id="action-panel-details" class="action-panel-content <?php if($owner == 1) { ?>watch-editable<?php } ?>">
									<?php if($owner == 1) { ?>
									  <button onclick=";return false;" type="button" class="watch-pencil-icon yt-uix-button yt-uix-button-hh-default yt-uix-button-empty"  role="button"><span class="yt-uix-button-icon-wrapper"><img class="yt-uix-button-icon yt-uix-button-icon-pencil" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt=""><span class="yt-uix-button-valign"></span></span></button>
									<?php } ?>
										<div id="watch-description" class="yt-uix-expander yt-uix-expander-collapsed yt-uix-button-panel" data-expander-action="yt.www.watch7.handleDescriptionToggle">
											<div id="watch-description-content">
												<div id="watch-description-clip">
													<p id="watch-uploader-info"> <strong>Published on <span id="eow-date" class="watch-video-date">Dec 14, 2012</span>
</strong> </p>
													<div id="watch-description-text">
														<p id="eow-description"><?php echo $video_info['vdesc']; ?></p>
													</div>
													<div id="watch-description-extras">
														<ul class="watch-extras-section">
															<li>
																<h4 class="title">
Category
        </h4>
																<div class="content">
																	<p id="eow-category"><a href="comedy">Comedy</a></p>
																</div>
															</li>
															<li>
																<h4 class="title">License</h4>
																<div class="content">
																	<p id="eow-reuse"> Nonexistant License </p>
															</li>
															</li>
														</ul>
														</div>
													</div>
													<ul id="watch-description-extra-info"> </ul>
												</div>
												<div id="watch-description-toggle" class="yt-uix-expander-head yt-uix-button-panel">
													<div id="watch-description-expand" class="expand">
														<button type="button" class="metadata-inline yt-uix-button yt-uix-button-hh-text" onclick=";return false;" role="button"><span class="yt-uix-button-content">Show more </span></button>
													</div>
													<div id="watch-description-collapse" class="collapse">
														<button type="button" class="metadata-inline yt-uix-button yt-uix-button-hh-text" onclick=";return false;" role="button"><span class="yt-uix-button-content">Show less </span></button>
													</div>
												</div>
											</div>
											<?php if($owner == 1) { ?>
											<form action="/watch_inlineedit_ajax?action_save_video=1" method="POST" id="watch-video-info-form" class="hid">
    <p class="yt">
      <label class="yt-uix-form-label">
Description:
        <textarea class="yt-uix-form-input-text " name="field_myvideo_descr" rows="6"><?php echo $video_info['vdesc']; ?></textarea></span>
      </label>
    </p>
    <p class="yt">
      <label class="yt-uix-form-label">
Privacy:<br>
        <span class="yt-uix-form-input-select"><span class="yt-uix-form-input-select-content"><img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" class="yt-uix-form-input-select-arrow"><span class="yt-uix-form-input-select-value"></span></span><select class="yt-uix-form-input-select-element " name="privacy">  <option value="public" selected>
Public
  </option>
  <option value="private" >
Private
  </option>
    <option value="unlisted" >
Unlisted
    </option>
</select></span>
      </label>
    </p>
   <p class="yt">
      <button class="yt-uix-button yt-uix-button-hh-primary" type="submit" id="watch-video-info-submit"  role="button"><span class="yt-uix-button-content">Save </span></button>
      <button class="yt-uix-button yt-uix-button-hh-default yt-uix-button-empty" onclick=";return false;" type="button" id="watch-video-info-reset"  role="button"><span class="yt-uix-button-content">Cancel </span></button>
    </p>
  </form>
											<?php } ?>
										</div>
										<div id="action-panel-share" class="action-panel-content hid">
											<div id="watch-actions-share-loading">
												<div class="action-panel-loading">
													<p class="yt-spinner"> <img src="/yts/img/pixel-vfl3z5WfW.gif" class="yt-spinner-img" alt="Loading icon"> Loading... </p>
												</div>
											</div>
											<div id="watch-actions-share-panel"></div>
										</div>
										<div id="action-panel-addto" class="action-panel-content hid" data-auth-required="true">
											<div class="action-panel-loading">
												<p class="yt-spinner"> <img src="/yts/img/pixel-vfl3z5WfW.gif" class="yt-spinner-img" alt="Loading icon"> Loading... </p>
											</div>
										</div>
										<div id="action-panel-stats" class="action-panel-content hid">
											<div class="action-panel-loading">
												<p class="yt-spinner"> <img src="/yts/img/pixel-vfl3z5WfW.gif" class="yt-spinner-img" alt="Loading icon"> Loading... </p>
											</div>
										</div>
										<div id="action-panel-report" class="action-panel-content hid" data-auth-required="true">
											<div class="action-panel-loading">
												<p class="yt-spinner"> <img src="/yts/img/pixel-vfl3z5WfW.gif" class="yt-spinner-img" alt="Loading icon"> Loading... </p>
											</div>
										</div>
										<div id="action-panel-login" class="action-panel-content hid">
											<div class="action-panel-login"> <a href="https://web.archive.org/web/20121218053625/https://accounts.google.com/ServiceLogin?passive=true&amp;continue=http%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26hl%3Den_US%26next%3D%252Fwatch%253Fv%253DBKEL4cUTOI4%2526gl%253DUS%2526hl%253Den%26nomobiletemp%3D1&amp;uilel=3&amp;hl=en_US&amp;service=youtube" class="yt-uix-button   yt-uix-sessionlink yt-uix-button-hh-default" data-sessionlink="ei=CN-Exuido7QCFcLcRAodRhCc_g%3D%3D"><span class="yt-uix-button-content">Sign in</span></a> <a href="/web/20121218053625/http://www.youtube.com/signup?next=%2Fwatch%3Fv%3DBKEL4cUTOI4%26gl%3DUS%26hl%3Den" class="yt-uix-button-alert-link">Sign up</a> </div>
										</div>
										<div id="action-panel-ratings-disabled" class="action-panel-content hid">
											<div id="watch-actions-ratings-disabled" class="watch-actions-panel hid"> <em>Ratings have been disabled for this video.</em> </div>
										</div>
										<div id="action-panel-rental-required" class="action-panel-content hid">
											<div id="watch-actions-rental-required" class="watch-actions-panel hid"> <strong>Rating is available when the video has been rented.</strong> </div>
										</div>
										<div id="action-panel-error" class="action-panel-content hid">
											<div class="action-panel-error"> This feature is not available right now. Please try again later. </div>
										</div>
										<div id="watch7-action-panel-footer">
											<hr class="yt-horizontal-rule "> </div>
									</div>
								</div>
								
								<div id="watch7-discussion">
								
									<div class="comments-post-container clearfix">
									
										<div class="comments-post-alert"> <a href="https://web.archive.org/web/20121218053625/https://accounts.google.com/ServiceLogin?passive=true&amp;continue=http%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26feature%3Dcomments%26hl%3Den_US%26next%3D%252Fwatch%253Fv%253DBKEL4cUTOI4%2526gl%253DUS%2526hl%253Den%26nomobiletemp%3D1&amp;uilel=3&amp;hl=en_US&amp;service=youtube">Sign In</a> or <a href="/web/20121218053625/http://www.youtube.com/signup?next=%2Fwatch%3Fv%3DBKEL4cUTOI4%26gl%3DUS%26hl%3Den">Sign Up</a><span class="comments-post-form-rollover-text"> now to post a comment!</span> </div>
									</div>
									<div id="comments-view" data-type="highlights" class="">
										<div class="comments-section">
											<h4>
        <a class="comments-section-see-all" href="//web.archive.org/web/20121218053625/http://www.youtube.com/video_response_view_all?v=BKEL4cUTOI4">
              <strong>Video Responses</strong>

        </a>
  </h4>
											<ul class="video-list">
												<li class="video-response">
													<a href="/web/20121218053625/http://www.youtube.com/watch?v=zUrqoI-vA8U" class="yt-uix-contextlink yt-uix-sessionlink" data-sessionlink="ei=CN-Exuido7QCFcLcRAodRhCc_g%3D%3D&amp;feature=watch_response"> <span class="video-thumb ux-thumb yt-thumb-default-76 "><span class="yt-thumb-clip"><span class="yt-thumb-clip-inner"><img src="//web.archive.org/web/20121218053625im_/http://i3.ytimg.com/vi/zUrqoI-vA8U/default.jpg" alt="Thumbnail" width="76"><span class="vertical-align"></span></span>
														</span>
														</span> <span dir="ltr" class="title" title="Zubatman The Animated Series HD Teaser">
          Zubatman The Animated Series HD Teaser
        </span> <span class="stat attribution">
by <span class="yt-user-name " dir="ltr">TerminalMontage</span> </span> <span class="stat view-count">
            251,737 views
          </span> </a>
												</li>
											</ul>
										</div>
										<hr>
										<div class="comments-section" onmouseover="if (yt.www &amp;&amp; yt.www.watch &amp;&amp; yt.www.watch.livecomments) yt.www.watch.livecomments.handleCommentMouseEvent(this, event);" onmouseout="if (yt.www &amp;&amp; yt.www.watch &amp;&amp; yt.www.watch.livecomments) yt.www.watch.livecomments.handleCommentMouseEvent(this, event);">
											<h4>
        <a class="comments-section-see-all" href="/web/20121218053625/http://www.youtube.com/all_comments?v=BKEL4cUTOI4">
              <strong>All Comments</strong> (2,204)

        </a>
  </h4>
							
						
											<div id="live-comments-setting-no-scroll" class="live-comments-setting hid"> <a onclick="yt.www.watch.livecomments.setScroll(false); return false;">Disable automatic updates</a> </div>
											<ul class="comment-list" id="live_comments">
												<li class="clearfix comment" data-author-id="xO5UVPDZ9Uehnp5dp3cjbw" data-id="1B9wo-RV1jGL1RTIZJte6lQp6A0nL0t10Qv5DafLM3k">
													<button type="button" class="flip close yt-uix-button yt-uix-button-link yt-uix-button-empty" onclick=";return false;" data-button-has-sibling-menu="true" role="button" aria-pressed="false" aria-expanded="false" aria-haspopup="true" aria-activedescendant=""><span class="yt-uix-button-icon-wrapper"><img class="yt-uix-button-icon yt-uix-button-icon-comment-close" src="/yts/img/pixel-vfl3z5WfW.gif" alt=""><span class="yt-uix-button-valign"></span></span><img class="yt-uix-button-arrow" src="/yts/img/pixel-vfl3z5WfW.gif" alt="">
														<div class=" yt-uix-button-menu yt-uix-button-menu-link" style="display: none;">
															<ul>
																<li class="comment-action-remove comment-action" data-action="remove"><span class="yt-uix-button-menu-item">Remove</span></li>
																<li class="comment-action" data-action="flag-profile-pic"><span class="yt-uix-button-menu-item">Report profile image</span></li>
																<li class="comment-action" data-action="flag"><span class="yt-uix-button-menu-item">Flag for spam</span></li>
																<li class="comment-action-block comment-action" data-action="block"><span class="yt-uix-button-menu-item">Block User</span></li>
																<li class="comment-action-unblock comment-action" data-action="unblock"><span class="yt-uix-button-menu-item">Unblock User</span></li>
															</ul>
														</div>
													</button> <a href="/web/20121218053625/http://www.youtube.com/user/xtzyshuadog" class="yt-user-photo "><span class="video-thumb ux-thumb yt-thumb-square-48 "><span class="yt-thumb-clip"><span class="yt-thumb-clip-inner"><img src="https:/yts/img/pixel-vfl3z5WfW.gif" alt="xtzyshuadog" data-thumb="//web.archive.org/web/20121218053625/http://i1.ytimg.com/i/xO5UVPDZ9Uehnp5dp3cjbw/1.jpg" width="48"><span class="vertical-align"></span></span></span></span></a>
													<div class="comment-body">
														<div class="content-container">
															<div class="content">
																<p class="metadata"> <span class="author ">
            <a href="/web/20121218053625/http://www.youtube.com/user/xtzyshuadog" class="yt-uix-sessionlink yt-user-name " data-sessionlink="ei=CN-Exuido7QCFcLcRAodRhCc_g%3D%3D" dir="ltr">xtzyshuadog</a>
          </span> <span class="time" dir="ltr">
              <a dir="ltr" href="https://web.archive.org/web/20121218053625/http://www.youtube.com/comment?lc=1B9wo-RV1jGL1RTIZJte6lQp6A0nL0t10Qv5DafLM3k">
                6 seconds ago
              </a>
            </span> </p>
																<div class="comment-text" dir="ltr">
																	<p>What the FLYING Fuck?﻿</p>
																</div>
															</div>
															<div class="comment-actions">
																<button type="button" class="start comment-action yt-uix-button yt-uix-button-link" onclick=";return false;" data-action="reply" role="button"><span class="yt-uix-button-content">Reply </span></button><span class="separator">&middot;</span><span class="yt-uix-button-group"><span class="yt-uix-clickcard"><button type="button" class="start comment-action-vote-up comment-action yt-uix-clickcard-target yt-uix-button yt-uix-button-link yt-uix-tooltip yt-uix-button-empty" onclick=";return false;" title="" data-action="" data-tooltip-show-delay="300" role="button"><span class="yt-uix-button-icon-wrapper"><img class="yt-uix-button-icon yt-uix-button-icon-watch-comment-vote-up" src="/yts/img/pixel-vfl3z5WfW.gif" alt=""><span class="yt-uix-button-valign"></span></span>
																</button>
																<div class="watch7-hovercard yt-uix-clickcard-content">
																	<h3 class="watch7-hovercard-header">Sign in to YouTube</h3>
																	<div class="watch7-hovercard-message"> Sign in with your YouTube Account (YouTube, Google+, Gmail, Orkut, Picasa, or Chrome) to rate <span class="yt-user-name " dir="ltr">xtzyshuadog</span>'s comment. </div>
																	<ul class="watch7-hovercard-icon-strip clearfix">
																		<li class="watch7-hovercard-icon">
																			<div class="watch7-hovercard-youtube-icon"></div>
																		</li>
																		<li class="watch7-hovercard-icon">
																			<div class="watch7-hovercard-gplus-icon"></div>
																		</li>
																		<li class="watch7-hovercard-icon">
																			<div class="watch7-hovercard-gmail-icon"></div>
																		</li>
																		<li class="watch7-hovercard-icon">
																			<div class="watch7-hovercard-picasa-icon"></div>
																		</li>
																		<li class="watch7-hovercard-icon">
																			<div class="watch7-hovercard-chrome-icon"></div>
																		</li>
																	</ul>
																	<div class="watch7-hovercard-account-line"> <a href="https://web.archive.org/web/20121218053625/https://accounts.google.com/ServiceLogin?passive=true&amp;continue=http%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26hl%3Den_US%26next%3D%252Fwatch%253Fv%253DBKEL4cUTOI4%2526gl%253DUS%2526hl%253Den%26nomobiletemp%3D1&amp;uilel=3&amp;hl=en_US&amp;service=youtube" class="yt-uix-button   yt-uix-sessionlink yt-uix-button-hh-primary"><span class="yt-uix-button-content">Sign in</span></a> </div>
																</div>
																</span><span class="yt-uix-clickcard"><button type="button" class="end comment-action-vote-down comment-action yt-uix-clickcard-target yt-uix-button yt-uix-button-link yt-uix-tooltip yt-uix-button-empty" onclick=";return false;" title="" data-action="" data-tooltip-show-delay="300" role="button"><span class="yt-uix-button-icon-wrapper"><img class="yt-uix-button-icon yt-uix-button-icon-watch-comment-vote-down" src="/yts/img/pixel-vfl3z5WfW.gif" alt=""><span class="yt-uix-button-valign"></span></span>
																</button>
																<div class="watch7-hovercard yt-uix-clickcard-content">
																	<h3 class="watch7-hovercard-header">Sign in to JarkTube</h3>
																	<div class="watch7-hovercard-message"> Sign in with your JarkTube Account to rate <span class="yt-user-name " dir="ltr">xtzyshuadog</span>'s comment. </div>		
																	<div class="watch7-hovercard-account-line"> <a href="sign_in" class="yt-uix-button   yt-uix-sessionlink yt-uix-button-hh-primary" ><span class="yt-uix-button-content">Sign in</span></a> </div>
																</div>
																</span>
																</span>
															</div>
														</div>
													</div>
												</li>
												
											</ul>
										</div>
										<div class="comments-section">
											<div class="comments-pagination" data-ajax-enabled="true">
												<div class="yt-uix-pager" role="navigation"> <a class="yt-uix-button  yt-uix-pager-button yt-uix-pager-show-more yt-uix-sessionlink yt-uix-button-hh-default" data-sessionlink="ei=CN-Exuido7QCFcLcRAodRhCc_g%3D%3D" data-page="2"><span class="yt-uix-button-content">Show more</span></a> </div>
											</div>
										</div>
										<ul>
											<li class="hid" id="parent-comment-loading"> Loading comment...</li>
										</ul>
										<div id="comments-loading" class="hid">Loading...</div>
									</div>
								</div>
							</div>
							<div id="watch7-sidebar">
								<div id="watch-channel-brand-div" style="display:none;">
									<div id="watch-channel-brand-div-text"> Advertisement </div>
									<div id="ad300x250"></div>
									<div id="google_companion_ad_div"></div>
								</div>
								<div class="watch-sidebar-section">
									<div class="watch-sidebar-body">
										<ul id="watch-related" class="video-list">
											<li class="video-list-item"> <a href="/web/20121218053625/http://www.youtube.com/watch?v=huNLM86t29c" class="related-video yt-uix-contextlink  yt-uix-sessionlink" data-sessionlink="ved=CAMQzRooAA%3D%3D&amp;ei=CN-Exuido7QCFcLcRAodRhCc_g%3D%3D&amp;feature=relmfu"><span class="ux-thumb-wrap contains-addto "><span class="video-thumb ux-thumb yt-thumb-default-120 "><span class="yt-thumb-clip"><span class="yt-thumb-clip-inner"><img src="https:/yts/img/pixel-vfl3z5WfW.gif" alt="Pokemon Red: Rock Tunnel" data-thumb="/ytd/thumb/dfdsa.jpg" width="120"><span class="vertical-align"></span></span></span></span><span class="video-time">1:48</span>


  <button onclick=";return false;" title="Watch Later" type="button" class="addto-button video-actions spf-nolink addto-watch-later-button-sign-in yt-uix-button yt-uix-button-hh-default yt-uix-button-short yt-uix-tooltip" data-button-menu-id="shared-addto-watch-later-login" data-video-ids="huNLM86t29c" role="button"><span class="yt-uix-button-content">  <img src="/yts/img/pixel-vfl3z5WfW.gif" alt="Watch Later">
 </span><img class="yt-uix-button-arrow" src="/yts/img/pixel-vfl3z5WfW.gif" alt=""></button>
</span><span dir="ltr" class="title" title="Pokemon Red: Rock Tunnel">Pokemon Red: Rock Tunnel</span><span class="stat attribution">by <span class="yt-user-name " dir="ltr">TerminalMontage</span></span><span class="stat view-count">107,651 views</span></a> </li>
											
										</ul>
										<ul id="watch-more-related" class="video-list hid">
											<li id="watch-more-related-loading"> Loading more suggestions... </li>
										</ul>
									</div>
									<div class="watch-sidebar-foot">
										<button type="button" id="watch-more-related-button" onclick=";return false;" class=" yt-uix-button yt-uix-button-hh-default" data-button-action="yt.www.watch7.handleLoadMoreRelated" role="button"><span class="yt-uix-button-content">Load more suggestions </span></button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div style="visibility: hidden; height: 0px; padding: 0px; overflow: hidden;"> <img src="//web.archive.org/web/20121218053625im_/http://www.youtube-nocookie.com/gen_204?attributionpartner=TheStation%2Buser" border="0" width="1" height="1"> </div>
				</div>
			</div>
		</div>
	</div>
</div>
<script>

    yt.setConfig({
      'WATCH_EXTRA_JS': "\/\/s.ytimg.com\/yts\/jsbin\/www-watch7-extra-vflyP-4Kk.js",
      'WATCH_GUIDE_JS': "\/\/s.ytimg.com\/yts\/jsbin\/www-guidev2-vfl72MaxY.js",
      'WATCH_GUIDE_CSS': "\/\/s.ytimg.com\/yts\/cssbin\/www-home-c4-vfl7bPgdG.css",
        'WATCH_CONTEXT_CONTAINER_TEMPLATE': "\u003cdiv id=\"context-source-container\"data-context-source=\"__source__\"data-context-image=\"__image__\"style=\"display:none;\"\u003e\u003c\/div\u003e\u003cdiv class=\"__container_classes__\"\u003e\u003cdiv class=\"guide-module-toggle context-header\"\u003e\u003cspan class=\"guide-module-toggle-icon\"\u003e\u003cspan class=\"guide-module-toggle-arrow\"\u003e\u003c\/span\u003e\u003cimg src=\"\/\/s.ytimg.com\/yts\/img\/pixel-vfl3z5WfW.gif\" alt=\"\"\u003e\u003c\/span\u003e\u003ca class=\"context-back-link yt-uix-sessionlink\" href=\"__back_link__\" data-sessionlink=\"ei=CMywrJSzvrQCFaZVRAodMyy_OA%3D%3D\u0026amp;feature=__feature__\"\u003e\u003cspan class=\"guide-context-image-link\"\u003e\u003cspan class=\"thumb guide-context-image\"\u003e\u003cimg id=\"context-image\" src=\"\/\/s.ytimg.com\/yts\/img\/pixel-vfl3z5WfW.gif\" alt=\"\" data-context-image=\"__image__\"\u003e\u003c\/span\u003e\u003c\/span\u003e\u003cdiv class=\"guide-module-toggle-label\"\u003e\u003ch3 class=\"context-title\"\u003e\u003cspan\u003e__headline__\u003cspan class=\"yt-badge-new\"\u003enew\u003c\/span\u003e\u003c\/span\u003e\u003c\/h3\u003e\u003cspan class=\"placeholder\" title=\"__more_from__\" dir=\"__title_dir__\"\u003e__more_from__\u003c\/span\u003e\u003c\/div\u003e\u003c\/a\u003e\u003c\/div\u003e\u003cdiv class=\"guide-module-content  hid\"\u003e\u003chr class=\"guide-section-separator guide-context-separator-top\"\u003e\u003cul id=\"watch-context-item-list\" class=\"guide-context-item-container context-data-container yt-uix-scroller guide-context-body\" data-context-playing=\"__click_index__\" data-context-open=\"true\" data-context-subsource=\"__subsource__\" data-scroll-action=\"yt.www.watch.context.loadThumbnails\"\u003e__item_list__\u003c\/ul\u003e\u003chr class=\"guide-section-separator guide-context-separator-bottom\"\u003e\u003c\/div\u003e\u003c\/div\u003e",
        'WATCH_CONTEXT_VIDEO_TEMPLATE': "\u003cli class=\"guide-context-item context-data-item context-video yt-uix-scroller-scroll-unit __item_classes__\" data-context-item-id=\"__video_id__\" data-context-item-user=\"__user_name__\" data-context-item-time=\"__video_time__\" data-context-item-actionuser=\"__action_username__\" data-context-item-title=\"__video_title__\" data-context-item-type=\"video\" data-context-item-actionverb=\"__action_verb__\" data-context-item-views=\"__view_count__\"\u003e\u003ca href=\"\/watch?v=__video_id__\" class=\"yt-uix-contextlink yt-uix-sessionlink \" data-sessionlink=\"ei=CMywrJSzvrQCFaZVRAodMyy_OA%3D%3D\u0026amp;feature=__feature__\"\u003e\u003cspan class=\"video-thumb ux-thumb yt-thumb-default-40 context-video-thumb\"\u003e\u003cspan class=\"yt-thumb-clip\"\u003e\u003cspan class=\"yt-thumb-clip-inner\"\u003e\u003cimg data-group-key=\"guide-context-thumbs\" data-thumb=\"\/\/i4.ytimg.com\/vi\/__video_id__\/default.jpg\" alt=\"\" data-thumb-manual=\"1\" src=\"http:\/\/s.ytimg.com\/yts\/img\/pixel-vfl3z5WfW.gif\" width=\"40\" \u003e\u003cspan class=\"vertical-align\"\u003e\u003c\/span\u003e\u003c\/span\u003e\u003c\/span\u003e\u003c\/span\u003e\u003cspan class=\"title\"\u003e__video_title__\u003c\/span\u003e\u003cspan class=\"username\"\u003eby __user_name__\u003c\/span\u003e\u003cspan class=\"viewcount\"\u003e__view_count__\u003c\/span\u003e\u003cspan class=\"action\"\u003e__action_username__ __action_verb__\u003c\/span\u003e\u003c\/a\u003e\u003c\/li\u003e",
        'WATCH_CONTEXT_PLAYLIST_TEMPLATE': "\u003cli class=\"guide-context-item context-data-item context-playlist yt-uix-scroller-scroll-unit __item_classes__\" data-context-item-videos=\"[\u0026quot;__playlist_video_id__\u0026quot;]\" data-context-item-id=\"__playlist_id__\" data-context-item-count=\"__video_count__\" data-context-item-actionuser=\"__action_username__\" data-context-item-title=\"__playlist_title__\" data-context-item-type=\"playlist\" data-context-item-actionverb=\"__action_verb__\" data-context-item-user=\"\u0026quot;__user_name__\u0026quot;\" data-context-item-count-label=\"__video_count_label__\"\u003e\u003ca href=\"\/watch?v=__playlist_video_id__\u0026amp;playnext=1\u0026amp;list=__playlist_id__\" class=\"yt-uix-contextlink yt-uix-sessionlink \" data-sessionlink=\"ei=CMywrJSzvrQCFaZVRAodMyy_OA%3D%3D\u0026amp;feature=__feature__\"\u003e\u003cspan class=\"context-video-thumb yt-pl-thumb\"\u003e\u003cspan class=\"video-thumb ux-thumb yt-thumb-default-40 \"\u003e\u003cspan class=\"yt-thumb-clip\"\u003e\u003cspan class=\"yt-thumb-clip-inner\"\u003e\u003cimg data-group-key=\"guide-context-thumbs\" data-thumb=\"\/\/i4.ytimg.com\/vi\/__playlist_video_id__\/default.jpg\" alt=\"\" data-thumb-manual=\"1\" src=\"http:\/\/s.ytimg.com\/yts\/img\/pixel-vfl3z5WfW.gif\" width=\"40\" \u003e\u003cspan class=\"vertical-align\"\u003e\u003c\/span\u003e\u003c\/span\u003e\u003c\/span\u003e\u003c\/span\u003e  \u003cspan class=\"video-count-wrapper\"\u003e\n    \u003cspan class=\"video-count-block\"\u003e\n      \u003cspan class=\"count-label\"\u003e__video_count__\u003c\/span\u003e\n      \u003cspan class=\"text-label\"\u003e__video_count_label__\u003c\/span\u003e\n    \u003c\/span\u003e\n  \u003c\/span\u003e\n\u003c\/span\u003e\u003cspan class=\"title\"\u003e__playlist_title__\u003c\/span\u003e\u003cspan class=\"username\"\u003eby __user_name__\u003c\/span\u003e\u003cspan class=\"action\"\u003e__action_username__ __action_verb__\u003c\/span\u003e\u003c\/a\u003e\u003c\/li\u003e",
        'WATCH_CONTEXT_GEN204': true,
      'WATCH7_ENABLED': true,
      'WATCH_PROMO_GUIDE': true,
      'WATCH_PROMO_CONTEXT': true,
      'GUIDE_ENABLED': true,
      'GUIDE_EXPANDS_IF_ROOM': null,
      'CONTEXT_EXPANDS_IF_ROOM': null,
      'GUIDE_EXPANDS_ON_NOTIFICATION': false,
      'GUIDE_OR_CONTEXT_EXPAND_IF_ROOM': false,
      'GUIDE_MODULE_STATE_STICKY': false
    });

    yt.setAjaxToken('promo_ajax_token', "3jL883FBPObBczkXKA8dswY7lVR8MTM1NjgyODc2MkAxMzU2NzQyMzYy");

      yt.setMsg({
        'WATCH_CONTEXT_MORE_FROM': "More from",
        'WATCH_CONTEXT_MORE_RESULTS': "More results"
      });

    
  </script>
  <script>
    yt.setConfig({
      'VIDEO_ID': "<?php echo $_GET['v']; ?>",
      'RADIO_JS': "\/\/s.ytimg.com\/yts\/jsbin\/www-radio-vflQwnXYf.js",
      'WATCH_LIVECOMMENTS_JS': "\/\/s.ytimg.com\/yts\/jsbin\/www-livecomments-vflciwrOb.js",
      'WATCH_TRANSCRIPT_JS': "\/\/s.ytimg.com\/yts\/jsbin\/www-watch-transcript-vflB-GDIu.js",
	  <?php if($owner == 1) { ?>
      'WATCH_EDIT_ENABLED': true,
        'WATCH_EDIT_JS': "\/\/s.ytimg.com\/yts\/jsbin\/www-watch-edit-vflt9h6St.js",
	  <?php } ?>
      'REPORTVIDEO_JS': "\/\/s.ytimg.com\/yts\/jsbin\/www-reportvideo-vflik8cLN.js",
      'REPORTVIDEO_CSS': "\/\/s.ytimg.com\/yts\/cssbin\/www-watch7-reportvideo-vflFgjmTM.css",


      'ENABLE_AUTO_LARGE': true,
      'ENABLE_ASPECT_RATIO': false    });

      yt.setAjaxToken('guide_channels_ajax', "QVfjIvx8t1Byhy5lG5_ClqYjPlp8MTM1NjgyODc2MkAxMzU2NzQyMzYy");
  </script>
<script>
      yt.setConfig({
      'PLAYER_CONFIG': {"assets": {"css_actions": "\/\/s.ytimg.com\/yts\/cssbin\/www-player-actions-vflJeCcsD.css", "css": "\/\/s.ytimg.com\/yts\/cssbin\/www-player-vfl4CRo3S.css", "js": "\/\/s.ytimg.com\/yts\/jsbin\/html5player-vfl1tXJkL.js"}, "url": "/yts/swfbin/player.swf", "min_version": "8.0.0", "args": {"title": "<?php echo $video_info['vtitle']; ?>", "iurl": "<?php echo 'http://jark.succulent64.ml/ytd/thumb/' . $_GET['v'] . '.png'; ?>", "fexp": "914501,910020,916806,914083,916612,922401,920704,912806,927201,922403,925003,913546,913556,916805,920201,901451", "hl": "bg_BG", "is_html5_mobile_device": false, "video_id": "<?php echo $_GET['v']; ?>", "sendtmp": "1", "enablejsapi": "1", "sk": "_yFl1XD2EZMiFxul0uLtvQREHflJoPC5C", "rel": "0", "cr": "US", "playlist_module": "\/\/s.ytimg.com\/yts\/swfbin\/playlist_module-vflWjYGOe.swf", "length_seconds": 024}, "url_v9as2": "/yts/swfbin/player2.swf", "params": {"allowscriptaccess": "always", "allowfullscreen": "true", "bgcolor": "#000000"}, "attrs": {"width": "100%", "id": "video-player", "height": "100%"}, "url_v8": "/yts/swfbin/player2.swf", "html5": false},
    'EMBED_HTML_TEMPLATE': "\u003ciframe width=\"__width__\" height=\"__height__\" src=\"__url__\" frameborder=\"0\" allowfullscreen\u003e\u003c\/iframe\u003e",
    'EMBED_HTML_URL': "https:\/\/web.archive.org\/web\/20121111044940\/http:\/\/www.youtube.com\/embed\/__videoid__"
  });
    yt.setMsg('FLASH_UPGRADE', "\u003cdiv class=\"yt-alert yt-alert-default yt-alert-error  yt-alert-player\"\u003e  \u003cdiv class=\"yt-alert-icon\"\u003e\n    \u003cimg s\u0072c=\"\/\/s.ytimg.com\/yts\/img\/pixel-vfl3z5WfW.gif\" class=\"icon master-sprite\" alt=\"\u0418\u043a\u043e\u043d\u0430 \u043d\u0430 \u0441\u0438\u0433\u043d\u0430\u043b\"\u003e\n  \u003c\/div\u003e\n\u003cdiv class=\"yt-alert-buttons\"\u003e\u003c\/div\u003e\u003cdiv class=\"yt-alert-content\" role=\"alert\"\u003e    \u003cspan class=\"yt-alert-vertical-trick\"\u003e\u003c\/span\u003e\n    \u003cdiv class=\"yt-alert-message\"\u003e\n            \u0422\u0440\u044f\u0431\u0432\u0430 \u0434\u0430 \u043d\u0430\u0434\u0441\u0442\u0440\u043e\u0438\u0442\u0435 \u0432\u0430\u0448\u0438\u044f Adobe Flash Player, \u0437\u0430 \u0434\u0430 \u0433\u043b\u0435\u0434\u0430\u0442\u0435 \u0442\u043e\u0437\u0438 \u0432\u0438\u0434\u0435\u043e\u043a\u043b\u0438\u043f. \u003cbr\u003e \u003ca href=\"http:\/\/get.adobe.com\/flashplayer\/\"\u003e\u0418\u0437\u0442\u0435\u0433\u043b\u0435\u0442\u0435 \u0433\u043e \u043e\u0442 Adobe.\u003c\/a\u003e\n    \u003c\/div\u003e\n\u003c\/div\u003e\u003c\/div\u003e");
  yt.setMsg('PLAYER_FALLBACK', "\u003cdiv class=\"yt-alert yt-alert-default yt-alert-error  yt-alert-player\"\u003e  \u003cdiv class=\"yt-alert-icon\"\u003e\n    \u003cimg s\u0072c=\"\/\/s.ytimg.com\/yts\/img\/pixel-vfl3z5WfW.gif\" class=\"icon master-sprite\" alt=\"\u0418\u043a\u043e\u043d\u0430 \u043d\u0430 \u0441\u0438\u0433\u043d\u0430\u043b\"\u003e\n  \u003c\/div\u003e\n\u003cdiv class=\"yt-alert-buttons\"\u003e\u003c\/div\u003e\u003cdiv class=\"yt-alert-content\" role=\"alert\"\u003e    \u003cspan class=\"yt-alert-vertical-trick\"\u003e\u003c\/span\u003e\n    \u003cdiv class=\"yt-alert-message\"\u003e\n            \u0417\u0430 \u0432\u044a\u0437\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0436\u0434\u0430\u043d\u0435\u0442\u043e \u043d\u0430 \u0432\u0438\u0434\u0435\u043e\u043a\u043b\u0438\u043f\u043e\u0432\u0435 \u0441\u0435 \u0438\u0437\u0438\u0441\u043a\u0432\u0430 Adobe Flash Player \u0438\u043b\u0438 \u0431\u0440\u0430\u0443\u0437\u044a\u0440 \u0441 \u043f\u043e\u0434\u0434\u0440\u044a\u0436\u043a\u0430 \u043d\u0430 HTML5. \u003cbr\u003e \u003ca href=\"http:\/\/get.adobe.com\/flashplayer\/\"\u003e\u0418\u0437\u0442\u0435\u0433\u043b\u0435\u0442\u0435 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0430\u0442\u0430 \u0432\u0435\u0440\u0441\u0438\u044f \u043d\u0430 Flash Player\u003c\/a\u003e \u003cbr\u003e \u003ca href=\"\/html5\"\u003e\u041d\u0430\u0443\u0447\u0435\u0442\u0435 \u043f\u043e\u0432\u0435\u0447\u0435 \u0437\u0430 \u043d\u0430\u0434\u0441\u0442\u0440\u043e\u0439\u0432\u0430\u043d\u0435\u0442\u043e \u0434\u043e \u0431\u0440\u0430\u0443\u0437\u044a\u0440 \u0441 HTML5\u003c\/a\u003e\n    \u003c\/div\u003e\n\u003c\/div\u003e\u003c\/div\u003e");
  yt.setMsg('QUICKTIME_FALLBACK', "\u003cdiv class=\"yt-alert yt-alert-default yt-alert-error  yt-alert-player\"\u003e  \u003cdiv class=\"yt-alert-icon\"\u003e\n    \u003cimg s\u0072c=\"\/\/s.ytimg.com\/yts\/img\/pixel-vfl3z5WfW.gif\" class=\"icon master-sprite\" alt=\"\u0418\u043a\u043e\u043d\u0430 \u043d\u0430 \u0441\u0438\u0433\u043d\u0430\u043b\"\u003e\n  \u003c\/div\u003e\n\u003cdiv class=\"yt-alert-buttons\"\u003e\u003c\/div\u003e\u003cdiv class=\"yt-alert-content\" role=\"alert\"\u003e    \u003cspan class=\"yt-alert-vertical-trick\"\u003e\u003c\/span\u003e\n    \u003cdiv class=\"yt-alert-message\"\u003e\n            \u0417\u0430 \u0432\u044a\u0437\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0436\u0434\u0430\u043d\u0435\u0442\u043e \u043d\u0430 \u0432\u0438\u0434\u0435\u043e\u043a\u043b\u0438\u043f\u043e\u0432\u0435 \u0441\u0435 \u0438\u0437\u0438\u0441\u043a\u0432\u0430 Adobe Flash Player \u0438\u043b\u0438 QuickTime. \u003cbr\u003e \u003ca href=\"http:\/\/get.adobe.com\/flashplayer\/\"\u003e\u0418\u0437\u0442\u0435\u0433\u043b\u0435\u0442\u0435 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0430\u0442\u0430 \u0432\u0435\u0440\u0441\u0438\u044f \u043d\u0430 Flash Player\u003c\/a\u003e \u003cbr\u003e \u003ca href=\"http:\/\/www.apple.com\/quicktime\/download\/\"\u003e\u0418\u0437\u0442\u0435\u0433\u043b\u0435\u0442\u0435 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0430\u0442\u0430 \u0432\u0435\u0440\u0441\u0438\u044f \u043d\u0430 QuickTime\u003c\/a\u003e\n    \u003c\/div\u003e\n\u003c\/div\u003e\u003c\/div\u003e");



      yt.embed.writeEmbed();
	  yt.www.comments.initForm(this, true, false);
  </script>
		</div>
	<?php require_once("yts/modbin/footer.php"); ?>
	
	<div id="debug"> </div>

</body>

</html>