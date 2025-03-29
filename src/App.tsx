import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Products from './pages/Products'
import Categories from './pages/Categories'
import About from './pages/About'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="categories" element={<Categories />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
