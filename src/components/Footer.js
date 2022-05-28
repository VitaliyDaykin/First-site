import { Container } from 'react-bootstrap';

function Footer() {

	const year = new Date().getFullYear();

	return (
		<>
			<Container fluid style={{ backgroundColor: '#212529', color: '#fff' }}>
				<Container style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
					<p>Copyright &copy; {year} year First site. </p>
				</Container>
			</Container>
		</>

	)

}

export default Footer;
