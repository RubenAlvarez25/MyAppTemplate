const connection = require("../config/db");

class CustomerInfo {
  //1. add form info
  //localhost:4000/customer/addInfo
  addInfo = (req, res) => {
    const { name, email, phone, message } = req.body;

    let sql = `INSERT INTO customerInfo (name,email,phone,message) VALUES ("${name}","${email}","${phone}","${message}")`;
    connection.query(sql, (error, result) => {
      console.log(error);
      error ? res.status(400).json({ error }) : res.status(201).json(result);
    });
  };
  //2. show info from customer
  //localhost:4000/customer/showInfo
  showInfo = (req, res) => {
    let sql = `SELECT * FROM customerInfo `;
    connection.query(sql, (error, result) => {
      console.log(error);
      error ? res.status(400).json({ error }) : res.status(201).json(result);
    });
  };
  //3.delete customer info
  //localhost:4000/customer/delInfo/:id
  delInfo = (req, res) => {
    const customer_id = req.params.id;

    let sql = `DELETE FROM customerInfo WHERE customer_id = ${customer_id} `;
    connection.query(sql, (error, result) => {
      console.log(error);
      error ? res.status(400).json({ error }) : res.status(201).json(result);
    });
  };
}

module.exports = new CustomerInfo();
