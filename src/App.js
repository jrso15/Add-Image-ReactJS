import { useState } from "react";
import "./App.css";
import Slider from "react-slick";

const App = () => {
  const [imageList, setImageList] = useState([]);

  const handleAddImage = () => {
    const imageItems = imageList;
    setImageList([...imageItems, imageItems.length]);
  };

  const handleRemoveImage = () => {
    const imageItems = imageList;
    if (imageItems.length > 0) {
      const randomImage = Math.floor(Math.random() * imageList.length);
      setImageList(imageItems.filter((i) => i !== randomImage));
    }
  };

  const settings = {
    dots: true,
    infinite: imageList.length > 3,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <div className="App">
      <h1 className="title">ADD IMAGE</h1>
      <div className="btn-wrapper">
        <button className="btn" type="button" onClick={handleAddImage}>
          Add Image
        </button>

        <button className="btn" type="button" onClick={handleRemoveImage}>
          Remove random image
        </button>
      </div>

      <section>
        <h2>CAROUSEL</h2>
        <Slider {...settings}>
          {imageList.map((imageId, i) => (
            <div className="image-wrapper" key={i}>
              <img
                src={`https://picsum.photos/200/300?random=${imageId}`}
                alt="random"
              />
            </div>
          ))}
        </Slider>
      </section>

      <section>
        <h2> LISTING </h2>
        <div className="image-container">
          {imageList.map((imageId, i) => (
            <div className="image-wrapper" key={i}>
              <img
                src={`https://picsum.photos/200/300?random=${imageId}`}
                alt="random"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default App;
