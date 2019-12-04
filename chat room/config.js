module.exports = {
    port: process.env.PORT || 3001,
    db: process.env.MONGODB_URI || '<mongoDB connection link>',
    SECRET_TOKEN: 'miclavedetokens'
}