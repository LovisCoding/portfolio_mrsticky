
import 'react-medium-image-zoom/dist/styles.css'
import SectionImg from "../Misc/SectionImg.jsx";
export default function PP() {
	const imgs =  import.meta.glob('/public/PP/*.{png,jpg,jpeg,svg}', {eager: true,import: 'default'}	);
	return (
		<SectionImg title={'Photos de Profil'} imgs={imgs} id={'pp'}/>
	)
}