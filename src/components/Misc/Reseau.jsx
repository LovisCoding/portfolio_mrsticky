import {Link, Stack, Typography} from "@mui/material";
import {AiFillInstagram} from "react-icons/ai";
import PropTypes from "prop-types";

export default function Reseau ({img, link, text}) {
	return (
		<Stack direction={'column'} display={'flex'} alignItems={'center'}>
			<Link href={link} target={"_blank"}>
				{img}
			</Link>
			<Typography variant={'p'}>{text}</Typography>
		</Stack>
	)
}
Reseau.propTypes = {
	img: PropTypes.node.isRequired,
	link: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired
}