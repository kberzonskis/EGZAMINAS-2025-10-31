import { LoginForm } from "../../components/LoginForm";
import { Link } from "react-router";
import { useContext } from "react";
import { UserContext } from "../../context/user/UserContext";


export function LoginPage() {
 
   const { isLoggedIn } = useContext(UserContext);
    return (
        <main className="min-page-height">
            <div className="container">
                <div className="row">
                    <h1 className="col-12 mb-5">Prisijungti</h1>
                        <div className="container">
                            <div className="row">
                            {
                                isLoggedIn
                                ? <>
                                    <p>Esate prisijungę, todėl negalite prisijungti prie kito vartotojo. Jei norite tai padaryti, atsijunkite nuo savo dabartinės paskyros.</p>
                                    <div className="d-flex gap-3">
                                        <Link to='/logout' className="btn btn-outline-dark fw-bold">Atsijungti</Link>
                                        arba
                                        <Link to='/admin' className="btn btn-info fw-bold">Grįžti į admin</Link>
                                    </div>
                                </>
                                : <LoginForm />
                                

                            }
                            </div>
                        </div>
                </div>
            </div>
        </main>
    );
}
 