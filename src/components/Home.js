import Slider from "./Slider";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import vid from '../vid.jpg'




function Home() {

	return (
		<>
			<Slider />
			<Container fluid style={{ backgroundColor: '#f0f0f0' }}>
				<Container style={{ padding: '2rem 0', }}>
					<Row>
						<Col>
							<Card style={{ width: '18rem' }}>
								<Card.Img variant="top" src={vid} />
								<Card.Body>
									<Card.Title>Card Title</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the bulk of
										the card's content.
									</Card.Text>
									<Button variant="primary">Go somewhere</Button>
								</Card.Body>
							</Card>
						</Col>
						<Col>
							<Card style={{ width: '18rem' }}>
								<Card.Img variant="top" src={vid} />
								<Card.Body>
									<Card.Title>Card Title</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the bulk of
										the card's content.
									</Card.Text>
									<Button variant="primary">Go somewhere</Button>
								</Card.Body>
							</Card>
						</Col>
						<Col>
							<Card style={{ width: '18rem' }}>
								<Card.Img variant="top" src={vid} />
								<Card.Body>
									<Card.Title>Card Title</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the bulk of
										the card's content.
									</Card.Text>
									<Button variant="primary">Go somewhere</Button>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
				<Container style={{ paddingBottom: '30px' }}>
					<Row>
						<Col md={7}>
							<img src={vid} alt="vid" height={400} />
						</Col>
						<Col md={5}>
							<h2>First site</h2>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni sit nesciunt, velit doloribus vero nostrum expedita atque necessitatibus recusandae facilis rem quibusdam eos, labore possimus. Perspiciatis harum a optio nostrum.</p>
						</Col>
					</Row>
				</Container>
			</Container>
		</>

	)

}

export default Home;
