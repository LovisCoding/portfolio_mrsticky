import {ReactTyped} from "react-typed";
import {Button, Stack, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

export default function MiddleContent() {
	const navigate = useNavigate()
	return (
		<Stack spacing={2} alignItems={"center"} justifyContent={"center"} sx={{width: "100%", height: "calc(100vh - 86px)"}}>

			<ReactTyped
				strings={[
					"Besoin d'une Miniature ?",
					"Besoin d'un Chibi ?",
					"Besoin d'une Banniere ?",
					"Besoin d'une Photo de Profil ?",
				]}
				typeSpeed={60}
				backSpeed={40}
				className={'text-slider'}
				loop
			/>

			<Typography sx={{color: "grey"}} variant={"h6"}>Ils m'ont fait confiance</Typography>

			<Button variant={'contained'} sx={{backgroundColor: 'black'}} onClick={()=> navigate('/clients')}>
				Mes Clients
			</Button>
		</Stack>
		)

}