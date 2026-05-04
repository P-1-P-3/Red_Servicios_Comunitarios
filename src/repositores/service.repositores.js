import { pgConnection } from "../config/db.js";

export class ServicesRepository {
    static createService = async (data) => {
        const { name, description, type, price, currency, location, average_rating, user_id } = data;
        const client = await pgConnection();
        try {
            const query = 'INSERT INTO service (name, description, type, price, currency, location, average_rating, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *';
            const result = await client.query(query, [name, description, type, price, currency, location, average_rating, user_id]);

            return result.rows[0];
        } catch (error) {
            throw error;
        } finally {
            client.release();
        }
    };

    static editService = async (data) => {
        const { serviceId, name, description, price, currency, location, average_rating } = data;
        const client = await pgConnection();
        try {
            const date = new Date();
            const time = date.toISOString().split('T')[1];
            const query = 'UPDATE service SET name = $1, description = $2, price = $3, currency = $4, location = $5, average_rating = $6, update_date = $7, update_time = $8 WHERE service_id = $9 RETURNING *';
            const result = await client.query(query, [name, description, price, currency, location, average_rating, date, time, serviceId]);
            return result.rows[0];
        } catch (error) {
            throw error;
        } finally {
            client.release();
        }
    };

    static deleteService = async (serviceId) => {
        const client = await pgConnection();
        try {
            const query = 'DELETE FROM service WHERE service_id = $1 RETURNING *';
            const result = await client.query(query, [serviceId]);
            return result.rows[0];
        } catch (error) {
            throw error;
        } finally {
            client.release();
        }
    };
}