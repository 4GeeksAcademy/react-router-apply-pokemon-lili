import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home';
import Pokemon from './Pokemon';


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

const App = () => {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />}/>
					<Route path="/pokemon" element={<Pokemon />}></Route>
				</Routes>
			</BrowserRouter>
			<p>
				<img src={rigoImage} />
			</p>
		</div>
	);
};

export default App;
