<?php
include_once('./config.php');

$data = [
  [
    "folio" => "51354AS",
    "name_service" => "Tiktok",
    "cost" => 7.15,
    "description" => "1000 seguidores de cuentas mexicanas",
    "offer" => false,
    "buy_url" => "https://wa.me/$tel?text=Hola,%20estoy%20interesado%20en%20servicio%20#51354AS"
  ],
  [
    "folio" => "256713G3E",
    "name_service" => "Instragram",
    "cost" => 10.68,
    "description" => "1,000 followers de cuentas de instagram Latinoamérica",
    "offer" => true,
    "buy_url" => "https://wa.me/$tel?text=Hola,%20estoy%20interesado%20en%20servicio%20#256713G3E"
  ],
  [
    "folio" => "625713GFE",
    "name_service" => "Instragram",
    "cost" => 59.07,
    "description" => "1,000 followers de cuentas tipo vip solo de hombres (USA y/o Europa)",
    "offer" => false,
    "buy_url" => "https://wa.me/$tel?text=Hola,%20estoy%20interesado%20en%20servicio%20#625713GFE"
  ],
  [
    "folio" => "JF5713GFE",
    "name_service" => "Instragram",
    "cost" => 59.07,
    "description" => "1,000 followers de cuentas tipo vip solo de mujeres (USA y/o Europa)",
    "offer" => false,
    "buy_url" => "https://wa.me/$tel?text=Hola,%20estoy%20interesado%20en%20servicio%20#JF5713GFE"
  ]
];

foreach ($data as &$item) {
  $item['cost'] = round($item['cost'], 2);
}
unset($item); // Limpia la referencia para evitar problemas en PHP


echo json_encode([
  "status" => 200,
  "message" => "Success",
  "data" => $data
]);
