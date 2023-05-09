const authService = require("../services/auth.service")

module.exports = (router) => {
    router.post('/auth/login', authService.milkManLoginService);

    // get all customers
    router.get("/customer/get", authService.getAllCustomers);
}