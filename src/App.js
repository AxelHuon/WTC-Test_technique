import React from 'react';
import "./style/main.css"
import Header from "./layouts/Header";
import Home from "./views/Home/Home";
const App = () => {
	return (
		<div className={"App"}>
       		<Header/>
			<Home/>
		</div>
	);
};

export default App;
