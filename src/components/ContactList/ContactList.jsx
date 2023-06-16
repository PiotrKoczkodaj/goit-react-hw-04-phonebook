import { nanoid } from 'nanoid';
import { useState } from "react";

export const ContactList =({filter})=> {

const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

    
    
    
    const itemToIterate = () => {
      if (JSON.parse(localStorage.getItem('Persons')) === null) {
        return contacts
      } else {
        return JSON.parse(localStorage.getItem('Persons'));
      }
    };
    return (
      <div>
        {itemToIterate()
          .filter(contact => contact.name.includes(filter.toUpperCase()))
          .map(contact => (
            <p key={nanoid()}>
              {contact.name}
              {''}
              {contact.number}
              <button
                onClick={e => {
                          let index = contacts.indexOf(contact);
                          setContacts(contacts.splice(index,1))
                  let localStoragePersons = JSON.parse(
                    localStorage.getItem('Persons')
                  );
                  localStoragePersons.map(person => {
                    if (person.name === e.currentTarget.value) {
                      let index = localStoragePersons.indexOf(person);
                      localStoragePersons.splice(index, 1);
                      localStorage.setItem(
                        'Persons',
                        JSON.stringify(localStoragePersons)
                      );
                    }
                    return null;
                  });
                }}
                value={contact.name}
              >
                delete
              </button>
            </p>
          ))}
      </div>
    );
  
}