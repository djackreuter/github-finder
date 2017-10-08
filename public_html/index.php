<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

		<!-- Bootstrap core CSS -->
		<link href="https://bootswatch.com/superhero/bootstrap.min.css" rel="stylesheet">
<!--		<link href="https://bootswatch.com/simplex/bootstrap.min.css" rel="stylesheet">-->
		<!-- Custom CSS -->
		<link rel="stylesheet" href="css/style.css">

		<!-- jQuery v3.2.1-->
		<script src="https://code.jquery.com/jquery-3.2.1.min.js"
			integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
			crossorigin="anonymous"></script>
		<!-- Javascript for Bootstrap -->
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
		<!-- Custom JS -->
		<script type="text/javascript" src="js/config.js"></script>
		<script type="text/javascript" src="js/main.js"></script>

		<title>Github Finder</title>
	</head>
	<body>
		<nav class="navbar navbar-inverse">
			<div class="container">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<a class="navbar-brand" href="#">Github Finder</a>
				</div>
				<div id="navbar" class="collapse navbar-collapse">
					<ul class="nav navbar-nav">

					</ul>
				</div><!--/.nav-collapse -->
			</div>
		</nav>
		<div class="container">
			<div class="search-container">
				<h1>Search Github Users</h1>
				<p class="lead">Enter a username to fetch a users profile info and repos</p>
				<input type="text" id="search-user" class="form-control" placeholder="Github Username...">
			</div><!-- /.search-container -->
			<br>
			<div id="profile"></div>
		</div><!-- /.container -->
	</body>
</html>
