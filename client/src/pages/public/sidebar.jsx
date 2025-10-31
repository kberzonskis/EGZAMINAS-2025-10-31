import { Link } from "react-router";

export function Sidebar() {
    return (
        <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
            <div className="offcanvas-md offcanvas-end bg-body-tertiary" tabIndex="-1" id="sidebarMenu" aria-labelledby="sidebarMenuLabel">
               <>
                <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
                    <ul className="nav nav-pills flex-column">
                        <li className="nav-item">
                            <Link className="nav-link d-flex align-items-center gap-2 " to="/admin">
                                Admin Home Page
                            </Link>
                        </li>
                    </ul>
                    <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
                        <span>Helpdesk</span>
                    </h6>
                    <ul className="nav nav-pills flex-column">
                        <li className="nav-item">
                            <Link className="nav-link d-flex align-items-center gap-2 " to="/admin/helpdesk/new">
                                New Help type
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link d-flex align-items-center gap-2 " to="/admin/helpdesk">
                                All Stories
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link d-flex align-items-center gap-2 " to="/admin/helpdesk/published">
                                Published stories
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link d-flex align-items-center gap-2 " to="/admin/helpdesk/draft">
                                Draft stories
                            </Link>
                        </li>
                    </ul>
             </div>
             </>
            </div>
        </div>
    );
}