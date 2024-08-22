import {Grid, Stack, Typography} from "@mui/material";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css'
import SectionImg from "./SectionImg.jsx";
export default function Bannieres() {
	const imgs =  import.meta.glob('/public/Bannieres/*.{png,jpg,jpeg,svg}', {eager: true,import: 'default'}	);
	return (
			<SectionImg title={'Bannières'} imgs={imgs} id={'bannieres'}/>
	)
}