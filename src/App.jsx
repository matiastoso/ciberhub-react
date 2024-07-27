import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';

function App() {
return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path='*' element={<h1>Error 404</h1>}/>
        <Route exact path='/' element={<ItemListContainer greeting={'Bienvenidos a Ciber Hub!!'}/>}/>
        <Route exact path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route exact path='/item/:id' element={<ItemDetailContainer />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
