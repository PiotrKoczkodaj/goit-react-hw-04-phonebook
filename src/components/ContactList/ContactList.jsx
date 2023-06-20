import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';


export const ContactList = ({ filter, contacts, setContacts }) => {
  // const itemToIterate = () => {
  //   if (JSON.parse(localStorage.getItem('Persons')) === null) {
  //     return contacts;
  //   } else {
  //     return JSON.parse(localStorage.getItem('Persons'));
  //   }
  // };
 
console.log(contacts)
  return (
    <div>
      {contacts
        .filter(contact => contact.name.toLowerCase().includes(filter))
        .map(contact => (
          <p key={nanoid()}>
            {contact.name}
            {''}
            {contact.number}
            <button
              onClick={e => {
            
                setContacts(contacts.filter(contact => contact.name=== e.target.value
                ))
            //  let a=contacts.filter((contact) => {
            //       console.log(e.target.value)
            //       e.target.value === contact.name
            //     })
            //     console.log(a)
                // if (e.target.value === contact.name) {
                //   let index = contacts.indexOf(contact);
                //   let contactsWithoutUser = [];
                //   console.log(contactsWithoutUser)
                //  setContacts(contactsWithoutUser);
                  
                // }
                
            
              }}
              value={contact.name}
            >
              delete
            </button>
          </p>
        ))}
    </div>
  );
};
ContactList.propTypes = {
  filter: PropTypes.string.isRequired,
  contacts: PropTypes.array.isRequired,
  setContacts: PropTypes.func.isRequired,
};