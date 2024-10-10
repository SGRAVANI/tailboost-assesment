
import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "./Context/ContextData";

const LoginPage = () => {
  const navigate = useNavigate();
  const cont = useContext(Context);
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
      if(isAuthenticated)
      {
        cont.setIsAuth(true)
      }
    }
  }, [isAuthenticated]); // Trigger useEffect when isAuthenticated changes

  return (
    <div className="mx-auto">
      {!isAuthenticated && (
        <button
          className="bg-blue-600 text-white md:text-xl font-bold rounded-md hover:brightness-125 transition-all delay-100 px-3 py-2"
          onClick={() => 
            loginWithRedirect({
              appState: { returnTo: '/dashboard' }, // Redirect after login
            })
          }
        >
          Log In
        </button>
      )}
      <div className="flex justify-center gap-2 items-center flex-wrap sm:flex-nowrap">
        {isAuthenticated && (
          <button
            className="bg-red-600 text-white md:text-xl font-bold rounded-md hover:brightness-125 transition-all delay-100 px-3 py-2"
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Logout
          </button>
        )}
        {isAuthenticated && <h1 className="text-center text-sm md:text-lg">hello {user.name}</h1>}
      </div>
    </div>
  );
};

export default LoginPage;