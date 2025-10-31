import { useContext, useEffect, useState } from "react";
import { HelpdesksContext } from "./HelpdesksContext";
import { initialHelpdesksContext } from "./initialHelpdesksContext";
import { UserContext } from "../user/UserContext";
import { SERVER_ADDRESS } from "../../../env";

export function HelpdesksContextWrapper(props) {
    const [publicHelpdesks, setPublicHelpdesks] = useState(initialHelpdesksContext.publicHelpdesks);
    const [adminHelpdesks, setAdminHelpdesks] = useState(initialHelpdesksContext.adminHelpdesks);

    const { isLoggedIn } = useContext(UserContext);
     
   function updatePublicHelpdesks() {
        fetch(SERVER_ADDRESS + '/api/helpdesks', {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 'success') {
                    setPublicHelpdesks(() => data.helpdesks);
                }
            })
            .catch(console.error);
    }

    function updateAdminHelpdesks() {
        fetch(SERVER_ADDRESS + '/api/admin/helpdesks', {
            method: 'GET',
            credentials: 'include',
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 'success') {
                    setAdminHelpdesks(() => data.helpdesks);
                }
            })
            .catch(console.error);
    }

    function deletePublicHelpdesk(urlSlug) {
        setPublicHelpdesks(currentList => currentList.filter(helpdesk => helpdesk.url_slug !== urlSlug));
    }

    function deleteAdminHelpdesk(urlSlug) {
        setAdminHelpdesks(currentList => currentList.filter(helpdesk => helpdesk.url_slug !== urlSlug));
    }

    function getPublicHelpdeskByUrlSlug(urlSlug) {
        return publicHelpdesks.find(helpdesk => helpdesk.url_slug === urlSlug);

       }
   

    function getAdminHelpdeskByUrlSlug(urlSlug) {
        return adminHelpdesks.find(helpdesk => helpdesk.url_slug === urlSlug);
        
        
    }console.log(getAdminHelpdeskByUrlSlug)
    

    function getAdminHelpdeskById(id) {
        return adminHelpdesks.find(helpdesk => helpdesk.id === id);
    }

    useEffect(updatePublicHelpdesks, []);

    useEffect(() => {
        if (isLoggedIn) {
            updateAdminHelpdesks();
        } else {
            setAdminHelpdesks(() => initialHelpdesksContext.adminHelpdesks);
        }
    }, [isLoggedIn]);

    const values = {
        publicHelpdesks,
        adminHelpdesks,
        getPublicHelpdeskByUrlSlug,
        getAdminHelpdeskByUrlSlug,
        getAdminHelpdeskById,
        updatePublicHelpdesks,
        updateAdminHelpdesks,
        deletePublicHelpdesk,
        deleteAdminHelpdesk,

    };

    return (
        <HelpdesksContext.Provider value={values}>
            {props.children}
        </HelpdesksContext.Provider>
    )
}