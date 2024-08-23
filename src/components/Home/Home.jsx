import NavBar from "../Misc/NavBar.jsx";
import Footer from "../Misc/Footer.jsx";
import "../../assets/css/components/Home.css"
import { Stack} from "@mui/material";
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