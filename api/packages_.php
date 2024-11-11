<?php
include_once('./config.php');
$data = [
  [
    "folio" => "S4FAE5",
    "name_package" => "Instagram #1",
    "cost" => 47.35,
    "description" => "500 Likes (México), 2.5k Followers (LATAM)",
    "buy_url" => "https://wa.me/$tel?text=Hola,%20estoy%20interesado%20en%20paquete%20#S4FAE5"
  ],
  [
    "folio" => "54HRE5",
    "name_package" => "Instragram #2",
    "cost" => 68.09,
    "description" => "500 likes [Gratis], 5.5k followers (LATAM)",
    "buy_url" => "https://wa.me/$tel?text=Hola,%20estoy%20interesado%20en%20paquete%20#54HRE5"
  ],
  [
    "folio" => "C7LPE4",
    "name_package" => "Instagram #3",
    "cost" => 116.20,
    "description" => "[Gratis] 500 likes, 10k followers (LATAM)",
    "buy_url" => "https://wa.me/$tel?text=Hola,%20estoy%20interesado%20en%20paquete%20#C7LPE4"
  ],
  [
    "folio" => "F521ASF",
    "name_package" => "Facebook #1 (México)",
    "cost" => 5.17,
    "description" => "15 comentarios personalizados, +20 recciones, 100 Post reach, +50 Likes, 10 compartidas",
    "buy_url" => "https://wa.me/$tel?text=Hola,%20estoy%20interesado%20en%20paquete%20#F521ASF"
  ],
  [
    "folio" => "21DSPLD",
    "name_package" => "Facebook #2 (USA)",
    "cost" => 31,
    "description" => "1,000 Reacciones Me divierte, me enfada o me encanta",
    "buy_url" => "https://wa.me/$tel?text=Hola,%20estoy%20interesado%20en%20paquete%20#21DSPLD"
  ],
  [
    "folio" => "TGDEGE5",
    "name_package" => "Tiktok #1 (España)",
    "cost" => 7.7,
    "description" => "[Gratis] 2,000 vistas, 1,000 likers y 1,000 Followers",
    "buy_url" => "https://wa.me/$tel?text=Hola,%20estoy%20interesado%20en%20paquete%20#TGDEGE5"
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
