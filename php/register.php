
<?php
	$servername = "localhost";
	$username = "root";
	$password = "";
	$db="school";
	$conn = mysqli_connect($servername, $username, $password,$db);
	$fname=$_POST['fname'];
	$lname=$_POST['lname'];
	$email=$_POST['email'];
	$phone=$_POST['phone'];
	$pwd=$_POST['pwd'];

	$sql = "INSERT INTO `crud`( `fname`,`lname`, `email`, `phone`,`pwd`) 
	VALUES ('$fname','$lname','$email','$phone','$pwd')";
	if (mysqli_query($conn, $sql)) {
		echo json_encode(array("statusCode"=>200));
	} 
	else {
		echo json_encode(array("statusCode"=>201));
	}
	mysqli_close($conn);
?>