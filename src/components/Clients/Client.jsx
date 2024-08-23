import PropTypes from "prop-types";
import {Divider, Stack, Typography} from "@mui/material";
import SectionImg from "../Creations/SectionImg.jsx";

export default function Client({title, subtitle, folder}) {
	const imgs =  import.meta.glob('/public/Clients/*/*.{png,jpg,jpeg,svg}', {eager: true,import: 'default'}	);

	const res = []
	let pp
	Object.keys(imgs).forEach((img) => {
		if (img.includes(folder)) {
			if (img.includes('pp')) pp = img
			else res.push(img)
		}
	})
	return (
		<Stack spacing={3} display={'flex'} alignItems={'center'} paddingY={5}>
			<img src={pp} alt={title} style={{maxWidth: '200px', height: 'auto', borderRadius: '50%', border: '4px solid black'}}/>
			<Stack>
				<Typography variant={'h4'} sx={{textAlign:'center'}}>{title}</Typography>
				<Typography variant={'h6'} sx={{textAlign:'center'}}>{subtitle}</Typography>
			</Stack>
			<Divider/>
			<SectionImg imgs={res} id={folder}/>
		</Stack>
	)
}
Client.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	folder: PropTypes.string.isRequired
}