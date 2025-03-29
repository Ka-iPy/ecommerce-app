import { useState, useEffect } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import WhiteTheme from '../assets/WhiteTheme.jpeg'
import DarkTheme from '../assets/DarkTheme.jpg'

export default function Layout() {
  const { isDarkMode, toggleTheme } = useTheme()
  const [isNavVisible, setIsNavVisible] = useState(true)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsNavVisible(scrollPosition < 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path: string) => {
    return location.pathname === path
  }

  return (
    <div className="relative min-h-screen">
      {/* Background Images */}
      <div className="fixed inset-0 z-0">
        <img
          src={isDarkMode ? DarkTheme : WhiteTheme}
          alt="Background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isNavVisible ? 'translate-y-0' : '-translate-y-full'
      } bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-sm`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link to="/" className="text-xl font-bold text-gray-900 dark:text-white">
                EShop
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link 
                to="/" 
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive('/')
                    ? 'text-indigo-600 dark:text-indigo-400'
                    : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/products" 
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive('/products')
                    ? 'text-indigo-600 dark:text-indigo-400'
                    : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
                }`}
              >
                Products
              </Link>
              <Link 
                to="/categories" 
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive('/categories')
                    ? 'text-indigo-600 dark:text-indigo-400'
                    : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
                }`}
              >
                Categories
              </Link>
              <Link 
                to="/about" 
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive('/about')
                    ? 'text-indigo-600 dark:text-indigo-400'
                    : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
                }`}
              >
                About
              </Link>
              <button
                onClick={toggleTheme}
                className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                {isDarkMode ? (
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 pt-16">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-600 dark:text-gray-300">
            © 2024 EShop. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
} 