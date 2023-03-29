
<?php
$host = "localhost";
$username = "schoolupdate";
$password = "";
$database = "curdupdate";
$conn = mysqli_connect($host, $username, $password, $database);


if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
$bulk = new MongoDB\Driver\BulkWrite;


$data = $_POST['details'];

$bulk->insert($data);
}

$result = $mongo->executeBulkWrite($mongodb_database.'.'.$mongodb_collection, $bulk);
if($result->getInsertedCount()==1){
    echo "success";
}else{
    echo "failed";
}
?>