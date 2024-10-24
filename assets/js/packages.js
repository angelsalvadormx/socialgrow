const dataPackages = [
  {
    "folio": "51354AS",
    "name_package": "Paquete 1",
    "cost": 124.84,
    "description": "1000 seguidores de cuentas de perú, 500 Likes de cuentas de instagram mexicanas",
    "buy_url": ""
  },
  {
    "folio": "256713G3E",
    "name_package": "Paquete 2",
    "cost": 277.27,
    "description": "1000 seguidores de cuentas mexicanas,1000 seguidores de cuentas de perú, 500 Likes de cuentas de instagram mexicanas",
    "buy_url": ""
  }
]


const loadPackages = () => {
  const secPackages = document.getElementById('sec-packages');

  dataPackages.forEach(item => {
    const { name_package, cost, description, buy_url, folio } = item;
    secPackages.insertAdjacentHTML('beforeend', `<div class="paquete">
                <h3>${name_package}</h3>
                <p>${description}</p>
                <span class="precio">$${cost}</span>
                <a href="${buy_url}"><button class="btn">Comprar</button></a>
            </div>`)
  });
}