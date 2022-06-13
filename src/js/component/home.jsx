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
			<div class="container bg-secondary bg-light">
				<Principal />
			</div>
			<div class="container">
				<div className="row  ">
					<div className="col-12 col-md-3">
						<Card
							title="Conoce el Mundo"
							text="Una vez que te pica el bicho de los viajes no hay antídoto conocido, y sé que estaría felizmente infectado hasta el final de mis días"
							imageUrl="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
						/>
					</div>

					<div className="col-12 col-md-3">
						<Card
							title="Descubre tu destino"
							text="Un viaje se vive 3 veces: cuando lo soñamos, cuando lo vivimos y cuando lo recordamos"
							imageUrl="https://images.unsplash.com/photo-1601120101953-ec1ffacffdd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
						/>
					</div>

					<div className="col-12 col-md-3">
						<Card
							title="Vive nuevas experiencias"
							text="Solo en la aventura algunas personas consiguen conocerse a sí mismas, encontrarse a sí mismas"
							imageUrl="https://images.unsplash.com/photo-1579524655638-351438cb80d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
						/>
					</div>

					<div className="col-12 col-md-3 ">
						<Card
							title="Vive de viajar "
							text="Si deseas viajar lejos y rápido, viaja ligero. Quítate todas las envidias, los celos, el rencor, el egoísmo y el temor"
							imageUrl="https://images.unsplash.com/photo-1563820510191-3b4a20c78568?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
						/>
					</div>
				</div>
			</div>
			<Donw />
		</div>
	);
};

export default Home;
