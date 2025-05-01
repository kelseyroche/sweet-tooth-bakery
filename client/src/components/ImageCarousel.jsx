// import React from 'react';

// function ImageCarousel() {
//   return (
//     <div className="image-carousel">
//       <h2>Image Carousel Placeholder</h2>
//       {/* Add carousel logic/images later */}
//     </div>
//   );
// }

// export default ImageCarousel;
import React, { useEffect, useState } from "react";
import { client } from "../sanityClient";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source).width(1200).height(500).fit("crop").url();
}

function ImageCarousel() {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    client
      .fetch(`*[_type == "homeGallery"][0].images`)
      .then((data) => setImages(data))
      .catch(console.error);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  if (!images.length) return null;

  return (
    <div className="carousel-container">
    {images.map((img, index) => {
        if (!img || !img.asset) return null; // ⛑️ skip bad entries
        return (
            <img
                key={index}
                src={urlFor(img)}
                alt={`Bakery carousel ${index}`}
                className={`carousel-image ${index === currentIndex ? "active" : ""}`}
            />
            );
            })}
    </div>
  );
}

export default ImageCarousel;