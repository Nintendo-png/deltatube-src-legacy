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
<script>
function switcher() {
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
p1.style.display = "none";
p2.style.display = "block";
}
function switcher2() {
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
p1.style.display = "block";
p2.style.display = "none";
}
</script>
	<?php include_once("header.php"); ?>
	<div id="p1">
	<div class="tableSubTitle">Video Upload (Step 1 of 2) </div><br/>
<div style="margin: auto; width: 80%;">
 <form method="POST">
  <label class="bold" for="vtitle">Title:</label>
  <input size="60" type="text" id="vtitle" name="vtitle" required><br/><br/>
  <label class="bold" for="vdesc">Description:</label>
  <input style="height: 60px;" size="70" type="text" id="vdesc" name="vdesc" required><br/><br/>
  <label class="bold" for="vtags">Tags:</label>
    <input size="60" type="text" id="vtags" name="vtags" required><br/>
	<p>Enter a list of three or more keywords separated by commas, describing your video.</p>
	<br/>
	 <button onclick="switcher()" type="button">Continue</button> 
</div>

		</div>
		<div id="p2" style="display: none;">
			<div class="tableSubTitle">Video Upload (Step 2 of 2) </div><br/>
		<div style="margin: auto; width: 80%;">
  <label class="bold" for="vdesc">File:</label><br/>

<input style="margin-left: 35px;" type="file"
       id="video" name="video"
       accept=".mp4, .flv, .wmv" required>
	   <p>Max file limit 10 MB. No copyrighted or NSFW allowed.</p><br/>
	   <p>Your video will not upload if any forms are invaild or empty</p>
	   <button onclick="switcher2()" type="button">Back</button>&nbsp; 
	    <button type="submit">Upload</button> 
	   
</div>
		</form> 
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