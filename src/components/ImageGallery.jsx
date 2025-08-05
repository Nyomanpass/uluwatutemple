const ImageGallery = ({ images }) => {
  if (!images || images.length === 0) return null;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-2 mb-4">
      {images.map((imgSrc, index) => (
        <div key={index} className="aspect-square overflow-hidden rounded-lg shadow-md">
          <img
            src={imgSrc}
            alt={`Foto ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
