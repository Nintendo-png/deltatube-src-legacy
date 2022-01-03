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
	      <link id="css-699966100" rel="stylesheet" href="//s.ytimg.com/yts/cssbin/www-watch-inlineedit-vflg-l3kd.css">	   
		  <script id="js-528919983" src="/yts/jsbin/www-core-vflG1GmWt.js" data-loaded="true"></script>
      <link id="css-1181818654" rel="stylesheet" href="//s.ytimg.com/yts/cssbin/www-watch-transcript-vfl-zKZyz.css">    
	    <script id="js-3637430272" src="/yts/jsbin/html5player-vflppn5jI.js" data-loaded="true"></script>
    <script id="js-3637430272" src="/yts/jsbin/www-embed_core_module-vfl3edHYR.js" data-loaded="true"></script>

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
								dir="ltr"><?php echo $getuname; ?></a><span class="yt-user-separator">&middot;</span><a class="yt-uix-sessionlink yt-user-videos" href="/user/<?php echo $getuname; ?>/videos"><?php echo $initvid->get_user_numvideo($video_info['uid']); ?> videos</a>
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
    <div class="video-extras-sparkbar-likes" style="width: 98.4013097703%"></div>
    <div class="video-extras-sparkbar-dislikes" style="width: 1.59869022969%"></div>
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
										</span> <span>
    <button type="button" class="action-panel-trigger   yt-uix-button yt-uix-button-hh-text yt-uix-tooltip" onclick=";return false;" title="" data-button-toggle="true" data-trigger-for="action-panel-addto" role="button"><span class="yt-uix-button-content">Add To </span></button>
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
											<div class="action-panel-login"> <a href="/sign_in" class="yt-uix-button   yt-uix-sessionlink yt-uix-button-hh-default"><span class="yt-uix-button-content">Sign in</span></a> <a href="/sign_up" class="yt-uix-button-alert-link">Sign up</a> </div>
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
								
									<div id="comments-view" data-type="highlights" class="">	
									<?php if(!isset($_COOKIE['sessionuser'])) { ?>	
									<div class="comments-post-container clearfix">
										<div class="comments-post-alert"> <a href="sign_in">Sign In</a> or <a href="sign_up">Sign Up</a><span class="comments-post-form-rollover-text"> now to post a comment!</span> </div>
									</div>
									<?php } else {?>			
<form class="comments-post has-focus" method="post" action="/comment_servlet?add_comment=1" data-initialized="true">
<div class="comments-post-container clearfix">
<p style="float: left;"> 
      <span class="video-thumb ux-thumb yt-thumb-square-48 "><span class="yt-thumb-clip"><span class="yt-thumb-clip-inner"><img src="https:/yts/img/pixel-vfl3z5WfW.gif" data-thumb="/ytd/pfp/fsfds.png" width="48"><span class="vertical-align"></span></span></span></span>
</p>
<div class="comments-textarea-container">

<img src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt="" class="comments-textarea-tip">
<textarea id="" placeholder="Share your thoughts..." class="yt-uix-form-input-textarea comments-textarea link-gplus-lightbox" onfocus="yt.www.comments.initForm(this, false, false);" data-upsell="comment" name="comment"></textarea>
</div> 
<p class="comments-remaining has-focus" data-max-count="500">500</p>
<div class="comments-post-buttons has-focus">
<span class="comments-post-video-response-link"><a href="/video_response_upload?v=KvDfdCqjtXg">Create a video response</a>&nbsp;or&nbsp;</span>
<button onclick=";return true;" type="submit" class=" yt-uix-button yt-uix-button-hh-default" role="button"><span class="yt-uix-button-content">Post</span></button>
</div>
	</div>
  </form>
  <?php } ?>
										<div class="comments-section">
											<h4>
        <a class="comments-section-see-all" href="//web.archive.org/web/20121218053625/http://www.youtube.com/video_response_view_all?v=BKEL4cUTOI4">
              <strong>Video Responses</strong>

        </a>
  </h4>
											<ul class="video-list">
												<li class="video-response">
													<a href="/watch?v=" class="yt-uix-contextlink yt-uix-sessionlink"> <span class="video-thumb ux-thumb yt-thumb-default-76 "><span class="yt-thumb-clip"><span class="yt-thumb-clip-inner"><img src="/ytd/thumb/dfdsa.jpg" alt="Thumbnail" width="76"><span class="vertical-align"></span></span>
														</span>
														</span> <span dir="ltr" class="title" title="Zubatman The Animated Series HD Teaser">
         title
        </span> <span class="stat attribution">
by <span class="yt-user-name " dir="ltr">user</span> </span> <span class="stat view-count">
            0 views
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
												
												
											</ul>
										</div>
										<div class="comments-section">
											<div class="comments-pagination" data-ajax-enabled="true">
												<div class="yt-uix-pager" role="navigation"> <a class="yt-uix-button  yt-uix-pager-button yt-uix-pager-show-more yt-uix-sessionlink yt-uix-button-hh-default" 
												data-page="2"><span class="yt-uix-button-content">Show more</span></a> </div>
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
											<li class="video-list-item"> 
											<a href="/web/20121218053625/http://www.youtube.com/watch?v=huNLM86t29c" class="related-video yt-uix-contextlink  yt-uix-sessionlink"><span class="ux-thumb-wrap contains-addto "><span class="video-thumb ux-thumb yt-thumb-default-120 "><span class="yt-thumb-clip"><span class="yt-thumb-clip-inner"><img src="/yts/img/pixel-vfl3z5WfW.gif" alt="Pokemon Red: Rock Tunnel" data-thumb="/ytd/thumb/dfdsa.jpg" width="120"><span class="vertical-align"></span></span></span></span><span class="video-time">1:48</span>


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
	<link id="css-4115735524" rel="stylesheet" href="/yts/cssbin/www-hitchhiker-vflTcqmWD.css">
	<link id="css-583125701" rel="stylesheet" href="/yts/cssbin/www-the-rest-vflzYVqky.css">	
	<link id="css-3687597597" rel="stylesheet" href="/yts/cssbin/www-home-c4-vfl4MbzOD.css">	
	
  <script>
    yt.setConfig({
      'WATCH_EXTRA_JS': "\/\/s.ytimg.com\/yts\/jsbin\/www-watch7-extra-vflu7ZK59.js",
      'WATCH_GUIDE_JS': "\/\/s.ytimg.com\/yts\/jsbin\/www-guidev2-vflxw2ZhL.js",
      'WATCH_GUIDE_CSS': "/yts/cssbin/www-home-c4-vfl4MbzOD.css",
        'WATCH_CONTEXT_CONTAINER_TEMPLATE': "\u003cdiv id=\"context-source-container\"data-context-source=\"__more_from__\"data-context-image=\"__image__\"style=\"display:none;\"\u003e\u003c\/div\u003e\u003cdiv class=\"__container_classes__\"\u003e\u003cdiv class=\"guide-module-toggle context-header\"\u003e\u003cspan class=\"guide-module-toggle-icon\"\u003e\u003cspan class=\"guide-module-toggle-arrow\"\u003e\u003c\/span\u003e\u003cimg src=\"\/\/s.ytimg.com\/yts\/img\/pixel-vfl3z5WfW.gif\" alt=\"\"\u003e\u003c\/span\u003e\u003ca class=\"context-back-link yt-uix-sessionlink\" href=\"__back_link__\" data-sessionlink=\"ei=CP-xg4ztmrQCFQnuRAodySQTmw%3D%3D\u0026amp;feature=__feature__\"\u003e\u003cspan class=\"guide-context-image-link\"\u003e\u003cspan class=\"thumb guide-context-image\"\u003e\u003cimg src=\"__image__\" alt=\"__more_from__\"\u003e\u003c\/span\u003e\u003c\/span\u003e\u003cdiv class=\"guide-module-toggle-label\"\u003e\u003ch3 class=\"context-title\"\u003e\u003cspan\u003e__headline__\u003cspan class=\"yt-badge-new\"\u003enew\u003c\/span\u003e\u003c\/span\u003e\u003c\/h3\u003e\u003cspan class=\"placeholder\" title=\"__more_from__\" dir=\"__title_dir__\"\u003e__more_from__\u003c\/span\u003e\u003c\/div\u003e\u003c\/a\u003e\u003c\/div\u003e\u003cdiv class=\"guide-module-content  hid\"\u003e\u003chr class=\"guide-section-separator guide-context-separator-top\"\u003e\u003cul id=\"watch-context-item-list\" class=\"guide-context-item-container context-data-container yt-uix-scroller guide-context-body\" data-context-playing=\"__click_index__\" data-context-open=\"true\" data-context-subsource=\"__subsource__\"\u003e__item_list__\u003c\/ul\u003e\u003chr class=\"guide-section-separator guide-context-separator-bottom\"\u003e\u003c\/div\u003e\u003c\/div\u003e",
        'WATCH_CONTEXT_VIDEO_TEMPLATE': "\u003cli class=\"guide-context-item context-data-item context-video yt-uix-scroller-scroll-unit __item_classes__\" data-context-item-actionverb=\"__action_verb__\" data-context-item-title=\"__video_title__\" data-context-item-type=\"video\" data-context-item-time=\"__video_time__\" data-context-item-user=\"__user_name__\" data-context-item-id=\"__video_id__\" data-context-item-views=\"__view_count__\" data-context-item-actionuser=\"__action_username__\"\u003e\u003ca href=\"\/watch?v=__video_id__\" class=\"yt-uix-contextlink yt-uix-sessionlink \" data-sessionlink=\"ei=CP-xg4ztmrQCFQnuRAodySQTmw%3D%3D\u0026amp;feature=__feature__\"\u003e\u003cspan class=\"video-thumb ux-thumb yt-thumb-default-40 context-video-thumb\"\u003e\u003cspan class=\"yt-thumb-clip\"\u003e\u003cspan class=\"yt-thumb-clip-inner\"\u003e\u003cimg src=\"\/\/i4.ytimg.com\/vi\/__video_id__\/default.jpg\" alt=\"Thumbnail\" width=\"40\" \u003e\u003cspan class=\"vertical-align\"\u003e\u003c\/span\u003e\u003c\/span\u003e\u003c\/span\u003e\u003c\/span\u003e\u003cspan class=\"title\"\u003e__video_title__\u003c\/span\u003e\u003cspan class=\"username\"\u003eby __user_name__\u003c\/span\u003e\u003cspan class=\"viewcount\"\u003e__view_count__\u003c\/span\u003e\u003cspan class=\"action\"\u003e__action_username__ __action_verb__\u003c\/span\u003e\u003c\/a\u003e\u003c\/li\u003e",
        'WATCH_CONTEXT_PLAYLIST_TEMPLATE': "\u003cli class=\"guide-context-item context-data-item context-playlist yt-uix-scroller-scroll-unit __item_classes__\" data-context-item-count-label=\"__video_count_label__\" data-context-item-actionverb=\"__action_verb__\" data-context-item-title=\"__playlist_title__\" data-context-item-type=\"playlist\" data-context-item-actionuser=\"__action_username__\" data-context-item-user=\"\u0026quot;__user_name__\u0026quot;\" data-context-item-count=\"__video_count__\" data-context-item-id=\"__playlist_id__\" data-context-item-videos=\"[\u0026quot;__playlist_video_id__\u0026quot;]\"\u003e\u003ca href=\"\/watch?v=__playlist_video_id__\u0026amp;playnext=1\u0026amp;list=__playlist_id__\" class=\"yt-uix-contextlink yt-uix-sessionlink \" data-sessionlink=\"ei=CP-xg4ztmrQCFQnuRAodySQTmw%3D%3D\u0026amp;feature=__feature__\"\u003e\u003cspan class=\"context-video-thumb yt-pl-thumb\"\u003e\u003cspan class=\"video-thumb ux-thumb yt-thumb-default-40 \"\u003e\u003cspan class=\"yt-thumb-clip\"\u003e\u003cspan class=\"yt-thumb-clip-inner\"\u003e\u003cimg src=\"\/\/i4.ytimg.com\/vi\/__playlist_video_id__\/default.jpg\" alt=\"Thumbnail\" width=\"40\" \u003e\u003cspan class=\"vertical-align\"\u003e\u003c\/span\u003e\u003c\/span\u003e\u003c\/span\u003e\u003c\/span\u003e  \u003cspan class=\"video-count-wrapper\"\u003e\n    \u003cspan class=\"video-count-block\"\u003e\n      \u003cspan class=\"count-label\"\u003e__video_count__\u003c\/span\u003e\n      \u003cspan class=\"text-label\"\u003e__video_count_label__\u003c\/span\u003e\n    \u003c\/span\u003e\n  \u003c\/span\u003e\n\u003c\/span\u003e\u003cspan class=\"title\"\u003e__playlist_title__\u003c\/span\u003e\u003cspan class=\"username\"\u003eby __user_name__\u003c\/span\u003e\u003cspan class=\"action\"\u003e__action_username__ __action_verb__\u003c\/span\u003e\u003c\/a\u003e\u003c\/li\u003e",
      'WATCH7_ENABLED': false,
        'GUIDE_PROMO_ENABLED': false,
        'CONTEXT_PROMO_ENABLED': true,
      'GUIDE_ENABLED': true,
      'GUIDE_EXPANDS_IF_ROOM': null,
      'CONTEXT_EXPANDS_IF_ROOM': null,
      'GUIDE_EXPANDS_ON_NOTIFICATION': false,
      'GUIDE_OR_CONTEXT_EXPAND_IF_ROOM': false,
      'GUIDE_MODULE_STATE_STICKY': false
    });

    yt.setAjaxToken('promo_ajax_token', "lS2cPgcs_xC_NxeumeIG53YgQgR8MTM1NTYwNzM2M0AxMzU1NTIwOTYz");

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
      'REPORTVIDEO_CSS': "\/\/s.ytimg.com\/yts\/cssbin\/www-watch7-reportvideo-vflFgjmTM.css"});
	   yt.setConfig('ENABLE_AUTO_LARGE', true);
  </script>
<script>
yt.setConfig({
      'PLAYER_CONFIG': {"min_version": "8.0.0", "html5": false, "url": "/yts/swfbin/watch_as3_hh-vfleHfpd4.swf", "attrs": {"id": "video-player", "width": "100%", "height": "100%"}, "params": {"allowscriptaccess": "always", "allowfullscreen": "true", "bgcolor": "#000000"}, "args": {"ptk": "youtube_multi", "enablecsi": "1", "allow_embed": 1, "rvs": "", "vq": "auto", "account_playback_token": "", "autohide": "2", "csi_page_type": "watch7", "cr": "NL", "allow_ratings": 1, "length_seconds": 255, "is_html5_mobile_device": false, "rel": "1", "hl": "en_US", "title": "<?php echo $video_info['vtitle']; ?>", "iurl": "<?php echo 'http://jark.succulent64.ml/ytd/thumb/' . $_GET['v'] . '.png'; ?>", "fexp": "914501,910020,916806,914083,916612,922401,920704,912806,927201,922403,925003,913546,913556,916805,920201,901451", "hl": "bg_BG", "is_html5_mobile_device": false, "video_id": "<?php echo $_GET['v']; ?>", "enablejsapi": "1", "video_wall": 1, "sendtmp": "1"}, "url_v9as2": "/yts/swfbin/player2.swf", "url_v8": "/yts/swfbin/player2.swf", "assets": {"html": "\/html5_player_template", "css_actions": "/yts/cssbin/www-player-actions-vflBv1HfX.css", "js": "/yts/jsbin/html5player-vflppn5jI.js", "css": "/yts/cssbin/www-player-vfl95jqbw.css"}},
    'EMBED_HTML_TEMPLATE': "\u003ciframe width=\"__width__\" height=\"__height__\" src=\"__url__\" frameborder=\"0\" allowfullscreen\u003e\u003c\/iframe\u003e",
    'EMBED_HTML_URL': "http:\/\/jark.succulent64.ml\/embed\/__videoid__"
  });
    yt.setMsg('FLASH_UPGRADE', "\u003cdiv class=\"yt-alert yt-alert-default yt-alert-error  yt-alert-player\"\u003e  \u003cdiv class=\"yt-alert-icon\"\u003e\n    \u003cimg s\u0072c=\"\/\/s.ytimg.com\/yts\/img\/pixel-vfl3z5WfW.gif\" class=\"icon master-sprite\" alt=\"\u0418\u043a\u043e\u043d\u0430 \u043d\u0430 \u0441\u0438\u0433\u043d\u0430\u043b\"\u003e\n  \u003c\/div\u003e\n\u003cdiv class=\"yt-alert-buttons\"\u003e\u003c\/div\u003e\u003cdiv class=\"yt-alert-content\" role=\"alert\"\u003e    \u003cspan class=\"yt-alert-vertical-trick\"\u003e\u003c\/span\u003e\n    \u003cdiv class=\"yt-alert-message\"\u003e\n            \u0422\u0440\u044f\u0431\u0432\u0430 \u0434\u0430 \u043d\u0430\u0434\u0441\u0442\u0440\u043e\u0438\u0442\u0435 \u0432\u0430\u0448\u0438\u044f Adobe Flash Player, \u0437\u0430 \u0434\u0430 \u0433\u043b\u0435\u0434\u0430\u0442\u0435 \u0442\u043e\u0437\u0438 \u0432\u0438\u0434\u0435\u043e\u043a\u043b\u0438\u043f. \u003cbr\u003e \u003ca href=\"http:\/\/get.adobe.com\/flashplayer\/\"\u003e\u0418\u0437\u0442\u0435\u0433\u043b\u0435\u0442\u0435 \u0433\u043e \u043e\u0442 Adobe.\u003c\/a\u003e\n    \u003c\/div\u003e\n\u003c\/div\u003e\u003c\/div\u003e");
  yt.setMsg('PLAYER_FALLBACK', "\u003cdiv class=\"yt-alert yt-alert-default yt-alert-error  yt-alert-player\"\u003e  \u003cdiv class=\"yt-alert-icon\"\u003e\n    \u003cimg s\u0072c=\"\/\/s.ytimg.com\/yts\/img\/pixel-vfl3z5WfW.gif\" class=\"icon master-sprite\" alt=\"\u0418\u043a\u043e\u043d\u0430 \u043d\u0430 \u0441\u0438\u0433\u043d\u0430\u043b\"\u003e\n  \u003c\/div\u003e\n\u003cdiv class=\"yt-alert-buttons\"\u003e\u003c\/div\u003e\u003cdiv class=\"yt-alert-content\" role=\"alert\"\u003e    \u003cspan class=\"yt-alert-vertical-trick\"\u003e\u003c\/span\u003e\n    \u003cdiv class=\"yt-alert-message\"\u003e\n            \u0417\u0430 \u0432\u044a\u0437\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0436\u0434\u0430\u043d\u0435\u0442\u043e \u043d\u0430 \u0432\u0438\u0434\u0435\u043e\u043a\u043b\u0438\u043f\u043e\u0432\u0435 \u0441\u0435 \u0438\u0437\u0438\u0441\u043a\u0432\u0430 Adobe Flash Player \u0438\u043b\u0438 \u0431\u0440\u0430\u0443\u0437\u044a\u0440 \u0441 \u043f\u043e\u0434\u0434\u0440\u044a\u0436\u043a\u0430 \u043d\u0430 HTML5. \u003cbr\u003e \u003ca href=\"http:\/\/get.adobe.com\/flashplayer\/\"\u003e\u0418\u0437\u0442\u0435\u0433\u043b\u0435\u0442\u0435 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0430\u0442\u0430 \u0432\u0435\u0440\u0441\u0438\u044f \u043d\u0430 Flash Player\u003c\/a\u003e \u003cbr\u003e \u003ca href=\"\/html5\"\u003e\u041d\u0430\u0443\u0447\u0435\u0442\u0435 \u043f\u043e\u0432\u0435\u0447\u0435 \u0437\u0430 \u043d\u0430\u0434\u0441\u0442\u0440\u043e\u0439\u0432\u0430\u043d\u0435\u0442\u043e \u0434\u043e \u0431\u0440\u0430\u0443\u0437\u044a\u0440 \u0441 HTML5\u003c\/a\u003e\n    \u003c\/div\u003e\n\u003c\/div\u003e\u003c\/div\u003e");
  yt.setMsg('QUICKTIME_FALLBACK', "\u003cdiv class=\"yt-alert yt-alert-default yt-alert-error  yt-alert-player\"\u003e  \u003cdiv class=\"yt-alert-icon\"\u003e\n    \u003cimg s\u0072c=\"\/\/s.ytimg.com\/yts\/img\/pixel-vfl3z5WfW.gif\" class=\"icon master-sprite\" alt=\"\u0418\u043a\u043e\u043d\u0430 \u043d\u0430 \u0441\u0438\u0433\u043d\u0430\u043b\"\u003e\n  \u003c\/div\u003e\n\u003cdiv class=\"yt-alert-buttons\"\u003e\u003c\/div\u003e\u003cdiv class=\"yt-alert-content\" role=\"alert\"\u003e    \u003cspan class=\"yt-alert-vertical-trick\"\u003e\u003c\/span\u003e\n    \u003cdiv class=\"yt-alert-message\"\u003e\n            \u0417\u0430 \u0432\u044a\u0437\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0436\u0434\u0430\u043d\u0435\u0442\u043e \u043d\u0430 \u0432\u0438\u0434\u0435\u043e\u043a\u043b\u0438\u043f\u043e\u0432\u0435 \u0441\u0435 \u0438\u0437\u0438\u0441\u043a\u0432\u0430 Adobe Flash Player \u0438\u043b\u0438 QuickTime. \u003cbr\u003e \u003ca href=\"http:\/\/get.adobe.com\/flashplayer\/\"\u003e\u0418\u0437\u0442\u0435\u0433\u043b\u0435\u0442\u0435 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0430\u0442\u0430 \u0432\u0435\u0440\u0441\u0438\u044f \u043d\u0430 Flash Player\u003c\/a\u003e \u003cbr\u003e \u003ca href=\"http:\/\/www.apple.com\/quicktime\/download\/\"\u003e\u0418\u0437\u0442\u0435\u0433\u043b\u0435\u0442\u0435 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0430\u0442\u0430 \u0432\u0435\u0440\u0441\u0438\u044f \u043d\u0430 QuickTime\u003c\/a\u003e\n    \u003c\/div\u003e\n\u003c\/div\u003e\u003c\/div\u003e");



      yt.embed.writeEmbed();
	  yt.www.comments.initForm(this, true, false);
  </script>
      <script id="js-1886910086" src="//s.ytimg.com/yts/jsbin/www-watch7-core-vflzdEjU1.js" data-loaded="true"></script>
		</div>
	<?php require_once("yts/modbin/footer.php"); ?>
	
	<div id="debug"> </div>

</body>

</html>