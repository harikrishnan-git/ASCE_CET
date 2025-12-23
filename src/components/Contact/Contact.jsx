import React from "react";
import "./Contact.css";
import email from "../../assets/email.png";
import phone from "../../assets/phone.png";
import location from "../../assets/location.png";

const Contact = () => {
  return (
    <div className="contactus">
      <div className="text">
        <h2>Join ASCE CET</h2>
        <p>
          Become part of a vibrant community of civil engineering students at
          CET. Explore our initiatives, events, and projects through the
          official ASCE website, or proceed directly to the membership page to
          join our chapter. We look forward to welcoming you on board!
        </p>

        {/* Buttons for website + membership */}
        <div className="join-links">
          <a
            href="https://www.asce.org"
            target="_blank"
            rel="noopener noreferrer"
            className="butn"
          >
            Visit ASCE Website
          </a>

          <a
            href="https://asce.org/membership"
            target="_blank"
            rel="noopener noreferrer"
            className="butn secondary"
          >
            Become a Member
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
