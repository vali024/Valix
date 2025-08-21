import path from 'path';
import fs from 'fs';

// Save uploaded files are handled by the multer middleware in the route.
// This controller only formats the response with public URLs.
export const uploadFiles = (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ success: false, message: 'No files uploaded' });
    }

    const host = req.get('host');
    const protocol = req.protocol;

    const files = req.files.map((f) => {
      // public URL served from /images route (server uses express.static('uploads'))
      return {
        originalName: f.originalname,
        filename: f.filename,
        size: f.size,
        url: `${protocol}://${host}/images/${f.filename}`,
      };
    });

    return res.json({ success: true, files });
  } catch (err) {
    console.error('Upload error', err);
    return res.status(500).json({ success: false, message: 'Upload failed' });
  }
};
