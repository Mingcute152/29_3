const express = require('express');
const router = express.Router();
const { registerValidation, loginValidation, updateUserValidation } = require('../validation');

// Middleware kiểm tra validation
const validate = (schema) => (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });
    next();
};

// POST: Đăng ký user
router.post('/register', validate(registerValidation), (req, res) => {
    res.send('User registered successfully');
});

// POST: Đăng nhập
router.post('/login', validate(loginValidation), (req, res) => {
    res.send('User logged in successfully');
});

// PUT: Cập nhật user
router.put('/:id', validate(updateUserValidation), (req, res) => {
    res.send('User updated successfully');
});

module.exports = router;
