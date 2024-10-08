import {Grid, Stack, Typography, useMediaQuery} from "@mui/material";
import Zoom from "react-medium-image-zoom";
import PropTypes from "prop-types";
import {useTheme} from "@mui/material/styles";
import DisplayImage from "./DisplayImage.jsx";

export default function SectionImg({title,imgs, id, key}) {
	const theme = useTheme();
	const smDown =  useMediaQuery(theme.breakpoints.down('sm'))
	let md = 12
	if (id === 'pp') md = 15
	return (
		<Stack alignItems={'center'} display={'flex'} id={id} spacing={3} pt={4} width={"100%"}>
			{title ? (
				<Typography variant={'h2'} sx={{textAlign: 'center', color: 'white'}}>{title}</Typography>
			): ''}
			<Grid container rowSpacing={5} columns={{ xs: 4, sm: 8, md: md }} columnSpacing={smDown ? 0 : 2} maxWidth={'100%'} height={'100%'} display={'flex'} justifyContent={'center'} >
				{Object.keys(imgs).map((img, index) => (
					<DisplayImage img={imgs[img]} index={index} id={id} key={index}/>
				))}
			</Grid>
		</Stack>
	)
}
SectionImg.propTypes = {
	title: PropTypes.string,
	imgs: PropTypes.array.isRequired,
	id: PropTypes.string.isRequired,
	nbParLigne: PropTypes.number,
}