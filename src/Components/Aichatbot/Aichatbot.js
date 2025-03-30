import { useState, useRef, useEffect } from "react";
import "./Aichatbot.css";

const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyDHyPPemOAWBi_jDePEazBaszPyvi4-oho";

// Financial QA Knowledge Base
const financialQA = {
  // Savings
  "how much save": "Aim to save 20% of your income monthly. For a $3,000 salary, that's $600/month. Prioritize building a 3-6 month emergency fund first.",
  "emergency fund": "Maintain 3-6 months of living expenses in a high-yield savings account. Calculate your monthly costs and multiply accordingly.",
  "save for vacation": "Use the sinking fund method: Divide your vacation cost by months until trip. For a $2,400 trip in 12 months, save $200/month.",
  
  // Investing
  "start investing": "Begin with low-cost index funds (SPY, VTI). Open a brokerage account with Fidelity or Vanguard. Start with whatever you can afford, even $100.",
  "best robo advisor": "Top robo-advisors: Betterment (best overall), Wealthfront (tax strategies), Ellevest (women-focused). Fees range 0.25%-0.50%.",
  "crypto risk": "Cryptocurrencies should be <5% of your portfolio. They're highly volatile - only invest what you can afford to lose completely.",
  
  // Debt
  "pay off credit cards": "Use the avalanche method: Pay minimums on all cards, then put extra money toward the highest-interest debt first.",
  "student loan strategy": "For federal loans, consider income-driven repayment plans. For private loans, refinance if you can get a lower rate.",
  
  // Retirement
  "401k vs roth": "Traditional 401k reduces taxable income now. Roth IRA grows tax-free. Ideal strategy: Contribute to 401k up to employer match, then max Roth IRA.",
  "retire early": "FIRE movement recommends saving 50%+ income. Invest in index funds. The 4% rule: Withdraw 4% annually from savings in retirement.",
  
  // Banking
  "high yield savings": "Current top HYSA: Ally (4.25% APY), Marcus (4.30%), Discover (4.20%). All FDIC insured with no monthly fees.",
  
  getResponse(query) {
    const lowerQuery = query.toLowerCase();
    for (const [key, response] of Object.entries(this)) {
      if (key !== "getResponse" && lowerQuery.includes(key)) {
        return response;
      }
    }
    return null;
  }
};

const Aichatbot = () => {
  const [chats, setChats] = useState([
    { 
      sender: "ai", 
      message: "Hello! I'm WealthWisdom AI. Ask me about:\n- Saving strategies\n- Investment options\n- Debt management\n- Retirement planning",
      file: null 
    }
  ]);
  const [prompt, setPrompt] = useState("");
  const [userFile, setUserFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    chatContainerRef.current?.scrollTo({
      top: chatContainerRef.current.scrollHeight,
      behavior: "smooth"
    });
  }, [chats]);

  const getGeminiResponse = async (userMessage) => {
    try {
      const financialPrompt = `As a certified financial advisor, provide specific, actionable advice in 2-3 sentences about: ${userMessage}`;

      const response = await fetch(API_URL, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [{
            parts: [{ text: financialPrompt }]
          }],
          generationConfig: {
            temperature: 0.5,
            maxOutputTokens: 200
          }
        })
      });

      const data = await response.json();
      return data.candidates?.[0]?.content?.parts?.[0]?.text || 
             "I'd recommend consulting a financial advisor for personalized advice on this topic.";
    } catch (error) {
      console.error("API Error:", error);
      return "Currently unable to access financial advice services. Please try again later.";
    }
  };

  const handleChatResponse = async (userMessage) => {
    if (!userMessage.trim()) return;
    
    // Add user message to chat
    const newUserChat = { 
      sender: "user", 
      message: userMessage, 
      file: userFile 
    };
    setChats((prev) => [...prev, newUserChat]);
    setPrompt("");
    setUserFile(null);
    setIsLoading(true);

    // Add temporary AI loading message
    const tempAiChat = { 
      sender: "ai", 
      message: "Analyzing your financial question...", 
      file: null 
    };
    setChats((prev) => [...prev, tempAiChat]);

    try {
      // First check knowledge base
      const quickResponse = financialQA.getResponse(userMessage);
      
      // If no quick answer, use Gemini API
      const aiResponse = quickResponse || await getGeminiResponse(userMessage);

      setChats((prev) => prev.map(chat => 
        chat.message === "Analyzing your financial question..." 
          ? { ...chat, message: aiResponse } 
          : chat
      ));
    } catch (error) {
      console.error("Error:", error);
      setChats((prev) => prev.map(chat => 
        chat.message === "Analyzing your financial question..." 
          ? { ...chat, message: "Sorry, I encountered an error. Please try again." } 
          : chat
      ));
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    
    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      setUserFile({ 
        mime_type: file.type, 
        data: e.target.result.split(",")[1] 
      });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="chat-app">
      <div className="chat-header">
        <h2>WealthWisdom AI Assistant</h2>
        <p>Your personal financial guide</p>
      </div>
      
      <div className="chat-container" ref={chatContainerRef}>
        {chats.map((chat, index) => (
          <div
            key={index}
            className={`chat-bubble ${chat.sender}-bubble`}
          >
            <div className="chat-avatar">
              {chat.sender === "user" ? (
                <span role="img" aria-label="User" className="user-icon">👤</span>
              ) : (
                <span role="img" aria-label="AI" className="ai-icon">🤖</span>
              )}
            </div>
            <div className="chat-content">
              {chat.message === "Analyzing your financial question..." ? (
                <div className="loading-dots">
                  <span>.</span><span>.</span><span>.</span>
                </div>
              ) : (
                <p>{chat.message}</p>
              )}
              {chat.file && (
                <img 
                  src={`data:${chat.file.mime_type};base64,${chat.file.data}`} 
                  className="uploaded-image" 
                  alt="Uploaded content" 
                />
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="input-area">
        <div className="file-upload">
          <label htmlFor="fileInput">
            <span role="img" aria-label="Attach">📎</span>
          </label>
          <input 
            type="file" 
            id="fileInput" 
            onChange={handleFileChange}
            accept="image/*"
          />
          {userFile && (
            <span className="file-indicator">Image attached</span>
          )}
        </div>
        
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask about investments, savings, etc..."
          onKeyDown={(e) => e.key === "Enter" && !isLoading && handleChatResponse(prompt)}
          disabled={isLoading}
        />
        
        <button 
          onClick={() => !isLoading && handleChatResponse(prompt)}
          disabled={isLoading}
        >
          {isLoading ? "..." : "Send"}
        </button>
      </div>
    </div>
  );
};

export default Aichatbot;