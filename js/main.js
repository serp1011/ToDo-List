$(function(){
	
	$('.navbar__btn-priority').click(function(){
		$(this).toggleClass("navbar__btn-priority--active");
		$('.priority').toggleClass("priority--active");
		$('.priority').slideToggle();
	});
	
	$('.popup-modal').magnificPopup({
		preloader: false,
		modal: true,
		removalDelay: 300,
		mainClass: 'mfp-fade'
	});
	
	$(document).on('click', '.popup-modal-dismiss', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});

	$('.btn-menu').click(function(){
		$(this).toggleClass('btn-menu--active');
		$('.navbar').toggleClass('navbar--active');
		$('.main__cover').toggleClass('main__cover--active');
	});
	
	if ( $('[type="datetime-local"]').prop('type') != 'datetime-local' ) {
  	$('[type="date"]').datepicker();
	}

	


});