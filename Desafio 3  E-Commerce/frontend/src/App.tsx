import { Routes, Route } from 'react-router-dom'; 
import Home from './pages/home';
import Category from './pages/category';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:type" element={<Category />} />
      </Routes>
    </>
  );
}

export default App;
