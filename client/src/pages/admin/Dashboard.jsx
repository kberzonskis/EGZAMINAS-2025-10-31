import { Link } from "react-router";
import { useContext } from "react";
import { UserContext } from "../../context/user/UserContext";

export function AdminDasboardPage() {

return (

<main className='min-page-height'>

    <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
        <h1 className="display-4 fw-normal  text-body-primary">"ADMINISTRACIJA HELPDESK PAGE"</h1>
        <p className="fs-5 text-body-primary">Sveiki, čia galite pateikti ir registruoti klausimus ir sitemos klaidas, gauti
     atsakymus ir sulaukti konsultacijos, bei pagalbos
 </p>
    </div>

</main>

)
}