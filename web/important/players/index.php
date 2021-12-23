<html>
<?php 
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
require_once($_SERVER['DOCUMENT_ROOT'] . "/important/function.php");	
	$initvid = new video_tools;
if(!isset($_POST['id'])) {  die(); }
if($initvid->validate_video_id($_POST['id']) == 0) { echo '<h1>This ID is not valid!</h1></br><a href="./">Go Back!</a>'; die(); }
$url = $_POST['pl'] . '?v=' . $_POST['id'];
header("Location: $url");
}
?>
<head>
<title>YouTube Player Loader</title>
</head>
<body>
<h1>YouTube Player Loader</h1>
<p>I patched these players to load get_video_info.php from my revival, JarkTube.</br></br>Type an Video ID from JarkTube and they should work fine.</p>
<form method="POST">
 <label for="pl">Choose a player:</label>

<select name="pl" id="pl">
  <option value="2011">2011</option>
  <option value="2013">2013</option>
  <option value="2016">2016</option>
  <option value="2019">2019 (broken-ish)</option>
</select> </br></br>
 <label for="id">Type an ID (must be from JarkTube ex: kh9ngakrf):</label>
<input name="id" id="id" type="text" required></br></br>
<button type="submit">Load</button>
</body>
</html>