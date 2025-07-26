import React from "react";
import "./contact.css";
import CommonBanner from "../CommonBanner/CommonBanner";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const ContactPage = () => {
  return (
    <section>
      <CommonBanner
        title="Contact Me"
        currentPage="Contact"
        parentPage={{ href: "/Contact" }}
      />
      <ContactInfo />
      <ContactForm />
    </section>
  );
};

export default ContactPage;
