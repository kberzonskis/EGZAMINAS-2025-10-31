

import { Link } from 'react-router';


export function Page404() {
    return (
        <main className='min-page-height'>
            <div className="container">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
               
                     
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">404</h1>
                        <p className="lead">Page not found</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <Link to="/" className="btn btn-outline-dark me-2 btn-lg px-4 me-md-2">Go home</Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}