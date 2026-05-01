import { Pool } from 'pg';

export const pgConnection = async () => {
    const { PGUSER, PGPASSWORD, PGDATABASE, PGHOST, PGSSLMODE, PGCHANNELBINDING, PGPORT } = process.env;
    
    const pool = new Pool({
        user: PGUSER,
        password: PGPASSWORD,
        database: PGDATABASE,
        host: PGHOST,
        port: parseInt(PGPORT),
        ssl: {
            // require: PGSSLMODE === 'require',
            rejectUnauthorized: PGSSLMODE === 'require',
            channelBinding: PGCHANNELBINDING === 'require'
        }
    });

    const connection = await pool.connect();

    return connection;
}