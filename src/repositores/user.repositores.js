import { pgConnection } from "../config/db.js"

// Clase que se encarga de interactuar con la base de datos para realizar operaciones relacionadas con los usuarios
export class UserRepository {
    static exampleGetUser = async (data) => {
        const client = await pgConnection();
        try {
            const query = 'SELECT * FROM user_type';
            const result = await client.query(query);

            return result.rows;
        } catch (error) {
            console.error('Error al obtener el usuario:', error);
            throw error;
        } finally {
            client.release();
        }
    }

    //LOGIN
    static GetUser = async (email, password) => {
        const client = await pgConnection();
        try {

            const query = 'SELECT * FROM "user" WHERE "email" = $1';
            const result = await client.query(query, [email]);

            // Usuario no existe
            if (result.rows.length === 0) {
                return {
                    success: false,
                    status: 404,
                    message: 'Usuario no encontrado'
                };
            }

            const user = result.rows[0];

            // Password texto plano (temporal)
            if (password != user.password) {
                return {
                    success: false,
                    status: 401,
                    message: 'Contraseña incorrecta'
                };
            }

            // Login exitoso
            return {
                success: true,
                status: 200,
                message: 'Login exitoso',
                user: {
                    id: user.Id,
                    name: user.name,
                    email: user.email
                }
            };

        } catch (error) {

            console.error('Error al obtener usuario:', error);
            throw error;

        } finally {

            client.release();

        }
    }
}