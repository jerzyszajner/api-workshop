const currencyForm = document.querySelector(".currency-form");
const switchCurrencyButton = document.querySelector(
  ".currency-form__switch-button"
);
const fromCurrencyInput = document.querySelector(
  ".currency-form__from-currency"
);
const toCurrencyInput = document.querySelector(".currency-form__to-currency");
const amountInput = document.querySelector(".currency-form__amount");
const resultParagraph = document.querySelector(".result-paragraph");
const convertButton = document.querySelector(".currency-form__convert-button");

const switchCurrencies = (e) => {
  e.preventDefault();

  const fromValue = fromCurrencyInput.value;
  const toValue = toCurrencyInput.value;

  fromCurrencyInput.value = toValue;
  toCurrencyInput.value = fromValue;
};

switchCurrencyButton.addEventListener("click", switchCurrencies);

const convertCurrencies = async (e) => {
  e.preventDefault();
  const fromValue = fromCurrencyInput.value;
  const toValue = toCurrencyInput.value;
  const amountValue = parseFloat(amountInput.value.trim());

  if (isNaN(amountValue) || amountValue <= 0) {
    resultParagraph.textContent = "Please enter a valid amount to proceed";
    return;
  }

  const response = await fetch(
    `http://localhost:3001/exchange-rate?q=${fromValue}`
  );
  const data = await response.json();
  const rate = data.conversion_rates[toValue];

  const convertadAmount = (amountValue * rate).toFixed(2);
  resultParagraph.style.visibility = "visible";
  resultParagraph.textContent = `${amountValue} ${fromValue} is equal to ${convertadAmount} ${toValue}`;
  console.log(data);
};

convertButton.addEventListener("click", convertCurrencies);
