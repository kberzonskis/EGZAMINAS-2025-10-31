import { Outlet } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import Bluu from '../assets/blue1.JPG'

export function PublicTemplate()  {
 
return(

<> 
<div style={{backgroundImage: `url(${Bluu})`, 
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
