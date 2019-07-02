import React, { Component } from 'react';
import ContactsComponent from '../contactsComponents/ContactsComponent';
import './searchComponent.css';
import menuIcon from './menu.png';
class SearchComponent extends React.Component {

    state = {
        filtered: []
    }
    componentDidMount() {
        this.setState({
          filtered: this.props.contacts
        });
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
          filtered: nextProps.contacts
        });
    }
    handleChange = (e) => {
        let currentList = [];
        let newList = [];
        if (e.target.value !== "") {
            currentList = this.props.contacts;
            newList = currentList.filter(contact => {
                const loCaseName = contact.Name.toLowerCase();
                const filter = e.target.value.toLowerCase();                
                return loCaseName.includes(filter);
            });
        }
        else {
            newList = this.props.contacts;
        }
        this.setState({
            filtered: newList
        });
    }
    render() {
        const { filtered } = this.state;        
        const contactList = filtered.map((contact,index) => {
                return <ContactsComponent contacts={filtered} detail={contact} key={index}/>
            })
        return (
            <div>
                 <div>
                    <div className="menu-icon">
                        <img src={menuIcon} width='37px' alt='menuIcon' />
                            <p>Contact List</p>
                    </div>
                    </div>
                <div className="searchBar">
                
                <div>
                    <input type="text" className="search col-lg-4 col-lg-offset-4" placeholder="Search Contacts"  onChange={this.handleChange}>
                    </input>
                </div>
                </div>
                <div>
                    <ul>{contactList}</ul>
                </div>
            </div>
           
        );
    }
}

export default SearchComponent;