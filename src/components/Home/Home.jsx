import NavBar from "../NavBar.jsx";
import Footer from "../Footer.jsx";
import "../../assets/css/components/Home.css"
import {Button, Stack, Typography} from "@mui/material";
import MiddleContent from "./MiddleContent.jsx";
import DisplayData from "./DisplayData.jsx";
import {homeData} from "../../assets/HomeData/data.jsx";

export default function Home() {
	return (
		<Stack spacing={2}>
			<NavBar/>
			<MiddleContent/>
			<DisplayData data={homeData}/>
			<Footer/>
		</Stack>


	);
}