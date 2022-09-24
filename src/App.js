import React from "react";
import { Routes, Route, } from "react-router-dom";
import HomePage from './routes/HomePage';
import AboutPage from './routes/AboutPage';
import UsersPage from './routes/UsersPage';
import UserPage from "./routes/UserPage";
import NotFound from './routes/NotFound';


function App() {
  return (
    <>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="About" element={<AboutPage />} />
    <Route path="Users" element={<UsersPage />} />
    <Route path="users/:userId" element={<UserPage />} />
    <Route path="*" element={<NotFound />} /> 
  </Routes>
    </>
  );
}

export default App;
