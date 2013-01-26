<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<meta name="viewport" content="initial-scale=1, maximum-scale=1" />
<meta name="viewport" content="width=device-width" />
<title>BigBang - Html Template by Brankic1979</title>

</head>

</head>

<body>

<?php
$email_to = "email@yourprovidername.com";
$name = $_POST["name"];
$email = $_POST["email"];
$url = $_POST["url"];
$message = $_POST["message"];
$text = "NAME: $name<br>
         EMAIL: $email<br>
		 URL: $url<br>		 
         MESSAGE: $message";
$headers = "MIME-Version: 1.0" . "\r\n"; 
$headers .= "Content-type:text/html; charset=utf-8" . "\r\n"; 
$headers .= "From: <$email>" . "\r\n";
mail($email_to, "Message", $text, $headers);
?>

</body>
</html>
