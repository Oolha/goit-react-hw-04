import "./App.css";
import axios from "axios";
import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import GalleryModal from "./components/GalleryModal/GalleryModal";
import { Toaster } from "react-hot-toast";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const accessKey = "NjpiNKAPNXLDvfuVXswHy-cKv6CpEld4JB8HuFcP0DU";

  const fetchImages = async (query, page = 1) => {
    try {
      if (page === 1) {
        setImages([]);
      }

      setError(false);
      setLoading(true);
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?query=${query}&page=${page}&client_id=${accessKey}`
      );
      setImages((prevImages) => [...prevImages, ...response.data.results]);
      setPage(page);
      setQuery(query);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchImages(query, nextPage);
  };

  const isOpen = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div>
      <SearchBar onSubmit={(userQuery) => fetchImages(userQuery, 1)} />
      {loading && <Loader />}
      {error ? (
        <ErrorMessage message="Error fetching images. Please try again." />
      ) : (
        <>
          <ImageGallery images={images} onImageClick={isOpen} />
          {images.length > 0 && !loading && (
            <LoadMoreBtn onClick={handleLoadMore} />
          )}
        </>
      )}
      <Toaster />
      <GalleryModal
        isOpen={isModalOpen}
        onClose={closeModal}
        image={selectedImage}
      />
    </div>
  );
}

export default App;
