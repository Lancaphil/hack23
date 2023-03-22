<?php
  $login = filter_var(trim($_POST['login']),
  FILTER_SANITIZE_STRING);
  $name = filter_var(trim($_POST['name']),
  FILTER_SANITIZE_STRING);
  $pass = filter_var(trim($_POST['pass']),
  FILTER_SANITIZE_STRING);
  $id = filter_var(trim($_POST['id']),
  FILTER_SANITIZE_STRING);

  if(mb_strlen($login) <5 || mb_strlen($login) > 50) {
    echo "Недопустимая длина логина";
    exit();
  } else if(mb_strlen($name) <1 || mb_strlen($name) > 30) {
    echo "Недопустимая длина имени";
    exit();
  } if(mb_strlen($pass) <5 || mb_strlen($pass) > 24) {
    echo "Недопустимая длина пароля (от 5 до 90 символов)";
    exit();
  }

  $pass = md5($pass."qwdsacfwe4325");

 require "blocks/connect.php";
 $mysql->query("INSERT INTO `users` (`login`, `pass`, `name`) 
 VALUES('$login', '$pass', '$name')"); 
 
 $mysql->close();

 header('Location: /');

?>