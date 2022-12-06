import Image from "next/image";
import Link from "next/link";
import Style from "./post.module.css";
const Post = ({ title, description, img }) => {
  return (
    <Link href="/" className={Style.container}>
      <div className={Style.img}>
        <Image
          src={`/posts/${img}`}
          alt="post title"
          width={400}
          height={300}
          objectFit="cover"
        />
      </div>
      <div className={Style.info}>
        <h3>{title}</h3>
        <p>{description.substring(0,60)} ...</p>
      </div>
    </Link>
  );
};
export default Post;
