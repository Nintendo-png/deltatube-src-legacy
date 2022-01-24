<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
<?php require_once($_SERVER['DOCUMENT_ROOT'] . "/important/function.php"); 
$initvid = new video_tools;
	$initusr = new user_tools;
	$initgnt = new general_tools;
?>
	<title>Upload your video - JarkTube</title>
	<link rel="icon" href="/yts/img/favicon-vfldLzJxy.ico" type="image/x-icon">
	<link rel="shortcut icon" href="/yts/img/favicon-vfldLzJxy.ico" type="image/x-icon">
	<meta name="description" content="It's December 2012 all over again!">
	<meta name="keywords" content="video, sharing, camera phone, video phone, free, upload">
	<link id="css-4115735524" rel="stylesheet" href="/yts/cssbin/www-hitchhiker-vflTcqmWD.css">
	<link id="css-583125701" rel="stylesheet" href="/yts/cssbin/www-the-rest-vflzYVqky.css">	
	<script id="js-528919983" src="/yts/jsbin/www-core-vflG1GmWt.js" data-loaded="true"></script>
    <script id="js-1576221815" src="/yts/jsbin/www-guide-vflDWtzlu.js" data-loaded="true"></script>
    <script id="js-3726928039" src="/yts/jsbin/www-home-vflVATumV.js" data-loaded="true"></script>
    <script id="js-1128033138" src="/yts/jsbin/www-guidev2-vflxw2ZhL.js" data-loaded="true"></script>
<style>
#content {
margin-top: 10px;	
}
.upload-title {
	background-color: #5A5A5A;
	color: #FFFFFF;
	padding: 12px;
}
.upload-div {
margin-bottom: 10px;	
width: 81%;
float: left;
}
.upload-center {
	border-left: 2px solid #E0E0E0;
	border-right: 2px solid #E0E0E0;
	border-bottom: 2px solid #E0E0E0;
	padding: 14px;
}
#upload-details {
    overflow: hidden;
}
.upload-start-col {
 margin: auto;
  width: 30%;
  margin-top: 100px;
  padding: 10px;
}
.upload-details-col {
	margin-right: 45px;
    float:left;
}
.upload-privacy-col {
    overflow: hidden;
}
.upload-start-text {
	font-size:20px;
	color:#444;
	font-weight:normal;
}
.upload-start-desc {
	font-weight:normal;
	margin-left: 15px;
	color: #AFAFB1;
}
.space-1 {
	margin-bottom: 10px;
}
.save-button {
	margin-top: 10px;
	float: right;
}
</style>
	</head>

<body class="ltr exp-new-site-width exp-watch7-comment-ui site-left-aligned hitchhiker-enabled guide-enabled guide-expanded" dir="ltr">
	<div id="body-container">
		<!-- begin page -->
		<?php require_once($_SERVER['DOCUMENT_ROOT'] . "/yts/modbin/header.php"); ?>
	<div id="alerts">
	</div>
		<div id="header"></div>
<div id="page-container">
		<div id="page">
			
    <!-- begin content -->
    <div id="content">
	<div class="yt-alert yt-alert-default yt-alert-info">  <div class="yt-alert-icon">
    <img src="/yts/img/pixel-vfl3z5WfW.gif" class="icon master-sprite" alt="Alert icon">
  </div>
<div class="yt-alert-buttons"></div><div class="yt-alert-content" role="alert">    <span class="yt-alert-vertical-trick"></span>
    <div class="yt-alert-message">
	This uploader is also in beta like the other uploader, so some features are missing.</br>Use <a href="/my_videos_upload_beta">this uploader</a> if you are using a newer browser.
    </div>
</div></div>
	<div class="upload-div">
<div class="upload-title">Upload your video</div>
<div class="upload-center">
<div id="upload-details">
<div class="upload-status">
</div>
<div class="upload-details-col">
<h3 class="yt-uix-form-label" style="margin-bottom: 5px;">Title</h3>
<input type="text" style="width: 355px; height: 15px; margin-bottom: 20px;" class="yt-uix-form-input-text" spellcheck="false" name="username" id="username" value="">
<h3 class="yt-uix-form-label" style="margin-bottom: 5px;">Description</h3>
<textarea id="tesxtfield-post" style="width: 355px; height: 55px; margin-bottom: 25px;" class="yt-uix-form-textarea link-gplus-lightbox" data-upsell="comment" name="comment"></textarea>
<h3 class="yt-uix-form-label" style="margin-bottom: 5px;">Tags</h3>
<input type="text" style="width: 355px; height: 20px; margin-bottom: 5px;" class="yt-uix-form-input-text" placeholder="Separate tags with commas" spellcheck="false" name="username" id="username" value="">
</div>
<div class="upload-privacy-col">
<h3 class="yt-uix-form-label" style="margin-bottom: 5px;">Privacy Settings</h3>
<span style="width: 290px; height: 25px; margin-bottom: 25px;" class="yt-uix-form-input-select "><span class="yt-uix-form-input-select-content"><span class="yt-uix-form-input-select-arrow yt-sprite"></span>
<span class="yt-uix-form-input-select-value"></span></span><select style="width: 290px; height: 25px;" class="yt-uix-form-input-select-element">
 <option class="yt-uix-form-input-select-value" value="volvo">Public</option>
  <option class="yt-uix-form-input-select-value" value="saab">Private</option>
  <option class="yt-uix-form-input-select-value" value="mercedes">Unlisted</option>
</select></span>
<h3 class="yt-uix-form-label" style="margin-bottom: 5px;">Post to your subscribers</h3>
<textarea id="tesxtfield-post" style="width: 275px; height: 45px; margin-bottom: 25px;" placeholder="Customize your message" class="yt-uix-form-textarea link-gplus-lightbox" data-upsell="comment" name="comment"></textarea>
<h3 class="yt-uix-form-label" style="margin-bottom: 5px;">Category</h3>
<span style="width: 290px; height: 25px; margin-bottom: 5px;" class="yt-uix-form-input-select "><span class="yt-uix-form-input-select-content"><span class="yt-uix-form-input-select-arrow yt-sprite"></span>
<span class="yt-uix-form-input-select-value"></span></span><select style="width: 290px; height: 25px;" class="yt-uix-form-input-select-element">
 <option class="yt-uix-form-input-select-value" value="volvo">Choose category</option>
  <option class="yt-uix-form-input-select-value" value="saab">Private</option>
  <option class="yt-uix-form-input-select-value" value="mercedes">Unlisted</option>
</select></span>
</div>
<div class="save-button">
<button class="yt-uix-button yt-uix-button-hh-primary" type="submit" id="channel-desc-submit"  role="button"><span class="yt-uix-button-content">Upload</span></button>
</div>
</div>
</div>
</div>

    </div>
    <!-- end content -->
  </div>
		</div>
		</div>
	<?php require_once("yts/modbin/footer.php"); ?>
	
	<div id="debug"> </div>
</body>
</html>