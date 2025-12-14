import {createContext , useContext , useState , useEffect} from 'react';
import axios from 'axios';

const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context){
        throw new Error('useAuth must be used with AuthProvider');
    }
    return context;
};


export const AuthProvider = ({children}) => {
    const [user ,setUser] = useState(null);
    const [token , setToken] = useState(localStorage.getItem('token'));
    const [loading , setLoading] = useState(true);

    //set axios default header

    useEffect(() => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      loadUser();
    } else {
      setLoading(false);
    }
  }, [token]);

  //load user fro token
  const loadUser = async () => {
    try{
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/auth/me`);
        setUser(res.data.user);
    }catch(error){
        console.error('Failed to load user:',error);
        logout();
    }finally{
        setLoading(false);
    }
  };

  //Register user

  const register = async(name , email , password) => {
    try{
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/auth/register`, {
        name,
        email,
        password
      });


      setToken(res.data.token);
      setUser(res.data.user);
      localStorage.setItem('token',res.data.token);
      return {success:true};
    }catch(error){
      return{
        success:false,
        message:error.response?.data?.message || "Registeration failed"
      };
    }
  };


  //Login User

  const login = async(email,password) => {
    try{
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, {
        email,
        password
      });

      setToken(res.data.token);
      setUser(res.data.user);
      localStorage.setItem('token',res.data.token);
      return {success:true};
    }catch(error){
      return{
        success:false,
        message:error.response?.data?.message || "Login Failed"
      };
    }
  };


  //Logout user

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
  };


  const value = {
    user,
    token,
    loading,
    register,
    login,
    logout,
    isAuthenticated: !!user
  };

  return(
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )






}

