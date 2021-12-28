
<?php require($_SERVER['DOCUMENT_ROOT'] . "/important/function.php"); ?>
<?php
   $thing = new user_tools;

    if($thing->get_flag($_SESSION['user']) < 3) {
        header("Location: /");
	}
?>
<!DOCTYPE html>
<html>
    <head>
        <title>JarkTube - Admin Port</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="www-core.css">
    </head>
    <body>
        <div class="www-core-container">
            <?php require("header.php"); ?>
            <h1>Admin Panel</h1>
            <?php
                echo "<b style='color: #c12c2c; font-size: 20px;'>Server</b><br>";
                echo "<b style='color: #c12c2c'>0%</b>: CPU Usage<br>";
                echo "<b style='color: #c12c2c'>0MB</b>: RAM allocated to PHP<br>";
                echo "<b style='color: #c12c2c;'>" . phpversion() . "</b>: PHP Version<br>";
                echo "<b style='color: #c12c2c'>IDK the</b>: FFMpeg status<br><hr class='thin-line'><br>";
        ?>
            <form action="delog">
                <b>Completely wipe user from database and their videos</b> <br><span style="font-size: 11px;" class="grey-text">Does not delete the video files itselves.</span>
                <span style="float: right;">
                    <input name="username" placeholder="Username"> 
                    <input type="submit" value="Remove">
                </span>
            </form><br>
            <form action="deletevid">
                <b>Delete Specific Video</b> <br><span style="font-size: 11px;" class="grey-text">DO NOT include SusCocks.rocks/watch?v= in your query. Only video ID.</span>
                <span style="float: right;">
                    <input name="vid" placeholder="Video ID"> 
                    <input type="submit" value="Remove">
                </span>
            </form><br>
            <form action="featurevid">
                <b>Feature a specific video</b> <br><span style="font-size: 11px;" class="grey-text">If you feature a shitty video, I will unfeature it.</span>
                <span style="float: right;">
                    <input name="vid" placeholder="Video ID"> 
                    <input type="submit" value="Feature" style="width: 63px;">
                </span>
            </form><br>
            <form action="deletethread">
                <b>Delete forum thread</b> <br><span style="font-size: 11px;" class="grey-text">Copy the <b>v</b> parameter in your thread that you are trying to delete. ex: /forum/thread?v=<b>3</b></span>
                <span style="float: right;">
                    <input name="id" placeholder="Thread ID"> 
                    <input type="submit" value="Delete" style="width: 63px;">
                </span>
            </form>
        </div>
        <div class="www-core-container">
        <?php require("footer.php"); ?>
        </div>

    </body>
</html>