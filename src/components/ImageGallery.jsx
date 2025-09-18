const ImageGallery = ({ images }) => {
  if (!images || images.length === 0) return null;

  // Kalau cuma 1 image → grid-cols-1
  const gridClass =
    images.length === 1
      ? "grid-cols-1"
      : "grid-cols-2 sm:grid-cols-3 md:grid-cols-2";

  return (
    <div className={`grid ${gridClass} gap-2 mb-4`}>
      {images.map((imgSrc, index) => (
        <div
          key={index}
          className="aspect-square overflow-hidden rounded-lg shadow-md"
        >
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
