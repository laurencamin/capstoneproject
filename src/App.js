import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import NewOrderPage from './pages/NewOrderPage/NewOrderPage';
import AuthPage from './pages/AuthPage/Authpage';
import OrderHistoryPage from './pages/OrderHistoryPage/OrderHistory';
import NonprofitMapPage from './pages/NonprofitMapPage/NonprofitMapPage';
import NavBar from './components/NavBar/NavBar';
import { getUser } from './utilities/users-service'

function App() {
  const [user, setUser] = useState(getUser());
console.log(user)
  return (
    <main className="App">
        {user ? (
          <>
          <NavBar user={user} setUser={setUser} />
           <Routes>
            <Route path="/orders/new" element={<NewOrderPage user={user} setUser={setUser} /> } />
            <Route path="/orders" element={<OrderHistoryPage user={user} setUser={setUser} /> } />
            <Route path="/map" element={<NonprofitMapPage user={user} setUser={setUser} /> } /> 
           </Routes>
           </>
  ) : (
           <AuthPage setUser={setUser} />
  )}
    </main>
  );
}

export default App;
