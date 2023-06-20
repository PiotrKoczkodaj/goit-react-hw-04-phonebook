import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';


export const ContactList = ({ filter, contacts, setContacts }) => {

 
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
            
                setContacts(contacts.filter(contact => contact.name !== e.target.value
                ))
           
                
            
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