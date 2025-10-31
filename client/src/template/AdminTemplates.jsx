import { Outlet } from "react-router";
import { useContext } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Sidebar } from "../pages/admin/sidebar";
import { LoginForm } from "../components/LoginForm";
import Story from '../assets/story.webp'
import { UserContext } from '../context/user/UserContext';
import wood from '../assets/wood.jpg'

export function AdminTemplate() {

const { isLoggedIn } = useContext(UserContext);
return (
       
    <>
    
    
    <div style={{backgroundImage: `url(${wood})`, 
     backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      color: 'dark',
      
      }} className="container-fluid">

<Header />

<div className="container-fluid min-page-height">
    {
    isLoggedIn
    ? <div className="row">
        <Sidebar />
        <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <Outlet />
        </div>
    </div>
    :
    <>

        <div className="container">
            <div className="row">
                <LoginForm />
            </div>
        </div>
    </>
    }
</div>
<div className="container-fluid">
    <Footer />
</div>

</div>
</>
)
}