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
  useEffect(() => {
      localStorage.setItem('Persons', JSON.stringify(contacts));
  }, [contacts]);

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
                let index = contacts.indexOf(contact);
                setContacts(contacts.splice(index, 1));
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
};
ContactList.propTypes = {
  filter: PropTypes.string.isRequired,
  contacts: PropTypes.array.isRequired,
  setContacts: PropTypes.func.isRequired,
};