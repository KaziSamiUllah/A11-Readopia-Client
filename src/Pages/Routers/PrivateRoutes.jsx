import { useContext } from "react";

import { Navigate,useLocation } from "react-router-dom"
import { AuthContext } from "../../Providers/AuthProvider";




// eslint-disable-next-line react/prop-types
const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    // (location)


    if(loading){
        return <div className="h-screen flex justify-center items-center"><span className="loading loading-bars loading-lg"></span></div>

    }

    if(user){
        return children;

    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoutes;