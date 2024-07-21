
import {useNavigate} from "react-router-dom";
import logo from "../assets/img/logo.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "../assets/css/components/NavBar.css";
import {Button} from "@mui/material";
export default function NavBar() {
	const navigate= useNavigate()
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
		if (e.target.id === "home") navigate("/")
		navigate("/"+e.target.id)

	}
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-main">
			<div className="container-fluid">
				<a className="navbar-brand" href="#" id={"home"} onClick={handleLi}>
					<img src={logo} alt="logo" width="60" height="60" style={{borderRadius: "50%" }} />
				</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
						aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse " id="navbarText">
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						<li className="nav-item me-3">
							<a className="nav-link a-text-nav" aria-current="page"  id="miniatures" onClick={handleLi} href={"#"}>Miniatures</a>
						</li>
						<li className="nav-item me-3">
							<a className="nav-link a-text-nav" id="chibis" onClick={handleLi} href={"#"} >Chibis</a>
						</li>
						<li className="nav-item me-3">
							<a className="nav-link a-text-nav" id="bannieres" onClick={handleLi} href={"#"}>Bannières</a>
						</li>
						<li className="nav-item me-3">
							<a className="nav-link a-text-nav" id="pp" href={"#"}	onClick={handleLi}>Photos de Profil</a>
						</li>
						<li className="nav-item me-3">
							<a className="nav-link a-text-nav" id="clients" href={"#"} onClick={handleLi}>Clients</a>
						</li>
						<li className="nav-item d-flex align-items-center me-3" >
							<Button variant="contained" sx={buttonSX} size={"small"} onClick={() => navigate("/contact")}>Me Contacter</Button>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}