<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
<?php 
	require_once($_SERVER['DOCUMENT_ROOT'] . "/important/function.php"); 
	$initusr = new user_tools;
	$initgnt = new general_tools;
	if(!isset($_COOKIE['sessionuser']) || (!in_array($_COOKIE['sessionuser'], $admins))) {
		header("Location: /");
	}
	//hello, the stuff used is meant for a windows host, so the exec stuff won't work on linux or darwin (if it even has php).
?>
	<title>JarkTube</title>
	<link rel="icon" href="/yts/img/favicon-vfldLzJxy.ico" type="image/x-icon">
	<link rel="shortcut icon" href="/yts/img/favicon-vfldLzJxy.ico" type="image/x-icon">
	<meta name="description" content="An Hitchhiker 2013 YouTube revival">
	<meta name="keywords" content="video, sharing, camera phone, video phone, free, upload">
  <link id="css-2181281479" rel="stylesheet" href="/yts/cssbin/www-hitchhiker-vflTcqmWD.css">
  <link id="css-3031658408" rel="stylesheet" href="/yts/cssbin/www-the-rest-vflzYVqky.css">
  <link id="css-3470253347" rel="stylesheet" href="/yts/cssbin/www-refresh-static-vfl1jX94m.css">
	    <script id="js-528919983" src="/yts/jsbin/www-core-vflG1GmWt.js" data-loaded="true"></script>
    <script id="js-1576221815" src="/yts/jsbin/www-guide-vflDWtzlu.js" data-loaded="true"></script>
    <script id="js-3726928039" src="/yts/jsbin/www-home-vflVATumV.js" data-loaded="true"></script>
    <script id="js-1128033138" src="/yts/jsbin/www-guidev2-vflxw2ZhL.js" data-loaded="true"></script>

	</head>

<body class="ltr exp-new-site-width exp-watch7-comment-ui site-left-aligned hitchhiker-enabled guide-enabled guide-expanded" dir="ltr">
	<div id="body-container">
		<!-- begin page -->
		<?php require_once($_SERVER['DOCUMENT_ROOT'] . "/yts/modbin/header.php"); ?>

<div id="alerts" class="about-pages"></div>

<div id="page-container">
	<div id="page" class="page-default about-pages">
		<div id="content" style="margin-bottom: 320px;">
			<div class="ytg-base">
				<div class="ytg-wide">
					<div id="yts-nav" class="ytg-1col">
						<ol>
							<li class="top-level"> <a href="/admin/index" class="item-highlight">
Admin Panel
    </a> </li>
							<ol class="indented">
								<li class="sub-level"> <a href="/t/about_getting_started">
Banning
      </a> </li>
								<li class="sub-level"> <a href="/t/about_essentials">
Reports
      </a> </li>
								<li class="sub-level"> <a href="/t/community_guidelines">
Community Guidelines
      </a> </li>
								<li class="sub-level"> <a href="">
Contact Us
      </a> </li>

							</ol>
						</ol>
					</div>
					<div id="yts-article">
						<h1 id="header">
Admin Panel
      </h1>
						<div id="article-container" class="ytg-box"> 
						<p>Welcome to the admin panel. Please don't misuse it or your admin status will be revoked and you probably will be banned.</p>
							<div class="grey-rounded-box tip"> <h3 class="no-padding">Server Stats</h3> <ul class="disc no-padding-bottom"> 
							<li>PHP Version: <?php echo phpversion(); ?> / Zend Engine Version <?php echo zend_version(); ?></li>
							<li>PHP Allocated Memory: <?php echo memory_get_usage() / 1000; ?>KBs / Peak Memory Usage: <?php echo memory_get_peak_usage() / 1000; ?>KBs</li> 
							<li>CPU Usage: <?php exec('wmic cpu get LoadPercentage', $p); echo $p[1]; ?>%</li> 
							</ul> </div>
							</br>
							<div class="grey-rounded-box tip"> <h3 class="no-padding">Site Stats</h3> <ul class="disc no-padding-bottom"> 
							<li>Total Users: <?php echo $initgnt->get_all("user"); ?> / Total Banned: <?php echo $initgnt->get_all("banned"); ?></li>
							<li>Total Videos: <?php echo $initgnt->get_all(NULL, "video"); ?> / Total Public: <?php echo $initgnt->get_all(NULL, "public"); ?> 
							/ Total Private: <?php echo $initgnt->get_all(NULL, "private"); ?> / Total Unlisted: <?php echo $initgnt->get_all(NULL, "unlisted"); ?>
							</li> 
							<li>Total Video Views: <?php echo $initgnt->get_all(NULL, "views"); ?></li>
							<li>Total Comments: 0 / Total Video Responses: 0</li>
							</ul> </div>
							
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
</div>

	<?php require_once($_SERVER['DOCUMENT_ROOT'] . "/yts/modbin/footer.php"); ?>
	
	<div id="debug"> </div>
</body>

</html>