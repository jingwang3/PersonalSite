<html>
<head>
	<META http-equiv="refresh" content="5;URL=http://jingwang.x10host.com">
</head>
<body>

<?php
$to = "jingwang3@gmail.com";
$subject = "Web Page Email";
$message = $_POST["comments"];
$from = $_POST["email"];
$headers = "From:" . $from;
if($_POST["resume"] == "on"){
mail($to,$subject,"I need a resume\n\n $message",$headers);
}else{
	mail($to,$subject,$message,$headers);
}
?>

Hi <?php echo $_POST["email"]; ?><br>
Your message has been sent! Thanks So much for contecting Jing. I will get back to you ASAP.

</body>
</html>