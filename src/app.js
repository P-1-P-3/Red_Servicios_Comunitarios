import express from 'express';
import cors from 'cors';
import { userRoutes } from './routes/user.routes.js';
import { servicesRoutes } from './routes/services.routes.js';
import { resError } from './middleware/resError.js';
import 'dotenv/config';

const app = express();

app.use(express.json());
app.use(cors());

// Definir las rutas aquí, por ejemplo:
app.use('/users', userRoutes());
app.use('/service', servicesRoutes());

// ------------------------------------
// Middleware para manejar errores
app.use(resError);

export default app;

if (process.env.NODE_ENV !== 'test') {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Servidor escuchando en el puerto ${PORT}`);
    });
}