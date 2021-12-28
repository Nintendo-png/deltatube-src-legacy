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
	
<div class="highlight">
<br/>
<ul>
	<li><a href="#link_single" style="font-size: 13px; font-weight: bold;">How do I link to a single YouTube video?</a>
	<br>
	<br>
	<li><a href="#link_list" style="font-size: 13px; font-weight: bold;">How do I link to a list of YouTube videos?</a>
</ul>
</div>
<br/>
<br/>
<div class="tableSubTitle"><a name="link_single"></a>How to link to a single YouTube video</div>

<span class="highlight">
</span><span class="emphasisLabel">Go to the video that you want to share, and look for the <span class="standoutLabel">share details</span> section under the video player. There you will see 2 options.</span> <br>
	<br>
<center>
  <table width="760" border="0" cellspacing="0" cellpadding="0">
    <tr>
      <td width="380" valign="top">
        <div align="left"><img src="/web/20051031210132im_/http://www.youtube.com/img/2OptionsHowTo.jpg"/></div></td>
      <td width="400" valign="top">
        <div align="left">
          <table width="100%" border="0" cellpadding="0" cellspacing="0" class="contentBreaks">
            <tr>
              <td valign="top">                
			  <div align="left"> <span class="standoutLabel">Option 1: Video URL (Permalink)</span>
			  <br/>
                    <img src="/web/20051031210132im_/http://www.youtube.com/img/PlayerHowTo.gif" style="padding-top:6px; padding-bottom:10px;"/> <br/>
                    <span class="standardCopy"> This URL points directly to the YouTube page that plays the video. <br/>
                	Copy and paste this URL into an E-mail and send it to your friends.
                	</span> 
				</div>
			  </td>
            </tr>
          </table>
		  <br/>
          <br/> 
          <table width="100%" border="0" cellpadding="0" cellspacing="0" class="contentBreaks">
            <tr>
              <td valign="top">
                <div align="left">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td>
                        <div align="left"> <span class="standoutLabel">Option 2: Embeddable Player </span></div></td>
                    </tr>
                    <tr>
                      <td valign="top"><img src="/web/20051031210132im_/http://www.youtube.com/img/EmbeddablePlayer.gif" style="padding-top:6px; padding-bottom:10px;"/></td>
                    </tr>
                    <tr>
                      <td valign="top">
                        <div align="left">Copy and paste this HTML snippet into your website to insert the video player directly into your page. This way visitors will be able to play the video without leaving your site. You may alter the size of the video (by changing the width or height). Example below:<br>
                         
						 <br/>
						 
						  <object width="200" height="164">
                            <param name="movie" value="http://www.youtube.com/v/TTWAoHeJTPI">
                            <embed src="https://web.archive.org/web/20051031210132oe_/http://www.youtube.com/v/TTWAoHeJTPI" type="application/x-shockwave-flash" width="200" height="164"></embed>
                          </object>
                        </div>
                   
					  </td>
                    </tr>
                    <tr>
                      <td valign="top">
                        <div align="left"> <span class="standoutLabel">Tip:</span> Put YouTube videos on <img src="/web/20051031210132im_/http://www.youtube.com/img/BloggerIcon.gif" width="61" height="21" align="absmiddle"/>&nbsp;&nbsp; <img src="/web/20051031210132im_/http://www.youtube.com/img/EbayIcon.gif" width="51" height="21"/>&nbsp;&nbsp; <img src="/web/20051031210132im_/http://www.youtube.com/img/MySpaceIcon.gif" width="81" height="21"/> </div></td>
                    </tr>
                  </table>
              </div></td>
            </tr>
          </table>
          <br/>
          <br/>
      </div></td>
    </tr>
  </table>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
</center>
<a name="link_list"></a>
<div class="tableSubTitle">How do I link to a list of YouTube videos?</div>

<span class="standoutLabel">
Want to show off more than one of your own YouTube videos, or specifically tagged videos, on your website? Below are a few options! 
</span>
<br/>
<br/>
<br/>
<span class="standoutLabel">Option 1: Displaying a window of your own YouTube videos</span> 
<br/>
<br/>
By placing a small snippet of HTML code in your webpage, you can pull up a list of all your YouTube videos in a neat, little window. Take a look at the example below; on the left is the HTML snippet that you would copy+paste into your webpage.
Remember to replace the part of the code that says &quot;YOUR_USERNAME&quot; with your YouTube username. 
 As a result, a small box with your videos will be rendered as shown on the right.

	<br>
	<br>

	<table width="790">
	<tr>
		<td valign="top" align="left">
			<br/>
			<img src="/web/20051031210132im_/http://www.youtube.com/img/MySpaceSnippet.gif" width="183" height="60">
			<br/>

			<textarea cols="55" rows="6" id="snippet_embed" wrap="soft"><embed src="https://web.archive.org/web/20051031210132oe_/http://www.youtube.com/swf_show/YOUR_USERNAME" quality="high" width="425" height="350" name="myclips" align="middle" allowscriptaccess="sameDomain" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"/></textarea>

			<br/>
			<br/>
			<br/>
			<img src="/web/20051031210132im_/http://www.youtube.com/img/AllOtherSnippet.gif" width="212" height="60">
			<br/>

			<textarea cols="55" rows="6" id="snippet_iframe" wrap="soft"><iframe id="videos_list" name="videos_list" src="https://web.archive.org/web/20051031210132if_/http://www.youtube.com/videos_list.php?user=YOUR_USERNAME" scrolling="auto" width="265" height="300" frameborder="0" marginheight="0" marginwidth="0"></iframe></textarea>

	  <br/>      </td>
		<td valign="top" align="left">
			<br/>
			<span class="highlight"><img src="/web/20051031210132im_/http://www.youtube.com/img/WhatShowsUp.gif" width="124" height="60"></span>
			<br/>
			<iframe id="videos_list" name="videos_list" src="/web/20051031210132if_/http://www.youtube.com/videos_list_sample.html" scrolling="auto" width="265" height="300" frameborder="0" marginheight="0" marginwidth="0">
	  </iframe>	  </td>
	</tr>
</table>

	<br/>
	<br/>
	<br/>
	<br/>

	<span class="standoutLabel">Option 2: Creating links</span>
	<br/>
	<br/>
	You can also create links to your profile, your videos, or specifically tagged videos. (Thanks to <a href="https://web.archive.org/web/20051031210132/http://www.youtube.com/user/lsolesen">lsolesen</a> for suggesting this). 

 Remember to replace the part of the link that says YOUR_USERNAME with your YouTube username. 
  
 To pull up results for a tag search, simply replace the part of the link that says YOUR_QUERY with a tag term of your choice. For example, if you wanted to pull up results for the tag term wedding the link would be: <a href="https://web.archive.org/web/20051031210132/http://www.youtube.com/tags/wedding">http://www.youtube.com/tags/wedding</a></span>
    <br/>
	<br/>

	<table width="790" cellpadding="5" cellspacing="0">
	<tr bgcolor="#999999">
	  <td align="center" valign="top"><div class="brightLabel">Purpose</div></td>
	  <td align="center" valign="top"><div class="brightLabel">Link</div></td>
	</tr>
	<tr bgcolor="#EEEEEE">
		<td align="left" valign="top" style="border: 1px solid #CCCCCC; border-right:none;">To link to your profile page</td>
		<td align="left" valign="top" style="border: 1px solid #CCCCCC;">http://www.youtube.com/user/YOUR_USERNAME</td>
	</tr>
	<tr>
		<td valign="top" align="left" style="border: 1px solid #CCCCCC; border-right:none; border-top:none; border-bottom:none;">To link to your videos page</td>
		<td valign="top" align="left" style="border: 1px solid #CCCCCC; border-top:none; border-bottom:none;">http://www.youtube.com/videos/YOUR_USERNAME</td>
	</tr>
	<tr bgcolor="#EEEEEE">
		<td align="left" valign="top" style="border: 1px solid #CCCCCC; border-right:none;">To pull up results for a tag search</td>
		<td align="left" valign="top" style="border: 1px solid #CCCCCC;">http://www.youtube.com/tags/YOUR_QUERY</td>
	</tr>
</table>

	<br/>
	<br/>
	<br/>
	<br/>

	<div class="standoutLabel">Option 3: Displaying a window of specifically tagged videos</div> 
	<br/>
	<br/>
	
	You can even put an HTML snippet on your website that automatically pulls up the latest videos with a certain tag term. Let's say you want to show all videos related to Surfing on your website. In addition, you want your website to be automatically updated whenever a new video is uploaded with the tag term Surfing. By using the snippet below, you can do this! 

	<br/>
	<br/>

	<table width="790">
		<tr>
		<td valign="top">
	
		<img src="/web/20051031210132im_/http://www.youtube.com/img/HTMLSnippet.gif" width="116" height="60">
			<br/>

		<textarea cols="55" rows="6" id="snippet_embed" wrap="soft"><iframe id="videos_list" name="videos_list" src="https://web.archive.org/web/20051031210132if_/http://www.youtube.com/videos_list.php?tag=Surfing" scrolling="auto" width="265" height="400" frameborder="0" marginheight="0" marginwidth="0"></iframe></textarea>

			<br/>
			<br/>
		

		<span class="standoutLabel">Tip:</span> You can replace the word Surfing above to a tag term of your choice. </td>
		<td valign="top" align="left">
			<span class="highlight"><img src="/web/20051031210132im_/http://www.youtube.com/img/WhatShowsUp.gif" width="124" height="60"></span>
			<br/>

		<iframe id="videos_list" name="videos_list" src="https://web.archive.org/web/20051031210132if_/http://www.youtube.com/videos_list.php?tag=Surfing" scrolling="auto" width="265" height="400" frameborder="0" marginheight="0" marginwidth="0"></iframe>		</td>
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