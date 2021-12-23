<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
<?php 
	require_once($_SERVER['DOCUMENT_ROOT'] . "/important/function.php"); 
	$initvid = new video_tools;
	$initusr = new user_tools;
?>
	<title>JarkTube</title>
	<link rel="icon" href="/yts/img/favicon-vfldLzJxy.ico" type="image/x-icon">
	<link rel="shortcut icon" href="/yts/img/favicon-vfldLzJxy.ico" type="image/x-icon">
	<meta name="description" content="An Hitchhiker 2013 YouTube revival">
	<meta name="keywords" content="video, sharing, camera phone, video phone, free, upload">
	<link id="css-4115735524" rel="stylesheet" href="/yts/cssbin/www-hitchhiker-vflTcqmWD.css">
	<link id="css-583125701" rel="stylesheet" href="/yts/cssbin/www-the-rest-vflzYVqky.css">
<link id="css-3687597597" rel="stylesheet" href="/yts/cssbin/www-home-c4-vfl4MbzOD.css">	
	    <script id="js-528919983" src="/yts/jsbin/www-core-vflG1GmWt.js" data-loaded="true"></script>
    <script id="js-1576221815" src="/yts/jsbin/www-guide-vflDWtzlu.js" data-loaded="true"></script>
    <script id="js-3726928039" src="/yts/jsbin/www-home-vflVATumV.js" data-loaded="true"></script>
    <script id="js-1128033138" src="/yts/jsbin/www-guidev2-vflxw2ZhL.js" data-loaded="true"></script>

	</head>

<body class="ltr exp-new-site-width exp-watch7-comment-ui site-left-aligned hitchhiker-enabled guide-enabled guide-expanded" dir="ltr">
	<div id="body-container">
		<!-- begin page -->
		<?php require_once($_SERVER['DOCUMENT_ROOT'] . "/yts/modbin/header.php"); ?>
		
	<div id="alerts" style="margin-bottom: 10px;margin-top: 10px;">
	<?php if(isset($_GET['debugip'])) { ?>
<div class="yt-alert yt-alert-default yt-alert-info">  <div class="yt-alert-icon">
    <img src="/yts/img/pixel-vfl3z5WfW.gif" class="icon master-sprite" alt="Alert icon">
  </div>
<div class="yt-alert-buttons"></div><div class="yt-alert-content" role="alert">    <span class="yt-alert-vertical-trick"></span>
    <div class="yt-alert-message">
	<?php echo $_SERVER["HTTP_CF_CONNECTING_IP"]; ?>
    </div>
</div></div>
<?php } ?>
<?php if(isset($_GET['file_unsupported_img'])) { ?>
<div class="yt-alert yt-alert-default yt-alert-error">  <div class="yt-alert-icon">
    <img src="/yts/img/pixel-vfl3z5WfW.gif" class="icon master-sprite" alt="Alert icon">
  </div>
<div class="yt-alert-buttons"></div><div class="yt-alert-content" role="alert">    <span class="yt-alert-vertical-trick"></span>
    <div class="yt-alert-message">
	The file you submitted was not supported. Please use supported files like GIF, PNG, or JPG.
    </div>
</div></div>
<?php }  ?>
<?php if(isset($_GET['file_success_img'])) { ?>
<div class="yt-alert yt-alert-default yt-alert-success">  <div class="yt-alert-icon">
    <img src="/yts/img/pixel-vfl3z5WfW.gif" class="icon master-sprite" alt="Alert icon">
  </div>
<div class="yt-alert-buttons"></div><div class="yt-alert-content" role="alert">    <span class="yt-alert-vertical-trick"></span>
    <div class="yt-alert-message">
	File successfully uploaded.
    </div>
</div></div>
<?php } ?>
	<div class="yt-alert yt-alert-default yt-alert-warn">  <div class="yt-alert-icon">
    <img src="/yts/img/pixel-vfl3z5WfW.gif" class="icon master-sprite" alt="Alert icon">
  </div>
<div class="yt-alert-buttons"></div><div class="yt-alert-content" role="alert">    <span class="yt-alert-vertical-trick"></span>
    <div class="yt-alert-message">
	This is in beta like the website this is hosted on, so use at your own risk.
    </div>
</div></div>
	</div>
      
		<div id="page-container">
		
			<div id="page" class="  home ">
			
				<div id="guide">
					<div id="guide-container">
						<div id="guide-main" class="guide-module " data-orientation="vertical" data-position="bottomright" data-force-position="true" data-click-outside-persists="true" data-card-class="watch7-card-promo">
					<?php require_once($_SERVER['DOCUMENT_ROOT'] . "/yts/modbin/guide-module.php"); ?>
						</div>
						<div id="watch-context-container" class="guide-module hid " data-orientation="vertical" data-position="bottomright" data-force-position="true" data-click-outside-persists="true" data-card-class="watch7-card-promo"> </div>
					</div>
				</div>
				<div id="content">
					<?php if(!isset($_COOKIE['sessionuser'])) { require_once($_SERVER['DOCUMENT_ROOT'] . "/yts/modbin/index-noauth.php"); }
					else { require_once($_SERVER['DOCUMENT_ROOT'] . "/yts/modbin/index-hasauth.php"); }?>
				</div>
			</div>
		</div>

	<?php require_once($_SERVER['DOCUMENT_ROOT'] . "/yts/modbin/footer.php"); ?>
	
    <script>
        yt.setConfig({
          <?php if(!isset($_COOKIE['sessionuser'])) { ?> 'GUIDE_SELECTED_FEED': "youtube"<?php } else { ?>
		  'GUIDE_SELECTED_FEED': "what_to_watch" <?php } ?>
        });
    </script>
	<script>
    yt.www.guide.init();

  </script>
	<div id="debug"> </div>
</body>

</html>