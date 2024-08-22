
import {useLocation, useNavigate} from "react-router-dom";
import logo from "../assets/img/logo.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "../assets/css/components/NavBar.css";
import {Button} from "@mui/material";
import {useEffect} from "react";
export default function NavBar() {
	const navigate= useNavigate()
	const { pathname, hash, key } = useLocation();

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

	useEffect(() => {
		// if not a hash link, scroll to top
		if (hash === '') {
			window.scrollTo(0, 0);
		}
		// else scroll to id
		else {
			setTimeout(() => {
				const id = hash.replace('#', '');
				const element = document.getElementById(id);
				if (element) {
					element.scrollIntoView();
				}
			}, 0);
		}
	}, [pathname, hash, key]); // do this on route change
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
		<nav className="navbar navbar-expand-lg navbar-dark bg-main">
			<div className="container-fluid">
				<a className="navbar-brand" href="/" id={"nav-home"} onClick={handleLi}>
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
							<a className="nav-link a-text-nav" id="nav-bannieres" onClick={handleLi} href={"#"}>Bannières</a>
						</li>
						<li className="nav-item me-3">
							<a className="nav-link a-text-nav" id="nav-pp" href={"#"}	onClick={handleLi}>Photos de Profil</a>
						</li>
						<li className="nav-item me-3">
							<a className="nav-link a-text-nav" id="nav-clients" href={"#"} onClick={handleLi}>Clients</a>
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