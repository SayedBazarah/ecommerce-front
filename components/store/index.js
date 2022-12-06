import Hero from "../common/Hero";
import Filter from "../common/filter";
import Style from "./store.module.css";
import Product from "./product";
const StoreComponents = () => {
  return (
    <>
      <Hero title="Store" img="/babycare/hero.avif" />
      <div className={Style.container}>
        <Filter />
        <section className={Style.products}>
          <Product
            title="Smallbirds Wool Runners - Little Kids"
            description="Light Grey (Light Grey Sole)"
            img="post-1.webp"
            price="42"
          />
          <Product
            title="Smallbirds Wool Runners - Little Kids"
            description="Light Grey (Light Grey Sole)"
            img="post-1.webp"
            price="42"
          />
          <Product
            title="Smallbirds Wool Runners - Little Kids"
            description="Light Grey (Light Grey Sole)"
            img="post-1.webp"
            price="42"
          />
        </section>
      </div>
    </>
  );
};
export default StoreComponents;
