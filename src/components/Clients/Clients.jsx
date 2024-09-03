import {clientsData} from "../../assets/ClientsData/clients.jsx";
import NavBar from "../Misc/NavBar.jsx";
import Footer from "../Misc/Footer.jsx";
import {Divider, Stack, Typography} from "@mui/material";
import Client from "./Client.jsx";
export default function Clients() {

	return (
		<>
			<NavBar/>
			<Stack spacing={4} paddingY={6}>
				<Typography variant={'h2'} sx={{textAlign: 'center', fontFamily: 'Lemon Days', color: 'white'}}>Mes Clients</Typography>
				<Divider/>
				<Stack spacing={2}>
					{clientsData.map((item, index) => {
						return(
							<Client
								key={index}
								title={item.title}
								subtitle={item.subtitle}
								folder={item.folder}
							/>
						)
					})
					}
				</Stack>

			</Stack>
			<Footer/>
		</>


	)
}