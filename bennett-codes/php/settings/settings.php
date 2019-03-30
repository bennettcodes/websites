<?php

	/* Enter your name or company name below
	 * You can also use your website URL
	--------------------------------------------- */
	$receiver_name = "Bennett Codes";
	
	/* Enter your message subject below
	 * This subject is the one you will see in your email
	------------------------------------------------------ */	
	$receiver_subject = "New inquiry from bennettcodes.com";
	
	/* Form message will be sent to this email address
	 * For more than one email go to smartprocess.php then
	 * Add addresses to the recipients section
	------------------------------------------------------ */
	$receiver_email = "no-reply@bennettcodes.com";
	
	/* If you want to redirect to another page after sending the form
	 * Change the $redirectForm option below from (false) to (true)
	 * Then add your redirect page URL replace - http://example.com/thankyou.php
	----------------------------------------------------------------------------- */	
	$redirectForm = false;
	$redirectForm_url = "thankyou.php";
	
	/* Powered BY
	 * You will use both your website NAME and URL
	 * By default its powered by SMARTFORMS - http://www.doptiq.com/smart-forms
	----------------------------------------------------------------------------- */
	$poweredby_name = "Bennett Waisbren";
	$poweredby_url = "http://bennettcodes.com";	
	
	/* If you want to store all form data in a CSV file
	 * Change the generateCSV option from (false) to (true)
	------------------------------------------------------------ */
	$generateCSV = false;
	
	/* Name for generated CSV file 
	 * Please don't change this name unless you have to
	------------------------------------------------------------ */	
	$csvFileName = "formcsv.csv";
	
	/* If you want to automatically reply to the sender 
	 * Change the autoresponder option below from (false) to (true)
	-------------------------------------------------------------------- */	
	$autoResponder = true;
?>