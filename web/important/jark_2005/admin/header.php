<div class="www-header-mast">
    <a href="/"><img src="fulptube.png" class="www-logo"></a>
    <span class="www-motto">
    Mashing Cocks &trade;
    </span>
    <div class="www-user-info" <?php if(isset($_SESSION["user"])) { ?>style="margin-top: 14px!important;"<?php } ?>>
        <?php if(!isset($_SESSION['user'])) { ?>
            <strong><a style="border-left: 0px;" class="first" href="/sign_up">Sign Up</a></strong> 
            <a href="/help">Help</a> 
            <a class="" href="/sign_in">Sign In</a>
        <?php } else { ?>
            <div class="dropdown">
                <button onclick="dropdown()" style="color: blue;font-size: 14px;font-weight: bold;" class="dropbtn"><?php echo htmlspecialchars($_SESSION['user']); ?><div style="width: 0px;height: 0;border-left: 5px solid transparent;border-right: 5px solid transparent;border-top: 6px solid #4908d4;margin-left: 3px;display: inherit;"></div></button>
                <div id="dropdown-header" style="margin-left:6px;" class="dropdown-content">
                    <a href="/user/<?php echo htmlspecialchars($_SESSION['user']); ?>">My Channel</a>
                    <a href="/channel_subscriptions?n=<?php echo htmlspecialchars($_SESSION['user']); ?>">Subscriptions</a>
                    <a href="/inbox/">Inbox</a>
                    <a href="/video_manager">My Videos</a>
                    <a href="/favorites">Favorites</a>
                    <a href="/friends">Friends</a>
                </div>
            </div>
			<a href="/quicklist">QuickList (0)</a>
            <a href="/help">Help</a> 
            <a href="/logout">Sign Out</a> 
        <?php } ?>
    </div>
    <br>
    <div class="www-header-list">
        <a class="www-header-item" href="/">Home</a>
        <a class="www-header-item" href="/videos">Videos</a>
        <a class="www-header-item" href="/channels">Channels</a>
        <a class="www-header-item" href="/community">Community</a>

        <form class="search-form" autocomplete="off" action="/search_query">
            <input name="q" class="search-box">
            <input type="submit" class="search-button" value="Search">
        </form>

        <a href="/upload_video">
            <button style="cursor:pointer;" class="upload_button">
                Upload
            </button>
        </a>
    </div>
</div>

<div class="alerts">
    <?php if(isset($_GET['userdoesntexist'])) { ?>
    <div class="alert" id="userdoesntexist" style="background-color: #FFA3A3;">
        This user does not exist!
    </div>
    <?php } ?>

    <?php if(isset($_GET['groupdoesntexist'])) { ?>
    <div class="alert" id="groupdoesntexist" style="background-color: #FFA3A3;">
        This group does not exist!
    </div>
    <?php } ?>

    <?php if(isset($_GET['uploaded'])) { ?>
    <div class="alert" id="uploaded">
        Your video has successfully been uploaded! My PC is really shitty, so expect it to take 7 mins or longer.
    </div>
    <?php } ?>

    <?php if(isset($_GET['videodoesntexist'])) { ?>
    <div class="alert" id="videodoesntexist" style="background-color: #FFA3A3;">
        This video does not exist!
    </div>
    <?php } ?>

    <?php if(isset($_GET['pagedoesntexist'])) { ?>
    <div class="alert" id="videodoesntexist" style="background-color: #FFA3A3;">
        This page does not exist!
    </div>
    <?php } ?>
</div>
<script>
function dropdown() {
  document.getElementById("dropdown-header").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
} 
</script>