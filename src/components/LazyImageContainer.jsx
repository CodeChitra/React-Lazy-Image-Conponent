/* eslint-disable react/prop-types */
import LazyImage from "./LazyImage";
const LazyImageContainer = ({ images }) => {
  return (
    <div className="lazy-image-container">
      {images.map((src, index) => (
        <LazyImage key={index} src={src} alt={`Image ${index + 1}`} />
      ))}
    </div>
  );
};

export default LazyImageContainer;
