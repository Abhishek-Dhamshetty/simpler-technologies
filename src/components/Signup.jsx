import { useState } from 'react'

function Signup({ onSignupSuccess }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState({})
  const [showSuccess, setShowSuccess] = useState(false)

  const validateForm = () => {
    const newErrors = {}

    // Full Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required'
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email format is invalid'
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      // Show success animation
      setShowSuccess(true)
      
      // Update the UserCard with new user data
      if (onSignupSuccess) {
        onSignupSuccess(formData)
      }
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        password: ''
      })

      // Hide success message after 3 seconds
      setTimeout(() => {
        setShowSuccess(false)
      }, 3000)
    }
  }

  return (
    <div className="flex justify-center relative">
      {/* Success Toast Notification */}
      {showSuccess && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 animate-bounce">
          <div className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2 animate-pulse">
            <div className="text-2xl">✅</div>
            <div>
              <p className="font-semibold">Signup Successful!</p>
              <p className="text-sm opacity-90">Welcome to our platform</p>
            </div>
          </div>
        </div>
      )}

      <div className="w-full max-w-md">
        <div className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 transition-all duration-300 hover:shadow-xl">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign Up</h2>
          
          <form onSubmit={handleSubmit}>
            {/* Full Name Field */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
                Full Name
              </label>
              <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-all duration-200 ${
                  errors.fullName ? 'border-red-500 animate-shake' : 'border-gray-300 focus:border-blue-500'
                }`}
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
              />
              {errors.fullName && (
                <p className="text-red-500 text-xs italic mt-1 animate-fade-in">{errors.fullName}</p>
              )}
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-all duration-200 ${
                  errors.email ? 'border-red-500 animate-shake' : 'border-gray-300 focus:border-blue-500'
                }`}
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-500 text-xs italic mt-1 animate-fade-in">{errors.email}</p>
              )}
            </div>

            {/* Password Field */}
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-all duration-200 ${
                  errors.password ? 'border-red-500 animate-shake' : 'border-gray-300 focus:border-blue-500'
                }`}
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && (
                <p className="text-red-500 text-xs italic mt-1 animate-fade-in">{errors.password}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-center">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-all duration-200 w-full transform hover:scale-105 active:scale-95"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup