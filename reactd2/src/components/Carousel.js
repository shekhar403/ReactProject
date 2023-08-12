import Carousel from 'react-bootstrap/Carousel';
import '../styles/carousel.css'

function CustomCarousel() {
  return (
    <Carousel data-bs-theme="light">
      <Carousel.Item>
        <img className="d-block w-75 text-center m-auto p-5" src="http://getwallpapers.com/wallpaper/full/8/2/3/14674.jpg" alt="First slide" />
        <Carousel.Caption>
          <h5>The Creepy Creature</h5>
          <p>Read the most horrifying tale of the mysterious creature.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-75 text-center m-auto p-5" src="https://wallpaperaccess.com/full/271942.jpg" alt="First slide" />
        <Carousel.Caption>
          <h5>The Skeleton Man</h5>
          <p>Read about the revenge of the man who was burried alive.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-75 text-center m-auto p-5" src="https://wallpapercave.com/wp/wp2490276.png" alt="First slide" />
        <Carousel.Caption>
          <h5>The witch</h5>
          <p>Read about the witch and her revenge.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CustomCarousel;