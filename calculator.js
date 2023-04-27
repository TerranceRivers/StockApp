// ROI Calculator
const roiForm = document.querySelector('#roiForm');
const roiResult = document.querySelector('#roiResult');

roiForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const initialInvestment = Number(document.querySelector('#initialInvestment').value);
  const finalValue = Number(document.querySelector('#finalValue').value);
  const roi = ((finalValue - initialInvestment) / initialInvestment) * 100;
  roiResult.textContent = roi.toFixed(2) + '%';
});


// Loan Payment Calculator
const loanAmountInput = document.querySelector('#loanAmountInput');
const interestRateInput = document.querySelector('#interestRateInput');
const loanTermInput = document.querySelector('#loanTermInput');
const loanPaymentBtn = document.querySelector('#loanPaymentBtn');
const loanPaymentResult = document.querySelector('#loanPaymentResult');

loanPaymentBtn.addEventListener('click', () => {
  const loanAmount = Number(loanAmountInput.value);
  const interestRate = Number(interestRateInput.value) / 100 / 12;
  const loanTerm = Number(loanTermInput.value) * 12;
  const loanPayment = (loanAmount * interestRate * Math.pow(1 + interestRate, loanTerm)) / (Math.pow(1 + interestRate, loanTerm) - 1);
  loanPaymentResult.innerHTML = `<h3>Monthly Payment: $${loanPayment.toFixed(2)}</h3>`;
});


// Savings Calculator
const savingsForm = document.querySelector("#savingsForm");
const initialSavingsInput = document.querySelector("#initialSavingsInput");
const monthlyDepositInput = document.querySelector("#monthlyDepositInput");
const interestRateInputS = document.querySelectorAll("#interestRateInput")[1];
const savingsTermInput = document.querySelector("#savingsTermInput");
const savingsResult = document.querySelector("#savingsResult");

savingsForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const initialSavings = Number(initialSavingsInput.value);
  const monthlyDeposit = Number(monthlyDepositInput.value);
  const interestRateS = Number(interestRateInputS.value);
  const savingsTerm = Number(savingsTermInput.value);

  const monthlyInterestRateS = interestRateS / 1200;
  const numberOfMonthsS = savingsTerm * 12;

  let totalSavings = initialSavings;
  for (let i = 0; i < numberOfMonthsS; i++) {
    totalSavings += monthlyDeposit;
    totalSavings *= 1 + monthlyInterestRateS;
  }

  savingsResult.innerHTML = `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Savings Result</h5>
        <p class="card-text">Total savings after ${savingsTerm} years:</p>
        <h2>$${totalSavings.toFixed(2)}</h2>
      </div>
    </div>
  `;
});

// Retirement Calculator
const retirementBtn = document.getElementById("retirementBtn");

retirementBtn.addEventListener("click", calculateRetirement);

function calculateRetirement() {
  const currentAge = parseInt(document.getElementById("currentAgeInput").value);
  const retirementAge = parseInt(document.getElementById("retirementAgeInput").value);
  const annualIncome = parseInt(document.getElementById("annualIncomeInput").value);
  const currentSavings = parseInt(document.getElementById("currentSavingsInput").value);
  const retirementSpending = parseInt(document.getElementById("retirementSpendingInput").value);
  const yearsToRetirement = retirementAge - currentAge;
  const yearsInRetirement = 30;
  const inflationRate = 0.03;
  const investmentRate = 0.05;
  const totalRetirementSavings = (currentSavings + (annualIncome * investmentRate * ((1 - (1 / ((1 + investmentRate) ** yearsToRetirement))) / investmentRate))) * ((1 + investmentRate) ** yearsInRetirement);
  const yearlyRetirementSpending = retirementSpending * ((1 + inflationRate) ** yearsInRetirement);
  const requiredRetirementSavings = yearlyRetirementSpending / ((1 + investmentRate) ** yearsInRetirement - 1) * (1 - (1 / ((1 + investmentRate) ** yearsInRetirement)));
  const additionalRetirementSavings = requiredRetirementSavings - totalRetirementSavings;

  const retirementResult = document.getElementById("retirementResult");

  retirementResult.innerHTML = `
    <h5>Total retirement savings required: $${requiredRetirementSavings.toFixed(2)}</h5>
    <h5>Additional retirement savings required: $${additionalRetirementSavings.toFixed(2)}</h5>
  `;
}
