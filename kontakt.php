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
        $adresat = 'ostmati2@gmail.com';
        @$email = $_POST['email'];
        @$content = $_POST['content'];
        $header = "Od: ".email." \nContent-Type:".
                    ' text/plain; charset="utf-8"'.
                    "\nContent-Transfer-Encoding: 8bit";
                
        if (mail($adresat, 'List ze strony', $content, $header))
            echo '<p>działa</p>';
            else echo '<p><b>NIE</b> wysłano maila!</p';
    ?>
</body>
</html>