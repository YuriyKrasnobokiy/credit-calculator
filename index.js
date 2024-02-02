const loanAmountInput = document.querySelector("#loanAmount");
const loanAmountRange = document.querySelector("#loanAmountRange");
const repaymentPeriodInput = document.querySelector("#repaymentPeriod");
const repaymentPeriodRange = document.querySelector("#repaymentPeriodRange");
const btn = document.querySelector(".btn");

loanAmountRange.value = 0;
repaymentPeriodRange.value = 0;

btn.addEventListener("click", (e) => {
  e.preventDefault();
  alert("Кредит отримано!");
});
function updateLoanAmount() {
  loanAmountInput.value = loanAmountRange.value;
}

function updateRepaymentPeriod() {
  repaymentPeriodInput.value = repaymentPeriodRange.value;
}
