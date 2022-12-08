import Hero from "../common/Hero";
import Filter from "../common/filter";
import Style from "./store.module.css";
const StoreComponents = () => {
  return (
    <>
      <Hero title="Store" img="/babycare/hero.avif" />
      <div className={Style.container}>
        <Filter />
      </div>
    </>
  );
};
export default StoreComponents;
