import { UserRepository } from "../repositores/user.repositores.js";

// Clase que se encarga de manejar las solicitudes relacionadas con los usuarios
export class UserController {
    exampleGetUser = async (req, res) => {
        // const data = req.body; // Si se necesita obtener datos del cuerpo de la solicitud, por ejemplo, para crear un usuario
        // const { iduser } = req.params; // Si se necesita obtener un parámetro de la URL, por ejemplo, /users/:iduser

        // Lógica para obtener un usuario utilizando el UserRepository
        const data = await UserRepository.exampleGetUser('');
        res.status(201).json({ status: 'success', data });
    }
}