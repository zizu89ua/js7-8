

$(function (){

	var $li = $('li');
	$li.css({
		'list-style': 'none',
	});
	var $par = $('p');
	$par.css({
		'margit-top': '25px',
		'overflow': 'auto',
		'height': '165px'
	});

	$('li a').click(function() {
            $('.text-block p').removeClass('active');
            $('#'+ $(this).data('id')).addClass('active');
          	$('a').removeClass('select');
          	$(this).addClass('select');
          	
	})
     	
	// $('#wrap__leftab').on('click', function(){
	// 	$('#left-col').show();
	// 	$('#center-col').hide();
	// 	$('#right-col').hide();
	// });
	// $('#wrap__centertab').on('click', function(){
	// 	$('#center-col').show();
	// 	$('#left-col').hide();
	// 	$('#right-col').hide();
	// });
	// $('#wrap__righttab').on('click', function(){
	// 	$('#right-col').show();
	// 	$('#left-col').hide();
	// 	$('#center-col').hide();
		
	// })


	$('input').hover(function(){
		var $titleBlock = $(this).attr('title');
		$(this).parent('.text-box').append('<div class="titleBox" id="titleBox">' + $titleBlock + '</div>').animate({
			opacity: 'show',
			left: '50'
		}, 80);

	}, function(){
		$('.titleBox').animate({
			opacity: 'hide',
			left: '60',
		}, 10)

		$('.titleBox').remove();
		
	});
	
	$('.show-title').on('click', function(){
		$('input').parent('.text-box').append('<div class="titleBox" id="titleBox">' + $('input').attr('title') + '</div>');
	});
	$('.show-title').css({
		'background': '#fff',
		'border': '1px solid #ccc',
		'border-radius': '5px',
		'color': '#454545',
		'height': '40px',
		'margin-top': '20px',
		'outline': 'none',
		'width': '100px'
	})

});