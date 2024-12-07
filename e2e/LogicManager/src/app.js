import express from 'express';
import cors from 'cors';
import {sequelize} from './db/index.js';
import * as env from './env.js';
// import Email from "./utils/maillerClass.util.js"
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import {cinemaRouter} from './router/cinema.js';
import { movieRouter } from './router/movie.js';
import { userRouter } from './router/user.js';
import { reportRouter } from './router/report.js';
import { reservationRouter } from './router/reservation.js';
import { showtimeRouter } from './router/showtime.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use("/public",express.static(path.join(__dirname, "public")));

sequelize.sync({force: false}).then(() => {
    console.log("Database synced");
}).catch((error) => {
    console.error("Error syncing database:", error);
});

app.use("/api/cinema", cinemaRouter);
app.use("/api/movie", movieRouter);
app.use("/api/user", userRouter);
app.use("/api/report", reportRouter);
app.use("/api/reservation", reservationRouter);
app.use("/api/showtime", showtimeRouter);

// // app.use(routes);
// app.get('/api', (req, res) => {
//     res.json({ message: 'Hello from server!' }); 
//     let html = Email.getHTML(path.join('../public/emails/welcome.html'));
//     let welEmail = new Email("support@mail.com", "YnTQo@example.com");
//     html = html.replace("{{user}}", "John Doe");
//     welEmail.sendEmail(html, "Welcome");
// });



app.listen(env.PORT,env.HOST, () => {
    console.log(`Server running on http://${env.HOST}:${env.PORT}`);
});