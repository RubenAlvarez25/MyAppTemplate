const multer = require("multer");
function uploadImage(image) {
  const storage = multer.diskStorage({
    destination: `../client/./public/images/${image}`,
    //destination: `./public/images/${a}`,

    filename: function (req, file, callback) {
      callback(null, "Id-" + Date.now() + "-" + file.originalname);
    },
  });

  const upload = multer({ storage: storage }).array("file");

  return upload;
}

module.exports = uploadImage;
