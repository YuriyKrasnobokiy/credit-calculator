const loanAmountInput = document.querySelector("#loanAmount");
const loanAmountRange = document.querySelector("#loanAmountRange");
const repaymentPeriodInput = document.querySelector("#repaymentPeriod");
const repaymentPeriodRange = document.querySelector("#repaymentPeriodRange");
const creditForm = document.querySelector("#creditForm");
const btn = document.querySelector(".btn");
const SUCCESS_MESSAGE = "✅ Кредит отримано!";
const ERROR_MESSAGE =
  "❌ Введено невалідне значення! Сума кредиту має бути не менше 1000грн або більшою за 50000грн. Строк погашення має бути не менше 7 днів та не більше 60днів. Будь-ласка перевірте введені дані";

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
  resetInputs();
});

loanAmountRange.addEventListener("input", updateLoanAmount);
repaymentPeriodRange.addEventListener("input", updateRepaymentPeriod);

function updateLoanAmount() {
  loanAmountInput.value = loanAmountRange.value;
}

function updateRepaymentPeriod() {
  repaymentPeriodInput.value = repaymentPeriodRange.value;
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
    alert(ERROR_MESSAGE);
    return false;
  }
  alert(SUCCESS_MESSAGE);
  return true;
}

function creditCalculate() {
  const loanAmount = parseFloat(loanAmountInput.value);
  const repaymentPeriod = parseFloat(repaymentPeriodInput.value);
  const interestRate = 2.2;

  const dailyRepayment =
    (loanAmount + loanAmount * (interestRate / 100) * repaymentPeriod) /
    repaymentPeriod;
  const totalRepayment = dailyRepayment * repaymentPeriod;

  console.log(dailyRepayment);
  console.log(totalRepayment);
}

function resetInputs() {
  loanAmountInput.value = initialValues.loanAmount;
  loanAmountRange.value = initialValues.loanAmount;
  repaymentPeriodInput.value = initialValues.repaymentPeriod;
  repaymentPeriodRange.value = initialValues.repaymentPeriod;
}
