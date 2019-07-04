<?php
$path_to_index = $index?'':'../';
$path_to_others = $index?'html/':'';
?>
<!DOCTYPE html>
<html>
	<head>
<?php
echo "\t\t<link href='{$path_to_index}css/main.css' rel='stylesheet' type='text/css'>\n";
echo "\t\t<link rel='icon' href='{$path_to_index}img/icon.png'>\n";
?>
		<title>TheNovi</title>
		<meta charset='utf-8'/>
	</head>

	<body>
		<div id='header'>
			<h1><a href='index.html'>TheNovi</a></h1>
			<div id='nav'>
				<ul>
<?php
	$a = array('Home' => "{$path_to_index}index.html", 'About' => "{$path_to_others}About.html", 'Contact' => "{$path_to_others}Contact.html", 'Projects' => "{$path_to_others}Projects.html");
	foreach ($a as $k => $v) {
		echo "\t\t\t\t\t<li><a href='$v'>$k</a></li>\n";
	}
?>
				</ul>
			</div>
		</div>