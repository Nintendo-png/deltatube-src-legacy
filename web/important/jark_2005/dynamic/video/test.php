<?php
$command = escapeshellcmd('ffprobe -i test.mp4 -v quiet -show_entries format=duration -hide_banner -of default=noprint_wrappers=1:nokey=1 -sexagesimal');
echo shell_exec($command);
?>