<!DOCTYPE html>
<html lang="hu">

<head>
   <meta charset="UTF-8">
   <link rel="stylesheet" href="css/style.css">
   <link rel="icon" type="image/x-icon" href="img/mug-hot-solid.svg">
   <title>Sending HTML email using PHP</title>
</head>

<body>
   <main>
      <article style="text-align: center;">
      <h3>Itt egy PHP mail() függvény próbája található</h3>
      <h3>&#9760;</h3>
      <hr>
      <p>Azonban a GitHub nem igazán támogatja, így nem jelenik meg az "echo"</p>
      <h3>&#9785; </h3>
      <p>és SMTP Server nélkül sem működik helyesen - talán a PHP tanfolyam után ...</p>
      <hr>
      <p>de lehetőség van a visszalépésre</p>
      <h2>&#9787;</h2>
      </article>
      <?php

      $to = "hferko67@freemail.hu";
      $subject = $_POST['subject'];
      $txt = $_POST['message'];
      $headers = $_POST['emil'];

      $retval = mail($to, $subject, $txt, $headers);

      if ($retval == true) {
         echo "Üzenet küldése sikeres...";
      } else {
         echo "Az üzenet elküldése sikertelen...";
      }
      ?>
      <button class="gomb" onclick="history.go(-1)">&laquo; Vissza az előző oldalra</button>
   </main>
</body>

</html>