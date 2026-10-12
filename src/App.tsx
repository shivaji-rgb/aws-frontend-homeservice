import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {ProductsHome} from './pages/ProductsHome';
import MainLayout from './layouts/MailLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
        <Route path="/products/home" element={<ProductsHome />} />
        </Route>
        <Route path="/" element={<Home />} />
        
      </Routes>
    </Router>
  );
}
export default App;
