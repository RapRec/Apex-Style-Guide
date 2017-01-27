/**
 * As the page loads, call these scripts
 */
jQuery(document).ready(function($) {

	/* 
	 * JQUERY MOBILE NAVIGATION
	 * toggle sliding nav and show/hide class
	 */
	$(".menu-icon").on("click", function(){
	    $(this).toggleClass('open-close');
	    $("#mobile").slideToggle();
	    $("#mobile").toggleClass('open-close');
	}); 

});
