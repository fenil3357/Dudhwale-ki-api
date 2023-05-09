const authService = require("../services/auth.service")

module.exports = (router) => {
    router.post('/auth/login', authService.milkManLoginService);
}