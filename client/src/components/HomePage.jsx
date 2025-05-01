
import { useEffect, useState } from "react";
import { client } from "../sanityClient";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import "./HomePage.css"; // for styling

function HomePage() {
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "homeGallery"][0].images[].asset->{url}`)
      .then((data) => setGalleryImages(data))
      .catch(console.error);
  }, []);

  return (
    <div className="homepage">
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
        {galleryImages.map((img, index) => (
          <div key={index}>
            <img src={img.url} alt={`Gallery image ${index + 1}`} className="carousel-img" />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default HomePage;