const loanAmountInput = document.querySelector("#loanAmount");
const loanAmountRange = document.querySelector("#loanAmountRange");
const repaymentPeriodInput = document.querySelector("#repaymentPeriod");
const repaymentPeriodRange = document.querySelector("#repaymentPeriodRange");
const resultText = document.querySelector(".resultText");
const creditForm = document.querySelector("#creditForm");
const btn = document.querySelector(".btn");
const ERROR_MESSAGE =
  "❌ Введено невалідне значення! Будь-ласка перевірте введені дані";

////Отримання початкових значень інпутів у форматі числа////
const initialLoanAmount = parseFloat(loanAmountInput.value);
const initialRepaymentPeriod = parseFloat(repaymentPeriodInput.value);

////Збереження початкових значень інпутів////
const initialValues = {
  loanAmount: initialLoanAmount,
  repaymentPeriod: initialRepaymentPeriod,
};

////Встановлення початкових значень інпутів при запуску сторінки////
resetInputs();

creditForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validateForm()) {
    creditCalculate();
  }
});

loanAmountRange.addEventListener("input", updateLoanAmount);
repaymentPeriodRange.addEventListener("input", updateRepaymentPeriod);

function updateLoanAmount() {
  loanAmountInput.value = loanAmountRange.value;
  if (validateForm()) {
    creditCalculate();
  }
}

function updateRepaymentPeriod() {
  repaymentPeriodInput.value = repaymentPeriodRange.value;
  if (validateForm()) {
    creditCalculate();
  }
}

function validateForm() {
  const loanAmount = parseFloat(loanAmountInput.value);
  const repaymentPeriod = parseFloat(repaymentPeriodInput.value);

  if (
    isNaN(loanAmount) ||
    isNaN(repaymentPeriod) ||
    loanAmount < 1000 ||
    loanAmount > 50000 ||
    repaymentPeriod < 7 ||
    repaymentPeriod > 60
  ) {
    btn.disabled = true;
    resultText.textContent = ERROR_MESSAGE;
    return false;
  }
  btn.disabled = false;
  return true;
}

function creditCalculate() {
  const loanAmount = parseFloat(loanAmountInput.value);
  const repaymentPeriod = parseFloat(repaymentPeriodInput.value);
  const interestRate = 2.2;

  const dailyRepayment = Math.round(
    (loanAmount + loanAmount * (interestRate / 100) * repaymentPeriod) /
      repaymentPeriod,
  );
  const totalRepayment = Math.round(dailyRepayment * repaymentPeriod);

  resultText.innerHTML = `Денна сума погашення: ${dailyRepayment.toFixed(
    2,
  )} грн <br> Загальна сума: ${totalRepayment.toFixed(2)} грн`;
}

function resetInputs() {
  loanAmountInput.value = initialValues.loanAmount;
  loanAmountRange.value = initialValues.loanAmount;
  repaymentPeriodInput.value = initialValues.repaymentPeriod;
  repaymentPeriodRange.value = initialValues.repaymentPeriod;
}
