import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
	const tamaño = {
		width: 280,
		height: 200,
	};

	const tamCard = {
		height: 500,
		margin: "10px",
	};

	return (
		<div className="card text-center" style={tamCard}>
			<img
				src={props.imageUrl}
				className="card-img-top"
				alt=""
				style={tamaño}
			/>
			<div className="card-body text-center">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.text}</p>
				<a href="#" className="btn btn-outline-success text-center">
					Mas informacion
				</a>
			</div>
		</div>
	);
};


Card.propTypes = {
	title: PropTypes.string,
	imageUrl: PropTypes.string,
	text: PropTypes.string,
};

export default Card;
