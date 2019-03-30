<?php 

	if (!isset($_SESSION)) session_start(); 
	if(!$_POST) exit;
	
	include dirname(__FILE__).'/settings/settings.php';
	include dirname(__FILE__).'/functions/emailValidation.php';
	
	
	/* Current Date Year
	------------------------------- */		
	$currYear = date("Y");		
	
/*	---------------------------------------------------------------------------
	: Register all form field variables here
	--------------------------------------------------------------------------- */
	$interest = strip_tags(trim($_POST["interest"]));	
	$firstname = strip_tags(trim($_POST["firstname"]));	
	$lastname = strip_tags(trim($_POST["lastname"]));
	$emailaddress = strip_tags(trim($_POST["emailaddress"]));	
	$telephone = strip_tags(trim($_POST["telephone"]));
	$zip = strip_tags(trim($_POST["zip"]));
	$signature = strip_tags(trim($_POST["signature"]));
	$inquiry = strip_tags(trim($_POST["inquiry"]));
	
/*	----------------------------------------------------------------------
	: Prepare form field variables for CSV export
	----------------------------------------------------------------------- */	
	if($generateCSV == true){
		$csvFile = $csvFileName;	
		$csvData = array(
			"$interest",
			"$firstname",
			"$lastname",
			"$emailaddress",
			"$telephone",
			"$zip",
			"$signature",
			"$inquiry"
		);
	}

/*	-------------------------------------------------------------------------
	: Prepare serverside validation 
	------------------------------------------------------------------------- */ 
	$errors = array();
	 //validate interest
	if(isset($_POST["interest"])){
	 
			if (!$firstname) {
				$errors[] = "Please enter your first name.";
			}
	 
	}
	
	 //validate name
	if(isset($_POST["firstname"])){
	 
			if (!$firstname) {
				$errors[] = "Please enter your first name.";
			} elseif(strlen($firstname) < 2)  {
				$errors[] = "First name must be at least 2 characters.";
			}
	 
	}
	if(isset($_POST["lastname"])){
	 
			if (!$lastname) {
				$errors[] = "Please enter your last name.";
			} elseif(strlen($lastname) < 2)  {
				$errors[] = "Last name must be at least 2 characters.";
			}
	 
	} 
	
	//validate email address
	if(isset($_POST["emailaddress"])){
		if (!$emailaddress) {
			$errors[] = "Please enter your email address.";
		} else if (!validEmail($emailaddress)) {
			$errors[] = "Please enter an email address that is valid.";
		}
	}
	
	// validate telephone field 
 	if(isset($_POST["telephone"])){
		if (!$telephone) {
			$errors[] = "Please enter your phone number.";
		}
	}  
	
	// validate zip field 
 	if(isset($_POST["zip"])){
		if (!$zip) {
			$errors[] = "Please enter your zip code.";
		}
	}  
	
	if ($errors) {
		//Output errors in a list
		$errortext = "";
		foreach ($errors as $error) {
			$errortext .= '<li>'. $error . "</li>";
		}
	
		echo '<div class="alert notification alert-error">The following errors occured:<br><ul>'. $errortext .'</ul></div>';
	
	} else{
	
		include dirname(__FILE__).'/phpmailer/PHPMailerAutoload.php';
		include dirname(__FILE__).'/templates/smartmessage.php';
			
		$mail = new PHPMailer();
		$mail->isSendmail();
		$mail->IsHTML(true);
		$mail->From = "no-reply@fer.com";
		$mail->CharSet = "UTF-8";
		$mail->FromName = $firstname;
		$mail->Encoding = "base64";
		$mail->Timeout = 200;
		$mail->ContentType = "text/html";
		$mail->addAddress($receiver_email, $receiver_name);
		$mail->Subject = $receiver_subject;
		$mail->Body = $message;
		$mail->AltBody = "Use an HTML compatible email client";
				
		// For multiple email recepients from the form 
		// Simply change recepients from false to true
		// Then enter the recipients email addresses
		// echo $message;
		$recipients = true;
		if($recipients == true){
			$recipients = array(
				"waisbren89@gmail.com" => "Bennett Waisbren"
			);
			
			foreach($recipients as $email => $name){
				$mail->AddBCC($email, $name);
			}	
		}
		
		if($mail->Send()) {
			/*	-----------------------------------------------------------------
				: Generate the CSV file and post values if its true
				----------------------------------------------------------------- */		
				if($generateCSV == true){	
					if (file_exists($csvFile)) {
						$csvFileData = fopen($csvFile, 'a');
						fputcsv($csvFileData, $csvData );
					} else {
						$csvFileData = fopen($csvFile, 'a'); 
						$headerRowFields = array(
							"Guest Name",
							"Email Address",
							"Subject"									
						);
						fputcsv($csvFileData,$headerRowFields);
						fputcsv($csvFileData, $csvData );
					}
					fclose($csvFileData);
				}	
				
			/*	---------------------------------------------------------------------
				: Send the auto responder message if its true
				--------------------------------------------------------------------- */
				if($autoResponder == true){
				
					include dirname(__FILE__).'/templates/autoresponder.php';
					
					$automail = new PHPMailer();
					$automail->isSendmail();
					$automail->From = $receiver_email;
					$automail->FromName = $receiver_name;
					$automail->isHTML(true);                                 
					$automail->CharSet = "UTF-8";
					$automail->Encoding = "base64";
					$automail->Timeout = 200;
					$automail->ContentType = "text/html";
					$automail->AddAddress($emailaddress, $firstname, $lastname);
					$automail->Subject = "Thank you for contacting us";
					$automail->Body = $automessage;
					$automail->AltBody = "Use an HTML compatible email client";
					$automail->Send();	 
				}
				
				if($redirectForm == true){
					echo '<script>setTimeout(function () { window.location.replace("'.$redirectForm_url.'") }, 0); </script>';
				}
				} 
				else {
				  echo '<div class="alert notification alert-error">Message not sent - server error occured!</div>';	
				}
	}
?>