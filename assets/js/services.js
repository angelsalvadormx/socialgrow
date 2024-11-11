
const loadServices = async () => {
  const secServices = document.getElementById('sec-services');

  const response = await fetch('https://socialgrow.com.mx/api/services');
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }
  const json = await response.json();
  const { data: dataServices } = json;
  const dolar = await getExchangeRate('USD', 'MXN');
  
  dataServices.forEach(item => {
    const { name_service, cost, description, buy_url, folio } = item;
    const totalCost = roundToTwo(cost * dolar);
    
    secServices.insertAdjacentHTML('beforeend', `<div class="servicio justify-content-between d-flex flex-direction-column">
                <header>
                    <h3>${name_service} </h3>
                    <span>$${totalCost}</span>
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