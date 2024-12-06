import express from 'express';
import cors from 'cors';
// import routes from './routes';
import * as env from './env.js';
import Email from "./utils/maillerClass.util.js"
import path from 'path';

const app = express();

app.use(cors());
app.use(express.json());

// app.use(routes);
app.get('/api', (req, res) => {
    res.json({ message: 'Hello from server!' }); 
    let html = Email.getHTML(path.join('../public/emails/welcome.html'));
    let welEmail = new Email("support@mail.com", "YnTQo@example.com");
    html = html.replace("{{user}}", "John Doe");
    welEmail.sendEmail(html, "Welcome");
});

app.listen(env.PORT,env.HOST, () => {
    console.log(`Server running on http://${env.HOST}:${env.PORT}`);
});