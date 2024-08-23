import NavBar from "../Misc/NavBar.jsx";
import Footer from "../Misc/Footer.jsx";
import {Stack} from "@mui/material";
import Miniatures from "./Miniatures.jsx";
import Chibis from "./Chibis.jsx";
import Bannieres from "./Bannieres.jsx";
import PP from "./PP.jsx";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";

export default function Creations() {
	const { pathname, hash, key } = useLocation();

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
	return (
		<Stack spacing={2}>
			<NavBar/>
			<Miniatures/>
			<Chibis/>
			<Bannieres/>
			<PP/>
			<Footer/>
		</Stack>

	)
}