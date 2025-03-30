import React, { useState } from "react";
import "./SBP.css";
import "remixicon/fonts/remixicon.css";

const budgetData = [
  { category: "Housing", percentage: "35%", color: "#f1c40f" },
  { category: "Food", percentage: "25%", color: "#3498db" },
  { category: "Transport", percentage: "15%", color: "#9b59b6" },
  { category: "Entertainment", percentage: "10%", color: "#2ecc71" },
  { category: "Other", percentage: "15%", color: "#e74c3c" },
];

const DashboardSection = () => (
  <div className="dashboard">
    <div className="dashboard_top">
      <div className="dashboard_top_1">
        <div>
          <h2>Total Balance</h2>
          <i className="ri-wallet-line"></i>
        </div>
        <h1>$8,249.50</h1>
        <p>Updated Today</p>
      </div>

      <div className="dashboard_top_2">
        <div>
          <h2>Monthly Income</h2>
          <i className="ri-arrow-up-circle-line"></i>
        </div>
        <h1>$4,850.00</h1>
        <p>+5.2% from last month</p>
      </div>

      <div className="dashboard_top_3">
        <div>
          <h2>Monthly Expense</h2>
          <i className="ri-arrow-down-circle-line"></i>
        </div>
        <h1>$2,830.50</h1>
        <p>+12.4% from last month</p>
      </div>
    </div>

    <div className="dashboard_bottom">
      <div className="dashboard_bottom_left">
        <h2 className="dashboard_bottom_left_1">Spending Breakdown</h2>
        <div className="dashboard_bottom_left_2">
          <div>
            <i className="ri-pie-chart-line">
              <h1>
                58% <br />
                <p>of budget</p>
              </h1>
            </i>
          </div>
          <div className="budget-container">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                padding: "20px",
                borderRadius: "8px",
                color: "#d1d5db",
              }}
            >
              {budgetData.map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "18px",
                    backgroundColor: "#090F20",
                  }}
                >
                  <span
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      backgroundColor: item.color,
                      display: "inline-block",
                    }}
                  ></span>
                  <span style={{ flex: "1" , backgroundColor: "#090F20"}}>{item.category}</span>
                  <span style={{ fontWeight: "bold", color: "#f8f9fa" }}>
                    {item.percentage}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard_bottom_right">
        <h1 className="dashboard_bottom_right_header">AI insights</h1>

        <div className="dashboard_bottom_right-1">
          <div className="dashboard_bottom_right-1-1">
            <i className="ri-notification-3-line"></i>
          </div>
          <div className="dashboard_bottom_right-1-2">
            <h1>Subscription Optimization</h1>
            <p>
              You're paying for 3 streaming services. Consider consolidating to
              save $24/month.
            </p>
          </div>
        </div>

        <div className="dashboard_bottom_right-2">
          <div className="dashboard_bottom_right-2-1">
            <i className="ri-notification-3-line"></i>
          </div>
          <div className="dashboard_bottom_right-2-2">
            <h1>Food Spending Alert</h1>
            <p>
              Your food delivery expenses increased by 32% this month. Consider
              meal planning to save.
            </p>
          </div>
        </div>

        <div className="dashboard_bottom_right-3">
          <div className="dashboard_bottom_right-3-1">
            <i className="ri-notification-3-line"></i>
          </div>
          <div className="dashboard_bottom_right-3-2">
            <h1>Saving Opportunity</h1>
            <p>
              Based on your spending pattern, you could save an additional
              $350/month with minor adjustments
            </p>
          </div>
        </div>

        <div className="dashboard_bottom_button">
          <h1>View All insights</h1>
        </div>
      </div>
    </div>
  </div>
);

const ExpensesSection = () => (
  <div className="expenses">
    <h1 className="expenses-header">Recent Expenses</h1>
    <div className="expenses-content">
      <div className="expenses-content-header">
        <div>
          <h2>Date</h2>
        </div>
        <div>
          <h2>Category</h2>
        </div>
        <div>
          <h2>Description</h2>
        </div>
        <div>
          <h2>Amount</h2>
        </div>
      </div>

      <div className="expenses-content-data">
        <div>
          <h2>Jun 15, 2025</h2>
        </div>
        <div>
          <h2 className="ect">Housing</h2>
        </div>
        <div>
          <h2>Monthly Rent</h2>
        </div>
        <div>
          <h2 className="dec">-$1,250.00</h2>
        </div>
      </div>

      <div className="expenses-content-data">
        <div>
          <h2>Jun 15, 2025</h2>
        </div>
        <div>
          <h2 className="ect">Food</h2>
        </div>
        <div>
          <h2>Grocery Store</h2>
        </div>
        <div>
          <h2 className="dec">-$87.00</h2>
        </div>
      </div>

      <div className="expenses-content-data">
        <div>
          <h2>Jun 15, 2025</h2>
        </div>
        <div>
          <h2 className="ect">Entertainment</h2>
        </div>
        <div>
          <h2>Movie Tickets</h2>
        </div>
        <div>
          <h2 className="dec">-$25.00</h2>
        </div>
      </div>

      <div className="expenses-content-data">
        <div>
          <h2>Jun 15, 2025</h2>
        </div>
        <div>
          <h2 className="ect">Transport</h2>
        </div>
        <div>
          <h2>Gas Station</h2>
        </div>
        <div>
          <h2 className="dec">-$45.00</h2>
        </div>
      </div>

      <div className="expenses-content-data">
        <div>
          <h2>Jun 15, 2025</h2>
        </div>
        <div>
          <h2 className="ect">Utilities</h2>
        </div>
        <div>
          <h2>Electricity Bill</h2>
        </div>
        <div>
          <h2 className="dec">-$94.00</h2>
        </div>
      </div>
    </div>
  </div>
);

const IncomeSection = ({ incomes, setIncomes }) => {
  const [jobType, setJobType] = useState("");
  const [amount, setAmount] = useState("");
  const [frequency, setFrequency] = useState("monthly");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!jobType || !amount) {
      alert("Please fill all the fields");
      return;
    }

    const newIncome = {
      id: Date.now(),
      jobType,
      amount: parseFloat(amount),
      frequency,
    };

    setIncomes([...incomes, newIncome]);
    setJobType("");
    setAmount("");
    setFrequency("monthly");
  };

  const handleDelete = (id) => {
    setIncomes(incomes.filter((income) => income.id !== id));
  };

  return (
    <div className="income">
      <div className="income-top">
        <h1 className="income-header">Income Source</h1>
      </div>

      <div className="income-content">
        <div className="income-content-left">
          {incomes.length === 0 ? (
            <p>No income added yet.</p>
          ) : (
            incomes.map((income) => (
              <div key={income.id} className="income-item">
                <h2>{income.jobType}</h2>
                <p>
                  ${income.amount.toFixed(2)} ({income.frequency})
                </p>
                <button onClick={() => handleDelete(income.id)}>Remove</button>
              </div>
            ))
          )}
        </div>

        <div className="income-content-right">
          <div className="addincome__container">
            <h1>Add Income</h1>
            <form className="addincome__form" onSubmit={handleSubmit}>
              <label>*Job type*</label>
              <input
                type="text"
                placeholder="Enter your job Type"
                value={jobType}
                onChange={(e) => setJobType(e.target.value)}
                required
              />
              <label>*Amount*</label>
              <input
                type="number"
                placeholder="Enter Amount in Dollars"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
                min="0"
                step="0.01"
              />
              <label>*Payment Frequency*</label>
              <select
                value={frequency}
                onChange={(e) => setFrequency(e.target.value)}
                required
              >
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
                <option value="anytime">Anytime</option>
              </select>
              <button type="submit">Add Income</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const GoalsSection = () => (
  <div className="goals">
    <h1 className="goals-header">Financial Goals</h1>
    <div className="goals-content">
      <p>Coming soon: Goal tracking feature</p>
    </div>
  </div>
);

const SBP = () => {
  const [incomes, setIncomes] = useState([]);
  const [activeNav, setActiveNav] = useState("dashboard");

  const navItems = [
    { id: "dashboard", label: "Dashboard", component: <DashboardSection /> },
    { id: "expenses", label: "Expenses", component: <ExpensesSection /> },
    {
      id: "income",
      label: "Income",
      component: <IncomeSection incomes={incomes} setIncomes={setIncomes} />,
    },
    { id: "goals", label: "Goals", component: <GoalsSection /> },
  ];

  return (
    <div className="SBP">
      <div className="SBP_header">
        <h1>Smart Budget Planner</h1>
        <p>
          Track your spending, set saving goals, and optimize your finances with
          AI-powered insights
        </p>
      </div>

      <div className="SBP_content">
        <nav className="navigation">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveNav(item.id)}
              className={activeNav === item.id ? "active1" : ""}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <div className="content">
          {navItems.find((item) => item.id === activeNav)?.component}
        </div>
      </div>

      <div className="SBP_footer">
        <div>
          <i class="ri-bar-chart-grouped-fill"></i>
          <h1>Expense Tracking</h1>
          <p>
            Automatically categorize and visualize your spending to identify
            patterns and opportunities.
          </p>
        </div>
        <div>
          <i class="ri-focus-2-line"></i>
          <h1>Goal Setting</h1>
          <p>
            Create personalized financial goals with automated tracking and
            progress visualized
          </p>
        </div>
        <div>
          <i class="ri-money-dollar-circle-fill"></i>
          <h1>AI Optimization</h1>
          <p>
            Receive AI-Powered suggestion to optiize your budget and accelerate
            saving toward your goals
          </p>
        </div>
      </div>
    </div>
  );
};

export default SBP;
