
// Clase que se encarga de manejar las solicitudes relacionadas con los usuarios
export class UserController {
    createUser = async (req, res) => {
        // const data = req.body;
        console.log('Ruta de usuario');
        
        res.status(201).json({ message: 'Usuario creado exitosamente' });
        
        // Lógica para crear un usuario utilizando el UserRepository
    }
}