


const loadPackages = async() => {
  const secPackages = document.getElementById('sec-packages');
  
  const response = await fetch('https://socialgrow.com.mx/api/packages');
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }
  const json = await response.json();
  const { data: dataPackages } = json;
  const dolar = await getExchangeRate('USD', 'MXN');

  dataPackages.forEach(item => {
    const { name_package, cost, description, buy_url, folio } = item;
    const totalCost = roundToTwo(cost * dolar);

    secPackages.insertAdjacentHTML('beforeend', `<div class="paquete justify-content-between d-flex flex-direction-column">
                <h3>${name_package}</h3>
                <p>${description}</p>
                <span class="precio">$${totalCost}</span>
                <a href="${buy_url}"><button class="btn">Comprar</button></a>
            </div>`)
  });
}