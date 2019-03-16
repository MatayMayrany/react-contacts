import React, { Component } from 'react';
import CardList from '../components/CardList.js'
import {contacts} from '../Contacts.js';
import SearchBox from '../components/SearchBox.js'
import './App.css'
import Scroll from '../components/Scroll.js'


class App extends Component {

	constructor(){
		super();
		this.state = {
			contacts: [],
			searchfield: ''
		}
 	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({contacts: users}))
		
	}


	render(){
		const {contacts, searchfield} = this.state;
		const filteredContacts = contacts.filter(contact => {
			return contact.username.toLowerCase().includes(searchfield.toLowerCase());
		})
		if(!contacts.length){
			return <h1> Loading </h1>
		}else{
			return(
				<div className = 'tc'>
					<h1 className='f2' >My Contacts</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<CardList contacts={filteredContacts}/>
					</Scroll> 
				</div>
			)
		}
		
	}
}

export default App;