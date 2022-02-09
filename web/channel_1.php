<?php require_once($_SERVER['DOCUMENT_ROOT'] . "/important/function.php"); 
	$initvid = new video_tools;
	$initusr = new user_tools;
	$initgnt = new general_tools;
	if(!isset($_GET['uid'])) { include('404.php'); die(); }
	$user = explode(".php", $_GET['uid']);
	if($initusr->user_exists($user[0]) < 1) {
		include('404.php'); 
		die(); 
		} else {
			$uid = $initusr->get_uid_by($user[0]);
			if(isset($_COOKIE['sessionuser'])) {
            if($_COOKIE['sessionuser'] == $user[0]) { $owner = 1; } else { $owner = 0; }
			} else { $owner = 0; }
		}
		if(isset($_GET['page'])) {
			$page = explode(".php", $_GET['page']);
			$page = $page[0];
		}
		$channel_data = json_decode($initusr->get_channel_data($user[0]), 1);
?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>

	<title><?php echo $user[0]; ?> - FalconTube</title>
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
		<script id="js-2844383769" src="/yts/jsbin/www-channels4-vfl29idQg.js" data-loaded="true"></script>
	<script src="https://kit.fontawesome.com/2a6c2dd177.js" crossorigin="anonymous"></script>

	</head>
  <style>
    #c4-header-bg-container {
    background-image: url(/ytd/banner/<?php echo $uid; ?>.png);
    background-position: center 0px;
  }
  #textfield-desc {
	  width: 600px;
	  height: 130px;
	  margin-bottom: 10px;
	  margin-top: 0.1px;
  }

  </style>
<body class="ltr exp-new-site-width exp-watch7-comment-ui site-left-aligned hitchhiker-enabled guide-enabled guide-expanded" dir="ltr">
	<div id="body-container">
		<!-- begin page -->
		<?php require_once($_SERVER['DOCUMENT_ROOT'] . "/yts/modbin/header.php"); ?>
		
	<div id="alerts"></div>
		<div id="header"></div>
		<div id="page-container">
		<div id="page" class="  channel">
		
		<div id="guide">    
		<div id="guide-container">
    <div id="guide-main" class="guide-module  yt-uix-clickcard" data-orientation="vertical" data-position="bottomright" data-force-position="true" data-click-outside-persists="true" data-card-class="watch7-card-promo">
     <?php require_once($_SERVER['DOCUMENT_ROOT'] . "/yts/modbin/guide-module.php"); ?>
    </div>
      <div id="watch-context-container" class="guide-module  yt-uix-clickcard" data-orientation="vertical" data-position="bottomright" data-force-position="true" data-click-outside-persists="true" data-card-class="watch7-card-promo">
          <div class="watch7-card-promo-content yt-uix-clickcard-content">
    <h3 class="watch7-card-promo-header">
      <img class="watch7-card-promo-context-icon" src="/yts/img/pixel-vfl3z5WfW.gif">
Never get lost
    </h3>
    <div class="watch7-card-promo-message">
Browse videos from the previous page, including the homepage feed, channel videos and search results.
    </div>
    <div class="watch7-card-promo-account-line">
      <button onclick=";return false;" type="button" class=" yt-uix-button yt-uix-button-hh-primary" data-button-action="yt.www.guidev2.watch.acceptPromo" role="button"><span class="yt-uix-button-content">Got it! </span></button>
    </div>
  </div>

      </div>
  </div>

</div><div id="content">



  <div class="branded-page-v2-container enable-fancy-subscribe-button ">
    <div class="branded-page-v2-col-container clearfix">
        <div class="branded-page-v2-secondary-col">
          
    

        <div class="branded-page-related-channels branded-page-gutter-padding">
          <h2 class="branded-page-related-channels-title" dir="ltr">
        Related Channels
    </h2>

        <ul class="branded-page-related-channels-list">
        <li class="branded-page-related-channels-item clearfix" data-external-id="UCGt7X90Au6BV8rf49BiM6Dg">
    <a href="/user/hwilliams8548" class="spf-link yt-uix-sessionlink">
      <span class="video-thumb ux-thumb yt-thumb-square-32 branded-page-related-channels-thumb"><span class="yt-thumb-clip"><span class="yt-thumb-clip-inner"><img data-thumb="/ytd/pfp/default.jpg" alt="Thumbnail" src="https:/yts/img/pixel-vfl3z5WfW.gif" width="32"><span class="vertical-align"></span></span></span></span>
    </a>
    <div class="branded-page-related-channels-content">
        <h3>
    <a class="spf-link yt-uix-tooltip yt-uix-sessionlink yt-uix-hovercard-target" data-id="UCGt7X90Au6BV8rf49BiM6Dg" data-orientation="vertical" data-position="topright" data-delay-show="10" data-card-delegate-show="true" data-card-action="yt.www.channelcard.show" data-card-class="yt-channel-card" href="/user/hwilliams8548" dir="ltr" data-sessionlink="ei=CJzGm6PRrLQCFZ8XIQodv2DPIQ%3D%3D&amp;feature=rc-rel">

      <span class="qualified-channel-title">hwilliams8548</span>
    </a>
  </h3>

        <span class="yt-uix-button-subscription-container yt-uix-button-context-light"><button onclick=";window.location.href=this.getAttribute('href');return false;" href="/soon.php" type="button" class="yt-subscription-button yt-subscription-button-js-default   yt-uix-button yt-uix-button-subscribe-unbranded" data-subscription-feature="rc-rel" data-subscription-value="UCGt7X90Au6BV8rf49BiM6Dg" data-sessionlink="ei=CJzGm6PRrLQCFZ8XIQodv2DPIQ%3D%3D&amp;feature=rc-rel" data-subscription-button-type="unbranded" data-subscription-type="" role="button"><span class="yt-uix-button-icon-wrapper"><img class="yt-uix-button-icon yt-uix-button-icon-subscribe-unbranded" src="/yts/img/pixel-vfl3z5WfW.gif" alt=""><span class="yt-uix-button-valign"></span></span><span class="yt-uix-button-content">  <span class="subscribe-hh-label">Subscribe</span>
  <span class="subscribed-hh-label">Subscribed</span>
  <span class="unsubscribe-hh-label">Unsubscribe</span>
 </span></button><span class="yt-subscription-button-subscriber-count-unbranded-horizontal">0</span><span class="yt-subscription-button-disabled-mask"></span></span>
    </div>
  </li>

  

  </ul>

    </div>


        </div>
      <div class="branded-page-v2-primary-col">
            <div class="branded-page-v2-primary-col-header-container">
      

  <div id="context-source-container" data-context-source="Topic - destructoid" data-context-image="//i.ytimg.com/li/J8fefAfKmoQ/hqdefault.jpg" style="display:none;"></div>

<script>
var y = "banner";
var p = "profilepic";
function uploadFile(type) {
	if(type == "banner") {
		var uploadform = document.getElementById("banner_form");
		var uploadbutton = document.getElementById('banner_upload');
	} else {
		var uploadform = document.getElementById("pfp_form");
		var uploadbutton = document.getElementById('pfp_upload');
	}
    uploadbutton.click();
	uploadbutton.addEventListener("change", function() {
    uploadform.submit(); 
	}, true);
}
</script>
	  <style>
	  .bottom-right {
    position: absolute;
    bottom: 0;
	font-size: 20px;
    right: 0;
	margin-bottom: 0.1px;
}
	  </style>

    <div class="branded-page-v2-header channel-header">
    <div id="gh-banner">

        <div id="c4-header-bg-container" class="">	
		<?php if($owner == 1) { ?>
		<form id="banner_form" action="/r/upload_banner.php" method="POST" enctype="multipart/form-data">
		<input id="uploadtype" type="hidden" name="uploadtype" value="banner">
		<input class="hid" id="banner_upload" type="file" name="banner_upload" />
		</form>
		<span class="bottom-right"><button type="button" title="Upload Banner" class="yt-uix-button yt-uix-button-hh-default yt-uix-tooltip" onclick="uploadFile(y)" role="button"><i class="fas fa-edit"></i></button></span>
		<form id="pfp_form" action="/r/upload_pfp.php" method="POST" enctype="multipart/form-data">
		<input id="uploadtype" type="hidden" name="uploadtype" value="pfp">
		<input class="hid" id="pfp_upload" type="file" name="pfp_upload">
		</form>
		<?php } ?>
          <a class="channel-header-profile-image-container spf-link">
		  
      <img class="channel-header-profile-image" src="/ytd/pfp/<?php echo $uid; ?>.gif?<?php echo date("His"); ?>" title="<?php echo $user[0]; ?>" alt="<?php echo $user[0]; ?>">
	  <?php if($owner == 1) { ?>
	    <span class="bottom-right"><button onclick="uploadFile(p)" type="button" title="Upload Profile Picture" class="yt-uix-button yt-uix-button-hh-default yt-uix-tooltip"  role="button"><i class="fas fa-edit"></i></button></span>
	  <?php } ?>
    </a>
  </div>

    </div>
    <div class="primary-header-contents">
        <div class="primary-header-actions">
        
<?php if($owner == 1) { ?>
									<span class="yt-uix-button-subscription-container yt-uix-button-context-light">  <button type="button" class="yt-subscription-button  yt-uix-button yt-uix-button-hh-default yt-uix-tooltip" disabled="True" onclick=";return false;" title="No need to subscribe to yourself!" role="button" data-tooltip-text="No need to subscribe to yourself!"><span class="yt-uix-button-content">Subscribe </span></button>
<span class="yt-subscription-button-subscriber-count-branded-horizontal">1</span><span class="yt-subscription-button-disabled-mask"></span></span>
									<?php } else { ?>
									<span class="yt-uix-button-subscription-container yt-uix-button-context-light"><button href="" onclick=";window.location.href=this.getAttribute('href');return false;" type="button" class="yt-subscription-button yt-subscription-button-js-default   yt-uix-button yt-uix-button-subscribe-branded" role="button"><span class="yt-uix-button-icon-wrapper"><img class="yt-uix-button-icon yt-uix-button-icon-subscribe-branded" src="/yts/img/pixel-vfl3z5WfW.gif" alt=""><span class="yt-uix-button-valign"></span></span><span class="yt-uix-button-content">  <span class="subscribe-hh-label">Subscribe</span> <span class="subscribed-hh-label">Subscribed</span> <span class="unsubscribe-hh-label">Unsubscribe</span> </span>
									</button><span class="yt-subscription-button-subscriber-count-branded-horizontal">0</span><span class="yt-subscription-button-disabled-mask"></span></span>
									<?php } ?>

  </div>
    <h1 class="branded-page-header-title">
    <a class="spf-link" href="/web/20121221231940/https://www.youtube.com/blogs/destructoid-elephant">
      <span class="qualified-channel-title"><?php echo $user[0]; ?></span>
    </a>
  </h1>


    </div>
  </div>



  <div id="channel-subheader" class="clearfix branded-page-gutter-padding">
    
    <ul id="channel-navigation-menu" class="clearfix">
      <li>
          <button type="button" class="epic-nav-item-empty yt-uix-button <?php if(!isset($_GET['page']) || (isset($_GET['page']) && $page == "feed")) { ?>selected<?php } ?> yt-uix-button-epic-nav-item yt-uix-button-empty" onclick=";return false;" data-button-menu-id="channel-navigation-menu-dropdown" role="button" aria-label="Select view:"><span class="yt-uix-button-icon-wrapper"><img class="yt-uix-button-icon yt-uix-button-icon-c4-home" src="//web.archive.org/web/20121226175335im_/http://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt=""><span class="yt-uix-button-valign"></span></span><img class="yt-uix-button-arrow" src="//web.archive.org/web/20121226175335im_/http://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt=""></button>
		  <div id="channel-navigation-menu-dropdown" class="epic-nav-item-dropdown yt-uix-button-menu yt-uix-button-menu-external hid" style="min-width: 38px; left: 246px; top: 370px; display: none;">
    <ul>
          <li>
    <a class="spf-link yt-uix-button-menu-item" href="/user/<?php echo $user[0]; ?>">Browse</a>
  </li>

        <li>
    <a class="spf-link yt-uix-button-menu-item" href="/user/<?php echo $user[0]; ?>/feed">Feed</a>
  </li>

    </ul>
  </div>
      </li>
      <li>
	  <?php if(isset($_GET['page']) && $page == "videos") { ?>
        <h2 class="epic-nav-item-heading ">Videos</h2>
	  <?php } else { ?>
          <a href="/user/<?php echo $user[0]; ?>/videos" class="yt-uix-button  spf-link  yt-uix-sessionlink yt-uix-button-epic-nav-item"><span class="yt-uix-button-content">Videos</span></a>
        <?php } ?>
      </li>
        <li>
          <?php if(isset($_GET['page']) && $page == "about") { ?>
        <h2 class="epic-nav-item-heading ">About</h2>
	  <?php } else { ?>
          <a href="/user/<?php echo $user[0]; ?>/about" class="yt-uix-button  spf-link  yt-uix-sessionlink yt-uix-button-epic-nav-item"><span class="yt-uix-button-content">About</span></a>
        <?php } ?>
        </li>
        <li>
          <div id="channel-search"><label class="show-search epic-nav-item secondary-nav" for="channels-search-field"><img class="epic-nav-item-heading-icon" src="/yts/img/pixel-vfl3z5WfW.gif" alt="Search Channel"></label><form class="search-form epic-nav-item secondary-nav" action="/web/20121221231940/https://www.youtube.com/blogs/destructoid-elephant/search" method="get"><span class=" yt-uix-form-input-container "><input class="yt-uix-form-input-text search-field" name="query" id="channels-search-field" type="text" placeholder="Search Channel" maxlength="100" autocomplete="off"></span><button onclick=";return true;" type="submit" class="search-button yt-uix-button yt-uix-button-c4-search yt-uix-button-empty" role="button"><span class="yt-uix-button-icon-wrapper"><img class="yt-uix-button-icon yt-uix-button-icon-search" src="/yts/img/pixel-vfl3z5WfW.gif" alt=""><span class="yt-uix-button-valign"></span></span></button></form></div>
        </li>
    </ul>
  </div>

    </div>
	
<?php 
if(isset($_GET['page']) && $page == "videos") { require_once("yts/modbin/channel_videos.php");  } 
else if(isset($_GET['page']) && $page == "about") { require_once("yts/modbin/channel_about.php"); }
else if(isset($_GET['page']) && $page == "feed") { require_once("yts/modbin/channel_feed.php"); }
else { require_once("yts/modbin/channel_browse.php"); }
	?>

      </div>
    </div>
    <hr class="branded-page-v2-col-container-bottom-border">
  </div>
</div></div></div>
		</div>
	<?php require_once("yts/modbin/footer.php"); ?>
	
	<div id="debug"> </div>
<script>
        yt.setConfig({
          <?php if(isset($_COOKIE['sessionuser']) && $owner == 1) { ?> 'GUIDE_SELECTED_FEED': "<?php echo $initusr->get_uid_by($_COOKIE['sessionuser']); ?>"<?php } ?>
        });
    </script>
	<script>
    yt.www.guide.init();

  </script>

  <script>
    yt.setConfig('CHANNEL_ID', "HC7Dr1BKwqctY");
    yt.setAjaxToken('channel_ajax', "");
    yt.pubsub.subscribe('init', yt.www.brandedpage.channels4init.generalInit);
    yt.pubsub.subscribe('dispose', yt.www.brandedpage.channels4init.generalDispose);
  </script>
  
</body>

</html>
