// Utility functions for localStorage operations

export const saveUserData = (userData) => {
  try {
    localStorage.setItem('userData', JSON.stringify(userData))
    return true
  } catch (error) {
    console.error('Error saving user data to localStorage:', error)
    return false
  }
}

export const getUserData = () => {
  try {
    const savedData = localStorage.getItem('userData')
    return savedData ? JSON.parse(savedData) : null
  } catch (error) {
    console.error('Error retrieving user data from localStorage:', error)
    return null
  }
}

export const clearUserData = () => {
  try {
    localStorage.removeItem('userData')
    return true
  } catch (error) {
    console.error('Error clearing user data from localStorage:', error)
    return false
  }
}

export const isUserLoggedIn = (userData) => {
  if (!userData) return false
  return userData.name !== "John Doe" || userData.email !== "john.doe@example.com"
}