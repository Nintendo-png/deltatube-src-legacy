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
	$ut = new user_tools;
	  if(isset($_SESSION['user'])) {
				  echo '<script>window.location.href = "index.php";</script>';
				  }
	?>

<div class="tableSubTitle">Sign Up</div>

Please enter your account information below. All fields are required.<br><br>
<table width="100%" cellpadding="5" cellspacing="0" border="0">
<form method="post" name="theForm" id="theForm" name="theForm" id="theForm">

<script src="/important/ajax/signup_script.js?<?php echo date('His'); ?>"></script>

<input type="hidden" name="field_command" value="signup_submit">

	<tr>
		<td width="200" align="right"><span class="label">Email Address:</span></td>
		<td><input type="text" size="30" id="email" maxlength="60" name="email" value="" required></td>
	</tr>
	<tr>
		<td align="right"><span class="label">User Name:</span></td>
		<td><input type="text" size="20" id="uname"maxlength="20" name="username" value="" required></td>
	</tr>
	<tr>
		<td align="right"><span class="label">Password:</span></td>
		<td><input type="password" size="20" id="password_1" maxlength="20" name="password_1" value="" required></td>
	</tr>
	<tr>
		<td align="right"><span class="label">Retype Password:</span></td>
		<td><input type="password" size="20" id="password_2" maxlength="20" name="password_2" value="" required></td>
	</tr>
	<tr>
		<td>&nbsp;</td>
		<td><br>- I certify I am over 0 years old.
		<br>- I agree to the <a> no existant terms of use</a> and <a>privacy policy link</a>.</td>
	</tr>
	<tr>
		<td>&nbsp;</td>
		<td><input name="signup_button" type="button" value="Sign Up" onclick="signup_Validator()"></td>
	</tr>
	</form>
	<tr>
		<td>&nbsp;</td>
		<td><br>Or, <a href="index.php">return to the homepage</a>.</td>
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