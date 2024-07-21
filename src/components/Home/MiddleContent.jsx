import {ReactTyped} from "react-typed";
import {Button, Stack, Typography} from "@mui/material";

export default function MiddleContent() {
	return (
		<Stack spacing={2} alignItems={"center"} justifyContent={"center"} sx={{width: "100%", height: "calc(100vh - 86px)"}}>

			<ReactTyped
				strings={[
					"Besoin d'une Miniature ?",
					"Besoin d'un Chibi ?",
					"Besoin d'une Bannière ?",
					"Besoin d'une Photo de Profil ?",
				]}
				typeSpeed={60}
				backSpeed={40}
				className={'text-slider'}
				loop
			/>

			<Typography sx={{color: "grey"}} variant={"h6"}>Ils m'ont fait confiance</Typography>

			<Button variant={'contained'} sx={{backgroundColor: 'black'}}>
				Mes Clients
			</Button>
		</Stack>
		)

}