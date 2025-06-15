import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
// Importa aquí Dashboard u otros componentes

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* Otras rutas */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;