import { Container, Row, Col } from 'react-bootstrap';
import Vitalii from '../Vitalii.jpg'

function About() {

	const about = {
		'dateBrint': 'DOB: 11.08.1981',
		'country': ' Ukraine, Kiev',
		'mobile': 'mobile: +38 (067) 298-85-65',
		'Email': 'Email:vdakyn@gmail.com'
	}
	console.log(about);

	return (
		<>

			<Container style={{ padding: '30px 0' }}>
				<Row>
					<Col md={7}>
						<img src={Vitalii} alt="vid" width={700} />
					</Col>
					<Col md={5}>
						<h1>Vitalii Diaki</h1>
						<h3>Front-End Developer</h3>
						<ul className='menu-home'>
							{Object.keys(about).map((elem, i) => {
								return <li key={i}>{about[elem]}</li>
							})}
						</ul>
					</Col>
				</Row>
			</Container>

		</>

	)

}

export default About;
