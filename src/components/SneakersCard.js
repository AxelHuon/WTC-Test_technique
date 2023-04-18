import React from 'react';

const SneakersCard = ({sneakers ,index}) => {
	const colorResell = (resell) =>{
		switch(resell) {
			case "mauvais":
				return "#FF0000"
			case "excellent":
				return "#5D19FF"
			case "bon":
				return "#00FFB0"
			case "moyen":
				return "#FEC005"
			default:
				return "#00FFB0"
		}
	}
	
	
	return (
		<li key={index} className={"sneakers-card"}>
			<div className={"sneakers-card-container"}>
				<div className={"sneakers-card-container-image"}>
					<img src={`${sneakers.imagePath}`}/>
				</div>
				<div className={"sneakers-card-container-infos"}>
					<div className={"sneakers-card-container-infos-model-name"}>
						<h3 style={{color:sneakers.colorName}} className={"text-20 font-montserrat-extrabold"}>{sneakers.modelName}</h3>
					</div>
					<div className={"sneakers-card-container-infos-brand-name"}>
						<h4 className={"text-14 color-black font-montserrat-semibold"}>{sneakers.brandName}</h4>
					</div>
					<div className={"sneakers-card-container-infos-resell"}>
						<div style={{backgroundColor:colorResell(sneakers.resellIndex)}} className={"dot-resell"}></div>
						<h5 className={"text-13 color-black font-montserrat-bold"}>{sneakers.resellIndex}</h5>
					</div>
				</div>
			</div>
		</li>
	);
};

export default SneakersCard;
