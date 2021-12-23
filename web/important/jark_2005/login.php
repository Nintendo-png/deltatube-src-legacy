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

	<?php include_once("header.php"); ?>
	
<div class="tableSubTitle">Log In</div>

<table width="790" align="center" cellpadding="0" cellspacing="0" border="0">
	<tr valign="top">
		<td style="padding-right: 15px;" width="510">
		
		
		<span class="highlight">What is JarkTube?</span>

		JarkTube is just another shitty old YouTube revival. With JarkTube you can:
		
		<ul>
		<li> Watch Videos
		<li> Comment on Videos
		<li> Share Videos
		<li> ... and that's mostly it!
		<li> Oh yeah, did I mention it has ajax code!
		</ul>

		<br><span class="highlight"><a href="signup.php">Sign up now</a> and open a free account.</span>
		<br><br><br>
		
		Normally, this is where the help link is but that's actually it.<br><br><br>
		</td>
		<td width="280">
		
		<table width="280" align="center" cellpadding="0" cellspacing="0" border="0" bgcolor="#E5ECF9">
			<tr>
				<td><img src="/img/box_login_tl.gif" width="5" height="5"></td>
				<td width="100%"><img src="/img/pixel.gif" width="1" height="5"></td>
				<td><img src="/img/box_login_tr.gif" width="5" height="5"></td>
			</tr>
			<tr>
				<td><img src="/img/pixel.gif" width="5" height="1"></td>
				<td align="center">
		<table width="100%" cellpadding="5" cellspacing="0" border="0">
			<form method="post" name="loginForm" id="loginForm" action="login.php">
			<input type="hidden" name="field_command" value="login_submit">
			  <?php 
			  if(isset($_SESSION['user'])) {
				  echo '<script>window.location.href = "index.php";</script>';
				  }
			  if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	 $thing = new user_tools;
     $hash = $thing->get_hash($_POST['field_login_username']);
	 if (password_verify($_POST['field_login_password'], $hash)) {
		 switch ($thing->get_flag($_POST['field_login_username'])) {
			 case 0:
		 $_SESSION['user'] = $_POST['field_login_username'];
     $thing->update_lastlogin($_SESSION['user'], 1);
		 echo '<script>window.location.href = "index.php";</script>';
		 break;
		 case 1:
		  echo 'This account is banned!';
		   break;
		   case 2:
		  echo 'This account has been deleted.';
		   break;
		    case 3:
		 $_SESSION['user'] = $_POST['field_login_username'];
     $thing->update_lastlogin($_SESSION['user'], 1);
		 echo '<script>window.location.href = "index.php";</script>';
		 break;
		 }
} else {
    echo 'Invalid password or username!';
}

} ?>
				<tr>
					<td align="center" colspan="2"><div style="font-size: 14px; font-weight: bold; color:#003366; margin-bottom: 5px;">JarkTube Log In</div></td>
				</tr>
				<tr>
					<td align="right"><span class="label">User Name:</span></td>
					<td><input tabindex="1" type="text" size="20" name="field_login_username" value=""></td>
				</tr>
				<tr>
					<td align="right"><span class="label">Password:</span></td>
					<td><input tabindex="2" type="password" size="20" name="field_login_password"></td>
				</tr>
				<tr>
					<td align="right"><span class="label">&nbsp;</span></td>
					<td><input type="submit" value="Log In"></td>
				</tr>
				<tr>
					<td align="center" colspan="2"><a onclick="alert('Too bad!')">Forgot your password?</a><br><br></td>
				</tr>
			</form>
			</table>
			
			</td>
				<td><img src="/img/pixel.gif" width="5" height="1"></td>
			</tr>
			<tr>
				<td><img src="/img/box_login_bl.gif" width="5" height="5"></td>
				<td><img src="/img/pixel.gif" width="1" height="5"></td>
				<td><img src="/img/box_login_br.gif" width="5" height="5"></td>
			</tr>
		</table>
			
		</td>
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