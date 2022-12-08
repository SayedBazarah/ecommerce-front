import Image from "next/image";
import Style from "./contacts.module.css";
import Form from "./form";
import Hero from "../common/Hero";
const ContactsComponents = () => {
  return (
    <>
      <Hero title="Contact us" img="/contacts/hero.avif" />
      <section className={Style.container}>
        <div className={Style.info}>
          <div>
            <h3>Headquarters</h3>
            <p>
              ECOMMERCE Studio
              <br />
              25th ring road
              <br />
              Cairo, Egypt
            </p>
          </div>
          <div>
            <h3>Collaborations</h3>
            <p>
              Reach out to collaborate at <br />
              <a href="mailto:collaborate@ecommerce.com">collab@domain.com</a>
            </p>
          </div>
        </div>
        <div className={Style.form}>
          <h3>Inquiries</h3>
          <Form />
        </div>
      </section>
    </>
  );
};

export default ContactsComponents;
