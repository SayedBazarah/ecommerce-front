import Link from "next/link";
import Image from "next/image";
import Hero from "../components/common/Hero";

const ReturningPolicy = (props) => {
  return (
  
    <>

     <Hero title="Returns" img="/policy1.avif" />
      <div style={{
       width: "60%",
       margin: "40px auto ",
       padding: "50px ",  
      //  background:" #fbebeb"
    }}>    
        
        <h2>Returns Policy</h2>
            <p>
           in the event that you are unhappy with your poster or print 
             for any reason, you are entitled to return it for a full cash
              refund (including shipping) up to 30 days after your order
           
               arrives. If you return your order after 30 days
                but within 60 days, instead of a cash refund,
                 you will be offered an exchange equal to
                  the value of your order.
             </p>
             <p> 
                 If your order arrives damaged or faulty,
                  you have up to 45 days to return it for a full cash refund.
                   All return windows are valid from 
                   the date on which your order arrives with you.
            </p>
        
        
         <h2>Refunds Policy</h2>         
         <p>
             
   You're entitled to cancel your order within 30 days
     without giving any reason for doing so.
     In order to exercise your right of cancellation,
     you must inform us of your decision by means of a clear
      statement.
     You can inform us of your decision by e-mail returns@Hameid.com
          </p>
          <p> 
          We will reimburse you no later than 30 days 
       from the day on which we receive the returned goods.
      We will use the same means of payment as you used for the order,
     and you will not incur any fees for such reimbursement.
         </p>

      </div>
         
   
    </>
    )};
   export default ReturningPolicy;
