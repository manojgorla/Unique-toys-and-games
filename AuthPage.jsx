import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const AuthPage = () => {
  const Navigate=useNavigate()
  const [isLoginView, setIsLoginView] = useState(true);
  const [toyBounce, setToyBounce] = useState(0);
  
  const toggleView = () => {
    setIsLoginView(!isLoginView);
  };

  useEffect(() => {
    
    // Bouncing animation for toys
    const bounceInterval = setInterval(() => {
      setToyBounce(prev => (prev + 1) % 3);
    }, 300);
    
    return () => {
      clearInterval(bounceInterval);
    };
  }, []);

  const HandleLogin=(e)=>{
      localStorage.setItem('user',e)
      Navigate('/')

  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 flex items-center justify-center p-4 ">
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row ">
        {/* Blue curved section with illustrations */}
        <div className={`flex flex-col justify-between bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white p-8 md:p-12 relative transition-all duration-500 z-10 ease-in-out ${isLoginView ? 'md:w-1/2 ' : 'md:w-1/2 md:translate-x-[35em]'}`}>
        
          
          <div className="relative z-10 max-w-md mx-auto  ">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              {isLoginView ? "New here?" : "One of us?"}
            </h2>
            <p className="text-white/80 mb-8">
              {isLoginView 
                ? "Welcome Back! Sign in to continue exploring and sharing creative toy ideas."
                : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laboriosam ad deleniti."}
            </p>
            <button 
              onClick={toggleView}
              className="border-2 border-white text-white font-medium py-2 px-6 rounded-full  hover:bg-white hover:text-purple-500 transition duration-300 outline-none"
            >
              {isLoginView ? "SIGN UP" : "SIGN IN"}
            </button>
            
            {/* Illustration */}
          
           
          </div>
          <div className="md:flex justify-center gap-6 hidden">
          <div className={`transition-transform duration-300 ${toyBounce === 0 ? 'transform -translate-y-4' : ''}`}>
            <div className="w-16 h-16 bg-purple-400 rounded-lg flex items-center justify-center text-3xl">
              🧸
            </div>
          </div>
          <div className={`transition-transform duration-300 ${toyBounce === 1 ? 'transform -translate-y-4' : ''}`}>
            <div className="w-16 h-16 bg-blue-400 rounded-lg flex items-center justify-center text-3xl">
              🎮
            </div>
          </div>
          <div className={`transition-transform duration-300 ${toyBounce === 2 ? 'transform -translate-y-4' : ''}`}>
            <div className="w-16 h-16 bg-green-400 rounded-lg flex items-center justify-center text-3xl">
              🎨
            </div>
          </div>
        </div>
        </div>
     
        
        {/* Form section */}
        <div className={`p-8 md:p-12 flex-1 transition-all duration-500 ease-in-out ${isLoginView ? 'translate-x-0' : 'md:-translate-x-[30em]'}`}>
          <div className="max-w-md mx-auto">
            <h1 className="text-3xl font-bold text-purple-600 text-center mb-8">
              {isLoginView ? "Sign in" : "Sign up"}
            </h1>
            
            <form>
              {!isLoginView && (
                <div className="mb-4">
                  <div className="bg-gray-100 rounded-lg px-4 py-3 flex items-center">
                    <span className="text-gray-500 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <input 
                      type="text" 
                      placeholder="true coder" 
                      className="bg-transparent w-full focus:outline-none text-gray-700"
                    />
                  </div>
                 
                </div>
              )}
              
              <div className="mb-4">
                <div className="bg-gray-100 rounded-lg px-4 py-3 flex items-center">
                  <span className="text-gray-500 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </span>
                  <input 
                    type="email" 
                    placeholder={isLoginView ? "Username" : "true.coder@gmail.com"} 
                    className="bg-transparent w-full focus:outline-none text-gray-700"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <div className="bg-gray-100 rounded-lg px-4 py-3 flex items-center">
                  <span className="text-gray-500 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <input 
                    type="password" 
                    placeholder="Password" 
                    className="bg-transparent w-full focus:outline-none text-gray-700"
                  />
                </div>
              </div>
              <button 
              onClick={()=>HandleLogin('pavan')}
                type="submit" 
                className="w-full bg-purple-600  hover:bg-purple-400 text-white font-medium py-3 rounded-lg transition duration-300"
              >
                {isLoginView ? "LOGIN" : "SIGN UP"}
              </button>
              {isLoginView &&<p className='text-gray-400 underline p-2 hover:text-blue-400 cursor-pointer'>Forgot Password?</p>}

            </form>
            
            <div className="mt-6 text-center">
              <p className="text-gray-600 mb-4">Or {isLoginView ? "Sign in" : "Sign up"} with social platforms</p>
              <div className="flex justify-center space-x-4 items-center gap-2 bg-slate-100 p-3 cursor-pointer hover:bg-slate-200 rounded-lg text-xl">
              <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.545 12.151L12.545 12.151 12.545 12.151 12.545 12.151zM10.795 14.698L12.545 13.632 14.302 14.698 13.879 12.716 15.545 11.456 13.496 11.282 12.545 9.459 11.594 11.282 9.545 11.456 11.211 12.716z" />
                        <path d="M12.545 10.251L12.545 10.251 12.545 10.251 12.545 10.251z" />
                        <path d="M21.133 10.991c0-.852-.076-1.673-.222-2.464H12v4.655h5.135c-.22 1.194-.891 2.197-1.898 2.875v2.393h3.064c1.797-1.659 2.832-4.101 2.832-7.459z" fillRule="evenodd" />
                        <path d="M12 21.5c2.558 0 4.705-.848 6.274-2.292l-3.064-2.375c-.848.569-1.936.904-3.21.904-2.47 0-4.561-1.667-5.308-3.907H3.51v2.451C5.076 19.308 8.317 21.5 12 21.5z" fillRule="evenodd" />
                        <path d="M6.692 13.83c-.193-.558-.301-1.158-.301-1.776 0-.618.108-1.218.301-1.776V7.826H3.51a9.415 9.415 0 000 8.456l3.182-2.451z" fillRule="evenodd" />
                        <path d="M12 6.048c1.391 0 2.638.478 3.619 1.42l2.716-2.716C16.711 3.216 14.564 2.5 12 2.5c-3.684 0-6.925 2.192-8.491 5.307l3.182 2.452C7.44 7.715 9.53 6.048 12 6.048z" fillRule="evenodd" />
                      </svg> Sign in  with Google
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;



