import { Link, useNavigate } from "react-router";
import { SERVER_ADDRESS } from "../../../env";
import { useContext } from "react";
import { UserContext } from "../../context/user/UserContext";

export function LogoutPage() {
    const navigate = useNavigate();
    const { isLoggedIn, logout } = useContext(UserContext);

    function handleLogoutClick() { 
        
        fetch(SERVER_ADDRESS +'/api/admin/logout', {
            method: 'GET',
            credentials: 'include',
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 'success') {
                    logout();
                }
            })
            .catch(console.error);
    

              setTimeout(() =>  {
               
            navigate('/');
        });
    }

    return (
        <main className="min-page-height">
      
            <div className="container">
                <div className="row">
                    {
                        isLoggedIn
                            ? <div className="col-12">
                                <p>Ar tikrai norite atsijungti nuo sistemos?</p>
                                <button onClick={handleLogoutClick} className="btn btn-primary">Logout</button>
                            </div>
                            : <div className="col-12">
                                <p>Jus jau esate atsijunge nuo sistemos!</p>
                                <Link to='/' className="btn btn-primary">Go home</Link>
                            </div>
                    }
                </div>
            </div>
        </main>
    );
}