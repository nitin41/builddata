<?php
require './Slim/Slim.php';

\Slim\Slim::registerAutoloader();

$app = new \Slim\Slim();

$app = \Slim\Slim::getInstance();

$app->get('/products', function() { 
   $response["data"] = array(array("id"=>"1","page_title"=>"title1","created_date"=>"2017-12-20","product_image"=>"/content/hero/21.jpeg"));

   $response["message"] = "No data found.";
   
   echoResponse(200, $response);
});

function echoResponse($status_code, $response) {

    global $app;

    $app->status($status_code);

    $app->contentType('application/json');

    echo json_encode($response,JSON_NUMERIC_CHECK);

}

$app->run();

?>
