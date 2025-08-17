import { useState, useEffect } from 'react'
import Signup from '../components/Signup'
import UserCard from '../components/UserCard'
import { saveUserData, getUserData, clearUserData, isUserLoggedIn } from '../utils/localStorage'

function Home() {
  const defaultUserData = {
    name: "John Doe",
    email: "john.doe@example.com"
  }

  const [userData, setUserData] = useState(defaultUserData)

  // Load user data from localStorage on component mount
  useEffect(() => {
    const savedUserData = getUserData()
    if (savedUserData && isUserLoggedIn(savedUserData)) {
      setUserData(savedUserData)
    }
  }, [])

  const handleSignupSuccess = (signupData) => {
    const newUserData = {
      name: signupData.fullName,
      email: signupData.email
    }
    
    // Update state
    setUserData(newUserData)
    
    // Save to localStorage
    saveUserData(newUserData)
  }

  const handleLogout = () => {
    // Reset to default data
    setUserData(defaultUserData)
    
    // Clear from localStorage
    clearUserData()
    
    // Show logout confirmation
    alert('Logged out successfully! 👋')
  }

  const handleSignupAsNewUser = () => {
    // Reset to default data
    setUserData(defaultUserData)
    
    // Clear from localStorage
    clearUserData()
  }

  const userIsLoggedIn = isUserLoggedIn(userData)

  return (
    <div className="container mx-auto px-4 py-8">
      {!userIsLoggedIn ? (
        <Signup onSignupSuccess={handleSignupSuccess} />
      ) : (
        <div className="flex flex-col items-center space-y-6">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center max-w-md w-full">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome Back!</h2>
            <p className="text-gray-600 mb-6">
              Hello <strong>{userData.name}</strong>! You are already signed up. 
              Your information is displayed below.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition-colors flex items-center justify-center"
              >
                <span className="mr-2">🚪</span>
                Logout
              </button>
              
              <button
                onClick={handleSignupAsNewUser}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors flex items-center justify-center"
              >
                <span className="mr-2">👤</span>
                Sign Up as Different User
              </button>
            </div>
          </div>
        </div>
      )}
      
      <div className="mt-8">
        <UserCard 
          name={userData.name} 
          email={userData.email} 
          onLogout={userIsLoggedIn ? handleLogout : null}
        />
      </div>
    </div>
  )
}

export default Home