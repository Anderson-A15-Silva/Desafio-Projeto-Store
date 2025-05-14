import { Routes, Route } from 'react-router-dom'; 
import Home from './pages/home';
import Category from './pages/category';
import Details from './pages/details';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:type" element={<Category />} />
        <Route path="/details/:type/:id" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
