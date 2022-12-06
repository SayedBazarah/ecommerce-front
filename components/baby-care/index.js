import Hero from "../common/Hero";
import Filter from "../common/filter";
import Style from "./baby-care.module.css";
import Post from "./post";
const BabyCareComponents = () => {
  return (
    <>
      <Hero title="Baby Care" img="/babycare/hero.avif" />
      <div className={Style.container}>
        <Filter />
        <div className={Style.posts}>
          <Post
            title="How to clean baby"
            description="It's important to clean for the baby everyday"
            img="post-1.webp"
          />
          <Post
            title="How to clean baby"
            description="It's important to clean for the baby everyday"
            img="post-2.avif"
          />
          <Post
            title="How to clean baby"
            description="It's important to clean for the baby everyday"
            img="post-2.avif"
          />
          <Post
            title="How to clean baby"
            description="It's important to clean for the baby everyday"
            img="post-1.webp"
          />
        </div>
      </div>
    </>
  );
};

export default BabyCareComponents;
