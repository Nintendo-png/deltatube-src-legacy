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
#upload-start {
	border: 2px solid #E0E0E0;
	height: 400px;
}
.upload-start-col {
 margin: auto;
  width: 30%;
  margin-top: 100px;
  padding: 10px;
}
.upload-details-col {
float: left;
margin-right: 10px;
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
<div class="upload-title">Upload Video Files</div>
<div class="upload-center">
<div id="upload-details">
<div class="upload-details-col">
<form>
<h3>Title</h3>
<input type="text" style="width: 300px; height: 10px;" class="yt-uix-form-input-text" spellcheck="false" name="username" id="username" value="">
</div>
<div class="upload-privacy">
<h3>Title</h3>
<input type="text" style="width: 300px; height: 10px;" class="yt-uix-form-input-text" spellcheck="false" name="username" id="username" value="">
</div>
</form>
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