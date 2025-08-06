<?php
include_once('./config.php');

$data = [
  [
    "testimony" => "Este servicio es increíble. Lo recomiendo a todos!",
    "name_person" => "Juan Perez",
    "show" => true
  ],
  [
    "testimony" => "Me ayudaron a conseguir lo que necesitaba rápidamente.",
    "name_person" => "Maria del rosario",
    "show" => true
  ],
  [
    "testimony" => "Muy buen servicio...",
    "name_person" => "Carlos Ramos",
    "show" => false
  ]
];



echo json_encode([
  "status" => 200,
  "message" => "Success",
  "data" => $data
]);
