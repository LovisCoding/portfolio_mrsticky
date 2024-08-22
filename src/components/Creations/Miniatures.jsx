import {Grid, Stack, Typography} from "@mui/material";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css'
import SectionImg from "./SectionImg.jsx";
export default function Miniatures() {
	const imgs =  import.meta.glob('/public/Miniatures/*.{png,jpg,jpeg,svg,webp}', {eager: true,import: 'default'}	);
	return (
			<SectionImg title={'Miniatures'} imgs={imgs} id={'miniatures'}/>
	)
}