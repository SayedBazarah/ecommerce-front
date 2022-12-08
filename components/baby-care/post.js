import Image from "next/image";
import Link from "next/link";
import Style from "./post.module.css";
const Post = () => {
  return (
    <div className={Style.container}>
      <Image
        src="/posts/post-1.webp"
        alt="post title"
        width={200}
        height={300}
      />
      <div>
        <data>25 Nov 2022</data>
        <h3>Post Title</h3>
        <p>lorem</p>
      </div>
    </div>
  );
};
export default Post;
