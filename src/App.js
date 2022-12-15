import Home from "./components/home/Home"
import Modal from "./components/modal/Modal"
import Navbar from "./components/navbar/Navbar"
import AppProvider from "./context/Context"

function App() {
  return (
    <AppProvider>
      <div className='wrapper'>
        <Navbar />
        <Home />
        <Modal />
      </div>
    </AppProvider>
  )
}

export default App
