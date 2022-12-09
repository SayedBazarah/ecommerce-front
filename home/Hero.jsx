import Carousel from "react-bootstrap/Carousel";
import Link from "next/link";
import Image from "next/image";
import Style from "./hero.module.css";
import Styl from "../baby-care/post.module.css";
import Hero from "../common/Hero";
import Filter from "../common/filter";


const Home = () => {
  
  const carouselData = 
  [
    {
      title: "welcome ,you can shopping now ",
      slug: "",
      img: "Escwa-banner01.jpg",
    },
  ];
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-bs-ride="carousel"
    >

    
      <div className="carousel-inner ">
        {carouselData.map((data, index) => {
          return (
            <section key={index} className="">
              <Image 
               className="w-100 text-black text-bg-dark "
                src={`/home/Untitl.avif`}
                alt="Picture of the author"
                width={1000}
                height={700}
                title="shopping cart"
                
              />


                <div className="carousel-caption " style={{ top: "35%"  }}>
                <h3 className="hero-text text-dark ">{data.title}   </h3>
                <p>{data.slug}</p>
                <p className=" text-dark">Find your new favorite pieces.</p>
              
                <Link href="/" className="btn btn-outline-dark mt-5 py-2 px-5  ">
                 SHOP NOW
                </Link>
                
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};




// <div className="m-5 py-5">



// <div className="d-flex justify-content-between bg-light">
//   <a className="gray-600  navbar-brand fw-bold fs-6"> <i className="bi bi-book-half"></i>Ecommerce-BeniSuef</a>

// <section className=" py-5">
// <div className="row gap-2">
// <div className="col d-flex flex-column align-items-start">
//   <h1 className=" fw-semibold">
//     welcome To<br/> <span className="gray-500">Beni-suef</span>
//   </h1>
//   <p className="gray-500 my-3">
//     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum,
//     error.
//   </p>

//   <button type="button" className="btn btn-primary px-3">Buy Now</button>

//   {/* <a "/Students"> Info More Student </a> */}

// </div>

// <div className="col-lg-6 col-md-12">
// <figure className="figure d-flex justify-content-center justify-content-lg-end" >
// <img className="log" src="/Z.jfif"
//           alt="book"
//           class="img-fluid shadow bg-body "
//           title=""
//           width="450"
//           height="450" />
//           </figure>
// </div>
// </div>

// </section>
// </div>
// </div>
// );
// };

export default Home;
