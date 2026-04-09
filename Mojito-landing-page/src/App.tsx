import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

function App() {

  return (
    <div className="bg-black text-white w-screen h-screen">
      <Navbar />
      <Hero />
      <div className="h-screen w-screen bg-black"></div>
    </div>
  )
}

export default App
