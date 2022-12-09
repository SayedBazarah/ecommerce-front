import Herro from "./Hero";
import Hero from "../common/Hero";
import Link from "next/link";
import Style from "./zHome.module.css";
import Image from "next/image";
import Products from "./products";

const EndComp = ({ title, price, img, description }) => {
  return (
    <>

{/* <div className="py-5">
<Hero title="Children's Section" img="/home/Untitl.avif"  />
</div> */}


<Herro title="" />

<section className="bg-light row">
      <div className="container col-12 py-5 my-5">
        <header
          className="d-flex flex-column align-items-center justify-content-center"
        >
        </header>
        

        <div className=" container  card-group d-flex align-items-center flex-xl-row flex-lg-column flex-sm-column"> 
          <div className="card border-0"> <div
              className="card-body d-flex flex-column align-items-center justify-content-center"
            >
              
              <Image
          src={"/home/mm.png"}
          alt="post title"
          width={350}
          height={300}
            />
              <h5 className="card-title">Catigory</h5>
              <button className="btn btn-secondary">Go somewhere</button>
            </div>
          </div>
          
          <div className="card border border-2 border-warning my-sm-3">
          
            <div
              className="card-body d-flex flex-column align-items-center justify-content-center"
            >
             
              <Image
          src={"/home/sho.webp"}
          alt="post title"
          width={350}
          height={300} />

             <h5 className="card-title">login</h5>
              <button className="btn btn-outline-warning">Go somewhere</button>
            </div>
          </div>
        
          <div className="card border-0">
            <div
              className="card-body d-flex flex-column align-items-center justify-content-center"
            >
              
              <Image
          src={"/home/mm.png"}
          alt="post title"
          width={350}
          height={300}/>

             <h5 className="card-title">About</h5>
              <button className="btn btn-secondary">Go somewhere</button>
            </div>
          </div>
        </div>
      </div>
    </section>
   <div className={Style.container}>
    <Hero title="Sign-up for our newsletter"  img="/babycare/hero.avif"  />
    <Link href="/" className="container btn btn-outline-dark w-25 mt-3">
           Subscribe
     </Link>
    </div>
    </>

  )}

  export default EndComp;