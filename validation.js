const Joi = require('joi');

// Validation cho đăng ký user
const registerValidation = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
});

// Validation cho đăng nhập
const loginValidation = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
});

// Validation cho cập nhật user
const updateUserValidation = Joi.object({
    username: Joi.string().min(3).max(30),
    email: Joi.string().email(),
    password: Joi.string().min(6),
});

module.exports = {
    registerValidation,
    loginValidation,
    updateUserValidation,
};