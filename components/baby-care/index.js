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
        <div>
          <Post />
        </div>
      </div>
    </>
  );
};

export default BabyCareComponents;
