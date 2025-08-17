import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActive = (path) => {
    return location.pathname === path
  }

  const navLinkClass = (path) => {
    return `hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive(path) ? 'bg-blue-700' : ''
    }`
  }

  const mobileNavLinkClass = (path) => {
    return `hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium transition-colors ${
      isActive(path) ? 'bg-blue-700' : ''
    }`
  }

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Image only version */}
          <div className="flex-shrink-0">
            <Link to="/" className="block hover:opacity-80 transition-opacity">
              <img 
                src="/vite.png" 
                alt="Logo" 
                className="h-10 w-10 object-contain"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className={navLinkClass('/')}>
                Home
              </Link>
              <Link to="/about" className={navLinkClass('/about')}>
                About
              </Link>
              <Link to="/contact" className={navLinkClass('/contact')}>
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="text-xl">☰</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className={mobileNavLinkClass('/')} onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link to="/about" className={mobileNavLinkClass('/about')} onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link to="/contact" className={mobileNavLinkClass('/contact')} onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar