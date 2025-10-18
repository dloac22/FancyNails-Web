import Slider from "react-slick";

export default function SimpleSlider({ images }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,          // automatic slide
    autoplaySpeed: 2000,     // 2 seconds
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <div className="works-slider">
      <Slider {...settings}>
        {images.map((src, i) => (
          <div key={i} className="slide">
            <img src={src} alt={`Work ${i + 1}`} loading="lazy" />
          </div>
        ))}
      </Slider>
    </div>
  );
}