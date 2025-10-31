import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
//import { cookieParser } from './src/middleware/cookieParser.js';
import { PORT } from './src/env.js';



const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(helmet());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5551',
}));
//app.use(cookieParser);
//app.use(userData);

app.get('/', (req, res) => {
    return res.json({
        status: 'success',
        message: 'Server is running',
    });
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