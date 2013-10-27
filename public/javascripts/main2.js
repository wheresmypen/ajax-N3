$(function() {
	$('#newt').on('submit', function(e){
		e.preventDefault();

		var information = $('#cooties').val();

		$.post('/', {data: information}, function(data){
			console.log(data.data);
		})
	})

})