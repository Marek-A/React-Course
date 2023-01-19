import Carousel from 'react-bootstrap/Carousel';

function CarouselGallery() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://picsum.photos/id/870/500/200?grayscale"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Welcome to MilyGear</h3>
                    <p>Only quality products imported from Germany</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://picsum.photos/500/200?grayscale"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Make sure to use the coupon code for discount</h3>
                    <p>WELCOME!!2023</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://picsum.photos/seed/picsum/500/200?grayscale"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>We are international</h3>
                    <p>
                        We accept worldwide card payments
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselGallery