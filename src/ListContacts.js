import React from 'react';
import PropTypes from 'prop-types';

const ListContacts = (props) => (
        <div>
            <ol className="contact-list">
                {props.contacts.map(contact => (
                    <li key={contact.id} className="contact-list-item">
                        <div className="contact-avatar" style={{
                            backgroundImage: `url(${contact.avatarURL})`
                        }}/>
                        <div className="contact-details">
                            <p>{contact.name}</p>
                            <p>{contact.email}</p>
                        </div>
                        <button className="contact-remove" onClick={() => props.onDeleteContact(contact)}>
                            Remove
                        </button>
                    </li>
                ))}
            </ol>
        </div>
)

ListContacts.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
}

export default ListContacts;