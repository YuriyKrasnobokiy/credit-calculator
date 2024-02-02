const loanAmountInput = document.querySelector("#loanAmount");
const loanAmountRange = document.querySelector("#loanAmountRange");
const repaymentPeriodInput = document.querySelector("#repaymentPeriod");
const repaymentPeriodRange = document.querySelector("#repaymentPeriodRange");
const creditForm = document.querySelector("#creditForm");

loanAmountRange.value = 0;
repaymentPeriodRange.value = 0;

////Отримання початкових значень інпутів////
const initialLoanAmount = loanAmountInput.value;
const initialRepaymentPeriod = repaymentPeriodInput.value;

////Збереження початкових значень інпутів////
const initialValues = {
  loanAmount: initialLoanAmount,
  repaymentPeriod: initialRepaymentPeriod,
};

creditForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Кредит отримано!");
  loanAmountInput.value = initialValues.loanAmount;
  loanAmountRange.value = initialValues.loanAmount;
  repaymentPeriodInput.value = initialValues.repaymentPeriod;
  repaymentPeriodRange.value = initialValues.repaymentPeriod;
});
function updateLoanAmount() {
  loanAmountInput.value = loanAmountRange.value;
}

function updateRepaymentPeriod() {
  repaymentPeriodInput.value = repaymentPeriodRange.value;
}
