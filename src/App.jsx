import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

// Komponen utama yang berfungsi sebagai router dan mengatur tampilan halaman-halaman aplikasi.
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  )
}

export default App
