import pkg from 'pg';

const { Pool } = pkg;

const pool = new Pool({
    user: 'postgres',          
    host: 'localhost',         
    database: 'User', 
    password: '12345',         
    port: 5432               
});

// Probar conexión
pool.connect()
    .then(() => console.log('Conectado a PostgreSQL'))
    .catch(err => console.log('Error de conexión:', err));

export default pool;