<?php
$msg = $_POST["mensaje"];
$email = $_POST["email"];
$subject = $_POST["asunto"];
$msg = wordwrap($msg,70);
// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers="FROM: $email\r\n";

ini_set("SMTP","ssl://smtp.gmail.com");
ini_set("smtp_port","587");
ini_set("username","<sergiodavidposse.gmail.com>"); # You need to change this
ini_set("password","hecate27"); # You need to change this

try{
    mail("sergiodavidposse@gmail.com",$subject,$msg,$headers);
    echo $msg;
} catch (Exception $e) {
    echo 'Excepción capturada: ',  $e->getMessage(), "\n";
}


?>