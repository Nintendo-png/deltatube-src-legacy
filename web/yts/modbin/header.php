
<div id="yt-masthead-container" class="yt-grid-box yt-masthead-hh">
			<div id="yt-masthead" class="">
				<a id="logo-container" href="/" title="FalconTube home"><img id="logo" src="/yts/img/pixel-vfl3z5WfW.gif" alt="FalconTube home"></a>
				<?php if(!isset($_COOKIE['sessionuser'])) { ?>
				<div id="yt-masthead-signin">
					<button href="/sign_in" type="button" class=" yt-uix-button yt-uix-button-hh-primary" onclick=";window.location.href=this.getAttribute('href');return false;" role="button"><span class="yt-uix-button-content">Sign In </span></button>
				</div>
				<?php } else { ?> 
				<div id="yt-masthead-user">
  <span id="yt-masthead-user-displayname" dir="ltr" class="yt-valign-container" onclick="yt.www.masthead.toggleExpandedMasthead();">
    <?php echo htmlspecialchars($_COOKIE['sessionuser']); ?>
  </span>

  <button onclick="yt.www.masthead.toggleExpandedMasthead();;return false;" type="button" class="yt-masthead-user-icon" data-orientation="vertical" role="button">
  <span class="yt-uix-button-content">  
  <span id="masthead-gaia-user-image">
  <span class="clip">
  <span class="clip-center">
  <img src="/ytd/pfp/<?php echo $initusr->get_uid_by($_COOKIE['sessionuser']); ?>.gif?<?php echo date("His"); ?>" alt="">
  <span class="vertical-center"></span></span></span></span>
 </span>
 </button>
  <span id="yt-masthead-dropdown" onclick="yt.www.masthead.toggleExpandedMasthead();"></span>
</div>
				<?php } ?>
				<div id="yt-masthead-content"><span <?php if(isset($_COOKIE['sessionuser'])) { ?>class="yt-uix-button-group"<?php } ?> id="masthead-upload-button-group"><a href="/my_videos_upload" class="yt-uix-button  start link-gplus-lightbox yt-uix-sessionlink yt-uix-button-hh-default" data-upsell="upload"><span class="yt-uix-button-content">Upload</span></a><?php if(isset($_COOKIE['sessionuser'])) { ?><button onclick=";return false;" type="button" class="end yt-uix-button yt-uix-button-hh-default yt-uix-button-empty" data-button-menu-id="upload-button-menu" role="button"><img class="yt-uix-button-arrow" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" alt=""></button><?php } ?></span>
				<ul id="upload-button-menu" class="yt-uix-button-menu yt-uix-button-menu-default" role="menu" aria-haspopup="true" style="display: none"><li role="menuitem"><a href="/my_videos_upload_beta" class="yt-uix-button-menu-item upload-menu-link">Beta Uploader</a></li><li role="menuitem"><a href="/my_videos" class="yt-uix-button-menu-item upload-menu-link"><img class="upload-menu-vm" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif">Video Manager</a></li><li role="menuitem"><a href="/analytics" class="yt-uix-button-menu-item upload-menu-link"><img class="upload-menu-analytics" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif">Analytics</a></li></ul>
				
					<form id="masthead-search" class="search-form consolidated-form" action="/results" onsubmit="if (_gel('masthead-search-term').value == '') return false;">
						<button class="search-btn-component search-button yt-uix-button yt-uix-button-hh-default" onclick="if (_gel('masthead-search-term').value == '') return false; _gel('masthead-search').submit(); return false;;return true;" type="submit" id="search-btn" dir="ltr" tabindex="2" role="button"><span class="yt-uix-button-content">Search </span></button>
						<div id="masthead-search-terms" class="masthead-search-terms-border" dir="ltr">
							<label>
								<input id="masthead-search-term" class="search-term" name="search_query" value="" type="text" tabindex="1" onkeyup="goog.i18n.bidi.setDirAttribute(event,this)" title="Search">
							</label>
						</div>
					</form> 
				</div>
			</div>
		</div>
		
		<?php if(isset($_COOKIE['sessionuser'])) { ?> 
		<div id="masthead-expanded" class="hid">
    <div id="masthead-expanded-container">
      <span id="masthead-expanded-menu-shade"></span>
      <div id="masthead-expanded-menus-container">
          <div id="masthead-expanded-menu">
    <ul id="masthead-expanded-menu-list">
      <li class="masthead-expanded-menu-item first">
        <a href="/user/<?php echo htmlspecialchars($_COOKIE['sessionuser']); ?>">
My Channel
        </a>
      </li>
      <li class="masthead-expanded-menu-item">
        <a href="/my_videos?feature=mhee">
Video Manager
        </a>
      </li>
      <li class="masthead-expanded-menu-item">
        <a href="/my_subscriptions?feature=mhee">Subscriptions</a>
      </li>
      <li class="masthead-expanded-menu-item">
        <a href="/inbox?feature=mhee&amp;folder=messages">Inbox</a>
      </li>
      <li class="masthead-expanded-menu-item">
        <a href="/account?feature=mhee">
Settings
        </a>
      </li>
      <li class="masthead-expanded-menu-item">
        <a class="end" href="/logout">
Sign out</a>
        </a>
      </li>
    </ul>
      </div>

      </div>
	  
      <div id="masthead-expanded-lists-container">
        <div id="masthead-expanded-loading-message">Loading...</div>
      </div>
      <div class="clear"></div>
    </div>
  </div>
  <?php } ?>
  
