<?php header('Content-Type: application/json'); 
$share_ajax = array(
"url_long" => "http:\/\/web.archive.org\/web\/20121227011506\/http:\/\/www.youtube.com\/watch?v=hkkL_aDrIyU",
"url_short" => "http://jt.co/",
"share_html" => "<p>Oooh fancy YouTube Ajax code in use.</p>\r\n\r\n\r\n    <div class=\"clearL\"></div>",
"lang" => "en"
);
echo json_encode($share_ajax);
?>
