import Link from "next/link";
import Image from "next/image";
import Hero from "../components/common/Hero";

const ShippingPolicy = () => {

    return (
    <>
         <Hero title="Shipping" img="/shipping.avif" />
         
         <div style={{
       width: "60%",
       margin: "40px auto ",
       padding: "50px ", 
        
    }}>    
        <h2>Payments</h2>    
         <p>

We offer over a dozen payment options to ensure you
 can pay via a method that suits your needs.
  All payments are processed securely by a third-party
   payment provider, and are protected by encryption.
    Should you return any of your order and are due a refund,
     we will refund the value of your order via the payment method 
     you originally used.
          </p>
          <h2> Delivery</h2> 
          <p> 
      Our online store automatically calculates the best shipping routes, 
       rates, and handlers to make sure you receive your poster or print
        quickly and cheaply. We usually ship orders within 48 hours,
         and depending on the shipping options you choose,
          you should receive them within 3-5 working days. 
         </p>
      </div>
         
   
    </>
)};

export default ShippingPolicy;