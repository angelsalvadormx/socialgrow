<?php
include_once('./config.php');
$data = [
  [
    "folio" => "51354AS",
    "name_service" => "Tiktok",
    "cost" => 124.84,
    "description" => "1000 seguidores de cuentas de perú",
    "buy_url" => ""
  ],
  [
    "folio" => "256713G3E",
    "name_service" => "Instragram",
    "cost" => 277.27,
    "description" => "500 Likes de cuentas de instagram mexicanas",
    "buy_url" => ""
  ],
  [
    "folio" => "256713G3E",
    "name_service" => "Tiktok",
    "cost" => 128.81,
    "description" => "1000 seguidores de cuentas mexicanas",
    "buy_url" => ""
  ]
];

foreach ($data as &$item) {
  $item['cost'] = round($item['cost'], 2);
}
unset($item);


echo json_encode([
  "status" => 200,
  "message" => "Success",
  "data" => $data
]);
