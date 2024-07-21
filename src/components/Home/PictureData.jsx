import 	Minia from '../../assets/img/Home/miniatures.png';
import {Box, Button, Grid, Stack, useMediaQuery} from "@mui/material";
import {data} from "../../assets/HomeData/data.jsx";
import PropTypes from "prop-types";
import { useTheme } from '@mui/material/styles';

export default function PictureData({title, subtitle, imgDirection, img}) {
	const sxGrid ={
		width: '100%',
		height: '100%',
		display: 'flex',
		justifyContent: 'center',

	}
	const picture = (
		<Grid item xs={4} sm={4} md={6} key={'_picture'} sx={sxGrid}>
			<Box
				component="img"
				sx={{
					width: '100%',
					height: 'auto',
					borderRadius: '10px'
				}}
				alt={title+"_image"}
				src={img}

			/>
		</Grid>
	)
	const text = (
		<Grid item xs={4} sm={4} md={6} key={'_text'} sx={sxGrid} >
			<Stack spacing={2} sx={{height: '100%'}}>
				<h1 style={{fontWeight:'700'}}>{title}</h1>
				<h5 style={{color: 'grey'}}>{subtitle}</h5>
				<Button variant={'contained'} sx={{backgroundColor: 'black', alignSelf: 'baseline'}}>
					Accéder
				</Button>
			</Stack>
		</Grid>
	)
	const theme = useTheme();
	const smDown =  useMediaQuery(theme.breakpoints.down('sm'))


	return (
		<Grid container columns={{xs: 4, sm:8, lg: 12}} spacing={2} columnSpacing={4} width={"100%"} sx={{display: 'flex', alignItems: 'center', padding: 2}}>
			{(imgDirection === 'right' && !smDown ) ? (
				<>
					{text}
					{picture}
				</>
			) : (
					<>
						{picture}
						{text}
					</>


				)}
		</Grid>



	)
}
PictureData.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	imgDirection: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired
}