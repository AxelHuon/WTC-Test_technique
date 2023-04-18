import React from 'react';

const Header = () => {
	return (<header className={"header"}>
			<aside className={"header-container"}>
				<div className={"header-container-logo"}>
					<img src={"images/logo-wtc.png"} alt={"Logo WhenToCop?"}/>
				</div>
				<ul className={"header-container-menu"}>
					<li className={"link"}><a href={"#"}>Accueil</a></li>
					<li className={"link active"}><a href={"#"}>Drops</a></li>
					<li className={"link"}><a href={"#"}>Comparateur</a></li>
					<li className={"link"}><a href={"#"}>News</a></li>
					<li className={"button-primary"}><a href={"#"}>Télécharge l'application</a></li>
				</ul>
				<button className={"header-container-button-mobile"}>
					<div></div>
					<div></div>
					<div></div>
				</button>
			</aside>
		</header>);
};

export default Header;
