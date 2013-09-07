$(document).ready(function(){
	$('.call').on('click',function(){
 		 $(this).next('section').toggleClass('closed');
	});
});