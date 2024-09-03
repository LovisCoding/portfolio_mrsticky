import {Link, Stack, Typography} from "@mui/material";
import {AiFillInstagram} from "react-icons/ai";
import PropTypes from "prop-types";

export default function Reseau ({img, link, text}) {
	return (
		<Stack direction={'column'} display={'flex'} justifyContent={'center'} >
			<Link href={link ?? '#'} target={link ? "_blank" : ''} display={'flex'} justifyContent={'center'}>
				{img}
			</Link>
			<Typography variant={'p'} sx={{color: 'black', textAlign:'center'}}>{text}</Typography>
		</Stack>
	)
}
Reseau.propTypes = {
	img: PropTypes.node.isRequired,
	link: PropTypes.string,
	text: PropTypes.string.isRequired
}