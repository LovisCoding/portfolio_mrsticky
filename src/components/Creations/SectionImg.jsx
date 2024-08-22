import {Grid, Stack, Typography} from "@mui/material";
import Zoom from "react-medium-image-zoom";
import PropTypes from "prop-types";

export default function SectionImg({title,imgs, id}) {
	return (
		<Stack alignItems={'center'} display={'flex'} id={id} spacing={3} pt={4}>
			<Typography variant={'h2'}>{title}</Typography>
			<Grid container rowSpacing={5} columns={{ xs: 4, sm: 8, md: 12 }} columnSpacing={2} maxWidth={'100%'}  >
				{Object.keys(imgs).map((key, index) => (
					<Grid item key={index} xs={4} sm={4} md={4} display={'flex'} justifyContent={'center'}>
						<Zoom key={index}>
							<img  src={imgs[key]} alt={key} key={index} width={500} style={{maxWidth:'100%', maxHeight:'100%', borderRadius:'10px'}}/>
						</Zoom>
					</Grid>
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