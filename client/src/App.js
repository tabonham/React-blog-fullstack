import React from 'react'
import Topbar from './components/topbar/Topbar';
import Write from './pages/write/Write';
import Single from './pages/single/Single';
import Home from './pages/home/Home'
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const currentUser = false;
  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={currentUser ? <Home /> : <Register /> } />

        <Route path="/login" element={currentUser ? <Home /> : <Login />} />
        <Route path="/write" element={currentUser ? <Write /> : <Login />} />
        <Route path="/settings" element={currentUser ? <Settings /> : <Login />} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
