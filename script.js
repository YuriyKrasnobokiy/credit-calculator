const loanAmountInput = document.getElementById("loan_amount");
const loanAmountRange = document.getElementById("loan_amount_range");
const repaymentPeriodInput = document.getElementById("repayment_period");
const repaymentPeriodRange = document.getElementById("repayment_period_range");
const resultText = document.querySelector(".resultText");
const creditForm = document.getElementById("credit_form");
const btn = document.querySelector(".btn");
const ERROR_MESSAGE =
  "❌ Введено невалідне значення! Будь-ласка перевірте введені дані";
const interestRate = 2.2;

creditForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (validateForm()) {
    creditCalculate();
  }
});

loanAmountInput.addEventListener("change", updateSliders);
repaymentPeriodInput.addEventListener("change", updateSliders);
loanAmountRange.addEventListener("input", updateInputs);
repaymentPeriodRange.addEventListener("input", updateInputs);

function updateSliders() {
  loanAmountRange.value = loanAmountInput.value;
  repaymentPeriodRange.value = repaymentPeriodInput.value;

  if (validateForm()) {
    creditCalculate();
  }
}

function updateInputs() {
  loanAmountInput.value = loanAmountRange.value;
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
  let loanAmount = parseFloat(loanAmountInput.value);

  let repaymentPeriod = parseFloat(repaymentPeriodInput.value);

  let dailyRepayment = Math.round(
    (loanAmount + loanAmount * (interestRate / 100) * repaymentPeriod) /
      repaymentPeriod,
  );

  let totalRepayment = Math.round(dailyRepayment * repaymentPeriod);

  resultText.innerHTML = `Денна сума погашення: ${dailyRepayment.toFixed(
    2,
  )} грн <br> Загальна сума: ${totalRepayment.toFixed(2)} грн`;
}
