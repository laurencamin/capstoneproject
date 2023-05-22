import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import NewOrderPage from './pages/NewOrderPage/NewOrderPage.js';
import AuthPage from './pages/AuthPage/Authpage.js';
import OrderHistoryPage from './pages/OrderHistoryPage/OrderHistory.js';
import NonprofitMapPage from './pages/NonprofitMapPage/NonprofitMapPage.js';
import NavBar from './components/NavBar/NavBar.js';
import { getUser } from './utilities/users-service'

function App() {
  const [user, setUser] = useState(getUser);

  return (
    <main className="App">
        {user ? (
          <>
          <NavBar user={user} setUser={setUser} />
           <Routes>
            <Route path="/orders/new" element={<NewOrderPage /> } />
            <Route path="/orders" element={<OrderHistoryPage /> } />
            <Route path="/map" element={<NonprofitMapPage /> } /> 
           </Routes>
           </>
  ) : (
           <AuthPage setUser={setUser} />
  )}
    </main>
  );
}

export default App;
