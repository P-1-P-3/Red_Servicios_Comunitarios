import { pool } from '../db.js';
import bcrypt from 'bcrypt';

export class RegisterController {
    async registerUser(req, res, next) {
        try {
            const {
                name,
                email,
                phone,
                password,
                user_type_id
            } = req.body;

          
            const userExist = await pool.query(
                `SELECT * FROM public."user" WHERE email = $1`,
                [email]
            );

            if (userExist.rows.length > 0) {
                return res.status(400).json({
                    message: 'El correo ya está registrado'
                });
            }

        
            const hashedPassword = await bcrypt.hash(password, 10);

        
            const result = await pool.query(
                `INSERT INTO public."user"
                (
                    user_id,
                    name,
                    email,
                    phone,
                    password,
                    creation_date,
                    update_date,
                    user_type_id,
                    creation_time,
                    update_time
                )
                VALUES
                (
                    gen_random_uuid(),
                    $1,
                    $2,
                    $3,
                    $4,
                    CURRENT_DATE,
                    CURRENT_DATE,
                    $5,
                    CURRENT_TIME,
                    CURRENT_TIME
                )
                RETURNING *`,
                [
                    name,
                    email,
                    phone,
                    hashedPassword,
                    user_type_id
                ]
            );

            return res.status(201).json({
                message: 'Usuario registrado correctamente',
                user: result.rows[0]
            });

        } catch (error) {
            next(error);
        }
    }
}