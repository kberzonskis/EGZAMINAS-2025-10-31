import { useContext, useState } from "react";
import { HelpdesksContext } from "../context/helpdesks/HelpdesksContext";
import { useNavigate } from "react-router";
import defaultImg from '../assets/computer-repair-clipart-13.jpg';
import { SERVER_ADDRESS } from "../../env";


export function NewHelpdeskForm({ api, method, helpdesk }) 
{ 
    const [title, setTitle] = useState(helpdesk?.title ?? '');
    const [url, setUrl] = useState(helpdesk?.url_slug ?? '');
    const [description, setDescription] = useState(helpdesk?.description ?? '');
    const [status, setStatus] = useState(helpdesk?.status_name ?? 'draft');
    const [img, setImg] = useState(helpdesk?.img ?? '');
    const [imgErr, setImgErr] = useState('');

    const { updateAdminHelpdesks, updatePublicHelpdesks } = useContext(HelpdesksContext);
    const navigate = useNavigate();
    

    function handleImageFormSubmit(e) {
        e.preventDefault();

        setImgErr('');

        const imageDOM = document.getElementById('img');
        const formData = new FormData();
        formData.append('img', imageDOM.files[0]);

        fetch(SERVER_ADDRESS + '/api/admin/upload-image', {
            method: method,
            credentials: 'include',
            body: formData,
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 'success') {
                    setImg(data.msg);
                } else {
                    setImgErr(data.msg);
                }
            })
            .catch(console.error);
    }

    function handleFormSubmit(e) {
        e.preventDefault();
         setImgErr('');


        fetch(api, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({
                title,
                url,
                img,
                description,
                status,
            }),
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 'success') {
                    updatePublicHelpdesks();
                    updateAdminHelpdesks();
                    navigate('/admin/helpdesks');
                }
            })
            .catch(console.error);
     }

    return (
        <>
               <form onChange={handleImageFormSubmit} className="col-12 col-md-9 col-lg-6 mt-5 contain">
                <img id="img_preview" className="d-block w-100 object-fit-cover"
                    style={{ height: '20rem', backgroundColor: '#eee',  }}
                    src={img ? (SERVER_ADDRESS + img) : defaultImg} alt="helpdesk thumbnail" />
                 <p id="img_path">{img}</p>
                <input type="file" className={"form-control" + (imgErr ? ' is-invalid' : '')} id="img" name="img" />
                <div className="invalid-feedback">{imgErr}</div>
            </form>
       
       
        <form onSubmit={handleFormSubmit} className="col-12  col-md-9 col-lg-6 mt-5 text-left">
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input onChange={e => setTitle(e.target.value)} value={title} type="text"
                    className="form-control" id="title" required />
            </div>
            <div className="mb-3">
                <label htmlFor="url" className="form-label">Url slug</label>
                <input onChange={e => setUrl(e.target.value)} value={url} type="text"
                    className="form-control" id="url" required />
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea onChange={e => setDescription(e.target.value)} value={description}
                    className="form-control" id="description"></textarea>
            </div>
            <div className="mb-3">
                <label className="form-label">Status</label>
                <div className="form-check">
                    <input onChange={() => setStatus('published')}
                        checked={status === 'published' ? 'checked' : ''}
                        type="radio" name="radios" className="form-check-input" id="status_published" required />
                    <label className="form-check-label" htmlFor="status_published">Published</label>
                </div>
                <div className="form-check">
                    <input onChange={() => setStatus('draft')}
                        checked={status === 'draft' ? 'checked' : ''}
                        type="radio" name="radios" className="form-check-input" id="status_draft" required />
                    <label className="form-check-label" htmlFor="status_draft">Draft</label>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">{method === 'POST' ? 'Create' : 'Update'}</button>
        </form>

      </>  
    );
}