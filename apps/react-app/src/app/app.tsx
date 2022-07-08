import React from 'react';
import Home from './home/Home';
import {Provider} from 'react-redux';
import { store } from "./store/store";
import './app.scss';

export const App = () => {
  return (
		<div>
			<Provider store={store}>
				<Home/>
			</Provider>
		</div>
	);
};

export default App;
