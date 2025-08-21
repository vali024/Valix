import express from 'express';
import multer from 'multer';
import path from 'path';
import { uploadFiles } from '../controllers/contactController.js';

const router = express.Router();

// configure multer storage to uploads folder
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(process.cwd(), 'uploads'));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, `${uniqueSuffix}${ext}`);
  }
});

const upload = multer({ storage });

// POST /api/contact/upload - accepts multiple files (max 5)
router.post('/upload', upload.array('files', 5), uploadFiles);

export default router;
