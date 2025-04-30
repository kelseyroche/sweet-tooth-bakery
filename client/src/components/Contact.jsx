import { useEffect, useState } from "react";
import { client } from "../sanityClient";

function Contact() {
  const [contactData, setContactData] = useState(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "contact"][0]{
        email,
        phone,
        address
      }`)
      .then((data) => setContactData(data))
      .catch(console.error);
  }, []);

  if (!contactData) return <p>Loading contact info...</p>;

  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <p><strong>Email:</strong> {contactData.email}</p>
      <p><strong>Phone:</strong> {contactData.phone}</p>
      <p><strong>Address:</strong> {contactData.address}</p>
    </div>
  );
}

export default Contact;