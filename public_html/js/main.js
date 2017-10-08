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
			console.log(user);
			$.ajax(

			).done(function(repos) {

			});
			$('#profile').html(`
				<div class="panel panel-default">
				  <div class="panel-heading">
					 <h3 class="panel-title">${user.name}</h3>
				  </div><!-- /.panel-heading -->
				  <div class="panel-body">
					 <div class="row">
					 	<div class="col-md-3">
					 		<img class="thumbnail avatar" src="${user.avatar_url}" alt="Github user image">
					 		<a target="_blank" class="btn btn-primary btn-block" href="${user.html_url}">View Profile</a>
						</div><!-- /.col-md-3 -->
						<div class="col-md-9">
						<span class="label label-default">Public Repos: ${user.public_repos}</span>
						<span class="label label-primary">Public Gists: ${user.public_gists}</span>
						<span class="label label-success">Followers: ${user.followers}</span>
						<span class="label label-info">Following: ${user.following}</span>
						<br><br>
						<ul class="list-group">
							<li class="list-group-item">Company: ${user.company}</li>
							<li class="list-group-item">Website/blog: ${user.blog}</li>
							<li class="list-group-item">Location: ${user.location}</li>
							<li class="list-group-item">Member Since: ${user.created_at}</li>
						</ul>
						</div><!-- /.col-md-9 -->
					</div><!-- /.row -->
				  </div><!-- /.panel-body -->
				</div><!-- /.panel panel-default -->
				<h3 class="page-header">Latest Repos</h3>
				<div id="repos"></div>
			`);
		});
	});
});