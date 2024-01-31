const cloudinary = require("cloudinary").v2;

cloudinary.config({ 
    cloud_name: 'dvtro5gei', 
    api_key: '358422636679784', 
    api_secret: process.env.CLOUDINARY_SECRET,
  });

  module.exports = cloudinary;