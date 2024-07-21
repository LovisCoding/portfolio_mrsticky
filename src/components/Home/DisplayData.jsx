import PictureData from "./PictureData.jsx";
import {Grid, Stack} from "@mui/material";
import PropTypes from "prop-types";
export default function DisplayData({data}) {

	return(
		<Stack spacing={2} sx={{width: '100%'}}>
		{data.map((item, index) => {
			return(
				<PictureData
					key={index}
					title={item.title}
					subtitle={item.subtitle}
					img={item.img}
					imgDirection={index % 2 === 0 ? 'right' : 'left'}
				/>
			)
		})
		}
		</Stack>
	)
}
DisplayData.propTypes = {
	data: PropTypes.array.isRequired
}