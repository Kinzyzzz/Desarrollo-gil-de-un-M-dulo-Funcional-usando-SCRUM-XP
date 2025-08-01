const User = require('../models/userModel');

exports.registerUser = (req, res) => {
  const { name, email } = req.body;
  User.create(name, email, (err, user) => {
    if (err) return res.status(400).json({ error: err.message });
    res.status(201).json(user);
  });
};

exports.getUsers = (req, res) => {
  User.findAll((err, users) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(users);
  });
};