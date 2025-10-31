import { RegisterForm } from "../../components/RegisterForm";
import { useContext } from "react";
import { Link } from "react-router";
import { UserContext } from "../../context/user/UserContext";

export function RegisterPage() {
const { isLoggedIn } = useContext(UserContext);
    
    return (
        <main className="min-page-height">
            <div className="container">
                <div className="row">
                    <h1 className="col-12 mb-5">Registruotis</h1>
                <div className="container">
                    <div className="row">
                        {
                            isLoggedIn
                                ? <>
                                    <p>Šiuo metu prie sistemos prisijungę vartotojai negali registruoti kitos paskyros. Norėdami tai padaryti, atsijunkite nuo dabartinės paskyros.</p>
                                    <div className="d-flex gap-3">
                                        <Link to='/logout' className="btn btn-outline-dark fw-bold">Atsijungti</Link>
                                        arba
                                        <Link to='/admin' className="btn btn-info fw-bold">Grįžti į admin</Link>
                                    </div>
                                </>
                                : <RegisterForm />
                        }
                    </div>
                </div>
                </div>
            </div>
        </main>
    );
}
 