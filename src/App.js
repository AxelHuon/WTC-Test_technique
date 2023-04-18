import React from 'react';
import "./style/main.css"
import Header from "./layouts/Header";
import Home from "./views/Home/Home";
import HomeV2 from "./views/Home/HomeV2";
const App = () => {
	return (
		<div className={"App"}>
       		<Header/>
			<HomeV2/>
		</div>
	);
};

export default App;
