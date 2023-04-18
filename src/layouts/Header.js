import React from 'react';

const Header = () => {
	return (<header className={"header"}>
			<aside className={"header-container"}>
				<div className={"header-container-logo"}>
					<img src={"images/logo-wtc.png"} alt={"Logo WhenToCop?"}/>
				</div>
				<ul className={"header-container-menu"}>
					<li className={"link"}><a href={"https://www.whentocop.fr/"}>Accueil</a></li>
					<li className={"link active"}><a href={"https://www.whentocop.fr/drops"}>Drops</a></li>
					<li className={"link"}><a href={"https://www.whentocop.fr/comparator"}>Comparateur</a></li>
					<li className={"link"}><a href={"https://www.whentocop.fr/blog"}>News</a></li>
					<li className={"button-primary"}><a href={"https://www.whentocop.fr/download-app"}>Télécharge l'application</a></li>
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
