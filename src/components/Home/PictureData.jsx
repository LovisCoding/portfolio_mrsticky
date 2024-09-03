import {Box, Button, Grid, Stack, useMediaQuery} from "@mui/material";
import PropTypes from "prop-types";
import { useTheme } from '@mui/material/styles';
import {useNavigate} from "react-router-dom";
import Zoom from "react-medium-image-zoom";
export default function PictureData({title, subtitle, imgDirection, img, link}) {
	const navigate = useNavigate()
	const theme = useTheme();
	const smDown =  useMediaQuery(theme.breakpoints.down('sm'))
	const sxGrid ={
		width: '100%',
		height: '100%',
		display: 'flex',
		justifyContent: smDown ? 'flex-start' : 'center',

	}
	const picture = (
		<Grid item xs={4} sm={4} md={6} key={'_picture'} sx={sxGrid}>
			<Zoom>
				<Box
					component="img"
					sx={{
						width: '100%',
						maxWidth: '800px',
						height: 'auto',
						borderRadius: '10px'
					}}
					alt={title+"_image"}
					src={img}

				/>
			</Zoom>

		</Grid>
	)
	const text = (
		<Grid item xs={4} sm={4} md={6} key={'_text'} sx={sxGrid} >
			<Stack spacing={2} sx={{height: '100%'}}>
				<h1 style={{fontWeight:'700', color: 'white'}}>{title}</h1>
				<h5 style={{color: 'grey'}}>{subtitle}</h5>
				<Button variant={'contained'} sx={{backgroundColor: 'white', alignSelf: 'baseline', color: 'black', '&:hover': {background: '#31bcb8'}}} onClick={() => navigate(link)}>
					Acceder
				</Button>
			</Stack>
		</Grid>
	)



	return (
		<Grid container columns={{xs: 4, sm:8, lg: 12}} spacing={2} columnSpacing={smDown ? 0 : 4} width={"100%"} sx={{display: 'flex', alignItems: 'center', paddingRight: 2}}>
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
	img: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired
}