import { Carousel } from 'react-bootstrap';
import vid from '../vid.jpg'

function Slider() {

	return (
		<>
			<Carousel>
				<Carousel.Item style={{ 'height': '600px' }}>
					<img
						className="d-block w-100 h-100"
						src={vid}
						alt="First slide"
					/>
					<Carousel.Caption>
						<h3>First slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item style={{ 'height': '600px' }}>
					<img
						className="d-block w-100 h-100"
						src={vid}
						alt="First slide"
					/>
					<Carousel.Caption>
						<h3>First slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item style={{ 'height': '600px' }}>
					<img
						className="d-block w-100 h-100"
						src={vid}
						alt="First slide"
					/>
					<Carousel.Caption>
						<h3>  slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</>

	)

}

export default Slider;
