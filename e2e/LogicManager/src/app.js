import express from 'express';
import cors from 'cors';
// import routes from './routes';
import * as env from './env.js';


const app = express();

app.use(cors());
app.use(express.json());

// app.use(routes);
app.get('/api', (req, res) => {
    res.json({ message: 'Hello from server!' }); 
});

app.listen(env.PORT,env.HOST, () => {
    console.log(`Server running on http://${env.HOST}:${env.PORT}`);
});