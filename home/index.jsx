import Herro from "./Hero";
// import { Container } from "react-bootstrap";
import Hero from "../common/Hero";
import Product from "./products";
import EndComp from "./endComponent";
import Link from "next/link";
import Style from "./zHome.module.css";
import Carousel from 'react-bootstrap/Carousel';
import Image from "next/image";

const Home = () => {
  return (
    <>

    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100  text-dark"
          src="home/policy1.avif"
          alt="First slide"
        />
        <Carousel.Caption className=" text-dark">
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/home/ho.avif"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/home/kk.avif"
          alt="Third slide"
        />

        <Carousel.Caption className=" text-dark">
        <h3>Third slide label</h3>
        <p> Praesent commodo cursus magna.</p>
       <Link href="/" className="container btn btn-outline-dark  " style={{ width:200 }}>Learn More</Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


        <h1 className={Style.head}> Our bestsellers </h1>
    
       <div className={Style.container}>
        <section className={Style.products}>
          <Product
            title="Smallbirds Wool Runners - Little Kids"
            description="Light Grey (Light Grey Sole)"
            img="post-1.webp"
            price=""
          />
          <Product
            title="Smallbirds Wool Runners - Little Kids"
            description="Light Grey (Light Grey Sole)"
            img="post-1.webp"
            price=""
          />
          <Product
            title="Smallbirds Wool Runners - Little Kids"
            description="Light Grey (Light Grey Sole)"
            img="post-1.webp"
            price=""
          />
        </section>

          <Link href="/" className="container btn btn-outline-dark py-3 " style={{ width:300 }}>
            BUY NOW
          </Link>
      </div>
      

      <EndComp />
    </>
  );
};


export default Home;
