import React, {useEffect, useState} from 'react';
import {drops_data} from "../../data/data";
import SneakersCard from "../../components/SneakersCard";

const Home = () => {
	
	const [sneakers, setSneakers] = useState([]);
	
	const [filterSelected, setFilterSelected] = useState("Tous les resell");
	
	useEffect(() => {
		setSneakers(drops_data)
	}, []);
	
	const dataFilter = ["Tous les resell", "excellent","bon", "moyen","mauvais"]
	
	const handleChangeFilter = (value) =>{
		setFilterSelected(value)
	}
	
	return (
		<main className={"home"}>
			<section className={"home-drops"}>
				<aside className={"home-drops-container"}>
					<div className={"home-drops-container-intro"}>
						<h2 className={"text-32 color-brown font-montserrat-extrabold"}>Drops</h2>
						<select onChange={(e)=>handleChangeFilter(e.target.value)} name={"filterDrops"} className={"select-custom text-12 montserrat-medium"}>
							{dataFilter.map((itemFilter,indexFilter)=>{
								return(
									<option key={indexFilter} value={itemFilter}>{itemFilter}</option>
								)
							})}
						</select>
					</div>
					<ul className={"home-drops-container-list"}>
						{sneakers.filter((itemSneakers)=>{
							if (filterSelected !== "Tous les resell") {
								return itemSneakers.resellIndex === filterSelected;
							} else {
								return true;
							}
						}).map((itemSneakers,indexSneakers)=>{
							if (filterSelected === "Tous les resell" || itemSneakers.resellIndex === filterSelected) {
								return(
									<SneakersCard index={indexSneakers} sneakers={itemSneakers}/>
								)
							}
						})}
					</ul>
				</aside>
			</section>
		</main>
	);
};

export default Home;
