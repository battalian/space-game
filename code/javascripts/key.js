<script type="text/javascript">
 
	KEY_CODES = 
	{
	  37: 'left',
	  38: 'up',
	  39: 'right',
	  40: 'down'
	}
 
	KEY_STATUS = { keyDown:false };
	for (code in KEY_CODES) {
	  KEY_STATUS[KEY_CODES[code]] = false;
	}
 
	$(window).keydown(function (e) {
 
	  KEY_STATUS.keyDown = true;
	  e.preventDefault();
 
	  // perform functionality for keydown
	  if (KEY_CODES[e.keyCode]) {
	  	if(e.keyCode == 40)
	  	{
	  		// Arrow Down 
	  	}
 
	  	else if(e.keyCode == 39)
	  	{
	  		// Arrow Right	
	  	}
 
	  	else if(e.keyCode == 38)
	  	{
	  		// Arrow Up	
	  	}
 
	  	else if(e.keyCode == 37)
	  	{
	  		// Arrow Left	
	  	}
 
	  }
 
	}).keyup(function (e) {
	  KEY_STATUS.keyDown = false;
	  if (KEY_CODES[e.keyCode]) {	  	
	    e.preventDefault();
	    KEY_STATUS[KEY_CODES[e.keyCode]] = false;
	  }
	});
 
</script>