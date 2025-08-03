import React, { useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  const [contact, setContact] = useState([]);
  const [appointment, setAppointment] = useState([]);

  const addContact = ({ name, email, phone }) => {
    setContact([...contact, {
      name: name,
      email: email,
      phone: phone
    }])
  }

  const addAppointment = ({ title, contact, date, time }) => {
    setAppointment([...appointment, {
      title: title,
      contact: contact,
      date: date,
      time: time
    }])
  }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Navigate to={ROUTES.CONTACTS} replace />} />
      <Route path={ROUTES.CONTACTS} element={<ContactsPage contact={contact} addContact={addContact} />} />
      <Route path={ROUTES.APPOINTMENTS} element={<AppointmentsPage appointment={appointment} addAppointment={addAppointment} contacts={contact} />} />
    </Route>
  ));

  return (
    <RouterProvider router={router} />
  );
}

export default App;
