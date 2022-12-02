import logo from './logo.svg';
import './App.css';
import { Fragment, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import Home from './Components/Home';
import Login from './Components/Login';
import NotFound from './Components/NotFound';
import Create from './Components/Create';

function App() {

  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    document.title = 'Xhipment';
  });

  const fetchUserDetails = (resp) => {
    setUserDetails(resp);
  }

  const signOutUser = () => {
    setUserDetails(null);
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' exact element={<Home userDetails={userDetails} signOutUser={signOutUser} />} />
          <Route path='/login' exact element={<Login fetchUserDetails={fetchUserDetails} />} />
          <Route path='/create' exact element={<Create userDetails={userDetails} signOutUser={signOutUser} />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
