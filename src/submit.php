<?php
    $name = $_POST['name'];
    $account = $_POST['account'];
    $file = $_POST['file'];


    $email_from = 'cashpirowski@gmail.com';

    $email_subject = "New Submission";

    $email_body = "User Name: $name.\n".
                    "Users Account No: $account.\n";
                    "Users File: $file.\n";
                    
    $to = "l.piorowski@euro-forum.com.pl";

    $headers = "From: $email_from \r\n";

    $headers .= "Reply-To: $email_from \r\n";

    mail($to,$email_subject,$email_body,$headers);

    header("Location: index.html");
?>