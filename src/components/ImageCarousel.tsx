import { Carousel } from "antd";

const ImageCarousel = () => {
  return (
    <>
      <Carousel autoplay className="pl-28 py-10">
        <div className="text-center flex items-center justify-center">
          {/* <h3 style={contentStyle}>1</h3> */}
          <img src="/demo-product-showcase-product-01.png" alt="" />
        </div>
        <div>
          {/* <h3 style={contentStyle}>2</h3> */}
          <img src="/demo-product-showcase-product-02.webp" alt="" />
        </div>
        <div>
          {/* <h3 style={contentStyle}>3</h3> */}
          <img src="/demo-product-showcase-product-03.png" alt="" />
        </div>
        <div>
          {/* <h3 style={contentStyle}>4</h3> */}
          <img src="/demo-product-showcase-product-04.png" alt="" />
        </div>
      </Carousel>
    </>
  );
};

export default ImageCarousel;
