import React, { Component } from 'react';
import './contactsComponent.css';
class ContactsComponent extends Component {
    render() {
        let contact = this.props.detail;        
        let contactName = contact.Name;
        let suppliedString = contactName.match(/\b(\w)/g);
        let res;
        if (suppliedString.length < 2) {
            res = contactName.substring(0, 2);   
        }  
        else {
                res = suppliedString.join('');  
        }
        
        return (
            <li className="Contact-info">
                    <div className="Contact-info-container">
                    <span className="Contact-image">{res}</span>
                    <div className="contact-name-container">
                    <p className="contact-name">{contact.Name}<span>{contact.Job}</span></p>
                    </div>
                </div> 
            </li>
        );
}
}
export default ContactsComponent;