import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images, onImageClick }) => {
  if (images.length === 0) {
    return null;
  }
  return (
    <ul className={css.list}>
      {images.map((image) => (
        <li key={image.id} onClick={() => onImageClick(image)}>
          <ImageCard image={image} />
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;
