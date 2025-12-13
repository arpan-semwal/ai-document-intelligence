import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-xl font-bold text-blue-600">
            🤖 AI DocuMind
          </Link>
          <div className="flex gap-4">
            <Link 
              to="/login" 
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Login
            </Link>
            <Link 
              to="/register" 
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;