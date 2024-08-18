import Modal from "react-modal";
import css from "./GalleryModal.module.css";

Modal.setAppElement("#root");

const GalleryModal = ({ isOpen, onClose, image }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <div className={css.backdrop}>
        <div className={css.modal}>
          <img src={image?.urls?.regular} alt={image?.alt_description} />
        </div>
      </div>
    </Modal>
  );
};

export default GalleryModal;
