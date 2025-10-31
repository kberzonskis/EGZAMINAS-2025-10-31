import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
//import { cookieParser } from './src/middleware/cookieParser.js';
import { PORT } from './src/env.js';


import {getLogout } from '../server/src/api/public/getLogout.js'
import { cookieParser } from './src/middleware/cookieParser.js';
import { userData } from './src/middleware/userData.js';
import { isPublic } from './src/middleware/isPublic.js';
import { isAdmin } from './src/middleware/isAdmin.js';
import { postPublicRegister } from './src/api/public/postRegister.js';
import { postPublicLogin } from './src/api/public/postLogin.js';
import { getLogin } from './src/api/public/getLogin.js';

import { FILE_SIZE_LIMIT } from './src/env.js';
import { uploadStoryThumbnailImage } from './src/middleware/uploadStoryThumbnail.js';
import { postImageUpload } from './src/api/admin/helpdesk//postImageUpload.js';
import { formatFileSize } from './src/lib/formatFileSize.js';
import {postAdminHelpdesks} from "./src/api/admin/helpdesk/postHelpdesks.js"

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(helmet());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5551',
}));
app.use(cookieParser);
app.use(userData);

app.get('/', (req, res) => {
    return res.json({
        status: 'success',
        message: 'Server is running',
    });
});


app.post('/api/register', isPublic, postPublicRegister);
app.post('/api/login', isPublic, postPublicLogin);

app.get('/api/login', isAdmin, getLogin);
app.get('/api/admin/logout', getLogout)

app.post('/api/admin/helpdesks',isAdmin, postAdminHelpdesks);

app.post('/api/admin/upload-image', isAdmin, uploadStoryThumbnailImage.single('img'), postImageUpload);
app.use((err, req, res, next) => {
    if (err.code === 'LIMIT_FILE_SIZE') {
        return res.status(400).json({
            status: 'error',
            msg: `Virsytas failo limitas (${formatFileSize(FILE_SIZE_LIMIT)})`,
        });
    }

    console.log(err);

    return res.status(500).send('Server error');
});



app.get('*error', (req, res) => {
    return res.json({
        status: 'error',
        message: 'No such route',
    });
});

app.listen(PORT, () => {
    console.log(`Server running: http://localhost:${PORT}`);
});