import bcrypt from 'bcrypt';
import pool from '../config/db.js';

//Login
export class UserLogin {
    loginUser = async (req, res) => {

        try {

            const { email, password } = req.body;

            // Validación básica
            if (!email || !password) {
                return res.status(400).json({
                    message: 'Email y password son requeridos'
                });
            }

            // Buscar usuario
            const result = await pool.query(
                'SELECT * FROM "User" WHERE "email" = $1',
                [email]
            );

            if (result.rows.length === 0) {
                return res.status(404).json({
                    message: 'Usuario no encontrado'
                });
            }

            const user = result.rows[0];

            // TEMPORAL: si password está en texto plano
            if (password != user.password) {
                return res.status(401).json({
                    message: 'Contraseña incorrecta'
                });
            }

            return res.status(200).json({
                message: 'Login exitoso',
                user: {
                    id: user.Id,
                    name: user.name,
                    email: user.email
                }
            });

        } catch (error) {
            console.log("ERROR LOGIN:");
            console.log(error);
            
            return res.status(500).json({
                message: 'Error interno del servidor',
                error: error.message
            });

        }
    }
}