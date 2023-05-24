import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NewOrderPage from './pages/NewOrderPage/NewOrderPage';
import AuthPage from './pages/AuthPage/Authpage';
import OrderHistoryPage from './pages/OrderHistoryPage/OrderHistoryPage';
import NonprofitMapPage from './pages/NonprofitMapPage/NonprofitMapPage';
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/HomePage/HomePage';
import TermsPage from './pages/TermsPage/TermsPage';
import CustomBoxPage from './pages/CustomBoxPage/CustomBoxPage';
import HowItWorksPage from './pages/HowItWorksPage/HowItWorksPage';
import PublicNavBar from './components/PublicNavBar/PublicNavBar';
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
            <Route path="/custom" element={<CustomBoxPage user={user} setUser ={setUser} /> } />
           </Routes>
           </>
  ) : ( 
            <>
        <PublicNavBar />
          <Routes>
           <Route path="/terms" element={<TermsPage /> } />
           <Route path="/auth" element={<AuthPage setUser={setUser} /> } />
           <Route path="/howitworks" element={<HowItWorksPage /> } />
           <Route path="/" element={<HomePage /> } />
          </Routes>
          </>
  )}
    </main>
  );
}

export default App;
