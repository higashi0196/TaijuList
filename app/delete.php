<?php

require_once('config.php');

$getller = new Todocontroller();
$result = $getller->delete();
$result2 = $getller->postdelete();

$response = array();
if($result) {
   $response['result'] = 'success';
} else {
   $response['result'] = 'fail';
}

echo json_encode($response);

// header('Location: ' . SITE_URL);

?>