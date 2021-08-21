import React from "react";
import './App.css';
import Header from './Header';
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const contacts=[
    {
      id:'1',
      name:'vimal',
      email:'msv@g.com'
    },
    {
      id:'2',
      name:'santhosh',
      email:'sant@g.com'
    },
  ]
  return (
    <div>
      <Header/>
      <AddContact/>
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
