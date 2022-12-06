import Link from "next/link";
import Image from "next/image";
import Style from "./hero.module.css";

const Hero = ({ title, img }) => {
  return (
    <div className={Style.container}>
      <Image
        src={img}
        alt="contact us image"
        width={100}
        height={404}
        layout="responsive"
        objectFit="cover"
      />
      <div>
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default Hero;
