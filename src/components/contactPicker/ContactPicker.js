import React from "react";

export const ContactPicker = ({ contacts, contact, onChange }) => {
  return (
    <>
      <select value={contact} onChange={onChange} required>
        <option value="" disabled>Select a contact</option>
        {contacts.map((e, i) =>
          <option value={e.name} key={i}>{e.name}</option>
        )}
      </select>
    </>
  );
};
