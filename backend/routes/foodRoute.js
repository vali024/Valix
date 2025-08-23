import express from "express";
import { addFood, listFood, deleteFood, updateFood } from "../controllers/foodController.js";
import multer from "multer";
import { storage } from '../config/cloudinary.js';

const foodRouter = express.Router();

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024 // 5MB limit
    },
    fileFilter: function(req, file, cb) {
        // Check file type
        if (!file.mimetype.startsWith('image/')) {
            return cb(new Error('Only image files are allowed!'), false);
        }
        
        // Check file extension
        const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];
        const fileExt = file.originalname.split('.').pop().toLowerCase();
        if (!allowedExtensions.includes(fileExt)) {
            return cb(new Error('Invalid file type. Only JPG, JPEG, PNG, and GIF are allowed.'), false);
        }
        
        cb(null, true);
    }
}).single('image')

// Error handling middleware for multer
const handleMulterError = (error, req, res, next) => {
    if (error instanceof multer.MulterError) {
        if (error.code === 'LIMIT_FILE_SIZE') {
            return res.status(400).json({
                success: false,
                message: 'File is too large. Maximum size is 5MB'
            });
        }
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }
    if (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }
    next();
};

foodRouter.post("/add", upload, handleMulterError, addFood);
foodRouter.get("/list", listFood);
foodRouter.post("/delete", deleteFood);
foodRouter.post("/update", updateFood);

export default foodRouter;
