const currencyFirstEl = document.getElementById('currency-first');
const currencySecondEl = document.getElementById('currency-second');
const worthFirstEl = document.getElementById('worth-first');
const worthSecondEl = document.getElementById('worth-second');
const exchangeRateEl = document.getElementById('exchange-rate');

updateRate();

async function updateRate() {
  fetch(
    `https://v6.exchangerate-api.com/v6/4463750623b420c9e6e3ce19/latest/${currencyFirstEl.value}`
  )
    .then(res => res.json())
    .then(data => {
      const rate = data.conversion_rates[currencySecondEl.value];
      exchangeRateEl.innerText = `${worthFirstEl.value} ${currencyFirstEl.value} = ${rate} ${currencySecondEl.value}`;
      worthSecondEl.value = (worthFirstEl.value * rate);
    });
}

currencyFirstEl.addEventListener('change', updateRate);
currencySecondEl.addEventListener('change', updateRate);
worthFirstEl.addEventListener('input', updateRate);