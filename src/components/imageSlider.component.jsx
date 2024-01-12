import { Carousel } from 'react-bootstrap';
import "./style.css";


const ImageSlider = () => {
  return (
    <Carousel fade>
        <Carousel.Item>
        {/* <img
          className="d-block w-100  slide-img"
          src="sliderImg-4.jpg"
          alt="Second slide"
          style={{ height: '450px' }}
        /> */}
        <div className="d-block w-100  slide-img" style={{ height: '450px' , backgroundImage: "url('sliderImg8.jpeg')" }} ></div>
      </Carousel.Item>
      <Carousel.Item>
        {/* <img
          className="d-block w-100  slide-img"
          src="sliderImg-5.jpg"
          alt="Second slide"
          style={{ height: '450px' }}
        /> */}
         <div className="d-block w-100  slide-img" style={{ height: '450px' , backgroundImage: "url('sliderImg5.jpeg')" }} ></div>
      </Carousel.Item>
      <Carousel.Item>
        {/* <img
          className="d-block w-100 slide-img"
          src="sliderImg-1.jpg"
          alt="First slide"
          style={{ height: '450px' }}
        /> */}
         <div className="d-block w-100  slide-img" style={{ height: '450px' , backgroundImage: "url('sliderImg6.jpeg')" }} ></div>
      </Carousel.Item>
      <Carousel.Item>
        {/* <img
          className="d-block w-100 slide-img"
          src="sliderImg-2.jpg"
          alt="Second slide"
          style={{ height: '450px' }}
        /> */}
         <div className="d-block w-100  slide-img" style={{ height: '450px' , backgroundImage: "url('sliderImg9.jpg')" }} ></div>
      </Carousel.Item>
    </Carousel>
  );
};

export default ImageSlider;
