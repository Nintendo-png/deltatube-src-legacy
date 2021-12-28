		<?php require_once("important/function.php"); ?>
		<?php function tab_nav($tab) {
			if(strpos($_SERVER["REQUEST_URI"], "watch.php")) {
				echo "";
			} else {
				echo "background-color: #DDDDDD; margin: 5px 2px 0px 5px; border-bottom: 1px solid #DDDDDD;";
			}
		}?>
		<tr valign="top">
		<td width="130" rowspan="2" style="padding: 0px 5px 5px 5px;"><a href="index.php"><img src="/img/logo_sm.gif" width="120" height="48" alt="Ass" border="0" style="vertical-align: middle; "></a></td>
		<td valign="top">
		
		<table width="670" cellpadding="0" cellspacing="0" border="0">
			<tr valign="top">
				<td style="padding: 0px 5px 0px 5px; font-style: italic;"><?php 
				$strings = array("This is going to get hacked in two seconds.", "I have ideas this time.", "Bhief couldn't make anything shittier, right?", "Fulp Yourself", "Hackers get started", "How will I host this with Cox tho...", "This is pretty much just NoobTube.", "Named after the founder of a website called furries and Sonic fandom.", "I mean, was Fulp a good name?", "Bruh I feel bad for Scott here for having a crappy last name.", "I'm sorry for making this");
                echo $strings[array_rand($strings)]; ?></td>
				<td align="right">
				
				<table cellpadding="0" cellspacing="0" border="0">
					<tr>
		<?php if(isset($_SESSION['user'])) { ?>
<td>Hello, <a href="profile"><strong><?php echo $_SESSION['user']; ?></strong></a>!</td>
						<td style="padding: 0px 5px 0px 5px;">|</td>
						<td><img style="margin-top: 5px;" src="/img/mail.gif"> <a href="placeholder_for_mail">(0)</a></td>
						<td style="padding: 0px 5px 0px 5px;">|</td>
						<td><a href="logout.php">Log Out</a></td>
		<?php } else {
			?>
			<td><a href="signup.php"><strong>Sign Up</strong></a></td>
						<td style="padding: 0px 5px 0px 5px;">|</td>
						<td><a href="login.php">Log In</a></td>
		<?php } ?>
							
						
						<td style="padding: 0px 5px 0px 5px;">|</td>
						<td style="padding-right: 5px;"><a href="help.php">Help</a></td>
		
										
					</tr>
				</table>
				
				</td>
			</tr>
		</table>
		</td>
	</tr>
	<tr valign="bottom">
		<td>
		
		<table cellpadding="0" cellspacing="0" border="0">
			<tr>
				<td><!-- background-color: #DDDDDD; margin: 5px 2px 0px 5px; border-bottom: 1px solid #DDDDDD; -->
				<table style="background-color: #BECEEE; margin: 5px 2px 1px 0px;  " cellpadding="0" cellspacing="0" border="0">
					<tr>
						<td><img src="/img/box_login_tl.gif" width="5" height="5"></td>
						<td><img src="/img/pixel.gif" width="1" height="5"></td>
						<td><img src="/img/box_login_tr.gif" width="5" height="5"></td>
					</tr>
					<tr>
						<td><img src="/img/pixel.gif" width="5" height="1"></td>
						<td style="padding: 0px 20px 5px 20px; font-size: 13px; font-weight: bold;"><a href="index.php">Home</a></td>
						<td><img src="/img/pixel.gif" width="5" height="1"></td>
					</tr>
				</table>
				</td>
				<td>
				<table style=" background-color: #BECEEE; margin: 5px 2px 1px 0px; " cellpadding="0" cellspacing="0" border="0">
					<tr>
						<td><img src="/img/box_login_tl.gif" width="5" height="5"></td>
						<td><img src="/img/pixel.gif" width="1" height="5"></td>
						<td><img src="/img/box_login_tr.gif" width="5" height="5"></td>
					</tr>
					<tr>
						<td><img src="/img/pixel.gif" width="5" height="1"></td>
						<td style="padding: 0px 20px 5px 20px; font-size: 13px; font-weight: bold;"><a href="browse.php">Videos</a></td>
						<td><img src="/img/pixel.gif" width="5" height="1"></td>
					</tr>
				</table>
				</td>
				<td>
				<table style=" background-color: #BECEEE; margin: 5px 2px 1px 0px; " cellpadding="0" cellspacing="0" border="0">
					<tr>
						<td><img src="/img/box_login_tl.gif" width="5" height="5"></td>
						<td><img src="/img/pixel.gif" width="1" height="5"></td>
						<td><img src="/img/box_login_tr.gif" width="5" height="5"></td>
					</tr>
					<tr>
						<td><img src="/img/pixel.gif" width="5" height="1"></td>
						<td style="padding: 0px 20px 5px 20px; font-size: 13px; font-weight: bold;"><a href="channels.php">Channels</a></td>
						<td><img src="/img/pixel.gif" width="5" height="1"></td>
					</tr>
				</table>
				</td>
				<td>
				<table style=" background-color: #BECEEE; margin: 5px 2px 1px 0px; " cellpadding="0" cellspacing="0" border="0">
					<tr>
						<td><img src="/img/box_login_tl.gif" width="5" height="5"></td>
						<td><img src="/img/pixel.gif" width="1" height="5"></td>
						<td><img src="/img/box_login_tr.gif" width="5" height="5"></td>
					</tr>
					<tr>
						<td><img src="/img/pixel.gif" width="5" height="1"></td>
						<td style="padding: 0px 20px 5px 20px; font-size: 13px; font-weight: bold;"><a href="my_videos_upload.php">Upload</a></td>
						<td><img src="/img/pixel.gif" width="5" height="1"></td>
					</tr>
				</table>
				</td>
				<td>
				<table style=" background-color: #BECEEE; margin: 5px 2px 1px 0px; " cellpadding="0" cellspacing="0" border="0">
					<tr>
						<td><img src="/img/box_login_tl.gif" width="5" height="5"></td>
						<td><img src="/img/pixel.gif" width="1" height="5"></td>
						<td><img src="/img/box_login_tr.gif" width="5" height="5"></td>
					</tr>
					<tr>
						<td><img src="/img/pixel.gif" width="5" height="1"></td>
						<td style="padding: 0px 20px 5px 20px; font-size: 13px; font-weight: bold;"><a href="my_friends_invite.php">Invite Friends</a></td>
						<td><img src="/img/pixel.gif" width="5" height="1"></td>
					</tr>
				</table>
				</td>
			</tr>
		</table>
		</td>
	</tr>
	
</table>
<?php if(strpos($_SERVER["REQUEST_URI"], "watch.php")) { ?>
<table align="center" width="800" bgcolor="#DDDDDD" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 10px;">
	<tr>
		<td><img src="/img/box_login_tl.gif" width="5" height="5"></td>
		<td><img src="/img/pixel.gif" width="1" height="5"></td>
		<td><img src="/img/box_login_tr.gif" width="5" height="5"></td>
	</tr>
	<tr>
		<td><img src="/img/pixel.gif" width="5" height="1"></td>
		<td width="790" align="center" style="padding: 2px;">

		<table cellpadding="0" cellspacing="0" border="0">
			<tr>
				<td style="font-size: 10px;">&nbsp;</td>
				<td><a href="/web/20051211113823/http://youtube.com/browse.php?s=mr">Most Recent</a></td>
					<td style="padding: 0px 10px 0px 10px;">|</td>
				<td><a href="/web/20051211113823/http://youtube.com/browse.php?s=mp">Most Viewed</a></td>
					<td style="padding: 0px 10px 0px 10px;">|</td>
				<td><a href="/web/20051211113823/http://youtube.com/browse.php?s=md">Most Discussed</a></td>
					<td style="padding: 0px 10px 0px 10px;">|</td>
				<td><a href="/web/20051211113823/http://youtube.com/browse.php?s=mf">Top Favorites</a></td>
					<td style="padding: 0px 10px 0px 10px;">|</td>
				<td><a href="/web/20051211113823/http://youtube.com/browse.php?s=tr">Top Rated</a></td>
					<td style="padding: 0px 10px 0px 10px;">|</td>
				<td><a href="/web/20051211113823/http://youtube.com/browse.php?s=rf">Recently Featured</a></td>
					<td style="padding: 0px 10px 0px 10px;">|</td>
				<td><a href="/web/20051211113823/http://youtube.com/browse.php?s=r">Random</a></td>
				<td style="font-size: 10px;">&nbsp;</td>
			</tr>
		</table>
			
		</td>
		<td><img src="/img/pixel.gif" width="5" height="1"></td>
	</tr>
	<tr>
		<td style="border-bottom: 1px solid #FFFFFF"><img src="/img/box_login_bl.gif" width="5" height="5"></td>
		<td style="border-bottom: 1px solid #BBBBBB"><img src="/img/pixel.gif" width="1" height="5"></td>
		<td style="border-bottom: 1px solid #FFFFFF"><img src="/img/box_login_br.gif" width="5" height="5"></td>
		</tr>
</table>
<?php } else { ?>
<table align="center" width="800" bgcolor="#DDDDDD" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 10px;">
	<tr>
		<td><img src="/img/box_login_tl.gif" width="5" height="5"></td>
		<td><img src="/img/pixel.gif" width="1" height="5"></td>
		<td><img src="/img/box_login_tr.gif" width="5" height="5"></td>
	</tr>
	<tr>
		<td><img src="/img/pixel.gif" width="5" height="1"></td>
		<td width="790" align="center" style="padding: 2px;">

		<table cellpadding="0" cellspacing="0" border="0">
			<tr>
				<td style="font-size: 10px;">&nbsp;</td>
				
								
				<td style="  "><a href="my_videos.php">My Videos</a></td>
				<td style="padding: 0px 10px 0px 10px;">|</td>
				<td style="  "><a href="my_favorites.php">My Favorites</a></td>
				<td style="padding: 0px 10px 0px 10px;">|</td>
				<td style="  "><a href="my_friends.php">My Friends</a></td>
				<!-- <td>&nbsp;|&nbsp;</td>
				<td style="  "><a href="my_groups.php">My Groups</a></td> -->
				<td style="padding: 0px 10px 0px 10px;">|</td>
				<td style="  "><a href="my_messages.php">My Messages</a></td>
				<td style="padding: 0px 10px 0px 10px;">|</td>
				<td style="  "><a href="my_profile.php">My Profile</a></td>
				
								
								
								
				<td style="font-size: 10px;">&nbsp;</td>
			</tr>
		</table>
			
		</td>
		<td><img src="/img/pixel.gif" width="5" height="1"></td>
	</tr>
	<tr>
		<td style="border-bottom: 1px solid #FFFFFF"><img src="/img/box_login_bl.gif" width="5" height="5"></td>
		<td style="border-bottom: 1px solid #BBBBBB"><img src="/img/pixel.gif" width="1" height="5"></td>
		<td style="border-bottom: 1px solid #FFFFFF"><img src="/img/box_login_br.gif" width="5" height="5"></td>
	</tr>
</table>
<?php } ?>


<div style="padding: 0px 5px 0px 5px;">




<table align="center" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 10px;">
	<tr>
		<form name="searchForm" id="searchForm" method="GET" action="results.php">
	 		<td style="padding-right: 5px;"><input tabindex="1" type="text" value="" name="search" maxlength="128" style="color:#ff3333; font-size: 12px; width: 300px;"></td>
			<td><input type="submit" value="Search Videos"></td>
		</form>
	</tr>
</table>
<?php
//super secret ban check lol
	$thing = new user_tools;
	if(isset($_SESSION['user'])) {
if(($thing->get_flag($_SESSION['user']) == 1) || ($thing->get_flag($_SESSION['user']) == 2 )){
session_unset();
	echo '<script>window.location.href = "index.php";</script>';
}
	}
	?>