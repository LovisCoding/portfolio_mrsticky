import Zoom from "react-medium-image-zoom";
import {Grid} from "@mui/material";
import PropTypes from "prop-types";

export default function DisplayImage({img, key}) {
	return (
		<Grid item key={key} xs={4} sm={4} md={4} display={'flex'} justifyContent={'center'}>
			<Zoom key={key}>
				<img src={img}  key={key} width={500} style={{maxWidth:'100%', maxHeight:'100%', borderRadius:'10px'}}/>
			</Zoom>
		</Grid>
	)
}
DisplayImage.propTypes = {
	img: PropTypes.string.isRequired,
	key: PropTypes.number.isRequired
}