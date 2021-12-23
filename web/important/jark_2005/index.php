<html>
<head>
<title>JarkTube - Impregnate Yourself</title>
<link href="/css/styles.css?<?php echo date('His'); ?>" rel="stylesheet" type="text/css">
</head>
<body>
<table width="800" cellpadding="0" cellspacing="0" border="0" align="center">
	<tr>
		<td bgcolor="#FFFFFF" style="padding-bottom: 25px;">
		

<table width="100%" cellpadding="0" cellspacing="0" border="0">

	<?php include_once("header.php"); 
	$home = "home";
	if(isset($_GET['v'])) {
		$initvid = new video_tools;
		if(empty($initvid->validate_video_id($_GET['v']))) {
			echo '<script>window.location.href = "404.php"</script>';
		} else {
			echo '<script>window.location.href = "watch.php?v=' . $_GET['v'] . '"</script>';
		}
		} 
	?>
	
<table width="790" align="center" cellpadding="0" cellspacing="0" border="0">
	<tr valign="top">
		<td style="padding-right: 15px;">
		
		<?php if(!isset($_SESSION['user'])) { ?><table width="595" align="center" cellpadding="0" cellspacing="0" border="0" bgcolor="#E5ECF9">
			<tr>
				<td><img src="/img/box_login_tl.gif" width="5" height="5"></td>
				<td width="100%"><img src="/img/pixel.gif" width="1" height="5"></td>
				<td><img src="/img/box_login_tr.gif" width="5" height="5"></td>
			</tr>
			<tr>
				<td><img src="/img/pixel.gif" width="5" height="1"></td>
				<td style="padding: 5px 0px 5px 0px;">
				
								
				<table width="100%" cellpadding="0" cellspacing="0" border="0">
					<tr valign="top">
					<td width="33%" style="border-right: 1px dashed #369; padding: 0px 10px 10px 10px; color: #444;">
					<div style="font-size: 16px; font-weight: bold; margin-bottom: 5px;"><a href="browse.php">Watch</a></div>
					Instantly cringe at this website.</title>
					</td>
					<td width="33%" style="border-right: 1px dashed #369; padding: 0px 10px 10px 10px; color: #444;">
					<div style="font-size: 16px; font-weight: bold; margin-bottom: 5px;"><a href="my_videos_upload.php">Upload</a></div>
					Quickly find backdoors and XSS vulnerabilities.
					</td>
					<td width="33%" style="padding: 0px 10px 10px 10px; color: #444;">
					<div style="font-size: 16px; font-weight: bold; margin-bottom: 5px;"><a href="my_friends_invite.php">Share</a></div>
					Look at videos make by 11-year-olds desperate for robux.
					</td>
					</tr>
				</table>

									
				</td>
				<td><img src="/img/pixel.gif" width="5" height="1"></td>
			</tr>
			<tr>
				<td><img src="/img/box_login_bl.gif" width="5" height="5"></td>
				<td><img src="/img/pixel.gif" width="1" height="5"></td>
				<td><img src="/img/box_login_br.gif" width="5" height="5"></td>
			</tr>
		</table><?php } ?>


		<div style="padding: 10px 0px 10px 0px;">
		<table width="595" align="center" cellpadding="0" cellspacing="0" border="0" bgcolor="#EEEEDD">
			<tr>
				<td><img src="/img/box_login_tl.gif" width="5" height="5"></td>
				<td><img src="/img/pixel.gif" width="1" height="5"></td>
				<td><img src="/img/box_login_tr.gif" width="5" height="5"></td>
			</tr>
			<tr>
				<td><img src="/img/pixel.gif" width="5" height="1"></td>
				<td width="585">
				<div style="padding: 2px 5px 8px 5px;">
				<div style="float: right; padding: 1px 5px 0px 0px; font-weight: bold; font-size: 12px;"><a href="browse.php?s=mp">More Recently Viewed</a></div>
				<div style="font-size: 14px; font-weight: bold; color: #666633;">Recently Viewed...</div>
				
				<table width="100%" align="center" cellpadding="0" cellspacing="0" border="0">
				<tr>
							
						<td width="20%" align="center">
		
						<a href="index.php?v=Dy9x6GKZERg"><img src="/get_still.php?video_id=Dy9x6GKZERg" width="80" height="60" style="border: 5px solid #FFFFFF; margin-top: 10px;"></a>
						<div class="moduleFeaturedDetails" style="padding-top: 2px;">0 seconds ago</div>
		
						</td>
		
								
						<td width="20%" align="center">
		
						<a href="index.php?v=h1FA31Oliuo"><img src="/get_still.php?video_id=h1FA31Oliuo" width="80" height="60" style="border: 5px solid #FFFFFF; margin-top: 10px;"></a>
						<div class="moduleFeaturedDetails" style="padding-top: 2px;">0 seconds ago</div>
		
						</td>
		
								
						<td width="20%" align="center">
		
						<a href="index.php?v=sVyA5xe-UrE"><img src="/get_still.php?video_id=sVyA5xe-UrE" width="80" height="60" style="border: 5px solid #FFFFFF; margin-top: 10px;"></a>
						<div class="moduleFeaturedDetails" style="padding-top: 2px;">0 seconds ago</div>
		
						</td>
		
								
						<td width="20%" align="center">
		
						<a href="index.php?v=qVdDDhmjUSc"><img src="/get_still.php?video_id=qVdDDhmjUSc" width="80" height="60" style="border: 5px solid #FFFFFF; margin-top: 10px;"></a>
						<div class="moduleFeaturedDetails" style="padding-top: 2px;">0 seconds ago</div>
		
						</td>
		
								
						<td width="20%" align="center">
		
						<a href="index.php?v=PaluLFfv0EI"><img src="/get_still.php?video_id=PaluLFfv0EI" width="80" height="60" style="border: 5px solid #FFFFFF; margin-top: 10px;"></a>
						<div class="moduleFeaturedDetails" style="padding-top: 2px;">0 seconds ago</div>
		
						</td>
		
										</tr>
				</table>
				
				</div>
				</td>
				<td><img src="/img/pixel.gif" width="5" height="1"></td>
			</tr>
			<tr>
				<td><img src="/img/box_login_bl.gif" width="5" height="5"></td>
				<td><img src="/img/pixel.gif" width="1" height="5"></td>
				<td><img src="/img/box_login_br.gif" width="5" height="5"></td>
			</tr>
		</table>
		</div>
		

		<!-- begin recently featured 
		10 videos -->
		<table width="595" style="margin-top: 5px;" align="center" cellpadding="0" cellspacing="0" border="0" bgcolor="#CCCCCC">
			<tr>
				<td><img src="/img/box_login_tl.gif" width="5" height="5"></td>
				<td width="100%"><img src="/img/pixel.gif" width="1" height="5"></td>
				<td><img src="/img/box_login_tr.gif" width="5" height="5"></td>
			</tr>
			<tr>
				<td><img src="/img/pixel.gif" width="5" height="1"></td>
				<td width="585">
				<div class="moduleTitleBar">
				<div class="moduleTitle"><div style="float: right; padding: 1px 5px 0px 0px; font-size: 12px;"><a href="browse.php">See More Videos</a></div>
				Today's Featured Videos
				</div>
				</div>
		
				
					<div class="moduleEntry">
					<table width="565" cellpadding="0" cellspacing="0" border="0">
						<tr valign="top">
							<td><a href="index.php?v=_eoppP5jBoM"><img src="/get_still.php?video_id=_eoppP5jBoM" class="moduleEntryThumb" width="120" height="90"></a>
							</td>
							<td width="100%"><div class="moduleEntryTitle"><a href="index.php?v=_eoppP5jBoM">test</a></div>
							<div class="moduleEntryDescription">Glenn's Sky Dive</div>
					
							<div class="moduleEntryTags">
							Tags // <a href="results.php?search=Skydiving">Skydiving</a> : <a href="results.php?search=test">test</a> : <a href="results.php?search=test">test</a> : 							</div>
							
							<div class="moduleEntryDetails">Added: 0 hours ago by <a href="profile.php?user=bramjr">profile</a></div>
							<div class="moduleEntryDetails">Runtime: 00:00 | Views: 0 | Comments: 0</div>
														</td>
						</tr>
					</table>
					</div>
					
									
				</td>
				<td><img src="/img/pixel.gif" width="5" height="1"></td>
			</tr>
			<tr>
				<td><img src="/img/box_login_bl.gif" width="5" height="5"></td>
				<td><img src="/img/pixel.gif" width="1" height="5"></td>
				<td><img src="/img/box_login_br.gif" width="5" height="5"></td>
			</tr>
		</table>
		<!-- end recently featured -->

		
		</td>
		<td width="180">
		
		<table width="180" align="center" cellpadding="0" cellspacing="0" border="0" bgcolor="#FFEEBB">
			<tr>
				<td><img src="/img/box_login_tl.gif" width="5" height="5"></td>
				<td><img src="/img/pixel.gif" width="1" height="5"></td>
				<td><img src="/img/box_login_tr.gif" width="5" height="5"></td>
			</tr>
			<tr>
				<td><img src="/img/pixel.gif" width="5" height="1"></td>
				<td width="170">
								
				<div style="font-size: 16px; font-weight: bold; text-align: center; padding: 5px 5px 10px 5px;"><a href="
				<?php if(!isset($_SESSION['user'])) { ?>signup.php<?php } else { ?>my_friends_invite.php<?php } ?>">
				<?php if(!isset($_SESSION['user'])) { ?>Sign up for your free account!<?php } else { ?>Invite your friends to join JarkTube!<?php } ?></a></div>
				
								
				</td>
				<td><img src="/img/pixel.gif" width="5" height="1"></td>
			</tr>
			<tr>
				<td><img src="/img/box_login_bl.gif" width="5" height="5"></td>
				<td><img src="/img/pixel.gif" width="1" height="5"></td>
				<td><img src="/img/box_login_br.gif" width="5" height="5"></td>
			</tr>
		</table>
		<!--
		<div style="margin-top: 10px;">
		<table width="180" align="center" cellpadding="0" cellspacing="0" border="0" bgcolor="#FFCC99">
			<tr>
				<td><img src="/img/box_login_tl.gif" width="5" height="5"></td>
				<td><img src="/img/pixel.gif" width="1" height="5"></td>
				<td><img src="/img/box_login_tr.gif" width="5" height="5"></td>
			</tr>
			<tr>
				<td><img src="/img/pixel.gif" width="5" height="1"></td>
				<td width="170" style="padding: 5px; text-align: center;">
				<div style="font-weight: bold; font-size: 13px;">(Insert Month here) Video Contest!</div>

				<a href="watch.php?v=HUOXnag62mE&amp;search=backtoschool"><img src="/get_still.php?video_id=HUOXnag62mE" width="80" height="60" style="border: 5px solid #FFFFFF; margin-top: 10px;"></a>
				
				<div style="font-size: 16px; font-weight: bold; padding-top: 5px;"><a href="results.php?search=backtoschool">Back to school!</a></div>
				<br>

								
				<div style="font-size: 12px; font-weight: bold; margin-bottom: 7px;"><a href="signup.php">Join the contest now!</a></div>
				
								<div style="font-size: 10px; font-weight: normal; margin-bottom: 3px;"><a href="monthly_contest_august_2005.php">August winners!</a></div>
				
				</td>
				<td><img src="/img/pixel.gif" width="5" height="1"></td>
			</tr>
			<tr>
				<td><img src="/img/box_login_bl.gif" width="5" height="5"></td>
				<td><img src="/img/pixel.gif" width="1" height="5"></td>
				<td><img src="/img/box_login_br.gif" width="5" height="5"></td>
			</tr>
		</table>
		</div>
		-->
		<div style="margin: 10px 0px 5px 0px; font-size: 12px; font-weight: bold; color: #333;">Recent Tags:</div>
		<div style="font-size: 13px; color: #333333;">
		
			<a style="font-size: 17px;" href="results.php?search=test">test</a> :
		
					
		<div style="font-size: 14px; font-weight: bold; margin-top: 10px;"><a href="tags.php">See More Tags</a></div>
		
		</div>

		<div style="padding-top: 15px;">
		<table width="180" align="center" cellpadding="0" cellspacing="0" border="0" bgcolor="#EEEEDD">
			<tr>
				<td><img src="/img/box_login_tl.gif" width="5" height="5"></td>
				<td><img src="/img/pixel.gif" width="1" height="5"></td>
				<td><img src="/img/box_login_tr.gif" width="5" height="5"></td>
			</tr>
			<tr>
				<td><img src="/img/pixel.gif" width="5" height="1"></td>
				<td width="170">

				<div style="padding: 2px 5px 10px 5px;">
				<div style="font-size: 14px; font-weight: bold; margin-bottom: 8px; color: #666633;">Last 15 users online...</div>

				
					<div style="font-size: 12px; font-weight: bold; margin-bottom: 5px;"><a href="profile.php?user=ladylike3yn">ladylike3yn</a></div>

					<div style="font-size: 12px; margin-bottom: 8px; padding-bottom: 10px; border-bottom: 1px dashed #CCCC66;"><a href="profile_videos.php?user=ladylike3yn"><img src="/img/icon_vid.gif" alt="Videos" width="14" height="14" border="0" style="vertical-align: text-bottom; padding-left: 2px; padding-right: 1px;"></a> (<a href="profile_videos.php?user=ladylike3yn">0</a>)
					 | <a href="profile_favorites.php?user=ladylike3yn"><img src="/img/icon_fav.gif" alt="Favorites" width="14" height="14" border="0" style="vertical-align: text-bottom; padding-left: 2px; padding-right: 1px;"></a> (<a href="profile_favorites.php?user=ladylike3yn">0</a>)
					 | <a href="profile_friends.php?user=ladylike3yn"><img src="/img/icon_friends.gif" alt="Friends" width="14" height="14" border="0" style="vertical-align: text-bottom; padding-left: 2px; padding-right: 1px;"></a> (<a href="profile_friends.php?user=ladylike3yn">0</a>)</div>

									
				<div style="font-weight: bold; margin-bottom: 5px;">Icon Key:</div>
				<div style="margin-bottom: 4px;"><img src="/img/icon_vid.gif" alt="Videos" width="14" height="14" border="0" style="vertical-align: text-bottom; padding-left: 2px; padding-right: 1px;"> - Videos</div>
				<div style="margin-bottom: 4px;"><img src="/img/icon_fav.gif" alt="Favorites" width="14" height="14" border="0" style="vertical-align: text-bottom; padding-left: 2px; padding-right: 1px;"> - Favorites</div>
				<img src="/img/icon_friends.gif" alt="Friends" width="14" height="14" border="0" style="vertical-align: text-bottom; padding-left: 2px; padding-right: 1px;"> - Friends
				
				</div>

				</td>
				<td><img src="/img/pixel.gif" width="5" height="1"></td>
			</tr>
			<tr>
				<td><img src="/img/box_login_bl.gif" width="5" height="5"></td>
				<td><img src="/img/pixel.gif" width="1" height="5"></td>
				<td><img src="/img/box_login_br.gif" width="5" height="5"></td>
			</tr>
		</table>
		</div>
		
		</td>
	</tr>
</table>

		</div>
		</td>
	</tr>
</table>
<?php include_once("footer.php"); ?>

<div id="sheet" style="position:fixed; top:0px; visibility:hidden; width:100%; text-align:center;">
<table width="100%">
<tr>
<td align="center">
<div id="sheetContent" style="filter:alpha(opacity=50); -moz-opacity:0.5; opacity:0.5; border: 1px solid black; background-color:#cccccc; width:40%; text-align:left;"></div>
</td>
</tr>
</table>
</div>

<div id="tooltip"></div>

</body>
</html>