import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const socials = [
  { label: "GitHub", href: "https://github.com/alvi00" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ahmad-fahmid/" },
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=BSOq8zAAAAAJ&hl=en",
  },
  { label: "Facebook", href: "https://web.facebook.com/alvi00o/" },
];

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <div className="contact-head">
          <span className="contact-eyebrow">Get in touch</span>
          <h3>Contact</h3>
          <p className="contact-lead">
            Open to research collaborations, internships, and interesting
            problems. The fastest way to reach me is email.
          </p>
        </div>

        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a
                href="mailto:ahmadfahmid59@gmail.com"
                data-cursor="disable"
                className="contact-value"
              >
                ahmadfahmid59@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a
                href="tel:+8801401083338"
                data-cursor="disable"
                className="contact-value"
              >
                +880 1401083338
              </a>
            </p>
            <h4>Based in</h4>
            <p>
              <span className="contact-value contact-static">
                Dhaka, Bangladesh
              </span>
            </p>
          </div>

          <div className="contact-box">
            <h4>Social</h4>
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="disable"
                className="contact-social"
              >
                <span>{social.label}</span>
                <MdArrowOutward />
              </a>
            ))}
          </div>

          <div className="contact-box contact-sign">
            <a
              className="contact-cta"
              href="mailto:ahmadfahmid59@gmail.com"
              data-cursor="disable"
            >
              Start a conversation
              <MdArrowOutward />
            </a>
            <h2>
              Designed and Developed <br /> by <span>Ahmad Fahmid</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
