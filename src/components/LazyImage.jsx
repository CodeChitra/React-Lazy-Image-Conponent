/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react";
const LazyImage = ({ src, alt, ...props }) => {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const currentRef = imgRef.current;
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div className="image-wrapper" ref={imgRef}>
      <img
        src={isVisible ? src : ""}
        alt={alt}
        {...props}
        style={{
          opacity: isVisible ? 1 : 0,
        }}
      />
    </div>
  );
};

export default LazyImage;
