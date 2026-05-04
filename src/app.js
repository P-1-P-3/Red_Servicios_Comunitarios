import express from 'express';
import cors from 'cors';
import { userRoutes } from './routes/user.routes.js';
import { resError } from './middleware/resError.js';
import 'dotenv/config';

const app = express();

// 🔥 AGREGA ESTO (ANTES de las rutas)
app.use(cors({
    origin: 'http://localhost:5173'
}));

app.use(express.json());

// Rutas
app.use('/users', userRoutes());

// Middleware errores
app.use(resError);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});