<?php
//hey look xml code
header('Content-Type: application/xml');
$message = "There is none!";
$code = "0";
$xml = '<?xml version="1.0" encoding="utf-8"?>
<root>
<error_message>' . $message . '</error_message>
<return_code>' . $code . '</return_code>
</root>';
echo $xml;
?>