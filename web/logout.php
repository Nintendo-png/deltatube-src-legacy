<?php
//logout page
// very simple script. Just expiring the cookie.
setcookie("sessionuser", "", time() - 3600);
header("Location: /");
?>