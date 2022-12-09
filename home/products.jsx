import Image from "next/image";
import Link from "next/link";
import Style from "./zHome.module.css";

const Products = ({ title, price, img, description }) => {
    
  return (
    <Link href="/" className={Style.container}>
      <div className={Style.img}>
        <Image
          src={"/home/pp.png"}
          alt="post title"
          width={380}
          height={300}
        />
      </div>
      <div className={Style.info}>
        <div>{title}</div>
        <div>{description}</div>
      </div>
    </Link>
  );
};
export default Products;
