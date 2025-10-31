import { useContext } from "react";
import { UserContext } from "../context/user/UserContext";
import { Link } from "react-router";

export function Footer() {
  const { isLoggedIn } = useContext(UserContext);
return (

<footer style={{ padding: '5px' }}   > 

    <div className="pt-4 my-md-5 pt-md-5 border-top">
     <div className="row">
         <div className="col-12 col-md">
             <small className="d-block mb-3 text-body-primary">© 2025</small> </div>
         <div className="col-12 col-md">

            

    {isLoggedIn ? (
                    <>  <Link to="/logout" className="btn btn-light fw-bold me-2">Logout</Link>
                        <Link to="/admin" className="btn btn-success me-2">Admin Home Page</Link>
                    <Link to="/products" className="btn btn-warning me-2">Products</Link>
                    </>
                ) : (
                    <> 
                       
                        <Link to="/register" className="btn btn-danger me-2">Register</Link>
                        <Link to="/login" className="btn btn-dark me-2">Login</Link>
                         <Link to="/products" className="btn btn-warning me-2">Products</Link>
                    </>
                )}


         </div>
     </div>
        
    </div>
</footer>
)
}