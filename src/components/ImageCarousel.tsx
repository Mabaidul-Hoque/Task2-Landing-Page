import { Carousel } from "antd";

const ImageCarousel = () => {
  return (
    <>
      <Carousel autoplay className="pl-0 lg:pl-[10%] xl:pl-28 py-10">
        <div className="text-center flex items-center justify-center">
          <img src="/demo-product-showcase-product-01.png" alt="" />
        </div>
        <div>
          <img src="/demo-product-showcase-product-02.webp" alt="" />
        </div>
        <div>
          <img src="/demo-product-showcase-product-03.png" alt="" />
        </div>
        <div>
          <img src="/demo-product-showcase-product-04.png" alt="" />
        </div>
      </Carousel>
    </>
  );
};

export default ImageCarousel;
