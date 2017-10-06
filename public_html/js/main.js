$(document).ready(function() {
	// use event parameter 'e' to target what user types in
	$('#search-user').on('keyup', function(e) {
		let username = e.target.value;

		// make ajax request to Github API
		$.ajax({
			url:'https://api.github.com/users/' + username,
			data: {

			}
		});
	});
});