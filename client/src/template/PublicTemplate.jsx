import { Outlet } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import Helpdesk2 from '../assets/helpdesk2.JPG'

export function PublicTemplate()  {
 
return(

<> 
<div style={{backgroundImage: `url(${Helpdesk2})`, 
 backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  color: 'white'
  
 }}>
<div className="container">
<Header />
</div>

<Outlet />

<div className="container">
<Footer />
</div>
</div>
</>
 )
}
