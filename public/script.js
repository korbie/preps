$(document).ready(function(){

	var submitData = function(){
		$.ajax({
			method: 'POST',
			data: {word : $('#word').val()},
			success: function(data){
				data.forEach(function(e){
					console.log(e.word);
					$('<li>').html(e.word).appendTo($('#list'));
				});
				console.log('success');
			},
			error: function(err){console.log(err);}
		})
	};

	$('#submit').on('click', submitData);

}

)