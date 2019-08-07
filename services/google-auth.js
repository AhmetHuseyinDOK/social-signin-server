const {OAuth2Client} = require('google-auth-library');
const clientId = process.env.GOOGLE_AUTH_CLIENT_ID;
const client = new OAuth2Client(clientId);

exports.verify = async (token) => {
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: clientId
    });
    const payload = ticket.getPayload();
    return payload;
}