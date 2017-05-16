<?php
// Variables
$name = trim($_POST['name']);
$email = trim($_POST['email']);
$subject = "[Gishtech] " . trim($_POST['subject']);
$message = trim($_POST['message']);

// Email address validation - works with php 5.2+
function is_email_valid($email) {
	return filter_var($email, FILTER_VALIDATE_EMAIL);
}

if( isset($name) && isset($email) && isset($message) && isset($subject) && is_email_valid($email) ) {

	// Avoid Email Injection and Mail Form Script Hijacking
	$pattern = "/(content-type|bcc:|cc:|to:)/i";
	if( preg_match($pattern, $name) || preg_match($pattern, $email) || preg_match($pattern, $message) || preg_match($pattern, $subject) ) {
		exit;
	}

	// Email will be sent to
	$to = "kiffin.gish@planet.nl";  // Change with your email address

	// HTML Elements for Email Body
	$body = <<<EOD
	$message


	--
	This message was sent from the gishtech.com website.
EOD;
//Must end on first column

	$body = nl2br($body);

	$headers = "From: $name <$email>\r\n";
	$headers .= 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

	// PHP email sender
	mail($to, $subject, $body, $headers);
}

?>
