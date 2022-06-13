import React from "react";
import Navbar from "./navbar.jsx";
import Card from "./card.jsx";
import Principal from "./principal.jsx";
import Donw from "./donw.jsx";

//include images into your bundle

import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid p-3">
			<Navbar />
			<div class="container bg-secondary bg-light mt-3">
				<Principal />
			</div>
			<div class="container mt-3">
				<div className="row  ">
					<div className="col-md-4 col-lg-3 my-5  ">
						<Card
							title="Conoce el Mundo"
							text="Una vez que te pica el bicho de los viajes no hay antídoto conocido, y sé que estaría felizmente infectado hasta el final de mis días"
							imageUrl="https://images.unsplash.com/photo-1579524655638-351438cb80d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80 "
						/>
					</div>

					<div className="col-md-4 col-lg-3 my-5 ">
						<Card
							title="Descubre tu destino"
							text="Una vez que te pica el bicho de los viajes no hay antídoto conocido, y sé que estaría felizmente infectado hasta el final de mis días"
							imageUrl="https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80 "
						/>
					</div>

					<div className="col-md-4 col-lg-3 my-5 ">
						<Card
							title="Vive nuevas experiencias"
							text="Una vez que te pica el bicho de los viajes no hay antídoto conocido, y sé que estaría felizmente infectado hasta el final de mis días"
							imageUrl="https://images.unsplash.com/photo-1579524655638-351438cb80d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
						/>
					</div>

					<div className="col-md-4 col-lg-3 my-5 ">
						<Card
							title="Vive de viajar "
							text="Una vez que te pica el bicho de los viajes no hay antídoto conocido, y sé que estaría felizmente infectado hasta el final de mis días"
							imageUrl="https://images.unsplash.com/photo-1602163699952-38586704683f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
						/>
					</div>
				</div>
			</div>
			<Donw />
		</div>
	);
};

export default Home;
