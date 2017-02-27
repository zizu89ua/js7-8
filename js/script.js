

$(function (){
	// var $link = $('a');
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
	$('#wrap__leftab').on('click', function(){
		$('#left-col').show();
		$('#center-col').hide();
		$('#right-col').hide();
	});
	$('#wrap__centertab').on('click', function(){
		$('#center-col').show();
		$('#left-col').hide();
		$('#right-col').hide();
	});
	$('#wrap__righttab').on('click', function(){
		$('#right-col').show();
		$('#left-col').hide();
		$('#center-col').hide();
		
	})

});