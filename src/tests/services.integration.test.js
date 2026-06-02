import request from 'supertest';
import app from '../app';

jest.mock('../repositores/service.repositores.js', () => ({
    ServicesRepository: {
        createService: jest.fn(),
        editService: jest.fn(),
        deleteService: jest.fn(),
    }
}));

describe('Services API Integration Tests', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('POST /service - crea servicio y retorna 201', async () => {
        const res = await request(app)
            .post('/service')
            .send({ name: 'service1', price: 100, location: 'location1', user_id: '123' });
        
        expect(res.status).toBe(201);
        expect(res.body).toEqual({ status: 'success', data: undefined });
    });

    test('PUT /service - actualiza servicio y retorna 200', async () => {
        const res = await request(app)
            .put('/service')
            .send({ name: 'service1', price: 2000, location: 'location1', serviceId: '123' });

        expect(res.status).toBe(200);
        expect(res.body).toEqual({ status: 'success', data: undefined });
    });

    test('DELETE /service/:serviceId - elimina servicio y retorna 200', async () => {
        const res = await request(app)
            .delete('/service/123');

        expect(res.status).toBe(200);
        expect(res.body).toEqual({ status: 'success', data: undefined });
    });
});