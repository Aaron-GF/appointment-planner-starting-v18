import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contact, addContact }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [duplicateCheck, setDuplicateCheck] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (duplicateCheck) {
      addContact({ name, email, phone })
      setName('');
      setEmail('');
      setPhone('');
      setDuplicateCheck(false);
    }
  };

  useEffect(() => {
    const isDuplicate = contact.some(c => c.name.toLowerCase() === name.toLowerCase());
    setDuplicateCheck(!isDuplicate);
  }, [name, contact])

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          phone={phone}
          setPhone={setPhone}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
      </section>
    </div>
  );
};
