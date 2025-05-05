import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Events from './pages/Events';
import AddEvents from './pages/AddEvents';
import EditEvents from './pages/EditEvents';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <Navbar />
          <main className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route 
                path="/events" 
                element={
                  <PrivateRoute>
                    <Events />
                  </PrivateRoute>
                } 
              />
              <Route 
                path="/addevents" 
                element={
                  <PrivateRoute>
                    <AddEvents />
                  </PrivateRoute>
                } 
              />
              <Route 
                path="/edit/:id" 
                element={
                  <PrivateRoute>
                    <EditEvents />
                  </PrivateRoute>
                } 
              />
              <Route 
                path="/dashboard" 
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                } 
              />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;