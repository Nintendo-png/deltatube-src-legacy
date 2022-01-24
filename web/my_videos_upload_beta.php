<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
<?php require_once($_SERVER['DOCUMENT_ROOT'] . "/important/function.php"); 
$initvid = new video_tools;
	$initusr = new user_tools;
	$initgnt = new general_tools;
			if(!isset($_COOKIE['sessionuser'])) {
			header("Location: /sign_in");
		}
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
.upload-start-button {
	background: url( data:image/png;base64,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);
	width: 118px;
	height: 80px;
	margin-left: 35px;
	margin-bottom: 10px;
}
.upload-start-button-hover {
background: url( data:image/png;base64,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);	
cursor: pointer;
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
	margin-top: 50px;
	float: right;
}
.changes-text {
	display: none;
	font-size: 12px;
	color: red;
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
	This uploader is in beta like the website itself, so some features are missing.</br>Use <a href="/my_videos_upload_basic">this uploader</a> if you are using a leagcy browser.
    </div>
</div></div>
	<div class="upload-div">
<div class="upload-title">Upload Video Files</div>
<div class="upload-center">
<form id="video_upload_form" method="POST">
<input class="hid" id="video_upload" type="file" name="video_upload" />

<div id="upload-start">
<div class="upload-start-col">
<button type="button" onclick="uploadFile()" id="upload_start_button" class="upload-start-button"></button></br>
    <span class="upload-start-text">
Select files to upload
    </span></br>
	    <span class="upload-start-desc">
Or drag and drop video files
    </span>
</div>
</div>
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
<h3 class="yt-uix-form-label" style="margin-bottom: 5px;">Suggested Tags</h3>
	<p class="yt-spinner"> <img src="/yts/img/pixel-vfl3z5WfW.gif" class="yt-spinner-img" alt="Loading icon"> Loading... </p>
<!--
<button class="yt-uix-button yt-uix-button-hh-default" type="submit" style="height: 20px;" role="button"><span class="yt-uix-button-content">+None</span></button>
<button class="yt-uix-button yt-uix-button-hh-default" type="submit" style="height: 20px;" role="button"><span class="yt-uix-button-content">+Placeholder</span></button>
<button class="yt-uix-button yt-uix-button-hh-default" type="submit" style="height: 20px;" role="button"><span class="yt-uix-button-content">+2012</span></button> -->
</div>
<div class="upload-privacy-col">
<h3 class="yt-uix-form-label" style="margin-bottom: 5px;">Privacy Settings</h3>
<span style="width: 290px; height: 25px; margin-bottom: 25px;" class="yt-uix-form-input-select "><span class="yt-uix-form-input-select-content"><span class="yt-uix-form-input-select-arrow yt-sprite"></span>
<span class="yt-uix-form-input-select-value"></span></span><select style="width: 290px; height: 25px;" class="yt-uix-form-input-select-element">
 <option class="yt-uix-form-input-select-value" value="public">Public</option>
  <option class="yt-uix-form-input-select-value" value="private">Private</option>
  <option class="yt-uix-form-input-select-value" value="unlisted">Unlisted</option>
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
<span class="changes-text">Some changes are not yet saved.</span>
<button class="yt-uix-button yt-uix-button-hh-primary" type="submit" id="channel-desc-submit"  role="button" disabled><span class="yt-uix-button-content">Save changes</span></button>
</div>
</div>
</form>
</div>
</div>
<script>
//variables (yes im not using const or promise)
var uploadform = document.getElementById("video_upload_form");
var uploadbutton = document.getElementById('video_upload');
var uploadstartbutton = document.getElementById('upload_start_button');
var uploadstart = document.getElementById('upload-start');
var uploaddetail = document.getElementById('upload-details');
uploaddetail.style.display = "none";
function uploadFile() {
    uploadbutton.click();
	uploadbutton.addEventListener("change", function() {
		  var files = uploadbutton.files;
		uploadstart.style.display = "none";
		uploaddetail.style.display = "block";
	}, true);
}
//event listeners
uploadstartbutton.addEventListener("mouseout", function () {uploadstartbutton.classList.remove('upload-start-button-hover'); });
uploadstartbutton.addEventListener("mouseover", function () {uploadstartbutton.classList.add('upload-start-button-hover'); });
uploadstart.addEventListener("dragover", function (ev) { ev.preventDefault(); uploadstartbutton.classList.add('upload-start-button-hover'); });
uploadstart.addEventListener("dragleave", function () { uploadstartbutton.classList.remove('upload-start-button-hover'); });
uploadstart.addEventListener("drop", function (ev) { 
ev.preventDefault();
uploadbutton.files = ev.dataTransfer.files;
uploadstart.style.display = "none";
		uploaddetail.style.display = "block";
});
</script>
    </div>
    <!-- end content -->
  </div>
		</div>
		</div>
	<?php require_once("yts/modbin/footer.php"); ?>
	
	<div id="debug"> </div>

</body>

</html>