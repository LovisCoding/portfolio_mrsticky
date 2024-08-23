import {Grid, Stack, Typography, useMediaQuery} from "@mui/material";
import Zoom from "react-medium-image-zoom";
import PropTypes from "prop-types";
import {useTheme} from "@mui/material/styles";
import DisplayImage from "../Misc/DisplayImage.jsx";

export default function SectionImg({title,imgs, id}) {
	const theme = useTheme();
	const smDown =  useMediaQuery(theme.breakpoints.down('sm'))
	return (
		<Stack alignItems={'center'} display={'flex'} id={id} spacing={3} pt={4}>
			{title ? (
				<Typography variant={'h2'} sx={{textAlign: 'center'}}>{title}</Typography>
			): ''}
			<Grid container rowSpacing={5} columns={{ xs: 4, sm: 8, md: 12 }} columnSpacing={smDown ? 0 : 2} maxWidth={'100%'}  >
				{Object.keys(imgs).map((key, index) => (
					<DisplayImage img={imgs[key]} key={index}/>
				))}
			</Grid>
		</Stack>
	)
}
SectionImg.propTypes = {
	title: PropTypes.string.isRequired,
	imgs: PropTypes.object.isRequired,
	id: PropTypes.string.isRequired,
}