
import {useLocation, useNavigate} from "react-router-dom";
import logo from "../../assets/img/logo.png";
import "../../assets/css/components/NavBar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import {Button} from "@mui/material";
import {useEffect, useState} from "react";
import Contact from "./Contact.jsx";
export default function NavBar() {
	const navigate= useNavigate()
	const [openContact, setOpenContact] = useState(false)
	const buttonSX = {
		"&:hover": {
			backgroundColor: "#f4f2f2"
		},
		color: "black",
		backgroundColor: "white",
		py:1, textTransform: "none",
		fontWeight: "700",
		fontSize: "0.8rem",
		fontFamily: "Inter, sans-serif",
	};

	const handleLi = (e) => {
		e.preventDefault()
		console.log(e.target.id)
		if (e.target.id === "nav-home" || e.target.id === '') {
			navigate("/")
			return
		}
		const linkId = e.target.id.split("-")[1]
		navigate("/creations#"+linkId)

	}
	return (
		<>


		<nav className="navbar navbar-expand-lg navbar-dark bg-main">
			<div className="container-fluid">
				<a className="navbar-brand" href="/portfolio_mrsticky/public" id={"nav-home"} onClick={handleLi}>
					<img src={logo} alt="logo" width="60" height="60" style={{borderRadius: "50%" }} />
				</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
						aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse " id="navbarText">
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						<li className="nav-item me-3">
							<a className="nav-link a-text-nav" aria-current="page"  id="nav-miniatures" onClick={handleLi} href={"#"}>Miniatures</a>
						</li>
						<li className="nav-item me-3">
							<a className="nav-link a-text-nav" id="nav-chibis" onClick={handleLi} href={"#"} >Chibis</a>
						</li>
						<li className="nav-item me-3">
							<a className="nav-link a-text-nav" id="nav-bannieres" onClick={handleLi} href={"#"}>Bannieres</a>
						</li>
						<li className="nav-item me-3">
							<a className="nav-link a-text-nav" id="nav-pp" href={"#"}	onClick={handleLi}>Photos de Profil</a>
						</li>
						<li className="nav-item me-3">
							<a className="nav-link a-text-nav" id="nav-clients" href={"#"} onClick={() => navigate('/clients')}>Clients</a>
						</li>
						<li className="nav-item d-flex align-items-center me-3" >
							<Button variant="contained" sx={buttonSX} size={"small"} onClick={() => setOpenContact(true)}>Me Contacter</Button>
						</li>
					</ul>
				</div>
			</div>
		</nav>
		<Contact open={openContact} setOpen={setOpenContact} />
		</>
	)
}