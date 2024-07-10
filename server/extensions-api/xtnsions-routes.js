const express = require('express');
const router = express.Router();
const Extension = require('../models/extension');

// Get all extensions
router.get('/', async (req, res) => {
  const extensions = await Extension.findAll();
  res.json(extensions);
});

// Add a new extension
router.post('/', async (req, res) => {
  const { name, description, version, url } = req.body;
  const newExtension = await Extension.create({ name, description, version, url });
  res.json(newExtension);
});

module.exports = router;
