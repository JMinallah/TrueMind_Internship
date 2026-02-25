import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Page content goes here */}
        <h1 className="text-3xl font-bold text-center mt-10">Welcome to Chuks Eats</h1>
      </main>

      <Footer />
    </div>
  )
}

export default App
