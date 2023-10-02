import React from 'react';

function ImageGallery({ imageUrls }) {
  return (
    <div className="image-gallery">
      {imageUrls.map((imageUrl, index) => (
        <img
          key={index}
          src={imageUrl}
          alt={`Image ${index + 1}`}
          className="gallery-image"
        />
      ))}
    </div>
  );
}

export default ImageGallery;
