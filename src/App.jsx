import './App.css'
import { Footer } from './components/Footer/Footer.jsx'
import { Header } from './components/Header/Header.jsx'
import { Routes, Route } from 'react-router-dom'

import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.jsx'

import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer.jsx'
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
       
    </main>
    <Footer />
        
    </>
  )
}

export default App
