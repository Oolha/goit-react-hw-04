import "./App.css";
import axios from "axios";
import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Loader from "./components/Loader/Loader";
import { Toaster } from "react-hot-toast";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const accessKey = "NjpiNKAPNXLDvfuVXswHy-cKv6CpEld4JB8HuFcP0DU";

  const fetchImages = async (query) => {
    try {
      setImages([]);
      setError(false);
      setLoading(true);
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?query=${query}&page=3&client_id=${accessKey}`
      );
      setImages(response.data.results);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SearchBar onSubmit={fetchImages} />
      {loading && <Loader />}
      {error ? (
        <ErrorMessage message="Error fetching images. Please try again." />
      ) : (
        <ImageGallery images={images} />
      )}
      <Toaster />
    </div>
  );
}

export default App;
