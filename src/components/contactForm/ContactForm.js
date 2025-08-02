import React from "react";
import { Form } from "react-router-dom";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

  const handlePhoneChange = (e) => {
    const input = e.target.value.replace(/\D/g, '');

    const formatPhone = (input) => {
      const part1 = input.slice(0, 3);
      const part2 = input.slice(3, 6);
      const part3 = input.slice(6, 9);
      return [part1, part2, part3].filter(Boolean).join(' ');
    }

    const formatted = formatPhone(input)
    setPhone(formatted)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text" value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Add your name..."
        required
      />
      <input
        type="tel" value={phone}
        onChange={handlePhoneChange}
        placeholder="your phone number..."
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your e-mail..."
      />
      <button type="submit">Send</button>
    </form>
  );
};

