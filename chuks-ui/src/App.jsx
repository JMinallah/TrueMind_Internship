import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AuthLayout from './layouts/AuthLayout'
import MainLayout from './layouts/MainLayout'

import Welcome from './pages/Welcome'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import FoodDetail from './pages/FoodDetail'
import Cart from './pages/Cart'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth pages — no Navbar, split-screen layout */}
        <Route element={<AuthLayout />}>
          <Route path="/" element={<Welcome />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>

        {/* Main app pages — with Navbar + Footer */}
        <Route element={<MainLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/food/:id" element={<FoodDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
