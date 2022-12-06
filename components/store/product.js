import Image from "next/image";
import Link from "next/link";
import Style from "./product.module.css";
const Product = ({ title, price, img, description }) => {
  return (
    <Link href="/" className={Style.container}>
      <div className={Style.img}>
        <Image
          src={`/posts/${img}`}
          alt="post title"
          width={350}
          height={250}
          objectFit="cover"
        />
      </div>
      <div className={Style.info}>
        <div>{title}</div>
        <div>{description}</div>
        <span>${price}</span>
      </div>
    </Link>
  );
};
export default Product;
