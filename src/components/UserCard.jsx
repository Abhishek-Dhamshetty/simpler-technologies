function UserCard({ name, email, onLogout }) {
  // Check if this is dummy data or real user data
  const isRealUser = name !== "John Doe" || email !== "john.doe@example.com"
  
  return (
    <div className="flex justify-center">
      <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 w-full max-w-sm">
        <div className="text-center">
          {isRealUser && (
            <div className="mb-3">
              <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                ✅ Logged In
              </span>
            </div>
          )}
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{name}</h3>
          <p className="text-gray-600 mb-4">{email}</p>
          
          {!isRealUser && (
            <p className="text-sm text-gray-400 mt-2 italic">Sample User Data</p>
          )}
          
          {isRealUser && onLogout && (
            <button
              onClick={onLogout}
              className="mt-4 bg-gray-500 hover:bg-gray-600 text-white text-sm font-medium py-1 px-3 rounded transition-colors"
            >
              Quick Logout
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default UserCard