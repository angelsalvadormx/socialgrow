async function getExchangeRate(currencyFrom, currencyTo) {
  const url = `https://economia.awesomeapi.com.br/json/last/${currencyFrom}-${currencyTo}`;

  try {
      const response = await fetch(url);
      const data = await response.json();
      
      const rateKey = `${currencyFrom}${currencyTo}`;
      if (data && data[rateKey] && data[rateKey].bid) {
          return roundToTwo(parseFloat(data[rateKey].bid)); // Tipo de cambio de compra
      } else {
          throw new Error("Error al obtener el tipo de cambio.");
      }
  } catch (error) {
      console.error("Error en la solicitud:", error);
      return null;
  }
}

function roundToTwo(num) {
  return Math.round(num * 100) / 100;
}

