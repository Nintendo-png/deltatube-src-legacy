<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
<?php 
	require_once($_SERVER['DOCUMENT_ROOT'] . "/important/function.php"); 
	$initusr = new user_tools;
?>
	<title>FalconTube</title>
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
	
	<div id="masthead-subnav" class="yt-nav yt-nav-dark">
	<ul>
		<li> <a class="yt-nav-item" href="/t/about_jarktube">
        About
    </a> </li>
		<li> <a class="yt-nav-item" href="/t/press">
        Press &amp; Blogs
    </a> </li>
		<li> <a class="yt-nav-item" href="/t/copyright_center">
        Copyright
    </a> </li>
		<li> <a class="yt-nav-item" href="/creators">
        Creators &amp; Partners
    </a> </li>
		<li> <a class="yt-nav-item" href="/t/advertising_overview">
        Advertising
    </a> </li>
		<li> <a class="yt-nav-item selected" href="/dev">
        Developers
    </a> </li>
		<li> <a class="yt-nav-item" href="//web.archive.org/web/20121221224625/https://support.google.com/youtube/?hl=en-US">
        Help
    </a> </li>
	</ul>
</div>
<div id="alerts" class="about-pages"></div>
<div id="page-container">
	<div id="page" class="page-default about-pages">
		<div id="content" >
			<div class="ytg-base">
				<div class="ytg-wide">
					<div id="yts-nav" class="ytg-1col">
						<ol>
							<li class="top-level"> <a href="dev">
Developers
    </a> </li>
							<ol class="indented">
								<li class="sub-level"> <a href="/t/about_getting_started" class="item-highlight">
class
      </a> </li>
								<li class="sub-level"> <a href="/t/about_essentials">
class
      </a> </li>
								<li class="sub-level"> <a href="/t/community_guidelines">
class
      </a> </li>
								</li>
							</ol>
						</ol>
					</div>
					<div id="yts-article">
						<h1 id="header">
Developers
      </h1>
						<div id="article-container" class="ytg-box">
							<p>An API is going to be worked on after most of the video aspects of the site are created.<br><br>
							But, here is what is to be expected:</p>
							<ul class="disc no-padding-bottom">
												<li>A function that gets search results from the database,</li>
												<li>an user info fetcher,</li>
												<li>a video detail function that gets video details into JSON,</li>
												<li>and probably more.</li>
											</ul>
											<p>While you wait for the API to be made, here's a cool YTPMV thing on YouTube!</p>
											
											<iframe width="560" height="315" src="https://www.youtube.com/embed/lhAIs6da2fY" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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