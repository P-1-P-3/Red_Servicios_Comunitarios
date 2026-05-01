import express from 'express';
import { userRoutes } from './routes/user.routes.js';

const app = express();

app.use(express.json());

app.use('/users', userRoutes());

app.listen(8080, () => {
    console.log('Servidor escuchando en el puerto 8080');
});