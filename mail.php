<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

$msg=$_POST["mensaje"];
$asunto=$_POST["asunto"];
$email=$_POST["email"];
// Load Composer's autoloader
require 'vendor/autoload.php';

// Instantiation and passing `true` enables exceptions

$mail = new PHPMailer(); // create a new object
$mail->IsSMTP(); // enable SMTP
$mail->SMTPDebug = 0; // debugging: 1 = errors and messages, 2 = messages only
$mail->SMTPAuth = true; // authentication enabled
$mail->SMTPSecure = 'tls'; // secure transfer enabled REQUIRED for Gmail
$mail->Host = "smtp.gmail.com";
$mail->Port = 587; // or 587
$mail->IsHTML(true);
$mail->Username = "sergiodavidposse@gmail.com";
$mail->Password = "hecate27";
$mail->SetFrom($email);
$mail->Subject = $asunto;
$mail->Body = $msg;
$mail->AddAddress("sergiodavidposse@gmail.com");

 if(!$mail->Send()) {
    echo "Error, vuelva a intentar mas tarde!";
 } else {
    echo "Gracias! el email ha sido enviado con exito";
 }
?>