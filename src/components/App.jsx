import { useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useEffect } from 'react';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  let [filter, setFilter] = useState('');

  useEffect(() => {
    if (localStorage.getItem('Persons') === null) {
      localStorage.setItem('Persons', JSON.stringify(contacts));
    } else {
      setContacts(JSON.parse(localStorage.getItem('Persons')))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  
 useEffect(() => {
      localStorage.setItem('Persons', JSON.stringify(contacts));
  },[contacts]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const nameValue = form.elements[0].value;
    const number = form.elements[1].value;
    setContacts([
      ...contacts,
      {
        name: nameValue,
        id: nanoid(),
        number: number,
      },
    ]);
    // let gettingPersons = localStorage.getItem('Persons');
    // gettingPersons = JSON.parse(gettingPersons);
    // gettingPersons.push({
    //   name: nameValue,
    //   id: nanoid(),
    //   number: number,
    // });
    // localStorage.setItem('Persons', JSON.stringify(gettingPersons));
    // return contacts.map(contact => {
    //   if (contact.name === nameValue) {
    //     alert(`${nameValue} is already in contacts`);
    //     let personFromStorage = localStorage.getItem('Persons');
    //     let parsedPerson = JSON.parse(personFromStorage);
    //     localStorage.setItem(
    //       'Persons',
    //       JSON.stringify(parsedPerson.splice(0, parsedPerson.length - 1))
    //     );
    //   }
    //   return null;
    // });
  };
  const filterUsers = e => {
    setFilter((filter = e.target.value.toLowerCase()));
  };
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
      }}
    >
      <h2>Phonebook</h2>
      <ContactForm submit={handleSubmit} />
      <h2>Contacts</h2>
      <Filter filterUsers={filterUsers} />
      <ContactList
        filter={filter}
        contacts={contacts}
        setContacts={setContacts}
      />
    </div>
  );
};