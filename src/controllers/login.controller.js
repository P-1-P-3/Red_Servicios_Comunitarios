import {UserRepository} from "../repositores/user.repositores.js";

//Login
export class UserLogin {
    loginUser = async (req, res) => {

        try {

            const { email, password } = req.body;

            if (!email || !password) {
                return res.status(400).json({
                    message: 'Email y password son requeridos'
                });
            }

            const response = await UserRepository.GetUser(email, password);

            res.status(response.status).json(response);

        } catch (error) {

            return res.status(500).json({
                message: 'Error interno del servidor',
                error: error.message
            });

        }
    }
}