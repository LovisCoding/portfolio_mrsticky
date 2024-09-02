import {Dialog, DialogContent, DialogTitle, Link, Stack, Typography} from "@mui/material";
import {AiFillDiscord, AiFillInstagram, AiFillTikTok, AiFillYoutube} from "react-icons/ai";
import PropTypes from "prop-types";
import Reseau from "./Reseau.jsx";

export default function Contact({open, setOpen}) {
	return (
		<Dialog
			open={open}
			onClose={() => setOpen(false)}
		>
			<DialogTitle textAlign={'center'}>Contactez-moi</DialogTitle>
			<DialogContent>
				<Stack spacing={3} direction={{ xs: 'column', sm: 'row' }}>
					<Reseau img={<AiFillInstagram style={{fontSize: "40px", color:'black'}}/>} link={"https://www.instagram.com/mister.__.sticky/"} text={"@mister.__.sticky"}/>
					<Reseau img={<AiFillTikTok style={{fontSize: "40px", color: 'black'}}/>} link={"https://www.tiktok.com/@mister._.sticky_officiel"} text={"@mister._.sticky_officiel"}/>
					<Reseau img={<AiFillYoutube style={{fontSize: "40px", color:'black'}}/>} link={"https://www.youtube.com/channel/UC42VhwzWy2eQNk7QQokLYGQ"} text={"@Mr.Sticky"}/>
					<Reseau img={<AiFillDiscord style={{fontSize: "40px", color:'black'}}/>}  text={"@mr._.sticky"}/>
				</Stack>
			</DialogContent>
		</Dialog>
		)
}
Contact.propTypes = {
	open: PropTypes.bool.isRequired,
	setOpen: PropTypes.func.isRequired
}