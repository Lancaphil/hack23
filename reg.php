<!DOCTYPE html>
<html>
  <head>
    <title>Регистрация</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="css/style.css">
  </head>

  <body>
    <div class="container mt-4">
      <?php
        if(isset($_COOKIE['user']) == false):
      ?>
    <div class="row">
 <div class="col">
  <h1>Форма регистрации</h1><br>
  <form action="check.php" method="post">
  <input type="text" class="form-control" name="login" id="login" placeholder="Введите логин"><br>
  <input type="text" class="form-control" name="name" id="name" placeholder="Введите имя"><br>
  <input type="text" class="form-control" name="pass" id="pass" placeholder="Введите пароль"><br>
  <button class="btn btn-succes"
  type="submit">Зарегистрироваться</button>
  </form>
 </div>
 <div class="col">
  <h1>Форма авторизации</h1><br>
  <form action="auth.php" method="post">
  <input type="text" class="form-control" name="login" id="login" placeholder="Введите логин"><br>
  <input type="text" class="form-control" name="pass" id="pass" placeholder="Введите пароль"><br>
  <button class="btn btn-succes"
	type="submit">Авторизоваться</button>
  </form>
 </div>
 <?php else: ?>
  <p>xdd kot  <?=$_COOKIE['user']?>. выйти<a href="/exit.php"> здесь</a></p>
 <?php endif;?>

    </div>
    </div>


  </body>
</html>
