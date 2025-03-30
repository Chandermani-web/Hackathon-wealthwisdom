import React, { useState } from "react";
import "./Lc.css";

const Lc = () => {
  const [loanData, setLoanData] = useState({
    amount: 200000,
    downPayment: 40000,
    interestRate: 5.5,
    loanTerm: 30,
  });

  const calculateLoan = () => {
    // Loan calculation logic
    const principal = loanData.amount - loanData.downPayment;
    const monthlyRate = loanData.interestRate / 100 / 12;
    const payments = loanData.loanTerm * 12;

    const monthlyPayment = (
      (principal * monthlyRate * Math.pow(1 + monthlyRate, payments)) /
      (Math.pow(1 + monthlyRate, payments) - 1)
    ).toFixed(2);

    const totalPayment = (monthlyPayment * payments).toFixed(2);
    const totalInterest = (totalPayment - principal).toFixed(2);

    return {
      monthlyPayment,
      totalPayment,
      totalInterest,
      principal,
      interestPercentage: ((totalInterest / principal) * 100).toFixed(2),
    };
  };

  const results = calculateLoan();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoanData((prev) => ({ ...prev, [name]: parseFloat(value) || 0 }));
  };

  return (
    <div className="loan-calculator">
      <div className="calculator-header">
        <h1 className="calculator-title">Loan & EMI Calculator</h1>
        <p className="calculator-paragraph">
          Calculate loan payments with interactive visual charts and
          amortization tables
        </p>
      </div>

      <div className="calculator-flex">
        <div className="calculator-inputs">
          <div className="input-group">
            <label>Loan Amount</label>
            <div className="input-field">
              <i className="ri-bank-line"></i>
              <input
                type="number"
                name="amount"
                value={loanData.amount}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="input-group">
            <label>Down Payment</label>
            <div className="input-field">
              <i className="ri-wallet-line"></i>
              <input
                type="number"
                name="downPayment"
                value={loanData.downPayment}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="input-group">
            <label>Interest Rate (%)</label>
            <div className="input-field">
              <i className="ri-percent-line"></i>
              <input
                type="number"
                name="interestRate"
                step="0.1"
                value={loanData.interestRate}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="input-group">
            <label>Loan Term (Years)</label>
            <div className="input-field">
              <i className="ri-calendar-line"></i>
              <input
                type="number"
                name="loanTerm"
                value={loanData.loanTerm}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="input-field button-field">
            <button>Calculate loan</button>
          </div>
        </div>

        <div className="calculator-results">
          <div className="results-card-container">
            <div className="result-card">
              <h3>Monthly Payment</h3>
              <h2>${results.monthlyPayment}</h2>
              <p>For {loanData.loanTerm} years</p>
            </div>

            <div className="result-card">
              <h3>Total Payment</h3>
              <h2>${results.totalPayment}</h2>
              <p>Principal + Interest</p>
            </div>

            <div className="result-card">
              <h3>Total Interest</h3>
              <h2>${results.totalInterest}</h2>
              <p>{results.interestPercentage}% of principal</p>
            </div>
          </div>

          <div className="breakdown-card">
            <h3>Payment Breakdown</h3>
            <div className="breakdown-bars">
              <div className="breakdown-bars-1">
                <h2>Principal:</h2>
                <span>
                  Principal:{" "}
                  {((results.principal / results.totalPayment) * 100).toFixed(
                    1
                  )}
                  %
                </span>
              </div>
              <div
                className="principal-bar"
                style={{
                  width: `${(results.principal / results.totalPayment) * 100}%`,
                }}
              ></div>
              <div className="breakdown-bars-2">
                <h2>Interest: </h2>
                <span>Interest: {results.interestPercentage}%</span>
              </div>
              <div
                className="interest-bar"
                style={{
                  width: `${
                    (results.totalInterest / results.totalPayment) * 100
                  }%`,
                }}
              ></div>

              <div className="breakdown-bars-3">
                <h2>Total:</h2>
                <span>${results.monthlyPayment}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="loan-footer">
        <div>
          <i class="ri-calculator-line"></i>
          <h1>Compare Loan Options</h1>
          <p>
            Campare multiple loan scenarios side by side to find the most
            advantageous terms for your financial situation.
          </p>
        </div>
        <div>
          <i class="ri-percent-line"></i>
          <h1>Refinance Calculator</h1>
          <p>
            Analyze whether refinancing your existing loan makes financial sense
            based on current interest rates.
          </p>
        </div>
        <div>
          <i class="ri-calendar-line"></i>
          <h1>Early Repayment Simulator</h1>
          <p>
            Calculate how much you can save by making extra payments or paying
            off your loan ahead of schedule
          </p>
        </div>
      </div>
    </div>
  );
};

export default Lc;
