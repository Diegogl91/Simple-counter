import React from "react";
import PropTypes from "prop-types";

//create your first component
const Home = props => {
	let { segundos } = props;

	let contador = {
		dUno: Math.floor(segundos / 1),
		dDos: Math.floor(segundos / 10),
		dTres: Math.floor(segundos / 100),
		dCuatro: Math.floor(segundos / 1000),
		dCinco: Math.floor(segundos / 10000),
		dSeis: Math.floor(segundos / 100000)
	};

	return (
		<div className="contenedor ">
			<div className="boxdigito">
				<i className="far fa-clock"></i>
			</div>
			<div className="boxdigito">{contador.dSeis % 10}</div>
			<div className="boxdigito">{contador.dCinco % 10}</div>
			<div className="boxdigito">{contador.dCuatro % 10}</div>
			<div className="boxdigito">{contador.dTres % 10}</div>
			<div className="boxdigito">{contador.dDos % 10}</div>
			<div className="boxdigito">{contador.dUno % 10}</div>
		</div>
	);
};
Home.propTypes = {
	segundos: PropTypes.number
};

export default Home;
