<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <?php
        ini_set("sendmail_from", "serwer@serwer.pl");
       $email = $_POST['email'];
       $content = $_POST['content'];

       if(mail("admin@serwer.pl", 'Wiadomość ze strony koliba.pl,"<br/>"Mail nadawcy: '.$email, $content))
       {
           echo '<div id="statement"> Wiadomość została wysłana poprawnie </div>';
       }
       else
       {
            echo '<div id="statement">Błąd, wiadomość nie została wysłana!</div>';
       }
    ?>
</body>
</html>