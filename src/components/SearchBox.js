import React from 'react';

const SearchBox = ({searchChange}) => {
	return (
		<div className ='pa2'>
			<input 
				type='search' 
				placeholder='search contacts' 
				className='tc dib br3 pa3 ma2 shadow-5 bg-lightest-blue'
				onChange= {searchChange}
			/>
		</div>
	);
}

export default SearchBox;