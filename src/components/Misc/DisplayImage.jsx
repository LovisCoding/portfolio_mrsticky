import Zoom from "react-medium-image-zoom";
import {Grid} from "@mui/material";
import PropTypes from "prop-types";

export default function DisplayImage({img, index, id}) {

	let md = 4

	if (id === 'miniatures' || id === 'pp') {
		md = 3
	}
	return (
		<Grid item key={index} xs={4} sm={4} md={md} display={'flex'} justifyContent={'center'} display={'flex'} flexDirection={'column'} sx={{
			'& [data-rmiz]' : {
				height: '100%',
			},
			'& [data-rmiz-content="found"]' : {
				height: '100%',
			}
		}}>
			<Zoom key={index} >
				<img src={img}  key={index} width={500} style={{width:'100%', height:'100%', borderRadius:'10px',objectFit: 'cover'}}/>
			</Zoom>
		</Grid>
	)
}
DisplayImage.propTypes = {
	img: PropTypes.string.isRequired,
	index: PropTypes.number.isRequired,
	nbParLigne: PropTypes.number,
}