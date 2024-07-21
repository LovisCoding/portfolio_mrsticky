import {Stack, Typography} from "@mui/material";
import "../assets/css/components/Footer.css";
import { FaInstagram, FaTiktok, FaYoutube} from "react-icons/fa";
import {AiFillInstagram} from "react-icons/ai";
export default function Footer() {
	return (
		<div className={"footer"}>
			<Stack spacing={1}>
				<Typography variant={"h6"}>Portfolio de Mr.Sticky</Typography>
				<Stack direction={"row"} spacing={3} sx={{color: "grey"}} justifyContent={"center"} className={'socials'}>
					<a href={"https://www.youtube.com/channel/UC42VhwzWy2eQNk7QQokLYGQ"} target={"_blank"} style={{color: "inherit"}}>
						<FaYoutube style={{fontSize: "20px"}}/>
					</a>
					<a href={"https://www.instagram.com/mister.__.sticky/"} target={"_blank"} style={{color: "inherit"}}>
						<AiFillInstagram style={{fontSize: "20px"}}/>
					</a>
					<a href={"https://www.tiktok.com/@mister._.sticky_officiel"} target={"_blank"} style={{color: "inherit"}}>
						<FaTiktok style={{fontSize: "20px"}}/>
					</a>

				</Stack>
				<Typography variant={"body2"} color={"grey"}>© 2024{' '}-{' '}
					<a href={"https://github.com/LovisCoding"} target={"_blank"} style={{color: "grey"}}>
						LovisCoding
					</a>
				</Typography>
			</Stack>
		</div>
	)
}