const jwt = require("jsonwebtoken");
//It creates a secure token that proves the user is authenticated.
//A token is generated immediately after successful authentication — either when a user registers or logs in — and it allows the client to access protected resources.
//jwt.sign(payload, secret, options)
// jwt.sign() creates a JWT token
// It does not just return the id, it returns a signed token string
// That token contains:
// Header – metadata about the algorithm
// Payload – your { id } (user ID in this case)
// Signature – generated using the secret to prevent tampering

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

module.exports = generateToken;
