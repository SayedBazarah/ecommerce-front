import Carousel from "react-bootstrap/Carousel";
import Link from "next/link";
import Image from "next/image";
import Style from "./hero.module.css";

const Hero = () => {
  const carouselData = [
    {
      title: "Mahara Tech",
      slug: "",
      img: "Escwa-banner01.jpg",
    },
  ];
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {carouselData.map((data, index) => {
          return (
            <section key={index} className="">
              <Image
                src={`/images/home/${data.img}`}
                alt="Picture of the author"
                width={500}
                height={500}
                className="w-100"
              />
              <div className="carousel-caption " style={{ top: "10%" }}>
                <h3 className="hero-text">{data.title}</h3>
                <p>{data.slug}</p>
                <Link href="/" className="btn btn-outline-light mt-4">
                  Learn More
                </Link>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
