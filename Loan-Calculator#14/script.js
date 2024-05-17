function calculateLoan() {
  loanAmountValue = document.getElementById("loan-amount").value;

  interestRateValue = document.getElementById("interest-rate").value;

  MonthsToPayValue = document.getElementById("months-to-pay").value;

  interst = (loanAmountValue * (interestRateValue * 0.01)) / MonthsToPayValue;

  monthlyPayment = (loanAmountValue / MonthsToPayValue + interst).toFixed(2);

  document.getElementById(
    "payment"
  ).innerHTML = `Monthly payment: ${monthlyPayment}`;
}
