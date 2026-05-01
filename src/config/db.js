import { Pool } from 'pg';

export const pgConnection = () => {
    const pool = new Pool({
        user: '',
        password: '',
        database: '',
        host: '',
        port: 5432
    });

    return pool;
}