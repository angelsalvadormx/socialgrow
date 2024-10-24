const dataServices = [
  {
    "folio": "51354AS",
    "name_service": "Tiktok",
    "cost": 124.84,
    "description": "1000 seguidores de cuentas de perú",
    "buy_url": ""
  },
  {
    "folio": "256713G3E",
    "name_service": "Instragram",
    "cost": 277.27,
    "description": "500 Likes de cuentas de instagram mexicanas",
    "buy_url": ""
  },
  {
    "folio": "256713G3E",
    "name_service": "Tiktok",
    "cost": 128.81,
    "description": "1000 seguidores de cuentas mexicanas",
    "buy_url": ""
  }
];

const loadServices = () => {
  const secServices = document.getElementById('sec-services');

  dataServices.forEach(item => {
    const { name_service, cost, description, buy_url, folio } = item;
    secServices.insertAdjacentHTML('beforeend', `<div class="servicio justify-content-between d-flex flex-direction-column">
                <header>
                    <h3>${name_service} </h3>
                    <span>$${cost}</span>
                </header>
                <main class="">
                    <p>${description}</p>
                </main>
                <footer class="d-flex justify-content-end">
                <a href="${buy_url}" class="btn-service" target="_blank">Comprar</a>
                </footer>
            </div>`)
  });
}