<?php

// get the form data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

error_log(var_dump($name, $email, $message));
// set the recipient email address
$to = 'ibironketomiwa4@gmail.com';

// set the email subject
$subject = 'New message from contact form';

// build the email message
$message = "Name: $name\nEmail: $email\nMessage: $message";

// send the email
mail($to, $subject, $message);

// return a response
echo json_encode(array('success' => true));

?>
