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
}