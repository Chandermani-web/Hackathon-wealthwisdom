import React, { useState } from "react";
import "./Aiinvestment.css";

const Aiinvestment = () => {
  const [formData, setFormData] = useState({
    amount: "",
    years: "5",
    risk: "moderate"
  });

  const [strategy, setStrategy] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const riskLevels = [
    { id: "conservative", label: "Conservative", desc: "Low Risk" },
    { id: "moderate", label: "Moderate", desc: "Medium Risk" },
    { id: "aggressive", label: "Aggressive", desc: "High Risk" }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRiskSelect = (riskLevel) => {
    setFormData(prev => ({ ...prev, risk: riskLevel }));
  };

  const generateStrategy = () => {
    setIsLoading(true);
    
    // Simulate AI processing delay
    setTimeout(() => {
      const strategies = {
        conservative: {
          stocks: "40%",
          bonds: "45%",
          realEstate: "10%",
          cash: "5%",
          successRate: "78%",
          description: "Stable growth with minimal volatility"
        },
        moderate: {
          stocks: "60%",
          bonds: "25%",
          realEstate: "10%",
          cash: "5%",
          successRate: "85%",
          description: "Balanced approach for steady growth"
        },
        aggressive: {
          stocks: "80%",
          bonds: "10%",
          realEstate: "5%",
          cash: "5%",
          successRate: "92%",
          description: "High growth potential with increased volatility"
        }
      };

      setStrategy(strategies[formData.risk] || strategies.moderate);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="ai-investment">
      <div className="ai-investment-header">
        <h1>AI Investment Advisor</h1>
        <p>
          Get personalized investment recommendations powered by advanced AI
          market analysis
        </p>
      </div>

      <div className="ai-investment-body">
        <div className="ai-investment-body-left">
          <h2 className="aibl1">personalize your investment strategy</h2>
          
          <p>Investment Amount ($)</p>
          <div className="ai-investment-body-left-features">
            <i className="ri-money-dollar-circle-fill"></i>
            <input 
              type="number" 
              name="amount"
              placeholder="Enter Amount" 
              value={formData.amount}
              onChange={handleChange}
            />
          </div>
          
          <p>Investment Period (Years)</p>
          <div className="ai-investment-body-left-features">
            <i className="ri-time-line"></i>
            <input 
              type="number" 
              name="years"
              placeholder="5 Years" 
              value={formData.years}
              onChange={handleChange}
            />
          </div>
          
          <p>Risk Tolerance</p>
          <div className="ai-investment-body-left-features-2">
            {riskLevels.map(level => (
              <div 
                key={level.id}
                className={formData.risk === level.id ? "selected-risk" : ""}
                onClick={() => handleRiskSelect(level.id)}
              >
                <h1>{level.label}</h1>
                <p>{level.desc}</p>
              </div>
            ))}
          </div>
          
          <button 
            onClick={generateStrategy}
            disabled={!formData.amount || isLoading}
          >
            {isLoading ? "Generating..." : "Generate Investment Strategy"}
          </button>
        </div>
        
        <div className="ai-investment-body-right">
          {strategy ? (
            <>
              <div className="ai-investment-body-right-features-1">
                <h1 className="aibr1">Recommended Portfolio Allocation</h1>
                <div>
                  <i className="ri-pie-chart-line"></i>
                  <div className="ai-investment-body-right-features-1-1"> 
                    <h1>{strategy.successRate}</h1>
                    <p>Success Rate</p>
                  </div>
                </div>
              </div>
              
              <div className="ai-investment-body-right-features-2">
                <div className="ai-investment-body-right-features-2-1">
                  <div>
                    <h1>Stocks</h1>
                    <p>{strategy.stocks}</p>
                  </div>
                  <div>
                    <h1>Bonds</h1>
                    <p>{strategy.bonds}</p>
                  </div>
                </div>
                
                <div className="ai-investment-body-right-features-2-1">
                  <div>
                    <h1>Real Estate</h1>
                    <p>{strategy.realEstate}</p>
                  </div>
                  <div>
                    <h1>Cash</h1>
                    <p>{strategy.cash}</p>
                  </div>
                </div>
              </div>
              
              <div className="strategy-description">
                <p>{strategy.description}</p>
                {formData.amount && (
                  <p>Recommended investment: ${(formData.amount * 0.8).toLocaleString()} initial allocation</p>
                )}
              </div>
            </>
          ) : (
            <div className="empty-state">
              <i className="ri-line-chart-line"></i>
              <p>Your personalized investment strategy will appear here</p>
            </div>
          )}
        </div>
      </div>

      <div className="ai-investment-footer">
        <div>
          <i className="ri-line-chart-line"></i>
          <h1>Market Analysis</h1>
          <p>Our AI analyzes thousands of market data points in real-time to provide accurate investment recommendations</p>
        </div>
        <div>
          <i className="ri-bar-chart-grouped-line"></i>
          <h1>Portfolio Optimization</h1>
          <p>Maximize returns while minimizing risk with our AI-driven Portfolio Optimization strategies</p>
        </div>
        <div>
          <i className="ri-bar-chart-horizontal-fill"></i>
          <h1>Goal-Based Planning</h1>
          <p>Set specific financial goals and let our AI create a personalized investment roadmap to achieve them.</p>
        </div>
      </div>
    </div>
  );
};

export default Aiinvestment;