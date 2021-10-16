var jwt = require('jsonwebtoken');

module.exports = {
    encode: async(user) => {
        const token = jwt.sign({
            _id: user._id,
            nameUser: user.nameUser,
            email: user.email,
            role: user.role
        }, 'jwtEncodedAppOrange', {expiresIn: 86400});
        return token;
    },

    decode: async(token) => {

    }
}