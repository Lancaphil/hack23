<?php
	setcookie('user', $user['name'], time() - 3600, "/");
	setcookie('login', $user['login'], time() - 3600, "/");
	setcookie('id', $user['id'], time() - 3600, "/");
	header('Location: /');
?>