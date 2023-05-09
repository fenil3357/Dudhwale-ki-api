const dbConn = require("../../config/db.config")

// Milkmane login
exports.milkManLoginModel = (data, callBack) => {
    const Mobile_number = data.Mobile_number;
    const Password = data.Password;

    const query = `select * from milkman where Mobile_number = '${Mobile_number}' and Password = '${Password}';`;

    dbConn.query(query, (err, res) => {
        if(err) {
            console.log(err);
            callBack(err);
        }
        else callBack(null, res);
    })
}

// Get all customer 
exports.getAllCustomers = (data, callBack) => {
    const query = 'select * from customer';

    dbConn.query(query, (err, res) => {
        if(err) {
            console.log(err);
            callBack(err);
        }
        else callBack(null, res);
    })
}