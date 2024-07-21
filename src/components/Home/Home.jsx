import NavBar from "../NavBar.jsx";
import Footer from "../Footer.jsx";
import "../../assets/css/components/Home.css"
import {Button, Stack, Typography} from "@mui/material";
import {ReactTyped} from "react-typed";
import PictureData from "./PictureData.jsx";
import MiddleContent from "./MiddleContent.jsx";
import DisplayData from "./DisplayData.jsx";
import {data} from "../../assets/HomeData/data.jsx";

export default function  Home() {
	return (
		<Stack spacing={2}>
			<NavBar />
		<MiddleContent />
			<DisplayData data={data}/>
			<Footer />
		</Stack>


  );
}