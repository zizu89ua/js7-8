

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

	$('a').click(function() {
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
		$(this).next('.title').animate({
			opacity: 'show',
			left: '50'
		}, 80);

	}, function(){
		$(this).next('.title').animate({
			opacity: 'hide',
			left: '60'
		}, 10)
		
	})
	$('.title').css({
		'background': '#4c79b3',
		'border': '2px solid #cdc',
		'border-radius': '5px',
		'color': '#fff',
		'font-size': '15px',
		'padding': '10px 5px',
	})
	$('.show-title').on('click', function(){
		$('.title').show();
	})
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