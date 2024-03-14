export default () => ({
    environment: process.env.NODE_ENV || 'development',
    database: {},
    jwt: {
        secret: process.env
    }
});