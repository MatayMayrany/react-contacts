import React from 'react';
import Card from './Card.js'
import {contacts} from '../Contacts.js';

const cardList = ({contacts}) => {
	return (
		<div>
			{contacts.map((user, index) => {
				return <Card contactInfo={contacts[index]} key={index}/>
			})}
		</div>
	)
}

export default cardList;