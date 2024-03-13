const Product = require('../model/productModels');
const express = require('express');
const router = express.Router();

// Create a new product
router.post('/products', async (req, res) => {
  // Implement product creation logic here
  // 1. Extract product data from the request body (req.body)
  // 2. Create a new product using Product.create()
  // 3. Handle success: Respond with a 201 status code and the created product
  // 4. Handle errors: Respond with appropriate error messages and status codes
});

// Retrieve a product by ID
router.get('/products/:id', async (req, res) => {
  // Implement product retrieval logic here
  // 1. Extract the product ID from the request parameters (req.params.id)
  // 2. Find the product by ID using Product.findById()
  // 3. Handle success: Respond with a 200 status code and the product data
  // 4. Handle errors: Respond with appropriate error messages and status codes
});

// Update a product by ID
router.patch('/products/:id', async (req, res) => {
  // Implement product update logic here
  // 1. Extract the product ID from the request parameters (req.params.id)
  // 2. Extract updated product data from the request body (req.body)
  // 3. Use Product.findByIdAndUpdate() to update the product
  // 4. Handle success: Respond with a 200 status code and the updated product data
  // 5. Handle errors: Respond with appropriate error messages and status codes
});

// Delete a product by ID
router.delete('/products/:id', async (req, res) => {
  // Implement product deletion logic here
  // 1. Extract the product ID from the request parameters (req.params.id)
  // 2. Use Product.findByIdAndDelete() to delete the product
  // 3. Handle success: Respond with a 200 status code and a deletion confirmation message
  // 4. Handle errors: Respond with appropriate error messages and status codes
});

module.exports = router;
