import React, { useState } from 'react';
import './Cas.css';
import 'remixicon/fonts/remixicon.css';
const allCryptocurrencies = [
  { name: 'Bitcoin', symbol: 'BTC', price: '$83,164.75', change: '+2.34%', marketCap: '$1.73T', volume24h: '$27.04B' },
  { name: 'Ethereum', symbol: 'ETH', price: '$1843.41', change: '+1.52%', marketCap: '$241.95B', volume24h: '$13.0B' },
  { name: 'Cardano', symbol: 'ADA', price: '$0.68', change: '-3.19%', marketCap: '$18.49B', volume24h: '$5.7B' },
  { name: 'Solana', symbol: 'SOL', price: '$126.87', change: '+8.24%', marketCap: '$45.6B', volume24h: '$8.9B' },
  { name: 'Ripple', symbol: 'XRP', price: '$2.167', change: '-1.08%', marketCap: '$136.47B', volume24h: '$4.4B' },
  { name: 'Dogecoin', symbol: 'DOGE', price: '$0.17', change: '+1.45%', marketCap: '$28.667B', volume24h: '$1.54B' },
  { name: 'Polkadot', symbol: 'DOT', price: '$4.78', change: '-0.89%', marketCap: '$4.77B', volume24h: '$1.5B' }
];

const allStocks = [
  { name: 'Apple', symbol: 'AAPL', price: '$217.32', change: '+0.87%', marketCap: '$3.33T', volume24h: '53.12M shares' },
  { name: 'Microsoft', symbol: 'MSFT', price: '$378.87', change: '+1.23%', marketCap: '$3.09T', volume24h: '$42.1B' },
  { name: 'Tesla', symbol: 'TSLA', price: '$263.42', change: '-2.15%', marketCap: '$875.09B', volume24h: '93.51M shares' },
  { name: 'Amazon', symbol: 'AMZN', price: '$192.64', change: '+0.54%', marketCap: '$2.50T', volume24h: '$45.6B' },
  { name: 'Meta', symbol: 'META', price: '$576.62', change: '+0.83%', marketCap: '$1.48T', volume24h: '$28.9B' },
  { name: 'Google', symbol: 'GOOGL', price: '$154.56', change: '+1.12%', marketCap: '$2.33T', volume24h: '$240.45B' },
  { name: 'Nvidia', symbol: 'NVDA', price: '$109.76', change: '+3.45%', marketCap: '$2.94T', volume24h: '$24.40B' }
];


const CryptoStockComponent = ({ data, searchTerm, setSearchTerm, onSelect, selectedItem, placeholder }) => {
  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='crypto-container'>
      <div className='crypto-element'>
        <div className='search-bar'>
          <i className='ri-search-line'></i>
          <input
            type='text'
            placeholder={placeholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className='crypto-elements-list'>
          <div className='crypto-element-list-header'>
            <h2>Name</h2>
            <h2>Price/Change</h2>
          </div>
          {filteredData.map((item, index) => (
            <div key={index} className='crypto' onClick={() => onSelect(item)}>
              <div className='crt-st'>
                <span>{item.symbol.substring(0, 2)}</span>
                <div>
                  <h1>{item.name}</h1>
                  <p>{item.symbol}</p>
                </div>
              </div>
              <div className='crt-st2'>
                <h3>{item.price}</h3>
                <h4 className={item.change[0] === '+' ? 'inc' : 'dec'}>{item.change}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='crypto-sidebar'>
        {selectedItem && (
          <div className='crypto-side-chart'>
            <div className='crypto-side-chart-1'>
              <div className='csch'>
                <span>{selectedItem.symbol.substring(0,2)}</span>
                <div>
                  <h1>{selectedItem.name}</h1>
                  <p>{selectedItem.symbol}</p>
                </div>
              </div>
              <div className='csch2'>
                <span><i className="ri-star-s-line"></i></span>
                <span><i class="ri-loop-right-line"></i></span>
              </div>
            </div>


            <h2 className='currentprice'>Current Price</h2>

            <div className='crypto-side-chart-2'>
              <div className='csch11'>
                <h2>{selectedItem.price}</h2>
                <h3 className={selectedItem.change[0] === '+' ? 'inc' : 'dec'}>{selectedItem.   change}</h3>
              </div>
              <div className='csch12'>
                <div>
                  <p>Market Cap</p>
                  <span>{selectedItem.marketCap}</span>
                </div>
                <div>
                  <p>24h Volume</p>
                  <span>{selectedItem.volume24h}</span>
                </div>
              </div>
            </div>

            <div className='crypto-side-chart-3'>
              <div>
                <h1>Price Chart</h1>
              </div>
              <div className='csch111'>
                  <span>1D</span>
                  <span>1W</span>
                  <span>1M</span>
                  <span>1Y</span>
                  <span>ALL</span>
              </div>              
            </div>

            <div className='crypto-side-chart-4'>
              <i class="ri-line-chart-fill"></i>
              <h1>Interactive chart will appear here</h1>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

const Cas = () => {
  const [active, setActive] = useState('cryptocurrencies');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCrypto, setSelectedCrypto] = useState(null);
  const [selectedStock, setSelectedStock] = useState(null);

  const navItems = [
    { 
      id: 'cryptocurrencies', 
      label: 'Cryptocurrencies', 
      component: (
        <CryptoStockComponent 
          data={allCryptocurrencies} 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm} 
          onSelect={setSelectedCrypto} 
          selectedItem={selectedCrypto} 
          placeholder="Search Crypto..."
        />
      )
    },
    { 
      id: 'stocks', 
      label: 'Stocks', 
      component: (
        <CryptoStockComponent 
          data={allStocks} 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm} 
          onSelect={setSelectedStock} 
          selectedItem={selectedStock} 
          placeholder="Search Stocks..."
        />
      )
    }
  ];

  return (
    <div className='cas'>
      <div className='cas-header'>
        <h1>Crypto & Stock Analysis</h1>
        <p>Real-time Tracking and AI predictions for cryptocurrency and stocks</p>
      </div>
      <div className='cas-content'>
        <nav className='navigation'>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={active === item.id ? 'active' : ''}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <div className='content'>
          {navItems.find((item) => item.id === active)?.component}
        </div>
      </div>
    </div>
  );
};

export default Cas;
