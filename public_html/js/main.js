$(document).ready(function() {
	// use event parameter 'e' to target what user types in
	$('#search-user').on('keyup', function(e) {
		let username = e.target.value;

		// make ajax request to Github API
		$.ajax({
			url: 'https://api.github.com/users/' + username,
			data: {
				client_id: config.client_id,
				client_secret: config.client_secret
			}
		}).done(function(user) {
			$('#profile').html(`
							<div class="panel panel-default">
				  <div class="panel-heading">
					 <h3 class="panel-title">${user.name}</h3>
				  </div>
				  <div class="panel-body">
					 <div  class="row">
					 	<div class="col-md-3">
					 		<img class="thumbnail avatar" src="${user.avatar_url}" alt="Github user image">
						</div>
						<div class="col-md-9">
						
						</div>
					</div>
				  </div>
				</div>
			`)
		});
	});
});