

$(function (){

	var $li = $('li');
	$li.css({
		'list-style': 'none',
	});

	var $links = $('a');
	$links.css({
		'font-size': '20px',
		'text-decoration': 'none',
		'color': '#fff',
		'padding': '10px',
		'background': '#007fff',
		'border': '1px solid #003eff',
		'border-radius': '5px 5px 0 0',
		'float': 'left',
		'margin-left': '5px',
		'margin-top': '15px'
	});
	var $par = $('p');
	$par.css({
		'margit-top': '25px',
		'overflow': 'auto',
		'height': '165px'
	});
	$('.wrap__link').click(function() {
            $('.text-block p').removeClass('active');
            $('#'+ $(this).data('id')).addClass('active');
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
		}, 1000);

	}, function(){
		$(this).next('.title').animate({
			opacity: 'hide',
			left: '60'
		}, 'fast')
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
		$('.title').show()
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