import Image from "next/image";
import { useState, useEffect } from "react";

const ThumbnailImages = ({ images = [], main }) => {
  const [selectedImage, setSelectedImage] = useState(main);

  useEffect(() => {
    if (!main && images.length > 0) {
      setSelectedImage(images[0]);
    }
  }, [main, images]);

  return (
    <div>
      {selectedImage && typeof selectedImage === "string" && (
        <div className="mb-4">
          <Image src={selectedImage} alt="Main product image" width={400} height={400} className="rounded-lg object-cover" />
        </div>
      )}

      <div className="flex gap-2">{images.map((img, index) => (typeof img === "string" ? <Image key={index} src={img} alt={`Thumbnail ${index}`} width={100} height={100} className="rounded-lg cursor-pointer hover:opacity-80 gap-4 p-5" onClick={() => setSelectedImage(img)} /> : null))}</div>
    </div>
  );
};

export default ThumbnailImages;
