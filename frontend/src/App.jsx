import { BrowserRouter as Router , Routes , Route } from "react-router-dom"
import Navbar from "../components/layout/Navbar"
import Home from "../pages/Home"
import Login from "../pages/auth/Login"
import { AuthProvider, useAuth } from "../store/AuthContext"
import { Toaster } from "react-hot-toast"
import Register from "../pages/auth/Register"
import ProtectedRoute from "../components/auth/ProtectedRoute"
import Dashboard from "../pages/dashboard/Dashboard"

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Toaster position="top-right" />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App