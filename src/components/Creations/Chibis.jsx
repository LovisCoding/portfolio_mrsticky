import 'react-medium-image-zoom/dist/styles.css'
import SectionImg from "./SectionImg.jsx";
export default function Chibis() {
	const imgs =  import.meta.glob('/public/Chibis/*.{png,jpg,jpeg,svg}', {eager: true,import: 'default'}	);
	return (
			<SectionImg title={'Chibis'} imgs={imgs} id={'chibis'}/>
	)
}