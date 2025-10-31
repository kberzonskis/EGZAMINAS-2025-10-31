
import { Link } from "react-router";

import { SERVER_ADDRESS } from "../../../env";
import { useContext } from "react";
import { UserContext } from "../../context/user/UserContext";
import {NewHelpdeskForm} from "../../components/NewHelpdeskForm"



export function NewHelpdeskPage(){


    return (
        <main >
            
            
             <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3 className="fst-italic">Kurti naują help istoriją</h3>
                    </div>
                </div>
            </div>
                
            
            <div style={{textAlign:"left"}}   className="container ">
            <div className="row ">
                  <NewHelpdeskForm api={SERVER_ADDRESS + '/api/admin/helpdesks'} method="POST" />
                </div>
            </div>
  
         </main>
    );
}
 













