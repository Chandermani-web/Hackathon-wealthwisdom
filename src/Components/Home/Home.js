import React, { useState } from "react";
import "./Home.css";
import "remixicon/fonts/remixicon.css";
import { NavLink } from "react-router-dom";

const financialTools = [
  {
    title: "AI Investment Advisor",
    description:
      "Get personalized investment recommendations based on your goals and risk profile.",
    icon: "ri-line-chart-fill",
    address: "/Aiinvestment",
  },
  {
    title: "Smart Budget Planner",
    description:
      "Track expenses, set saving goals, and get intelligent recommendations.",
    icon: "ri-pie-chart-fill",
    address: "/SBP",
  },
  {
    title: "Risk Assessment Tool",
    description:
      "Evaluate investment risks with AI-driven analysis before committing capital.",
    icon: "ri-tools-fill",
    address: "/RA",
  },
  {
    title: "Crypto & Stock Analyzer",
    description:
      "Track performance and get AI predictions for cryptocurrencies and stocks.",
    icon: "ri-btc-fill",
    address: "/Cas",
  },
  {
    title: "Loan & EMI Calculator",
    description:
      "Calculate loan payments with interactive visual charts and amortization tables.",
    icon: "ri-calculator-fill",
    address: "/Lc",
  },
];

const bes = [
  {
    heading: "AI Investment Advisor",
    paragraph:
      "Our advanced AI analyzes thousands of market data points in real-time to provide you with personalized investment recommendations tailored to your unique financial goals and risk tolerance.",
    icon1: "ri-line-chart-fill",
    heading1: "Market Analysis",
    paragraph1: "Real-time insights across global markets",
    icon2: "ri-pie-chart-fill",
    heading2: "Portfolio optimization",
    paragraph2: "AI-driven asset allocation Strategies",
    icon3: "ri-calculator-fill",
    heading3: "Predictive Analytics",
    paragraph3: "Forecasting based on historical patterns",
  },
  {
    heading: "Smart Budget Planner",
    paragraph:
      "Take control of your finances with our AI-powered budget planner that tracks your spending patterns, identifies saving opportunities, and helps you achieve your financial goals faster.",
    icon1: "ri-exchange-dollar-line",
    heading1: "Expense Tracking",
    paragraph1: "Automatically categorize transactions",
    icon2: "ri-money-dollar-circle-fill", // Fixed typo: "dollor" to "dollar"
    heading2: "Saving Opportunities",
    paragraph2: "AI identifies potential savings in your budget",
    icon3: "ri-line-chart-fill",
    heading3: "Financial Goals",
    paragraph3: "Track progress towards your saving goals",
  },
  {
    heading: "Risk Assessment Tool",
    paragraph:
      "Our sophisticated risk assessment engine evaluates potential investments against multiple risk factors, helping you make informed decisions aligned with your risk tolerance.",
    icon1: "ri-tools-fill",
    heading1: "Risk Scoring",
    paragraph1: "Comprehensive risk evaluation metrics",
    icon2: "ri-line-chart-fill",
    heading2: "Volatility Analysis",
    paragraph2: "Measure market fluctuations' impact on investments",
    icon3: "ri-shield-fill",
    heading3: "Security Safeguards",
    paragraph3: "Identify potential security threats in your portfolio",
  },
  {
    heading: "Crypto & Stock Analyzer",
    paragraph:
      "Stay ahead of market trends with real-time tracking and predictive analytics for cryptocurrencies and stocks, powered by advanced machine learning algorithms.",
    icon1: "ri-btc-fill",
    heading1: "Market Tracking",
    paragraph1: "Real-time data for thousands of assets",
    icon2: "ri-line-chart-fill",
    heading2: "Trend Predictions",
    paragraph2: "AI-powered forecasts of market movements",
    icon3: "ri-bubble-chart-fill",
    heading3: "Portfolio Integration",
    paragraph3: "Seamless integration with your investment",
  },
  {
    heading: "Loan & EMI Calculator",
    paragraph:
      "Make informed borrowing decisions with our advanced loan calculator that visualizes payment schedules and helps you understand the true cost of loans over time.",
    icon1: "ri-calculator-fill",
    heading1: "Payment Visualization",
    paragraph1: "Interactive charts of payment breakdowns",
    icon2: "ri-percent-fill",
    heading2: "Interest Analysis",
    paragraph2: "Compare different interest rates and loan terms",
    icon3: "ri-calculator-fill",
    heading3: "Amortization Tables",
    paragraph3: "Detailed breakdown of each loan payment",
  },
];

const FuturePlans = [
  {
    icon:"ri-openai-line",
    title: "Full AI-Driven Financial Planning",
    description: "Our next-generation AI will provide comprehensive financial planning personalized to your goals, risk tolerance, and lifestyle needs with unprecedented accuracy.",
  },
  {
    icon:"ri-rocket-line",
    title: "MVP & BETA Launch",
    description: "Join our exclusive beta program to get early access to cutting-edge features, predictive market analysis tools, and personalized investment strategies before they're publicly available.",
  },
  {
    icon: "ri-earth-fill",
    title: "Market Expansion",
    description: "We're expanding our services globally, bringing WealthWisdom's intelligent financial guidance to new markets with localized advice, region-specific investment options, and multi-currency support.",
  },
  {
    icon: "ri-award-line",
    title: "Industry Domination",
    description: "Our strategic roadmap includes becoming the leading AI financial advisor platform globally, setting new standards for accuracy, personalization, and wealth-building strategies across the fintech industry.",
  },
]
const Home = () => {
  const [selectedBES, setSelectedBES] = useState(bes[0]);

  const handleClick = (index) => {
    setSelectedBES(bes[index]);
  };
  return (
    <div className="hero-section">
      {/* hero section Top section */}

      <div className="top-section">
        <div className="t1">
          <span className="t1-1">
            <i class="ri-bard-line"></i> AI-Powered Financial Intelligence
          </span>

          <div className="ts1">
            <h1>Unlock your</h1>
            <h1 className="ts1-mid">Financial potential</h1>
            <h1>with AI guidance</h1>
          </div>

          <h1 className="ts-2">
            WealthWisdom combines advanced AI with Financial expertise to
            provide Professional guidance , market insights , and
            wealth-buildinstrategies tailored to your unique goals.
          </h1>

          <div className="ts21">
            <button className="ts21-btn1">
              Start Free Analysis <i class="ri-arrow-right-line"></i>
            </button>
            <button className="ts22-btn2">Explore Feature</button>
          </div>

          <div className="ts22">
            <span>
              <i className="ri-shield-line"></i> Bank-Grade Security
            </span>
            <span>
              <i className="ri-chat-voice-ai-line"></i> AI-Driven Analysis
            </span>
            <span>
              <i className="ri-line-chart-line"></i> Real-time Insights
            </span>
            <span>
              <i className="ri-bubble-chart-line"></i> Professional Strategies
            </span>
          </div>
        </div>

        <div className="t2">
          <NavLink to="/Aichatbot" className="ai-container">
            <div className="ai-heading">
              <h2>
                <i className="ri-chat-voice-ai-line"></i> WealthWisdom AI
                Assitant
              </h2>
            </div>

            <div className="ai-chat-container">
              <h1>
                Hi! I'm your WealthWisdom AI Assistant.
                <br />
                <span>How can I help with your finance today?</span>
              </h1>
            </div>

            <div className="ai-input">
              <div className="input-container">
                <input type="search" className="search-input-ai" placeholder="Talk with AI" />
                <i className="ri-arrow-right-line"></i>
              </div>
            </div>
          </NavLink>
        </div>
      </div>

      {/* hero section bottom section */}

      <div className="bottom-section">
        <div className="bottom-top-section">
          <div className="bts1">
            <h1>Powerful AI Tools for your Financial journey</h1>
            <p>
              Our suite of AI-Powered Financial tools hellps you make smarter
              decisions, optimize your investment , and achieve your wealth
              goals faster.
            </p>
          </div>
        </div>
        <div className="bottom-middle-section">
          <div className="bts1">
            {financialTools.map((itm, idx) => (
              <div key={idx} className="idx" onClick={() => handleClick(idx)}>
                <div className="ic-cont">
                  <i className={itm.icon}></i>
                </div>
                <div>
                  <h1>{itm.title}</h1>
                  <h2>{itm.description}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
          <div className="bottom-end-section">
            <h1>{selectedBES.heading}</h1>
            <p>{selectedBES.paragraph}</p>
            <div className="bes1">
              <div className="bes11">
                <div>
                  <h1>{selectedBES.heading1}</h1>
                  <p>{selectedBES.paragraph1}</p>
                </div>
                <i className={selectedBES.icon1}></i>
              </div>
              <div className="bes12">
                <div>
                  <h1>{selectedBES.heading2}</h1>
                  <p>{selectedBES.paragraph2}</p>
                </div>
                <i className={selectedBES.icon2}></i>
              </div>
              <div className="bes13">
                <div>
                  <h1>{selectedBES.heading3}</h1>
                  <p>{selectedBES.paragraph3}</p>
                </div>
                <i className={selectedBES.icon3}></i>
              </div>
            </div>
          </div>
      </div>

      <div className="upcoming-projects">
        
        <div className="upcoming-projects-header">
          <h1>Our Future Plans</h1>
          <p>We're constantly evolving our platform to bring you the most advanced financial tools and services. Here's what's coming next in our product roadmap.</p>
        </div>
        
        <div className="upcoming-projects-list">
          {FuturePlans.map((plan, index) => (
            <div key={index} className="upcoming-project-card">
              <i className={plan.icon}></i>
              <h2>{plan.title}</h2>
              <p>{plan.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
