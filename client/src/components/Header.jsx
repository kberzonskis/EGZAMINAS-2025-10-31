import { Link, NavLink } from "react-router";
import { useContext } from "react";
import { UserContext } from "../context/user/UserContext";

export function Header() {
/*const backgroundStyle = {
backgroundImage: `url(${Bluu})`,
}; */

const { isLoggedIn } = useContext(UserContext);
return (
<header style={{ padding: '20px' }} className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
 

<div className="container">
                    <Link to='/' className="d-inline-flex link-body-emphasis text-decoration-none">
            
                    </Link>
                </div>
                <ul className=" nav-pills  nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li>
                        <Link to="/" className="btn btn-light me-2">Home</Link>
                    </li>
                    <li>
                        <NavLink to='/stories' className="btn btn-warning me-2">Stories</NavLink>
                    </li>
                </ul>
               
<div className="col-12 col-md text-end">
   
   {isLoggedIn ? (
                    <>
                        <Link to="/logout" className="btn btn-light fw-bold me-2">Logout</Link>
                        <Link to="/admin" className="btn btn-success me-2">Admin Home Page</Link>
                       
                    </>
                       ) : (
                    <>
                        <Link to="/register"   style={{ outlineStyle:"2px outline yellow" }} className="btn btn-danger me-2   ">Register</Link>
                        <Link to="/login" className="btn btn-dark me-2">Login</Link>
                    </>
                  )}

</div>



</header>


)
}




