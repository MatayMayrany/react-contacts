import React from 'react';



const card = (props) => {
	const {id, username, email} = props.contactInfo;
	return (
		<div className='bg-light-green tc dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='photo' src={`https://robohash.org/${id}?20x20`}/>
			<div>
				<h2>{username}</h2>
				<p>{email}</p>
			</div>
		</div>
	)
}

export default card;
