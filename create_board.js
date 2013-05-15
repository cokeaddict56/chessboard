
$(document).ready(function() {
	

	var board = $('#board');
	
	var html = '<table>';	
	for(var i=0; i<8; i++) {
		html += '<tr>';
		for(var j=0; j<8; j++) {
			html += '<td>';
			html += '&#9812;';
			html += '</td>';
		}
		html += '</tr>';
	}
	html += '</table>';

	$(html).appendTo(board);

	var not = 0;
	var color = 'gray';
	$('#board tr').each(function() { 
		if( not == 0 ) {
			alt = 'odd';
			not = 1;
		} else {
			alt = 'even';
			not = 0;
		}
		
		$(this).find('td').filter(':'+alt).each(function() {
			$(this).css('background-color',color);	
		});
	});
	
	



	
});
