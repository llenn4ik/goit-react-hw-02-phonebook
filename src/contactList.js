import React from 'react';


const ContactList = ({contacts, onRemoveContact}) =>
   (
      <ul>
         {contacts.map(({ id, name, number }) => (
    
          <li key={id} >
            <p >name: {name}</p>
            <p >number: {number}</p>
            <button
              type="button"
              onClick={() => onRemoveContact(id)}
              
            >
              Delete
            </button>
          </li>)
         )}
      </ul>)
      

      export default ContactList