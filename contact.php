<?php 
  // doesnt work yet something with keys
    $userName = $_POST["name"];
    $userEmail = $_POST["email"];
    $userSubject = $_POST["subject"];
    $userMessage = $_POST["message"];

    $to = "pschreuder11@gmail.com";
    $body = "";

    $body .= "From: ".$userName. "\r\n";
    $body .= "Email: ".$userEmail. "\r\n";
    $body .= "Message: ".$userMessage. "\r\n";

    ini_set("SMTP","localhost");
    ini_set("smtp_port","25");

    $sent = mail($to, $userSubject, $body);
    if(!$sent) {
      echo "error";
    } else {
      echo "successful";
    }
?>