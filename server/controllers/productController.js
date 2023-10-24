const connection = require("../config/db");

class ProductController {
  //1. CreateProduct with Images
  //localhost:4000/product/createProduct
  createProduct = (req, res) => {
    const user_id = req.params.id;

    const {
      title,
      description,
      featureOne,
      featureTwo,
      featureThree,
      price,
      type,
    } = JSON.parse(req.body.product);

    let image = [""];
    if (req.files != undefined) {
      image = req.files;
    }
    let sql = `INSERT INTO product (user_id,title, description, featureOne, featureTwo, featureThree, price,type) VALUES (${user_id},'${title}', '${description}', '${featureOne}', '${featureTwo}', '${featureThree}', ${price},${type})`;
    let sqlProduct = `SELECT * FROM product WHERE user_id = ${user_id} and is_deleted = 0`;

    connection.query(sql, (error, result) => {
      if (error) {
        res.status(400).json({ error });
      } else if (result) {
        console.log(result);
        let product_id = result.insertId;
        this.saveProductImages(image, product_id);
        connection.query(sqlProduct, (err, resultProduct) => {
          if (err) throw err;
          res.status(200).json(resultProduct);
        });
      }
    });
  };

  saveProductImages = (images, product_id) => {
    images.forEach((image) => {
      let sql = `INSERT INTO images (image_name,product_id) VALUES ('${image.filename}',${product_id})`;
      connection.query(sql, (error, result) => {
        if (error) {
          res.status(400).json({ error });
        } else if (result) {
          console.log(result);
        }
      });
    });
  };

  //2. Show all products
  //localhost:4000/product/getAllProduct
  getAllProduct = (req, res) => {
    let sql = `SELECT * FROM product WHERE product.is_deleted = 0 GROUP BY product.product_id`;
    connection.query(sql, (error, result) => {
      error ? res.status(400).json({ error }) : res.status(200).json(result);
      console.log(result);
    });
  };

  //.3 Delete Logic Product
  //localhost:4000/product/delProduct/:product_id
  delProduct = (req, res) => {
    const product_id = req.params.id;

    let sql = `DELETE FROM product WHERE product_id = ${product_id}`;
    connection.query(sql, (error, result) => {
      error ? res.status(400).json({ error }) : res.status(200).json(result);
    });
  };

  //4. Shows One product with images
  //localhost:4000/product/showProductImages/:product_id
  showProductImages = (req, res) => {
    let product_id = req.params.id;
    console.log(req.params.id);

    let sqlProduct = `SELECT * FROM product WHERE product_id = ${product_id} AND is_deleted = 0`;
    let sqlImages = `SELECT * FROM images WHERE product_id= ${product_id} AND is_deleted = 0`;

    connection.query(sqlProduct, (error, resultProduct) => {
      if (error) {
        res.status(400).json({ error });
      }
      connection.query(sqlImages, (error2, resultImages) => {
        if (error2) {
          res.status(400).json({ error2 });
        }
        res.status(200).json({ resultProduct, resultImages });
      });
    });
  };
  //5. delete images
  //localhost:4000/product/delImage/:image_id
  delImage = (req, res) => {
    const images_id = req.params.id;
    let sql = `UPDATE images SET is_deleted = true WHERE images_id = ${images_id}`;
    connection.query(sql, (error, result) => {
      error ? res.status(400).json({ error }) : res.status(200).json(result);
    });
  };

  delTotal = (req, res) => {
    const images_id = req.params.id;
    let sql = `DELETE FROM images WHERE images_id = ${images_id}`;
    connection.query(sql, (error, result) => {
      error ? res.status(400).json({ error }) : res.status(200).json(result);
    });
  };

  //6. Edit Product
  //localhost:4000/product/editProduct/:product_id
  editProduct = (req, res) => {
    const product_id = req.params.id;
    const {
      title,
      description,
      featureOne,
      featureTwo,
      featureThree,
      price,
      type,
    } = JSON.parse(req.body.editProduct);

    let sql = `UPDATE product SET title='${title}',description='${description}',featureOne='${featureOne}',featureTwo='${featureTwo}',featureThree='${featureThree}',price=${price},type=${type} WHERE product_id = ${product_id}`;

    connection.query(sql, (error, result) => {
      error ? res.status(400).json({ error }) : res.status(200).json(result);
    });
  };

  //7. Add images to an existing product
  //localhost:4000/product/addImages/:product_id
  addImages = (req, res) => {
    let product_id = req.params.id;
    let image = [""];
    if (req.files != undefined) {
      image = req.files;
    }
    console.log(req.files);
    image.forEach((image) => {
      let sql = `INSERT INTO images (image_name, product_id) VALUES ('${image.filename}', ${product_id})`;
      connection.query(sql, (error, result) => {
        if (error) throw error;
        console.log(result);
      });
    });
  };
}

module.exports = new ProductController();
