const authModel = require("../models/auth.model")

exports.milkManLoginService = (req, res) => {
    const body = req.body;

    authModel.milkManLoginModel(body, (err, user) => {
        if(err) {
            res.json({
                Error : err,
                status : false
            })
        }
        else {
            if(user.length > 0) {
                res.json({
                    Msg : "Logged In",
                    status: true
                })
            }
            else {
                 res.json({
                    Error : "Wrong Credentials",
                    status: false
                 })
            }
        }
    })
}

// get all customers
exports.getAllCustomers = (req, res) => {
    const body = req.body;

    authModel.getAllCustomers(body, (err, users) => {
        if(err) {
            res.json({
                Error : err,
                status: false
            })
        }
        else {
            res.json(users);
        }
    })
}