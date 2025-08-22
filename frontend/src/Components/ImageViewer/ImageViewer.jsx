import { useState } from 'react';
import PropTypes from 'prop-types';
import './ImageViewer.css';
import { X } from 'lucide-react';

const ImageViewer = ({ isOpen, imageUrl, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="image-viewer-overlay" onClick={onClose}>
      <div className="image-viewer-content" onClick={(e) => e.stopPropagation()}>
        <button className="image-viewer-close" onClick={onClose}>
          <X size={24} />
        </button>
        {isLoading && (
          <div className="image-viewer-loading">
            <i className="fas fa-spinner fa-spin"></i>
          </div>
        )}
        <img
          src={imageUrl}
          alt="Product preview"
          onLoad={() => setIsLoading(false)}
          className={isLoading ? 'loading' : ''}
        />
      </div>
    </div>
  );
};

ImageViewer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  imageUrl: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

export default ImageViewer;
