const mongoose = require("mongoose");
const cloudinary = require("cloudinary").v2;
require("dotenv").config();
const formidable = require("express-formidable");

const Products = mongoose.model("products");
const Merchant = mongoose.model("merchants");

const utilsFunction = require("../utils/utilsFunction");

const merchantVerify = require("../middleware/merchantVerify");
const updateMerchant = require("../middleware/updateMerchant");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

module.exports = (api) => {
  api.post(
    "/api/merchant/product/create",
    merchantVerify,
    updateMerchant,
    formidable(),
    (req, res) => {
      const {
        product_name,
        product_quantity,
        product_desc,
        product_price,
        location_city,
        location_state,
      } = req.body;
      if (
        utilsFunction.checkBody(product_name) ||
        utilsFunction.checkBody(product_desc) ||
        utilsFunction.checkBody(product_price)
      )
        return res.json("Enter requirred field");
      if (utilsFunction.checkFile(req.files.file))
        return res.json("Upload a valid image");
      cloudinary.uploader.upload(req.files.file.path, (err, result) => {
        if (err) return res.json(err);
        const productCreate = new Products({
          product_image: result.url,
          merchant: req.merchant._id,
          product_name,
          product_quantity,
          product_desc,
          product_price,
          location_city,
          location_state,
        });
        productCreate.save((err, product) => {
          if (err) return res.json({ success: false });
          return res.json({ success: true, product });
        });
      });
    }
  );

  //returns all product by a merchant
  api.get(
    "/api/merchant/product/products",
    merchantVerify,
    updateMerchant,
    (req, res) => {
      Products.find({ merchant: req.merchant._id }).exec((err, product) => {
        if (err) return res.json({ success: false });
        return res.status(200).json({ success: true, product });
      });
    }
  );

  //single product view
  // /api/merchant/product?productId={productId}
  api.get(
    "/api/merchant/product",
    merchantVerify,
    updateMerchant,
    (req, res) => {
      const { productId } = req.query;
      const url = req.originalUrl;
      Products.findOne({ _id: productId }).exec((err, product) => {
        if (product === null)
          return res.json({ success: false, message: "Can't find product" });
        const productUrl = url.split("/");
        return res
          .status(200)
          .json({
            success: true,
            product,
            url: `/api/${productUrl[3]}`,
          });
      });
    }
  );

  //update Product
  // /api/merchant/product/update?productId={productId}
  api.post(
    "/api/merchant/product/update",
    merchantVerify,
    updateMerchant,
    (req, res) => {
      const { productId } = req.query;
      if (utilsFunction.checkBody(!req.files)) {
        cloudinary.uploader.upload(req.files.file.path, (err, result) => {
          if (err) return res.json(err);
          Products.findOneAndUpdate(
            { merchant: req.merchant._id, _id: productId },
            { $set: { product_image: result } },
            (err) => {
              if (err) return res.json({ success: false });
            }
          );
        });
      }
      Products.findOneAndUpdate(
        { merchant: req.merchant._id, _id: productId },
        { $set: req.body },
        { new: true },
        (err, product) => {
          if (err) return res.json({ success: false });
          return res.status(200).json({ success: true, product });
        }
      );
    }
  );

  //single product view by everyone
  // /api/product?productId={productId}
  api.get("/api/product", (req, res) => {
    const { productId } = req.query;
    const url = req.originalUrl;
    Products.findOne({ _id: productId }).exec((err, product) => {
      if (product === null)
        return res.json({ success: false, message: "Can't find product" });
      Merchant.findOne({ _id: product.merchant }).exec((err, merchant) => {
        if (err) res.json({ success: false, message: "Can't find Merchant" });
        return res.status(200).json({
          success: true,
          url,
          productDetails: {
            product_name: product.product_name,
            product_quantity: product.product_quantity,
            product_status: product.product_status,
            product_price: product.product_price,
            product_desc: product.product_desc,
          },
          merchantDetails: {
            merchant_email: merchant.email,
            merchant_phone: merchant.phone,
            merchant_name: merchant.fullname,
            merchant_bussinessName: merchant.bussinessName,
            merchant_category: merchant.category,
          },
        });
      });
    });
  });
};
