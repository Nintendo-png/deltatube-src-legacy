<div class="branded-page-v2-body" id="gh-activityfeed">
      <div class="profile clearfix profile-viewing" data-owner-external-id="">
      
          <div class="profile-metadata branded-page-box-padding clearfix ">
      <div class="profile-metadata-secondary-col">
	  <h3>Description</h3>

	  <?php if($owner == 1) { ?>
	</br>
	<p id="p_channel_desc"><?php echo htmlspecialchars($channel_data['channel_desc']); ?></p>
	  
	  <form id="description-edit" action="/r/update_desc.php" method="POST">
<textarea id="textfield-desc" placeholder="Type in channel description here..." class="yt-uix-form-input-textarea link-gplus-lightbox" data-upsell="comment" name="comment"><?php echo htmlspecialchars($channel_data['channel_desc']); ?></textarea>
 <p class="yt">
      <button class="yt-uix-button yt-uix-button-hh-primary" type="submit" id="channel-desc-submit"  role="button"><span class="yt-uix-button-content">Save </span></button>
	  <button class="yt-uix-button yt-uix-button-hh-default" type="button" id="channel-desc-cancel"><span class="yt-uix-button-content">Cancel </span></button>
    </p>
</form> 
</br>
<button class="yt-uix-button yt-uix-button-hh-default" type="button" id="channel-desc-edit"><span class="yt-uix-button-content"><i class="fas fa-plus-circle"></i> Channel description </span></button>
   <script>
const editButton=document.getElementById("channel-desc-edit"),cancelButton=document.getElementById("channel-desc-cancel"),descform=document.getElementById("description-edit"),descfield=document.getElementById("p_channel_desc");descform.classList.add("hid"),editButton.addEventListener("click",function(){editButton.classList.add("hid"),descfield.classList.add("hid"),descform.classList.remove("hid")},!0),cancelButton.addEventListener("click",function(){editButton.classList.remove("hid"),descfield.classList.remove("hid"),descform.classList.add("hid")},!0);
	   </script>
	  <?php } else { ?>		
<p id="p_channel_desc"><?php echo htmlspecialchars($channel_data['channel_desc']); ?></p>
	  <?php } ?>
            <div class="profile-stats">
  </div>

      </div>
	  

    </div>

      
  </div>


        



  </div>