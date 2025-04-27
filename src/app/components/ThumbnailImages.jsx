import Image from "next/image";
import { useState, useEffect } from "react";

const ThumbnailImages = ({ images = [], main }) => {
  const [selectedImage, setSelectedImage] = useState(main);

  useEffect(() => {
    if (!main && images.length > 0) {
      setSelectedImage(images[0]);
    }
  }, [main, images]);

  // Logic to ensure there are always 3 thumbnails if there's only one image
  const displayImages = images.length === 1 ? [images[0], images[0], images[0]] : images;

  return (
    <div>
      {selectedImage && typeof selectedImage === "string" && (
        <div className="relative w-full max-w-2xl aspect-square">
          <Image src={selectedImage} alt="Main product image" layout="fill" className="rounded-lg object-cover" />
        </div>
      )}

      {/* Thumbnail container with flex and responsive behavior */}
      <div className="flex overflow-x-auto gap-4 w-full pb-4">
        {displayImages.map((img, index) =>
          typeof img === "string" ? (
            <div key={index} className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 cursor-pointer">
              <Image src={img} alt={`Thumbnail ${index}`} layout="fill" className="rounded-lg object-cover hover:opacity-80" onClick={() => setSelectedImage(img)} />
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default ThumbnailImages;
