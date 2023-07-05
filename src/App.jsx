import { Route, Routes} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Category from './pages/Category'
import Product from './pages/Product'
import Cart from './pages/Cart'

function App() {

    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/category/:catSlug' element={<Category />} />
                <Route path='/product/:prodSlug' element={<Product />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>
        </>
    )
}

export default App
