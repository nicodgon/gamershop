import styles from './styles/App.module.css'
import ItemListContainer from './pages/ItemListContainer';
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './pages/ItemDetailContainer';
import Cart from './pages/Cart'
import Footer from './components/Footer';
import Error404 from './pages/Error404';

function App() {

  return (
    <div className={styles.containerApp}>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/category/:category' element={<ItemListContainer/>} />
        <Route path='/item/:id' element={<ItemDetailContainer/>} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='*' element={<Error404/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
