
							<div class="guide-module-content ">
								<ul class="guide-toplevel">
								      <?php if(isset($_COOKIE['sessionuser'])) { ?>
            <div id="gh-personal" class="guide-section guide-header">
    <div class="guide-item-container personal-item">

      <h3>
        <a href="/user/<?php echo htmlspecialchars($_COOKIE['sessionuser']); ?>" class="guide-item  narrow-item" data-channel-id="<?php echo $initusr->get_uid_by($_COOKIE['sessionuser']); ?>" data-upsell="guide">
          <span class="display-name"><?php echo htmlspecialchars($_COOKIE['sessionuser']); ?></span>
        </a>
      </h3>
      <ul class="guide-user-links yt-box">
	  <?php if(in_array($_COOKIE['sessionuser'], $admins)) { ?>
	  <li>
          <a class="guide-item " href="/admin/" data-channel-id="admin">
            Admin Panel
          </a>
        </li>
	<?php } ?>
        <li id="watch-later-guide-item" data-notification-text="Watch Later updated">
          <a class="guide-item " href="/feed/watch_later" data-channel-id="watch_later">
            Watch Later
          </a>
        </li>
        <li>
          <a class="guide-item " href="/feed/history" data-channel-id="history">
            Watch History
          </a>
        </li>
          <li id="playlists-guide-item" data-notification-text="Playlist updated">
            <a class="guide-item " href="/channel/UC7t-vnxYcjS0wv9mifQK1NA/videos?view=1" data-channel-id="playlists">
              Playlists
            </a>
          </li>
      </ul>
    </div>
  </div>
  <hr class="guide-section-separator">
	  <?php } else { ?>
									<li id="guide-subscriptions-section" class="guide-section guide-section-no-counts">
										<div id="guide-subs-footer-container">
											<div id="guide-subscriptions-container">
												<div class="guide-channels-content">
													<ul id="guide-channels" class="guide-channels-list guide-item-container yt-uix-scroller filter-has-matches">
													
														<li class="guide-channel">
															<a class="guide-item  guide-item-selected narrow-item" href="/" title="Popular on JarkTube" data-channel-id="youtube"> <span class="thumb"><span class="video-thumb ux-thumb yt-thumb-square-18 "><span class="yt-thumb-clip"><span class="yt-thumb-clip-inner"><img src="/yts/img/pixel-vfl3z5WfW.gif" alt="Thumbnail" data-thumb-manual="1" data-thumb="/yts/img/popular.jpg?<?php echo date("His"); ?>" data-group-key="guide-channel-thumbs" width="18"><span class="vertical-align"></span></span>
																</span>
																</span>
																</span> 
																<span class="display-name"><span>Popular on JarkTube</span></span>
															</a>
														</li>
														
														<li class="guide-channel">
															<a class="guide-item " href="/music?feature=guide" title="Music" data-channel-id="music"> <span class="thumb"><span class="video-thumb ux-thumb yt-thumb-square-18 "><span class="yt-thumb-clip"><span class="yt-thumb-clip-inner"><img src="/yts/img/pixel-vfl3z5WfW.gif" alt="Thumbnail" data-thumb-manual="1" data-thumb="/yts/img/music.jpg?<?php echo date("His"); ?>" data-group-key="guide-channel-thumbs" width="18"><span class="vertical-align"></span></span>
																</span>
																</span>
																</span> <span class="display-name">
																<span>Music</span> </span>
															</a>
														</li>
														
														<li class="guide-channel">
															<a class="guide-item " href="/gaming?feature=guide" title="Gaming" data-channel-id="gaming"> <span class="thumb"><span class="video-thumb ux-thumb yt-thumb-square-18 "><span class="yt-thumb-clip"><span class="yt-thumb-clip-inner"><img src="/yts/img/pixel-vfl3z5WfW.gif" alt="Thumbnail" data-thumb-manual="1" data-thumb="/yts/img/gaming.jpg?<?php echo date("His"); ?>" data-group-key="guide-channel-thumbs" width="18"><span class="vertical-align"></span></span>
																</span>
																</span>
																</span> <span class="display-name">
        <span>Gaming</span> </span>
															</a>
														</li>
														<li class="guide-channel">
															<a class="guide-item " href="/web/20121218011023/https://www.youtube.com/channel/HCPvDBPPFfuaM?feature=guide" title="News" data-channel-id="HCPvDBPPFfuaM"> <span class="thumb"><span class="video-thumb ux-thumb yt-thumb-square-18 "><span class="yt-thumb-clip"><span class="yt-thumb-clip-inner"><img src="/yts/img/pixel-vfl3z5WfW.gif" alt="Thumbnail" data-thumb-manual="1" data-thumb="/yts/img/news.jpg?<?php echo date("His"); ?>" data-group-key="guide-channel-thumbs" width="18"><span class="vertical-align"></span></span>
																</span>
																</span>
																</span> <span class="display-name">
        <span>News</span> </span>
															</a>
														</li>
														<li class="guide-channel">
															<a class="guide-item " href="/web/20121218011023/https://www.youtube.com/feed/UCBR8-60-B28hp2BmDPdntcQ?feature=guide" title="Spotlight" data-channel-id="UCBR8-60-B28hp2BmDPdntcQ"> <span class="thumb"><span class="video-thumb ux-thumb yt-thumb-square-18 "><span class="yt-thumb-clip"><span class="yt-thumb-clip-inner"><img src="/yts/img/pixel-vfl3z5WfW.gif" alt="Thumbnail" data-thumb-manual="1" data-thumb="/yts/img/spotlight.jpg?<?php echo date("His"); ?>" data-group-key="guide-channel-thumbs" width="18"><span class="vertical-align"></span></span>
																</span>
																</span>
																</span> <span class="display-name">
        <span>Spotlight</span> </span>
															</a>
														</li>
														<li id="guide-filter-no-results"> No channels found </li>
													</ul>
												</div>
											</div>
											</div>
									</li>
	  <?php } ?>
	  <?php if(isset($_COOKIE['sessionuser'])) { ?>
	  
	           <li class="guide-section guide-static-section guide-section-no-counts">
              <ul class="guide-item-container guide-system-feeds">
                    <li>
    <a class="guide-item " href="/"  data-channel-id="what_to_watch">
      <span class="display-name" title="What to watch">
        What to watch
      </span>
    </a>
  </li>


                    <li>
    <a class="guide-item " href="/feed/subscriptions"  data-channel-id="subscriptions">
      <span class="display-name" title="My subscriptions">
        My subscriptions
      </span>
    </a>
  </li>


                      <li>
    <a class="guide-item " href="/feed/social"  data-channel-id="social">
      <span class="display-name" title="Social">
        Social
      </span>
    </a>
  </li>


              </ul>
            </li>
			
	  <?php } else { ?>  
	  <hr class="guide-section-separator">
									<li id="guide-subscription-suggestions-section" class="guide-section guide-section-no-counts">
										<h3>
Channels for you
                </h3>
										<div class="guide-recommendations-list">
											<div class="guide-channels-content">
												<ul class="guide-channels-list guide-item-container yt-uix-scroller filter-has-matches">
												
											<li class="guide-channel">
														<a class="guide-item " href="feed/UCf4FYTsGFFcdc68AUPIU3RA" title="BuzzFeed" data-channel-id="UCf4FYTsGFFcdc68AUPIU3RA"> <span class="thumb"><span class="video-thumb ux-thumb yt-thumb-square-18 "><span class="yt-thumb-clip"><span class="yt-thumb-clip-inner"><img src="/yts/img/pixel-vfl3z5WfW.gif" alt="Thumbnail" data-thumb-manual="1" data-thumb="//web.archive.org/web/20121218011023/https://i3.ytimg.com/i/f4FYTsGFFcdc68AUPIU3RA/1.jpg" data-group-key="guide-channel-thumbs" width="18"><span class="vertical-align"></span></span>
															</span>
															</span>
															</span> <span class="display-name">
        <span>BuzzFeed</span> </span>
														</a>
													</li>
													
													<li id="guide-filter-no-results"> No channels found </li>
												</ul>
											</div>
										</div>
										</li>
	  <?php } ?>
	  <?php if(isset($_COOKIE['sessionuser'])) { ?>
	  <hr class="guide-section-separator">
	  <li id="guide-subscriptions-section" class="guide-section without-filter">
              <h3>Subscriptions</h3>
            <div id="guide-subs-footer-container">
                  <div id="guide-subscriptions-container">
      <div class="guide-channels-content">
      <ul  id="guide-channels" class="guide-channels-list guide-item-container yt-uix-scroller filter-has-matches">
	  
              <li class="guide-channel">
    <a class="guide-item yt-uix-sessionlink "
      href="/feed/UCDdjVhE01eP9315NLcK8ocg"
      title="succulent63">
        <span class="thumb"><span class="video-thumb ux-thumb yt-thumb-square-18 "><span class="yt-thumb-clip"><span class="yt-thumb-clip-inner"><img alt="Thumbnail" data-thumb-manual="1" src="http://s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif" data-group-key="guide-channel-thumbs" data-thumb="//i1.ytimg.com/i/DdjVhE01eP9315NLcK8ocg/1.jpg" width="18" ><span class="vertical-align"></span></span></span></span></span>
      <span class="display-name">
        <span>succulent63</span>
      </span>
    </a>
  </li>


        <li id="guide-filter-no-results">
No channels found
        </li>
      </ul>
  </div>

  </div>
  


            </div>
          </li>
	  <?php } ?>
										<hr class="guide-section-separator">
										    <div id="gh-management" class="guide-management">
										<a href="/channels?feature=guide" data-channel-id="guide_builder" class="guide-management-section guide-management-plus-only guide-item "> <span class="thumb guide-management-plus-icon">
      <img src="/yts/img/pixel-vfl3z5WfW.gif" alt="">
    </span> <span class="guide-management-caption">
Browse channels
    </span> </a>
	<?php if(isset($_COOKIE['sessionuser'])) { ?>
	<a href="/channels?feature=guide" class="guide-management-section guide-management-settings-only guide-item "> <span class="thumb guide-management-settings-icon">
      <img src="/yts/img/pixel-vfl3z5WfW.gif" alt="">
    </span> <span class="guide-management-caption">
Manage Subscriptions
    </span> </a>
	<?php } ?>
	</div>
	
								
								</ul>
								<?php if(!isset($_COOKIE['sessionuser'])) { ?>
								<div class="guide-section guide-header signup-promo guided-help-box">
									<p> Sign in to add channels to your guide and for great recommendations! </p>
									<div id="guide-builder-promo-buttons" class="signed-out clearfix"> <a href="/sign_in" class="yt-uix-button   yt-uix-sessionlink yt-uix-button-hh-primary"><span class="yt-uix-button-content">Sign In &#8250;</span></a> </div>
								</div>
								<?php } ?> 
							</div>
							