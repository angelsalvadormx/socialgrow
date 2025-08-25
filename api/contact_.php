
<?php 
include_once('./config.php');

$data = [
  [
    "tipo_contacto" => "telefono",
    "valor" => $tel,
  ]
];



echo json_encode([
  "status" => 200,
  "message" => "Success",
  "data" => $data
]);