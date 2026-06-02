import { ServicesController } from "../controllers/services.controller";

jest.mock('../repositores/service.repositores.js', () => ({
    ServicesRepository: {
        createService: jest.fn(),
        editService: jest.fn(),
        deleteService: jest.fn(),
    }
}));

const makeRes = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

describe('ServicesController - Create', () => {
    const servicesController = new ServicesController();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('retorna 400 si faltan datos', async () => {
        const req = { body: { name: 'service1', price: 100, location: 'location1', user_id: null } };
        const res = makeRes();
        
        await servicesController.createService(req, res);

        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ status: 'error', message: 'Faltan campos obligatorios' });
    });

    test('retorna 400 si el precio es negativo', async () => {
        const req = { body: { name: 'service1', price: -100, location: 'location1', user_id: '123' } };
        const res = makeRes();

        await servicesController.createService(req, res);

        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ status: 'error', message: 'El precio debe ser un número positivo' });
    });

    test('crea servicio y retorna 201', async () => {
        const req = { body: { name: 'service1', price: 100, location: 'location1', user_id: '123' } };
        const res = makeRes();

        await servicesController.createService(req, res);
        
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith({ status: 'success', data: undefined });
    });
});

describe('ServicesController - Update', () => {
    const servicesController = new ServicesController();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('retorna 400 si faltan datos', async () => {
        const req = { body: { name: 'service1', price: 100, location: 'location1', serviceId: null } };
        const res = makeRes();
        
        await servicesController.editService(req, res);

        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ status: 'error', message: 'Faltan campos obligatotios' });
    });

    test('retorna 400 si el precio es negativo', async () => {
        const req = { body: { name: 'service1', price: -100, location: 'location1', serviceId: '123' } };
        const res = makeRes();

        await servicesController.editService(req, res);

        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ status: 'error', message: 'El precio debe ser un número positivo' });
    });

    test('edita servicio y retorna 200', async () => {
        const req = { body: { name: 'service1', price: 2000, location: 'location1', serviceId: '123' } };
        const res = makeRes();

        await servicesController.editService(req, res);
        
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({ status: 'success', data: undefined });
    });
});

describe('ServicesController - Delete', () => {
    const servicesController = new ServicesController();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('retorna 400 si faltan datos', async () => {
        const req = { params: { serviceId: null } };
        const res = makeRes();
        
        await servicesController.deleteService(req, res);

        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ status: 'error', message: 'Faltan campos obligatotios' });
    });

    test('edita servicio y retorna 200', async () => {
        const req = { params: { serviceId: '123' } };
        const res = makeRes();

        await servicesController.deleteService(req, res);
        
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({ status: 'success', data: undefined });
    });
});