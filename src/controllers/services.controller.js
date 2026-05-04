import { ServicesRepository } from "../repositores/service.repositores.js";
import { UserRepository } from "../repositores/user.repositores.js";

// Clase que se encarga de manejar las solicitudes relacionadas con los usuarios
export class ServicesController {
    exampleGetUser = async (req, res) => {
        // const data = req.body; // Si se necesita obtener datos del cuerpo de la solicitud, por ejemplo, para crear un usuario
        // const { iduser } = req.params; // Si se necesita obtener un parámetro de la URL, por ejemplo, /users/:iduser

        // Lógica para obtener un usuario utilizando el UserRepository
        const data = await UserRepository.exampleGetUser('');
        res.status(201).json({ status: 'success', data });
    }

    createService = async (req, res) => {
        const {name, description, price, currency, location, average_rating, user_id} = req.body;

        if(!name || !price || !location || !user_id) 
            return res.status(400).json({ status: 'error', message: 'Faltan campos obligatorios' });

        if(typeof price !== 'number' || price < 0)
            return res.status(400).json({ status: 'error', message: 'El precio debe ser un número positivo' });
        
        const data = await ServicesRepository.createService({ ...req.body, type: 'service' });
        res.status(201).json({ status: 'success', data });
    };

    editService = async (req, res) => {
        const {serviceId, name, description, price, currency, location, average_rating} = req.body;

        if(!name || !price || !location || !serviceId)
            return res.status(400).json({ status: 'error', message: 'Faltan campos obligatotios' });

        if(typeof price !== 'number' || price < 0)
            return res.status(400).json({ status: 'error', message: 'El precio debe ser un número positivo' });

        const data = await ServicesRepository.editService({ serviceId, ...req.body });
        res.status(200).json({ status: 'success', data });
    };

    deleteService = async (req, res) => {
        const { serviceId } = req.params;

        if (!serviceId)
            return res.status(400).json({ status: 'error', message: 'Faltan campos obligatotios' });
        
        const data = await ServicesRepository.deleteService(serviceId);
        res.status(200).json({ status: 'success', data });
    };
}