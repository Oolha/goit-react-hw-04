import Modal from "react-modal";
import css from "./GalleryModal.module.css";

Modal.setAppElement("#root");

const GalleryModal = ({ isOpen, onClose, image }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={css.modal}
      shouldCloseOnOverlayClick={true}
      overlayClassName={css.backdrop}
    >
      <img src={image?.urls?.regular} alt={image?.alt_description} />
      <div className={css.text}>
        <p>Author: {image?.user?.name}</p>
        <p>Instagram: @{image?.user?.instagram_username}</p>
      </div>
    </Modal>
  );
};
export default GalleryModal;
