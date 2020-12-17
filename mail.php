<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

$msg=$_POST["mensaje"];
$email=$_POST["email"];
$my_env_var = getenv('MY_VAR');
// Load Composer's autoloader
require 'vendor/autoload.php';

// Instantiation and passing `true` enables exceptions

$mail = new PHPMailer(); // create a new object
$mail->IsSMTP(); // enable SMTP
$mail->SMTPDebug = 0; // debugging: 1 = errors and messages, 2 = messages only
$mail->SMTPAuth = true; // authentication enabled
// secure transfer enabled REQUIRED for Gmail
$mail->Host = "ssl://smtp.gmail.com";
$mail->Port = 465; // 465 or 587
$mail->IsHTML(true);
$mail->Username = "ornitorincogentil@gmail.com";
$mail->Password = $my_env_var;
$mail->SetFrom('ornitorincogentil@gmail.com',$email);
$mail->Subject = "Private-Practice";
$mail->Body = $msg;
$mail->AddAddress("sergiodavidposse@gmail.com");
$mail->AddReplyTo($email,"Responder A");

$mail->SMTPOptions = array(
   'ssl' => array(
       'verify_peer' => false,
       'verify_peer_name' => false,
       'allow_self_signed' => true
   )
);

 if(!$mail->Send()) {
    echo "Error, vuelva a intentar mas tarde!";
 } else {
    echo "Gracias! el email ha sido enviado con exito";
 }
?>