import React from 'react';
import {Input} from '@material-ui/core';

const SearchBox = (props: any) => {
	return (
		<div>
			<Input
                type="search"
				value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}
				placeholder='Type to search...'
			></Input>
		</div>
	);
};

export default SearchBox;