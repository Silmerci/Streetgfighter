$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	}) .mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
  	}) .mousedown(function() {
    	playHadouken();
    	$('.ryu-ready').hide();
    	$('.ryu-throwing').show();
		$('.hadouken').finish().show()
  			.animate(
    		{'left': '300px'},
    		500,
    		function() {
      		$(this).hide();
      		$(this).css('left', '-212px');
    		}
  		);
	}).mouseup(function() {
   	 	$('.ryu-throwing').hide();
  		$('.ryu-ready').show();
  	})
  	//var x = jQuery.Event( "keydown", { keyCode: 88 } );
  	//jQuery( "body" ).trigger( x );

  	$(function() {

    $(window).keydown(function(event) 
    { 
        if ((event.keyCode == 88) && ($('div').hasClass('ryu-cool')))
        { 
        	$('.ryu-ready').hide();
  			$('.ryu-cool').show();
        } 

    });

	});
	$(function() {

    $(window).keyup(function(event) 
    { 
        if ((event.keyCode == 88) && ($('div').hasClass('ryu-cool')))
        { 
        	$('.ryu-cool').hide();
  			$('.ryu-ready').show();
        } 

    });

	});

  });
function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}
