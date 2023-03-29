
<?php

$servername = "localhost";
	$username = "root";
	$password = "";
	$db="schoollogin";
	$email=$_POST['email'];
	
	$pwd=$_POST['pwd'];

	$redis = new Redis();
$redis->connect($servername, 6379);
function registerUser($password, $email) {
  global $redis;
  $redis->hmset('users:'.$username, array('password' => $password, 'email' => $email));
}
function loginUser($username, $password) {
  global $redis;
  $stored_password = $redis->hget('users:'.$username, 'password');
  if ($stored_password == $password) {
    return true;
  } else {
    return false;
  }
}
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['register'])) {
  $username = $_POST['username'];
  $password = $_POST['password'];
  registerUser($username, $password);
}


/*
	$servername = "localhost";
	$username = "root";
	$password = "";
	$db="schoollogin";
	$conn = mysqli_connect($servername, $username, $password,$db);
	$email=$_POST['email'];
	
	$pwd=$_POST['pwd'];

	$sql = "INSERT INTO `crudlogin`(`email`,`pwd`) 
	VALUES ('$email','$pwd')";
	if (mysqli_query($conn, $sql)) {
		echo json_encode(array("statusCode"=>200));
	} 
	else {
		echo json_encode(array("statusCode"=>201));
	}
	mysqli_close($conn);

	*/
?>