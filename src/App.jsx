import './App.css'
import { Footer } from './components/Footer/Footer.jsx'
import { Header } from './components/Header/Header.jsx'
import { Routes, Route } from 'react-router-dom'

import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.jsx'
import { Count } from './components/Count/Count'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
function App() {
  
  return (
    <> 

    <Header />
    <main>
      <Routes>
        
        <Route path="/" element={<ItemListContainer />}/>
        <Route path="/product/:id" element={<ItemDetailContainer/>} />
        <Route path="/carrito" element={<p>Carrito</p>}/>
      
      
      </Routes>
       <Count />
    </main>
    <Footer />
        
    </>
  )
}

export default App
