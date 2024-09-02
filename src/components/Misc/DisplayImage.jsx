import Zoom from "react-medium-image-zoom";
import {Grid} from "@mui/material";
import PropTypes from "prop-types";

export default function DisplayImage({img, key, id}) {

	let md = 4

	if (id === 'miniatures' || id === 'pp') {
		md = 3
	}
	return (
		<Grid item key={key} xs={4} sm={4} md={md} display={'flex'} justifyContent={'center'} display={'flex'} flexDirection={'column'} sx={{
			'& [data-rmiz]' : {
				height: '100%',
			},
			'& [data-rmiz-content="found"]' : {
				height: '100%',
			}
		}}>
			<Zoom key={key} >
				<img src={img}  key={key} width={500} style={{width:'100%', height:'100%', borderRadius:'10px',objectFit: 'cover'}}/>
			</Zoom>
		</Grid>
	)
}
DisplayImage.propTypes = {
	img: PropTypes.string.isRequired,
	key: PropTypes.number.isRequired,
	nbParLigne: PropTypes.number.isRequired,
}