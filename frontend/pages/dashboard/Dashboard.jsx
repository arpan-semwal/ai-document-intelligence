import { useAuth } from '../../store/AuthContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dashboard Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">👤</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome, {user?.name}! 🎉
            </h2>
            <p className="text-gray-600 mb-6">{user?.email}</p>
            
            <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
              ✅ Authentication Working!
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">🎯 Day 2 Complete!</h3>
              <p className="text-gray-700">
                You've successfully built full authentication with:
              </p>
              <ul className="mt-4 text-left max-w-md mx-auto space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  User registration with password hashing
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  Login with JWT tokens
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  Protected routes
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  Beautiful frontend forms
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;