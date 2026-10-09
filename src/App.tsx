import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ProductsHome from './pages/ProductsHome';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/home" element={<ProductsHome />} />
      </Routes>
    </Router>
  );
}
export default App;
