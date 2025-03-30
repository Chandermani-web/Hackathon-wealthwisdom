import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider , createBrowserRouter } from 'react-router-dom';
import Home from './Components/Home/Home';
import Aiinvestment from './Components/FinanacialElements/AI_Investment_Advisor/Aiinvestment';
import SBP from './Components/FinanacialElements/Smart_Budget_Planner/SBP';
import Cas from './Components/FinanacialElements/Crypto_&_Stock/Cas';
import Lc from './Components/FinanacialElements/Loan_Calculator/Lc';
import Login from './Components/Registration/Login/Login';
import Signup from './Components/Registration/Singup/Signup';
import Aichatbot from './Components/Aichatbot/Aichatbot';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "/Signup",
        element: <Signup />
      },
      {
        path: "/aiinvestment",
        element: <Aiinvestment />
      },
      {
        path: "/SBP",
        element: <SBP />
      },
      {
        path: "/Cas",
        element: <Cas />
      },
      {
        path: "/Lc",
        element: <Lc />
      },
      {
        path: '/Login',
        element: <Login />
      },
      {
        path: "/Aichatbot",
        element: <Aichatbot />
      }
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
